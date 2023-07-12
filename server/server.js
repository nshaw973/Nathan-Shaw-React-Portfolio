require('dotenv').config();
// Express and ApolloServer for GraphQL
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// In case of cors requirement
const cors = require('cors');

const path = require('path');
// GraphQL
const { typeDefs, resolvers } = require('./schemas');
// Connect to Database
const db = require('./config/connection');
const app = express();
// For Deployment and local enviornment
const PORT = process.env.PORT || 3001;
// Login Authorization
const { authMiddleware } = require('./utils/auth.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();

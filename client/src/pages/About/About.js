import React from 'react';
import './style.css';
// Image
import PROFILE_PIC from './images/profile.jpg';
import PIC_1 from './images/about-1.jpg';

export default function About() {
  return (
    <section>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse shadow mt-5 bg-base-200">
          <img
            src={PROFILE_PIC}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="nathan-shaw"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello! I'm Nathan Shaw!</h1>
            <h3 className="ml-10 text-xl blue-text">Junior Web Developer</h3>
            <p className="py-6">
              Recent Graduate from the University of California, Irvine's Coding
              Bootcamp Course.
            </p>
            <p>
              I'm a Junior Full-stack web developer, who works primarly with
              Javascript and the MERN stack, but I have also done the MVC
              approach, using MySQL (sequelize), handlebars, and Express.js and
              Node.JS.
            </p>
          </div>
        </div>
      </div>
      <div className="hero mt-4">
        <div className="hero-content flex-col lg:flex-row shadow bg-base-200">
          <div>
            <h1 className="text-3xl font-bold">About me.</h1>
            <p className="ml-3">
              <h5 className="font-bold underline">Audio Engineer</h5>
              Originally went to Orange Coast College to work on my Associates.
              While attending OCC, I took classes in audio engineering, on both
              music and movies/tv. Worked as an audio engineer at a recording
              studio out in Lake Forest for a few years working with clients on
              their passion projects. I still do audio engineering as a
              freelancer, working with clientelle i've built up throught the
              years. As an engineer these were the sort of things I worked on:
              <ul>
                <li>
                  Setting up a session by planning ahead with the band on what
                  they'll need recorded
                </li>
                <li>
                  Working hands on with the client to help turn their project
                  into something they can be proud of
                </li>
                <li>
                  Working alongside a producer who would give me orders on what
                  they would like done for the mix
                </li>
                <li>
                  On occasion mastering their mixes for finishing touches, to
                  have it be ready for consumers
                </li>
              </ul>
            </p>
            <p className="ml-3">
              <h5 className="font-bold underline">
                Whole Foods Assistant Team Leader
              </h5>
              I also worked occasionally at Wholefoods market as a regular team
              member, only to move up to order writer for the alcohol
              department, to my current role as and Assitant Team Leader in
              charge of the Specialty department. My responsibilities as an
              Assistant Team Leader was:
              <ul>
                <li>Managing, and cultivating the team</li>
                <li>Financials</li>
                <li>Staying on top of Metrics</li>
                <li>
                  Executing merchandising and promo deals passed down by the
                  company
                </li>
                <li>
                  Being ready to fill in any gaps missing within the departments
                </li>
                <li>
                  Problem-Solving issues on any level, be it admin work and
                  creating action plans for poor performance, or how to be there
                  for the customers needs.
                </li>
              </ul>
            </p>
            <p className="ml-3">
              <h5 className="font-bold underline">Coding Bootcamp</h5>
              Wanting to make a career change, I signed up for the University of
              California, Irvine's Coding Bootcamp course. Where I learned to
              grow into becoming a junior full-stack developer, with no prior
              knowledge of any sort of coding, not even HTML. Here is what I
              learned while taking the bootcamp course.
              <ul>
                <li>Started of learning HTML and CSS all raw</li>
                <li>Then moved onto learning the basics of Javascript</li>
                <li>
                  After creating basic front end sites, we learned Bootstrap and
                  Web APIs
                </li>
                <li>
                  Learned to use Node.js for the backend, alongside Express, to
                  create some projects that used Inquierer
                </li>
                <li>
                  Began advancing with Javacript by learning Object Oriented
                  Programing
                </li>
                <li>
                  Moved onto learning MySQL and how to use MySQL syntax, before
                  moving on to Sequelize to use Javascript with MySQL
                </li>
                <li>
                  With the heavy amount of time Spend with MySQL, learning
                  Object Relational Mapping, we learned how to deal with RESTful
                </li>
                <li>
                  Worked with the MVC design using MySQL, Sequelize,
                  Express/Node, and HandleBars.js
                </li>
                <li>
                  Lastly we moved on to NoSQL and learned MongoDB before moving
                  on to React, in order to complete the MERN Stack design. While
                  also learning about Progressive Web Applications.
                </li>
              </ul>
            </p>
            <p className="ml-3">
              <h5 className="font-bold underline">My Goals</h5>
              Current goals are to find a great company to help hone, and learn
              new skills. While at the same time creating my own projects on the
              side for my own personal entertainment. For now I'm looking into
              learning Next.js, and C++ for creating small games.
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse shadow mt-5 bg-base-200">
          <img className="max-w-sm rounded-lg shadow-2xl" alt="nathan-shaw" />
          <div>
            <h1 className="text-3xl font-bold">On a Personal Level</h1>
            <h5>Hobbies</h5>
            <p className="py-6">
              I personally enjoy to learn new hobbies on occasion, but here is a
              list of some things I enjoy personally.
              <ul>
                <li>
                  Playing music: I primarly play bass guitar, but I also dabble
                  with guitar, piano, classical guitar, and mandolin!
                </li>
                <li>
                  I enjoy camping, which will explain the random outdoor pics!
                  The pics i post up here are pics I took while out an about.
                  Sequoia is my go to place
                </li>
                <li>
                  Gaming is a given. Even built my own PC, and took some classes
                  at OCC that involved the internet of things, to help turn my
                  house into an entertainment zone!
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
// Images
import MARKET_PLACE_IMAGE from './images/mainpage.PNG';
import TECH_BLOG_IMAGE from './images/tech-blog.PNG';
import WEATHER_API_IMAGE from './images/weather-forecast.PNG';
import PWA_IMAGE from './images/progressive-web-app.PNG';
import SOCIAL_NETWORK_IMAGE from './images/Social-network-api.PNG';
import E_COMMERCE_IMAGE from './images/e-commerce.PNG';

export default function Portfolio() {
  return (
    <div className="container mx-auto p-4 custom-port-container">
      <h3 className="text-xl mb-2">Here is a list of some of my work:</h3>
      <ul className="all-projects">
        {/* Marketplace */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${MARKET_PLACE_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">The MarketPlace</h1>
            <a
              href="https://github.com/nshaw973/The-Marketplace"
              rel="external"
            >
              Github Repo
            </a>
            <a href="https://group-3-marketplace.herokuapp.com/" rel="external">
              Deployed Site
            </a>
          </div>
        </li>
        {/* Tech Blog */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${TECH_BLOG_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">Tech Blog Model</h1>
            <a
              href="https://github.com/nshaw973/Challenge-12-Tech-Blog"
              rel="external"
            >
              Github Repo
            </a>
            <a
              href="https://challenge-12-tech-blog.herokuapp.com/"
              rel="external"
            >
              Deployed Site
            </a>
          </div>
        </li>
        {/* Weather API */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${WEATHER_API_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">Weather API Model</h1>
            <a
              href="https://github.com/nshaw973/Challenge-6-Weather-Forecast"
              rel="external"
            >
              Github Repo
            </a>
            <a
              href="https://nshaw973.github.io/Challenge-6-Weather-Forecast/"
              rel="external"
            >
              Deployed Site
            </a>
          </div>
        </li>
        {/* PWA Model */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${PWA_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">
              Progressive Web App Text Editor Model
            </h1>
            <a
              href="https://github.com/nshaw973/Progressive-Web-App-Text-Editor-Model"
              rel="external"
            >
              Github Repo
            </a>
            <a
              href="https://infinite-falls-29096.herokuapp.com/"
              rel="external"
            >
              Deployed Site
            </a>
          </div>
        </li>
        {/* Social Network API */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${SOCIAL_NETWORK_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">
              Social Network API Model
            </h1>
            <a
              href="https://github.com/nshaw973/Social-Network-API-Model"
              rel="external"
            >
              Github Repo
            </a>
            <a
              href="https://drive.google.com/file/d/1p8wq2StcBfobocv8wBX5VNUiC1k-T4AF/view"
              rel="external"
            >
              Video Demo
            </a>
          </div>
        </li>
        {/* E-Commerce */}
        <li
          className="port-containers bg-cover bg-center rounded-3xl border-2 border-black"
          style={{ backgroundImage: `url(${E_COMMERCE_IMAGE})` }}
        >
          <div className="off on w-full h-full flex flex-col justify-center items-center rounded-3xl border-2 border-black">
            <h1 className="text-black font-bold text-2xl">
              E-Commerce Back-End Model
            </h1>
            <a
              href="https://github.com/nshaw973/Challenge-11-E-Commerece-Back-End"
              rel="external"
            >
              Github Repo
            </a>
            <a
              href="https://drive.google.com/file/d/1zyDIBKaiFkmxVGMezTb17mpDJKV0hP9c/view"
              rel="external"
            >
              Video Demo
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

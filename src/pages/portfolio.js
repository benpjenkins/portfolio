/* eslint-disable prettier */

import React from "react"
import reactfx from '../images/reactfx.png'
import gracefulShoveler from '../images/gracefulShoveler.png'

import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
const Portfolio = () => (
  <MainLayout>
    <SEO title="Portfolio" />
    <h2>React FX - Sole Developer</h2>
    <h5>Realtime audio processing emulating electric guitar effects.</h5>
    <img src={reactfx} alt="App screenshot" />
    <p>
      React FX uses React, ToneJS, and Styled Components to replicate the
      experience of using electric guitar effects pedals. I only used function
      components so that I could learn Hooks to manage state and implement a
      custom data layer modeled after Redux.
    </p>
    <h2>Graceful Shoveler - Developer</h2>
    <h5>
      A fully functional e-commerce website selling all varieties of shovels.
    </h5>
    <img src={gracefulShoveler} alt="App screenshot" />
    <p>
      This project was completed by a team of four in nine days as part of the
      Grace Shopper project during our time at Fullstack Academy. My
      contributions include, but are not limited to:
    </p>
    <ul>
      <li>
        Developing front end components to display reviews and implement
        checkout.
      </li>
      <li>
        Defining all database models and associations and implementing routes
        for cart, checkout, and reviews.
      </li>
      <li>Writing full stack tests using Mocha, Chai, and Enzyme.</li>
    </ul>
  </MainLayout>
)

export default Portfolio

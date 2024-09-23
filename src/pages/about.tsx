import React from "react";
import { Navbar } from '../components/Navbar/Navbar';

import './styles/about.css';

const About = () => {
  return (
    <>
        <Navbar />
        <section className='wrapper'>
          <p>
            NextJS Framework Workshop.
            <br />
            Products Shop for PGD.
          </p>
        </section>
    </>
  );
};

export default About;
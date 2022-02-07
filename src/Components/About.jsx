import React from 'react';
import aboutimage from '../images/about.png'

function About() {
  return <div id='about'>

<div className="about-image">
    <img src={aboutimage} alt="" />
</div>
<div className="about-text">
    <h1>LEARN MORE ABOUT US</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe aspernatur cupiditate odit similique aliquid voluptatum accusantium alias in hic provident veniam, error iste, eum quia aut amet dolorem atque?</p>
</div>
  </div>;
}

export default About;

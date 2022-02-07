import React from 'react';
import Featurbox from './Fraturebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return <div id='features'>
      <h1>Features</h1>
    <div className="a-container">
        <Featurbox image={fimage1} title="WeightLifting"/>
        <Featurbox image={fimage2} title="Specific Muscle"/>
        <Featurbox image={fimage3} title="Flex Your Muscle"/>
        <Featurbox image={fimage4} title="Cardio Exercise"/>
    </div>
  </div>;
}

export default Feature;

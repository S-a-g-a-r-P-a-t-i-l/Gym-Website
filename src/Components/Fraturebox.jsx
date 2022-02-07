import React from 'react';

function Fraturebox(props) {
  return <div className='a-box'>
      <div className="a-b-img">
        <img src={props.image} alt="" />  
      </div>
      <div className="a-b-text">
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia velit, cupiditate quaerat voluptatibus minima incidunt in atque veniam? Possimus labore minima ipsam, reprehenderit atque ipsa facere placeat ex aspernatur!</p>
      </div>

  </div>;
}

export default Fraturebox;

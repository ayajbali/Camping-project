import React from 'react';
import video from '../../assets/Hospital Ad Video Template (Editable).mp4';
import './Home.scss'



const HomeP =()=> {
  return (
    <section className='home'>
    <div className="secContainer container">
    
    <div className="homeContent container">
    <div className="textDiv">
    <span className="smallText">
    Our Packages
    </span>
    <h1 className="homeTitle">
    Search your Holiday
    </h1>
    <button className='btn'><a href='#'> Explore Now</a></button>
    I
    </div>
    </div>


    <div className=" homeCard grid">
        <div className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder='Dream Destination' />
        </div>
        <div className="distDiv">
          <label htmlFor="distance">distance</label>
          <input type="text" placeholder='11/Meters'/>
        </div>
          <div className="priceDiv">
            <label htmlFor="distance">price</label>
            <input type="text" placeholder='$102-$123'/>
          </div>

<button className='btn'><a href='#'> Search</a></button>


</div>
    </div>

    </section>
    
);


  
}

export default HomeP

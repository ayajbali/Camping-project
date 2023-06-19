import React from 'react';
import './main.scss';
import img from '../../assets/annexe-camping-2022.jpg';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { BsArrowLeftShort, BsArrowRightShort, BsDot} from 'react-icons/bs';
import Animations from '../animation/Animation.js';
const Data = [
  {
    id: 1,
    imgsrc: img,
    destTitle: 'Changed',
    Location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance Bora Bora is one of the best travel destinations in the World This place is known for its luxurious stays and adventurous activities.',
  },
  {
    id: 2,
    imgsrc: img,
    destTitle: 'Forest Tales',
    Location: 'Big Bear Lake',
    grade: 'NATURE ADVENTURE',
    description: 'Enjoy the great outdoors with these classic forest tales! From friendly woodland creatures to spooky ghost stories, these stories will delight campers of all ages.'
  },
  {
    id: 3,
    imgsrc: img,
    destTitle: 'Beach Adventures',
    Location: 'Santa Cruz',
    grade: 'WATER SPORTS',
    description: 'Spend your days at the beach and your nights reading these exciting adventure stories! From surfing to sailing, there\'s something for everyone in this collection.'
  },
  {
    id: 4,
    imgsrc: img,
    destTitle: 'Mountain Legends',
    Location: 'Rocky Mountains',
    grade: 'EXTREME SPORTS',
    description: 'Get your adrenaline pumping with these thrilling tales of mountain climbing, skiing, and snowboarding! Perfect for campers who love to push themselves to the limit.'
  }



];

function Maines() {
  return (
    <section className='main container section '>
    <div className='pup'>

    
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      


    
        </div>
    
    
      <div className="secContent  ">
     

    
        {Data.map((item,index) => (
        
        
          <div key={item.id} className="mainContent ">
            <div className="singleDestination">
            <div className="destImage">
            <img src={item.imgsrc} alt="Image title" />
            <div className="overlayInfo">
              <h3> {item.grade} </h3>
                <p>
                {item.description}
                </p>
                <BsArrowRightShort className='icon'/>
                </div>
                </div>
                <div className='destFooter'>
                <div className='number'>0{item.id}
                </div>
                <div className='desText flex'>
                  <h6>{item.Location}</h6>
                  <span className='flex'>{item.fees}<span className='dot'><BsDot className='icon'/></span></span>
                </div>

                </div>
                </div>
                </div>
                
              
        ))}

        
        </div>



        <div className='iconDiv'>
          
          <BsArrowLeftShort className='icon '/>
          <BsArrowRightShort className='icon '/>
        </div>

        
    </section>
  );
}

export default Maines;

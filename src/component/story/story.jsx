import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

const Story = () => {
  const Data = [
    {
      id: 1,
      imgsrc: 'image1.jpg',
      destTitle: 'Destination 1',
      Location: 'Location 1',
      grade: 'A',
      description: 'Description 1',
    },
    {
      id: 2,
      imgsrc: 'image2.jpg',
      destTitle: 'Destination 2',
      Location: 'Location 2',
      grade: 'B',
      description: 'Description 2',
    },
    // Add more data objects as needed
  ];

  return (
    <section className="maina container section">
      <div className="secTitle">
        <h3 className="title">your stories</h3>
      </div>
      <div className="secContents grid">
        {Data.map((item, index) => (
          <div key={item.id} className="singleDestination">
            <div className="imageDiv">
              <img src={item.imgsrc} alt={item.destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{item.destTitle}</h4>
              <span className="continent flex">
                <BsFillPersonLinesFill className="icon" />
                <span className="name">{item.Location}</span>
              </span>
              <div className="fees flex">
                <div className="garde">
                  <span>{item.grade}</span>
                </div>
              </div>
              <div className="desc">
                <p>{item.description}</p>
              </div>
              <button className="btn flex">
                details <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;

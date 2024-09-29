import React from 'react';
import {SubHeading} from '../../components'
import {images, data} from '../../constants'
import './Laurels.css';

const AwardCard = ({award:{title,imgUrl, subtitle}})=>{
  return (
    <div className="app__laurels_award-card">
      <img src={imgUrl} alt="award image"/>
      <div className="app__laurels_award-card_content">
        <p className='p__cormorant' style={{color:"#dccab7"}} >{title}</p>
        <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>
  )
}


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award)=> <AwardCard award={award} /> )}
        </div>
    </div>

    <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels image" />
    </div>

  </div>
);

export default Laurels;

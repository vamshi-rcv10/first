import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {images} from '../../constants';
import {SubHeading} from '../../components'
import './Gallery.css';

const GallaryImage = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallary = ()=>{
  const refImage = useRef()
  const scroll = (direction)=>{
    const {current} = refImage
    if(direction=== 'left'){
      current.scrollLeft -=300
    }else{
      current.scrollLeft +=300
    }
  }
  return (
    <div className="app__gallary flex__center app__wrapper">
      <div className="app__gallary-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam voluptate totam. Deserunt mollitia laboriosam, enim quia dolores praesentium at?
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallary-image">
        <div className="app__gallary-image-container" ref={refImage}>
          {GallaryImage.map((image)=> (
            <div className="app__gallary-image_card flex__center">
              <img src={image} alt="gallary image" />
              <BsInstagram color='#fff' className='app__gallary-icon'/>
            </div>
          ))}
        </div>
        <div className="app__gallary-image-overlay">
        <BsArrowLeftShort className='overlay-icon' onClick={()=> scroll('left')} />
        <BsArrowRightShort className='overlay-icon' onClick={()=> scroll('right')}/>
        </div>
      </div>
    </div>
  )
}
export default Gallary
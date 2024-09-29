import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__content app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img app__header-image">
        <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;

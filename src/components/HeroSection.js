import React from 'react';
import '../App.css';
import { Button } from './Button';
import './/HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Reference video directly from the public folder */}
      <video src={process.env.PUBLIC_URL + '/Videos/video-2.mp4'} autoPlay loop muted />
      
      <h1>TITLE</h1>
      <p>Strapline</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROMPT
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          PLAY TRAILER <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection

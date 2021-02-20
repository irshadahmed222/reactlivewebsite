import React from 'react';
import Common from './Common';
import web from './images/about.svg';

const About = () =>{
  return(
    <>
    <Common name="Welcom to About Us" 
    imgsrc={web} 
    visit ="/contact" 
    btname="Contact Now" />
    </>
  )
}
export default About;
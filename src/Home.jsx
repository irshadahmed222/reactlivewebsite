import React from 'react';
import Common from './Common';
import web from './images/growth.svg';

const Home = () =>{
  return(
    <>
    <Common name="Grow your business with Us" 
    imgsrc={web} 
    visit ="/services" 
    btname="Get Started" />
    </>
  )
}
export default Home;
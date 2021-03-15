import React from 'react';
import web from "../src/image/campaign-creators-iEiUITs149M-unsplash.jpg";
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import Commom from "./Commom";

const About = () => {
  return(
    <>
      <Commom 
       name="Welcome to About page" 
       imgsrc={web} 
       visit="/contact" 
       btname="Contact Now" 
       />
    </>
  );
};

export default About;

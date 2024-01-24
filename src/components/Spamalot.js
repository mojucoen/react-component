import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    // Create an array with 500 instances of the Spam component
    const spamArray = Array.from({ length: 500 }, (_, index) => <Spam key={index} />);
  
    return (
      spamArray
    );
  };
export default Spamalot


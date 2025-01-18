

import React, { useEffect, useState } from 'react';
import WebCourse from '../components/WebCourse/WebCourse';
import Grafic from '../components/Grafic/Grafic';
import ScratchSection from '../components/ScratchSection/ScratchSection';

const Courses = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/prices')
      .then(response => response.json())
      .then(data => {
        console.log('Полученные цены:', data); 
        setPrices(data); 
      });
  }, []);

  return (
    <>
      <WebCourse price={prices.WebCourse} />
      <Grafic price={prices.Grafic} />
      <ScratchSection price={prices.ScratchSection} />
    </>
  );
};

export default Courses;

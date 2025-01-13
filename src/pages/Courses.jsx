// import React from 'react'
// import WebCourse from '../components/WebCourse/WebCourse'
// import Grafic from '../components/Grafic/Grafic'
// import ScratchSection from '../components/ScratchSection/ScratchSection'

// const Courses = () => {
//   return (
//     <>
//     <WebCourse price="→1.400.000сум"  />
//     <Grafic  price="→1.200.000сум"/>
//     <ScratchSection price="→1.100.000сум" />
//     </>
//   )
// }

// export default Courses
import React, { useEffect, useState } from 'react';
import WebCourse from '../components/WebCourse/WebCourse';
import Grafic from '../components/Grafic/Grafic';
import ScratchSection from '../components/ScratchSection/ScratchSection';

const Courses = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const storedPrices = JSON.parse(localStorage.getItem("prices"));
    setPrices(storedPrices);
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

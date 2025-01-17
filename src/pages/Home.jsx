
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Windows from '../components/Windowsm/Windows';
import Partners from '../components/Partners/Partners';
// import WebCourse from '../components/WebCourse/WebCourse';
// import ScratchSection from '../components/ScratchSection/ScratchSection';
// import Grafic from '../components/Grafic/Grafic';
// import Branches from '../components/Branches/Branches';
import Certificate from '../components/Certificate/Certificate';

const Home = () => {
  // const defaultPrices = {
  //   WebCourse: "→1.400.000сум",
  //   Grafic: "→1.200.000сум",
  //   ScratchSection: "→1.100.000сум",
  // };

  // const [prices, setPrices] = useState(defaultPrices);

  // useEffect(() => {
  //   const storedPrices = JSON.parse(localStorage.getItem("prices"));
  //   if (storedPrices) {
  //     setPrices(storedPrices);
  //   } else {
  //     localStorage.setItem("prices", JSON.stringify(defaultPrices));
  //   }
  // }, []);

  return (
    <>
      <Hero />
      <Windows />
      {/* <WebCourse price={prices.WebCourse} />
      <Grafic price={prices.Grafic} />
      <ScratchSection price={prices.ScratchSection} /> */}
      <Certificate/>
      <Partners />
    </>
  );
};

export default Home;

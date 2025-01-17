

// import React, { useEffect, useState } from 'react';
// import WebCourse from '../components/WebCourse/WebCourse';
// import Grafic from '../components/Grafic/Grafic';
// import ScratchSection from '../components/ScratchSection/ScratchSection';

// const Courses = () => {
//   const [prices, setPrices] = useState({});

//   useEffect(() => {
//     const storedPrices = JSON.parse(localStorage.getItem("prices"));
//     setPrices(storedPrices);
//   }, []);

//   return (
//     <>
//       <WebCourse price={prices.WebCourse} />
//       <Grafic price={prices.Grafic} />
//       <ScratchSection price={prices.ScratchSection} />
//     </>
//   );
// };

// export default Courses;
import React, { useEffect, useState } from 'react';
import WebCourse from '../components/WebCourse/WebCourse';
import Grafic from '../components/Grafic/Grafic';
import ScratchSection from '../components/ScratchSection/ScratchSection';

const Courses = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Подключено к WebSocket серверу');
    };

    ws.onmessage = (event) => {
      const updatedPrices = JSON.parse(event.data);
      console.log('Обновленные цены:', updatedPrices); // Логируем обновления

      setPrices(updatedPrices); // Обновляем состояние с новыми данными
    };

    return () => {
      ws.close();
    };
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

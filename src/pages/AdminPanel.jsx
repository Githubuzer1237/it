

// import React, { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   const [prices, setPrices] = useState({});
//   const [saveStatus, setSaveStatus] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/prices')
//       .then(response => response.json())
//       .then(data => setPrices(data));
//   }, []);

//   const updatePrice = (key, value) => {
//     const updatedPrices = { ...prices, [key]: value };
//     setPrices(updatedPrices);

//     fetch('http://localhost:5000/api/prices', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ course: key, price: value }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.message);
//         setSaveStatus(true);
//         setTimeout(() => {
//           setSaveStatus(false);
//         }, 2000);
//       });
//   };

//   return (
//     <div style={{ padding: '100px' }}>
//       <h1>Панель администратора</h1>
//       <div>
//         <label>
//           WebCourse:
//           <input
//             type="text"
//             value={prices.WebCourse || ''}
//             onChange={(e) => updatePrice("WebCourse", e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Grafic:
//           <input
//             type="text"
//             value={prices.Grafic || ''}
//             onChange={(e) => updatePrice("Grafic", e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           ScratchSection:
//           <input
//             type="text"
//             value={prices.ScratchSection || ''}
//             onChange={(e) => updatePrice("ScratchSection", e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <button disabled={saveStatus}>
//           {saveStatus ? 'Сохранено' : 'Сохранить изменения'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState } from 'react';

const AdminPanel = () => {
  const [prices, setPrices] = useState({});

  const updatePrice = (key, value) => {
    const updatedPrices = { ...prices, [key]: value };
    setPrices(updatedPrices);

    // Логируем, что цены обновлены
    console.log('Обновленные цены в админке:', updatedPrices);

    fetch('http://localhost:5000/api/prices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course: key, price: value }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Логируем ответ от сервера
      });
  };

  return (
    <div style={{ padding: '100px' }}>
      <h1>Панель администратора</h1>
      <div>
        <label>
          WebCourse:
          <input
            type="text"
            value={prices.WebCourse || ''}
            onChange={(e) => updatePrice("WebCourse", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Grafic:
          <input
            type="text"
            value={prices.Grafic || ''}
            onChange={(e) => updatePrice("Grafic", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          ScratchSection:
          <input
            type="text"
            value={prices.ScratchSection || ''}
            onChange={(e) => updatePrice("ScratchSection", e.target.value)}
          />
        </label>
      </div>
      <div>
        <button>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default AdminPanel;

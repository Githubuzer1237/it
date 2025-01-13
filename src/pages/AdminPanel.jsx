
// import React, { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   const [prices, setPrices] = useState({});
//   const [updated, setUpdated] = useState(false);

//   useEffect(() => {
//     const storedPrices = JSON.parse(localStorage.getItem("prices"));
//     setPrices(storedPrices || {});
//   }, []);

//   const updatePrice = (key, value) => {
//     const updatedPrices = { ...prices, [key]: value };
//     setPrices(updatedPrices);
//     localStorage.setItem("prices", JSON.stringify(updatedPrices));

//     setUpdated(true);
//     setTimeout(() => {
//       setUpdated(false);
//     }, 2000); 
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
//             style={{ backgroundColor: updated ? '#d4edda' : 'white' }}
           
            
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
//             style={{ backgroundColor: updated ? '#d4edda' : 'white' }} 
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
//             style={{ backgroundColor: updated ? '#d4edda' : 'white' }} 

//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [prices, setPrices] = useState({});
  const [saveStatus, setSaveStatus] = useState(false);

  useEffect(() => {
    const storedPrices = JSON.parse(localStorage.getItem("prices"));
    setPrices(storedPrices || {});
  }, []);

  const updatePrice = (key, value) => {
    const updatedPrices = { ...prices, [key]: value };
    setPrices(updatedPrices);
    localStorage.setItem("prices", JSON.stringify(updatedPrices));

    setSaveStatus(true);
    setTimeout(() => {
      setSaveStatus(false);
    }, 2000); // Восстанавливаем статус через 2 секунды
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
        <button disabled={saveStatus}>
          {saveStatus ? 'Сохранено' : 'Сохранить изменения'}
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;

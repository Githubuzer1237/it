// import React from 'react'
// import s from './Grafic.module.scss'
// import { Link } from 'react-router-dom'
// const Grafic = () => {
//   return (
//     <>

//     <div className={s.banner}>
//         <div className={s.content}>
//             <div>КУРСЫ</div>
//             <div>ГРАФИЧЕСКОГО ДИЗАЙНА</div>
//             <div>
//                 <Link to={'/studio'}><button>Курс мечты</button></Link>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Grafic


import React from 'react';
import s from './Grafic.module.scss';
import { Link } from 'react-router-dom';

const Grafic = ( {price} ) => {
  return (
    <div className={s.banner}>
      <div className={s.content}>
        <div className={s.text} >КУРСЫ</div>
        <div className={s.text} >ГРАФИЧЕСКОГО ДИЗАЙНА</div>
        <div className={s.curs}>
        <b>{price} </b>

          <Link className={s.link} to={'/studio'}>

            <button  >Курс мечты</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grafic;

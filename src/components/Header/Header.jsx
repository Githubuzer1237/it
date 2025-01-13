// import React, { useState } from 'react'
// import s from './Header.module.scss'
// import { Link } from 'react-router-dom'
// const Header = () => {
   
//    const [active, setActive] = useState(false)

//    const toggleBurger = () => {
//     setActive(!active);
//    }
//    const closeBurger = () => {
//     setActive(false);
//    }

//   return (
//   <>
//   <header className={s.header}>
//       <nav className={s.nav}>
         
//       <Link to={'/'} ><img src="/itacademylogo.svg" alt="" className={s.logo} /></Link>

//       <div className={`${s.links} ${active ? s.active : ''  }  `}>
//        <Link onClick={closeBurger} to={'/'}>главная</Link>
//        <Link onClick={closeBurger} to={'/'}>потом придумаем</Link>
//        <Link onClick={closeBurger} to={'/studio'}>студия</Link>
//        <Link onClick={closeBurger} to={'/courses'}>Курсы</Link>

//       </div>

     
         
//      <div onClick={toggleBurger} className={`${s.burger} ${active ? s.active : ''  }  `}>
//       <span></span>
//       <span></span>
//      </div>
          

//       </nav>
//   </header>
//   </>
//   )
// }

// export default Header
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const [active, setActive] = useState(false);
  const [showAdminLink, setShowAdminLink] = useState(false); 

  const toggleBurger = () => {
    setActive(!active);
  };

  const closeBurger = () => {
    setActive(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        setShowAdminLink(true); 
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to={'/'}>
          <img src="/itacademylogo.svg" alt="Logo" className={s.logo} />
        </Link>

        <div className={`${s.links} ${active ? s.active : ''}`}>
          <Link onClick={closeBurger} to={'/'}>
            главная
          </Link>
          <Link onClick={closeBurger} to={'/freelesson'}>
            Бесплатный урок
          </Link>
          <Link onClick={closeBurger} to={'/studio'}>
            студия
          </Link>
          <Link onClick={closeBurger} to={'/courses'}>
            Курсы
          </Link>
          <Link onClick={closeBurger} to={'/branches'}>
            Филиалы
          </Link>
          {/* Скрытая ссылка на админку */}
          {showAdminLink && (
            <Link onClick={closeBurger} to={'/admin-panel'}>
              Админка
            </Link>
          )}
        </div>

        <div
          onClick={toggleBurger}
          className={`${s.burger} ${active ? s.active : ''}`}
        >
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

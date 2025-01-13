import React from 'react'
import s from './WebCourse.module.scss'
import { Link } from 'react-router-dom'
import Background3D from '../Background3D/Background3D'
import AnimatedSpan from '../AnimatedSpan/AnimatedSpan'

const WebCourse = ( {price} ) => {
  return (
    <>
      <section id='courses' className={s.hero}>
      <div className={s.background}>
          <Background3D />
        </div>
        <div className="container">
          <div className={s.wrap}>
            <h1><AnimatedSpan>Курсы Веб Программирования</AnimatedSpan></h1>
            <p>  Изучите самые актуальные технологии веб-разработки и станьте мастером своего дела.</p>

            <div className={s.inner}>
              <b>{price} </b>
              <Link to="/">→ Курс мечты</Link>
            </div>
          </div>
        </div>
      

      </section>
    </>
  )
}

export default WebCourse;
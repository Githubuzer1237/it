// import React from "react";
// import { motion } from "framer-motion";
// import styles from "./ScratchSection.module.scss";

// const ScratchSection = () => {
//   return (
//     <section className={styles.scratchSection}>
//       <div className={styles.scratchHeader}>
//         <h1>Курс Scratch: Твое путешествие в программирование!</h1>
//         <p>
//           Освой программирование, создавая уникальные проекты с любимыми
//           персонажами. Весело и познавательно!
//           От 8 до 13 лет!
//         </p>
//       </div>
//       <div className={styles.scratchAnimations}>
//         {/* Кот вращается и перемещается по кругу */}
//         <motion.img
//           src="/cat.svg"
//           alt="Spinning Cat"
//           className={styles.cat}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{
//             opacity: 1,
//             rotate: [0, 360],
//             scale: [0.5, 1, 0.8],
//             x: [0, 150, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />

//         {/* Кот двигается по синусоиде */}
//         <motion.img
//           src="/cat.svg"
//           alt="Wave Cat"
//           className={`${styles.cat} ${styles.waveCat}`}
//           initial={{ x: -100, opacity: 0 }}
//           animate={{
//             x: [0, 200, -200, 0],
//             y: [0, -50, 50, 0],
//             opacity: [0.5, 1, 0.5],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             repeatType: "loop",
//             ease: "easeInOut",
//           }}
//         />

//         {/* Кот летит на самолете с параллаксом */}
//         <motion.div
//           className={styles.flyingCatContainer}
//           initial={{ x: -300, opacity: 0 }}
//           animate={{ x: [0, 300, -300], opacity: 1 }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           <motion.img
//             src="/plane.png"
//             alt="Airplane"
//             className={styles.airplane}
//             animate={{
//               rotate: [0, 10, -10, 0],
//             }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           />
//           <motion.img
//             src="/cathappy.png"
//             alt="Flying Cat"
//             className={styles.catOnAirplane}
//           />
//         </motion.div>

//         {/* Кот прыгает через препятствия */}
//         <motion.img
//           src="/cat.svg"
//           alt="Jumping Cat"
//           className={`${styles.cat} ${styles.jumpingCat}`}
//           initial={{ y: 300, scale: 0.8 }}
//           animate={{
//             y: [300, 150, 300],
//             scale: [0.8, 1, 0.8],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         />

//         {/* Кот исчезает и появляется с плавным эффектом */}
//         <motion.img
//           src="/cat.svg"
//           alt="Appearing Cat"
//           className={`${styles.cat} ${styles.fadingCat}`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0, 1, 0] }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default ScratchSection;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ScratchSection.module.scss';

const ScratchSection = ({price} ) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className={styles.scratchSection} ref={sectionRef}>
      <motion.div
        className={styles.planeContainer}
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: '-50%', y: '-50%', opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <img src="/plane.png" alt="Самолет" className={styles.plane} />
        <div className={styles.catInsidePlane}>
          <img src="/cat.svg" alt="Кот" />
        </div>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.6, duration: 0.5 }}
        >
          Курс Scratch: Твое путешествие в программирование!
        </motion.h1>
        <motion.b className={styles.price}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 3.3, duration: 0.5 }}
        >
          {price} 
          </motion.b>
        <br />
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 30 } : {} }
          transition={{ delay: 3.3, duration: 0.5 }}
          className={styles.courseLink}
        >
          Курс мечты
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ScratchSection;
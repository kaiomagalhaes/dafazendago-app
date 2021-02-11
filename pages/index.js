import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Categories from '../components/Categories';
import Image from 'next/image'

// <Image src="/hero.png" className={styles.hero} alt="hero image" width="300" height="64" />
export default function Home() {
  if (typeof window !== 'undefined') {
    document.body.classList.add('no-fouc');
  }

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const removeFouc = (foucElement) => {
        foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
      };

      removeFouc(document.documentElement);
    }, []);
  }


  return (
    <div className={styles['page-container']}>
      <div className={styles['page']}>

        <div className={styles['hero-section']}>
          <img src={'https://i.ibb.co/cvVYNp5/kaio-3.jpg'} className={styles.logo} />
        </div>

        <div className={styles["container"]}>
          <Categories />
        </div>
      </div>
    </div>
  )
}
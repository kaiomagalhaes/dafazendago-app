import styles from './index.module.css';
import Categories from '../components/Categories';
import Image from 'next/image'

// <Image src="/hero.png" className={styles.hero} alt="hero image" width="300" height="64" />
export default function Home() {
  return (
    <div className={styles['page-container']}>
    <div className={styles['page']}>

      <div className={styles['hero-section']}>
        <Image className={styles.logo} src="/logo.jpg" alt="me" width="64" height="64" />
      </div>

      <div className={styles["container"]}>
        <Categories />
      </div>
    </div>
    </div>
  )
}
import styles from './product.module.css';

const getPrice = (price) => price / 100;

export default function Product({ product }) {
  return (
    <div className={styles.item} key={product.name}>
      <div className={styles['image-container']}>
        <img src={product.image || 'https://i.ibb.co/cvVYNp5/kaio-3.jpg'} className={styles.image} />
      </div>
      <div className={styles['description-container']}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>R$ {getPrice(product.price).toFixed(2)}</span>
      </div>
    </div>
  )
}
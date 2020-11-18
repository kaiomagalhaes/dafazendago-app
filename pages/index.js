import json from '../data/products.json'
import styles from './index.module.css';

const groupBy = (items, key) => items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }),
  {},
);

const getPrice = (price) => price / 100;

export default function Home() {
  const categories = groupBy(json, 'category')

  const data = Object.keys(categories).sort().map((category) => (
    <div>
      <div key={category} className={styles['section-title']}>
        {category}
      </div>
      <div>
        {categories[category].sort((a, b) => {
          const va = a.name[0];
          const vb = b.name[0];
          console.log(va, vb, va > vb, vb > va)
          if (va > vb) {
            return 1
          } if (va < vb) {
            return -1
           }  else {
            return 0
          }
        }).map((product) => (
          <div className={styles['item']} key={product.name}>
            <div className={styles['item-container']}>
            <span className={styles['name']}>{product.name}</span>
            <span className={styles['price']}>R$ {getPrice(product.price).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))

  return (
    <div className={styles['page']}>
      <h1 className={styles["main-title"]}>TABELA DE PREÇOS DA FAZENDA</h1>
      <div className={styles["container"]}>
        {data}
      </div>
    </div>
  )
}
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import styles from './category.module.css';
import sortByName from '../../utils/sortByname';
import Product from '../Product';

import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈


const getItems = (products) => (
  products.sort(sortByName).map(product => <Product key={product.name} product={product} />)
);

export default function Category({ products, categoryName }) {
  const [showProducts, setShowProducts] = useState(false)
  const icon = showProducts ? faChevronUp : faChevronDown;

  return (
    <div className={styles.container}>
      <div
        key={categoryName}
        className={styles.title}
        onClick={() => setShowProducts(!showProducts)}
      >
        <FontAwesomeIcon
          styles="width: 875em"
          icon={icon}
          className={styles.icon}
        />
        <span className={styles.name}>{categoryName}</span>
      </div>
      {showProducts && getItems(products)}
    </div>
  )
}
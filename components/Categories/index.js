import json from '../../data/products.json'
import groupBy from '../../utils/groupBy';
import Category from '../Category';

export default function Categories() {
  const categories = groupBy(json, 'category')

  return Object.keys(categories).sort().map((category) => (
    <Category
      key={category}
      products={categories[category]}
      categoryName={category}
    />
  ));
}
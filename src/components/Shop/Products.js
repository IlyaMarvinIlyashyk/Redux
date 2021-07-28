import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 5.99,
    title: 'Book',
    description: 'a very interesting book' 
  },
  {
    id: 'p5',
    price: 13.99,
    title: 'Chips',
    description: 'so expensive wow'
  },
  {
    id: 'p41',
    price: 399.99,
    title: 'Old iPhone',
    description: 'worth it'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

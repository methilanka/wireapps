import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import ProductSearch from '../components/ProductSearch';


function Home() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch(error => {
        setErrorProducts(error);
        setLoadingProducts(false);
      });
  }, []);

  if (loadingProducts) {
    return <div>Loading...</div>;
  }

  if (errorProducts) {
    return <div>Error: {errorProducts.message}</div>;
  }

  return (
    <div className="home container mt-4">
      <h2 className="mb-4">Welcome to the Online Store</h2>
      <Categories />
      <ProductSearch/>
      <div className="top-products">
        <h3>Top Products</h3>
        <div className="row">
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Link to="/product-table" className="btn btn-secondary">View All Products</Link>
        <Link to="/mui-product-table" className="btn btn-secondary">View All Products</Link>
      </div>
    </div>
  );
}

export default Home;

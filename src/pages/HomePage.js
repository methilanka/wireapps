import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Menscat from '../components/Menscat';
import Womenscat from '../components/Womenscat';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [mensClothingResponse, womensClothingResponse] = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/men's clothing"),
          fetch("https://fakestoreapi.com/products/category/women's clothing")
        ]);

        if (!mensClothingResponse.ok || !womensClothingResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const mensClothingProducts = await mensClothingResponse.json();
        const womensClothingProducts = await womensClothingResponse.json();

        setProducts([...mensClothingProducts, ...womensClothingProducts]);
        setLoadingProducts(false);
      } catch (error) {
        setErrorProducts(error);
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  if (loadingProducts) {
    return <div>Loading...</div>;
  }

  if (errorProducts) {
    return <div>Error: {errorProducts.message}</div>;
  }

  return (
    <div className="home container mt-4">

      {/* <Categories /> */}
      <div className="top-products">
        <h4 className='mb-4'>Flash Sale</h4>

        <div className="row  gx-5 ">
        {products.slice(0, 8).map(product => (
  <Product
    key={product.id}
    id={product.id}
    name={product.title}
    description={product.description}
    price={product.price}
    image={product.image}
    category={product.category}
  />
))}
        </div>
      </div>
      <div className="mt-4">
      <h4 className='mb-4'>Categories</h4>
<div className="row">
  <div class="col-6">
  <Link to={`/mens-clothing`} className=" text-decoration-none "><Menscat/></Link>
  </div>
  <div className="col-6">
  <Link to={`/womens-clothing`} className=" text-decoration-none "><Womenscat/></Link>
</div>
  </div>

      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ id, name, description, price, image, category }) {
  // Define CSS classes based on category
  const categoryClass = category === "men's clothing" ? 'mens' : category === "women's clothing" ? 'womens' : '';

  return (
    <div className="col-md-3 mb-5">
      <div className="card h-100 product-card border-0 shadow">
      <h5 className="card-title text-center p-3">{name}</h5>
        <img src={image} className="card-img-top" alt={name} />
        <div className={`rounded-3 card-body ${categoryClass}`}>
          
          <p className="card-text price">${price}</p>
          <p className="card-text">{description.length > 100 ? description.slice(0, 100) + '..' : description}</p>
          <Link to={`/product/${id}`} className="btn btn-outline-light btn-sm">View Product</Link>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;

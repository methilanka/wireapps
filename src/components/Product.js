import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ id, name, description, price, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 product-card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <p className="card-text">{description}</p>
          <Link to={`/product/${id}`} className="btn btn-primary">View Product</Link>
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
  image: PropTypes.string.isRequired
};

export default Product;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="categories mb-4">
      <h3>Categories</h3>
      <div>
        {categories.map(category => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="btn btn-primary me-2 mb-2"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function ProductSearch({ onProductSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${searchTerm}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }) 
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
  };

  return (
    <Autocomplete
      value={searchTerm}
      onChange={handleSearchChange}
      options={products}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Products"
          variant="outlined"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} onClick={() => onProductSelect(option)}>
          <img src={option.image} alt={option.title} style={{ width: 50, marginRight: 10 }} />
          {option.title}
        </li>
      )}
    />
  );
}

export default ProductSearch;

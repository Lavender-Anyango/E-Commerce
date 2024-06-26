import React from 'react';
import useGetProducts from './hooks/useGetProducts';
import './index.css'

function Products() {
  const { products, loading, error } = useGetProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-list'>
      {products.map((product) => (
        <div key={product.id} className='product-card'>
            <img src={product.image} alt='baggy' className='product-img'/>
          <h3 className='product-title'>{product.title}</h3>
          
          <p className='product-price'>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
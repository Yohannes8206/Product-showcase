import React from 'react'


function ProductCard({name , price , image , inStock , isFeatured}) {

  return (
    <div className='product-card'>
      {image && <img src={image} alt={name} width={120} />}
      <h2>{name}</h2>
      <h2>{price}</h2>

      {price > 1000 && <p style={{ color: "gold" }}>✨ Premium Product</p>}

      
      {isFeatured && <p>⭐ Featured</p>}

      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default ProductCard

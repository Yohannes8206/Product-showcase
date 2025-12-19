import React from 'react'
import ProductCard from './ProductCard';

function ProductList() {

    
    const products = [
        {
            id : 1,
            name : "Wireless Headphones",
            price : 1700,
            image :"/assets/wireless-headphone.jpg",
            inStock : true,
            isFeatured : true,

        },
        {
            id : 2,
            name : "Smart-watch",
            price : 700,
            image :"/assets/watch.jpg",
            inStock : false,
            isFeatured : false,
            
        },
        
        {
            id : 3,
            name : "Airpod",
            price : 750,
            image :"/assets/airpod.jpg",
            inStock : true,
            isFeatured : false,

        }
        
    ];

    if(products.length<=0){
        return <p className='no-products'> No products available at the moment.</p>
    }
    


    return (
        <div className="productList">
        {products.map(product=>(
            <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
            isFeatured={product.isFeatured}
            />
        ))}
    </div>
  )
}

export default ProductList

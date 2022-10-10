import React from 'react';
import "./Products.css";

//responsible for displaying products on screen
export const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
        {productItems.map((productItem)=>(
                <div className='cards'>
                <div>
                    <img 
                    className='product-image'
                    src={productItem.image} 
                    alt={productItem.name}
                    />
                </div>
                    <div>
                        <h3 className='product-name'>
                            {productItem.name}
                        </h3>
                    </div>
                    <div className='"product-price'> INR {productItem.price}</div>
                        <div>
                            <button 
                            className="product-add-button"
                            onClick={()=>handleAddProduct(productItem)}>
                            Add to Cart
                            </button>
                        </div>
                </div>
            )
        )}

    </div>
  );
};

export default Products;

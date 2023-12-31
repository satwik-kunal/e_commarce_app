import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({id,image,price,rating,title}) {
    return (

        <div className="checkoutProduct">

            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">

                     {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    } 
                    

                </div>
                <button>Remove From Basket</button>
              
            </div>
           

        </div>


    )
}
export default CheckoutProduct;
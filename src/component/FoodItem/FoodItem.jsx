import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name = "Unnamed Food", price = 0, description = "No description available", image }) => {
    const { cartItems = {}, addtoCart, removeFromCart } = useContext(StoreContext);

    const isInCart = !!cartItems[id];

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img 
                    src={image || assets.default_food_image} 
                    className='food-item-image' 
                    alt={name || "Food item"} 
                />
                {!isInCart ? (
                    <img 
                        className='add' 
                        onClick={() => addtoCart(id)} 
                        src={assets.add_icon_white} 
                        alt="Add to cart" 
                    />
                ) : (
                    <div className="food-item-counter">
                        <img 
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove one item" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addtoCart(id)} 
                            src={assets.add_icon_green} 
                            alt="Add one more item" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img 
                        src={assets.rating_starts} 
                        alt="Rating stars" 
                    />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;

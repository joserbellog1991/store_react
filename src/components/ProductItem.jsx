import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

	const {title,price,id,images} = product;

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" id={id} />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
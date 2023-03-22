import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
		//console.log(item);
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
				<figure onClick={()=>handleClick(product)} >
					<img src={addToCartImage} alt="" id={id} />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
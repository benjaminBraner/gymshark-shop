import React, { useState } from 'react'
import { useParams } from 'react-router'
import { getClothesByType } from '../../helpers/getClothesByType'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/cart/cartSlice'
import cartIcon from '../../assets/cart.svg'
import checkIcon from '../../assets/check.svg'
import "../../styles/components/catalog/ArticleScreen.css"

export const ArticleScreen = () => {
	const { type, id } = useParams()
	const clothes = getClothesByType(type)
	const { name, img_name, desc, price_before, price_now } = clothes.find((clothe) => clothe.id === Number(id))
	const imgSrc = `/src/assets/${img_name}`
	const dispatch = useDispatch()
	const {products} = useSelector((state) => state.cart)
	
	
	const productSearched = products.filter(product => product.id === id)
	const initialIsAdded = productSearched.length > 0
	
	
	const [isAdded, setIsAdded] = useState(initialIsAdded)
	

	const addToCart = () => {
		if (isAdded) return
		setIsAdded(true)
		dispatch(addProduct({ id, name, price: price_now }))
	}

	return (
		<div className="PlantScreen">
			<div className="plant-container animate__animated animate__backInLeft">
				<div className="plant-img-container">
					<img alt={name} src={imgSrc} />
				</div>

				<div className="details">
					<div className="content">
						<h2>
							{name} <br />
							<span>{type} Collection</span>
						</h2>
						<p>{desc}</p>

						<h3>
							<span className="price-before">{price_before}.00$</span> {price_now}.00$
						</h3>
						<button className={`add-to-cart-btn ${isAdded ? "animate__animated animate__jello added": ""}`} onClick={addToCart}>
							{isAdded ? 
								<>Added to Cart <img className="cart-icon" src={checkIcon} alt="check" /></>
								: 
								<>Add to Cart <img className="cart-icon" src={cartIcon} alt="cart" /></>
							}
						</button>

					</div>
				</div>
			</div>
		</div>
	)
}

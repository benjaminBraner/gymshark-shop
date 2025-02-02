import '../../styles/components/cart/Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, updateQuantity } from '../../store/cart/cartSlice'
import trashIcon from '/assets/trash.svg'
import { useNavigate } from 'react-router'

export const Cart = ({ showCart, onClickCart }) => {
	const {products, total} = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const increaseQuantity = (id, quantity) => {
		dispatch(updateQuantity({id, quantity}))

	}

	const decreaseQuantity = (id, quantity) => {
		dispatch(updateQuantity({id, quantity}))
	}

	const removeItem = (id) => {
		dispatch(removeProduct(id))
	}
	
	const goToPayment = () => {
		navigate('/payment')
	}


	return (
		<>
			<div className={`cart ${showCart ? 'cart--open' : ''}`}>
				<button className="cart__close-btn" onClick={onClickCart}>
					✖
				</button>
				<h2>Your Cart</h2>

				{products.length === 0 ? (
					<p></p>
				) : (
					<ul className="cart__items">
						{products.map((item) => (
							<li key={item.id} className="cart__item">
								<span className="cart__item-name">{item.name}</span>
								<span className="cart__item-price">${item.price}</span>

								<div className="cart__item-quantity">
									<button onClick={() => decreaseQuantity(item.id, item.quantity - 1)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increaseQuantity(item.id, item.quantity + 1)}>+</button>
								</div>

								<button className="cart__item-remove" onClick={() => removeItem(item.id)}>
									<img src={trashIcon} alt="Eliminar" />
								</button>
							</li>
						))}
					</ul>
				)}

				<div className="cart__total">
					<h3>Total: ${total}</h3>
					<button className="cart__pay-btn" onClick={goToPayment}>Pay</button>
				</div>

			</div>

			{showCart && <div className="cart-overlay" onClick={onClickCart}></div>}
		</>
	)
}

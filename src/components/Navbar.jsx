import { useEffect, useState } from 'react'
import gsIcon from '/assets/gs-icon-black.svg'
import cartIcon from '/assets/cart.svg'
import '../styles/components/Navbar.css'
import { Cart } from './cart/Cart'
import { Link } from 'react-router'

import { useLocation } from 'react-router'

export const Navbar = () => {
	const [showCart, setShowCart] = useState(false)
	const location = useLocation()

	const onClickCart = () => {
		setShowCart(!showCart)
	}
	
	
	useEffect(() => {
		const menu = document.querySelector('#mobile-menu')
		const menuLinks = document.querySelector('.navbar__menu')

		if (!menu || !menuLinks) return

		const toggleMenu = () => {
			menu.classList.toggle('is-active')
			menuLinks.classList.toggle('active')
		}

		menu.addEventListener('click', toggleMenu)

		const navbarLinks = document.querySelectorAll('.navbar__links')
		const closeMenu = () => menuLinks.classList.remove('active')

		navbarLinks.forEach((link) => {
			link.addEventListener('click', closeMenu)
		})

		return () => {
			menu.removeEventListener('click', toggleMenu)
			navbarLinks.forEach((link) => {
				link.removeEventListener('click', closeMenu)
			})
		}
	}, [])
	

	useEffect(() => {
		if (location.hash) {
			const section = document.querySelector(location.hash)
			if (section) {
				window.scrollTo({
					top: section.offsetTop - 60,  
					behavior: 'smooth'
				})
			}
		}
	}, [location])  

	return (
		<>
			<nav className="navbar navbar--shadow">
				<div className="navbar__container">
				
					<Link to="/#home" id="navbar__logo">
						<img src={gsIcon} alt="" />
						Gymshark
					</Link>
					<div className="navbar__toggle" id="mobile-menu" >
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
					<ul className="navbar__menu">
						<li className="navbar__item">
							<Link to="/#home" className="navbar__links">
								Home
							</Link>
						</li>
						<li className="navbar__item">
							<Link to="/#faqs" className="navbar__links">
								FAQs
							</Link>
						</li>
						<li className="navbar__item">
							<Link to="/#contact" className="navbar__links">
								Contact
							</Link>
						</li>
						<li className="navbar__item">
							<Link to="/payment" className="navbar__links">
								Payment
							</Link>
						</li>
						<li className="navbar__item" onClick={onClickCart}>
							<div className="navbar__links cart-link">
								<img className="cart-link-img" src={cartIcon} alt="Cart" />
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<Cart showCart={showCart} onClickCart={onClickCart}/>
		</>
	)
}


import React, { useState } from 'react'
import { Catalog } from './Catalog'

import "../../styles/components/catalog/CollectionSection.css"
export const CollectionSection = () => {
	
	const [type, setType] = useState("all")
	const onClickLink = (e) => {
		e.preventDefault()
		setType(e.target.name)
		const links = document.querySelectorAll(".musthave-link")
		links.forEach(link => link.classList.remove("link-active"))
		e.target.classList.add("link-active")
	}
	return (
		<section className="catalog" id="catalog">
			<h2 className="catalog__title">Must Have</h2>
			<div className="musthave__nav">
				<a id="allBtn" className="musthave-link link-active" name="all" onClick={onClickLink}>
					ALL
				</a>
				<a id="menBtn" className="musthave-link" name="men" onClick={onClickLink}>
					MEN
				</a>
				<a id="womenBtn" className="musthave-link" name="women" onClick={onClickLink}>
					WOMEN
				</a>
			</div>

			<Catalog type={type}/>
			
		</section>
	)
}

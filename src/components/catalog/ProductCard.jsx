import { useNavigate } from 'react-router'
import "../../styles/components/catalog/ProductCard.css"

export const ProductCard = ({ id, img_name, name, price_before, price_now, type }) => {
	const navigate = useNavigate()
	const onClickCard = () => {
		navigate(`/clothes/${type}/${id}`)
	}

	const clotheImgUrl = `/src/assets/${img_name}`
	return (
		<div className="musthave__card animate__animated animate__fadeIn" onClick={onClickCard}>
			<img src={clotheImgUrl} alt="Compression gym T-shirt" className="catalog-img" />
			<h4>{name}</h4>
			<p>
				<del>${price_before}.00</del> ${price_now}.00
			</p>
		</div>
	)
}

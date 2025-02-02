
import { getClothesByType } from '../../helpers/getClothesByType'
import { ProductCard } from './ProductCard'
import { clothes as clothesData } from '../../data/clothes'
import "../../styles/components/catalog/Catalog.css"


export const Catalog = ({type}) => {
	let clothes = getClothesByType(type) 
	
	if (type === "all") clothes = clothesData
  return (
	<div className="musthave__grid">
		{clothes.map((item) => (
			<ProductCard {...item} key={item.id}/>
		))}
	
</div>
  )
}

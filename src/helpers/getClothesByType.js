import { clothes } from "../data/clothes"


export const getClothesByType = (type) => {
	
	return clothes.filter((item) => item.type === type)
}
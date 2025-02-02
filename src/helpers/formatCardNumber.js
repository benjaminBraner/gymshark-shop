	 // Format card number with spaces every 4 digits
	 export const formatCardNumber = (value) => {
		const val = value.replace(/\s/g, '').replace(/\D/g, '')
		const matches = val.match(/.{1,4}/g)
		return matches ? matches.join(' ').substr(0, 19) : '' // 19 chars = 16 digits + 3 spaces
	 }
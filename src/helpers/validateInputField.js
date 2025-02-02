// Validate form fields

export const validateInputField = (name, value) => {
	let error = ''

	switch (name) {
		case 'cardNumber':
			const digits = value.replace(/\s/g, '')
			if (digits.length !== 16) {
				error = 'Card number must be 16 digits'
			}
			break

		case 'expirationDate':
			const today = new Date()
			const inputDate = new Date(value)
			if (inputDate <= today) {
				error = 'Expiration date must be in the future'
			}
			break

		case 'cvv':
			if (!/^\d{3}$/.test(value)) {
				error = 'CVV must be 3 digits'
			}
			break

		case 'email':
			if (!/\S+@\S+\.\S+/.test(value)) {
				error = 'Please enter a valid email'
			}
			break

		default:
			break
	}

	return error
}

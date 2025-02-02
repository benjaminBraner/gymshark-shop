import paypalLogo from '../../assets/paypal-logo.png'
import stripeLogo from '../../assets/stripe-logo.png'
import visaLogo from '../../assets/visa-logo.png'
import mastercardLogo from '../../assets/mastercard-logo.png'
import { showSuccessAlert } from '../../helpers/showSuccesfullAlert'
import { useState } from 'react'
import { formatCardNumber } from '../../helpers/formatCardNumber'
import { validateInputField } from '../../helpers/validateInputField'

export const PaymentForm = ({ total }) => {
	const [paymentForm, setPaymentForm] = useState({
		email: '',
		cardNumber: '',
		expirationDate: '',
		cvv: ''
	})
	const [errors, setErrors] = useState({
		email: '',
		cardNumber: '',
		expirationDate: '',
		cvv: ''
	})

	const { email, cardNumber, expirationDate, cvv } = paymentForm

	const handleInputChange = (e) => {
		const { name, value } = e.target
		let newValue = value

		// Special handling for card number formatting
		if (name === 'cardNumber') {
			newValue = formatCardNumber(value)
		}

		setPaymentForm((prev) => ({
			...prev,
			[name]: newValue
		}))

		// Validate field
		const error = validateInputField(name, newValue)
		setErrors((prev) => ({
			...prev,
			[name]: error
		}))
	}

	const onSubmitPayment = (e) => {
		e.preventDefault()

		// Validate all fields
		const newErrors = {
			email: validateInputField('email', email),
			cardNumber: validateInputField('cardNumber', cardNumber),
			expirationDate: validateInputField('expirationDate', expirationDate),
			cvv: validateInputField('cvv', cvv)
		}

		setErrors(newErrors)

		// Check if there are any errors
		if (Object.values(newErrors).some((error) => error !== '')) {
			return
		}

		showSuccessAlert()
	}

	return (
		<>
			<div className="payment-right">
				<form className="payment-form" onSubmit={onSubmitPayment}>
					<h1 className="payment-title">Payment Details</h1>

					<div className="payment-method">
						<input type="radio" name="payment-method" id="method-1" defaultChecked />
						<label htmlFor="method-1" className="payment-method-item">
							<img src={visaLogo} alt="Visa" />
						</label>

						<input type="radio" name="payment-method" id="method-2" />
						<label htmlFor="method-2" className="payment-method-item">
							<img src={mastercardLogo} alt="Mastercard" />
						</label>

						<input type="radio" name="payment-method" id="method-3" />
						<label htmlFor="method-3" className="payment-method-item">
							<img src={paypalLogo} alt="PayPal" />
						</label>

						<input type="radio" name="payment-method" id="method-4" />
						<label htmlFor="method-4" className="payment-method-item">
							<img src={stripeLogo} alt="Stripe" />
						</label>
					</div>

					<div className="payment-form-group">
						<input type="email" placeholder="Email Address" className="payment-form-control" id="email" name="email" value={email} onChange={handleInputChange} />

						{errors.email && <div className="payment-form-error">{errors.email}</div>}
					</div>

					<div className="payment-form-group">
						<input type="text" placeholder="Card Number" className="payment-form-control" id="card-number" name="cardNumber" value={cardNumber} onChange={handleInputChange} maxLength="19" />

						{errors.cardNumber && <div className="payment-form-error">{errors.cardNumber}</div>}
					</div>

					<div className="payment-form-group-flex">
						<div className="payment-form-group">
							<input type="date" placeholder="Expiry Date" className="payment-form-control" id="expiry-date" name="expirationDate" value={expirationDate} onChange={handleInputChange} />

							{errors.expirationDate && <div className="payment-form-error">{errors.expirationDate}</div>}
						</div>
						<div className="payment-form-group">
							<input type="text" placeholder="CVV" className="payment-form-control" id="cvv" name="cvv" value={cvv} onChange={handleInputChange} maxLength="3" />

							{errors.cvv && <div className="payment-form-error">{errors.cvv}</div>}
						</div>
					</div>

					<button type="submit" className="payment-form-submit-button">
						<i className="ri-wallet-line"></i> Pay ${(total + total * 0.1).toFixed(2)}
					</button>
				</form>
			</div>
		</>
	)
}

import gsIcon from '/assets/gs-icon-black.svg'

export const OrderSummary = ({products, total}) => {

	return (
		<>
			<div className="payment-left">
				<div className="payment-header">
					<div className="payment-header-icon">
						<img src={gsIcon} alt="" />
					</div>
					<div className="payment-header-title">Order Summary</div>
					<p className="payment-header-description">Review your items before payment</p>
				</div>
				<div className="payment-content">
					<div className="payment-body">
						{/* Products List */}
						{products.map((product) => (
							<div key={product.id} className="payment-plan">
								<div className="payment-plan-type">{product.quantity}x</div>
								<div className="payment-plan-info">
									<div className="payment-plan-info-name">{product.name}</div>
									<div className="payment-plan-info-price">${(product.price * product.quantity).toFixed(2)}</div>
								</div>
							</div>
						))}

						<div className="payment-summary">
							<div className="payment-summary-item">
								<div className="payment-summary-name">Subtotal</div>
								<div className="payment-summary-price">${total.toFixed(2)}</div>
							</div>

							<div className="payment-summary-item">
								<div className="payment-summary-name">Tax (10%)</div>
								<div className="payment-summary-price">${(total * 0.1).toFixed(2)}</div>
							</div>

							<div className="payment-summary-divider"></div>

							<div className="payment-summary-item payment-summary-total">
								<div className="payment-summary-name">Total</div>
								<div className="payment-summary-price">${(total + total * 0.1).toFixed(2)}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

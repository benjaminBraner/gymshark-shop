import React, { useState } from 'react'

import '../../styles/components/PaymentScreen.css'
import { OrderSummary } from './OrderSummary'
import { PaymentForm } from './PaymentForm'
import { useSelector } from 'react-redux'

export const PaymentScreen = () => {
	const { products, total } = useSelector((state) => state.cart)
    
    return (
        <section className="payment-section">
            <div className="container">
                <div className="payment-wrapper">
                    <OrderSummary products={products} total={total}/>
                   <PaymentForm total={total}/>
                </div>
            </div>
        </section>
    )
}
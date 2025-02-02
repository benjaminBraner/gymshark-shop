import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [], // [{ id, name, price, quantity }]
		total: 0
	},
	reducers: {
		addProduct: (state, action) => {
			const { id, name, price } = action.payload;
			const existingProduct = state.products.find((p) => p.id === id);

			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.products.push({ id, name, price, quantity: 1 });
			}
			state.total = state.products.reduce((total, p) => total + p.price * p.quantity, 0);
		},

		removeProduct: (state, action) => {
			state.products = state.products.filter((p) => p.id !== action.payload);
			state.total = state.products.reduce((total, p) => total + p.price * p.quantity, 0);
		},

		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const product = state.products.find((p) => p.id === id);

			if (product && quantity > 0) {
				product.quantity = quantity;
			}
			state.total = state.products.reduce((total, p) => total + p.price * p.quantity, 0);
		},

		clearCart: (state) => {
			state.products = [];
			state.total = 0;
		}
	}
});


export const { addProduct, removeProduct, updateQuantity, clearCart, getTotal } = cartSlice.actions
export default cartSlice.reducer

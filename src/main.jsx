import React from 'react'
import ReactDOM from 'react-dom/client'
import GymSharkApp from './GymSharkApp.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { ArticleScreen } from './components/catalog/ArticleScreen.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { PaymentScreen } from './components/payment/PaymentScreen.jsx'
import { Navbar } from './components/Navbar.jsx'

function App() {
  const location = useLocation();  

  return (
    <>
      {location.pathname !== '/payment' && <Navbar />}
      
      <Routes>
        <Route path="/*" element={<GymSharkApp />} />
        <Route path="/clothes/:type/:id" element={<ArticleScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

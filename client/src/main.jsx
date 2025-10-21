// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import StripeProvider from './stripe-provider.js'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StripeProvider>
//       <App />
//     </StripeProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

fetch('api/config')
  .then((response) => response.json())
  .then((data) => {
    const stripePromise = loadStripe(data.publishableKey);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
       <App />
    </Elements>
  </StrictMode>,
)
  })
  .catch((error) => {
    console.error('Error:', error);
  });

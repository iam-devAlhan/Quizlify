import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthFirebaseProvider } from './context/Auth-Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthFirebaseProvider>
      <App />
    </AuthFirebaseProvider> 
  </React.StrictMode>
)

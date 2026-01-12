import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apidata from './contextApi/Apidata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apidata>
      <App />
    </Apidata>
   
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode removed — it causes double rendering which delays
// React hydration and makes navbar-logo become the LCP element
// instead of the hero image (adds ~1500ms render delay in production)
createRoot(document.getElementById('root')).render(<App />)
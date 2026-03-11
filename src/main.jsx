import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import CustomCursor from './components/CustomCursor.jsx' // <-- IMPORT IT HERE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* NOW THE CURSOR LIVES ON EVERY PAGE */}
      <CustomCursor /> 
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
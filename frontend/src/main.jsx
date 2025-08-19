import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BusinessDetail from './pages/BusinessDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/businessdetail/:id" element={<BusinessDetail />} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

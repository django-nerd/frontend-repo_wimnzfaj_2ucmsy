import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import SmoothScroll from './components/SmoothScroll'
import NoiseOverlay from './components/NoiseOverlay'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><App /></PageTransition>} />
        <Route path="/test" element={<PageTransition><Test /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll />
      <NoiseOverlay opacity={0.03} />
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Bio from './Bio'
import Hero from './Hero'
import Work from './Work'
import Pengalaman from './Pengalaman'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Bio />
    <Work />
    <Pengalaman />
    <Footer />
  </StrictMode>,
)

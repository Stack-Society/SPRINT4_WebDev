// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/Themecontext.jsx' // 🔥 Importa aqui

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* 🌙 Envolve a App aqui */}
      <App />
    </ThemeProvider>
  </StrictMode>
)

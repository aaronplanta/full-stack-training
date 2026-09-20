import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage.tsx'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <main className="min-h-screen flex items-center justify-center">
                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/app" element={<App />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    </StrictMode>,
)
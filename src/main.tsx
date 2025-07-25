import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewsPortal from './NewsPortal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewsPortal />
  </StrictMode>,
)

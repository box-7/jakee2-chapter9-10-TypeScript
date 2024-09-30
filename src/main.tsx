// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
// <StrictMode>だと開発環境では2回レンダリングされるので、コメントアウト  
//   <StrictMode>
    <App />
//   </StrictMode>,
)

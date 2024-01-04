import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProviderGlobal } from './context/global.context.tsx'
import '../src/index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderGlobal>
      <App />
    </ProviderGlobal>
  </React.StrictMode>,
)

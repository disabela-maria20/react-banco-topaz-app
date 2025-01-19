import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Context from './services/context'
import Router from './router'
import { Header } from './components'
import { UI } from './ui'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <UI.Bg>
        <Header />
      </UI.Bg>
      <Router />  
    </Context>
  </StrictMode>
)

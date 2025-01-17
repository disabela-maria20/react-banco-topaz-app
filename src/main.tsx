import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Context from './services/context'
import Router from './router'
import { Bg } from './ui'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <Bg>
        <Router />
      </Bg>
    </Context>
  </StrictMode>
)

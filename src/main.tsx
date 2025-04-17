import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//EXTERNAL LIBRARIES
import {  RouterProvider } from 'react-router-dom'

//CSS FILE
import './index.css'

import {  router  } from './utils/router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

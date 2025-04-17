import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//EXTERNAL LIBRARIES
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

//CSS FILE
import './index.css'

//ROUTES
import SearchRecipies from './layouts/SearchRecipies'
import ErrorPage from './layouts/ErrorPage'
import RecipeDetails from './layouts/RecipeDetails'
import RootLayout from './layouts/RootLayout'

//ROUTER
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />
  },
  {
    path: '/recipe',
    element: <SearchRecipies />,
  },
  {
    path: '/recipe/:recipeId',
    element: <RecipeDetails />,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

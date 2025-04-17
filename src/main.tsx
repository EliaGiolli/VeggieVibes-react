import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'

//CSS FILE
import './index.css'

//ROUTES
import SearchRecipies from './layouts/SearchRecipies'
import ErrorPage from './layouts/ErrorPage'
import RecipeDetails from './layouts/RecipeDetails'

//ROUTER
const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchRecipies />,
    errorElement: <ErrorPage />
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

import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../../shared/pages/ErrorPage';
import HomePage from '../../features/home/pages/HomePage';
import SearchRecipes from '../../features/recipes/pages/SearchRecipes';
import RecipeDetails from '../../features/recipes/pages/RecipeDetails';
import WorkTogether from '../../features/work/pages/WorkTogether';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'recipes',
        element: <SearchRecipes />,
      },
      {
        path: 'recipe/:recipeId',
        element: <RecipeDetails />,
      },
      {
        path: 'work-with-us',
        element: <WorkTogether />,
      },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';

// Layouts & Pages
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../layouts/ErrorPage';
import HomePage from '../layouts/HomePage';
import SearchRecipies from '../layouts/SearchRecipies';
import RecipeDetails from '../layouts/RecipeDetails';
import WorkTogether from '../layouts/WorkTogether';

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
        element: <SearchRecipies />,
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

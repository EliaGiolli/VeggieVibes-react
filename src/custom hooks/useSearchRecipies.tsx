import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeDetails, RecipeSearch } from "../types/apiTypes";

const API_KEY = import.meta.env.VITE_API_KEY as string;
const BASE_URL = "https://api.spoonacular.com/recipes";

export function useFetch(query: string) {
  const [recipes, setRecipes] = useState<RecipeSearch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setRecipes([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      setError(null);

      axios
        .get(`${BASE_URL}/complexSearch`, {
          signal: controller.signal,
          params: {
            apiKey: API_KEY,
            query,
          },
        })
        .then((response) => {
          setRecipes(response.data.results);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    return () => {
      clearTimeout(delayDebounce);
      controller.abort();
    };
  }, [query]);

  return { recipes, loading, error };
}

export function useFetchDetails(recipeId: string) {
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (recipeId.trim() === "") {
      setRecipeDetail(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      setError(null);

      axios
        .get(`${BASE_URL}/${recipeId}/information`, {
          signal: controller.signal,
          params: {
            apiKey: API_KEY,
          },
        })
        .then((response) => {
          setRecipeDetail(response.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    return () => {
      clearTimeout(delayDebounce);
      controller.abort();
    };
  }, [recipeId]);

  return { recipeDetail, loading, error };
}

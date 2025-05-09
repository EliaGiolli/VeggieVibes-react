import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeDetails, RecipeSearch } from "../types/ApiTypes";

export function useFetch(searchRecipies: string) {
  const [recipies, setRecipies] = useState<RecipeSearch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchRecipies.trim() === "") {
      setRecipies([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      setError(null);

      const apiKey: string = "53e2afa895d944b4b96f71204850f1e5";

      axios
        .get("https://api.spoonacular.com/recipes/complexSearch", {
          signal: controller.signal,
          params: {
            apiKey: apiKey,
            query: searchRecipies,
          },
        })
        .then((response) => {
          setRecipies(response.data.results);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return; // request aborted
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400); // debounce: 400ms

    // cleanup
    return () => {
      clearTimeout(delayDebounce);
      controller.abort(); // controlle.abort() cancels the fetch request if searchRecipes changes during the debounce
    };
  }, [searchRecipies]);

  return { recipies, loading, error };
}

export function useFetchDetails(searchRecipies: string) {
  const [recipiesDetail, setRecipiesDetail] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchRecipies.trim() === "") {
      setRecipiesDetail(null);
      setLoading(false);
      return;
    }


    const controller = new AbortController();

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      setError(null);

      const apiKey: string = "53e2afa895d944b4b96f71204850f1e5";

      axios
        .get(`https://api.spoonacular.com/recipes/${searchRecipies}/information`, { 
          signal: controller.signal,
          params: {
            apiKey: apiKey,
          },
        })
        .then((response) => {
          setRecipiesDetail(response.data); 
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 400);

    // cleanup
    return () => {
      clearTimeout(delayDebounce);
      controller.abort();
    };
  }, [searchRecipies]);

  return { recipiesDetail, loading, error };
}
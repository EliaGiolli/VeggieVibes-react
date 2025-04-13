import { useState, useEffect } from "react";

import axios from "axios";
import { RecipeSearch } from "../utils/types";

export function useFetch(searchRecipies: string) {
    const [recipies, setRecipies] = useState<RecipeSearch[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRecipies() {
            if (searchRecipies.trim() === "") {
                setRecipies([]);
                setLoading(false);
                return;
            }

            try {
                const apiKey: string = '53e2afa895d944b4b96f71204850f1e5';
                const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                    params: {
                        //it authenticates the request with the API
                        apiKey: apiKey,
                        //it filters for specific data to match certain keywords, such as "vegan" or "chicken"
                        query: searchRecipies,
                    }
                });
                setRecipies(response.data.results);
                console.log(response.data.results);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchRecipies();
    }, [searchRecipies]);
    return { recipies, error, loading };
}



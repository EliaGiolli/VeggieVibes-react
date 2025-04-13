import { useState } from 'react';
import { useFetch } from '../custom hooks/useSearchRecipies'
import { RecipeSearch } from '../utils/types'


function SearchRecipies() {
    const [searchRecipies, setSearchRecipies] = useState<string>("");

    const { recipies, error, loading } = useFetch(searchRecipies);

    return (
        <>
            <main className='w-full h-[1200px]'>
                <div>
                    <h1></h1>
                    <div>
                        <input
                            type="text"
                            value={searchRecipies}
                            placeholder='cerca la tua ricetta'
                            onChange={(e) => setSearchRecipies(e.target.value)}
                        />
                    </div>
                </div>

                {/* DISPLAY API RESULTS */}
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <div>
                    {
                        recipies.length > 0 && recipies.slice(0, 10).map((recipe: RecipeSearch, index) => {
                            return (
                                <div key={index}>
                                    <h3>{recipe.title}</h3>
                                    <div>
                                        <img src={recipe.image} alt="" />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </main>
        </>
    );
}

export default SearchRecipies;
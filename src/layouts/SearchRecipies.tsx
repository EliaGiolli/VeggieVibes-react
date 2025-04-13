import { useState } from 'react';
import { useFetch } from '../custom hooks/useSearchRecipies'
import { RecipeSearch } from '../utils/types'
import Input from '../components/Input';


function SearchRecipies() {
    const [searchRecipies, setSearchRecipies] = useState<string>("");

    const { recipies, error, loading } = useFetch(searchRecipies);

    return (
        <>
            <main className='flex flex-col w-full h-[1200px] bg-zinc-200'>
                <div className='
                  bg-green-700 w-full sm:max-w-3xl flex flex-col justify-center items-center text-center 
                    mx-auto min-h-[300px] rounded-lg shadow-xl shadow-zinc-200 p-4 mt-10'>
                    <h1 className='text-2xl sm:text-3xl font-bold uppercase text-yellow-400'>Cerca la tua ricetta</h1>
                    <div className='p-3 mt-5'>
                        <Input
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
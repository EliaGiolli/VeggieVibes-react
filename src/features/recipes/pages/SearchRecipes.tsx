import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useSearchRecipes';
import { RecipeSearch } from '../types/recipeTypes';
import Input from '../../../shared/components/Input';
import Card from '../../../shared/components/Card';

function SearchRecipes() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { recipes, error, loading } = useFetch(searchQuery);

    return (
        <>
            <main className='flex flex-col w-full min-h-[1200px] bg-zinc-100'>
                <div className='
                  bg-green-700 w-full sm:w-fit flex flex-col justify-center items-center text-center
                    mx-auto min-h-[300px] rounded-lg shadow-xl shadow-gray-400 p-4 mt-10'>
                    <h1 className='text-2xl sm:text-4xl font-bold uppercase text-yellow-400 my-3'>Search for your veg recipe</h1>
                    <div className='w-full sm:max-w-2xl py-2 px-3 my-5'>
                        <p className='text-white text-lg sm:text-xl'>Search in our well-furnished inventory for <strong className='text-yellow-400'>vegetarian or vegan recipes</strong></p>
                    </div>
                    <div className='p-3'>
                        <Input
                            type="text"
                            value={searchQuery}
                            placeholder='search...'
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {loading && searchQuery.trim() !== "" && <p className='bg-zinc-200 text-gray-900 p-2'>Loading...</p>}
                    {error && <p className='bg-red-100 text-red-500 p-2'>{error}</p>}
                    <div className='bg-green-700 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5 p-2 w-full h-full'>
                        {
                            recipes.length > 0 && recipes.slice(0, 20).map((recipe: RecipeSearch) => (
                                <Card key={recipe.id}>
                                    <h3 className='text-yellow-400 text-xl sm:text-2xl p-1'>{recipe.title}</h3>
                                    <div className='flex flex-col my-3'>
                                        <div className='max-w-[200px] p-2'>
                                            <img src={recipe.image} alt={recipe.title} className="min-h-[100px] object-cover" />
                                        </div>
                                        <div className='p-2'>
                                            <Link
                                                to={`/recipe/${recipe.id}`}
                                                className='bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-lg shadow-zinc-400 p-2 transition-all inline-block'
                                            >
                                                View Recipe
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default SearchRecipes;

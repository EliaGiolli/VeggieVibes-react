import { useState } from 'react';

//external libraries
import { Link } from 'react-router-dom';
//Internal imports
import { useFetch } from '../custom hooks/useSearchRecipies'
import { RecipeSearch } from '../utils/types'
//components
import Input from '../components/Input';
import Card from '../components/Card';
import Button from '../components/Button';
import RecipeDetails from './RecipeDetails';


function SearchRecipies() {
    const [searchRecipies, setSearchRecipies] = useState<string>("");

    const { recipies, error, loading } = useFetch(searchRecipies);

    return (
        <>
            <main className='flex flex-col w-full min-h-[1200px] bg-zinc-200'>
                <div className='
                  bg-green-700 w-full sm:w-fit flex flex-col justify-center items-center text-center 
                    mx-auto min-h-[300px] rounded-lg shadow-xl shadow-gray-400 p-4 mt-10'>
                    <h1 className='text-2xl sm:text-4xl font-bold uppercase text-yellow-400 my-3'>Cerca la tua ricetta</h1>
                    <div className='w-full sm:max-w-2xl py-2 px-3 my-5'>
                        <p className='text-white text-lg sm:text-xl'>Cerca nel nostro fornitissimo menu le tue <strong className='text-yellow-400'>ricette vegetariane o vegane</strong> preferite! </p>
                    </div>
                    <div className='p-3'>
                        <Input
                            type="text"
                            value={searchRecipies}
                            placeholder='cerca la tua ricetta'
                            onChange={(e) => setSearchRecipies(e.target.value)}
                        />
                    </div>
                    
                    {/* DISPLAY API RESULTS */}
                    {loading && <p className='bg-zinc-200 text-gray-900 p-2'>Loading...</p>}
                    {error && <p className='bg-red-100 text-red-500 p-2'>{error}</p>}
                    <div className='bg-green-700 grid grid-cols-1 md:grid cols-3 lg:grid-cols-4 gap-6 my-5 p-2 w-full h-full'>
                        {
                            recipies.length > 0 && recipies.slice(0, 20).map((recipe: RecipeSearch, index) => {
                                return (
                                    <Card key={index}>
                                        <h3 className='text-yellow-400 text-xl sm:text-2xl p-1'>{recipe.title}</h3>
                                        <div className='flex flex-col my-3'>
                                            <div className='max-w-[200px] p-2'>
                                                <img src={recipe.image} alt={recipe.title} className=" min-h-[100px] object-cover" />
                                            </div>
                                            <div className='p-2'>
                                                <Button>
                                                    <Link to={"/RecipeDetails" }>Clicca qui!</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default SearchRecipies;
import Card from "../../../shared/components/Card";
import { useFetchDetails } from "../hooks/useSearchRecipes";
import { useParams, Link } from "react-router-dom";

function RecipeDetails() {
    const { recipeId } = useParams<{ recipeId: string }>();
    const { recipeDetail, loading, error } = useFetchDetails(recipeId || '');

    return (
        <div className='bg-zinc-100 flex flex-col justify-center items-center text-center p-4 min-h-screen w-full'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {recipeDetail && (
                <>
                    <div className="mx-auto text-center p-5 mb-10">
                        <h1 className="text-2xl sm:text-5xl text-yellow-500">Recipe: {recipeDetail.title}</h1>
                    </div>
                    <Card>
                        <h2 className='text-yellow-400 text-2xl sm:text-3xl p-1 my-2'>{recipeDetail.title}</h2>
                        <div className='flex flex-col my-3'>
                            <div className='w-full p-2'>
                                <img src={recipeDetail.image} alt={recipeDetail.title} className="max-h-[200px] object-cover" />
                            </div>
                            <h3 className="text-lg sm:text-2xl text-yellow-500 my-3">Cooking time:</h3>
                            <div className="flex justify-center items-center text-center py-3 px-2">
                                <p className="text-lg mr-3">Ready in minutes: </p>
                                <span className="text-lg">{recipeDetail.readyInMinutes}</span>
                            </div>
                            <h3 className="text-yellow-400 text-lg sm:text-2xl my-3">Ingredients: </h3>
                            <ul className="p-2 list-none">
                                {recipeDetail.extendedIngredients && recipeDetail.extendedIngredients.map((ingredient, idx) => (
                                    <li key={idx} className="p-2"><span>{ingredient.name}</span>: {ingredient.amount} {ingredient.unit}</li>
                                ))}
                            </ul>
                            <Link to='/' className="bg-red-500 text-white rounded-lg shadow-red-200 shadow-lg p-4">Back to the Homepage</Link>
                        </div>
                    </Card>
                </>
            )}
        </div>
    );
}

export default RecipeDetails;

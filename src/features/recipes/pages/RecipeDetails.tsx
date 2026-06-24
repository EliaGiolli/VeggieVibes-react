import Card from "../../../shared/components/Card";
import { buttonVariants } from "../../../shared/components/Button";
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
                    <Card className="w-full sm:max-w-2xl flex flex-col items-center text-center p-4">
                        <h2 className='text-yellow-600 text-2xl sm:text-3xl p-1 my-2 font-semibold'>{recipeDetail.title}</h2>
                        <div className='flex flex-col items-center my-3 gap-3 w-full'>
                            <div className='w-full p-2'>
                                <img src={recipeDetail.image} alt={recipeDetail.title} className="max-h-[200px] object-cover rounded-md mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-2xl text-yellow-600 font-medium">Cooking time</h3>
                            <div className="flex justify-center items-center gap-2 py-1 px-2">
                                <p className="text-base text-zinc-600">Ready in minutes:</p>
                                <span className="text-base font-semibold">{recipeDetail.readyInMinutes}</span>
                            </div>
                            <h3 className="text-yellow-600 text-lg sm:text-2xl font-medium mt-2">Ingredients</h3>
                            <ul className="p-2 list-none w-full space-y-1">
                                {recipeDetail.extendedIngredients && recipeDetail.extendedIngredients.map((ingredient, idx) => (
                                    <li key={idx} className="py-1 px-2 rounded-md hover:bg-zinc-50 text-sm">
                                        <span className="font-medium">{ingredient.name}</span>: {ingredient.amount} {ingredient.unit}
                                    </li>
                                ))}
                            </ul>
                            <Link to='/' className={buttonVariants({ variant: "destructive" })}>
                                Back to Homepage
                            </Link>
                        </div>
                    </Card>
                </>
            )}
        </div>
    );
}

export default RecipeDetails;

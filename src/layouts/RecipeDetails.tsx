import Card from "../components/Card";
import { useFetchDetails } from "../custom hooks/useSearchRecipies";
import { useParams } from "react-router-dom";

function RecipeDetails() {
    const { recipeId } = useParams<{ recipeId: string }>();
    const { recipiesDetail, loading, error } = useFetchDetails(recipeId || '');

    return (
        <div className='bg-green-700 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5 p-2 w-full h-full'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {
                recipiesDetail && (
                    <Card>
                        <h3 className='text-yellow-400 text-xl sm:text-2xl p-1'>{recipiesDetail.title}</h3>
                        <div className='flex flex-col my-3'>
                            <div className='max-w-[200px] p-2'>
                                <img src={recipiesDetail.image} alt={recipiesDetail.title} className="min-h-[100px] object-cover" />
                            </div>
                            <div className="flex justify-between items-center text-center py-3 px-2">
                                <p className="sm:text-lg">{recipiesDetail.readyInMinutes}</p>
                                <p className="sm:text-lg">{recipiesDetail.servings}</p>
                            </div>
                            <ol>
                                {recipiesDetail.ingredients && recipiesDetail.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient.name}: {ingredient.amount} {ingredient.unit}</li>
                                ))}
                            </ol>
                        </div>
                    </Card>
                )
            }
        </div>
    );
}

export default RecipeDetails;
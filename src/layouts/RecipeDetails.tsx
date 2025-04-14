import Card from "../components/Card";
import { RecipeDetails } from "../utils/types"

function RecipeDetails() {
  return (
    <div className='bg-green-700 grid grid-cols-1 md:grid cols-3 lg:grid-cols-4 gap-6 my-5 p-2 w-full h-full'>
        {
            recipies.length > 0 && recipies.slice(0, 20).map((recipe: RecipeDetails, index) => {
                return (
                    <Card key={index}>
                        <h3 className='text-yellow-400 text-xl sm:text-2xl p-1'>{recipe.title}</h3>
                        <div className='flex flex-col my-3'>
                            <div className='max-w-[200px] p-2'>
                                <img src={recipe.image} alt={recipe.title} className=" min-h-[100px] object-cover" />
                            </div>
                        </div>
                    </Card>
                );
            })
        }
    </div>
    )
}

export default RecipeDetails
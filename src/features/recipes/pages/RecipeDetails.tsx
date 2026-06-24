import { useParams, Link } from 'react-router-dom';
import { FaClock, FaArrowLeft, FaLeaf } from 'react-icons/fa';
import { useFetchDetails } from '../hooks/useSearchRecipes';
import Card from '../../../shared/components/Card';
import Badge from '../../../shared/components/Badge';

function RecipeDetails() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { recipeDetail, loading, error } = useFetchDetails(recipeId || '');

  return (
    <div className="px-4 sm:px-6 py-8 pb-24">
      <Link
        to="/recipes"
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors mb-6"
      >
        <FaArrowLeft aria-hidden="true" className="text-xs" />
        Back to Recipes
      </Link>

      <div aria-live="polite" aria-busy={loading}>
        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24" role="status">
            <div className="text-center">
              <div
                className="w-10 h-10 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                aria-hidden="true"
              />
              <p className="text-stone-500 text-sm">Loading recipe…</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div role="alert" className="text-center py-16">
            <p className="inline-block bg-red-50 text-red-600 border border-red-200 rounded-xl px-5 py-3 text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Recipe detail */}
        {recipeDetail && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-4 leading-snug">
                {recipeDetail.title}
              </h1>
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge variant="default">
                  <FaLeaf aria-hidden="true" />
                  Plant-Based
                </Badge>
                <Badge variant="warning">
                  <FaClock aria-hidden="true" />
                  {recipeDetail.readyInMinutes} min
                </Badge>
              </div>
            </div>

            <Card className="overflow-hidden p-0">
              {/* Recipe image */}
              <div className="h-56 sm:h-80 bg-stone-100 overflow-hidden">
                <img
                  src={recipeDetail.image}
                  alt={`Photo of ${recipeDetail.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-stone-900 mb-1">Ingredients</h2>
                <p className="text-stone-400 text-xs mb-5 uppercase tracking-wide">
                  What you'll need
                </p>

                {recipeDetail.extendedIngredients && recipeDetail.extendedIngredients.length > 0 ? (
                  <ul className="divide-y divide-stone-100" aria-label="Ingredients list">
                    {recipeDetail.extendedIngredients.map((ingredient, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-3 text-sm gap-4"
                      >
                        <span className="font-medium text-stone-800 capitalize">
                          {ingredient.name}
                        </span>
                        <span className="text-stone-500 shrink-0 text-right">
                          {ingredient.amount} {ingredient.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-stone-400 text-sm">No ingredients listed for this recipe.</p>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;

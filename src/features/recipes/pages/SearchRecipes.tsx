import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaLeaf } from 'react-icons/fa';
import { useFetch } from '../hooks/useSearchRecipes';
import { RecipeSearch } from '../types/recipeTypes';
import Input from '../../../shared/components/Input';
import Card from '../../../shared/components/Card';
import { buttonVariants } from '../../../shared/components/Button';

function SearchRecipes() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { recipes, error, loading } = useFetch(searchQuery);

  return (
    <div className="pb-24">
      {/* Hero search section */}
      <section
        className="relative bg-emerald-900 rounded-3xl px-6 py-14 my-8 text-center overflow-hidden"
        aria-labelledby="search-heading"
      >
        {/* Decorative leaves */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <FaLeaf className="absolute top-4 left-6 text-white/10 text-7xl rotate-12" />
          <FaLeaf className="absolute bottom-4 right-6 text-white/10 text-9xl -rotate-12" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Find your next meal
          </p>
          <h1
            id="search-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Search Plant-Based Recipes
          </h1>
          <p className="text-emerald-100 text-base sm:text-lg mb-8 leading-relaxed">
            Explore our collection of{' '}
            <strong className="text-amber-400">vegetarian and vegan</strong> recipes for every
            taste and occasion.
          </p>

          <div className="relative">
            <label htmlFor="recipe-search" className="sr-only">
              Search recipes
            </label>
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none z-10"
              aria-hidden="true"
            />
            <Input
              id="recipe-search"
              variant="search"
              size="lg"
              type="search"
              value={searchQuery}
              placeholder="e.g. pasta, curry, salad…"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11"
              autoComplete="off"
              autoFocus
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section aria-live="polite" aria-busy={loading} aria-label="Search results">
        {/* Loading state */}
        {loading && searchQuery.trim() !== '' && (
          <div className="flex justify-center py-16" role="status">
            <div className="text-center">
              <div
                className="w-9 h-9 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"
                aria-hidden="true"
              />
              <p className="text-stone-500 text-sm">Finding recipes…</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-10" role="alert">
            <p className="inline-block bg-red-50 text-red-600 border border-red-200 rounded-xl px-5 py-3 text-sm">
              {error}
            </p>
          </div>
        )}

        {/* Empty query state */}
        {!loading && searchQuery.trim() === '' && (
          <div className="text-center py-20">
            <FaLeaf className="text-emerald-100 text-7xl mx-auto mb-4" aria-hidden="true" />
            <p className="text-stone-400 text-base">Start typing to discover plant-based recipes.</p>
          </div>
        )}

        {/* No results state */}
        {!loading && searchQuery.trim() !== '' && recipes.length === 0 && !error && (
          <div className="text-center py-20">
            <FaLeaf className="text-stone-200 text-6xl mx-auto mb-4" aria-hidden="true" />
            <p className="text-stone-600 text-lg font-medium">
              No recipes found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-stone-400 text-sm mt-2">Try a different ingredient or dish name.</p>
          </div>
        )}

        {/* Results grid */}
        {recipes.length > 0 && !loading && (
          <div>
            <p className="text-sm text-stone-500 mb-6 px-1">
              Showing{' '}
              <strong className="text-stone-700">{Math.min(recipes.length, 20)}</strong> results
              for &ldquo;<strong className="text-stone-700">{searchQuery}</strong>&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {recipes.slice(0, 20).map((recipe: RecipeSearch) => (
                <Card
                  key={recipe.id}
                  className="flex flex-col overflow-hidden group p-0"
                >
                  <div className="overflow-hidden h-44 bg-stone-100">
                    <img
                      src={recipe.image}
                      alt={`Photo of ${recipe.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-3">
                    <h2 className="font-semibold text-stone-800 text-sm leading-snug line-clamp-2">
                      {recipe.title}
                    </h2>
                    <div className="mt-auto">
                      <Link
                        to={`/recipe/${recipe.id}`}
                        className={`${buttonVariants({ variant: 'default', size: 'sm' })} w-full`}
                      >
                        View Recipe
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default SearchRecipes;

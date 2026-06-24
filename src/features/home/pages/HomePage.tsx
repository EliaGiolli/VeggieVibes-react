import { Link } from 'react-router-dom';
import { FaLeaf, FaSeedling, FaHeart, FaGlobeAmericas } from 'react-icons/fa';

const features = [
  {
    icon: FaLeaf,
    title: 'Curated Recipes',
    description:
      'We handpick the most vibrant, balanced, and delicious plant-based meals from around the world.',
  },
  {
    icon: FaSeedling,
    title: 'Simple Ingredients',
    description:
      'No weird substitutes. Just real, fresh food you can find at any local market or grocery store.',
  },
  {
    icon: FaHeart,
    title: 'Health-First Approach',
    description:
      'Every dish is packed with nutrients and designed to support a healthy, energised lifestyle.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Planet-Friendly',
    description:
      'Going plant-based is one of the most powerful choices for your body and our shared planet.',
  },
];

function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="text-center px-6 py-20 md:py-28" aria-labelledby="hero-heading">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-7">
          <FaLeaf aria-hidden="true" className="text-emerald-500 text-xs" />
          Plant-based living, simplified
        </div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold text-stone-900 mb-5 leading-tight max-w-3xl mx-auto"
        >
          Discover the Joy of{' '}
          <span className="text-emerald-700">Plant-Based</span> Cooking
        </h1>

        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're vegan, vegetarian, or just plant-curious — VeggieVibes has vibrant
          recipes to inspire every meal.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/recipes"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3 rounded-xl transition-all active:scale-[0.97] shadow-sm"
          >
            <FaSeedling aria-hidden="true" />
            Browse Recipes
          </Link>
          <Link
            to="/work-with-us"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium px-7 py-3 rounded-xl transition-all"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="px-6 py-16" aria-labelledby="features-heading">
        <div className="max-w-4xl mx-auto">
          <h2
            id="features-heading"
            className="text-2xl md:text-3xl font-bold text-stone-900 text-center mb-3"
          >
            Why VeggieVibes?
          </h2>
          <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto">
            We believe eating well and living sustainably can be the same beautiful thing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-emerald-600 text-base" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 text-base">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto bg-emerald-900 rounded-3xl px-8 py-14 text-center text-white">
          <FaLeaf className="text-emerald-400 text-3xl mx-auto mb-5" aria-hidden="true" />
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-3">
            Ready to get cooking?
          </h2>
          <p className="text-emerald-100 mb-7 leading-relaxed max-w-sm mx-auto">
            Start exploring thousands of healthy, flavour-packed recipes for every skill level.
          </p>
          <Link
            to="/recipes"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-[0.97] shadow-md"
          >
            <FaSeedling aria-hidden="true" />
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

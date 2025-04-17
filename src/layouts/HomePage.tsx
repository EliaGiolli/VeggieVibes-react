import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

function HomePage() {
  return (
    <main className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <FaLeaf className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
          Welcome to VeggieVibes 🌱
        </h1>
        <p className="text-lg text-zinc-700 max-w-2xl mx-auto">
          Discover a world of delicious, healthy, and easy-to-make plant-based recipes. Whether you're vegan, vegetarian, or just curious — we've got the flavor.
        </p>
      </section>

      {/* Why VeggieVibes Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-800  mb-4">
          Why choose VeggieVibes?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-800">
          <li><strong>Curated recipes:</strong> We handpick the most vibrant and balanced plant-based meals.</li>
          <li><strong>Simple ingredients:</strong> No weird substitutes. Just real, fresh food you can find anywhere.</li>
          <li><strong>Health-first approach:</strong> Every dish supports a healthy lifestyle — without sacrificing taste.</li>
          <li><strong>Sustainability matters:</strong> Going plant-based is better for you and the planet. 🌍</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h3 className="text-xl font-semibold mb-2 text-green-800">
          Ready to get cooking?
        </h3>
        <p className="text-zinc-700 mb-4">
          Start exploring delicious, healthy recipes tailored for every taste and skill level.
        </p>
        <Link
          to="/recipes"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-xl transition-all"
        >
          Browse Recipes
        </Link>
      </section>
    </main>
  );
}

export default HomePage;

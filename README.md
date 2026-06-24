# VeggieVibes

VeggieVibes is a recipe discovery app for people interested in plant-based eating. Users can search for vegetarian and vegan recipes, browse results, and view full recipe details — including ingredients and cooking time — all powered by the [Spoonacular API](https://spoonacular.com/food-api).

Whether you're fully vegan, vegetarian, or just trying to eat more plants, VeggieVibes makes it easy to find something tasty and healthy to cook.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.7 |
| Routing | React Router v7 |
| HTTP Client | Axios |
| Styling | Tailwind CSS v4 |
| Icons | React Icons |
| Build Tool | Vite 6 |

---

## Project Structure

```
src/
├── components/         # Reusable UI components (Button, Card, Input, Navbar, Footer)
├── custom hooks/       # Data-fetching hooks (useFetch, useFetchDetails)
├── layouts/            # Page-level components
│   ├── HomePage.tsx        # Landing page with hero and CTA
│   ├── SearchRecipies.tsx  # Search page with recipe grid
│   ├── RecipeDetails.tsx   # Single recipe view (ingredients, cook time)
│   ├── WorkTogether.tsx    # Contact / collaboration page
│   ├── RootLayout.tsx      # Shared layout (Navbar + Footer)
│   └── ErrorPage.tsx       # 404 / error boundary page
├── types/              # TypeScript interfaces for API responses and component props
├── utils/
│   └── router.tsx      # React Router configuration
└── main.tsx            # App entry point
```

---

## Key Implementation Details

- **Debounced search** — API calls are delayed by 400 ms after the user stops typing, reducing unnecessary requests.
- **Request cancellation** — An `AbortController` cancels any in-flight request when a new search starts, preventing race conditions and stale data.
- **Typed API responses** — `RecipeSearch` and `RecipeDetails` interfaces ensure type safety end-to-end from the API to the UI.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tuo-username/veggievibes.git
   cd veggievibes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your Spoonacular API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## License

This project is licensed under the MIT License.

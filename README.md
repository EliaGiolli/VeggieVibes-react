<div align="center">

# 🌿 VeggieVibes

**A modern recipe discovery app for plant-based eating.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

Search, browse, and explore thousands of vegetarian and vegan recipes — powered by the [Spoonacular API](https://spoonacular.com/food-api).

</div>

---

## ✨ Features

- 🔍 **Instant search** — debounced, cancellable API calls with live results
- 🥗 **Recipe cards** — image-first layout with smooth hover interactions
- 📋 **Recipe detail view** — full ingredient list, cooking time, and badges
- 📱 **Fully responsive** — mobile-first design with a hamburger nav menu
- ♿ **Accessible** — ARIA landmarks, skip link, live regions, keyboard navigation
- 🎨 **Modern UI** — emerald + amber palette, Poppins + Lora typography

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.7 |
| Routing | React Router v7 |
| HTTP Client | Axios |
| Styling | Tailwind CSS v4 |
| Component variants | class-variance-authority (CVA) |
| Class merging | clsx + tailwind-merge |
| Icons | React Icons |
| Build tool | Vite 6 |

---

## 📁 Project Structure

```
src/
├── core/
│   ├── layouts/          # RootLayout — Navbar + Footer + skip link wrapper
│   ├── lib/
│   │   └── utils.ts      # cn() helper (clsx + tailwind-merge)
│   └── router/           # React Router config
├── features/
│   ├── home/pages/       # HomePage — hero, feature cards, CTA banner
│   ├── recipes/
│   │   ├── hooks/        # useFetch, useFetchDetails (debounced + AbortController)
│   │   ├── pages/        # SearchRecipes, RecipeDetails
│   │   └── types/        # RecipeSearch, RecipeDetails, Ingredient interfaces
│   └── work/pages/       # WorkTogether — careers / collaboration page
└── shared/
    ├── components/       # Button, Card, Input, Badge, Navbar, Footer, ErrorBoundary
    └── pages/            # ErrorPage (404)
```

---

## 🧩 Component System

Shared components follow a **ShadCN-style pattern**: built with CVA for variant-based styling, accept a `className` prop for one-off overrides, and spread native HTML attributes so nothing is silently swallowed.

```tsx
// Variants
<Button variant="outline" size="sm">Save</Button>
<Badge variant="warning">Vegetarian</Badge>

// Compose with cn() for conditional classes
<Card className={cn("p-4", isHighlighted && "ring-2 ring-emerald-500")}>
  <CardHeader>
    <CardTitle>Pasta Primavera</CardTitle>
    <CardDescription>Ready in 20 minutes</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>

// buttonVariants lets any element look like a Button
<Link to="/recipes" className={buttonVariants({ variant: "default" })}>
  Browse Recipes
</Link>
```

### Available variants

| Component | Variants | Sizes |
|---|---|---|
| `Button` | `default` `outline` `ghost` `secondary` `destructive` `accent` | `sm` `default` `lg` `icon` |
| `Input` | `default` `search` | `sm` `default` `lg` |
| `Badge` | `default` `secondary` `destructive` `outline` `warning` | — |
| `Card` | — | — |

`Card` sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.

---

## ⚙️ Key Implementation Details

- **Debounced search** — API calls are delayed 400 ms after the user stops typing, reducing unnecessary requests.
- **Request cancellation** — An `AbortController` cancels any in-flight request when a new search starts, preventing race conditions and stale data.
- **Typed API responses** — `RecipeSearch` and `RecipeDetails` interfaces enforce type safety end-to-end from the API to the UI.
- **Accessible async states** — Loading and error regions use `aria-live="polite"` and `role="status"` / `role="alert"` so screen readers announce updates correctly.

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/your-username/veggievibes.git
cd veggievibes
```

**2. Install dependencies**
```bash
npm install
```

**3. Add your API key**

Create a `.env` file in the project root:
```env
VITE_API_KEY=your_spoonacular_api_key
```

> Get a free API key at [spoonacular.com/food-api](https://spoonacular.com/food-api)

**4. Start the dev server**
```bash
npm run dev
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with 🌱 by [Elia Giolli](https://github.com/EliaGiolli)

</div>

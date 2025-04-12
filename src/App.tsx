
import './App.css'
import { useFetch } from './custom hooks/useSearchRecipies'
import { RecipeSearch } from './utils/types';



function App() {
  const {recipies, error, loading} = useFetch();
  //const [searchRecipies, setSearchRecipies] = useState(0)

  return (
    <>
    {loading && <p>Loading...</p>}
    {loading && <p>{error}</p>}
      <div>
        {
          recipies.length > 0 && recipies.slice(0,10).map((recipe:RecipeSearch, index)=>{
            return (
              <div key={index}>
                <h3>{recipe.title}</h3>
                <div>
                  <img src={recipe.image} alt="" />
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default App

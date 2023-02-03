import {useState} from "react";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import recipeData from "./recipeData.json"

function App() {
const [ingredList, setIngredList] = useState([])

const deleteIngredient = (id) => {
  setIngredList(prevIngredList => {
    const updatedList = prevIngredList.filter(ingredient => prevIngredList.indexOf(ingredient)!== id)
    return updatedList
  })
}

const clearIngredients = () => {
  setIngredList([])
}

const recipeList = recipeData.map(recipe => {
  return(
      <RecipeList 
          key={recipe.recipe_id}
          // passing the entire prop object (recipe from .map()) 
          // to an instance of the Recipe component
          recipe={recipe}
      />
  )
})


  return (
    <main className="App">
      <IngredientList 
        ingredList={ingredList} 
        setIngredList={setIngredList} 
        deleteIngredient={deleteIngredient}
        clearIngredients={clearIngredients}
      />
      <div>
        {recipeList}
      </div>
    </main>
  );
}

export default App;

import {useState} from "react";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import Randomizer from "./components/Randomizer";

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

const findRecipes = () => {
  console.log("Here is where we make API calls")
}

const getRandomRecipes = () => {
  console.log("get random recipes list")
}


  return (
    <main className="App">
      <IngredientList 
        ingredList={ingredList} 
        setIngredList={setIngredList} 
        deleteIngredient={deleteIngredient}
        clearIngredients={clearIngredients}
        findRecipes={findRecipes}
      />
      
      <RecipeList />
      <Randomizer getRandomRecipes={getRandomRecipes} />
    </main>
  );
}

export default App;

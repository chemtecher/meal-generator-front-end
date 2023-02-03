import {useState} from "react";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";


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
    </main>
  );
}

export default App;

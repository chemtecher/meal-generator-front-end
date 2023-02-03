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
//   const recipeList = data.map(recipe => {
//     return(
//         <Recipe 
//             key={recipe.id}
//             // passing the entire prop object (recipe from .map()) 
               // to an instance of the Recipe component
//             recipe={recipe}
//         />
//     )
// })


  return (
    <main className="App">
      <IngredientList ingredList={ingredList} setIngredList={setIngredList} deleteIngredient={deleteIngredient}/>
      <RecipeList />
    </main>
  );
}

export default App;

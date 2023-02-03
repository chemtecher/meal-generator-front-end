import React from 'react'

function RecipeCard(props) {
  const {image, title, time, recipe_url, servings} = props.recipe
  return (
    <div>RecipeCard
      <br/>
      <img className="recipe-img" src={image} alt="food dish"/>
      <h2>{title}</h2>
      <p> clock image {time}</p>
      <p>plate or fork image {servings}</p>
    </div>
  )
}

export default RecipeCard
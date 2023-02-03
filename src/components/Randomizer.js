import React from 'react'

function Randomizer() {


  return (
    <div>Randomizer
      <button
      className="button random-recipes"
      onClick={getRandomRecipes}
      >Submit
    </button>

    </div>
  )
}

export default Randomizer
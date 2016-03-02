'use strict';

function addIngredient (recipe, ingredientName, ingredientAmount){
    recipe[ingredientName] = ingredientAmount;
    return recipe;
}

function removeIngredient (recipe, ingredient){
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient (recipe, ingredient, ingredientAmount){
  recipe[ingredient] = ingredientAmount;
  return recipe;
}

function readRecipe (recipe) {
  for (var key in recipe){
  console.log("this recipe calls for " + recipe[key] + " of " + key)
  }
}
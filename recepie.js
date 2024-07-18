function findRecipes() {
    // Get user input
    const userInput = document.getElementById("ingredients").value.trim().toLowerCase();
    const ingredients = userInput.split(",").map(ingredient => ingredient.trim());
  
    // Sample recipe data (to be replaced with API call in the future)
    const recipes = [
      { name: "Scrambled Eggs", ingredients: ["eggs", "milk", "butter"] },
      { name: "Pancakes", ingredients: ["flour", "milk", "eggs"] },
      { name: "Chocolate Chip Cookies", ingredients: ["flour", "butter", "sugar", "chocolate chips"] },
      { name: "Biryani", ingredients: ["rice", "chicken", "yogurt", "spices", "onion", "tomato"] },
    { name: "Butter Chicken", ingredients: ["chicken", "butter", "cream", "tomato", "spices"] },
    { name: "Vegetable Stir Fry", ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "rice"] }
    ];
  
    // Find matching recipes
    const matchingRecipes = recipes.filter(recipe => {
      // Check if all user ingredients are present in the recipe
      return ingredients.every(ingredient => recipe.ingredients.includes(ingredient));
    });
  
    // Display results
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear previous results
  
    if (matchingRecipes.length > 0) {
      const heading = document.createElement("h2");
      heading.textContent = "Matching Recipes";
      recipeList.appendChild(heading);
  
      matchingRecipes.forEach(recipe => {
        const recipeItem = document.createElement("p");
        recipeItem.textContent = recipe.name;
        recipeList.appendChild(recipeItem);
      });
    } else {
      recipeList.textContent = "No recipes found for your ingredients.";
    }
  }
  
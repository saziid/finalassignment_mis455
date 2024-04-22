function searchMeals() {
    document.getElementById("mealList").innerHTML = "";

    var searchInput = document.getElementById("searchInput").value;

   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
   .then(response => response.json())
   .then(data => {
       for (let i = 0; i < Math.min(5, data.meals.length); i++) {
           displayMeal(data.meals[i]);
       }
   })
   .catch(error => console.error('Error:', error));
}

function displayMeal(meal) {
    var mealDiv = document.createElement("div");
    mealDiv.classList.add("meal-item");

    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h2>${meal.strMeal}</h2>
   
    `;

    document.getElementById("mealList").appendChild(mealDiv);
}

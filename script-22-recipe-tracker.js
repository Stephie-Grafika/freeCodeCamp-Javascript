function recipeTrackerStarten() {
    // 1. DER KARTEIKASTEN: Ein leeres Array, um alle Rezepte zu sammeln
    const recipes = [];

    // 2. DIE REZEPT-KARTEN: Wir erstellen Objekte für jedes Gericht.
    // totalIngredients und difficultyLevel sind noch leer (null oder ""),
    // weil wir sie später automatisch berechnen wollen.
    const recipe1 = {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
        cookingTime: 22,
        totalIngredients: null,
        difficultyLevel: ""
    };

    const recipe2 = {
        name: "Chicken Curry",
        ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
        cookingTime: 42,
        totalIngredients: null,
        difficultyLevel: ""
    };

    const recipe3 = {
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrot", "bell pepper"],
        cookingTime: 15,
        totalIngredients: null,
        difficultyLevel: ""
    };

    // 3. ABLEGEN: Wir legen die drei Rezept-Karten in unseren Kasten (Array)
    recipes.push(recipe1, recipe2, recipe3);

    // 4. DIE WERKZEUGE (Funktionen):
    // Zählt, wie viele Elemente in der Zutaten-Liste sind
    function getTotalIngredients(ingredients) {
        return ingredients.length;
    }

    // Bestimmt den Schwierigkeitsgrad anhand der Zeit
    function getDifficultyLevel(cookingTime) {
        if (cookingTime <= 30) {
            return "easy";
        } else if (cookingTime <= 60) {
            return "medium";
        } else {
            return "hard";
        }
    }

    // 5. DAS AUSFÜLLEN: Wir nutzen die Werkzeuge, um die Lücken in den Objekten zu füllen.
    // Wir sagen: "Nimm das Ergebnis der Funktion und schreibe es direkt in das Objekt."
    
    // Rezept 1 ausfüllen
    recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
    recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

    // Rezept 2 ausfüllen
    recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
    recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

    // Rezept 3 ausfüllen
    recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
    recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

    //Perspektivisch mit for-each lösen

    // 6. DAS ERGEBNIS: Wir lassen uns den fertigen Karteikasten anzeigen
    console.log(recipes);
}
document.addEventListener('DOMContentLoaded', () => {
    const ingredients = {
        "garlicFriedChickenIngredients": {
            name: "Garlic Chicken Fried Chicken",
            ingredients: [
                "2 teaspoons garlic powder, or to taste",
                "1 teaspoon ground black pepper",
                "1 teaspoon salt",
                "1 teaspoon paprika",
                "½ cup seasoned bread crumbs",
                "1 cup all - purpose flour",
                "½ cup milk",
                "1 egg",
                "4 skinless, boneless chicken breast halves - pounded thin",
                "1 cup oil for frying, or as needed"
            ]
        },
        "arrozCaldoIngredients": {
            name: "Chicken Arroz Caldo",
            ingredients: [
                "2 tablespoons olive oil",
                "1 onion, diced",
                "2 cloves garlic, crushed",
                "1 (2 inch) piece fresh ginger, peeled and thinly sliced",
                "2 ¼ pounds chicken wings, split and tips discarded",
                "1 tablespoon fish sauce(Optional)",
                "5 ¼ cups chicken broth",
                "1 cup glutinous sweet rice",
                "salt and pepper to taste",
                "1 green onion, chopped",
                "1 lemon, sliced(Optional)",
                "1 teaspoon fish sauce for sprinkling, if desired(Optional)"
            ]
        },
        "porkTenderLoinIngredients": {
            name: "Grilled Pork Tenderloin",
            ingredients: [
                "2(1 pound) pork tenderloins",
                "1 teaspoon garlic powder",
                "1 teaspoon salt",
                "1 teaspoon ground black pepper",
                "1 cup barbecue sauce, divided"
            ]
        }
    }

    function displayIngredients(recipeName, ingredientClass) {
        const recipe = ingredients[recipeName];

        if (recipe) {
            const ingredientsList = document.querySelector(ingredientClass);
            recipe.ingredients.forEach((ingredient) => {
                const ingredientItem = document.createElement("li");
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
        } else {
            console.error("Recipe not found");
        }
    }

    if (document.querySelector(".garlicFriedChickenIngredients")) {
        displayIngredients("garlicFriedChickenIngredients", ".garlicFriedChickenIngredients");
    } else if (document.querySelector(".arrozCaldoIngredients")) {
        displayIngredients("arrozCaldoIngredients", ".arrozCaldoIngredients");
    } else if (document.querySelector(".porkTenderLoinIngredients")) {
        displayIngredients("porkTenderLoinIngredients", ".porkTenderLoinIngredients");
    }

    const directions = {
        "garlicFriedChickenDirections": {
            name: "Garlic Chicken Fried Chicken",
            directions: [
                "Step 1: In a shallow dish, mix together the garlic powder, pepper, salt, paprika, bread crumbs and flour.In a separate dish, whisk together the milk and egg.",

                "Step 2: Heat the oil in an electric skillet set to 350 degrees F(175 degrees C).Dip the chicken into the egg and milk, then dredge in the dry ingredients until evenly coated.",

                "Step 3: Fry chicken in the hot oil for about 5 minutes per side, or until the chicken is cooked through and juices run clear.Remove from the oil with a slotted spatula, and serve."
            ]
        },
        "arrozCaldoDirections": {
            name: "Chicken Arroz Caldo",
            directions: [
                "Step 1: Heat oil in a large pot over medium heat.Cook and stir onion, garlic, and ginger in hot oil until fragrant, about 5 minutes.Add chicken wings; cook and stir for 1 minute.Stir in fish sauce, cover, and cook another 2 minutes.",

                "Step 2: Pour chicken broth into the pot.Stir in sweet rice and bring mixture to a boil.Cover and cook for 10 minutes, stirring occasionally to prevent rice from sticking to the bottom of the pot.Season with salt and pepper.",

                "Step:3 Portion soup into bowls and garnish with green onion.Serve with lemon slices and additional fish sauce, if desired."
            ]
        },
        "porkTenderloinDirections": {
            name: "Grilled Pork Tenderloin",
            directions: [
                "Step 1: Preheat grill for medium - high heat.Season pork with garlic powder, salt, and pepper.Lightly oil the grill grate.Place pork on the grill, and cook 15 minutes.Turn, and continue cooking 10 minutes, or to an internal temperature of 145 degrees F(63 degrees C).",

                "Step 2: Brush barbeque sauce onto each side of the pork during the last 10 minutes of cooking."
            ]
        }
    }

    function displayDirections(recipeName, directionClass) {
        const recipe = directions[recipeName];

        if (recipe) {
            const directionsList = document.querySelector(directionClass);
            recipe.directions.forEach((direction) => {
                const directionItem = document.createElement("p");
                directionItem.textContent = direction;
                directionsList.appendChild(directionItem);
            })
        }
    }

    if (document.querySelector(".garlicFriedChickenDirections")) {
        displayDirections("garlicFriedChickenDirections", ".garlicFriedChickenDirections");
    } else if (document.querySelector(".arrozCaldoDirections")) {
        displayDirections("arrozCaldoDirections", ".arrozCaldoDirections");
    } else if (document.querySelector(".porkTenderloinDirections")) {
        displayDirections("porkTenderloinDirections", ".porkTenderloinDirections");
    }
});

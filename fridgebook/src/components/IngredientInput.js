import React from 'react';
import "./style.css";

function IngredientInput(){
    return (
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="ingredient_name" placeholder="Enter Ingredient Name"></input>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="ingredient_name" placeholder="Enter Ingredient Name"></input>
            </div>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="ingredient_name" placeholder="Enter Ingredient Name"></input>
            </div>
        </form>
        
    )
}

export default IngredientInput
import React from 'react';
import "./style.css";

function IngredientInput(){
    return (
        <form>
            <div class="container">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="ingredient_name" placeholder="Enter Ingredient Name"></input>
                </div>
                <div class="form-group">
                    <label for="name">Expiration Date:</label>
                    <input type="date" class="form-control" id="date_expire" placeholder="Enter Expiration Date"></input>
                </div>
                <div class="form-group">
                    <label for="name">Quantity:</label>
                    <input type="text" class="form-control" id="quantity" placeholder="Enter Ingredient Quantity"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
        
    )
}

export default IngredientInput
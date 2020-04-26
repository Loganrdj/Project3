import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

class IngredientInput extends Component{

    state = {
        name: "",
        date_expire: "",
        quantity: 0
    }

    updateIngredient = (event) => {
        //Input ingredient into sequelize
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitIngredient = (event) => {
        event.preventDefault();
        console.log(this.state)
        // return axios.post("&&&&&&&&&&&&&&& ROUTE HERE &&&&&&&&&&&&&&&", event)
    }

    render(){
        return (
            <form>
                <div class="container">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" 
                            onChange = {this.updateIngredient}
                            class="form-control" 
                            id="ingredient_name" 
                            placeholder="Enter Ingredient Name" 
                            name="name"
                            required>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="name">Expiration Date:</label>
                        <input type="date" 
                            onChange = {this.updateIngredient}
                            class="form-control" 
                            id="date_expire" 
                            placeholder="Enter Expiration Date" 
                            name="date_expire" 
                            required>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="name">Quantity:</label>
                        <input type="text" 
                            onChange = {this.updateIngredient}
                            class="form-control" 
                            id="quantity" 
                            placeholder="Enter Ingredient Quantity" 
                            name="quantity"
                            required>    
                        </input>
                    </div>
                    <button type="submit" onClick={this.submitIngredient} class="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
    
}

export default IngredientInput
import React, { Component } from 'react';
import "./style.css";
import Inventory from "./Inventory"
import axios from "axios";

class Kitchen extends Component{

    state = { 
        ingredients_fridge: undefined, 
        ingredients_pantry: undefined
    };

    componentDidMount() {
        axios.get('/profile').then((response) => {
            if (response.data) {
                let kitchenArr = [];
                let pantryArr = [];
                for(let i = 0; i < response.data.ingredients.length; i++){
                    if(response.data.ingredients[i].fridge_bool == true){
                        kitchenArr.push(response.data.ingredients[i]);
                    } else {
                        pantryArr.push(response.data.ingredients[i]);
                    }
                }
                // console.log(response.data);
                this.setState({ ingredients_fridge: kitchenArr, ingredients_pantry: pantryArr });
                
            }
        })
    }
    render(){
        return <div>
                <h1>Kitchen Page</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <Inventory name="Fridge" ingredients={this.state.ingredients_fridge}/>
                        </div>
                        <div className="col-md-6">
                            <Inventory name="Pantry" ingredients={this.state.ingredients_pantry}/>
                        </div>
                    </div>
                </div>
    }
}


export default Kitchen;

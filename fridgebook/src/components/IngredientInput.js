import React, { Component } from 'react';
import "./style.css";
import axios from 'axios';

class IngredientInput extends Component {
    state = {
        name: "",
        date_start: ``,
        date_expire: "",
        quantity: 0,
        fridge_bool: false
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
        let t = new Date();
        this.setState({ date_start: `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}` }, () => {
            console.log(this.state);
            axios.post("/api/ingredient", this.state)
                .then(res => this.props.afterSubmit())
                .catch(err => console.log(err))
        });
    }

    render() {
        return (
            <form>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            onChange={this.updateIngredient}
                            className="form-control"
                            id="ingredient_name"
                            placeholder="Enter Ingredient Name"
                            name="name"
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Expiration Date:</label>
                        <input type="date"
                            onChange={this.updateIngredient}
                            className="form-control"
                            id="date_expire"
                            placeholder="Enter Expiration Date"
                            name="date_expire"
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Quantity:</label>
                        <input type="text"
                            onChange={this.updateIngredient}
                            className="form-control"
                            id="quantity"
                            placeholder="Enter Ingredient Quantity"
                            name="quantity"
                            required>
                        </input>
                    </div>
                    <button type="submit" onClick={this.submitIngredient} className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }

}

export default IngredientInput
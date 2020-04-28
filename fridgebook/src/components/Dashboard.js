import React, { Component } from 'react';
import "./style.css";
import axios from "axios";
import IngredientInput from './IngredientInput';

class Dashboard extends Component {
    state = { user_name: undefined, ingredients: undefined, login: false };

    componentDidMount() {
        axios.get('/profile').then((response) => {
            if (response.data) {
                // console.log(response.data);
                this.setState({ login: true, user_name: response.data.user_name, ingredients: response.data.ingredients });
            } else {
                this.setState({ login: false, user_name: undefined, ingredients: undefined });
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.state.user_name}</h1>
                {this.state.login ?
                    <a href='http://localhost:8080/auth/logout'><button>Log Out</button></a>
                    :
                    <a type="button" href='http://localhost:8080/auth/google'><button>Log In</button></a>
                }
                <IngredientInput></IngredientInput>
            </div>
        );
    }

}


export default Dashboard;
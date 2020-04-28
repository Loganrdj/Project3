import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";

// axios.defaults.withCredentials = true;


class Home extends Component {
    state = {};

    login = () => {
        return axios.get('/auth/google');
    }

    componentDidMount() {
        let name = window.location.href.split("/");
        name = name[name.length - 1];
        name.replace("%20", " ");
        console.log(name);
        this.setState({ name });
        
        // , { withCredentials: true, credentials: "same-origin" }
        axios.get('/profile').then((response) => {
            if (response.data) {
                console.log(response.data);
            } else {
                console.log("Didn't log")
            }
        })
    }


    render() {
        return (
            <div>
                THis is Home Page
                <a href='/auth/google'><button onClick={this.login}>Log In</button></a>
            </div>
        );
    }

}


export default Home;


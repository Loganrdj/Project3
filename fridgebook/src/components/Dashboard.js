import React, { Component } from 'react';
import "./style.css";
import axios from "axios";
import IngredientInput from './IngredientInput';

class Dashboard extends Component {
    state = {};

    login = () => {
        return axios.get('/auth/google');
    }

    componentDidMount(){
        let name = window.location.href.split("/");
        name = name[name.length-1];
        name.replace("%20"," ");
        console.log(name);
        this.setState({name});


        axios.get('/profile').then((response)=>{
            if(response){
                console.log(response);
            }else{
                console.log("no response data")
            }
        })
    }


    render() {
        return (
            
            <div>
                
                {console.log("++++++++++")}
                {console.log(this.state.name)}
                {console.log("++++++++++")}
                <a href='http://localhost:8080/auth/google'><button onClick={this.login}>Log In</button></a>
                <IngredientInput></IngredientInput>
            </div>
        );
    }

}


export default Dashboard;
import React, { useState, useContext } from 'react';
import axios from 'axios';
import Recipes from './Recipes';
import { GlobalContext } from '../context/GlobalState';
import Header from './Header';

function Final(){
    return (
    <div>
    <Header />
    <Recipes />
    </div>
    )
}

export default Final;
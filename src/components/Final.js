import React, { useState, useContext } from 'react';
import Recipes from './Recipes';
import Header from './Header';

function Final(){
    return (
    <div className="row">
    <Header />
    <Recipes />
    </div>
    
    )
}

export default Final;
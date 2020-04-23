import React from 'react';
import "./style.css";
import Inventory from "./Inventory"

function Fridge(){
    
    return <div>
            <h1>Fridge Page</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Inventory name="Fridge"/>
                    </div>
                    <div className="col-md-6">
                        <Inventory name="Pantry"/>
                    </div>
                </div>
            </div>
    
    
}


export default Fridge;

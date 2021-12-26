import React, { Component } from 'react';
import GroceryGrid from "./grid/GroceryGrid.js";
import RecipeGrid from "./grid/RecipeGrid.js";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        var testGroceryData = [
            {
                Id: 1,
                Name: "Milk",
                Quantity: 2
            },
            {
                Id: 2,
                Name: "Eggs",
                Quantity: 12
            },
            {
                Id: 3,
                Name: "Bread",
                Quantity: 1
            }
        ];

        return (
            <>
                <GroceryGrid data={testGroceryData}/>
                <RecipeGrid />
            </>
        );
    }
}

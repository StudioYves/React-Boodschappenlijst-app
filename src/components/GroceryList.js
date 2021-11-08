import React from "react"
import Inputfield from "./Inputfield"
import List from "./List"



function GroceryList(props) {
    return (
        <div className="grocery-list">
            <Inputfield onSubmit={props.addGrocery}/>
            <List
                list={props.groceryItems}
                handleClick={props.handleClick}
                readonly={false}
            />
        </div>
    )

}


export default GroceryList




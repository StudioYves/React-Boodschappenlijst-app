import React from "react"

import List from "./List"

function Shoppingcart(props) {
    return(
        <div>
            <button className="button-emptycart" onClick={() => props.emptyCart()}>Leeg de winkelmand</button>
            <div className="shoppingcart">
                <List list={props.shoppingListItems} readonly={true}/>
            </div>
        </div>
    )
}

export default Shoppingcart


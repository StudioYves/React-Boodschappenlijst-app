import React from "react"
import GroceryList from "./components/GroceryList"
import Shoppingcart from "./components/Shoppingcart"





class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            groceryItems: [
                { id: 1, title: "Bananen" },
                { id: 2, title: "Schoenpoets" },
                { id: 3, title: "Hagelslag" },
                { id: 4, title: "Schoonmaakmiddel" }
            ],
            shoppingListItems: [
                { id: 1, title: "Chocola", amount: 1 },
                { id: 2, title: "Magnums", amount: 1 }
            ]
        }
    }

    render() {
        const addGrocery = (groceryInput) => {
            const newGrocery = {
                id: this.state.groceryItems.length + 1,
                title: groceryInput,
                amount: 1
            }
            this.setState({
                groceryItems: this.state.groceryItems.concat(newGrocery)
            })
        }


        const addAmountToItem = (itemTitle) => {
            const shoppingList = [...this.state.shoppingListItems]
            const newList = shoppingList.map(shoppingItem => {
                console.log(itemTitle)
                if (shoppingItem.title === itemTitle.title) {
                    shoppingItem.amount++
                }
                return shoppingItem
            })
            this.setState({
                shoppingListItems: newList
            })
        }

        const addNewShoppingListItem = (newShoppingListItem) => {
            this.setState({
                shoppingListItems: [...this.state.shoppingListItems].concat([newShoppingListItem])
            })
        }

        const newShoppingListItem = (clickedItem) => {
            const newShoppingItem = {
                id: this.state.shoppingListItems.length + 1,
                title: clickedItem,
                amount: 1
            }
            const currentShoppingList = this.state.shoppingListItems
            const checkItemAlreadyOnList = currentShoppingList.filter(item => item.title === clickedItem)
            checkItemAlreadyOnList.length === 0 ? addNewShoppingListItem(newShoppingItem) : addAmountToItem(newShoppingItem)
        }


        const handleClickGroceryItem = (event) => {
            const clickedItem = (event.target.getAttribute("value"))
            newShoppingListItem(clickedItem)
        }


        const emptyCart = () => {
            this.setState({
                shoppingListItems: []
            })
        }

        return (

            <div className="container">
                <header className="header">Boodschappenlijst</header>
                <main className="main">
                    <div>
                        <GroceryList
                            groceryItems={this.state.groceryItems}
                            handleClick={handleClickGroceryItem}
                            addGrocery={addGrocery}
                        />
                    </div>
                    <div>
                        <Shoppingcart
                            shoppingListItems={this.state.shoppingListItems}
                            emptyCart={emptyCart}
                        />
                    </div>
                </main>
            </div>
        )
    }
}

export default Container




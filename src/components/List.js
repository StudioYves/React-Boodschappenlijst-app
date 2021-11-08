import React from "react"
import ListItem from "./ListItem"




class List extends React.Component {
   
    render() {
        const listOfAllGroceries = this.props.list.map(item =>
            <ListItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                handleClick={this.props.handleClick}
                readonly={this.props.readonly}
            />)

        return (
            <div>
                <ul className="list">
                    {listOfAllGroceries}
                </ul>
            </div>
        )
    }
}


export default List




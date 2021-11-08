import React from "react"



function ListItem(item) {

    return (
        <div>
            <li
                key={item.id}
                value={item.title}
                className="list-item"
                onClick={item.handleClick}
            >
                {item.title}
                {item.readonly ? ` >>> aantal: ${item.amount}` : ""}
                
            </li>
        </div>
    )
}


export default ListItem





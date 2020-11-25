import React, { useState } from "react";

export default function Todolist() {

    const [listItem, setListItem] = useState([])
    const [newItem, setNewItem] = useState()

    

    function addListItem(){
        const itemListCopy = listItem.slice(0);
        itemListCopy.push(newItem);
        setListItem(itemListCopy)
    }

    function deleteItem(index){
        const itemListCopy = listItem.slice(0);
        itemListCopy.splice(index,1);
        setListItem(itemListCopy)
    }

    function updateNewItem(e){
        const newValue = e.target.value;
        setNewItem(newValue)
    }

    return (
        <div>
            <h4>To Do list</h4>
            <ul>
                {listItem.map(function(listItem, index){
                    return <li>
                            {listItem}<button onClick={() => deleteItem(index)}>Delete</button>
                        </li>
            })}
                
            </ul>

        



            <div>
            <input type="type here"  onChange={updateNewItem} />
            <button onClick={addListItem}>Add List Item</button>
           </div>

        </div>
    )
}









 

 

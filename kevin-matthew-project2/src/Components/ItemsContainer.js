
import React from "react";
import Search from "./Search"
import ItemList from "./ItemList"
import AddNewItemForm from "./AddNewItemForm"


function ItemsContainer () {



    return (
        <div className="container">
            <Search  />
            <AddNewItemForm />
            <ItemList />

        </div>




    )
}


export default ItemsContainer ;
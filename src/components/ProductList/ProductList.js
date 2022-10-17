import React from "react";
import './ProductList.css'
import ProdictItem from "../ProductItems/ProdictItem";

const product = [
    {id: '1', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '2', title: "Куртка", price: 5000, description: 'Синий цвет, прямые'},
    {id: '3', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '4', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '5', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '6', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '7', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
    {id: '8', title: "Джинсы", price: 5000, description: 'Синий цвет, прямые'},
]
const ProductList = () =>{
    return(
        <div className={'list'}>
            {products.map(item=> (
                <ProdictItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
}
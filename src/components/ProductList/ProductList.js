import React, {useState} from "react";
import './ProductList.css'
import ProdictItem from "../ProductItems/ProdictItem";
import {useTelegram} from "../../hooks/useTelegram";

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

const getTotalPrice = (items = []) =>{
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}

const ProductList = () =>{
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onAdd = (product) =>{
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        }else{
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });

        }
    }

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
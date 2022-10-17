import React from 'react';
import '../ProductList/ProductList.css';
import Button from "../Button/Button";

const ProdictItem = ({product, className, onAdd}) => {
    const onAddHandler = () =>{
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'title'}>{product.title} </div>
            <div className={'description'}>{product.description} </div>
            <div className={'price'} >
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-button'} onClick={onAddHandler}>
                Добавить в корзина
            </Button>
        </div>
    );
};

export default ProdictItem;
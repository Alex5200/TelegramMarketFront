import React from 'react';
import './Header.css'
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import ProductList from "../ProductList/ProductList";

const Header = () => {
    const { user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                Привет @{user?.username}
            </span>
            <ProductList/>
        </div>
    );
};

export default Header;
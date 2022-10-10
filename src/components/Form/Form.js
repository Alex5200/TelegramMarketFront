import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [contry, setContry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();


    useEffect(()=>{
        tg.MainButton.setParams({
            text: "Отправить время"
        })
    }, [])

    useEffect(() =>{
        if(!street || !contry){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }, [contry, street])
    const onChangeCountry = (e) =>{
        setContry(e.target.value)
    }
    const onChangesSreet = (e) =>{
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }
    return (
        <div className={"form"}>
            <h3>Ваедите ваши данные</h3>
            <input className={"input"} type="text" placeholder={"Страна"} value={contry} onChange={onChangeCountry}/>
            <input className={"input"} type="text" placeholder={"Улица"} value={street} onChange={onChangesSreet}/>
            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;
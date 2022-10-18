import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [contry, setContry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const [email, setEmail] = useState('');

    const {tg} = useTelegram();

    const onSendData = useCallback(() =>{
        const data = {
            contry,
            street,
            subject,
            email
        }
        tg.sendData(JSON.stringify(data));
    }, [contry, street, subject, email])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return() =>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(()=>{
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    useEffect(() =>{
        if(!street || !contry){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }, [contry, street])

    const onChangeCountry = (e) =>{setContry(e.target.value)}
    const onChangesStreet = (e) =>{setStreet(e.target.value)}
    const onChangeSubject = (e) =>{setSubject(e.target.value)}
    const onChangeEmail = (e) =>{setEmail(e.target.value)}

    return (
        <div className={"form"}>
            <h3>Ваедите ваши данные</h3>
            <input className={"input"} type="text" placeholder={"Страна"} value={contry} onChange={onChangeCountry}/>
            <input className={"input"} type="text" placeholder={"Улица"} value={street} onChange={onChangesStreet}/>

            <input className={"input"} type="email" placeholder={"Email"} value={email} onChange={onChangeEmail}/>

            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;
import React from 'react';
import './Form';

export default class Form extends React.Component{

    render() {
        return (
            <form id={"form"}>
                <label>
                    <span>
                        Email (Логин)
                    </span>
                    <input name={'login'} type={'text'}/>
                </label>
                <label>
                    <span>
                        Пароль
                    </span>
                    <input name={'password'} type={'password'}/>
                </label>
                <button type={'submit'} className={'buttonSing'}>
                    Войти
                </button>
            </form>
        )
    }
};
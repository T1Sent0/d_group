import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const menu = ['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты'];
        // let menuItem = menu.map((menu, index) => {
        //     return <li key={index}><a>{menu}</a></li>
        // });

        return (
            <div className='menuContainer'>
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/service'>Услуги</Link></li>
                    <li><Link to='/portfolio'>Портфолио</Link></li>
                    <li><Link to='/about_us'>О нас</Link></li>
                    <li><Link to='/contact'>Контакты</Link></li>
                </ul>
            </div>
        )
    }
}
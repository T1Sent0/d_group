import React from 'react';
import './Menu.scss';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = ['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты'];
        let menuItem = menu.map((menu, index) => {
            return <li key={index}><a>{menu}</a></li>
        });

        return (
            <div className='menuContainer'>
                <ul>
                    {menuItem}
                </ul>
            </div>
        )
    }
}
import React from 'react';
import './Service.scss';
import Menu from "../Menu/Menu.jsx";
import Social from "../Social/Social.jsx";
import { Link } from 'react-router-dom';

export default class Service extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='servicePage'>
                <Menu classWrapperMenu="menuContainer" classMenu="mainMenu" menuTextItem={['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты']} pathRoute={['/', '/service', '/portfolio', '/about_us', '/contact']}/>
                <div className='containerService'>
                    <ul>
                        <li>
                            Разработка
                        </li>
                        <li>
                            Дизайн
                        </li>
                        <li>
                            SEO
                        </li>
                        <li>
                            SMM
                        </li>
                        <li>
                            Контекстная реклама
                        </li>
                    </ul>
                </div>
                <Social/>
            </div>
        )
    }
}
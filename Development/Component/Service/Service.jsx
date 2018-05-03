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
                <Menu classWrapperMenu="containerService" classMenu="menuService" menuTextItem={['Разработка', 'Дизайн', 'SEO', 'SMM', 'Контекстная реклама']} pathRoute={['/service/development', '/service/design', '/service/seo', '/service/smm', '/service/context_advertising']}/>
                <Social socilalLink={['facebook', 'tweeter', 'vkontakte', 'youtobe']} hrefLink={['https://ru-ru.facebook.com/', 'https://twitter.com/', 'https://vk.com/description_group_public', 'https://www.youtube.com/channel/UCfsk66DgnvIkz0gGqn_YoJg/featured?view_as=subscriber']}/>
            </div>
        )
    }
}
import React, {Component} from 'react';
import './Service.scss';
import Menu from "../Menu/Menu.jsx";
import Social from "../Social/Social.jsx";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import CardService from "./CardService/CardService.jsx";

export default class Service extends Component {
    constructor(props){
        super(props);
    }
    //
    /*
    *
    *
    *
    *
    * */
    render() {
        const params = {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true
        };

        return (
            <div className='servicePage'>
                <Menu classWrapperMenu='menuContainer' classMenu="mainMenu" menuTextItem={['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты']} pathRoute={['/', '/service', '/portfolio', '/about_us', '/contact']}/>
                <div className='test'>
                    <Swiper {...params}>
                        <div className=''>
                            <div className='wrapper'>
                                <CardService classCard='dev' category='Разработка'/>
                            </div>
                        </div>
                        <div className='swiper-scrollbar'/>
                    </Swiper>
                </div>
                <Social socilalLink={['facebook', 'tweeter', 'vkontakte', 'youtobe']} hrefLink={['https://ru-ru.facebook.com/', 'https://twitter.com/', 'https://vk.com/description_group_public', 'https://www.youtube.com/channel/UCfsk66DgnvIkz0gGqn_YoJg/featured?view_as=subscriber']}/>
            </div>
        )
    }
}
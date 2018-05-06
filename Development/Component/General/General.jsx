import React, {Component} from 'react';
import '../App/font/ProximaNova-Regular.ttf';
import Menu from "../Menu/Menu.jsx";
import video from '../App/video/video.mp4';
import logo from '../App/img/logo.png';
import './General.scss';
import Social from "../Social/Social.jsx";



export default class General extends Component {
    constructor(props){
        super(props);
        this.state = {text: 'Разработка', cookie: ''};
        this.changeText = this.changeText.bind(this);
    }

    changeText (text) {
        this.setState({
            text: text
        });
    }

    componentWillMount () {
        let i = 0;
        let self = this;
        let arrText = ['Дизайн', 'SEO', 'SMM', 'Копиррайтинг', 'Контекстная реклама', 'Разработка'];
        self.showTextInterval = setInterval(function () {
            if(arrText[i] !== undefined) {
                self.changeText(arrText[i]);
                i++;
                if(i === 6) {
                    i = 0
                }
            }
        }, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.showTextInterval)
    }

    render() {
        return (
            <div className='welcomePage'>
                <div className='containerVideo'>
                    <video src={video} autoPlay/>
                </div>
                <Menu classWrapperMenu="menuContainer" classMenu="mainMenu" menuTextItem={['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты']} pathRoute={['/', '/service', '/portfolio', '/about_us', '/contact']}/>
                <div className='logo'>
                    <h1>Агенство интернет маркетинга</h1>
                    <img src={logo}/>
                    <h2>{this.state.text}</h2>
                </div>
                <Social socilalLink={['facebook', 'tweeter', 'vkontakte', 'youtobe']} hrefLink={['https://ru-ru.facebook.com/', 'https://twitter.com/', 'https://vk.com/description_group_public', 'https://www.youtube.com/channel/UCfsk66DgnvIkz0gGqn_YoJg/featured?view_as=subscriber']}/>
            </div>
        )
    }
}
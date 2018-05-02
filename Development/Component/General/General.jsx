import React from 'react';
import '../App/font/ProximaNova-Regular.ttf';
import Menu from "../Menu/Menu.jsx";
import video from '../App/video/video.mp4';
import logo from '../App/img/logo.png';
import './General.scss';
import Social from "../Social/Social.jsx";



export default class General extends React.Component {
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
        let arrText = ['Дизайн', 'SEO', 'SMM', 'Контекстная реклама', 'Разработка'];
        setInterval(function () {
            if(arrText[i] !== undefined) {
                self.changeText(arrText[i]);
                i++;
                if(i === 5) {
                    i = 0
                }
            }
        }, 1500);
    }

    render() {
        return (
            <div className='welcomePage'>
                <div className='containerVideo'>
                    <video src={video} autoPlay/>
                </div>
                <Menu/>
                <div className='logo'>
                    <h1>Агенство интернет маркетинга</h1>
                    <img src={logo}/>
                    <h2>{this.state.text}</h2>
                </div>
                <Social/>
            </div>
        )
    }
}
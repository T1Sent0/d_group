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
                <Menu/>
                <div className='containerMenuService'>
                    <ul>
                        <li>
                            Разработка
                            <ul>
                                <div>
                                    <h1>Тут будет контент с кнопочкой перехода на страницу соответствующую разделу разработка</h1>
                                </div>
                            </ul>
                        </li>
                        <li>
                            Дизайн
                            <ul>
                                <div>
                                    <h1>Тут будет контент с кнопочкой перехода на страницу соответствующую разделу Дизайн</h1>
                                </div>
                            </ul>
                        </li>
                        <li>
                            SEO
                            <ul>
                                <div>
                                    <h1>Тут будет контент с кнопочкой перехода на страницу соответствующую разделу SEO</h1>
                                </div>
                            </ul>
                        </li>
                        <li>
                            SMM
                            <ul>
                                <div>
                                    <h1>Тут будет контент с кнопочкой перехода на страницу соответствующую разделу SMM</h1>
                                </div>
                            </ul>
                        </li>
                        <li>
                            Контекстная реклама
                            <ul>
                                <div>
                                    <h1>Тут будет контент с кнопочкой перехода на страницу соответствующую разделу Контекстная реклама</h1>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Social/>
            </div>
        )
    }
}
import React from 'react';
import './Service.scss';
import Menu from "../Menu/Menu.jsx";
import Social from "../Social/Social.jsx";

export default class Service extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Menu/>
                <h1>
                    Услуги
                </h1>
                <Social/>
            </div>
        )
    }
}
import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menuItem = this.props.menuTextItem.map((menu, index) => {
            return <li key={index}><Link to={this.props.pathRoute[index]}>{this.props.menuTextItem[index]}</Link></li>
        });

        return (
            <div className={this.props.classWrapperMenu}>
                <ul className={this.props.classMenu}>
                    {menuItem}
                </ul>
            </div>
        )
    }
}
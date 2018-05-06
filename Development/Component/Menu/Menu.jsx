import React, {Component} from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.menuTextItem = this.props.menuTextItem;
        this.pathRoute = this.props.pathRoute;
        this.classWrapperMenu = this.props.classWrapperMenu;
        this.classMenu = this.props.classMenu;
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
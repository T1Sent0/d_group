import React from 'react';
import './Instruction.scss';
import General from "../General/General.jsx";
import Menu from "../Menu/Menu.jsx";
import Service from "../Service/Service.jsx";
import { Switch, Route } from 'react-router-dom'

export default class Instruction extends React.Component {
    constructor(props){
        super(props);
        this.state = {textWelcome: 'Приветствуем Вас !', showMenu: ''};
        this.changeTextWelcome = this.changeTextWelcome.bind(this);
    }

    changeTextWelcome (text) {
        this.setState({
            textWelcome: text
        });

    }

    componentDidMount() {
        let i = 0;
        let self = this;
        let instructionText = ['Похоже что Вы тут вперые...', 'мы покажем Вам как это работает...', 'Это не займёт много времени.', 'Давайте приступим !', 'Начните с использования меню сайта.', ''];

        let interval = setInterval(function () {
            if(instructionText[i] !== undefined) {
                self.changeTextWelcome(instructionText[i]);
                i++;
            }
            let timer = setTimeout(function () {
                if (i === 5) {
                    self.setState({
                        showMenu: "true"
                    });
                } else if (i === 6) {
                    self.setState({
                        showMenu: 'show'
                    });
                    clearTimeout(timer);
                    clearInterval(interval);
                }
            }, 1000);
        }, 4000);
    }

    render() {
        if (this.state.showMenu === 'true') {
            return (
                <div className="containerInstruction">
                    <Menu/>
                    <div className="backgroundInstruction"/>
                    <h1 className="welcomeText">{this.state.textWelcome}</h1>
                </div>
            )
        }
        if (this.state.showMenu === 'show') {
            return (
                <Switch>
                    <Route exact path='/' component={General}/>
                    <Route path='/service' component={Service}/>
                </Switch>
            )
        }
        return (
            <div className="containerInstruction">
                <div className="backgroundInstruction"/>
                <h1 className="welcomeText">{this.state.textWelcome}</h1>
            </div>
        )
    }
}
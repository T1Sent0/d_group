import React from 'react';
import General from "../General/General.jsx";
import Loading from "../Loading/Loading.jsx";
import { Switch, Route } from 'react-router-dom'
import Instruction from "../Instruction/Instruction.jsx";
import Service from "../Service/Service.jsx";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: '', cookie: ''};
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.deleteCookie = this.deleteCookie.bind(this);
    }

    componentDidMount() {
        let self = this;
        setTimeout(function () {
            self.setState({
                loading: 'true'
            });
        }, 4000);

        if(this.getCookie('user')) {
            console.log(this.getCookie('user'));
            this.setState({
                cookie: 'true'
            })
        }
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options) {
        options = options || {};

        let expires = options.expires;

        if (typeof expires === "number" && expires) {
            let d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        let updatedCookie = name + "=" + value;

        for (let propName in options) {
            updatedCookie += "; " + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

    deleteCookie(name) {
        this.setCookie(name, "", {
            expires: -1
        })
    }

    render() {
        // this.deleteCookie("user");
        if(this.state.cookie !== '' && this.state.loading === 'true') {
            return (
                <Switch>
                    <Route exact path='/' component={General}/>
                    <Route path='/service' component={Service}/>
                </Switch>
            )

        } else if (this.state.cookie === '' && this.state.loading === 'true') {
            this.setCookie('user', 'true', 90000);
            return <Instruction/>
        }

        return(
        <div className="loader">
            <div className="inner one"/>
            <div className="inner two"/>
            <div className="inner three"/>
        </div>
        )
    }
}


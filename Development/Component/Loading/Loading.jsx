import React, {Component} from 'react';
import './Loading.scss'

export default class Loading extends Component {
    constructor(props){
        super(props);
    }



    render() {
        return (
            <div className="loader">
                <div className="inner one"/>
                <div className="inner two"/>
                <div className="inner three"/>
            </div>
        )

    }
}
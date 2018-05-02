import React from 'react';
import './Social.scss';

export default class Social extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='socialLink'>
                <div className='facebook'/>
                <div className='tweeter'/>
                <div className='vkontakte'/>
                <div className='youtobe'/>
            </div>
        )
    }
}
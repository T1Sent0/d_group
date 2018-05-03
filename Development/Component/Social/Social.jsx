import React from 'react';
import './Social.scss';

export default class Social extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let socialLink = this.props.socilalLink.map((link, index) => {
            return <div key={index} className={this.props.socilalLink[index]}><a href={this.props.hrefLink[index]}/></div>
        });


        return (
            <div className='containerSocialLink'>
                {socialLink}
            </div>
        )
    }
}
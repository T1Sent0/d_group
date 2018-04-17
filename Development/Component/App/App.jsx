import React from 'react'
import Form from '../Form/Form.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={'container--auth'}>
                <div className={'background--image'}/>
                <div className={'container--form'}>
                    <h1>Tender Hub</h1>
                    <h1>Добрый день !</h1>
                    <Form/>
                </div>
            </div>
        )
    }
}
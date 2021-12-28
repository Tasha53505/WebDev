import React, { Component } from 'react';
import './Hello.css';


class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
                <h6>{this.props.cool}</h6>
            </div>
        );
    }
}

export default Hello;
import React, { Component } from "react";
import './Card.css'

class Card extends Component {
    state = {}
    
    constructor(props) {
        super(props);
        console.log('[Card.js] run constructor')
    }
    
      static getDerivedStateFromProps(props , state) {
        console.log('[Card.js] run getDerivedStateFromProps')
        return null;
      }
    
      componentDidMount() {
        console.log('[Card.js] run componentDidMount')
      }


    eventHandler(e) {
        console.log(this)
        console.log('click')
    }
    render() {
        let { title, body } = this.props;
        // throw Error('Something went wrong.');
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                </header>
                <section className="card-body">
                    <p>{body}</p>
                    <button onClick={this.eventHandler.bind(this, 'xxxx')}>Click</button>
                </section>
                <footer className="card-footer">
                    <p>Card footer</p>
                </footer>
            </div>
        )
    }
}


export default Card;
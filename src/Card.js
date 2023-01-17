import React, { Component } from "react";

class Card extends Component {
    render() {
        let {title , body} = this.props;
        return (
            <div className="card">
                <header className="card-header">
                    <h2>{title}</h2>
                </header>
                <section className="card-body">
                    <p>{body}</p>
                </section>
                <footer>
                    <p>Card footer</p>
                </footer>
            </div>
        )
    }
}






// function Card(props){
// return (
//     <div className="card">
//         <header className="card-header">
//             <h2>{props.title}</h2>
//         </header>
//         <section className="card-body">
//             <p>{props.body}</p>
//         </section>
//         <footer>
//             <p>Card footer</p>
//         </footer>
//     </div>
// )
// }

export default Card;
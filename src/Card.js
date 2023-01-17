import React from "react";







function Card(props){
return (
    <div className="card">
        <header className="card-header">
            <h2>{props.title}</h2>
        </header>
        <section className="card-body">
            <p>{props.body}</p>
        </section>
        <footer>
            <p>Card footer</p>
        </footer>
    </div>
)
}

export default Card;
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React from 'react';




class App extends React.Component {
  state = {
    article : [
      {id : 1 , title : 'article 1' , body : 'this is article 1'},
      {id : 2 , title : 'article 2' , body : 'this is article 2'},
      {id : 3 , title : 'article 3' , body : 'this is article 3'},

    ]
  }
  
  constructor(){
    super()
    setTimeout(() => {
      this.setState({
        article : [
          {id : 4 , title : 'article 4' , body : 'this is article 4'},
          {id : 5 , title : 'article 5' , body : 'this is article 5'},
          {id : 6 , title : 'article 6' , body : 'this is article 6'},
    
        ]
      })
    }, 3000);
  }





  render() {
    return (
      <div className='app'>
        <Card title={this.state.article[0].title} body={this.state.article[0].body} />
        <Card title={this.state.article[1].title} body={this.state.article[1].body} />
        <Card title={this.state.article[2].title} body={this.state.article[2].body} />

      </div>
    )


  }
}

// function App() {
//   return(
// <div className='app'>
//   <Card title = "Article 1" body ="this is Article 1"/>
//   <Card title = "Article 2" body ="this is Article 2"/>
//   <Card title = "Article 3" body ="this is Article 3"/>

// </div>
//   )
// }
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

export default App;

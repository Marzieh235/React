import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  const [stateArticle , setArticleState] = useState({
    articles : [
      { id : 1 , title : 'article 1' , body : 'this is article 1'},
      { id : 2 , title : 'article 2' , body : 'this is article 2'},
      { id : 3 , title : 'article 3' , body : 'this is article 3'},
    ]
  })

    setTimeout(() => {
      setArticleState({
        articles : [
          { id : 4 , title : 'article 4' , body : 'this is article 4'},
          { id : 5 , title : 'article 5' , body : 'this is article 5'},
          { id : 6 , title : 'article 6' , body : 'this is article 6'},
        ]
      })
    }, 2000);

  return (
    <div className="app">
      {
        stateArticle.articles.map(article => <Card title={article.title} body={article.body} />)
      }
  </div>
  );
}

// class App extends React.Component {
//   state = {
//     articles : [
//       { id : 1 , title : 'article 1' , body : 'this is article 1'},
//       { id : 2 , title : 'article 2' , body : 'this is article 2'},
//       { id : 3 , title : 'article 3' , body : 'this is article 3'},
//     ]
//   }

//   constructor() {
//     super()
//     setTimeout(() => {
//       this.setState({
//         articles : [
//           { id : 4 , title : 'article 4' , body : 'this is article 4'},
//           { id : 5 , title : 'article 5' , body : 'this is article 5'},
//           { id : 6 , title : 'article 6' , body : 'this is article 6'},
//         ]
//       })
//     }, 2000);
//   }

//   render() {
//     return (
//       <div className="app">
//           <Card title={this.state.articles[0].title} body={this.state.articles[0].body}/>
//           <Card title={this.state.articles[1].title} body={this.state.articles[1].body}/>
//           <Card title={this.state.articles[2].title} body={this.state.articles[2].body}/>
//       </div>
//     )
//   }
// }

export default App;

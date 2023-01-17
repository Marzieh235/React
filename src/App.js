import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  const [stateArticle, setArticleState] = useState({
    articles: [
      { id: 1, title: 'article 1', body: 'this is article 1' },
      { id: 2, title: 'article 2', body: 'this is article 2' },
      { id: 3, title: 'article 3', body: 'this is article 3' },
    ],
  })

  const [stateTitle , setTitleState] = useState ({
    title : 'this is test 2'
  })

  let articleList = stateArticle.articles.map((article, index) => <Card key={index} title={article.title} body={article.body} />)

const loadMore = (e) => {
  let articles = [
    { id: 4, title: 'article 4', body: 'this is article 4' },
    { id: 5, title: 'article 5', body: 'this is article 5' },
    { id: 6, title: 'article 6', body: 'this is article 6' },
  ]

    setArticleState((prevState => {
      return {
        articles: [...prevState.articles, ...articles],
      }
    }))
 
  }

console.log(stateArticle);
console.log(stateTitle);

  return (
    <div className="app">
      {
        articleList
      }
      <button onClick={loadMore}>load more</button>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     articles: [
//       { id: 1, title: 'article 1', body: 'this is article 1' },
//       { id: 2, title: 'article 2', body: 'this is article 2' },
//       { id: 3, title: 'article 3', body: 'this is article 3' },
//     ],
//     title : 'this is test '
//   }

//   loadMore = () => {
//     let articles = [
//       { id: 4, title: 'article 4', body: 'this is article 4' },
//       { id: 5, title: 'article 5', body: 'this is article 5' },
//       { id: 6, title: 'article 6', body: 'this is article 6' },
//     ]

//     this.setState((prevState => {
//       return {
//         articles: [...prevState.articles, ...articles]
//       }
//     }))
//   }

//   render() {
//     console.log(this.state);
//     let articleList = this.state.articles.map((article, index) => <Card key={index} title={article.title} body={article.body} />)

//     return (
//       <div className="app">
//         {
//           articleList
//         }
//         <button onClick={this.loadMore}>load more</button>
//       </div>
//     );
//   }
// }

export default App;

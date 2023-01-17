import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';


class App extends React.Component {
  state = {
    articles: [
      { id: 1, title: 'article 1', body: 'this is article 1', active: 1 },
      { id: 2, title: 'article 2', body: 'this is article 2', active: 0 },
      { id: 3, title: 'article 3', body: 'this is article 3', active: 1 },
    ],
    title: 'this is roocket',
    loading: false,
    btnHover : false,
  }

  loadMore = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      let articles = [
        { id: 4, title: 'article 4', body: 'this is article 4', active: 1 },
        { id: 5, title: 'article 5', body: 'this is article 5', active: 0 },
        { id: 6, title: 'article 6', body: 'this is article 6', active: 1 },
      ]


      this.setState(prevState => {
        return {
          articles: [...prevState.articles, ...articles],
          loading: false
        }
      })
    }, 3000);
  }

  mosueEnter = (e) => {
    this.setstate({
      btnHover : true,
    })
  }

  mosueLeave = (e) => {
    this.setstate({
      btnHover : false,
    })
  }

  render() {
    let articleList = this.state.articles.map((article, index) => article.active ? <Card key={index} title={article.title} body={article.body} /> : null)

    return (
      <div className="app">
        {articleList}
        {this.state.loading
          ? <div>Loading ...</div> : null}
        <button
          className={`btn-more ${this.state.btnHover ? 'active' : ''}`}
          onClick={this.loadMore} 
          onMouseEnter={this.mosueEnter}
          onMouseLeave={this.mosueLeave}

        >load more</button>
      </div>
    );
  }
}

export default App;

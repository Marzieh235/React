import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Carousel from 'react-bootstrap/Carousel';


class App extends React.Component {
  state = {
    articles: [
      { id: 1, title: 'article 1', body: 'this is article 1', active: 1 },
      { id: 2, title: 'article 2', body: 'this is article 2', active: 0 },
      { id: 3, title: 'article 3', body: 'this is article 3', active: 1 },
    ],
    title: 'this is roocket',
    loading: false,
    btnHover: false,
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
      btnHover: true,
    })
  }

  mosueLeave = (e) => {
    this.setstate({
      btnHover: false,
    })
  }

  render() {
    let articleList = this.state.articles.map((article, index) => article.active ? <Card key={index} title={article.title} body={article.body} /> : null)

    return (
      <div className="app">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.roocket.ir/images/cover/2022/12/24/vKOykYokRJ7uU86q4doBLiKSjFWULAPX1mliS3Yt.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.roocket.ir/images/cover/2023/1/12/2zZWXiDLRxHlG8RUuW7HDK8NDQ5T4mMCYHlsRvPE.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.roocket.ir/images/cover/2023/1/14/vbohNtmAhcdUr4sk5aj1xyNZLVFYTwFo9YTGbuP2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



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

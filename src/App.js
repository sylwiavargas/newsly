import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
    })
  }

  render(){
    return (
      <div className="light">
        <button>Switch to Dark Mode</button>
        <button>Switch to List View</button>
        <div className="cards">
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;

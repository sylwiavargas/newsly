import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    darkMode: false,
    listView: false
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard
              key={article.id}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              dark={this.state.darkMode}
              />
    })
  }

  toggleListView = (listMode) => {
    this.setState({
      listView: listMode
    })
  }

  toggleDarkMode = (newMode) =>{
    this.setState({
      darkMode: newMode
    })
  }

  render(){
    console.log()
    if (this.state.darkMode === true){
    return (
      <div className="dark">
        <button onClick= {() => {this.toggleListView(!this.state.listView)}}>Switch to List View</button>
        <button onClick= {() => {this.toggleDarkMode(!this.state.darkMode)}}>Dark Mode</button>
      </div>
    )} else {
      return (
        <div className="light">
          <button onClick= {() => {this.toggleListView(!this.state.listView)}}>Switch to List View</button>
          <button onClick= {() => {this.toggleDarkMode(!this.state.darkMode)}}>Dark Mode</button>
        </div>
      )}
      if (this.state.listView === true){
      return (<div className="list">
        {this.renderArticles()}
      </div>
    )}
    else {
      <div className="cards">
        {this.renderArticles()}
      </div>
    }
  }
}

export default App;

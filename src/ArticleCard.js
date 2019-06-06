import React from 'react'

function ArticleCard(props){
    if (props.dark === false){
      return (
      <div className="card light">
        <h4>{props.title}</h4>
        <div className="image-wrapper">
          <img className="image" src={props.urlToImage}/>
        </div>
        <p>{props.description}</p>
      <a href={props.url} target="_blank">Click for full article...</a>
      </div>
    )} else {
      return (
      <div className="card dark">
        <h4>{props.title}</h4>
        <div className="image-wrapper">
          <img className="image" src={props.urlToImage}/>
        </div>
        <p>{props.description}</p>
      <a href={props.url} target="_blank">Click for full article...</a>
      </div>
    )}
}

export default ArticleCard

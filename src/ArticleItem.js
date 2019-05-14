import React from 'react'

function ArticleItem(props){
  return (
    <div className="item dark">
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem
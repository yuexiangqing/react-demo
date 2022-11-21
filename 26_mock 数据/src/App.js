import React, { Component } from 'react'
import axios from 'axios'

// 1. axios 
// 2. 请求转发
// 3. 客户端和服务端的开发往往是并行的，因此在前端的开发过程中，会出现这样的情况：我们请求某一个接口来获取数据，但是当前提供接口的数据还没有办法去工作
// 因此界面上想要展示出就必须考虑自己进行mock
// mock 数据

class App extends Component{

constructor(){
  super()
  this.state = {
    articles: []
  }
}

getArticle = async () => {
  let articles = await axios.get('api/article.json').then(response => response.data)
  // console.log(article)
  this.setState({articles}, () => {
    console.log(this.state.articles)
  })
}


render(){
    return (
      <div>
       <button onClick={this.getArticle}>获取文章列表</button>
       <ul>
       {
        this.state.articles.map(article =>(
          <li key={article.id}>{article.title}</li>
        ))
       }
       </ul>
      </div>
    )
  }
 
}

export default App

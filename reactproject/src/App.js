import React, { Component } from 'react'

class App extends Component{

  // 更新组件：当数据发生变化时，组件需要被重新渲染
  // 常用方法：
 
  
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handler = this.handler.bind(this)
  }

  handler(){
    console.log(this)
  }

  render(){
    console.log('render执行了')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
      </div>
    )
  }
  componentDidMount(){
    console.log('挂载完成了')
    setInterval(() => {
      this.setState({
        count: this.state.count+1
      })
    }, 1000);

  }
}

export default App

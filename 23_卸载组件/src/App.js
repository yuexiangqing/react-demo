import React, { Component } from '../../reactproject/node_modules/@types/react'
import About from './About'

class App extends Component{

  // 卸载组件：
  // 将组件从 DOM 上删除

  // 常用方法：
  // componentWillUnMount： 组件更新完成之前执行
 
  
  constructor(){
    super()
    this.state = {
      count: 0,
      isShow: true
    }
    this.handler = this.handler.bind(this)
  }

  handler(){
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <button onClick={()=>{this.setState({isShow: !this.state.isShow})}}>切换</button>
        {this.state.isShow && <About/>}
      </div>
    )
  }
}

export default App

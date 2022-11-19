import React, { Component } from 'react'

class App extends Component{

  // 挂载组件：组件被创建，插入到 DOM 当中
  // 生命周期方法：
  // 1.constructor 设置组件的初始配置：定义一些函数的 this 指向 / 状态的定义
  // 2.render 渲染组件时需要调用： 解析 JSX ，把非真实的DOM 渲染到界面上
  // 3.componentDidMount： 当组件挂载完成之后执行的一些操作
  // 发送网络请求、添加定时器、给元素添加事件监听、获取 DOM 元素
  
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

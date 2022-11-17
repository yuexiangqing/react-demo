import C1 from "./C1"
import React, { Component } from 'react'

// 01 何为单向数据流动
// 单向数据流的设计原则要求我们将不同组件之间需要共享的数据都定义在上层
// 02 单向数据流动如何修改
// 03 特点

// 1 单向数据流动，自顶向下，从父组件传到子组件
// 2 基于单项数据流动，要求我们将共享的数据定义在上层组件中
// 3 子组件通过调用父组件传递过来的方法可以更改数据
// 4 当数据发生更改时， react 会重新渲染组件树


class App extends Component{

  // 在类组件当中，就可以使用 state 定义状态
  state = {
    name: 'zce',
    age: 40
  }

  // 定义状态的更新方法,当前这里只负责定义，在想要修改数据的地方会进行调用
  // handle = (target) => {
  //   this.setState({
  //     name: target.name,
  //     age: target.age
  //   })
  // }

  handler = ({name, age}) => {
    this.setState({
      name,
      age
    })
  }

  render(){
    return (
      <div>
        单向数据流
        <C1 {...this.state} change={this.handler}/>
      </div>
    )
  }
}


export default App

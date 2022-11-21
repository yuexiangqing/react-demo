import React, { Component } from '../../reactproject/node_modules/@types/react'
import About from './About'

class App extends Component{

  // 更新组件：
  // 1.当数据发生变化时，组件需要被重新渲染
  // 2.外部传入的 props 以及自身管理 state 的状态

  // 常用方法：
  // shouldComponentUpdate(nextProps, nextState): 组件是否更新，返回一个布尔值，如果是true,就表示当前要更新，默认返回 true 如果返回的 false, 那么后续的方法不会再执行
  // render ：解析 JSX 语法，渲染 DOM
  // componentDidUpdate： 组件更新完成之后执行
 
  
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handler = this.handler.bind(this)
  }

  handler(){
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    // console.log('render执行了')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <About/>
      </div>
    )
  }
  componentDidMount(){
    // console.log('挂载完成了')
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count+1
    //   })
    // }, 1000);

  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log('shouldComponentUpdate执行了')
    return true
  }
}

export default App

import React, { Component } from 'react'

class App extends Component{
  // 定义状态
  // 键名自定义的，但是需要注意的是在 subject 里面的值需要和 option 的 value 值是一样的 
  state = {
    subject: 'java'
  }

  render(){
    return (
      <div>
        <select value={this.state.subject} onChange={(ev) => {this.setState({subject: ev.target.value})}}>
          <option value="大前端" >大前端</option>
          <option value="java" >java</option>
          <option value="python" >python</option>
        </select>

        <hr/>

        <button onClick={() => {console.log(this.state)}}>点击获取状态值</button>
      </div>
    )
  }
}

export default App

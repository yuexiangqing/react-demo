import React, { Component } from '../../20_受控表单之复选框/node_modules/@types/react'

class App extends Component{
  // 定义状态
  state = {
    // sex: '女'
    sex: '男'
  }

  // defaultChecked 接收的是布尔值，表示选中/不选中 
  render(){
    return (
      <div>
      <input type="radio" name="sex" value="男" defaultChecked={this.state.sex === '男'} onChange={(ev) => {this.setState({sex: ev.target.value})}}/> 男
      <input type="radio" name="sex" value="女" defaultChecked={this.state.sex === '女'} onChange={(ev) => {this.setState({sex: ev.target.value})}}/> 女

      <button onClick={() => {console.log(this.state)}}>点击</button>
      </div>
    )
  }
}

export default App

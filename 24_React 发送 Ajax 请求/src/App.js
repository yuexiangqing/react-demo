import React, { Component } from '../../25_React请求转发/node_modules/@types/react'
import axios from '../../25_React请求转发/node_modules/axios'

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      msg: ''
    }
  }

  render(){
    return (
      <div>
       当前数据为：{this.state.msg}
      </div>
    )
  }
  async componentDidMount(){
    const data = await axios.get("http://localhost:3005/api/welcome").then(res => res.data)
    this.setState(data)
  }
}

export default App

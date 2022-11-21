import React, { Component } from 'react'
import axios from 'axios'

// 1.什么是请求转发
// 2.react 是如何实现请求转发的
// a. package.json 配置 proxy
// b. http-proxy-middleware 

// 1.请求转发：
// 2.服务器与服务端是不存在跨域的问题
// 3.客户端应用发请求给同源的服务端，服务端将请求发送给 API 服务器，API 服务器将数据处理之后返回给客户端应用
// 4.上线环境不存在跨域问题，只是开发阶段


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
    const data = await axios.get("/api/welcome").then(res => res.data)
    this.setState(data)
  }
}

export default App

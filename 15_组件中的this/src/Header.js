import React, {Component } from 'react'

class Header extends Component{
    state = {
        name: 'zce',
        age: 40,
        count: 0
    }
    
// 如果用普通函数来定义，使用 this 的时候，要注意 this 到底指向什么
// 1. 可以在调用的时候，采用箭头函数， 从而指向 this 
// 2. 也可以用 bind 方法
// 所以，在使用的时候还是推荐使用箭头函数的方式
    handler = function ()  {
        console.log(this)
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 5
        // })
    }

 
    render(){
        return(
            <>
              <div>
              {this.state.name}
              {this.state.age}
              </div>
              <hr/>
              <div>
                <span>{this.state.count}</span>
                {/* <button onClick={this.handler}>点击</button> */}
                {/* <button onClick={() => {this.handler()}}>点击</button> */}
                <button onClick={this.handler.bind(this)}>点击</button>
              </div>

            </>
        )
    }
}
export default Header
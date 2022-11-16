import React, {Component } from 'react'

class Header extends Component{
    // 在类组件当作，默认就存在 state 属性，它是一个对象，可以用于保存当前组件的数据
    // 之后，还可以通过 setState 方法，来修改数据的值(接收的是一个对象，键值对方式)，最后修改之后的状态会自动展示在 DOM 界面上
    
    state = {
        name: 'zce',
        age: 40
    }
    

    handler = () => {
        // 在 react 中是不能够直接修改 state 的值的
        // this.state.name = 'zoe'
        this.setState({
            name: 'zoe'
        })
    }

    render(){
        return(
            <>
            {/* {this.props.name} */}
            {/* {this.props.age} */}
            
            {this.state.name}
            {this.state.age}
            <button onClick={this.handler}>点击</button>
            </>
        )
    }
}
export default Header
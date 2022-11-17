import React, {Component } from 'react'

// 1. setState 是异步函数，如果想使用 state 里面的数据会有问题
// 那么可以使用 async await 来解决 setState 异步执行的问题
// 调用 setState 的时候可以传入回调函数，在它里面就可以使用修改之后的数据

// 2. setState 在使用的时候，除了可以传入对象之外，还可以传入一个函数,这个函数有一个形参，这个形参就是当前这个组件所带有的状态

// 3. 在使用的时候，既可以传入函数也可以传入对象，且两者是有不同点的： （更推荐使用函数）
// 当我们用函数传递的时候，那么它每次都会被执行掉，调用一次执行一次
// 当我们用对象传递时，会做一个合并，只会执行最后一次  


class Header extends Component{
    state = {
        name: 'zce',
        age: 40,
        count: 0
    }
    

    handler =  () => {
        //  this.setState({
        //     name: 'zoe'
        // }, () => {
        //     console.log(this.state.name, 222)
        // })

        // this.setState((state) => ({
        //     count: state.count + 1
        // }))
        // this.setState((state) => ({
        //     count: state.count + 5
        // }))

        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 5
        })
    }

    // render(){
    //     return(
    //         <>
    //         {this.state.name}
    //         {this.state.age}
    //         <button onClick={this.handler}>点击</button>
    //         </>
    //     )
    // }

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
                <button onClick={this.handler}>点击</button>
              </div>

            </>
        )
    }
}
export default Header
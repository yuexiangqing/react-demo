import React, { Component } from 'react'

class FromComponent extends Component{

    submit = (ev) => {
        ev.preventDefault()
        // 非受控组件指的是某一个表单元素里的数据，不受 react 管理
        // 可以直接从 DOM 元素本身进行获取 （1、获取DOM元素  2、获取具体的值） 通过ref 
        console.log(this.refs.userName.value)

    }


    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" ref="userName"/>
                <input type="submit" />
            </form>
        )
    }
}
export default FromComponent
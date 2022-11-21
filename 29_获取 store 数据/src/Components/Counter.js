import React, {Component} from "react"
import {connect} from 'react-redux'

function Counter(props){
    console.log(props)
    return(
        <div>
            <button>+1</button>
            <span>{props.count}</span>
            <button>-1</button>
        </div>
    )
}
// connect(()=>({
//     a: 10,
//     b: 100
// }))(Counter)

// connect 要求调用完成以后，会返回另外一个函数，这个返回的函数需要再去调用，它也需要去接收一个参数，而这个参数就是我们要把数据到底传给哪个组件，
// 因此 connect 更像是一个工具，它要做两件事： 1. 要传什么数据 2.要把数据传给谁 然后把执行结果导出 
// 现在这个数据是写死的，而我们期望的是把它和 store 建立联系，因此需要在回调函数接一个参数，一般习惯将这个参数设为 state ,而state,我们可以认为是在 index.js 里面所传递过来的 store这样一个对象

const mapStateToProps = state => ({
    count: state.count
})

// export default Counter
// export default connect((state)=>({
//     // a: 10,
//     // b: 100
//     count: state.count
// }))(Counter)
export default connect(mapStateToProps)(Counter)
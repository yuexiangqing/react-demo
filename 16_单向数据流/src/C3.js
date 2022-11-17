import React from '../../18_受控表单之单选框/node_modules/@types/react'

function C3 (props) {
    console.log(props)
    return(
        <div> C3 组件
            <button onClick={()=> {props.change({name: 'zoe', age: 100})}}>点击修改数据</button>
        </div>
    )
}
export default C3

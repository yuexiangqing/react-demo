import React from '../../18_受控表单之单选框/node_modules/@types/react'
import C2 from './C2'

function C1 (props) {
    console.log(props)
    return(
        <div> C1 组件
            <C2 {...props}/>
            {props.name}
        </div>
    )
}
export default C1

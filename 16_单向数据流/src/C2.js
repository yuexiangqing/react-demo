import React from '../../18_受控表单之单选框/node_modules/@types/react'
import C3 from './C3'

function C2 (props) {
    console.log(props)
    return(
        <div> C2 组件
            <C3 {...props}/>
        </div>
    )
}
export default C2



import React, {Component} from "../../13_组件状态/node_modules/@types/react"

class Header extends Component {
   static defaultProps = {
    name:'拉钩教育',
    age: 33
   }
    render(){
 // 在类组件中，存在一个 props 属性，外部所传递进来的数据都可以通过它进行访问
        const {name, age} = this.props

        return(
            <div>
                <p>{age}</p>
                <p>{name}</p>
                {this.props.children}
            </div>
        )
    }
}
export default Header
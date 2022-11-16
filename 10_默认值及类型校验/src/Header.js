import React, {Component} from "react"

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
            </div>
        )
    }
}
export default Header
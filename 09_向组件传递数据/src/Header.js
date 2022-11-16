import React, {Component} from "react"

class Header extends Component {
    // 在类组件中，存在一个 props 属性，外部所传递进来的数据都可以通过它进行访问
    render(){

        const {name, age} = this.props

        return(
            <div>
                {/* <p>{this.props.name}</p>
                <p>{this.props.age}</p> */}
                <p>{age}</p>
                <p>{name}</p>
            </div>
        )
    }
}
export default Header
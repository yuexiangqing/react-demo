import React, {Component } from 'react'

class Header extends Component{
    state = {
        name: 'zce',
        age: 40,
        count: 0
    }
    

    handler =  () => {
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 5
        })
    }

 
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
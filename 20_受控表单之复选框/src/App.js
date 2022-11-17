import React, { Component } from 'react'

class App extends Component{

  // 定义状态
  state = {
    name: 'zce',
    age: 40
  }


  // 模拟数据源 [1,2...]
  hobbies = [
    {
      id: 1,
      title: 'vue',
      isChecked: true
    },
    {
      id: 2,
      title: 'React',
      isChecked: false
    },
    {
      id: 3,
      title: 'Angular',
      isChecked: false
    }
  ]

  handler (index, ev) {
    // 这里能获取是否选中
    // console.log(ev.target.checked)
    // console.log(index)
    this.hobbies[index].isChecked =ev.target.checked
  }

  submit = (ev) => {
    // 不跳转
    ev.preventDefault()
    // 1. 之前已经将数据与 hobbies 进行了绑定也可以同步更新
    // 2. 当前我们想要的就是点击提交按钮的时候可以拿到[1, 2]
    // console.log('f执行了提交')
    let ret = this.hobbies
              .filter(hobby => hobby.isChecked)
              .map(hobby => hobby.id)
              // console.log(ret)
    ret = {
      ...this.state, ret
    }
    console.log(ret)
  }

  render(){
    return (
      <form onSubmit={(ev) => {this.submit(ev)}}>
        {
          this.hobbies.map((hobby, index) => {
            return (
              <label key={hobby.id}>
                <input type="checkbox" defaultChecked={hobby.isChecked} onChange={this.handler.bind(this, index)} />{hobby.title}
              </label>
            )
          })
        }
        <hr/>
        <button onClick={() => {console.log(this.hobbies)}}>点击获取数据</button>
        <input type="submit"  />
      </form>
    )
  }
}

export default App

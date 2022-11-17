import React, { Component } from 'react'

class App extends Component{
  // 模拟数据源
  hobbies = [
    {
      id: 1,
      title: 'vue',
      isChecked: false
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

  render(){
    return (
      <div>
        复选框
      </div>
    )
  }
}

export default App

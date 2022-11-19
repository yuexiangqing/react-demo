import React, { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'

class App extends Component{

// 定义状态用于管理学员信息
state = {
  studentList: [{
    "number": "01",
    "name": "张三",
    "sex": "男",
    "age": 10,
    "college": "大前端",
    "hobbies": ["足球", "篮球"]
    
}, {
    "number": "02",
    "name": "李四",
    "sex": "男",
    "age": 20,
    "college": "Java",
    "hobbies": ["足球"]
    
}, {
    "number": "03",
    "name": "王五",
    "sex": "男",
    "age": 30,
    "college": "python",
    "hobbies": ["足球", "篮球"]
    
    }
  ]
}

// 定义一个方法处理 studentList 状态
addStudent = (student, callback) => {
  this.setState({
    studentList: [...this.state.studentList, student]
  }, () =>{
    callback()
    console.log(this.state.studentList)
  })
}
// 定义删除操作
removeStudent = (number) => {
  // 核心：利用 number 找到 studentList 当中需要被删除的项，将它从元数据中拿出
  // 最后再将处理后的数据重新 setState 给 state, 之后界面就会自动更新

  // 1.将原数据进行拷贝（深拷贝）
  const studentList =JSON.parse(JSON.stringify(this.state.studentList))

  // 2.从拷贝后原数据中查找 number 所对应的项
  
  const index = studentList.findIndex(student => student.number === number)

  // 3. 利用上述的 index,将目标项从数组中删除
  studentList.splice(index, 1)
  // 4. 数据更新
  this.setState({
    studentList: studentList
  }, ()=>{
    console.log(this.state.studentList);
  })

  // 3.利用上述的 index 将目标想从数组中移除
  this.setState({
    studentList: studentList
  }, () => {
    console.log(this.state.studentList)
  })

}

  render(){
    return (
      <div className={'container'}>
        <StudentTitle/>
        <AddStudent addList={this.addStudent}/>
        <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent}/>
      </div>
    )
  }
}

export default App

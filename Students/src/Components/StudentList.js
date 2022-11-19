import React, { Component } from 'react'

class StudentList extends Component{
    rmStudent = (index, ev) =>{
        ev.preventDefault()
        if(window.confirm('是否确定删除当前项')){
            this.props.removeStudent(index)
        }
    }
    render() {
        const {studentList} = this.props

        // 定义变量存放年纪之和
        let totalAge = 0
        // 定义变量存放平均年龄
        let averAge = 0
        studentList.forEach(hobby => totalAge += Number(hobby.age))
        // 计算平均值
        averAge = Math.floor(totalAge / studentList.length)
        return(
            <div className="col-md-6 col-md-offset-1">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>爱好</th>
                    <th>所属学院</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList.map(student => {
                        return(
                            <tr key={student.number}>
                            <td>{student.number}</td>
                            <td>{student.name}</td>
                            <td>{student.sex}</td>
                            <td>{student.age}</td>
                            <td>
                                {student.hobbies.map((hobby, index) => {
                                    return (
                                        <span key={index}>{hobby}</span>
                                    )
                                })}
                            </td>
                            <td>{student.college}</td>
                            <td>
                                <span onClick={(ev) => {this.rmStudent(`${student.number}`,ev)}}>删除</span>
                            </td>
                        </tr>   
                        )
                    })
                }
                </tbody>
            </table>
            { studentList.length > 0 ? null : <p className="text-center">无学生信息</p>}
            <p>总共有 {studentList.length} 个学生</p>
            <p>学生的平均年龄是 {averAge}</p>
        </div>
        )
    }
}
export default StudentList
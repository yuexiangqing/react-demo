import React, { Component } from 'react'

class StudentList extends Component{
    render() {
        const {studentList} = this.props
        console.log(studentList, 222)
        return(
            <div className="col-md-6 col-md-offset-1">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>入学时间</th>
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
                                <a href="#">删除</a>
                                <a href="#">修改</a>
                            </td>
                        </tr>   
                        )
                    })
                }
                </tbody>
            </table>
            <p className="text-center">无学生信息</p>
            <p>总共有 50 个学生</p>
            <p>学生的平均年龄是 25</p>
        </div>
        )
    }
}
export default StudentList
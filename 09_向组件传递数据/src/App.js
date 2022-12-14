import About from "./About"
import Header from "./Header"

// 1. 在组件身上添加属性然后传递数据
// 2. 将数据统一管理，然后利用 ... 展开操作直接传递给相应的组件
//  a. 函数组件在： 在函数组件内可以接收到外部的数据，内部直接访问即可 {name: xxx, age:xxx}
//  b. 类组件： 在类组件的内部处理存在一个 props 属性，外部传递的数据都放在这里保存，我们可以直接进行使用

const obj = {
  name: 'zce',
  age: 40
}

function App() {
  return (
    <div>
     {/* <Header name={"拉钩教育"} age={100}/> */}
     <Header {...obj}/>
     {/* <About a={10} b={100}/> */}
     <About {...obj}/>
    </div>
  )

}

export default App

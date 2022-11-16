import About from "./About"
import Header from "./Header"

// 1 针对函数组件来说，如果想要设置默认的 props 属性值，则直接通过 组件名称 .defaultProps 来设置一个对象
// 2 针对类组件来说，我们可以直接定义 static defaultProps 来管理需要设置默认值的属性即可

// 为什么要对 props 中的属性进行类型校验
// 

const obj = {
  name: 'zce',
  age: 40
}

function App() {
  return (
    <div>
     {/* <Header {...obj}/>
     <About {...obj}/> */}

     <Header/>
     <About/>
    </div>
  )

}

export default App

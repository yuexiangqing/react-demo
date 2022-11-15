import About from './About'
// 1.创建函数组件 现在所使用的通过 return 的就是函数组件
// 2.创建类组件 
// a. 必须继承 Component render
// b. 组件名称 首字母必须是大写的，在 React 当中可以用于区分组件和普通的标记
// c. 占位符


function App() {
  return (
    <div>
     <About/>
    </div>
  )

}

export default App

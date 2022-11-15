// 外联样式 
// 01 全局外联样式  所有组件当中都可以直接进行使用 在使用类名的时候 使用className 

// 02 组件级别的外联样式: 只有某一个组件可以使用
// 特点：组件名.module.css, 例如：Test.module.css



function App() {
  return (
    <div className={'box'}>
     外联样式
    </div>
  )

}

export default App

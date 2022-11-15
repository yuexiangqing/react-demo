// 01 JSX 它本身就是一个表达式，在运算之后有一个结果，可以将它赋值给一个变量，也可以将它当成一个参数去传递
// 02 JSX 可以添加属性
// 字符串属性，直接用双引号包裹
// 动态属性，不用双引号，用{}
// 03 JSX 添加子元素
// 04 JSX 只能有一个父元素
// 05 当我们使用单标签的时候，必须正确关闭


// const name = <div>拉勾教育</div>
const age = 100



function App() {
  return (
    // <div>{name}</div>
    <div>
      <p title='自定义标题'>添加属性</p>
      <p title={age}>添加动态属性</p>
    </div>
    
  )
}

export default App;

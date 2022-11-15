//  01 JSX 可以看作是 JS 语言的扩展，它既不是字符串，也不是 HTML
//  02 它具备了 JS 的所有功能，同时还可以被转为 HTML 在界面上进行展示 （react react-dom）


// 在 JSX中：

// 可以动态显示数据   { }
// 调用方法: 除了自定义的方法，也可以调用内置的
// 支持表达式, 也支持三元表达式 (注意： 这里不能写if else)
// 可以模版字符串的拼接
// 对象，（使用的时候要注意）


const name = '拉勾教育'
const flag = true
const obj ={
  name: '拉勾教育',
  age: 100
}

function sayHello () {
  return '大家好'
}

function App() {
  return (
    <div>
      <p>{name}</p>
      <p>name</p>
      <p>{sayHello()}</p>
      <p>{console.log('111')}</p>
      <p>{Math.random()}</p>
      <p>{1+2+3}</p>
      <p>{flag ? '登录状态' : '执行登录'}</p>
      <p>{`hello, ${name}`}</p>
      <p>{/*这里是注释的内容*/}</p>
      <p>{JSON.stringify(obj)}</p>
    </div>
    
  )
}

export default App;

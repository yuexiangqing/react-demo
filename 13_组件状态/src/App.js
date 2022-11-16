// 组件状态就是数据：因此组件状态就是某一个组件自己的数据，也就是组件数据进行更新时，界面也能跟随着一起响应
// 数据驱动 DOM： 当我们修改某一个数据的时候，界面上的 DOM 中数据展示也会自动更新
// 组件状态管理

import Header from "./Header"

function App() {
  // const obj = {
  //   name: 'syy',
  //   age: 18
  // }

  return (
    <div>
      {/* <Header {...obj}/> */}
      <Header/>
    </div>
  )

}

export default App

import React, { Component } from 'react'

// 1.为什么需要 Redux 
// 在react中是单向数据流，传递数据的时候需要从上层组件往下传，有优势：利于管理和排错
// 但是当项目越来越大的时候，组件之间传递数据就会变得很困难，代码的逻辑也变得不清晰，这个时候就推出了 Redux
// 2. Redux 是什么
// 我们可以直接认为 Redux 就是在 react 中进行数据管理的一个工具模块
// 如果工作： 在Redux中准备了一个独立的组件，叫store,我们可以将状态和修改状态的一些操作都放在 store上进行保存，并与之关联，后续只需要让组件与 store 进行交互就可以了
// 这样就避免了组件和组件之间的数据的传递

// Redux 是一个数据管理框架，它提供了一个叫 store 的统一数据存储的仓库
// store 就像是一个数据管理的中间人，让组件之间无需再直接进行数据的传递
class App extends Component{


render(){
    return (
      <div>
       Redux 工作流程
      </div>
    )
  }
 
}

export default App

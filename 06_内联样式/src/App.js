import Radium from 'radium'
// 一 内联样式
// 1. 设置样式的时候应该将键值对放置于 {} 中进行管理 单位可以不加 命名的时候需要驼峰命名法 
// 2. 内联样式默认无法支持伪类以及媒体查询样式设置
// 3. 如果想让内联样式具有该功能，需要安装第三方的包 radium 
//  npm i radium@0.26.1 --force
//  a. 导入 Radium 函数将当前需要支持伪类操作的组件包裹之后再导出
//  b. 可以通过 style 设为数组，从而进行判断



// 二 外联样式

//  const styleObj = {
//   width: 100,
//   height: 120,
//   backgroundColor: 'green',
//   ":hover": {backgroundColor: 'skyblue'},
//   "@media (max-width: 1000px)": {width: 300}
// }

const ButtonStyle = {
  base: {
    width: 150,
    height: 40,
    fontSize: 20,
    backgroundColor: '#fff'
  },
  login: {
    background: 'green'
  },
  logout: {
    background: 'orange'
  }
}

const isLogin = false

function App() {
  return (
  // <div style={{width: '100px'}}>样式处理 </div> 行内样式
  // <div style={styleObj}>样式处理 </div>
  <div>
    <button style={[
      ButtonStyle.base,
      isLogin ? ButtonStyle.login : ButtonStyle.logout
    ]}>按钮</button>
  </div>
  )

}

export default Radium(App);

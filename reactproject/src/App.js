import Radium from 'radium'
// 一 内联样式
// 1. 设置样式的时候应该将键值对放置于 {} 中进行管理
// 2. 内联样式默认无法支持伪类以及媒体查询样式设置
// 3. 如果想让内联样式具有该功能，需要安装第三方的包 radium 
//  npm i radium@0.26.1 --force
//  a. 导入 Radium 函数将当前需要支持伪类操作的组件包裹之后再导出
//  b



// 二 外联样式

 const styleObj = {
  width: 100,
  height: 120,
  backgroundColor: 'green',
  ":hover": {backgroundColor: 'skyblue'}
}
function App() {
  return (
  // <div style={{width: '100px'}}>样式处理 </div> 行内样式
  <div style={styleObj}>样式处理 </div>
  )

}

export default Radium(App);

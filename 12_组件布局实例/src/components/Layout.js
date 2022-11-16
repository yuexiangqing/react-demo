// 当前组件的作用就是将 Header 与 Footer 显示出来，同时中间的 main 内容空出来
// 将来我们传入什么样的 JSX 那么 main 里就显示什么样的  DOM

import Header from "./Header"
import Footer from "./Footer"

// 通过 home 组件中传递 JSX ，并用 props 来接收
function Layout(props){
    return(
        <>
        <Header/>
        <div className={'main'}>
            {props.children}
        </div>
        <Footer/>
        </>
    )
}
export default Layout
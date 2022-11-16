import About from "./About"
import Header from "./Header"


const obj = {
  name: 'zce',
  age: 40
}

function App() {
  return (
    <div>
     <Header>
      <p>这是 Header组件中的 P 标签</p>
     </Header>
     <About/>
    </div>
  )

}

export default App

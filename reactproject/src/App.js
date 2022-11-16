import About from "./About"
import Header from "./Header"


const obj = {
  name: 'zce',
  age: 40
}

function App() {
  return (
    <div>
     <Header {...obj}/>
     <About {...obj}/>
    </div>
  )

}

export default App

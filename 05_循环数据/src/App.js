// 01. JSX 当中可以直接将数组中的数据解构
// 02. 循环的时候，也需要 key

// const arr = [<p>1</p>, <p>22</p>, <p>333</p>]

const arr = [
  {
    id: 1,
    name:'zce',
    age: 40,
    salary: 100000
  },
  {
    id: 2,
    name:'zoe',
    age: 18,
    salary: 200000
  }
]


function App() {
  // return (<div>{arr}</div>)

  const ret = arr.map(item => {
    return (
      <li key={item.id}>
        <span>{item.name}--</span>
        <span>{item.age}--</span>
        <span>{item.salary}</span>
      </li>
      )
  })
  return <ul>{ret}</ul>
}

export default App;

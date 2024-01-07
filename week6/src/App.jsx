import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todo, setTodo] = useState([{
    id: 1,
    title: 'go to gym',
    description: 'abcd'
  }, {
    id: 2,
    title: 'go to gym',
    description: 'abcd'
  }, {
    id: 3,
    title: 'go to gym',
    description: 'abcd4'
  },
  ])
  // function addTodo() {
  //   setTodo([...todo, {
  //     id: todo.length + 1,
  //     title: 'NEW one',
  //     description: 'newTodo'

  //   }])
  // }
  useEffect(() => {
    setTimeout(() => {
      fetch('https://sum-server.100xdevs.com/todos').then(
        async (res) => {
          const data = await res.json()
          console.log(`data`, data.todos)

          setTodo(data.todos);
        }
      )
    }, 1000)

  }, [])

  return (
    <>
      <div>
        {todo.map((ele, index) => { return <Todo title={ele.title} description={ele.description} key={ele.id}></Todo> })}
      </div>
    </>
  )
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h7>
        {description}
      </h7>
    </div>
  )
}

export default App

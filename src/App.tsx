import './App.css'
import { useState } from 'react'
import Todos from './componenets/Todos'
import NewTodo from './componenets/NewTodo'

type TodosProps = {
  id: string
  text: string
}

function App() {
  const [todos, setTodos] = useState<TodosProps[]>([
    { id: '1', text: 'Learn React' },
    { id: '2', text: 'Learn TS' },
  ])

  const addTodo = (enteredText: string) => {
    setTodos([...todos, { id: Math.random().toString(), text: enteredText }])
  }

  const removeTodo = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(prevTodo => prevTodo.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default App

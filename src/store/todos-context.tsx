import React, { useState } from 'react'

type TodosProps = {
  id: string
  text: string
}

type ContextTypes = {
  items: TodosProps[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

const TodosContext = React.createContext<ContextTypes>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

export const TodosContextProvider: React.FC = ({ children }) => {
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

  const ctx: ContextTypes = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  }

  return <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
}

export default TodosContext

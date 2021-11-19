import React from 'react'
import classes from './Todos.module.css'

import TodoItem from './TodoItem'

type TodosProps = {
  id: string
  text: string
}

const Todos: React.FC<{
  items: TodosProps[]
  removeTodo: (todoId: string) => void
}> = ({ items, removeTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            removeTodo={() => removeTodo(item.id)}
            text={item.text}
          />
        )
      })}
    </ul>
  )
}

export default Todos

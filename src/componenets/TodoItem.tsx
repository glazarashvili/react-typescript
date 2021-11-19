import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{
  text: string
  removeTodo: (id: React.MouseEvent) => void
}> = ({ text, removeTodo }) => {
  return (
    <li onClick={removeTodo} className={classes.item}>
      {text}
    </li>
  )
}

export default TodoItem

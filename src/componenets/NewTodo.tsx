import React from 'react'
import classes from './NewTodo.module.css'

import { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }

    onAddTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo

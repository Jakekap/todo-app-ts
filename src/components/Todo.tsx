import { type TodoId, type Todo as TodoType } from '../types'
import { useState } from 'react'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, completed, onRemoveTodo, onToggleCompleted }) => {
  const [text, setText] = useState('')

  return (
        <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={
                (event) => {
                  onToggleCompleted({ id, completed: event.target.checked })
                }
              }
            />
            <input className="" type="text" value={text} onChange={e => { setText(e.target.value) }} />
            <label>{text}</label>
            <button
                className="destroy"
                onClick={() => {
                  onRemoveTodo({ id })
                }}
            />
        </div>
  )
}

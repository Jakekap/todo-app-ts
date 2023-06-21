import { type Todo as TodoType } from '../types'
import { useState } from 'react'

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, completed, onRemoveTodo }) => {
  const [text, setText] = useState('')

  return (
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={() => {}} />
            <input className="" type="text" value={text} onChange={e => { setText(e.target.value) }} />
            <label>{text}</label>
            <button
                className="destroy"
                onClick={() => {
                  onRemoveTodo(id)
                }}
            />
        </div>
  )
}

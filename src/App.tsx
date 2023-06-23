import { Todos } from './components/Todos'
import { useState } from 'react'
import { type TodoId, type Todo as TodoType } from './types'

const mockTodos = [{
  id: '1',
  title: 'Cebolla',
  completed: false
}, {
  id: '2',
  title: 'Tomate',
  completed: false
}, {
  id: '3',
  title: 'Midudev',
  completed: false
}]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
        onToggleCompleted={handleComplete}
      />
    </div>
  )
}

export default App

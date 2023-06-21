import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li
                key={todo.id}
                className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                  title={todo.title}
                  id={todo.id}
                  completed={todo.completed}
                  onRemoveTodo={onRemoveTodo}
                  />
                </li>
            ))}
        </ul>
  )
}
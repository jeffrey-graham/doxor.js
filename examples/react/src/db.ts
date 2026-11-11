// Declare one database instance at module level and share it across components.
import { collection, createDB } from 'doxor.js'

export type Todo = {
  id: number
  title: string
  done: 0 | 1
}

export const db = createDB({
  name: 'todos-react-example',
  collections: {
    todos: collection<Todo>().key('id', { autoIncrement: true }).index('done'),
  },
})

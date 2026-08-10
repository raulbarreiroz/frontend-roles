import { useMemo, useState } from 'react'
import QuoteBanner from './components/QuoteBanner.jsx'
import TaskForm from './components/TaskForm.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import TaskList from './components/TaskList.jsx'
import { usePersistentTasks } from './hooks/usePersistentTasks.js'

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = usePersistentTasks()
  const [filter, setFilter] = useState('todas')

  const visible = useMemo(() => {
    if (filter === 'todas') return tasks
    return tasks.filter((t) => t.category === filter)
  }, [tasks, filter])

  const pending = tasks.filter((t) => !t.done).length

  return (
    <div className="page">
      <header>
        <h1>Todo Board</h1>
        <p>{pending} pendiente{pending === 1 ? '' : 's'}</p>
      </header>

      <QuoteBanner />
      <TaskForm onAdd={addTask} />
      <CategoryFilter value={filter} onChange={setFilter} />
      <TaskList tasks={visible} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  )
}

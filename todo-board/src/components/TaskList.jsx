export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return <p className="empty">Nada por aquí. Agrega una tarea.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? 'task task--done' : 'task'}>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggle(task.id)}
            />
            <span>{task.title}</span>
          </label>
          <em className="tag">{task.category}</em>
          <button type="button" onClick={() => onRemove(task.id)} aria-label="Borrar">
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}

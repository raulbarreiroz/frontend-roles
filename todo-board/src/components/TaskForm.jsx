import { useState } from 'react'

const CATEGORIES = ['personal', 'trabajo', 'estudio']

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleSubmit(e) {
    e.preventDefault()
    onAdd(title, category)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="¿Qué hay que hacer?"
        aria-label="Nueva tarea"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Categoría"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="submit">Agregar</button>
    </form>
  )
}

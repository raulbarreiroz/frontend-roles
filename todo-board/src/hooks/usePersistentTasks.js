import { useEffect, useState } from 'react'

const STORAGE_KEY = 'todo-board.tasks.v1'

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function usePersistentTasks() {
  const [tasks, setTasks] = useState(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
      // storage lleno o bloqueado — lo ignoramos en junior
    }
  }, [tasks])

  function addTask(title, category) {
    const trimmed = title.trim()
    if (!trimmed) return

    setTasks((prev) => [
      {
        id: crypto.randomUUID(),
        title: trimmed,
        category,
        done: false,
        createdAt: Date.now(),
      },
      ...prev,
    ])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return { tasks, addTask, toggleTask, removeTask }
}

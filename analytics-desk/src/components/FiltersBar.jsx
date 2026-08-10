import { useEffect, useState } from 'react'

function debounce(fn, ms) {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), ms)
  }
}

export default function FiltersBar({ value, onChange }) {
  const [draft, setDraft] = useState(value.q)

  useEffect(() => {
    const push = debounce((q) => onChange({ ...value, q }), 300)
    push(draft)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft])

  return (
    <div className="filters">
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Buscar evento…"
      />
      <label>
        Desde
        <input
          type="date"
          value={value.from}
          onChange={(e) => onChange({ ...value, from: e.target.value })}
        />
      </label>
      <label>
        Hasta
        <input
          type="date"
          value={value.to}
          onChange={(e) => onChange({ ...value, to: e.target.value })}
        />
      </label>
    </div>
  )
}

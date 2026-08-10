const OPTIONS = ['todas', 'personal', 'trabajo', 'estudio']

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar por categoría">
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          type="button"
          className={value === opt ? 'chip chip--active' : 'chip'}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

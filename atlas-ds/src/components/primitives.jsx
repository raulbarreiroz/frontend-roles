export function Button({ children, variant = 'primary', ...rest }) {
  return (
    <button className={`atlas-btn atlas-btn--${variant}`} {...rest}>
      {children}
    </button>
  )
}

export function Card({ title, children }) {
  return (
    <section className="atlas-card">
      {title ? <h3>{title}</h3> : null}
      <div>{children}</div>
    </section>
  )
}

export function Stack({ gap = 3, children }) {
  return (
    <div className="atlas-stack" style={{ gap: `var(--atlas-space-${gap})` }}>
      {children}
    </div>
  )
}

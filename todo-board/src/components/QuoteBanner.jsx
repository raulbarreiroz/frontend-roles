import { useEffect, useState } from 'react'
import { fetchDailyQuote } from '../api/quotes.js'

export default function QuoteBanner() {
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetchDailyQuote()
      .then((data) => {
        if (!cancelled) setQuote(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (error) {
    return <aside className="quote quote--muted">Sin frase hoy — {error}</aside>
  }

  if (!quote) {
    return <aside className="quote quote--muted">Cargando frase…</aside>
  }

  return (
    <aside className="quote">
      <p>“{quote.text}”</p>
      <span>— {quote.author}</span>
    </aside>
  )
}

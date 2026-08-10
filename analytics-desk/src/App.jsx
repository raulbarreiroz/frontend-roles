import { useState } from 'react'
import ChartsPanel from './components/ChartsPanel.jsx'
import FiltersBar from './components/FiltersBar.jsx'
import EventsFeed from './components/EventsFeed.jsx'
import SessionBar from './components/SessionBar.jsx'

export default function App() {
  const [filters, setFilters] = useState({ q: '', from: '', to: '' })

  return (
    <div className="shell">
      <header>
        <div>
          <p className="eyebrow">semi-senior desk</p>
          <h1>Analytics Desk</h1>
        </div>
        <SessionBar />
      </header>
      <ChartsPanel />
      <FiltersBar value={filters} onChange={setFilters} />
      <EventsFeed filters={filters} />
    </div>
  )
}

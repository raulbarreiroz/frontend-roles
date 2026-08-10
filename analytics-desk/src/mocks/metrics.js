const SERIES = [
  { day: 'Lun', visits: 420, revenue: 1200 },
  { day: 'Mar', visits: 510, revenue: 1480 },
  { day: 'Mié', visits: 390, revenue: 980 },
  { day: 'Jue', visits: 640, revenue: 2100 },
  { day: 'Vie', visits: 720, revenue: 2450 },
  { day: 'Sáb', visits: 580, revenue: 1900 },
  { day: 'Dom', visits: 310, revenue: 760 },
]

const EVENTS = Array.from({ length: 48 }, (_, i) => ({
  id: `evt-${i + 1}`,
  title: ['Checkout', 'Signup', 'Refund', 'Campaign click'][i % 4],
  amount: Math.round(20 + Math.random() * 400),
  createdAt: Date.now() - i * 36e5,
}))

export function getWeeklySeries() {
  return SERIES
}

export async function fetchEventsPage({ pageParam = 0, q = '', from, to }) {
  await new Promise((r) => setTimeout(r, 350))

  let rows = EVENTS
  if (q.trim()) {
    const needle = q.trim().toLowerCase()
    rows = rows.filter((e) => e.title.toLowerCase().includes(needle))
  }
  if (from) rows = rows.filter((e) => e.createdAt >= new Date(from).getTime())
  if (to) rows = rows.filter((e) => e.createdAt <= new Date(to).getTime())

  const size = 8
  const slice = rows.slice(pageParam, pageParam + size)
  const next = pageParam + size < rows.length ? pageParam + size : undefined

  return { items: slice, nextCursor: next }
}

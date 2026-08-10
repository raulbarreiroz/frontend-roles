import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchEventsPage } from '../mocks/metrics.js'
import { useSessionStore } from '../store/session.js'

export default function EventsFeed({ filters }) {
  const addToCart = useSessionStore((s) => s.addToCart)

  const query = useInfiniteQuery({
    queryKey: ['events', filters],
    queryFn: ({ pageParam }) =>
      fetchEventsPage({
        pageParam,
        q: filters.q,
        from: filters.from,
        to: filters.to,
      }),
    initialPageParam: 0,
    getNextPageParam: (last) => last.nextCursor,
  })

  const rows = query.data?.pages.flatMap((p) => p.items) ?? []

  return (
    <section className="feed">
      <h2>Eventos</h2>
      <ul>
        {rows.map((evt) => (
          <li key={evt.id}>
            <div>
              <strong>{evt.title}</strong>
              <span>${evt.amount}</span>
            </div>
            <button
              type="button"
              onClick={() =>
                addToCart({ id: evt.id, title: evt.title, price: evt.amount })
              }
            >
              Al carrito
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="load-more"
        onClick={() => query.fetchNextPage()}
        disabled={!query.hasNextPage || query.isFetchingNextPage}
      >
        {query.isFetchingNextPage
          ? 'Cargando…'
          : query.hasNextPage
            ? 'Cargar más'
            : 'No hay más'}
      </button>
    </section>
  )
}

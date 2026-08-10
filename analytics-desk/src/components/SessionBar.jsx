import { useSessionStore } from '../store/session.js'

export default function SessionBar() {
  const user = useSessionStore((s) => s.user)
  const cart = useSessionStore((s) => s.cart)
  const login = useSessionStore((s) => s.login)
  const logout = useSessionStore((s) => s.logout)
  const clearCart = useSessionStore((s) => s.clearCart)

  const items = cart.reduce((n, c) => n + c.qty, 0)

  return (
    <div className="session">
      {user ? (
        <>
          <span>
            Hola, <b>{user.name}</b>
          </span>
          <span className="badge">Carrito: {items}</span>
          <button type="button" onClick={clearCart}>
            Vaciar
          </button>
          <button type="button" onClick={logout}>
            Salir
          </button>
        </>
      ) : (
        <button type="button" onClick={() => login('ana@shop.dev')}>
          Entrar (demo)
        </button>
      )}
    </div>
  )
}

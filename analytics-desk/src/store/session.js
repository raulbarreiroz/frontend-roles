import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSessionStore = create(
  persist(
    (set, get) => ({
      user: null,
      cart: [],
      login: (email) =>
        set({
          user: {
            email,
            name: email.split('@')[0],
            loggedAt: Date.now(),
          },
        }),
      logout: () => set({ user: null }),
      addToCart: (item) => {
        const exists = get().cart.find((c) => c.id === item.id)
        if (exists) {
          set({
            cart: get().cart.map((c) =>
              c.id === item.id ? { ...c, qty: c.qty + 1 } : c,
            ),
          })
          return
        }
        set({ cart: [...get().cart, { ...item, qty: 1 }] })
      },
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'analytics-desk-session' },
  ),
)

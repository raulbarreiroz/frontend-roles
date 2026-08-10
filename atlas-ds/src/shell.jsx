import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button, Card, Stack } from './components/primitives.jsx'
import { CheckoutRemote } from '../remotes/checkout.jsx'
import { CatalogRemote } from '../remotes/catalog.jsx'
import { ProfileRemote } from '../remotes/profile.jsx'
import './tokens.css'
import './shell.css'

function Shell() {
  const [tab, setTab] = useState('catalog')
  const [swState, setSwState] = useState('pending')

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      setSwState('unsupported')
      return
    }
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => setSwState('ready'))
      .catch(() => setSwState('failed'))
  }, [])

  return (
    <main className="shell">
      <header>
        <h1>Atlas</h1>
        <p>Design system host · SW: {swState}</p>
      </header>

      <Stack gap={3}>
        <nav className="tabs">
          <Button variant={tab === 'catalog' ? 'primary' : 'ghost'} onClick={() => setTab('catalog')}>
            Catálogo
          </Button>
          <Button variant={tab === 'checkout' ? 'primary' : 'ghost'} onClick={() => setTab('checkout')}>
            Checkout
          </Button>
          <Button variant={tab === 'profile' ? 'primary' : 'ghost'} onClick={() => setTab('profile')}>
            Perfil
          </Button>
        </nav>

        <Card title="Remote activo">
          {tab === 'catalog' && <CatalogRemote />}
          {tab === 'checkout' && <CheckoutRemote />}
          {tab === 'profile' && <ProfileRemote />}
        </Card>
      </Stack>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shell />
  </StrictMode>,
)

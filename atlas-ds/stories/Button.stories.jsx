import { Button } from '../src/components/primitives.jsx'

export default {
  title: 'Atlas/Button',
  component: Button,
}

export const Primary = {
  args: { children: 'Continuar', variant: 'primary' },
}

export const Ghost = {
  args: { children: 'Cancelar', variant: 'ghost' },
}

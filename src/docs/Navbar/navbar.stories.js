import White from './white.html?raw'
import Blue from './blue.html?raw'
import { navbarExample } from './navbar'
import { useEffect } from '@storybook/client-api'

export default { title: 'Navbar' }

export const white = () => {
  useEffect(() => {
    navbarExample()
  }, [])
  return White
}

export const blue = () => {
  useEffect(() => {
    navbarExample()
  }, [])
  return Blue
}

import MultiSelect from './multiSelect.html'
import SelectOne from './selectOne.html'
import { dropdownExample } from './dropdown'
import { useEffect } from '@storybook/client-api'

export default { title: 'Dropdown' }

export const selectOne = () => {
  useEffect(() => {
    dropdownExample()
  }, [])
  return SelectOne
}

export const multiSelect = () => {
  useEffect(() => {
    dropdownExample()
  }, [])
  return MultiSelect
}

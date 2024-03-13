import PrimaryExample from './primary.html?raw'
import SecondaryExample from './secondary.html?raw'
import Login from './login.html?raw'

export default {
  title: 'Button and links/Button',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['Primary', 'Secondary'],
      mapping: {
        Primary: 'primary',
        Secondary: 'secondary'
      }
    },
    size: {
      control: 'select',
      options: ['Default', 'Small', 'Large'],
      mapping: {
        Default: '',
        Small: 'sm',
        Large: 'lg'
      }
    },
    type: {
      control: 'select',
      options: ['Button', 'Anchor'],
      mapping: {
        Button: 'button',
        Anchor: 'a'
      }
    },
    iconPosition: {
      control: 'select',
      options: ['Before', 'After'],
      mapping: {
        Before: 'before',
        After: 'after'
      }
    }
  },
  args: {
    label: 'Button label'
  }
}

function Template(args) {
  const {
    variant = 'primary',
    label,
    secondRowLabel,
    arrow,
    type = 'button',
    size,
    icon,
    iconPosition = 'before'
  } = args

  const arrowClass = arrow ? 'btn-arrow' : ''
  const textAlign = secondRowLabel ? 'text-left' : ''
  const sizeClass = type === 'a' && size === 'lg' ? 'btn-link-lg' : size ? `btn-${size}` : ''
  const iconMarkup = icon
    ? `
    <svg class="icon align-bottom text-white" width="24" height="24">
      <use href="lf-icons/sprite/24/icons.svg#bankid-24"></use>
    </svg>
  `
    : ''
  const secondLabel = secondRowLabel
    ? `
    <span class="d-block text-sm font-weight-normal font-base">
     ${secondRowLabel}
    </span>
  `
    : ''

  return `
    <${type}
      ${type === 'button' ? 'type="button"' : 'href=""'}
      class="btn btn-${variant} ${arrowClass} ${sizeClass} ${textAlign} btn-sm-block"
    >
      ${(iconPosition === 'before' && iconMarkup) || ''}
      ${label}
      ${secondLabel}
      ${(iconPosition === 'after' && iconMarkup) || ''}
    </${type}>
  `
}

export const Default = Template.bind({})
Default.args = {
  label: 'Begin now',
  type: 'button',
  variant: 'primary',
  arrow: false,
  secondRowLabel: '',
  size: '',
  icon: false,
  iconPosition: 'before'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary'
}

export const Button = Template.bind({})
Button.args = {
  type: 'button'
}

export const LinkButton = Template.bind({})
LinkButton.args = {
  type: 'a'
}

export const LargeLinkButton = Template.bind({})
LargeLinkButton.args = {
  type: 'a',
  size: 'lg'
}

export const WithArrow = Template.bind({})
WithArrow.args = {
  arrow: true
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  size: 'lg'
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'sm'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Sign document',
  icon: true,
  iconPosition: 'before'
}

export const WithIconAfter = Template.bind({})
WithIconAfter.args = {
  label: 'Start chat',
  icon: true,
  iconPosition: 'after'
}

export const LoadingState = Template.bind({})
LoadingState.args = {
  label: 'Continue',
  loading: true
}

export const TwoRowButton = Template.bind({})
TwoRowButton.args = {
  label: 'Save changes',
  secondRowLabel: 'and return to start'
}

export const primary = () => PrimaryExample
export const secondaryExamples = () => SecondaryExample
export const login = () => Login

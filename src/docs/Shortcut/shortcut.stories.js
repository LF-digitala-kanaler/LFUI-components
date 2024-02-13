import Shortcut from './shortcut.html?raw'

export default {
  title: 'Button and links/Shortcut',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  },
  args: {
    title: 'Shortcut title'
  }
}

const iconMarkup = `
  <svg class="icon d-md-none" width="24" height="24">
    <use xlink:href="lf-icons/sprite/24/icons.svg#contract-24"></use>
  </svg>
  <svg class="icon d-none d-md-block" width="32" height="32">
    <use xlink:href="lf-icons/sprite/32/icons.svg#contract-32"></use>
  </svg>
`

function Template({ title, content, icon }) {
  return `
  <a
    href="#"
    onclick="return false"
    class="shortcut mb-1"
  >
    ${icon ? iconMarkup : ''}
    ${content ? '<div>' : ''}
    <strong class="shortcut-title">${title}</strong>
    ${content || ''}
    ${content ? '</div>' : ''}
  </a>
  `
}

function TemplateBoxLayout() {
  return `
  <div class="row row-tight">
    <div class="col-6 col-md-3">
      <a href="#" onclick="return false" class="shortcut shortcut-box">
        <svg class="icon mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#wallet-40"></use>
        </svg>
        <strong class="shortcut-title">Account</strong>
      </a>
    </div>
    <div class="col-6 col-md-3">
      <a href="#" class="shortcut shortcut-box">
        <svg class="icon" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#house-40"></use>
        </svg>
        <strong class="shortcut-title">Loans</strong>
      </a>
    </div>
  </div>
  `
}

function TemplateBoxLayoutSmall({ viewport }) {
  return `
  <div class="row row-tight">
    <div class="col-6 col-md-3">
      <a href="#" onclick="return false" class="shortcut shortcut-box">
        <svg class="icon mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#wallet-40"></use>
        </svg>
        <strong class="shortcut-title">Account</strong>
      </a>
    </div>
    <div class="col-6 col-md-3">
      <a href="#" class="shortcut shortcut-box">
        <svg class="icon" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#house-40"></use>
        </svg>
        <strong class="shortcut-title">Loans</strong>
      </a>
    </div>
  </div>
  `
}

function TemplateBoxLayoutLarge() {
  return `
  <div class="row row-tight">
    <div class="col-lg-3">
      <a href="#" onclick="return false" class="shortcut shortcut-lg-box">
        <svg class="icon d-lg-none" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#wallet-24"></use>
        </svg>
        <svg class="icon d-none d-lg-block mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#wallet-40"></use>
        </svg>
        <strong class="shortcut-title">Account</strong>
      </a>
    </div>
    <div class="col-lg-3">
      <a href="#" onclick="return false" class="shortcut shortcut-lg-box">
        <svg class="icon d-lg-none" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#house-24"></use>
        </svg>
        <svg class="icon d-none d-lg-block mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#house-40"></use>
        </svg>
        <strong class="shortcut-title">Loans</strong>
      </a>
    </div>
    <div class="col-lg-3">
      <a href="#" onclick="return false" class="shortcut shortcut-lg-box">
        <svg class="icon d-lg-none" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#coins-24"></use>
        </svg>
        <svg class="icon d-none d-lg-block mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#coins-40"></use>
        </svg>
        <strong class="shortcut-title">Transfer</strong>
      </a>
    </div>
    <div class="col-lg-3">
      <a href="#" onclick="return false" class="shortcut shortcut-lg-box">
        <svg class="icon d-lg-none" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#contract-24"></use>
        </svg>
        <svg class="icon d-none d-lg-block mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#contract-40"></use>
        </svg>
        <strong class="shortcut-title">Credit score</strong>
      </a>
    </div>
  </div>
  `
}

export const Default = Template.bind({})
Default.args = {
  title: 'Digital documents'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  title: 'Financial Reports',
  icon: true
}

export const WithContent = {
  render: () => `
    ${Template({
    title: 'Contact us',
    content: `
        <span class="">Open 09:00-18:00, Monday to Friday</span>
      `
  })}
    ${Template({
    title: 'Sustainability',
    content: `
      <p>
        The starting point for the sustainability efforts of Sweden’s largest
        insurance company, Länsförsäkringar, is a local and long-term
        responsibility in society. Protecting, making customers secure and helping
        them to prevent damage has always been part of our core&nbsp;business.
      </p>
      `
  })}
  `
}
export const BoxLayout = TemplateBoxLayout.bind({})
export const BoxLayoutSmall = TemplateBoxLayoutSmall.bind({})
export const BoxLayoutLarge = TemplateBoxLayoutLarge.bind({})

export const shortcutExample = () => Shortcut

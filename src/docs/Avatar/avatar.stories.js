import Avatar from './avatar.html?raw'

export default {
  title: 'System display/Avatar',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable']
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['black', 'blue', 'red', 'gray']
    }
  }
}

export const avatar = () => Avatar

function renderImage(imageUrl, name) {
  return `
    <img class="avatar-image" src="${imageUrl}" alt="${name}">
  `
}

function initOptions(args) {
  return {
    theme: args.theme ? 'avatar-' + args.theme : '',
    initials: args.initials || '',
    inverted: args.inverted ? 'avatar-inverted' : '',
    image: args.image || '',
    name: args.name || ''
  }
}

function renderAvatar({ theme, inverted, initials, name, image }) {
  return `
    <div
      class="avatar avatar-inline ${theme} ${inverted}"
      data-initials="${initials}"
    >
      ${image ? renderImage(image, name) : name}
    </div>
  `
}

function Template(args) {
  return renderAvatar(initOptions(args))
}

function ThemeTemplate(args) {
  const baseOptions = initOptions(args)
  return `
    ${renderAvatar({
      ...baseOptions,
      theme: 'avatar-blue'
    })}

    ${renderAvatar({
      ...baseOptions,
      theme: 'avatar-red'
    })}

    ${renderAvatar({
      ...baseOptions,
      theme: 'avatar-black'
    })}

    ${renderAvatar({
      ...baseOptions,
      theme: 'avatar-gray'
    })}
  `
}

export const avatarDefault = Template.bind({})
avatarDefault.args = {
  initials: 'JD',
  name: 'Jane Doe',
  inverted: false,
  theme: '',
  image: ''
}

export const avatarWithImage = Template.bind({})
avatarWithImage.args = {
  initials: 'JD',
  name: 'Jane Doe',
  image: 'https://avatars.githubusercontent.com/u/21335758'
}

export const themes = ThemeTemplate.bind({})
themes.args = {
  initials: 'JD',
  name: 'Jane Doe'
}

export const themesInverted = ThemeTemplate.bind({})
themesInverted.args = {
  initials: 'JD',
  name: 'Jane Doe',
  inverted: true
}

import BannerRaw from './banner.html?raw'
import WithIconRaw from './withIcon.html?raw'
import DefaultRaw from './default.html?raw'
import WithButtonRaw from './withButton.html?raw'
import WithCloseButtonRaw from './withCloseButton.html?raw'
import WithStrongEmphasisRaw from './withStrongEmphasis.html?raw'
import DynamicRaw from './dynamic.html?raw'

export default {
  title: 'System display/Alert',
  parameters: {
    badges: ['stable']
  }
}

export const Defaults = () => DefaultRaw
export const WithIcon = () => WithIconRaw
export const WithButton = () => WithButtonRaw
export const WithCloseButton = () => WithCloseButtonRaw
export const WithStrongEmphasis = () => WithStrongEmphasisRaw
export const Banner = () => BannerRaw
export const Dynamic = () => DynamicRaw

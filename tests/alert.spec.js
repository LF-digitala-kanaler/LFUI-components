// @ts-check
import { visualTest } from '../tools/test.js'

const section = 'system-display'
const name = 'alert'

visualTest(`${section}-${name}--defaults`, { title: `${name}--defaults` })
visualTest(`${section}-${name}--banner`, { title: `${name}--banner` })
visualTest(`${section}-${name}--with-button`, { title: `${name}--with-button` })
visualTest(`${section}-${name}--with-close-button`, { title: `${name}--with-close-button` })
visualTest(`${section}-${name}--with-icon`, { title: `${name}--with-icon` })
visualTest(`${section}-${name}--with-shadow`, { title: `${name}--with-shadow` })
visualTest(`${section}-${name}--with-strong-emphasis`, { title: `${name}--with-strong-emphasis` })

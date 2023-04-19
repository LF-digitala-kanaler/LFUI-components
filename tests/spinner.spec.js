import { visualTest } from '../tools/test.js'

const section = 'system-display'
const name = 'spinner'

visualTest(`${section}-${name}--defaults`, { title: `${name}--defaults` })
visualTest(`${section}-${name}--red`, { title: `${name}--red` })

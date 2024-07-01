import DefaultExample from './default.html?raw'
import DisplayExample from './display.html?raw'

export default {
  title: 'Typography & text/Headings',
  parameters: {
    badges: ['stable']
  }
}

export const Standard = () => `
  <h1>Länsförsäkringar Heading 1</h1>
  <h2>Länsförsäkringar Heading 2</h2>
  <h3>Länsförsäkringar Heading 3</h3>
  <h4>Länsförsäkringar Heading 4</h4>
  <h5>Länsförsäkringar Heading 5</h5>
  <h6>Länsförsäkringar Heading 6</h6>
`

export const StandardWithLink = () => `
  <h2>
    Länsförsäkringar
    <a href="#" onclick="return false">Heading 2</a>
  </h2>
`

export const StandardWithHiddenLink = () => `
  <h2>
    <a href="#" onclick="return false" class="link-adaptive">Send us an email</a>
  </h2>
`

export const Display = () => `
  <h1 class="display-1">Länsförsäkringar Display 1</h1>
  <h1 class="display-2">Länsförsäkringar Display 2</h1>
  <h1 class="display-3">Länsförsäkringar Display 3</h1>
  <h1 class="display-4">Länsförsäkringar Display 4</h1>
`
export const DisplayWithHighlight = () => `
  <h4 class="display-4">Länsförsäkringar <em>Display</em> 2</h4>
`

export const defaultsExamples = () => DefaultExample
export const displayExamples = () => DisplayExample

import{M as s,e as o,f as i}from"./index-a2cf5289.js";import{o as n}from"./jsxRuntime.module-66b8704f.js";import{D as r,M as c,a,b as l}from"./datepicker.stories-451b5864.js";import{B as p}from"./Badges-416080bf.js";import{u as d}from"./index-ab7cae56.js";import{k as m}from"./hooks.module-5272b78b.js";import"./iframe-674c1d1a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-36f3a862.js";function h(t){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h6:"h6",a:"a"},d(),t.components);return n(m,{children:[n(s,{of:r,name:"Monthpicker"}),`
`,n(e.h1,{id:"monthpicker-",children:["Monthpicker ",n(p,{of:r,right:!0})]}),`
`,n(e.p,{children:'The monthpicker borrows most of its appearence and functionality from the datepicker. And just as the datepicker, the monthpicker exposes a function for intializing an input (type="month") field. The initialization function returns a container div element which has replaced the input element. To react to changes in the monthpicker, listen to the change event triggered on the returned div element.'}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<div class="form-group">
  <label for="my-month">Choose a month</label>
  <div class="input-group">
    <input type="month" id="my-month" name="month" class="form-control" required />
    <span class="input-group-append">
      <button class="btn" type="button" aria-controls="my-month" title="Välj månad">
        <svg class="icon" width="26" height="26">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
        </svg>
      </button>
    </span>
  </div>
</div>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`import { monthpicker } from '@lansforsakringar/components'

const container = monthpicker(document.getElementById('my-month'))

container.addEventListener('change', ({ value }) => {
  console.log(value)
})
`})}),`
`,n(e.p,{children:"The default configuration for the datepicker is available as a named export, DEFAULTS. These can be extended upon to selectively override certain options."}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`import { monthpicker, DEFAULTS } from '@lansforsakringar/components/monthpicker'

datepicker(document.getElementById('my-month'), {
  localization: {
    ...DEFAULTS.localization,
    closeLabel: 'Abort'
  }
})
`})}),`
`,n(e.h2,{id:"variants",children:"Variants"}),`
`,n(e.h3,{id:"default",children:"Default"}),`
`,n(o,{of:c}),`
`,n(i,{of:c}),`
`,n(e.h3,{id:"min-max",children:"Min max"}),`
`,n(o,{of:a}),`
`,n(i,{of:a}),`
`,n(e.h3,{id:"validated",children:"Validated"}),`
`,n(o,{of:l}),`
`,n(i,{of:l}),`
`,n(e.h4,{id:"preact--web-component",children:"Preact & Web component"}),`
`,n(e.p,{children:"Other than the default initialization function the month picker is also exposed as both a Web Component and as a Preact component. Preact is really an implementation detail but exposing the component should allow for easier use in an JSX environment, with some configuration."}),`
`,n(e.h5,{id:"properties",children:"Properties"}),`
`,n(e.p,{children:"Both alternate implemnations support the same set of properties which allows for interacting with the monthpicker."}),`
`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Property"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"open"})}),n(e.td,{children:n(e.code,{children:"boolean"})}),n(e.td,{children:"Whether the monthpicker widget is open"})]}),n(e.tr,{children:[n(e.td,{children:n(e.code,{children:"value"})}),n(e.td,{children:n(e.code,{children:"string"})}),n(e.td,{children:["The value of the monthpicker (",n(e.code,{children:"YYYY-MM"}),")"]})]}),n(e.tr,{children:[n(e.td,{children:[n(e.code,{children:"onchange"}),"/",n(e.code,{children:"onChange"})]}),n(e.td,{children:n(e.code,{children:"function"})}),n(e.td,{children:"Callback function for when the value changes"})]}),n(e.tr,{children:[n(e.td,{children:[n(e.code,{children:"onfocus"}),"/",n(e.code,{children:"onFocus"})]}),n(e.td,{children:n(e.code,{children:"function"})}),n(e.td,{children:"Callback function for when the input element gains focus"})]}),n(e.tr,{children:[n(e.td,{children:[n(e.code,{children:"onblur"}),"/",n(e.code,{children:"onBlur"})]}),n(e.td,{children:n(e.code,{children:"function"})}),n(e.td,{children:"Callback function for when focus leaves the input element"})]}),n(e.tr,{children:[n(e.td,{children:[n(e.code,{children:"onclose"}),"/",n(e.code,{children:"onClose"})]}),n(e.td,{children:n(e.code,{children:"function"})}),n(e.td,{children:"Callback function for when the widget is closed"})]})]})]}),`
`,n(e.h6,{id:"web-component",children:"Web component"}),`
`,n(e.p,{children:["Other than the default initialization function the monthpicker is exposed as standalone ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Component"}),". When using the Web Component you have to manually hook up the controls which e.g. toggle the calendar widget."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<div class="form-group">
  <label for="my-month">Choose a month</label>
  <div class="input-group">
    <duet-month-picker id="my-month" name="month" required></duet-month-picker>
    <span class="input-group-append">
      <button class="btn" type="button" aria-controls="my-month" title="Välj månad">
        <svg class="icon" width="26" height="26">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
        </svg>
      </button>
    </span>
  </div>
</div>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`let open = false

const button = document.querySelector('[aria-controls="my-month"]')
const monthpicker = document.getElementById('my-month')

const toggle = (next = !open) => {
  monthpicker.open = open = next
  button.classList.toggle('active', open)
}

monthpicker.onclose = () => toggle(false)
monthpicker.onchange = ({ value }) => console.log(value)
button.addEventListener('click', () => toggle())
`})}),`
`,n(e.h6,{id:"preact-component",children:"Preact Component"}),`
`,n(e.p,{children:["The underlying implementation uses ",n(e.a,{href:"https://preactjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Preact"})," and is hence compatible with React which could ease the implementation if used directly. When using the Preact component you have to manually hook up the controls which e.g. toggle the calendar widget."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`import { Monthpicker } from '@lansforsakringar/components/monthpicker'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div class="input-group">
      <div class="duet-month-picker">
        <Monthpicker
          open={open}
          id="my-monthpicker"
          onChange={({ value }) => console.log(value)}
          onClose={() => setOpen(false)}
        />
      </div>
      <span class="input-group-append">
        <button
          type="button"
          title="Välj månad"
          aria-controls="my-monthpicker"
          class={\`btn \${open ? 'active' : ''}\`}
          onClick={() => setOpen(!open)}>
          <svg class="icon" width="26" height="26">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
          </svg>
        </button>
      </span>
    </div>
  )
}
`})}),`
`,n(e.p,{children:["For use with React you will have to alias ",n(e.code,{children:"preact/hooks"})," to ",n(e.code,{children:"react"})," and inject the react ",n(e.code,{children:"import"})," statement into the Preact component. Consult your build tool docs for how to do this. Here's how it'd be done with e.g. ",n(e.a,{href:"https://vitejs.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vite"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`export default {
  esbuild: {
    jsxInject: "import React from 'react'"
  },
  resolve: {
    alias: {
      'preact/hooks': 'react'
    }
  }
}
`})})]})}function D(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?n(e,Object.assign({},t,{children:n(h,t)})):h(t)}export{D as default};
//# sourceMappingURL=monthpicker-be7ca5ff.js.map

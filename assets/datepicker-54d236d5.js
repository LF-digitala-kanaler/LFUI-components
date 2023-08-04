import{M as p,b as h,C as k,d as f,e as a,f as t}from"./index-bcd42f23.js";import{o as e}from"./jsxRuntime.module-532278ff.js";import{D as r,c as o,d,e as s,V as c,F as l}from"./datepicker.stories-8044d0ac.js";import{B as g}from"./Badges-27da738f.js";import{u as m}from"./index-e9157a1c.js";import{k as y}from"./hooks.module-5ce939d2.js";import"./iframe-0e70e888.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f9cf1c58.js";function u(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",a:"a"},m(),i.components);return e(y,{children:[e(p,{of:r,name:"Datepicker"}),`
`,e(n.h1,{id:"datepicker-",children:["Datepicker ",e(g,{of:r,right:!0})]}),`
`,e(h,{children:e(n.p,{children:`The datepicker is the input field used when a date is the expected input. It is designed in such a
way that the user can either choose the date from a calendar or enter it manually.`})}),`
`,e(n.p,{children:"The datepicker uses `@duetds/date-picker. The datepicker is a progressively enhanced input field which is upgraded to a custom element once initalized."}),`
`,e(n.p,{children:"The datepicker respects native input attributes for controlling e.g. minimum or maximum dates one can select."}),`
`,e(n.p,{children:"The datepicker can be customized further either by providing an options object on initialization or by defining data- attributes on the input field. Refer to the offical documentation for configutation options."}),`
`,e(k,{of:o,story:{inline:!1,height:450}}),`
`,e(f,{of:o}),`
`,e(n.h2,{id:"basic-usages",children:"Basic usages"}),`
`,e(n.h3,{id:"markup",children:"Markup"}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="form-group">
  <label for="my-date">Choose a date</label>
  <div class="input-group">
    <input type="date" id="my-date" name="date" class="form-control" required />
    <span class="input-group-append">
      <button class="btn" type="button" aria-controls="my-date" title="Välj datum">
        <svg class="icon" width="26" height="26">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
        </svg>
      </button>
    </span>
  </div>
</div>
`})}),`
`,e(n.h3,{id:"initialization",children:"Initialization"}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { datepicker } from '@lansforsakringar/components'

datepicker(document.getElementById('my-date'))
`})}),`
`,e(n.p,{children:"The default configuration for the datepicker is available as a named export, DEFAULTS. These can be extended upon to selectively override certain options."}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { datepicker, DEFAULTS } from '@lansforsakringar/components/datepicker'

datepicker(document.getElementById('my-date'), {
  localization: {
    ...DEFAULTS.localization,
    closeLabel: 'Abort'
  }
})
`})}),`
`,e(n.h3,{id:"disabled-week-days",children:"Disabled week days"}),`
`,e(a,{of:d}),`
`,e(t,{of:d}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`const weekdays = document.getElementById('date-weekdays')
if (weekdays) {
  const weekdaysDuetEl = datepicker(weekdays)
  weekdaysDuetEl.isDateDisabled = function (date) {
    return date.getDay() % 6 === 0
  }
}
`})}),`
`,e(n.h3,{id:"min-max",children:"Min max"}),`
`,e(a,{of:s}),`
`,e(t,{of:s}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`...
<input
  type="date"
  id="date-minmax"
  name="date-minmax"
  min="1984-01-01"
  max="1984-12-31"
  class="form-control"
  required />
...
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`const minmax = document.getElementById('date-minmax')
if (minmax) datepicker(minmax)
`})}),`
`,e(n.h3,{id:"valid-state",children:"Valid state"}),`
`,e(a,{of:c}),`
`,e(t,{of:c}),`
`,e(n.h3,{id:"custom-localization",children:"Custom localization"}),`
`,e(a,{of:l}),`
`,e(t,{of:l}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`const finnish = document.getElementById('date-finnish')
if (finnish) {
  datepicker(finnish, {
    ...DEFAULTS,
    localization: {
      buttonLabel: 'Valitse päivämäärä',
      placeholder: 'pp.kk.vvvv',
      selectedDateMessage: 'Valittu päivämäärä on',
      prevMonthLabel: 'Edellinen kuukausi',
      nextMonthLabel: 'Seuraava kuukausi',
      monthSelectLabel: 'Kuukausi',
      yearSelectLabel: 'Vuosi',
      closeLabel: 'Sulje ikkuna',
      calendarHeading: 'Valitse päivämäärä',
      dayNames: [
        'Sunnuntai',
        'Maanantai',
        'Tiistai',
        'Keskiviikko',
        'Torstai',
        'Perjantai',
        'Lauantai'
      ],
      monthNames: [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'
      ],
      monthNamesShort: [
        'Tammi',
        'Helmi',
        'Maalis',
        'Huhti',
        'Touko',
        'Kesä',
        'Heinä',
        'Elo',
        'Syys',
        'Loka',
        'Marras',
        'Joulu'
      ],
      locale: 'fi-FI'
    }
  })
}
`})}),`
`,e(n.h2,{id:"variants",children:"Variants"}),`
`,e(n.h3,{id:"timepicker",children:"Timepicker"}),`
`,e(n.p,{children:["The timepicker is the system default ",e(n.code,{children:"input[type=time]"})," element."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="form-group" style="width: 336px;">
  <div class="input-group datepicker" id="timepicker">
    <input type="time" id="timepicker-input" class="form-control" placeholder="hh:mm" required />
  </div>
</div>
`})}),`
`,e(n.h3,{id:"monthpicker",children:"Monthpicker"}),`
`,e(n.p,{children:e(n.a,{href:"?path=/docs/forms-datepicker--monthpicker#monthpicker-",children:"Read about the Monthpicker"})})]})}function V(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?e(n,Object.assign({},i,{children:e(u,i)})):u(i)}export{V as default};
//# sourceMappingURL=datepicker-54d236d5.js.map

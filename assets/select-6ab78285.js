import{M as p,b as i,C as h,d as l,e as t}from"./index-5b4b983c.js";import{u as e}from"./jsxRuntime.module-86b0a656.js";import{S as s,D as a,a as r,O as m,b as u,L as g,c as f,d as b}from"./select.stories-26e6f347.js";import{B as v}from"./Badges-4014e066.js";import{u as d}from"./index-2c765b7a.js";import{g as w}from"./hooks.module-837c4323.js";import"./iframe-eeb3ff28.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-cfbb8c9c.js";import"./blocks-fcb2d6b7.js";import"./datepicker-86020d57.js";function c(o){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code"},d(),o.components);return e(w,{children:[e(p,{of:s}),`
`,e(n.h1,{id:"select-",children:["Select ",e(v,{of:s,right:!0})]}),`
`,e(i,{children:e(n.p,{children:"The dropdown select provides the user with given options in a list which expands over the webpage when the user interacts with it."})}),`
`,e(n.p,{children:"The dropdown select component is an extension of the native HTML form element select. The extension allows for custom styling and different behavior depending on the device used. Only when using a pointer device, such as a mouse or trackpad, is the custom-designed dropdown list visible. In other cases, i.e. touch-based devices, the native select element is used that often displays as a native menu."}),`
`,e(n.p,{children:"The select component has two variations that both share the bellow traits:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"They expand upward instead of downward if the dropdown won't fit downwards on the screen."}),`
`,e(n.li,{children:"The dropdown list will be scrollable if more than 10 items are in the list, or when the screen sizes is particularly short."}),`
`,e(n.li,{children:"You can choose to add headings to your dropdown to group options. These are (non-selectable) and rely on the optgroup element."}),`
`,e(n.li,{children:"The headings can optionally also work as toggles, for expanding/collapsing respective groups of options."}),`
`,e(n.li,{children:"A short secondary text can be added to help the user make their choice (e.g. showing the price for a listed option). This text is in a smaller typeface and gray."}),`
`]}),`
`,e(n.h2,{id:"basic-usages",children:"Basic usages"}),`
`,e(n.h3,{id:"markup",children:"Markup"}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="select">
    <label class="select-label" for="select">City</label>
    <select class="select-options" name="timezone" id="select">
        <option value="" disabled selected hidden>Select City</option>
        <option>Stockholm</option>
        <option>Göteborg</option>
        <option>Malmö</option>
        <option>Umeå</option>
    </select>
</div>
`})}),`
`,e(n.h3,{id:"javascript",children:"Javascript"}),`
`,e(n.p,{children:"The select component is imported and initialized with a given element."}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import select from '@lansforsakringar/components/select'
const mySelectElement = document.querySelector('#my-select')

select(mySelectElement)
`})}),`
`,e(n.p,{children:"It is also available as an export of the main js bundle."}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { select } from '@lansforsakringar/components'
`})}),`
`,e(n.h2,{id:"variations",children:"Variations"}),`
`,e(h,{of:a}),`
`,e(l,{of:a}),`
`,e(n.h3,{id:"select-single-option",children:"Select single option"}),`
`,e(n.p,{children:"The standard alternative pretty much follows the common traits. It's a select one and only one option setup, much like a radio button."}),`
`,e(n.h3,{id:"select-multiple-options",children:"Select multiple options"}),`
`,e(n.p,{children:"This multi-select alternative allows for selecting one or several options, which means it works like checkboxes."}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<select class="select-options" name="..." id="..." multiple>
...
</select>
`})}),`
`,e(n.h2,{id:"modifiers",children:"Modifiers"}),`
`,e(i,{children:"To further customize the dropdown to your needs, you can use any combination of the available modifiers."}),`
`,e(n.p,{children:["The modifiers can be set with ",e(n.code,{children:"data-"})," attribute or when initilizing the element:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import select from '@lansforsakringar/components/select'

const element = document.querySelector('#my-select')

const options = {
  allLabel: 'All the things',
  groupToggle: true,
  smallPattern: /\\((.+?)\\)/
}

select(element, options)
`})}),`
`,e(n.h3,{id:"small-text",children:"Small text"}),`
`,e(n.p,{children:[`Adds a smaller text used to aid the user in selecting an option.
Use the `,e(n.code,{children:"small-pattern"})," data-attribute to specify with regex wich part should be small. for example, to making text small that is between parateces: ",e(n.code,{children:'data-small-pattern="\\((.+?)\\)"'})]}),`
`,e(t,{of:r}),`
`,e(l,{of:r}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<form class="form-group">
    <div class="select" data-small-pattern="\\((.+?)\\)">
        <label class="select-label" for="select-secondary">City</label>
        <select class="select-options" name="timezone" id="select-secondary">
            <option value="" disabled selected hidden>Select City</option>
            <option>Stockholm (Stockholm)</option>
            <option>Göteborg (Västra Götaland)</option>
            <option>Malmö (Skåne)</option>
            <option>Umeå (Västerbottens)</option>
        </select>
    </div>
</form>
`})}),`
`,e(n.h3,{id:"option-groups",children:"Option groups"}),`
`,e(n.p,{children:"Group the options to convey a hierarchical categorization."}),`
`,e(t,{of:m}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<form class="form-group">
    <div class="select">
        <label class="select-label" for="select-groups">Timezone</label>
        <select class="select-options" name="timezone" id="select-groups">
            <option value="" disabled selected hidden>Select Timezone</option>
            <optgroup label="Alaskan/Hawaiian Time Zone">
                <option value="AK">Alaska</option>
                <option value="HI">Hawaii</option>
            </optgroup>
            <optgroup label="Stockholm Time Zone">
                <option value="ST">Stockholm</option>
            </optgroup>
            <optgroup label="China Time Zone">
                <option value="CT">China</option>
            </optgroup>
        </select>
    </div>
</form>
`})}),`
`,e(n.h3,{id:"toggle-groups",children:"Toggle groups"}),`
`,e(n.p,{children:["Allow for toggling (expanding/collapsing) the option groups for easier navigation. Add the ",e(n.code,{children:"group-toggle"})," data-attribute."]}),`
`,e(t,{of:u}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="select" data-group-toggle>
    ...
</div>
`})}),`
`,e(n.h3,{id:"label-inside",children:"Label inside"}),`
`,e(t,{of:g}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="select inside">
    ...
</div>
`})}),`
`,e(n.h2,{id:"disable",children:"Disable"}),`
`,e(n.p,{children:["Add ",e(n.code,{children:"disabled"})," to the ",e(n.code,{children:"<select>"})," or ",e(n.code,{children:"<option>"}),"."]}),`
`,e(t,{of:f}),`
`,e(n.h3,{id:"options",children:"Options"}),`
`,e(t,{of:b})]})}function L(o={}){const{wrapper:n}=Object.assign({},d(),o.components);return n?e(n,Object.assign({},o,{children:e(c,o)})):c(o)}export{L as default};

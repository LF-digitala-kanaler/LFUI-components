import{M as d,b as o,C as r,d as c}from"./index-bcd42f23.js";import{o as e}from"./jsxRuntime.module-532278ff.js";import{S as t,D as l,I as h,W as p,a as u}from"./slider.stories-992b4bc0.js";import{B as m}from"./Badges-27da738f.js";import{u as s}from"./index-e9157a1c.js";import{k as g}from"./hooks.module-5ce939d2.js";import"./iframe-0e70e888.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f9cf1c58.js";function a(i){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3"},s(),i.components);return e(g,{children:[e(d,{of:t}),`
`,e(n.h1,{id:"slider-",children:["Slider ",e(m,{of:t})]}),`
`,e(o,{children:e(n.p,{children:"A slider provides a visual way of providing a value and should preferably be used in conjunction with other content which is dynamically changed based on the value provided through the slider."})}),`
`,e(r,{of:l}),`
`,e(c,{of:l}),`
`,e(n.p,{children:["LFUI has restyled the HTML5-element ",e(n.code,{children:'input[type="range"]'})," which is useable in all modern browsers. The ",e(n.code,{children:'input[type="range"]'}),", or Slider, is a tool to control a value by adjusting the thumb along its track. The value range of the track is assigned by min and max html attributes, and the step attribute is used to control how big leaps the slider value takes for each movement."]}),`
`,e(n.p,{children:["Browsers have varying support for styling the slider track so in order to get the proper visual effect one has to set the custom property ",e(n.code,{children:"--progress"})," on the element. When the value changes, one has to update the custom property on the element. This functionality is not built in and needs to be handled in your code base."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<input type="range" class="lf-slider" value="50" min="0" max="100" style="--progress: 50;">
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`for (const slider of document.querySelectorAll('.lf-slider')) {
  slider.addEventListener('input', () => {
    const percent = Math.ceil(((slider.value - slider.min) / (slider.max - slider.min)) * 100);
    slider.style.setProperty('--progress', percent);
  });
}
`})}),`
`,e(n.h2,{id:"variations",children:"Variations"}),`
`,e(n.h3,{id:"value",children:"Value"}),`
`,e(n.h3,{id:"interval",children:"Interval"}),`
`,e(r,{of:h}),`
`,e(n.p,{children:'The native input[type="range"] HTML element unfortunately does not support the ability to have more than one range-thumb (the button you move back and forth). Use-cases have begun appearing where such a feature is requested in order for a user to select a span inside the range. To achieve this, we have created a custom element which is a wrapper around the native input[type="range"] element.'}),`
`,e(n.p,{children:["The interval function can be imported from @lansforsakringar/components and takes a range input element as its only argument. The range input element will be extended with the custom properties ",e(n.code,{children:"valueLow"})," and ",e(n.code,{children:"valueHigh"})," which can be used to get and set the values of the range input. The value property is a comma delimited string with the low and high values."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:`import { interval } from '@lansforsakringar/components/interval'

const low = document.getElementById('my-slider-low')
const high = document.getElementById('my-slider-high')
const mySlider = document.getElementById('my-slider')

interval(mySlider)

mySlider.addEventListener('input', () => {
  low.value = mySlider.valueLow
  high.value = mySlider.valueHigh
});
`})}),`
`,e(n.h2,{id:"modifiers",children:"Modifiers"}),`
`,e(n.h3,{id:"labels",children:"Labels"}),`
`,e(r,{of:p}),`
`,e(n.p,{children:"Labels can be added for better understanding of the range at disposal."}),`
`,e(n.p,{children:["Create a ",e(n.code,{children:".slider-wrapper"})," wrapping element, with a ",e(n.code,{children:".slider-label-left"})," and ",e(n.code,{children:".slider-label-right"})," element on each corresponding side of the slider. The wrapper will add a padding of60pxof either side of the component and then absolute-position the labels in the padding gap. Should your labels require increased space (with really large numbers, etc), simply overwrite the padding on the ",e(n.code,{children:".slider-wrapper"})," with a custom padding and increase the width of the slider-label-* to match."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="row">
  <label for="lf-slider" class="col-12">Ange procent av lön</label>
  <div class="input-group col-3">
    <input type="text" class="form-control text-right" id="lf-slider-value-3" value="50">
    <span class="input-group-append">%</span>
  </div>
</div>
<div class="row">
  <div class="col-12 mt-1 slider-wrapper">
    <div class="slider-label-left">0 %</div>
    <input id="lf-slider-3" type="range" name="lf-slider" class="lf-slider" value="50" min="0" max="100">
    <div class="slider-label-right">100 %</div>
  </div>
</div>
`})}),`
`,e(n.h3,{id:"distribution-label",children:"Distribution label"}),`
`,e(r,{of:u}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<div class="distribution-label slider-label-left">0 %</div>
    <input id="lf-slider-4" type="range" name="lf-slider" class="lf-slider" value="50" min="0" max="100">
<div class="distribution-label slider-label-right">100 %</div>
`})}),`
`,e(n.h3,{id:"on-different-backgrounds",children:"On different backgrounds"}),`
`,e(n.p,{children:["If you want to place the slider on gray background you can change ",e(n.code,{children:".lf-slider"})," to ",e(n.code,{children:".lf-slider-gray"}),"}."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:`<input id="lf-slider-2" type="range" name="lf-slider" class="lf-slider-gray" value="500000" min="0" max="10">
`})})]})}function C(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}export{C as default};
//# sourceMappingURL=Slider-3f297f5f.js.map

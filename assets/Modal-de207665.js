import{M as l,C as i}from"./index-244ea143.js";import{o as e}from"./jsxRuntime.module-3449ab35.js";import{M as a,D as r}from"./modal.stories-6a5d8906.js";import{B as s}from"./Badges-1d84ea7f.js";import{u as d}from"./index-dc54cc1b.js";import{k as c}from"./hooks.module-d947cf7f.js";import"./iframe-d7a3d3dd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function n(o){const t=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",h2:"h2"},d(),o.components);return e(c,{children:[e(l,{of:a}),`
`,e(t.h1,{id:"modal-",children:["Modal ",e(s,{of:a})]}),`
`,e(i,{of:r,story:{inline:!1,height:450}}),`
`,e(t.p,{children:"LFUI uses bootstraps and it's API to create modals. If there is any functionality you need and we haven't documented here head over to their site since we support all the included options."}),`
`,e(t.p,{children:"But let's have a look at the basics."}),`
`,e(t.h3,{id:"template",children:"Template"}),`
`,e(t.p,{children:"Every Modal share the same base template. In this example we have added the optional .modal-footer which is a where you but you buttons and other actions."}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close close-large" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title">So long farewell</h4>
    </div>
    <div class="modal-body">
        {content}
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-link" data-dismiss="modal">Avbryt</button>
        <button type="button" class="btn btn-primary btn-arrow">Take me there</button>
    </div>
    </div>
</div>
`})}),`
`,e(t.h3,{id:"trigger",children:"Trigger"}),`
`,e(t.p,{children:"How do you trigger a modal you might ask. Easiest way is to use to built in data-attribute from Bootstrap."}),`
`,e(t.p,{children:["Notice the ",e(t.code,{children:'data-bs-toggle="modal"'})," and ",e(t.code,{children:'data-bs-target="exampleModal"'})," in the code snippet below."]}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:[e(t.code,{children:'data-bs-toggle="modal"'})," opens the modal window"]}),`
`,e(t.li,{children:[e(t.code,{children:'data-bs-target="#myModal"'})," points to the id of the modal"]}),`
`]}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Launch demo modal
</button>

`})}),`
`,e(t.p,{children:["The parent ",e(t.code,{children:"<div>"}),' of the modal must have an ID that is the same as the value of the data-target attribute used to trigger the modal ("exampleModal"). Notice the ',e(t.code,{children:'data-dismiss="modal"'})," in the first example. This will close the modal and can be used on more than one element."]}),`
`,e(t.p,{children:"That's it!"}),`
`,e(t.h3,{id:"options",children:"Options"}),`
`,e(t.p,{children:"By default autofocus will not work in a modal so you will have to do it yourself. We always want to add focus to an element in the modal when we open it. If there is no input you might focus the close button."}),`
`,e(t.p,{children:"You can achieve this by using a built in event."}),`
`,e(t.pre,{children:e(t.code,{className:"language-javascript",children:`$('#exampleModal').on('shown.bs.modal', function () {
  $('#SomeElementToPutFocusOn').trigger('focus')
  })
`})}),`
`,e(t.p,{children:"And when we close the modal focus should go back to the element that triggered it."}),`
`,e(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e(t.p,{children:["Be sure to add ",e(t.code,{children:'role="dialog"'})," and ",e(t.code,{children:'aria-labelledby="..."'}),", referencing the modal title, to ",e(t.code,{children:".modal"})," , and ",e(t.code,{children:'role="document"'})," to the ",e(t.code,{children:".modal-dialog"})," itself. Additionally, you may give a description of your modal dialog with ",e(t.code,{children:"aria-describedby"})," on ",e(t.code,{children:".modal"})]})]})}function k(o={}){const{wrapper:t}=Object.assign({},d(),o.components);return t?e(t,Object.assign({},o,{children:e(n,o)})):n(o)}export{k as default};
//# sourceMappingURL=Modal-de207665.js.map

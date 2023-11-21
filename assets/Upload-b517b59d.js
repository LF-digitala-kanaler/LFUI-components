import{M as h,C as t,d as o}from"./index-190694a0.js";import{u as e}from"./jsxRuntime.module-43f65b33.js";import{U as i,D as c,P as l,a as p,b as u,c as m,d}from"./upload.stories-76195d91.js";import{B as v}from"./Badges-c29d6495.js";import{u as s}from"./index-c36d5595.js";import{g as f}from"./hooks.module-0dd1334e.js";import"./iframe-33e87fb8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-1863097b.js";function r(n){const a=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},s(),n.components);return e(f,{children:[e(h,{of:i}),`
`,e(a.h1,{id:"upload-",children:["Upload ",e(v,{of:i})]}),`
`,e(t,{of:c}),`
`,e(a.p,{children:"LFUI's upload components contains HTML and CSS to help you build a a file upload component. It does not contain any javascript functionality to handle the uploaded file or display the preview pane."}),`
`,e(a.p,{children:"But let's have a look how you can use this component to build your own upload functionality."}),`
`,e(a.p,{children:"In the example above we only allow an image to be uploaded and we only allow one at the time. If you need to support multiple uploads the functionality should work the same, just add the multiple attribute to the input."}),`
`,e(a.p,{children:"Let's get started!"}),`
`,e(a.h2,{id:"html-structure",children:"HTML Structure"}),`
`,e(a.p,{children:"The base HTML structure is nothing new. It's a secondary button with an icon. Don't forget to add a for-attribute to the label that's equal to the id attribute of the input."}),`
`,e(a.p,{children:["Note the empty ",e(a.code,{children:".upload-placeholder"})," this is where our preview panes will be places."]}),`
`,e(a.pre,{children:e(a.code,{className:"language-html",children:`<div class="upload w-100">
  <div class="upload-placeholder"></div>
  <input class="upload-input" type="file" name="filename" id="upload">
  <label class="upload-label btn btn-secondary  mt-1 px-1" for="upload">
    <svg focusable="false" aria-hidden="true" class="icon mr-025" width="20" height="20"><use xlink:href="#icon-attach-20"></use></svg>
    Bifoga fil
  </label>
</div>
`})}),`
`,e(a.p,{children:"After the user clicks on the button and have chosen a file we want to show a preview pane containing a smaller version of the image, file name and the possibility for the user to hover over the image to see a larger version of it."}),`
`,e(a.p,{children:"The functionality to add the preview pane and validation is not included in LFUI."}),`
`,e(a.h2,{id:"preview",children:"Preview"}),`
`,e(t,{of:l}),`
`,e(o,{of:l}),`
`,e(a.h3,{id:"template",children:"Template"}),`
`,e(a.pre,{children:e(a.code,{className:"language-html",children:`<div class="upload-preview \${validation} mb-05">
    <div class="upload-body">
      <img class="upload-image" alt="" src=\${data.src} width="35" height="35" />
      \${popover}
      <span class="upload-name">\${file.name}</span>
      <button type="button" class="close ml-auto upload-remove">
        Close
      </button>
    </div>
  </div>
</div>
`})}),`
`,e(a.p,{children:"This is the preview template we use to display each uploaded file with. In our example we use the File reader API to get the file name and the image src. It's advisable to resize the the thumbnail image to 35x35 and not just scale it down."}),`
`,e(a.p,{children:["We will use this template for each uploaded file and place it inside the ",e(a.code,{children:".upload-placeholder"}),"."]}),`
`,e(a.p,{children:["Note, if you are uploading anything that's not an image change remove the ",e(a.code,{children:"<img>"})," element and replace it with ",e(a.code,{children:'<div class="upload-image mr-05"></div>'})]}),`
`,e(a.h3,{id:"validation",children:"Validation"}),`
`,e(a.p,{children:["Notice the ",e(a.code,{children:"${validation}"})," above. In our example we will do validation as soon as a file is selected and add either ",e(a.code,{children:".has-valid"})," or ",e(a.code,{children:".has-danger"})," depending on the validation status of the file. If you want to validate your file when for example a form is posting you can add these classes then instead."]}),`
`,e(a.h4,{id:"valid",children:"Valid"}),`
`,e(t,{of:p}),`
`,e(a.h4,{id:"invalid",children:"Invalid"}),`
`,e(t,{of:u}),`
`,e(a.h3,{id:"thumbnail",children:"Thumbnail"}),`
`,e(t,{of:m,story:{height:"350px"}}),`
`,e(a.p,{children:"If the file is an image it should be possible to hover over the image to show a larger version of it. This is should only be added if the file is an image."}),`
`,e(a.p,{children:["So if the file is an image we want to replace ",e(a.code,{children:"${popover}"})," in the template preview section above with a popover template. Again don't just scale the image done, if possible resize the image on the server before adding it."]}),`
`,e(a.pre,{children:e(a.code,{className:"language-html",children:`<div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
  <p class="popover-title">Preview</p>
  <div class="popover-content">
    <div class="card">
      <div class="card-block">
        <img class="img-fluid w-100" src=\${data.src} alt=""  />
      </div>
    </div>
  </div>
</div>
`})}),`
`,e(a.p,{children:["If you are building a service that will handle file's like ",e(a.code,{children:".pdf"})," or ",e(a.code,{children:".doc"})," you should show an icon associated with that file type instead. Use our 32px icons like ",e(a.code,{children:"pdf-doc-32"})," for pdf and ",e(a.code,{children:"document-32"})," for general documents."]}),`
`,e(a.h3,{id:"loading-state",children:"Loading state"}),`
`,e(t,{of:d}),`
`,e(o,{of:d}),`
`,e(a.p,{children:["If you are going to process large files or you want to save the files to the server on form submit you can add a progress element shown in the example at the top. You will have to add ",e(a.code,{children:".loading"})," to ",e(a.code,{children:".upload-preview"})," and change translateX for ",e(a.code,{children:".upload-progress-bar"})," to match how much of the file that's been uploaded in procent ."]}),`
`,e(a.h4,{id:"example-javascript-implementation-of-loading-state",children:"Example javascript implementation of loading state"}),`
`,e(a.pre,{children:e(a.code,{className:"language-javascript",children:`reader.onprogress = (event) => {
  if (event.lengthComputable)
    {
      let value = (event.loaded / event.total) * 100;
      progress.style.transform = 'translateX(-' + value + '%)';
      ;
    }
};
`})})]})}function k(n={}){const{wrapper:a}=Object.assign({},s(),n.components);return a?e(a,Object.assign({},n,{children:e(r,n)})):r(n)}export{k as default};
//# sourceMappingURL=Upload-b517b59d.js.map

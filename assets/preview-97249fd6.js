import"./blocks-fcb2d6b7.js";import"./datepicker-86020d57.js";import"./utils-cfbb8c9c.js";import"./hooks.module-837c4323.js";import"./jsxRuntime.module-86b0a656.js";const t={backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"gray",value:"#F3F3F3"},{name:"light blue",value:"#E5EFF7"}]}},u={gray:"bg-body-bg",white:"","light blue":""};function s(e){return t.backgrounds.values.find(({name:n})=>n===e)}function d(e){return e?t.backgrounds.values.find(({value:n})=>n===e.value):void 0}const i=(e,r)=>{var a;const n=((a=d(r.globals.backgrounds))==null?void 0:a.name)||r.parameters.backgrounds.default,o=s(n);return document.body.style.backgroundColor=o,`
  <div class="${u[o.name]} p-2" data-bs-theme="on-${o.name}">
   ${e(r)}
   </div>
  `},f=[i];export{f as decorators,t as parameters};

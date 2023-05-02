import{d as y,h as l,u as L}from"./utils-cfbb8c9c.js";const w=`<p class="text-sm text-muted">Default</p>
<div class="upload w-100">
  <div class="upload-placeholder"></div>
  <input
    class="upload-input"
    type="file"
    name="filename"
    id="upload"
    multiple />
  <label class="upload-label btn btn-secondary px-1" for="upload">
    <svg
      focusable="false"
      aria-hidden="true"
      class="icon mr-025"
      width="24"
      height="24">
      <use xlink:href="lf-icons/sprite/24/icons.svg#attachment-24"></use>
    </svg>
    Bifoga fil
  </label>
</div>

<p class="text-sm mt-15 mb-05 text-muted">Loading state test</p>
<div class="upload-preview mb-05">
  <div class="upload-body">
    <div class="upload-image mr-05"></div>
    <span class="upload-name">the-file-name.jpg</span>

    <div id="upload2" class="upload-progress">
      <div class="upload-progress-bar" role="progressbar"></div>
    </div>
  </div>
</div>
<button class="link" id="upload-test-btn">Trigger</button>
`,$=a=>{if(!a)return;const p=a.querySelector(".upload");if(!p)return null;const n=a.querySelector(".upload-input"),d=a.querySelector(".upload-placeholder"),m=e=>l`
      <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
        <p class="popover-title">Preview</p>
        <div class="popover-content">
          <div class="card">
            <div class="card-block">
              <img class="img-fluid w-100" src=${e.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    `,i=e=>l`
      <div class="upload-preview  mb-05 ${e.validationClass}">
        <div class="upload-body">
          ${e.popover===!0?l`
                <span
                  role="button"
                  tabindex="-1"
                  class="popover-tooltip-trigger p-0 b-0  mr-05"
                  aria-controls="popover">
                  <img class="upload-image" alt="" src=${e.src} width="35" height="35" />
                  ${m(e)}
                </span>
              `:l`
                <div class="upload-image mr-05">${e.src}</div>
              `}
          <span class="upload-name">${e.name}</span>
          <button
            type="button"
            class="btn-close ml-auto upload-remove"
            aria-label="Remove"></button>
        </div>
        ${e.popover===!1?l`
              <small class="upload-feedback">Description of error in input</small>
            `:""}
      </div>
    `,f=e=>{const t=/image.*/,s=new window.FileReader;if(e.type.match(t)){s.readAsDataURL(e);const o={src:"#",name:" ",file:" ",popover:!0,validationClass:" "};d.append(i(o)),s.onloadend=()=>{const b={src:s.result,name:e.name,file:e,popover:!0,validationClass:"has-valid"};[...d.children].filter(E=>E.classList.contains("upload-preview"))[0].replaceWith(i(b))}}else{const o={src:" ",name:e.name,file:e,validationClass:"has-danger",popover:!1};d.append(i(o))}},h=e=>{Array.from(e).forEach(t=>{f(t)})},g=()=>{const e=n.files;h(e)};p.addEventListener("change",g),a.addEventListener("click",y(".upload-remove",function(){this.parentElement.parentElement.remove()})),n.addEventListener("focus",function(){n.classList.add("has-focus")}),n.addEventListener("blur",function(){n.classList.remove("has-focus")}),a.querySelector("#upload-test-btn").addEventListener("click",function(){const e=a.querySelector("#upload2"),t=e.querySelector(".upload-progress-bar");e.classList.add("loading"),t.removeAttribute("style"),e.parentElement.parentElement.classList.remove("has-valid");let s=100;const o=setInterval(function(){s--,t.style.setProperty("transform","translateX(-"+s+"%)"),s<=0&&clearInterval(o),s===0&&e.parentElement.parentElement.classList.add("has-valid"),e.classList.remove("loading")},15)})},{useEffect:S,useState:_}=__STORYBOOK_MODULE_CLIENT_API__,q={title:"Forms/Upload"},r=()=>{const[a]=_(L);return S(()=>{$(document.getElementById(a))},[]),l`
    <div id="${a}">${w}</div>
  `};var c,u,v;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    uploadExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Upload}</div>
  \`;
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const U=["upload"];export{U as __namedExportsOrder,q as default,r as upload};
//# sourceMappingURL=upload.stories-50f2aac1.js.map

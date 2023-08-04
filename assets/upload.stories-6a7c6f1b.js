import{d as U,h as r,u as f}from"./utils-f9cf1c58.js";const O=`<p class="text-sm text-muted">Default</p>
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
`,h=a=>{var v;if(!a)return;const o=a.classList.contains("upload")?a:a.querySelector(".upload");if(!o)return null;const s=a.querySelector(".upload-input"),n=a.querySelector(".upload-placeholder"),c=e=>r`
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
    `,u=e=>r`
      <div class="upload-preview  mb-05 ${e.validationClass}">
        <div class="upload-body">
          ${e.popover===!0?r`
                <span
                  role="button"
                  tabindex="-1"
                  class="popover-tooltip-trigger p-0 b-0  mr-05"
                  aria-controls="popover">
                  <img class="upload-image" alt="" src=${e.src} width="35" height="35" />
                  ${c(e)}
                </span>
              `:r`
                <div class="upload-image mr-05">${e.src}</div>
              `}
          <span class="upload-name">${e.name}</span>
          <button
            type="button"
            class="btn-close ml-auto upload-remove"
            aria-label="Remove"></button>
        </div>
        ${e.popover===!1?r`
              <small class="upload-feedback">Description of error in input</small>
            `:""}
      </div>
    `,k=e=>{const l=/image.*/,t=new window.FileReader;if(e.type.match(l)){t.readAsDataURL(e);const i={src:"#",name:" ",file:" ",popover:!0,validationClass:" "};n.append(u(i)),t.onloadend=()=>{const T={src:t.result,name:e.name,file:e,popover:!0,validationClass:"has-valid"};[...n.children].filter(x=>x.classList.contains("upload-preview"))[0].replaceWith(u(T))}}else{const i={src:" ",name:e.name,file:e,validationClass:"has-danger",popover:!1};n.append(u(i))}},I=e=>{Array.from(e).forEach(l=>{k(l)})},D=()=>{const e=s.files;I(e)};o.addEventListener("change",D),a.addEventListener("click",U(".upload-remove",function(){this.parentElement.parentElement.remove()})),s.addEventListener("focus",function(){s.classList.add("has-focus")}),s.addEventListener("blur",function(){s.classList.remove("has-focus")}),(v=a.querySelector("#upload-test-btn"))==null||v.addEventListener("click",function(){const e=a.querySelector("#upload2"),l=e.querySelector(".upload-progress-bar");e.classList.add("loading"),l.removeAttribute("style"),e.parentElement.parentElement.classList.remove("has-valid");let t=100;const i=setInterval(function(){t--,l.style.setProperty("transform","translateX(-"+t+"%)"),t<=0&&clearInterval(i),t===0&&e.parentElement.parentElement.classList.add("has-valid"),e.classList.remove("loading")},15)})},{useEffect:w,useState:y}=__STORYBOOK_MODULE_CLIENT_API__,q={title:"Forms/Upload",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{}};function B(){const a="https://avatars.githubusercontent.com/u/21335758";return`
  <span
    role="button"
    tabindex="-1"
    class="popover-tooltip-trigger p-0 b-0  mr-05"
    aria-controls="popover">
    <img class="upload-image" alt="" src=${a} width="35" height="35" />
    <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
      <p class="popover-title">Preview</p>
      <div class="popover-content">
        <div class="card">
          <div class="card-block">
            <img class="img-fluid w-100" src=${a} alt="" />
          </div>
        </div>
      </div>
    </div>
  </span>

    `}function C(a){const[o]=y(f),s=`${o}-upload`;return w(()=>{h(document.getElementById(o))},[]),`
  <div id="${o}" class="upload w-100">
    <div class="upload-placeholder"></div>
    <input
      class="upload-input"
      type="file"
      name="filename"
      id="${s}"
      multiple />
    <label class="upload-label btn btn-secondary px-1" for="${s}">
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
  `}function p({popover:a,errorMessage:o="Description of error in input",invalid:s,valid:n,loading:c}){return`
  <div class="upload-preview loading mb-05 ${s?"has-danger":""} ${n?"has-valid":""}">
    <div class="upload-body">
      ${a?B():'<div class="upload-image mr-05"></div>'}
      <span class="upload-name">the-file-name.jpg</span>

      <div id="upload2" class="upload-progress">
        <div
          class="upload-progress-bar"
          role="progressbar"
          ${c?`style="transform: translateX(-${c}%)"`:""}
        ></div>
      </div>
    </div>
    ${s?`<small class="upload-feedback">${o}</small>`:""}
  </div>
  `}const E=C.bind({});E.args={};const $=p.bind({});$.args={};const L=p.bind({});L.args={valid:!0};const P=p.bind({});P.args={invalid:!0,errorMessage:"Description of error in input"};const S=p.bind({});S.args={popover:!0};const _=p.bind({});_.args={loading:90};const d=()=>{const[a]=y(f);return w(()=>{h(document.getElementById(a))},[]),r`
    <div id="${a}">${O}</div>
  `};var m,g,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    uploadExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${Upload}</div>
  \`;
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const F=["Default","Preview","PreviewValid","PreviewInvalid","PreviewPopover","PreviewLoading","Example"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:E,Example:d,Preview:$,PreviewInvalid:P,PreviewLoading:_,PreviewPopover:S,PreviewValid:L,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{E as D,$ as P,A as U,L as a,P as b,S as c,_ as d};
//# sourceMappingURL=upload.stories-6a7c6f1b.js.map

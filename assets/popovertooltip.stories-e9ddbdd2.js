import{e as i,u as c,h as l}from"./utils-de29bc01.js";import"./hooks.module-446c997e.js";import"./jsxRuntime.module-779d8325.js";const d=`<section>
  Our
  <span
    role="button"
    tabindex="-1"
    class="popover-tooltip-trigger"
    aria-controls="toggable2">
    occupational pension
    <div
      role="alert"
      id="toggable2"
      class="popover-tooltip popover-bottom popover-attach">
      <p class="popover-title">Occupational pension</p>
      <div class="popover-content">
        <div class="card">
          <div class="card-block">
            <p class="card-text">
              The pension paid to a retired person by a former employer.
            </p>
            <a href="#" onclick="return false">View dictionary</a>
          </div>
        </div>
      </div>
    </div>
  </span>
  plan gives you a pension plan suited to you and your living conditions.
</section>
`,v=e=>{if(!e)return;i(".popover-tooltip-trigger",o=>{o.addEventListener("focus",r),o.addEventListener("blur",r);function r(){document.getElementById(this.getAttribute("aria-controls")).parentElement.classList.toggle("open")}},e),i("label.popover-tooltip-trigger",o=>{o.addEventListener("click",n),o.addEventListener("touch",n)},e);function n(o){o.preventDefault()}},{useEffect:u,useState:m}=__STORYBOOK_MODULE_CLIENT_API__,b={title:"Supportive microinteractions/Popover Tooltip"},t=()=>{const[e]=m(c);return u(()=>{v(document.getElementById(e))},[]),l`
    <div id="${e}">${d}</div>
  `};var p,a,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [id] = useState(uid);
  useEffect(() => {
    popoverTooltipExample(document.getElementById(id));
  }, []);
  return html\`
    <div id="\${id}">\${PopoverTooltip}</div>
  \`;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["popoverTooltip"];export{h as __namedExportsOrder,b as default,t as popoverTooltip};
//# sourceMappingURL=popovertooltip.stories-e9ddbdd2.js.map

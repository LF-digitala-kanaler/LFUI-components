import{e as n,u as p}from"./utils-f9cf1c58.js";const l=t=>{if(!t)return;n(".popover-tooltip-trigger",e=>{e.addEventListener("focus",r),e.addEventListener("blur",r);function r(){document.getElementById(this.getAttribute("aria-controls")).parentElement.classList.toggle("open")}},t),n("label.popover-tooltip-trigger",e=>{e.addEventListener("click",o),e.addEventListener("touch",o)},t);function o(e){e.preventDefault()}},{useEffect:c,useState:d}=__STORYBOOK_MODULE_CLIENT_API__,u={title:"Supportive microinteractions/Popover Tooltip",parameters:{backgrounds:{default:"white"},badges:["stable"]}};function a({centered:t=!1}){const[o]=d(p);return c(()=>{l(document.getElementById(o))},[]),`
    <section id="${o}">
      Our
      <span
        role="button"
        tabindex="-1"
        class="popover-tooltip-trigger ${t?"popover-sm-center":""}"
        aria-controls="toggable2">
        occupational pension
        <div
          role="alert"
          id="toggable2"
          class="popover-tooltip popover-bottom popover-attach ${t?"popover-sm-center":""}">
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
  `}const i=a.bind({});i.args={centered:!1};const s=a.bind({});s.args={centered:!0};const v=["Default","Centered"],f=Object.freeze(Object.defineProperty({__proto__:null,Centered:s,Default:i,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{s as C,i as D,f as P};
//# sourceMappingURL=popovertooltip.stories-764cd587.js.map

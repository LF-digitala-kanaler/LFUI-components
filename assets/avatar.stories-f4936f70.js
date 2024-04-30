const g=`<p class="text-sm mb-05 text-muted">Default</p>
<div class="avatar avatar-inline" data-initials="JD">Jane Doe</div>

<p class="text-sm mt-15 mb-05 text-muted">One of a few themes</p>
<div class="avatar avatar-blue avatar-inverted avatar-inline" data-initials="JD">Jane Doe</div>

<p class="text-sm mt-15 mb-05 text-muted">With background color</p>
<div class="avatar avatar-blue avatar-inline" data-initials="JD">Jane Doe</div>

<p class="text-sm mt-15 mb-05 text-muted">With picture</p>
<div class="avatar avatar-blue avatar-inline">
  <img class="avatar-image" src="https://avatars.githubusercontent.com/u/21335758" alt="Jane Doe">
</div>

`,D={title:"System display/Avatar",parameters:{backgrounds:{default:"white"},badges:["stable"]},argTypes:{theme:{control:"select",options:["black","blue","red","gray"]}}},e=()=>g;function f(a,t){return`
    <img class="avatar-image" src="${a}" alt="${t}">
  `}function o(a){return{theme:a.theme?"avatar-"+a.theme:"",initials:a.initials||"",inverted:a.inverted?"avatar-inverted":"",image:a.image||"",name:a.name||""}}function n({theme:a,inverted:t,initials:h,name:r,image:i}){return`
    <div
      class="avatar avatar-inline ${a} ${t}"
      data-initials="${h}"
    >
      ${i?f(i,r):r}
    </div>
  `}function v(a){return n(o(a))}function c(a){const t=o(a);return`
    ${n({...t,theme:"avatar-blue"})}

    ${n({...t,theme:"avatar-red"})}

    ${n({...t,theme:"avatar-black"})}

    ${n({...t,theme:"avatar-gray"})}
  `}const d=v.bind({});d.args={initials:"JD",name:"Jane Doe",inverted:!1,theme:"",image:""};const u=v.bind({});u.args={initials:"JD",name:"Jane Doe",image:"https://avatars.githubusercontent.com/u/21335758"};const p=c.bind({});p.args={initials:"JD",name:"Jane Doe"};const b=c.bind({});b.args={initials:"JD",name:"Jane Doe",inverted:!0};var s,m,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => Avatar",...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const J=["avatar","avatarDefault","avatarWithImage","themes","themesInverted"],x=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:J,avatar:e,avatarDefault:d,avatarWithImage:u,default:D,themes:p,themesInverted:b},Symbol.toStringTag,{value:"Module"}));export{x as A,d as a,u as b,b as c,p as t};

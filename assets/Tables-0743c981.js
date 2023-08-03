import{M as s,C as a}from"./index-244ea143.js";import{o as e}from"./jsxRuntime.module-3449ab35.js";import{T as n,P as d,a as h,b as c,c as p,d as b,e as u,f as m,g as w,h as f,C as g}from"./tables.stories-1b7e7da4.js";import{B as y}from"./Badges-1d84ea7f.js";import{N as i}from"./Note-c9d28f82.js";import{u as r}from"./index-dc54cc1b.js";import{k}from"./hooks.module-d947cf7f.js";import"./iframe-d7a3d3dd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./utils-f589fb48.js";function l(o){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",h5:"h5",code:"code",strong:"strong",ul:"ul",li:"li"},r(),o.components);return e(k,{children:[e(s,{of:n}),`
`,e(t.h1,{id:"tables-",children:["Tables ",e(y,{of:n})]}),`
`,e(t.p,{children:'Tables come in many different forms and sizes. Which table you should use is often dependant to its content and background colour. The default table looks like the one directly below and is of a "compressed" variant, hence the "small" and .table-sm markup. This is due to tables in LF applications usually have a lot of content.'}),`
`,e(t.h2,{id:"variations",children:"Variations"}),`
`,e(t.p,{children:"If we don't count the endless modifiers you have at your disposal there is two different variations of tables, one that present data and one that compare data."}),`
`,e(t.h3,{id:"present-data",children:"Present data"}),`
`,e(a,{of:d}),`
`,e(t.h4,{id:"modifiers",children:"Modifiers"}),`
`,e(t.p,{children:"There is several modifiers available for tables. You can mix and match after what you need."}),`
`,e(t.h5,{id:"sizing",children:"Sizing"}),`
`,e(t.p,{children:["There is one sizing modifier available and that is ",e(t.code,{children:".table-sm"}),". Simply add the ",e(t.code,{children:".table-sm"})," class to your table element."]}),`
`,e(a,{of:h}),`
`,e(t.h5,{id:"summary-row",children:"Summary row"}),`
`,e(t.p,{children:["Quite often you will be calculating the total sum of data in table cell's. In the example below you can see appropriate markup to use. Don't forget to add the ",e(t.code,{children:"<tfoot>"}),"-element since LFUI will add use this to add the right styling."]}),`
`,e(a,{of:c}),`
`,e(t.h5,{id:"banded-rows",children:"Banded rows"}),`
`,e(t.p,{children:["Works great on backgrounds where the normal white cells aren't clear enough. Simply add ",e(t.code,{children:".table-varied"})," to the ",e(t.code,{children:"<table>"}),"-element"]}),`
`,e(a,{of:p}),`
`,e(t.h5,{id:"in-table-grouping",children:"In-table grouping"}),`
`,e(t.p,{children:`If you wish to create a sub-header apply the .th-sub and colspan="3"(value should be equal to the total number of cells in a row). In the same respect, you can use .th-main to enforce its styling on a cell that isn't a really a th.`}),`
`,e(a,{of:b}),`
`,e(t.p,{children:["To indent and group any number of rows under another row apply the ",e(t.code,{children:".table-sub-group"})," to each row you wish specified as sub grouped. It works with every type of table above. To achieve correct styling, also add ",e(t.code,{children:".last"})," to the last child as well as ",e(t.code,{children:".first"})," to the first child of the ",e(t.code,{children:".table-sub-group-row"}),"!"]}),`
`,e(i,{children:e(t.p,{children:[e(t.strong,{children:"NOTE"})," Do not add ",e(t.code,{children:".first"})," & ",e(t.code,{children:".last"}),"-classes to the ",e(t.code,{children:".table-varied-variant"}),", as it breaks its styling."]})}),`
`,e(a,{of:u}),`
`,e(t.h5,{id:"expandable-rows",children:"Expandable rows"}),`
`,e(t.p,{children:"Sometimes a table row simply isn't enough for all that rich data. To have a table row expand and show additional data, there's the expandable row. The expandable table row builds upon Bootstrap collapse. To make a table row expandable, add the data-bs-toggle attribute and set it to collapse:table-row and have the data-target attribute point to the ID of the row that you'd like to expand (the next row). Also, please make sure to set the appropriate aria attributes aria-expanded and aria-controls."}),`
`,e(t.p,{children:"To have a certain element within the clickable row not trigger the expand, add the data-no-expand attribute."}),`
`,e(i,{children:e(t.p,{children:[e(t.strong,{children:"Note:"})," Since the collapse button does not have the ",e(t.code,{children:".btn-class"}),", make sure you add the ",e(t.code,{children:'role="button"'}),"-property to the element (and of course, as usual, the relevant aria-attributes!)."]})}),`
`,e(a,{of:m}),`
`,e(t.h5,{id:"clickable-rows",children:"Clickable rows"}),`
`,e(t.p,{children:"Tables with linked table rows can be marked up with the table-clickable modifier. You'll still have to consider accessibility, marking up links and whatnot properly, the clickable modifier simply handles styling."}),`
`,e(t.p,{children:"To disable the styles for a row, simply add the class table-ignore-clickable."}),`
`,e(a,{of:w}),`
`,e(t.h5,{id:"sorting",children:"Sorting"}),`
`,e(a,{of:f}),`
`,e(t.h3,{id:"comparative-tables",children:"Comparative tables"}),`
`,e(t.p,{children:"Comparative table may look at a table but it's built with div's instead of table markup. It was not possible to get the desire layout work with table markup. It's responsive out of the box but you might need to tweak the behaviour to match your needs (read below how to adjust table's to work on smaller screens)."}),`
`,e(a,{of:g}),`
`,e(t.h2,{id:"responsive",children:"Responsive"}),`
`,e(t.p,{children:["As in at the top of the page when it comes to handle table's on smaller screens we hide columns to make the table fit. We use helper classes from Bootstrap to make it work. In the examples at the top we hide cells with ",e(t.code,{children:"d-none"})," and display them on wider screens with ",e(t.code,{children:"d-md-table-cell"}),"."]}),`
`,e(t.h2,{id:"good-to-know",children:"Good to know"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:"You can add a caption to your table which will have the same design as the panel header."}),`
`,e(t.li,{children:["If you have numbers in the last cell on each row add ",e(t.code,{children:".table-cell-number"}),"} to right align the text and give it the right styling."]}),`
`,e(t.li,{children:"Text in table cell's can be tricky to style. If you want to keep the text from breaking into two rows consider adding .text-nowrap to each cell to keep the text on the one row."}),`
`]})]})}function O(o={}){const{wrapper:t}=Object.assign({},r(),o.components);return t?e(t,Object.assign({},o,{children:e(l,o)})):l(o)}export{O as default};
//# sourceMappingURL=Tables-0743c981.js.map

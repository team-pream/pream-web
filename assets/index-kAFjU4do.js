import{j as l,t as c,c as n,a as o,b as m}from"./theme-DPbiucBH.js";import{r as p}from"./index-DRjF_FHU.js";function u({color:e,typo:s,children:r,...t}){return l("span",{style:{color:e},css:{...c[s]},...t,children:r})}u.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"string"},description:""},typo:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const g=({wrap:e})=>n`
  display: flex;
  gap: 8px;

  ${e?n`
        width: 100%;
        flex-wrap: wrap;
      `:n`
        flex-wrap: nowrap;
        overflow: auto;
      `}
`,f=({isSelected:e})=>n`
  display: flex;
  flex-shrink: 0;
  position: relative;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.2s;
  cursor: pointer;

  ${e?n`
        color: ${o.colors.white};
        background: ${o.colors.green200};
        border: 1px solid transparent;
      `:n`
        color: ${o.colors.gray300};
        background: ${o.colors.white};
        border: 1px solid ${o.colors.gray200};
      `}

  input {
    display: none;
    padding: 0;
  }
`;function y({items:e,defaultValue:s,onChange:r,wrap:t=!1}){const[a,d]=p.useState(s);return p.useEffect(()=>{a&&r&&r(a)},[a,r]),l("div",{css:g({wrap:t}),children:e==null?void 0:e.map(i=>l(b,{label:i.label,value:i.value,isSelected:a===i.value,onChange:()=>d(i.value)},i.value))})}function b({name:e="chip-radio-group",isSelected:s=!1,label:r,value:t,onChange:a}){return m("label",{css:f({isSelected:s}),onChange:a,children:[l("input",{type:"radio",name:e,value:t}),l(u,{typo:"body5",children:r})]})}y.__docgenInfo={description:"",methods:[],displayName:"ChipRadioGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string | number; label: string }",signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string | number; label: string }[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{y as C,u as T};

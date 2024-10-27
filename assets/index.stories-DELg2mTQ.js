import{a as b}from"./emotion-react-jsx-runtime.browser.esm-Cbh5XEyo.js";import{c as e,t as r}from"./emotion-react.browser.esm-DyzHDEz3.js";import"./extends-CKwpSh1k.js";import"./index-CTjT7uj6.js";const g=({size:a,variant:s,status:t})=>e`
  display: flex;
  align-items: center;
  justify-content: center;

  ${s==="box"&&f({size:a})}
  ${s==="capsule"&&$}

  ${t==="active"&&h}
  ${t==="pressed"&&w}
  ${t==="disabled"&&y}
`,f=({size:a})=>e`
  ${a==="xl"&&e`
    width: 100%;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${a==="l"&&e`
    width: 354px;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${a==="m"&&e`
    width: 307px;
    padding: 16px 25px;
    border-radius: 10px;
  `}
  ${a==="s"&&e`
    width: 100px;
    padding: 13px 22px;
    border-radius: 8px;
  `}
  ${a==="xs"&&e`
    width: 60px;
    padding: 10px 0;
    border-radius: 6px;
  `}
`,$=e`
  padding: 9px 9px;
  border-radius: 17px;
`,h=e`
  color: ${r.colors.white};
  background: ${r.colors.green200};
`,w=e`
  color: ${r.colors.white};
  background: ${r.colors.green300};
`,y=e`
  color: ${r.colors.gray300};
  background: ${r.colors.gray200};
  cursor: default;
`;function m({variant:a="box",size:s="m",status:t="active",children:x,...v}){return b("button",{...v,css:g({variant:a,size:s,status:t}),children:x})}m.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'box' | 'capsule'",elements:[{name:"literal",value:"'box'"},{name:"literal",value:"'capsule'"}]},description:"",defaultValue:{value:"'box'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'active' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'active'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Button",component:m,tags:["autodocs"]},o={args:{variant:"box",size:"m",children:"Button"}},n={args:{variant:"capsule",size:"m",children:"Button"}};var l,d,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'box',
    size: 'm',
    children: 'Button'
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'capsule',
    size: 'm',
    children: 'Button'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const k=["Box","Capsule"];export{o as Box,n as Capsule,k as __namedExportsOrder,_ as default};

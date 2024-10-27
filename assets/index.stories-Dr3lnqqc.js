import{a as n}from"./emotion-react-jsx-runtime.browser.esm-Cbh5XEyo.js";import{c as s,t as o}from"./emotion-react.browser.esm-DyzHDEz3.js";import{c as m}from"./Search-DYE4ft6J.js";import"./extends-CKwpSh1k.js";import"./index-CTjT7uj6.js";const l=({size:e})=>s`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${o.zIndex.fab};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${o.colors.yellow100};
  box-shadow: 0px 2px 6px 0px ${o.colors.grayOpacity200};

  ${e==="s"&&s`
    width: 55px;
    height: 55px;
  `}

  ${e==="m"&&s`
    width: 68px;
    height: 68px;
  `}
`;function p({size:e="s",icon:c,...d}){return n("button",{css:l({size:e}),...d,children:c})}p.__docgenInfo={description:"",methods:[],displayName:"FAB",props:{size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:"",defaultValue:{value:"'s'",computed:!1}},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Components/FAB",component:p,tags:["autodocs"]},t={args:{size:"s",icon:n(m,{width:"20px",height:"20"})}};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 's',
    icon: <FabPlus width="20px" height="20" />
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,w as default};

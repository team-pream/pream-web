import{j as A,a as e}from"./emotion-react-jsx-runtime.browser.esm-Cbh5XEyo.js";import{c as y,t as p}from"./emotion-react.browser.esm-DyzHDEz3.js";import{a as w,b as R,S as I}from"./Search-DYE4ft6J.js";import{S as N}from"./index-Bl3darjV.js";import"./extends-CKwpSh1k.js";import"./index-CTjT7uj6.js";const b=y`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${p.zIndex.appBar};
  width: 100%;
  height: 58px;
  max-width: ${p.size.maxWidth};
  background: ${p.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 18px;
  gap: 16px;
`;function k({prefix:o,suffix:c}){return A("header",{css:b,children:[o||e(w,{width:"94px",height:"24px"}),c&&c]})}k.__docgenInfo={description:"",methods:[],displayName:"AppBar",props:{prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D={title:"Components/AppBar",component:k},r={args:{}},a={args:{prefix:e(R,{height:"24px",cursor:"pointer"})}},s={args:{prefix:e(R,{height:"24px",cursor:"pointer"}),suffix:e(N,{})}},t={args:{prefix:e(w,{width:"94px",height:"24px"}),suffix:e(I,{width:"20px",height:"20px"})}};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var h,m,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    prefix: <AppBarBack height="24px" cursor="pointer" />
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,u,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: <AppBarBack height="24px" cursor="pointer" />,
    suffix: <SearchBar />
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var l,S,B;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    prefix: <Logo width="94px" height="24px" />,
    suffix: <SearchIcon width="20px" height="20px" />
  }
}`,...(B=(S=t.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const L=["Default","Back","SearchInput","Search"];export{a as Back,r as Default,t as Search,s as SearchInput,L as __namedExportsOrder,D as default};

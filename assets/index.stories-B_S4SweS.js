import{j as c}from"./theme-BvZHPoXC.js";import{r as d}from"./index-CTjT7uj6.js";import{R as r}from"./index-bRBvw1Tc.js";import"./index-D5nyNoYp.js";import"./extends-CKwpSh1k.js";import"./index-BZqGpNeu.js";const g={title:"Components/RadioGroup",component:r,tags:["autodocs"]},t=[{value:"1",label:"전체"},{value:"2",label:"위생용품"},{value:"3",label:"훈련용품"},{value:"4",label:"이동용품"}];function e(){const[l,u]=d.useState(t[0].value);return c(r,{items:t,defaultValue:l,onChange:n=>u(n)})}e.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`function Default() {
  const [selected, setSelected] = useState<string>(ITEMS[0].value);
  return <RadioGroup items={ITEMS} defaultValue={selected} onChange={(value: string) => setSelected(value)} />;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,g as default};
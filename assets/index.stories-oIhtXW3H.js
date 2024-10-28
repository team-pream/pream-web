import{j as s}from"./emotion-react.browser.esm-FAaLc1fP.js";import{r as u}from"./index-CTjT7uj6.js";import{R as i,B as o}from"./index-BfCA615T.js";import"./index-Cyf9i_GQ.js";import"./extends-CKwpSh1k.js";import"./index-BZqGpNeu.js";const h={title:"Components/RadioGroup",component:i,tags:["autodocs"]},e=()=>{const[t,p]=u.useState("1");return s(i,{options:[{value:"1",node:s(o,{variant:"capsule",size:"s",status:t==="1"?"pressed":"active",children:"option1"})},{value:"2",node:s(o,{variant:"capsule",size:"s",status:t==="2"?"pressed":"active",children:"option2"})},{value:"3",node:s(o,{variant:"capsule",size:"s",status:t==="3"?"pressed":"active",children:"option3"})}],selectedValue:t,onChange:c=>{p(c)},style:{gap:"8px"}})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<string>('1');
  const options = [{
    value: '1',
    node: <Button variant="capsule" size="s" status={selected === '1' ? 'pressed' : 'active'}>
          option1
        </Button>
  }, {
    value: '2',
    node: <Button variant="capsule" size="s" status={selected === '2' ? 'pressed' : 'active'}>
          option2
        </Button>
  }, {
    value: '3',
    node: <Button variant="capsule" size="s" status={selected === '3' ? 'pressed' : 'active'}>
          option3
        </Button>
  }];
  return <RadioGroup options={options} selectedValue={selected} onChange={(value: string) => {
    setSelected(value);
  }} style={{
    gap: '8px'
  }} />;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,h as default};

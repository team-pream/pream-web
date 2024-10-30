import{c as r,a as e,j as a,t as h,b}from"./theme-BvZHPoXC.js";import{r as i}from"./index-CTjT7uj6.js";const T=({size:s,variant:o,status:t,fullWidth:l})=>r`
  display: flex;
  align-items: center;
  justify-content: center;

  ${o==="box"&&q({size:s,fullWidth:l})};
  ${o==="capsule"&&w};

  ${t==="active"&&k};
  ${t==="pressed"&&I};
  ${t==="disabled"&&N};
  ${t==="error"&&R};

  transition: background 0.5s ease;
`,q=({size:s,fullWidth:o})=>r`
  ${s==="xl"&&r`
    width: 100%;
    padding: 16px 25px;
    border-radius: 10px;
    ${e.typo.subtitle2};
  `}
  ${s==="l"&&r`
    width: ${o?"100%":"354px"};
    padding: 16px 25px;
    border-radius: 10px;
    ${e.typo.subtitle2};
  `}
  ${s==="m"&&r`
    width: ${o?"100%":"307px"};
    padding: 16px 25px;
    border-radius: 10px;
    ${e.typo.subtitle2};
  `}
  ${s==="s"&&r`
    width: ${o?"100%":"100px"};
    padding: 13px 22px;
    border-radius: 8px;
    ${e.typo.body4};
  `}
  ${s==="xs"&&r`
    width: ${o?"100%":"60px"};
    padding: 10px 0;
    border-radius: 6px;
    ${e.typo.body6};
  `}
`,w=r`
  padding: 9px 9px;
  border-radius: 17px;
`,k=r`
  color: ${e.colors.white};
  background: ${e.colors.green200};

  &:hover {
    background: ${e.colors.green300};
  }
`,I=r`
  color: ${e.colors.white};
  background: ${e.colors.green300};
`,N=r`
  color: ${e.colors.gray300};
  background: ${e.colors.gray200};
  cursor: default;
`,R=r`
  color: ${e.colors.red300};
  background: ${e.colors.red100};
  border: 1px solid ${e.colors.red300};

  &:hover {
    background: ${e.colors.red200};
  }
`;function V({variant:s="box",size:o="m",status:t="active",fullWidth:l=!1,children:c,...n}){return a("button",{...n,css:T({variant:s,size:o,status:t,fullWidth:l}),children:c})}V.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'box' | 'capsule'",elements:[{name:"literal",value:"'box'"},{name:"literal",value:"'capsule'"}]},description:"",defaultValue:{value:"'box'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'active' | 'pressed' | 'error' | 'disabled'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'active'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const _=r`
  width: 100%;
  display: flex;
  flex-direction: column;
`,B=r`
  margin-bottom: 6px;
`,j=({errorMessage:s,isFocused:o})=>r`
  display: flex;
  padding: 4px 0;

  border-bottom: ${s?`1px solid ${e.colors.red300}`:o?`1px solid ${e.colors.green200}`:`1px solid ${e.colors.gray200}`};

  transition: border-bottom 0.2s ease;
`,C=r`
  display: flex;
  flex: 1;
  padding: 6px 12px;

  ${e.typo.body5};

  &::placeholder {
    color: ${e.colors.gray200};
  }
`,y=r`
  margin: 5px 0 0 0;
  padding: 0 12px;
`;function p({color:s,typo:o,children:t,...l}){return a("span",{style:{color:s},css:{...h[o]},...l,children:t})}p.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"string"},description:""},typo:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const H=i.forwardRef(({type:s="text",label:o,disabled:t,spellCheck:l=!1,autoComplete:c="off",prefix:n,suffix:m,confirmMessage:f,errorMessage:u,...$},g)=>{const d=i.useRef(null),[v,x]=i.useState(!1);return i.useImperativeHandle(g,()=>({focus:()=>{d.current&&d.current.focus()}})),b("div",{css:_,children:[o&&a(p,{typo:"subtitle2",css:B,children:o}),b("div",{onClick:()=>{d.current&&(d.current.focus(),x(!0))},css:j({errorMessage:u,isFocused:v}),children:[n&&n,a("input",{ref:d,type:s,spellCheck:l,autoComplete:c,disabled:t,css:C,onBlur:()=>x(!1),...$}),m&&m]}),f&&a("div",{css:y,children:a(p,{typo:"body6",color:e.colors.green200,children:f})}),u&&a("div",{css:y,children:a(p,{typo:"body6",color:e.colors.red300,children:u})})]})});H.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},confirmMessage:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1},spellCheck:{defaultValue:{value:"false",computed:!1},required:!1},autoComplete:{defaultValue:{value:"'off'",computed:!1},required:!1}},composes:["Omit"]};export{V as B,H as I,p as T};

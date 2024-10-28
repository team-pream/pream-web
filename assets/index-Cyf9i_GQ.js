import{c as a,a as e,j as r,t as x,b as d}from"./emotion-react.browser.esm-FAaLc1fP.js";import{r as u}from"./index-CTjT7uj6.js";const y=a`
  width: 100%;
  display: flex;
  flex-direction: column;
`,R=a`
  margin-bottom: 6px;
`,b=({errorMessage:t})=>a`
  width: 100%;
  padding: 10px 12px;
  ${e.typo.body5};

  border-bottom: ${t?`1px solid ${e.colors.red100}`:`1px solid ${e.colors.gray200}`};

  &:focus {
    border-bottom: ${t?`1px solid ${e.colors.red100}`:`1px solid ${e.colors.green200}`};
  }

  &::placeholder {
    color: ${e.colors.gray200};
  }
`,h=a`
  margin: 5px 0 0 0;
  padding: 0 12px;
`;function c({color:t,typo:s,children:i,...l}){return r("span",{style:{color:t,...x[s]},...l,children:i})}c.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"string"},description:""},typo:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const g=u.forwardRef(({type:t="text",label:s,disabled:i,spellCheck:l=!1,autoComplete:f="off",icon:o,errorMessage:n,...m})=>{const p=u.useRef(null);return d("div",{css:y,children:[s&&r(c,{typo:"subtitle2",css:R,children:s}),d("div",{onClick:()=>{p.current&&p.current.focus()},children:[o&&o.prefix,r("input",{ref:p,type:t,spellCheck:l,autoComplete:f,disabled:i,css:b({errorMessage:n}),...m}),o&&o.suffix]}),n&&r("div",{css:h,children:r(c,{typo:"body6",color:e.colors.red100,children:n})})]})});g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
}`,signature:{properties:[{key:"prefix",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!1}},{key:"suffix",value:{name:"ReactReactElement",raw:"React.ReactElement",required:!1}}]}},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1},spellCheck:{defaultValue:{value:"false",computed:!1},required:!1},autoComplete:{defaultValue:{value:"'off'",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};export{g as I,c as T};

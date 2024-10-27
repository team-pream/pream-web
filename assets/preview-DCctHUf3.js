import{j as o}from"./extends-CKwpSh1k.js";import{r,a as g}from"./index-CTjT7uj6.js";import"./index-BbmHap-z.js";import{c as x,R as w}from"./index-BZqGpNeu.js";import{a as v,b as F}from"./emotion-react-jsx-runtime.browser.esm-Cbh5XEyo.js";import{c as R,t as a,G as T}from"./emotion-react.browser.esm-DyzHDEz3.js";/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const E="6";try{window.__reactRouterVersion=E}catch{}const U="startTransition",d=g[U];function j(e){let{basename:f,children:S,future:i,window:y}=e,n=r.useRef();n.current==null&&(n.current=x({window:y,v5Compat:!0}));let t=n.current,[l,s]=r.useState({action:t.action,location:t.location}),{v7_startTransition:c}=i||{},u=r.useCallback(m=>{c&&d?d(()=>s(m)):s(m)},[s,c]);return r.useLayoutEffect(()=>t.listen(u),[t,u]),r.createElement(w,{basename:f,children:S,location:l.location,navigationType:l.action,navigator:t,future:i})}var h;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(h||(h={}));var b;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(b||(b={}));const I=R`
  :root {
    font-family: 'Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont',
      'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif';

    width: 100%;
    height: 100%;
    color: ${a.colors.black100};
    background-color: ${a.colors.white};
  }

  * {
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: inherit;
  }

  *::before,
  *::after {
    box-sizing: border-box !important;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }

  textarea {
    border: none;
    resize: none;
    outline: none;
  }

  input {
    outline: none;
    border: none;
    background: none;
  }
`,p=()=>v(T,{styles:I});p.__docgenInfo={description:"",methods:[],displayName:"GlobalStyle"};const C={parameters:{layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"gray",values:[{name:"gray",value:"#EAEEF2"},{name:"light",value:"#FFFFFF"},{name:"dark",value:"#262626"}]}},decorators:[e=>o.jsx(F,{theme:a,children:o.jsxs(j,{children:[o.jsx(p,{}),o.jsx("div",{style:{width:"100vh",maxWidth:"480px",margin:"0 auto"},children:o.jsx(e,{})})]})})]};export{C as default};

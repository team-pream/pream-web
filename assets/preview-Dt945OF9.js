import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as t,a as y}from"./index-DRjF_FHU.js";import"./index-rX-Bn4lm.js";import{c as v,l as w,R as x}from"./index-BKbKZLLv.js";import{c as F,a,j as R,G as T,T as E}from"./theme-DPbiucBH.js";/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const j="6";try{window.__reactRouterVersion=j}catch{}const U="startTransition",m=y[U];function I(e){let{basename:f,children:g,future:n,window:S}=e,s=t.useRef();s.current==null&&(s.current=v({window:S,v5Compat:!0}));let o=s.current,[l,i]=t.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},u=t.useCallback(d=>{c&&m?m(()=>i(d)):i(d)},[i,c]);return t.useLayoutEffect(()=>o.listen(u),[o,u]),t.useEffect(()=>w(n),[n]),t.createElement(x,{basename:f,children:g,location:l.location,navigationType:l.action,navigator:o,future:n})}var b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(b||(b={}));var h;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(h||(h={}));const _=F`
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

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  *::before,
  *::after {
    box-sizing: border-box !important;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
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
    padding-block: 0;
    padding-inline: 0;
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
`,p=()=>R(T,{styles:_});p.__docgenInfo={description:"",methods:[],displayName:"GlobalStyle"};const z={parameters:{layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"gray",values:[{name:"gray",value:"#EAEEF2"},{name:"light",value:"#FFFFFF"},{name:"dark",value:"#262626"}]}},decorators:[e=>r.jsx(E,{theme:a,children:r.jsxs(I,{children:[r.jsx(p,{}),r.jsx("div",{style:{width:"100vh",maxWidth:"480px",margin:"0 auto"},children:r.jsx(e,{})})]})})]};export{z as default};

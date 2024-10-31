import{j as o}from"./extends-CKwpSh1k.js";import{r,a as y}from"./index-CTjT7uj6.js";import"./index-BbmHap-z.js";import{c as v,R as w}from"./index-BZqGpNeu.js";import{c as x,a as i,j as F,G as R,T}from"./theme-BvZHPoXC.js";/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const E="6";try{window.__reactRouterVersion=E}catch{}const j="startTransition",m=y[j];function U(e){let{basename:f,children:S,future:a,window:g}=e,n=r.useRef();n.current==null&&(n.current=v({window:g,v5Compat:!0}));let t=n.current,[l,s]=r.useState({action:t.action,location:t.location}),{v7_startTransition:c}=a||{},u=r.useCallback(d=>{c&&m?m(()=>s(d)):s(d)},[s,c]);return r.useLayoutEffect(()=>t.listen(u),[t,u]),r.createElement(w,{basename:f,children:S,location:l.location,navigationType:l.action,navigator:t,future:a})}var b;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(b||(b={}));var h;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(h||(h={}));const I=x`
  :root {
    font-family: 'Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont',
      'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif';

    width: 100%;
    height: 100%;
    color: ${i.colors.black100};
    background-color: ${i.colors.white};
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
`,p=()=>F(R,{styles:I});p.__docgenInfo={description:"",methods:[],displayName:"GlobalStyle"};const V={parameters:{layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"gray",values:[{name:"gray",value:"#EAEEF2"},{name:"light",value:"#FFFFFF"},{name:"dark",value:"#262626"}]}},decorators:[e=>o.jsx(T,{theme:i,children:o.jsxs(U,{children:[o.jsx(p,{}),o.jsx("div",{style:{width:"100vh",maxWidth:"480px",margin:"0 auto"},children:o.jsx(e,{})})]})})]};export{V as default};

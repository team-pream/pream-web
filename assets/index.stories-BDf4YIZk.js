import{a,j as l}from"./emotion-react-jsx-runtime.browser.esm-Cbh5XEyo.js";import{d as h,e as g,f as x,g as E}from"./Search-DYE4ft6J.js";import{c as n,t as e}from"./emotion-react.browser.esm-DyzHDEz3.js";import{u as f}from"./index-BZqGpNeu.js";import"./extends-CKwpSh1k.js";import"./index-CTjT7uj6.js";const s={LOGIN:"/login",ONBOARDING:"/onboarding",MAIN:"/",SEARCH:"/search",CATEGORY:"/category",PRODUCTS:"/products",PRODUCT_DETAIL:"/products",PRODUCT_REGISTER:"/products/register",LIKE:"/like",ORDER:"/order",ORDER_PAYMENT:"/order/payment",ORDER_COMPLETE:"/order/complete",MYPAGE:"/mypage",MYPAGE_INFO:"/mypage/info",MYPAGE_SALES_HISTORY:"/mypage/sales/history",MYPAGE_PURCHASE_HISTORY:"/mypage/purchase/history"},O=n`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${e.zIndex.gnb};
  width: 100%;
  max-width: ${e.size.maxWidth};
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${e.colors.white};
  box-shadow: 0px -4px 6px 0px ${e.colors.grayOpacity100};
`,R=({isActive:o})=>n`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    path {
      fill: ${o?e.colors.green200:e.colors.black100};
    }
    rect {
      stroke: ${o?e.colors.green200:e.colors.black100};
    }
  }
`,y=({isActive:o})=>n`
  font-weight: 400;
  font-size: 12px;
  color: ${o?e.colors.green200:e.colors.black100};
`,u=[{name:"홈",icon:a(h,{width:"20px",height:"20px"}),path:s.MAIN},{name:"카테고리",icon:a(g,{width:"20px",height:"20px"}),path:s.CATEGORY},{name:"찜",icon:a(x,{width:"20px",height:"20px"}),path:s.LIKE},{name:"마이",icon:a(E,{width:"20px",height:"20px"}),path:s.MYPAGE}];function m(){const o=f(),i=window.location.pathname;return a("nav",{css:O,children:u.map(t=>l("div",{css:R({isActive:i===t.path}),onClick:()=>o(t.path),children:[t.icon,a("span",{css:y({isActive:i===t.path}),children:t.name})]},t.name))})}m.__docgenInfo={description:"",methods:[],displayName:"GNB"};const N={title:"Components/GNB",component:m,tags:["autodocs"]},r={};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,N as default};

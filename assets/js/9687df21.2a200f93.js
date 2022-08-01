"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[9192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={},o="Blind Signatures & eCash",s={unversionedId:"CommonTerms/Blind Signatures",id:"CommonTerms/Blind Signatures",title:"Blind Signatures & eCash",description:"This Guide is being actively worked on!",source:"@site/docs/CommonTerms/Blind Signatures.md",sourceDirName:"CommonTerms",slug:"/CommonTerms/Blind Signatures",permalink:"/wiki_fedimint/docs/CommonTerms/Blind Signatures",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/CommonTerms/Blind Signatures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Definitions & Terms",permalink:"/wiki_fedimint/docs/category/definitions--terms"},next:{title:"Chaumian eCash",permalink:"/wiki_fedimint/docs/CommonTerms/Chaumian eCash"}},l={},m=[],u={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blind-signatures--ecash"},"Blind Signatures & eCash"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Guide is being actively worked on!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Community Custody on a spectrum",src:n(7438).Z,width:"1154",height:"288"})),(0,r.kt)("p",null,"The canonical explanation of blind signatures was given by David Chaum in terms of imprinting a signature on a message using carbon copy paper. "),(0,r.kt)("p",null,"As highlighted in the figure above imagine obtaining a signature on a document as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a document and seal the document into an envelope along with carbon copy paper."),(0,r.kt)("li",{parentName:"ol"},"You pass the envelope to the signer who can sign the outside of the envelope. "),(0,r.kt)("li",{parentName:"ol"},"This creates an internal signature onto the document from the carbon paper. ."),(0,r.kt)("li",{parentName:"ol"},"If you were to reveal your document at a later date, the signer could confirm that they did indeed sign that document.")),(0,r.kt)("p",null,'This is concept is utilized inside eCash to allow an eCash mint to issue "IOUs" that it can confirm are valid, whilst retaining the privacy of the user. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Community Custody on a spectrum",src:n(3433).Z,width:"991",height:"296"})),(0,r.kt)("p",null,"A user can present a mint with a random identifier and request a blind signature from the mint. The mint signs different denominations with different private keys (for example a 10k Sats private key, a 5k sats private key and so on). "),(0,r.kt)("p",null,"So when a deposit (lets say 10,000 satoshis) is made, I present the mint with a random identifier and ask a blind signature with their 10,000 satoshi private key."),(0,r.kt)("p",null,"These two piece of data make up an eCash token."),(0,r.kt)("p",null,"When it comes time to redeem these satoshis, I provide the mint with the eCash token and it performs two checks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The mint confirms the signature was made with their 10,000 satoshi private key."),(0,r.kt)("li",{parentName:"ol"},"The mint checks it has not previously redeemed an eCash token with this unique reference number.")),(0,r.kt)("p",null,"If both of these checks pass then the eCash token is accepted."),(0,r.kt)("p",null,"Until this redemption is made the mint is unaware of the unique reference number on the eCash token, as a blind signing algorithm was used. "),(0,r.kt)("p",null,"This means that the mint is unable to ascertain the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether the individual redeeming the token was the same individual who minted the token. "),(0,r.kt)("li",{parentName:"ul"},"What the number of tokens held by any individual user are.")),(0,r.kt)("p",null,"This is the basis of the strong privacy claims in eCash."))}c.isMDXComponent=!0},3433:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Fedimint-ecashtoken-verify-6fd9c74f0e3497ca08d43c7c2ff60fb4.png"},7438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blind-signing-12c89c6dece70a0a674fc3883d9ed1ef.png"}}]);
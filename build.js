!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r,o,l,a,i,_={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,e){for(var t in e)n[t]=e[t];return n}function f(n){var e=n.parentNode;e&&e.removeChild(n)}function p(n,e,t){var r,o,l,a=arguments,i={};for(l in e)"key"==l?r=e[l]:"ref"==l?o=e[l]:i[l]=e[l];if(arguments.length>3)for(t=[t],l=3;l<arguments.length;l++)t.push(a[l]);if(null!=t&&(i.children=t),"function"==typeof n&&null!=n.defaultProps)for(l in n.defaultProps)void 0===i[l]&&(i[l]=n.defaultProps[l]);return d(n,i,r,o,null)}function d(n,e,t,o,l){var a={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l};return null==l&&(a.__v=a),null!=r.vnode&&r.vnode(a),a}function m(n){return n.children}function y(n,e){this.props=n,this.context=e}function h(n,e){if(null==e)return n.__?h(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?h(n):null}function g(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return g(n)}}function v(n){(!n.__d&&(n.__d=!0)&&o.push(n)&&!b.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||l)(b)}function b(){for(var n;b.__r=o.length;)n=o.sort((function(n,e){return n.__v.__b-e.__v.__b})),o=[],n.some((function(n){var e,t,r,o,l,a,i;n.__d&&(a=(l=(e=n).__v).__e,(i=e.__P)&&(t=[],(r=c({},l)).__v=r,o=C(i,l,r,e.__n,void 0!==i.ownerSVGElement,null!=l.__h?[a]:null,t,null==a?h(l):a,l.__h),O(t,l),o!=a&&g(l)))}))}function k(n,e,t,r,o,l,a,i,u,c){var p,y,g,v,b,k,w,S=r&&r.__k||s,P=S.length;for(u==_&&(u=null!=a?a[0]:P?h(r,0):null),t.__k=[],p=0;p<e.length;p++)if(null!=(v=t.__k[p]=null==(v=e[p])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?d(null,v,null,null,v):Array.isArray(v)?d(m,{children:v},null,null,null):null!=v.__e||null!=v.__c?d(v.type,v.props,v.key,null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(g=S[p])||g&&v.key==g.key&&v.type===g.type)S[p]=void 0;else for(y=0;y<P;y++){if((g=S[y])&&v.key==g.key&&v.type===g.type){S[y]=void 0;break}g=null}b=C(n,v,g=g||_,o,l,a,i,u,c),(y=v.ref)&&g.ref!=y&&(w||(w=[]),g.ref&&w.push(g.ref,null,v),w.push(y,v.__c||b,v)),null!=b?(null==k&&(k=b),u=x(n,v,g,S,a,b,u),c||"option"!=t.type?"function"==typeof t.type&&(t.__d=u):n.value=""):u&&g.__e==u&&u.parentNode!=n&&(u=h(g))}if(t.__e=k,null!=a&&"function"!=typeof t.type)for(p=a.length;p--;)null!=a[p]&&f(a[p]);for(p=P;p--;)null!=S[p]&&A(S[p],S[p]);if(w)for(p=0;p<w.length;p++)T(w[p],w[++p],w[++p])}function x(n,e,t,r,o,l,a){var i,_,s;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(o==t||l!=a||null==l.parentNode)n:if(null==a||a.parentNode!==n)n.appendChild(l),i=null;else{for(_=a,s=0;(_=_.nextSibling)&&s<r.length;s+=2)if(_==l)break n;n.insertBefore(l,a),i=a}return void 0!==i?i:l.nextSibling}function w(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||u.test(e)?t:t+"px"}function S(n,e,t,r,o){var l,a,i;if(o&&"className"==e&&(e="class"),"style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||w(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||w(n.style,e,t[e])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),(a=e.toLowerCase())in n&&(e=a),e=e.slice(2),n.l||(n.l={}),n.l[e+l]=t,i=l?j:P,t?r||n.addEventListener(e,i,l):n.removeEventListener(e,i,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&!o&&e in n?n[e]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==t||!1===t?n.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(e)?n.removeAttribute(e):n.setAttribute(e,t))}function P(n){this.l[n.type+!1](r.event?r.event(n):n)}function j(n){this.l[n.type+!0](r.event?r.event(n):n)}function N(n,e,t){var r,o;for(r=0;r<n.__k.length;r++)(o=n.__k[r])&&(o.__=n,o.__e&&("function"==typeof o.type&&o.__k.length>1&&N(o,e,t),e=x(t,o,o,n.__k,null,o.__e,e),"function"==typeof n.type&&(n.__d=e)))}function C(n,e,t,o,l,a,i,_,s){var u,f,p,d,h,g,v,b,x,w,S,P=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(s=t.__h,_=e.__e=t.__e,e.__h=null,a=[_]),(u=r.__b)&&u(e);try{n:if("function"==typeof P){if(b=e.props,x=(u=P.contextType)&&o[u.__c],w=u?x?x.props.value:u.__:o,t.__c?v=(f=e.__c=t.__c).__=f.__E:("prototype"in P&&P.prototype.render?e.__c=f=new P(b,w):(e.__c=f=new y(b,w),f.constructor=P,f.render=L),x&&x.sub(f),f.props=b,f.state||(f.state={}),f.context=w,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,P.getDerivedStateFromProps(b,f.__s))),d=f.props,h=f.state,p)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,w)||e.__v===t.__v){f.props=b,f.state=f.__s,e.__v!==t.__v&&(f.__d=!1),f.__v=e,e.__e=t.__e,e.__k=t.__k,f.__h.length&&i.push(f),N(e,_,n);break n}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,g)}))}f.context=w,f.props=b,f.state=f.__s,(u=r.__r)&&u(e),f.__d=!1,f.__v=e,f.__P=n,u=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=c(c({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(d,h)),S=null!=u&&u.type==m&&null==u.key?u.props.children:u,k(n,Array.isArray(S)?S:[S],e,t,o,l,a,i,_,s),f.base=e.__e,e.__h=null,f.__h.length&&i.push(f),v&&(f.__E=f.__=null),f.__e=!1}else null==a&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=M(t.__e,e,t,o,l,a,i,s);(u=r.diffed)&&u(e)}catch(n){e.__v=null,(s||null!=a)&&(e.__e=_,e.__h=!!s,a[a.indexOf(_)]=null),r.__e(n,e,t)}return e.__e}function O(n,e){r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function M(n,e,t,r,o,l,a,i){var u,c,f,p,d,m=t.props,y=e.props;if(o="svg"===e.type||o,null!=l)for(u=0;u<l.length;u++)if(null!=(c=l[u])&&((null===e.type?3===c.nodeType:c.localName===e.type)||n==c)){n=c,l[u]=null;break}if(null==n){if(null===e.type)return document.createTextNode(y);n=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),l=null,i=!1}if(null===e.type)m===y||i&&n.data===y||(n.data=y);else{if(null!=l&&(l=s.slice.call(n.childNodes)),f=(m=t.props||_).dangerouslySetInnerHTML,p=y.dangerouslySetInnerHTML,!i){if(null!=l)for(m={},d=0;d<n.attributes.length;d++)m[n.attributes[d].name]=n.attributes[d].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===n.innerHTML)||(n.innerHTML=p&&p.__html||""))}(function(n,e,t,r,o){var l;for(l in t)"children"===l||"key"===l||l in e||S(n,l,null,t[l],r);for(l in e)o&&"function"!=typeof e[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===e[l]||S(n,l,e[l],t[l],r)})(n,y,m,o,i),p?e.__k=[]:(u=e.props.children,k(n,Array.isArray(u)?u:[u],e,t,r,"foreignObject"!==e.type&&o,l,a,_,i)),i||("value"in y&&void 0!==(u=y.value)&&(u!==n.value||"progress"===e.type&&!u)&&S(n,"value",u,m.value,!1),"checked"in y&&void 0!==(u=y.checked)&&u!==n.checked&&S(n,"checked",u,m.checked,!1))}return n}function T(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function A(n,e,t){var o,l,a;if(r.unmount&&r.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||T(o,null,e)),t||"function"==typeof n.type||(t=null!=(l=n.__e)),n.__e=n.__d=void 0,null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){r.__e(n,e)}o.base=o.__P=null}if(o=n.__k)for(a=0;a<o.length;a++)o[a]&&A(o[a],e,t);null!=l&&f(l)}function L(n,e,t){return this.constructor(n,t)}function z(n,e,t){var o,l,a;r.__&&r.__(n,e),l=(o=t===i)?null:t&&t.__k||e.__k,n=p(m,null,[n]),a=[],C(e,(o?e:t||e).__k=n,l||_,_,void 0!==e.ownerSVGElement,t&&!o?[t]:l?null:e.childNodes.length?s.slice.call(e.childNodes):null,a,t||_,o),O(a,n)}r={__e:function(n,e){for(var t,r,o,l=e.__h;e=e.__;)if((t=e.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n),o=t.__d),o)return e.__h=l,t.__E=t}catch(e){n=e}throw n}},y.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},t),this.props)),n&&c(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),v(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),v(this))},y.prototype.render=m,o=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,i=_;let D={data:""},E=n=>{try{let e=n?n.querySelector("#_goober"):self._goober;return e||(e=(n||document.head).appendChild(document.createElement("style")),e.innerHTML=" ",e.id="_goober"),e.firstChild}catch(n){}return n||D},X=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,U=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,W=(n,e)=>{let t,r="",o="",l="";for(let a in n){let i=n[a];"object"==typeof i?(t=e?e.replace(/([^,])+/g,n=>a.replace(/([^,])+/g,e=>/&/g.test(e)?e.replace(/&/g,n):n?n+" "+e:e)):a,o+="@"==a[0]?"f"==a[1]?W(i,a):a+"{"+W(i,"k"==a[1]?"":e)+"}":W(i,t)):"@"==a[0]&&"i"==a[1]?r=a+" "+i+";":l+=W.p?W.p(a.replace(/[A-Z]/g,"-$&").toLowerCase(),i):a.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+i+";"}return l[0]?(t=e?e+"{"+l+"}":l,r+t+o):r+o},F={},H=n=>{let e="";for(let t in n)e+=t+("object"==typeof n[t]?H(n[t]):n[t]);return e},I=(n,e,t,r,o)=>{let l="object"==typeof n?H(n):n,a=F[l]||(F[l]="go"+l.split("").reduce((n,e)=>101*n+e.charCodeAt(0)>>>0,11));if(!F[a]){let e="object"==typeof n?n:(n=>{let e,t=[{}];for(;e=X.exec(n.replace(U,""));)e[4]&&t.shift(),e[3]?t.unshift(t[0][e[3]]=t[0][e[3]]||{}):e[4]||(t[0][e[1]]=e[2]);return t[0]})(n);F[a]=W(o?{["@keyframes "+a]:e}:e,t?"":"."+a)}return((n,e,t)=>{e.data.indexOf(n)<0&&(e.data=t?n+e.data:e.data+n)})(F[a],e,r),a},R=(n,e,t)=>n.reduce((n,r,o)=>{let l=e[o];if(l&&l.call){let n=l(t),e=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=e?"."+e:n&&"object"==typeof n?n.props?"":W(n,""):n}return n+r+(null==l?"":l)},"");function $(n){let e=this||{},t=n.call?n(e.p):n;return I(t.map?R(t,[].slice.call(arguments,1),e.p):t,E(e.target),e.g,e.o,e.k)}let B,G,V=$.bind({g:1});$.bind({k:1});var Z,q,J=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},K="cubic-bezier(0.52, 0.01, 0.16, 1)",Q=function(n,e){let t=this||{};return function(){let r=arguments;function o(l,a){let i=Object.assign({},l),_=i.className||o.className;return t.p=Object.assign({theme:G&&G()},i),t.o=/\s*go[0-9]+/g.test(_),i.className=$.apply(t,r)+(_?" "+_:""),e&&(i.ref=a),B(i.as||n,i)}return e?e(o):o}}((function(n){return p("div",{className:n.className},p("div",{class:"mastercard"},p("div",{class:"mastercard__part red"}),p("div",{class:"mastercard__part orange"}),p("div",{class:"mastercard__copy"},p("span",null,"mastercard"))))}))(Z||(Z=J(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  height: 100vh;\n  background-color: ",';\n  font-family: "Poppins", sans-serif;\n  color: ',";\n  letter-spacing: 0.1em;\n\n  & > .mastercard {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: translateX(60px);\n    animation: mastercard "," "," ",";\n    animation-fill-mode: forwards;\n    & > .mastercard__part {\n      will-change: transform;\n      width: ","px;\n      height: ","px;\n      border-radius: 50%;\n      // 実行の最後のキーフレームで設定された計算値を保持\n      animation-fill-mode: forwards;\n\n      &.red {\n        background-color: ",";\n        transform: translateX(","px);\n        animation: red 1s 1s ",";\n      }\n\n      &.orange {\n        background-color: ",";\n        transform: translateX(","px);\n        mix-blend-mode: color-dodge;\n        animation: orange 1s 1s ",";\n      }\n    }\n\n    & > .mastercard__copy {\n      overflow: hidden;\n      padding-left: 0.2em;\n\n      & > span {\n        display: inline-block;\n        transform: translateX(-100%);\n        opacity: 0;\n        will-change: transform, opacity;\n        animation: copy "," "," ",";\n        font-size: 16px;\n      }\n    }\n\n    & > .mastercard__part.red,\n    & > .mastercard__part.orange,\n    & > .mastercard__copy > span {\n      animation-fill-mode: forwards;\n    }\n  }\n\n  // styled の中に書いちゃえばビルトインのstyledが不要になる.\n  @keyframes red {\n    to {\n      transform: translate(","px);\n    }\n  }\n\n  @keyframes orange {\n    to {\n      transform: translate(","px);\n    }\n  }\n\n  @keyframes mastercard {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes copy {\n    to {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  height: 100vh;\n  background-color: ",';\n  font-family: "Poppins", sans-serif;\n  color: ',";\n  letter-spacing: 0.1em;\n\n  & > .mastercard {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: translateX(60px);\n    animation: mastercard "," "," ",";\n    animation-fill-mode: forwards;\n    & > .mastercard__part {\n      will-change: transform;\n      width: ","px;\n      height: ","px;\n      border-radius: 50%;\n      // 実行の最後のキーフレームで設定された計算値を保持\n      animation-fill-mode: forwards;\n\n      &.red {\n        background-color: ",";\n        transform: translateX(","px);\n        animation: red 1s 1s ",";\n      }\n\n      &.orange {\n        background-color: ",";\n        transform: translateX(","px);\n        mix-blend-mode: color-dodge;\n        animation: orange 1s 1s ",";\n      }\n    }\n\n    & > .mastercard__copy {\n      overflow: hidden;\n      padding-left: 0.2em;\n\n      & > span {\n        display: inline-block;\n        transform: translateX(-100%);\n        opacity: 0;\n        will-change: transform, opacity;\n        animation: copy "," "," ",";\n        font-size: 16px;\n      }\n    }\n\n    & > .mastercard__part.red,\n    & > .mastercard__part.orange,\n    & > .mastercard__copy > span {\n      animation-fill-mode: forwards;\n    }\n  }\n\n  // styled の中に書いちゃえばビルトインのstyledが不要になる.\n  @keyframes red {\n    to {\n      transform: translate(","px);\n    }\n  }\n\n  @keyframes orange {\n    to {\n      transform: translate(","px);\n    }\n  }\n\n  @keyframes mastercard {\n    to {\n      transform: translateX(0);\n    }\n  }\n\n  @keyframes copy {\n    to {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n"])),"#1d1d1b","#f5f2ed","1.5s","1.666s",K,25,25,"#e40019",12.5,K,function(n,e){var t=!1;"#"==n[0]&&(n=n.slice(1),t=!0);var r=parseInt(n,16),o=(r>>16)+e;o>255?o=255:o<0&&(o=0);var l=(r>>8&255)+e;l>255?l=255:l<0&&(l=0);var a=(255&r)+e;return a>255?a=255:a<0&&(a=0),(t?"#":"")+(a|l<<8|o<<16).toString(16)}("#f39019",10),-12.5,K,"1.5s","1.666s",K,25/6,-25/6),Y=function(){return p(Q,null)},nn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};!function(n,e,t){W.p=e,B=n,G=t}(p),V(q||(q=nn(["\n  *,\n  *:after,\n  *:before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    box-sizing: border-box;\n  }\n"],["\n  *,\n  *:after,\n  *:before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    box-sizing: border-box;\n  }\n"]))),z(p(Y,null),document.body)}]);
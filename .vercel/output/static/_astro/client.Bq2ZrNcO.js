const ae="modulepreload",fe=function(t){return"/"+t},K={},pe=function(e,_,l){let o=Promise.resolve();if(_&&_.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=r?.nonce||r?.getAttribute("nonce");o=Promise.all(_.map(c=>{if(c=fe(c),c in K)return;K[c]=!0;const u=c.endsWith(".css"),i=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${i}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":ae,u||(f.as="script",f.crossOrigin=""),f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),u)return new Promise((n,h)=>{f.addEventListener("load",n),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};var R,d,te,de,S,Q,_e,H,V,O,W,E={},ne=[],he=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function w(t,e){for(var _ in e)t[_]=e[_];return t}function oe(t){var e=t.parentNode;e&&e.removeChild(t)}function C(t,e,_){var l,o,r,s={};for(r in e)r=="key"?l=e[r]:r=="ref"?o=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?R.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)s[r]===void 0&&(s[r]=t.defaultProps[r]);return N(t,s,l,o,null)}function N(t,e,_,l,o){var r={type:t,props:e,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++te,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(r),r}function A(t){return t.children}function D(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?P(t):null}function re(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return re(t)}}function X(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!I.__r++||Q!==d.debounceRendering)&&((Q=d.debounceRendering)||_e)(I)}function I(){var t,e,_,l,o,r,s,c;for(S.sort(H);t=S.shift();)t.__d&&(e=S.length,l=void 0,r=(o=(_=t).__v).__e,s=[],c=[],_.__P&&((l=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(l),z(_.__P,l,o,_.__n,_.__P.namespaceURI,32&o.__u?[r]:null,s,r??P(o),!!(32&o.__u),c),l.__v=o.__v,l.__.__k[l.__i]=l,se(s,l,c),l.__e!=r&&re(l)),S.length>e&&S.sort(H));I.__r=0}function le(t,e,_,l,o,r,s,c,u,i,f){var n,h,a,v,k,y=l&&l.__k||ne,p=e.length;for(_.__d=u,ve(_,e,y),u=_.__d,n=0;n<p;n++)(a=_.__k[n])!=null&&typeof a!="boolean"&&typeof a!="function"&&(h=a.__i===-1?E:y[a.__i]||E,a.__i=n,z(t,a,h,o,r,s,c,u,i,f),v=a.__e,a.ref&&h.ref!=a.ref&&(h.ref&&J(h.ref,null,a),f.push(a.ref,a.__c||v,a)),k==null&&v!=null&&(k=v),65536&a.__u||h.__k===a.__k?(u&&!u.isConnected&&(u=P(h)),u=ie(a,u,t)):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:v&&(u=v.nextSibling),a.__d=void 0,a.__u&=-196609);_.__d=u,_.__e=k}function ve(t,e,_){var l,o,r,s,c,u=e.length,i=_.length,f=i,n=0;for(t.__k=[],l=0;l<u;l++)s=l+n,(o=t.__k[l]=(o=e[l])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,null):q(o)?N(A,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,c=ye(o,_,s,f),o.__i=c,r=null,c!==-1&&(f--,(r=_[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):c!==s&&(c===s+1?n++:c>s?f>u-s?n+=c-s:n--:c<s?c==s-1&&(n=c-s):n=0,c!==l+n&&(o.__u|=65536))):(r=_[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=P(r)),B(r,r,!1),_[s]=null,f--);if(f)for(l=0;l<i;l++)(r=_[l])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=P(r)),B(r,r))}function ie(t,e,_){var l,o;if(typeof t.type=="function"){for(l=t.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=t,e=ie(l[o],e,_));return e}t.__e!=e&&(_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ye(t,e,_,l){var o=t.key,r=t.type,s=_-1,c=_+1,u=e[_];if(u===null||u&&o==u.key&&r===u.type&&!(131072&u.__u))return _;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||c<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&o==u.key&&r===u.type)return s;s--}if(c<e.length){if((u=e[c])&&!(131072&u.__u)&&o==u.key&&r===u.type)return c;c++}}return-1}function Y(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||he.test(e)?_:_+"px"}function T(t,e,_,l,o){var r;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)_&&e in _||Y(t.style,e,"");if(_)for(e in _)l&&_[e]===l[e]||Y(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=_,_?l?_.u=l.u:(_.u=V,t.addEventListener(e,r?W:O,r)):t.removeEventListener(e,r?W:O,r);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,_))}}function Z(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=V++;else if(e.t<_.u)return;return _(d.event?d.event(e):e)}}}function z(t,e,_,l,o,r,s,c,u,i){var f,n,h,a,v,k,y,p,g,b,L,x,G,M,$,m=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(u=!!(32&_.__u),r=[c=e.__e=_.__e]),(f=d.__b)&&f(e);e:if(typeof m=="function")try{if(p=e.props,g=(f=m.contextType)&&l[f.__c],b=f?g?g.props.value:f.__:l,_.__c?y=(n=e.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(p,b):(e.__c=n=new D(p,b),n.constructor=m,n.render=me),g&&g.sub(n),n.props=p,n.state||(n.state={}),n.context=b,n.__n=l,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,m.getDerivedStateFromProps(p,n.__s))),a=n.props,v=n.state,n.__v=e,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&p!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(p,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(p,n.__s,b)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(n.props=p,n.state=n.__s,n.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(U){U&&(U.__=e)}),L=0;L<n._sb.length;L++)n.__h.push(n._sb[L]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(p,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,v,k)})}if(n.context=b,n.props=p,n.__P=t,n.__e=!1,x=d.__r,G=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(e),f=n.render(n.props,n.state,n.context),M=0;M<n._sb.length;M++)n.__h.push(n._sb[M]);n._sb=[]}else do n.__d=!1,x&&x(e),f=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++G<25);n.state=n.__s,n.getChildContext!=null&&(l=w(w({},l),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(k=n.getSnapshotBeforeUpdate(a,v)),le(t,q($=f!=null&&f.type===A&&f.key==null?f.props.children:f)?$:[$],e,_,l,o,r,s,c,u,i),n.base=e.__e,e.__u&=-161,n.__h.length&&s.push(n),y&&(n.__E=n.__=null)}catch(U){e.__v=null,u||r!=null?(e.__e=c,e.__u|=u?160:32,r[r.indexOf(c)]=null):(e.__e=_.__e,e.__k=_.__k),d.__e(U,e,_)}else r==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=ge(_.__e,e,_,l,o,r,s,u,i);(f=d.diffed)&&f(e)}function se(t,e,_){e.__d=void 0;for(var l=0;l<_.length;l++)J(_[l],_[++l],_[++l]);d.__c&&d.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(r){r.call(o)})}catch(r){d.__e(r,o.__v)}})}function ge(t,e,_,l,o,r,s,c,u){var i,f,n,h,a,v,k,y=_.props,p=e.props,g=e.type;if(g==="svg"?o="http://www.w3.org/2000/svg":g==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(i=0;i<r.length;i++)if((a=r[i])&&"setAttribute"in a==!!g&&(g?a.localName===g:a.nodeType===3)){t=a,r[i]=null;break}}if(t==null){if(g===null)return document.createTextNode(p);t=document.createElementNS(o,g,p.is&&p),r=null,c=!1}if(g===null)y===p||c&&t.data===p||(t.data=p);else{if(r=r&&R.call(t.childNodes),y=_.props||E,!c&&r!=null)for(y={},i=0;i<t.attributes.length;i++)y[(a=t.attributes[i]).name]=a.value;for(i in y)if(a=y[i],i!="children"){if(i=="dangerouslySetInnerHTML")n=a;else if(i!=="key"&&!(i in p)){if(i=="value"&&"defaultValue"in p||i=="checked"&&"defaultChecked"in p)continue;T(t,i,null,a,o)}}for(i in p)a=p[i],i=="children"?h=a:i=="dangerouslySetInnerHTML"?f=a:i=="value"?v=a:i=="checked"?k=a:i==="key"||c&&typeof a!="function"||y[i]===a||T(t,i,a,y[i],o);if(f)c||n&&(f.__html===n.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(n&&(t.innerHTML=""),le(t,q(h)?h:[h],e,_,l,g==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,s,r?r[0]:_.__k&&P(_,0),c,u),r!=null)for(i=r.length;i--;)r[i]!=null&&oe(r[i]);c||(i="value",v!==void 0&&(v!==t[i]||g==="progress"&&!v||g==="option"&&v!==y[i])&&T(t,i,v,y[i],o),i="checked",k!==void 0&&k!==t[i]&&T(t,i,k,y[i],o))}return t}function J(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(l){d.__e(l,_)}}function B(t,e,_){var l,o;if(d.unmount&&d.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||J(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){d.__e(r,e)}l.base=l.__P=null}if(l=t.__k)for(o=0;o<l.length;o++)l[o]&&B(l[o],e,_||typeof t.type!="function");_||t.__e==null||oe(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function me(t,e,_){return this.constructor(t,_)}function j(t,e,_){var l,o,r,s;d.__&&d.__(t,e),o=(l=typeof _=="function")?null:_&&_.__k||e.__k,r=[],s=[],z(e,t=(!l&&_||e).__k=C(A,null,[t]),o||E,E,e.namespaceURI,!l&&_?[_]:o?null:e.firstChild?R.call(e.childNodes):null,r,!l&&_?_:o?o.__e:e.firstChild,l,s),se(r,t,s)}function ce(t,e){j(t,e,ce)}R=ne.slice,d={__e:function(t,e,_,l){for(var o,r,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,l||{}),s=o.__d),s)return o.__E=o}catch(c){t=c}throw t}},te=0,de=function(t){return t!=null&&t.constructor==null},D.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},_),this.props)),t&&w(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),X(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),X(this))},D.prototype.render=A,S=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(t,e){return t.__v.__b-e.__v.__b},I.__r=0,V=0,O=Z(!1),W=Z(!0);const ue=({value:t,name:e,hydrate:_=!0})=>t?C(_?"astro-slot":"astro-static-slot",{name:e,dangerouslySetInnerHTML:{__html:t}}):null;ue.shouldComponentUpdate=()=>!1;var ee=ue;const F=new Map;var ke=t=>async(e,_,{default:l,...o},{client:r})=>{if(!t.hasAttribute("ssr"))return;for(const[u,i]of Object.entries(o))_[u]=C(ee,{value:i,name:u});if(t.dataset.preactSignals){const{signal:u}=await pe(()=>import("./signals.module.BTeT1nGY.js"),[]);let i=JSON.parse(t.dataset.preactSignals);for(const[f,n]of Object.entries(i)){if(!F.has(n)){const h=u(_[f]);F.set(n,h)}_[f]=F.get(n)}}(r!=="only"?ce:j)(C(e,_,l!=null?C(ee,{value:l}):l),t),t.addEventListener("astro:unmount",()=>j(null,t),{once:!0})};export{D as b,ke as c,d as l,de as t};
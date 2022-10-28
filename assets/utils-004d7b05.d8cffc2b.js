var a=Object.defineProperty;var n=(e,t)=>a(e,"name",{value:t,configurable:!0});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const c=n(e=>!!e.shadowRoot&&!!e.attachShadow,"hasShadowDom"),d=n(e=>{let t=document.styleSheets[0];if(!t){const s=document.createElement("style");document.head.appendChild(s),t=document.styleSheets[0],document.head.removeChild(s)}function o(){try{return/^:/.test(e)||(e=":"+e),t.insertRule("html"+e+"{}",0),t.deleteRule(0),!0}catch{return!1}}return n(o,"testPseudo"),o()},"isPseudoClassSupported");function h(e,t,o){const s=t+"Legacy",r=[];return typeof e[s]<"u"&&r.push(e[s].emit(o)),r.push(e[t].emit(o)),r}n(h,"emitEvent");function i(e,t){let o=e.target;const s=o.shadowRoot!=null,r=s?e.composedPath():[];do{if(o===t)return!1;s?o=r.shift():o=o.parentNode}while(o);return!0}n(i,"isClickOutside");const l=n(e=>e==null?!1:e.nodeName.toUpperCase().substring(0,10)==="SCALE-ICON","isScaleIcon");export{i as a,d as b,h as e,c as h,l as i};
//# sourceMappingURL=utils-004d7b05.d8cffc2b.js.map

var s=Object.defineProperty;var c=(l,n)=>s(l,"name",{value:n,configurable:!0});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const d=c((l=[],n,r)=>l.reduce((t,e)=>e.id===n?{selected:e,parent:r}:e.children&&e.children.length&&!!d(e.children,n,e).selected?d(e.children,n,e):t,{selected:null,parent:null}),"findSelected"),h=c((l,n)=>{let r=d(l,n);for(;r.parent;)r=d(l,r.parent.id);return r.selected},"findRootNode");export{d as a,h as f};
//# sourceMappingURL=menu-utils-28fccc0d.314ba7d8.js.map

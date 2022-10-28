var l=Object.defineProperty;var a=(n,t)=>l(n,"name",{value:t,configurable:!0});/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const s={beta:"\u03B2",WIP:"\u{1F6E0} WIP",deprecated:"\u{1F635} Deprecation notice",warning:"Warning"},r={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:`This component is currently under development and is prone to change. Please wait for its release.
It will be available in Storybook once it's finished and documented.`,deprecated:"This component is deprecated."};function p({tag:n="WIP",extraMessage:t=null,message:o=null,source:e=null,type:i="info"}){const c=console[i];c(`%c scale \u2013 ${s[n]} `,"background: #E20074; color: #FFF; border-radius: 4px",`

${o||r[n]} ${t?`
`+t:""}
    `,e!==null?`
source:`:"",typeof e=="object"?e:`${e}`,e!==null?`

`:"")}a(p,"statusNote");export{p as s};
//# sourceMappingURL=status-note-0089e9c9.0d9688b1.js.map

var l=Object.defineProperty;var r=(t,e)=>l(t,"name",{value:e,configurable:!0});import{r as n,c as o,h as i,H as h,g as d}from"./preview.f169cf2b.js";import{c}from"./index-713f92a5.4aea8bbf.js";import{e as g}from"./utils-004d7b05.d8cffc2b.js";import{s as u}from"./status-note-0089e9c9.0d9688b1.js";import"./index.0b284fb1.js";import"./iframe.b9fa3d0f.js";import"./es.map.constructor.67ab86e5.js";import"./decorateStory.77a46e65.js";import"./vue.esm-bundler.be6c6897.js";const p=`:host{--border-color:var(--telekom-color-ui-border-standard);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border:var(--telekom-spacing-unit-x025) solid var(--border-color);--border-disabled:var(--telekom-spacing-unit-x025) solid
    var(--border-color-disabled);--radius:var(--telekom-radius-standard)}.toggle-group--inline{display:inline-flex}.toggle-group--block{display:flex}.toggle-group--block ::slotted(*){flex-grow:1}`,b=r(class{constructor(t){n(this,t),this.scaleChange=o(this,"scale-change",7),this.scaleChangeLegacy=o(this,"scaleChange",7),this.position=0,this.slottedButtons=0,this.status=[],this.size="regular",this.background="white",this.fullWidth=!1,this.disabled=!1,this.hideBorder=!1,this.singleSelect=!1,this.ariaLabelTranslation="toggle button group with $slottedButtons buttons",this.colorScheme="color",this.variant="color"}scaleClickHandler(t){let e;this.singleSelect?t.detail.selected?e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign(Object.assign({},s),{selected:!1})):e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign({},s)):e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign({},s)),this.setNewState(e)}handlePropsChange(){this.propagatePropsToChildren()}componentDidLoad(){const t=[],e=this.getAllToggleButtons();this.slottedButtons=e.length,e.forEach(s=>{this.position++,t.push({id:s.getAttribute("toggle-button-id"),selected:s.hasAttribute("selected")}),s.setAttribute("position",this.position.toString()),s.setAttribute("aria-description-translation","$position $selected")}),this.propagatePropsToChildren(),this.position=0,this.status=t}getAllToggleButtons(){return Array.from(this.hostElement.querySelectorAll("scale-toggle-button"))}propagatePropsToChildren(){this.getAllToggleButtons().forEach(t=>{t.setAttribute("size",this.size),t.setAttribute("background",this.background),t.setAttribute("disabled",this.disabled&&"disabled"),t.setAttribute("color-scheme",this.variant!=="color"?this.variant:this.colorScheme),t.setAttribute("variant",this.colorScheme!=="color"?this.colorScheme:this.variant),t.setAttribute("hide-border",this.hideBorder?"true":"false")})}getAriaLabelTranslation(){return this.ariaLabelTranslation.replace(/\$slottedButtons/g,`${this.slottedButtons}`)}componentDidRender(){this.fullWidth&&this.setButtonWidth(),this.setChildrenCorners(),this.colorScheme!=="color"&&u({tag:"deprecated",message:'Property "colorScheme" is deprecated. Please use the "variant" property!',type:"warn",source:this.hostElement})}setNewState(t){Array.from(this.hostElement.querySelectorAll("scale-toggle-button")).forEach((s,a)=>{s.setAttribute("selected",t[a].selected?"true":"false")}),this.status=t,g(this,"scaleChange",this.status)}setButtonWidth(){Array.from(this.hostElement.children).forEach(t=>{const e=t.shadowRoot.querySelector("button");e.style.width="100%"})}setChildrenCorners(){const t=Array.from(this.hostElement.children);if(t.length===1)t[0].setAttribute("radius","all");else for(let e=0;e<t.length;e++)e===0&&t[e].setAttribute("radius","left"),e>0&&e<t.length-1&&t[e].setAttribute("radius","neither"),e===t.length-1&&t[e].setAttribute("radius","right")}render(){return i(h,null,this.styles&&i("style",null,this.styles),i("div",{class:this.getCssClassMap(),part:this.getBasePartMap(),"aria-label":this.getAriaLabelTranslation(),role:"group"},i("slot",null)))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const e=t==="basePart"?"":"toggle-group--";return c("toggle-group",this.fullWidth&&`${e}block`,!this.fullWidth&&`${e}inline`,this.disabled&&`${e}disabled`)}get hostElement(){return d(this)}static get watchers(){return{background:["handlePropsChange"],disabled:["handlePropsChange"],hideBorder:["handlePropsChange"],size:["handlePropsChange"],variant:["handlePropsChange"]}}},"ToggleGroup");b.style=p;export{b as scale_toggle_group};
//# sourceMappingURL=scale-toggle-group.entry.c3bdc06f.js.map
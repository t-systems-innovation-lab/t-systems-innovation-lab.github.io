var i=Object.defineProperty;var s=(e,t)=>i(e,"name",{value:t,configurable:!0});import{r as l,h as o,H as d,g as c}from"./preview.d9401ce4.js";import{c as n}from"./index-713f92a5.4aea8bbf.js";import{i as h}from"./utils-004d7b05.d8cffc2b.js";import{s as b}from"./status-note-0089e9c9.0d9688b1.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const p=`:host{outline:none;--font-family:var(--telekom-typography-font-family-sans, TeleNeoWeb);--font-weight:var(--telekom-typography-font-weight-bold);--height-small:2rem;--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)
    var(--telekom-color-functional-focus);--spacing-right-slotted:var(--telekom-spacing-unit-x2);--color-disabled:var(--telekom-color-text-and-icon-disabled);--radius:var(--telekom-radius-standard)}.tab-header{color:var(--color);cursor:pointer;display:inline-flex;outline:none;position:relative;box-sizing:border-box;align-items:center;padding-left:0;height:var(--tab-height);margin-right:var(--tab-spacing);padding-right:var(--tab-spacing);font-family:var(--font-family);font-size:calc(var(--tab-height) / 2);font-weight:var(--font-weight);border-radius:var(--tab-radius)}.tab-header--small{--tab-height:var(--height-small)}.tab-header--disabled{cursor:auto;color:var(--color-disabled)}.tab-header--disabled:after{cursor:auto;background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header--disabled:active{color:var(--color-disabled)}.tab-header--disabled:hover{color:var(--color-disabled) !important}.tab-header--disabled:hover:after{background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header:after{left:0;right:0;width:100%;bottom:0;content:'';display:block;position:absolute;height:var(--tab-border-size);background-color:var(--tab-border-color)}.tab-header:before{left:0;right:0;width:100%;bottom:0;height:0;content:'';display:block;z-index:1;position:absolute;border-top:1px solid transparent}.tab-header:hover{color:var(--color-hover)}.tab-header:hover:after{background-color:var(--color-hover)}.tab-header:active{color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header ::slotted(*){margin-right:var(--spacing-right-slotted)}.tab-header--has-focus{box-shadow:var(--box-shadow-focus)}.tab-header--selected{color:var(--color-selected)}.tab-header--selected:after{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);height:var(--tab-border-size-selected);background-color:var(--color-selected)}.tab-header--selected:before{border-top:var(--tab-border-size-selected) solid transparent}`,g=24,m=16;let u=0;const f=s(class{constructor(e){l(this,e),this.generatedId=u++,this.disabled=!1,this.small=!1,this.size="large",this.hasFocus=!1}selectedChanged(e){this.disabled||(e===!0&&this.hostElement.focus(),this.updateSlottedIcon())}componentDidLoad(){this.setChildrenIconSize()}componentDidRender(){this.small!==!1&&b({tag:"deprecated",message:'Property "small" is deprecated. Please use the "size" property!',type:"warn",source:this.hostElement})}updateSlottedIcon(){const e=this.container.querySelector("slot");if(e===null)return;const t=Array.from(e.assignedNodes()).filter(r=>r.nodeType===1).filter(r=>r.nodeName.toUpperCase().indexOf("ICON")>-1);if(t.length===0)return;const a=this.selected?"setAttribute":"removeAttribute";t.forEach(r=>r[a]("selected",""))}setChildrenIconSize(){Array.from(this.hostElement.children).filter(h).forEach(t=>{t.size===g&&(t.size=m)})}render(){return o(d,{id:`scale-tab-header-${this.generatedId}`,role:this.disabled?!1:"tab","aria-selected":this.selected?"true":"false",tabindex:this.disabled?!1:this.selected?"0":"-1",onFocus:()=>this.hasFocus=!0,onBlur:()=>this.hasFocus=!1},this.styles&&o("style",null,this.styles),o("span",{part:this.getBasePartMap(),ref:e=>this.container=e,class:this.getCssClassMap()},o("slot",null)))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(e){const t="tab-header",a=e==="basePart"?"":`${t}--`;return n(t,this.selected&&`${a}selected`,(this.size==="small"||this.small)&&`${a}small`,this.hasFocus&&`${a}has-focus`,this.disabled&&`${a}disabled`)}get hostElement(){return c(this)}static get watchers(){return{selected:["selectedChanged"]}}},"TabHeader");f.style=p;export{f as scale_tab_header};
//# sourceMappingURL=scale-tab-header.entry.651b750f.js.map

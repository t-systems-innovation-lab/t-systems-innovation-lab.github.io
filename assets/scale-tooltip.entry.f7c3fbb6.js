var c=Object.defineProperty;var h=(t,e)=>c(t,"name",{value:e,configurable:!0});import{r as g,c as o,h as i,H as m,g as f}from"./preview.2f1330a9.js";import{c as v,o as w,f as E,a as b,s as y}from"./floating-ui.dom.esm-07191aca.7500248e.js";import{a as k}from"./utils-004d7b05.d8cffc2b.js";import{s}from"./status-note-0089e9c9.0d9688b1.js";import"./index.97c0ef98.js";import"./iframe.755b6b84.js";import"./es.map.constructor.a52a7480.js";import"./decorateStory.7f282716.js";import"./vue.esm-bundler.be6c6897.js";const T=":host{--radius:var(--telekom-radius-small);--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--font-weight:var(--telekom-typography-font-weight-regular);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing:var(--telekom-spacing-unit-x05) var(--telekom-spacing-unit-x2);--arrow-size:12px;--transition-delay-hide:var(--telekom-motion-duration-instant);--transition-duration-hide:var(--telekom-motion-duration-immediate);--transition-timing-function-hide:var(--telekom-motion-easing-standard);--transition-duration-show:var(--telekom-motion-duration-immediate);--transition-timing-function-show:var(--telekom-motion-easing-standard);--z-index:var(--scl-z-index-70);display:contents;position:relative;box-sizing:border-box}[part='tooltip']{position:absolute;z-index:var(--z-index);top:0;left:0;background:var(--background);color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);padding:var(--spacing);border-radius:var(--radius);transition-property:opacity;transition-duration:var(--transition-duration-show);transition-timing-function:var(--transition-timing-function-show)}[part='tooltip'][aria-hidden='true']{opacity:0;transition-delay:var(--transition-delay-hide);transition-duration:var(--transition-duration-hide);transition-timing-function:var(--transition-timing-function-hide);pointer-events:none}[part='trigger']{}[part='arrow']{position:absolute;z-index:-1;background:var(--background);width:var(--arrow-size);height:var(--arrow-size);transform:rotate(45deg)}@media screen and (-ms-high-contrast: active){[part='tooltip']{border:1px solid yellow}}";let x=0;const O=h(class{constructor(t){g(this,t),this.tooltipBeforeShow=o(this,"scale-before-show",7),this.tooltipShow=o(this,"scale-show",7),this.tooltipBeforeHide=o(this,"scale-before-hide",7),this.tooltipHide=o(this,"scale-hide",7),this.componentId=`tooltip-${++x}`,this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.arrowOffset=-4,this.arrowPadding=8,this.opened=!1,this.trigger="hover focus",this.flip=!0,this.mouseOverTooltip=!1,this.update=async()=>{if(this.disabled||this.triggerEl==null)return;const{x:e,y:r,placement:l,middlewareData:d}=await v(this.triggerEl,this.tooltipEl,{placement:this.placement,middleware:[w(this.distance),...this.flip?[E()]:[],b({element:this.arrowEl,padding:this.arrowPadding}),y({crossAxis:!0})]});Object.assign(this.tooltipEl.style,{left:`${e}px`,top:`${r}px`});const{x:n,y:a}=d.arrow,[p]=l.split("-"),u={top:"bottom",right:"left",bottom:"top",left:"right"}[p];Object.assign(this.arrowEl.style,{left:n!=null?`${n}px`:"",top:a!=null?`${a}px`:"",right:"",bottom:"",[u]:`${this.arrowOffset}px`})},this.handleBlur=()=>{this.hasTrigger("focus")&&this.hideTooltip()},this.handleClick=()=>{this.hasTrigger("click")&&(this.opened&&!this.hasTrigger("focus")?this.hideTooltip():this.showTooltip())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.showTooltip()},this.handleKeyDown=e=>{this.opened&&e.key==="Escape"&&(e.stopPropagation(),this.hideTooltip())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&this.showTooltip()},this.handleMouseOut=()=>{this.mouseOverTooltip||this.hasTrigger("hover")&&this.hideTooltip()},this.handleTooltipMouseOver=()=>{this.mouseOverTooltip=!0},this.handleTooltipBlur=()=>{this.mouseOverTooltip=!1,this.handleMouseOut()},this.hasTrigger=e=>this.trigger.split(" ").includes(e)}handleOpenChange(){this.opened?this.showTooltip():this.hideTooltip()}connectedCallback(){s({source:this.hostElement,tag:"beta"}),this.hostElement.hasAttribute("open")&&s({tag:"deprecated",message:"The `open` prop is deprecated in favor of `opened`",source:this.hostElement});const t=Array.from(this.hostElement.children).filter(e=>!e.hasAttribute("slot"));if(t.length===0){s({tag:"warning",message:"An element is required, if using text, wrap it in a `<span>`",type:"warn",source:this.hostElement});return}this.triggerEl=t[0],this.triggerEl.addEventListener("blur",this.handleBlur,!0),this.triggerEl.addEventListener("click",this.handleClick,!0),this.triggerEl.addEventListener("focus",this.handleFocus,!0),this.triggerEl.addEventListener("mouseover",this.handleMouseOver,!0),this.triggerEl.addEventListener("mouseout",this.handleMouseOut,!0)}disconnectedCallback(){this.triggerEl.removeEventListener("blur",this.handleBlur,!0),this.triggerEl.removeEventListener("click",this.handleClick,!0),this.triggerEl.removeEventListener("focus",this.handleFocus,!0),this.triggerEl.removeEventListener("mouseover",this.handleMouseOver,!0),this.triggerEl.removeEventListener("mouseout",this.handleMouseOut,!0)}handleOutsideClick(t){k(t,this.hostElement)&&this.hideTooltip()}componentDidUpdate(){this.update(),this.opened&&this.showTooltip()}componentDidRender(){this.update()}async showTooltip(){if(this.opened)return;if(this.tooltipBeforeShow.emit().defaultPrevented){this.opened=!1;return}this.opened=!0,this.update()}async hideTooltip(){if(!this.opened)return;if(this.tooltipBeforeHide.emit().defaultPrevented){this.opened=!0;return}this.opened=!1,this.update()}render(){return i(m,{onKeyDown:this.handleKeyDown},this.styles&&i("style",null,this.styles),i("span",{part:"trigger","aria-describedby":this.componentId},i("slot",null)),!this.disabled&&i("div",{part:"tooltip",role:"tooltip","aria-hidden":this.opened?"false":"true",ref:t=>this.tooltipEl=t,id:this.componentId,tabIndex:0,onMouseOver:this.handleTooltipMouseOver,onMouseLeave:this.handleTooltipBlur},i("slot",{name:"content"},this.content),i("div",{part:"arrow",ref:t=>this.arrowEl=t})))}get hostElement(){return f(this)}static get watchers(){return{opened:["handleOpenChange"]}}},"Tooltip");O.style=T;export{O as scale_tooltip};
//# sourceMappingURL=scale-tooltip.entry.f7c3fbb6.js.map

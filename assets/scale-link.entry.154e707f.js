var t=Object.defineProperty;var i=(o,r)=>t(o,"name",{value:r,configurable:!0});import{r as n,h as e,H as l}from"./preview.54ca6686.js";import"./index.8c31b358.js";import"./iframe.336726a8.js";import"./es.map.constructor.c7f8c579.js";import"./decorateStory.0846b9b1.js";import"./vue.esm-bundler.be6c6897.js";const a=`:host{--font-weight:var(--telekom-typography-font-weight-medium);--spacing-x-icon:var(--telekom-spacing-unit-x1);--line-offset:0.0625em;--color:var(--telekom-color-text-and-icon-link-standard);--color-line-initial:var(--telekom-color-functional-interaction-subtle);--line-thickness-initial:var(--telekom-line-weight-standard);--color-visited:var(--telekom-color-text-and-icon-link-visited);--color-line-visited:currentColor;--line-thickness-visited:var(--line-thickness-initial);--color-hover:var(--telekom-color-text-and-icon-link-hovered);--color-line-hover:var(--telekom-color-functional-interaction-hovered);--line-thickness-hover:var(--line-thickness-initial);--color-focus:var(--telekom-color-text-and-icon-link-standard);--color-line-focus:var(--telekom-color-text-and-icon-link-standard);--line-thickness-focus:var(--telekom-line-weight-bold);--color-active:var(--telekom-color-text-and-icon-link-active);--color-line-active:var(--telekom-color-functional-interaction-pressed);--line-thickness-active:var(--line-thickness-initial);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-line-disabled:var(--telekom-color-ui-border-disabled);--line-thickness-disabled:var(--line-thickness-initial)}:host-context(scale-tooltip){--color:currentColor;--color-line-initial:currentColor;--color-visited:currentColor;--color-line-visited:currentColor;--color-hover:currentColor;--color-line-hover:currentColor;--color-focus:currentColor;--color-line-focus:currentColor;--color-active:currentColor;--color-line-active:currentColor}:host{display:inline;margin-bottom:calc(var(--line-offset) + var(--line-thickness-initial));--anchor-color:var(--color);--line-color:var(--color);--line-thickness:var(--line-thickness-initial)}[part='anchor']{cursor:pointer;outline:none;font-weight:var(--font-weight);color:var(--anchor-color);position:relative;display:inline-flex;text-decoration:underline;text-underline-offset:0.1875em;text-underline-position:from-font;text-decoration-thickness:var(
    --line-thickness,
    var(--line-thickness-initial)
  );text-decoration-color:var(--line-color);transition:text-decoration var(--telekom-motion-duration-transition)}[part='anchor']{display:inline-flex;align-items:center}[part='content']{position:relative}slot[name='icon']::slotted(*){position:relative;margin-left:var(--spacing-x-icon)}:host(.reverse) [part='anchor']{flex-direction:row-reverse}:host(.reverse) slot[name='icon']::slotted(*){margin-left:auto;margin-right:var(--spacing-x-icon)}:host(.no-underline){--color-line-initial:transparent;--color-line-visited:transparent;--line-color:transparent}[part='anchor']:hover,[part='anchor']:focus,[part='anchor']:active{transition:text-decoration var(--telekom-motion-duration-transition);text-decoration:underline}[part='anchor']:visited{--anchor-color:var(--color-visited);--line-color:var(--color-line-visited);--line-thickness:var(--line-thickness-visited)}[part='anchor']:hover{--anchor-color:var(--color-hover);--line-color:var(--color-line-hover);--line-thickness:var(--line-thickness-hover)}[part='anchor']:focus{--anchor-color:var(--color-focus);--line-color:var(--color-line-focus);--line-thickness:var(--line-thickness-focus)}[part='anchor']:active{--anchor-color:var(--color-active);--line-color:var(--color-line-active);--line-thickness:var(--line-thickness-active)}:host(.disabled){cursor:not-allowed}:host(.disabled) [part='anchor'],:host(.disabled) [part='anchor']:visited,:host(.disabled) [part='anchor']:hover,:host(.disabled) [part='anchor']:active{--anchor-color:var(--color-disabled);--line-color:var(--color-line-disabled);cursor:not-allowed;pointer-events:none}`,s=i(class{constructor(o){n(this,o),this.disabled=!1,this.omitUnderline=!1,this.iconPosition="after"}async setFocus(){this.focusableElement.focus()}getAnchorProps(){const o={href:this.href||null,tabIndex:this.disabled?-1:this.innerTabindex,"aria-disabled":this.disabled?"true":!1,download:this.download||null,hreflang:this.hreflang||null,ping:this.ping||null,referrerpolicy:this.referrerpolicy||null,rel:this.rel||null,target:this.target||null,type:this.type||null};return Object.assign({},o)}render(){return e(l,{class:{disabled:this.disabled,reverse:this.iconPosition==="before","no-underline":this.omitUnderline}},this.styles&&e("style",null,this.styles),e("a",Object.assign({part:"anchor",ref:o=>this.focusableElement=o},this.getAnchorProps()),e("div",{part:"content"},e("slot",null)),e("slot",{name:"icon"})))}},"Link");s.style=a;export{s as scale_link};
//# sourceMappingURL=scale-link.entry.154e707f.js.map
var a=Object.defineProperty;var i=(e,r)=>a(e,"name",{value:r,configurable:!0});import{r as d,h as s,H as n,g as h}from"./preview.d9401ce4.js";import{c as l}from"./index-713f92a5.4aea8bbf.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const p=":host{--spacing-left:0;--spacing-left-nested:var(--telekom-spacing-unit-x2)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}",c=i(class{constructor(e){d(this,e),this.isNested=!1,this.ordered=!1}orderedChanged(e){this.propagatePropsToChildren(e)}componentDidLoad(){this.propagatePropsToChildren(this.ordered)}connectedCallback(){this.isNested=this.el.closest("scale-list-item")!=null,this.isNested?this.el.setAttribute("slot","nested"):this.el.removeAttribute("slot")}propagatePropsToChildren(e){Array.from(this.el.children).filter(t=>t.matches("scale-list-item")).forEach((t,o)=>{t.ordered=e,t.index=o+1})}render(){const e=this.ordered?"ol":"ul";return s(n,null,this.styles&&s("style",null,this.styles),s(e,{class:this.getCssClassMap(),part:l("base",this.ordered&&"ordered",this.isNested&&"nested")},s("slot",null)))}getCssClassMap(){return l("list",this.ordered&&"list--type-ordered",this.isNested&&"list--nested")}get el(){return h(this)}static get watchers(){return{ordered:["orderedChanged"]}}},"List");c.style=p;export{c as scale_list};
//# sourceMappingURL=scale-list.entry.92291a29.js.map
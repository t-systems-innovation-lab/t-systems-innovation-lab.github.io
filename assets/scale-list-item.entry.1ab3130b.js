var o=Object.defineProperty;var r=(t,s)=>o(t,"name",{value:s,configurable:!0});import{r as n,h as e,H as a,g as l}from"./preview.d9401ce4.js";import{c as i}from"./index-713f92a5.4aea8bbf.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const d=`:host(scale-list-item){--display:block;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing-left:calc(0.25ch + var(--telekom-spacing-unit-x4));--font-size-marker-ordered:var(--telekom-typography-font-size-body);--font-weight-marker-ordered:var(--telekom-typography-font-weight-bold);--font-size-marker-ordered-nested:var(--telekom-typography-font-size-small);--line-height-marker-ordered-nested:var(
    --telekom-typography-line-spacing-standard
  );--spacing-top-marker-ordered-nested:calc(
    var(--telekom-spacing-unit-x4) - var(--telekom-spacing-unit-x3)
  );--spacing-right-no-marker:var(--telekom-spacing-unit-x2);display:var(--display)}.list-item{position:relative;font-size:var(--font-size);line-height:var(--line-height);padding-left:var(--spacing-left)}.list-item:before{content:'';position:absolute;top:0;left:0}.list-item--unordered:before{top:0.5em;border:var(--telekom-spacing-unit-x025) solid currentColor;display:block;transform:scale(0.66);background:currentColor;box-sizing:border-box;border-radius:50%;width:var(--telekom-spacing-unit-x2);height:var(--telekom-spacing-unit-x2)}.list-item--nested.list-item--unordered:before{border:var(--telekom-spacing-unit-x025) solid currentColor;background:transparent}.list-item--ordered:before{content:attr(data-index) '.';font-size:var(--font-size-marker-ordered);font-weight:var(--font-weight-marker-ordered)}.list-item--nested.list-item--ordered:before{font-size:var(--font-size-marker-ordered-nested);line-height:var(--line-height-marker-ordered-nested);padding-top:var(--spacing-top-marker-ordered-nested)}.list-item--no-marker{display:inline-flex;align-items:center;padding-left:0}.list-item--no-marker:before{display:none}.list-item--no-marker>::slotted(*){margin-right:var(--spacing-right-no-marker)}`,h=r(class{constructor(t){n(this,t),this.ordered=!1,this.marker=!0,this.hasNestedChild=!1,this.isNested=!1,this.handleSlotChange=({target:s})=>{this.hasNestedChild=s.assignedNodes().length>0,this.isNested=this.isNestedCheck()},this.isNestedCheck=()=>this.el.closest('scale-list[slot="nested"]')!=null}componentWillLoad(){this.isNested=this.isNestedCheck()}connectedCallback(){this.el.hasAttribute("role")||this.el.setAttribute("role","listitem")}render(){return e(a,null,this.styles&&e("style",null,this.styles),e("div",{class:this.getCssClassMap(),"data-index":this.index,part:i("base",this.ordered?"ordered":"unordered",this.isNested&&"nested",!this.marker&&"no-marker")},e("slot",null),e("div",{class:"list-item__nested-list",part:"nested-list",hidden:!this.hasNestedChild},e("slot",{name:"nested",onSlotchange:this.handleSlotChange}))))}getCssClassMap(){const t=this.ordered?"ordered":"unordered";return i("list-item",this.isNested&&"list-item--nested",`list-item--${t}`,!this.marker&&"list-item--no-marker")}get el(){return l(this)}},"ListItem");h.style=d;export{h as scale_list_item};
//# sourceMappingURL=scale-list-item.entry.1ab3130b.js.map

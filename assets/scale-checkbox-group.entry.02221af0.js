var p=Object.defineProperty;var r=(e,t)=>p(e,"name",{value:t,configurable:!0});import{r as u,h as a,H as b,g as x}from"./preview.2f1330a9.js";import{s as n}from"./status-note-0089e9c9.0d9688b1.js";import"./index.97c0ef98.js";import"./iframe.755b6b84.js";import"./es.map.constructor.a52a7480.js";import"./decorateStory.7f282716.js";import"./vue.esm-bundler.be6c6897.js";const m=":host,.checkbox-group{--spacing-left-container:var(--telekom-spacing-unit-x6);--spacing-left-checkbox:var(--telekom-spacing-unit-x2);--spacing-top-slotted-item:var(--telekom-spacing-unit-x1)}.checkbox-group{display:inline-flex;flex-direction:column;position:relative}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin:var(--spacing-top-slotted-item) 0}",g=r(class{constructor(e){u(this,e),this.label="",this.status="",this.invalid=!1,this.value="",this.selectText="Select all",this.unselectText="Unselect all"}handleCheckboxChange(e){const t=e.composedPath()[0],{tagName:i,checked:o}=t;i.toLowerCase()==="scale-checkbox"&&(t!==this.groupNode?this.updateParentCheckboxState():(this.updateChildrenCheckboxStates(o),this.updateParentCheckboxState()))}componentDidRender(){this.status!==""&&n({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host}),this.host.hasAttribute("aria-label")&&n({tag:"deprecated",message:'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckboxGroup" property!',type:"warn",source:this.host})}getChildNodes(){return Array.from(this.host.querySelector("fieldset").querySelectorAll("scale-checkbox"))}updateChildrenCheckboxStates(e){this.getChildNodes().filter(i=>!i.disabled).forEach(i=>{e!==void 0&&(i.checked=e,i.indeterminate=!1)})}updateParentCheckboxState(){const e=this.getChildNodes(),t=e==null?void 0:e.map(s=>s.checked),i=e==null?void 0:e.map(s=>s.indeterminate),o=e==null?void 0:e.map(s=>s.disabled),l=t.every(Boolean),c=t.some(Boolean),h=i.some(Boolean),d=o.every(Boolean);this.checked=l||c,this.indeterminate=h||c&&!l,this.disabled=d,this.actionText=l?this.unselectText:this.selectText}render(){return a(b,{class:"checkbox-group"},a("scale-checkbox",{ref:e=>this.groupNode=e,name:this.name,label:this.label,ariaLabelCheckbox:`${this.ariaLabelCheckboxGroup||this.label} - ${this.actionText}`,helperText:this.helperText,status:this.status,invalid:this.invalid,value:this.value,inputId:this.inputId,checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,part:"parent-checkbox"}),a("fieldset",{part:"fieldset"},a("legend",null,this.ariaLabelCheckboxGroup||this.label),a("slot",null)))}componentDidLoad(){this.updateParentCheckboxState()}get host(){return x(this)}},"CheckboxGroup");g.style=m;export{g as scale_checkbox_group};
//# sourceMappingURL=scale-checkbox-group.entry.02221af0.js.map

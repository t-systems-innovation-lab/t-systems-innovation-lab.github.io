var a=Object.defineProperty;var r=(e,o)=>a(e,"name",{value:o,configurable:!0});import{r as i,h as t,g as l}from"./preview.c2fe5939.js";import{c as n}from"./index-713f92a5.4aea8bbf.js";import{s}from"./status-note-0089e9c9.0d9688b1.js";import"./index.a8f64826.js";import"./iframe.73313c3a.js";import"./es.map.constructor.6a154afe.js";import"./decorateStory.0d3f57e8.js";import"./vue.esm-bundler.be6c6897.js";const p=`:host{--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label:var(--telekom-typography-font-size-body);--font-size-helper-text:var(--telekom-typography-font-size-small);--color-helper-text:var(
    --telekom-color-text-and-icon-functional-informational
  );--padding-bottom-helper-text:var(--telekom-spacing-unit-x2);--margin-top-helper-text:var(--telekom-spacing-unit-x1);--font-weight-helper-text:var(--telekom-typography-font-weight-medium);--font-size-error-helper-text:var(--telekom-typography-font-size-small);--color-error-helper-text:var(
    --telekom-color-text-and-icon-functional-danger
  );--padding-bottom-error-helper-text:var(--telekom-spacing-unit-x2);--margin-top-error-helper-text:var(--telekom-spacing-unit-x1);--font-weight-error-helper-text:var(--telekom-typography-font-weight-medium);--color-error-helper-text-hcm:var(
    --telekom-color-text-and-icon-white-standard
  );--font-size-title:var(--font-size-label);--font-weight-title:var(--telekom-typography-font-weight-medium);--padding-bottom-title:var(--telekom-spacing-unit-x1);--margin-left-title:var(--telekom-spacing-unit-x05);--margin-top-slotted-item:var(--telekom-spacing-unit-x1)}.radio-button-group{display:inline-flex;flex-direction:column;border:0}.radio-button-group__container{display:flex;flex-direction:column}.radio-button-group__helper-text{color:var(--color-helper-text);font-size:var(--font-size-helper-text);margin-top:calc(var(--margin-top-helper-text) * +1);padding-bottom:calc(var(--padding-bottom-helper-text) * -1);font-weight:var(--font-weight-helper-text)}.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text);font-size:var(--font-size-error-helper-text);margin-top:calc(var(--margin-top-error-helper-text) * +1);padding-bottom:calc(var(--padding-bottom-error-helper-text) * -1);font-weight:var(--font-weight-error-helper-text)}.radio-button-group__title-label{font-size:var(--font-size-title);font-weight:var(--font-weight-title);padding-bottom:var(--padding-bottom-title);margin-left:calc(var(--margin-left-title) * -1.5)}::slotted(*){margin-top:var(--margin-top-slotted-item)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text-hcm)}}`,h=r(class{constructor(e){i(this,e),this.label="",this.helperText="",this.status="",this.invalid=!1}componentDidRender(){this.status!==""&&s({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.hostElement})}render(){return t("fieldset",{class:"radio-button-group"},t("legend",{class:"radio-button-group__title"},t("label",{class:"radio-button-group__title-label","aria-label":this.label},this.label),this.helperText?t("div",{role:"text",class:this.getCssClassMap(),"aria-label":this.helperText},this.helperText):null),t("div",{class:"radio-button-group__container"},t("slot",null)))}getCssClassMap(){return n("radio-button-group__helper-text",(this.status==="error"||this.invalid)&&"radio-button-group__helper-text--status-error")}get hostElement(){return l(this)}},"RadioButtonGroup");h.style=p;export{h as scale_radio_button_group};
//# sourceMappingURL=scale-radio-button-group.entry.d3e2b1f9.js.map
var s=Object.defineProperty;var n=(i,o)=>s(i,"name",{value:o,configurable:!0});import{r as e,h as t,H as r,g as c}from"./preview.f169cf2b.js";import{c as l}from"./index-713f92a5.4aea8bbf.js";import{s as d}from"./status-note-0089e9c9.0d9688b1.js";import"./index.0b284fb1.js";import"./iframe.b9fa3d0f.js";import"./es.map.constructor.67ab86e5.js";import"./decorateStory.77a46e65.js";import"./vue.esm-bundler.be6c6897.js";const h=`:host{--width:366px;--width-icon-container:48px;--radius:var(--telekom-radius-standard);--background:var(--telekom-color-background-surface);--z-index:1;--box-shadow:var(--telekom-shadow-raised-standard);--background-success-icon-container:var(
    --telekom-color-functional-success-standard
  );--background-warning-icon-container:var(
    --telekom-color-functional-warning-standard
  );--background-error-icon-container:var(
    --telekom-color-functional-danger-standard
  );--background-informational-icon-container:var(
    --telekom-color-functional-informational-standard
  );--background-success-text-container:var(
    --telekom-color-functional-success-subtle
  );--background-warning-text-container:var(
    --telekom-color-functional-warning-subtle
  );--background-error-text-container:var(
    --telekom-color-functional-danger-subtle
  );--background-informational-text-container:var(
    --telekom-color-functional-informational-subtle
  )}.notification-toast{width:calc(var(--width) - var(--width-icon-container));opacity:1;z-index:var(--z-index);position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:0 var(--radius) var(--radius) 0;flex-direction:column;justify-content:space-between}.notification-toast.notification-toast--story{position:absolute}.notification-toast.notification-toast--story.notification-toast--hide{opacity:0}.notification-toast.notification-toast--story.notification-toast--opened{opacity:1}.notification-toast.notification-toast--variant-success{background:var(--background-success-text-container)}.notification-toast.notification-toast--variant-warning{background:var(--background-warning-text-container)}.notification-toast.notification-toast--variant-error{background:var(--background-error-text-container)}.notification-toast.notification-toast--variant-informational{background:var(--background-informational-text-container)}.notification-toast__icon{position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px}.notification-toast__icon-container{height:100%;width:var(--width-icon-container);position:absolute;left:calc(var(--width-icon-container) * -1 + 1px);top:0;float:left;border-radius:var(--radius) 0 0 var(--radius)}.notification-toast.notification-toast--variant-success .notification-toast__icon-container{background:var(--background-success-icon-container)}.notification-toast.notification-toast--variant-warning .notification-toast__icon-container{background:var(--background-warning-icon-container)}.notification-toast.notification-toast--variant-error .notification-toast__icon-container{background:var(--background-error-icon-container)}.notification-toast.notification-toast--variant-informational .notification-toast__icon-container{background:var(--background-informational-icon-container)}::slotted([slot='header']){margin:0;padding:3px 0 0 10px;font-weight:bold;font-size:16px}::slotted([slot='body']){padding:3px 0 0 10px;margin:0}::slotted([slot='link']){padding:10px 0 15px 10px;margin:0}.notification-toast__text-container{width:calc(var(--width) - calc(var(--width-icon-container) * 1));min-height:33px;float:left;position:relative;margin:0 0 0 1px;padding:15px 0 0 0}.notification-toast__button-close{position:absolute;top:10px;right:7.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-toast__button-close svg{height:19px;width:19px;padding:7.5px 6.5px 6.5px 6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-toast__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}`,f=n(class{constructor(i){e(this,i),this.variant="informational",this.animated=!0,this.alignment="top-right",this.positionVertical=12,this.positionHorizontal=12,this.autoHide=!1,this.autoHideDuration=3e3,this.fadeDuration=500,this.toastHeightWithOffset=0,this.hideToast=!1,this.close=()=>{this.hideToast=!0,setTimeout(()=>{this.opened=!1},this.fadeDuration)},this.transitions=o=>`
      @keyframes fadeIn {
        from {
          opacity: 0;
          ${this.alignmentVertical}: -${o}px;
        }
        to {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
      }
  
      @keyframes fadeOut {
        from {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
        to {
          opacity: 0;
          ${this.alignmentVertical}: -${o}px;
        }
      }
    `,this.animationStyle=o=>this.animated?`
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeIn ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: ${this.positionVertical}px;
          opacity: 1;
        },
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeOut ${this.fadeDuration/1e3}s ease-in-out;
          ${this.alignmentVertical}: -${o}px;
          opacity: 0;
        }
      `:`
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: ${this.positionVertical}px;
      opacity: 1;
    },
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: -${o}px;
      opacity: 0;
    }
  `}connectedCallback(){d({source:this.element,type:"warn"})}componentWillLoad(){const i=this.alignment.split("-");this.alignmentVertical=i[0],this.alignmentHorizontal=i[1]}componentDidRender(){this.autoHide===!0&&setTimeout(this.close,this.autoHideDuration)}handleIcons(){if(this.variant)switch(this.variant){case"success":return t("scale-icon-alert-success",{class:"notification-toast__icon",size:20,color:"#ffffff",selected:!0,"aria-hidden":"true"});case"informational":return t("scale-icon-alert-information",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"error":return t("scale-icon-alert-error",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"warning":return t("scale-icon-alert-warning",{class:"notification-toast__icon",color:"#ffff",size:20,selected:!0,"aria-hidden":"true"})}}async open(){this.opened=!0,this.hideToast=!1}render(){if(this.opened)return t(r,null,this.styles&&t("style",null,this.styles),t("style",null,this.transitions(this.toastHeightWithOffset)),t("style",null,this.animationStyle(this.toastHeightWithOffset)),t("div",{role:"alert",style:{display:`${this.opened?"":"none"}`},class:this.getCssClassMap(),part:this.getBasePartMap(),tabindex:"0"},t("div",{class:"notification-toast__icon-container"},this.handleIcons()),t("div",{class:"notification-toast__text-container"},t("slot",{name:"header"}),t("slot",{name:"body"}),t("scale-link",{href:this.href,class:"notification-toast__link",role:"link"},t("slot",{name:"link"}))),t("button",{part:"button-dismissable",type:"button",class:"notification-toast__button-close",onClick:()=>this.close(),tabindex:0,"aria-label":"close",onKeyDown:i=>{i.key==="Enter"&&this.close()}},t("scale-icon-action-circle-close",null))))}getToastHeightWithOffset(){const i=this.element.shadowRoot.querySelector(".toast").scrollHeight;this.toastHeightWithOffset=i+this.positionVertical}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(i){const o="notification-toast",a=i==="basePart"?"":`${o}`;return l(i==="basePart"?"base":o,this.variant&&`${a}--variant-${this.variant}`,!!this.opened&&`${a}--opened`,!this.hideToast&&`${a}--show`,!!this.hideToast&&`${a}--hide`,this.story&&`${a}--story`)}get element(){return c(this)}},"NotificationToast");f.style=h;export{f as scale_notification_toast};
//# sourceMappingURL=scale-notification-toast.entry.452746dd.js.map

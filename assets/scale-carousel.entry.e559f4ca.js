var l=Object.defineProperty;var i=(e,t)=>l(e,"name",{value:t,configurable:!0});import{r as o,h as s,H as n,g as c}from"./preview.d9401ce4.js";import{c as h}from"./index-713f92a5.4aea8bbf.js";import{s as u}from"./status-note-0089e9c9.0d9688b1.js";import"./index.9c3aed27.js";import"./iframe.776a4473.js";import"./es.map.constructor.cd0b0d25.js";import"./decorateStory.c710b724.js";import"./vue.esm-bundler.be6c6897.js";const d=".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:flex;padding:0;overflow:hidden;position:relative;box-sizing:border-box;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:flex;outline:none;z-index:99;position:absolute;transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);align-items:center;border-radius:50%;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:inline-flex;padding:0;z-index:2;position:absolute;transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:flex;transform:translateY(-50%);flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}",p=i(class{constructor(e){o(this,e),this.vertical=!1,this.slidesArray=[],this.value=0,this.handleSlideChange=t=>{const r=this.value;t==="prev"&&(r===0?this.value=-100*(this.slidesArray.length-1):this.value=r+100),t==="next"&&(r===-100*(this.slidesArray.length-1)?this.value=0:this.value=r-100)},this.setActiveSlide=t=>{this.value=-100*t},this.setTransformValue=()=>this.vertical?`translateY(${this.value}%)`:`translateX(${this.value}%)`,this.setActiveCssClass=t=>Math.abs(this.value)/100===t?"carousel__indicator--active":""}connectedCallback(){u({source:this.hostElement,type:"warn"})}componentWillLoad(){if(this.slidesArray.length===0){const e=this.hostElement.children;for(let t=0;t<e.length;t++)if(e[t].slot==="")for(let r=0;r<e[t].children.length;r++){const a=e[t].children[r];this.slidesArray.push(a)}}}render(){return s(n,null,this.styles&&s("style",null,this.styles),s("div",{class:this.getCssClassMap()},s("div",{class:"carousel__container"},s("div",{class:"carousel__arrow carousel__arrow--left",onClick:()=>this.handleSlideChange("prev")},s("slot",{name:"arrow-left"})),this.slidesArray.map(e=>s("div",{class:"carousel__slide",style:{transform:this.setTransformValue()}},s("div",{innerHTML:e.outerHTML}))),s("div",{class:"carousel__arrow carousel__arrow--right",onClick:()=>this.handleSlideChange("next")},s("slot",{name:"arrow-right"}))),s("ul",{class:"carousel__indicators"},Array.from(Array(this.slidesArray.length).keys()).map(e=>s("li",{key:e,class:`carousel__indicator ${this.setActiveCssClass(e)}`,onClick:()=>this.setActiveSlide(e)})))))}getCssClassMap(){return h("carousel",this.vertical&&"carousel--vertical")}get hostElement(){return c(this)}},"Carousel");p.style=d;export{p as scale_carousel};
//# sourceMappingURL=scale-carousel.entry.e559f4ca.js.map

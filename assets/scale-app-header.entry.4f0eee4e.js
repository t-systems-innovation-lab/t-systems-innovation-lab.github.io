var c=Object.defineProperty;var s=(a,n)=>c(a,"name",{value:n,configurable:!0});import{r as u,h as e,H as g,g as m}from"./preview.c2fe5939.js";import{c as v}from"./index-713f92a5.4aea8bbf.js";import{f as b}from"./menu-utils-28fccc0d.314ba7d8.js";import{s as l}from"./status-note-0089e9c9.0d9688b1.js";import"./index.a8f64826.js";import"./iframe.73313c3a.js";import"./es.map.constructor.6a154afe.js";import"./decorateStory.0d3f57e8.js";import"./vue.esm-bundler.be6c6897.js";const p=`scale-app-header{--header-nav-height:var(--telekom-spacing-unit-x14);--header-brand-height:var(--telekom-spacing-unit-x18);--header-border-radius:var(--telekom-radius-large);--header-transition-speed:var(--telekom-motion-duration-transition);--header-brand-collapsed-height:var(--telekom-spacing-unit-x1);--header-max-width:inherit;--background:var(--telekom-color-primary-standard);--font-weight:var(--telekom-typography-font-weight-regular);--border:1px solid var(--telekom-color-ui-faint);--color-brand:var(--telekom-color-text-and-icon-inverted-standard);--background-brand:var(--telekom-color-primary-standard);--color-nav:var(--telekom-color-text-and-icon-standard);--background-nav:var(--telekom-color-background-canvas);--background-nav-sticky:var(--telekom-color-background-surface);--background-header-sticky:var(--telekom-color-background-canvas);--spacing-nav:0 var(--telekom-spacing-unit-x4)}@keyframes keyframes-slideUp{from{top:0}to{top:-56px}}.header__container{background:var(--background-header-sticky);width:100%;height:128px}.header__user-menu--desktop{display:block}.header__user-menu--mobile{display:none}@media (max-width: 1023px){.header__container{width:100%;height:66px}.header__user-menu--desktop{display:none}.header__user-menu--mobile{display:block}}.header{width:100%;z-index:99;position:fixed;background:var(--background);font-weight:var(--font-weight)}.header .header__brand{color:var(--color-brand);background:var(--background-brand);display:flex;align-items:center}.header .header__nav{box-sizing:border-box;color:var(--color-nav);background:var(--background-nav);display:flex;align-items:center;border-top-left-radius:var(--header-border-radius);border-top-right-radius:var(--header-border-radius);border-bottom:1px solid transparent}.header__nav,.header.header--sticky .header__nav{border-bottom:var(--border);background:var(--background-nav-sticky)}.header .header__nav-content{width:100%;display:flex;align-items:center}.header .header__nav-menu-wrapper{width:100%;display:flex;align-items:center;justify-content:space-between}.header.header--sticky .header__nav-before,.header.header--sticky .header__nav-after{width:var(--header-border-radius);bottom:calc(-2 * var(--header-border-radius));height:calc(2 * var(--header-border-radius));position:absolute;border-top:var(--border);box-shadow:0 calc(-1 * var(--header-border-radius)) 0 0
    var(--telekom-color-background-surface);background-color:transparent}.header.header--sticky.menu--open .header__nav-before,.header.header--sticky .header__nav-before{left:-1px;z-index:97;border-left:var(--border);border-top-left-radius:var(--header-border-radius)}.header.header--sticky.menu--open .header__nav-after,.header.header--sticky .header__nav-after{right:-1px;z-index:98;border-right:var(--border);border-top-right-radius:var(--header-border-radius)}.header *[slot='menu-icon'],.header .meta-navigation{display:flex;padding:0;list-style:none;align-items:center;margin-block-start:0;margin-block-end:0}@media (max-width: 1023px){.header{height:var(--header-nav-height)}.header.menu--open .header__nav-before,.header.header--sticky .header__nav-before,.header.header--sticky .header__nav-after,.header.menu--open .header__nav-after{top:51px}.header .sector-navigation,.header .addon-navigation,.header *[slot='menu-main'],.header .main-navigation{display:none !important}.header .header__brand{width:100%;height:var(--header-nav-height);display:flex;padding:var(--spacing-nav);z-index:96;position:absolute;transition:height var(--header-transition-speed) ease-in-out;align-items:center;animation-name:keyframes-slideUp;animation-delay:0.5s;justify-content:space-between;animation-duration:0.75s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0.42, 0, 0.1, 1)}.header .header__nav{top:4px;width:100%;height:calc(var(--header-nav-height) - 4px);padding:var(--spacing-nav);z-index:95;position:absolute}.header.menu--open .header__nav{background-color:var(--telekom-color-background-surface)}.header .header__nav__mobile-menu{top:var(--header-nav-height);width:100%;display:none;position:relative}.header .header__nav__mobile-menu--opened{height:calc(100vh - var(--header-nav-height));display:block;overflow-y:auto;background:var(--telekom-color-background-surface)}.header .header__brand .header__brand-before,.header .header__brand .header__brand-after{width:var(--header-border-radius);bottom:calc(-2 * var(--header-border-radius));height:calc(2 * var(--header-border-radius));position:absolute;border-top:transparent;box-shadow:0 calc(-1 * var(--header-border-radius)) 0 0
      var(--telekom-color-primary-standard);background-color:transparent}.header .header__brand .header__brand-before{left:-1px;z-index:97;border-left:transparent;border-top-left-radius:var(--header-border-radius)}.header .header__brand .header__brand-after{right:-1px;z-index:98;border-right:transparent;border-top-right-radius:var(--header-border-radius)}.header .header__brand .logo svg{width:auto;height:26px}}.header .header__nav .header__nav-logo svg path{fill:var(--telekom-color-text-and-icon-primary-standard) !important}@media (min-width: 1024px){.header .header__nav-before{top:55px}.header .header__nav-after{top:55px}.header .mobile-menu,.header .header__nav__mobile-menu{display:none}.header .header__brand{height:var(--header-brand-height);padding:0 var(--telekom-spacing-unit-x6);transition:height var(--header-transition-speed) ease-in-out;justify-content:space-between}.header .header__brand-content{top:0;width:100%;display:flex;opacity:1;position:relative;transition:opacity var(--header-transition-speed) ease-in-out,
      top var(--header-transition-speed) ease-in-out;align-items:center}.header .header__nav{height:var(--header-nav-height);padding:0 var(--telekom-spacing-unit-x6);position:relative}.header .header__nav-logo{width:50px;opacity:0;transition:none;font-weight:var(--telekom-typography-font-weight-bold);margin-right:var(--telekom-spacing-unit-x4);pointer-events:none}.header.header--sticky .header__nav-logo{pointer-events:all;margin-right:var(--telekom-spacing-unit-x8)}.header scale-nav-main:first-child li{padding-left:0}.header *[slot='menu-main'],.header .main-navigation{height:var(--header-nav-height);margin:0;display:flex;padding:0;list-style:none;transition:margin-left var(--header-transition-speed) ease-in-out;align-items:center;margin-left:calc(-50px - var(--telekom-spacing-unit-x4))}.header *[slot='menu-sector'],.header *[slot='menu-addon'],.header .sector-navigation{display:flex;padding:0}.header .addon-navigation{display:flex;list-style:none}.header .sector-navigation .segment-navigation__item-link{margin:0 7px}.header .addon-navigation .segment-navigation__item-link{margin:0 0 0 14px}.header.header--sticky{--header-brand-height:4px}.header.header--sticky .header__nav-logo{opacity:1;transition:opacity var(--header-transition-speed) ease-in-out}.header.header--sticky .header__brand-content{opacity:0;transition:opacity var(--header-transition-speed) ease-in-out,
      top var(--header-transition-speed) ease-in-out}.header *[slot='menu-main'],.header.header--sticky .main-navigation{transition:margin-left var(--header-transition-speed) ease-in-out;margin-left:0}.header .sector-navigation .sector-navigation__portal-name{font-weight:var(--telekom-typography-font-weight-extra-bold);font-size:var(--telekom-typography-font-size-callout);list-style-type:none}.header *[slot='menu-main'],scale-nav-main{height:100%}.header *[slot='logo'],.header .header__brand-content .header__brand-branding{width:100%;display:flex;align-items:center;justify-content:flex-start}.header .header__brand-content .header__brand-sector{width:100%;display:flex;align-items:center;justify-content:center}.header .header__brand-content .header__brand-meta{width:100%;display:flex;align-items:center;justify-content:flex-end}}@media (min-width: 1552px){.header .header__nav-content,.header .header__brand-content{margin:0 auto;max-width:var(--header-max-width)}}`,r=s(a=>{let n;try{n=JSON.parse(a)}catch{n=a}return n},"readData"),_=s(class{constructor(a){u(this,a),this.portalName="",this.mainNavigation=[],this.iconNavigation=[],this.userNavigation=[],this.sectorNavigation=[],this.addonNavigation=[],this.sticky=!1,this.isMegaMenuVisible=!1,this.megaMenuVisible=!1,this.isMobileMenuVisible=!1,this.mobileMenuVisible=!1,this.activeSegment=r(this.sectorNavigation).find(({id:n})=>n===this.activeSectorId)||r(this.sectorNavigation)[0],this.mobileMenu=!1,this.userMenu=!1,this.userMenuMobile=!1,this.visibleMegaMenu="",this.scrolled=!1}megaMenuVisibleChange(a){this.visibleMegaMenu=a}isMegaMenuVisibleChange(a){this.visibleMegaMenu=a}onScroll(){this.scrolled=window.pageYOffset>2}handleCloseMenu(){this.mobileMenu&&this.mobileMenuToggle.focus(),this.mobileMenu=!1}handleCloseUserMenu(){this.userMenuToggle&&this.userMenuToggle.focus(),this.userMenu=!1}handleOpenUserMenu(){this.userMenu=!0}handleActiveSegment(a){this.activeSegment=r(this.sectorNavigation).find(({id:n})=>n===a)||{}}componentWillLoad(){this.hasSlotMenuMain=!!this.hostElement.querySelector('[slot="menu-main"]'),this.hasSlotMenuIcon=!!this.hostElement.querySelector('[slot="menu-icon"]'),this.hasSlotMenuSector=!!this.hostElement.querySelector('[slot="menu-sector"]'),this.hasSlotMenuAddon=!!this.hostElement.querySelector('[slot="menu-addon"]'),this.hasSlotMenuMobile=!!this.hostElement.querySelector('[slot="menu-mobile"]'),this.hasSlotLogo=!!this.hostElement.querySelector('[slot="logo"]'),this.hasSlotLogoInverse=!!this.hostElement.querySelector('[slot="logo-inverse"]')}componentDidUpdate(){this.hasSlotMenuMain=!!this.hostElement.querySelector('[slot="menu-main"]'),this.hasSlotMenuIcon=!!this.hostElement.querySelector('[slot="menu-icon"]'),this.hasSlotMenuSector=!!this.hostElement.querySelector('[slot="menu-sector"]'),this.hasSlotMenuAddon=!!this.hostElement.querySelector('[slot="menu-addon"]'),this.hasSlotMenuMobile=!!this.hostElement.querySelector('[slot="menu-mobile"]'),this.hasSlotLogo=!!this.hostElement.querySelector('[slot="logo"]'),this.hasSlotLogoInverse=!!this.hostElement.querySelector('[slot="logo-inverse"]')}componentWillRender(){this.isMegaMenuVisible!==!1&&l({tag:"deprecated",message:'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',type:"warn",source:this.hostElement}),this.isMobileMenuVisible!==!1&&l({tag:"deprecated",message:'Property "isMobileMenuVisible" is deprecated. Please use the "mobileMenuVisible" property!',type:"warn",source:this.hostElement})}handleMobileMenu(a){a&&a.preventDefault(),!(a&&"key"in a&&(!["Escape","Enter"].includes(a.key)||a.key==="Escape"&&!this.mobileMenu||a.key==="Enter"&&this.mobileMenu))&&(this.userMenuMobile=!1,this.mobileMenu=!this.mobileMenu)}handleSelectedSegment(a,n){this.activeSegment=n,typeof n.onClick=="function"&&n.onClick(a)}menuMain(){const a=b(r(this.mainNavigation),this.activeRouteId),n=s(i=>a&&a.id===i.id,"isActive");return e("ul",{class:"main-navigation",onKeyDown:i=>{i.key==="Escape"&&(this.visibleMegaMenu="")}},this.hasSlotMenuMain?e("slot",{name:"menu-main"}):r(this.mainNavigation).map(i=>e("scale-nav-main",{href:i.href,active:n(i),megaMenuVisible:this.visibleMegaMenu===i.id,onMouseEnter:()=>{this.visibleMegaMenu=i.children?i.id:null},onMouseLeave:()=>{this.visibleMegaMenu=""},clickLink:o=>{i.href&&(this.visibleMegaMenu=""),typeof i.onClick=="function"&&i.onClick(o),this.visibleMegaMenu=i.children?i.id:null},name:i.name},i.children&&i.children.length>0&&e("app-mega-menu",{navigation:i.children,hide:()=>{this.visibleMegaMenu=""},activeRouteId:this.activeRouteId,active:this.visibleMegaMenu===i.id}))))}menuIcon(){const{defaultName:a,openedName:n}=r(this.iconNavigation).find(({id:t})=>t==="menu")||{defaultName:"Menu",openedName:"Close"},{shortName:i="Login",badge:o,badgeLabel:d}=r(this.userNavigation).find(({type:t})=>t==="userInfo")||{shortName:"Login"};return e("ul",{class:"meta-navigation"},this.hasSlotMenuIcon?e("slot",{name:"menu-icon"}):r(this.iconNavigation).filter(({id:t})=>t!=="menu").map(t=>e("scale-nav-icon",{icon:t.icon,href:t.href,badge:t.badge,badgeLabel:t.badgeLabel,clickLink:h=>{typeof t.onClick=="function"&&t.onClick(h)}},t.name)),r(this.userNavigation).length>0&&e("span",null,e("span",{class:"header__user-menu--desktop"},e("scale-menu-flyout",null,e("scale-nav-icon",{slot:"trigger",active:this.userMenu,icon:"user-file-user",refUserMenuToggle:t=>this.userMenuToggle=t,badge:o,badgeLabel:d},i),e("scale-menu-flyout-list",null,e("app-navigation-user-menu",{hide:()=>{this.userMenu=!1,this.userMenuToggle.focus(),window.document.dispatchEvent(new Event("click"))},navigation:r(this.userNavigation)})))),e("span",{class:"header__user-menu--mobile"},e("scale-nav-icon",{slot:"trigger",active:this.userMenuMobile,icon:"user-file-user",refMobileUserMenuToggle:t=>this.userMenuMobileToggle=t,clickLink:()=>{this.mobileMenu=!1,this.userMenuMobile=!this.userMenuMobile},badge:o,badgeLabel:d},i))),(r(this.mainNavigation).length>0||this.hasSlotMenuMobile)&&e("scale-nav-icon",{mobileMenuOpen:this.mobileMenu,icon:this.mobileMenu?"action-circle-close":"action-menu",clickLink:t=>this.handleMobileMenu(t),refMobileMenuToggle:t=>this.mobileMenuToggle=t,active:this.mobileMenu},this.mobileMenu?n:a))}menuSector(){return e("ul",{class:"sector-navigation"},this.hasSlotMenuSector?e("slot",{name:"menu-sector"}):this.portalName?e("li",{class:"sector-navigation__portal-name"},this.portalName):r(this.sectorNavigation).map(a=>e("scale-nav-segment",{active:this.activeSegment.id===a.id,href:a.href,onClick:n=>this.handleSelectedSegment(n,a),onFocus:()=>{window.scrollTo({top:0})}},a.name)))}menuAddon(){return e("ul",{class:"addon-navigation"},this.hasSlotMenuAddon?e("slot",{name:"menu-addon"}):r(this.addonNavigation).map(a=>e("scale-nav-segment",{href:a.href,onClick:n=>{typeof a.onClick=="function"&&a.onClick(n)},onFocus:()=>{window.scrollTo({top:0})}},a.name)))}render(){return e(g,null,e("header",{class:"header__container"},e("div",{class:this.getCssClassMap()},e("div",{class:"header__brand"},e("span",{class:"header__brand-before"}),e("span",{class:"header__brand-after"}),e("div",{class:"header__brand-content"},e("div",{class:"header__brand-branding"},this.hasSlotLogo?e("slot",{name:"logo"}):e("scale-logo",{transparent:!0,language:this.claimLang,href:this.logoHref,logoTitle:this.logoTitle,onClick:this.logoClick,variant:"white",scrollIntoViewOnFocus:!0,focusable:!0,styles:":host { --logo-size: 36px;} @media (max-width: 1023px) { :host {--logo-size: 26px;} }",logoAriaDescribedBy:this.logoAriaDescribedBy})),e("div",{class:"header__brand-sector"},this.menuSector()),e("div",{class:"header__brand-meta"},this.menuAddon()))),e("nav",{class:"header__nav","aria-label":"top"},e("span",{class:"header__nav-before"}),e("span",{class:"header__nav-after"}),e("div",{class:"header__nav-content"},e("div",{class:"header__nav-logo"},this.hasSlotLogoInverse?e("slot",{name:"logo-inverse"}):e("scale-logo",{transparent:!0,language:"",href:this.logoHref,logoTitle:this.logoTitle,onClick:this.logoClick,focusable:this.scrolled||this.sticky,size:24,logoAriaDescribedBy:this.logoAriaDescribedBy})),e("div",{class:"header__nav-menu-wrapper"},e("div",{class:"header__nav-menu-main"},this.menuMain()),e("div",{class:"header__nav-menu-icon"},this.menuIcon())))),e("nav",{class:`header__nav__mobile-menu${this.mobileMenu?" header__nav__mobile-menu--opened":""}`,"aria-label":"main"},this.hasSlotMenuMobile?e("slot",{name:"menu-mobile"}):e("div",null,e("app-navigation-sector-mobile",{navigation:r(this.sectorNavigation),activeSectorId:this.activeSectorId,hide:()=>{this.handleMobileMenu(),this.mobileMenuToggle.focus()}}),e("app-navigation-main-mobile",{navigation:r(this.mainNavigation),activeRouteId:this.activeRouteId,hide:()=>{this.handleMobileMenu(),this.mobileMenuToggle.focus()}}))),e("nav",{class:`header__nav__mobile-menu${this.userMenuMobile?" header__nav__mobile-menu--opened":""}`,"aria-label":"main"},e("div",null,this.userMenuMobile&&e("app-navigation-user-menu",{hide:()=>{this.userMenuMobile=!1,this.userMenuMobileToggle.focus()},navigation:r(this.userNavigation)}))))))}getCssClassMap(){return v("header",(this.scrolled||this.sticky)&&"header--sticky",(this.visibleMegaMenu||this.mobileMenu||this.userMenuMobile)&&"menu--open")}get hostElement(){return m(this)}static get watchers(){return{megaMenuVisible:["megaMenuVisibleChange"],isMegaMenuVisible:["isMegaMenuVisibleChange"],activeSectorId:["handleActiveSegment"]}}},"Header");_.style=p;export{_ as scale_app_header};
//# sourceMappingURL=scale-app-header.entry.4f0eee4e.js.map
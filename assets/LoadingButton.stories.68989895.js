var h=Object.defineProperty;var l=(e,a)=>h(e,"name",{value:a,configurable:!0});import{d as x,t as O,a as T,b as c,w as k,u as n,n as z,r as p,o as u,e as C,f as N,g as m}from"./vue.esm-bundler.be6c6897.js";const i=x({__name:"LoadingButton",props:{loading:{type:Boolean},size:{default:"large"},fullWidth:{type:Boolean,default:!0},disabled:{type:Boolean},iconOnly:{type:Boolean},variant:{default:"primary"}},emits:["click"],setup(e,{emit:a}){const g=e,{loading:s,fullWidth:y,size:f,variant:r,disabled:b,iconOnly:d}=O(g),L=T(()=>r.value==="primary"?"white":"primary"),_=l(o=>{o.preventDefault(),o.stopPropagation(),a("click")},"onClick");return(o,I)=>{const B=p("scale-loading-spinner"),v=p("scale-button");return u(),c(v,{variant:n(r),class:z(n(y)?"fullWidth":""),size:n(f),disabled:n(b)||n(s),onClick:_,iconOnly:n(d)},{default:k(()=>[n(s)?m("",!0):C(o.$slots,"default",{key:0},()=>[N("Speichern")]),n(s)?(u(),c(B,{key:1,text:n(d)?"":"Laden...",variant:n(L)},null,8,["text","variant"])):m("",!0)]),_:3},8,["variant","class","size","disabled","iconOnly"])}}});i.__docgenInfo={exportName:"default",displayName:"LoadingButton",description:"",tags:{},props:[{name:"loading",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'large'"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconOnly",required:!1,type:{name:"boolean"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'primary'"}}],events:[{name:"click"}],slots:[{name:"default"}]};const E={parameters:{storySource:{source:`import LoadingButton from '../../src/components/LoadingButton.vue';
//import "@telekom/scale-components/dist/scale-components/scale-components.css";


export default {
  title: 'Example/LoadingButton',
  component: LoadingButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary'],
      },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { LoadingButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<LoadingButton v-bind="args" />',
});



export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const NotLoading = Template.bind({});
NotLoading.args = {
    loading: false,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    loading: true,
    iconOnly: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};


`,locationsMap:{loading:{startLoc:{col:17,line:22},endLoc:{col:2,line:31},startBody:{col:17,line:22},endBody:{col:2,line:31}},"not-loading":{startLoc:{col:17,line:22},endLoc:{col:2,line:31},startBody:{col:17,line:22},endBody:{col:2,line:31}},"icon-only":{startLoc:{col:17,line:22},endLoc:{col:2,line:31},startBody:{col:17,line:22},endBody:{col:2,line:31}},disabled:{startLoc:{col:17,line:22},endLoc:{col:2,line:31},startBody:{col:17,line:22},endBody:{col:2,line:31}}}}},title:"Example/LoadingButton",component:i,argTypes:{size:{control:{type:"select"},options:["small","large"]},variant:{control:{type:"select"},options:["primary","secondary"]}}},t=l(e=>({components:{LoadingButton:i},setup(){return{args:e}},template:'<LoadingButton v-bind="args" />'}),"Template"),q=t.bind({});q.args={loading:!0};const V=t.bind({});V.args={loading:!1};const w=t.bind({});w.args={loading:!0,iconOnly:!0};const D=t.bind({});D.args={disabled:!0};const M=["Loading","NotLoading","IconOnly","Disabled"];export{D as Disabled,w as IconOnly,q as Loading,V as NotLoading,M as __namedExportsOrder,E as default};
//# sourceMappingURL=LoadingButton.stories.68989895.js.map

import{s as e,r as l,d as u}from"./index-174ad176.js";import{F as t,p as o,l as n}from"./index.js";import{u as a,P as r}from"./pagination-87b07e34.js";import{R as V}from"./right-tool-bar-f10e816b.js";import{u as i}from"./useFormUtil-98c17c20.js";import{h as s}from"./usePermission-16d8d5ac.js";import{s as m}from"./constDynamicRoutes-5c9c22de.js";import"./_plugin-vue_export-helper-0909ef10.js";const c=Vue.defineComponent({name:m.onlineUser.path}),p=Vue.defineComponent({...c,setup(m){const{t:c}=VueI18n.useI18n({useScope:"global"}),p=Vue.ref(),d=Vue.ref(!0),{formReset:f}=i(),E=Vue.ref({page_num:1,page_size:10}),w=Vue.ref([]),{list:h,getListFn:g,total:b}=a(t.getList,E,w),v=()=>{f(p.value),w.value=[],g()};return(a,i)=>(Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives(Vue.createVNode(Vue.unref(ElementPlus.ElForm),{ref_key:"queryRef",ref:p,inline:!0,model:E.value,"label-width":"68px",class:"base-form"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"登录地址",prop:"ipaddr"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElInput),{modelValue:E.value.ipaddr,"onUpdate:modelValue":i[0]||(i[0]=e=>E.value.ipaddr=e),placeholder:"请输入登录地址",clearable:"",onKeyup:Vue.withKeys(Vue.unref(g),["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"用户名称",prop:"user_name"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElInput),{modelValue:E.value.user_name,"onUpdate:modelValue":i[1]||(i[1]=e=>E.value.user_name=e),placeholder:"请输入用户名称",clearable:"",onKeyup:Vue.withKeys(Vue.unref(g),["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),null,{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElButton),{icon:Vue.unref(e),type:"primary",onClick:Vue.unref(g)},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(c)("common.search")),1)])),_:1},8,["icon","onClick"]),Vue.createVNode(Vue.unref(ElementPlus.ElButton),{icon:Vue.unref(l),onClick:v},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(c)("common.reset")),1)])),_:1},8,["icon"])])),_:1})])),_:1},8,["model"]),[[Vue.vShow,d.value]]),Vue.createVNode(Vue.unref(ElementPlus.ElRow),{gutter:10,class:"m-b-8px",style:{height:"35px"}},{default:Vue.withCtx((()=>[Vue.createVNode(V,{showSearch:d.value,"onUpdate:showSearch":i[2]||(i[2]=e=>d.value=e),onQueryTable:Vue.unref(g)},null,8,["showSearch","onQueryTable"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElTable),{data:Vue.unref(h),"tooltip-effect":"light"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"序号",width:"80",type:"index",align:"center",index:e=>1+e+(E.value.page_num-1)*E.value.page_size},null,8,["index"]),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"会话编号",align:"center",prop:"id","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"登录名称",align:"center",prop:"user_name","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"所属部门",align:"center",prop:"dept_name","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"网络",align:"center",prop:"net","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"主机",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"登录地点",align:"center",prop:"login_location","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"设备",align:"center",prop:"device","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"登录时间",align:"center",prop:"login_time",width:"180"},{default:Vue.withCtx((e=>[Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(o)(e.row.login_time)),1)])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:Vue.withCtx((e=>[Vue.unref(s)(Vue.unref(t).delete)?(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElButton),{key:0,link:"",icon:Vue.unref(u),onClick:l=>(async e=>{await ElementPlus.ElMessageBox.confirm(`是否确认强退用户 ${e.user_name}?`,"强退用户",{type:"warning"}).then((async()=>{const l=[e.id],{execute:u}=n(t.delete,{ids:l});await u(),ElementPlus.ElMessage.success(`强退用户 ${e.user_name} 成功`)})).catch((()=>{ElementPlus.ElMessage.info("取消情况操作")})),g()})(e.row)},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(c)("common.kickOff")),1)])),_:2},1032,["icon","onClick"])):Vue.createCommentVNode("",!0)])),_:1})])),_:1},8,["data"]),Vue.withDirectives(Vue.createVNode(r,{page:E.value.page_num,"onUpdate:page":i[3]||(i[3]=e=>E.value.page_num=e),limit:E.value.page_size,"onUpdate:limit":i[4]||(i[4]=e=>E.value.page_size=e),total:Vue.unref(b),onPagination:Vue.unref(g)},null,8,["page","limit","total","onPagination"]),[[Vue.vShow,Vue.unref(b)>0]])]))}});export{p as default};

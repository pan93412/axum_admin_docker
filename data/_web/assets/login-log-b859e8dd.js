import{s as e,r as l,d as u}from"./index-174ad176.js";import{i as t,C as o,p as a,l as n}from"./index.js";import{D as r}from"./dict-tag-15f2a908.js";import{u as V,P as i,a as s}from"./pagination-87b07e34.js";import{R as m}from"./right-tool-bar-f10e816b.js";import{u as c}from"./useFormUtil-98c17c20.js";import{h as d}from"./usePermission-16d8d5ac.js";import{u as p}from"./useTableUtil-0e4d2f9a.js";import{s as f}from"./constDynamicRoutes-5c9c22de.js";import{d as E}from"./dict-2940434e.js";import"./_plugin-vue_export-helper-0909ef10.js";const h=Vue.defineComponent({name:f.loginLog.path}),w=Vue.defineComponent({...h,setup(f){const h=Vue.ref(),w=Vue.ref(!0),{t:g}=VueI18n.useI18n({useScope:"global"}),b=t(E.sysCommonStatus),{formReset:C}=c(),{useTableSelectChange:v}=p(),{handleSelectionChangeFn:P,ids:N,values:_,selected:y}=v(),x=e=>P(e,"info_id","info_id"),T=Vue.ref({page_num:1,page_size:10}),k=Vue.ref([]),{list:S,getListFn:B,total:D}=V(o.getList,T,k),j=()=>{C(h.value),k.value=[],B()},I=async()=>{await ElementPlus.ElMessageBox.confirm("是否确认清空所有登录日志数据项?","清空确认",{type:"warning"}).then((async()=>{const{execute:e}=n(o.clean);await e(),ElementPlus.ElMessage.success("清空登录日志成功")})).catch((()=>{ElementPlus.ElMessage.info("取消情况操作")})),B()};return(t,n)=>(Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives(Vue.createVNode(Vue.unref(ElementPlus.ElForm),{ref_key:"queryRef",ref:h,inline:!0,model:T.value,"label-width":"68px",class:"base-form"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"登录IP",prop:"ip"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElInput),{modelValue:T.value.ip,"onUpdate:modelValue":n[0]||(n[0]=e=>T.value.ip=e),clearable:"",placeholder:"请输入登录IP",onKeyup:Vue.withKeys(Vue.unref(B),["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"登录名称",prop:"user_name"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElInput),{modelValue:T.value.user_name,"onUpdate:modelValue":n[1]||(n[1]=e=>T.value.user_name=e),clearable:"",placeholder:"请输入登录名称",onKeyup:Vue.withKeys(Vue.unref(B),["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"字典状态",prop:"status"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElSelect),{modelValue:T.value.status,"onUpdate:modelValue":n[2]||(n[2]=e=>T.value.status=e),clearable:!0,placeholder:"字典状态"},{default:Vue.withCtx((()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(b)[Vue.unref(E).sysNormalDisable],(e=>(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElOption),{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),{label:"创建时间"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElDatePicker),{modelValue:k.value,"onUpdate:modelValue":n[3]||(n[3]=e=>k.value=e),"end-placeholder":"结束日期","range-separator":"-","start-placeholder":"开始日期",type:"daterange","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElFormItem),null,{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElButton),{icon:Vue.unref(e),type:"primary",onClick:Vue.unref(B)},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(g)("common.search")),1)])),_:1},8,["icon","onClick"]),Vue.createVNode(Vue.unref(ElementPlus.ElButton),{icon:Vue.unref(l),onClick:j},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(g)("common.reset")),1)])),_:1},8,["icon"])])),_:1})])),_:1},8,["model"]),[[Vue.vShow,w.value]]),Vue.createVNode(Vue.unref(ElementPlus.ElRow),{gutter:10,class:"m-b-8px",style:{height:"35px"}},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElCol),{span:1.5},{default:Vue.withCtx((()=>[Vue.unref(d)(Vue.unref(o).delete)?(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElButton),{key:0,type:"danger",plain:"",icon:Vue.unref(u),disabled:!Vue.unref(y),onClick:n[4]||(n[4]=e=>(async e=>{await s(o.delete,"info_id",N,"info_id",_,"info_ids",e)&&B()})())},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(g)("common.delete")),1)])),_:1},8,["icon","disabled"])):Vue.createCommentVNode("",!0)])),_:1},8,["span"]),Vue.createVNode(Vue.unref(ElementPlus.ElCol),{span:1.5},{default:Vue.withCtx((()=>[Vue.unref(d)(Vue.unref(o).clean)?(Vue.openBlock(),Vue.createBlock(Vue.unref(ElementPlus.ElButton),{key:0,type:"danger",plain:"",icon:Vue.unref(u),onClick:I},{default:Vue.withCtx((()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(g)("common.clean")),1)])),_:1},8,["icon"])):Vue.createCommentVNode("",!0)])),_:1},8,["span"]),Vue.createVNode(m,{showSearch:w.value,"onUpdate:showSearch":n[5]||(n[5]=e=>w.value=e),onQueryTable:Vue.unref(B)},null,8,["showSearch","onQueryTable"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElTable),{data:Vue.unref(S),onSelectionChange:x,"tooltip-effect":"light"},{default:Vue.withCtx((()=>[Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{type:"selection",width:"55",align:"center"}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"访问编号",align:"center",prop:"info_id","show-overflow-tooltip":"",width:"100"}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"用户名称",align:"center",prop:"login_name",width:"120","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"网络",align:"center",prop:"net","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"地址",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"登录地点",align:"center",prop:"login_location","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"设备",align:"center",prop:"device","show-overflow-tooltip":!0}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"登录状态",align:"center",prop:"status"},{default:Vue.withCtx((e=>[Vue.createVNode(r,{options:Vue.unref(b)[Vue.unref(E).sysCommonStatus],value:e.row.status},null,8,["options","value"])])),_:1}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"描述",align:"center",prop:"msg",width:"100","show-overflow-tooltip":""}),Vue.createVNode(Vue.unref(ElementPlus.ElTableColumn),{label:"访问时间",align:"center",prop:"login_time",width:"180"},{default:Vue.withCtx((e=>[Vue.createElementVNode("span",null,Vue.toDisplayString(Vue.unref(a)(e.row.login_time)),1)])),_:1})])),_:1},8,["data"]),Vue.withDirectives(Vue.createVNode(i,{page:T.value.page_num,"onUpdate:page":n[6]||(n[6]=e=>T.value.page_num=e),limit:T.value.page_size,"onUpdate:limit":n[7]||(n[7]=e=>T.value.page_size=e),total:Vue.unref(D),onPagination:Vue.unref(B)},null,8,["page","limit","total","onPagination"]),[[Vue.vShow,Vue.unref(D)>0]])]))}});export{w as default};

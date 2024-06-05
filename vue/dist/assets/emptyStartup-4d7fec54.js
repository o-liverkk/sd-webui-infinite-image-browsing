import{d as W,j as pe,r as B,ag as ve,u as ee,_ as Ce,a as U,ah as we,ai as fe,h as G,c as f,P as K,k as xe,aj as Oe,ak as Se,al as $e,A as he,V as me,am as Ie,ac as Q,v as O,m as x,ad as ge,an as Pe,t as X,ao as Te,ap as q,aq as Ae,ar as Ne,L as g,W as L,X as y,Q as $,R as u,as as ze,af as Me,M as Re,at as Fe,o as De,z as oe,N as C,O as l,Y as v,T as N,Z as z,au as le,S as F,a1 as E,H as Z,G as je,q as Ge,av as Be,ae as Ve,aw as Ee,ax as Le,U as Ue}from"./index-db6e6f1f.js";import{V as He}from"./Checkbox-b330ff1b.js";import{D as qe}from"./index-fab27d40.js";/* empty css              */var We=["prefixCls","id"],_e=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:K.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}};const P=W({compatConfig:{MODE:3},name:"ARadio",props:_e(),setup:function(e,t){var s=t.emit,p=t.expose,k=t.slots,h=pe(),m=B(),_=ve("radioGroupContext",void 0),A=ee("radio",e),S=A.prefixCls,M=A.direction,V=function(){m.value.focus()},T=function(){m.value.blur()};p({focus:V,blur:T});var n=function(c){var b=c.target.checked;s("update:checked",b),s("update:value",b),s("change",c),h.onFieldChange()},i=function(c){s("change",c),_&&_.onRadioChange&&_.onRadioChange(c)};return function(){var r,c=_;e.prefixCls;var b=e.id,I=b===void 0?h.id.value:b,j=Ce(e,We),w=U({prefixCls:S.value,id:I},we(j,["onUpdate:checked","onUpdate:value"]));c?(w.name=c.props.name,w.onChange=i,w.checked=e.value===c.stateValue.value,w.disabled=e.disabled||c.props.disabled):w.onChange=n;var D=fe((r={},G(r,"".concat(S.value,"-wrapper"),!0),G(r,"".concat(S.value,"-wrapper-checked"),w.checked),G(r,"".concat(S.value,"-wrapper-disabled"),w.disabled),G(r,"".concat(S.value,"-wrapper-rtl"),M.value==="rtl"),r));return f("label",{class:D},[f(He,U(U({},w),{},{type:"radio",ref:m}),null),k.default&&f("span",null,[k.default()])])}}});var Qe=Se("large","default","small"),Xe=function(){return{prefixCls:String,value:K.any,size:K.oneOf(Qe),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}};const te=W({compatConfig:{MODE:3},name:"ARadioGroup",props:Xe(),setup:function(e,t){var s=t.slots,p=t.emit,k=pe(),h=ee("radio",e),m=h.prefixCls,_=h.direction,A=h.size,S=B(e.value),M=B(!1);xe(function(){return e.value},function(T){S.value=T,M.value=!1});var V=function(n){var i=S.value,r=n.target.value;"value"in e||(S.value=r),!M.value&&r!==i&&(M.value=!0,p("update:value",r),p("change",n),k.onFieldChange()),$e(function(){M.value=!1})};return Oe("radioGroupContext",{onRadioChange:V,stateValue:S,props:e}),function(){var T,n=e.options,i=e.optionType,r=e.buttonStyle,c=e.id,b=c===void 0?k.id.value:c,I="".concat(m.value,"-group"),j=fe(I,"".concat(I,"-").concat(r),(T={},G(T,"".concat(I,"-").concat(A.value),A.value),G(T,"".concat(I,"-rtl"),_.value==="rtl"),T)),w=null;if(n&&n.length>0){var D=i==="button"?"".concat(m.value,"-button"):m.value;w=n.map(function(d){if(typeof d=="string"||typeof d=="number")return f(P,{key:d,prefixCls:D,disabled:e.disabled,value:d,checked:S.value===d},{default:function(){return[d]}});var R=d.value,be=d.disabled,ke=d.label;return f(P,{key:"radio-group-value-options-".concat(R),prefixCls:D,disabled:be||e.disabled,value:R,checked:S.value===R},{default:function(){return[ke]}})})}else{var a;w=(a=s.default)===null||a===void 0?void 0:a.call(s)}return f("div",{class:j,id:b},[w])}}}),H=W({compatConfig:{MODE:3},name:"ARadioButton",props:_e(),setup:function(e,t){var s=t.slots,p=ee("radio-button",e),k=p.prefixCls,h=ve("radioGroupContext",void 0);return function(){var m,_=U(U({},e),{},{prefixCls:k.value});return h&&(_.onChange=h.onRadioChange,_.checked=_.value===h.stateValue.value,_.disabled=_.disabled||h.props.disabled),f(P,_,{default:function(){return[(m=s.default)===null||m===void 0?void 0:m.call(s)]}})}}});P.Group=te;P.Button=H;P.install=function(o){return o.component(P.name,P),o.component(P.Group.name,P.Group),o.component(P.Button.name,P.Button),o};var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const Ze=Ye;function se(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable}))),s.forEach(function(p){Je(o,p,t[p])})}return o}function Je(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var ne=function(e,t){var s=se({},e,t.attrs);return f(he,se({},s,{icon:Ze}),null)};ne.displayName="FileDoneOutlined";ne.inheritAttrs=!1;const Ke=ne;var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const tt=et;function ie(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable}))),s.forEach(function(p){nt(o,p,t[p])})}return o}function nt(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var ae=function(e,t){var s=ie({},e,t.attrs);return f(he,ie({},s,{icon:tt}),null)};ae.displayName="LockOutlined";ae.inheritAttrs=!1;const re=ae;const J=async(o,e)=>{const t=me();let s=e??"";const p=B(o);if({}.TAURI_ARCH){const k=await Ie({directory:!0,defaultPath:e});if(typeof k=="string")s=k;else return}else s=await new Promise(k=>{const h=B(s);console.log("dfd",h.value),Q.confirm({title:O("inputTargetFolderPath"),width:"800px",content:()=>{var m;return x("div",[(m=t.conf)!=null&&m.enable_access_control?x("a",{style:{"word-break":"break-all","margin-bottom":"4px",display:"block"},target:"_blank",href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/518"},"Please open this link first (Access Control mode only)"):"",x(ge,{value:h.value,"onUpdate:value":_=>h.value=_}),x("div",[x("span",O("type")+": "),x(te,{value:p.value,"onUpdate:value":_=>p.value=_,buttonStyle:"solid",style:{margin:"16px 0 32px"}},[x(H,{value:"walk"},"Walk"),x(H,{value:"scanned"},"Normal"),x(H,{value:"scanned-fixed"},"Fixed")])]),x("p","Walk: 无需翻页即可浏览指定文件夹下的所有文件，使用无限滚动的方式呈现。将会使用DFS的方式遍历所有文件. 注意:该模式下排序仅在同层之间进行"),x("p","Normal: 类似于windows的文件浏览器，拥有较高的灵活性. 但在访问云存储或者类似SMB这样的地方时可能会出现异常"),x("p","Fixed: 类似Normal模式，但页面初始速度更快，兼容性更好，灵活性稍差。在Normal模式下出现了异常的话都可以改用这个试试")])},async onOk(){const m=h.value;(await Pe([m]))[m]?k(h.value):X.error(O("pathDoesNotExist"))}})});Q.confirm({content:O("confirmToAddToExtraPath"),async onOk(){await Te({types:[p.value],path:s}),X.success(O("addCompleted")),q.emit("searchIndexExpired"),q.emit("updateGlobalSetting")}})},ce=(o,e)=>{Q.confirm({content:O("confirmDelete"),closable:!0,async onOk(){await Ae({types:[e],path:o}),X.success(O("removeCompleted")),q.emit("searchIndexExpired"),q.emit("updateGlobalSetting")}})},ue=o=>{const e=B("");Q.confirm({title:O("inputAlias"),content:()=>x("div",[x("div",{style:{"word-break":"break-all","margin-bottom":"4px"}},"Path: "+o),x(ge,{value:e.value,"onUpdate:value":t=>e.value=t})]),async onOk(){await Ne({alias:e.value,path:o}),X.success(O("addAliasCompleted")),q.emit("updateGlobalSetting")}})},de=W({__name:"actionContextMenu",emits:["openOnTheRight","openInNewTab"],setup(o,{emit:e}){const t=s=>{switch(s.key.toString()){case"openOnTheRight":e("openOnTheRight");break;case"openInNewTab":e("openInNewTab");break}};return(s,p)=>{const k=Me,h=Re,m=qe;return g(),L(m,{trigger:["contextmenu"]},{overlay:y(()=>[f(h,{onClick:t},{default:y(()=>[f(k,{key:"openOnTheRight"},{default:y(()=>[$(u(s.$t("openOnTheRight")),1)]),_:1}),f(k,{key:"openInNewTab"},{default:y(()=>[$(u(s.$t("openInNewTab")),1)]),_:1})]),_:1})]),default:y(()=>[ze(s.$slots,"default")]),_:3})}}}),Y=o=>(Ee("data-v-eedf5472"),o=o(),Le(),o),at={class:"container"},ot={class:"header"},lt={key:0,style:{"margin-left":"16px","font-size":"1.5em"}},st=Y(()=>l("div",{"flex-placeholder":""},null,-1)),it=Y(()=>l("a",{href:"https://github.com/zanllp/sd-webui-infinite-image-browsing",target:"_blank",class:"last-record"},"Github",-1)),rt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/blob/main/.env.example",target:"_blank",class:"last-record"},ct={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/wiki/Change-log",target:"_blank",class:"last-record"},ut={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90",target:"_blank",class:"last-record"},dt={class:"access-mode-message"},pt=Y(()=>l("div",{"flex-placeholder":""},null,-1)),vt={class:"access-mode-message"},ft=Y(()=>l("div",{"flex-placeholder":""},null,-1)),ht={class:"content"},mt={class:"feature-item"},gt={class:"text line-clamp-1"},_t=["onClick"],bt={class:"text line-clamp-2"},kt={key:0,class:"feature-item"},yt={class:"text line-clamp-1"},Ct=["onClick"],wt={class:"text line-clamp-2"},xt={key:0,class:"fixed"},Ot={class:"feature-item"},St=["onClick"],$t={class:"text line-clamp-1"},It={class:"text line-clamp-1"},Pt={class:"text line-clamp-1"},Tt={class:"text line-clamp-1"},At={key:1,class:"feature-item recent"},Nt={class:"title"},zt=["onClick"],Mt={class:"text line-clamp-1"},Rt=W({__name:"emptyStartup",props:{tabIdx:{},paneIdx:{},popAddPathModal:{}},setup(o){const e=o,t=me(),s=Fe();De(()=>{e.popAddPathModal&&J(e.popAddPathModal.type,e.popAddPathModal.path)});const p={local:O("local"),"tag-search":O("imgSearch"),"fuzzy-search":O("fuzzy-search"),"global-setting":O("globalSettings"),"batch-download":O("batchDownload")+" / "+O("archive")},k=(n,i,r)=>{let c;switch(n){case"grid-view":case"tag-search-matched-image-grid":case"img-sli":return;case"global-setting":case"tag-search":case"batch-download":case"fuzzy-search":case"empty":c={type:n,name:p[n],key:Date.now()+Z()};break;case"local":c={type:n,name:p[n],key:Date.now()+Z(),path:i,mode:r==="scanned-fixed"||r==="walk"?r:"scanned"}}return c},h=(n,i,r)=>{const c=k(n,i,r);if(!c)return;const b=t.tabList[e.tabIdx];b.panes.splice(e.paneIdx,1,c),b.key=c.key},m=(n,i,r)=>{const c=k(n,i,r);if(!c)return;t.tabList[e.tabIdx].panes.push(c)},_=(n,i,r)=>{const c=k(n,i,r);if(!c)return;let b=t.tabList[e.tabIdx+1];b||(b={panes:[],key:"",id:Z()},t.tabList[e.tabIdx+1]=b),b.panes.push(c),b.key=c.key},A=oe(()=>{var n;return(n=t.tabListHistoryRecord)==null?void 0:n[1]}),S=oe(()=>t.quickMovePaths.filter(({key:n,types:i})=>n==="outdir_txt2img_samples"||n==="outdir_img2img_samples"||n==="outdir_txt2img_grids"||n==="outdir_img2img_grids"||i.includes("walk"))),M=window.parent!==window,V=()=>window.parent.open("/infinite_image_browsing"+(window.parent.location.href.includes("theme=dark")?"?__theme=dark":"")),T=()=>{je(A.value),t.tabList=Ge(A.value.tabs)};return(n,i)=>{var j,w,D;const r=H,c=te,b=Be,I=Ve;return g(),C("div",at,[l("div",ot,[l("h1",null,u(n.$t("welcome")),1),(j=v(t).conf)!=null&&j.enable_access_control&&v(t).dontShowAgain?(g(),C("div",lt,[f(v(re),{title:"Access Control mode",style:{"vertical-align":"text-bottom"}})])):N("",!0),st,it,l("a",rt,u(n.$t("privacyAndSecurity")),1),l("a",ct,u(n.$t("changlog")),1),l("a",ut,u(n.$t("faq")),1),f(c,{value:v(t).darkModeControl,"onUpdate:value":i[0]||(i[0]=a=>v(t).darkModeControl=a),"button-style":"solid"},{default:y(()=>[f(r,{value:"light"},{default:y(()=>[$("Light")]),_:1}),f(r,{value:"auto"},{default:y(()=>[$("Auto")]),_:1}),f(r,{value:"dark"},{default:y(()=>[$("Dark")]),_:1})]),_:1},8,["value"])]),(w=v(t).conf)!=null&&w.enable_access_control&&!v(t).dontShowAgain?(g(),L(b,{key:0,"show-icon":""},{message:y(()=>[l("div",dt,[l("div",null,u(n.$t("accessControlModeTips")),1),pt,l("a",{onClick:i[1]||(i[1]=z(a=>v(t).dontShowAgain=!0,["prevent"]))},u(n.$t("dontShowAgain")),1)])]),icon:y(()=>[f(v(re))]),_:1})):N("",!0),v(t).dontShowAgainNewImgOpts?N("",!0):(g(),L(b,{key:1,"show-icon":""},{message:y(()=>[l("div",vt,[l("div",null,u(n.$t("majorUpdateCustomCellSizeTips")),1),ft,l("a",{onClick:i[2]||(i[2]=z(a=>v(t).dontShowAgainNewImgOpts=!0,["prevent"]))},u(n.$t("dontShowAgain")),1)])]),_:1})),l("div",ht,[l("div",mt,[l("h2",null,u(n.$t("walkMode")),1),l("ul",null,[l("li",{onClick:i[3]||(i[3]=a=>v(J)("walk")),class:"item"},[l("span",gt,[f(v(le)),$(" "+u(n.$t("add")),1)])]),(g(!0),C(F,null,E(S.value,a=>(g(),L(de,{key:a.key,onOpenInNewTab:d=>m("local",a.dir,"walk"),onOpenOnTheRight:d=>_("local",a.dir,"walk")},{default:y(()=>[l("li",{class:"item rem",onClick:z(d=>h("local",a.dir,"walk"),["prevent"])},[l("span",bt,u(a.zh),1),a.can_delete?(g(),C(F,{key:0},[f(I,{type:"link",onClick:z(d=>v(ue)(a.dir),["stop"])},{default:y(()=>[$(u(n.$t("alias")),1)]),_:2},1032,["onClick"]),f(I,{type:"link",onClick:z(d=>v(ce)(a.dir,"walk"),["stop"])},{default:y(()=>[$(u(n.$t("remove")),1)]),_:2},1032,["onClick"])],64)):N("",!0)],8,_t)]),_:2},1032,["onOpenInNewTab","onOpenOnTheRight"]))),128))])]),v(t).quickMovePaths.length?(g(),C("div",kt,[l("h2",null,u(n.$t("launchFromNormalAndFixed")),1),l("ul",null,[l("li",{onClick:i[4]||(i[4]=a=>v(J)("scanned")),class:"item"},[l("span",yt,[f(v(le)),$(" "+u(n.$t("add")),1)])]),(g(!0),C(F,null,E(v(t).quickMovePaths.filter(({types:a})=>a.includes("cli_access_only")||a.includes("preset")||a.includes("scanned")||a.includes("scanned-fixed")),a=>(g(),C(F,{key:a.key},[(g(!0),C(F,null,E(a.types.filter(d=>d!=="walk"),d=>(g(),L(de,{key:d,onOpenInNewTab:R=>m("local",a.dir,d),onOpenOnTheRight:R=>_("local",a.dir,d)},{default:y(()=>[l("li",{class:"item rem",onClick:z(R=>h("local",a.dir,d),["prevent"])},[l("span",wt,[d=="scanned-fixed"?(g(),C("span",xt,"Fixed")):N("",!0),$(u(a.zh),1)]),a.can_delete&&(d==="scanned-fixed"||d==="scanned")?(g(),C(F,{key:0},[f(I,{type:"link",onClick:z(R=>v(ue)(a.dir),["stop"])},{default:y(()=>[$(u(n.$t("alias")),1)]),_:2},1032,["onClick"]),f(I,{type:"link",onClick:z(R=>v(ce)(a.dir,d),["stop"])},{default:y(()=>[$(u(n.$t("remove")),1)]),_:2},1032,["onClick"])],64)):N("",!0)],8,Ct)]),_:2},1032,["onOpenInNewTab","onOpenOnTheRight"]))),128))],64))),128))])])):N("",!0),l("div",Ot,[l("h2",null,u(n.$t("launch")),1),l("ul",null,[(g(!0),C(F,null,E(Object.keys(p),a=>(g(),C("li",{key:a,class:"item",onClick:z(d=>h(a),["prevent"])},[l("span",$t,u(p[a]),1)],8,St))),128)),l("li",{class:"item",onClick:i[5]||(i[5]=a=>v(s).opened=!0)},[l("span",It,u(n.$t("imgCompare")),1)]),M?(g(),C("li",{key:0,class:"item",onClick:V},[l("span",Pt,u(n.$t("openInNewWindow")),1)])):N("",!0),(D=A.value)!=null&&D.tabs.length?(g(),C("li",{key:1,class:"item",onClick:T},[l("span",Tt,u(n.$t("restoreLastRecord")),1)])):N("",!0)])]),v(t).recent.length?(g(),C("div",At,[l("div",Nt,[l("h2",null,u(n.$t("recent")),1),f(I,{onClick:i[6]||(i[6]=a=>v(t).recent=[]),type:"link"},{default:y(()=>[$(u(n.$t("clear")),1)]),_:1})]),l("ul",null,[(g(!0),C(F,null,E(v(t).recent,a=>(g(),C("li",{key:a.key,class:"item",onClick:z(d=>h("local",a.path),["prevent"])},[f(v(Ke),{class:"icon"}),l("span",Mt,u(a.path),1)],8,zt))),128))])])):N("",!0)])])}}});const Bt=Ue(Rt,[["__scopeId","data-v-eedf5472"]]);export{Bt as default};

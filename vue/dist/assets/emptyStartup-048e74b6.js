import{Y as he,Z as me,d as ce,u as fe,$ as D,g as H,a0 as ge,h as O,c as p,a1 as _e,a2 as be,a3 as ye,a4 as ke,a5 as we,a6 as Ce,a as te,a7 as Oe,P as S,a8 as Se,a9 as $e,aa as Ie,ab as xe,ac as Pe,ad as ze,ae as Ae,af as Me,ag as ie,k as De,ah as Te,ai as g,aj as ne,o as d,y as f,p as a,v as c,r as h,C as y,m as G,n as $,q as I,z as j,A as B,x as V,ak as Ee,al as ae,am as Fe,an as Le,ao as Ne,R as W,ap as He,U as je,aq as Be,ar as X,as as R,V as Ve,at as Re,au as qe,X as Qe}from"./index-8897613b.js";import{a as Ue,r as Ge}from"./db-afd72581.js";var We={success:Se,info:$e,error:Ie,warning:xe},Xe={success:Pe,info:ze,error:Ae,warning:Me},Ye=me("success","info","warning","error"),Ze=function(){return{type:S.oneOf(Ye),closable:{type:Boolean,default:void 0},closeText:S.any,message:S.any,description:S.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:S.any,closeIcon:S.any,onClose:Function}},Je=ce({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Ze(),setup:function(n,e){var i=e.slots,m=e.emit,k=e.attrs,x=e.expose,P=fe("alert",n),q=P.prefixCls,Q=P.direction,C=D(!1),T=D(!1),E=D(),t=function(l){l.preventDefault();var b=E.value;b.style.height="".concat(b.offsetHeight,"px"),b.style.height="".concat(b.offsetHeight,"px"),C.value=!0,m("close",l)},r=function(){var l;C.value=!1,T.value=!0,(l=n.afterClose)===null||l===void 0||l.call(n)};x({animationEnd:r});var _=D({});return function(){var u,l,b=n.banner,z=n.closeIcon,o=z===void 0?(u=i.closeIcon)===null||u===void 0?void 0:u.call(i):z,w=n.closable,A=n.type,M=n.showIcon,U=H(i,n,"closeText"),F=H(i,n,"description"),K=H(i,n,"message"),L=H(i,n,"icon");M=b&&M===void 0?!0:M,A=b&&A===void 0?"warning":A||"info";var re=(F?Xe:We)[A]||null;U&&(w=!0);var v=q.value,ue=ge(v,(l={},O(l,"".concat(v,"-").concat(A),!0),O(l,"".concat(v,"-closing"),C.value),O(l,"".concat(v,"-with-description"),!!F),O(l,"".concat(v,"-no-icon"),!M),O(l,"".concat(v,"-banner"),!!b),O(l,"".concat(v,"-closable"),w),O(l,"".concat(v,"-rtl"),Q.value==="rtl"),l)),de=w?p("button",{type:"button",onClick:t,class:"".concat(v,"-close-icon"),tabindex:0},[U?p("span",{class:"".concat(v,"-close-text")},[U]):o===void 0?p(_e,null,null):o]):null,pe=L&&(be(L)?ye(L,{class:"".concat(v,"-icon")}):p("span",{class:"".concat(v,"-icon")},[L]))||p(re,{class:"".concat(v,"-icon")},null),ve=ke("".concat(v,"-motion"),{appear:!1,css:!0,onAfterLeave:r,onBeforeLeave:function(N){N.style.maxHeight="".concat(N.offsetHeight,"px")},onLeave:function(N){N.style.maxHeight="0px"}});return T.value?null:p(Oe,ve,{default:function(){return[we(p("div",te(te({role:"alert"},k),{},{style:[k.style,_.value],class:[k.class,ue],"data-show":!C.value,ref:E}),[M?pe:null,p("div",{class:"".concat(v,"-content")},[K?p("div",{class:"".concat(v,"-message")},[K]):null,F?p("div",{class:"".concat(v,"-description")},[F]):null]),de]),[[Ce,!C.value]])]}})}}});const Ke=he(Je);var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"};const tt=et;function se(s){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?Object(arguments[n]):{},i=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable}))),i.forEach(function(m){nt(s,m,e[m])})}return s}function nt(s,n,e){return n in s?Object.defineProperty(s,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[n]=e,s}var Y=function(n,e){var i=se({},n,e.attrs);return p(ie,se({},i,{icon:tt}),null)};Y.displayName="FileDoneOutlined";Y.inheritAttrs=!1;const at=Y;var st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const ot=st;function oe(s){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?Object(arguments[n]):{},i=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable}))),i.forEach(function(m){lt(s,m,e[m])})}return s}function lt(s,n,e){return n in s?Object.defineProperty(s,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[n]=e,s}var Z=function(n,e){var i=oe({},n,e.attrs);return p(ie,oe({},i,{icon:ot}),null)};Z.displayName="LockOutlined";Z.inheritAttrs=!1;const le=Z;const J=s=>(Re("data-v-f96eb6be"),s=s(),qe(),s),ct={class:"container"},it={class:"header"},rt={key:0,style:{"margin-left":"16px","font-size":"1.5em"}},ut=J(()=>a("div",{"flex-placeholder":""},null,-1)),dt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing",target:"_blank",class:"last-record"},pt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/131",target:"_blank",class:"last-record"},vt={href:"https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90",target:"_blank",class:"last-record"},ht={class:"access-mode-message"},mt=J(()=>a("div",{"flex-placeholder":""},null,-1)),ft={class:"access-mode-message"},gt=J(()=>a("div",{"flex-placeholder":""},null,-1)),_t={class:"content"},bt={key:0,class:"feature-item"},yt={key:1,class:"feature-item"},kt={class:"text line-clamp-1"},wt=["onClick"],Ct={class:"text line-clamp-1"},Ot={class:"feature-item"},St=["onClick"],$t={class:"text line-clamp-1"},It={class:"text line-clamp-1"},xt={class:"text line-clamp-1"},Pt={class:"text line-clamp-1"},zt={key:2,class:"feature-item recent"},At={class:"title"},Mt=["onClick"],Dt={class:"text line-clamp-1"},Tt=ce({__name:"emptyStartup",props:{tabIdx:{},paneIdx:{}},setup(s){const n=s,e=De(),i=Te(),m={local:g("local"),"tag-search":g("imgSearch"),"fuzzy-search":g("fuzzy-search"),"global-setting":g("globalSettings"),"batch-download":g("batchDownload")+" / "+g("archive")},k=(t,r,_=!1)=>{let u;switch(t){case"grid-view":case"tag-search-matched-image-grid":case"img-sli":return;case"global-setting":case"tag-search":case"batch-download":case"fuzzy-search":case"empty":u={type:t,name:m[t],key:Date.now()+ae()};break;case"local":u={type:t,name:m[t],key:Date.now()+ae(),path:r,walkModePath:_?r:void 0}}const l=e.tabList[n.tabIdx];l.panes.splice(n.paneIdx,1,u),l.key=u.key},x=ne(()=>{var t;return(t=e.tabListHistoryRecord)==null?void 0:t[1]}),P=ne(()=>e.quickMovePaths.filter(({key:t})=>t==="outdir_txt2img_samples"||t==="outdir_img2img_samples")),q=window.parent!==window,Q=()=>window.parent.open("/infinite_image_browsing"),C=()=>{Fe(x.value),e.tabList=Le(x.value.tabs)},T=async()=>{let t;if({}.TAURI_ARCH){const r=await Ne({directory:!0});if(typeof r=="string")t=r;else return}else t=await new Promise(r=>{const _=D("");W.confirm({title:g("inputTargetFolderPath"),content:()=>He(je,{value:_.value,"onUpdate:value":u=>_.value=u}),async onOk(){const u=_.value;(await Be([u]))[u]?r(_.value):X.error(g("pathDoesNotExist"))}})});W.confirm({content:g("confirmToAddToQuickMove"),async onOk(){await Ue(t),X.success(g("addCompleted")),R.emit("searchIndexExpired"),R.emit("updateGlobalSetting")}})},E=t=>{W.confirm({content:g("confirmDelete"),closable:!0,async onOk(){await Ge(t),X.success(g("removeCompleted")),R.emit("searchIndexExpired"),R.emit("updateGlobalSetting")}})};return(t,r)=>{var l,b,z;const _=Ke,u=Ve;return d(),f("div",ct,[a("div",it,[a("h1",null,c(t.$t("welcome")),1),(l=h(e).conf)!=null&&l.enable_access_control&&h(e).dontShowAgain?(d(),f("div",rt,[p(h(le),{title:"Access Control mode",style:{"vertical-align":"text-bottom"}})])):y("",!0),ut,a("a",dt,c(t.$t("document")),1),a("a",pt,c(t.$t("changlog")),1),a("a",vt,c(t.$t("faq")),1)]),(b=h(e).conf)!=null&&b.enable_access_control&&!h(e).dontShowAgain?(d(),G(_,{key:0,"show-icon":""},{message:$(()=>[a("div",ht,[a("div",null,c(t.$t("accessControlModeTips")),1),mt,a("a",{onClick:r[0]||(r[0]=I(o=>h(e).dontShowAgain=!0,["prevent"]))},c(t.$t("dontShowAgain")),1)])]),icon:$(()=>[p(h(le))]),_:1})):y("",!0),h(e).dontShowAgainNewImgOpts?y("",!0):(d(),G(_,{key:1,"show-icon":""},{message:$(()=>[a("div",ft,[a("div",null,c(t.$t("majorUpdateCustomCellSizeTips")),1),gt,a("a",{onClick:r[1]||(r[1]=I(o=>h(e).dontShowAgainNewImgOpts=!0,["prevent"]))},c(t.$t("dontShowAgain")),1)])]),_:1})),a("div",_t,[P.value.length?(d(),f("div",bt,[a("h2",null,c(t.$t("walkMode")),1),a("ul",null,[(d(!0),f(j,null,B(P.value,o=>(d(),f("li",{key:o.dir,class:"item"},[p(u,{onClick:w=>k("local",o.dir,!0),ghost:"",type:"primary",block:""},{default:$(()=>[V(c(o.zh),1)]),_:2},1032,["onClick"])]))),128))])])):y("",!0),h(e).quickMovePaths.length?(d(),f("div",yt,[a("h2",null,c(t.$t("launchFromQuickMove")),1),a("ul",null,[a("li",{onClick:T,class:"item",style:{"text-align":""}},[a("span",kt,[p(h(Ee)),V(" "+c(t.$t("add")),1)])]),(d(!0),f(j,null,B(h(e).quickMovePaths,o=>(d(),f("li",{key:o.key,class:"item rem",onClick:I(w=>k("local",o.dir),["prevent"])},[a("span",Ct,c(o.zh),1),o.can_delete?(d(),G(u,{key:0,type:"link",onClick:I(w=>E(o.dir),["stop"])},{default:$(()=>[V(c(t.$t("remove")),1)]),_:2},1032,["onClick"])):y("",!0)],8,wt))),128))])])):y("",!0),a("div",Ot,[a("h2",null,c(t.$t("launch")),1),a("ul",null,[(d(!0),f(j,null,B(Object.keys(m),o=>(d(),f("li",{key:o,class:"item",onClick:I(w=>k(o),["prevent"])},[a("span",$t,c(m[o]),1)],8,St))),128)),a("li",{class:"item",onClick:r[2]||(r[2]=o=>h(i).opened=!0)},[a("span",It,c(t.$t("imgCompare")),1)]),q?(d(),f("li",{key:0,class:"item",onClick:Q},[a("span",xt,c(t.$t("openInNewWindow")),1)])):y("",!0),(z=x.value)!=null&&z.tabs.length?(d(),f("li",{key:1,class:"item",onClick:C},[a("span",Pt,c(t.$t("restoreLastRecord")),1)])):y("",!0)])]),h(e).recent.length?(d(),f("div",zt,[a("div",At,[a("h2",null,c(t.$t("recent")),1),p(u,{onClick:r[3]||(r[3]=o=>h(e).recent=[]),type:"link"},{default:$(()=>[V(c(t.$t("clear")),1)]),_:1})]),a("ul",null,[(d(!0),f(j,null,B(h(e).recent,o=>(d(),f("li",{key:o.key,class:"item",onClick:I(w=>k("local",o.path),["prevent"])},[p(h(at),{class:"icon"}),a("span",Dt,c(o.path),1)],8,Mt))),128))])])):y("",!0)])])}}});const Lt=Qe(Tt,[["__scopeId","data-v-f96eb6be"]]);export{Lt as default};

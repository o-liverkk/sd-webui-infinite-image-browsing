import{d as ce,u as je,g as re,_ as it,c as l,a as Oe,P as ke,D as Be,f as ut,w as Mt,b as Ot,e as Bt,h as Ze,M as Le,i as Lt,j as Rt,F as Re,A as ct,r as le,k as Ne,l as et,o as Nt,s as Pe,m as Ae,n as dt,p as Et,q as zt,t as Tt,v as $e,x as X,y as tt,z as jt,B as Fe,C as at,E as Ee,G as Vt,H as Ut,I as De,J as Gt,K as Wt,L as qt,N as D,O as j,Q as y,R as Y,S as P,T as ze,U as G,V as pt,W as Ht,X as V,Y as b,Z as e,$ as S,a0 as U,a1 as Kt,a2 as nt,a3 as Qt,a4 as Jt,a5 as Xt,a6 as Yt,a7 as Zt,a8 as ea,a9 as ta,aa as st,ab as aa,ac as na,ad as sa,ae as oa,af as ra,ag as la}from"./index-32d02ded.js";import{S as ie,s as ia}from"./index-92e2d165.js";import{F as W,N as ua,_ as ca}from"./numInput-9a78cfdd.js";import"./index-b5757e76.js";/* empty css              */import{_ as da}from"./shortcut-b348c24b.js";import{D as ft}from"./index-94a7cd3a.js";/* empty css              */import{u as Ve,N as pa,g as x,s as vt,a as fa,b as va,c as ma,d as ga,F as ha}from"./FileItem-c17a3ae6.js";import{u as ka,a as ba,b as ya,c as Ca,M as wa,L as _a,R as Ia,f as Sa}from"./MultiSelectKeep-28922a37.js";import{g as he,l as xe,o as Pa}from"./functionalCallableComp-f6029f4c.js";import"./Checkbox-a666cc59.js";var Aa=["class","style"],$a=function(){return{prefixCls:String,href:String,separator:ke.any,overlay:ke.any,onClick:Function}};const ue=ce({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:$a(),slots:["separator","overlay"],setup:function(t,c){var r=c.slots,v=c.attrs,m=je("breadcrumb",t),A=m.prefixCls,M=function(i,d){var f=re(r,t,"overlay");return f?l(ft,{overlay:f,placement:"bottom"},{default:function(){return[l("span",{class:"".concat(d,"-overlay-link")},[i,l(Be,null,null)])]}}):i};return function(){var w,i=(w=re(r,t,"separator"))!==null&&w!==void 0?w:"/",d=re(r,t),f=v.class,g=v.style,C=it(v,Aa),h;return t.href!==void 0?h=l("a",Oe({class:"".concat(A.value,"-link"),onClick:t.onClick},C),[d]):h=l("span",Oe({class:"".concat(A.value,"-link"),onClick:t.onClick},C),[d]),h=M(h,A.value),d?l("span",{class:f,style:g},[h,i&&l("span",{class:"".concat(A.value,"-separator")},[i])]):null}}});var Fa=function(){return{prefixCls:String,routes:{type:Array},params:ke.any,separator:ke.any,itemRender:{type:Function}}};function Da(s,t){if(!s.breadcrumbName)return null;var c=Object.keys(t).join("|"),r=s.breadcrumbName.replace(new RegExp(":(".concat(c,")"),"g"),function(v,m){return t[m]||v});return r}function ot(s){var t=s.route,c=s.params,r=s.routes,v=s.paths,m=r.indexOf(t)===r.length-1,A=Da(t,c);return m?l("span",null,[A]):l("a",{href:"#/".concat(v.join("/"))},[A])}const ae=ce({compatConfig:{MODE:3},name:"ABreadcrumb",props:Fa(),slots:["separator","itemRender"],setup:function(t,c){var r=c.slots,v=je("breadcrumb",t),m=v.prefixCls,A=v.direction,M=function(f,g){return f=(f||"").replace(/^\//,""),Object.keys(g).forEach(function(C){f=f.replace(":".concat(C),g[C])}),f},w=function(f,g,C){var h=Lt(f),O=M(g||"",C);return O&&h.push(O),h},i=function(f){var g=f.routes,C=g===void 0?[]:g,h=f.params,O=h===void 0?{}:h,_=f.separator,L=f.itemRender,B=L===void 0?ot:L,R=[];return C.map(function(I){var T=M(I.path,O);T&&R.push(T);var q=[].concat(R),H=null;return I.children&&I.children.length&&(H=l(Le,null,{default:function(){return[I.children.map(function(z){return l(Le.Item,{key:z.path||z.breadcrumbName},{default:function(){return[B({route:z,params:O,routes:C,paths:w(q,z.path,O)})]}})})]}})),l(ue,{overlay:H,separator:_,key:T||I.breadcrumbName},{default:function(){return[B({route:I,params:O,routes:C,paths:q})]}})})};return function(){var d,f,g,C=t.routes,h=t.params,O=h===void 0?{}:h,_=ut(re(r,t)),L=(d=re(r,t,"separator"))!==null&&d!==void 0?d:"/",B=t.itemRender||r.itemRender||ot;C&&C.length>0?g=i({routes:C,params:O,separator:L,itemRender:B}):_.length&&(g=_.map(function(I,T){return Mt(Ot(I.type)==="object"&&(I.type.__ANT_BREADCRUMB_ITEM||I.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Bt(I,{separator:L,key:T})}));var R=(f={},Ze(f,m.value,!0),Ze(f,"".concat(m.value,"-rtl"),A.value==="rtl"),f);return l("div",{class:R},[g])}}});var xa=["separator","class"],Ma=function(){return{prefixCls:String}};const Te=ce({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Ma(),setup:function(t,c){var r=c.slots,v=c.attrs,m=je("breadcrumb",t),A=m.prefixCls;return function(){var M;v.separator;var w=v.class,i=it(v,xa),d=ut((M=r.default)===null||M===void 0?void 0:M.call(r));return l("span",Oe({class:["".concat(A.value,"-separator"),w]},i),[d.length>0?d:"/"])}}});ae.Item=ue;ae.Separator=Te;ae.install=function(s){return s.component(ae.name,ae),s.component(ue.name,ue),s.component(Te.name,Te),s};W.useInjectFormItemContext=Rt;W.ItemRest=Re;W.install=function(s){return s.component(W.name,W),s.component(W.Item.name,W.Item),s.component(Re.name,Re),s};ie.setDefaultIndicator=ia;ie.install=function(s){return s.component(ie.name,ie),s};var Oa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const Ba=Oa;function rt(s){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(c).filter(function(v){return Object.getOwnPropertyDescriptor(c,v).enumerable}))),r.forEach(function(v){La(s,v,c[v])})}return s}function La(s,t,c){return t in s?Object.defineProperty(s,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[t]=c,s}var Ue=function(t,c){var r=rt({},t,c.attrs);return l(ct,rt({},r,{icon:Ba}),null)};Ue.displayName="ArrowLeftOutlined";Ue.inheritAttrs=!1;const Ra=Ue;var Na={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const Ea=Na;function lt(s){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(c).filter(function(v){return Object.getOwnPropertyDescriptor(c,v).enumerable}))),r.forEach(function(v){za(s,v,c[v])})}return s}function za(s,t,c){return t in s?Object.defineProperty(s,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[t]=c,s}var Ge=function(t,c){var r=lt({},t,c.attrs);return l(ct,lt({},r,{icon:Ea}),null)};Ge.displayName="DatabaseOutlined";Ge.inheritAttrs=!1;const Ta=Ge;function ja(){const s=le(),{scroller:t,stackViewEl:c,stack:r,currPage:v,currLocation:m,useEventListen:A,eventEmitter:M,getPane:w,props:i,deletedFiles:d,walker:f,sortedFiles:g}=Ve().toRefs();Ne(()=>r.value.length,et((a,u)=>{var p;a!==u&&((p=t.value)==null||p.scrollToItem(0))},300)),Nt(async()=>{var a;if(!r.value.length)if(i.value.mode==="scanned-fixed"||i.value.mode==="walk")r.value=[{files:[],curr:i.value.path??""}];else{const u=await he("/");r.value.push({files:u.files,curr:"/"})}s.value=new pa,s.value.configure({parent:c.value}),i.value.path&&i.value.path!=="/"?await B(i.value.path):(a=x.conf)!=null&&a.home&&B(x.conf.home)}),Ne(m,et(a=>{const u=w.value();if(!u)return;u.path=a;const p=Pe(a).pop()??"",F=(()=>{const N={walk:"Walk","scanned-fixed":"Fixed",scanned:null}[i.value.mode??"scanned"],E=ee=>N?`${N}: ${ee}`:ee,J=x.getShortPath(a);return E(J.length>24&&p?p:J)})();u.name=Ae("div",{style:"display:flex;align-items:center"},[Ae(Ta),Ae("span",{class:"line-clamp-1",style:"max-width: 256px"},F)]),u.nameFallbackStr=F,x.recent=x.recent.filter(N=>N.key!==u.key),x.recent.unshift({path:a,key:u.key,mode:i.value.mode}),x.recent.length>20&&(x.recent=x.recent.slice(0,20))},300));const C=()=>Ee(m.value),h=async a=>{var u,p;if(a.type==="dir")try{(u=s.value)==null||u.start();const{files:$}=await he(a.fullpath);i.value.mode=="scanned-fixed"?r.value=[{files:$,curr:a.fullpath}]:r.value.push({files:$,curr:a.name})}finally{(p=s.value)==null||p.done()}},O=a=>{if(i.value.mode!="walk")for(;a<r.value.length-1;)r.value.pop()},_=()=>{B(Vt(m.value))},L=(a,u)=>(Ut(x.conf,"global.conf load failed"),x.conf.is_win?a.toLowerCase()==u.toLowerCase():a==u),B=async a=>{i.value.mode==="walk"?w.value().path=a:i.value.mode==="scanned-fixed"?await h({fullpath:a,name:a,type:"dir"}):await R(a),dt(500).then(()=>M.value.emit("viewableAreaFilesChange"))},R=async a=>{var p,$;const u=r.value.slice();try{Et(a)||(a=zt(((p=x.conf)==null?void 0:p.sd_cwd)??"/",a));const F=Pe(a),N=r.value.map(E=>E.curr);for(N.shift();N[0]&&F[0]&&L(N[0],F[0]);)N.shift(),F.shift();for(let E=0;E<N.length;E++)r.value.pop();if(!F.length)return I();for(const E of F){const J=($=v.value)==null?void 0:$.files.find(ee=>L(ee.name,E));if(!J)throw console.error({frags:F,frag:E,stack:Tt(r.value)}),new Error(`${E} not found`);await h(J)}}catch(F){throw $e.error(X("moveFailedCheckPath")+(F instanceof Error?F.message:"")),console.error(a,Pe(a),v.value),r.value=u,F}},I=tt(async()=>{var a,u,p;try{if((a=s.value)==null||a.start(),f.value)await f.value.reset(),M.value.emit("loadNextDir");else{const{files:$}=await he(m.value);xe(r.value).files=$}d.value.clear(),(u=t.value)==null||u.scrollToItem(0),$e.success(X("refreshCompleted"))}finally{(p=s.value)==null||p.done()}});jt("returnToIIB",tt(async()=>{var a,u;if(i.value.mode!=="walk")try{(a=s.value)==null||a.start();const{files:p}=await he(m.value);xe(r.value).files.map(F=>F.date).join()!==p.map(F=>F.date).join()&&(xe(r.value).files=p,$e.success(X("autoUpdate")))}finally{(u=s.value)==null||u.done()}})),A.value("refresh",I);const T=a=>{B(a)},q=Fe(()=>x.quickMovePaths.map(a=>({...a,path:at(a.dir)}))),H=Fe(()=>{const a=at(m.value);return q.value.find(p=>p.path===a)}),Z=async()=>{const a=x.tabList[i.value.tabIdx],u={type:"empty",name:X("emptyStartPage"),key:Date.now()+De(),popAddPathModal:{path:m.value,type:"scanned"}};a.panes.push(u),a.key=u.key},z=le(!1),K=le(m.value),de=()=>{z.value=!0,K.value=m.value},be=async()=>{await B(K.value),z.value=!1};ka("click",a=>{var u,p,$;($=(p=(u=a.target)==null?void 0:u.className)==null?void 0:p.includes)!=null&&$.call(p,"ant-input")||(z.value=!1)});const ye=()=>{const a=parent.location,u=a.href.substring(0,a.href.length-a.search.length),p=new URLSearchParams(a.search);p.set("action","open"),p.set("path",m.value),p.set("mode",i.value.mode??"scanned");const $=`${u}?${p.toString()}`;Ee($,X("copyLocationUrlSuccessMsg"))},ne=(a="tag-search")=>{const u=x.tabList[i.value.tabIdx],p={type:a,key:De(),searchScope:m.value,name:X(a==="tag-search"?"imgSearch":"fuzzy-search")};u.panes.push(p),u.key=p.key},Q=()=>M.value.emit("selectAll"),se=async()=>{await Pa(m.value),await I()},pe=()=>{const a=m.value;vt.set(a,r.value);const u=x.tabList[i.value.tabIdx],p={type:"local",key:De(),path:a,name:X("local"),stackKey:a,mode:"walk"};u.panes.push(p),u.key=p.key},Ce=Fe(()=>!f.value&&g.value.some(a=>a.type==="dir"));return{locInputValue:K,isLocationEditing:z,onLocEditEnter:be,onEditBtnClick:de,addToSearchScanPathAndQuickMove:Z,searchPathInfo:H,refresh:I,copyLocation:C,back:O,openNext:h,currPage:v,currLocation:m,stack:r,scroller:t,share:ye,selectAll:Q,quickMoveTo:T,onCreateFloderBtnClick:se,onWalkBtnClick:pe,showWalkButton:Ce,searchInCurrentDir:ne,backToLastUseTo:_}}const Me=new Map,Va=()=>{const{useEventListen:s,sortedFiles:t,getViewableAreaFiles:c}=Ve().toRefs(),r=le(x.defaultChangeIndchecked),v=le(x.defaultSeedChangeChecked),m=async()=>{if(await dt(100),!r.value)return;const w=c.value().filter(d=>Gt(d.fullpath)&&!d.gen_info_obj);if(!w.length)return;const i=await Wt(w.map(d=>d.fullpath).filter(d=>!Me.has(d)));w.forEach(d=>{const f=i[d.fullpath]||Me.get(d.fullpath)||"";Me.set(d.fullpath,f),d.gen_info_obj=qt(f),d.gen_info_raw=f})};s.value("viewableAreaFilesChange",m);const A=w=>{const i=t.value;return[w,v.value,i[w-1],i[w],i[w+1]]};function M(w,i,d,f){const g={diff:{},empty:!0,ownFile:"",otherFile:""};if(i+d<0||i+d>=t.value.length||t.value[i]==null||!("gen_info_obj"in t.value[i])||!("gen_info_obj"in t.value[i+d]))return g;const C=w,h=t.value[i+d].gen_info_obj;if(h==null)return g;const O=["hashes","resources"];g.diff={},g.ownFile=f.name,g.otherFile=t.value[i+d].name,g.empty=!1,v.value||O.push("seed");for(const _ in C)if(!O.includes(_)){if(!(_ in h)){g.diff[_]="+";continue}if(C[_]!=h[_])if(_.includes("rompt")&&C[_]!=""&&h[_]!=""){const L=C[_].split(","),B=h[_].split(",");let R=0;for(const I in L)L[I]!=B[I]&&R++;g.diff[_]=R}else g.diff[_]=[C[_],h[_]]}return g}return{getGenDiff:M,changeIndchecked:r,seedChangeChecked:v,getRawGenParams:()=>m(),getGenDiffWatchDep:A}};const Ua={class:"base-info"},Ga=ce({__name:"BaseFileListInfo",props:{fileNum:{},selectedFileNum:{}},setup(s){return(t,c)=>(D(),j("div",Ua,[y("span",null,[Y(P(t.$t("items",[t.fileNum]))+" ",1),t.selectedFileNum?(D(),j(ze,{key:0},[Y(", "+P(t.$t("selectedItems",[t.selectedFileNum])),1)],64)):G("",!0)])]))}});const Wa=pt(Ga,[["__scopeId","data-v-afd25667"]]),qa={class:"hint"},Ha={class:"location-bar"},Ka=["onClick"],Qa={key:3,class:"location-act"},Ja={class:"actions"},Xa=["onClick"],Ya={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Za={style:{padding:"4px"}},en={style:{padding:"4px"}},tn={style:{padding:"4px"}},an={key:0,class:"view"},nn={style:{padding:"16px 0 512px"}},sn={key:0,class:"preview-switch"},on=ce({__name:"stackView",props:{tabIdx:{},paneIdx:{},path:{},mode:{},stackKey:{}},setup(s){const t=s,c=Ht(),{scroller:r,stackViewEl:v,props:m,multiSelectedIdxs:A,spinning:M}=Ve().toRefs(),{currLocation:w,currPage:i,refresh:d,copyLocation:f,back:g,openNext:C,stack:h,quickMoveTo:O,addToSearchScanPathAndQuickMove:_,locInputValue:L,isLocationEditing:B,onLocEditEnter:R,onEditBtnClick:I,share:T,selectAll:q,onCreateFloderBtnClick:H,onWalkBtnClick:Z,showWalkButton:z,searchInCurrentDir:K,backToLastUseTo:de}=ja(),{gridItems:be,sortMethodConv:ye,moreActionsDropdownShow:ne,sortedFiles:Q,sortMethod:se,itemSize:pe,loadNextDir:Ce,loadNextDirLoading:a,canLoadNext:u,onScroll:p,cellWidth:$,dirCoverCache:F}=fa(),{onDrop:N,onFileDragStart:E,onFileDragEnd:J}=ba(),{onFileItemClick:ee,onContextMenuClick:We,showGenInfo:fe,imageGenInfo:qe,q:mt}=ya({openNext:C}),{previewIdx:ve,onPreviewVisibleChange:gt,previewing:we,previewImgMove:He,canPreview:Ke}=Ca(),{showMenuIdx:_e}=va(),{onClearAllSelected:ht,onReverseSelect:kt,onSelectAll:bt}=ma(),{getGenDiff:yt,changeIndchecked:oe,seedChangeChecked:me,getRawGenParams:Ct,getGenDiffWatchDep:wt}=Va();return Ne(()=>t,()=>{m.value=t;const k=vt.get(t.stackKey??"");k&&(h.value=k.slice())},{immediate:!0}),(k,n)=>{const _t=aa,It=na,St=sa,Pt=oa,At=ue,$t=ae,Qe=ra,Ie=la,Je=Le,Se=ft,Ft=ua,ge=ca,Xe=da,Dt=W,xt=ie;return D(),V(xt,{spinning:e(M),size:"large"},{default:b(()=>[l(wa,{show:e(c).keepMultiSelect||!!e(A).length,onClearAllSelected:e(ht),onSelectAll:e(bt),onReverseSelect:e(kt)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),l(_t,{style:{display:"none"}}),y("div",{ref_key:"stackViewEl",ref:v,onDragover:n[30]||(n[30]=S(()=>{},["prevent"])),onDrop:n[31]||(n[31]=S(o=>e(N)(o),["prevent"])),class:"container"},[l(St,{visible:e(fe),"onUpdate:visible":n[1]||(n[1]=o=>U(fe)?fe.value=o:null),width:"70vw","mask-closable":"",onOk:n[2]||(n[2]=o=>fe.value=!1)},{cancelText:b(()=>[]),default:b(()=>[l(It,{active:"",loading:!e(mt).isIdle},{default:b(()=>[y("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:n[0]||(n[0]=o=>e(Ee)(e(qe)))},[y("div",qa,P(k.$t("doubleClickToCopy")),1),Y(" "+P(e(qe)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),y("div",Ha,[y("div",{class:"breadcrumb",style:Kt({flex:e(B)?1:""})},[e(B)?(D(),V(Pt,{key:0,style:{flex:"1"},value:e(L),"onUpdate:value":n[3]||(n[3]=o=>U(L)?L.value=o:null),onClick:n[4]||(n[4]=S(()=>{},["stop"])),onKeydown:n[5]||(n[5]=S(()=>{},["stop"])),onPressEnter:e(R),"allow-clear":""},null,8,["value","onPressEnter"])):(D(),V($t,{key:1,style:{flex:"1"}},{default:b(()=>[(D(!0),j(ze,null,nt(e(h),(o,te)=>(D(),V(At,{key:te},{default:b(()=>[y("a",{onClick:S(Ye=>e(g)(te),["prevent"])},P(o.curr==="/"?k.$t("root"):o.curr.replace(/:\/$/,k.$t("drive"))),9,Ka)]),_:2},1024))),128))]),_:1})),e(B)?(D(),V(Qe,{key:2,size:"small",onClick:e(R),type:"primary"},{default:b(()=>[Y(P(k.$t("go")),1)]),_:1},8,["onClick"])):(D(),j("div",Qa,[k.mode==="scanned-fixed"?(D(),j("a",{key:0,onClick:n[6]||(n[6]=S((...o)=>e(de)&&e(de)(...o),["prevent"])),style:{margin:"0 8px 16px 0"}},[l(e(Ra))])):G("",!0),y("a",{onClick:n[7]||(n[7]=S((...o)=>e(f)&&e(f)(...o),["prevent"])),class:"copy"},P(k.$t("copy")),1),y("a",{onClick:n[8]||(n[8]=S((...o)=>e(I)&&e(I)(...o),["prevent","stop"]))},P(k.$t("edit")),1)]))],4),y("div",Ja,[y("a",{class:"opt",onClick:n[9]||(n[9]=S((...o)=>e(d)&&e(d)(...o),["prevent"]))},P(k.$t("refresh")),1),l(Se,null,{overlay:b(()=>[l(Je,null,{default:b(()=>[l(Ie,{key:"tag-search"},{default:b(()=>[y("a",{onClick:n[11]||(n[11]=S(o=>e(K)("tag-search"),["prevent"]))},P(k.$t("imgSearch")),1)]),_:1}),l(Ie,{key:"tag-search"},{default:b(()=>[y("a",{onClick:n[12]||(n[12]=S(o=>e(K)("fuzzy-search"),["prevent"]))},P(k.$t("fuzzy-search")),1)]),_:1})]),_:1})]),default:b(()=>[y("a",{class:"opt",onClick:n[10]||(n[10]=S(()=>{},["prevent"]))},[Y(P(k.$t("search"))+" ",1),l(e(Be))])]),_:1}),e(z)?(D(),j("a",{key:0,class:"opt",onClick:n[13]||(n[13]=S((...o)=>e(Z)&&e(Z)(...o),["prevent"]))}," Walk ")):G("",!0),y("a",{class:"opt",onClick:n[14]||(n[14]=S((...o)=>e(q)&&e(q)(...o),["prevent","stop"]))},P(k.$t("selectAll")),1),e(Qt)?G("",!0):(D(),j("a",{key:1,class:"opt",onClick:n[15]||(n[15]=S((...o)=>e(T)&&e(T)(...o),["prevent"]))},P(k.$t("share")),1)),l(Se,null,{overlay:b(()=>[l(Je,null,{default:b(()=>[(D(!0),j(ze,null,nt(e(c).quickMovePaths,o=>(D(),V(Ie,{key:o.dir},{default:b(()=>[y("a",{onClick:S(te=>e(O)(o.dir),["prevent"])},P(o.zh),9,Xa)]),_:2},1024))),128))]),_:1})]),default:b(()=>[y("a",{class:"opt",onClick:n[16]||(n[16]=S(()=>{},["prevent"]))},[Y(P(k.$t("quickMove"))+" ",1),l(e(Be))])]),_:1}),l(Se,{trigger:["click"],visible:e(ne),"onUpdate:visible":n[26]||(n[26]=o=>U(ne)?ne.value=o:null),placement:"bottomLeft",getPopupContainer:o=>o.parentNode},{overlay:b(()=>[y("div",Ya,[l(Dt,Jt(Xt({labelCol:{span:10},wrapperCol:{span:14}})),{default:b(()=>[l(ge,{label:k.$t("gridCellWidth")},{default:b(()=>[l(Ft,{modelValue:e($),"onUpdate:modelValue":n[18]||(n[18]=o=>U($)?$.value=o:null),max:1024,min:64,step:64},null,8,["modelValue"])]),_:1},8,["label"]),l(ge,{label:k.$t("sortingMethod")},{default:b(()=>[l(e(Yt),{value:e(se),"onUpdate:value":n[19]||(n[19]=o=>U(se)?se.value=o:null),onClick:n[20]||(n[20]=S(()=>{},["stop"])),conv:e(ye),options:e(Zt)},null,8,["value","conv","options"])]),_:1},8,["label"]),l(ge,{label:k.$t("showChangeIndicators")},{default:b(()=>[l(Xe,{checked:e(oe),"onUpdate:checked":n[21]||(n[21]=o=>U(oe)?oe.value=o:null),onClick:e(Ct)},null,8,["checked","onClick"])]),_:1},8,["label"]),l(ge,{label:k.$t("seedAsChange")},{default:b(()=>[l(Xe,{checked:e(me),"onUpdate:checked":n[22]||(n[22]=o=>U(me)?me.value=o:null),disabled:!e(oe)},null,8,["checked","disabled"])]),_:1},8,["label"]),y("div",Za,[y("a",{onClick:n[23]||(n[23]=S((...o)=>e(_)&&e(_)(...o),["prevent"]))},P(k.$t("addToSearchScanPathAndQuickMove")),1)]),y("div",en,[y("a",{onClick:n[24]||(n[24]=S(o=>e(ea)(e(w)+"/"),["prevent"]))},P(k.$t("openWithLocalFileBrowser")),1)]),y("div",tn,[y("a",{onClick:n[25]||(n[25]=S((...o)=>e(H)&&e(H)(...o),["prevent"]))},P(k.$t("createFolder")),1)])]),_:1},16)])]),default:b(()=>[y("a",{class:"opt",onClick:n[17]||(n[17]=S(()=>{},["prevent"]))},P(k.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(i)?(D(),j("div",an,[l(e(ga),{class:"file-list",items:e(Q),ref_key:"scroller",ref:r,onScroll:e(p),"item-size":e(pe).first,"key-field":"fullpath","item-secondary-size":e(pe).second,gridItems:e(be)},{default:b(({item:o,index:te})=>[l(ha,{idx:parseInt(te),file:o,"full-screen-preview-image-url":e(Q)[e(ve)]?e(ta)(e(Q)[e(ve)]):"","show-menu-idx":e(_e),"onUpdate:showMenuIdx":n[27]||(n[27]=Ye=>U(_e)?_e.value=Ye:null),selected:e(A).includes(te),"cell-width":e($),onFileItemClick:e(ee),onDragstart:e(E),onDragend:e(J),onPreviewVisibleChange:e(gt),onContextMenuClick:e(We),"is-selected-mutil-files":e(A).length>1,"enable-change-indicator":e(oe),"seed-change-checked":e(me),"get-gen-diff":e(yt),"get-gen-diff-watch-dep":e(wt),previewing:e(we),"cover-files":e(F).get(o.fullpath)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","cell-width","onFileItemClick","onDragstart","onDragend","onPreviewVisibleChange","onContextMenuClick","is-selected-mutil-files","enable-change-indicator","seed-change-checked","get-gen-diff","get-gen-diff-watch-dep","previewing","cover-files"])]),after:b(()=>[y("div",nn,[t.mode==="walk"?(D(),V(Qe,{key:0,onClick:e(Ce),loading:e(a),block:"",type:"primary",disabled:!e(u),ghost:""},{default:b(()=>[Y(P(k.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])):G("",!0)])]),_:1},8,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(we)?(D(),j("div",sn,[l(e(_a),{onClick:n[28]||(n[28]=o=>e(He)("prev")),class:st({disable:!e(Ke)("prev")})},null,8,["class"]),l(e(Ia),{onClick:n[29]||(n[29]=o=>e(He)("next")),class:st({disable:!e(Ke)("next")})},null,8,["class"])])):G("",!0)])):G("",!0)],544),e(we)?(D(),V(Sa,{key:0,file:e(Q)[e(ve)],idx:e(ve),onContextMenuClick:e(We)},null,8,["file","idx","onContextMenuClick"])):G("",!0),l(Wa,{"file-num":e(Q).length,"selected-file-num":e(A).length},null,8,["file-num","selected-file-num"])]),_:1},8,["spinning"])}}});const bn=pt(on,[["__scopeId","data-v-c0df9ec0"]]);export{bn as default};

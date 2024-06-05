import{d4 as b,c as o,A as w,cx as i,cm as y,V as h,ac as c,d5 as x,d6 as O,ae as I,ci as F,a8 as S,v as l,d7 as M,ap as N,t as _,r as f,ad as v,p as k,Q as D,d8 as V}from"./index-db6e6f1f.js";var p=1/0,P=17976931348623157e292;function A(e){if(!e)return e===0?e:0;if(e=b(e),e===p||e===-p){var t=e<0?-1:1;return t*P}return e===e?e:0}function U(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const C=j;function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),a.forEach(function(r){T(e,r,n[r])})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(t,n){var a=m({},t,n.attrs);return o(w,m({},a,{icon:C}),null)};d.displayName="DownloadOutlined";d.inheritAttrs=!1;const E=d,H=async e=>(await i.value.get("/files",{params:{folder_path:e}})).data,$=async e=>(await i.value.post("/delete_files",{file_paths:e})).data,B=async(e,t,n)=>(await i.value.post("/move_files",{file_paths:e,dest:t,create_dest_folder:n})).data,G=async(e,t,n)=>(await i.value.post("/copy_files",{file_paths:e,dest:t,create_dest_folder:n})).data,R=async e=>{await i.value.post("/mkdirs",{dest_folder:e})},W=e=>{const t=f("");return new Promise(n=>{c.confirm({title:l("inputFolderName"),content:()=>o(v,{value:t.value,"onUpdate:value":a=>t.value=a},null),async onOk(){if(!t.value)return;const a=k(e,t.value);await R(a),n()}})})},L=()=>o("p",{style:{background:"var(--zp-secondary-background)",padding:"8px",borderLeft:"4px solid var(--primary-color)"}},[D("Tips: "),l("multiSelectTips")]),Q=(e,t)=>{const n=y(),a=h(),r=s=>{var u;return!!((u=n.tagMap.get(e.fullpath))!=null&&u.some(g=>g.id===s))};c.confirm({width:"80vw",title:e.name,icon:null,content:()=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},[o("video",{style:{maxHeight:x?"80vh":"60vh",maxWidth:"100%",minWidth:"70%"},src:O(e),controls:!0,autoplay:!0},null),o("div",{style:{marginTop:"4px"}},[a.conf.all_custom_tags.map(s=>o("div",{key:s.id,onClick:()=>t==null?void 0:t(s.id),style:{background:r(s.id)?n.getColor(s.name):"var(--zp-primary-background)",color:r(s.id)?"white":n.getColor(s.name),margin:"2px",padding:"2px 16px","border-radius":"4px",display:"inline-block",cursor:"pointer","font-weight":"bold",transition:".5s all ease",border:`2px solid ${n.getColor(s.name)}`,"user-select":"none"}},[s.name]))]),o("div",{class:"actions",style:{marginTop:"16px"}},[o(I,{onClick:()=>F([S(e,!0)])},{icon:o(E,null,null),default:l("download")})])]),maskClosable:!0,wrapClassName:"hidden-antd-btns-modal"})},X=()=>{c.confirm({title:l("confirmRebuildImageIndex"),onOk:async()=>{await M(),N.emit("searchIndexExpired"),_.success(l("rebuildComplete"))}})},Y=e=>{const t=f(e.split(/[\\/]/).pop()??"");return new Promise(n=>{c.confirm({title:l("rename"),content:()=>o(v,{value:t.value,"onUpdate:value":a=>t.value=a},null),async onOk(){if(!t.value)return;const a=await V({path:e,name:t.value});n(a.new_path)}})})};export{L as M,X as a,Y as b,G as c,$ as d,Q as e,H as g,U as l,B as m,W as o,A as t};

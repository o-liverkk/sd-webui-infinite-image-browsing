import{d as v,cw as C,bY as I,L as l,N as _,O as f,c,X as r,Q as w,R as d,Y as e,W as F,a8 as x,cb as z,cx as B,ae as R,U as $}from"./index-db6e6f1f.js";import{u as S,a as E,k as V,F as A,d as L}from"./FileItem-e0fb56db.js";import"./functionalCallableComp-398e1966.js";import"./index-fab27d40.js";/* empty css              */const N={class:"actions-panel actions"},T={key:0,class:"file-list"},U={class:"hint"},H=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(O){const{stackViewEl:h}=S().toRefs(),{itemSize:p,gridItems:k,cellWidth:b}=E(),i=V(),{selectdFiles:n}=C(i),u=I(),y=async t=>{const s=z(t);s&&i.addFiles(s.nodes)},D=async()=>{u.pushAction(async()=>{const t=await B.value.post("/zip",{paths:n.value.map(o=>o.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(a),a.click()})},g=t=>{n.value.splice(t,1)};return(t,s)=>{const a=R;return l(),_("div",{class:"container",ref_key:"stackViewEl",ref:h,onDrop:y},[f("div",N,[c(a,{onClick:s[0]||(s[0]=o=>e(i).selectdFiles=[])},{default:r(()=>[w(d(t.$t("clear")),1)]),_:1}),c(a,{onClick:D,type:"primary",loading:!e(u).isIdle},{default:r(()=>[w(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(n).length?(l(),F(e(L),{key:1,ref:"scroller",class:"file-list",items:e(n).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:o,index:m})=>[c(A,{idx:m,file:o,"cell-width":e(b),"enable-close-icon":"",onCloseIconClick:Q=>g(m),"full-screen-preview-image-url":e(x)(o),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(l(),_("div",T,[f("p",U,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const G=$(H,[["__scopeId","data-v-aab31da2"]]);export{G as default};

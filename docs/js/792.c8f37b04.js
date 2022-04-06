"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[792],{2792:function(t,e,s){s.r(e),s.d(e,{default:function(){return rt}});var i=s(3396);const n=t=>((0,i.dD)("data-v-24879c26"),t=t(),(0,i.Cn)(),t),a={class:"container",id:"container"},o={class:"row"},r={class:"col-lg-3 col-md-12"},l={class:"col-lg-6 col-md-12"},c={class:"clusterCanvas",id:"clusterCanvas",ref:"clusterCanvas"},h={class:"col-lg-3 col-md-12"},d=n((()=>(0,i._)("h1",null," Конфигуратор алгоритма ",-1))),u=n((()=>(0,i._)("p",null," Количество кластеров ",-1))),C=n((()=>(0,i._)("div",{class:"separator"},null,-1))),v=n((()=>(0,i._)("p",null," Действия с точками ",-1))),y=n((()=>(0,i._)("button",{class:"button button-border button-rounded button-action",id:"addDotButton"}," Добавить точку ",-1))),p=n((()=>(0,i._)("div",{class:"spacer"},null,-1))),f=n((()=>(0,i._)("button",{class:"button button-border button-rounded button-caution",id:"removeDotButton"}," Удалить точку ",-1))),D=n((()=>(0,i._)("div",{class:"separator"},null,-1))),b=n((()=>(0,i._)("p",null," Тип кластеризации ",-1))),x=n((()=>(0,i._)("button",{class:"button button-border button-rounded button-royal",id:"kMeansButton"}," К-Средних ",-1))),m=n((()=>(0,i._)("div",{class:"spacer"},null,-1))),k=n((()=>(0,i._)("button",{class:"button button-border button-rounded button-royal",id:"hierarchyButton"}," Иерархический ",-1))),g=n((()=>(0,i._)("div",{class:"spacer"},null,-1))),N=n((()=>(0,i._)("button",{class:"button button-border button-rounded button-primary button-glow",id:"comparisonButton"}," Сравнение алгоритмов ",-1)));function I(t,e,s,n,I,A){const B=(0,i.up)("ClusteringDescription"),_=(0,i.up)("Card"),M=(0,i.up)("vue-slider");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",o,[(0,i._)("div",r,[(0,i.Wm)(_,{class:"descriptionCard"},{default:(0,i.w5)((()=>[(0,i.Wm)(B)])),_:1})]),(0,i._)("div",l,[(0,i.Wm)(_,{class:"cardCenter clusteringCard",id:"clusteringCard"},{default:(0,i.w5)((()=>[(0,i._)("canvas",c,null,512)])),_:1})]),(0,i._)("div",h,[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[d,u,(0,i.Wm)(M,{modelValue:t.numberOfClusters,"onUpdate:modelValue":e[0]||(e[0]=e=>t.numberOfClusters=e),dotSize:20,max:10,min:2,silent:!0},null,8,["modelValue"]),C,v,y,p,f,D,b,x,m,k,g,N])),_:1})])])])}var A=s(2482),B=s(6520),_=s(9434),M=s(6948);const O=(0,i._)("h1",null," Алгоритм кластеризации ",-1),T=(0,i._)("h3",null," Бонусная реализация ",-1),w=(0,i._)("p",null," Алгоритм для разбиения точек на кластеры ",-1);function S(t,e,s,n,a,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[O,T,w],64)}var Z=function(t,e,s,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(o=(a<3?n(o):a>3?n(e,s,o):n(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let E=class extends B.w3{};E=Z([(0,B.Ei)({components:{}})],E);var L=E,P=s(89);const R=(0,P.Z)(L,[["render",S]]);var F=R,z=s(8303),Y=s.n(z);class X{constructor(t,e,s=null,i=null){(0,A.Z)(this,"xCoordinate",void 0),(0,A.Z)(this,"yCoordinate",void 0),(0,A.Z)(this,"kMeansIndex",void 0),(0,A.Z)(this,"hierarchyIndex",void 0),this.xCoordinate=t,this.yCoordinate=e,this.kMeansIndex=s,this.hierarchyIndex=i}}var W=X;class G{constructor(){(0,A.Z)(this,"curX",void 0),(0,A.Z)(this,"curY",void 0),(0,A.Z)(this,"arr",void 0),(0,A.Z)(this,"lastX",void 0),(0,A.Z)(this,"lastY",void 0),this.curX=-1,this.curY=-1,this.lastY=-1,this.lastX=-1,this.arr=[]}SetCenter(){let t=0,e=0,s=0;for(;s<this.arr.length;t+=this.arr[s].xCoordinate,s++);for(s=0;s<this.arr.length;e+=this.arr[s].yCoordinate,s++);this.lastX=this.curX,this.lastY=this.curY,this.curX=t/this.arr.length,this.curY=e/this.arr.length}}var V=G;class j{constructor(){(0,A.Z)(this,"clusArr",[])}static getInstance(){return j.instance||(j.instance=new j),j.instance}IdentifyCenters(t,e){const s=e.length,i=s/t;let n=0;for(let a=0;a<t;a++,n+=i)this.clusArr[a].curX=e[Math.floor(n)].xCoordinate,this.clusArr[a].curY=e[Math.floor(n)].yCoordinate}Bind(t,e){for(let s=0;s<e;s++)this.clusArr[s].arr=[];for(let s=0;s<t.length;s++){let e=1e4,i=-1;for(let n=0;n<this.clusArr.length;n++){const a=Math.sqrt(Math.pow(t[s].xCoordinate-this.clusArr[n].curX,2)+Math.pow(t[s].yCoordinate-this.clusArr[n].curY,2));a<e&&(e=a,t[s].kMeansIndex=n,i=n)}this.clusArr[i].arr.push(t[s])}return t}splitByClusters(t,e){this.clusArr=[];for(let s=0;s<e;s++)this.clusArr[s]=new V;for(this.IdentifyCenters(e,t);;){let s=0;t=this.Bind(t,e);for(let t=0;t<this.clusArr.length;t++)this.clusArr[t].SetCenter();for(let t=0;t<e;t++)this.clusArr[t].curX==this.clusArr[t].lastX&&this.clusArr[t].curY==this.clusArr[t].lastY&&s++;if(s==e)break}return t}}(0,A.Z)(j,"instance",void 0);var q,H=j;(function(t){t[t["DOTS_ADDING"]=0]="DOTS_ADDING",t[t["DOTS_REMOVING"]=1]="DOTS_REMOVING"})(q||(q={}));var K=q;let U;class J{constructor(t,e,s){(0,A.Z)(this,"data",void 0),(0,A.Z)(this,"prevNode",void 0),(0,A.Z)(this,"nextNode",void 0),this.data=t,this.prevNode=e,this.nextNode=s}}U=Symbol.iterator;class Q{constructor(...t){(0,A.Z)(this,"frontNode",null),(0,A.Z)(this,"backNode",null),(0,A.Z)(this,"iteratorStartNode",null),(0,A.Z)(this,"size",0);for(const e of t)this.push_back(e)}push_back(t){null===this.backNode?(this.backNode=new J(t,null,null),this.frontNode=this.backNode,this.iteratorStartNode=this.frontNode):(this.backNode.nextNode=new J(t,this.backNode,null),this.backNode=this.backNode.nextNode),this.size++}remove(t){let e=!0;t===this.backNode&&(t.prevNode&&(t.prevNode.nextNode=null),this.backNode=t.prevNode,e=!1),t===this.frontNode?(t.nextNode&&(t.nextNode.prevNode=null),this.frontNode=t.nextNode,this.iteratorStartNode=this.frontNode,e=!1):e&&(t.prevNode.nextNode=t.nextNode,t.nextNode.prevNode=t.prevNode),this.size--}concat(t){this.size&&t.size&&(this.backNode.nextNode=t.frontNode,t.frontNode.prevNode=this.backNode,this.backNode=t.backNode,this.size+=t.size)}[U](){let t=this.iteratorStartNode;return this.iteratorStartNode=this.frontNode,{next:()=>{const e=t;return e&&(t=t.nextNode),{done:null===e,value:e}}}}}var $=Q;class tt{static getInstance(){return tt.instance||(tt.instance=new tt),tt.instance}splitByClusters(t,e){const s=new $;for(let l=0;l<t.length;l++)s.push_back({points:new $(t[l]),minDist:99999,distCol:l});const i=Array(t.length);for(let l=0;l<t.length;l++)i[l]=Array(t.length);let n,a=9999,o=0;for(const l of s){s.iteratorStartNode=l.nextNode;let e=o+1;for(const r of s){const s=Math.sqrt(Math.pow(t[o].xCoordinate-t[e].xCoordinate,2)+Math.pow(t[o].yCoordinate-t[e].yCoordinate,2));i[o][e]=s,i[e][o]=s,s<l.data.minDist&&(l.data.minDist=s,l.data.closest=r,s<a&&(a=s,n=l)),s<r.data.minDist&&(r.data.minDist=s,r.data.closest=l),e++}o++}while(s.size!=e){n.data.points.concat(n.data.closest.data.points),n.data.minDist=9999,a=9999;const t=n,e=n.data.distCol,o=n.data.closest.data.distCol;s.remove(n.data.closest);for(const r of s){if(r===t)continue;const s=r.data.distCol,l=Math.min(i[e][s],i[o][s]);i[e][s]=l,i[s][e]=l,l<t.data.minDist&&(t.data.minDist=l,t.data.closest=r),l<=r.data.minDist&&(r.data.minDist=l,r.data.closest=t),r.data.minDist<a&&(a=r.data.minDist,n=r)}}let r=0;for(const l of s){for(const t of l.data.points)t.data.hierarchyIndex=r;r++}return t}}(0,A.Z)(tt,"instance",void 0);var et,st=tt,it=function(t,e,s,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(o=(a<3?n(o):a>3?n(e,s,o):n(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};let nt=et=class extends B.w3{constructor(...t){super(...t),(0,A.Z)(this,"meta",(0,B.cY)((()=>(0,M.jq)({title:"📦",htmlAttrs:{lang:"ru",amp:!0}})))),(0,A.Z)(this,"_dotsToDisplay",[]),(0,A.Z)(this,"_numberOfClusters",6),(0,A.Z)(this,"canvas",null),(0,A.Z)(this,"canvasContext",null),(0,A.Z)(this,"clusteringDisplayState",null),(0,A.Z)(this,"kMeansColorsArray",null),(0,A.Z)(this,"hierarchyColorsArray",null),(0,A.Z)(this,"canvasClickListener",(t=>{let e=t.target.getBoundingClientRect();switch(this.clusteringDisplayState){case K.DOTS_ADDING:if(e){this.clearPreviousResult();let s=new W(t.clientX-e.left,t.clientY-e.top),i=!0;for(let t=0;t<this.dotsToDisplay.length;t++){let e=this.dotsToDisplay[t];if(et.areDotsNearby(s,e)){i=!1;break}}if(i){let t=this.dotsToDisplay;t.push(s),this.dotsToDisplay=t}}break;case K.DOTS_REMOVING:if(e){this.clearPreviousResult();let s=new W(t.clientX-e.left,t.clientY-e.top);for(let t=0;t<this.dotsToDisplay.length;t++){let e=this.dotsToDisplay[t];if(et.areDotsNearby(s,e)){let e=this.dotsToDisplay;e.splice(t,1),this.dotsToDisplay=e;break}}}break}}))}set dotsToDisplay(t){this._dotsToDisplay=t,this.drawDots()}get dotsToDisplay(){return this._dotsToDisplay}get numberOfClusters(){return this._numberOfClusters}set numberOfClusters(t){this._numberOfClusters=t}drawDots(){this.canvas&&(this.canvasContext?.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvasContext?.beginPath(),this.canvasContext?.closePath()),this.dotsToDisplay.forEach((t=>{this.canvasContext&&(this.canvasContext.moveTo(t.xCoordinate,t.yCoordinate),this.canvasContext.beginPath(),this.canvasContext.lineWidth=20,null!=t.hierarchyIndex&&null!=t.kMeansIndex&&(this.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,-Math.PI/2,Math.PI/2),this.hierarchyColorsArray&&(this.canvasContext.strokeStyle=this.hierarchyColorsArray[t.hierarchyIndex],this.canvasContext.stroke()),this.canvasContext.beginPath(),this.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,Math.PI/2,-Math.PI/2),this.kMeansColorsArray&&(this.canvasContext.strokeStyle=this.kMeansColorsArray[t.kMeansIndex],this.canvasContext.stroke())),null!=t.hierarchyIndex&&null==t.kMeansIndex&&(this.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),this.hierarchyColorsArray&&(this.canvasContext.strokeStyle=this.hierarchyColorsArray[t.hierarchyIndex]),this.canvasContext.stroke()),null!=t.kMeansIndex&&null==t.hierarchyIndex&&(this.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),this.kMeansColorsArray&&(this.canvasContext.strokeStyle=this.kMeansColorsArray[t.kMeansIndex]),this.canvasContext.stroke()),null==t.kMeansIndex&&null==t.hierarchyIndex&&(this.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),this.canvasContext.strokeStyle="#000000",this.canvasContext.stroke()))}))}static areDotsNearby(t,e){let s=Math.sqrt(Math.pow(t.xCoordinate-e.xCoordinate,2))+Math.sqrt(Math.pow(t.yCoordinate-e.yCoordinate,2))-25;return s<=25}removeCanvasClickListener(){this.canvas?.removeEventListener("click",this.canvasClickListener)}makeCanvasAbleToClick(){this.canvas?.addEventListener("click",this.canvasClickListener)}initAddDotButtonOnClickListener(){let t=document.getElementById("addDotButton");t?.addEventListener("click",(()=>{this.clusteringDisplayState=K.DOTS_ADDING}))}initRemoveDotButtonOnClickListener(){let t=document.getElementById("removeDotButton");t?.addEventListener("click",(()=>{this.clusteringDisplayState=K.DOTS_REMOVING}))}initCanvas(){this.canvas=document.getElementById("clusterCanvas"),this.canvasContext=this.canvas.getContext("2d"),this.updateCanvasSize()}updateCanvasSize(){let t=document.getElementById("clusteringCard");if(t&&this.canvas){let e=t.offsetWidth-30,s=t.offsetHeight-40;this.canvas.width=e,this.canvas.height=s,this.canvas.style.width=e+"px",this.canvas.style.height=s+"px"}this.drawDots()}static updateCardSize(t){t&&(t.style.height=t.clientWidth+"px")}initCardWidthListener(){let t=document.getElementById("clusteringCard");et.updateCardSize(t),this.updateCanvasSize(),window?.addEventListener("resize",(()=>{et.updateCardSize(t),this.updateCanvasSize()}))}clearPreviousResult(){for(let t=0;t<this.dotsToDisplay.length;t++)this.dotsToDisplay[t].hierarchyIndex=null,this.dotsToDisplay[t].kMeansIndex=null}initKMeansButtonOnClickListener(){let t=document.getElementById("kMeansButton");t?.addEventListener("click",(()=>{this.numberOfClusters<=this.dotsToDisplay.length&&(this.clearPreviousResult(),this.clusteringDisplayState=null,this.dotsToDisplay=H.getInstance().splitByClusters(this.dotsToDisplay,this.numberOfClusters))}))}initHierarchyButtonOnClickListener(){let t=document.getElementById("hierarchyButton");t?.addEventListener("click",(()=>{this.numberOfClusters<=this.dotsToDisplay.length&&(this.clearPreviousResult(),this.clusteringDisplayState=null,this.dotsToDisplay=st.getInstance().splitByClusters(this.dotsToDisplay,this.numberOfClusters))}))}initComparisonButtonOnClickListener(){let t=document.getElementById("comparisonButton");t?.addEventListener("click",(()=>{this.numberOfClusters<=this.dotsToDisplay.length&&(this.clearPreviousResult(),this.clusteringDisplayState=null,this.dotsToDisplay=st.getInstance().splitByClusters(this.dotsToDisplay,this.numberOfClusters),this.dotsToDisplay=H.getInstance().splitByClusters(this.dotsToDisplay,this.numberOfClusters))}))}initColorsArrays(){this.kMeansColorsArray=["#ADA8F1","#F1A3E7","#FFA3C6","#FFB49A","#FFBDCE","#FF8598","#C55065","#E36F48","#FFF6F0","#E5DBCE"],this.hierarchyColorsArray=["#62A2EB","#009BD7","#0090B4","#008284","#00714F","#00ABBB","#00C5B2","#5FDB9C","#ABED82","#F9F871"]}mounted(){this.initColorsArrays(),this.initCanvas(),this.initCardWidthListener(),this.initAddDotButtonOnClickListener(),this.initRemoveDotButtonOnClickListener(),this.initKMeansButtonOnClickListener(),this.initHierarchyButtonOnClickListener(),this.initComparisonButtonOnClickListener(),this.makeCanvasAbleToClick()}};nt=et=it([(0,B.Ei)({components:{ClusteringDescription:F,Card:_.Z,VueSlider:Y()}})],nt);var at=nt;const ot=(0,P.Z)(at,[["render",I],["__scopeId","data-v-24879c26"]]);var rt=ot}}]);
//# sourceMappingURL=792.c8f37b04.js.map
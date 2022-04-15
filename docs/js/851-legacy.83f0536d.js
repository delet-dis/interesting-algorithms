"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[851],{8634:function(t,e,n){n.r(e),n.d(e,{default:function(){return pt}});var i=n(73396),s=n(87139),r=function(t){return(0,i.dD)("data-v-8b6b8970"),t=t(),(0,i.Cn)(),t},a={class:"container",id:"container"},o={class:"row"},l={class:"col-lg-3 col-md-12"},u=r((function(){return(0,i._)("h1",null," Я знаю точно – невозможное возможно ",-1)})),c=r((function(){return(0,i._)("p",null," Количество точек меньше количества кластеров ",-1)})),d={class:"col-lg-6 col-md-12"},h={class:"clusterCanvas",id:"clusterCanvas",ref:"clusterCanvas"},v={class:"col-lg-3 col-md-12"},f=r((function(){return(0,i._)("h1",null," Конфигуратор алгоритма ",-1)})),y=r((function(){return(0,i._)("p",null," Количество кластеров ",-1)})),C=r((function(){return(0,i._)("div",{class:"separator"},null,-1)})),p=r((function(){return(0,i._)("p",null," Действия с точками ",-1)})),k=r((function(){return(0,i._)("button",{class:"button button-border button-rounded button-action",id:"addDotButton"}," Добавить точки ",-1)})),D=r((function(){return(0,i._)("div",{class:"spacer"},null,-1)})),b=r((function(){return(0,i._)("button",{class:"button button-border button-rounded button-caution activeButton",id:"removeDotButton"}," Удалить точки ",-1)})),m=r((function(){return(0,i._)("div",{class:"separator"},null,-1)})),g=r((function(){return(0,i._)("p",null," Тип кластеризации ",-1)})),x=r((function(){return(0,i._)("div",{class:"spacer"},null,-1)})),Z=r((function(){return(0,i._)("div",{class:"spacer"},null,-1)}));function N(t,e,n,r,N,B){var A=(0,i.up)("ClusteringDescription"),I=(0,i.up)("Card"),M=(0,i.up)("Error"),_=(0,i.up)("vue-slider");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",o,[(0,i._)("div",l,[(0,i.Wm)(I,{class:"descriptionCard"},{default:(0,i.w5)((function(){return[(0,i.Wm)(A)]})),_:1}),(0,i.Wm)(M,{id:"error",class:(0,s.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,i.w5)((function(){return[u,c]})),_:1},8,["class"])]),(0,i._)("div",d,[(0,i.Wm)(I,{class:"cardCenter clusteringCard",id:"clusteringCard"},{default:(0,i.w5)((function(){return[(0,i._)("canvas",h,null,512)]})),_:1})]),(0,i._)("div",v,[(0,i.Wm)(I,null,{default:(0,i.w5)((function(){return[f,y,(0,i.Wm)(_,{modelValue:t.numberOfClusters,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.numberOfClusters=e}),dotSize:20,max:10,min:2,silent:!0},null,8,["modelValue"]),C,p,k,D,b,m,g,(0,i._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-royal activeButton":!0===t.isAbleToProcessWorkWithDots,"button-flat nonActiveButton":!1===t.isAbleToProcessWorkWithDots}]),id:"kMeansButton"}," К-Средних ",2),x,(0,i._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-royal activeButton":!0===t.isAbleToProcessWorkWithDots,"button-flat nonActiveButton":!1===t.isAbleToProcessWorkWithDots}]),id:"hierarchyButton"}," Иерархический ",2),Z,(0,i._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":!0===t.isAbleToProcessWorkWithDots,"button-flat nonActiveButton":!1===t.isAbleToProcessWorkWithDots}]),id:"comparisonButton"}," Сравнение алгоритмов ",2)]})),_:1})])])])}var B=n(13087),A=n(62833),I=n(52417),M=n(93806),_=n(25744),O=n(82482),T=n(3336),w=(n(38880),n(41539),n(81299),n(92222),n(40561),n(54747),n(66520)),E=n(86774),S=n(93383),L=(0,i._)("h1",null," Алгоритм кластеризации ",-1),W=(0,i._)("h3",null," Бонусная реализация ",-1),P=(0,i._)("p",null," Алгоритм для разбиения точек на кластеры ",-1);function z(t,e,n,s,r,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[L,W,P],64)}var F=function(t,e,n,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,T.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,n,a):s(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},R=function(t){(0,M.Z)(n,t);var e=(0,_.Z)(n);function n(){return(0,B.Z)(this,n),e.apply(this,arguments)}return(0,A.Z)(n)}(w.w3);R=F([(0,w.Ei)({components:{}})],R);var X=R,V=n(40089);const Y=(0,V.Z)(X,[["render",z]]);var G=Y,j=n(8303),U=n.n(j),q=(0,A.Z)((function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,B.Z)(this,t),(0,O.Z)(this,"xCoordinate",void 0),(0,O.Z)(this,"yCoordinate",void 0),(0,O.Z)(this,"kMeansIndex",void 0),(0,O.Z)(this,"hierarchyIndex",void 0),this.xCoordinate=e,this.yCoordinate=n,this.kMeansIndex=i,this.hierarchyIndex=s})),H=q,K=(n(9653),function(){function t(){(0,B.Z)(this,t),(0,O.Z)(this,"currentX",-1),(0,O.Z)(this,"currentY",-1),(0,O.Z)(this,"dots",[]),(0,O.Z)(this,"lastX",-1),(0,O.Z)(this,"lastY",-1)}return(0,A.Z)(t,[{key:"setCenter",value:function(){var t=0,e=0;this.dots.forEach((function(n){t+=n.xCoordinate,e+=n.yCoordinate})),this.lastX=this.currentX,this.lastY=this.currentY,this.currentX=t/this.dots.length,this.currentY=e/this.dots.length}}]),t}()),J=K,Q=function(){function t(){(0,B.Z)(this,t),(0,O.Z)(this,"clusters",[])}return(0,A.Z)(t,[{key:"identifyCenters",value:function(t,e){for(var n=e.length,i=n/t,s=0,r=0;r<t;r++,s+=i)this.clusters[r].currentX=e[Math.floor(s)].xCoordinate,this.clusters[r].currentY=e[Math.floor(s)].yCoordinate}},{key:"bind",value:function(t,e){for(var n=0;n<e;n++)this.clusters[n].dots=[];for(var i=0;i<t.length;i++){for(var s=Number.MAX_VALUE,r=-1,a=0;a<this.clusters.length;a++){var o=Math.sqrt(Math.pow(t[i].xCoordinate-this.clusters[a].currentX,2)+Math.pow(t[i].yCoordinate-this.clusters[a].currentY,2));o<s&&(s=o,t[i].kMeansIndex=a,r=a)}this.clusters[r].dots.push(t[i])}return t}},{key:"splitByClusters",value:function(t,e){this.clusters=[];for(var n=0;n<e;n++)this.clusters[n]=new J;this.identifyCenters(e,t);var i=0;while(i!=e){i=0,t=this.bind(t,e);for(var s=0;s<this.clusters.length;s++)this.clusters[s].setCenter();for(var r=0;r<e;r++)this.clusters[r].currentX==this.clusters[r].lastX&&this.clusters[r].currentY==this.clusters[r].lastY&&i++}return t}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}();(0,O.Z)(Q,"instance",void 0);var $,tt=Q;(function(t){t[t["DOTS_ADDING"]=0]="DOTS_ADDING",t[t["DOTS_REMOVING"]=1]="DOTS_REMOVING"})($||($={}));var et,nt=$,it=n(66347),st=(n(32165),n(78783),n(33948),n(82526),n(41817),(0,A.Z)((function t(e,n,i){(0,B.Z)(this,t),(0,O.Z)(this,"data",void 0),(0,O.Z)(this,"prevNode",void 0),(0,O.Z)(this,"nextNode",void 0),this.data=e,this.prevNode=n,this.nextNode=i})));et=Symbol.iterator;var rt=function(){function t(){(0,B.Z)(this,t),(0,O.Z)(this,"frontNode",null),(0,O.Z)(this,"backNode",null),(0,O.Z)(this,"iteratorStartNode",null),(0,O.Z)(this,"size",0);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];for(var s=0,r=n;s<r.length;s++){var a=r[s];this.pushBack(a)}}return(0,A.Z)(t,[{key:"pushBack",value:function(t){null===this.backNode?(this.backNode=new st(t,null,null),this.frontNode=this.backNode,this.iteratorStartNode=this.frontNode):(this.backNode.nextNode=new st(t,this.backNode,null),this.backNode=this.backNode.nextNode),this.size++}},{key:"remove",value:function(t){var e=!0;t===this.backNode&&(t.prevNode&&(t.prevNode.nextNode=null),this.backNode=t.prevNode,e=!1),t===this.frontNode?(t.nextNode&&(t.nextNode.prevNode=null),this.frontNode=t.nextNode,this.iteratorStartNode=this.frontNode):e&&(t.prevNode&&(t.prevNode.nextNode=t.nextNode),t.nextNode&&(t.nextNode.prevNode=t.prevNode)),this.size--}},{key:"concatenate",value:function(t){this.size&&t.size&&(this.backNode&&(this.backNode.nextNode=t.frontNode),t.frontNode.prevNode=this.backNode,this.backNode=t.backNode,this.size+=t.size)}},{key:et,value:function(){var t=this.iteratorStartNode;return this.iteratorStartNode=this.frontNode,{next:function(){var e=t;return e&&(t=t.nextNode),{done:null===e,value:e}}}}}]),t}(),at=rt,ot=(0,A.Z)((function t(e,n,i,s){(0,B.Z)(this,t),(0,O.Z)(this,"points",void 0),(0,O.Z)(this,"closest",void 0),(0,O.Z)(this,"minimalDistance",void 0),(0,O.Z)(this,"distCol",void 0),this.points=e,this.closest=n,this.minimalDistance=i,this.distCol=s})),lt=ot,ut=function(){function t(){(0,B.Z)(this,t)}return(0,A.Z)(t,[{key:"splitByClusters",value:function(t,e){for(var n=new at,i=0;i<t.length;i++)n.pushBack(new lt(new at(t[i]),null,Number.MAX_VALUE,i));for(var s=Array(t.length),r=0;r<t.length;r++)s[r]=Array(t.length);var a,o,l=Number.MAX_VALUE,u=0,c=(0,it.Z)(n);try{for(c.s();!(o=c.n()).done;){var d=o.value;n.iteratorStartNode=d.nextNode;var h,v=u+1,f=(0,it.Z)(n);try{for(f.s();!(h=f.n()).done;){var y=h.value,C=Math.sqrt(Math.pow(t[u].xCoordinate-t[v].xCoordinate,2)+Math.pow(t[u].yCoordinate-t[v].yCoordinate,2));s[u][v]=C,s[v][u]=C,C<d.data.minimalDistance&&(d.data.minimalDistance=C,d.data.closest=y,C<l&&(l=C,a=d)),C<y.data.minimalDistance&&(y.data.minimalDistance=C,y.data.closest=d),v++}}catch(T){f.e(T)}finally{f.f()}u++}}catch(T){c.e(T)}finally{c.f()}while(n.size!=e)if(a.data.closest&&a.data.points.concatenate(a.data.closest.data.points),a.data.minimalDistance=Number.MAX_VALUE,l=Number.MAX_VALUE,a.data.closest){var p=a,k=a.data.distCol,D=a.data.closest.data.distCol;n.remove(a.data.closest);var b,m=(0,it.Z)(n);try{for(m.s();!(b=m.n()).done;){var g=b.value;if(g!==p){var x=g.data.distCol,Z=Math.min(s[k][x],s[D][x]);s[k][x]=Z,s[x][k]=Z,Z<p.data.minimalDistance&&(p.data.minimalDistance=Z,p.data.closest=g),Z<=g.data.minimalDistance&&(g.data.minimalDistance=Z,g.data.closest=p),g.data.minimalDistance<l&&(l=g.data.minimalDistance,a=g)}}}catch(T){m.e(T)}finally{m.f()}}var N,B=0,A=(0,it.Z)(n);try{for(A.s();!(N=A.n()).done;){var I,M=N.value,_=(0,it.Z)(M.data.points);try{for(_.s();!(I=_.n()).done;){var O=I.value;O.data.hierarchyIndex=B}}catch(T){_.e(T)}finally{_.f()}B++}}catch(T){A.e(T)}finally{A.f()}return t}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}();(0,O.Z)(ut,"instance",void 0);var ct,dt=ut,ht=n(82959),vt=function(t,e,n,i){var s,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,T.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,n,a):s(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},ft=ct=function(t){(0,M.Z)(n,t);var e=(0,_.Z)(n);function n(){var t;(0,B.Z)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return t=e.call.apply(e,[this].concat(s)),(0,O.Z)((0,I.Z)(t),"meta",(0,w.cY)((function(){return(0,S.jq)({title:"📦",htmlAttrs:{lang:"ru",amp:!0}})}))),(0,O.Z)((0,I.Z)(t),"dotsToDisplayField",[]),(0,O.Z)((0,I.Z)(t),"numberOfClustersField",2),(0,O.Z)((0,I.Z)(t),"canvas",null),(0,O.Z)((0,I.Z)(t),"canvasContext",null),(0,O.Z)((0,I.Z)(t),"clusteringDisplayState",null),(0,O.Z)((0,I.Z)(t),"isErrorDisplaying",!1),(0,O.Z)((0,I.Z)(t),"isAbleToProcessWorkWithDots",!1),(0,O.Z)((0,I.Z)(t),"kMeansColorsArray",null),(0,O.Z)((0,I.Z)(t),"hierarchyColorsArray",null),(0,O.Z)((0,I.Z)(t),"canvasClickListener",(function(e){var n=e.target.getBoundingClientRect();switch(t.clusteringDisplayState){case nt.DOTS_ADDING:if(n){t.clearDots();for(var i=new H(e.clientX-n.left,e.clientY-n.top),s=!0,r=0;r<t.dotsToDisplay.length;r++){var a=t.dotsToDisplay[r];if(ct.areDotsNearby(i,a)){s=!1;break}}if(s){var o=t.dotsToDisplay;o.push(i),t.dotsToDisplay=o}}break;case nt.DOTS_REMOVING:if(n){t.clearDots();for(var l=new H(e.clientX-n.left,e.clientY-n.top),u=0;u<t.dotsToDisplay.length;u++){var c=t.dotsToDisplay[u];if(ct.areDotsNearby(l,c)){var d=t.dotsToDisplay;d.splice(u,1),t.dotsToDisplay=d;break}}}break}})),t}return(0,A.Z)(n,[{key:"dotsToDisplay",get:function(){return this.dotsToDisplayField},set:function(t){this.dotsToDisplayField=t,this.isAbleToProcessWorkWithDots=t.length>=this.numberOfClusters,this.drawDots()}},{key:"numberOfClusters",get:function(){return this.numberOfClustersField},set:function(t){this.numberOfClustersField=t,this.isAbleToProcessWorkWithDots=this.dotsToDisplayField.length>=this.numberOfClusters}},{key:"initCanvasOnClickListener",value:function(){var t;null===(t=this.canvas)||void 0===t||t.addEventListener("click",this.canvasClickListener)}},{key:"removeCanvasClickListener",value:function(){var t;null===(t=this.canvas)||void 0===t||t.removeEventListener("click",this.canvasClickListener)}},{key:"initCanvas",value:function(){this.canvas=document.getElementById("clusterCanvas"),this.canvasContext=this.canvas.getContext("2d"),this.updateCanvasSize()}},{key:"initCardWidthListener",value:function(){var t,e=this,n=document.getElementById("clusteringCard");ct.updateCardSize(n),this.updateCanvasSize(),null===(t=window)||void 0===t||t.addEventListener("resize",(function(){ct.updateCardSize(n),e.updateCanvasSize()}))}},{key:"initAddDotButtonOnClickListener",value:function(){var t=this,e=document.getElementById("addDotButton");null===e||void 0===e||e.addEventListener("click",(function(){t.clusteringDisplayState=nt.DOTS_ADDING}))}},{key:"initRemoveDotButtonOnClickListener",value:function(){var t=this,e=document.getElementById("removeDotButton");null===e||void 0===e||e.addEventListener("click",(function(){t.clusteringDisplayState=nt.DOTS_REMOVING}))}},{key:"initKMeansButtonOnClickListener",value:function(){var t=this,e=document.getElementById("kMeansButton");null===e||void 0===e||e.addEventListener("click",(function(){t.numberOfClusters<=t.dotsToDisplay.length?(t.isErrorDisplaying=!1,t.clearDots(),t.clusteringDisplayState=null,t.dotsToDisplay=tt.getInstance().splitByClusters(t.dotsToDisplay,t.numberOfClusters)):t.isErrorDisplaying=!0}))}},{key:"initHierarchyButtonOnClickListener",value:function(){var t=this,e=document.getElementById("hierarchyButton");null===e||void 0===e||e.addEventListener("click",(function(){t.numberOfClusters<=t.dotsToDisplay.length?(t.isErrorDisplaying=!1,t.clearDots(),t.clusteringDisplayState=null,t.dotsToDisplay=dt.getInstance().splitByClusters(t.dotsToDisplay,t.numberOfClusters)):t.isErrorDisplaying=!0}))}},{key:"initComparisonButtonOnClickListener",value:function(){var t=this,e=document.getElementById("comparisonButton");null===e||void 0===e||e.addEventListener("click",(function(){t.numberOfClusters<=t.dotsToDisplay.length?(t.isErrorDisplaying=!1,t.clearDots(),t.clusteringDisplayState=null,t.dotsToDisplay=dt.getInstance().splitByClusters(t.dotsToDisplay,t.numberOfClusters),t.dotsToDisplay=tt.getInstance().splitByClusters(t.dotsToDisplay,t.numberOfClusters)):t.isErrorDisplaying=!0}))}},{key:"initContainerWidthListener",value:function(){var t=this;new ResizeObserver((function(){return t.updateCanvasSize()})).observe(document.getElementById("container"))}},{key:"initColorsArrays",value:function(){this.kMeansColorsArray=["#ADA8F1","#474555","#ACA9BB","#F69591","#BB615F","#574240","#BFA5A3","#71823B","#3F510A","#E5DBCE"],this.hierarchyColorsArray=["#514438","#ED992A","#0090B4","#B8A89A","#00C77F","#00ABBB","#00C77F","#00C9DD","#BEFCFF","#458084"]}},{key:"updateCanvasSize",value:function(){var t=document.getElementById("clusteringCard");if(t&&this.canvas){var e=t.offsetWidth-30,n=t.offsetHeight-40;this.canvas.width=e,this.canvas.height=n,this.canvas.style.width=e+"px",this.canvas.style.height=n+"px"}this.drawDots()}},{key:"drawDots",value:function(){var t,e,n,i=this;this.canvas&&(null===(t=this.canvasContext)||void 0===t||t.clearRect(0,0,this.canvas.width,this.canvas.height),null===(e=this.canvasContext)||void 0===e||e.beginPath(),null===(n=this.canvasContext)||void 0===n||n.closePath());this.dotsToDisplay.forEach((function(t){i.canvasContext&&(i.canvasContext.moveTo(t.xCoordinate,t.yCoordinate),i.canvasContext.beginPath(),i.canvasContext.lineWidth=20,null!=t.hierarchyIndex&&null!=t.kMeansIndex&&(i.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,-Math.PI/2,Math.PI/2),i.hierarchyColorsArray&&(i.canvasContext.strokeStyle=i.hierarchyColorsArray[t.hierarchyIndex],i.canvasContext.stroke()),i.canvasContext.beginPath(),i.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,Math.PI/2,-Math.PI/2),i.kMeansColorsArray&&(i.canvasContext.strokeStyle=i.kMeansColorsArray[t.kMeansIndex],i.canvasContext.stroke())),null!=t.hierarchyIndex&&null==t.kMeansIndex&&(i.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),i.hierarchyColorsArray&&(i.canvasContext.strokeStyle=i.hierarchyColorsArray[t.hierarchyIndex]),i.canvasContext.stroke()),null!=t.kMeansIndex&&null==t.hierarchyIndex&&(i.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),i.kMeansColorsArray&&(i.canvasContext.strokeStyle=i.kMeansColorsArray[t.kMeansIndex]),i.canvasContext.stroke()),null==t.kMeansIndex&&null==t.hierarchyIndex&&(i.canvasContext.arc(t.xCoordinate,t.yCoordinate,10,0,2*Math.PI),i.canvasContext.strokeStyle="#000000",i.canvasContext.stroke()))}))}},{key:"clearDots",value:function(){for(var t=0;t<this.dotsToDisplay.length;t++)this.dotsToDisplay[t].hierarchyIndex=null,this.dotsToDisplay[t].kMeansIndex=null}},{key:"mounted",value:function(){this.initContainerWidthListener(),this.initColorsArrays(),this.initCanvas(),this.initCardWidthListener(),this.initAddDotButtonOnClickListener(),this.initRemoveDotButtonOnClickListener(),this.initKMeansButtonOnClickListener(),this.initHierarchyButtonOnClickListener(),this.initComparisonButtonOnClickListener(),this.initCanvasOnClickListener()}}],[{key:"areDotsNearby",value:function(t,e){var n=Math.sqrt(Math.pow(t.xCoordinate-e.xCoordinate,2))+Math.sqrt(Math.pow(t.yCoordinate-e.yCoordinate,2))-25;return n<=25}},{key:"updateCardSize",value:function(t){t&&(t.style.height=t.clientWidth+"px")}}]),n}(w.w3);ft=ct=vt([(0,w.Ei)({components:{Error:ht.Z,ClusteringDescription:G,Card:E.Z,VueSlider:U()}})],ft);var yt=ft;const Ct=(0,V.Z)(yt,[["render",N],["__scopeId","data-v-8b6b8970"]]);var pt=Ct}}]);
"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[635],{76373:function(e,t,i){var n=i(82109),r=i(17854),s=i(46916),l=i(1702),a=i(24994),o=i(84488),c=i(17466),L=i(41340),E=i(19670),u=i(84326),d=i(47976),f=i(47850),C=i(67066),v=i(58173),h=i(31320),g=i(47293),Z=i(5112),_=i(36707),m=i(31530),R=i(97651),y=i(29909),A=i(31913),k=Z("matchAll"),b="RegExp String",p=b+" Iterator",B=y.set,S=y.getterFor(p),T=RegExp.prototype,I=r.TypeError,O=l(C),P=l("".indexOf),D=l("".matchAll),N=!!D&&!g((function(){D("a",/./)})),F=a((function(e,t,i,n){B(this,{type:p,regexp:e,string:t,global:i,unicode:n,done:!1})}),b,(function(){var e=S(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,i=e.string,n=R(t,i);return null===n?{value:void 0,done:e.done=!0}:e.global?(""===L(n[0])&&(t.lastIndex=m(i,c(t.lastIndex),e.unicode)),{value:n,done:!1}):(e.done=!0,{value:n,done:!1})})),H=function(e){var t,i,n,r,s,l,a=E(this),o=L(e);return t=_(a,RegExp),i=a.flags,void 0===i&&d(T,a)&&!("flags"in T)&&(i=O(a)),n=void 0===i?"":L(i),r=new t(t===RegExp?a.source:a,n),s=!!~P(n,"g"),l=!!~P(n,"u"),r.lastIndex=c(a.lastIndex),new F(r,o,s,l)};n({target:"String",proto:!0,forced:N},{matchAll:function(e){var t,i,n,r,l=o(this);if(null!=e){if(f(e)&&(t=L(o("flags"in T?e.flags:O(e))),!~P(t,"g")))throw I("`.matchAll` does not allow non-global regexes");if(N)return D(l,e);if(n=v(e,k),void 0===n&&A&&"RegExp"==u(e)&&(n=H),n)return s(n,e,l)}else if(N)return D(l,e);return i=L(l),r=new RegExp(e,"g"),A?s(H,r,i):r[k](i)}}),A||k in T||h(T,k,H)},84265:function(e,t){var i;(function(e){e[e["CENTER_CELL"]=0]="CENTER_CELL",e[e["FOOD_CELL"]=1]="FOOD_CELL",e[e["BORDER_CELL"]=2]="BORDER_CELL",e[e["EMPTY_CELL"]=3]="EMPTY_CELL"})(i||(i={})),t["Z"]=i},50158:function(e,t){var i;(function(e){e["STARTABLE_CELL"]="table-cell-startable",e["FINISHABLE_CELL"]="table-cell-finishable",e["BORDERABLE_CELL"]="table-cell-borderable",e["CELL"]="table-cell",e["START_CELL"]="table-cell-start",e["FINISH_CELL"]="table-cell-finish",e["BORDER_CELL"]="table-cell-border",e["WRONG_PATH_CELL"]="table-cell-wrong-path",e["CORRECT_PATH_CELL"]="table-cell-correct-path"})(i||(i={})),t["Z"]=i},69923:function(e,t){var i;(function(e){e[e["BORDER_CELL"]=0]="BORDER_CELL",e[e["EMPTY_CELL"]=1]="EMPTY_CELL",e[e["CAN_BECOME_EMPTY"]=2]="CAN_BECOME_EMPTY",e[e["START_CELL"]=3]="START_CELL",e[e["FINISH_CELL"]=4]="FINISH_CELL",e[e["PATH_CELL"]=5]="PATH_CELL"})(i||(i={})),t["Z"]=i},67921:function(e,t,i){var n=i(62833),r=i(13087),s=i(82482),l=(0,n.Z)((function e(t,i){(0,r.Z)(this,e),(0,s.Z)(this,"x",void 0),(0,s.Z)(this,"y",void 0),this.x=t,this.y=i}));t["Z"]=l},48102:function(e,t,i){var n=i(62833),r=i(13087),s=i(82482),l=(0,n.Z)((function e(t,i){(0,r.Z)(this,e),(0,s.Z)(this,"point",void 0),(0,s.Z)(this,"type",void 0),this.point=t,this.type=i}));t["Z"]=l},85602:function(e,t,i){i.d(t,{Z:function(){return B}});var n=i(73396),r={class:"table cardCenterChild",id:"table"},s=["id"];function l(e,t,i,l,a,o){return(0,n.wg)(),(0,n.iD)("table",r,[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.getLabyrinthSizing,(function(t){return(0,n.wg)(),(0,n.iD)("tr",{key:t},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.getLabyrinthSizing,(function(e){return(0,n.wg)(),(0,n.iD)("td",{key:e,id:"table-cell-"+(e-1)+"x"+(t-1),class:"table-cell"},"   ",8,s)})),128))])})),128))])])}var a,o=i(89584),c=i(52417),L=i(93806),E=i(25744),u=i(62833),d=i(13087),f=i(82482),C=i(3336),v=(i(38880),i(41539),i(81299),i(92222),i(39714),i(54747),i(24603),i(28450),i(74916),i(88386),i(76373),i(9653),i(91038),i(78783),i(66520)),h=i(9434),g=i(50158),Z=i(69923),_=i(67921),m=i(84265),R=function(e,t,i,n){var r,s=arguments.length,l=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,C.Z)(Reflect))&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(s<3?r(l):s>3?r(t,i,l):r(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l},y=(0,u.Z)((function e(){(0,d.Z)(this,e),(0,f.Z)(this,"labyrinthSizing",(0,v.vg)({required:!0}))})),A=a=function(e){(0,L.Z)(i,e);var t=(0,E.Z)(i);function i(){var e;(0,d.Z)(this,i);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),(0,f.Z)((0,c.Z)(e),"cells",document.getElementsByClassName(g.Z.CELL)),(0,f.Z)((0,c.Z)(e),"foodNutritionalValue",0),(0,f.Z)((0,c.Z)(e),"startPickingListener",(function(t){var i=t.target;e.clearCells(),i.classList.remove(g.Z.FINISH_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.add(g.Z.START_CELL),e.removeStartListener()})),(0,f.Z)((0,c.Z)(e),"finishPickingListener",(function(t){var i=t.target;e.clearCells(),i.classList.remove(g.Z.START_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.add(g.Z.FINISH_CELL),e.removeFinishListener()})),(0,f.Z)((0,c.Z)(e),"foodPickingListener",(function(t){var i=t.target;i.classList.remove(g.Z.START_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.contains(g.Z.FINISH_CELL)?(i.classList.remove(g.Z.FINISH_CELL),i.removeAttribute("data-nutritionalValue")):(i.classList.add(g.Z.FINISH_CELL),i.setAttribute("data-nutritionalValue",e.foodNutritionalValue.toString()))})),(0,f.Z)((0,c.Z)(e),"borderPickingListener",(function(e){var t=e.target;t.classList.remove(g.Z.START_CELL),t.classList.remove(g.Z.FINISH_CELL),t.classList.contains(g.Z.BORDER_CELL)?t.classList.remove(g.Z.BORDER_CELL):t.classList.add(g.Z.BORDER_CELL)})),e}return(0,u.Z)(i,[{key:"updateCellsCollection",value:function(){this.cells=document.getElementsByClassName(g.Z.CELL)}},{key:"getCells",get:function(){return this.updateCellsCollection(),this.cells}},{key:"getLabyrinthSizing",get:function(){return a.updateCardSize(),this.labyrinthSizing}},{key:"displayBorderCells",value:function(e){this.removeBorderListener(),this.resetCellsClasses(),e.forEach((function(e){e.forEach((function(e){var t=document.getElementById(g.Z.CELL+"-"+e.point.x+"x"+e.point.y);e.type!==Z.Z.BORDER_CELL&&e.type!==m.Z.BORDER_CELL||null===t||void 0===t||t.setAttribute("class",g.Z.CELL+" "+g.Z.BORDER_CELL)}))}))}},{key:"getCellCoordinates",value:function(e){var t=new RegExp("(\\d*)x(\\d*)","g"),i=(0,o.Z)(e.id.matchAll(t));return new _.Z(Number(i[0][1]),Number(i[0][2]))}},{key:"makeCellsSelectableForStart",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.STARTABLE_CELL),t.classList.remove(g.Z.START_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.classList.remove(g.Z.FINISHABLE_CELL),t.addEventListener("click",e.startPickingListener)}))}},{key:"makeCellsSelectableForFinish",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.FINISHABLE_CELL),t.classList.remove(g.Z.FINISH_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.finishPickingListener)}))}},{key:"makeCellsSelectableForFood",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.FINISHABLE_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.foodPickingListener)}))}},{key:"makeCellsSelectableForBorders",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.borderPickingListener)}))}},{key:"clearPreviousResult",value:function(){Array.from(this.cells).forEach((function(e){e.classList.remove(g.Z.WRONG_PATH_CELL),e.classList.remove(g.Z.CORRECT_PATH_CELL)}))}},{key:"resetCellsClasses",value:function(){Array.from(this.cells).forEach((function(e){e.setAttribute("class",g.Z.CELL),e.removeAttribute("data-nutritionalValue")}))}},{key:"clearCells",value:function(){Array.from(this.cells).forEach((function(e){a.clearCell(e)}))}},{key:"removeStartListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.startPickingListener)}))}},{key:"removeFinishListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.finishPickingListener)}))}},{key:"removeFoodListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.foodPickingListener)}))}},{key:"removeBorderListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.borderPickingListener)}))}},{key:"mounted",value:function(){a.initCardWidthListener(),this.updateCellsCollection()}}],[{key:"updateCardSize",value:function(){var e=document.getElementById("labyrinthCard"),t=document.getElementById("table");e&&t&&(e.style.height=e.clientWidth+"px",e.style.height=t.clientHeight+20+"px")}},{key:"initCardWidthListener",value:function(){var e;a.updateCardSize(),null===(e=window)||void 0===e||e.addEventListener("resize",(function(){a.updateCardSize()}))}},{key:"clearCell",value:function(e){e.classList.remove(g.Z.STARTABLE_CELL),e.classList.remove(g.Z.FINISHABLE_CELL),e.classList.remove(g.Z.BORDERABLE_CELL),e.classList.remove(g.Z.CORRECT_PATH_CELL),e.classList.remove(g.Z.WRONG_PATH_CELL)}}]),i}(v.w3["with"](y));A=a=R([(0,v.Ei)({components:{Card:h.Z}})],A);var k=A,b=i(40089);const p=(0,b.Z)(k,[["render",l],["__scopeId","data-v-f5446aec"]]);var B=p}}]);
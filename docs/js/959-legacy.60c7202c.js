"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[959],{76373:function(e,t,i){var n=i(82109),r=i(17854),l=i(46916),s=i(1702),a=i(24994),o=i(84488),c=i(17466),L=i(41340),E=i(19670),u=i(84326),f=i(47976),d=i(47850),C=i(67066),v=i(58173),h=i(31320),g=i(47293),_=i(5112),Z=i(36707),R=i(31530),m=i(97651),y=i(29909),A=i(31913),k=_("matchAll"),b="RegExp String",p=b+" Iterator",T=y.set,B=y.getterFor(p),S=RegExp.prototype,O=r.TypeError,I=s(C),P=s("".indexOf),D=s("".matchAll),F=!!D&&!g((function(){D("a",/./)})),N=a((function(e,t,i,n){T(this,{type:p,regexp:e,string:t,global:i,unicode:n,done:!1})}),b,(function(){var e=B(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,i=e.string,n=m(t,i);return null===n?{value:void 0,done:e.done=!0}:e.global?(""===L(n[0])&&(t.lastIndex=R(i,c(t.lastIndex),e.unicode)),{value:n,done:!1}):(e.done=!0,{value:n,done:!1})})),H=function(e){var t,i,n,r,l,s,a=E(this),o=L(e);return t=Z(a,RegExp),i=a.flags,void 0===i&&f(S,a)&&!("flags"in S)&&(i=I(a)),n=void 0===i?"":L(i),r=new t(t===RegExp?a.source:a,n),l=!!~P(n,"g"),s=!!~P(n,"u"),r.lastIndex=c(a.lastIndex),new N(r,o,l,s)};n({target:"String",proto:!0,forced:F},{matchAll:function(e){var t,i,n,r,s=o(this);if(null!=e){if(d(e)&&(t=L(o("flags"in S?e.flags:I(e))),!~P(t,"g")))throw O("`.matchAll` does not allow non-global regexes");if(F)return D(s,e);if(n=v(e,k),void 0===n&&A&&"RegExp"==u(e)&&(n=H),n)return l(n,e,s)}else if(F)return D(s,e);return i=L(s),r=new RegExp(e,"g"),A?l(H,r,i):r[k](i)}}),A||k in S||h(S,k,H)},84265:function(e,t){var i;(function(e){e[e["CENTER_CELL"]=0]="CENTER_CELL",e[e["PATH_CELL"]=1]="PATH_CELL",e[e["FOOD_CELL"]=2]="FOOD_CELL",e[e["BORDER_CELL"]=3]="BORDER_CELL",e[e["EMPTY_CELL"]=4]="EMPTY_CELL"})(i||(i={})),t["Z"]=i},50158:function(e,t){var i;(function(e){e["STARTABLE_CELL"]="table-cell-startable",e["FINISHABLE_CELL"]="table-cell-finishable",e["BORDERABLE_CELL"]="table-cell-borderable",e["CELL"]="table-cell",e["START_CELL"]="table-cell-start",e["FINISH_CELL"]="table-cell-finish",e["BORDER_CELL"]="table-cell-border",e["WRONG_PATH_CELL"]="table-cell-wrong-path",e["CORRECT_PATH_CELL"]="table-cell-correct-path",e["FOOD_CELL"]="table-cell-food"})(i||(i={})),t["Z"]=i},69923:function(e,t){var i;(function(e){e[e["BORDER_CELL"]=0]="BORDER_CELL",e[e["EMPTY_CELL"]=1]="EMPTY_CELL",e[e["CAN_BECOME_EMPTY"]=2]="CAN_BECOME_EMPTY",e[e["START_CELL"]=3]="START_CELL",e[e["FINISH_CELL"]=4]="FINISH_CELL",e[e["PATH_CELL"]=5]="PATH_CELL"})(i||(i={})),t["Z"]=i},67921:function(e,t,i){var n=i(62833),r=i(13087),l=i(82482),s=(0,n.Z)((function e(t,i){(0,r.Z)(this,e),(0,l.Z)(this,"x",void 0),(0,l.Z)(this,"y",void 0),this.x=t,this.y=i}));t["Z"]=s},48102:function(e,t,i){var n=i(62833),r=i(13087),l=i(82482),s=(0,n.Z)((function e(t,i){(0,r.Z)(this,e),(0,l.Z)(this,"point",void 0),(0,l.Z)(this,"type",void 0),this.point=t,this.type=i}));t["Z"]=s},78174:function(e,t,i){i.d(t,{Z:function(){return T}});var n=i(73396),r={class:"table cardCenterChild"},l=["id"];function s(e,t,i,s,a,o){return(0,n.wg)(),(0,n.iD)("table",r,[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.getLabyrinthSizing,(function(t){return(0,n.wg)(),(0,n.iD)("tr",{key:t},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.getLabyrinthSizing,(function(e){return(0,n.wg)(),(0,n.iD)("td",{key:e,id:"table-cell-"+(e-1)+"x"+(t-1),class:"table-cell"},"   ",8,l)})),128))])})),128))])])}var a,o=i(89584),c=i(52417),L=i(93806),E=i(25744),u=i(62833),f=i(13087),d=i(82482),C=i(3336),v=(i(38880),i(41539),i(81299),i(92222),i(39714),i(54747),i(24603),i(28450),i(74916),i(88386),i(76373),i(9653),i(91038),i(78783),i(66520)),h=i(9434),g=i(50158),_=i(69923),Z=i(67921),R=i(84265),m=function(e,t,i,n){var r,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,C.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(l<3?r(s):l>3?r(t,i,s):r(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s},y=(0,u.Z)((function e(){(0,f.Z)(this,e),(0,d.Z)(this,"labyrinthSizing",(0,v.vg)({required:!0}))})),A=a=function(e){(0,L.Z)(i,e);var t=(0,E.Z)(i);function i(){var e;(0,f.Z)(this,i);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),(0,d.Z)((0,c.Z)(e),"cells",document.getElementsByClassName(g.Z.CELL)),(0,d.Z)((0,c.Z)(e),"foodNutritionalValue",0),(0,d.Z)((0,c.Z)(e),"startPickingListener",(function(t){var i=t.target;e.clearCells(),i.classList.remove(g.Z.FINISH_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.add(g.Z.START_CELL),e.removeStartListener()})),(0,d.Z)((0,c.Z)(e),"finishPickingListener",(function(t){var i=t.target;e.clearCells(),i.classList.remove(g.Z.START_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.add(g.Z.FINISH_CELL),e.removeFinishListener()})),(0,d.Z)((0,c.Z)(e),"foodPickingListener",(function(t){var i=t.target;i.classList.remove(g.Z.START_CELL),i.classList.remove(g.Z.BORDER_CELL),i.classList.add(g.Z.FINISH_CELL),i.setAttribute("data-nutritionalValue",e.foodNutritionalValue.toString())})),(0,d.Z)((0,c.Z)(e),"borderPickingListener",(function(e){var t=e.target;t.classList.remove(g.Z.START_CELL),t.classList.remove(g.Z.FINISH_CELL),t.classList.add(g.Z.BORDER_CELL)})),e}return(0,u.Z)(i,[{key:"updateCellsCollection",value:function(){this.cells=document.getElementsByClassName(g.Z.CELL)}},{key:"getCells",get:function(){return this.updateCellsCollection(),this.cells}},{key:"getLabyrinthSizing",get:function(){return this.labyrinthSizing}},{key:"displayBorderCells",value:function(e){this.removeBorderListener(),this.resetCellsClasses(),e.forEach((function(e){e.forEach((function(e){var t=document.getElementById(g.Z.CELL+"-"+e.point.x+"x"+e.point.y);e.type!==_.Z.BORDER_CELL&&e.type!==R.Z.BORDER_CELL||null===t||void 0===t||t.setAttribute("class",g.Z.CELL+" "+g.Z.BORDER_CELL)}))}))}},{key:"getCellCoordinates",value:function(e){var t=new RegExp("(\\d*)x(\\d*)","g"),i=(0,o.Z)(e.id.matchAll(t));return new Z.Z(Number(i[0][1]),Number(i[0][2]))}},{key:"makeCellsSelectableForStart",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.STARTABLE_CELL),t.classList.remove(g.Z.START_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.classList.remove(g.Z.FINISHABLE_CELL),t.addEventListener("click",e.startPickingListener)}))}},{key:"makeCellsSelectableForFinish",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.FINISHABLE_CELL),t.classList.remove(g.Z.FINISH_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.finishPickingListener)}))}},{key:"makeCellsSelectableForFood",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.FINISHABLE_CELL),t.classList.remove(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.foodPickingListener)}))}},{key:"makeCellsSelectableForBorders",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.classList.add(g.Z.BORDERABLE_CELL),t.addEventListener("click",e.borderPickingListener)}))}},{key:"clearPreviousResult",value:function(){Array.from(this.cells).forEach((function(e){e.classList.remove(g.Z.WRONG_PATH_CELL),e.classList.remove(g.Z.CORRECT_PATH_CELL)}))}},{key:"resetCellsClasses",value:function(){Array.from(this.cells).forEach((function(e){e.setAttribute("class",g.Z.CELL),e.removeAttribute("data-nutritionalValue")}))}},{key:"clearCells",value:function(){Array.from(this.cells).forEach((function(e){a.clearCell(e)}))}},{key:"removeStartListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.startPickingListener)}))}},{key:"removeFinishListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.finishPickingListener)}))}},{key:"removeFoodListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.foodPickingListener)}))}},{key:"removeBorderListener",value:function(){var e=this;Array.from(this.cells).forEach((function(t){t.removeEventListener("click",e.borderPickingListener)}))}},{key:"mounted",value:function(){a.initCardWidthListener(),this.updateCellsCollection()}}],[{key:"updateCardSize",value:function(e){e&&(e.style.height=e.clientWidth+"px")}},{key:"initCardWidthListener",value:function(){var e=document.getElementById("labyrinthCard");a.updateCardSize(e),null===e||void 0===e||e.addEventListener("resize",(function(){a.updateCardSize(e)}))}},{key:"clearCell",value:function(e){e.classList.remove(g.Z.STARTABLE_CELL),e.classList.remove(g.Z.FINISHABLE_CELL),e.classList.remove(g.Z.BORDERABLE_CELL),e.classList.remove(g.Z.CORRECT_PATH_CELL),e.classList.remove(g.Z.WRONG_PATH_CELL)}}]),i}(v.w3["with"](y));A=a=m([(0,v.Ei)({components:{Card:h.Z}})],A);var k=A,b=i(40089);const p=(0,b.Z)(k,[["render",s],["__scopeId","data-v-50b1272d"]]);var T=p}}]);
//# sourceMappingURL=959-legacy.60c7202c.js.map
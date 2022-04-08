"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[849],{44008:function(t,n,e){e.r(n),e.d(n,{default:function(){return ct}});var i=e(73396),r=e(87139),a={class:"container",id:"container"},l={class:"row"},o={class:"col-lg-3 col-md-12"},s=(0,i._)("h1",null," Чего-то не хватает ",-1),u=(0,i._)("p",null," Стоит проверить наличие финиша и старта ",-1),c={class:"col-lg-6 col-md-12"},h={class:"col-lg-3 col-md-12"},d=(0,i._)("h1",null," Конфигуратор лабиринта ",-1),y=(0,i._)("p",null," Размерность поля ",-1),b=(0,i._)("div",{class:"separator"},null,-1),f=(0,i._)("div",{class:"separator"},null,-1),v=(0,i._)("div",{class:"spacer"},null,-1),L=(0,i._)("div",{class:"spacer"},null,-1),C=(0,i._)("div",{class:"separator"},null,-1),E=(0,i._)("div",{class:"spacer"},null,-1);function p(t,n,e,p,g,_){var Z=(0,i.up)("LabyrinthDescription"),k=(0,i.up)("Card"),I=(0,i.up)("Error"),T=(0,i.up)("Labyrinth"),B=(0,i.up)("vue-slider");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",l,[(0,i._)("div",o,[(0,i.Wm)(k,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(Z)]})),_:1}),(0,i.Wm)(I,{id:"error",class:(0,r.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,i.w5)((function(){return[s,u]})),_:1},8,["class"])]),(0,i._)("div",c,[(0,i.Wm)(k,{class:"cardCenter labyrinthCard",id:"labyrinthCard"},{default:(0,i.w5)((function(){return[(0,i.Wm)(T,{labyrinthSizing:t.labyrinthSizing,ref:"labyrinth"},null,8,["labyrinthSizing"])]})),_:1})]),(0,i._)("div",h,[(0,i.Wm)(k,null,{default:(0,i.w5)((function(){return[d,y,(0,i.Wm)(B,{modelValue:t.labyrinthSizing,"onUpdate:modelValue":n[0]||(n[0]=function(n){return t.labyrinthSizing=n}),disabled:!t.isConfigEditable,dotSize:20,max:29,min:5,silent:!0},null,8,["modelValue","disabled"]),b,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"generateButton"}," Сгенерировать лабиринт ",2),f,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-action activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startPickingButton"}," Установить старт ",2),v,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-caution activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"finishPickingButton"}," Установить финиш ",2),L,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-inverse activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"borderPickingButton"}," Редактировать границы ",2),C,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-highlight activeButton":!0===t.isConfigEditable&&t.isAbleToStart,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startButton"}," Запустить ",2),E,(0,i._)("button",{class:(0,r.C_)(["button button-flat button-border button-rounded",{activeButton:!0===t.isConfigEditable,nonActiveButton:!1===t.isConfigEditable}]),id:"clearButton"}," Очистить ",2)]})),_:1})])])])}var g=e(48534),_=e(13087),Z=e(62833),k=e(52417),I=e(93806),T=e(25744),B=e(82482),P=e(3336),S=(e(36133),e(38880),e(41539),e(81299),e(92222),e(54747),e(91038),e(78783),e(66520)),A=e(86774),m=e(93383),R=(0,i._)("h1",null," A* ",-1),N=(0,i._)("h3",null," Бонусная реализация ",-1),w=(0,i._)("p",null," Алгоритм для поиска выхода из лабиринта ",-1);function M(t,n,e,r,a,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[R,N,w],64)}var O=function(t,n,e,i){var r,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,P.Z)(Reflect))&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(l=(a<3?r(l):a>3?r(n,e,l):r(n,e))||l);return a>3&&l&&Object.defineProperty(n,e,l),l},D=function(t){(0,I.Z)(e,t);var n=(0,T.Z)(e);function e(){return(0,_.Z)(this,e),n.apply(this,arguments)}return(0,Z.Z)(e)}(S.w3);D=O([(0,S.Ei)({components:{}})],D);var G=D,Y=e(40089);const x=(0,Y.Z)(G,[["render",M]]);var F=x,H=e(48102),z=function(t){(0,I.Z)(e,t);var n=(0,T.Z)(e);function e(t,i){var r;return(0,_.Z)(this,e),r=n.call(this,t,i),(0,B.Z)((0,k.Z)(r),"point",void 0),(0,B.Z)((0,k.Z)(r),"type",void 0),r.point=t,r.type=i,r}return(0,Z.Z)(e)}(H.Z),K=z,W=(e(40561),e(69923)),j=e(67921),U=function(){function t(){(0,_.Z)(this,t)}return(0,Z.Z)(t,[{key:"generateLabyrinth",value:function(n){var e=[];t.list=[];for(var i=0;i<n;i++){e[i]=[];for(var r=0;r<n;r++)e[i][r]=new K(new j.Z(r,i),W.Z.BORDER_CELL)}var a=Math.floor(Math.random()*n),l=Math.floor(Math.random()*n);t.list=t.findPossibleDirection(n,e,t.list,a,l),e[a][l].type=W.Z.EMPTY_CELL;for(var o=0;o<Math.floor(Math.pow(Math.log(n),2)*n);o++){var s=Math.floor(Math.random()*t.list.length),u=t.list[s];e=t.createWay(n,e,s,u)}return e}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}},{key:"findPossibleDirection",value:function(t,n,e,i,r){return i+2<t&&n[i+2][r].type===W.Z.BORDER_CELL&&(e.push((i+2)*t+r),n[i+2][r].type=W.Z.CAN_BECOME_EMPTY),i-2>=0&&n[i-2][r].type===W.Z.BORDER_CELL&&(e.push((i-2)*t+r),n[i-2][r].type=W.Z.CAN_BECOME_EMPTY),r+2<t&&n[i][r+2].type===W.Z.BORDER_CELL&&(e.push(i*t+r+2),n[i][r+2].type=W.Z.CAN_BECOME_EMPTY),r-2>=0&&n[i][r-2].type===W.Z.BORDER_CELL&&(e.push(i*t+r-2),n[i][r-2].type=W.Z.CAN_BECOME_EMPTY),e}},{key:"createWay",value:function(n,e,i,r){var a=r%n,l=Math.floor(r/n),o=[4,4,4,4];l+2<n&&e[l+2][a].type===W.Z.EMPTY_CELL&&(o[0]=0),l-2>=0&&e[l-2][a].type===W.Z.EMPTY_CELL&&(o[1]=1),a+2<n&&e[l][a+2].type===W.Z.EMPTY_CELL&&(o[2]=2),a-2>=0&&e[l][a-2].type===W.Z.EMPTY_CELL&&(o[3]=3);var s=Math.floor(4*Math.random()),u=Math.floor(4*Math.random()),c=o[s];o[s]=o[u],o[u]=c;for(var h=0;h<4;h++){if(0===o[h]){e[l+1][a].type=W.Z.EMPTY_CELL,e[l][a].type=W.Z.EMPTY_CELL;break}if(1===o[h]){e[l-1][a].type=W.Z.EMPTY_CELL,e[l][a].type=W.Z.EMPTY_CELL;break}if(2===o[h]){e[l][a+1].type=W.Z.EMPTY_CELL,e[l][a].type=W.Z.EMPTY_CELL;break}if(3===o[h]){e[l][a-1].type=W.Z.EMPTY_CELL,e[l][a].type=W.Z.EMPTY_CELL;break}}return t.list.splice(i,1),t.list=t.findPossibleDirection(n,e,t.list,l,a),e}}]),t}();(0,B.Z)(U,"instance",void 0),(0,B.Z)(U,"list",[]);var V=U,$=e(8303),q=e.n($),J=e(50158),Q=(e(43290),(0,Z.Z)((function t(n,e){(0,_.Z)(this,t),(0,B.Z)(this,"processedCells",void 0),(0,B.Z)(this,"correctPathCells",void 0),this.processedCells=n,this.correctPathCells=e}))),X=Q,tt=function(){function t(){(0,_.Z)(this,t)}return(0,Z.Z)(t,[{key:"getLabyrinthSolution",value:function(n,e,i){for(var r=!1,a=[],l=[],o=n.length-1,s=n[0].length-1,u=new j.Z(0,0),c=Array(n.length),h=0;h<n.length;h++)c[h]=new Array(n[0].length).fill(u);var d=[{coords:e,parent:new j.Z(0,0),fromStartToPoint:0,wholePathLen:t.distanceToFinish(e,i)}],y=[],b=function(){var e=d.pop(),l=e.coords,h=e.parent,b=e.fromStartToPoint,f=l.x,v=l.y;if(c[v][f]!=u)return"continue";a.push(new K(l,W.Z.PATH_CELL)),c[v][f]=h,f>0&&c[v][f-1]==u&&n[v][f-1].type&&y.push(new j.Z(f-1,v)),f<o&&c[v][f+1]==u&&n[v][f+1].type&&y.push(new j.Z(f+1,v)),v>0&&c[v-1][f]==u&&n[v-1][f].type&&y.push(new j.Z(f,v-1)),v<s&&c[v+1][f]==u&&n[v+1][f].type&&y.push(new j.Z(f,v+1)),y.every((function(n){return n.x==i.x&&n.y==i.y?(c[i.y][i.x]=l,r=!0,!1):(d.push({coords:n,parent:l,fromStartToPoint:b+1,wholePathLen:b+1+t.distanceToFinish(n,i)}),t.sift(d),!0)})),y=[]};while(d.length&&!r)b();if(r){var f=c[i.y][i.x];while(f!=e)l.unshift(new K(f,W.Z.PATH_CELL)),f=c[f.y][f.x]}return a.shift(),new X(a,l)}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}},{key:"distanceToFinish",value:function(t,n){return Math.abs(t.x-n.x)+Math.abs(t.y-n.y)}},{key:"sift",value:function(t){var n=t.length,e=n-1,i=e-1;while(i>=0){if(i-1>=0&&t[i-1].wholePathLen<t[i].wholePathLen&&i--,!(t[e].wholePathLen>t[i].wholePathLen))break;var r=t[e];t[e]=t[i],t[i]=r,e=i,i=2*e-n}}}]),t}();(0,B.Z)(tt,"instance",void 0);var nt,et=tt;(function(t){t[t["START_PICKING"]=0]="START_PICKING",t[t["FINISH_PICKING"]=1]="FINISH_PICKING",t[t["BORDERS_PICKING"]=2]="BORDERS_PICKING",t[t["DATA_SUBMITTING"]=3]="DATA_SUBMITTING",t[t["LABYRINTH_CLEANING"]=4]="LABYRINTH_CLEANING",t[t["LABYRINTH_GENERATING"]=5]="LABYRINTH_GENERATING"})(nt||(nt={}));var it=nt,rt=e(82959),at=e(54126),lt=function(t,n,e,i){var r,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,P.Z)(Reflect))&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(l=(a<3?r(l):a>3?r(n,e,l):r(n,e))||l);return a>3&&l&&Object.defineProperty(n,e,l),l},ot=function(t){(0,I.Z)(e,t);var n=(0,T.Z)(e);function e(){var t;(0,_.Z)(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=n.call.apply(n,[this].concat(r)),(0,B.Z)((0,k.Z)(t),"meta",(0,S.cY)((function(){return(0,m.jq)({title:"🗺",htmlAttrs:{lang:"ru",amp:!0}})}))),(0,B.Z)((0,k.Z)(t),"isConfigEditable",!0),(0,B.Z)((0,k.Z)(t),"labyrinthSizingField",10),(0,B.Z)((0,k.Z)(t),"isErrorDisplaying",!1),(0,B.Z)((0,k.Z)(t),"isAbleToStart",!1),(0,B.Z)((0,k.Z)(t),"labyrinth",null),t}return(0,Z.Z)(e,[{key:"labyrinthSizing",get:function(){return this.labyrinthSizingField},set:function(t){var n;this.labyrinthSizingField=t,null===(n=this.labyrinth)||void 0===n||n.resetCellsClasses(),this.updateCellsCollection()}},{key:"updateCellsCollection",value:function(){this.labyrinth&&(this.labyrinth.cells=document.getElementsByClassName(J.Z.CELL))}},{key:"generateLabyrinth",value:function(){var t;null===(t=this.labyrinth)||void 0===t||t.displayBorderCells(V.getInstance().generateLabyrinth(this.labyrinthSizing))}},{key:"changeLabyrinthDisplayState",value:function(t){if(this.isConfigEditable){switch(t){case it.FINISH_PICKING:case it.START_PICKING:var n,e;null===(n=this.labyrinth)||void 0===n||n.clearPreviousResult(),null===(e=this.labyrinth)||void 0===e||e.removeBorderListener()}switch(t){case it.START_PICKING:var i;null===(i=this.labyrinth)||void 0===i||i.makeCellsSelectableForStart();break;case it.FINISH_PICKING:var r;null===(r=this.labyrinth)||void 0===r||r.makeCellsSelectableForFinish();break;case it.BORDERS_PICKING:var a,l;null===(a=this.labyrinth)||void 0===a||a.clearPreviousResult(),null===(l=this.labyrinth)||void 0===l||l.makeCellsSelectableForBorders();break;case it.DATA_SUBMITTING:var o;null===(o=this.labyrinth)||void 0===o||o.clearCells(),this.submitCellsToSolver();break;case it.LABYRINTH_GENERATING:this.generateLabyrinth();break;case it.LABYRINTH_CLEANING:var s;null===(s=this.labyrinth)||void 0===s||s.resetCellsClasses();break}}}},{key:"displayLabyrinthPathsCells",value:function(){var t=(0,g.Z)(regeneratorRuntime.mark((function t(n){var e,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=n.processedCells,i=0;case 2:if(!(i<e.length)){t.next=10;break}return r=document.getElementById(J.Z.CELL+"-"+e[i].point.x+"x"+e[i].point.y),null===r||void 0===r||r.classList.add(J.Z.WRONG_PATH_CELL),t.next=7,new Promise((function(t){return setTimeout(t,300)}));case 7:i++,t.next=2;break;case 10:return t.next=12,this.displayLabyrinthCorrectPathCells(n.correctPathCells);case 12:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()},{key:"displayLabyrinthCorrectPathCells",value:function(){var t=(0,g.Z)(regeneratorRuntime.mark((function t(n){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<n.length)){t.next=9;break}return i=document.getElementById(J.Z.CELL+"-"+n[e].point.x+"x"+n[e].point.y),null===i||void 0===i||i.classList.add(J.Z.CORRECT_PATH_CELL),t.next=6,new Promise((function(t){return setTimeout(t,100)}));case 6:e++,t.next=1;break;case 9:this.isConfigEditable=!0;case 10:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()},{key:"isStartAndFinishAvailable",value:function(){var t=!1,n=!1;return this.labyrinth&&Array.from(this.labyrinth.cells).forEach((function(e){e.classList.contains(J.Z.START_CELL)&&(t=!0),e.classList.contains(J.Z.FINISH_CELL)&&(n=!0)})),t&&n}},{key:"submitCellsToSolver",value:function(){for(var t=this,n=new Array(this.labyrinthSizing),e=0;e<this.labyrinthSizing;e++)n[e]=new Array(this.labyrinthSizing);var i=null,r=null;if(this.labyrinth)if(Array.from(this.labyrinth.cells).forEach((function(e){var a,l=null===(a=t.labyrinth)||void 0===a?void 0:a.getCellCoordinates(e);return e.classList.contains(J.Z.START_CELL)&&l?(n[l.y][l.x]=new K(l,W.Z.START_CELL),void(i=l)):e.classList.contains(J.Z.FINISH_CELL)&&l?(n[l.y][l.x]=new K(l,W.Z.FINISH_CELL),void(r=l)):void(e.classList.contains(J.Z.BORDER_CELL)&&l?n[l.y][l.x]=new K(l,W.Z.BORDER_CELL):l&&(n[l.y][l.x]=new K(l,W.Z.EMPTY_CELL)))})),i&&r){this.isErrorDisplaying=!1;var a=et.getInstance().getLabyrinthSolution(n,i,r);this.isConfigEditable=!1,this.displayLabyrinthPathsCells(a)}else this.isErrorDisplaying=!0}},{key:"initLabyrinth",value:function(){this.labyrinth=this.$refs.labyrinth}},{key:"initLabyrinthOnClick",value:function(){var t=this;this.labyrinth&&this.labyrinth.$el.addEventListener("click",(function(){t.isAbleToStart=t.isStartAndFinishAvailable()}))}},{key:"initStartPickingButtonOnclickListener",value:function(){var t=this,n=document.getElementById("startPickingButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.START_PICKING),t.isAbleToStart=t.isStartAndFinishAvailable()}))}},{key:"initFinishPickingButtonOnclickListener",value:function(){var t=this,n=document.getElementById("finishPickingButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.FINISH_PICKING),t.isAbleToStart=t.isStartAndFinishAvailable()}))}},{key:"initBorderPickingButtonOnclickListener",value:function(){var t=this,n=document.getElementById("borderPickingButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.BORDERS_PICKING),t.isAbleToStart=t.isStartAndFinishAvailable()}))}},{key:"initStartButtonOnClickListener",value:function(){var t=this,n=document.getElementById("startButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.DATA_SUBMITTING)}))}},{key:"initClearButtonOnClickListener",value:function(){var t=this,n=document.getElementById("clearButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.LABYRINTH_CLEANING)}))}},{key:"initGenerateButtonOnClickListener",value:function(){var t=this,n=document.getElementById("generateButton");null===n||void 0===n||n.addEventListener("click",(function(){t.changeLabyrinthDisplayState(it.LABYRINTH_GENERATING)}))}},{key:"mounted",value:function(){this.initLabyrinth(),this.initLabyrinthOnClick(),this.initStartPickingButtonOnclickListener(),this.initFinishPickingButtonOnclickListener(),this.initBorderPickingButtonOnclickListener(),this.initStartButtonOnClickListener(),this.initClearButtonOnClickListener(),this.initGenerateButtonOnClickListener()}}]),e}(S.w3);ot=lt([(0,S.Ei)({components:{Labyrinth:at.Z,LabyrinthDescription:F,VueSlider:q(),Card:A.Z,Error:rt.Z}})],ot);var st=ot;const ut=(0,Y.Z)(st,[["render",p]]);var ct=ut}}]);
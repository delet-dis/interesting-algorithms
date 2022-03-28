"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[585],{4265:function(t,e){var i;(function(t){t[t["CENTER_CELL"]=0]="CENTER_CELL",t[t["PATH_CELL"]=1]="PATH_CELL",t[t["FOOD_CELL"]=2]="FOOD_CELL",t[t["BORDER_CELL"]=3]="BORDER_CELL",t[t["EMPTY_CELL"]=4]="EMPTY_CELL"})(i||(i={})),e["Z"]=i},158:function(t,e){var i;(function(t){t["STARTABLE_CELL"]="table-cell-startable",t["FINISHABLE_CELL"]="table-cell-finishable",t["BORDERABLE_CELL"]="table-cell-borderable",t["CELL"]="table-cell",t["START_CELL"]="table-cell-start",t["FINISH_CELL"]="table-cell-finish",t["BORDER_CELL"]="table-cell-border",t["WRONG_PATH_CELL"]="table-cell-wrong-path",t["CORRECT_PATH_CELL"]="table-cell-correct-path",t["FOOD_CELL"]="table-cell-food"})(i||(i={})),e["Z"]=i},9923:function(t,e){var i;(function(t){t[t["BORDER_CELL"]=0]="BORDER_CELL",t[t["EMPTY_CELL"]=1]="EMPTY_CELL",t[t["CAN_BECOME_EMPTY"]=2]="CAN_BECOME_EMPTY",t[t["START_CELL"]=3]="START_CELL",t[t["FINISH_CELL"]=4]="FINISH_CELL",t[t["PATH_CELL"]=5]="PATH_CELL"})(i||(i={})),e["Z"]=i},7921:function(t,e,i){var n=i(2482);class s{constructor(t,e){(0,n.Z)(this,"x",void 0),(0,n.Z)(this,"y",void 0),this.x=t,this.y=e}}e["Z"]=s},8102:function(t,e,i){var n=i(2482);class s{constructor(t,e){(0,n.Z)(this,"point",void 0),(0,n.Z)(this,"type",void 0),this.point=t,this.type=e}}e["Z"]=s},8174:function(t,e,i){i.d(e,{Z:function(){return p}});var n=i(3396);const s={class:"table cardCenterChild"},l=["id"];function r(t,e,i,r,a,o){return(0,n.wg)(),(0,n.iD)("table",s,[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.getLabyrinthSizing,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.getLabyrinthSizing,(t=>((0,n.wg)(),(0,n.iD)("td",{key:t,id:"table-cell-"+(t-1)+"x"+(e-1),class:"table-cell"},"   ",8,l)))),128))])))),128))])])}var a,o=i(2482),c=i(6520),L=i(9434),h=i(158),E=i(9923),d=i(7921),C=i(4265),u=function(t,e,i,n){var s,l=arguments.length,r=l<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(l<3?s(r):l>3?s(e,i,r):s(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};class b{constructor(){(0,o.Z)(this,"labyrinthSizing",(0,c.vg)({required:!0}))}}let y=a=class extends(c.w3["with"](b)){constructor(...t){super(...t),(0,o.Z)(this,"cells",document.getElementsByClassName(h.Z.CELL)),(0,o.Z)(this,"foodNutritionalValue",0),(0,o.Z)(this,"startPickingListener",(t=>{let e=t.target;this.clearCells(),e.classList.remove(h.Z.FINISH_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.START_CELL),this.removeStartListener()})),(0,o.Z)(this,"finishPickingListener",(t=>{let e=t.target;this.clearCells(),e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.FINISH_CELL),this.removeFinishListener()})),(0,o.Z)(this,"foodPickingListener",(t=>{let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.FINISH_CELL),e.setAttribute("data-nutritionalValue",this.foodNutritionalValue.toString())})),(0,o.Z)(this,"borderPickingListener",(t=>{let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.FINISH_CELL),e.classList.add(h.Z.BORDER_CELL)}))}updateCellsCollection(){this.cells=document.getElementsByClassName(h.Z.CELL)}get getCells(){return this.updateCellsCollection(),this.cells}get getLabyrinthSizing(){return this.labyrinthSizing}displayBorderCells(t){this.removeBorderListener(),this.resetCellsClasses(),t.forEach((t=>{t.forEach((t=>{let e=document.getElementById(h.Z.CELL+"-"+t.point.x+"x"+t.point.y);t.type!==E.Z.BORDER_CELL&&t.type!==C.Z.BORDER_CELL||e?.setAttribute("class",h.Z.CELL+" "+h.Z.BORDER_CELL)}))}))}getCellCoordinates(t){let e=new RegExp("(\\d*)x(\\d*)","g"),i=[...t.id.matchAll(e)];return new d.Z(Number(i[0][1]),Number(i[0][2]))}static updateCardSize(t){t&&(t.style.height=t.clientWidth+"px")}static initCardWidthListener(){let t=document.getElementById("labyrinthCard");a.updateCardSize(t),t?.addEventListener("resize",(()=>{a.updateCardSize(t)}))}makeCellsSelectableForStart(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.START_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.addEventListener("click",this.startPickingListener)}))}makeCellsSelectableForFinish(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.FINISH_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.finishPickingListener)}))}makeCellsSelectableForFood(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.foodPickingListener)}))}makeCellsSelectableForBorders(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.borderPickingListener)}))}clearPreviousResult(){Array.from(this.cells).forEach((t=>{t.classList.remove(h.Z.WRONG_PATH_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL)}))}resetCellsClasses(){Array.from(this.cells).forEach((t=>{t.setAttribute("class",h.Z.CELL),t.removeAttribute("data-nutritionalValue")}))}clearCells(){Array.from(this.cells).forEach((t=>{a.clearCell(t)}))}static clearCell(t){t.classList.remove(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL),t.classList.remove(h.Z.WRONG_PATH_CELL)}removeStartListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.startPickingListener)}))}removeFinishListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.finishPickingListener)}))}removeFoodListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.foodPickingListener)}))}removeBorderListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.borderPickingListener)}))}mounted(){a.initCardWidthListener(),this.updateCellsCollection()}};y=a=u([(0,c.Ei)({components:{Card:L.Z}})],y);var _=y,g=i(89);const f=(0,g.Z)(_,[["render",r],["__scopeId","data-v-50b1272d"]]);var p=f},7461:function(t,e,i){i.r(e),i.d(e,{default:function(){return nt}});var n=i(3396),s=i(7139);const l={class:"container",id:"container"},r={class:"row"},a={class:"col-lg-3 col-md-12"},o=(0,n._)("h1",null," Чего-то не хватает ",-1),c=(0,n._)("p",null," Стоит проверить наличие финиша и старта ",-1),L={class:"col-lg-6 col-md-12"},h={class:"col-lg-3 col-md-12"},E=(0,n._)("h1",null," Конфигуратор лабиринта ",-1),d=(0,n._)("p",null," Размерность поля ",-1),C=(0,n._)("div",{class:"separator"},null,-1),u=(0,n._)("div",{class:"separator"},null,-1),b=(0,n._)("div",{class:"spacer"},null,-1),y=(0,n._)("div",{class:"spacer"},null,-1),_=(0,n._)("div",{class:"separator"},null,-1),g=(0,n._)("div",{class:"spacer"},null,-1);function f(t,e,i,f,p,m){const v=(0,n.up)("LabyrinthDescription"),B=(0,n.up)("Card"),Z=(0,n.up)("Error"),R=(0,n.up)("Labyrinth"),T=(0,n.up)("vue-slider");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",r,[(0,n._)("div",a,[(0,n.Wm)(B,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v)])),_:1}),(0,n.Wm)(Z,{id:"error",class:(0,s.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,n.w5)((()=>[o,c])),_:1},8,["class"])]),(0,n._)("div",L,[(0,n.Wm)(B,{class:"cardCenter labyrinthCard",id:"labyrinthCard"},{default:(0,n.w5)((()=>[(0,n.Wm)(R,{labyrinthSizing:t.labyrinthSizing,ref:"labyrinth"},null,8,["labyrinthSizing"])])),_:1})]),(0,n._)("div",h,[(0,n.Wm)(B,null,{default:(0,n.w5)((()=>[E,d,(0,n.Wm)(T,{modelValue:t.labyrinthSizing,"onUpdate:modelValue":e[0]||(e[0]=e=>t.labyrinthSizing=e),disabled:!t.isConfigEditable,dotSize:20,max:29,min:5,silent:!0},null,8,["modelValue","disabled"]),C,(0,n._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"generateButton"}," Сгенерировать лабиринт ",2),u,(0,n._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-action activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startPickingButton"}," Установить старт ",2),b,(0,n._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-caution activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"finishPickingButton"}," Установить финиш ",2),y,(0,n._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-inverse activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"borderPickingButton"}," Установить границы ",2),_,(0,n._)("button",{class:(0,s.C_)(["button button-border button-rounded",{"button-highlight activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startButton"}," Запустить ",2),g,(0,n._)("button",{class:(0,s.C_)(["button button-flat button-border button-rounded",{activeButton:!0===t.isConfigEditable,nonActiveButton:!1===t.isConfigEditable}]),id:"clearButton"}," Очистить ",2)])),_:1})])])])}var p=i(2482),m=i(6520),v=i(9434),B=i(6948);const Z=(0,n._)("h1",null," A* ",-1),R=(0,n._)("h3",null," Бонусная реализация ",-1),T=(0,n._)("p",null," Алгоритм для поиска выхода из лабиринта ",-1);function I(t,e,i,s,l,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[Z,R,T],64)}var P=function(t,e,i,n){var s,l=arguments.length,r=l<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(l<3?s(r):l>3?s(e,i,r):s(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};let A=class extends m.w3{};A=P([(0,m.Ei)({components:{}})],A);var S=A,N=i(89);const k=(0,N.Z)(S,[["render",I]]);var O=k,w=i(8102);class D extends w.Z{constructor(t,e){super(t,e),(0,p.Z)(this,"point",void 0),(0,p.Z)(this,"type",void 0),this.point=t,this.type=e}}var M=D,H=i(9923),F=i(7921);class G{static getInstance(){return G.instance||(G.instance=new G),G.instance}static findPossibleDirection(t,e,i,n,s){return n+2<t&&e[n+2][s].type===H.Z.BORDER_CELL&&(i.push((n+2)*t+s),e[n+2][s].type=H.Z.CAN_BECOME_EMPTY),n-2>=0&&e[n-2][s].type===H.Z.BORDER_CELL&&(i.push((n-2)*t+s),e[n-2][s].type=H.Z.CAN_BECOME_EMPTY),s+2<t&&e[n][s+2].type===H.Z.BORDER_CELL&&(i.push(n*t+s+2),e[n][s+2].type=H.Z.CAN_BECOME_EMPTY),s-2>=0&&e[n][s-2].type===H.Z.BORDER_CELL&&(i.push(n*t+s-2),e[n][s-2].type=H.Z.CAN_BECOME_EMPTY),i}static createWay(t,e,i,n){const s=n%t,l=Math.floor(n/t),r=[4,4,4,4];l+2<t&&e[l+2][s].type===H.Z.EMPTY_CELL&&(r[0]=0),l-2>=0&&e[l-2][s].type===H.Z.EMPTY_CELL&&(r[1]=1),s+2<t&&e[l][s+2].type===H.Z.EMPTY_CELL&&(r[2]=2),s-2>=0&&e[l][s-2].type===H.Z.EMPTY_CELL&&(r[3]=3);const a=Math.floor(4*Math.random()),o=Math.floor(4*Math.random()),c=r[a];r[a]=r[o],r[o]=c;for(let L=0;L<4;L++){if(0===r[L]){e[l+1][s].type=H.Z.EMPTY_CELL,e[l][s].type=H.Z.EMPTY_CELL;break}if(1===r[L]){e[l-1][s].type=H.Z.EMPTY_CELL,e[l][s].type=H.Z.EMPTY_CELL;break}if(2===r[L]){e[l][s+1].type=H.Z.EMPTY_CELL,e[l][s].type=H.Z.EMPTY_CELL;break}if(3===r[L]){e[l][s-1].type=H.Z.EMPTY_CELL,e[l][s].type=H.Z.EMPTY_CELL;break}}return G.list.splice(i,1),G.list=G.findPossibleDirection(t,e,G.list,l,s),e}generateLabyrinth(t){let e=[];G.list=[];for(let s=0;s<t;s++){e[s]=[];for(let i=0;i<t;i++)e[s][i]=new M(new F.Z(i,s),H.Z.BORDER_CELL)}const i=Math.floor(Math.random()*t),n=Math.floor(Math.random()*t);G.list=G.findPossibleDirection(t,e,G.list,i,n),e[i][n].type=H.Z.EMPTY_CELL;for(let s=0;s<Math.floor(Math.pow(Math.log(t),2)*t);s++){const i=Math.floor(Math.random()*G.list.length),n=G.list[i];e=G.createWay(t,e,i,n)}return e}}(0,p.Z)(G,"instance",void 0),(0,p.Z)(G,"list",[]);var Y=G,x=i(8303),z=i.n(x),K=i(158);class W{constructor(t,e){(0,p.Z)(this,"processedCells",void 0),(0,p.Z)(this,"correctPathCells",void 0),this.processedCells=t,this.correctPathCells=e}}var j=W;class V{static getInstance(){return V.instance||(V.instance=new V),V.instance}static distanceToFinish(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)}static sift(t){const e=t.length;let i=e-1,n=i-1;while(n>=0){if(n-1>=0&&t[n-1].wholePathLen<t[n].wholePathLen&&n--,!(t[i].wholePathLen>t[n].wholePathLen))break;{const e=t[i];t[i]=t[n],t[n]=e}i=n,n=2*i-e}}getLabyrinthSolution(t,e,i){let n=!1;const s=[],l=[],r=t.length-1,a=t[0].length-1,o=new F.Z(0,0),c=Array(t.length);for(let E=0;E<t.length;E++)c[E]=new Array(t[0].length).fill(o);const L=[{coords:e,parent:new F.Z(0,0),fromStartToPoint:0,wholePathLen:V.distanceToFinish(e,i)}];let h=[];while(L.length&&!n){const{coords:e,parent:l,fromStartToPoint:E}=L.pop(),{x:d,y:C}=e;c[C][d]==o&&(s.push(new M(e,H.Z.PATH_CELL)),c[C][d]=l,d>0&&c[C][d-1]==o&&t[C][d-1].type&&h.push(new F.Z(d-1,C)),d<r&&c[C][d+1]==o&&t[C][d+1].type&&h.push(new F.Z(d+1,C)),C>0&&c[C-1][d]==o&&t[C-1][d].type&&h.push(new F.Z(d,C-1)),C<a&&c[C+1][d]==o&&t[C+1][d].type&&h.push(new F.Z(d,C+1)),h.every((t=>t.x==i.x&&t.y==i.y?(c[i.y][i.x]=e,n=!0,!1):(L.push({coords:t,parent:e,fromStartToPoint:E+1,wholePathLen:E+1+V.distanceToFinish(t,i)}),V.sift(L),!0))),h=[])}if(n){let t=c[i.y][i.x];while(t!=e)l.unshift(new M(t,H.Z.PATH_CELL)),t=c[t.y][t.x]}return s.shift(),new j(s,l)}}(0,p.Z)(V,"instance",void 0);var U,q=V;(function(t){t[t["START_PICKING"]=0]="START_PICKING",t[t["FINISH_PICKING"]=1]="FINISH_PICKING",t[t["BORDERS_PICKING"]=2]="BORDERS_PICKING",t[t["DATA_SUBMITTING"]=3]="DATA_SUBMITTING",t[t["LABYRINTH_CLEANING"]=4]="LABYRINTH_CLEANING",t[t["LABYRINTH_GENERATING"]=5]="LABYRINTH_GENERATING"})(U||(U={}));var $=U,J=i(4258),Q=i(8174),X=function(t,e,i,n){var s,l=arguments.length,r=l<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(l<3?s(r):l>3?s(e,i,r):s(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};let tt=class extends m.w3{constructor(...t){super(...t),(0,p.Z)(this,"meta",(0,m.cY)((()=>(0,B.jq)({title:"🗺",htmlAttrs:{lang:"ru",amp:!0}})))),(0,p.Z)(this,"isConfigEditable",!0),(0,p.Z)(this,"labyrinthSizingField",10),(0,p.Z)(this,"isErrorDisplaying",!1),(0,p.Z)(this,"labyrinth",null)}get labyrinthSizing(){return this.labyrinthSizingField}set labyrinthSizing(t){this.labyrinthSizingField=t,this.labyrinth?.resetCellsClasses(),this.updateCellsCollection()}updateCellsCollection(){this.labyrinth&&(this.labyrinth.cells=document.getElementsByClassName(K.Z.CELL))}generateLabyrinth(){this.labyrinth?.displayBorderCells(Y.getInstance().generateLabyrinth(this.labyrinthSizing))}changeLabyrinthDisplayState(t){if(this.isConfigEditable){switch(t){case $.FINISH_PICKING:case $.START_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.removeBorderListener()}switch(t){case $.START_PICKING:this.labyrinth?.makeCellsSelectableForStart();break;case $.FINISH_PICKING:this.labyrinth?.makeCellsSelectableForFinish();break;case $.BORDERS_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.makeCellsSelectableForBorders();break;case $.DATA_SUBMITTING:this.labyrinth?.clearCells(),this.submitCellsToSolver();break;case $.LABYRINTH_GENERATING:this.generateLabyrinth();break;case $.LABYRINTH_CLEANING:this.labyrinth?.resetCellsClasses();break}}}async displayLabyrinthPathsCells(t){let e=t.processedCells;for(let i=0;i<e.length;i++){let t=document.getElementById(K.Z.CELL+"-"+e[i].point.x+"x"+e[i].point.y);t?.classList.add(K.Z.WRONG_PATH_CELL),await new Promise((t=>setTimeout(t,300)))}await this.displayLabyrinthCorrectPathCells(t.correctPathCells)}async displayLabyrinthCorrectPathCells(t){for(let e=0;e<t.length;e++){let i=document.getElementById(K.Z.CELL+"-"+t[e].point.x+"x"+t[e].point.y);i?.classList.add(K.Z.CORRECT_PATH_CELL),await new Promise((t=>setTimeout(t,100)))}this.isConfigEditable=!0}initLabyrinth(){this.labyrinth=this.$refs.labyrinth}initStartPickingButtonOnclickListener(){let t=document.getElementById("startPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.START_PICKING)}))}initFinishPickingButtonOnclickListener(){let t=document.getElementById("finishPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.FINISH_PICKING)}))}initBorderPickingButtonOnclickListener(){let t=document.getElementById("borderPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.BORDERS_PICKING)}))}initStartButtonOnClickListener(){let t=document.getElementById("startButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.DATA_SUBMITTING)}))}initClearButtonOnClickListener(){let t=document.getElementById("clearButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.LABYRINTH_CLEANING)}))}initGenerateButtonOnClickListener(){let t=document.getElementById("generateButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.LABYRINTH_GENERATING)}))}submitCellsToSolver(){let t=new Array(this.labyrinthSizing);for(let n=0;n<this.labyrinthSizing;n++)t[n]=new Array(this.labyrinthSizing);let e=null,i=null;if(this.labyrinth)if(Array.from(this.labyrinth.cells).forEach((n=>{let s=this.labyrinth?.getCellCoordinates(n);return n.classList.contains(K.Z.START_CELL)&&s?(t[s.y][s.x]=new M(s,H.Z.START_CELL),void(e=s)):n.classList.contains(K.Z.FINISH_CELL)&&s?(t[s.y][s.x]=new M(s,H.Z.FINISH_CELL),void(i=s)):void(n.classList.contains(K.Z.BORDER_CELL)&&s?t[s.y][s.x]=new M(s,H.Z.BORDER_CELL):s&&(t[s.y][s.x]=new M(s,H.Z.EMPTY_CELL)))})),e&&i){this.isErrorDisplaying=!1;let n=q.getInstance().getLabyrinthSolution(t,e,i);this.isConfigEditable=!1,this.displayLabyrinthPathsCells(n)}else this.isErrorDisplaying=!0}mounted(){this.initLabyrinth(),this.initStartPickingButtonOnclickListener(),this.initFinishPickingButtonOnclickListener(),this.initBorderPickingButtonOnclickListener(),this.initStartButtonOnClickListener(),this.initClearButtonOnClickListener(),this.initGenerateButtonOnClickListener()}};tt=X([(0,m.Ei)({components:{Labyrinth:Q.Z,LabyrinthDescription:O,VueSlider:z(),Card:v.Z,Error:J.Z}})],tt);var et=tt;const it=(0,N.Z)(et,[["render",f]]);var nt=it}}]);
//# sourceMappingURL=585.dfcef3e5.js.map
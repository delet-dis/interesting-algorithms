"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[58],{4265:function(t,e){var i;(function(t){t[t["CENTER_CELL"]=0]="CENTER_CELL",t[t["FOOD_CELL"]=1]="FOOD_CELL",t[t["BORDER_CELL"]=2]="BORDER_CELL",t[t["EMPTY_CELL"]=3]="EMPTY_CELL"})(i||(i={})),e["Z"]=i},158:function(t,e){var i;(function(t){t["STARTABLE_CELL"]="table-cell-startable",t["FINISHABLE_CELL"]="table-cell-finishable",t["BORDERABLE_CELL"]="table-cell-borderable",t["CELL"]="table-cell",t["START_CELL"]="table-cell-start",t["FINISH_CELL"]="table-cell-finish",t["BORDER_CELL"]="table-cell-border",t["WRONG_PATH_CELL"]="table-cell-wrong-path",t["CORRECT_PATH_CELL"]="table-cell-correct-path"})(i||(i={})),e["Z"]=i},9923:function(t,e){var i;(function(t){t[t["BORDER_CELL"]=0]="BORDER_CELL",t[t["EMPTY_CELL"]=1]="EMPTY_CELL",t[t["CAN_BECOME_EMPTY"]=2]="CAN_BECOME_EMPTY",t[t["START_CELL"]=3]="START_CELL",t[t["FINISH_CELL"]=4]="FINISH_CELL",t[t["PATH_CELL"]=5]="PATH_CELL"})(i||(i={})),e["Z"]=i},7921:function(t,e,i){var s=i(2482);class n{constructor(t,e){(0,s.Z)(this,"x",void 0),(0,s.Z)(this,"y",void 0),this.x=t,this.y=e}}e["Z"]=n},8102:function(t,e,i){var s=i(2482);class n{constructor(t,e){(0,s.Z)(this,"point",void 0),(0,s.Z)(this,"type",void 0),this.point=t,this.type=e}}e["Z"]=n},4126:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(3396);const n={class:"table cardCenterChild",id:"table"},l=["id"];function r(t,e,i,r,a,o){return(0,s.wg)(),(0,s.iD)("table",n,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.getLabyrinthSizing,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.getLabyrinthSizing,(t=>((0,s.wg)(),(0,s.iD)("td",{key:t,id:"table-cell-"+(t-1)+"x"+(e-1),class:"table-cell"},"   ",8,l)))),128))])))),128))])])}var a,o=i(2482),c=i(6520),L=i(6774),h=i(158),d=i(9923),E=i(7921),C=i(4265),u=function(t,e,i,s){var n,l=arguments.length,r=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(l<3?n(r):l>3?n(e,i,r):n(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};class b{constructor(){(0,o.Z)(this,"labyrinthSizing",(0,c.vg)({required:!0}))}}let y=a=class extends(c.w3["with"](b)){constructor(...t){super(...t),(0,o.Z)(this,"cells",document.getElementsByClassName(h.Z.CELL)),(0,o.Z)(this,"foodNutritionalValue",0),(0,o.Z)(this,"startPickingListener",(t=>{this.removeFoodListener();let e=t.target;this.clearCells(),e.classList.remove(h.Z.FINISH_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.START_CELL),this.removeStartListener()})),(0,o.Z)(this,"finishPickingListener",(t=>{let e=t.target;this.clearCells(),e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.FINISH_CELL),this.removeFinishListener()})),(0,o.Z)(this,"foodPickingListener",(t=>{let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.contains(h.Z.FINISH_CELL)?(e.classList.remove(h.Z.FINISH_CELL),e.removeAttribute("data-nutritionalValue")):(e.classList.add(h.Z.FINISH_CELL),e.setAttribute("data-nutritionalValue",this.foodNutritionalValue.toString()))})),(0,o.Z)(this,"borderPickingListener",(t=>{this.removeFoodListener();let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.FINISH_CELL),e.classList.contains(h.Z.BORDER_CELL)?e.classList.remove(h.Z.BORDER_CELL):e.classList.add(h.Z.BORDER_CELL)}))}updateCellsCollection(){this.cells=document.getElementsByClassName(h.Z.CELL)}get getCells(){return this.updateCellsCollection(),this.cells}get getLabyrinthSizing(){return a.updateCardSize(),this.labyrinthSizing}displayBorderCells(t){this.removeBorderListener(),this.resetCellsClasses(),t.forEach((t=>{t.forEach((t=>{let e=document.getElementById(h.Z.CELL+"-"+t.point.x+"x"+t.point.y);t.type!==d.Z.BORDER_CELL&&t.type!==C.Z.BORDER_CELL||e?.setAttribute("class",h.Z.CELL+" "+h.Z.BORDER_CELL)}))}))}getCellCoordinates(t){let e=new RegExp("(\\d*)x(\\d*)","g"),i=[...t.id.matchAll(e)];return new E.Z(Number(i[0][1]),Number(i[0][2]))}static updateCardSize(){let t=document.getElementById("labyrinthCard"),e=document.getElementById("table");t&&e&&(t.style.height=t.clientWidth+"px",t.style.height=e.clientHeight+20+"px")}static initCardWidthListener(){a.updateCardSize(),window?.addEventListener("resize",(()=>{a.updateCardSize()}))}makeCellsSelectableForStart(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.START_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.addEventListener("click",this.startPickingListener)}))}makeCellsSelectableForFinish(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.FINISH_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.finishPickingListener)}))}makeCellsSelectableForFood(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.foodPickingListener)}))}makeCellsSelectableForBorders(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.borderPickingListener)}))}clearPreviousResult(){Array.from(this.cells).forEach((t=>{t.classList.remove(h.Z.WRONG_PATH_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL)}))}resetCellsClasses(){Array.from(this.cells).forEach((t=>{t.setAttribute("class",h.Z.CELL),t.removeAttribute("data-nutritionalValue")}))}clearCells(){Array.from(this.cells).forEach((t=>{a.clearCell(t)}))}static clearCell(t){t.classList.remove(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL),t.classList.remove(h.Z.WRONG_PATH_CELL)}removeStartListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.startPickingListener)}))}removeFinishListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.finishPickingListener)}))}removeFoodListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.foodPickingListener)}))}removeBorderListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.borderPickingListener)}))}mounted(){a.initCardWidthListener(),this.updateCellsCollection()}};y=a=u([(0,c.Ei)({components:{Card:L.Z}})],y);var _=y,g=i(89);const f=(0,g.Z)(_,[["render",r],["__scopeId","data-v-36c4539a"]]);var p=f},9636:function(t,e,i){i.r(e),i.d(e,{default:function(){return st}});var s=i(3396),n=i(7139);const l={class:"container",id:"container"},r={class:"row"},a={class:"col-lg-3 col-md-12"},o=(0,s._)("h1",null," Чего-то не хватает ",-1),c=(0,s._)("p",null," Стоит проверить наличие финиша и старта ",-1),L={class:"col-lg-6 col-md-12"},h={class:"col-lg-3 col-md-12"},d=(0,s._)("h1",null," Конфигуратор лабиринта ",-1),E=(0,s._)("p",null," Размерность поля ",-1),C=(0,s._)("div",{class:"separator"},null,-1),u=(0,s._)("div",{class:"separator"},null,-1),b=(0,s._)("div",{class:"spacer"},null,-1),y=(0,s._)("div",{class:"spacer"},null,-1),_=(0,s._)("div",{class:"separator"},null,-1),g=(0,s._)("div",{class:"spacer"},null,-1);function f(t,e,i,f,p,m){const v=(0,s.up)("LabyrinthDescription"),Z=(0,s.up)("Card"),A=(0,s.up)("Error"),B=(0,s.up)("Labyrinth"),R=(0,s.up)("vue-slider");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",r,[(0,s._)("div",a,[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v)])),_:1}),(0,s.Wm)(A,{id:"error",class:(0,n.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,s.w5)((()=>[o,c])),_:1},8,["class"])]),(0,s._)("div",L,[(0,s.Wm)(Z,{class:"cardCenter labyrinthCard",id:"labyrinthCard"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{labyrinthSizing:t.labyrinthSizing,ref:"labyrinth"},null,8,["labyrinthSizing"])])),_:1})]),(0,s._)("div",h,[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[d,E,(0,s.Wm)(R,{modelValue:t.labyrinthSizing,"onUpdate:modelValue":e[0]||(e[0]=e=>t.labyrinthSizing=e),disabled:!t.isConfigEditable,dotSize:20,max:29,min:5,silent:!0},null,8,["modelValue","disabled"]),C,(0,s._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"generateButton"}," Сгенерировать лабиринт ",2),u,(0,s._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-action activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startPickingButton"}," Установить старт ",2),b,(0,s._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-caution activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"finishPickingButton"}," Установить финиш ",2),y,(0,s._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-inverse activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"borderPickingButton"}," Редактировать границы ",2),_,(0,s._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-highlight activeButton":!0===t.isConfigEditable&&t.isAbleToStart,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startButton"}," Запустить ",2),g,(0,s._)("button",{class:(0,n.C_)(["button button-flat button-border button-rounded",{activeButton:!0===t.isConfigEditable,nonActiveButton:!1===t.isConfigEditable}]),id:"clearButton"}," Очистить ",2)])),_:1})])])])}var p=i(2482),m=i(6520),v=i(6774),Z=i(6948);const A=(0,s._)("h1",null," A* ",-1),B=(0,s._)("h3",null," Бонусная реализация ",-1),R=(0,s._)("p",null," Алгоритм для поиска выхода из лабиринта ",-1);function T(t,e,i,n,l,r){return(0,s.wg)(),(0,s.iD)(s.HY,null,[A,B,R],64)}var S=function(t,e,i,s){var n,l=arguments.length,r=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(l<3?n(r):l>3?n(e,i,r):n(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};let I=class extends m.w3{};I=S([(0,m.Ei)({components:{}})],I);var P=I,N=i(89);const k=(0,N.Z)(P,[["render",T]]);var O=k,w=i(8102);class D extends w.Z{constructor(t,e){super(t,e),(0,p.Z)(this,"point",void 0),(0,p.Z)(this,"type",void 0),this.point=t,this.type=e}}var F=D,M=i(9923),H=i(7921);class G{static getInstance(){return G.instance||(G.instance=new G),G.instance}static findPossibleDirection(t,e,i,s,n){return s+2<t&&e[s+2][n].type===M.Z.BORDER_CELL&&(i.push((s+2)*t+n),e[s+2][n].type=M.Z.CAN_BECOME_EMPTY),s-2>=0&&e[s-2][n].type===M.Z.BORDER_CELL&&(i.push((s-2)*t+n),e[s-2][n].type=M.Z.CAN_BECOME_EMPTY),n+2<t&&e[s][n+2].type===M.Z.BORDER_CELL&&(i.push(s*t+n+2),e[s][n+2].type=M.Z.CAN_BECOME_EMPTY),n-2>=0&&e[s][n-2].type===M.Z.BORDER_CELL&&(i.push(s*t+n-2),e[s][n-2].type=M.Z.CAN_BECOME_EMPTY),i}static createWay(t,e,i,s){const n=s%t,l=Math.floor(s/t),r=[4,4,4,4];l+2<t&&e[l+2][n].type===M.Z.EMPTY_CELL&&(r[0]=0),l-2>=0&&e[l-2][n].type===M.Z.EMPTY_CELL&&(r[1]=1),n+2<t&&e[l][n+2].type===M.Z.EMPTY_CELL&&(r[2]=2),n-2>=0&&e[l][n-2].type===M.Z.EMPTY_CELL&&(r[3]=3);const a=Math.floor(4*Math.random()),o=Math.floor(4*Math.random()),c=r[a];r[a]=r[o],r[o]=c;for(let L=0;L<4;L++){if(0===r[L]){e[l+1][n].type=M.Z.EMPTY_CELL,e[l][n].type=M.Z.EMPTY_CELL;break}if(1===r[L]){e[l-1][n].type=M.Z.EMPTY_CELL,e[l][n].type=M.Z.EMPTY_CELL;break}if(2===r[L]){e[l][n+1].type=M.Z.EMPTY_CELL,e[l][n].type=M.Z.EMPTY_CELL;break}if(3===r[L]){e[l][n-1].type=M.Z.EMPTY_CELL,e[l][n].type=M.Z.EMPTY_CELL;break}}return G.list.splice(i,1),G.list=G.findPossibleDirection(t,e,G.list,l,n),e}generateLabyrinth(t){let e=[];G.list=[];for(let n=0;n<t;n++){e[n]=[];for(let i=0;i<t;i++)e[n][i]=new F(new H.Z(i,n),M.Z.BORDER_CELL)}const i=Math.floor(Math.random()*t),s=Math.floor(Math.random()*t);G.list=G.findPossibleDirection(t,e,G.list,i,s),e[i][s].type=M.Z.EMPTY_CELL;for(let n=0;n<Math.floor(Math.pow(Math.log(t),2)*t);n++){const i=Math.floor(Math.random()*G.list.length),s=G.list[i];e=G.createWay(t,e,i,s)}return e}}(0,p.Z)(G,"instance",void 0),(0,p.Z)(G,"list",[]);var Y=G,x=i(8303),z=i.n(x),K=i(158);class W{constructor(t,e){(0,p.Z)(this,"processedCells",void 0),(0,p.Z)(this,"correctPathCells",void 0),this.processedCells=t,this.correctPathCells=e}}var j=W;class V{static getInstance(){return V.instance||(V.instance=new V),V.instance}static distanceToFinish(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)}static sift(t){const e=t.length;let i=e-1,s=i-1;while(s>=0){if(s-1>=0&&t[s-1].wholePathLen<t[s].wholePathLen&&s--,!(t[i].wholePathLen>t[s].wholePathLen))break;{const e=t[i];t[i]=t[s],t[s]=e}i=s,s=2*i-e}}getLabyrinthSolution(t,e,i){let s=!1;const n=[],l=[],r=t.length-1,a=t[0].length-1,o=new H.Z(0,0),c=Array(t.length);for(let d=0;d<t.length;d++)c[d]=new Array(t[0].length).fill(o);const L=[{coords:e,parent:new H.Z(0,0),fromStartToPoint:0,wholePathLen:V.distanceToFinish(e,i)}];let h=[];while(L.length&&!s){const{coords:e,parent:l,fromStartToPoint:d}=L.pop(),{x:E,y:C}=e;c[C][E]==o&&(n.push(new F(e,M.Z.PATH_CELL)),c[C][E]=l,E>0&&c[C][E-1]==o&&t[C][E-1].type&&h.push(new H.Z(E-1,C)),E<r&&c[C][E+1]==o&&t[C][E+1].type&&h.push(new H.Z(E+1,C)),C>0&&c[C-1][E]==o&&t[C-1][E].type&&h.push(new H.Z(E,C-1)),C<a&&c[C+1][E]==o&&t[C+1][E].type&&h.push(new H.Z(E,C+1)),h.every((t=>t.x==i.x&&t.y==i.y?(c[i.y][i.x]=e,s=!0,!1):(L.push({coords:t,parent:e,fromStartToPoint:d+1,wholePathLen:d+1+V.distanceToFinish(t,i)}),V.sift(L),!0))),h=[])}if(s){let t=c[i.y][i.x];while(t!=e)l.unshift(new F(t,M.Z.PATH_CELL)),t=c[t.y][t.x]}return n.shift(),new j(n,l)}}(0,p.Z)(V,"instance",void 0);var U,q=V;(function(t){t[t["START_PICKING"]=0]="START_PICKING",t[t["FINISH_PICKING"]=1]="FINISH_PICKING",t[t["BORDERS_PICKING"]=2]="BORDERS_PICKING",t[t["DATA_SUBMITTING"]=3]="DATA_SUBMITTING",t[t["LABYRINTH_CLEANING"]=4]="LABYRINTH_CLEANING",t[t["LABYRINTH_GENERATING"]=5]="LABYRINTH_GENERATING"})(U||(U={}));var $=U,J=i(8959),Q=i(4126),X=function(t,e,i,s){var n,l=arguments.length,r=l<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(l<3?n(r):l>3?n(e,i,r):n(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r};let tt=class extends m.w3{constructor(...t){super(...t),(0,p.Z)(this,"meta",(0,m.cY)((()=>(0,Z.jq)({title:"🗺",htmlAttrs:{lang:"ru",amp:!0}})))),(0,p.Z)(this,"isConfigEditable",!0),(0,p.Z)(this,"labyrinthSizingField",10),(0,p.Z)(this,"isErrorDisplaying",!1),(0,p.Z)(this,"isAbleToStart",!1),(0,p.Z)(this,"labyrinth",null)}get labyrinthSizing(){return this.labyrinthSizingField}set labyrinthSizing(t){this.labyrinthSizingField=t,this.labyrinth?.resetCellsClasses(),this.updateCellsCollection()}updateCellsCollection(){this.labyrinth&&(this.labyrinth.cells=document.getElementsByClassName(K.Z.CELL))}generateLabyrinth(){this.labyrinth?.displayBorderCells(Y.getInstance().generateLabyrinth(this.labyrinthSizing))}changeLabyrinthDisplayState(t){if(this.isConfigEditable){switch(t){case $.FINISH_PICKING:case $.START_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.removeBorderListener()}switch(t){case $.START_PICKING:this.labyrinth?.makeCellsSelectableForStart();break;case $.FINISH_PICKING:this.labyrinth?.makeCellsSelectableForFinish();break;case $.BORDERS_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.makeCellsSelectableForBorders();break;case $.DATA_SUBMITTING:this.labyrinth?.clearCells(),this.submitCellsToSolver();break;case $.LABYRINTH_GENERATING:this.generateLabyrinth();break;case $.LABYRINTH_CLEANING:this.labyrinth?.resetCellsClasses();break}}}async displayLabyrinthPathsCells(t){let e=t.processedCells;for(let i=0;i<e.length;i++){let t=document.getElementById(K.Z.CELL+"-"+e[i].point.x+"x"+e[i].point.y);t?.classList.add(K.Z.WRONG_PATH_CELL),await new Promise((t=>setTimeout(t,300)))}await this.displayLabyrinthCorrectPathCells(t.correctPathCells)}async displayLabyrinthCorrectPathCells(t){for(let e=0;e<t.length;e++){let i=document.getElementById(K.Z.CELL+"-"+t[e].point.x+"x"+t[e].point.y);i?.classList.add(K.Z.CORRECT_PATH_CELL),await new Promise((t=>setTimeout(t,100)))}this.isConfigEditable=!0}isStartAndFinishAvailable(){let t=!1,e=!1;return this.labyrinth&&Array.from(this.labyrinth.cells).forEach((i=>{i.classList.contains(K.Z.START_CELL)&&(t=!0),i.classList.contains(K.Z.FINISH_CELL)&&(e=!0)})),t&&e}submitCellsToSolver(){let t=new Array(this.labyrinthSizing);for(let s=0;s<this.labyrinthSizing;s++)t[s]=new Array(this.labyrinthSizing);let e=null,i=null;if(this.labyrinth)if(Array.from(this.labyrinth.cells).forEach((s=>{let n=this.labyrinth?.getCellCoordinates(s);return s.classList.contains(K.Z.START_CELL)&&n?(t[n.y][n.x]=new F(n,M.Z.START_CELL),void(e=n)):s.classList.contains(K.Z.FINISH_CELL)&&n?(t[n.y][n.x]=new F(n,M.Z.FINISH_CELL),void(i=n)):void(s.classList.contains(K.Z.BORDER_CELL)&&n?t[n.y][n.x]=new F(n,M.Z.BORDER_CELL):n&&(t[n.y][n.x]=new F(n,M.Z.EMPTY_CELL)))})),e&&i){this.isErrorDisplaying=!1;let s=q.getInstance().getLabyrinthSolution(t,e,i);this.isConfigEditable=!1,this.displayLabyrinthPathsCells(s)}else this.isErrorDisplaying=!0}initLabyrinth(){this.labyrinth=this.$refs.labyrinth}initLabyrinthOnClick(){this.labyrinth&&this.labyrinth.$el.addEventListener("click",(()=>{this.isAbleToStart=this.isStartAndFinishAvailable()}))}initStartPickingButtonOnclickListener(){let t=document.getElementById("startPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.START_PICKING),this.isAbleToStart=this.isStartAndFinishAvailable()}))}initFinishPickingButtonOnclickListener(){let t=document.getElementById("finishPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.FINISH_PICKING),this.isAbleToStart=this.isStartAndFinishAvailable()}))}initBorderPickingButtonOnclickListener(){let t=document.getElementById("borderPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.BORDERS_PICKING),this.isAbleToStart=this.isStartAndFinishAvailable()}))}initStartButtonOnClickListener(){let t=document.getElementById("startButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.DATA_SUBMITTING)}))}initClearButtonOnClickListener(){let t=document.getElementById("clearButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.LABYRINTH_CLEANING)}))}initGenerateButtonOnClickListener(){let t=document.getElementById("generateButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState($.LABYRINTH_GENERATING)}))}mounted(){this.initLabyrinth(),this.initLabyrinthOnClick(),this.initStartPickingButtonOnclickListener(),this.initFinishPickingButtonOnclickListener(),this.initBorderPickingButtonOnclickListener(),this.initStartButtonOnClickListener(),this.initClearButtonOnClickListener(),this.initGenerateButtonOnClickListener()}};tt=X([(0,m.Ei)({components:{Labyrinth:Q.Z,LabyrinthDescription:O,VueSlider:z(),Card:v.Z,Error:J.Z}})],tt);var et=tt;const it=(0,N.Z)(et,[["render",f]]);var st=it}}]);
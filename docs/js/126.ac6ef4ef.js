"use strict";(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[126],{4265:function(t,e){var i;(function(t){t[t["CENTER_CELL"]=0]="CENTER_CELL",t[t["FOOD_CELL"]=1]="FOOD_CELL",t[t["BORDER_CELL"]=2]="BORDER_CELL",t[t["EMPTY_CELL"]=3]="EMPTY_CELL"})(i||(i={})),e["Z"]=i},158:function(t,e){var i;(function(t){t["STARTABLE_CELL"]="table-cell-startable",t["FINISHABLE_CELL"]="table-cell-finishable",t["BORDERABLE_CELL"]="table-cell-borderable",t["CELL"]="table-cell",t["START_CELL"]="table-cell-start",t["FINISH_CELL"]="table-cell-finish",t["BORDER_CELL"]="table-cell-border",t["WRONG_PATH_CELL"]="table-cell-wrong-path",t["CORRECT_PATH_CELL"]="table-cell-correct-path"})(i||(i={})),e["Z"]=i},9923:function(t,e){var i;(function(t){t[t["BORDER_CELL"]=0]="BORDER_CELL",t[t["EMPTY_CELL"]=1]="EMPTY_CELL",t[t["CAN_BECOME_EMPTY"]=2]="CAN_BECOME_EMPTY",t[t["START_CELL"]=3]="START_CELL",t[t["FINISH_CELL"]=4]="FINISH_CELL",t[t["PATH_CELL"]=5]="PATH_CELL"})(i||(i={})),e["Z"]=i},7921:function(t,e,i){var r=i(2482);class n{constructor(t,e){(0,r.Z)(this,"x",void 0),(0,r.Z)(this,"y",void 0),this.x=t,this.y=e}}e["Z"]=n},8102:function(t,e,i){var r=i(2482);class n{constructor(t,e){(0,r.Z)(this,"point",void 0),(0,r.Z)(this,"type",void 0),this.point=t,this.type=e}}e["Z"]=n},5602:function(t,e,i){i.d(e,{Z:function(){return C}});var r=i(3396);const n={class:"table cardCenterChild",id:"table"},o=["id"];function s(t,e,i,s,a,l){return(0,r.wg)(),(0,r.iD)("table",n,[(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.getLabyrinthSizing,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.getLabyrinthSizing,(t=>((0,r.wg)(),(0,r.iD)("td",{key:t,id:"table-cell-"+(t-1)+"x"+(e-1),class:"table-cell"},"   ",8,o)))),128))])))),128))])])}var a,l=i(2482),u=i(6520),c=i(9434),h=i(158),d=i(9923),p=i(7921),f=i(4265),b=function(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};class L{constructor(){(0,l.Z)(this,"labyrinthSizing",(0,u.vg)({required:!0}))}}let y=a=class extends(u.w3["with"](L)){constructor(...t){super(...t),(0,l.Z)(this,"cells",document.getElementsByClassName(h.Z.CELL)),(0,l.Z)(this,"foodNutritionalValue",0),(0,l.Z)(this,"startPickingListener",(t=>{let e=t.target;this.clearCells(),e.classList.remove(h.Z.FINISH_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.START_CELL),this.removeStartListener()})),(0,l.Z)(this,"finishPickingListener",(t=>{let e=t.target;this.clearCells(),e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.add(h.Z.FINISH_CELL),this.removeFinishListener()})),(0,l.Z)(this,"foodPickingListener",(t=>{let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.BORDER_CELL),e.classList.contains(h.Z.FINISH_CELL)?(e.classList.remove(h.Z.FINISH_CELL),e.removeAttribute("data-nutritionalValue")):(e.classList.add(h.Z.FINISH_CELL),e.setAttribute("data-nutritionalValue",this.foodNutritionalValue.toString()))})),(0,l.Z)(this,"borderPickingListener",(t=>{let e=t.target;e.classList.remove(h.Z.START_CELL),e.classList.remove(h.Z.FINISH_CELL),e.classList.contains(h.Z.BORDER_CELL)?e.classList.remove(h.Z.BORDER_CELL):e.classList.add(h.Z.BORDER_CELL)}))}updateCellsCollection(){this.cells=document.getElementsByClassName(h.Z.CELL)}get getCells(){return this.updateCellsCollection(),this.cells}get getLabyrinthSizing(){return a.updateCardSize(),this.labyrinthSizing}displayBorderCells(t){this.removeBorderListener(),this.resetCellsClasses(),t.forEach((t=>{t.forEach((t=>{let e=document.getElementById(h.Z.CELL+"-"+t.point.x+"x"+t.point.y);t.type!==d.Z.BORDER_CELL&&t.type!==f.Z.BORDER_CELL||e?.setAttribute("class",h.Z.CELL+" "+h.Z.BORDER_CELL)}))}))}getCellCoordinates(t){let e=new RegExp("(\\d*)x(\\d*)","g"),i=[...t.id.matchAll(e)];return new p.Z(Number(i[0][1]),Number(i[0][2]))}static updateCardSize(){let t=document.getElementById("labyrinthCard"),e=document.getElementById("table");t&&e&&(t.style.height=t.clientWidth+"px",t.style.height=e.clientHeight+20+"px")}static initCardWidthListener(){a.updateCardSize(),window?.addEventListener("resize",(()=>{a.updateCardSize()}))}makeCellsSelectableForStart(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.START_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.addEventListener("click",this.startPickingListener)}))}makeCellsSelectableForFinish(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.FINISH_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.finishPickingListener)}))}makeCellsSelectableForFood(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.foodPickingListener)}))}makeCellsSelectableForBorders(){Array.from(this.cells).forEach((t=>{t.classList.add(h.Z.BORDERABLE_CELL),t.addEventListener("click",this.borderPickingListener)}))}clearPreviousResult(){Array.from(this.cells).forEach((t=>{t.classList.remove(h.Z.WRONG_PATH_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL)}))}resetCellsClasses(){Array.from(this.cells).forEach((t=>{t.setAttribute("class",h.Z.CELL),t.removeAttribute("data-nutritionalValue")}))}clearCells(){Array.from(this.cells).forEach((t=>{a.clearCell(t)}))}static clearCell(t){t.classList.remove(h.Z.STARTABLE_CELL),t.classList.remove(h.Z.FINISHABLE_CELL),t.classList.remove(h.Z.BORDERABLE_CELL),t.classList.remove(h.Z.CORRECT_PATH_CELL),t.classList.remove(h.Z.WRONG_PATH_CELL)}removeStartListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.startPickingListener)}))}removeFinishListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.finishPickingListener)}))}removeFoodListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.foodPickingListener)}))}removeBorderListener(){Array.from(this.cells).forEach((t=>{t.removeEventListener("click",this.borderPickingListener)}))}mounted(){a.initCardWidthListener(),this.updateCellsCollection()}};y=a=b([(0,u.Ei)({components:{Card:c.Z}})],y);var v=y,E=i(89);const m=(0,E.Z)(v,[["render",s],["__scopeId","data-v-f5446aec"]]);var C=m},8241:function(t,e,i){i.r(e),i.d(e,{default:function(){return Xt}});var r=i(3396),n=i(7139);const o={class:"container"},s={class:"row"},a={class:"col-lg-3 col-md-12"},l=(0,r._)("h1",null," Чего-то не хватает ",-1),u=(0,r._)("p",null," Стоит проверить наличие центра колонии и точек еды ",-1),c={class:"col-lg-6 col-md-12"},h={class:"col-lg-3 col-md-12"},d=(0,r._)("h1",null," Конфигуратор алгоритма ",-1),p=(0,r._)("div",{class:"separator"},null,-1),f=(0,r._)("div",{class:"spacer"},null,-1),b=(0,r._)("div",{class:"separator"},null,-1),L=(0,r._)("p",null," Питательность точки еды ",-1),y=(0,r._)("div",{class:"spacer"},null,-1),v=(0,r._)("div",{class:"separator"},null,-1),E=(0,r._)("div",{class:"spacer"},null,-1),m=(0,r._)("div",{class:"spacer"},null,-1);function C(t,e,i,C,_,P){const g=(0,r.up)("AntDescription"),O=(0,r.up)("Card"),S=(0,r.up)("Error"),w=(0,r.up)("Labyrinth"),R=(0,r.up)("vue-slider");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,[(0,r._)("div",a,[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g)])),_:1}),(0,r.Wm)(S,{id:"error",class:(0,n.C_)({"error-displaying":t.isErrorDisplaying})},{default:(0,r.w5)((()=>[l,u])),_:1},8,["class"])]),(0,r._)("div",c,[(0,r.Wm)(O,{class:"cardCenter labyrinthCard",id:"labyrinthCard"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{labyrinthSizing:t.labyrinthSizing,ref:"labyrinth"},null,8,["labyrinthSizing"])])),_:1})]),(0,r._)("div",h,[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[d,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"generateButton"}," Сгенерировать поле ",2),p,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-action activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"colonyCenterPickingButton"}," Установить центр колонии ",2),f,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-inverse activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"borderPickingButton"}," Редактировать границы ",2),b,L,(0,r.Wm)(R,{modelValue:t.foodNutritionalValue,"onUpdate:modelValue":e[0]||(e[0]=e=>t.foodNutritionalValue=e),disabled:!t.isConfigEditable,dotSize:20,max:10,min:1,silent:!0},null,8,["modelValue","disabled"]),y,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-caution activeButton":!0===t.isConfigEditable,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"foodPickingButton"}," Редактировать точки еды ",2),v,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-highlight activeButton":!0===t.isConfigEditable&&t.isAbleToStart,"button-flat nonActiveButton":!1===t.isConfigEditable}]),id:"startButton"}," Запустить ",2),E,(0,r._)("button",{class:(0,n.C_)(["button button-border button-rounded",{"button-royal activeButton":!1===t.isConfigEditable,"button-flat nonActiveButton":!0===t.isConfigEditable}]),id:"stopButton"}," Остановить ",2),m,(0,r._)("button",{class:(0,n.C_)(["button button-flat button-border button-rounded",{activeButton:!0===t.isConfigEditable,nonActiveButton:!1===t.isConfigEditable}]),id:"clearButton"}," Очистить ",2)])),_:1})])])])}var _=i(2482),P=i(6520),g=i(6948),O=i(9434);const S=(0,r._)("h1",null," Муравьиный алгоритм ",-1),w=(0,r._)("h3",null," Бонусная реализация ",-1),R=(0,r._)("p",null," Алгоритм для оптимизации муравьиной колонии ",-1);function B(t,e,i,n,o,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[S,w,R],64)}var Z=function(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let A=class extends P.w3{};A=Z([(0,P.Ei)({components:{}})],A);var I=A,T=i(89);const N=(0,T.Z)(I,[["render",B]]);var D,k=N,x=i(4258),F=i(5602);(function(t){t[t["CENTER_PICKING"]=0]="CENTER_PICKING",t[t["FOOD_PICKING"]=1]="FOOD_PICKING",t[t["BORDERS_PICKING"]=2]="BORDERS_PICKING",t[t["DATA_SUBMITTING"]=3]="DATA_SUBMITTING",t[t["LABYRINTH_CLEANING"]=4]="LABYRINTH_CLEANING",t[t["LABYRINTH_GENERATING"]=5]="LABYRINTH_GENERATING",t[t["LABYRINTH_STOP_DISPLAYING"]=6]="LABYRINTH_STOP_DISPLAYING"})(D||(D={}));var M=D,H=i(158),G=i(8303),V=i.n(G),W=i(8102);class Y extends W.Z{constructor(t,e,i=null,r=1){super(t,e),(0,_.Z)(this,"point",void 0),(0,_.Z)(this,"type",void 0),(0,_.Z)(this,"nutritionalValue",void 0),(0,_.Z)(this,"numberOfPheromones",void 0),this.point=t,this.type=e,this.nutritionalValue=i,this.numberOfPheromones=r}}var z=Y,j=i(4265),K=i(7921);class U{static getInstance(){return U.instance||(U.instance=new U),U.instance}generateLabyrinth(t){const e=[];for(let i=0;i<t;i++){e[i]=[];for(let r=0;r<t;r++)e[i][r]=new z(new K.Z(r,i),10,j.Z.EMPTY_CELL,0)}for(let i=0;i<20;i++){let i=Math.random();if(i<.7){let r=Math.floor(15*Math.random()),n=Math.floor(15*Math.random());e[n][r].type=j.Z.BORDER_CELL;for(let o=0;o<25;o++)i=Math.random(),i<.8&&(i=Math.random(),n+1<t&&i<.2?(n+=1,e[n][r].type=j.Z.BORDER_CELL):n-1>=0&&i<.2?(n-=1,e[n][r].type=j.Z.BORDER_CELL):r+1<t&&i<.25?(r+=1,e[n][r].type=j.Z.BORDER_CELL):r-1>=0&&i<.25&&(r-=1,e[n][r].type=j.Z.BORDER_CELL))}}return e}}(0,_.Z)(U,"instance",void 0);var q=U;class X{}var $=X,J=(i(1703),function(t,e){return J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},J(t,e)});function Q(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}J(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}Object.create;function tt(t){var e="function"===typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function et(t,e){var i="function"===typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,n,o=i.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=o["return"])&&i.call(o)}finally{if(n)throw n.error}}return s}function it(t,e,i){if(i||2===arguments.length)for(var r,n=0,o=e.length;n<o;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}Object.create;function rt(t){return"function"===typeof t}function nt(t){var e=function(t){Error.call(t),t.stack=(new Error).stack},i=t(e);return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var ot=nt((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function st(t,e){if(t){var i=t.indexOf(e);0<=i&&t.splice(i,1)}}var at=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var t,e,i,r,n;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var s=tt(o),a=s.next();!a.done;a=s.next()){var l=a.value;l.remove(this)}}catch(f){t={error:f}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}else o.remove(this);var u=this.initialTeardown;if(rt(u))try{u()}catch(b){n=b instanceof ot?b.errors:[b]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var h=tt(c),d=h.next();!d.done;d=h.next()){var p=d.value;try{ct(p)}catch(L){n=null!==n&&void 0!==n?n:[],L instanceof ot?n=it(it([],et(n)),et(L.errors)):n.push(L)}}}catch(y){i={error:y}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}}if(n)throw new ot(n)}},t.prototype.add=function(e){var i;if(e&&e!==this)if(this.closed)ct(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(i=this._finalizers)&&void 0!==i?i:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&st(e,t)},t.prototype.remove=function(e){var i=this._finalizers;i&&st(i,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),lt=at.EMPTY;function ut(t){return t instanceof at||t&&"closed"in t&&rt(t.remove)&&rt(t.add)&&rt(t.unsubscribe)}function ct(t){rt(t)?t():t.unsubscribe()}var ht={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},dt={setTimeout:function(t,e){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];var n=dt.delegate;return(null===n||void 0===n?void 0:n.setTimeout)?n.setTimeout.apply(n,it([t,e],et(i))):setTimeout.apply(void 0,it([t,e],et(i)))},clearTimeout:function(t){var e=dt.delegate;return((null===e||void 0===e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function pt(t){dt.setTimeout((function(){var e=ht.onUnhandledError;if(!e)throw t;e(t)}))}function ft(){}var bt=function(){return vt("C",void 0,void 0)}();function Lt(t){return vt("E",void 0,t)}function yt(t){return vt("N",t,void 0)}function vt(t,e,i){return{kind:t,value:e,error:i}}var Et=null;function mt(t){if(ht.useDeprecatedSynchronousErrorHandling){var e=!Et;if(e&&(Et={errorThrown:!1,error:null}),t(),e){var i=Et,r=i.errorThrown,n=i.error;if(Et=null,r)throw n}}else t()}function Ct(t){ht.useDeprecatedSynchronousErrorHandling&&Et&&(Et.errorThrown=!0,Et.error=t)}var _t=function(t){function e(e){var i=t.call(this)||this;return i.isStopped=!1,e?(i.destination=e,ut(e)&&e.add(i)):i.destination=Zt,i}return Q(e,t),e.create=function(t,e,i){return new St(t,e,i)},e.prototype.next=function(t){this.isStopped?Bt(yt(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?Bt(Lt(t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?Bt(bt,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(at),Pt=Function.prototype.bind;function gt(t,e){return Pt.call(t,e)}var Ot=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(i){wt(i)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(i){wt(i)}else wt(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){wt(e)}},t}(),St=function(t){function e(e,i,r){var n,o,s=t.call(this)||this;rt(e)||!e?n={next:null!==e&&void 0!==e?e:void 0,error:null!==i&&void 0!==i?i:void 0,complete:null!==r&&void 0!==r?r:void 0}:s&&ht.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=function(){return s.unsubscribe()},n={next:e.next&&gt(e.next,o),error:e.error&&gt(e.error,o),complete:e.complete&&gt(e.complete,o)}):n=e;return s.destination=new Ot(n),s}return Q(e,t),e}(_t);function wt(t){ht.useDeprecatedSynchronousErrorHandling?Ct(t):pt(t)}function Rt(t){throw t}function Bt(t,e){var i=ht.onStoppedNotification;i&&dt.setTimeout((function(){return i(t,e)}))}var Zt={closed:!0,next:ft,error:Rt,complete:ft},At=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}();function It(t){return t}function Tt(t){return 0===t.length?It:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var Nt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var i=new t;return i.source=this,i.operator=e,i},t.prototype.subscribe=function(t,e,i){var r=this,n=xt(t)?t:new St(t,e,i);return mt((function(){var t=r,e=t.operator,i=t.source;n.add(e?e.call(n,i):i?r._subscribe(n):r._trySubscribe(n))})),n},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var i=this;return e=Dt(e),new e((function(e,r){var n=new St({next:function(e){try{t(e)}catch(i){r(i),n.unsubscribe()}},error:r,complete:e});i.subscribe(n)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[At]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Tt(t)(this)},t.prototype.toPromise=function(t){var e=this;return t=Dt(t),new t((function(t,i){var r;e.subscribe((function(t){return r=t}),(function(t){return i(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function Dt(t){var e;return null!==(e=null!==t&&void 0!==t?t:ht.Promise)&&void 0!==e?e:Promise}function kt(t){return t&&rt(t.next)&&rt(t.error)&&rt(t.complete)}function xt(t){return t&&t instanceof _t||kt(t)&&ut(t)}var Ft=nt((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Mt=function(t){function e(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return Q(e,t),e.prototype.lift=function(t){var e=new Ht(this,this);return e.operator=t,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new Ft},e.prototype.next=function(t){var e=this;mt((function(){var i,r;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var n=tt(e.currentObservers),o=n.next();!o.done;o=n.next()){var s=o.value;s.next(t)}}catch(a){i={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}}}))},e.prototype.error=function(t){var e=this;mt((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;var i=e.observers;while(i.length)i.shift().error(t)}}))},e.prototype.complete=function(){var t=this;mt((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;var e=t.observers;while(e.length)e.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var e=this,i=this,r=i.hasError,n=i.isStopped,o=i.observers;return r||n?lt:(this.currentObservers=null,o.push(t),new at((function(){e.currentObservers=null,st(o,t)})))},e.prototype._checkFinalizedStatuses=function(t){var e=this,i=e.hasError,r=e.thrownError,n=e.isStopped;i?t.error(r):n&&t.complete()},e.prototype.asObservable=function(){var t=new Nt;return t.source=this,t},e.create=function(t,e){return new Ht(t,e)},e}(Nt),Ht=function(t){function e(e,i){var r=t.call(this)||this;return r.destination=e,r.source=i,r}return Q(e,t),e.prototype.next=function(t){var e,i;null===(i=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===i||i.call(e,t)},e.prototype.error=function(t){var e,i;null===(i=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===i||i.call(e,t)},e.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},e.prototype._subscribe=function(t){var e,i;return null!==(i=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==i?i:lt},e}(Mt),Gt=function(t){function e(e){var i=t.call(this)||this;return i._value=e,i}return Q(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(e){var i=t.prototype._subscribe.call(this,e);return!i.closed&&e.next(this._value),i},e.prototype.getValue=function(){var t=this,e=t.hasError,i=t.thrownError,r=t._value;if(e)throw i;return this._throwIfClosed(),r},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(Mt);class Vt{constructor(t){(0,_.Z)(this,"way",[]),(0,_.Z)(this,"previousPosition",new z(new K.Z(-1,-1),j.Z.EMPTY_CELL,0,0)),(0,_.Z)(this,"currentPosition",void 0),(0,_.Z)(this,"nutritionalValue",0),this.currentPosition=t}findPossibleWays(t,e){const i=[];return this.currentPosition.point.x+1<e&&this.way.every((e=>e!=t[this.currentPosition.point.y][this.currentPosition.point.x+1]))&&t[this.currentPosition.point.y][this.currentPosition.point.x+1].type!=j.Z.BORDER_CELL&&i.push(t[this.currentPosition.point.y][this.currentPosition.point.x+1]),this.currentPosition.point.x-1>=0&&this.way.every((e=>e!=t[this.currentPosition.point.y][this.currentPosition.point.x-1]))&&t[this.currentPosition.point.y][this.currentPosition.point.x-1].type!=j.Z.BORDER_CELL&&i.push(t[this.currentPosition.point.y][this.currentPosition.point.x-1]),this.currentPosition.point.y+1<e&&this.way.every((e=>e!=t[this.currentPosition.point.y+1][this.currentPosition.point.x]))&&t[this.currentPosition.point.y+1][this.currentPosition.point.x].type!=j.Z.BORDER_CELL&&i.push(t[this.currentPosition.point.y+1][this.currentPosition.point.x]),this.currentPosition.point.y-1>=0&&this.way.every((e=>e!=t[this.currentPosition.point.y-1][this.currentPosition.point.x]))&&t[this.currentPosition.point.y-1][this.currentPosition.point.x].type!=j.Z.BORDER_CELL&&i.push(t[this.currentPosition.point.y-1][this.currentPosition.point.x]),i}chooseDirection(t,e){switch(e.length){case 1:return this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[0],this.currentPosition.type!=j.Z.FOOD_CELL;case 2:{const t=Math.pow(e[0].numberOfPheromones,1)/(Math.pow(e[0].numberOfPheromones,1)+Math.pow(e[1].numberOfPheromones,1)),i=Math.random();if(i<t){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[0],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[1],this.currentPosition.type==j.Z.FOOD_CELL)return!1;return!0}case 3:{const t=Math.pow(e[0].numberOfPheromones,2)/(Math.pow(e[0].numberOfPheromones,2)+Math.pow(e[1].numberOfPheromones,2)+Math.pow(e[2].numberOfPheromones,2)),i=t+Math.pow(e[1].numberOfPheromones,2)/(Math.pow(e[0].numberOfPheromones,2)+Math.pow(e[1].numberOfPheromones,2)+Math.pow(e[2].numberOfPheromones,2)),r=Math.random();if(r<t){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[0],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(r<i){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[1],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[2],this.currentPosition.type==j.Z.FOOD_CELL)return!1;return!0}case 4:{const t=Math.pow(e[0].numberOfPheromones,2)/(Math.pow(e[0].numberOfPheromones,2)+Math.pow(e[1].numberOfPheromones,2)+Math.pow(e[2].numberOfPheromones,2)+Math.pow(e[3].numberOfPheromones,2)),i=t+Math.pow(e[1].numberOfPheromones,2)/(Math.pow(e[0].numberOfPheromones,2)+Math.pow(e[1].numberOfPheromones,2)+Math.pow(e[2].numberOfPheromones,2)+Math.pow(e[3].numberOfPheromones,2)),r=t+i+Math.pow(e[2].numberOfPheromones,2)/(Math.pow(e[0].numberOfPheromones,2)+Math.pow(e[1].numberOfPheromones,2)+Math.pow(e[2].numberOfPheromones,2)+Math.pow(e[3].numberOfPheromones,2)),n=Math.random();if(n<t){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[0],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(n<i){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[1],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(n<r){if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[2],this.currentPosition.type==j.Z.FOOD_CELL)return!1}else if(this.previousPosition=this.currentPosition,this.way.push(this.currentPosition),this.currentPosition=e[3],this.currentPosition.type==j.Z.FOOD_CELL)return!1;return!0}}return!1}}var Wt=Vt;class Yt extends ${constructor(...t){super(...t),(0,_.Z)(this,"bestWayNutritionalValue",.1),(0,_.Z)(this,"currentWay",[]),(0,_.Z)(this,"bestWay",[]),(0,_.Z)(this,"labyrinth",[]),(0,_.Z)(this,"bestWayLength",Number.MAX_VALUE),(0,_.Z)(this,"mapState",new Gt([])),(0,_.Z)(this,"iterationCounter",new Gt(0)),(0,_.Z)(this,"mapBestState",new Gt([])),(0,_.Z)(this,"isWorking",!0),(0,_.Z)(this,"intervalExecutorNumber",void 0)}static getInstance(){return Yt.instance||(Yt.instance=new Yt),Yt.instance}set setIsWorking(t){this.isWorking=t,this.isWorking||clearInterval()}clearPreviousResult(){this.currentWay=[],this.bestWay=[],this.bestWayLength=Number.MAX_VALUE,this.mapState.next([]),this.mapBestState.next([]),this.iterationCounter.next(0)}provideDataForCalculation(t,e){this.labyrinth=t;const i=2e3;let r=[];const n=[];let o=new z(new K.Z(-1,-1),j.Z.EMPTY_CELL,0,0);for(let s=0;s<e;s++)for(let t=0;t<e;t++)this.labyrinth[s][t].type==j.Z.CENTER_CELL&&(o=this.labyrinth[s][t]);for(let s=0;s<i;s++)n[s]=new Wt(o);this.intervalExecutorNumber=setInterval((()=>{if(this.isWorking){for(let t=0;t<n.length;t++)for(;;){if(r=n[t].findPossibleWays(this.labyrinth,e),!n[t].chooseDirection(this.labyrinth,r)){n[t].currentPosition.type==j.Z.FOOD_CELL?n[t].currentPosition.nutritionalValue&&(n[t].nutritionalValue=n[t].currentPosition.nutritionalValue):n[t].nutritionalValue=0;break}r=[]}for(let t=0;t<e;t++)for(let i=0;i<e;i++)this.labyrinth[t][i].numberOfPheromones=.95*this.labyrinth[t][i].numberOfPheromones;for(let t=0;t<n.length;t++)if(n[t].nutritionalValue>0){n[t].way.length*(1/n[t].nutritionalValue)<this.bestWayLength*(1/this.bestWayNutritionalValue)&&(this.bestWayNutritionalValue=n[t].nutritionalValue,this.bestWayLength=n[t].way.length,this.bestWay=n[t].way),this.currentWay=n[t].way,this.currentWay.splice(0,1);for(let e=0;e<n[t].way.length;e++)this.labyrinth[n[t].way[e].point.y][n[t].way[e].point.x].numberOfPheromones+=Math.pow(n[t].nutritionalValue,4)/Math.pow(n[t].way.length,4)}this.mapState.next(this.currentWay),this.mapBestState.next(this.bestWay),this.iterationCounter.next(this.iterationCounter.value+1);for(let t=0;t<n.length;t++)n[t].nutritionalValue=0,n[t].way=[],n[t].currentPosition=o}else clearInterval(this.intervalExecutorNumber),this.clearPreviousResult()}),150)}}(0,_.Z)(Yt,"instance",void 0);var zt=Yt,jt=function(t,e,i,r){var n,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let Kt=class extends P.w3{constructor(...t){super(...t),(0,_.Z)(this,"meta",(0,P.cY)((()=>(0,g.jq)({title:"🐜",htmlAttrs:{lang:"ru",amp:!0}})))),(0,_.Z)(this,"isErrorDisplaying",!1),(0,_.Z)(this,"isConfigEditable",!0),(0,_.Z)(this,"isAbleToStart",!1),(0,_.Z)(this,"labyrinthSizing",15),(0,_.Z)(this,"foodNutritionalValueField",5),(0,_.Z)(this,"labyrinth",null),(0,_.Z)(this,"resultFieldSubscription",null),(0,_.Z)(this,"bestResultFieldSubscription",null)}generateLabyrinth(){this.labyrinth?.displayBorderCells(q.getInstance().generateLabyrinth(this.labyrinthSizing))}get foodNutritionalValue(){return this.foodNutritionalValueField}set foodNutritionalValue(t){this.foodNutritionalValueField=t,this.labyrinth&&(this.labyrinth.foodNutritionalValue=this.foodNutritionalValueField)}changeLabyrinthDisplayState(t){if(this.isConfigEditable){switch(t){case M.FOOD_PICKING:case M.CENTER_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.removeBorderListener(),this.labyrinth?.removeFinishListener()}switch(t){case M.CENTER_PICKING:this.labyrinth?.makeCellsSelectableForStart();break;case M.FOOD_PICKING:this.labyrinth?.makeCellsSelectableForFood();break;case M.BORDERS_PICKING:this.labyrinth?.clearPreviousResult(),this.labyrinth?.makeCellsSelectableForBorders();break;case M.DATA_SUBMITTING:this.labyrinth?.clearCells(),this.submitCellsToAlgorithm();break;case M.LABYRINTH_GENERATING:this.generateLabyrinth();break;case M.LABYRINTH_CLEANING:this.labyrinth?.resetCellsClasses();break}}else t==M.LABYRINTH_STOP_DISPLAYING&&(this.isConfigEditable=!0,zt.getInstance().isWorking=!1,this.removeSubscription());this.isAbleToStart=this.isStartAndFinishAvailable()}async submitCellsToAlgorithm(){let t=new Array(this.labyrinthSizing);for(let r=0;r<this.labyrinthSizing;r++)t[r]=new Array(this.labyrinthSizing);let e=null,i=[];this.labyrinth&&(Array.from(this.labyrinth.cells).forEach((r=>{let n=this.labyrinth?.getCellCoordinates(r);if(r.classList.contains(H.Z.START_CELL)&&n)return t[n.y][n.x]=new z(n,j.Z.CENTER_CELL),void(e=n);if(r.classList.contains(H.Z.FINISH_CELL)&&n){let e=r,o=0;return e.dataset.nutritionalvalue&&(o=Number(e.dataset.nutritionalvalue)),t[n.y][n.x]=new z(n,j.Z.FOOD_CELL,o),void i.push(n)}r.classList.contains(H.Z.BORDER_CELL)&&n?t[n.y][n.x]=new z(n,j.Z.BORDER_CELL):n&&(t[n.y][n.x]=new z(n,j.Z.EMPTY_CELL))})),e&&i.length>0?(this.isErrorDisplaying=!1,this.isConfigEditable=!1,new Promise((()=>{setTimeout((()=>{zt.getInstance().provideDataForCalculation(t,this.labyrinthSizing)}),1e3)})),zt.getInstance().isWorking=!0,await this.addSubscription()):this.isErrorDisplaying=!0)}isStartAndFinishAvailable(){let t=!1,e=!1;return this.labyrinth&&Array.from(this.labyrinth.cells).forEach((i=>{i.classList.contains(H.Z.START_CELL)&&(t=!0),i.classList.contains(H.Z.FINISH_CELL)&&(e=!0)})),t&&e}addSubscription(){this.resultFieldSubscription=zt.getInstance().mapState.subscribe((t=>{this.labyrinth?.clearCells(),t.forEach((t=>{let e=document.getElementById(H.Z.CELL+"-"+t.point.x+"x"+t.point.y);e?.classList.add(H.Z.WRONG_PATH_CELL)}))})),this.bestResultFieldSubscription=zt.getInstance().mapBestState.subscribe((t=>{t.forEach((t=>{let e=document.getElementById(H.Z.CELL+"-"+t.point.x+"x"+t.point.y);e?.classList.add(H.Z.CORRECT_PATH_CELL)}))}))}removeSubscription(){this.resultFieldSubscription?.unsubscribe(),this.bestResultFieldSubscription?.unsubscribe()}initLabyrinth(){this.labyrinth=this.$refs.labyrinth,this.labyrinth&&(this.labyrinth.foodNutritionalValue=this.foodNutritionalValue)}initLabyrinthOnClick(){this.labyrinth&&this.labyrinth.$el.addEventListener("click",(()=>{this.isAbleToStart=this.isStartAndFinishAvailable()}))}initColonyCenterPickingButtonOnclickListener(){let t=document.getElementById("colonyCenterPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.CENTER_PICKING)}))}initFoodPickingButtonOnclickListener(){let t=document.getElementById("foodPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.FOOD_PICKING)}))}initBorderPickingButtonOnclickListener(){let t=document.getElementById("borderPickingButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.BORDERS_PICKING)}))}initStartButtonOnClickListener(){let t=document.getElementById("startButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.DATA_SUBMITTING)}))}initClearButtonOnClickListener(){let t=document.getElementById("clearButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.LABYRINTH_CLEANING)}))}initGenerateButtonOnClickListener(){let t=document.getElementById("generateButton");t?.addEventListener("click",(()=>{this.changeLabyrinthDisplayState(M.LABYRINTH_GENERATING)}))}initStopButtonOnClickListener(){let t=document.getElementById("stopButton");t?.addEventListener("click",(()=>{this.isConfigEditable||this.changeLabyrinthDisplayState(M.LABYRINTH_STOP_DISPLAYING)}))}mounted(){this.initLabyrinth(),this.initLabyrinthOnClick(),this.initGenerateButtonOnClickListener(),this.initColonyCenterPickingButtonOnclickListener(),this.initFoodPickingButtonOnclickListener(),this.initBorderPickingButtonOnclickListener(),this.initStartButtonOnClickListener(),this.initStopButtonOnClickListener(),this.initClearButtonOnClickListener()}};Kt=jt([(0,P.Ei)({components:{Labyrinth:F.Z,Error:x.Z,AntDescription:k,Card:O.Z,VueSlider:V()}})],Kt);var Ut=Kt;const qt=(0,T.Z)(Ut,[["render",C]]);var Xt=qt}}]);
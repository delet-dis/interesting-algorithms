(self["webpackChunkinteresting_algorithms"]=self["webpackChunkinteresting_algorithms"]||[]).push([[280],{44914:function(e,t,n){var i=n(82109),r=Math.log,s=Math.LN2;i({target:"Math",stat:!0},{log2:function(e){return r(e)/s}})},56977:function(e,t,n){"use strict";var i=n(82109),r=n(17854),s=n(1702),a=n(19303),o=n(50863),l=n(38415),u=n(47293),c=r.RangeError,d=r.String,_=Math.floor,p=s(l),h=s("".slice),f=s(1..toFixed),v=function(e,t,n){return 0===t?n:t%2===1?v(e,t-1,n*e):v(e*e,t/2,n)},g=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},m=function(e,t,n){var i=-1,r=n;while(++i<6)r+=t*e[i],e[i]=r%1e7,r=_(r/1e7)},y=function(e,t){var n=6,i=0;while(--n>=0)i+=e[n],e[n]=_(i/t),i=i%t*1e7},E=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var i=d(e[t]);n=""===n?i:n+p("0",7-i.length)+i}return n},b=u((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!u((function(){f({})}));i({target:"Number",proto:!0,forced:b},{toFixed:function(e){var t,n,i,r,s=o(this),l=a(e),u=[0,0,0,0,0,0],_="",f="0";if(l<0||l>20)throw c("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return d(s);if(s<0&&(_="-",s=-s),s>1e-21)if(t=g(s*v(2,69,1))-69,n=t<0?s*v(2,-t,1):s/v(2,t,1),n*=4503599627370496,t=52-t,t>0){m(u,0,n),i=l;while(i>=7)m(u,1e7,0),i-=7;m(u,v(10,i,1),0),i=t-1;while(i>=23)y(u,1<<23),i-=23;y(u,1<<i),m(u,1,1),y(u,2),f=E(u)}else m(u,0,n),m(u,1<<-t,0),f=E(u)+p("0",l);return l>0?(r=f.length,f=_+(r<=l?"0."+p("0",l-r)+f:h(f,0,r-l)+"."+h(f,r-l))):f=_+f,f}})},33923:function(e,t,n){"use strict";var i=n(62833),r=n(13087),s=n(82482),a=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),(0,s.Z)(this,"data",void 0),(0,s.Z)(this,"nestedNodes",void 0),this.data=t,this.nestedNodes=n}));t["Z"]=a},27497:function(e,t,n){"use strict";var i=n(62833),r=n(13087),s=n(82482),a=(0,i.Z)((function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,r.Z)(this,e),(0,s.Z)(this,"type",void 0),(0,s.Z)(this,"responsibleParameter",void 0),(0,s.Z)(this,"condition",void 0),(0,s.Z)(this,"result",void 0),this.type=t,this.responsibleParameter=n,this.condition=i,this.result=a}));t["Z"]=a},92169:function(e,t){"use strict";var n;(function(e){e[e["LEAF_NODE"]=0]="LEAF_NODE",e[e["BRANCH_NODE"]=1]="BRANCH_NODE",e[e["PATH_NODE"]=2]="PATH_NODE"})(n||(n={})),t["Z"]=n},39181:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66347),_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13087),_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(62833),_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(82482),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9653),core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__),_data_models_tree_NodeData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(27497),_data_models_tree_NodeType__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(92169),_csv_CSVParserRepository__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49092),_data_models_tree_DisplayingNode__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(33923),TreeExpressionExecutorRepository=function(){function TreeExpressionExecutorRepository(){(0,_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.Z)(this,TreeExpressionExecutorRepository),(0,_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.Z)(this,"emptyData",new _data_models_tree_NodeData__WEBPACK_IMPORTED_MODULE_3__.Z(0))}return(0,_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__.Z)(TreeExpressionExecutorRepository,[{key:"checkCondition",value:function checkCondition(value,condition){return condition.charCodeAt(0)>=60&&condition.charCodeAt(0)<=62?isNaN(Number(value))?null:eval(value+condition):value==condition}},{key:"copyTree",value:function(e,t){if(e.data=new _data_models_tree_NodeData__WEBPACK_IMPORTED_MODULE_3__.Z(t.data.type,t.data.responsibleParameter,t.data.condition,t.data.result),t.nestedNodes){e.nestedNodes=[];for(var n=0;n<t.nestedNodes.length;n++)e.nestedNodes.push(new _data_models_tree_DisplayingNode__WEBPACK_IMPORTED_MODULE_6__.Z(this.emptyData,null)),this.copyTree(e.nestedNodes[n],t.nestedNodes[n])}else t.nestedNodes=null}},{key:"executeExpressionInTree",value:function(e,t){var n=_csv_CSVParserRepository__WEBPACK_IMPORTED_MODULE_5__.Z.getInstance().parseInputData(e);if(!n)return null;var i=new _data_models_tree_DisplayingNode__WEBPACK_IMPORTED_MODULE_6__.Z(this.emptyData,null);this.copyTree(i,t);var r=i;while(r.data.type!=_data_models_tree_NodeType__WEBPACK_IMPORTED_MODULE_4__.Z.LEAF_NODE){r.data.type=_data_models_tree_NodeType__WEBPACK_IMPORTED_MODULE_4__.Z.PATH_NODE;var s,a=(0,_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.Z)(r.nestedNodes);try{for(a.s();!(s=a.n()).done;){var o=s.value;if(o.data.responsibleParameter>n[0].length)return null;var l=this.checkCondition(n[0][o.data.responsibleParameter-1],o.data.condition);if(l){r=o;break}if(null==l)return null}}catch(u){a.e(u)}finally{a.f()}}return r.data.type=_data_models_tree_NodeType__WEBPACK_IMPORTED_MODULE_4__.Z.PATH_NODE,i}}],[{key:"getInstance",value:function(){return TreeExpressionExecutorRepository.instance||(TreeExpressionExecutorRepository.instance=new TreeExpressionExecutorRepository),TreeExpressionExecutorRepository.instance}}]),TreeExpressionExecutorRepository}();(0,_Users_delet_dis_projects_Frontend_interesting_algorithms_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.Z)(TreeExpressionExecutorRepository,"instance",void 0),__webpack_exports__["Z"]=TreeExpressionExecutorRepository},49092:function(e,t,n){"use strict";var i=n(66347),r=n(13087),s=n(62833),a=n(82482),o=(n(9653),n(73210),n(43290),function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,[{key:"numberCheck",value:function(e){return!isNaN(Number(e))}},{key:"parseInputData",value:function(e){var t=0,n=0,r=0;e=e.trim();var s,a=[],o=1,l="",u=(0,i.Z)(e);try{for(u.s();!(s=u.n()).done;){var c=s.value;if(","!=c){if("\n"==c){a.push(this.numberCheck(l));break}l+=c}else o++,a.push(this.numberCheck(l)),l=""}}catch(f){u.e(f)}finally{u.f()}o!=a.length&&a.push(this.numberCheck(l)),l="";var d=[];d.push(Array(o).fill(""));var _,p=(0,i.Z)(e);try{for(p.s();!(_=p.n()).done;){var h=_.value;if(","!=h)if("\n"!=h){if(n>=o)return null;d[t][n]+=h,r++}else{if(n!=o-1||!r||this.numberCheck(d[t][n])!=a[n])return null;d.push(Array(o).fill("")),t++,n=0}else{if(!r||this.numberCheck(d[t][n])!=a[n])return null;n++,r=0}}}catch(f){p.e(f)}finally{p.f()}if("\n"==e[e.length-1])d.pop();else if(n!=o-1||!r||this.numberCheck(d[t][n])!=a[n])return null;return d}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}());(0,a.Z)(o,"instance",void 0),t["Z"]=o},86774:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(73396),r={class:"card"};function s(e,t,n,s,a,o){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var a=n(62833),o=n(13087),l=n(93806),u=n(25744),c=n(3336),d=(n(38880),n(41539),n(81299),n(66520)),_=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},p=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n)}(d.w3);p=_([(0,d.Ei)({components:{}})],p);var h=p,f=n(40089);const v=(0,f.Z)(h,[["render",s],["__scopeId","data-v-0e3cb610"]]);var g=v},82959:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(73396);function r(e,t,n,r,s,a){var o=(0,i.up)("Card");return(0,i.wg)(),(0,i.j4)(o,{class:"error"},{default:(0,i.w5)((function(){return[(0,i.WI)(e.$slots,"default",{},void 0,!0)]})),_:3})}var s=n(62833),a=n(13087),o=n(93806),l=n(25744),u=n(3336),c=(n(38880),n(41539),n(81299),n(66520)),d=n(86774),_=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},p=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n)}(c.w3);p=_([(0,c.Ei)({components:{Card:d.Z}})],p);var h=p,f=n(40089);const v=(0,f.Z)(h,[["render",r],["__scopeId","data-v-0b922abf"]]);var g=v},43678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var i=n(73396),r=n(87139),s=function(e){return(0,i.dD)("data-v-15123ada"),e=e(),(0,i.Cn)(),e},a={class:"container"},o={class:"row"},l={class:"col-lg-3 col-md-12"},u=s((function(){return(0,i._)("h1",null," Чего-то не хватает ",-1)})),c=s((function(){return(0,i._)("p",null," Стоит проверить входные данные ",-1)})),d={class:"col-lg-6 col-md-12"},_={class:"col-lg-3 col-md-12"},p=s((function(){return(0,i._)("h1",null," Конфигуратор алгоритма ",-1)})),h=s((function(){return(0,i._)("button",{class:"button button-border button-rounded button-action activeButton",id:"loadData"}," Загрузить выборку ",-1)})),f=s((function(){return(0,i._)("div",{class:"separator"},null,-1)})),v=s((function(){return(0,i._)("div",{class:"separator"},null,-1)}));function g(e,t,n,s,g,m){var y=(0,i.up)("TreeDescription"),E=(0,i.up)("Card"),b=(0,i.up)("Error"),D=(0,i.up)("Tree"),T=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",o,[(0,i._)("div",l,[(0,i.Wm)(E,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(y)]})),_:1}),(0,i.Wm)(b,{id:"error",class:(0,r.C_)({"error-displaying":e.isErrorDisplaying})},{default:(0,i.w5)((function(){return[u,c]})),_:1},8,["class"])]),(0,i._)("div",d,[(0,i.Wm)(E,{class:(0,r.C_)(["treeCard",{invisibleCard:!e.displayingTreeAsArray}]),id:"treeCard"},{default:(0,i.w5)((function(){return[(0,i.Wm)(D,{ref:"tree"},null,512)]})),_:1},8,["class"])]),(0,i._)("div",_,[(0,i.Wm)(E,null,{default:(0,i.w5)((function(){return[p,h,f,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-primary button-glow activeButton":e.displayingTreeAsArray,"button-flat nonActiveButton":e.displayingTreeAsArray}]),id:"reduceTreeButton"}," Сократить дерево ",2),v,(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-royal activeButton":e.displayingTreeAsArray,"button-flat nonActiveButton":e.displayingTreeAsArray}]),id:"executeQuery"}," Исполнить запрос ",2)]})),_:1})])]),(0,i.Wm)(T,{ref:"modal"},null,512)])}var m=n(13087),y=n(62833),E=n(52417),b=n(93806),D=n(25744),T=n(82482),Z=n(3336),O=(n(38880),n(41539),n(81299),n(92222),n(66520)),k=n(86774),C=n(82959),A=(0,i._)("h1",null," Дерево решений ",-1),w=(0,i._)("h3",null," Бонусная реализация ",-1),P=(0,i._)("p",null," Алгоритм для построения дерева решений ",-1);function R(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[A,w,P],64)}var N=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,Z.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},x=function(e){(0,b.Z)(n,e);var t=(0,D.Z)(n);function n(){return(0,m.Z)(this,n),t.apply(this,arguments)}return(0,y.Z)(n)}(O.w3);x=N([(0,O.Ei)({components:{}})],x);var B=x,M=n(40089);const I=(0,M.Z)(B,[["render",R]]);var F=I,j=n(49242),L=function(e){return(0,i.dD)("data-v-4372e80e"),e=e(),(0,i.Cn)(),e},W={class:"modal-wrapper container"},U={class:"row"},K=L((function(){return(0,i._)("textarea",{class:"inputField",id:"inputField",autofocus:""},null,-1)})),S=L((function(){return(0,i._)("div",{class:"spacer"},null,-1)})),q={class:"buttonWrapper"},H=L((function(){return(0,i._)("button",{class:"button button-border button-rounded button-caution activeButton",id:"cancelButton"}," Отменить ",-1)}));function Q(e,t,n,s,a,o){var l=(0,i.up)("Card");return(0,i.wg)(),(0,i.j4)(j.uT,{name:"modal"},{default:(0,i.w5)((function(){return[(0,i._)("div",{class:(0,r.C_)(["modal-mask",{"modal-displaying":e.isDisplaying}])},[(0,i._)("div",W,[(0,i._)("div",U,[(0,i.Wm)(l,{class:"modal-content col-lg-6 col-md-12"},{default:(0,i.w5)((function(){return[(0,i._)("h3",null,(0,r.zw)(e.header),1),K,S,(0,i._)("div",q,[(0,i._)("button",{class:(0,r.C_)(["button button-border button-rounded",{"button-action activeButton":!0===e.isAvailableToSubmitData,"button-flat nonActiveButton":!1===e.isAvailableToSubmitData}]),id:"submitButton"}," Подтвердить ",2),H])]})),_:1})])])],2)]})),_:1})}var V=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,Z.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},$=function(e){(0,b.Z)(n,e);var t=(0,D.Z)(n);function n(){var e;(0,m.Z)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),(0,T.Z)((0,E.Z)(e),"header",""),(0,T.Z)((0,E.Z)(e),"isDisplaying",!1),(0,T.Z)((0,E.Z)(e),"inputFieldValue",""),(0,T.Z)((0,E.Z)(e),"isAvailableToSubmitData",!1),(0,T.Z)((0,E.Z)(e),"inputField",null),(0,T.Z)((0,E.Z)(e),"previousOnclick",null),e}return(0,y.Z)(n,[{key:"setInputFieldValue",set:function(e){this.inputFieldValue=e,this.inputField&&(this.inputField.value=this.inputFieldValue,this.isAvailableToSubmitData=this.inputField.value.length>0)}},{key:"setSubmitButtonOnClick",value:function(e){var t=this,n=document.getElementById("submitButton");this.previousOnclick&&n&&n.removeEventListener("click",this.previousOnclick);var i=function(){t.isAvailableToSubmitData&&t.inputField&&(e(t.inputField.value),t.clearEnteredData())};this.previousOnclick=i,null===n||void 0===n||n.addEventListener("click",i)}},{key:"clearEnteredData",value:function(){this.inputField&&(this.inputField.value=""),this.isAvailableToSubmitData=!1,this.isDisplaying=!1}},{key:"initInputField",value:function(){this.inputField=document.getElementById("inputField")}},{key:"initCancelButtonOnClick",value:function(){var e=this,t=document.getElementById("cancelButton");null===t||void 0===t||t.addEventListener("click",(function(){e.clearEnteredData()}))}},{key:"initInputFieldTextChangeListener",value:function(){var e,t=this;null===(e=this.inputField)||void 0===e||e.addEventListener("input",(function(){t.inputField&&(t.isAvailableToSubmitData=t.inputField.value.length>0)}))}},{key:"mounted",value:function(){this.initInputField(),this.initCancelButtonOnClick(),this.initInputFieldTextChangeListener()}}]),n}(O.w3);$=V([(0,O.Ei)({components:{Card:k.Z}})],$);var G=$;const z=(0,M.Z)(G,[["render",Q],["__scopeId","data-v-4372e80e"]]);var Y=z,J=(n(44914),n(39714),n(56977),n(33923)),X=n(27497),ee=function(){function e(t,n){(0,m.Z)(this,e),(0,T.Z)(this,"nextNodes",void 0),(0,T.Z)(this,"parameter",void 0),(0,T.Z)(this,"processingElements",void 0),(0,T.Z)(this,"depth",void 0),(0,T.Z)(this,"parameterString",void 0),this.nextNodes=[],this.processingElements=t,this.depth=n+1,this.parameter=-1,this.parameterString=""}return(0,y.Z)(e,[{key:"chooseParam",value:function(){for(var e,t=0,n=100,i=0;i<this.processingElements[0].length;i++)e=this.findEntropy(i),e<n&&0!=e&&(n=e,t=i);return t}},{key:"findEntropy",value:function(e){var t=+this.processingElements[0][e],n=0;if(isNaN(t)){for(var i=[],r=[],s=0;s<this.processingElements.length;s++){for(var a=!1,o=0;o<i.length;o++)if(this.processingElements[s][e]==i[o]){a=!0,r[o]++;break}a||(i.push(this.processingElements[s][e]),r.push(1))}for(var l=0;l<r.length;l++)n-=r[l]/this.processingElements.length*Math.log2(r[l]/this.processingElements.length)}else{for(var u=0,c=0,d=0;d<this.processingElements.length;d++)u+=+this.processingElements[d][e];u/=this.processingElements.length;for(var _=0;_<this.processingElements.length;_++)+this.processingElements[_][e]<u&&c++;n=-c/this.processingElements.length*Math.log2(c/this.processingElements.length)-(this.processingElements.length-c)/this.processingElements.length*Math.log2((this.processingElements.length-c)/this.processingElements.length)}return n}},{key:"separateGroups",value:function(){var t=this.chooseParam(),n=+this.processingElements[0][t];if(isNaN(n)){for(var i=[],r=[],s=[],a=[],o=0;o<this.processingElements.length;o++){for(var l=!1,u=0;u<i.length;u++)if(this.processingElements[o][t]==i[u]){l=!0,r[u]++;break}l||(i.push(this.processingElements[o][t]),r.push(1))}for(var c=0;c<i.length;c++){var d=0;s[c]=[];for(var _=0;_<this.processingElements.length;_++)i[c]==this.processingElements[_][t]&&(s[c][d]=this.processingElements[_],a[c]=i[c],d++)}for(var p=0;p<s.length;p++)this.nextNodes[p]=new e(s[p],this.depth),this.nextNodes[p].parameterString=a[p],this.nextNodes[p].parameter=t}else{for(var h=[],f=[],v=0,g=0;g<this.processingElements.length;g++)v+=+this.processingElements[g][t];v/=this.processingElements.length;for(var m=0;m<this.processingElements.length;m++)+this.processingElements[m][t]<v?h.push(this.processingElements[m]):f.push(this.processingElements[m]);this.nextNodes[0]=new e(h,this.depth),this.nextNodes[0].parameterString="<"+v.toFixed(2).toString(),this.nextNodes[0].parameter=t,this.nextNodes[1]=new e(f,this.depth),this.nextNodes[1].parameterString=">="+v.toFixed(2).toString(),this.nextNodes[1].parameter=t}}},{key:"createNewNodes",value:function(){if(this.processingElements.length>1){this.separateGroups();for(var e=0;e<this.nextNodes.length;e++)this.nextNodes[e].createNewNodes()}}},{key:"convert",value:function(){var e=null;if(this.nextNodes.length>0){e=[];for(var t=0;t<this.nextNodes.length;t++)e.push(this.nextNodes[t].convert())}var n=1,i=null;null==e&&(n=0,i=this.processingElements[0][this.processingElements[0].length-1]);var r=new X.Z(n,this.parameter+1,this.parameterString,i);return new J.Z(r,e)}}]),e}(),te=ee,ne=n(49092),ie=function(){function e(){(0,m.Z)(this,e)}return(0,y.Z)(e,[{key:"createTree",value:function(e){var t=ne.Z.getInstance().parseInputData(e);if(null!=t){var n=new te(t,0);n.createNewNodes();var i=n.convert();return i}return null}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();(0,T.Z)(ie,"instance",void 0);var re=ie,se=n(39181),ae=function(){function e(){(0,m.Z)(this,e)}return(0,y.Z)(e,[{key:"reduceTree",value:function(e){return null}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();(0,T.Z)(ae,"instance",void 0);var oe=ae,le={class:"tree",id:"tree"};function ue(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",le)}n(54747);var ce=n(92169),de=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,Z.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},_e=function(e){(0,b.Z)(n,e);var t=(0,D.Z)(n);function n(){var e;(0,m.Z)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),(0,T.Z)((0,E.Z)(e),"displayingTreeField",null),e}return(0,y.Z)(n,[{key:"displayingTree",get:function(){return this.displayingTreeField},set:function(e){this.displayingTreeField=e,this.drawDisplayingTree()}},{key:"drawDisplayingTree",value:function(){if(this.displayingTree){var e=document.createElement("ul"),t=document.createElement("li"),n=document.getElementById("tree");this.createNode(this.displayingTree,t),e.appendChild(t),n&&(n.innerHTML="",n.appendChild(e))}}},{key:"createNode",value:function(e,t){var n=this,i=document.createElement("div"),r=document.createElement("a");e.data.type==ce.Z.PATH_NODE&&r.classList.add("pathNode");var s="";if(e.data.responsibleParameter&&(s+="Параметр: "+e.data.responsibleParameter+"\n\n"),e.data.condition&&(s+="Условие:\n"+e.data.condition+"\n"),e.data.result&&(s+="Результат:\n"+e.data.result+"\n"),""==s&&(s="Корень"),r.innerText=s,i.appendChild(r),e.nestedNodes){var a=document.createElement("ul");e.nestedNodes.forEach((function(e){var t=document.createElement("li");n.createNode(e,t),a.appendChild(t)})),i.appendChild(a)}t.appendChild(i)}}]),n}(O.w3);_e=de([(0,O.Ei)({components:{}})],_e);var pe=_e;const he=(0,M.Z)(pe,[["render",ue]]);var fe=he,ve=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,Z.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},ge=function(e){(0,b.Z)(n,e);var t=(0,D.Z)(n);function n(){var e;(0,m.Z)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),(0,T.Z)((0,E.Z)(e),"isErrorDisplaying",!1),(0,T.Z)((0,E.Z)(e),"modal",null),(0,T.Z)((0,E.Z)(e),"displayingTreeAsArray",null),(0,T.Z)((0,E.Z)(e),"displayingTree",null),(0,T.Z)((0,E.Z)(e),"testBuildData","2,Alex,8\n21,Alex,9\n2,Alex,10\n2,Tom,11\n2,Tom,12\n2,Tom,14"),e}return(0,y.Z)(n,[{key:"showModalForDataLoading",value:function(){var e=this;this.modal&&(this.modal.header="Ввод обучающей выборки в .csv формате",this.modal.isDisplaying=!0,this.modal.setInputFieldValue=this.testBuildData,this.modal.setSubmitButtonOnClick((function(t){t&&(e.isErrorDisplaying=!1,e.submitDataToBuildTree(t)),e.modal&&(e.modal.isDisplaying=!1)})))}},{key:"showModalForQueryExecuting",value:function(){var e=this;this.modal&&(this.modal.header="Ввод запроса в .csv формате",this.modal.isDisplaying=!0,this.modal.setInputFieldValue="",this.modal.setSubmitButtonOnClick((function(t){t&&e.submitDataToExecuteQuery(t),e.modal&&(e.modal.isDisplaying=!1)})))}},{key:"submitDataToBuildTree",value:function(e){this.displayBuildResult(re.getInstance().createTree(e))}},{key:"submitDataToExecuteQuery",value:function(e){this.displayingTreeAsArray?this.displayQueryExecutingOrReducingResult(se.Z.getInstance().executeExpressionInTree(e,this.displayingTreeAsArray)):this.isErrorDisplaying=!0}},{key:"submitDataToReduceTree",value:function(){this.displayingTreeAsArray?this.displayQueryExecutingOrReducingResult(oe.getInstance().reduceTree(this.displayingTreeAsArray)):this.isErrorDisplaying=!0}},{key:"displayBuildResult",value:function(e){e?(this.displayingTreeAsArray=e,this.displayingTree&&(this.displayingTree.displayingTree=this.displayingTreeAsArray)):this.isErrorDisplaying=!0}},{key:"displayQueryExecutingOrReducingResult",value:function(e){e&&this.displayingTree?this.displayingTree.displayingTree=e:this.isErrorDisplaying=!0}},{key:"initTree",value:function(){this.displayingTree=this.$refs.tree}},{key:"initModal",value:function(){this.modal=this.$refs.modal}},{key:"initLoadDataButtonOnClick",value:function(){var e=this,t=document.getElementById("loadData");null===t||void 0===t||t.addEventListener("click",(function(){e.showModalForDataLoading()}))}},{key:"initExecuteQueryButtonOnClick",value:function(){var e=this,t=document.getElementById("executeQuery");null===t||void 0===t||t.addEventListener("click",(function(){e.displayingTreeAsArray?(e.showModalForQueryExecuting(),e.isErrorDisplaying=!1):e.isErrorDisplaying=!0}))}},{key:"initReduceTreeButtonOnClick",value:function(){var e=this,t=document.getElementById("reduceTreeButton");null===t||void 0===t||t.addEventListener("click",(function(){e.displayingTreeAsArray?(e.submitDataToReduceTree(),e.isErrorDisplaying=!1):e.isErrorDisplaying=!0}))}},{key:"mounted",value:function(){this.initTree(),this.initModal(),this.initLoadDataButtonOnClick(),this.initExecuteQueryButtonOnClick(),this.initReduceTreeButtonOnClick()}}]),n}(O.w3);ge=ve([(0,O.Ei)({components:{Tree:fe,TreeDescription:F,Card:k.Z,Error:C.Z,Modal:Y}})],ge);var me=ge;const ye=(0,M.Z)(me,[["render",g],["__scopeId","data-v-15123ada"]]);var Ee=ye}}]);
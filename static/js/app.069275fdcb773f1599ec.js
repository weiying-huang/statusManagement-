webpackJsonp([1],{"4fKS":function(t,e){},LULH:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),r=a("BO1k"),i=a.n(r),o={name:"mainpage",data:function(){return{currentStatus:null,currentStatusName:null,updateSelectState:"",couldBeSelectState:"",couldBeSelectStateValue:"",toSelectState:"",pathToState:"",HowToState:"",changeState:""}},methods:{openNewPage:function(t){var e=this,a=this.$tools.findElement(this.$store.state.stateList,function(t){return t.id==e.updateSelectState});this.$router.push({name:t,params:{state:a}})},HowToChange:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"path";if(!this.currentStatus)return this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t}).name;var a={},n=!0,s=!1,r=void 0;try{for(var o,l=i()(this.$store&&this.$store.state.stateList);!(n=(o=l.next()).done);n=!0){var u=o.value;a[u.id]=u.changeable}}catch(t){s=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(s)throw r}}var c=new this.$tools.FindRoad(a),d=this.currentStatus,h=t,f=c.hasPath(d,h);return console.log(c.hasPath(d,h)),this.translate(e,f)},translate:function(t,e){var a=this;if(console.log(t),console.log(e),0==e.length)return!1;if("Boolean"===t)return e&&!0;if("path"===t){var n=[];return e.forEach(function(t,e){var s=a.$tools.findElement(a.$store.state.stateList,function(e){return e.id==t}).name;n.push(e?"=> "+s:s)}),console.log(n.join("")),n.join("")}}},watch:{updateSelectState:function(){this.openNewPage("update")},toSelectState:function(){var t=this;this.currentStatus?this.HowToChange(this.toSelectState,"Boolean")?(this.currentStatus=this.toSelectState,this.currentStatusName=this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t.currentStatus}).name):alert("can not transferred to <"+this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t.toSelectState}).name+">"):(this.currentStatus=this.toSelectState,this.currentStatusName=this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t.currentStatus}).name)},couldBeSelectState:function(){var t=this,e=this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t.couldBeSelectState}).name;this.currentStatus?this.HowToChange(this.couldBeSelectState,"Boolean")?this.couldBeSelectStateValue="Yes,can be transferred to <"+e+"> from <"+(this.couldBeSelectStateName||"null")+">":this.couldBeSelectStateValue="No,can not transferred to <"+e+"> from <"+(this.couldBeSelectStateName||"null")+">":this.couldBeSelectStateValue="Yes,can be transferred to <"+e+"> from <"+(this.couldBeSelectStateName||"null")+">"},HowToState:function(){var t=this;this.HowToChange(this.HowToState,"Boolean")?this.pathToState=this.HowToChange(this.HowToState,"path"):this.pathToState="Could be transferrd to <"+this.$tools.findElement(this.$store.state.stateList,function(e){return e.id==t.HowToState}).name+">"}},created:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._v("\n  Cuurrent status is < "+t._s(t.currentStatusName||"null")+" >\n  "),a("input",{attrs:{type:"button",value:"Create Status"},on:{click:function(e){return t.openNewPage("create")}}}),a("br"),t._v("\n  update status \n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.updateSelectState,expression:"updateSelectState"}],attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.updateSelectState=e.target.multiple?a:a[0]}}},[t._l(t.$store.state.stateList,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),a("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("select a status")])],2),t._v(" "),a("br"),t._v(" "),a("br"),t._v("\n  Could be transferrd to "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.couldBeSelectState,expression:"couldBeSelectState"}],attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.couldBeSelectState=e.target.multiple?a:a[0]}}},[t._l(t.$store.state.stateList,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),a("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("select a statusd")])],2),t._v("?\n  "),a("br"),t._v("\n  "+t._s(t.couldBeSelectStateValue)+"\n  "),a("br"),t._v(" "),a("br"),t._v("\n  How could be transferrd to \n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.HowToState,expression:"HowToState"}],attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.HowToState=e.target.multiple?a:a[0]}}},[t._l(t.$store.state.stateList,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),a("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("select a status")])],2),t._v(" "),a("br"),t._v("\n  "+t._s(t.pathToState)+"\n  "),a("br"),t._v(" "),a("br"),t._v("\n  Transferrd to \n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.toSelectState,expression:"toSelectState"}],attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.toSelectState=e.target.multiple?a:a[0]}}},[t._l(t.$store.state.stateList,function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}),t._v(" "),a("option",{attrs:{value:"",disabled:"",hidden:"",selected:""}},[t._v("select a status")])],2)])},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("eGcL")},"data-v-f9da0970",null).exports,c=a("pFYg"),d=a.n(c),h={name:"createPage",data:function(){return{currentStatus:"",stateName:"",changeable:[],stateList:[]}},methods:{createState:function(){var t=this;if(!this.stateName)return alert("状态名称不能为空"),!1;if(this.hasElement(this.stateList,function(e){return e.name==t.stateName})>=0)return alert("已存在此状态名称"),this.stateName="",this.changeable="",!1;var e={id:Date.parse(new Date),name:this.stateName,changeable:this.changeable};this.stateList.push(e),this.stateName=[],this.changeable=[],this.$store.commit("changeState",this.stateList),this.$router.push("/")},hasElement:function(t,e){if("object"===(void 0===t?"undefined":d()(t))){for(var a in t)if(e(t[a]))return a;return-1}return-1},commitDate:function(){}},created:function(){},activated:function(){this.stateList=this.$tools.deepClone(this.$store.state.stateList)}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("router-link",{attrs:{to:"/"}},[t._v("main page")]),t._v(" "),a("h2",[t._v("Create Status")]),t._v("\n  Status name： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stateName,expression:"stateName"}],attrs:{type:"text",name:"",id:""},domProps:{value:t.stateName},on:{input:function(e){e.target.composing||(t.stateName=e.target.value)}}}),a("br"),t._v("\n  Could be transferrd to："),a("br"),t._v(" "),a("div",{staticClass:"stateList"},t._l(t.stateList,function(e){return a("div",{key:e.id},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.changeable,expression:"changeable"}],attrs:{type:"checkbox",name:"state",id:e.id},domProps:{value:e.id,checked:Array.isArray(t.changeable)?t._i(t.changeable,e.id)>-1:t.changeable},on:{change:function(a){var n=t.changeable,s=a.target,r=!!s.checked;if(Array.isArray(n)){var i=e.id,o=t._i(n,i);s.checked?o<0&&(t.changeable=n.concat([i])):o>-1&&(t.changeable=n.slice(0,o).concat(n.slice(o+1)))}else t.changeable=r}}}),t._v(" "),a("label",{attrs:{for:"state.id"}},[t._v(t._s(e.name))])])}),0),t._v(" "),a("input",{attrs:{type:"button",value:"Create Status"},on:{click:t.createState}})],1)},staticRenderFns:[]};var v=a("VU/8")(h,f,!1,function(t){a("wKER")},"data-v-9c34906e",null).exports,m={name:"updatePage",data:function(){return{currentStatus:{},stateList:[],changeable:[]}},methods:{deleteStatus:function(){var t=this,e=this.$tools.findElement(this.stateList,function(e){return e.id==t.currentStatus.id});this.stateList.splice(e,1),this.$store.commit("changeState",this.stateList),alert("Deleted successfully"),this.$router.push("/")},updateState:function(){var t=this,e=this.$tools.hasElement(this.stateList,function(e){return e.id==t.currentStatus.id});this.currentStatus.changeable=this.changeable,this.stateList.splice(e,1,this.currentStatus),this.$store.commit("changeState",this.stateList),this.$router.push("/")}},created:function(){},activated:function(){this.currentStatus=this.$route.params.state,this.stateList=this.$tools.deepClone(this.$store.state.stateList),this.changeable=this.currentStatus.changeable}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("router-link",{attrs:{to:"/"}},[t._v("main page")]),t._v(" "),a("h2",[t._v("更新页面")]),t._v("\n  Status name : <"+t._s(t.currentStatus.name)+"> "),a("a",{staticStyle:{cursor:"pointer",color:"blue"},on:{click:t.deleteStatus}},[t._v("delete")]),t._v(" "),a("br"),t._v("\n  可选状态："),a("br"),t._v("\n  "+t._s(t.changeable)+"\n  "),a("div",{staticClass:"stateList"},t._l(t.stateList,function(e){return a("div",{key:e.id},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.changeable,expression:"changeable"}],attrs:{type:"checkbox",name:"state2",id:e.id},domProps:{value:e.id,checked:Array.isArray(t.changeable)?t._i(t.changeable,e.id)>-1:t.changeable},on:{change:function(a){var n=t.changeable,s=a.target,r=!!s.checked;if(Array.isArray(n)){var i=e.id,o=t._i(n,i);s.checked?o<0&&(t.changeable=n.concat([i])):o>-1&&(t.changeable=n.slice(0,o).concat(n.slice(o+1)))}else t.changeable=r}}}),t._v(" "),a("label",{attrs:{for:"state.id"}},[t._v(t._s(e.name))])])}),0),t._v(" "),a("input",{attrs:{type:"button",value:"Update Status"},on:{click:t.updateState}}),t._v("\n  "+t._s(t.$store&&t.$store.state)+"\n")],1)},staticRenderFns:[]};var S=a("VU/8")(m,p,!1,function(t){a("LULH")},"data-v-e3cb5948",null).exports;n.default.use(s.a);var g=new s.a({routes:[{path:"/",name:"mainpage",component:u},{path:"/update",name:"update",component:S},{path:"/create",name:"create",component:v}]}),_=a("mtWM"),b=a.n(_),$=a("zNUS"),L=a.n($);L.a.mock("/msg",function(){return{code:"1",data:{name:"@name","age|1-100":100,color:"@color"}}});L.a;var y=a("zL8q"),w=a.n(y),N=(a("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]});var k=a("VU/8")({name:"App",created:function(){}},N,!1,function(t){a("4fKS")},null,null).exports,E=a("NYxO");a("bREw");n.default.use(E.a);var B=new E.a.Store({state:{stateList:[]},mutations:{changeState:function(t,e){t.stateList=e}}}),C=a("fZjL"),P=a.n(C),H=a("Zrlr"),T=a.n(H),x=a("wxAW"),A=a.n(x),R=a("mvHQ"),j=a.n(R),V=function(t){return"object"===(void 0===t?"undefined":d()(t))?JSON.parse(j()(t)):t},U=function(t,e){if("object"===(void 0===t?"undefined":d()(t))){for(var a in t)if(e(t[a]))return a;return-1}return-1},F=function(t,e){if("object"===(void 0===t?"undefined":d()(t))){for(var a in t)if(e(t[a]))return t[a];return{}}return{}},D=function(t,e){if("object"===(void 0===t?"undefined":d()(t))){var a=-1;return t.forEach(function(t,n){e(t)&&(a=n)}),a}return-1},K=function(){function t(e){T()(this,t),this.allrelation=e,this.allStates=P()(e),this.result=[],this.hasResult=!1}return A()(t,[{key:"findShortPath",value:function(t,e,a){if(t){if(this.hasResult&&this.result.length<e.length&&0!=this.result.length)console.log("已找到合适路径，并且比当前路径短");else for(var n in t)if(console.log(t[n]),!e.includes(t[n])){var s=V(e);if(s.push(t[n]),t.includes(a))return console.log("path"),this.hasResult=!0,void((0===this.result.length||s.length<this.result.length)&&(this.result=s));this.findShortPath(this.allrelation[t[n]],s,a)}}else console.log("没有关系了，跳出当前递归")}},{key:"hasPath",value:function(t,e){return this.findShortPath(this.allrelation[t],[t],e),this.result}},{key:"getResult",value:function(t,e){hasPath(t,e)}}]),t}();n.default.config.productionTip=!1,n.default.prototype.$http=b.a,n.default.use(w.a),n.default.use(function(t){t.prototype.$tools={deepClone:V,hasElement:U,findElement:F,FindRoad:K,findElementIndex:D}}),new n.default({el:"#app",router:g,store:B,components:{App:k},template:"<App/>"})},bREw:function(t,e){},eGcL:function(t,e){},tvR6:function(t,e){},wKER:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.069275fdcb773f1599ec.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("neo4j-driver"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/set"),require("vis/dist/vis-network.min.css")):"function"==typeof define&&define.amd?define(["neo4j-driver","@babel/runtime-corejs3/helpers/defineProperty","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js/get-iterator","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/helpers/asyncToGenerator","vis/dist/vis-network.min","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/core-js-stable/set","vis/dist/vis-network.min.css"],t):"object"==typeof exports?exports.NeoVis=t(require("neo4j-driver"),require("@babel/runtime-corejs3/helpers/defineProperty"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/set"),require("vis/dist/vis-network.min.css")):e.NeoVis=t(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,function(e,t,r,n,o,s,i,a,c,u,l,d,b,p,f,h,v){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=s},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=c},function(e,t){e.exports=u},function(e,t){e.exports=l},function(e,t){e.exports=d},function(e,t){e.exports=b},function(e,t){e.exports=p},function(e,t){e.exports=f},function(e,t){e.exports=h},function(e,t){e.exports=v},function(e,t,r){"use strict";r.r(t);var n=r(11),o=r.n(n),s=r(9),i=r.n(s),a=r(6),c=r.n(a),u=r(12),l=r.n(u),d=r(2),b=r.n(d),p=r(10),f=r.n(p),h=r(13),v=r.n(h),m=r(14),j=r.n(m),g=r(3),_=r.n(g),y=r(15),x=r.n(y),k=r(7),w=r.n(k),q=r(4),N=r.n(q),O=r(5),E=r.n(O),C=r(1),L=r.n(C),T=r(0),I=r.n(T),P=r(8),S=(r(16),{neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES"},visjs:{interaction:{hover:!0,hoverConnectedEdges:!0,selectConnectedEdges:!1,multiselect:"alwaysOn",zoomView:!1,experimental:{}},physics:{barnesHut:{damping:.1}},nodes:{mass:4,shape:"neo",labelHighlightBold:!1,widthConstraint:{maximum:40},heightConstraint:{maximum:40}},edges:{hoverWidth:0,selectionWidth:0,smooth:{type:"continuous",roundness:.15},font:{size:9,strokeWidth:0,align:"top"},color:{inherit:!1},arrows:{to:{enabled:!0,type:"arrow",scaleFactor:.5}}}}}),A="completed",V=function(){function e(){N()(this,e),this._handlers=L()({},A,[])}return E()(e,[{key:"register",value:function(e,t){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(t)}},{key:"generateEvent",value:function(e,t){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var r=!0,n=!1,o=void 0;try{for(var s,i=_()(this._handlers[e]);!(r=(s=i.next()).done);r=!0){(0,s.value)(t)}}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}}}]),e}();r.d(t,"default",function(){return R});var R=function(){function e(t){N()(this,e),L()(this,"_nodes",{}),L()(this,"_edges",{}),L()(this,"_data",{}),L()(this,"_network",null),L()(this,"_events",new V),this._init(t),this._consoleLog(t),this._consoleLog(S)}return E()(e,[{key:"_consoleLog",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==t||this._config.console_debug)&&console[t](e)}},{key:"_init",value:function(e){this._config=e,this._encrypted=e.encrypted||S.neo4j.encrypted,this._trust=e.trust||S.neo4j.trust,this._driver=I.a.driver(e.server_url||S.neo4j.neo4jUri,I.a.auth.basic(e.server_user||S.neo4j.neo4jUser,e.server_password||S.neo4j.neo4jPassword),{encrypted:this._encrypted,trust:this._trust}),this._query=e.initial_cypher||S.neo4j.initialQuery,this._container=document.getElementById(e.container_id)}},{key:"_addNode",value:function(e){this._nodes[e.id]=e}},{key:"_addEdge",value:function(e){this._edges[e.id]=e}},{key:"buildNodeVisObject",value:function(){var e=w()(b.a.mark(function e(t){var r,n,o,s,i,a,c,u,l,d,p,h,m,g,y,k,w,q,N,O;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},n=t.labels[0],o=this._config&&this._config.labels&&this._config.labels[n],s=o&&o.caption,i=o&&o.size,a=o&&o.sizeCypher,c=o&&o.community,u=o&&o.shape,r.id=t.identity.toInt(),l=["ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","hexagon","square","icon"],new x.a(l).has(u)?r.shape=u:r.shape="",!a){e.next=37;break}return d=this._driver.session(),e.next=15,d.run(a,{id:I.a.int(r.id)});case 15:for(p=e.sent,h=!0,m=!1,g=void 0,e.prev=19,y=_()(p.records);!(h=(k=y.next()).done);h=!0)w=k.value,j()(w).call(w,function(e){"number"==typeof e?r.value=e:I.a.isInt(e)&&(r.value=e.toNumber())});e.next=27;break;case 23:e.prev=23,e.t0=e.catch(19),m=!0,g=e.t0;case 27:e.prev=27,e.prev=28,h||null==y.return||y.return();case 30:if(e.prev=30,!m){e.next=33;break}throw g;case 33:return e.finish(30);case 34:return e.finish(27);case 35:e.next=38;break;case 37:"number"==typeof i?r.value=i:(q=t.properties[i])&&"number"==typeof q?r.value=q:q&&"object"===v()(q)&&I.a.isInt(q)&&q.inSafeRange()?r.value=q.toNumber():r.value=1;case 38:if(r.label="function"==typeof s?s(t):t.properties[s]||n||"",c)try{t.properties[c]?r.group=t.properties[c].toNumber()||n||0:r.group=0}catch(e){r.group=0}else r.group=n;for(N in r.title="<strong>label:</strong> ".concat(t.labels[0],"<br>"),t.properties)t.properties.hasOwnProperty(N)&&(r.title+=f()(O="<strong>".concat(N,":</strong> ")).call(O,t.properties[N],"<br>"));return e.abrupt("return",r);case 43:case"end":return e.stop()}},e,this,[[19,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}()},{key:"buildEdgeVisObject",value:function(e){var t=this._config&&this._config.relationships&&this._config.relationships[e.type],r=t&&t.thickness,n=t&&t.caption,o={};for(var s in o.id=e.identity.toInt(),o.from=e.start.toInt(),o.to=e.end.toInt(),o.title="",e.properties){var i;if(e.properties.hasOwnProperty(s))o.title+=f()(i="<strong>".concat(s,":</strong> ")).call(i,e.properties[s],"<br>")}return o.value=r&&"string"==typeof r?e.properties[r]:r&&"number"==typeof r?r:1,o.label="boolean"==typeof n?n?e.type:"":n&&"string"==typeof n?e.properties[n]||"":e.type,o}},{key:"render",value:function(){var e=this,t=0,r=this._driver.session(),n=[];r.run(this._query,{limit:30}).subscribe({onNext:function(r){var o;t++,e._consoleLog("CLASS NAME"),e._consoleLog(r&&r.constructor.name),e._consoleLog(r);var s=l()(o=c()(r.toObject())).call(o,function(){var t=w()(b.a.mark(function t(r){var n,o,s,i,a,c,u,l,d,p,f,h,v,m,j,g,y,x;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e._consoleLog("Constructor:"),e._consoleLog(r&&r.constructor.name),!(r instanceof I.a.types.Node)){t.next=9;break}return t.next=5,e.buildNodeVisObject(r);case 5:n=t.sent;try{e._addNode(n)}catch(t){e._consoleLog(t,"error")}t.next=97;break;case 9:if(!(r instanceof I.a.types.Relationship)){t.next=14;break}o=e.buildEdgeVisObject(r),e._addEdge(o),t.next=97;break;case 14:if(!(r instanceof I.a.types.Path)){t.next=62;break}return e._consoleLog("PATH"),e._consoleLog(r),t.next=19,e.buildNodeVisObject(r.start);case 19:return s=t.sent,t.next=22,e.buildNodeVisObject(r.end);case 22:i=t.sent,e._addNode(s),e._addNode(i),a=!0,c=!1,u=void 0,t.prev=28,l=_()(r.segments);case 30:if(a=(d=l.next()).done){t.next=46;break}return p=d.value,t.t0=e,t.next=35,e.buildNodeVisObject(p.start);case 35:return t.t1=t.sent,t.t0._addNode.call(t.t0,t.t1),t.t2=e,t.next=40,e.buildNodeVisObject(p.end);case 40:t.t3=t.sent,t.t2._addNode.call(t.t2,t.t3),e._addEdge(e.buildEdgeVisObject(p.relationship));case 43:a=!0,t.next=30;break;case 46:t.next=52;break;case 48:t.prev=48,t.t4=t.catch(28),c=!0,u=t.t4;case 52:t.prev=52,t.prev=53,a||null==l.return||l.return();case 55:if(t.prev=55,!c){t.next=58;break}throw u;case 58:return t.finish(55);case 59:return t.finish(52);case 60:t.next=97;break;case 62:if(!(r instanceof Array)){t.next=97;break}f=!0,h=!1,v=void 0,t.prev=66,m=_()(r);case 68:if(f=(j=m.next()).done){t.next=83;break}if(g=j.value,e._consoleLog("Array element constructor:"),e._consoleLog(g&&g.constructor.name),!(g instanceof I.a.types.Node)){t.next=79;break}return t.next=75,e.buildNodeVisObject(g);case 75:y=t.sent,e._addNode(y),t.next=80;break;case 79:g instanceof I.a.types.Relationship&&(x=e.buildEdgeVisObject(g),e._addEdge(x));case 80:f=!0,t.next=68;break;case 83:t.next=89;break;case 85:t.prev=85,t.t5=t.catch(66),h=!0,v=t.t5;case 89:t.prev=89,t.prev=90,f||null==m.return||m.return();case 92:if(t.prev=92,!h){t.next=95;break}throw v;case 95:return t.finish(92);case 96:return t.finish(89);case 97:case"end":return t.stop()}},t,null,[[28,48,52,60],[53,,55,59],[66,85,89,97],[90,,92,96]])}));return function(e){return t.apply(this,arguments)}}());n.push(i.a.all(s))},onCompleted:function(){var s=w()(b.a.mark(function s(){var a,u;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.all(n);case 2:r.close(),a={nodes:{shape:"dot",font:{size:26,strokeWidth:7},scaling:{label:{enabled:!0}}},edges:{arrows:{to:{enabled:e._config.arrows||!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:e._config.hierarchical||!1,sortMethod:e._config.hierarchical_sort_method||"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}},u=e._container,e._data={nodes:new P.DataSet(c()(e._nodes)),edges:new P.DataSet(c()(e._edges))},e._consoleLog(e._data.nodes),e._consoleLog(e._data.edges),e._network=new P.Network(u,e._data,a),e._consoleLog("completed"),o()(function(){e._network.stopSimulation()},1e4),e._events.generateEvent(A,{record_count:t});case 12:case"end":return s.stop()}},s)}));return function(){return s.apply(this,arguments)}}(),onError:function(t){e._consoleLog(t,"error")}})}},{key:"clearNetwork",value:function(){this._nodes={},this._edges={},this._network.setData([])}},{key:"registerOnEvent",value:function(e,t){this._events.register(e,t)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){this._network.stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}}]),e}()}])});
//# sourceMappingURL=neovis-without-dependencies.js.map
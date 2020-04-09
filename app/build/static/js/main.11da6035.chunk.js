(this.webpackJsonpinnstudio=this.webpackJsonpinnstudio||[]).push([[0],{26:function(e,t,a){e.exports=a(60)},31:function(e,t,a){},32:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),c=(a(31),a(7)),i=a(3),m=a(6),l=a(62),u=(a(32),function(){var e=Object(l.a)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),d=u[0],f=u[1];return r.a.createElement("div",{className:"entry"},r.a.createElement("div",null,r.a.createElement("h1",{className:"entry__logo"},"INN-STUDIO"),r.a.createElement("div",{className:"entry__formBox"},r.a.createElement("p",{className:"entry__formBody"},"INN-STUDIO\u3067\u9060\u304f\u96e2\u308c\u305f\u4eba\u3068\u306e\u30d3\u30c7\u30aa\u901a\u8a71\u3092\u697d\u3057\u307f\u307e\u3057\u3087\u3046\u3002"),r.a.createElement("div",{className:"entry__row entry__row--1"}),r.a.createElement("form",{className:"entry__form"},r.a.createElement("div",{className:"entry__row entry__row--flex"},r.a.createElement("input",{className:"entry__form__input",id:"name",type:"text",onChange:function(e){return function(e){f(e.target.value)}(e)},placeholder:"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3092\u5165\u529b"}),r.a.createElement("input",{style:{marginTop:"8px"},className:"entry__form__input",id:"roomId",type:"text",onChange:function(e){return function(e){s(e.target.value)}(e)},placeholder:"ROOMID\u3092\u5165\u529b\uff08JOIN\u306e\u307f\uff09"}),r.a.createElement("p",{className:"entry__note"},"\u203bRoom\u3092\u65b0\u898f\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001ROOMID\u306f\u81ea\u52d5\u3067\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),r.a.createElement("div",{className:"entry__row"},r.a.createElement(c.b,{className:"entry__newLink",to:"/rooms/".concat(e,"?name=").concat(d)},"\u65b0\u898f\u4f5c\u6210"),r.a.createElement(c.b,{className:"entry__joinLink",to:"/rooms/".concat(o,"?name=").concat(d)},"JOIN")))))),r.a.createElement("p",{className:"copyright"},"\xa9 2020 ysk."))}),d=a(4),f=a.n(d),p=a(13),v=a(21),h=a(22),_=a(24),g=a(25),y=a(23),E=new(a.n(y).a)({key:"5630df90-6dd1-4ed9-9585-9469ecd49dd8",debug:0}),O=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],s=a[1];return r.a.createElement("div",{className:"room__form"},r.a.createElement("input",{id:"message",className:"room__form__input",type:"text",value:o,onChange:function(e){return s(e.target.value)},placeholder:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b"}),r.a.createElement("a",{className:"room__form__send",onClick:function(){return e.sendMessage(o),void s("")}},"\u9001\u4fe1"))},N=(a(59),function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).isInit=void 0,n.room=void 0,n.roomId=void 0,n.localVideoRef=void 0,n.remoteVideoRefs=void 0,n.remoteStreams=void 0,n.userName=void 0,n.isInit=!1,n.roomId=n.props.match.params.roomId,n.localVideoRef=r.a.createRef(),n.remoteVideoRefs={},n.remoteStreams={},n.state={remoteVideos:[],messages:[]},n}return Object(h.a)(a,[{key:"init",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t,a,n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.open){e.next=5;break}return alert("\u30b5\u30fc\u30d0\u30fc\u672a\u63a5\u7d9a\u30a8\u30e9\u30fc"),e.abrupt("return");case 5:this.isInit=!0;case 6:return e.next=8,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 8:return t=e.sent,this.localVideoRef.current.srcObject=t,e.next=12,this.localVideoRef.current.play().catch(console.error);case 12:(a=E.joinRoom(this.roomId,{mode:"sfu",stream:t})).once("open",(function(){alert("Room: ".concat(n.roomId," \u3078\u3088\u3046\u3053\u305d"))})),a.on("peerJoin",(function(e){alert("=== ".concat(e," joined ===\n"))})),a.on("stream",function(){var e=Object(p.a)(f.a.mark((function e(t){var a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.remoteVideoRefs[t.peerId]=r.a.createRef(),a=r.a.createElement("video",{id:t.peerId,key:t.peerId,ref:n.remoteVideoRefs[t.peerId],playsInline:!0,autoPlay:!0}),n.remoteStreams[t.peerId]=t,(o=Object.assign({},n.state.remoteVideos))[t.peerId]=a,n.setState({remoteVideos:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.on("peerLeave",(function(e){var t=Object.assign({},n.state.remoteVideos);t[e]=null,n.setState({remoteVideos:t})})),a.on("data",(function(e){var t=e.data,a=(e.src,JSON.parse(t)),r=Object.assign([],n.state.messages);r.push({user:a.user,message:a.message}),n.setState({messages:r})})),a.once("close",(function(){n.setState({remoteVideos:null})})),E.on("error",console.error);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.isInit||this.init()}},{key:"componentDidUpdate",value:function(){var e=this;Object.keys(this.remoteVideoRefs).forEach((function(t){var a=e.remoteVideoRefs[t].current;a&&!a.srcObject&&(a.srcObject=e.remoteStreams[t])}))}},{key:"componentWillUnmount",value:function(){}},{key:"sendMessage",value:function(e){var t={user:this.userName,message:e};this.room.send(JSON.stringify(t));var a=Object.assign([],this.state.messages);a.push({user:"me",message:e}),this.setState({messages:a})}},{key:"render",value:function(){var e=this,t=this.state.remoteVideos?Object.values(this.state.remoteVideos):null,a=this.state.messages.map((function(e){return r.a.createElement("p",{style:{wordWrap:"break-word",padding:"0 12px"}},e.user,": ",e.message)}));return r.a.createElement("div",{className:"room"},r.a.createElement("div",{className:"room__remoteVideos"},r.a.createElement("video",{id:"localStream",ref:this.localVideoRef,muted:!0,playsInline:!0}),t),r.a.createElement("div",{className:"room__spacer"}),r.a.createElement("div",{className:"room__footer"},r.a.createElement("h2",{style:{color:"#333",padding:"0 12px"}},"ROOMID: ",this.roomId),r.a.createElement("div",{className:"room_messages"},a),r.a.createElement(O,{sendMessage:function(t){return e.sendMessage(t)}})))}}]),a}(r.a.Component)),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:u}),r.a.createElement(i.a,{path:"/rooms/:roomId",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.11da6035.chunk.js.map
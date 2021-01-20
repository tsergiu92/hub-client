(this["webpackJsonphub-tester-webrtc-video"]=this["webpackJsonphub-tester-webrtc-video"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},70:function(e,t){},73:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),r=n(28),c=n.n(r),o=(n(40),n(33)),d=n(15),l=n.n(d),u=n(29),h=n(30),g=n(31),j=n(34),b=n(32),_=(n(42),n(43)),p=null,C=document.getElementById("localVideo"),f=document.getElementById("remoteVideo"),v={audio:!1,video:!0},m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleLoginClick=Object(u.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dev.linx.safemobile.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e.state.login,password:e.state.password})});case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,e.setState({user:s.data},(function(){e.setState({socket:_("https://hub.dev.linx.safemobile.com/",{reconnect:!0,transports:["websocket"]})},(function(){var t=e.state.socket;t.on("connect",(function(){e.setState({hubStatus:2}),t.emit("ars",JSON.stringify({ars:!0,asset_id:e.state.user.asset.id,account_id:e.state.user.account.id})),e.setState({arsSent:!0})})),t.on("video",(function(n){var s=JSON.parse(n);if(console.log("video",s),"notify-request"===s.type&&(e.setState({dest_asset_id:parseInt(s.origin_asset_id),callId:parseInt(s.video_call_id)}),t.emit("video",JSON.stringify({origin_asset_id:e.state.user.asset.id,dest_asset_id:parseInt(s.origin_asset_id),type:"notify-answer",origin_asset_priority:e.state.user.asset.priority,origin_asset_type_name:e.state.user.user_role.name,origin_asset_name:e.state.user.name,video_call_id:s.video_call_id,answer:"accepted"}))),"notify-end"===s.type&&(console.log("notify-end"),e.cleanVideoStreams()),"notify-answer"===s.type){if("rejected"===s.answer)return void e.closeVideo();navigator.mediaDevices.getUserMedia(v).then((function(n){console.log("Created getUserMedia",n),p=n,C.srcObject=n,console.log("iceServers",e.calculateIceServers()),e.setState({rtcPeerConnection:new RTCPeerConnection(e.calculateIceServers())},(function(){e.state.rtcPeerConnection.onicecandidate=e.onIceCandidate,e.state.rtcPeerConnection.ontrack=e.onAddStream,e.state.rtcPeerConnection.addTrack(p.getTracks()[0],p),e.state.rtcPeerConnection.createOffer().then((function(n){e.setState({isCaller:!0,callId:parseInt(s.video_call_id)},(function(){e.state.rtcPeerConnection.setLocalDescription(n),console.log("Created SDP",n),t.emit("video",JSON.stringify({origin_asset_id:e.state.user.asset.id,type:"offer",sdp:n,dest_asset_id:parseInt(e.state.dest_asset_id),video_call_id:s.video_call_id}))}))})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log("An error occured",e)}))}if("offer"===s.type&&(e.state.isCaller?(console.log("parseDate.sdp",s.sdp),e.state.rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(s.sdp))):navigator.mediaDevices.getUserMedia(v).then((function(n){console.log("Created getUserMedia",n),p=n,C.srcObject=n,console.log("iceServers",e.calculateIceServers()),e.setState({rtcPeerConnection:new RTCPeerConnection(e.calculateIceServers())},(function(){e.state.rtcPeerConnection.onicecandidate=e.onIceCandidate,e.state.rtcPeerConnection.ontrack=e.onAddStream,e.state.rtcPeerConnection.addTrack(p.getTracks()[0],p),e.state.rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(s.sdp)),e.state.rtcPeerConnection.createAnswer().then((function(n){e.setState({sdp:n},(function(){e.state.rtcPeerConnection.setLocalDescription(n),console.log("Created SDP",n),t.emit("video",JSON.stringify({origin_asset_id:e.state.user.asset.id,type:"offer",sdp:n,dest_asset_id:parseInt(e.state.dest_asset_id),video_call_id:s.video_call_id}))}))})).catch((function(e){console.log(e)}))}))}))),"candidate"===s.type&&e.state.rtcPeerConnection){var a=new RTCIceCandidate({sdpMLineIndex:s.label,candidate:s.candidate});e.state.rtcPeerConnection.addIceCandidate(a)}}))}))}));case 7:case"end":return t.stop()}}),t)}))),e.calculateIceServers=function(){return{iceServer:[{urls:e.state.stunUrl},{urls:e.state.turnUrl,username:e.state.turnUsername,credential:e.state.turnCredential}]}},e.onAddStream=function(e){console.log("onAddStream",e),f.srcObject=e.streams[0],e.streams[0]},e.onIceCandidate=function(t){t.candidate&&(console.log("sending ice candidate",t.candidate),e.state.socket.emit("video",JSON.stringify({type:"candidate",label:t.candidate.sdpMLineIndex,id:t.candidate.sdpMid,candidate:t.candidate.candidate,dest_asset_id:e.state.dest_asset_id})))},e.handleChangeLogin=function(t){e.setState({login:t.target.value})},e.handleChangePassword=function(t){e.setState({password:t.target.value})},e.handleChangeDestAssetId=function(t){e.setState({dest_asset_id:t.target.value})},e.handleChangeStunUrl=function(t){e.setState({stunUrl:t.target.value})},e.handleChangeTurnUrl=function(t){e.setState({turnUrl:t.target.value})},e.handleChangeTurnUsername=function(t){e.setState({turnUsername:t.target.value})},e.handleChangeTurnCredential=function(t){e.setState({turnCredential:t.target.value})},e.handleClickEvent=function(){e.state.socket.emit("video",JSON.stringify({origin_asset_id:e.state.user.asset.id,dest_asset_id:parseInt(e.state.dest_asset_id),type:"notify-request",origin_asset_priority:e.state.user.asset.priority,origin_asset_type_name:e.state.user.user_role.name,origin_asset_name:e.state.user.name,video_call_id:null}))},e.closeVideo=function(){e.state.socket.emit("video",JSON.stringify({origin_asset_id:e.state.user.asset.id,dest_asset_id:parseInt(e.state.dest_asset_id),type:"notify-end",video_call_id:e.state.callId})),e.cleanVideoStreams()},e.cleanVideoStreams=function(){null!=e.state.rtcPeerConnection&&e.state.rtcPeerConnection.close(),e.setState({callId:null,rtcPeerConnection:null}),C.srcObject=null,f.srcObject=null},e.state={login:"",password:"",user:null,hubStatus:0,socket:null,arsSent:!1,dest_asset_id:"",isCaller:!1,callId:null,rtcPeerConnection:null,stunUrl:"stun:dev.linx.safemobile.com:19302",turnUrl:"turn:dev.linx.safemobile.com:19302",turnUsername:"safemobile",turnCredential:"Safemobile123"},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=Object(o.a)({},this.state),t=e.login,n=e.password,a=e.user,r=e.hubStatus,c=e.arsSent,d=e.dest_asset_id,l=e.isCaller,u=e.callId,h=e.stunUrl,g=e.turnUrl,j=e.turnUsername,b=e.turnCredential;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"HUB TESTER"}),Object(s.jsx)("br",{}),Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:"STUN and TURN servers"})}),"STUN Server URL :",Object(s.jsx)("input",{placeholder:"ex:    stun:stun.services.mozilla.com",onChange:this.handleChangeStunUrl,value:h,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),"TURN Server URL :",Object(s.jsx)("input",{placeholder:"ex:    turn:numb.viagenie.ca",onChange:this.handleChangeTurnUrl,value:g,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),"TURN Server Username :",Object(s.jsx)("input",{placeholder:"ex:    gigel",onChange:this.handleChangeTurnUsername,value:j,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),"TURN Server Credential :",Object(s.jsx)("input",{placeholder:"ex:    superGiGi",onChange:this.handleChangeTurnCredential,value:b,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:"Login"})}),"Username :",Object(s.jsx)("input",{placeholder:"user",onChange:this.handleChangeLogin,value:t,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),"Password :",Object(s.jsx)("input",{placeholder:"password",onChange:this.handleChangePassword,value:n,style:{margin:10,width:250}}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.handleLoginClick,style:{margin:10,width:100},children:"LOGIN"}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{children:[Object(s.jsx)("u",{children:"isCaller:"})," ",l?"TRUE":"FALSE"]}),Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:"User details:"})}),a&&Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsxs)("h4",{children:["account_id: ",a.account.id]}),Object(s.jsxs)("h4",{children:["user_id: ",a.id]}),Object(s.jsxs)("h4",{children:["asset_id: ",a.asset.id]}),Object(s.jsxs)("h4",{children:["user_role: ",a.user_role.name]})]}),Object(s.jsx)("h2",{children:Object(s.jsx)("u",{children:"HUB"})}),Object(s.jsxs)("h4",{children:["status: ",0===r?"uninitialized":1===r?"connecting":2===r?"connected":"connection error"]}),Object(s.jsxs)("h4",{children:["ARS Sent: ",!0===c?"TRUE":"FALSE"]}),Object(s.jsxs)("h4",{children:["Call id: ",u]}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{placeholder:"destination_asset_id",onChange:this.handleChangeDestAssetId,value:d}),Object(s.jsx)("button",{onClick:this.handleClickEvent,disabled:0===d.length,children:"Send `video` notify-request"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.closeVideo,style:{margin:40},disabled:null===u,children:"Close Video"})]})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.0887dd58.chunk.js.map
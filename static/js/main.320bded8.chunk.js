(this["webpackJsonpmy-firstwebsite"]=this["webpackJsonpmy-firstwebsite"]||[]).push([[0],{34:function(e,t,n){e.exports=n(64)},39:function(e,t,n){},40:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(31),c=n.n(l),o=(n(39),n(2)),i=n(3),u=n(8),s=n(7),m=n(9),f=(n(40),n(17)),p=n(12),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://tucka3-prog.github.io/my-firstwebsite/",className:"navbar-brand"},"EricsMemes")),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",null,r.a.createElement(f.b,{className:"nav-link",to:"/galery"},"Galery")),"}",r.a.createElement("li",null,r.a.createElement(f.b,{className:"nav-link",to:"/userGalery"},"User Galery")),"}")))}}]),t}(a.Component),h=n(11),d=n(16),v=n(14),E=n.n(v),j=new(function(){function e(){Object(o.a)(this,e),console.log("Service is constructed")}return Object(i.a)(e,[{key:"getRestClient",value:function(){return this.serviceInstance||(this.serviceInstance=E.a.create({baseURL:"http://35.224.119.47:8080/",timeout:1e4,headers:{"Content-Type":"application/json"}})),this.serviceInstance}}]),e}()),O=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"uploadFileToServer",value:function(e){return j.getRestClient().post("/files",e)}}]),e}(),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleUploadFile=function(t){var n=new FormData,a=t.target.files[0];console.log("Uploading file",t.target.files[0]),n.append("file",t.target.files[0]),n.append("name","my_file"),n.append("description","this file is uploaded by Erikas");Object(d.a)(e);e.fileService.uploadFileToServer(n).then((function(t){console.log("File "+a.name+" is uploaded"),console.log(e.getFileName(a.name))})).catch((function(e){console.log(e),e.response?console.log("Upload error. HTTP error/status code=",e.response.status):console.log("Upload error. HTTP error/status code=",e.message)}))},e.fileService=new O,e.state={fileName:""},e.getFileName=e.getFileName.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:this.handleUploadFile}))}},{key:"getFileName",value:function(e){this.setState({fileName:e})}}]),t}(a.Component),y=function(e){var t=e.template,n=e.onClick;return r.a.createElement("img",{style:{width:200},key:t.id,src:t.url,alt:t.name,onClick:n})},k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"text-muted"},"All Rights Reserved 2019 Erics Dev"))}}]),t}(a.Component);var w=function(e){return E.a.get("http://35.224.119.47:8080/editPicture/".concat(e))};var C=function(){return E.a.get("http://35.224.119.47:8080/restart")};var S=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),o=Object(h.a)(c,2),i=o[0],u=o[1],s=Object(a.useState)(""),m=Object(h.a)(s,2),f=m[0],p=m[1],b=Object(a.useState)(""),d=Object(h.a)(b,2),v=d[0],E=d[1],j=Object(a.useState)(""),O=Object(h.a)(j,2),S=O[0],N=O[1];return Object(a.useEffect)((function(){fetch("http://localhost:8080/images/all").then((function(e){return e.json().then((function(e){return l(e)}))}))}),[]),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Welcome,"),r.a.createElement("h2",null,"you can choose one of the predefined images or upload your own"),r.a.createElement("div",null,r.a.createElement(g,null)),i&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w(i.name+","+f+","+v),C(),N("Edit Complete you can find picture in User Galery")}},r.a.createElement(y,{template:i}),r.a.createElement("input",{placeholder:"top text",value:f,onChange:function(e){return p(e.target.value)}}),r.a.createElement("input",{placeholder:"bottom text",value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("div",null,S)),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null),n.map((function(e){return r.a.createElement(y,{template:e,onClick:function(){u(e)}})}))),r.a.createElement("div",null,r.a.createElement(k,null)))};var N=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),o=Object(h.a)(c,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){fetch("http://localhost:8080/users/all").then((function(e){return e.json().then((function(e){return l(e)}))}))}),[]),r.a.createElement("div",{style:{textAlign:"center"}},i&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(y,{template:i})),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null),n.map((function(e){return r.a.createElement(y,{template:e,onClick:function(){u(e)}})}))),r.a.createElement("div",null,r.a.createElement(k,null)))},F=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TodoApp"},r.a.createElement(f.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/galery",exact:!0,component:S}),r.a.createElement(p.a,{path:"/userGalery",component:N}),r.a.createElement(p.a,{component:S})))))}}]),t}(a.Component),x=(n(63),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.320bded8.chunk.js.map
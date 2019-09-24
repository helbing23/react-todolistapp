(window["webpackJsonpreact-projects"]=window["webpackJsonpreact-projects"]||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(23),c=n.n(r),i=(n(32),n(18)),l=n(5),s=n(6),d=n(8),u=n(7),p=n(9),f=(n(33),n(14)),m=n(10);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},v=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"To-do List"),a.a.createElement(f.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(f.b,{style:b,to:"/about"},"About"))},g=n(26),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(e){return n.setState(Object(g.a)({},e.target.name,e.target.value))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}}," ",a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.markComplete=function(e){console.log(n.props)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:k},"X")))}}]),t}(o.Component),k={background:"#333",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},E=w,j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return a.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),t}(o.Component);var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null," This is a To-do List App created using React.Js framework. "))},C=n(11),x=n.n(C),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{id:x.a.v4(),title:"Get up early",completed:!1},{id:x.a.v4(),title:"Have breakfast",completed:!1},{id:x.a.v4(),title:"Have Lunch",completed:!1},{id:x.a.v4(),title:"Have Dinner",completed:!1},{id:x.a.v4(),title:"Go sleep Early",completed:!1}]},n.markComplete=function(e){n.setState({todos:n.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.delTodo=function(e){n.setState({todos:Object(i.a)(n.state.todos.filter((function(t){return t.id!==e})))})},n.addTodo=function(e){var t={id:x.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[t])})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(f.a,{basename:"/react-todolistapp/"},a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null," ",a.a.createElement(y,{addTodo:e.addTodo}),a.a.createElement(j,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),t}(o.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.e251a74e.chunk.js.map
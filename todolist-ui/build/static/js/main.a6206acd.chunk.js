(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a(285)},152:function(e,t,a){},154:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},155:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(9),l=a.n(s),r=(a(152),a(30)),i=a(31),c=a(34),u=a(32),d=a(35),m=(a(154),a(155),a(113),a(289)),p=a(76),h=a(10),f=a(293),g=a(286),E=m.a.Item,y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.props.loginSuccess()})},a.state={username:"user",password:"password"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement("div",{id:"components-form-demo-normal-login"},o.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"login-form"},o.a.createElement(E,null,e("username",{initialValue:this.state.username,rules:[{required:!0,message:"Please input your username!"}]})(o.a.createElement(p.a,{prefix:o.a.createElement(h.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"username"}))),o.a.createElement(E,null,e("password",{initialValue:this.state.password,rules:[{required:!0,message:"Please input your Password!"}]})(o.a.createElement(p.a,{prefix:o.a.createElement(h.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),o.a.createElement(E,null,e("remember",{valuePropName:"checked",initialValue:!0})(o.a.createElement(f.a,null,"Remember me")),o.a.createElement("a",{className:"login-form-forgot",href:"/forgot"},"Forgot password"),o.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"))))}}]),t}(o.a.Component),b=m.a.create()(y),v=a(52),w=a(296),j=a(292),O=a(294),S=a(287),C=a(288),T=m.a.Item,k=v.a.Option,P=w.a.Option,N=[{value:"istanbul",label:"Istanbul",children:[{value:"pendik",label:"Pendik",children:[{value:"kurtkoy",label:"Kurtkoy"}]}]},{value:"ankara",label:"Ankara",children:[{value:"cankaya",label:"Cankaya",children:[{value:"cayyolu",label:"Cayyolu"}]}]}],x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var o=a.props.form;t&&t!==o.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var o=a.props.form;t&&a.state.confirmDirty&&o.validateFields(["confirm"],{force:!0}),n()},a.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map(function(t){return"".concat(e).concat(t)}):[],a.setState({autoCompleteResult:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.autoCompleteResult,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},s=e("prefix",{initialValue:"86"})(o.a.createElement(v.a,{style:{width:70}},o.a.createElement(k,{value:"86"},"+86"),o.a.createElement(k,{value:"87"},"+87"))),l=t.map(function(e){return o.a.createElement(P,{key:e},e)});return o.a.createElement(m.a,{onSubmit:this.handleSubmit},o.a.createElement(T,Object.assign({},a,{label:"E-mail"}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(o.a.createElement(p.a,null))),o.a.createElement(T,Object.assign({},a,{label:"Password"}),e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(o.a.createElement(p.a,{type:"password"}))),o.a.createElement(T,Object.assign({},a,{label:"Confirm Password"}),e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(o.a.createElement(p.a,{type:"password",onBlur:this.handleConfirmBlur}))),o.a.createElement(T,Object.assign({},a,{label:o.a.createElement("span",null,"Nickname\xa0",o.a.createElement(j.a,{title:"What do you want others to call you?"},o.a.createElement(h.a,{type:"question-circle-o"})))}),e("nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(o.a.createElement(p.a,null))),o.a.createElement(T,Object.assign({},a,{label:"Habitual Residence"}),e("residence",{initialValue:["istanbul","pendik","kurtkoy"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(o.a.createElement(O.a,{options:N}))),o.a.createElement(T,Object.assign({},a,{label:"Phone Number"}),e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(o.a.createElement(p.a,{addonBefore:s,style:{width:"100%"}}))),o.a.createElement(T,Object.assign({},a,{label:"Website"}),e("website",{rules:[{required:!0,message:"Please input website!"}]})(o.a.createElement(w.a,{dataSource:l,onChange:this.handleWebsiteChange,placeholder:"website"},o.a.createElement(p.a,null)))),o.a.createElement(T,Object.assign({},a,{label:"Captcha",extra:"We must make sure that your are a human."}),o.a.createElement(S.a,{gutter:8},o.a.createElement(C.a,{span:12},e("captcha",{rules:[{required:!0,message:"Please input the captcha you got!"}]})(o.a.createElement(p.a,null))),o.a.createElement(C.a,{span:12},o.a.createElement(g.a,null,"Get captcha")))),o.a.createElement(T,n,e("agreement",{valuePropName:"checked"})(o.a.createElement(f.a,null,"I have read the ",o.a.createElement("a",{href:""},"agreement")))),o.a.createElement(T,n,o.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Register")))}}]),t}(o.a.Component),A=m.a.create()(x),D=a(145),F=a(291),L=a(290),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).saveTodoList=function(e){console.log("Saving"),fetch("/todolists/saveall",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Basic dXNlcjpwYXNzd29yZA=="},body:JSON.stringify(a.state.todolists)}).then(function(e){console.log(e)})},a.removeTodoList=function(e){fetch("/todolists",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Basic dXNlcjpwYXNzd29yZA=="},body:JSON.stringify(a.state.todos)}).then(function(e){console.log(e)})},a.selectTodoList=function(e,t){fetch("/todolists/"+e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Basic dXNlcjpwYXNzd29yZA=="}}).then(function(e){return e.json()}).then(function(e){console.log(e),console.log("index"),console.log(t),a.setState({todolists:a.state.todolists,selected:t})})},a.createTodoList=function(e){var t=a.state.todolists;t.push({todos:[]});var n=a.state.todolists.length-1;a.setState({todolists:t,selected:n})},a.handlePressEnter=function(e){var t={index:a.state.todolists[a.state.selected].length,content:e.target.value,date:null,dateString:""};console.info(a.state.todolists[a.state.selected]);var n=a.state.todolists[a.state.selected].todos.concat(t);a.state.todolists[a.state.selected].todos=n,a.setState({todolists:a.state.todolists,selecetd:a.state.selected}),e.target.value=""},a.setDate=function(e,t,n){var o=Object(D.a)(a.state.todolists[a.state.selected].todos);o[e].date=t,o[e].dateString=n,a.state.todolists[a.state.selected].todos=o,a.setState({todolists:a.state.todolists,selecetd:a.state.selected})},a.onTitleChange=function(e){var t=e.target.value;a.state.todolists[a.state.selected].title=t,a.setState({todolists:a.state.todolists,selected:a.state.selected})},a.state={todolists:[],selected:-1},fetch("/todolists",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Basic dXNlcjpwYXNzd29yZA=="}}).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({todolists:e.payload,selected:a.state.selected}),console.info(a.state)}),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todoContainer"},o.a.createElement("h1",null,"TODO App"),o.a.createElement(S.a,null,o.a.createElement(C.a,{span:4},o.a.createElement(F.a,{locale:{emptyText:"No todo list"},dataSource:this.state.todolists,renderItem:function(t,a){return o.a.createElement("a",{onClick:function(){return e.selectTodoList(t.id,a)},id:t.id,index:a},t.title)}})),o.a.createElement(C.a,{span:16},this.state.selected>-1?o.a.createElement("div",null,o.a.createElement(p.a,{placeholder:"Title",onChange:this.onTitleChange,defaultValue:this.state.todolists[this.state.selected].title}),o.a.createElement(p.a,{placeholder:"What needs to be done?",onPressEnter:this.handlePressEnter}),o.a.createElement(F.a,{locale:{emptyText:"No todo items"},dataSource:this.state.todolists[this.state.selected].todos,renderItem:function(t,a){return o.a.createElement(q,{todo:t,removeTodo:e.removeTodo,setDate:e.setDate})}}),o.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:this.saveTodoList},"Save")):"Select a todo list or create new one",o.a.createElement("div",null,o.a.createElement("a",{onClick:this.createTodoList},"Create new todo list")))))}}]),t}(o.a.Component),q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).remove=function(){a.props.removeTodo(a.props.todo.index)},a.handleDateChange=function(e,t){a.props.setDate(a.props.todo.index,e,t)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(F.a.Item,{actions:[o.a.createElement(L.a,{format:"MM/DD/YYYY",onChange:this.handleDateChange,value:this.props.todo.date}),o.a.createElement(h.a,{type:"close-circle",theme:"filled",onClick:this.remove})]},this.props.todo.content)}}]),t}(o.a.Component),Y=a(295),z=Y.a.Header,I=Y.a.Footer,W=(Y.a.Sider,Y.a.Content),X=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).registerForm=function(e){a.setState({pageStatus:"register"})},a.loginSuccess=function(e){a.setState({pageStatus:"todo"})},a.state={pageStatus:"login"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"login"==this.state.pageStatus?o.a.createElement("div",{className:"App"},o.a.createElement(Y.a,null,o.a.createElement(z,null,"Login Form"),o.a.createElement(W,{style:{paddingTop:100,paddingBottom:110}},o.a.createElement(S.a,{type:"flex",justify:"center"},o.a.createElement(C.a,{value:500},o.a.createElement(b,{loginSuccess:this.loginSuccess}))),"Or ",o.a.createElement("a",{href:"#register",onClick:this.registerForm},"register now!")),o.a.createElement(I,null,o.a.createElement("h3",null,"Your are @TodoList")))):"register"==this.state.pageStatus?o.a.createElement("div",{className:"App"},o.a.createElement(Y.a,null,o.a.createElement(z,null,"Login Form"),o.a.createElement(W,{style:{paddingTop:100,paddingBottom:110}},o.a.createElement(S.a,{type:"flex",justify:"center"},o.a.createElement(C.a,{value:500},o.a.createElement(A,null))),"Or ",o.a.createElement("a",{href:"#register",onClick:this.registerForm},"register now!")),o.a.createElement(I,null,o.a.createElement("h3",null,"Your are @TodoList")))):"todo"==this.state.pageStatus?o.a.createElement("div",{className:"App"},o.a.createElement(Y.a,null,o.a.createElement(z,null,"Login Form"),o.a.createElement(W,{style:{paddingTop:100,paddingBottom:110}},o.a.createElement(S.a,{justify:"start"},o.a.createElement(C.a,{span:24},o.a.createElement(B,null)))),o.a.createElement(I,null,o.a.createElement("h3",null,"Your are @TodoList")))):void 0}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,2,1]]]);
//# sourceMappingURL=main.a6206acd.chunk.js.map
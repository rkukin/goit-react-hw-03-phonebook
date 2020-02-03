(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports=n(32)},32:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(18),i=n(3),l=n(4),m=n(5),d=n(7),f=n(6),s=n(8),h=n(14),b=n(1),p=n(2);function v(){var t=Object(b.a)(["\nmax-width: 30%;\nborder-radius: 5px;\n"]);return v=function(){return t},t}function x(){var t=Object(b.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\n"]);return x=function(){return t},t}function g(){var t=Object(b.a)(["\nmax-width: 40%;\nfont-size: 20px;\n"]);return g=function(){return t},t}function C(){var t=Object(b.a)(["\nborder: 2px solid black;\nmax-width: 400px;\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\n"]);return C=function(){return t},t}var O=p.a.form(C()),j=p.a.label(g()),E=p.a.input(x()),w=p.a.button(v()),y=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(i.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(s.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement(O,{onSubmit:this.handleSubmit},r.a.createElement(j,{htmlFor:"name"},"Name"),r.a.createElement(E,{type:"text",name:"name",id:"name",value:this.state.name,autoComplete:"off",onChange:this.handleChange}),r.a.createElement(j,{htmlFor:"number"},"Number"),r.a.createElement(E,{type:"tel",name:"number",id:"number",value:this.state.number,autoComplete:"off",onChange:this.handleChange}),r.a.createElement(w,{type:"submit"},"Add contact"))}}]),e}(a.Component);function k(){var t=Object(b.a)(["\ndisplay: flex;\nmargin-bottom: 10px;\n"]);return k=function(){return t},t}function D(){var t=Object(b.a)(["\nmax-width: 50%;\nborder-radius: 5px;\n"]);return D=function(){return t},t}function S(){var t=Object(b.a)(["\nmargin-right: 30px;\nmax-width: 50%;\n"]);return S=function(){return t},t}var A=p.a.li(S()),F=p.a.button(D()),L=p.a.div(k());function B(t){var e=t.handleDelete,n=t.contact,a=n.id,o=n.name,c=n.number;return r.a.createElement(L,null,r.a.createElement(A,{key:a},o,": ",c," "),r.a.createElement(F,{onClick:function(){return e(a)}},"Delete"))}function J(){var t=Object(b.a)(["\nmax-width: 400px;\ndisplay: flex;\nflex-direction: column;\n"]);return J=function(){return t},t}var N=p.a.ul(J());function P(t){var e=t.contacts,n=t.handleDelete;return r.a.createElement(N,null,e.map((function(t){return r.a.createElement(B,{key:t.id,contact:t,handleDelete:n})})))}function z(){var t=Object(b.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\n"]);return z=function(){return t},t}var I=p.a.input(z());function T(t){var e=t.handleChange;return r.a.createElement(I,{type:"text",onChange:e,name:"filter",autoComplete:"off"})}var q=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={contacts:[],filter:""},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(i.a)({},a,r))},n.onAddContact=function(t,e){var a={id:Object(h.uuid)(),name:t,number:e};return""===t||""===e?alert("Please fill all fields!"):n.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("This contact already added!"):void n.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[a])}}))},n.handleDelete=function(t){var e=n.state.contacts.filter((function(e){return e.id!==t}));n.setState({contacts:e})},n}return Object(s.a)(e,t),Object(m.a)(e,[{key:"getFilteredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter;return""===n?e:e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(n.toLowerCase())}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"PhoneBook"),r.a.createElement(y,{onAddContact:this.onAddContact}),r.a.createElement("h3",null,"Contacts"),r.a.createElement(T,{handleChange:this.handleChange}),r.a.createElement(P,{contacts:this.getFilteredContacts(),handleDelete:this.handleDelete}))}}]),e}(a.Component);c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.71b101fc.chunk.js.map
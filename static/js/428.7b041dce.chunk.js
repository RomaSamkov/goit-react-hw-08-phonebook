"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[428],{4428:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var a,r,o,i,c,s,u,d,l,f,h,m=t(2791),x=t(9434),p=t(168),v=t(8789),C=v.ZP.div(a||(a=(0,p.Z)(["\n  \n"]))),Z=v.ZP.h2(r||(r=(0,p.Z)(["\n  \n"]))),b=t(885),j=v.ZP.form(o||(o=(0,p.Z)([""]))),g=v.ZP.label(i||(i=(0,p.Z)([""]))),w=v.ZP.input(c||(c=(0,p.Z)([""]))),P=v.ZP.button(s||(s=(0,p.Z)([""]))),k=t(1312),y=function(){var e=(0,x.v9)((function(e){return e.contacts.items})),n=(0,x.v9)((function(e){return e.contacts.filter})),t=(0,x.v9)((function(e){return e.contacts.loader})),a=(0,x.v9)((function(e){return e.contacts.addLoader})),r=(0,x.v9)((function(e){return e.contacts.error})),o=(0,x.I0)();return{contacts:e,filter:n,loader:t,addLoader:a,error:r,getContacts:function(){o(k.mh.getContacts())},addContact:function(e){o(k.mh.addContact(e))},deleteContact:function(e){o(k.mh.deleteContact(e))},editContact:function(e){var n=e.id,t=e.name,a=e.number;o(k.mh.editContact({id:n,name:t,number:a}))},setFilter:function(e){o((0,k.M6)(e))}}},L=t(8191),F=t(5218),N=t(184),S=function(){var e=(0,m.useState)(""),n=(0,b.Z)(e,2),t=n[0],a=n[1],r=(0,m.useState)(""),o=(0,b.Z)(r,2),i=o[0],c=o[1],s=(0,m.useId)(),u=(0,m.useId)(),d=y(),l=d.contacts,f=d.addLoader,h=d.addContact,x=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":c(r);break;default:return}},p=function(){a(""),c("")};return(0,N.jsxs)(j,{onSubmit:function(e){if(e.preventDefault(),l.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return F.ZP.error("This contact: '".concat(t,"' is already in phonebook"),{duration:2e3,position:"top-center"}),void p();h({name:t,number:(0,L._)("+".concat(i)).getURI()}),p()},autoComplete:"off",children:[(0,N.jsx)(g,{htmlFor:s,children:"Name"}),(0,N.jsx)(w,{id:s,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x,placeholder:"full name"}),(0,N.jsx)(g,{htmlFor:u,children:"Number"}),(0,N.jsx)(w,{id:u,type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,placeholder:"phone number xxx-xx-xx"}),(0,N.jsxs)(P,{disabled:f,children:[" ",f?"Adding...":"Add contact"]})]})},A=v.ZP.li(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  width: 100%;\n  &:not(:last-child) {\n  }\n"]))),I=v.ZP.button(d||(d=(0,p.Z)(["\n  width: 75px;\n  height: 25px;\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    box-shadow: 0px 0px 7px #fff;\n  }\n"]))),_=function(e){var n=e.id,t=e.name,a=e.number,r=(0,m.useState)(null),o=(0,b.Z)(r,2),i=o[0],c=o[1],s=(0,m.useState)(t),u=(0,b.Z)(s,2),d=u[0],l=u[1],f=(0,m.useState)(a),h=(0,b.Z)(f,2),x=h[0],p=h[1],v=(0,m.useState)(!1),C=(0,b.Z)(v,2),Z=C[0],j=C[1],g=y(),w=g.contacts,P=g.loader,k=g.deleteContact,L=g.editContact,S=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"editedName":return l(a);case"editedNumber":return p(a);default:return}};return(0,N.jsxs)(A,{children:[Z?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("input",{typeof:"text",name:"editedName",value:d,onChange:S}),(0,N.jsx)("input",{typeof:"text",name:"editedNumber",value:x,onChange:S})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("span",{children:[t,":"]}),(0,N.jsx)("span",{children:a})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)(I,{onClick:function(){if(Z){if(t===d&&a===x)return void j((function(e){return!e}));if(w.find((function(e){return e.name.toLowerCase()===d.toLowerCase()&&e.id!==n})))return void(0,F.ZP)("Name ".concat(d," exist"));L({id:n,name:d,number:x})}j((function(e){return!e}))},children:Z?"Save":"Edit"}),(0,N.jsx)(I,{disabled:i,onClick:function(){k(n),c(n)},children:P&&i?"Deleting...":"Delete"})]})]})},z=v.ZP.ul(l||(l=(0,p.Z)([""]))),D=function(e){var n=e.contacts;return(0,N.jsx)(z,{children:n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,N.jsx)(_,{id:n,name:t,number:a},n)}))})},q=v.ZP.label(f||(f=(0,p.Z)(["\n  display: block;\n"]))),E=v.ZP.input.attrs({type:"text"})(h||(h=(0,p.Z)(["\n  width: 200px;\n"]))),M=function(e){var n=e.value,t=e.onChange;return(0,N.jsxs)(q,{children:["Filter:",(0,N.jsx)(E,{name:"filter",value:n,onChange:t})]})},T=t(3639),B=t.n(T),J=function(){var e=(0,x.I0)(),n=y(),t=n.contacts,a=n.filter,r=n.loader,o=n.setFilter;(0,m.useEffect)((function(){e(k.mh.getContacts())}),[e]);var i=function(){if(0!==t.length&&"string"!==typeof t){var e=a.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}return[]}();return(0,N.jsxs)(C,{children:[(0,N.jsx)(Z,{children:"Phonebook"}),(0,N.jsx)(S,{}),(0,N.jsx)(Z,{children:"Contacts"}),(0,N.jsxs)("div",{children:[(0,N.jsx)(M,{value:a,onChange:function(e){var n=e.target.value;o(n)}}),(0,N.jsxs)("h3",{children:["Total contacts: ",i.length]})]}),r?B().threeCircles:(0,N.jsx)(D,{contacts:i})]})}}}]);
//# sourceMappingURL=428.7b041dce.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[948],{3309:function(n,e,t){t.d(e,{GF:function(){return s},fv:function(){return l},qR:function(){return c}});var r,i,o,u=t(168),a=t(5867),c=a.zo.form(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),l=a.zo.input(i||(i=(0,u.Z)(["\n  width: 300px;\n  height: 40px;\n  margin: 5px 0;\n"]))),s=a.zo.button(o||(o=(0,u.Z)(["\n  width: 160px;\n  height: 40px;\n  margin-top: 20px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: capitalize;\n  background-color: #fff;\n  border: 1px solid #c1c3cf;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  &:hover {\n    cursor: pointer;\n  }\n"])))},2948:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(4942),i=t(1413),o=t(9439),u=t(2791),a=t(3309),c=t(9434),l="NOT_FOUND";var s=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?s:r,o=t.maxSize,u=void 0===o?1:o,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),f=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:l},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return l}return{get:r,put:function(e,i){r(e)===l&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function p(){var e=f.get(arguments);if(e===l){if(e=n.apply(null,arguments),a){var t=f.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,s=l.memoizeOptions,f=void 0===s?t:s,d=Array.isArray(f)?f:[f],h=p(r),x=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return o=x.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:x,dependencies:h,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return i}var h,x,m,v,y=d(f),g=function(n){return n.contacts.items},b=y(g,(function(n){return n.filter}),(function(n,e){return n?n.filter((function(n){return n.name.toLowerCase().includes(null===e||void 0===e?void 0:e.toLowerCase())})):n})),j=t(3634),w=t(184),C=function(){var n=(0,u.useState)({name:"",number:""}),e=(0,o.Z)(n,2),t=e[0],l=e[1],s=t.name,f=t.number,p=(0,c.I0)(),d=(0,c.v9)(g),h=function(n){var e=n.target,t=e.name,o=e.value;l((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},t,o))}))};return(0,w.jsxs)(a.qR,{onSubmit:function(n){if(n.preventDefault(),d.find((function(n){return n.name.toLowerCase()===s.toLowerCase()||n.number===f})))return alert("".concat(s," or ").concat(f,"  is already in contacts"));p((0,j.uK)(t)),l({name:"",number:""})},children:[(0,w.jsx)("h2",{children:"ContactForm"}),(0,w.jsx)("label",{children:"Name"}),(0,w.jsx)(a.fv,{type:"text",onChange:h,value:s,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,w.jsx)("label",{children:"Number"}),(0,w.jsx)(a.fv,{type:"tel",onChange:h,value:f,name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,w.jsx)(a.GF,{type:"submit",children:"Add contact"})]})},z=t(168),k=t(5867),Z=k.zo.div(h||(h=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  & > * {\n    margin-right: 10px;\n  }\n"]))),A=k.zo.button(x||(x=(0,z.Z)(["\n  width: 100px;\n  height: 30px;\n  margin-left: 10px;\n  padding: 5px;\n  font-weight: 500;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #c1c3cf;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  &:hover {\n    cursor: pointer;\n  }\n"]))),F=function(n){var e=n.id,t=n.name,r=n.number,i=(0,c.I0)();return(0,w.jsxs)(Z,{children:[(0,w.jsxs)("h3",{children:[t,": "]}),(0,w.jsx)("p",{children:r}),(0,w.jsx)(A,{type:"button",onClick:function(){return i((0,j.GK)(e))},children:"Delete"})]})},q=k.zo.ul(m||(m=(0,z.Z)(["\n  padding-left: 0;\n"]))),E=function(){var n=(0,c.I0)(),e=(0,c.v9)(b);return(0,u.useEffect)((function(){n((0,j.yF)())}),[n]),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"ContactList"}),(0,w.jsx)(q,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,w.jsx)(F,{id:e,name:t,number:r},e)}))})]})},N=k.zo.div(v||(v=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=t(4808),L=function(){var n=(0,c.I0)();return(0,w.jsxs)(N,{children:[(0,w.jsx)("label",{children:"Find contacts by name"}),(0,w.jsx)(a.fv,{type:"text",onChange:function(e){var t=e.target.value;return n((0,I.G)(t))},name:"filter"})]})},O=(t(8512),t(4184),function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"phoneBookContainer",children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(C,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(L,{}),(0,w.jsx)(E,{})]})})})}}]);
//# sourceMappingURL=948.a94aa6cb.chunk.js.map
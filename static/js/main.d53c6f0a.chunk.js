(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(10),s=n.n(o),r=n(3),l=n(19),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))},d=(n(30),n(8)),u=(n(31),function(e){return e.todos.present}),j=function(e){return e.todos.present.length},b=function(e){return e.todos.present.filter((function(e){return!0===e.completed})).length},p=function(e){var t=e.todos,n=t.past,c=t.future;return Boolean(n.length||c.length)},O=n(5),h=n.n(O),x=n(15),f=n(2),m=function(e){var t=e.canUndo,n=e.canRedo,c=e.onUndo,a=e.onRedo;return Object(f.jsxs)("div",{className:"undo-redo",children:[Object(f.jsxs)("button",{onClick:c,disabled:!t,children:[Object(f.jsx)(x.b,{})," Undo"]}),Object(f.jsxs)("button",{onClick:a,disabled:!n,children:[Object(f.jsx)(x.a,{})," Redo"]})]})},v={onUndo:O.ActionCreators.undo,onRedo:O.ActionCreators.redo},y=m=Object(r.b)((function(e){return{canUndo:e.todos.past.length>0,canRedo:e.todos.future.length>0}}),v)(m),E=(n(35),function(){var e=function(){var e=Object(r.d)(j);return Object(f.jsxs)("span",{children:[Object(f.jsx)("strong",{children:e})," Item",1!==e?"s":""]})};return Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"Todo List"}),Object(f.jsx)(e,{}),Object(f.jsx)(y,{})]})}),g=n(4);var D=n(6),N=n(16),T=n(20),C=n.n(T),L=n(9),w=n(21),_=h()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(w.a)(e),[{value:t.payload,completed:!1}]);case"EDIT":return e.map((function(n){return n.value===t.payload.todo.value?Object(L.a)(Object(L.a)({},e),{},{value:t.payload.newValue}):n}));case"DELETE":return e.filter((function(e){return e.value!==t.payload.value}));case"UPDATE":return e.map((function(e){return e===t.payload?Object(L.a)(Object(L.a)({},e),{},{completed:!e.completed}):e}));case"DELETE_ALL":return t.payload;default:return e}})),A=Object(D.a)({todos:_}),S=Object(N.a)({key:"root",storage:C.a},A),k=Object(D.b)(S,void 0!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),I=Object(N.b)(k),R=(n(38),function(e){var t=e.inputValue,n=e.setInputValue,c=Object(r.c)(),a=Object(r.d)(j),o=Object(r.d)(p),s=function(){c({type:"DELETE_ALL",payload:[]}),window.localStorage.clear(),k.dispatch(O.ActionCreators.clearHistory())},l=function(){var e=Object(r.d)(b);return a===e&&0!==a?Object(f.jsx)("div",{className:"completed-status",children:Object(f.jsx)("p",{children:"Well Done! \ud83c\udf89 \ud83c\udf89"})}):a===e?null:Object(f.jsxs)("div",{className:"completed-status",children:[Object(f.jsxs)("p",{children:[0===e?"There are no":Object(f.jsx)("span",{children:e})," completed item",e>1&&"s"]}),Object(f.jsxs)("button",{disabled:!o,title:"Reset App",className:"btn-reset-app",onClick:s,children:[Object(f.jsx)(g.e,{}),Object(f.jsx)("span",{className:"btn-label",children:"Reset App (this will clear undo history)"})]})]})};return Object(f.jsxs)("footer",{children:[Object(f.jsx)(l,{}),Object(f.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),""!==t&&(c(function(e){return{type:"ADD",payload:e}}(t)),n(""))}(e,t)},children:[Object(f.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"type and press enter"}),Object(f.jsx)("button",{type:"submit",children:"add item"})]})]})}),U=(n(39),function(e){var t=e.children,n=Object(r.c)();return Object(f.jsxs)("div",{className:"list-wrapper",children:[Object(f.jsx)("div",{className:"list-toolbar",children:Object(f.jsxs)("button",{className:"btn-delete btn-delete-all",onClick:function(){n({type:"DELETE_ALL",payload:[]})},children:[Object(f.jsx)(g.c,{}),Object(f.jsx)("span",{className:"btn-label",children:"Clear all"})]})}),Object(f.jsx)("ol",{children:t})]})}),V=function(e){var t=a.a.useState(e.value),n=Object(d.a)(t,2),c=n[0],o=n[1];return Object(f.jsxs)("form",{onSubmit:function(t){return e.handleEdit(c)},children:[Object(f.jsx)("input",{type:"text",value:c,autoFocus:!0,onChange:function(e){return o(e.target.value)},placeholder:"type and press enter"}),Object(f.jsx)("button",{type:"submit",children:"update item"})]})},F=function(e){var t=e.item,n=a.a.useState(!1),c=Object(d.a)(n,2),o=c[0],s=c[1],l=Object(r.c)();return Object(f.jsxs)("li",{className:"list-item",children:[Object(f.jsx)("button",{disabled:o,className:"btn-complete ".concat(t.completed?"completed":""," "),onClick:function(){return function(e){l({type:"UPDATE",payload:e})}(t)},children:Object(f.jsx)(g.a,{})}),Object(f.jsx)("span",{className:"list-item-content ".concat(t.completed?"completed":""),children:o?Object(f.jsx)(V,{handleEdit:function(e){l(function(e,t){return{type:"EDIT",payload:{todo:e,newValue:t}}}(t,e))},value:t.value}):t.value}),Object(f.jsx)("button",{className:"btn-edit ".concat(o?"is-editing":""," "),onClick:function(){return s(!o)},children:Object(f.jsx)(g.d,{})}),Object(f.jsx)("button",{disabled:o,className:"btn-delete",onClick:function(){return function(e){l({type:"DELETE",payload:e})}(t)},children:Object(f.jsx)(g.b,{})})]})};var P=function(){var e=Object(r.d)(u),t=a.a.useState(""),n=Object(d.a)(t,2),c=n[0],o=n[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(E,{}),0===e.length?Object(f.jsxs)("div",{className:"app-blankstate",children:[Object(f.jsx)("p",{children:"(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b"}),Object(f.jsx)("p",{children:"You don\u2019t have any todos yet."})]}):Object(f.jsx)(U,{children:e.map((function(e,t){return Object(f.jsx)(F,{item:e},t)}))}),Object(f.jsx)(R,{inputValue:c,setInputValue:o})]})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(r.a,{store:k,children:Object(f.jsx)(l.a,{persistor:I,children:Object(f.jsx)(P,{})})})}),document.getElementById("root")),i()}},[[40,1,2]]]);
//# sourceMappingURL=main.d53c6f0a.chunk.js.map
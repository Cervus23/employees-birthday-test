(this["webpackJsonpemployees-birthday-test"]=this["webpackJsonpemployees-birthday-test"]||[]).push([[0],{15:function(e,t,s){e.exports={App:"App_App__16ZpL",appHr:"App_appHr__3xDhr"}},3:function(e,t,s){e.exports={main:"style_main__1u0WG",header:"style_header__KEQL5",employeesContainer:"style_employeesContainer__5r2z8",employees:"style_employees__1Z-hF",letterGroup:"style_letterGroup__3UZIV",letter:"style_letter__2JYJJ",employee:"style_employee__1clRa"}},32:function(e,t,s){},4:function(e,t,s){e.exports={employeesBirthdayContainer:"style_employeesBirthdayContainer__3Cnqh",header:"style_header__3g0Ek",birtdayHr:"style_birtdayHr__iwYUX",monthGroup:"style_monthGroup__1q1NW",month:"style_month__3LAVV",employee:"style_employee__bX_oS"}},57:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),r=s.n(a),c=s(8),l=s.n(c),o=(s(32),s(9)),i=s(7),p=s(6),u=s(5),d="SET_EMPLOYEES_LIST",m="SELECT_EMPLOYEE",y="DESELECT_EMPLOYEE",b={employeesList:[],selectedEmployees:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,s=t.type,n=t.payload;switch(s){case d:return Object(u.a)(Object(u.a)({},e),{},{employeesList:n});case m:return Object(u.a)(Object(u.a)({},e),{},{selectedEmployees:[].concat(Object(p.a)(e.selectedEmployees),[n])});case y:return Object(u.a)(Object(u.a)({},e),{},{selectedEmployees:Object(p.a)(e.selectedEmployees.filter((function(e){return e.id!==n.id})))});default:return Object(u.a)({},e)}},j=s(14),f=s.n(j),_=s(25),O=s(26),E=s.n(O),x=s(3),v=s.n(x),N=Object(i.b)((function(e){return{employeesList:e.employeesList,selectedEmployees:e.selectedEmployees}}),(function(e){return{setEmployeesList:function(t){e({type:d,payload:t})},selectEmployee:function(t){e({type:m,payload:t})},deselectEmployee:function(t){e({type:y,payload:t})}}}))((function(e){var t=e.employeesList,s=e.selectedEmployees,r=e.setEmployeesList,c=e.selectEmployee,l=e.deselectEmployee,o="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");Object(a.useEffect)((function(){0===t.length&&Object(_.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))()}),[r,t]);var i=function(e,t){var a=Object(p.a)(e.sort((function(e,t){return e.lastName>t.lastName?1:-1})).filter((function(e){return e.lastName[0]===t})));return Object(n.jsxs)("div",{className:v.a.letterGroup,children:[Object(n.jsx)("div",{className:v.a.letter,children:t}),Object(n.jsx)("div",{className:v.a.employeesGroup,children:a.length?a.map((function(e){return Object(n.jsxs)("div",{className:v.a.employee,children:[e.lastName," ",e.firstName,Object(n.jsx)("input",{type:"checkbox",checked:s.reduce((function(t,s){return s.id===e.id&&(t+=1),t}),0),className:v.a.checkbox,onChange:function(t){return function(e,t){return t.target.checked?c(e):l(e)}(e,t)}})]},e.id)})):Object(n.jsx)("div",{className:v.a.employee,children:"----"})})]},t)};return Object(n.jsxs)("div",{className:v.a.main,children:[Object(n.jsx)("div",{className:v.a.header,children:"Employees"}),Object(n.jsx)("div",{className:v.a.employeesContainer,children:t.length?o.map((function(e){return i(t,e)})):null})]})})),g=s(4),L=s.n(g),S=Object(i.b)((function(e){return{selectedEmployees:e.selectedEmployees}}))((function(e){var t=e.selectedEmployees,s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=function(e,t){var s=e.substring(0,e.indexOf("T")).split("-").reverse();return s[0]=+s[0],s[1]="".concat(t[+s[1]-1],","),s[2]+=" year",s.join(" ")};return Object(n.jsxs)("div",{className:L.a.employeesBirthdayContainer,children:[Object(n.jsx)("div",{className:L.a.header,children:"Employees birthday"}),Object(n.jsx)("hr",{className:L.a.birtdayHr}),Object(n.jsx)("div",{children:t.length>0?s.map((function(e,r){return function(e,t,r){var c=Object(p.a)(e.filter((function(e){return+(t=e.dob).substring(t.indexOf("-")+1,t.lastIndexOf("-"))-1===r;var t})));return c.length?Object(n.jsxs)("div",{className:L.a.monthGroup,children:[Object(n.jsx)("div",{className:L.a.month,children:t}),Object(n.jsx)("ul",{className:L.a.employees,children:c.map((function(e){return Object(n.jsxs)("li",{className:L.a.employee,children:[e.lastName," ",e.firstName," -"," ",a(e.dob,s)]},e.id)}))})]},t):null}(t,e,r)})):"No selected employees"})]})})),C=s(15),J=s.n(C),w=function(){try{var e=window.localStorage.getItem("app_state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),k=Object(o.b)(h,w);k.subscribe((function(){!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("app_state",t)}catch(s){console.log(s)}}(k.getState())}));var A=function(){return Object(n.jsxs)(i.a,{store:k,children:[Object(n.jsxs)("div",{className:J.a.App,children:[Object(n.jsx)(N,{}),Object(n.jsx)(S,{})]}),Object(n.jsx)("hr",{className:J.a.appHr})]})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,58)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),G()}},[[57,1,2]]]);
//# sourceMappingURL=main.c8afa82b.chunk.js.map
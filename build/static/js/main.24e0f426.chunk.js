(this.webpackJsonposteria=this.webpackJsonposteria||[]).push([[0],{17:function(n,e,t){n.exports=t(25)},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(13),c=t.n(i),o=(t(22),t(4)),u=t(1),l=t(2);function d(){var n=Object(u.a)(["\n    font-family: 'Alatsi', sans-serif;\n"]);return d=function(){return n},n}var s=l.b.div(d());function p(){var n=Object(u.a)(["\n    cursor: pointer;\n"]);return p=function(){return n},n}function m(){var n=Object(u.a)(["\n    color: black;\n    font-size: 12px;\n    margin-right: 30px;\n"]);return m=function(){return n},n}function f(){var n=Object(u.a)(["\n    font-size: 20px;\n    color: black;\n    text-shadow: 1px 1px 3px grey;\n"]);return f=function(){return n},n}function g(){var n=Object(u.a)(["\n    background-color: ",";\n    padding: 10px;\n    position: fixed;\n    width: 100%;\n    z-index: 999;\n    display: flex;\n    justify-content: space-between;\n"]);return g=function(){return n},n}var b=l.b.div(g(),"#FBFBDD"),v=Object(l.b)(s)(f()),x=l.b.div(m()),O=l.b.span(p());function h(n){var e=n.login,t=n.loggedIn,r=n.logout;return a.a.createElement(b,null,a.a.createElement(v,null,"OSTERIA"),a.a.createElement(x,null,"loading"!==t?a.a.createElement(a.a.Fragment,null,t?"Logged in.":"",t?a.a.createElement(O,{onClick:r},"Log Out"):a.a.createElement(O,{onClick:e},"Log In/ Sign Up ")):"loading..."))}function j(){var n=Object(u.a)(['\nheight: 200px;\nbackground-image: url("img/osteria-banner.jpeg");\nbackground-position: center;\nbackground-size: cover;\nfilter: contrast(75%);\n']);return j=function(){return n},n}var E=l.b.div(j()),k=t(3);function y(n){return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}var w=[{id:1,name:"Bruschetta",img:"/img/osteriabruschetta.jpg",section:"Antipasti/Insalata",price:14},{id:2,name:"Caprese",img:"/img/osteriacaprese.jpg",section:"Antipasti/Insalata",price:12},{id:3,name:"Osteria Caesar",img:"/img/ostiacaesar.jpeg",section:"Antipasti/Insalata",price:14},{id:4,name:"Insalata di Osteria",img:"/img/ostiasalad.jpeg",section:"Antipasti/Insalata",price:12},{id:5,name:"Carbonara",img:"/img/ostiacarbonara.jpeg",section:"Pasta",price:21},{id:6,name:"Tortellini Alla Amatriciana",img:"/img/ostiatortellini.jpeg",section:"Pasta",price:22},{id:7,name:"Cappellini Bolognese",img:"/img/cappelinibolognese.jpg",section:"Pasta",price:22},{id:8,name:"Linguine di Mare",img:"/img/linguinedimare.jpg",section:"Pasta",price:24},{id:9,name:"Tiramisu",img:"/img/ostiatiramisu.jpeg",section:"Dolce",price:8},{id:10,name:"Macarons",img:"/img/ostiamacarons.jpg",section:"Dolce",price:8}].reduce((function(n,e){return n[e.section]||(n[e.section]=[]),n[e.section].push(e),n}),{});function F(){var n=Object(u.a)(["\nheight: 100px;\npadding: 10px;\nfont-size: 20px;\nbackground-image: ","\nbackground-position: center;\nbackground-size: cover;\nfilter: contrast(75%);\nborder-radius: 7px;\nmargin-top: 5px;\ntransition-property: box-shadow margin-top filter;\ntransition-duration: .3s;\nbox-shadow: 0px 0px 2px 0px grey;\n&: hover {\n    cursor: pointer;\n    filter: contrast(100%);\n    margin-top: 0px;\n    margin-bottom: 5px;\n    box-shadow: 0px 0px 10px 0px grey;\n}\n"]);return F=function(){return n},n}function C(){var n=Object(u.a)(["\nposition: absolute;\nbackground-color: rgba(255, 255, 255, .5);\npadding: 5px;\n"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\ngap: 20px;\n"]);return S=function(){return n},n}var A=l.b.div(S()),D=Object(l.b)(s)(C()),z=l.b.div(F(),(function(n){var e=n.img;return"url(".concat(e,");")}));function B(){var n=Object(u.a)(["\nheight: 1000px;\nmargin: 0px 400px 50px 20px;\n"]);return B=function(){return n},n}var I=l.b.div(B());function P(n){var e=n.setOpenFood;return a.a.createElement(I,null,Object.entries(w).map((function(n){var t=Object(k.a)(n,2),r=t[0],i=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null," ",r," "),a.a.createElement(A,null,i.map((function(n){return a.a.createElement(z,{img:n.img,onClick:function(){e(n)}},a.a.createElement(D,null,a.a.createElement("div",null,n.name),a.a.createElement("div",null,y(n.price))))}))))})))}var q=t(5);function M(){var n=Object(u.a)(["\nwidth: 23px;\ncolor: ","\nfont-size: 20px;\ntext-align: center;\ncursor: pointer;\npadding: -12px;\nline-height: 23px;\nmargin: 0px 10px;\nborder: 1px solid ",";\n","\n&:hover {\n    background-color: #ffe3e3;\n}\n"]);return M=function(){return n},n}function T(){var n=Object(u.a)(["\ndisplay: flex;\nheight: 24px;\n"]);return T=function(){return n},n}function L(){var n=Object(u.a)(["\nfont-size: 18px;\nwidth: 24x;\ntext-align: center;\nborder: none;\noutline: none;\n"]);return L=function(){return n},n}var N=l.b.input(L()),U=Object(l.b)(s)(T()),W=l.b.div(M(),"#FBFBDD","#FBFBDD",(function(n){return n.disabled&&"opacity: 0.5;\n    pointer-events: none;\n    "}));function V(n){var e=n.quantity;return a.a.createElement(U,null,a.a.createElement("div",null," Quantity: "),a.a.createElement(W,{onClick:function(){e.setValue(e.value-1)},disabled:1===e.value}," -  "),a.a.createElement(N,e),a.a.createElement(W,{onClick:function(){e.setValue(e.value+1)}}," +  "))}function Y(){var n=Object(u.a)(["\ncursor: pointer;\n"]);return Y=function(){return n},n}function G(){var n=Object(u.a)(["\nmargin-right: 10px;\ncursor: pointer;\n"]);return G=function(){return n},n}function J(){var n=Object(u.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\n"]);return J=function(){return n},n}var R=l.b.div(J()),Q=l.b.input(G()),$=l.b.label(Y());function H(n){var e=n.modifications,t=n.checkModification;return a.a.createElement(R,null,e.map((function(n,e){return a.a.createElement($,null,a.a.createElement(Q,{type:"checkbox",checked:n.checked,onClick:function(){t(e)}}),n.name)})))}function K(n){var e=Object(r.useState)(n||X.map((function(n){return{name:n,checked:!1}}))),t=Object(k.a)(e,2),a=t[0],i=t[1];return{checkModification:function(n){var e=Object(q.a)(a);e[n].checked=!e[n].checked,i(e)},modifications:a}}var X=["Add Shrimp","Add Chicken","Extra Meat","Extra Sauce","No Sauce","Sauce On Side","Gluten-Free","Dairy Allergy","No Meat"];function Z(){var n=Object(u.a)(["\ntop: 100px;\nfont-size: 30px;\npadding: 5px 40px;\n"]);return Z=function(){return n},n}function _(){var n=Object(u.a)(["\nmin-height: 200px;\nmargin-bottom: 20px;\n","\nbackground-position: center;\nbackground-size: cover;\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\nposition: fixed;\nheight: 100%;\nwidth: 100%;\ntop: 0px;\nbackground-color: black;\nopacity: 0.7;\nz-index: 11;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\nmargin: 10px;\ncolor: black;\nheight: 20px;\nborder-radius: 5px;\npadding: 10px;\ntext-align: center;\nwidth: 200px;\ncursor: pointer;\nbackground-color: ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\nbox-shadow: 0px -2px 10px 0px grey;\nheight: 60px;\ndisplay: flex;\njustify-content: center;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\noverflow: auto;\nmin-height: 100px;\npadding: 0px 40px;\npadding-bottom: 80px;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\nwidth: 500px;\nbackground-color: white;\nposition: fixed;\ntop: 75px;\nz-index: 11;\nmax-height: calc(100% - 100px);\nleft: calc(50% - 250px);\ndisplay: flex;\nflex-direction: column;\n"]);return an=function(){return n},n}var cn=l.b.div(an()),on=l.b.div(rn()),un=l.b.div(tn()),ln=Object(l.b)(s)(en(),"#FBFBDD"),dn=l.b.div(nn()),sn=l.b.div(_(),(function(n){var e=n.img;return"background-image: url(".concat(e,");")})),pn=Object(l.b)(D)(Z());function mn(n){return n.quantity*(n.price+1*n.modifications.filter((function(n){return n.checked})).length)}function fn(n){var e=n.openFood,t=n.setOpenFood,i=n.setOrders,c=n.orders,u=function(n){var e=Object(r.useState)(n||1),t=Object(k.a)(e,2),a=t[0],i=t[1];return{value:a,setValue:i,onChange:function(n){+n.target.value>=1?i(+n.target.value):i(1)}}}(e&&e.quantity),l=K(e.modifications),d=e.index>-1;function s(){t()}var p=Object(o.a)(Object(o.a)({},e),{},{quantity:u.value,modifications:l.modifications});return a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,{onClick:s}),a.a.createElement(cn,null,a.a.createElement(sn,{img:e.img},a.a.createElement(pn,null," ",e.name," ")),a.a.createElement(on,null,a.a.createElement(V,{quantity:u}),"Pasta"===e.section&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Select Any Requests"),a.a.createElement(H,l))),a.a.createElement(un,null,a.a.createElement(ln,{onClick:d?function(){var n=Object(q.a)(c);n[e.index]=p,i(n),s()}:function(){i([].concat(Object(q.a)(c),[p])),s()}},d?"Update Order":"Add to Cart:",y(mn(p))))))}function gn(n){return n.openFood?a.a.createElement(fn,n):null}function bn(){var n=Object(u.a)(["\n    body {\n      margin: 0;\n      font-family: 'Open Sans', sans-serif;\n    }\n\n    h1, h2, h3 {\n      font-family: 'Alatsi', sans-serif;\n    }\n"]);return bn=function(){return n},n}var vn=Object(l.a)(bn()),xn=t(6);function On(){var n=Object(u.a)(["\ncolor: grey;\nfont-size: 10px;\n"]);return On=function(){return n},n}function hn(){var n=Object(u.a)(["\npadding: 10px 0px;\ndisplay: flex;\ngrid-template-columms: 20px 150px 20px 60px;\njustify-content: space-between;\n"]);return hn=function(){return n},n}function jn(){var n=Object(u.a)(["\n    padding: 10px 0px;\n    border-bottom: 1px solid grey;\n    ","\n"]);return jn=function(){return n},n}function En(){var n=Object(u.a)(["\n    padding: 20px;\n    height: 100%;\n"]);return En=function(){return n},n}function kn(){var n=Object(u.a)(["\n    position: fixed;\n    right: 0px;\n    top: 48px;\n    width: 340px;\n    background-color: white;\n    height: calc(100% - 48px);\n    z-index: 10;\n    box-shadow: 4px 0px 5px 4px grey;\n    display: flex;\n    flex-direction: column;\n"]);return kn=function(){return n},n}var yn=window.firebase.database(),wn=l.b.div(kn()),Fn=Object(l.b)(on)(En()),Cn=l.b.div(jn(),(function(n){return n.editable?"\n    &:hover {\n        cursor: pointer;\n        background-color: #e7e7e7;\n    }\n    ":"\n        pointer-events: none;\n        "})),Sn=l.b.div(hn()),An=l.b.div(On());function Dn(n){var e=n.orders,t=n.setOrders,r=n.setOpenFood,i=n.login,c=n.loggedIn,u=n.setOpenOrderDialog,l=e.reduce((function(n,e){return n+mn(e)}),0),d=.0825*l,s=l+d;return a.a.createElement(wn,null,0===e.length?a.a.createElement(Fn,null,"Your order is empty."):a.a.createElement(Fn,null," ",a.a.createElement(Cn,null,"Your Order:")," ",e.map((function(n,i){return a.a.createElement(Cn,{editable:!0},a.a.createElement(Sn,{onClick:function(){r(Object(o.a)(Object(o.a)({},n),{},{index:i}))}},a.a.createElement("div",null,n.quantity),a.a.createElement("div",null,n.name),a.a.createElement("div",{style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),function(n){var r=Object(q.a)(e);r.splice(n,1),t(r)}(i)}},a.a.createElement("span",{role:"img","aria-label":"trash can"}," \ud83d\uddd1\ufe0f ")),a.a.createElement("div",null,y(mn(n)))),a.a.createElement(An,null,n.modifications.filter((function(n){return n.checked})).map((function(n){return n.name})).join(", ")))})),a.a.createElement(Cn,null,a.a.createElement(Sn,null,a.a.createElement("div",null),a.a.createElement("div",null,"Sub-Total"),a.a.createElement("div",null,y(l))),a.a.createElement(Sn,null,a.a.createElement("div",null),a.a.createElement("div",null,"Tax"),a.a.createElement("div",null,y(d))),a.a.createElement(Sn,null,a.a.createElement("div",null),a.a.createElement("div",null,"Total"),a.a.createElement("div",null,y(s))))),e.length>0&&a.a.createElement(un,null,a.a.createElement(ln,{onClick:function(){c?(u(!0),function(n,e){var t=e.email,r=e.displayName,a=yn.ref("orders").push(),i=n.map((function(n){return Object.keys(n).reduce((function(e,t){return n[t]?"modifications"===t?Object(o.a)(Object(o.a)({},e),{},Object(xn.a)({},t,n[t].filter((function(n){return n.checked})).map((function(n){return n.name})))):Object(o.a)(Object(o.a)({},e),{},Object(xn.a)({},t,n[t])):e}),{})}));a.set({order:i,email:t,displayName:r})}(e,c)):i()}},"Checkout")))}var zn=window.firebase.auth(),Bn=new window.firebase.auth.GoogleAuthProvider;function In(n){var e=n.openOrderDialog,t=n.setOpenOrderDialog,r=n.setOrders;return e?a.a.createElement(a.a.Fragment,null,a.a.createElement(dn,null),a.a.createElement(cn,null,a.a.createElement(on,null,a.a.createElement("h2",null," Your order is on the way!"),a.a.createElement("p",null," Thank you for choosing Osteria! We appreciate your business!")),a.a.createElement(un,null,a.a.createElement(ln,{onClick:function(){r([]),t()}},"Add to Order")))):a.a.createElement("div",null)}var Pn=function(){var n=function(){var n=Object(r.useState)(),e=Object(k.a)(n,2);return{openFood:e[0],setOpenFood:e[1]}}(),e=function(){var n=Object(r.useState)([]),e=Object(k.a)(n,2);return{orders:e[0],setOrders:e[1]}}(),t=function(){var n=Object(r.useState)("loading"),e=Object(k.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){zn.onAuthStateChanged((function(n){n?a(n):a()}),(function(n){console.log(n)}))}),[]),{login:function(){zn.signInWithPopup(Bn)},logout:function(){zn.signOut().then((function(){})).catch((function(n){}))},loggedIn:t}}(),i=function(){var n=Object(r.useState)(),e=Object(k.a)(n,2);return{openOrderDialog:e[0],setOpenOrderDialog:e[1]}}();return function(n){var e=n.openFood,t=n.orders;Object(r.useEffect)((function(){document.title=e?e.name:0===t.length?"Osteria App":"[".concat(t.length,"] items in your order!")}))}(Object(o.a)(Object(o.a)({},n),e)),a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null),a.a.createElement(In,Object.assign({},i,e)),a.a.createElement(gn,Object.assign({},n,e)),a.a.createElement(h,t),a.a.createElement(Dn,Object.assign({},e,n,t,i)),a.a.createElement(E,null),a.a.createElement(P,n))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.24e0f426.chunk.js.map
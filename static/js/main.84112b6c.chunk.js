(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(40),r=n.n(a),s=(n(48),n.p+"static/media/logo.01817d0a.svg"),o=n(13),l=n(14),j=n(3),d=n(9),u=n(41),h=n.n(u),f=(n(69),n(1));var b=function(e){var t=Object(j.f)();function n(){window.dataLayer.push(arguments)}return n("js",new Date),h.a.v4({fallbackUrls:["https://ifconfig.co/ip"]}).then((function(e){return n("set",{user_id:e})})),n("config","UA-215552036-1"),Object(f.jsx)("div",{className:"outer-container",children:Object(f.jsxs)("div",{className:"header-container",children:[Object(f.jsxs)("div",{className:"left-side-icons",children:[Object(f.jsx)(d.c,{className:"header-search",size:"25px",onClick:function(){t("/search")}}),Object(f.jsx)(d.d,{className:"header-search",size:"25px",onClick:function(){t("/EMVid")}})]}),Object(f.jsx)("img",{className:"header-logo",src:s,alt:"header-icon",onClick:function(){t("/")}}),Object(f.jsxs)("div",{className:"right-side-icons",children:[Object(f.jsx)(o.a,{className:"header-user",size:"25px",onClick:function(){t("/more")}}),Object(f.jsx)(l.a,{className:"header-user",size:"25px",onClick:function(){t("/profile")}})]})]})})};n(28);var m=function(e){var t=e.icon,n=e.linkTo,c=e.text,i=Object(j.f)();return Object(f.jsxs)("div",{className:"navbar-item-container",onClick:function(){i(n)},children:[t,c]})};var g=function(e){return Object(f.jsxs)("div",{className:"nav-bar-container",children:[Object(f.jsx)(m,{icon:Object(f.jsx)(d.d,{size:"25px"}),text:"EMVid",linkTo:"/EMVid"}),Object(f.jsx)(m,{icon:Object(f.jsx)(o.a,{size:"25px"}),text:"More",linkTo:"/more"}),Object(f.jsx)(m,{icon:Object(f.jsx)(o.b,{size:"25px"}),text:"Home",linkTo:"/"}),Object(f.jsx)(m,{icon:Object(f.jsx)(l.b,{size:"25px"}),text:"Search",linkTo:"/search"}),Object(f.jsx)(m,{icon:Object(f.jsx)(l.a,{size:"25px"}),text:"Profile",linkTo:"/profile"})]})},x=n(12);n(71);var O=function(e){var t=e.title,n=e.link,c=e.color,i=Object(j.f)();return Object(f.jsx)("div",{className:"category-card",style:{backgroundColor:c},onClick:function(){i(n)},children:t})};n(72);var p=function(e){var t=Object(c.useRef)(Object(f.jsx)("input",{}));return Object(f.jsxs)("div",{className:"searchbox-container",onClick:function(){t.current.focus()},children:[Object(f.jsxs)("div",{className:"searchbox-input-row",children:[Object(f.jsx)(d.c,{size:"20px"}),Object(f.jsx)("input",{ref:t,className:"seachbox-input",placeholder:"Search",type:"text",onClick:function(){}})]}),Object(f.jsxs)("div",{className:"searchbox-result-container",children:[Object(f.jsx)("div",{className:"searchbox-result-item",children:" search result item "}),Object(f.jsx)("div",{className:"searchbox-result-item",children:" search result item "}),Object(f.jsx)("div",{className:"searchbox-result-item",children:" search result item "})]})]})};n(11);var v=function(e){return Object(f.jsxs)("div",{className:"screen-container",children:[Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"category-screen",children:[{title:"India",link:"/menu/india",color:"greenyellow"},{title:"Health",link:"/menu/health",color:"pink"},{title:"Disaster",link:"/menu/health",color:"#ee5253"},{title:"Training",link:"/menu/health",color:"#1dd1a1"},{title:"Alert",link:"/menu/health",color:"#ffcccc"},{title:"Bussiness",link:"/menu/health",color:"#17c0eb"},{title:"Technology",link:"/menu/india",color:"#48dbfb"},{title:"Crime",link:"/menu/health",color:"#ff6b6b"},{title:"Social",link:"/menu/india",color:"#1dd1a1"},{title:"Follow Us",link:"/follow-us",color:"#12CBC4"},{title:"Contact Us",link:"/contact-us",color:"#ff9ff3"},{title:"Our Magazine",link:"/our-magazine",color:"#D980FA"},{title:"Privacy Policy",link:"/privacy-policy",color:"#FFC312"}].map((function(e){return Object(f.jsx)(O,{title:e.title,link:e.link,color:e.color},e.title)}))})]})},y=n(5),k=n(42),w=Object(k.create)({baseURL:"https://jsonplaceholder.typicode.com/todos/1"}),N=n.p+"static/media/loader.205700a2.gif";var z=function(e){return Object(f.jsxs)("div",{className:"loader",children:[" ",Object(f.jsx)("img",{src:N,className:"loader-icon",alt:"loader-icon"}),Object(f.jsx)("br",{}),"loading your content from server ...."]})};n(139);var C=function(e){var t=e.category,n=e.title,i=e.description,a=e.link,r=Object(j.f)(),s=Object(c.useRef)("");return Object(f.jsxs)("div",{className:"story-card",onClick:function(){s.current.click()},children:[Object(f.jsx)("div",{className:"story-card-category",children:t}),Object(f.jsx)("div",{className:"story-card-title",children:n}),Object(f.jsx)("div",{className:"story-card-description",children:i}),Object(f.jsxs)("div",{ref:s,className:"story-card-read-more",onClick:function(){r(a)},children:["Read More \xa0",Object(f.jsx)(d.a,{size:"24px"})]})]})},D=n(43);var E=function(e){var t=Object(D.a)({threshold:0}),n=t.ref,i=t.inView,a=Object(c.useState)(10),r=Object(y.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(""),j=Object(y.a)(l,2),u=j[0],h=j[1],b=Object(c.useState)([{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/search"},{catagory:"health",image:"https://emergencymanager.in/media/nerve-cells-2213009__4802.jpg",title:"jai hind , riots in india",description:"Have you ever faced difficulty in recognising people.?Do we feel that a complete stranger looks familiar? Do you wonder how our brain recognizes faces? Emergency Manager magazine has brought answers",link:"/"}]),m=Object(y.a)(b,2),g=m[0];return m[1],Object(c.useEffect)((function(){return w.get("").then((function(e){return e.data})).then(h),function(){}}),[]),Object(c.useEffect)((function(){return!0===i&&w.get("").then((function(e){return e.data})).then(o(s+1)).then(console.log(s)),function(){}}),[i]),Object(f.jsxs)("div",{className:"screen-container",children:[""===u&&Object(f.jsx)(z,{}),""!==u&&Object(f.jsxs)("div",{className:"home-content",children:[g.map((function(e){return Object(f.jsx)(C,{title:e.title,description:e.description,category:e.catagory,link:e.link})})),Object(f.jsxs)("div",{className:"screen-loading",ref:n,children:[Object(f.jsx)(d.b,{className:"rotate",size:"20px"}),"Please wait, loading content"]})]})]})};var M=function(e){var t=Object(c.useState)(""),n=Object(y.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){return w.get("").then((function(e){return e.data})).then(a),function(){}}),[]),Object(f.jsxs)("div",{className:"screen-container",children:[""===i&&Object(f.jsx)(z,{}),""!==i&&Object(f.jsxs)("div",{className:"content",children:["content ",i.title]})]})};var _=function(e){var t=Object(c.useState)(""),n=Object(y.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){return w.get("").then((function(e){return e.data})).then(a),function(){}}),[]),Object(f.jsxs)("div",{className:"screen-container",children:[""===i&&Object(f.jsx)(z,{}),""!==i&&Object(f.jsx)("div",{className:"category-screen"})]})};var S=function(e){var t=Object(c.useState)(""),n=Object(y.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){return w.get("").then((function(e){return e.data})).then(a),function(){}}),[]),Object(f.jsxs)("div",{className:"screen-container",children:[""===i&&Object(f.jsx)(z,{}),""!==i&&Object(f.jsxs)("div",{className:"content",children:["content ",i.title]})]})};var T=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(b,{}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/search/",element:Object(f.jsx)(v,{})}),Object(f.jsx)(j.a,{path:"/profile",element:Object(f.jsx)(M,{})}),Object(f.jsx)(j.a,{path:"/more",element:Object(f.jsx)(_,{})}),Object(f.jsx)(j.a,{path:"/EMVid",element:Object(f.jsx)(S,{})}),Object(f.jsx)(j.a,{path:"/",element:Object(f.jsx)(E,{})})]}),Object(f.jsx)(g,{})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),H()},28:function(e,t,n){},48:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.84112b6c.chunk.js.map
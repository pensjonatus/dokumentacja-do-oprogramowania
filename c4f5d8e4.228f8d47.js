(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3],{111:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(100),s=n.n(c),o=n(93),l=n(86);a.a=function(e){var a=Object(t.useRef)(!1),c=Object(t.useRef)(null),i=Object(o.useHistory)(),u=Object(l.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,m=function(){a.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(20),n.e(24)]).then(n.bind(null,117)),n.e(15).then(n.t.bind(null,116,7))]).then((function(e){!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=d+n.url;document.createElement("a").href=t,i.push(t)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(t.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:h,onBlur:h,ref:c}))}},81:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(100),s=n.n(c),o=n(102),l=n(95),i=n(86),u=n(87),d=n(82),m=n.n(d);a.default=function(){var e=Object(i.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(o.a,{title:a.title,description:"Darmowa ksi\u0105\u017cka o tworzeniu dokumentacji do oprogramowania"},r.a.createElement("header",{className:s()("hero hero--primary",m.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("img",{className:m.a.coverImage,alt:"Ok\u0142adka ksi\u0105\u017cki",src:Object(u.a)("img/okladka.png")})),r.a.createElement("div",{className:s()("col-sm",m.a.welcomeOptions)},r.a.createElement("h1",{className:m.a.bookTitle},a.title),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(l.a,{className:s()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/przedslowie")},"Czytaj online")))))),r.a.createElement("main",null))}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{1750:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blocks",function(){return t(2257)}])},3342:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(5893),o=t(9008),r=t(5365),i=function(e){var n,t,i=e.page,c=void 0===i?"HOME":i,s=e.title,l=e.description,u=s||(null===(n=r.Z.PAGEMETA[c.toUpperCase()])||void 0===n?void 0:n.TITLE)||r.Z.PAGEMETA.TITLE,g=l||(null===(t=r.Z.PAGEMETA[c.toUpperCase()])||void 0===t?void 0:t.DESCRIPTION)||r.Z.PAGEMETA.DESCRIPTION,d="https://fchain.live";return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:u},"title"),(0,a.jsx)("meta",{name:"description",content:g}),(0,a.jsx)("link",{rel:"canonical",href:d}),(0,a.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"keywords",content:"fchain, explorer, fcx, search, blockchain, fexplorer"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_IN"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:description",content:g}),(0,a.jsx)("meta",{property:"og:url",content:d}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(d,"/og_meta_image.jpg")}),(0,a.jsx)("meta",{property:"og:image:url",content:"".concat(d,"/og_meta_image.jpg")}),(0,a.jsx)("meta",{property:"og:image:secure_url",content:"".concat(d,"/og_meta_image.jpg")}),(0,a.jsx)("meta",{property:"og:image:alt",content:"Visit fchain.live"}),(0,a.jsx)("meta",{property:"og:title",content:u}),(0,a.jsx)("meta",{property:"og:site_name",content:"FUDX Blockchain Explorer"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:description",content:g}),(0,a.jsx)("meta",{name:"twitter:title",content:u}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(d,"/og_meta_image.jpg")})]})}},1337:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(5893),o=(t(7294),t(9521)),r=t(3837),i=t.n(r),c=t(7124);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){s(e,n,t[n])}))}return e}function u(e){var n=e.columns,t=e.data,r=void 0===t?[]:t,s=e.paginate,u=void 0===s||s,g=(0,o.useTable)({data:r,columns:n},o.useSortBy,o.usePagination),d=g.getTableProps,_=g.getTableBodyProps,p=g.headerGroups,f=g.prepareRow,m=g.page,h=g.rows,x=g.canPreviousPage,j=g.canNextPage,P=g.pageOptions,b=g.pageCount,v=g.gotoPage,y=g.nextPage,N=g.previousPage,O=g.setPageSize,S=g.state,C=S.pageIndex,T=S.pageSize,E={canPreviousPage:x,canNextPage:j,pageOptions:P,pageCount:b,gotoPage:v,nextPage:y,previousPage:N,setPageSize:O,pageIndex:C,pageSize:T,handleStartOfPageClick:function(){return v(0)},handlePreviousPageClick:function(){return N()},handleNextPageClick:function(){return y()},handleEndOfPageClick:function(){return v(b-1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:i().tableContainer,children:[(0,a.jsxs)("table",l({className:i().table},d(),{children:[(0,a.jsx)("thead",{className:i().thead,children:p.map((function(e){return(0,a.jsx)("tr",l({className:i().tr},e.getHeaderGroupProps(),{children:e.headers.map((function(e){return(0,a.jsxs)("th",l({className:i().th},e.getHeaderProps(e.getSortByToggleProps()),{children:[e.render("Header"),(0,a.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),(0,a.jsx)("tbody",l({className:i().tbody},_(),{children:(u?m:h).map((function(e){return f(e),(0,a.jsx)("tr",l({className:i().tr},e.getRowProps(),{children:e.cells.map((function(e){return(0,a.jsx)("td",l({className:i().td},e.getCellProps(),{children:e.render("Cell")}))}))}))}))}))]})),0===r.length&&(0,a.jsx)("div",{className:i().noRecords,children:"No Records"})]}),b>1&&u&&(0,a.jsx)("div",{style:{marginBottom:"1rem"},children:(0,a.jsx)(c.Z,{controls:E,isStaticPanination:u})})]})}},1988:function(e,n,t){"use strict";t.d(n,{Z:function(){return a.Z}});var a=t(1337)},691:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(5893),o=t(5365),r=t(4731),i=t.n(r),c=t(5697),s=t.n(c),l=t(7937),u=function(e){var n=e.className,t=void 0===n?"":n,r=e.size,c=void 0===r?"2.5rem":r,s=e.color,u={"--color":void 0===s?o.Z.COLORS.NEXUS_BLUE:s,"--c-size":c};return(0,a.jsx)("div",{className:(0,l.yI)(t,i().loader),style:u,children:(0,a.jsxs)("div",{className:i().circle,children:[(0,a.jsx)("div",{className:i()["circle-chord"]}),(0,a.jsx)("div",{className:i()["circle-chord"]}),(0,a.jsx)("div",{className:i()["circle-chord"]})]})})},g=u;u.propTypes={size:s().string,color:s().string};var d=function(e){var n=e.size,t=void 0===n?"2.5rem":n,r=e.color,c={"--color":void 0===r?o.Z.COLORS.NEXUS_BLUE:r,"--d-size":t};return(0,a.jsx)("div",{className:i().loader,style:c,children:(0,a.jsxs)("div",{className:i().holder,children:[(0,a.jsx)(_,{}),(0,a.jsx)(_,{}),(0,a.jsx)(_,{}),(0,a.jsx)(_,{})]})})},_=function(){return(0,a.jsx)("div",{className:i().dot})},p=d;function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){f(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function x(e){var n=e.type,t=h(e,["type"]);return n===o.Z.LOADER.DOT?(0,a.jsx)(p,m({},t)):(0,a.jsx)(g,m({},t))}d.propTypes={size:s().string,color:s().string},x.propTypes={type:s().oneOf(["circle","dot"]),size:s().string,color:s().string},x.defaultProps={type:o.Z.LOADER.CIRCLE,size:"3rem",color:o.Z.COLORS.NEXUS_BLUE}},7124:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(5893),o=t(6834),r=t.n(o),i=t(7516),c=t(9875),s=function(e){var n=e.controls,t=e.isStaticPanination,o=n.canPreviousPage,s=n.canNextPage,l=n.pageCount,u=n.gotoPage,g=n.setPageSize,d=n.pageIndex,_=n.pageSize,p=t?" ".concat(d+1," of ").concat(l):"".concat(d+1," ").concat(l!=1/0?"of ".concat(l):""),f=d+1,m=l,h=!!t||l!=1/0;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:r().pagination,children:[(0,a.jsxs)("span",{className:r().pagination__btn,children:[(0,a.jsx)("button",{type:"secondary",className:r().pagination__btn__icon,onClick:function(){u(0)},disabled:!o,children:(0,a.jsx)(i.u8L,{color:"inherit"})}),(0,a.jsx)("button",{className:r().pagination__btn__icon,type:"secondary",onClick:function(){u(d-1)},disabled:!o,children:(0,a.jsx)(i.gbs,{color:"inherit"})}),(0,a.jsxs)("span",{className:r().pagination__btn__page,children:["Page",(0,a.jsx)("strong",{children:p})]}),(0,a.jsx)("button",{className:r().pagination__btn__icon,type:"secondary",onClick:function(){u(d+1)},disabled:!s,children:(0,a.jsx)(i.lU2,{color:"inherit"})}),h&&(0,a.jsx)("button",{className:r().pagination__btn__icon,type:"secondary",onClick:function(){u(l-1)},disabled:!s,children:(0,a.jsx)(i.dn6,{color:"inherit"})})]}),(0,a.jsxs)("div",{className:r().pagination__goToPage,children:[(0,a.jsxs)("span",{className:r().pagination__goToPage__pageSelect,children:["Go to page:",(0,a.jsx)("input",{type:"number",defaultValue:f,onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;(0,c.Ds)((function(){return u(n)}),2e3)},min:1,max:m,style:{width:"100px"}})]}),(0,a.jsx)("select",{className:r().pagination__goToPage__pageDropdown,value:_,onChange:function(e){g(Number(e.target.value))},children:[10,25,50,100].map((function(e){return(0,a.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})})}},2257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),o=t(3342),r=t(1618),i=t(8767),c=t(691),s=t(1988),l=t(5365),u=t(7294),g=t(6374),d=t(7124),_=t(2403),p=t(9092);function f(){var e=(0,u.useState)(10),n=e[0],t=e[1],o=(0,u.useState)(0),r=o[0],f=o[1],m=(0,u.useState)(1),h=m[0],x=m[1],j=(0,u.useState)(0),P=j[0],b=j[1],v=(0,_.LN)(),y=v.network,N=v.getBlocks,O=(0,i.useQuery)(["blocks",n,r,y.name],N),S=O.isLoading,C=O.data,T=O.error,E=[{Header:"Block",accessor:"height",Cell:function(e){return(0,a.jsx)("a",{href:"/scan/".concat(e.value),children:e.value})}},{Header:"Timestamp",accessor:"timestamp",Cell:function(e){return new Date(1e3*e.value).toLocaleTimeString()}},{Header:"Mint",accessor:"mint",Cell:function(e){return e.value.toFixed(2)}},{Header:"TXNs",accessor:"tx",Cell:function(e){return e.value.length}},{Header:"Channel",accessor:"channel",key:"channel",Cell:function(e){return l.Z.CHANNELS[e.value]}}];if((0,u.useEffect)((function(){t(10),f(0),x(1),b(0)}),[y.name]),(0,u.useEffect)((function(){if(C){var e=C[0].height;e>P&&b(e)}}),[C,n]),(0,u.useEffect)((function(){p.ZP.log("setting total pages"),x((0,g.hU)(P,n))}),[P,n,y]),S)return(0,a.jsx)("div",{style:{display:"grid",placeItems:"center",minHeight:"200px",margin:"auto"},children:(0,a.jsx)(c.Z,{type:"circle",size:"5rem"})});if(T)return(0,a.jsx)("pre",{children:JSON.stringify(T,null,2)});if(C){var k={canPreviousPage:r>0,canNextPage:r<h-1,pageCount:h,gotoPage:function(e){f(e)},setPageSize:function(e){f(0),t(e)},pageIndex:r,pageSize:n,handleStartOfPageClick:function(){f(0)},handlePreviousPageClick:function(){f(r-1)},handleNextPageClick:function(){f(r+1)}};return(0,a.jsxs)("div",{style:{overflow:"visible"},children:[(0,a.jsx)(s.Z,{columns:E,data:C,paginate:!1}),(0,a.jsx)("div",{style:{marginBottom:"1rem"},children:(0,a.jsx)(d.Z,{controls:k,isStaticPanination:!1})})]})}}function m(){return(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(o.Z,{page:"blocks"}),(0,a.jsx)(f,{})]})}},3837:function(e){e.exports={tableContainer:"Table_tableContainer__KonQP",table:"Table_table__2hmap",thead:"Table_thead__dLx44",th:"Table_th__LzIb2",tbody:"Table_tbody__iBkH3",tr:"Table_tr__1t7PP",td:"Table_td__f7JH9",noRecords:"Table_noRecords___JVBk"}},4731:function(e){e.exports={loader:"Loader_loader__XdP__",circle:"Loader_circle__kK_vB","circle-chord":"Loader_circle-chord__3rFuu",spin:"Loader_spin___BLy6",holder:"Loader_holder__rQJCR",dot:"Loader_dot__E3VLA",motion1:"Loader_motion1__n9WJv",motion2:"Loader_motion2__5Eche",motion3:"Loader_motion3__4_6sQ"}},6834:function(e){e.exports={pagination:"Pagination_pagination__0NRDZ",pagination__btn:"Pagination_pagination__btn__hy0LX",pagination__btn__icon:"Pagination_pagination__btn__icon__HQgBh",pagination__btn__page:"Pagination_pagination__btn__page__4deSP",pagination__goToPage:"Pagination_pagination__goToPage__A2r_7",pagination__goToPage__pageSelect:"Pagination_pagination__goToPage__pageSelect__dSVWl",pagination__goToPage__pageDropdown:"Pagination_pagination__goToPage__pageDropdown__bXLr_"}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[318,802,618,774,888,179],(function(){return n=1750,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
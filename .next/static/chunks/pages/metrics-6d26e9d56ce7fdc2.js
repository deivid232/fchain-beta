(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{2638:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/metrics",function(){return r(5536)}])},3342:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),o=r(9008),i=r(5365),c=function(e){var t,r,c=e.page,s=void 0===c?"HOME":c,a=e.title,l=e.description,u=a||(null===(t=i.Z.PAGEMETA[s.toUpperCase()])||void 0===t?void 0:t.TITLE)||i.Z.PAGEMETA.TITLE,d=l||(null===(r=i.Z.PAGEMETA[s.toUpperCase()])||void 0===r?void 0:r.DESCRIPTION)||i.Z.PAGEMETA.DESCRIPTION,p="https://fchain.live";return(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:u},"title"),(0,n.jsx)("meta",{name:"description",content:d}),(0,n.jsx)("link",{rel:"canonical",href:p}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"keywords",content:"fchain, explorer, fcx, search, blockchain, fexplorer"}),(0,n.jsx)("meta",{property:"og:locale",content:"en_IN"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:description",content:d}),(0,n.jsx)("meta",{property:"og:url",content:p}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(p,"/og_meta_image.jpg")}),(0,n.jsx)("meta",{property:"og:image:url",content:"".concat(p,"/og_meta_image.jpg")}),(0,n.jsx)("meta",{property:"og:image:secure_url",content:"".concat(p,"/og_meta_image.jpg")}),(0,n.jsx)("meta",{property:"og:image:alt",content:"Visit fchain.live"}),(0,n.jsx)("meta",{property:"og:title",content:u}),(0,n.jsx)("meta",{property:"og:site_name",content:"FUDX Blockchain Explorer"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:description",content:d}),(0,n.jsx)("meta",{name:"twitter:title",content:u}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(p,"/og_meta_image.jpg")})]})}},691:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),o=r(5365),i=r(4731),c=r.n(i),s=r(5697),a=r.n(s),l=r(7937),u=function(e){var t=e.className,r=void 0===t?"":t,i=e.size,s=void 0===i?"2.5rem":i,a=e.color,u={"--color":void 0===a?o.Z.COLORS.NEXUS_BLUE:a,"--c-size":s};return(0,n.jsx)("div",{className:(0,l.yI)(r,c().loader),style:u,children:(0,n.jsxs)("div",{className:c().circle,children:[(0,n.jsx)("div",{className:c()["circle-chord"]}),(0,n.jsx)("div",{className:c()["circle-chord"]}),(0,n.jsx)("div",{className:c()["circle-chord"]})]})})},d=u;u.propTypes={size:a().string,color:a().string};var p=function(e){var t=e.size,r=void 0===t?"2.5rem":t,i=e.color,s={"--color":void 0===i?o.Z.COLORS.NEXUS_BLUE:i,"--d-size":r};return(0,n.jsx)("div",{className:c().loader,style:s,children:(0,n.jsxs)("div",{className:c().holder,children:[(0,n.jsx)(m,{}),(0,n.jsx)(m,{}),(0,n.jsx)(m,{}),(0,n.jsx)(m,{})]})})},m=function(){return(0,n.jsx)("div",{className:c().dot})},j=p;function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e){var t=e.type,r=v(e,["type"]);return t===o.Z.LOADER.DOT?(0,n.jsx)(j,_({},r)):(0,n.jsx)(d,_({},r))}p.propTypes={size:a().string,color:a().string},y.propTypes={type:a().oneOf(["circle","dot"]),size:a().string,color:a().string},y.defaultProps={type:o.Z.LOADER.CIRCLE,size:"3rem",color:o.Z.COLORS.NEXUS_BLUE}},5536:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),o=r(3342),i=r(1618),c=(r(7294),r(8767)),s=r(5365),a=r(7340),l=r(585),u=r.n(l),d=r(3513),p=r(691),m=r(6731),j=r(9522),f=r(7947);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(a){s=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(){var e=(0,m.L)(),t=e.network,r=e.getMetrics,o=(0,c.useQuery)(["metrics",t.name],r,{refetchInterval:s.Z.REFETCH_INTERVALS.METRICS}),i=o.isLoading,l=o.data,_=o.error,y=null===l||void 0===l?void 0:l.data.result,x=function(e){var t=e.object,r=e.type;return Object.entries(t).map((function(e){var t,o,i,c,s=v(e,2),l=s[0],u=s[1];return(0,n.jsx)(a.n,{label:(null===(t=j.c[r][l])||void 0===t?void 0:t.label)||(0,d.LF)(l),sublabel:r&&(null===(o=j.c[r][l])||void 0===o?void 0:o.sublabel),value:(0,d.QF)(u.toFixed(2)),unit:r&&(null===(i=j.c[r][l])||void 0===i?void 0:i.ticker),icon:r&&(null===(c=j.c[r][l])||void 0===c?void 0:c.icon)},l)}))};return i?(0,n.jsx)("div",{style:{display:"grid",placeItems:"center",minHeight:"200px",margin:"auto"},children:(0,n.jsx)(p.Z,{type:"circle",size:"5rem"})}):(_&&f.Z,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:u().container,children:[(0,n.jsx)("h3",{children:"Registers"}),(0,n.jsxs)("div",{className:u().cardGroup,children:[(0,n.jsx)(a.n,{label:j.c.sig_chains.label,sublabel:j.c.sig_chains.sublabel,value:(0,d.QF)(y.sig_chains),icon:j.c.sig_chains.icon}),(0,n.jsx)(x,{type:"registers",object:y.registers})]}),(0,n.jsx)("h3",{children:"Trust"}),(0,n.jsxs)("div",{className:u().cardGroup,children:[(0,n.jsx)(a.n,{label:j.c.trust.staked_percentage.label,unit:j.c.trust.staked_percentage.ticker,value:(y.trust.stake/y.supply.total*100).toFixed(2),icon:j.c.trust.staked_percentage.icon}),(0,n.jsx)(x,{type:"trust",object:y.trust})]}),(0,n.jsx)("h3",{children:"Supply"}),(0,n.jsx)("div",{className:u().cardGroup,children:(0,n.jsx)(x,{type:"supply",object:y.supply})}),(0,n.jsx)("h3",{children:"Reserves"}),(0,n.jsx)("div",{className:u().cardGroup,children:(0,n.jsx)(x,{type:"reserves",object:y.reserves})})]})}))}function x(){return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(o.Z,{page:"metrics"}),(0,n.jsx)(y,{})]})}},585:function(e){e.exports={container:"styles_container__j4Xoq",cardGroup:"styles_cardGroup__17qPW"}},4731:function(e){e.exports={loader:"Loader_loader__XdP__",circle:"Loader_circle__kK_vB","circle-chord":"Loader_circle-chord__3rFuu",spin:"Loader_spin___BLy6",holder:"Loader_holder__rQJCR",dot:"Loader_dot__E3VLA",motion1:"Loader_motion1__n9WJv",motion2:"Loader_motion2__5Eche",motion3:"Loader_motion3__4_6sQ"}},9008:function(e,t,r){e.exports=r(3121)}},function(e){e.O(0,[318,618,40,774,888,179],(function(){return t=2638,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
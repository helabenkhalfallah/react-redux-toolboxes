(self.webpackChunkx_drag_toolbox=self.webpackChunkx_drag_toolbox||[]).push([[227,97],{38227:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g});r(39115),r(30522),r(6059),r(66108),r(50110),r(79665),r(95767),r(20075),r(91181),r(56997),r(96253),r(27476),r(19371);var n=r(67294),o=r(45697),a=r.n(o),u=r(95711),c=r(82978),i=r(38648),l=r(71230),f=r(15746),s=r(56959),p=r(45825),y=r(26097);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){var e=t.layouts,r=b((0,n.useState)(""),2),o=r[0],a=r[1],m=b(i.Z.useNotification(),2),d=m[0],g=m[1],v=(0,y.generatedLayout)(e);return(0,n.useEffect)((function(){var t="<>".concat((v?Object.keys(v).map((function(t){var e=v[t].sort((function(t,e){return t.x-e.x}));return"\n  <Row\n    gutter={[\n      2,\n      10,\n    ]}\n  >".concat((0,y.ToolboxCodeLayout)(e).join(""),"  </Row>")})):[]).join(""),"\n</>");a(t)}),[e]),n.createElement("div",null,g,n.createElement(l.Z,{gutter:[2,10],justify:"end",align:"top"},n.createElement(f.Z,{span:3},n.createElement(s.Z,{type:"primary",shape:"round",icon:n.createElement(p.Z,null),onClick:function(){navigator.clipboard.writeText(o),d.success({message:"Code copied to clipboard !",placement:"topRight",duration:1,closeIcon:null,top:"10%"})}},"Copy/Paste")),n.createElement(f.Z,{span:2})),n.createElement(l.Z,{gutter:[2,10],justify:"start",align:"top"},n.createElement(f.Z,{span:24},o&&n.createElement(u.Z,{language:"xml",showLineNumbers:!1,wrapLines:!0,useInlineStyles:!0,style:c.Z},o))))};d.propTypes={layouts:a().arrayOf(a().shape({}))},d.defaultProps={layouts:[]};const g=d},26097:(t,e,r)=>{"use strict";r.r(e),r.d(e,{generatedLayout:()=>i,ToolboxCodeLayout:()=>l});r(6059),r(66108),r(50110),r(39115),r(30522),r(79665),r(98351),r(98837),r(95767),r(91181),r(56997),r(96253),r(27476),r(19371),r(20075);function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=function(t){return null==t?void 0:t.sort((function(t,e){return t.y-e.y})).reduce((function(t,e){var r="".concat(Math.floor(e.y));if(t[r]){var o=t[r];return u(u({},t),{},c({},r,[].concat(n(o),[e])))}return u(u({},t),{},c({},r,[e]))}),{})},l=function(t){return null==t?void 0:t.map((function(e,r){var n=e.w,o=0===r?e.x:t[r].x-(t[r-1].x+t[r-1].w);return e.componentStr&&e.componentStr.length?"\n    <Col \n      span={".concat(n,"}\n      offset={").concat(o,"}\n    >\n      ").concat(e.componentStr,"\n    </Col>\n"):"\n    <Col \n      span={".concat(n,"}\n      offset={").concat(o,"}\n    />\n")}))}}}]);
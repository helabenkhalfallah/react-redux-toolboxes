(self.webpackChunkx_drag_toolbox=self.webpackChunkx_drag_toolbox||[]).push([[307,227,482,97],{38227:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});n(39115),n(30522),n(6059),n(66108),n(50110),n(79665),n(95767),n(20075),n(91181),n(56997),n(96253),n(27476),n(19371);var r=n(67294),o=n(45697),a=n.n(o),i=n(95711),c=n(82978),l=n(38648),u=n(71230),s=n(15746),p=n(56959),m=n(45825),y=n(26097);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){var t=e.layouts,n=d((0,r.useState)(""),2),o=n[0],a=n[1],f=d(l.Z.useNotification(),2),b=f[0],g=f[1],h=(0,y.generatedLayout)(t);return(0,r.useEffect)((function(){var e="<>".concat((h?Object.keys(h).map((function(e){var t=h[e].sort((function(e,t){return e.x-t.x}));return"\n  <Row\n    gutter={[\n      2,\n      10,\n    ]}\n  >".concat((0,y.ToolboxCodeLayout)(t).join(""),"  </Row>")})):[]).join(""),"\n</>");a(e)}),[t]),r.createElement("div",null,g,r.createElement(u.Z,{gutter:[2,10],justify:"end",align:"top"},r.createElement(s.Z,{span:3},r.createElement(p.Z,{type:"primary",shape:"round",icon:r.createElement(m.Z,null),onClick:function(){navigator.clipboard.writeText(o),b.success({message:"Code copied to clipboard !",placement:"topRight",duration:1,closeIcon:null,top:"10%"})}},"Copy/Paste")),r.createElement(s.Z,{span:2})),r.createElement(u.Z,{gutter:[2,10],justify:"start",align:"top"},r.createElement(s.Z,{span:24},o&&r.createElement(i.Z,{language:"xml",showLineNumbers:!1,wrapLines:!0,useInlineStyles:!0,style:c.Z},o))))};b.propTypes={layouts:a().arrayOf(a().shape({}))},b.defaultProps={layouts:[]};const g=b},39895:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});n(19371);var r=n(67294),o=n(45697),a=n.n(o),i=n(68482),c=function(e){var t=e.onItemDragged;return r.createElement("div",null,i.Tools.map((function(e){return r.createElement("div",{key:e.key,className:"droppable-element",draggable:!0,unselectable:"on",onDragStart:function(n){n.dataTransfer.setData("text/plain",""),t(e)}},e.component)})))};c.propTypes={onItemDragged:a().func.isRequired};const l=c},71307:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});n(75115),n(6059),n(66108),n(50110),n(39115),n(30522),n(79665),n(98351),n(95767),n(91181),n(56997),n(96253),n(27476),n(82139),n(52310),n(98837),n(19371);var r=n(67294),o=n(45697),a=n.n(o),i=n(69968),c=n.n(i),l=n(66943),u=n(71230),s=n(15746),p=n(39895),m=n(38227);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Z(e);if(t){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=l.Z.Text,j=l.Z.Title,P=(0,i.WidthProvider)(c()),T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t,n,o,a=S(i);function i(){var e;w(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).lastIndex=0,e.state={currentDraggedItem:null,layouts:null},e.generateDOM=function(){var t=e.state.layouts||[];return t.map((function(n,o){return r.createElement("div",{key:n.i,"data-grid":n},t[o].component,t[o].componentStr&&r.createElement("span",{role:"button",style:{position:"absolute",right:"10px",top:0,cursor:"pointer",width:"6px",height:"2px",fontSize:"1rem",fontWeight:"600"},onClick:function(){return e.onRemoveItem(n)}},"x"))}))},e.onRemoveItem=function(t){var n=e.state.layouts.filter((function(e){return e.key!==t.key}));e.setState({layouts:n})},e.onLayoutChange=function(t){(0,e.props.onLayoutChange)(t);var n=e.state.layouts,r=null==n?void 0:n.map((function(e){var n=t.find((function(t){return t.i===e.i}));return h(h({},e),{},{w:null==n?void 0:n.w,h:null==n?void 0:n.h,x:null==n?void 0:n.x,y:null==n?void 0:n.y})}));e.setState({layouts:r})},e.onItemDragged=function(t){e.setState({currentDraggedItem:t})},e.onDrop=function(t,n){var r=e.state,o=r.currentDraggedItem,a=r.layouts;t.pop(),e.lastIndex+=1,e.setState({layouts:[].concat(f(a||[]),[h(h({},n),{},{i:"".concat(e.lastIndex||0),component:null==o?void 0:o.component,componentStr:null==o?void 0:o.componentStr,key:null==o?void 0:o.key,w:null==o?void 0:o.w,h:null==o?void 0:o.h,resizeHandles:null==o?void 0:o.resizeHandles})])})},e}return t=i,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.layouts;return r.createElement(u.Z,{gutter:[2,2],justify:"center",align:"top"},r.createElement(s.Z,{span:4,className:"tools-container"},r.createElement(j,{level:2,className:"tools-title"},"Components"),r.createElement(k,{strong:!0},"1. Choose a component"),r.createElement(p.default,{onItemDragged:function(t){return e.onItemDragged(t)}})),r.createElement(s.Z,{span:10},r.createElement(j,{level:2,className:"tools-title"},"Your web page"),r.createElement(k,{strong:!0},"2. Drag/Drop component here"),r.createElement("br",null),r.createElement(k,{strong:!0},"3. Move components inside the layout"),r.createElement(P,d({},this.props,{layouts:t,onLayoutChange:this.onLayoutChange,onDrop:this.onDrop,resizeHandles:[],cols:24,rowHeight:35,compactType:"vertical",preventCollision:!1,measureBeforeMount:!1,useCSSTransforms:!0,isDroppable:!0}),this.generateDOM())),r.createElement(s.Z,{span:10,className:"code-container"},r.createElement(j,{level:2,className:"tools-title"},"Code (jsx)"),r.createElement(k,{strong:!0},"3. Auto-generated code (copy/paste)"),r.createElement(m.default,{layouts:t})))}}])&&E(t.prototype,n),o&&E(t,o),i}(r.Component);T.propTypes={className:a().string,onLayoutChange:a().func},T.defaultProps={className:"layout",onLayoutChange:function(){}};const A=T},68482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DefaultTool:()=>w,Tools:()=>E});var r=n(67294),o=n(44586),a=n(82059),i=n(39125),c=n(43244),l=n(25144),u=n(56959),s=n(4107),p=n(47933),m=n(9676),y=n(8177),d=a.Z.TabPane,f=i.Z.Step,b=c.Z.Option,g=l.Z.Header,h=l.Z.Footer,v=["Ego vero sic intellego, Patres conscripti, nos hoc","Etenim si attendere diligenter, existimare vere de","Has autem provincias, quas Orontes ambiens amnis","In his tractibus navigerum nusquam visitur flumen","Has autem provincias, quas Orontes ambiens amnis"],w={x:0,y:0,w:2.25,h:1,i:"0",static:!1,key:(0,o.Z)(),component:r.createElement("span",{className:"text"},"Drag Item Here")},E=[{x:0,y:0,w:24,h:2,static:!1,key:(0,o.Z)(),component:r.createElement(g,{style:{backgroundColor:"#4195D3",color:"white",cursor:"pointer",width:"100%"}},"Header"),componentStr:"<Header\n        style={{\n          backgroundColor: '#4195D3',\n          color: 'white',\n          width: '100%',\n        }}\n      >\n        Header\n      </Header>"},{x:0,y:0,w:24,h:2,static:!1,key:(0,o.Z)(),component:r.createElement(h,{style:{backgroundColor:"#BF60B1",color:"white",cursor:"pointer"}},"Footer"),componentStr:"<Footer\n        style={{\n          backgroundColor: '#BF60B1',\n          color: 'white',\n          width: '100%',\n        }}\n      >\n       Footer\n      </Footer>"},{x:0,y:0,w:4,h:1,static:!1,resizeHandles:["e"],key:(0,o.Z)(),component:r.createElement("div",{style:{cursor:"pointer",minWidth:"2px",minHeight:"33px",backgroundColor:"#ECBD45",color:"white"}},"Space"),componentStr:""},{x:0,y:0,w:24,h:2,static:!1,key:(0,o.Z)(),component:r.createElement(a.Z,{defaultActiveKey:"1"},r.createElement(d,{tab:"Top News",key:"1"},"Tab Top News"),r.createElement(d,{tab:"All News",key:"2"},"Tab All News"),r.createElement(d,{tab:"Categories",key:"3"},"Tab Categories")),componentStr:'<Tabs\n        defaultActiveKey="1"\n      >\n        <TabPane\n          tab="Top News"\n          key="1"\n        >\n          Tab Top News\n        </TabPane>\n        <TabPane\n          tab="All News"\n          key="2"\n        >\n          Tab All News\n        </TabPane>\n        <TabPane\n          tab="Categories"\n          key="3"\n        >\n          Tab Categories\n        </TabPane>\n      </Tabs>'},{x:0,y:0,w:24,h:2,static:!1,key:(0,o.Z)(),component:r.createElement(i.Z,{current:1,style:{cursor:"pointer"}},r.createElement(f,{title:"Terminated",description:"Additional description"}),r.createElement(f,{title:"In progress",description:"Additional description"}),r.createElement(f,{title:"Waiting",description:"Additional description"})),componentStr:'<Steps\n        current={1}\n        style={{\n          cursor: \'pointer\',\n        }}\n      >\n        <Step\n          title="Terminé"\n          description="Additional description"\n        />\n        <Step\n          title="In progress"\n          description="Additional description"\n        />\n        <Step\n          title="Waiting"\n          description="Additional description"\n        />\n      </Steps>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{type:"primary",style:{width:"174px"}},"Button Primary"),componentStr:'<Button\n        type="primary"\n      >\n        Button Primary\n      </Button>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{type:"default",style:{width:"174px"}},"Button Default"),componentStr:'<Button\n        type="default"\n      >\n        Button Default\n      </Button>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{danger:!0,type:"primary",style:{width:"174px"}},"Button Danger"),componentStr:'<Button\n        danger\n        type="primary"\n      >\n        Button Danger\n      </Button>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{type:"primary",size:"large",style:{width:"174px"}},"Button Large"),componentStr:'<Button\n        type="primary"\n        size="large"\n      >\n        Button Large\n      </Button>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{type:"primary",size:"middle",style:{width:"174px"}},"Button Middle"),componentStr:'<Button\n        type="primary"\n        size="middle"\n      >\n        Button Middle\n      </Button>'},{x:0,y:0,w:4,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(u.Z,{type:"primary",size:"small",style:{width:"111px"}},"Button Small"),componentStr:'<Button\n        type="primary"\n        size="small"\n      >\n        Button Small\n      </Button>'},{x:0,y:0,w:11,h:1.5,static:!1,key:(0,o.Z)(),component:r.createElement("div",{style:{padding:"10px",width:"325px",cursor:"pointer",backgroundColor:"#5138eeAA"}},r.createElement(c.Z,{style:{width:"300px"},defaultValue:"Madame"},r.createElement(b,{value:"Madame"},"Madame"),r.createElement(b,{value:"Monsieur"},"Monsieur"),r.createElement(b,{value:"Mademoiselle"},"Mademoiselle"))),componentStr:'<Select\n        style={{\n          width: \'100%\',\n        }}\n        defaultValue="Madame"\n      >\n        <Option value="Madame">Madame</Option>\n        <Option value="Monsieur">Monsieur</Option>\n        <Option value="Mademoiselle">Mademoiselle</Option>\n      </Select>'},{x:0,y:0,w:11,h:1.5,static:!1,key:(0,o.Z)(),component:r.createElement("div",{style:{padding:"10px",width:"325px",cursor:"pointer",backgroundColor:"#5138eeBB"}},r.createElement(s.Z,{style:{width:"300px"},placeholder:"Tap Your Text Here"})),componentStr:"<Input\n        style={{\n          width: '100%',\n        }}\n        placeholder=\"Tap Your Text Here\"\n      />"},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(p.ZP.Group,{value:"iOS",style:{width:"175px"}},r.createElement(p.ZP,{value:"iOS"},"iOS"),r.createElement(p.ZP,{value:"Android"},"Android")),componentStr:'<Radio.Group\n        value="iOS"\n      >\n        <Radio value="iOS">iOS</Radio>\n        <Radio value="Android">Android</Radio>\n      </Radio.Group>'},{x:0,y:0,w:6,h:1,static:!1,key:(0,o.Z)(),component:r.createElement(m.Z,{style:{width:"175px"}},"Accept - Decline"),componentStr:"<Checkbox>\n        Accept - Decline\n      </Checkbox>"},{x:0,y:0,w:16,h:v.length+3,static:!1,key:(0,o.Z)(),resizeHandles:["e"],component:r.createElement(y.ZP,{header:r.createElement("div",null,"Header"),footer:r.createElement("div",null,"Footer"),bordered:!0,dataSource:v,renderItem:function(e){return r.createElement(y.ZP.Item,null,e)}}),componentStr:"<List\n        header={<div>Header</div>}\n        footer={<div>Footer</div>}\n        bordered\n        dataSource={[\n          'Ego vero sic intellego, Patres conscripti, nos hoc',\n          'Etenim si attendere diligenter, existimare vere de',\n          'Has autem provincias, quas Orontes ambiens amnis',\n          'In his tractibus navigerum nusquam visitur flumen',\n          'Has autem provincias, quas Orontes ambiens amnis',\n        ]}\n        renderItem={(item) => (\n          <List.Item>\n            {item}\n          </List.Item>\n        )}\n      />"}]},26097:(e,t,n)=>{"use strict";n.r(t),n.d(t,{generatedLayout:()=>l,ToolboxCodeLayout:()=>u});n(6059),n(66108),n(50110),n(39115),n(30522),n(79665),n(98351),n(98837),n(95767),n(91181),n(56997),n(96253),n(27476),n(19371),n(20075);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){return null==e?void 0:e.sort((function(e,t){return e.y-t.y})).reduce((function(e,t){var n="".concat(Math.floor(t.y));if(e[n]){var o=e[n];return i(i({},e),{},c({},n,[].concat(r(o),[t])))}return i(i({},e),{},c({},n,[t]))}),{})},u=function(e){return null==e?void 0:e.map((function(t,n){var r=t.w,o=0===n?t.x:e[n].x-(e[n-1].x+e[n-1].w);return t.componentStr&&t.componentStr.length?"\n    <Col \n      span={".concat(r,"}\n      offset={").concat(o,"}\n    >\n      ").concat(t.componentStr,"\n    </Col>\n"):"\n    <Col \n      span={".concat(r,"}\n      offset={").concat(o,"}\n    />\n")}))}}}]);
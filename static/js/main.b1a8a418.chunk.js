(this["webpackJsonpthree-play"]=this["webpackJsonpthree-play"]||[]).push([[0],{57:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(42),c=n.n(o),i=n(4),s=n(2),u=n(44),l=n.n(u),f=n(22),h=n(8),b=n(20),j=n(7);function m(){var e=Object(i.a)(["\n  color: #01baa5;\n  text-decoration: underline;\n"]);return m=function(){return e},e}var d=j.a.a(m()),O=function(e){return a.a.createElement(d,{href:e.path,target:"_blank",rel:"noopener noreferrer"},e.pathName)};function p(){var e=Object(i.a)(["\n"]);return p=function(){return e},e}function v(){var e=Object(i.a)(["\n  margin-top: 40px;\n"]);return v=function(){return e},e}function g(){var e=Object(i.a)(["\n  font-size: 2.4rem;\n"]);return g=function(){return e},e}function x(){var e=Object(i.a)(["\n  margin: 30px;\n"]);return x=function(){return e},e}var y=j.a.div(x()),E=j.a.h1(g()),w=j.a.div(v()),M=j.a.p(p()),S=function(e){var t=Object(b.a)({},e);return a.a.createElement(y,t,a.a.createElement(E,null,"Threejs Works"),a.a.createElement(w,null,a.a.createElement(M,null,"Based on ",a.a.createElement(O,{path:"https://github.com/react-spring/react-three-fiber#readme",pathName:"react-three-fiber"}))))};function k(){var e=Object(i.a)([""]);return k=function(){return e},e}var A=j.a.div(k()),B=function(e){var t=Object(b.a)({},e);return a.a.createElement(A,t,"Not Found")},C=n(6),z=n(1),P=n(5),L=n(31),T=n(55),F=n(26),G=n(48),R=n(54),I=n(56),q=n(49);Object(P.d)({EffectComposer:T.a,ShaderPass:F.a,RenderPass:G.a,SSAOPass:R.a,UnrealBloomPass:I.a});var D=function(){var e=Object(r.useRef)(),t=Object(P.i)(),n=t.scene,o=t.gl,c=t.size,i=t.camera,s=Object(r.useMemo)((function(){return new z.Vector2(c.width,c.height)}),[c]);return Object(r.useEffect)((function(){e.current.setSize(c.width,c.height)}),[c]),Object(P.f)((function(){return e.current.render()}),2),a.a.createElement("effectComposer",{ref:e,args:[o]},a.a.createElement("renderPass",{attachArray:"passes",scene:n,camera:i}),a.a.createElement("unrealBloomPass",{attachArray:"passes",args:[s,2,1,.991]}),a.a.createElement("shaderPass",{attachArray:"passes",args:[q.a],"material-uniforms-resolution-value":[1/c.width,1/c.height],renderToScreen:!0}))},N=n(33);function W(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #272727;\n"]);return W=function(){return e},e}Object(P.d)({InstancedMesh:N.a});var V=new z.Object3D,_=new z.Color,U=new Array(1e3).fill(void 0).map((function(){return L[17][Math.floor(5*Math.random())]})),H=function(){var e=Object(r.useState)(),t=Object(C.a)(e,2),n=t[0],a=t[1],o=Object(r.useMemo)((function(){return Float32Array.from(new Array(1e3).fill(void 0).flatMap((function(e,t){return _.set(U[t]).toArray()})))}),[]),c=Object(r.useRef)(),i=Object(r.useRef)();return Object(r.useEffect)((function(){i.current=n}),[n]),Object(P.f)((function(e){var t=e.clock.getElapsedTime();c.current.rotation.x=Math.sin(t/4),c.current.rotation.y=Math.sin(t/2);for(var r=0,a=0;a<10;a++)for(var s=0;s<10;s++)for(var u=0;u<10;u++){var l=r++;V.position.set(5-a,5-s,5-u),V.rotation.y=Math.sin(a/4+t)+Math.sin(s/4+t)+Math.sin(u/4+t),V.rotation.z=2*V.rotation.y,n!==i.current&&(_.set(l===n?"white":U[l]).toArray(o,3*l),c.current.geometry.attributes.color.needsUpdate=!0);var f=l===n?2:1;V.scale.set(f,f,f),V.updateMatrix(),c.current.setMatrixAt(l,V.matrix)}c.current.instanceMatrix.needsUpdate=!0})),Object(s.jsx)("instancedMesh",{ref:c,args:[null,null,1e3],onPointerMove:function(e){return a(e.instanceId)},onPointerOut:function(e){return a(void 0)}},Object(s.jsx)("boxBufferGeometry",{attach:"geometry",args:[.7,.7,.7]},Object(s.jsx)("instancedBufferAttribute",{attachObject:["attributes","color"],args:[o,3]})),Object(s.jsx)("meshPhongMaterial",{attach:"material",vertexColors:z.VertexColors}))},J=Object(s.css)(W()),$=n(21);function K(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #272727;\n"]);return K=function(){return e},e}Object(P.d)({InstancedMesh:N.a});var Q=new z.Object3D,X=new z.Color,Y=new Array(1e3).fill(void 0).map((function(){return L[3][Math.floor(5*Math.random())]})),Z=function(e){var t=Object(r.useMemo)((function(){return Float32Array.from(new Array(1e3).fill(void 0).flatMap((function(e,t){return X.set(Y[t]).toArray()})))}),[]),n=(new z.FontLoader).parse($),a=Object(r.useMemo)((function(){return{font:n,size:100,height:1,curveSegments:32,bevelEnabled:!0,bevelThickness:6,bevelSize:2.5,bevelOffset:0,bevelSegments:8}}),[n]),o=Object(r.useRef)();return Object(P.f)((function(e){var t=e.clock.getElapsedTime();o.current.rotation.x=Math.sin(t/4),o.current.rotation.y=Math.sin(t/2);for(var n=0,r=0;r<4;r++)for(var a=0;a<4;a++)for(var c=0;c<4;c++){var i=n++;Q.position.set(200-100*r,200-100*a,200-100*c),Q.rotation.y=Math.sin(r/4+t)+Math.sin(a/4+t)+Math.sin(c/4+t),Q.rotation.z=2*Q.rotation.y;Q.scale.set(1,1,1),Q.updateMatrix(),o.current.setMatrixAt(i,Q.matrix)}o.current.instanceMatrix.needsUpdate=!0})),Object(s.jsx)("instancedMesh",{ref:o,args:[null,null,Math.pow(4,2)]},Object(s.jsx)("textBufferGeometry",{attach:"geometry",args:[e.text,a]},Object(s.jsx)("instancedBufferAttribute",{attachObject:["attributes","color"],args:[t,3]})),Object(s.jsx)("meshPhongMaterial",{attach:"material",vertexColors:z.VertexColors}))},ee=Object(s.css)(K()),te=n(9),ne=n(41),re=n(19),ae=a.a.createContext();function oe(e){var t=Object(r.useState)((function(){return new re.World})),n=Object(C.a)(t,1)[0];return Object(r.useEffect)((function(){n.broadphase=new re.NaiveBroadphase,n.solver.iterations=10,n.gravity.set(0,0,-100)}),[n]),Object(P.h)((function(){return n.step(1/60)}),!1),a.a.createElement(ae.Provider,{value:n,children:e.children})}function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=Object(b.a)({},e),o=Object(r.useRef)(),c=Object(r.useContext)(ae),i=Object(r.useState)((function(){return new re.Body(a)})),s=Object(C.a)(i,1)[0];return Object(r.useEffect)((function(){return t(s),c.addBody(s),function(){return c.removeBody(s)}}),n),Object(P.h)((function(){o.current&&(o.current.position.copy(s.position),o.current.quaternion.copy(s.quaternion))}),!1),o}var ie=function(e){var t=e.children,n=e.vAlign,o=void 0===n?"center":n,c=e.hAlign,i=void 0===c?"center":c,s=e.size,u=void 0===s?1:s,l=(e.color,Object(ne.a)(e,["children","vAlign","hAlign","size","color"])),f=l.position,h=(new z.FontLoader).parse($),b=Object(r.useMemo)((function(){return{font:h,size:40,height:30,curveSegments:32,bevelEnabled:!0,bevelThickness:6,bevelSize:2.5,bevelOffset:0,bevelSegments:8}}),[h]),j=ce({mass:1e5},(function(e){var t;e.addShape(new re.Box(new re.Vec3(1,1,1))),(t=e.position).set.apply(t,Object(te.a)(f))})),m=Object(P.j)((function(e){var t=new z.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===i?-t.x/2:"right"===i?0:-t.x,e.position.y="center"===o?-t.y/2:"top"===o?0:-t.y}),[t]);return a.a.createElement("group",Object.assign({},l,{scale:[.1*u,.1*u,.1]}),a.a.createElement("mesh",{ref:j},a.a.createElement("mesh",{ref:m},a.a.createElement("textGeometry",{attach:"geometry",args:[t,b]}),a.a.createElement("meshNormalMaterial",{attach:"material"}))))},se=function(e){var t=e.position,n=ce({mass:0},(function(e){var n;e.addShape(new re.Plane),(n=e.position).set.apply(n,Object(te.a)(t))}));return a.a.createElement("mesh",{ref:n,receiveShadow:!0},a.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),a.a.createElement("meshPhongMaterial",{attach:"material",color:"#272727"}))};function ue(){var e=Object(i.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #272727;\n"]);return ue=function(){return e},e}var le=Object(s.css)(ue()),fe=function(e){return Object(s.jsx)(P.a,{camera:{position:[0,0,30]}},Object(s.jsx)("ambientLight",{intensity:2}),Object(s.jsx)("pointLight",{position:[40,40,40]}),Object(s.jsx)(oe,null,Object(s.jsx)(r.Suspense,{fallback:null},Object(s.jsx)(se,{position:[0,0,-400]}),e.textObjects.map((function(e,t){var n=5*t-20;return Object(s.jsx)(ie,{key:t,hAlign:"left",position:[n,0,20],children:e})})))))},he=n(3);function be(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #272727;\n"]);return be=function(){return e},e}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach((function(t){Object(he.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=n(73),Oe=de.useSprings,pe=de.a,ve="hello,world!".length,ge=["#A2CCB6","#FCEEB5","#EE786E","#e0feff","lightpink","lightblue"],xe=function(e){var t=Math.random();return{position:[100-500*Math.random(),100-500*Math.random(),100-500*Math.random()],color:ge[Math.round(Math.random()*(ge.length-1))],scale:[1+10*t,1+10*t,1],rotation:[0,0,z.Math.degToRad(45*Math.round(Math.random()))]}},ye=new Array(ve).fill(void 0).map((function(e,t){return{color:ge[Math.round(Math.random()*(ge.length-1))],args:[.1+9*Math.random(),.1+9*Math.random(),10],str:"hello,world!"[t]}})),Ee=function(){var e=(new z.FontLoader).parse($),t=Object(r.useMemo)((function(){return{font:e,size:40,height:50,curveSegments:32,bevelEnabled:!0,bevelThickness:6,bevelSize:2.5,bevelOffset:0,bevelSegments:8}}),[e]),n=Oe(ve,(function(e){return me({from:xe()},xe(),{config:{mass:10,tension:150,friction:50}})})),o=Object(C.a)(n,2),c=o[0],i=o[1];return Object(r.useEffect)((function(){setInterval((function(){return i((function(e){return me({},xe(),{delay:40*e})}))}),3e3)}),[]),Object(s.jsx)(a.a.Fragment,null,ye.map((function(e,n){return Object(s.jsx)(pe.mesh,Object.assign({key:n},c[n],{castShadow:!0,receiveShadow:!0}),Object(s.jsx)("textGeometry",{attach:"geometry",args:[e.str,t]}),Object(s.jsx)(pe.meshStandardMaterial,{attach:"material",color:c[n].color,roughness:.75,metalness:.5}))})))};function we(){return Object(s.jsx)("group",null,Object(s.jsx)("pointLight",{intensity:.3}),Object(s.jsx)("ambientLight",{intensity:2}),Object(s.jsx)("spotLight",{castShadow:!0,intensity:.2,angle:Math.PI/7,position:[150,150,250],penumbra:1,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}))}var Me=Object(s.css)(be()),Se=[{path:"/",exact:!0,gnavi:!0,title:"Top",category:"log",component:S},{path:"/react-three-fiber-playground",exact:!0,gnavi:!1,title:"Top",category:"log",component:S},{path:"/InteractiveCubesOrtho",exact:!0,gnavi:!0,title:"InteractiveCubesOrtho",category:"faq_log",component:function(){return Object(s.jsx)("div",{css:J},Object(s.jsx)(P.a,{gl:new z.WebGLRenderer({alpha:!1}),camera:{position:[0,0,15],near:5,far:20},onCreated:function(e){return e.gl.setClearColor("skyblue")}},Object(s.jsx)("ambientLight",null),Object(s.jsx)("pointLight",{position:[150,150,150],intensity:.55}),Object(s.jsx)(H,null),Object(s.jsx)(D,null)))}},{path:"/InteractiveTextsOrtho",exact:!0,gnavi:!0,title:"InteractiveTextsOrtho",category:"faq_log",component:function(){var e=Object(r.useState)("hello,world!"[Math.floor(5*Math.random())]),t=Object(C.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!0),c=Object(C.a)(o,2),i=c[0];c[1];return Object(r.useEffect)((function(){var e=document.getElementsByTagName("canvas")[0];console.info(e),e.addEventListener("touchstart",(function(){return a("hello,world!"[Math.floor(5*Math.random())])}),!1)}),[]),Object(s.jsx)("div",{css:ee},i?Object(s.jsx)(P.a,{id:"canvas",gl:new z.WebGLRenderer({alpha:!1}),camera:{position:[0,0,700],near:5,far:1400},onCreated:function(e){return e.gl.setClearColor("skyblue")},onClick:function(){return a("hello,world!"[Math.floor(5*Math.random())])}},Object(s.jsx)("ambientLight",null),Object(s.jsx)("pointLight",{position:[150,150,150],intensity:.55}),Object(s.jsx)(Z,{text:n}),Object(s.jsx)(D,null)):Object(s.jsx)("div",null))}},{path:"/Montage",exact:!0,gnavi:!0,title:"Montage",category:"faq_log",component:function(){return Object(s.jsx)("div",{css:Me},Object(s.jsx)(P.a,{shadowMap:!0,camera:{position:[200,0,200],rotation:[0,.785,0],fov:100}},Object(s.jsx)(we,null),Object(s.jsx)(Ee,null)))}},{path:"/HelloGravity",exact:!0,gnavi:!0,title:"HelloGravity",category:"faq_log",component:function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(s.jsx)("div",{css:le},Object(s.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value.slice(-1);a([].concat(Object(te.a)(n),[t]))}}),Object(s.jsx)(fe,{textObjects:n}))}},{path:"*",exact:!1,gnavi:!1,component:B}];function ke(){var e=Object(r.useRef)();Object(P.g)(z.TextureLoader,"https://threejs.org/examples/textures/crate.gif");return Object(P.f)((function(){e.current.rotation.x+=.005,e.current.rotation.y+=.01})),a.a.createElement("mesh",{ref:e},a.a.createElement("boxBufferGeometry",{attach:"geometry",args:[200,200,200]}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"#A2CCB6"}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"#FCEEB5"}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"#EE786E"}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"#E0FEFF"}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"lightpink"}),a.a.createElement("meshBasicMaterial",{attachArray:"material",color:"lightblue"}))}var Ae=function(){return a.a.createElement(P.a,{camera:{position:[0,0,300]}},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(ke,null)))};function Be(){var e=Object(i.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 20px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  background-color: ",";\n  color: ",";\n  cursor: ",";\n  text-decoration: none;\n  box-sizing: border-box;\n  &:hover {\n    color: #ffffff;\n    background-color: #00253a;\n  }\n"]);return Be=function(){return e},e}function Ce(){var e=Object(i.a)([""]);return Ce=function(){return e},e}function ze(){var e=Object(i.a)([""]);return ze=function(){return e},e}function Pe(){var e=Object(i.a)(["\n  height: 100%;\n  margin-top: 40px;\n"]);return Pe=function(){return e},e}function Le(){var e=Object(i.a)(["\n  color: #ffffff;\n  font-size: 1.8rem;\n  font-weight: bold;\n"]);return Le=function(){return e},e}function Te(){var e=Object(i.a)(["\n  text-decoration: none;\n"]);return Te=function(){return e},e}function Fe(){var e=Object(i.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  padding: 22px 20px;\n  box-sizing: border-box;\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 18px;\n    width: calc(100% - 36px);\n    height: 1px;\n    background-color: #5a608e;\n  }\n"]);return Fe=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 100vh;\n  background-color: #143d54;\n  box-sizing: border-box;\n"]);return Ge=function(){return e},e}var Re=j.a.div(Ge()),Ie=j.a.div(Fe()),qe=Object(j.a)(f.b)(Te()),De=j.a.h1(Le()),Ne=j.a.nav(Pe()),We=j.a.ul(ze()),Ve=j.a.li(Ce()),_e=Object(j.a)(f.b)(Be(),(function(e){return 0===e.active?"inherit":"#00253a"}),(function(e){return 0===e.active?"#8a8a8a":"#ffffff"}),(function(e){return 0===e.active?"pointer":"default"})),Ue=function(e){var t=Object(b.a)({},e),n=Object(h.f)();return r.createElement(Re,t,r.createElement(Ie,null,r.createElement(Ae,null),r.createElement(qe,{to:"/"},r.createElement(De,null,"THREE"))),r.createElement(Ne,null,r.createElement(We,null,Se.filter((function(e){return e.gnavi})).map((function(e){var t=0;return t="/"===n.pathname?"/"===e.path?1:0:"/"!==e.path&&n.pathname.indexOf(e.path)>-1?1:0,r.createElement(Ve,{key:e.path},r.createElement(_e,{to:e.path,active:t},e.title))})))))};function He(){var e=Object(i.a)(["\n  width: 100%;\n  height: calc(100% - 40px);\n  box-sizing: border-box;\n"]);return He=function(){return e},e}function Je(){var e=Object(i.a)(["\n  width: calc(100% - 200px);\n"]);return Je=function(){return e},e}function $e(){var e=Object(i.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return $e=function(){return e},e}function Ke(){var e=Object(i.a)(["\n    ","\n    *, *::after, *::before {\n        box-sizing: border-box;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-smoothing: antialiased;\n    }\n"]);return Ke=function(){return e},e}var Qe=Object(s.css)(Ke(),l.a),Xe=function(){return Object(s.jsx)("div",null,Object(s.jsx)(s.Global,{styles:Qe}),Object(s.jsx)(f.a,null,Object(s.jsx)(Ye,null,Object(s.jsx)(Ue,null),Object(s.jsx)(Ze,null,Object(s.jsx)(et,null,Object(s.jsx)(h.c,null,Se.map((function(e){return Object(s.jsx)(h.a,{key:e.path,exact:e.exact,path:e.path,component:e.component})}))))))))},Ye=j.a.div($e()),Ze=j.a.div(Je()),et=j.a.main(He());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.b1a8a418.chunk.js.map
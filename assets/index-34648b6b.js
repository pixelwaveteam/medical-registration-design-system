var C=Object.defineProperty;var i=(r,e)=>C(r,"name",{value:e,configurable:!0});import{_ as z,a3 as U,av as L,aw as B,d as W,F as G,c as b,w as D}from"./es.object.get-own-property-descriptor-64192e07.js";import{a as K,b as N,d as V,u as F}from"./iframe-8c6fe09d.js";import{m as k}from"./make-decorator-6f43e346.js";var Y="actions",q="storybook/actions",J="".concat(q,"/action-event"),Q=z,X=U,Z=L,rr=B,tr=G,er=W;Q({target:"Object",stat:!0,sham:!X},{getOwnPropertyDescriptors:i(function(e){for(var t=rr(e),n=tr.f,a=Z(t),o={},u=0,c,s;a.length>u;)s=n(t,c=a[u++]),s!==void 0&&er(o,c,s);return o},"getOwnPropertyDescriptors")});var m,A=typeof b<"u"&&(b.crypto||b.msCrypto);if(A&&A.getRandomValues){var S=new Uint8Array(16);m=i(function(){return A.getRandomValues(S),S},"whatwgRNG")}if(!m){var E=new Array(16);m=i(function(){for(var r=0,e;r<16;r++)r&3||(e=Math.random()*4294967296),E[r]=e>>>((r&3)<<3)&255;return E},"rng$1")}var nr=m,R=[];for(var y=0;y<256;++y)R[y]=(y+256).toString(16).substr(1);function ar(r,e){var t=e||0,n=R;return n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]}i(ar,"bytesToUuid$1");var or=ar,ir=nr,cr=or;function ur(r,e,t){var n=e&&t||0;typeof r=="string"&&(e=r=="binary"?new Array(16):null,r=null),r=r||{};var a=r.random||(r.rng||ir)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,e)for(var o=0;o<16;++o)e[n+o]=a[o];return e||cr(a)}i(ur,"v4");var sr=ur,O={depth:10,clearOnStoryChange:!0,limit:50};function h(r){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(r)}i(h,"_typeof");var lr=i(function r(e,t){var n=Object.getPrototypeOf(e);return!n||t(n)?n:r(n,t)},"findProto"),fr=i(function(e){return Boolean(h(e)==="object"&&e&&lr(e,function(t){return/^Synthetic(?:Base)?Event$/.test(t.constructor.name)})&&typeof e.persist=="function")},"isReactSyntheticEvent"),vr=i(function(e){if(fr(e)){var t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();var n=Object.getOwnPropertyDescriptor(t,"view"),a=n==null?void 0:n.value;return h(a)==="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",Object.assign({},n,{value:Object.create(a.constructor.prototype)})),t}return e},"serializeArg");function pr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Object.assign({},O,e),n=i(function(){for(var o=K.getChannel(),u=sr(),c=5,s=arguments.length,f=new Array(s),l=0;l<s;l++)f[l]=arguments[l];var v=f.map(vr),g=f.length>1?v:v[0],p={id:u,count:0,data:{name:r,args:g},options:Object.assign({},t,{maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1})};o.emit(J,p)},"actionHandler");return n}i(pr,"action");function yr(r,e){return gr(r)||hr(r,e)||mr(r,e)||dr()}i(yr,"_slicedToArray$1");function dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(dr,"_nonIterableRest$1");function mr(r,e){if(r){if(typeof r=="string")return I(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(r,e)}}i(mr,"_unsupportedIterableToArray$1");function I(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}i(I,"_arrayLikeToArray$1");function hr(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,u,c;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(s){o=!0,c=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw c}}return n}}i(hr,"_iterableToArrayLimit$1");function gr(r){if(Array.isArray(r))return r}i(gr,"_arrayWithHoles$1");var _=i(function(){for(var e=O,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n;if(o.length===1&&Array.isArray(o[0])){var u=o,c=yr(u,1);o=c[0]}o.length!==1&&typeof o[o.length-1]!="string"&&(e=Object.assign({},O,o.pop()));var s=o[0];(o.length!==1||typeof s=="string")&&(s={},o.forEach(function(l){s[l]=l}));var f={};return Object.keys(s).forEach(function(l){f[l]=pr(s[l],e)}),f},"actions");N(function(){},"decorate.* is no longer supported as of Storybook 6.0.");var T;function br(r){return wr(r)||Or(r)||M(r)||Ar()}i(br,"_toConsumableArray");function Ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(Ar,"_nonIterableSpread");function Or(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}i(Or,"_iterableToArray");function wr(r){if(Array.isArray(r))return w(r)}i(wr,"_arrayWithoutHoles");function jr(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}i(jr,"_taggedTemplateLiteral");function P(r,e){return Ir(r)||Er(r,e)||M(r,e)||Sr()}i(P,"_slicedToArray");function Sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(Sr,"_nonIterableRest");function M(r,e){if(r){if(typeof r=="string")return w(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(r,e)}}i(M,"_unsupportedIterableToArray");function w(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}i(w,"_arrayLikeToArray");function Er(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,u,c;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(s){o=!0,c=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw c}}return n}}i(Er,"_iterableToArrayLimit");function Ir(r){if(Array.isArray(r))return r}i(Ir,"_arrayWithHoles");var x=D.document,$=D.Element,_r=/^(\S+)\s*(.*)$/,Tr=$!=null&&!$.prototype.matches,Pr=Tr?"msMatchesSelector":"matches",d=x&&x.getElementById("root"),xr=i(function r(e,t){if(e[Pr](t))return!0;var n=e.parentElement;return n?r(n,t):!1},"hasMatchInAncestry"),$r=i(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o=e.apply(void 0,n);return Object.entries(o).map(function(u){var c=P(u,2),s=c[0],f=c[1],l=s.match(_r),v=P(l,3);v[0];var g=v[1],p=v[2];return{eventName:g,handler:i(function(j){(!p||xr(j.target,p))&&f(j)},"handler")}})},"createHandlers"),H=N(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];F(function(){if(d!=null){var a=$r.apply(void 0,[r].concat(t));return a.forEach(function(o){var u=o.eventName,c=o.handler;return d.addEventListener(u,c)}),function(){return a.forEach(function(o){var u=o.eventName,c=o.handler;return d.removeEventListener(u,c)})}}},[d,r,t])},V(T||(T=jr([`
    withActions(options) is deprecated, please configure addon-actions using the addParameter api:

    addParameters({
      actions: {
        handles: options
      },
    });
  `])))),Dr=i(function(e,t){t&&H(e,t)},"applyDeprecatedOptions"),zr=k({name:"withActions",parameterName:Y,skipIfNoParametersOrOptions:!0,wrapper:i(function(e,t,n){var a=n.parameters,o=n.options;return Dr(_,o),a&&a.handles&&H.apply(void 0,[_].concat(br(a.handles))),e(t)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();export{pr as a,zr as w};
//# sourceMappingURL=index-34648b6b.js.map

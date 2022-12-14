!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,(function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var r=t(e),i=r.overflow,f=r.overflowX,s=r.overflowY;return/(auto|scroll|overlay)/.test(i+s+f)?e:o(n(e))}function r(e){return e&&e.referenceNode?e.referenceNode:e}function i(e){return 11===e?J:10===e?K:J||K}function f(e){if(!e)return document.documentElement;for(var n=i(10)?document.body:null,o=e.offsetParent||null;o===n&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var r=o&&o.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===t(o,"position")?f(o):o:e?e.ownerDocument.documentElement:document.documentElement}function s(e){return null===e.parentNode?e:s(e.parentNode)}function a(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var p=i.commonAncestorContainer;if(e!==p&&t!==p||o.contains(r))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||f(e.firstElementChild)===e)}(p)?p:f(p);var l=s(e);return l.host?a(l.host,t):a(e,s(t).host)}function p(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function l(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=p(t,"top"),r=p(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function u(e,t){var n="x"===t?"Left":"Top",o="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function d(e,t,n,o){return z(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],i(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function c(e){var t=e.body,n=e.documentElement,o=i(10)&&getComputedStyle(n);return{height:d("Height",t,n,o),width:d("Width",t,n,o)}}function h(e){return ee({},e,{right:e.left+e.width,bottom:e.top+e.height})}function m(e){var n={};try{if(i(10)){n=e.getBoundingClientRect();var o=p(e,"top"),r=p(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}else n=e.getBoundingClientRect()}catch(e){}var f={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},s="HTML"===e.nodeName?c(e.ownerDocument):{},a=s.width||e.clientWidth||f.width,l=s.height||e.clientHeight||f.height,d=e.offsetWidth-a,m=e.offsetHeight-l;if(d||m){var g=t(e);d-=u(g,"x"),m-=u(g,"y"),f.width-=d,f.height-=m}return h(f)}function g(e,n){var r=2<arguments.length&&void 0!==arguments[2]&&arguments[2],f=i(10),s="HTML"===n.nodeName,a=m(e),p=m(n),u=o(e),d=t(n),c=parseFloat(d.borderTopWidth,10),g=parseFloat(d.borderLeftWidth,10);r&&s&&(p.top=z(p.top,0),p.left=z(p.left,0));var v=h({top:a.top-p.top-c,left:a.left-p.left-g,width:a.width,height:a.height});if(v.marginTop=0,v.marginLeft=0,!f&&s){var b=parseFloat(d.marginTop,10),w=parseFloat(d.marginLeft,10);v.top-=c-b,v.bottom-=c-b,v.left-=g-w,v.right-=g-w,v.marginTop=b,v.marginLeft=w}return(f&&!r?n.contains(u):n===u&&"BODY"!==u.nodeName)&&(v=l(v,n)),v}function v(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=g(e,n),r=z(n.clientWidth,window.innerWidth||0),i=z(n.clientHeight,window.innerHeight||0),f=t?0:p(n),s=t?0:p(n,"left"),a={top:f-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i};return h(a)}function b(e){var o=e.nodeName;if("BODY"===o||"HTML"===o)return!1;if("fixed"===t(e,"position"))return!0;var r=n(e);return!!r&&b(r)}function w(e){if(!e||!e.parentElement||i())return document.documentElement;for(var n=e.parentElement;n&&"none"===t(n,"transform");)n=n.parentElement;return n||document.documentElement}function y(e,t,i,f){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],p={top:0,left:0},l=s?w(e):a(e,r(t));if("viewport"===f)p=v(l,s);else{var u;"scrollParent"===f?"BODY"===(u=o(n(t))).nodeName&&(u=e.ownerDocument.documentElement):u="window"===f?e.ownerDocument.documentElement:f;var d=g(u,l,s);if("HTML"!==u.nodeName||b(l))p=d;else{var h=c(e.ownerDocument),m=h.height,y=h.width;p.top+=d.top-d.marginTop,p.bottom=m+d.top,p.left+=d.left-d.marginLeft,p.right=y+d.left}}var E="number"==typeof(i=i||0);return p.left+=E?i:i.left||0,p.top+=E?i:i.top||0,p.right-=E?i:i.right||0,p.bottom-=E?i:i.bottom||0,p}function E(e){return e.width*e.height}function x(e,t,n,o,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=y(n,o,i,r),s={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},a=Object.keys(s).map((function(e){return ee({key:e},s[e],{area:E(s[e])})})).sort((function(e,t){return t.area-e.area})),p=a.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),l=0<p.length?p[0].key:a[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function O(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=o?w(t):a(t,r(n));return g(n,i,o)}function L(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function D(e,t,n){n=n.split("-")[0];var o=L(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",s=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[a]/2-o[a]/2,r[s]=n===s?t[s]-o[p]:t[T(s)],r}function N(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function F(t,n,o){var r=void 0===o?t:t.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=N(e,(function(e){return e[t]===n}));return e.indexOf(o)}(t,"name",o));return r.forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=h(n.offsets.popper),n.offsets.reference=h(n.offsets.reference),n=o(n,t))})),n}function H(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=x(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=F(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function C(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function B(){return this.state.isDestroyed=!0,k(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[C("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,n,r){var i="BODY"===e.nodeName,f=i?e.ownerDocument.defaultView:e;f.addEventListener(t,n,{passive:!0}),i||M(o(f.parentNode),t,n,r),r.push(f)}function P(e,t,n,r){n.updateBound=r,A(e).addEventListener("resize",n.updateBound,{passive:!0});var i=o(e);return M(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function S(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function W(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return A(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function I(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&j(t[n])&&(o="px"),e.style[n]=t[n]+o}))}function R(e,t,n){var o=N(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function U(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=oe.indexOf(e),o=oe.slice(n+1).concat(oe.slice(0,n));return t?o.reverse():o}var Y=Math.min,V=Math.floor,q=Math.round,z=Math.max,G="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,_=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(G&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),X=G&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),_))}},J=G&&!(!window.MSInputMethodContext||!document.documentMode),K=G&&/MSIE 10/.test(navigator.userAgent),Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),$=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ee=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},te=G&&/Firefox/i.test(navigator.userAgent),ne=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],oe=ne.slice(3),re=function(){function t(n,o){var r=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Q(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=X(this.update.bind(this)),this.options=ee({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ee({},t.Defaults.modifiers,i.modifiers)).forEach((function(e){r.options.modifiers[e]=ee({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return ee({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return Z(t,[{key:"update",value:function(){return H.call(this)}},{key:"destroy",value:function(){return B.call(this)}},{key:"enableEventListeners",value:function(){return S.call(this)}},{key:"disableEventListeners",value:function(){return W.call(this)}}]),t}();return re.Utils=("undefined"==typeof window?global:window).PopperUtils,re.placements=ne,re.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",p=s?"width":"height",l={start:$({},a,i[a]),end:$({},a,i[a]+i[p]-f[p])};e.offsets.popper=ee({},f,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,f=i.popper,s=i.reference,a=r.split("-")[0];return n=j(+o)?[+o,0]:function(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=f.indexOf(N(f,(function(e){return-1!==e.search(/,|\s/)})));f[s]&&-1===f[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1===s?[f]:[f.slice(0,s).concat([f[s].split(a)[0]]),[f[s].split(a)[1]].concat(f.slice(s+1))];return p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];return i?0===f.indexOf("%")?h("%p"===f?n:o)[t]/100*i:"vh"===f||"vw"===f?("vh"===f?z(document.documentElement.clientHeight,window.innerHeight||0):z(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i:e}(e,r,t,n)}))})),p.forEach((function(e,t){e.forEach((function(n,o){j(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}(o,f,s,a),"left"===a?(f.top+=n[0],f.left-=n[1]):"right"===a?(f.top+=n[0],f.left+=n[1]):"top"===a?(f.left+=n[0],f.top-=n[1]):"bottom"===a&&(f.left+=n[0],f.top+=n[1]),e.popper=f,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var o=C("transform"),r=e.instance.popper.style,i=r.top,s=r.left,a=r[o];r.top="",r.left="",r[o]="";var p=y(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=s,r[o]=a,t.boundaries=p;var l=t.priority,u=e.offsets.popper,d={primary:function(e){var n=u[e];return u[e]<p[e]&&!t.escapeWithReference&&(n=z(u[e],p[e])),$({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=u[n];return u[e]>p[e]&&!t.escapeWithReference&&(o=Y(u[n],p[e]-("right"===e?u.width:u.height))),$({},n,o)}};return l.forEach((function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";u=ee({},u,d[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=V,f=-1!==["top","bottom"].indexOf(r),s=f?"right":"bottom",a=f?"left":"top",p=f?"width":"height";return n[s]<i(o[a])&&(e.offsets.popper[a]=i(o[a])-n[p]),n[a]>i(o[s])&&(e.offsets.popper[a]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,n){var o;if(!R(e.instance.modifiers,"arrow","keepTogether"))return e;var r=n.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],f=e.offsets,s=f.popper,a=f.reference,p=-1!==["left","right"].indexOf(i),l=p?"height":"width",u=p?"Top":"Left",d=u.toLowerCase(),c=p?"left":"top",m=p?"bottom":"right",g=L(r)[l];a[m]-g<s[d]&&(e.offsets.popper[d]-=s[d]-(a[m]-g)),a[d]+g>s[m]&&(e.offsets.popper[d]+=a[d]+g-s[m]),e.offsets.popper=h(e.offsets.popper);var v=a[d]+a[l]/2-g/2,b=t(e.instance.popper),w=parseFloat(b["margin"+u],10),y=parseFloat(b["border"+u+"Width"],10),E=v-e.offsets.popper[d]-w-y;return E=z(Y(s[l]-g,E),0),e.arrowElement=r,e.offsets.arrow=($(o={},d,q(E)),$(o,c,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=T(o),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case"flip":f=[o,r];break;case"clockwise":f=U(o);break;case"counterclockwise":f=U(o,!0);break;default:f=t.behavior}return f.forEach((function(s,a){if(o!==s||f.length===a+1)return e;o=e.placement.split("-")[0],r=T(o);var p=e.offsets.popper,l=e.offsets.reference,u=V,d="left"===o&&u(p.right)>u(l.left)||"right"===o&&u(p.left)<u(l.right)||"top"===o&&u(p.bottom)>u(l.top)||"bottom"===o&&u(p.top)<u(l.bottom),c=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),g=u(p.bottom)>u(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&c||!b&&"start"===i&&g||!b&&"end"===i&&m),E=w||y;(d||v||E)&&(e.flipped=!0,(d||v)&&(o=f[a+1]),E&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=ee({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=F(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[n]-(s?r[f?"width":"height"]:0),e.placement=T(t),e.offsets.popper=h(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!R(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=N(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=N(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,p=void 0===i?t.gpuAcceleration:i,l=f(e.instance.popper),u=m(l),d={position:r.position},c=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=q,f=function(e){return e},s=i(r.width),a=i(o.width),p=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=t?p||l||s%2==a%2?i:V:f,d=t?i:f;return{left:u(1==s%2&&1==a%2&&!l&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:u(o.right)}}(e,2>window.devicePixelRatio||!te),h="bottom"===n?"top":"bottom",g="right"===o?"left":"right",v=C("transform");if(a="bottom"==h?"HTML"===l.nodeName?-l.clientHeight+c.bottom:-u.height+c.bottom:c.top,s="right"==g?"HTML"===l.nodeName?-l.clientWidth+c.right:-u.width+c.right:c.left,p&&v)d[v]="translate3d("+s+"px, "+a+"px, 0)",d[h]=0,d[g]=0,d.willChange="transform";else{var b="bottom"==h?-1:1,w="right"==g?-1:1;d[h]=a*b,d[g]=s*w,d.willChange=h+", "+g}var y={"x-placement":e.placement};return e.attributes=ee({},y,e.attributes),e.styles=ee({},d,e.styles),e.arrowStyles=ee({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return I(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach((function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])}))}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&I(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=O(r,t,e,n.positionFixed),f=x(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),I(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},re}));
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function j(){var e=m();if(h(e))return x(e);f=setTimeout(j,function(e){var n=t-(e-u);return p?d(n,i-(e-c)):n}(e))}function x(e){return f=void 0,y&&r?b(e):(r=o=void 0,a)}function O(){var e=m(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(p)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=v(t)||0,g(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},O.flush=function(){return void 0===f?a:x(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},{form:b,input:S,textarea:h}=y,j={};!function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e||!e.email||!e.message)return;S.value=e.email,h.value=e.message}catch{alert("Error in local storage! Empty key value.")}}(),b.addEventListener("input",t((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(!t||!t.email||!t.message)return;console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.d93761f9.js.map

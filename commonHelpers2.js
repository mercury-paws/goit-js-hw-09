import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const s="feedback-form-state",t=document.querySelector(".feedback-form");function n(e){const a=e.email.value,o=e.message.value;return{email:a,message:o}}t.addEventListener("input",e=>{e.preventDefault();const a=n(e.currentTarget),o=JSON.stringify(a);localStorage.setItem(s,o)});const r=localStorage.getItem(s);if(r){const e=JSON.parse(r);t.email.value=e.email,t.message.value=e.message}t.addEventListener("submit",e=>{e.preventDefault(),console.log(n(t)),localStorage.removeItem(s),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
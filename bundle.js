var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const a="undefined"!=typeof window;let d=a?()=>window.performance.now():()=>Date.now(),f=a?t=>requestAnimationFrame(t):t;const p=new Set;function g(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),0!==p.size&&f(g)}function m(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=$("style");return function(t,e){m(t.head||t,e),e.sheet}(h(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function z(){return w(" ")}function _(){return w("")}function q(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const E=new Map;let k,Y=0;function C(t,e,n,o,r,s,i,c=0){const u=16.666/o;let l="{\n";for(let t=0;t<=1;t+=u){const o=e+(n-e)*s(t);l+=100*t+`%{${i(o,1-o)}}\n`}const a=l+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,f=h(t),{stylesheet:p,rules:g}=E.get(f)||function(t,e){const n={stylesheet:v(e),rules:{}};return E.set(t,n),n}(f,t);g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${r}ms 1 both`,Y+=1,d}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),(Y-=r)||f(()=>{Y||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),E.clear())}))}function S(t){k=t}const A=[],T=[],M=[],O=[],j=Promise.resolve();let D=!1;function P(t){M.push(t)}const F=new Set;let H,I=0;function L(){const t=k;do{for(;I<A.length;){const t=A[I];I++,S(t),G(t.$$)}for(S(null),A.length=0,I=0;T.length;)T.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];F.has(e)||(F.add(e),e())}M.length=0}while(A.length);for(;O.length;)O.pop()();D=!1,F.clear(),S(t)}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function W(t,e,n){t.dispatchEvent(function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}(`${e?"intro":"outro"}${n}`))}const B=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function U(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),J.c.push(()=>{B.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}const X={duration:0};function Z(n,o,i,c){const u={direction:"both"};let l=o(n,i,u),a=c?0:1,m=null,h=null,v=null;function y(){v&&R(n,v)}function b(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:s=0,duration:i=300,easing:c=e,tick:u=t,css:$}=l||X,w={start:d()+s,b:o};o||(w.group=J,J.r+=1),m||h?h=w:($&&(y(),v=C(n,a,o,i,s,c,$)),o&&u(0,1),m=b(w,i),P(()=>W(n,o,"start")),function(t){let e;0===p.size&&f(g),new Promise(n=>{p.add(e={c:t,f:n})})}(t=>{if(h&&t>h.start&&(m=b(h,i),h=null,W(n,m.b,"start"),$&&(y(),v=C(n,a,m.b,m.duration,0,c,l.css))),m)if(t>=m.end)u(a=m.b,1-a),W(n,m.b,"end"),h||(m.b?y():--m.group.r||r(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;a=m.a+m.d*c(e/m.duration),u(a,1-a)}return!(!m&&!h)}))}return{run(t){s(l)?(H||(H=Promise.resolve()).then(()=>{H=null}),H).then(()=>{l=l(u),$(t)}):$(t)},end(){y(),m=h=null}}}function tt(t,e){-1===t.$$.dirty[0]&&(A.push(t),D||(D=!0,j.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,i,c,u,l,a,d,f=[-1]){const p=k;S(e);const g=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:i.target||p.$$.root};d&&d(g.root);let m=!1;if(g.ctx=c?c(e,i.props||{},(t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),m&&tt(e,t)),n}):[],g.update(),m=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),i.target){if(i.hydrate){const t=(h=i.target,Array.from(h.childNodes));g.fragment&&g.fragment.l(t),t.forEach(b)}else g.fragment&&g.fragment.c();i.intro&&U(e.$$.fragment),function(t,e,o,i){const{fragment:c,after_update:u}=t.$$;c&&c.m(e,o),i||P(()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(P)}(e,i.target,i.anchor,i.customElement),L()}var h;S(p)}class nt{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>`opacity: ${t*s}`}}const rt=[];const st=function(){const{subscribe:e,set:n,update:o}=function(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!rt.length;for(const t of r)t[1](),rt.push(t,e);if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const u=[i,c];return r.add(u),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}(0);return{subscribe:e,increment:()=>o(t=>t+1),decrement:()=>o(t=>t-1),reset:()=>n(0)}}();function it(t){let e,n,o,r;const s=[lt,ut,ct],i=[];function c(t,e){return 0===t[4]?0:t[4]>0&&t[4]<=t[5].length?1:2}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=_()},m(t,n){i[e].m(t,n),y(t,o,n),r=!0},p(t,r){let u=e;(e=c(t))===u?i[e].p(t,r):(K(),V(i[u],1,1,()=>{i[u]=null}),Q(),(n=i[e])?n.p(t,r):(n=i[e]=s[e](t)).c(),U(n,1),n.m(o.parentNode,o))},i(t){r||(U(n),r=!0)},o(t){V(n),r=!1},d(t){i[e].d(t),t&&b(o)}}}function ct(t){let e,n,o,r,s,i,c,l,a,d,f,p,g,h,v=t[5].length+"",_=t[6][t[3]]+"";return{c(){e=$("div"),n=$("div"),o=$("img"),s=z(),i=$("div"),c=w(t[0]),l=w(" / "),a=w(v),d=z(),f=$("div"),p=w(_),u(o.src,r="./results/"+t[3]+".webp")||x(o,"src",r),x(o,"alt",""),x(o,"class","result-img svelte-rqgz7y"),x(n,"class","result-img-container svelte-rqgz7y"),x(i,"class","title svelte-rqgz7y"),x(f,"class","result-text svelte-rqgz7y"),x(e,"class","slide svelte-rqgz7y")},m(t,r){y(t,e,r),m(e,n),m(n,o),m(e,s),m(e,i),m(i,c),m(i,l),m(i,a),m(e,d),m(e,f),m(f,p),h=!0},p(t,e){(!h||8&e&&!u(o.src,r="./results/"+t[3]+".webp"))&&x(o,"src",r),(!h||1&e)&&N(c,t[0]),(!h||8&e)&&_!==(_=t[6][t[3]]+"")&&N(p,_)},i(t){h||(P(()=>{g||(g=Z(e,ot,{},!0)),g.run(1)}),h=!0)},o(t){g||(g=Z(e,ot,{},!1)),g.run(0),h=!1},d(t){t&&b(e),t&&g&&g.end()}}}function ut(t){let e,n,o,r;const s=[dt,at],i=[];function c(t,e){return!1===t[2]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=_()},m(t,n){i[e].m(t,n),y(t,o,n),r=!0},p(t,r){let u=e;(e=c(t))===u?i[e].p(t,r):(K(),V(i[u],1,1,()=>{i[u]=null}),Q(),(n=i[e])?n.p(t,r):(n=i[e]=s[e](t)).c(),U(n,1),n.m(o.parentNode,o))},i(t){r||(U(n),r=!0)},o(t){V(n),r=!1},d(t){i[e].d(t),t&&b(o)}}}function lt(e){let n,o,r,s,i,c,u,l,a,d;return{c(){n=$("div"),(o=$("h1")).textContent="Порвался? Жаль",r=z(),(s=$("div")).innerHTML="Пройдите тест и узнайте насколько сильно вы порветесь.<br/><br/>Выбирайте наиболее близкий вам вариант ответа.",i=z(),(c=$("button")).textContent="Начать",x(o,"class","title svelte-rqgz7y"),x(s,"class","subtitle svelte-rqgz7y"),x(c,"class","button svelte-rqgz7y"),x(n,"class","slide svelte-rqgz7y")},m(t,u){y(t,n,u),m(n,o),m(n,r),m(n,s),m(n,i),m(n,c),l=!0,a||(d=q(c,"click",e[7]),a=!0)},p:t,i(t){l||(P(()=>{u||(u=Z(n,ot,{},!0)),u.run(1)}),l=!0)},o(t){u||(u=Z(n,ot,{},!1)),u.run(0),l=!1},d(t){t&&b(n),t&&u&&u.end(),a=!1,d()}}}function at(t){let e,n,o,r,s,i,c,l,a,d,f,p;return{c(){e=$("div"),n=$("div"),o=$("div"),r=$("video"),s=$("source"),c=z(),(l=$("button")).textContent="Далее",u(s.src,i="./video/"+t[5][t[4]-1].video+".mp4")||x(s,"src",i),x(s,"type","video/mp4"),r.autoplay=!0,r.controls=!0,r.loop=!0,r.muted=!0,r.playsInline=!0,x(r,"class","video svelte-rqgz7y"),x(o,"class","video-container svelte-rqgz7y"),x(n,"class","video-wrapper svelte-rqgz7y"),x(l,"class","button svelte-rqgz7y"),x(e,"class","slide svelte-rqgz7y")},m(i,u){y(i,e,u),m(e,n),m(n,o),m(o,r),m(r,s),m(e,c),m(e,l),d=!0,f||(p=q(l,"click",t[7]),f=!0)},p(t,e){(!d||16&e&&!u(s.src,i="./video/"+t[5][t[4]-1].video+".mp4"))&&x(s,"src",i)},i(t){d||(P(()=>{a||(a=Z(e,ot,{},!0)),a.run(1)}),d=!0)},o(t){a||(a=Z(e,ot,{},!1)),a.run(0),d=!1},d(t){t&&b(e),t&&a&&a.end(),f=!1,p()}}}function dt(t){let e,n,o,s,i,c,u,l,a,d,f,p,g=t[5][t[4]-1].answerYes+"",h=t[5][t[4]-1].answerNo+"";return{c(){e=$("div"),n=$("div"),o=$("div"),s=w(g),i=z(),c=$("div"),u=$("div"),l=w(h),x(o,"class","quote svelte-rqgz7y"),x(n,"class","answer svelte-rqgz7y"),x(u,"class","quote svelte-rqgz7y"),x(c,"class","answer svelte-rqgz7y"),x(e,"class","slide slide--question svelte-rqgz7y")},m(r,a){y(r,e,a),m(e,n),m(n,o),m(o,s),m(e,i),m(e,c),m(c,u),m(u,l),d=!0,f||(p=[q(o,"click",t[8]),q(u,"click",t[9])],f=!0)},p(t,e){(!d||16&e)&&g!==(g=t[5][t[4]-1].answerYes+"")&&N(s,g),(!d||16&e)&&h!==(h=t[5][t[4]-1].answerNo+"")&&N(l,h)},i(t){d||(P(()=>{a||(a=Z(e,ot,{},!0)),a.run(1)}),d=!0)},o(t){a||(a=Z(e,ot,{},!1)),a.run(0),d=!1},d(t){t&&b(e),t&&a&&a.end(),f=!1,r(p)}}}function ft(t){let e,n,o=!1===t[1]&&it(t);return{c(){e=$("main"),o&&o.c(),x(e,"class","svelte-rqgz7y")},m(t,r){y(t,e,r),o&&o.m(e,null),n=!0},p(t,[n]){!1===t[1]?o?(o.p(t,n),2&n&&U(o,1)):((o=it(t)).c(),U(o,1),o.m(e,null)):o&&(K(),V(o,1,1,()=>{o=null}),Q())},i(t){n||(U(o),n=!0)},o(t){V(o),n=!1},d(t){t&&b(e),o&&o.d()}}}function pt(t,e,n){let o;l(t,st,t=>n(4,o=t));let r=0,s=!1,i=!1,c=[{video:"witcher",answerYes:"Ведьмак 3 – это практически Эверст игрового мира в своем жанре",answerNo:"Госпаде, спустя 4 дня, игры только в Ведьмака, я наконец то его прошёл. На 15-м часу, меня уже задолбало чистить карту от вопросиков и сайд-квестов, так что я просто через консольные команды сделал себе 100-й уровень и бегал по сюжету, да сайдам которые связаны с персонажами. Меня деражал в этой игре только сюжет, который и правда неплохой, Рэды умеют в кино, но геймплей ме, что в киберпанке, что здесь. Концовка у меня вышла где-то между плохой и средней, наверно потому-то я пытался и в Трисс и в Йенефер, а жаль. И хочу пожелать тому человеку который делал миникарту гореть в аду. Этот кал, в углу экрана постоянно меня заводил куда не нужно, иногда он вообще не видел стенку, и пытался провести меня через эти стены, всю игру на него горел. А ещё я горел на коллизию, я постоянно в бою застревал в ней, игра конечно большая, но очень было не приятно. Остались только длс и можно удалять этот кал с компудактера."},{video:"anime",answerYes:"Я посмотрел 200+ тайтлов, и считаю что аниме - это охуенно",answerNo:"Посмотрел около 300 - аниме говно с самоповтором"},{video:"genshin",answerYes:"Для бесплатной гача-дрочильни с вайфу Genshin Impact сделана очень хорошо. Уму не постижимо сколько человекочасов потрачено на разработку, прописывание лора и создание образов персонажей. Аниматорам, которые работали над некоторыми катсценами хочется пожать руки, потому что глядя на них создаётся впечатление, что смотришь довольно неплохое аниме",answerNo:"Genshin Impact - это даже не игра, а просто дешевый всратый мусор для выкачки денег"},{video:"padoru",answerYes:"Люди делятся духом падору друг с другом — и это прекрасно. Праздничная Неро всё уверенней становится доброй ежегодной традицией среди любителей аниме",answerNo:"Очередная завирусившаяся хуета, гнилой мем, презираю всех, у кого на аве падору"},{video:"gothic",answerYes:"Готика 2 - это как Терминатор 2. Больше, масштабней, дороже, шире, глубже, жирней и в то же время остающейся - ОХРЕНИТЕЛЬНОЙ!",answerNo:"скачал эту вашу готику 2, потыкал да и чето кал какой-то, кто создавал управление? ниче непонятно, сливает первый же волк, че так сложно? еще и графика какой-то пластилиновый кусок кала, кто вообще в такое играет"},{video:"elden",answerYes:"Elden Ring точно удалась, а всё долгое томительное ожидание было не зря. Она создана с чётким пониманием того, за что фанаты полюбили серию Souls, эксплуатирует её самые сильные стороны и оттачивает плюсы. При этом трудно представить лучшую точку входа в жанр, чем Elden Ring — игру большую, в меру сложную и невероятно увлекательную.",answerNo:"Один тот факт, что Elden Ring получила 97 баллов на Metacritic, говорит о том, что рецензентам безразличен пользовательский интерфейс. И стабильная производительность на ПК... И, по правде, дизайн квестов"},{video:"godofwar",answerYes:"Я с трепетом ждал Ragnarök — и в итоге получил ровно то, чего хотел. Большое приключение с по-настоящему живыми и убедительными персонажами, к которым быстро привязываешься. Однако на одних лишь главных героях авторы не остановились, ведь у каждого из второстепенных персонажей, от Фреи до гномихи Лунды, есть свой характер и харизма. Чего только стоит Один в исполнении Ричарда Шиффа («Западное крыло»), каждое появление которого в кадре — отдельное событие.",answerNo:"Ну, сони посмотрели как скакнула популярность у мгр и дмс за счет мемов и решили... сделать ковейер из мемов. Знаете, есть какая-то сверх мерзотность в таком подходе. Когда игра настолько никчемна и уныла в своей сути, в ней нет ничего запоминающегося. Ни музыки, ни катсцен, ни геймплея, просто нихуйя. Игра посредственность. И из этого ковейерного кала пытаются вылепить КОНВЕЙЕРНЫЕ МЕМЫ БЛЯДЬ!!1 Какая же это гнусная хуйня. Это буквально та же самая ситуация, когда богатый папаша пытается вылепить из своего отпрыска знаменитость, но отпрыск настолько бездарный обмудок, что ему ничего не поможет. Вот это и есть новый год оф вар, вот это и есть подход к играм сони. Блядь, я никогда не думал, что они настолько скатятся, хуже уже просто некуда."},{video:"horizon",answerYes:"Horizon Forbidden West — самый амбициозный проект PlayStation на сегодняшний день. Настолько больших и комплексных игр Sony ещё никогда не делала, а первая часть на фоне сиквела кажется лишь грубым наброском.",answerNo:"Horizon Forbidden West - созданный нейросетью бездарный клон асассинов с самым пресным в истории геймплеем и сюжетом. Не стоит внимания от слова совсем"},{video:"rdr",answerYes:"Как по мне, RDR2 просто напросто лучшая игра последних десяти лет минимум. Настоящий шедевр, аналог которого мы вряд ли увидим в обозримом будущем, если увидим вообще.",answerNo:"Ее медлительность не дает ничего, кроме растягивания игры и нежелания в нее играть, как вспомнишь какие там медленные анимации. Игра для школьников, у которых сотни часов свободного времени"},{video:"cyberpunk",answerYes:"бля, Cyberpunk 2077 вышла охуенной. Прям то, что я ожидал! Мои глаза просто получали огразмы от красот Найт сити, геймплея, музыки, сюжетки, да даже второстепенные задания хороши, молчу уже про персонажей. Они все запоминающие. Чего стоит чувак у которого вместо носа граната и парня, который установил имплант себе в хер и он прям дымился.",answerNo:"Киберпанку не место в топах - это чисто коммерческий скам на гране мошенничества, этот продукт должен остаться примером крупным издателям как не надо делать игры. Сидипыры не сделали ничего чтобы сделать игру лучше, она до сих пор багует, она до сих пор на пастгене выглядит так, что лучше бы не выходила, она и близко не та которой ее малевали продажные блогеры и журнализы и никогда такой не будет."}],u=[0,1,3,5,8,10],a=0;function d(){o===c.length+1&&function(){for(let t=0;t<u.length;t++)if(t!==u.length-1){if(u[t]<=r&&u[t+1]>r)return void n(3,a=t)}else n(3,a=t)}()}return[r,s,i,a,o,c,["Поздравляю! Вы порвались. Полностью.","Поздравляю! Вы очень легко рвётесь, но еще остались вещи, которыми вы способны наслаждаться.","Поздравляю! Вы легко рвётесь, но в мире осталось ещё много вещей от которых вы способны получать удовольствие.","Поздравляю! Вы - нормис. Есть вещи, которые вам не нравятся, но это нормально и применимо к большинству людей.","Поздравляю! Вы практически невозмутимы. Есть пара неприятных моментов, но они не сильно выбивают вас из колеи.","Поздравляю! Вы полностью невозмутимы и просто наслаждаетесь жизнью."],function(){s||(n(1,s=!0),setTimeout(()=>{n(2,i=!1),st.increment(),d(),n(1,s=!1)},500))},function(){s||(n(1,s=!0),n(0,r+=1),setTimeout(()=>{st.increment(),d(),n(1,s=!1)},500))},function(){s||(n(1,s=!0),setTimeout(()=>{n(2,i=!0),n(1,s=!1)},500))}]}return new class extends nt{constructor(t){super(),et(this,t,pt,ft,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

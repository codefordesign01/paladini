/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
	"use strict";
	const t = {
			find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
			parents(t, e) {
				const n = [];
				let i = t.parentNode;
				for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
				return n
			},
			prev(t, e) {
				let n = t.previousElementSibling;
				for (; n;) {
					if (n.matches(e)) return [n];
					n = n.previousElementSibling
				}
				return []
			},
			next(t, e) {
				let n = t.nextElementSibling;
				for (; n;) {
					if (n.matches(e)) return [n];
					n = n.nextElementSibling
				}
				return []
			}
		},
		e = "transitionend",
		n = t => {
			let e = t.getAttribute("data-bs-target");
			if (!e || "#" === e) {
				let n = t.getAttribute("href");
				if (!n || !n.includes("#") && !n.startsWith(".")) return null;
				n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
			}
			return e
		},
		i = t => {
			const e = n(t);
			return e && document.querySelector(e) ? e : null
		},
		s = t => {
			const e = n(t);
			return e ? document.querySelector(e) : null
		},
		r = t => {
			t.dispatchEvent(new Event(e))
		},
		o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		a = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
		l = (t, e, n) => {
			Object.keys(n).forEach((i => {
				const s = n[i],
					r = e[i],
					a = r && o(r) ? "element" : null == (l = r) ? `${l}` : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
				var l;
				if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)
			}))
		},
		c = t => t.offsetHeight,
		u = () => {
			const {
				jQuery: t
			} = window;
			return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
		},
		h = [],
		d = () => "rtl" === document.documentElement.dir,
		g = t => {
			var e;
			e = () => {
				const e = u();
				if (e) {
					const n = t.NAME,
						i = e.fn[n];
					e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = i, t.jQueryInterface)
				}
			}, "loading" === document.readyState ? (h.length || document.addEventListener("DOMContentLoaded", (() => {
				h.forEach((t => t()))
			})), h.push(e)) : e()
		},
		f = t => {
			"function" == typeof t && t()
		},
		m = (t, n, i = !0) => {
			if (!i) return void f(t);
			const s = (t => {
				if (!t) return 0;
				let {
					transitionDuration: e,
					transitionDelay: n
				} = window.getComputedStyle(t);
				const i = Number.parseFloat(e),
					s = Number.parseFloat(n);
				return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
			})(n) + 5;
			let o = !1;
			const a = ({
				target: i
			}) => {
				i === n && (o = !0, n.removeEventListener(e, a), f(t))
			};
			n.addEventListener(e, a), setTimeout((() => {
				o || r(n)
			}), s)
		},
		p = /[^.]*(?=\..*)\.|.*/,
		_ = /\..*/,
		v = /::\d+$/,
		b = {};
	let y = 1;
	const E = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		A = /^(mouseenter|mouseleave)/i,
		T = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function w(t, e) {
		return e && `${e}::${y++}` || t.uidEvent || y++
	}

	function I(t) {
		const e = w(t);
		return t.uidEvent = e, b[e] = b[e] || {}, b[e]
	}

	function L(t, e, n = null) {
		const i = Object.keys(t);
		for (let s = 0, r = i.length; s < r; s++) {
			const r = t[i[s]];
			if (r.originalHandler === e && r.delegationSelector === n) return r
		}
		return null
	}

	function $(t, e, n) {
		const i = "string" == typeof e,
			s = i ? n : e;
		let r = O(t);
		return T.has(r) || (r = t), [i, s, r]
	}

	function S(t, e, n, i, s) {
		if ("string" != typeof e || !t) return;
		if (n || (n = i, i = null), A.test(e)) {
			const t = t => function(e) {
				if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
			};
			i ? i = t(i) : n = t(n)
		}
		const [r, o, a] = $(e, n, i), l = I(t), c = l[a] || (l[a] = {}), u = L(c, o, r ? n : null);
		if (u) return void(u.oneOff = u.oneOff && s);
		const h = w(o, e.replace(p, "")),
			d = r ? function(t, e, n) {
				return function i(s) {
					const r = t.querySelectorAll(e);
					for (let {
							target: o
						} = s; o && o !== this; o = o.parentNode)
						for (let a = r.length; a--;)
							if (r[a] === o) return s.delegateTarget = o, i.oneOff && C.off(t, s.type, e, n), n.apply(o, [s]);
					return null
				}
			}(t, n, i) : function(t, e) {
				return function n(i) {
					return i.delegateTarget = t, n.oneOff && C.off(t, i.type, e), e.apply(t, [i])
				}
			}(t, n);
		d.delegationSelector = r ? n : null, d.originalHandler = o, d.oneOff = s, d.uidEvent = h, c[h] = d, t.addEventListener(a, d, r)
	}

	function D(t, e, n, i, s) {
		const r = L(e[n], i, s);
		r && (t.removeEventListener(n, r, Boolean(s)), delete e[n][r.uidEvent])
	}

	function O(t) {
		return t = t.replace(_, ""), E[t] || t
	}
	const C = {
			on(t, e, n, i) {
				S(t, e, n, i, !1)
			},
			one(t, e, n, i) {
				S(t, e, n, i, !0)
			},
			off(t, e, n, i) {
				if ("string" != typeof e || !t) return;
				const [s, r, o] = $(e, n, i), a = o !== e, l = I(t), c = e.startsWith(".");
				if (void 0 !== r) {
					if (!l || !l[o]) return;
					return void D(t, l, o, r, s ? n : null)
				}
				c && Object.keys(l).forEach((n => {
					! function(t, e, n, i) {
						const s = e[n] || {};
						Object.keys(s).forEach((r => {
							if (r.includes(i)) {
								const i = s[r];
								D(t, e, n, i.originalHandler, i.delegationSelector)
							}
						}))
					}(t, l, n, e.slice(1))
				}));
				const u = l[o] || {};
				Object.keys(u).forEach((n => {
					const i = n.replace(v, "");
					if (!a || e.includes(i)) {
						const e = u[n];
						D(t, l, o, e.originalHandler, e.delegationSelector)
					}
				}))
			},
			trigger(t, e, n) {
				if ("string" != typeof e || !t) return null;
				const i = u(),
					s = O(e),
					r = e !== s,
					o = T.has(s);
				let a, l = !0,
					c = !0,
					h = !1,
					d = null;
				return r && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), o ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
					bubbles: l,
					cancelable: !0
				}), void 0 !== n && Object.keys(n).forEach((t => {
					Object.defineProperty(d, t, {
						get: () => n[t]
					})
				})), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
			}
		},
		x = new Map;
	var N = {
		set(t, e, n) {
			x.has(t) || x.set(t, new Map);
			const i = x.get(t);
			i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
		},
		get: (t, e) => x.has(t) && x.get(t).get(e) || null,
		remove(t, e) {
			if (!x.has(t)) return;
			const n = x.get(t);
			n.delete(e), 0 === n.size && x.delete(t)
		}
	};
	class k {
		constructor(t) {
			(t = a(t)) && (this._element = t, N.set(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			N.remove(this._element, this.constructor.DATA_KEY), C.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
				this[t] = null
			}))
		}
		_queueCallback(t, e, n = !0) {
			m(t, e, n)
		}
		static getInstance(t) {
			return N.get(t, this.DATA_KEY)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
		}
		static get VERSION() {
			return "5.0.2"
		}
		static get NAME() {
			throw new Error('You have to implement the static method "NAME", for each component!')
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`
		}
	}
	const j = '[data-bs-toggle="button"]';
	class P extends k {
		static get NAME() {
			return "button"
		}
		toggle() {
			this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = P.getOrCreateInstance(this);
				"toggle" === t && e[t]()
			}))
		}
	}

	function M(t) {
		return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
	}

	function X(t) {
		return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
	}
	C.on(document, "click.bs.button.data-api", j, (t => {
		t.preventDefault();
		const e = t.target.closest(j);
		P.getOrCreateInstance(e).toggle()
	})), g(P);
	const q = {
			setDataAttribute(t, e, n) {
				t.setAttribute(`data-bs-${X(e)}`, n)
			},
			removeDataAttribute(t, e) {
				t.removeAttribute(`data-bs-${X(e)}`)
			},
			getDataAttributes(t) {
				if (!t) return {};
				const e = {};
				return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((n => {
					let i = n.replace(/^bs/, "");
					i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
				})), e
			},
			getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${X(e)}`)),
			offset(t) {
				const e = t.getBoundingClientRect();
				return {
					top: e.top + document.body.scrollTop,
					left: e.left + document.body.scrollLeft
				}
			},
			position: t => ({
				top: t.offsetTop,
				left: t.offsetLeft
			})
		},
		B = "carousel",
		H = ".bs.carousel",
		Y = ".data-api",
		K = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		Q = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		R = "next",
		V = "prev",
		W = "left",
		z = "right",
		F = {
			ArrowLeft: z,
			ArrowRight: W
		},
		U = `slide${H}`,
		Z = `slid${H}`,
		G = `keydown${H}`,
		J = `mouseenter${H}`,
		tt = `mouseleave${H}`,
		et = `touchstart${H}`,
		nt = `touchmove${H}`,
		it = `touchend${H}`,
		st = `pointerdown${H}`,
		rt = `pointerup${H}`,
		ot = `dragstart${H}`,
		at = `load${H}${Y}`,
		lt = `click${H}${Y}`,
		ct = "active",
		ut = ".active.carousel-item",
		ht = "touch";
	class dt extends k {
		constructor(e, n) {
			super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(n), this._indicatorsElement = t.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
		}
		static get Default() {
			return K
		}
		static get NAME() {
			return B
		}
		next() {
			this._slide(R)/*!
			* Bootstrap v5.0.2 (https://getbootstrap.com/)
			* Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
			* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
			*/
		!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let i=t.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(e)&&n.push(i),i=i.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]}},e="transitionend",n=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},i=t=>{const e=n(t);return e&&document.querySelector(e)?e:null},s=t=>{const e=n(t);return e?document.querySelector(e):null},r=t=>{t.dispatchEvent(new Event(e))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=e=>o(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?t.findOne(e):null,l=(t,e,n)=>{Object.keys(n).forEach((i=>{const s=n[i],r=e[i],a=r&&o(r)?"element":null==(l=r)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)}))},c=t=>t.offsetHeight,u=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},h=[],d=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}},"loading"===document.readyState?(h.length||document.addEventListener("DOMContentLoaded",(()=>{h.forEach((t=>t()))})),h.push(e)):e()},f=t=>{"function"==typeof t&&t()},m=(t,n,i=!0)=>{if(!i)return void f(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),s=Number.parseFloat(n);return i||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(n)+5;let o=!1;const a=({target:i})=>{i===n&&(o=!0,n.removeEventListener(e,a),f(t))};n.addEventListener(e,a),setTimeout((()=>{o||r(n)}),s)},p=/[^.]*(?=\..*)\.|.*/,_=/\..*/,v=/::\d+$/,b={};let y=1;const E={mouseenter:"mouseover",mouseleave:"mouseout"},A=/^(mouseenter|mouseleave)/i,T=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function I(t,e){return e&&`${e}::${y++}`||t.uidEvent||y++}function L(t){const e=I(t);return t.uidEvent=e,b[e]=b[e]||{},b[e]}function w(t,e,n=null){const i=Object.keys(t);for(let s=0,r=i.length;s<r;s++){const r=t[i[s]];if(r.originalHandler===e&&r.delegationSelector===n)return r}return null}function $(t,e,n){const i="string"==typeof e,s=i?n:e;let r=O(t);return T.has(r)||(r=t),[i,s,r]}function S(t,e,n,i,s){if("string"!=typeof e||!t)return;if(n||(n=i,i=null),A.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};i?i=t(i):n=t(n)}const[r,o,a]=$(e,n,i),l=L(t),c=l[a]||(l[a]={}),u=w(c,o,r?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const h=I(o,e.replace(p,"")),d=r?function(t,e,n){return function i(s){const r=t.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return s.delegateTarget=o,i.oneOff&&C.off(t,s.type,e,n),n.apply(o,[s]);return null}}(t,n,i):function(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&C.off(t,i.type,e),e.apply(t,[i])}}(t,n);d.delegationSelector=r?n:null,d.originalHandler=o,d.oneOff=s,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function D(t,e,n,i,s){const r=w(e[n],i,s);r&&(t.removeEventListener(n,r,Boolean(s)),delete e[n][r.uidEvent])}function O(t){return t=t.replace(_,""),E[t]||t}const C={on(t,e,n,i){S(t,e,n,i,!1)},one(t,e,n,i){S(t,e,n,i,!0)},off(t,e,n,i){if("string"!=typeof e||!t)return;const[s,r,o]=$(e,n,i),a=o!==e,l=L(t),c=e.startsWith(".");if(void 0!==r){if(!l||!l[o])return;return void D(t,l,o,r,s?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,i){const s=e[n]||{};Object.keys(s).forEach((r=>{if(r.includes(i)){const i=s[r];D(t,e,n,i.originalHandler,i.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(v,"");if(!a||e.includes(i)){const e=u[n];D(t,l,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const i=u(),s=O(e),r=e!==s,o=T.has(s);let a,l=!0,c=!0,h=!1,d=null;return r&&i&&(a=i.Event(e,n),i(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),o?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(d,t,{get:()=>n[t]})})),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},x=new Map;var N={set(t,e,n){x.has(t)||x.set(t,new Map);const i=x.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,e)=>x.has(t)&&x.get(t).get(e)||null,remove(t,e){if(!x.has(t))return;const n=x.get(t);n.delete(e),0===n.size&&x.delete(t)}};class k{constructor(t){(t=a(t))&&(this._element=t,N.set(this._element,this.constructor.DATA_KEY,this))}dispose(){N.remove(this._element,this.constructor.DATA_KEY),C.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){m(t,e,n)}static getInstance(t){return N.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const j='[data-bs-toggle="button"]';class P extends k{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=P.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function M(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function X(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}C.on(document,"click.bs.button.data-api",j,(t=>{t.preventDefault();const e=t.target.closest(j);P.getOrCreateInstance(e).toggle()})),g(P);const q={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${X(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${X(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])})),e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${X(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},B="carousel",H=".bs.carousel",Y=".data-api",K={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Q={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},R="next",V="prev",W="left",z="right",F={ArrowLeft:z,ArrowRight:W},U=`slide${H}`,Z=`slid${H}`,G=`keydown${H}`,J=`mouseenter${H}`,tt=`mouseleave${H}`,et=`touchstart${H}`,nt=`touchmove${H}`,it=`touchend${H}`,st=`pointerdown${H}`,rt=`pointerup${H}`,ot=`dragstart${H}`,at=`load${H}${Y}`,lt=`click${H}${Y}`,ct="active",ut=".active.carousel-item",ht="touch";class dt extends k{constructor(e,n){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(n),this._indicatorsElement=t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return K}static get NAME(){return B}next(){this._slide(R)}nextWhenVisible(){var t;!document.hidden&&(t=this._element,o(t)&&0!==t.getClientRects().length&&"visible"===getComputedStyle(t).getPropertyValue("visibility"))&&this.next()}prev(){this._slide(V)}pause(e){e||(this._isPaused=!0),t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(r(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=t.findOne(ut,this._element);const n=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void C.one(this._element,Z,(()=>this.to(e)));if(n===e)return this.pause(),void this.cycle();const i=e>n?R:V;this._slide(i,this._items[e])}_getConfig(t){return t={...K,...q.getDataAttributes(this._element),..."object"==typeof t?t:{}},l(B,t,Q),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?z:W)}_addEventListeners(){this._config.keyboard&&C.on(this._element,G,(t=>this._keydown(t))),"hover"===this._config.pause&&(C.on(this._element,J,(t=>this.pause(t))),C.on(this._element,tt,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=t=>{!this._pointerEvent||"pen"!==t.pointerType&&t.pointerType!==ht?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=t=>{!this._pointerEvent||"pen"!==t.pointerType&&t.pointerType!==ht||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};t.find(".carousel-item img",this._element).forEach((t=>{C.on(t,ot,(t=>t.preventDefault()))})),this._pointerEvent?(C.on(this._element,st,(t=>e(t))),C.on(this._element,rt,(t=>i(t))),this._element.classList.add("pointer-event")):(C.on(this._element,et,(t=>e(t))),C.on(this._element,nt,(t=>n(t))),C.on(this._element,it,(t=>i(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=F[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(e){return this._items=e&&e.parentNode?t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(t,e){const n=t===R;return((t,e,n,i)=>{let s=t.indexOf(e);if(-1===s)return t[!n&&i?t.length-1:0];const r=t.length;return s+=n?1:-1,i&&(s=(s+r)%r),t[Math.max(0,Math.min(s,r-1))]})(this._items,e,n,this._config.wrap)}_triggerSlideEvent(e,n){const i=this._getItemIndex(e),s=this._getItemIndex(t.findOne(ut,this._element));return C.trigger(this._element,U,{relatedTarget:e,direction:n,from:s,to:i})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const n=t.findOne(".active",this._indicatorsElement);n.classList.remove(ct),n.removeAttribute("aria-current");const i=t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<i.length;t++)if(Number.parseInt(i[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){i[t].classList.add(ct),i[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||t.findOne(ut,this._element);if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);n?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=n):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,n){const i=this._directionToOrder(e),s=t.findOne(ut,this._element),r=this._getItemIndex(s),o=n||this._getItemByOrder(i,s),a=this._getItemIndex(o),l=Boolean(this._interval),u=i===R,h=u?"carousel-item-start":"carousel-item-end",d=u?"carousel-item-next":"carousel-item-prev",g=this._orderToDirection(i);if(o&&o.classList.contains(ct))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,g).defaultPrevented)return;if(!s||!o)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{C.trigger(this._element,Z,{relatedTarget:o,direction:g,from:r,to:a})};if(this._element.classList.contains("slide")){o.classList.add(d),c(o),s.classList.add(h),o.classList.add(h);const t=()=>{o.classList.remove(h,d),o.classList.add(ct),s.classList.remove(ct,d,h),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,s,!0)}else s.classList.remove(ct),o.classList.add(ct),this._isSliding=!1,f();l&&this.cycle()}_directionToOrder(t){return[z,W].includes(t)?d()?t===W?V:R:t===W?R:V:t}_orderToDirection(t){return[R,V].includes(t)?d()?t===V?W:z:t===V?z:W:t}static carouselInterface(t,e){const n=dt.getOrCreateInstance(t,e);let{_config:i}=n;"object"==typeof e&&(i={...i,...e});const s="string"==typeof e?e:i.slide;if("number"==typeof e)n.to(e);else if("string"==typeof s){if(void 0===n[s])throw new TypeError(`No method named "${s}"`);n[s]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){dt.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const n={...q.getDataAttributes(e),...q.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),dt.carouselInterface(e,n),i&&dt.getInstance(e).to(i),t.preventDefault()}}C.on(document,lt,"[data-bs-slide], [data-bs-slide-to]",dt.dataApiClickHandler),C.on(window,at,(()=>{const e=t.find('[data-bs-ride="carousel"]');for(let t=0,n=e.length;t<n;t++)dt.carouselInterface(e[t],dt.getInstance(e[t]))})),g(dt);const gt="collapse",ft="bs.collapse",mt=`.${ft}`,pt={toggle:!0,parent:""},_t={toggle:"boolean",parent:"(string|element)"},vt=`show${mt}`,bt=`shown${mt}`,yt=`hide${mt}`,Et=`hidden${mt}`,At=`click${mt}.data-api`,Tt="show",It="collapse",Lt="collapsing",wt="collapsed",$t="width",St='[data-bs-toggle="collapse"]';class Dt extends k{constructor(e,n){super(e),this._isTransitioning=!1,this._config=this._getConfig(n),this._triggerArray=t.find(`${St}[href="#${this._element.id}"],${St}[data-bs-target="#${this._element.id}"]`);const s=t.find(St);for(let e=0,n=s.length;e<n;e++){const n=s[e],r=i(n),o=t.find(r).filter((t=>t===this._element));null!==r&&o.length&&(this._selector=r,this._triggerArray.push(n))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return pt}static get NAME(){return gt}toggle(){this._element.classList.contains(Tt)?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains(Tt))return;let e,n;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter((t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains(It))),0===e.length&&(e=null));const i=t.findOne(this._selector);if(e){const t=e.find((t=>i!==t));if(n=t?Dt.getInstance(t):null,n&&n._isTransitioning)return}if(C.trigger(this._element,vt).defaultPrevented)return;e&&e.forEach((t=>{i!==t&&Dt.collapseInterface(t,"hide"),n||N.set(t,ft,null)}));const s=this._getDimension();this._element.classList.remove(It),this._element.classList.add(Lt),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach((t=>{t.classList.remove(wt),t.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);const r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback((()=>{this._element.classList.remove(Lt),this._element.classList.add(It,Tt),this._element.style[s]="",this.setTransitioning(!1),C.trigger(this._element,bt)}),this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._element.classList.contains(Tt))return;if(C.trigger(this._element,yt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,c(this._element),this._element.classList.add(Lt),this._element.classList.remove(It,Tt);const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],n=s(e);n&&!n.classList.contains(Tt)&&(e.classList.add(wt),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback((()=>{this.setTransitioning(!1),this._element.classList.remove(Lt),this._element.classList.add(It),C.trigger(this._element,Et)}),this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...pt,...t}).toggle=Boolean(t.toggle),l(gt,t,_t),t}_getDimension(){return this._element.classList.contains($t)?$t:"height"}_getParent(){let{parent:e}=this._config;e=a(e);const n=`${St}[data-bs-parent="${e}"]`;return t.find(n,e).forEach((t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])})),e}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const n=t.classList.contains(Tt);e.forEach((t=>{n?t.classList.remove(wt):t.classList.add(wt),t.setAttribute("aria-expanded",n)}))}static collapseInterface(t,e){let n=Dt.getInstance(t);const i={...pt,...q.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!n&&i.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(i.toggle=!1),n||(n=new Dt(t,i)),"string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}static jQueryInterface(t){return this.each((function(){Dt.collapseInterface(this,t)}))}}return C.on(document,At,St,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const n=q.getDataAttributes(this),s=i(this);t.find(s).forEach((t=>{const e=Dt.getInstance(t);let i;e?(null===e._parent&&"string"==typeof n.parent&&(e._config.parent=n.parent,e._parent=e._getParent()),i="toggle"):i=n,Dt.collapseInterface(t,i)}))})),g(Dt),{Button:P,Carousel:dt,Collapse:Dt}}));
		}
		nextWhenVisible() {
			var t;
			!document.hidden && (t = this._element, o(t) && 0 !== t.getClientRects().length && "visible" === getComputedStyle(t).getPropertyValue("visibility")) && this.next()
		}
		prev() {
			this._slide(V)
		}
		pause(e) {
			e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
		}
		cycle(t) {
			t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
		}
		to(e) {
			this._activeElement = t.findOne(ut, this._element);
			const n = this._getItemIndex(this._activeElement);
			if (e > this._items.length - 1 || e < 0) return;
			if (this._isSliding) return void C.one(this._element, Z, (() => this.to(e)));
			if (n === e) return this.pause(), void this.cycle();
			const i = e > n ? R : V;
			this._slide(i, this._items[e])
		}
		_getConfig(t) {
			return t = {
				...K,
				...q.getDataAttributes(this._element),
				..."object" == typeof t ? t : {}
			}, l(B, t, Q), t
		}
		_handleSwipe() {
			const t = Math.abs(this.touchDeltaX);
			if (t <= 40) return;
			const e = t / this.touchDeltaX;
			this.touchDeltaX = 0, e && this._slide(e > 0 ? z : W)
		}
		_addEventListeners() {
			this._config.keyboard && C.on(this._element, G, (t => this._keydown(t))), "hover" === this._config.pause && (C.on(this._element, J, (t => this.pause(t))), C.on(this._element, tt, (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
		}
		_addTouchEventListeners() {
			const e = t => {
					!this._pointerEvent || "pen" !== t.pointerType && t.pointerType !== ht ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
				},
				n = t => {
					this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
				},
				i = t => {
					!this._pointerEvent || "pen" !== t.pointerType && t.pointerType !== ht || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
				};
			t.find(".carousel-item img", this._element).forEach((t => {
				C.on(t, ot, (t => t.preventDefault()))
			})), this._pointerEvent ? (C.on(this._element, st, (t => e(t))), C.on(this._element, rt, (t => i(t))), this._element.classList.add("pointer-event")) : (C.on(this._element, et, (t => e(t))), C.on(this._element, nt, (t => n(t))), C.on(this._element, it, (t => i(t))))
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = F[t.key];
			e && (t.preventDefault(), this._slide(e))
		}
		_getItemIndex(e) {
			return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
		}
		_getItemByOrder(t, e) {
			const n = t === R;
			return ((t, e, n, i) => {
				let s = t.indexOf(e);
				if (-1 === s) return t[!n && i ? t.length - 1 : 0];
				const r = t.length;
				return s += n ? 1 : -1, i && (s = (s + r) % r), t[Math.max(0, Math.min(s, r - 1))]
			})(this._items, e, n, this._config.wrap)
		}
		_triggerSlideEvent(e, n) {
			const i = this._getItemIndex(e),
				s = this._getItemIndex(t.findOne(ut, this._element));
			return C.trigger(this._element, U, {
				relatedTarget: e,
				direction: n,
				from: s,
				to: i
			})
		}
		_setActiveIndicatorElement(e) {
			if (this._indicatorsElement) {
				const n = t.findOne(".active", this._indicatorsElement);
				n.classList.remove(ct), n.removeAttribute("aria-current");
				const i = t.find("[data-bs-target]", this._indicatorsElement);
				for (let t = 0; t < i.length; t++)
					if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
						i[t].classList.add(ct), i[t].setAttribute("aria-current", "true");
						break
					}
			}
		}
		_updateInterval() {
			const e = this._activeElement || t.findOne(ut, this._element);
			if (!e) return;
			const n = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
			n ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n) : this._config.interval = this._config.defaultInterval || this._config.interval
		}
		_slide(e, n) {
			const i = this._directionToOrder(e),
				s = t.findOne(ut, this._element),
				r = this._getItemIndex(s),
				o = n || this._getItemByOrder(i, s),
				a = this._getItemIndex(o),
				l = Boolean(this._interval),
				u = i === R,
				h = u ? "carousel-item-start" : "carousel-item-end",
				d = u ? "carousel-item-next" : "carousel-item-prev",
				g = this._orderToDirection(i);
			if (o && o.classList.contains(ct)) return void(this._isSliding = !1);
			if (this._isSliding) return;
			if (this._triggerSlideEvent(o, g).defaultPrevented) return;
			if (!s || !o) return;
			this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
			const f = () => {
				C.trigger(this._element, Z, {
					relatedTarget: o,
					direction: g,
					from: r,
					to: a
				})
			};
			if (this._element.classList.contains("slide")) {
				o.classList.add(d), c(o), s.classList.add(h), o.classList.add(h);
				const t = () => {
					o.classList.remove(h, d), o.classList.add(ct), s.classList.remove(ct, d, h), this._isSliding = !1, setTimeout(f, 0)
				};
				this._queueCallback(t, s, !0)
			} else s.classList.remove(ct), o.classList.add(ct), this._isSliding = !1, f();
			l && this.cycle()
		}
		_directionToOrder(t) {
			return [z, W].includes(t) ? d() ? t === W ? V : R : t === W ? R : V : t
		}
		_orderToDirection(t) {
			return [R, V].includes(t) ? d() ? t === V ? W : z : t === V ? z : W : t
		}
		static carouselInterface(t, e) {
			const n = dt.getOrCreateInstance(t, e);
			let {
				_config: i
			} = n;
			"object" == typeof e && (i = {
				...i,
				...e
			});
			const s = "string" == typeof e ? e : i.slide;
			if ("number" == typeof e) n.to(e);
			else if ("string" == typeof s) {
				if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
				n[s]()
			} else i.interval && i.ride && (n.pause(), n.cycle())
		}
		static jQueryInterface(t) {
			return this.each((function() {
				dt.carouselInterface(this, t)
			}))
		}
		static dataApiClickHandler(t) {
			const e = s(this);
			if (!e || !e.classList.contains("carousel")) return;
			const n = {
					...q.getDataAttributes(e),
					...q.getDataAttributes(this)
				},
				i = this.getAttribute("data-bs-slide-to");
			i && (n.interval = !1), dt.carouselInterface(e, n), i && dt.getInstance(e).to(i), t.preventDefault()
		}
	}
	C.on(document, lt, "[data-bs-slide], [data-bs-slide-to]", dt.dataApiClickHandler), C.on(window, at, (() => {
		const e = t.find('[data-bs-ride="carousel"]');
		for (let t = 0, n = e.length; t < n; t++) dt.carouselInterface(e[t], dt.getInstance(e[t]))
	})), g(dt);
	const gt = "collapse",
		ft = "bs.collapse",
		mt = `.${ft}`,
		pt = {
			toggle: !0,
			parent: ""
		},
		_t = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		vt = `show${mt}`,
		bt = `shown${mt}`,
		yt = `hide${mt}`,
		Et = `hidden${mt}`,
		At = `click${mt}.data-api`,
		Tt = "show",
		wt = "collapse",
		It = "collapsing",
		Lt = "collapsed",
		$t = "width",
		St = '[data-bs-toggle="collapse"]';
	class Dt extends k {
		constructor(e, n) {
			super(e), this._isTransitioning = !1, this._config = this._getConfig(n), this._triggerArray = t.find(`${St}[href="#${this._element.id}"],${St}[data-bs-target="#${this._element.id}"]`);
			const s = t.find(St);
			for (let e = 0, n = s.length; e < n; e++) {
				const n = s[e],
					r = i(n),
					o = t.find(r).filter((t => t === this._element));
				null !== r && o.length && (this._selector = r, this._triggerArray.push(n))
			}
			this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
		}
		static get Default() {
			return pt
		}
		static get NAME() {
			return gt
		}
		toggle() {
			this._element.classList.contains(Tt) ? this.hide() : this.show()
		}
		show() {
			if (this._isTransitioning || this._element.classList.contains(Tt)) return;
			let e, n;
			this._parent && (e = t.find(".show, .collapsing", this._parent).filter((t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains(wt))), 0 === e.length && (e = null));
			const i = t.findOne(this._selector);
			if (e) {
				const t = e.find((t => i !== t));
				if (n = t ? Dt.getInstance(t) : null, n && n._isTransitioning) return
			}
			if (C.trigger(this._element, vt).defaultPrevented) return;
			e && e.forEach((t => {
				i !== t && Dt.collapseInterface(t, "hide"), n || N.set(t, ft, null)
			}));
			const s = this._getDimension();
			this._element.classList.remove(wt), this._element.classList.add(It), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((t => {
				t.classList.remove(Lt), t.setAttribute("aria-expanded", !0)
			})), this.setTransitioning(!0);
			const r = `scroll${s[0].toUpperCase()+s.slice(1)}`;
			this._queueCallback((() => {
				this._element.classList.remove(It), this._element.classList.add(wt, Tt), this._element.style[s] = "", this.setTransitioning(!1), C.trigger(this._element, bt)
			}), this._element, !0), this._element.style[s] = `${this._element[r]}px`
		}
		hide() {
			if (this._isTransitioning || !this._element.classList.contains(Tt)) return;
			if (C.trigger(this._element, yt).defaultPrevented) return;
			const t = this._getDimension();
			this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, c(this._element), this._element.classList.add(It), this._element.classList.remove(wt, Tt);
			const e = this._triggerArray.length;
			if (e > 0)
				for (let t = 0; t < e; t++) {
					const e = this._triggerArray[t],
						n = s(e);
					n && !n.classList.contains(Tt) && (e.classList.add(Lt), e.setAttribute("aria-expanded", !1))
				}
			this.setTransitioning(!0);
			this._element.style[t] = "", this._queueCallback((() => {
				this.setTransitioning(!1), this._element.classList.remove(It), this._element.classList.add(wt), C.trigger(this._element, Et)
			}), this._element, !0)
		}
		setTransitioning(t) {
			this._isTransitioning = t
		}
		_getConfig(t) {
			return (t = {
				...pt,
				...t
			}).toggle = Boolean(t.toggle), l(gt, t, _t), t
		}
		_getDimension() {
			return this._element.classList.contains($t) ? $t : "height"
		}
		_getParent() {
			let {
				parent: e
			} = this._config;
			e = a(e);
			const n = `${St}[data-bs-parent="${e}"]`;
			return t.find(n, e).forEach((t => {
				const e = s(t);
				this._addAriaAndCollapsedClass(e, [t])
			})), e
		}
		_addAriaAndCollapsedClass(t, e) {
			if (!t || !e.length) return;
			const n = t.classList.contains(Tt);
			e.forEach((t => {
				n ? t.classList.remove(Lt) : t.classList.add(Lt), t.setAttribute("aria-expanded", n)
			}))
		}
		static collapseInterface(t, e) {
			let n = Dt.getInstance(t);
			const i = {
				...pt,
				...q.getDataAttributes(t),
				..."object" == typeof e && e ? e : {}
			};
			if (!n && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), n || (n = new Dt(t, i)), "string" == typeof e) {
				if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
				n[e]()
			}
		}
		static jQueryInterface(t) {
			return this.each((function() {
				Dt.collapseInterface(this, t)
			}))
		}
	}
	return C.on(document, At, St, (function(e) {
		("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
		const n = q.getDataAttributes(this),
			s = i(this);
		t.find(s).forEach((t => {
			const e = Dt.getInstance(t);
			let i;
			e ? (null === e._parent && "string" == typeof n.parent && (e._config.parent = n.parent, e._parent = e._getParent()), i = "toggle") : i = n, Dt.collapseInterface(t, i)
		}))
	})), g(Dt), {
		Button: P,
		Carousel: dt,
		Collapse: Dt,
		
	}
}));
"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var MXb, NXb, PXb;
		_.nO = function(a, b = _.Bf, c = _.Vla) {
			var d = _.Cf(a, b);
			return _.Wla(() => d, c);
		};
		_.LXb = function(a, b) {
			for (let c in a) if (!(c in b) || a[c] !== b[c]) return !1;
			for (let c in b) if (!(c in a)) return !1;
			return !0;
		};
		MXb = function(a) {
			a & 1 && _.Fh(0, "div", 2);
		};
		_.N9a.prototype.Du = _.ca(108, function() {
			return _.In(this, 3);
		});
		_.zab.prototype.Du = _.ca(107, function() {
			return _.In(this, 2);
		});
		_.oK.prototype.Du = _.ca(106, function() {
			return _.In(this, 2);
		});
		_.UBb.prototype.Du = _.ca(105, function() {
			return _.In(this, 8);
		});
		_.oO = class {
			get aL() {
				var a, b;
				return (b = (a = this.H) == null ? void 0 : a.instance) != null ? b : null;
			}
			constructor(a) {
				this.I = a;
				this.iFa = null;
				this.A = new Map();
			}
			R(a) {
				return a.ngComponentOutletNgModule !== void 0;
			}
			X(a) {
				return a.ngComponentOutlet !== void 0 || a.ngComponentOutletContent !== void 0 || a.ngComponentOutletInjector !== void 0 || a.ngComponentOutletEnvironmentInjector !== void 0 || this.R(a);
			}
			Wb(a) {
				if (this.X(a) && (this.I.clear(), this.A.clear(), this.H = void 0, this.iFa)) {
					let c = this.cLb || this.I.I;
					if (this.R(a)) {
						var b;
						(b = this.F) == null || b.destroy();
						this.P5a ? (a = this.P5a, b = c.get(_.wu).Pa, this.F = new _.oSa(a, b != null ? b : null)) : this.F = void 0;
					}
					this.H = _.Fu(this.I, this.iFa, {
						Pa: c,
						nFa: this.F,
						RI: this.aLb,
						Oy: this.bLb
					});
				}
			}
			ws() {
				if (this.H) {
					if (this.jFa) for (let a of Object.keys(this.jFa)) this.A.set(a, !0);
					this.U(this.H);
				}
			}
			Ba() {
				var a;
				(a = this.F) == null || a.destroy();
			}
			U(a) {
				for (let [b, c] of this.A) {
					let d = b;
					c ? (a.zk(d, this.jFa[d]), this.A.set(d, !1)) : (a.zk(d, void 0), this.A.delete(d));
				}
			}
		};
		_.oO.J = function(a) {
			return new (a || _.oO)(_.Dg(_.$h));
		};
		_.oO.Oa = _.We({
			type: _.oO,
			da: [[
				"",
				"ngComponentOutlet",
				""
			]],
			inputs: {
				iFa: "ngComponentOutlet",
				jFa: "ngComponentOutletInputs",
				cLb: "ngComponentOutletInjector",
				bLb: "ngComponentOutletEnvironmentInjector",
				aLb: "ngComponentOutletContent",
				P5a: "ngComponentOutletNgModule"
			},
			Cc: ["ngComponentOutlet"],
			features: [_.su]
		});
		NXb = class {
			constructor(a, b) {
				this.F = a;
				this.H = b;
				this.A = !1;
			}
			create() {
				this.A = !0;
				this.F.wo(this.H);
			}
			destroy() {
				this.A = !1;
				this.F.clear();
			}
		};
		_.pO = class {
			constructor() {
				this.H = [];
				this.R = !1;
				this.I = this.F = 0;
				this.A = !1;
			}
			set oFa(a) {
				this.fa = a;
				this.F === 0 && this.U(!0);
			}
			X() {
				return this.F++;
			}
			aa(a) {
				this.H.push(a);
			}
			ea(a) {
				a = a === this.fa;
				this.A || (this.A = a);
				this.I++;
				this.I === this.F && (this.U(!this.A), this.I = 0, this.A = !1);
				return a;
			}
			U(a) {
				if (this.H.length > 0 && a !== this.R) {
					this.R = a;
					for (let d of this.H) {
						var b = d, c = a;
						c && !b.A ? b.create() : !c && b.A && b.destroy();
					}
				}
			}
		};
		_.pO.J = function(a) {
			return new (a || _.pO)();
		};
		_.pO.Oa = _.We({
			type: _.pO,
			da: [[
				"",
				"ngSwitch",
				""
			]],
			inputs: { oFa: "ngSwitch" }
		});
		_.qO = class {
			constructor(a, b, c) {
				this.oFa = c;
				c.X();
				this.A = new NXb(a, b);
			}
			ws() {
				var a = this.A, b = this.oFa.ea(this.hLb);
				b && !a.A ? a.create() : !b && a.A && a.destroy();
			}
		};
		_.qO.J = function(a) {
			return new (a || _.qO)(_.Dg(_.$h), _.Dg(_.Zh), _.Dg(_.pO, 9));
		};
		_.qO.Oa = _.We({
			type: _.qO,
			da: [[
				"",
				"ngSwitchCase",
				""
			]],
			inputs: { hLb: "ngSwitchCase" }
		});
		_.rO = class {
			constructor(a, b, c) {
				c.aa(new NXb(a, b));
			}
		};
		_.rO.J = function(a) {
			return new (a || _.rO)(_.Dg(_.$h), _.Dg(_.Zh), _.Dg(_.pO, 9));
		};
		_.rO.Oa = _.We({
			type: _.rO,
			da: [[
				"",
				"ngSwitchDefault",
				""
			]]
		});
		_.OXb = class extends _.bib {
			constructor(a) {
				super();
				this.jh = a;
			}
			connect() {
				return _.Hf(this.jh) ? this.jh : _.mf(this.jh);
			}
			disconnect() {}
		};
		PXb = new _.he("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
		new _.he("mat-progress-bar-location", {
			wa: "root",
			factory: () => {
				var a = _.m(_.Xk), b = a ? a.location : null;
				return { wAa: () => b ? b.pathname + b.search : "" };
			}
		});
		_.sO = class {
			constructor() {
				this.Ma = _.m(_.Jf);
				this.qb = _.m(_.th);
				this.wb = _.m(_.Hu);
				this.R = _.m(_.cm);
				this.A = "primary";
				this.F = this.ce = 0;
				this.Ava = new _.pm();
				this.H = "determinate";
				this.U = (c) => {
					this.Ava.observers.length !== 0 && c.target && c.target.classList.contains("mdc-linear-progress__primary-bar") && (this.mode !== "determinate" && this.mode !== "buffer" || this.qb.run(() => this.Ava.next({ value: this.value })));
				};
				var a = _.uwa(), b = _.m(PXb, { optional: !0 });
				this.oSa = a === "di-disabled";
				a === "reduced-motion" && this.Ma.nativeElement.classList.add("mat-progress-bar-reduced-motion");
				b && (b.color && (this.color = this.A = b.color), this.mode = b.mode || this.mode);
			}
			get color() {
				return this.hp || this.A;
			}
			set color(a) {
				this.hp = a;
			}
			get value() {
				return this.ce;
			}
			set value(a) {
				this.ce = Math.max(0, Math.min(100, a || 0));
				this.wb.lb();
			}
			get qwa() {
				return this.F || 0;
			}
			set qwa(a) {
				this.F = Math.max(0, Math.min(100, a || 0));
				this.wb.lb();
			}
			get mode() {
				return this.H;
			}
			set mode(a) {
				this.H = a;
				this.wb.lb();
			}
			Rb() {
				this.qb.runOutsideAngular(() => {
					this.I = this.R.listen(this.Ma.nativeElement, "transitionend", this.U);
				});
			}
			Ba() {
				var a;
				(a = this.I) == null || a.call(this);
			}
			qub() {
				return `scaleX(${this.sua() ? 1 : this.value / 100})`;
			}
			lub() {
				return `${this.mode === "buffer" ? this.qwa : 100}%`;
			}
			sua() {
				return this.mode === "indeterminate" || this.mode === "query";
			}
		};
		_.sO.J = function(a) {
			return new (a || _.sO)();
		};
		_.sO.ka = _.u({
			type: _.sO,
			da: [["mat-progress-bar"]],
			eb: [
				"role",
				"progressbar",
				"aria-valuemin",
				"0",
				"aria-valuemax",
				"100",
				"tabindex",
				"-1",
				1,
				"mat-mdc-progress-bar",
				"mdc-linear-progress"
			],
			Ua: 10,
			Ja: function(a, b) {
				a & 2 && (_.wh("aria-valuenow", b.sua() ? null : b.value)("mode", b.mode), _.qi("mat-" + b.color), _.P("_mat-animation-noopable", b.oSa)("mdc-linear-progress--animation-ready", !b.oSa)("mdc-linear-progress--indeterminate", b.sua()));
			},
			inputs: {
				color: "color",
				value: [
					2,
					"value",
					"value",
					_.bj
				],
				qwa: [
					2,
					"bufferValue",
					"bufferValue",
					_.bj
				],
				mode: "mode"
			},
			outputs: { Ava: "animationEnd" },
			Cc: ["matProgressBar"],
			ha: 7,
			ia: 5,
			la: [
				[
					"aria-hidden",
					"true",
					1,
					"mdc-linear-progress__buffer"
				],
				[1, "mdc-linear-progress__buffer-bar"],
				[1, "mdc-linear-progress__buffer-dots"],
				[
					"aria-hidden",
					"true",
					1,
					"mdc-linear-progress__bar",
					"mdc-linear-progress__primary-bar"
				],
				[1, "mdc-linear-progress__bar-inner"],
				[
					"aria-hidden",
					"true",
					1,
					"mdc-linear-progress__bar",
					"mdc-linear-progress__secondary-bar"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div", 0), _.Fh(1, "div", 1), _.B(2, MXb, 1, 0, "div", 2), _.Eh(), _.Dh(3, "div", 3), _.Fh(4, "span", 4), _.Eh(), _.Dh(5, "div", 5), _.Fh(6, "span", 4), _.Eh());
				a & 2 && (_.y(), _.pi("flex-basis", b.lub()), _.y(), _.C(b.mode === "buffer" ? 2 : -1), _.y(), _.pi("transform", b.qub()));
			},
			styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"],
			Ab: 2
		});
		_.tO = class {};
		_.tO.J = function(a) {
			return new (a || _.tO)();
		};
		_.tO.qc = _.Ve({ type: _.tO });
		_.tO.oc = _.Dd({ imports: [_.uA] });
		_.hr("O7x56e");
		var lhe = function(a) {
			a & 1 && _.I(0, "mat-progress-bar", 2);
		}, mhe = function(a) {
			a & 1 && (_.I(0, "div", 3), _.Ei(1, "safeHtmlFromProto"));
			a & 2 && (a = _.K(), _.E("innerHTML", _.Fi(1, 1, a.Dt.value().J7()), _.qg));
		}, X7 = class {
			constructor() {
				this.A = _.m(_.sFb);
			}
			gk(a) {
				var b = new _.pFb();
				a = _.Uc(b, 1, a);
				return this.A.gk(a);
			}
		};
		X7.J = function(a) {
			return new (a || X7)();
		};
		X7.sa = _.Cd({
			token: X7,
			factory: X7.J,
			wa: "root"
		});
		var nhe = class {
			transform(a, b = _.aRa) {
				var c;
				return (c = _.ira(a)) != null ? c : b;
			}
		};
		nhe.J = function(a) {
			return new (a || nhe)();
		};
		nhe.Wo = _.Xe({
			name: "safeHtmlFromProto",
			type: nhe,
			wk: !0
		});
		_.gs = class {
			constructor() {
				this.A = _.m(X7);
				this.H = _.m(_.Cl);
				this.F = _.m(_.$E);
				this.zPb = _.V(!1);
				this.I = this.F.get("resource");
				this.Dt = _.Zi(Object.assign({}, {}, {
					params: () => {
						var a;
						return { resource: "ai.google.dev/gemini-api/docs/" + ((a = this.I()) != null ? a : "") };
					},
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							return b.A.gk(a.resource);
						});
					},
					defaultValue: new _.qFb()
				}));
				_.Fk([this.Dt.error], () => {
					this.Dt.error() && this.H.navigate(["/404"]);
				});
			}
		};
		_.gs.J = function(a) {
			return new (a || _.gs)();
		};
		_.gs.ka = _.u({
			type: _.gs,
			da: [["ms-documentation"]],
			inputs: { zPb: [1, "setLoadingForTests"] },
			ha: 4,
			ia: 1,
			la: [
				[1, "page-content-wrapper"],
				[1, "page-content-inner-wrapper"],
				["mode", "indeterminate"],
				[
					1,
					"content",
					3,
					"innerHTML"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.B(2, lhe, 1, 0, "mat-progress-bar", 2)(3, mhe, 2, 3, "div", 3), _.H()());
				a & 2 && (_.y(2), _.C(b.Dt.Sa() ? 2 : b.Dt.xc() && b.Dt.value().J7() ? 3 : -1));
			},
			dependencies: [
				_.tO,
				_.sO,
				nhe
			],
			styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .page-content-inner-wrapper[_ngcontent-%COMP%]{max-width:min(1400px,90%)}@media screen and (max-width:600px){[_nghost-%COMP%]   .page-content-inner-wrapper[_ngcontent-%COMP%]{max-width:100%}}[_nghost-%COMP%]     h1{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:24px;font-weight:600;line-height:32px;margin:16px 0 12px}[_nghost-%COMP%]     h2{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px;margin:16px 0 12px}[_nghost-%COMP%]     code, [_nghost-%COMP%]     pre{background:light-dark(var(--color-v3-surface-container-high),var(--color-v3-button-container));border:none;border-radius:4px;color:var(--color-v3-text-on-button);display:inline-block;font-family:DM Mono,monospace;font-size:1em;padding:0 2px}[_nghost-%COMP%]     .gemini-api-recommended{width:100%;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.5rem 3rem}@media screen and (max-width:600px){[_nghost-%COMP%]     .gemini-api-recommended{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]     .gemini-api-card-overview{border:1px solid var(--color-v3-outline-var);display:block;border-radius:8px;box-shadow:var(--v3-shadow-sm);color:var(--color-v3-text);padding:8px;-webkit-transition:box-shadow .3s ease-in-out;transition:box-shadow .3s ease-in-out}[_nghost-%COMP%]     .gemini-api-card-overview.blue-bold-card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:.5rem}[_nghost-%COMP%]     .gemini-api-card-overview .icon-background{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;border-radius:8px;padding:4px;background-color:rgb(from var(--color-v3-text-link) r g b/30%)}[_nghost-%COMP%]     .gemini-api-card-overview .gemini-api-card-title{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;margin-top:4px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}[_nghost-%COMP%]     .gemini-api-card-overview .gemini-api-card-title .gemini-api-new{background:#c2e7ff;color:#001d35;margin-left:4px;white-space:nowrap;border-radius:8px;padding:2px 4px}[_nghost-%COMP%]     .gemini-api-card-overview .gemini-api-card-description{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;overflow:hidden;text-overflow:ellipsis;white-space:normal}[_nghost-%COMP%]     .gemini-api-resources-footer{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin:12px 0 8px}[_nghost-%COMP%]     .gemini-api-resources-footer .gemini-api-resource-item{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;text-decoration:none;padding:8px;border-radius:8px;-webkit-transition:box-shadow .2s ease-in-out;transition:box-shadow .2s ease-in-out}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


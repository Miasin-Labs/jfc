"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var zTb, ATb, BTb, CTb, DTb, ETb, FTb, GTb, HTb;
		zTb = function(a) {
			a & 1 && (_.F(0, "div", 2, 1)(2, "div", 5)(3, "span", 6), _.R(4), _.H()()());
			a & 2 && (a = _.K(), _.y(4), _.U(a.HUb));
		};
		ATb = function(a, b) {
			a & 1 && _.I(0, "div");
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(3);
				_.qi(a === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
				_.pi("transform", c.Itb(b));
			}
		};
		BTb = function(a) {
			a & 1 && _.Ah(0, ATb, 1, 4, "div", 8, _.yh);
			a & 2 && (a = _.K(2), _.Bh(a.Wua));
		};
		CTb = function(a) {
			a & 1 && (_.F(0, "div", 6, 1), _.B(2, BTb, 2, 0), _.H());
			a & 2 && (a = _.K(), _.y(2), _.C(a.bw ? 2 : -1));
		};
		DTb = function(a) {
			a & 1 && _.I(0, "mat-slider-visual-thumb", 7);
			a & 2 && (a = _.K(), _.E("discrete", a.jH)("thumbPosition", 1)("valueIndicatorText", a.Lab));
		};
		ETb = new _.he("_MatSlider");
		FTb = new _.he("_MatSliderThumb");
		GTb = new _.he("_MatSliderRangeThumb");
		HTb = new _.he("_MatSliderVisualThumb");
		var ITb, JTb, KTb;
		ITb = {
			Da: _.aD,
			zb: _.Zd(() => _.DN),
			fe: !0
		};
		JTb = function(a) {
			a.qy();
			a.disabled !== a.A.disabled && (a.A.disabled = !0);
			a.step = a.A.step;
			a.min = a.A.min;
			a.max = a.A.max;
			a.Fa();
		};
		KTb = function(a, b) {
			a.A.HSa(!(b == null || !b.mra));
			a.A.Wub(a);
		};
		_.DN = class {
			get value() {
				return _.bj(this.be.value, 0);
			}
			set value(a) {
				a === null && (a = this.min);
				a = isNaN(a) ? 0 : a;
				a += "";
				this.X ? this.Vl || this.Ta(a) : this.aa = a;
			}
			Ta(a) {
				this.be.value = a;
				this.tl();
				this.A.vu(this);
				_.Bu(this.pu);
				this.A.pu.lb();
			}
			get Zx() {
				if (this.A.min >= this.A.max) return this.H = this.F;
				this.H === void 0 && (this.H = this.cfa());
				return this.H;
			}
			set Zx(a) {
				this.H = a;
			}
			get min() {
				return _.bj(this.be.min, 0);
			}
			set min(a) {
				this.be.min = a + "";
				_.Bu(this.pu);
			}
			get max() {
				return _.bj(this.be.max, 0);
			}
			set max(a) {
				this.be.max = a + "";
				_.Bu(this.pu);
			}
			get step() {
				return _.bj(this.be.step, 0);
			}
			set step(a) {
				this.be.step = a + "";
				_.Bu(this.pu);
			}
			get disabled() {
				return _.aj(this.be.disabled);
			}
			set disabled(a) {
				this.be.disabled = a;
				_.Bu(this.pu);
				this.A.disabled !== this.disabled && (this.A.disabled = this.disabled);
			}
			get na() {
				return this.A.min >= this.A.max ? this.A.Om() ? 1 : 0 : (this.value - this.A.min) / (this.A.max - this.A.min);
			}
			get d_a() {
				return this.A.bw ? this.H === 0 ? 0 : this.Zx / this.A.bw : this.A.Om() ? 1 : 0;
			}
			I(a) {
				this.fD = a;
			}
			constructor() {
				this.qb = _.m(_.th);
				this.Ma = _.m(_.Jf);
				this.pu = _.m(_.Hu);
				this.A = _.m(ETb);
				this.Mc = _.m(_.Vl);
				this.eh = new _.pm();
				this.Mya = new _.pm();
				this.Lya = new _.pm();
				this.KF = 2;
				this.be = this.Ma.nativeElement;
				this.fTa = _.M("");
				this.F = 3;
				this.X = this.fD = this.Vl = !1;
				this.Ub = new _.Wg();
				this.Ifa = !1;
				this.ma = () => {};
				this.ea = !1;
				var a = _.m(_.cm);
				this.qb.runOutsideAngular(() => {
					this.oa = [
						a.listen(this.be, "pointerdown", this.Na.bind(this)),
						a.listen(this.be, "pointermove", this.ta.bind(this)),
						a.listen(this.be, "pointerup", this.Hua.bind(this))
					];
				});
			}
			Ba() {
				this.oa.forEach((a) => a());
				this.Ub.next();
				this.Ub.complete();
				this.Mya.complete();
				this.Lya.complete();
			}
			Fa() {
				this.X = !0;
				this.aa === void 0 ? this.value = this.min : (this.be.value = this.aa, this.tl(), this.A.vu(this), _.Bu(this.pu));
			}
			cb() {
				return this.min;
			}
			Dr() {
				this.I(!1);
				this.ma();
			}
			cw() {
				this.A.HSa(!1);
				this.A.S3(this);
				this.I(!0);
			}
			ri() {
				this.eh.emit(this.value);
				this.Vl && this.tl({ mra: !0 });
			}
			C3() {
				var a;
				(a = this.fa) == null || a.call(this, this.value);
				!this.A.step && this.Vl || this.tl({ mra: !0 });
				this.A.vu(this);
			}
			hb() {
				this.Vl && this.fD || (this.A.vu(this), this.tl());
				this.A.disabled = this.Xa.disabled;
			}
			Na(a) {
				this.disabled || a.button !== 0 || (this.Mc.A ? (this.Vl = this.A.mSa(a, this.A.cD(this.KF).be.getBoundingClientRect()), this.A.Pfa()) : (this.Vl = !0, this.I(!0), this.A.Pfa(), this.A.step || this.R(a, { mra: !0 }), this.disabled || (this.Ea(a), this.Mya.emit({
					source: this,
					parent: this.A,
					value: this.value
				}))));
			}
			Ea(a) {
				this.Ifa = !0;
				setTimeout(() => {
					this.Ifa = !1;
					this.Aa(a);
				}, 0);
			}
			Aa(a) {
				var b = a.clientX - this.A.gRa, c = this.A.bw, d = this.A.step === 0 ? 1 : this.A.step, e = Math.floor((this.A.max - this.A.min) / d);
				b = this.A.Om() ? 1 - b / c : b / c;
				d *= Math.round((Math.round(b * e) / e * (this.A.max - this.A.min) + this.A.min) / d);
				if (d !== this.value) {
					this.value = d;
					this.eh.emit(this.value);
					var f;
					(f = this.fa) == null || f.call(this, this.value);
				}
				this.A.vu(this);
				this.A.step > 0 ? this.tl() : this.R(a, { mra: this.A.hua });
			}
			ta(a) {
				!this.A.step && this.Vl && this.R(a);
			}
			Hua() {
				this.Vl && (this.Vl = !1, this.Mc.F && this.I(!1), this.Lya.emit({
					source: this,
					parent: this.A,
					value: this.value
				}), setTimeout(() => this.qy(), this.Mc.A ? 10 : 0));
			}
			U(a) {
				return Math.max(Math.min(a, this.A.bw - this.F), this.F);
			}
			cfa() {
				return this.A.Om() ? (1 - this.na) * (this.A.bw - this.F * 2) + this.F : this.na * (this.A.bw - this.F * 2) + this.F;
			}
			za(a) {
				return a.clientX - this.A.gRa;
			}
			mb() {}
			qy() {
				this.be.style.padding = `0 ${this.A.jSa}px`;
				this.be.style.width = `calc(100% + ${this.A.jSa - this.F * 2}px)`;
				this.be.style.left = `-${this.A.Nua - this.F}px`;
			}
			tl(a) {
				this.Zx = this.U(this.cfa());
				KTb(this, a);
			}
			R(a, b) {
				this.Zx = this.U(this.za(a));
				KTb(this, b);
			}
			writeValue(a) {
				if (this.ea || a !== null) this.value = a;
			}
			Mo(a) {
				this.fa = a;
				this.ea = !0;
			}
			xz(a) {
				this.ma = a;
			}
			Gv(a) {
				this.disabled = a;
			}
			focus() {
				this.be.focus();
			}
			blur() {
				this.be.blur();
			}
		};
		_.DN.J = function(a) {
			return new (a || _.DN)();
		};
		_.DN.Oa = _.We({
			type: _.DN,
			da: [[
				"input",
				"matSliderThumb",
				""
			]],
			eb: [
				"type",
				"range",
				1,
				"mdc-slider__input"
			],
			Ua: 1,
			Ja: function(a, b) {
				a & 1 && _.J("change", function() {
					return b.ri();
				})("input", function() {
					return b.C3();
				})("blur", function() {
					return b.Dr();
				})("focus", function() {
					return b.cw();
				});
				a & 2 && _.wh("aria-valuetext", b.fTa());
			},
			inputs: { value: [
				2,
				"value",
				"value",
				_.bj
			] },
			outputs: {
				eh: "valueChange",
				Mya: "dragStart",
				Lya: "dragEnd"
			},
			Cc: ["matSliderThumb"],
			features: [_.yi([ITb, {
				Da: FTb,
				zb: _.DN
			}])]
		});
		var LTb = ["knob"], MTb = ["valueIndicatorContainer"], EN = class {
			constructor() {
				this.pu = _.m(_.Hu);
				this.qb = _.m(_.th);
				this.A = _.m(ETb);
				this.oa = _.m(_.cm);
				this.hb = this.Vl = this.X = this.jH = !1;
				this.be = _.m(_.Jf).nativeElement;
				this.Mc = _.m(_.Vl);
				this.na = (a) => {
					if (!this.fa.fD) {
						var b = this.be.getBoundingClientRect();
						(this.X = a = this.A.mSa(a, b)) ? this.aa() : this.F(this.H);
					}
				};
				this.Ea = () => {
					this.X = !1;
					this.F(this.H);
				};
				this.cw = () => {
					this.F(this.H);
					this.Na();
					this.be.classList.add("mdc-slider__thumb--focused");
				};
				this.Dr = () => {
					this.Vl || this.F(this.R);
					this.X && this.aa();
					this.be.classList.remove("mdc-slider__thumb--focused");
				};
				this.Aa = (a) => {
					a.button === 0 && (this.Vl = !0, this.Fa());
				};
				this.za = () => {
					this.Vl = !1;
					this.F(this.U);
					this.fa.fD || this.F(this.R);
					this.Mc.F && this.aa();
				};
			}
			Rb() {
				var a = this.A.nj(this.KF);
				a && (this.Mua.radius = 24, this.fa = a, this.Ta = this.fa.be, this.qb.runOutsideAngular(() => {
					var b = this.Ta, c = this.oa;
					this.ma = [
						c.listen(b, "pointermove", this.na),
						c.listen(b, "pointerdown", this.Aa),
						c.listen(b, "pointerup", this.za),
						c.listen(b, "pointerleave", this.Ea),
						c.listen(b, "focus", this.cw),
						c.listen(b, "blur", this.Dr)
					];
				}));
			}
			Ba() {
				var a;
				(a = this.ma) == null || a.forEach((b) => b());
			}
			aa() {
				if (!this.I(this.H)) {
					this.H = this.ea({
						uH: 0,
						iB: 0
					});
					let a;
					(a = this.H) == null || a.element.classList.add("mat-mdc-slider-hover-ripple");
				}
			}
			Na() {
				if (!this.I(this.R)) {
					this.R = this.ea({
						uH: 0,
						iB: 0
					}, !0);
					let a;
					(a = this.R) == null || a.element.classList.add("mat-mdc-slider-focus-ripple");
				}
			}
			Fa() {
				if (!this.I(this.U)) {
					this.U = this.ea({
						uH: 225,
						iB: 400
					});
					let a;
					(a = this.U) == null || a.element.classList.add("mat-mdc-slider-active-ripple");
				}
			}
			I(a) {
				return (a == null ? void 0 : a.state) === 0 || (a == null ? void 0 : a.state) === 1;
			}
			ea(a, b) {
				if (!this.A.disabled) {
					this.LSa();
					this.A.uu && this.A.cD(this.KF === 1 ? 2 : 1).LSa();
					var c;
					if ((c = this.A.lP) == null || !c.disabled || b) return b = this.Mua, a = {
						animation: this.A.Zs ? {
							uH: 0,
							iB: 0
						} : a,
						UK: !0,
						persistent: !0
					}, typeof a === "number" ? _.Uib(b.A, a, 0, Object.assign({}, b.gU, void 0)) : _.Uib(b.A, 0, 0, Object.assign({}, b.gU, a));
				}
			}
			F(a) {
				a != null && _.Tib(a.A, a);
				this.pSa() || (this.A.uu || this.mua(), a = this.ta(), a.pSa() || (this.mua(), a.mua()));
			}
			LSa() {
				this.be.classList.add("mdc-slider__thumb--with-indicator");
			}
			mua() {
				this.be.classList.remove("mdc-slider__thumb--with-indicator");
			}
			ta() {
				return this.A.cD(this.KF === 1 ? 2 : 1);
			}
			cb() {
				var a;
				return (a = this.Kvb) == null ? void 0 : a.nativeElement;
			}
			Xa() {
				return this.Nub.nativeElement;
			}
			pSa() {
				return this.I(this.H) || this.I(this.R) || this.I(this.U);
			}
		};
		EN.J = function(a) {
			return new (a || EN)();
		};
		EN.ka = _.u({
			type: EN,
			da: [["mat-slider-visual-thumb"]],
			Ka: function(a, b) {
				a & 1 && _.ci(_.NB, 5)(LTb, 5)(MTb, 5);
				if (a & 2) {
					let c;
					_.ei(c = _.fi()) && (b.Mua = c.first);
					_.ei(c = _.fi()) && (b.Nub = c.first);
					_.ei(c = _.fi()) && (b.Kvb = c.first);
				}
			},
			eb: [
				1,
				"mdc-slider__thumb",
				"mat-mdc-slider-visual-thumb"
			],
			inputs: {
				jH: "discrete",
				KF: "thumbPosition",
				HUb: "valueIndicatorText"
			},
			features: [_.yi([{
				Da: HTb,
				zb: EN
			}])],
			ha: 4,
			ia: 2,
			la: [
				["knob", ""],
				["valueIndicatorContainer", ""],
				[1, "mdc-slider__value-indicator-container"],
				[1, "mdc-slider__thumb-knob"],
				[
					"matRipple",
					"",
					1,
					"mat-focus-indicator",
					3,
					"matRippleDisabled"
				],
				[1, "mdc-slider__value-indicator"],
				[1, "mdc-slider__value-indicator-text"]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, zTb, 5, 1, "div", 2), _.I(1, "div", 3, 0)(3, "div", 4));
				a & 2 && (_.C(b.jH ? 0 : -1), _.y(3), _.E("matRippleDisabled", !0));
			},
			dependencies: [_.NB],
			styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
			Ab: 2
		});
		var NTb;
		NTb = ["trackActive"];
		_.FN = class {
			get disabled() {
				return this.Oc;
			}
			set disabled(a) {
				this.Oc = a;
				a = this.nj(2);
				var b = this.nj(1);
				a && (a.disabled = this.Oc);
				b && (b.disabled = this.Oc);
			}
			get jH() {
				return this.Aa;
			}
			set jH(a) {
				this.Aa = a;
				this.Na();
			}
			get Q0() {
				return this.Ea;
			}
			set Q0(a) {
				this.Ea = a;
				this.H && (this.X(), this.na());
			}
			get min() {
				return this.R;
			}
			set min(a) {
				a = a === void 0 || a === null || isNaN(a) ? this.R : a;
				this.R !== a && this.Nc(a);
			}
			Nc(a) {
				var b = this.R;
				this.R = a;
				this.uu ? this.zd({
					yFa: b,
					new: a
				}) : this.Wc(a);
				this.za();
			}
			zd(a) {
				var b = this.nj(2), c = this.nj(1), d = b.value, e = c.value;
				c.min = a.new;
				b.min = Math.max(a.new, c.value);
				c.max = Math.min(b.max, b.value);
				c.qy();
				b.qy();
				a.new < a.yFa ? this.U(b, c) : this.U(c, b);
				d !== b.value && this.vu(b);
				e !== c.value && this.vu(c);
			}
			Wc(a) {
				var b = this.nj(2);
				if (b) {
					let c = b.value;
					b.min = a;
					b.tl();
					this.S3(b);
					c !== b.value && this.vu(b);
				}
			}
			get max() {
				return this.I;
			}
			set max(a) {
				a = a === void 0 || a === null || isNaN(a) ? this.I : a;
				this.I !== a && this.Zb(a);
			}
			Zb(a) {
				var b = this.I;
				this.I = a;
				this.uu ? this.Fc({
					yFa: b,
					new: a
				}) : this.rc(a);
				this.za();
			}
			Fc(a) {
				var b = this.nj(2), c = this.nj(1), d = b.value, e = c.value;
				b.max = a.new;
				c.max = Math.min(a.new, b.value);
				b.min = c.value;
				b.qy();
				c.qy();
				a.new > a.yFa ? this.U(c, b) : this.U(b, c);
				d !== b.value && this.vu(b);
				e !== c.value && this.vu(c);
			}
			rc(a) {
				var b = this.nj(2);
				if (b) {
					let c = b.value;
					b.max = a;
					b.tl();
					this.S3(b);
					c !== b.value && this.vu(b);
				}
			}
			get step() {
				return this.F;
			}
			set step(a) {
				a = isNaN(a) ? this.F : a;
				this.F !== a && this.ue(a);
			}
			ue(a) {
				this.F = a;
				this.uu ? this.sf() : this.cf();
				this.za();
			}
			sf() {
				var a = this.nj(2), b = this.nj(1), c = a.value, d = b.value, e = b.value;
				a.min = this.R;
				b.max = this.I;
				a.step = this.F;
				b.step = this.F;
				this.Mc.F && (a.value = a.value, b.value = b.value);
				a.min = Math.max(this.R, b.value);
				b.max = Math.min(this.I, a.value);
				b.qy();
				a.qy();
				a.value < e ? this.U(b, a) : this.U(a, b);
				c !== a.value && this.vu(a);
				d !== b.value && this.vu(b);
			}
			cf() {
				var a = this.nj(2);
				if (a) {
					let b = a.value;
					a.step = this.F;
					this.Mc.F && (a.value = a.value);
					a.tl();
					b !== a.value && this.vu(a);
				}
			}
			constructor() {
				this.qb = _.m(_.th);
				this.pu = _.m(_.Hu);
				this.Ma = _.m(_.Jf);
				this.A = _.m(_.bm, { optional: !0 });
				this.lP = _.m(_.MB, { optional: !0 });
				this.Ea = this.Aa = this.Oc = !1;
				this.R = 0;
				this.Ad = !1;
				this.I = 100;
				this.F = 1;
				this.VX = (b) => `${b}`;
				this.Zs = _.lm();
				this.ea = null;
				this.Nua = 24;
				this.yZa = this.Lab = "";
				this.uu = !1;
				this.Om = _.W(() => {
					var b;
					return ((b = this.A) == null ? void 0 : b.xda()) === "rtl";
				});
				this.H = !1;
				this.Fa = 0;
				this.hua = !1;
				this.bg = null;
				this.Mc = _.m(_.Vl);
				this.ma = !1;
				_.m(_.Zl).load(_.JB);
				var a = this.Om();
				_.cj(() => {
					var b = this.Om();
					b !== a && (a = b, this.uu ? this.Db() : this.mb(), this.X());
				});
			}
			Rb() {
				this.Mc.isBrowser && this.Pfa();
				var a = this.nj(2), b = this.nj(1);
				this.uu = !!a && !!b;
				_.Bu(this.pu);
				this.Nua = this.cD(2).Mua.radius;
				this.jSa = this.Nua - 8;
				this.uu ? this.cb(a, b) : this.Xa(a);
				this.S3(a);
				this.X();
				this.na();
				this.hb();
				_.Bu(this.pu);
			}
			Xa(a) {
				JTb(a);
				a.tl();
				this.oa(a);
				this.H = !0;
				a.tl();
			}
			cb(a, b) {
				JTb(a);
				a.tl();
				JTb(b);
				b.tl();
				a.ava();
				b.ava();
				a.Q3();
				b.Q3();
				this.Na();
				this.H = !0;
				a.tl();
				b.tl();
			}
			Ba() {
				var a;
				(a = this.ea) == null || a.disconnect();
				this.ea = null;
			}
			Db() {
				var a = this.nj(2), b = this.nj(1);
				a.tvb();
				b.tvb();
				a.Zx = a.cfa();
				b.Zx = b.cfa();
				a.Q3();
				b.Q3();
				a.qy();
				b.qy();
				a.tl();
				b.tl();
			}
			mb() {
				this.nj(2).tl();
			}
			hb() {
				typeof ResizeObserver !== "undefined" && ResizeObserver && this.qb.runOutsideAngular(() => {
					this.ea = new ResizeObserver(() => {
						this.Vl() || this.ec();
					});
					this.ea.observe(this.Ma.nativeElement);
				});
			}
			Vl() {
				return this.cD(1).Vl || this.cD(2).Vl;
			}
			ta(a = 2) {
				return (a = this.nj(a)) ? a.value : this.min;
			}
			aa() {
				var a, b;
				return !!(((a = this.nj(1)) == null ? 0 : a.Ifa) || ((b = this.nj(2)) == null ? 0 : b.Ifa));
			}
			Pfa() {
				this.bw = this.Ma.nativeElement.offsetWidth;
				this.gRa = this.Ma.nativeElement.getBoundingClientRect().left;
			}
			fa(a) {
				var b = this.Fvb.nativeElement.style;
				b.left = a.left;
				b.right = a.right;
				b.transformOrigin = a.transformOrigin;
				b.transform = a.transform;
			}
			Itb(a) {
				a *= this.Fa / (this.Wua.length - 1);
				return `translateX(${this.Om() ? this.bw - 6 - a : a}px)`;
			}
			Wub(a) {
				this.H && (this.aa() || (this.cD(a.KF === 2 ? 2 : 1).be.style.transform = `translateX(${a.Zx}px)`), this.S3(a), this.ie(a));
			}
			U(a, b) {
				this.H && (a.tl(), b.tl());
			}
			vu(a) {
				this.H && (this.oa(a), this.X(), _.Bu(this.pu));
			}
			za() {
				this.H && (this.X(), this.na(), this.pu.lb());
			}
			ec() {
				if (this.H) {
					this.Pfa();
					if (this.uu) {
						var a = this.nj(2);
						let b = this.nj(1);
						a.tl();
						b.tl();
						a.Q3();
						b.Q3();
						a.ava();
						b.ava();
						a.qy();
						b.qy();
					} else (a = this.nj(2)) && a.tl();
					this.X();
					this.na();
					_.Bu(this.pu);
				}
			}
			Ta() {
				var a = this.nj(1), b = this.nj(2);
				return a && b ? b.Zx - a.Zx < 20 : !1;
			}
			Dd(a) {
				var b = a.zEb();
				a = this.cD(a.KF);
				this.cD(b.KF).be.classList.remove("mdc-slider__thumb--top");
				a.be.classList.toggle("mdc-slider__thumb--top", this.ma);
			}
			ie(a) {
				this.uu && !this.aa() && this.ma !== this.Ta() && (this.ma = !this.ma, this.Dd(a));
			}
			oa(a) {
				if (!this.aa()) {
					var b = this.VX(a.value);
					this.H ? a.fTa.set(b) : a.be.setAttribute("aria-valuetext", b);
					this.jH && (a.KF === 1 ? this.Lab = b : this.yZa = b, a = this.cD(a.KF), b.length < 3 ? a.be.classList.add("mdc-slider__thumb--short-value") : a.be.classList.remove("mdc-slider__thumb--short-value"));
				}
			}
			Na() {
				var a = this.nj(2), b = this.nj(1);
				a && this.oa(a);
				b && this.oa(b);
			}
			na() {
				if (this.Q0 && !this.aa()) {
					var a = this.F && this.F > 0 ? this.F : 1;
					this.Fa = (Math.floor(this.max / a) * a - this.min) / (this.max - this.min) * (this.bw - 6);
				}
			}
			S3(a) {
				this.aa() || (this.uu ? this.Nf(a) : this.Og(a));
			}
			Nf(a) {
				var b = a.zEb();
				if (b && this.bw) {
					var c = Math.abs(b.Zx - a.Zx) / this.bw;
					a.v5b && this.bw ? this.fa({
						left: "auto",
						right: `${this.bw - b.Zx}px`,
						transformOrigin: "right",
						transform: `scaleX(${c})`
					}) : this.fa({
						left: `${b.Zx}px`,
						right: "auto",
						transformOrigin: "left",
						transform: `scaleX(${c})`
					});
				}
			}
			Og(a) {
				this.Om() ? this.fa({
					left: "auto",
					right: "0px",
					transformOrigin: "right",
					transform: `scaleX(${1 - a.d_a})`
				}) : this.fa({
					left: "0px",
					right: "auto",
					transformOrigin: "left",
					transform: `scaleX(${a.d_a})`
				});
			}
			X() {
				if (this.Q0 && this.step !== void 0 && this.min !== void 0 && this.max !== void 0) {
					var a = this.step > 0 ? this.step : 1;
					this.uu ? this.Th(a) : this.Cg(a);
				}
			}
			Cg(a) {
				var b = this.ta(), c = Math.max(Math.round((b - this.min) / a), 0) + 1;
				a = Math.max(Math.round((this.max - b) / a), 0) - 1;
				this.Om() ? c++ : a++;
				this.Wua = Array(c).fill(0).concat(Array(a).fill(1));
			}
			Th(a) {
				var b = this.ta(), c = this.ta(1), d = Math.max(Math.round((b - c) / a) + 1, 0);
				b = Math.max(Math.round((this.max - b) / a), 0);
				this.Wua = Array(Math.max(Math.round((c - this.min) / a), 0)).fill(1).concat(Array(d).fill(0), Array(b).fill(1));
			}
			nj(a) {
				if (a === 2 && this.iSa) return this.iSa;
				var b;
				if ((b = this.qua) == null ? 0 : b.length) return a === 1 ? this.qua.first : this.qua.last;
			}
			cD(a) {
				var b, c;
				return a === 2 ? (b = this.VSa) == null ? void 0 : b.last : (c = this.VSa) == null ? void 0 : c.first;
			}
			HSa(a) {
				this.hua = !this.Mc.A && a && !this.Zs;
				this.Ma.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this.hua);
			}
			mSa(a, b) {
				var c = b.width / 2;
				return Math.pow(a.clientX - (b.x + c), 2) + Math.pow(a.clientY - (b.y + c), 2) < Math.pow(c, 2);
			}
		};
		_.FN.J = function(a) {
			return new (a || _.FN)();
		};
		_.FN.ka = _.u({
			type: _.FN,
			da: [["mat-slider"]],
			Ud: function(a, b, c) {
				a & 1 && _.bi(c, FTb, 5)(c, GTb, 4);
				if (a & 2) {
					let d;
					_.ei(d = _.fi()) && (b.iSa = d.first);
					_.ei(d = _.fi()) && (b.qua = d);
				}
			},
			Ka: function(a, b) {
				a & 1 && _.ci(NTb, 5)(HTb, 5);
				if (a & 2) {
					let c;
					_.ei(c = _.fi()) && (b.Fvb = c.first);
					_.ei(c = _.fi()) && (b.VSa = c);
				}
			},
			eb: [
				1,
				"mat-mdc-slider",
				"mdc-slider"
			],
			Ua: 12,
			Ja: function(a, b) {
				a & 2 && (_.qi("mat-" + (b.color || "primary")), _.P("mdc-slider--range", b.uu)("mdc-slider--disabled", b.disabled)("mdc-slider--discrete", b.jH)("mdc-slider--tick-marks", b.Q0)("_mat-animation-noopable", b.Zs));
			},
			inputs: {
				disabled: [
					2,
					"disabled",
					"disabled",
					_.aj
				],
				jH: [
					2,
					"discrete",
					"discrete",
					_.aj
				],
				Q0: [
					2,
					"showTickMarks",
					"showTickMarks",
					_.aj
				],
				min: [
					2,
					"min",
					"min",
					_.bj
				],
				color: "color",
				Ad: [
					2,
					"disableRipple",
					"disableRipple",
					_.aj
				],
				max: [
					2,
					"max",
					"max",
					_.bj
				],
				step: [
					2,
					"step",
					"step",
					_.bj
				],
				VX: "displayWith"
			},
			Cc: ["matSlider"],
			features: [_.yi([{
				Da: ETb,
				zb: _.FN
			}])],
			fc: ["*"],
			ha: 9,
			ia: 5,
			la: [
				["trackActive", ""],
				["tickMarkContainer", ""],
				[1, "mdc-slider__track"],
				[1, "mdc-slider__track--inactive"],
				[1, "mdc-slider__track--active"],
				[1, "mdc-slider__track--active_fill"],
				[1, "mdc-slider__tick-marks"],
				[
					3,
					"discrete",
					"thumbPosition",
					"valueIndicatorText"
				],
				[
					3,
					"class",
					"transform"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(), _.Yh(0), _.F(1, "div", 2), _.I(2, "div", 3), _.F(3, "div", 4), _.I(4, "div", 5, 0), _.H(), _.B(6, CTb, 3, 1, "div", 6), _.H(), _.B(7, DTb, 1, 3, "mat-slider-visual-thumb", 7), _.I(8, "mat-slider-visual-thumb", 7));
				a & 2 && (_.y(6), _.C(b.Q0 ? 6 : -1), _.y(), _.C(b.uu ? 7 : -1), _.y(), _.E("discrete", b.jH)("thumbPosition", 2)("valueIndicatorText", b.yZa));
			},
			dependencies: [EN],
			styles: [".mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:\"\"}\n"],
			Ab: 2
		});
		_.GN = class {};
		_.GN.J = function(a) {
			return new (a || _.GN)();
		};
		_.GN.qc = _.Ve({ type: _.GN });
		_.GN.oc = _.Dd({ imports: [_.RB, _.uA] });
		var OTb;
		OTb = function(a, b) {
			var c = a.min(), d = a.max();
			a = a.floor();
			var e, f;
			b = (f = (e = b) != null ? e : c) != null ? f : d;
			c != null && b < c ? b = c : d != null && b > d && (b = d);
			a && (b = Math.floor(b));
			return b;
		};
		_.HN = class {
			constructor() {
				this.title = _.V("");
				this.value = _.V(.1);
				this.min = _.V(0);
				this.max = _.V(1);
				this.step = _.V(.1);
				this.floor = _.V(!1);
				this.disabled = _.V(!1);
				this.tooltip = _.V("");
				this.Qf = _.V("");
				this.aS = _.M(0);
				this.WR = _.M("");
				this.eh = _.Ki();
				_.Fk([this.value], () => {
					var a = this.value();
					this.aS.set(a);
					this.WR.set(a === void 0 ? "" : String(a));
				});
				_.Fk([
					this.min,
					this.max,
					this.floor
				], () => {
					var a = this.aS();
					if (a !== void 0) {
						var b = OTb(this, a || 0);
						b !== a && (this.aS.set(b), this.WR.set(String(b)), this.eh.emit(b));
					}
				});
			}
			XFa(a) {
				a = a.currentTarget.value;
				var b = Number(a);
				if (isNaN(b) || a === "") {
					var c;
					b = (c = this.aS()) != null ? c : 0;
				}
				c = OTb(this, b);
				this.aS.set(c);
				this.WR.set(String(c));
				this.eh.emit(c);
			}
		};
		_.HN.J = function(a) {
			return new (a || _.HN)();
		};
		_.HN.ka = _.u({
			type: _.HN,
			da: [["ms-slider"]],
			inputs: {
				title: [1, "title"],
				value: [1, "value"],
				min: [1, "min"],
				max: [1, "max"],
				step: [1, "step"],
				floor: [1, "floor"],
				disabled: [1, "disabled"],
				tooltip: [1, "tooltip"],
				Qf: [1, "disabledTooltip"]
			},
			outputs: { eh: "valueChange" },
			ha: 4,
			ia: 13,
			la: [
				[
					"matTooltipPosition",
					"left",
					1,
					"ms-slider",
					3,
					"matTooltip"
				],
				[
					3,
					"min",
					"max",
					"step",
					"disabled"
				],
				[
					"matSliderThumb",
					"",
					3,
					"input",
					"value",
					"disabled"
				],
				[
					"ms-input",
					"",
					"type",
					"text",
					"inputmode",
					"decimal",
					"role",
					"spinbutton",
					"aria-invalid",
					"false",
					"size",
					"small",
					1,
					"slider-number-input",
					3,
					"input",
					"blur",
					"value",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "mat-slider", 1)(2, "input", 2), _.J("input", function(c) {
					c = c.currentTarget.valueAsNumber;
					b.aS.set(c);
					b.WR.set(String(c));
					b.eh.emit(c);
				}), _.H()(), _.F(3, "input", 3), _.J("input", function(c) {
					b.WR.set(c.currentTarget.value);
				})("blur", function(c) {
					return b.XFa(c);
				}), _.H()());
				a & 2 && (_.E("matTooltip", b.disabled() ? b.Qf() : b.tooltip()), _.y(), _.E("min", b.min())("max", b.max())("step", b.step())("disabled", b.disabled()), _.y(), _.E("value", b.aS())("disabled", b.disabled()), _.wh("aria-label", b.title()), _.y(), _.E("value", b.WR())("disabled", b.disabled()), _.wh("aria-valuemin", b.min())("aria-valuemax", b.max())("aria-valuenow", b.WR()));
			},
			dependencies: [
				_.gE,
				_.GN,
				_.FN,
				_.DN,
				_.IC,
				_.HC
			],
			styles: [".ms-slider[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;--ms-input-width:48px}.ms-slider[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .ms-slider[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ms-slider[_ngcontent-%COMP%]   .slider-number-input[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;-moz-appearance:textfield}.large-number[_nghost-%COMP%]   .ms-slider[_ngcontent-%COMP%]{--ms-input-width:64px}mat-slider[_ngcontent-%COMP%]{width:65%;min-width:unset;margin-left:0}"]
		});
		var cXb, dXb;
		cXb = function(a, b, c) {
			if (c = a.F()[c]) a = {
				enableSearchAsATool: a.Ia.enableSearchAsATool(),
				enableImageSearch: a.Ia.enableImageSearch(),
				enableGoogleMaps: a.Ia.enableGoogleMaps()
			}, a = _.gn({
				model: b,
				Zz: a
			}), b = {
				model: b.getName(),
				temperature: _.Um(b, 9) ? _.Vm(b, 9) : .25,
				topK: _.dn(b, 11) && _.yj(b, 11) ? _.yj(b, 11) : void 0,
				topP: _.Um(b, 10) ? _.Vm(b, 10) : .95,
				safetySettings: _.Gxa(b),
				maxOutputTokens: _.yj(b, 7) || 1024,
				enableSearchAsATool: _.Pm(a, 15),
				enableImageSearch: _.Pm(a, 31),
				enableGoogleMaps: _.Pm(a, 32),
				enableCodeExecution: _.Pm(a, 10),
				ye: _.rn(a).length > 0,
				enableBrowseAsATool: _.Pm(a, 18),
				Ef: _.Pm(a, 19),
				Bn: _.Pm(a, 33),
				An: _.Pm(a, 35),
				Cn: _.Pm(a, 34)
			}, _.RC(c, b);
		};
		dXb = function(a, b) {
			if (_.Sm(b) || _.hxa(b, a.R.Ch())) return b;
			var c, d;
			return (d = (c = _.Upb(a.R, b)) == null ? void 0 : c.getName()) != null ? d : "";
		};
		_.eXb = function(a, b, c) {
			var d = dXb(a, b), e;
			if (((e = a.H.F()[c]) == null ? void 0 : e.model()) !== d) if (_.Sm(d)) {
				let f;
				(f = a.F()[c]) == null || f.model.set(d);
			} else (b = a.R.Ch().find((f) => f.getName() === d)) && cXb(a, b, c);
		};
		_.bXb = function(a, b, c) {
			c = c || _.Haa;
			for (var d = 0, e = a.length, f; d < e;) {
				let g = d + (e - d >>> 1), k;
				k = c(b, a[g]);
				k > 0 ? d = g + 1 : (e = g, f = !k);
			}
			return f ? d : -d - 1;
		};
		_.nj.prototype.hasImage = _.ca(13, function() {
			return _.Dr(this, _.wv, 2, _.vj);
		});
		_.Gpa.prototype.hasImage = _.ca(12, function() {
			return _.Dr(this, _.wv, 2, _.wj);
		});
		_.Av.prototype.hasImage = _.ca(11, function() {
			return _.Dr(this, _.wv, 2, _.kj);
		});
		_.Zp.prototype.hasImage = _.ca(10, function() {
			return _.Dr(this, _.w0a, 2, _.EHa);
		});
		_.xx.prototype.hasImage = _.ca(9, function() {
			return _.Dr(this, _.Q2a, 2, _.wx);
		});
		_.zx.prototype.hasImage = _.ca(8, function() {
			return _.Dr(this, _.Q2a, 2, _.yx);
		});
		_.eO = class {};
		_.eO.J = function(a) {
			return new (a || _.eO)();
		};
		_.eO.Oa = _.We({
			type: _.eO,
			da: [["mat-card-content"]],
			eb: [1, "mat-mdc-card-content"]
		});
		var LVb = function(a, b) {
			if (b == null) return new a();
			b = _.tca(b);
			return new a(_.aba(b));
		}, NVb = function() {
			return MVb = MVb || new _.Rj();
		}, OVb = function(a) {
			_.Oj.call(this, "serverreachability", a);
		}, RN = function(a) {
			var b = NVb();
			b.dispatchEvent(new OVb(b, a));
		}, PVb = function(a, b) {
			_.Oj.call(this, "statevent", a);
			this.stat = b;
		}, SN = function(a) {
			var b = NVb();
			b.dispatchEvent(new PVb(b, a));
		}, QVb = function(a, b, c, d) {
			_.Oj.call(this, "timingevent", a);
			this.size = b;
			this.rtt = c;
			this.retries = d;
		}, RVb = function(a, b, c) {
			var d = NVb();
			d.dispatchEvent(new QVb(d, a, b, c));
		}, TN = function(a, b) {
			if (typeof a !== "function") throw Error("rf");
			return _.ha.setTimeout(function() {
				a();
			}, b);
		}, UN = function() {
			this.A = !0;
		}, VN = function(a, b, c, d) {
			this.R = a;
			this.F = b;
			this.I = c;
			this.mb = d || 1;
			this.ec = new _.ok(this);
			this.mO = 45e3;
			this.Aa = null;
			this.ea = !1;
			this.X = this.aa = this.na = this.Na = this.za = this.Db = this.oa = null;
			this.ta = [];
			this.A = null;
			this.ma = 0;
			this.U = this.fa = null;
			this.hb = -1;
			this.Ea = !1;
			this.Xa = 0;
			this.Ta = null;
			this.rc = this.Fa = this.Zb = this.cb = !1;
			this.H = new SVb();
		}, TVb = function(a, b) {
			var c = new UN();
			c.debug("TestLoadImage: loading " + a);
			if (_.ha.Image) {
				let d = new Image();
				d.onload = _.yk(WN, c, "TestLoadImage: loaded", !0, b, d);
				d.onerror = _.yk(WN, c, "TestLoadImage: error", !1, b, d);
				d.onabort = _.yk(WN, c, "TestLoadImage: abort", !1, b, d);
				d.ontimeout = _.yk(WN, c, "TestLoadImage: timeout", !1, b, d);
				_.ha.setTimeout(function() {
					if (d.ontimeout) d.ontimeout();
				}, 1e4);
				d.src = a;
			} else b(!1);
		}, UVb = function(a, b) {
			var c = new UN(), d = new AbortController(), e = setTimeout(() => {
				d.abort();
				WN(c, "TestPingServer: timeout", !1, b);
			}, 1e4);
			fetch(a, { signal: d.signal }).then((f) => {
				clearTimeout(e);
				f.ok ? WN(c, "TestPingServer: ok", !0, b) : WN(c, "TestPingServer: server error", !1, b);
			}).catch(() => {
				clearTimeout(e);
				WN(c, "TestPingServer: error", !1, b);
			});
		}, WN = function(a, b, c, d, e) {
			try {
				a.debug(b), e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
			} catch (f) {}
		}, WVb = function() {
			this.A = new VVb();
		}, XN = function(a, b, c) {
			return c && c.LGb ? c.LGb[a] || b : b;
		}, YN = function(a) {
			this.Nm = 0;
			this.I = [];
			this.A = new UN();
			this.cf = this.Og = this.Na = this.Wc = this.F = this.Uh = this.Aa = this.Fa = this.aa = this.rc = this.fa = null;
			this.Xj = this.Fc = 0;
			this.AA = XN("failFast", !1, a);
			this.Ea = this.na = this.ma = this.X = this.U = null;
			this.zd = !0;
			this.Nf = this.Wj = this.ea = -1;
			this.Dd = this.oa = this.za = 0;
			this.ou = XN("baseRetryDelayMs", 5e3, a);
			this.GL = XN("retryDelaySeedMs", 1e4, a);
			this.JA = XN("forwardChannelMaxRetries", 2, a);
			this.bg = XN("forwardChannelRequestTimeoutMs", 2e4, a);
			this.Th = a && a.xeb || void 0;
			this.sD = a && a.h8b || void 0;
			this.fp = a && a.M9b || !1;
			this.hb = void 0;
			this.Xa = a && a.tbb || !1;
			this.cb = "";
			this.H = new XVb(a && a.WWa);
			this.Cg = Math.min(a && a.ZJb || 1e3, 1e3);
			this.fq = new WVb();
			this.ec = a && a.M6b || !1;
			this.Db = a && a.H6b || !1;
			this.ec && this.Db && (this.A.warning("Ignore encodeInitMessageHeaders because fastHandshake is set."), this.Db = !1);
			this.qA = a && a.O5b || !1;
			a && a.DYa && this.A.DYa();
			a && a.R6b && (this.zd = !1);
			this.ue = !this.ec && this.zd && a && a.o6b || !1;
			this.sf = void 0;
			a && a.B4a && a.B4a > 0 && (this.sf = a.B4a);
			this.Zb = void 0;
			this.Ta = 0;
			this.mb = !1;
			this.Nc = this.ta = null;
		}, YVb = function() {}, $Vb = function(a, b, c, d = {}, e = {}) {
			var f = {}, g = _.WIa([]);
			g && (f.Authorization = g);
			b && (f["X-Goog-Api-Key"] = b);
			if (c || c === 0) f["X-Goog-AuthUser"] = `${c}`;
			for (let [k, p] of Object.entries(e)) f[k] = p;
			new YVb();
			b = Object.assign({}, {
				ZFb: "gsessionid",
				tbb: !0,
				KEa: "application/json+protobuf",
				mPb: !0
			}, a.includes("localhost") ? {} : { YFb: "$httpHeaders" }, { vGb: f });
			d = Object.assign({}, b, d);
			return new ZVb(a, d);
		}, aWb = function(a) {
			_.On(a, "zx", _.iRa());
			return a;
		}, bWb = _.Wc(_.lw);
		var cWb = _.Wc(class extends _.h {
			constructor(a) {
				super(a);
			}
		});
		var dWb = function() {
			_.Oj.call(this, "n");
		};
		_.Fs(dWb, _.Oj);
		var eWb = function() {
			_.Oj.call(this, "m");
		};
		_.Fs(eWb, _.Oj);
		var MVb = null;
		_.Fs(OVb, _.Oj);
		_.Fs(PVb, _.Oj);
		_.Fs(QVb, _.Oj);
		UN.prototype.DYa = function() {
			this.A = !1;
		};
		var fWb = function(a, b, c, d, e, f) {
			a.info(function() {
				if (a.A) if (f) {
					var g = "";
					var k = f.split("&");
					for (let r = 0; r < k.length; r++) {
						var p = k[r].split("=");
						if (p.length > 1) {
							let v = p[0];
							p = p[1];
							let w = v.split("_");
							g = w.length >= 2 && w[1] == "type" ? g + (v + "=" + p + "&") : g + (v + "=redacted&");
						}
					}
				} else g = null;
				else g = f;
				return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
			});
		}, gWb = function(a, b, c, d, e, f, g) {
			a.info(function() {
				return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
			});
		}, ZN = function(a, b, c, d) {
			a.info(function() {
				return "XMLHTTP TEXT (" + b + "): " + hWb(a, c) + (d ? " " + d : "");
			});
		}, iWb = function(a, b) {
			a.info(function() {
				return "TIMEOUT: " + b;
			});
		};
		UN.prototype.debug = function() {};
		UN.prototype.info = function() {};
		UN.prototype.warning = function() {};
		var hWb = function(a, b) {
			if (!a.A) return b;
			if (!b) return null;
			try {
				let f = JSON.parse(b);
				if (f) {
					for (let g = 0; g < f.length; g++) if (Array.isArray(f[g])) {
						var c = f[g];
						if (!(c.length < 2)) {
							var d = c[1];
							if (Array.isArray(d) && !(d.length < 1)) {
								var e = d[0];
								if (e != "noop" && e != "stop" && e != "close") for (let k = 1; k < d.length; k++) d[k] = "";
							}
						}
					}
				}
				return _.IXa(f);
			} catch (f) {
				return a.debug("Exception parsing expected JS array - probably was not JS"), b;
			}
		};
		var SVb = function() {
			this.H = null;
			this.A = "";
			this.F = !1;
		}, jWb = function(a, b) {
			switch (a) {
				case 0: return "Non-200 return code (" + b + ")";
				case 1: return "XMLHTTP failure (no data)";
				case 2: return "HttpConnection timeout";
				default: return "Unknown error";
			}
		}, kWb = {}, lWb = {};
		VN.prototype.setTimeout = function(a) {
			this.mO = a;
		};
		var nWb = function(a, b, c) {
			a.Na = 1;
			a.na = aWb(b.clone());
			a.X = c;
			a.cb = !0;
			mWb(a, null);
		}, mWb = function(a, b) {
			a.za = Date.now();
			oWb(a);
			a.aa = a.na.clone();
			var c = a.aa, d = a.mb;
			Array.isArray(d) || (d = [String(d)]);
			_.kZa(c.A, "t", d);
			a.ma = 0;
			c = a.R.Xa;
			a.H = new SVb();
			a.A = pWb(a.R, c ? b : null, !a.X);
			a.Xa > 0 && (a.Ta = new _.mzb((0, _.Sj)(a.Fc, a, a.A), a.Xa));
			a.ec.listen(a.A, "readystatechange", a.Nc);
			b = a.Aa ? _.Hj(a.Aa) : {};
			a.X ? (a.fa || (a.fa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.A.send(a.aa, a.fa, a.X, b)) : (a.fa = "GET", a.A.send(a.aa, a.fa, null, b));
			RN(1);
			fWb(a.F, a.fa, a.aa, a.I, a.mb, a.X);
		};
		VN.prototype.Nc = function(a) {
			a = a.target;
			var b = this.Ta;
			b && _.ew(a) == 3 ? (this.F.debug("Throttling readystatechange."), b.R()) : this.Fc(a);
		};
		VN.prototype.Fc = function(a) {
			try {
				a == this.A ? qWb(this) : this.F.warning("Called back with an unexpected xmlhttp");
			} catch (b) {
				this.F.debug("Failed call to OnXmlHttpReadyStateChanged_");
			} finally {}
		};
		var qWb = function(a) {
			var b = _.ew(a.A), c = a.A.F, d = a.A.Pc();
			if (!(b < 3 || b == 3 && !rWb(a))) {
				a.Ea || b != 4 || c == 7 || (c == 8 || d <= 0 ? RN(3) : RN(2));
				sWb(a);
				var e = a.A.Pc();
				a.hb = e;
				c = tWb(a);
				rWb(a) || a.F.debug(function() {
					return "No response text for uri " + a.aa + " status " + e;
				});
				a.ea = e == 200;
				gWb(a.F, a.fa, a.aa, a.I, a.mb, b, e);
				if (a.ea) {
					if (a.Zb && !a.Fa) if (d = uWb(a)) ZN(a.F, a.I, d, "Initial handshake response via X-HTTP-Initial-Response"), a.Fa = !0, vWb(a, d);
					else {
						a.ea = !1;
						a.U = 3;
						SN(12);
						a.F.warning("XMLHTTP Missing X_HTTP_INITIAL_RESPONSE (" + a.I + ")");
						$N(a);
						aO(a);
						return;
					}
					a.cb ? wWb(a, b, c) : (ZN(a.F, a.I, c, null), vWb(a, c));
					b == 4 && $N(a);
					a.ea && !a.Ea && (b == 4 ? xWb(a.R, a) : (a.ea = !1, oWb(a)));
				} else _.VXa(a.A), e == 400 && c.indexOf("Unknown SID") > 0 ? (a.U = 3, SN(12), a.F.warning("XMLHTTP Unknown SID (" + a.I + ")")) : (a.U = 0, SN(13), a.F.warning("XMLHTTP Bad status " + e + " (" + a.I + ")")), $N(a), aO(a);
			}
		}, uWb = function(a) {
			return a.A && (a = _.rk(a.A, "X-HTTP-Initial-Response")) && !_.ma(a) ? a : null;
		}, tWb = function(a) {
			if (!yWb(a)) return a.A.Lw();
			var b = _.UXa(a.A);
			if (b === "") return "";
			var c = "", d = b.length, e = _.ew(a.A) == 4;
			if (!a.H.H) {
				if (typeof TextDecoder === "undefined") return $N(a), aO(a), "";
				a.H.H = new _.ha.TextDecoder();
			}
			for (let f = 0; f < d; f++) a.H.F = !0, c += a.H.H.decode(b[f], { stream: !(e && f == d - 1) });
			b.length = 0;
			a.H.A += c;
			a.ma = 0;
			return a.H.A;
		}, rWb = function(a) {
			return a.A ? a.H.F ? !0 : !(!a.A.Lw() && !_.UXa(a.A)) : !1;
		}, yWb = function(a) {
			return a.A ? a.fa == "GET" && a.Na != 2 && a.R.fp : !1;
		}, wWb = function(a, b, c) {
			for (var d = !0, e; !a.Ea && a.ma < c.length;) if (e = zWb(a, c), e == lWb) {
				b == 4 && (a.U = 4, SN(14), d = !1);
				ZN(a.F, a.I, null, "[Incomplete Response]");
				break;
			} else if (e == kWb) {
				a.U = 4;
				SN(15);
				ZN(a.F, a.I, c, "[Invalid Chunk]");
				d = !1;
				break;
			} else ZN(a.F, a.I, e, null), vWb(a, e);
			yWb(a) && a.ma != 0 && (a.H.A = a.H.A.slice(a.ma), a.ma = 0);
			b != 4 || c.length != 0 || a.H.F || (a.U = 1, SN(16), d = !1);
			a.ea = a.ea && d;
			d ? c.length > 0 && !a.rc && (a.rc = !0, b = a.R, b.F == a && b.ue && !b.mb && (b.A.info("Great, no buffering proxy detected. Bytes received: " + c.length), AWb(b), b.mb = !0, SN(11))) : (ZN(a.F, a.I, c, "[Invalid Chunked Response]"), $N(a), aO(a));
		}, zWb = function(a, b) {
			var c = a.ma, d = b.indexOf("\n", c);
			if (d == -1) return lWb;
			c = b.substring(c, d);
			c = Number(c);
			if (isNaN(c)) return kWb;
			d += 1;
			if (d + c > b.length) return lWb;
			b = b.slice(d, d + c);
			a.ma = d + c;
			return b;
		};
		VN.prototype.cancel = function() {
			this.Ea = !0;
			$N(this);
		};
		var oWb = function(a) {
			a.Db = Date.now() + a.mO;
			BWb(a, a.mO);
		}, BWb = function(a, b) {
			if (a.oa != null) throw Error("sf");
			a.oa = TN((0, _.Sj)(a.Wc, a), b);
		}, sWb = function(a) {
			a.oa && (_.ha.clearTimeout(a.oa), a.oa = null);
		};
		VN.prototype.Wc = function() {
			this.oa = null;
			var a = Date.now();
			a - this.Db >= 0 ? (iWb(this.F, this.aa), this.Na != 2 && (RN(3), SN(17)), $N(this), this.U = 2, aO(this)) : (this.F.warning("WatchDog timer called too early"), BWb(this, this.Db - a));
		};
		var aO = function(a) {
			a.R.isClosed() || a.Ea || xWb(a.R, a);
		}, $N = function(a) {
			sWb(a);
			_.zj(a.Ta);
			a.Ta = null;
			a.ec.removeAll();
			if (a.A) {
				let b = a.A;
				a.A = null;
				b.abort();
				b.dispose();
			}
		}, vWb = function(a, b) {
			try {
				var c = a.R;
				if (c.R != 0 && (c.F == a || CWb(c.H, a))) {
					if (!a.Fa && CWb(c.H, a) && c.R == 3) {
						try {
							var d = c.fq.A.parse(b);
						} catch (v) {
							d = null;
						}
						if (Array.isArray(d) && d.length == 3) {
							var e = d;
							if (e[0] == 0) a: if (c.A.debug("Server claims our backchannel is missing."), c.ma) c.A.debug("But we are currently starting the request.");
							else {
								if (c.F) if (c.F.za + 3e3 < a.za) DWb(c), EWb(c);
								else break a;
								else c.A.warning("We do not have a BackChannel established");
								FWb(c);
								SN(18);
							}
							else {
								c.Wj = e[1];
								var f = c.Wj - c.ea;
								if (0 < f) {
									var g = e[2];
									c.A.debug(g + " bytes (in " + f + " arrays) are outstanding on the BackChannel");
									g < 37500 && c.Ea && c.oa == 0 && !c.na && (c.na = TN((0, _.Sj)(c.vL, c), 6e3));
								}
							}
							if (GWb(c.H) <= 1 && c.Zb) {
								try {
									c.Zb();
								} catch (v) {}
								c.Zb = void 0;
							}
						} else c.A.debug("Bad POST response data returned"), bO(c, 11);
					} else if ((a.Fa || c.F == a) && DWb(c), !_.ma(b)) for (e = c.fq.A.parse(b), f = 0; f < e.length; f++) {
						let v = e[f], w = v[0];
						if (w <= c.ea) c.A.warning("Ignoring out-of-order or duplicate message with arrayId: " + w + ", lastArrayId: " + c.ea);
						else if (w > c.ea + 1 && c.ea > -1 && c.A.warning("Received non-consecutive message with arrayId: " + w + ", lastArrayId: " + c.ea), c.ea = w, v = v[1], c.R == 2) if (v[0] == "c") {
							c.cb = v[1];
							c.cf = v[2];
							let D = v[3];
							D != null && (c.ie = D, c.A.info("VER=" + c.ie));
							let G = v[4];
							G != null && (c.Nm = G, c.A.info("SVER=" + c.Nm));
							let L = v[5];
							L != null && typeof L === "number" && L > 0 && (g = 1.5 * L, c.hb = g, c.A.info("backChannelRequestTimeoutMs_=" + g));
							g = c;
							let N = a.A;
							if (N) {
								let T = _.rk(N, "X-Client-Wire-Protocol");
								if (T) {
									var k = g.H;
									b = T;
									!k.A && (_.na(b, "spdy") || _.na(b, "quic") || _.na(b, "h2")) && (k.I = k.R, k.A = new Set(), k.F && (HWb(k, k.F), k.F = null));
								}
								if (g.Aa) {
									let X = _.rk(N, "X-HTTP-Session-Id");
									X ? (g.Uh = X, _.On(g.Na, g.Aa, X)) : g.A.warning("Missing X_HTTP_SESSION_ID in the handshake response");
								}
							}
							c.R = 3;
							c.U && c.U.UVa();
							c.ue && (c.Ta = Date.now() - a.za, c.A.info("Handshake RTT: " + c.Ta + "ms"));
							g = c;
							b = a;
							var p = d = g;
							let Q = IWb(p, p.Xa ? g.cf : null, g.Wc);
							p.A.debug("GetBackChannelUri: " + Q);
							d.Og = Q;
							if (b.Fa) {
								g.A.debug("Upgrade the handshake request to a backchannel.");
								JWb(g.H, b);
								d = b;
								var r = g.hb;
								r && d.setTimeout(r);
								d.oa && (sWb(d), oWb(d));
								g.F = b;
							} else KWb(g);
							c.I.length > 0 && LWb(c);
						} else v[0] != "stop" && v[0] != "close" || bO(c, 7);
						else c.R == 3 && (v[0] == "stop" || v[0] == "close" ? v[0] == "stop" ? bO(c, 7) : c.disconnect() : v[0] != "noop" && c.U && c.U.TVa(v), c.oa = 0);
					}
				}
				RN(4);
			} catch (v) {}
		};
		var MWb = class {
			constructor(a, b) {
				this.mapId = a;
				this.map = b;
				this.context = null;
			}
		};
		var XVb = function(a) {
			this.R = a || 10;
			_.ha.PerformanceNavigationTiming ? (a = _.ha.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(_.ha.chrome && _.ha.chrome.loadTimes && _.ha.chrome.loadTimes() && _.ha.chrome.loadTimes().wasFetchedViaSpdy);
			this.I = a ? this.R : 1;
			this.A = null;
			this.I > 1 && (this.A = new Set());
			this.F = null;
			this.H = [];
		}, NWb = function(a) {
			return a.F ? !0 : a.A ? a.A.size >= a.I : !1;
		}, GWb = function(a) {
			return a.F ? 1 : a.A ? a.A.size : 0;
		}, CWb = function(a, b) {
			return a.F ? a.F == b : a.A ? a.A.has(b) : !1;
		}, HWb = function(a, b) {
			a.A ? a.A.add(b) : a.F = b;
		}, JWb = function(a, b) {
			a.F && a.F == b ? a.F = null : a.A && a.A.has(b) && a.A.delete(b);
		};
		XVb.prototype.cancel = function() {
			this.H = OWb(this);
			if (this.F) this.F.cancel(), this.F = null;
			else if (this.A && this.A.size !== 0) {
				for (let a of this.A.values()) a.cancel();
				this.A.clear();
			}
		};
		var OWb = function(a) {
			if (a.F != null) return a.H.concat(a.F.ta);
			if (a.A != null && a.A.size !== 0) {
				let b = a.H;
				for (let c of a.A.values()) b = b.concat(c.ta);
				return b;
			}
			return _.Da(a.H);
		}, PWb = function(a, b) {
			a.H = a.H.concat(b);
		};
		var VVb = class {
			stringify(a) {
				return _.ha.JSON.stringify(a, void 0);
			}
			parse(a) {
				return _.ha.JSON.parse(a, void 0);
			}
		};
		YN.prototype.ie = 8;
		YN.prototype.R = 1;
		YN.prototype.connect = function(a, b, c, d) {
			this.A.debug("connect()");
			SN(0);
			this.Wc = a;
			this.Fa = b || {};
			c && d !== void 0 && (this.Fa.OSID = c, this.Fa.OAID = d);
			this.Ea = this.zd;
			this.A.debug("connectChannel_()");
			a = IWb(this, null, this.Wc);
			this.A.debug("GetForwardChannelUri: " + a);
			this.Na = a;
			LWb(this);
		};
		YN.prototype.disconnect = function() {
			this.A.debug("disconnect()");
			QWb(this);
			if (this.R == 3) {
				var a = this.Fc++, b = this.Na.clone();
				_.On(b, "SID", this.cb);
				_.On(b, "RID", a);
				_.On(b, "TYPE", "terminate");
				cO(this, b);
				a = new VN(this, this.A, a);
				a.Na = 2;
				a.na = aWb(b.clone());
				b = !1;
				if (_.ha.navigator && _.ha.navigator.sendBeacon) try {
					b = _.ha.navigator.sendBeacon(a.na.toString(), "");
				} catch (c) {}
				!b && _.ha.Image && (new Image().src = a.na, b = !0);
				b || (a.A = pWb(a.R, null), a.A.send(a.na));
				a.za = Date.now();
				oWb(a);
			}
			RWb(this);
		};
		var EWb = function(a) {
			a.F && (AWb(a), a.F.cancel(), a.F = null);
		}, QWb = function(a) {
			EWb(a);
			a.ma && (_.ha.clearTimeout(a.ma), a.ma = null);
			DWb(a);
			a.H.cancel();
			a.X && (typeof a.X === "number" && _.ha.clearTimeout(a.X), a.X = null);
		};
		YN.prototype.isClosed = function() {
			return this.R == 0;
		};
		YN.prototype.getState = function() {
			return this.R;
		};
		var LWb = function(a) {
			NWb(a.H) || a.X || (a.X = !0, _.Zv(a.Mm, a), a.za = 0);
		}, TWb = function(a, b) {
			if (GWb(a.H) >= a.H.I - (a.X ? 1 : 0)) return !1;
			if (a.X) return a.A.debug("Use the retry request that is already scheduled."), a.I = b.ta.concat(a.I), !0;
			if (a.R == 1 || a.R == 2 || a.za >= (a.AA ? 0 : a.JA)) return !1;
			a.A.debug("Going to retry POST");
			a.X = TN((0, _.Sj)(a.Mm, a, b), SWb(a, a.za));
			a.za++;
			return !0;
		};
		YN.prototype.Mm = function(a) {
			if (this.X) if (this.X = null, this.A.debug("startForwardChannel_"), this.R == 1) {
				if (!a) {
					this.A.debug("open_()");
					this.Fc = Math.floor(Math.random() * 1e5);
					a = this.Fc++;
					let e = new VN(this, this.A, a), f = this.fa;
					this.rc && (f ? (f = _.Hj(f), _.nqa(f, this.rc)) : f = this.rc);
					this.aa !== null || this.Db || (e.Aa = f, f = null);
					if (this.ec) a: {
						var b = 0;
						for (var c = 0; c < this.I.length; c++) {
							b: {
								var d = this.I[c];
								if ("__data__" in d.map && (d = d.map.__data__, typeof d === "string")) {
									d = d.length;
									break b;
								}
								d = void 0;
							}
							if (d === void 0) break;
							b += d;
							if (b > 4096) {
								b = c;
								break a;
							}
							if (b === 4096 || c === this.I.length - 1) {
								b = c + 1;
								break a;
							}
						}
						b = this.Cg;
					}
					else b = this.Cg;
					b = UWb(this, e, b);
					c = this.Na.clone();
					_.On(c, "RID", a);
					_.On(c, "CVER", 22);
					this.Aa && _.On(c, "X-HTTP-Session-Id", this.Aa);
					cO(this, c);
					f && (this.Db ? b = "headers=" + _.Zj(_.lZa(f)) + "&" + b : this.aa && _.mZa(c, this.aa, f));
					HWb(this.H, e);
					this.qA && _.On(c, "TYPE", "init");
					this.ec ? (_.On(c, "$req", b), _.On(c, "SID", "null"), e.Zb = !0, nWb(e, c, null)) : nWb(e, c, b);
					this.R = 2;
				}
			} else this.R == 3 && (a ? VWb(this, a) : this.I.length == 0 ? this.A.debug("startForwardChannel_ returned: nothing to send") : NWb(this.H) || (VWb(this), this.A.debug("startForwardChannel_ finished, sent request")));
		};
		var VWb = function(a, b) {
			var c;
			b ? c = b.I : c = a.Fc++;
			var d = a.Na.clone();
			_.On(d, "SID", a.cb);
			_.On(d, "RID", c);
			_.On(d, "AID", a.ea);
			cO(a, d);
			a.aa && a.fa && _.mZa(d, a.aa, a.fa);
			c = new VN(a, a.A, c, a.za + 1);
			a.aa === null && (c.Aa = a.fa);
			b && (a.I = b.ta.concat(a.I));
			b = UWb(a, c, a.Cg);
			c.setTimeout(Math.round(a.bg * .5) + Math.round(a.bg * .5 * Math.random()));
			HWb(a.H, c);
			nWb(c, d, b);
		}, cO = function(a, b) {
			a.Fa && _.Fj(a.Fa, function(c, d) {
				_.On(b, d, c);
			});
			a.U && _.Fj({}, function(c, d) {
				_.On(b, d, c);
			});
		}, UWb = function(a, b, c) {
			c = Math.min(a.I.length, c);
			var d = a.U ? (0, _.Sj)(a.U.zxb, a.U, a) : null;
			a: {
				var e = a.I;
				let k = -1;
				for (;;) {
					let p = ["count=" + c];
					k == -1 ? c > 0 ? (k = e[0].mapId, p.push("ofs=" + k)) : k = 0 : p.push("ofs=" + k);
					let r = !0;
					for (let v = 0; v < c; v++) {
						var f = e[v].mapId;
						let w = e[v].map;
						f -= k;
						if (f < 0) k = Math.max(0, e[v].mapId - 100), r = !1;
						else try {
							f = "req" + f + "_" || "";
							try {
								var g = w instanceof Map ? w : Object.entries(w);
								for (let [D, G] of g) {
									let L = G;
									_.eq(G) && (L = _.IXa(G));
									p.push(f + D + "=" + encodeURIComponent(L));
								}
							} catch (D) {
								throw p.push(f + "type=" + encodeURIComponent("_badmap")), D;
							}
						} catch (D) {
							d && d(w);
						}
					}
					if (r) {
						g = p.join("&");
						break a;
					}
				}
				g = void 0;
			}
			a = a.I.splice(0, c);
			b.ta = a;
			return g;
		}, KWb = function(a) {
			a.F || a.ma || (a.Dd = 1, _.Zv(a.rl, a), a.oa = 0);
		}, FWb = function(a) {
			if (a.F || a.ma || a.oa >= 3) return !1;
			a.A.debug("Going to retry GET");
			a.Dd++;
			a.ma = TN((0, _.Sj)(a.rl, a), SWb(a, a.oa));
			a.oa++;
			return !0;
		};
		YN.prototype.rl = function() {
			this.ma = null;
			WWb(this);
			if (this.ue && !this.mb) if (this.F == null || this.Ta <= 0) this.A.warning("Skip bpDetectionTimerId_ " + this.F + " " + this.Ta);
			else {
				var a = 4 * this.Ta;
				this.A.info("BP detection timer enabled: " + a);
				this.ta = TN((0, _.Sj)(this.yL, this), a);
			}
		};
		YN.prototype.yL = function() {
			if (this.ta) {
				this.ta = null;
				this.A.info("BP detection timeout reached.");
				if (this.F.A != null) {
					let a = this.F.A.Lw();
					a && this.A.warning("Timer should have been cancelled : " + a);
				}
				this.A.info("Buffering proxy detected and switch to long-polling!");
				this.Ea = !1;
				this.mb = !0;
				SN(10);
				EWb(this);
				WWb(this);
			} else this.A.warning("Invalid operation.");
		};
		var AWb = function(a) {
			a.ta != null && (a.A.debug("Cancel the BP detection timer."), _.ha.clearTimeout(a.ta), a.ta = null);
		}, WWb = function(a) {
			a.A.debug("Creating new HttpRequest");
			a.F = new VN(a, a.A, "rpc", a.Dd);
			a.aa === null && (a.F.Aa = a.fa);
			a.F.Xa = 0;
			var b = a.Og.clone();
			_.On(b, "RID", "rpc");
			_.On(b, "SID", a.cb);
			_.On(b, "AID", a.ea);
			_.On(b, "CI", a.Ea ? "0" : "1");
			!a.Ea && a.sf && _.On(b, "TO", a.sf);
			_.On(b, "TYPE", "xmlhttp");
			cO(a, b);
			a.aa && a.fa && _.mZa(b, a.aa, a.fa);
			a.hb && a.F.setTimeout(a.hb);
			var c = a.F, d = a.cf;
			c.Na = 1;
			c.na = aWb(b.clone());
			c.X = null;
			c.cb = !0;
			mWb(c, d);
			a.A.debug("New Request created");
		};
		YN.prototype.vL = function() {
			this.na != null && (this.na = null, EWb(this), FWb(this), SN(19));
		};
		var DWb = function(a) {
			a.na != null && (_.ha.clearTimeout(a.na), a.na = null);
		}, xWb = function(a, b) {
			a.A.debug("Request complete");
			var c = null;
			if (a.F == b) {
				DWb(a);
				AWb(a);
				a.F = null;
				var d = 2;
			} else if (CWb(a.H, b)) c = b.ta, JWb(a.H, b), d = 1;
			else return;
			if (a.R != 0) if (b.ea) d == 1 ? (RVb(b.X ? b.X.length : 0, Date.now() - b.za, a.za), LWb(a)) : KWb(a);
			else {
				var e = b.hb, f = b.U;
				if (f == 3 || f == 0 && e > 0) a.A.debug("Not retrying due to error type"), e > 200 && (a.Nf = b.hb);
				else {
					a.A.debug(function() {
						return "Maybe retrying, last error: " + jWb(f, a.Nf);
					});
					if (d == 1 && TWb(a, b) || d == 2 && FWb(a)) return;
					a.A.debug("Exceeded max number of retries");
				}
				c && c.length > 0 && PWb(a.H, c);
				a.A.debug("Error: HTTP request failed");
				switch (f) {
					case 1:
						bO(a, 5);
						break;
					case 4:
						bO(a, 10);
						break;
					case 3:
						bO(a, 6);
						break;
					default: bO(a, 2);
				}
			}
		}, SWb = function(a, b) {
			var c = a.ou + Math.floor(Math.random() * a.GL);
			a.isActive() || (a.A.debug("Inactive channel"), c *= 2);
			return c * b;
		}, bO = function(a, b) {
			a.A.info("Error code " + b);
			if (b == 2) {
				var c = (0, _.Sj)(a.gM, a), d = a.sD;
				let e = !d;
				d = new _.hk(d || "//www.google.com/images/cleardot.gif");
				_.ha.location && _.ha.location.protocol == "http" || _.ik(d, "https");
				aWb(d);
				e ? TVb(d.toString(), c) : UVb(d.toString(), c);
			} else SN(2);
			a.A.debug("HttpChannel: error - " + b);
			a.R = 0;
			a.U && a.U.SVa(b);
			RWb(a);
			QWb(a);
		};
		YN.prototype.gM = function(a) {
			a ? (this.A.info("Successfully pinged google.com"), SN(2)) : (this.A.info("Failed to ping google.com"), SN(1));
		};
		var RWb = function(a) {
			a.R = 0;
			a.Nc = [];
			if (a.U) {
				let b = OWb(a.H);
				if (b.length != 0 || a.I.length != 0) a.A.debug(() => "Number of undelivered maps, pending: " + b.length + ", outgoing: " + a.I.length), _.Ga(a.Nc, b), _.Ga(a.Nc, a.I), a.H.H.length = 0, _.Da(a.I), a.I.length = 0;
				a.U.RVa();
			}
		}, IWb = function(a, b, c) {
			var d = _.uw(c);
			if (d.ug() != "") b && _.jk(d, b + "." + d.ug()), _.kk(d, d.H);
			else {
				var e = _.ha.location;
				d = e.protocol;
				b = b ? b + "." + e.hostname : e.hostname;
				e = +e.port;
				let f = new _.hk(null);
				d && _.ik(f, d);
				b && _.jk(f, b);
				e && _.kk(f, e);
				c && _.lk(f, c);
				d = f;
			}
			c = a.Aa;
			b = a.Uh;
			c && b && _.On(d, c, b);
			_.On(d, "VER", a.ie);
			cO(a, d);
			return d;
		}, pWb = function(a, b, c) {
			if (b && !a.Xa) throw Error("tf");
			b = a.fp && !a.Th ? new _.dw(new _.YYa({ abb: c })) : new _.dw(a.Th);
			b.I = a.Xa;
			return b;
		};
		YN.prototype.isActive = function() {
			return !!this.U && this.U.isActive(this);
		};
		var XWb = function() {};
		_.aa = XWb.prototype;
		_.aa.UVa = function() {};
		_.aa.TVa = function() {};
		_.aa.SVa = function() {};
		_.aa.RVa = function() {};
		_.aa.isActive = function() {
			return !0;
		};
		_.aa.zxb = function() {};
		var ZVb = function(a, b) {
			_.Rj.call(this);
			this.A = new YN(b);
			this.I = a;
			this.F = b && b.X7b || null;
			a = b && b.W7b || null;
			b && b.a6b && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
			this.A.fa = a;
			a = b && b.vGb || null;
			b && b.KEa && (a ? a["X-WebChannel-Content-Type"] = b.KEa : a = { "X-WebChannel-Content-Type": b.KEa });
			b && b.oWa && (a ? a["X-WebChannel-Client-Profile"] = b.oWa : a = { "X-WebChannel-Client-Profile": b.oWa });
			this.A.rc = a;
			(a = b && b.YFb) && !_.ma(a) && (this.A.aa = a);
			this.U = b && b.tbb || !1;
			this.R = b && b.mPb || !1;
			(b = b && b.ZFb) && !_.ma(b) && (this.A.Aa = b, a = this.F, a !== null && b in a && (a = this.F, b in a && delete a[b]));
			this.H = new dO(this);
		};
		_.Fs(ZVb, _.Rj);
		_.aa = ZVb.prototype;
		_.aa.open = function() {
			this.A.U = this.H;
			this.U && (this.A.Xa = !0);
			this.A.connect(this.I, this.F || void 0);
		};
		_.aa.close = function() {
			this.A.disconnect();
		};
		_.aa.halfClose = function() {
			throw Error("vf");
		};
		_.aa.send = function(a) {
			var b = this.A;
			if (typeof a === "string") {
				var c = {};
				c.__data__ = a;
				a = c;
			} else this.R && (c = {}, c.__data__ = _.IXa(a), a = c);
			b.I.push(new MWb(b.Xj++, a));
			b.R == 3 && LWb(b);
		};
		_.aa.Ce = function() {
			this.A.U = null;
			delete this.H;
			this.A.disconnect();
			delete this.A;
			ZVb.Ie.Ce.call(this);
		};
		var YWb = function(a) {
			dWb.call(this);
			a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
			var b = a.__sm__;
			if (b) {
				a: {
					for (let c in b) {
						a = c;
						break a;
					}
					a = void 0;
				}
				this.data = (this.metadataKey = a) ? _.lqa(b, this.metadataKey) : b;
			} else this.data = a;
		};
		_.Fs(YWb, dWb);
		var ZWb = function(a) {
			eWb.call(this);
			this.status = 1;
			this.errorCode = a;
		};
		_.Fs(ZWb, eWb);
		var dO = function(a) {
			this.A = a;
		};
		_.Fs(dO, XWb);
		dO.prototype.UVa = function() {
			this.A.dispatchEvent("k");
		};
		dO.prototype.TVa = function(a) {
			this.A.dispatchEvent(new YWb(a));
		};
		dO.prototype.SVa = function(a) {
			this.A.dispatchEvent(new ZWb(a));
		};
		dO.prototype.RVa = function() {
			this.A.dispatchEvent("l");
		};
		var $Wb = function(a) {
			this.A = a;
		};
		$Wb.prototype.commit = function(a) {
			this.A.Zb = a;
		};
		_.aXb = class {
			constructor(a, b, c, d, e = {}, f = {}) {
				this.ma = d;
				this.eventHandler = new _.ok();
				this.H = new _.ml(!1);
				this.I = this.A = new _.Wg();
				this.R = this.H;
				(this.F = $Vb(a, b, c, e, f)) ? (this.eventHandler.listen(this.F, "k", this.fa.bind(this)), this.eventHandler.listen(this.F, "l", this.X.bind(this)), this.eventHandler.listen(this.F, "n", this.ea.bind(this)), this.eventHandler.listen(this.F, "m", this.aa.bind(this))) : this.A.next({
					eventType: "channel_error",
					error: Error("wf")
				});
			}
			connect() {
				if (this.H.isStopped) throw Error("xf");
				this.H.value || this.F.open();
			}
			disconnect() {
				this.A.next({ eventType: "channel_client_close" });
				this.F.close();
				this.H.next(!1);
			}
			destroy() {
				this.H.value && this.disconnect();
				this.H.complete();
				this.A.complete();
				this.eventHandler.removeAll();
			}
			get WWa() {
				return new $Wb(this.F.A).A.H.I;
			}
			get U() {
				{
					var a = new $Wb(this.F.A).A;
					if (a.R == 0) var b = a.Nc;
					else b = [], _.Ga(b, OWb(a.H)), _.Ga(b, a.I);
					let c = b;
					if (c.length == 0) a = 0;
					else {
						b = c[0].mapId;
						for (let d = 1; d < c.length; d++) b = Math.min(b, c[d].mapId);
						a = a.Xj - b;
					}
				}
				return a;
			}
			fa() {
				this.H.next(!0);
				this.A.next({ eventType: "channel_open" });
			}
			X() {
				this.H.next(!1);
				this.A.next({ eventType: "channel_server_close" });
			}
			ea(a) {
				if (a.data && Array.isArray(a.data) && a.data.length !== 0) if (a.metadataKey === "status") {
					a = _.Zca(bWb(), (0, _.HPa)(a.data[0][0]));
					var b = void 0;
					for (var c of _.mj(a, _.$u, 3, _.oj())) if (c.getTypeName() === "google.rpc.DebugInfo") {
						b = c;
						var d = cWb();
						b = _.Vc(b, d, "google.rpc.DebugInfo") || void 0;
					}
					this.A.next({
						eventType: "channel_error",
						error: Error(a.getMessage()),
						status: a.Ff(),
						debugInfo: b
					});
				} else c = _.rp(LVb(this.ma, (0, _.HPa)(a.data[0]))), this.A.next({
					eventType: "channel_message",
					message: c
				});
				else this.A.next({
					eventType: "channel_error",
					error: Error("yf")
				});
			}
			aa(a) {
				a = a.status;
				switch (a) {
					case 1:
						var b = "Network error";
						break;
					case 2:
						b = "Server error";
						break;
					default: b = "Unknown error";
				}
				this.A.next({
					eventType: "channel_error",
					error: Error(b),
					T9b: a
				});
			}
			send(a) {
				this.H.value ? this.F.send(a.serialize()) : this.A.next({
					eventType: "channel_error",
					error: Error("zf")
				});
			}
		};
		var fXb, gXb, hXb;
		fXb = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 4), _.R(1), _.H());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.E("ve", c.ve.Rob)("veClick", !0)("veImpression", !0)("value", b);
				_.y();
				_.U(a.title || "Untitled");
			}
		};
		gXb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "mat-checkbox", 9);
				_.J("ngModelChange", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.v6a(c));
				})("click", function(c) {
					return c.stopPropagation();
				});
				_.F(1, "span", 10);
				_.R(2, "Sync");
				_.H()();
				_.yg();
			}
			a & 2 && (a = _.K(), _.E("disabled", a.disabled()), _.vh("aria-label", `Sync ${a.TITLE.toLowerCase()}`), _.E("matTooltip", `Sync ${a.TITLE.toLowerCase()} on both sides`)("ngModel", !a.disabled() && a.Qm())("ve", a.ve.pQa)("veImpression", !0)("veClick", !0), _.zg());
		};
		hXb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-system-instructions", 11);
				_.J("showSaveStatusIndicator", function(c) {
					_.q(b);
					_.K().k$a.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("index", a.index())("promptType", a.af()));
		};
		_.iXb = function(a) {
			var b = new _.Km();
			return _.Cc(b, 15, _.zb, a, void 0, _.Ab);
		};
		_.jXb = function(a, b) {
			var c = b.sync;
			b = b.index;
			a.A.Qm.set(c);
			if (c) {
				c = a.A.Ob();
				b = c[b].systemInstructions();
				for (let d = 1; d < c.length; d++) _.cK(a, {
					systemInstructions: b,
					index: d
				});
			}
		};
		_.kXb = new _.$y("45670190", !1);
		var gO = class {
			constructor() {
				this.H = _.m(_.Qu);
				this.A = _.m(_.Iw);
				this.F = _.m(_.Op);
				this.I = _.m(_.Zq);
				this.R = _.m(_.MC);
			}
		};
		gO.J = function(a) {
			return new (a || gO)();
		};
		gO.sa = _.Cd({
			token: gO,
			factory: gO.J,
			wa: "root"
		});
		var lXb = class {
			constructor() {
				this.turns = _.M([]);
				this.prompt = _.M("");
				this.systemInstructions = _.M("");
				this.EC = _.M(!1);
				this.Rx = _.M(!1);
				this.nca = _.M("");
				this.Sj = _.M(!1);
				this.C0 = _.M();
			}
			clear() {
				this.turns.set([]);
				this.prompt.set("");
				this.Rx.set(!1);
				this.nca.set("");
				this.Sj.set(!1);
				this.C0.set(void 0);
			}
		};
		_.mXb = function(a) {
			a.F = void 0;
			a.I = [];
			a.H = [];
		};
		_.nXb = function(a, b) {
			for (let e = a.length - 1; e >= 0; --e) {
				let f = a[e];
				if (f.role === "model") {
					a: {
						var c = [...f.parts];
						var d = b;
						for (let g = c.length - 1; g >= 0; --g) {
							let k = c[g];
							if (k.type === 2 || k.type === 0) {
								c[g] = Object.assign({}, k, {
									closed: !0,
									interrupted: d || k.interrupted
								});
								break a;
							}
						}
						c = void 0;
					}
					if (c) {
						a[e] = Object.assign({}, f, { parts: c });
						break;
					}
				}
			}
			return a;
		};
		_.hO = class {
			constructor() {
				this.model = this.A = new lXb();
				this.U = _.m(gO);
				this.aa = 1;
				this.F = void 0;
				this.R = _.M(!1);
				this.X = this.R.asReadonly();
				this.stream = null;
				this.mI = !1;
				this.H = [];
				this.I = [];
			}
			get turns() {
				return [...this.A.turns()];
			}
			Ba() {
				var a;
				(a = this.stream) == null || a.destroy();
			}
			setPrompt(a) {
				this.A.prompt.set(a);
			}
			interrupt() {
				var a = this.A, b = _.nXb(this.turns, !0);
				a.turns.set(b);
				this.F = void 0;
				this.R.set(!1);
				this.H = [];
			}
			clear() {
				this.A.clear();
				_.mXb(this);
			}
			disconnect() {
				var a;
				(a = this.stream) == null || a.close();
				this.interrupt();
				_.mXb(this);
			}
		};
		_.hO.J = function(a) {
			return new (a || _.hO)();
		};
		_.hO.sa = _.Cd({
			token: _.hO,
			factory: _.hO.J
		});
		var iO = class {
			constructor() {
				this.Wa = _.m(_.kC);
			}
		};
		iO.J = function(a) {
			return new (a || iO)();
		};
		iO.ka = _.u({
			type: iO,
			da: [["ms-system-instruction-delete-confirmation-dialog"]],
			ha: 11,
			ia: 2,
			la: [
				[1, "action-confirmation"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[1, "content"],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"mat-dialog-close"
				],
				[
					"ms-button",
					"",
					"cdkFocusRegionEnd",
					"",
					"cdkFocusInitial",
					"",
					3,
					"mat-dialog-close"
				]
			],
			template: function(a) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, "Delete system instruction?"), _.H(), _.F(3, "mat-dialog-content")(4, "div", 2), _.R(5, " This action cannot be undone. "), _.H()(), _.F(6, "mat-dialog-actions", 3)(7, "button", 4), _.R(8, "Cancel"), _.H(), _.F(9, "button", 5), _.R(10, " Delete "), _.H()()());
				a & 2 && (_.y(7), _.E("mat-dialog-close", !1), _.y(2), _.E("mat-dialog-close", !0));
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC
			],
			Ab: 2
		});
		var oXb = ["textarea"], qXb = function(a) {
			var b = a.localStorage.getItem("aistudio_all_system_instructions");
			b = b ? JSON.parse(b) : [];
			a.EG.set(b);
			var c = a.EX();
			if (c) {
				var d = b.findIndex((e) => e.text === c);
				d !== -1 ? (a.kD.set(d), a.vP.set(b[d].title)) : pXb(a, "", c);
			} else a.kD.set(-1), a.vP.set(""), jO(a, "");
		}, pXb = function(a, b, c) {
			var d = {
				title: b,
				text: c
			};
			a.EG.update((e) => [...e, d]);
			a.kD.set(a.EG().length - 1);
			a.vP.set(b);
			rXb(a);
		}, jO = function(a, b) {
			var c = a.kD();
			c === -1 ? b && pXb(a, "", b) : (a.EG.update((e) => {
				e[c].text = b;
				return [...e];
			}), rXb(a));
			var d = a.af();
			switch (d) {
				case "BIDI":
					let e;
					(e = a.controller) != null && e.A.systemInstructions.set(b);
					break;
				case "CHAT":
					_.cK(a.F, {
						systemInstructions: b,
						index: a.index()
					});
					break;
				default: _.sb(d, void 0);
			}
		}, rXb = function(a) {
			a.A && clearTimeout(a.A);
			a.A = setTimeout(() => {
				a.localStorage.setItem("aistudio_all_system_instructions", JSON.stringify(a.EG()));
				a.iKa.emit(!0);
				setTimeout(() => {
					a.iKa.emit(!1);
				}, 3e3);
			}, 900);
		}, sXb = function(a, b) {
			a.vP.set(b);
			var c = a.kD();
			c >= 0 ? (a.EG.update((d) => {
				d[c].title = b;
				return [...d];
			}), rXb(a)) : pXb(a, b, a.EX());
		}, tXb = function(a) {
			return _.x(function* () {
				var b = a.kD();
				if (!(b < 0)) {
					var c = a.dialog.open(iO, { id: "delete-system-instruction-dialog" });
					if (yield _.pf(_.jC(c))) a.EG.update((d) => {
						d.splice(b, 1);
						return [...d];
					}), a.kD.set(-1), a.vP.set(""), jO(a, ""), rXb(a), a.U.success("System instruction deleted");
				}
			});
		}, kO = class {
			constructor() {
				this.ve = {
					Nob: 324611,
					Oob: 324608,
					Pob: 324610,
					Qob: 324606,
					Rob: 324607,
					Sob: 324609
				};
				this.Pa = _.m(_.Xf);
				this.F = _.m(_.fK);
				this.H = _.m(_.gH);
				this.S = _.Dk;
				this.window = _.m(_.Sn);
				this.localStorage = this.window.localStorage;
				this.dialog = _.m(_.rC);
				this.U = _.m(_.iC);
				this.controller = _.m(_.hO, { optional: !0 });
				this.af = _.Li.required();
				this.index = _.V(0);
				this.textarea = _.Ni("textarea");
				this.iKa = _.Ki();
				this.EG = _.M([]);
				this.kD = _.M(-1);
				this.vP = _.M("");
				this.R = _.W(() => {
					var a, b;
					return (b = (a = this.controller) == null ? void 0 : a.model.EC()) != null ? b : !1;
				});
				this.Cxa = _.W(() => {
					var a = this.af();
					switch (a) {
						case "BIDI": return this.R() ? "System instructions cannot be updated while a stream is active" : "";
						case "CHAT": return "";
						default: _.sb(a, void 0);
					}
				});
				this.J5 = _.W(() => {
					var a = this.af();
					switch (a) {
						case "BIDI": return this.R();
						case "CHAT": return !1;
						default: _.sb(a, void 0);
					}
				});
				this.WAb = _.W(() => this.J5() ? "System instructions cannot be updated while a stream is active" : "Delete system instruction");
				this.I = _.W(() => this.H.H().filter((a) => a !== void 0).every((a) => _.Am(a)));
				this.X = _.W(() => {
					var a, b;
					return (b = (a = this.H.Ob()[this.index()]) == null ? void 0 : a.systemInstructions()) != null ? b : "";
				});
				this.EX = _.W(() => {
					var a = this.af();
					switch (a) {
						case "BIDI":
							let b, c;
							return (c = (b = this.controller) == null ? void 0 : b.model.systemInstructions()) != null ? c : "";
						case "CHAT": return this.X();
						default: _.sb(a, void 0);
					}
				});
				this.gIb = _.W(() => {
					var a, b;
					return ((b = (a = this.EX()) == null ? void 0 : a.length) != null ? b : 0) > 1e5;
				});
			}
			ib() {
				qXb(this);
				_.ke(this.Pa, () => {
					var a = _.Fk([this.index, this.EX], () => {
						var b = this.index(), c = this.EX();
						if (c) {
							let d = this.af();
							switch (d) {
								case "BIDI":
									let e;
									(e = this.controller) != null && e.A.systemInstructions.set(c);
									break;
								case "CHAT":
									_.cK(this.F, {
										index: b,
										systemInstructions: c
									});
									break;
								default: _.sb(d, void 0);
							}
							a.destroy();
						}
					});
					_.Fk([this.I], () => {
						this.I() || _.jXb(this.F, {
							sync: !1,
							index: this.index()
						});
					});
					_.Fk([this.textarea], () => {
						var b;
						(b = this.textarea()) == null || b.nativeElement.focus();
					});
				});
			}
			Ba() {
				this.A && clearTimeout(this.A);
			}
		};
		kO.J = function(a) {
			return new (a || kO)();
		};
		kO.ka = _.u({
			type: kO,
			da: [["ms-system-instructions"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.textarea, oXb, 5);
				a & 2 && _.ki();
			},
			Ua: 2,
			Ja: function(a) {
				a & 2 && _.P("in-run-settings", !0);
			},
			inputs: {
				af: [1, "promptType"],
				index: [1, "index"]
			},
			outputs: { iKa: "showSaveStatusIndicator" },
			features: [_.yi([])],
			ha: 16,
			ia: 29,
			la: [
				["textarea", ""],
				[
					1,
					"select-tooltip-wrapper",
					3,
					"matTooltip"
				],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic"
				],
				[
					3,
					"ngModelChange",
					"ve",
					"veClick",
					"veImpression",
					"ngModel",
					"disabled"
				],
				[
					3,
					"ve",
					"veClick",
					"veImpression",
					"value"
				],
				["aria-hidden", "true"],
				[1, "title-row"],
				[
					1,
					"title-tooltip-wrapper",
					3,
					"matTooltip"
				],
				[
					"ms-input",
					"",
					"placeholder",
					"Title",
					3,
					"ngModelChange",
					"ve",
					"veClick",
					"veImpression",
					"ngModel",
					"disabled"
				],
				[
					1,
					"delete-tooltip-wrapper",
					3,
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Delete system instruction",
					3,
					"click",
					"ve",
					"veClick",
					"veImpression",
					"iconName",
					"disabled"
				],
				[
					"aria-label",
					"System instructions",
					"placeholder",
					"Optional tone and style instructions for the model",
					"disabledInteractive",
					"",
					"matTooltipPosition",
					"below",
					"ms-input",
					"",
					1,
					"in-run-settings",
					3,
					"ngModelChange",
					"ve",
					"veClick",
					"veImpression",
					"spellcheck",
					"ngModel",
					"disabled",
					"matTooltip"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "span", 1)(1, "mat-form-field", 2)(2, "mat-select", 3), _.J("ngModelChange", function(c) {
					c === -1 ? (pXb(b, "Untitled instruction", ""), jO(b, "")) : (b.kD.set(c), c = b.EG()[c], b.vP.set(c.title), jO(b, c.text));
				}), _.F(3, "mat-option", 4)(4, "span", 5), _.R(5, "+"), _.H(), _.R(6, "\xA0Create new instruction "), _.H(), _.Ah(7, fXb, 2, 5, "mat-option", 4, _.yh), _.H(), _.yg(), _.H()(), _.F(9, "div", 6)(10, "span", 7)(11, "input", 8), _.J("ngModelChange", function(c) {
					return sXb(b, c);
				}), _.H(), _.yg(), _.H(), _.F(12, "span", 9)(13, "button", 10), _.J("click", function() {
					return tXb(b);
				}), _.H()()(), _.F(14, "textarea", 11, 0), _.J("ngModelChange", function(c) {
					return jO(b, c);
				}), _.H(), _.yg());
				a & 2 && (_.E("matTooltip", b.Cxa()), _.y(2), _.E("ve", b.ve.Qob)("veClick", !0)("veImpression", !0)("ngModel", b.kD())("disabled", b.J5()), _.zg(), _.y(), _.E("ve", b.ve.Oob)("veClick", !0)("veImpression", !0)("value", -1), _.y(4), _.Bh(b.EG()), _.y(3), _.E("matTooltip", b.Cxa()), _.y(), _.E("ve", b.ve.Sob)("veClick", !0)("veImpression", !0)("ngModel", b.vP())("disabled", b.J5()), _.zg(), _.y(), _.E("matTooltip", b.WAb()), _.y(), _.E("ve", b.ve.Pob)("veClick", !0)("veImpression", !0)("iconName", b.S.ni)("disabled", b.kD() === -1 || b.J5()), _.y(), _.E("ve", b.ve.Nob)("veClick", !0)("veImpression", !0)("spellcheck", !b.gIb())("ngModel", b.EX())("disabled", b.J5())("matTooltip", b.Cxa()), _.zg());
			},
			dependencies: [
				_.Yy,
				_.JD,
				_.Wn,
				_.oD,
				_.vD,
				_.gE,
				_.xC,
				_.$D,
				_.ZD,
				_.dE,
				_.bE,
				_.QB,
				_.IC,
				_.HC,
				_.eF,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{padding:8px 24px 0}@media screen and (max-width:768px){[_nghost-%COMP%]{padding-right:24px}}.in-run-settings[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;height:100%;padding:1px}.title-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.title-row[_ngcontent-%COMP%]   .title-tooltip-wrapper[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.title-row[_ngcontent-%COMP%]   .title-tooltip-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.select-tooltip-wrapper[_ngcontent-%COMP%]{display:block}.select-tooltip-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.delete-tooltip-wrapper[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}textarea[_ngcontent-%COMP%]{display:block;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:100%;resize:none}textarea[_ngcontent-%COMP%]:not(.in-run-settings){border-bottom-left-radius:16px;border-bottom-right-radius:16px;padding:8px 40px 8px 24px}textarea[_ngcontent-%COMP%]:not(.in-run-settings):focus-visible{outline:0}textarea[_ngcontent-%COMP%]:not(.in-run-settings)[disabled]{cursor:not-allowed;color:var(--color-v3-text-var)}"]
		});
		_.lO = class {
			constructor() {
				this.index = _.V(0);
				this.disabled = _.V(!1);
				this.af = _.Li.required();
				this.ve = {
					irb: 274527,
					pQa: 233702
				};
				this.F = _.m(_.fK);
				this.A = _.m(_.gH);
				this.I = _.m(_.ZC);
				this.Qc = _.m(_.BM);
				this.H = _.m(_.Op);
				this.controller = _.m(_.hO, { optional: !0 });
				this.ev = this.H.getFlag(_.vE);
				this.R = _.W(() => {
					var a = this.af(), b = this.A.Lh();
					switch (a) {
						case "BIDI": return "BIDI";
						case "CHAT": return b ? "COMPARE" : "CHAT";
						default: _.sb(a, void 0);
					}
				});
				this.veMetadata = _.W(() => [{
					Hl: 14,
					value: this.R()
				}]);
				this.TITLE = this.ev ? "Developer instructions (SYSTEM_1)" : "System instructions";
				this.wc = _.W(() => this.A.Ob()[this.index()]);
				this.text = _.W(() => {
					var a = this.af();
					switch (a) {
						case "BIDI":
							let b, c;
							return (c = (b = this.controller) == null ? void 0 : b.model.systemInstructions()) != null ? c : "";
						case "CHAT":
							let d, e;
							return (e = (d = this.wc()) == null ? void 0 : d.systemInstructions()) != null ? e : "";
						default: _.sb(a, void 0);
					}
				});
				this.Ena = _.W(() => this.disabled() || !this.text() ? "Optional tone and style instructions for the model" : this.text());
				this.lHb = _.W(() => this.af() === "CHAT" && this.A.Lh());
				this.ps = _.M(!1);
				this.k$a = _.M(!1);
				this.Qm = this.A.Qm;
			}
			Vz(a) {
				this.ps.set(a);
				!a && this.Qc.OB() && this.I.A.ey() && this.Qc.vJ(!1);
			}
			v6a(a) {
				_.jXb(this.F, {
					sync: a,
					index: this.index()
				});
			}
		};
		_.lO.J = function(a) {
			return new (a || _.lO)();
		};
		_.lO.ka = _.u({
			type: _.lO,
			da: [["ms-system-instructions-panel"]],
			inputs: {
				index: [1, "index"],
				disabled: [1, "disabled"],
				af: [1, "promptType"]
			},
			ha: 15,
			ia: 18,
			la: [
				[
					"disabledInteractive",
					"",
					"matTooltipPosition",
					"left",
					"data-test-system-instructions-card",
					"",
					1,
					"system-instructions-card",
					3,
					"click",
					"aria-label",
					"ve",
					"veClick",
					"veImpression",
					"veMutable",
					"veMetadata",
					"disabled",
					"matTooltip"
				],
				[1, "title"],
				[1, "subtitle"],
				[
					"matTooltipPosition",
					"below",
					1,
					"sync-button",
					3,
					"disabled",
					"aria-label",
					"matTooltip",
					"ngModel",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"onClose",
					"title",
					"isOpen"
				],
				[
					"header",
					"",
					1,
					"saving-status"
				],
				[1, "panel-content-wrapper"],
				[
					3,
					"index",
					"promptType"
				],
				[1, "local-storage-notice"],
				[
					"matTooltipPosition",
					"below",
					1,
					"sync-button",
					3,
					"ngModelChange",
					"click",
					"disabled",
					"aria-label",
					"matTooltip",
					"ngModel",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "sync-checkbox-label"],
				[
					3,
					"showSaveStatusIndicator",
					"index",
					"promptType"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 0), _.Ei(1, "buildVeMetadata"), _.J("click", function() {
					return b.Vz(!0);
				}), _.F(2, "span", 1), _.R(3), _.H(), _.F(4, "span", 2), _.R(5), _.H()(), _.B(6, gXb, 3, 7, "mat-checkbox", 3), _.F(7, "ms-sliding-right-panel", 4), _.J("onClose", function() {
					return b.Vz(!1);
				}), _.F(8, "div", 5)(9, "span"), _.R(10, "Saved"), _.H()(), _.F(11, "div", 6), _.B(12, hXb, 1, 2, "ms-system-instructions", 7), _.F(13, "div", 8), _.R(14, " Instructions are saved in local storage. "), _.H()()());
				a & 2 && (_.vh("aria-label", b.TITLE), _.E("ve", b.ve.irb)("veClick", !0)("veImpression", !0)("veMutable", !0)("veMetadata", _.Fi(1, 16, b.veMetadata()))("disabled", b.disabled())("matTooltip", b.disabled() ? `${b.TITLE} are not supported for this model` : ""), _.y(3), _.U(b.TITLE), _.y(2), _.U(b.Ena()), _.y(), _.C(b.lHb() ? 6 : -1), _.y(), _.E("title", b.TITLE)("isOpen", b.ps()), _.y(), _.P("visible", b.k$a()), _.y(4), _.C(b.ps() ? 12 : -1));
			},
			dependencies: [
				_.JD,
				_.oD,
				_.vD,
				_.qE,
				_.pE,
				_.IC,
				_.HC,
				_.oE,
				kO,
				_.Cz,
				_.Bz,
				_.hz
			],
			styles: ["[_nghost-%COMP%]{margin-block:8px;display:grid;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.sync-button[_ngcontent-%COMP%], .system-instructions-card[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.sync-button[_ngcontent-%COMP%]{justify-self:end;padding-right:12px}.sync-button[disabled][_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.saving-status[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text-var);opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.saving-status.visible[_ngcontent-%COMP%]{opacity:1}.system-instructions-card[_ngcontent-%COMP%]{width:100%;padding:8px 12px;border-radius:12px;border:1px solid var(--color-v3-outline-var);background:var(--color-v3-surface-container-high);text-align:start;-webkit-transition:background-color .2s ease-in-out,border-color .2s ease-in-out;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;cursor:pointer}.system-instructions-card[_ngcontent-%COMP%]:hover{background-color:var(--color-v3-surface-container-highest);border-color:var(--color-v3-outline)}.system-instructions-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text);display:block;margin-bottom:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.system-instructions-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:var(--color-v3-text-var);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;overflow-wrap:anywhere}.system-instructions-card.disabled-interactive[_ngcontent-%COMP%], .system-instructions-card[disabled][_ngcontent-%COMP%]{background:transparent;cursor:not-allowed;border-color:var(--color-v3-outline)}.system-instructions-card.disabled-interactive[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .system-instructions-card.disabled-interactive[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .system-instructions-card[disabled][_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .system-instructions-card[disabled][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text-disable)}.sync-checkbox-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px}.local-storage-notice[_ngcontent-%COMP%]{margin-top:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var)}.panel-content-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.panel-content-wrapper[_ngcontent-%COMP%]   ms-system-instructions[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:auto}"]
		});
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
		var WXb, YXb, ZXb, bYb, cYb, dYb, fYb, gYb, hYb, iYb, jYb, kYb, lYb, mYb, nYb, oYb, pYb, qYb, rYb, sYb, tYb, uYb, vYb, wYb, xYb, yYb, AYb, BYb, CYb, DYb, GYb, HYb, JYb, KYb, LYb, MYb, NYb, OYb, PYb, VXb, XXb, SXb, zYb, QYb, RYb, QXb, SYb, UYb, VYb, TYb, WYb, yO;
		_.uO = function(a) {
			var b, c, d = (c = (b = a.Vu()) == null ? void 0 : _.l(b, 10)) != null ? c : "";
			a = a.jc();
			return d || a;
		};
		_.RXb = function(a) {
			return QXb.includes(a);
		};
		_.TXb = function(a) {
			var b, c;
			return (b = a.Vu()) == null ? void 0 : (c = _.Z(b, SXb, 1)) == null ? void 0 : _.l(c, 4);
		};
		_.UXb = function(a) {
			var b, c;
			return (b = a.Vu()) == null ? void 0 : (c = _.Z(b, SXb, 1)) == null ? void 0 : _.l(c, 5);
		};
		WXb = function(a) {
			var b, c;
			return (b = a.Vu()) == null ? void 0 : (c = _.Z(b, SXb, 1)) == null ? void 0 : _.Z(c, VXb, 1);
		};
		YXb = function(a) {
			var b, c;
			return (b = a.Vu()) == null ? void 0 : (c = _.Z(b, SXb, 1)) == null ? void 0 : _.Z(c, XXb, 2);
		};
		ZXb = function(a, b) {
			return (a = a.A()) && a.length > b ? _.Vm(a[b], 3) : null;
		};
		_.$Xb = function(a, b) {
			return (a = WXb(a)) ? ZXb(a, b) : null;
		};
		_.aYb = function(a, b) {
			return (a = YXb(a)) ? ZXb(a, b) : null;
		};
		bYb = function(a, b) {
			return (a = a.A()) && a.length > b ? (b = _.Vm(a[b], 6), b > 0 ? b : null) : null;
		};
		cYb = function(a, b) {
			return (a = WXb(a)) ? bYb(a, b) : null;
		};
		dYb = function(a, b) {
			return (a = YXb(a)) ? bYb(a, b) : null;
		};
		_.eYb = function(a) {
			var b, c = (b = WXb(a)) == null ? void 0 : b.A(), d;
			a = (d = YXb(a)) == null ? void 0 : d.A();
			var e;
			d = (e = c == null ? void 0 : c.length) != null ? e : 0;
			var f;
			e = (f = a == null ? void 0 : a.length) != null ? f : 0;
			return d > 0 || e > 0 ? d >= e ? c : a : null;
		};
		fYb = function(a, b) {
			return (a = _.eYb(a)) && a.length > b ? _.yj(a[b], 1) : null;
		};
		gYb = function(a) {
			var b;
			return (a = (b = a.Vu()) == null ? void 0 : _.Z(b, _.Zo, 20)) ? new Date(Number(a.getSeconds()) * 1e3) : null;
		};
		hYb = function(a) {
			return a.some((b) => b.ob === "image");
		};
		iYb = function(a) {
			return a.some((b) => b.ob === "video");
		};
		jYb = function(a) {
			return a.some((b) => b.ob === "audio");
		};
		kYb = function(a) {
			a & 1 && (_.F(0, "li", 0), _.I(1, "span", 5), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.WARNING), _.y(), _.S(" ", a.kYa(), " "));
		};
		lYb = function(a) {
			a & 1 && (_.F(0, "li", 1), _.I(1, "span", 5), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Fk), _.y(), _.S(" ", a.c5a(), " "));
		};
		mYb = function(a) {
			a & 1 && (_.F(0, "li", 2), _.I(1, "span", 5), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Bf), _.y(), _.S(" ", a.description(), " "));
		};
		nYb = function(a) {
			a & 1 && (_.F(0, "a", 7), _.R(1, "Learn more"), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.Fna(), _.rg));
		};
		oYb = function(a) {
			a & 1 && (_.F(0, "li", 3), _.I(1, "span", 5), _.R(2), _.B(3, nYb, 2, 1, "a", 7), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Dra), _.y(), _.S(" ", a.taa(), " "), _.y(), _.C(a.Fna() ? 3 : -1));
		};
		pYb = function(a, b) {
			a & 1 && (_.F(0, "li", 8), _.I(1, "span", 5), _.R(2), _.H());
			a & 2 && (a = b.jb, b = _.K(2), _.E("matTooltip", b.NMb()[a]), _.y(), _.E("iconName", b.S.Dra), _.y(), _.S(" ", b.MMb()[a], " "));
		};
		qYb = function(a) {
			a & 1 && _.Ah(0, pYb, 3, 3, "li", 8, _.yh);
			a & 2 && (a = _.K(), _.Bh(a.Fha()));
		};
		rYb = function(a) {
			a & 1 && (_.F(0, "li", 6), _.I(1, "span", 5), _.R(2), _.Ei(3, "date"), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Us), _.y(), _.S(" Release date: ", _.Gi(3, 2, a.s8a(), "MMM d, y"), " "));
		};
		sYb = function(a) {
			a & 1 && _.Ih(0);
		};
		tYb = function(a) {
			a & 1 && _.z(0, sYb, 1, 0, "ng-container", 15);
			a & 2 && (_.K(), a = _.O(23), _.E("ngTemplateOutlet", a));
		};
		uYb = function(a) {
			a & 1 && _.Ih(0);
		};
		vYb = function(a) {
			a & 1 && _.z(0, uYb, 1, 0, "ng-container", 15);
			a & 2 && (_.K(), a = _.O(25), _.E("ngTemplateOutlet", a));
		};
		wYb = function(a) {
			a & 1 && _.I(0, "span", 6);
			a & 2 && (_.K(), a = _.Vh(3), _.E("iconName", a));
		};
		xYb = function(a, b) {
			a & 1 && (_.F(0, "span", 16), _.R(1), _.H());
			a & 2 && (a = b.V, _.qi(a.toLowerCase()), _.y(), _.U(a));
		};
		yYb = function(a) {
			a & 1 && (_.F(0, "div", 12), _.I(1, "ms-model-carousel-row-details", 17), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("model", a.model()));
		};
		AYb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 18, 3);
				_.J("click", function() {
					_.q(b);
					var c = _.K(), d = c.model().getName(), e = !c.isStarred();
					zYb(c.Ia, d, e);
					c.ZOa.success(`${e ? "Starred" : "Unstarred"} ${c.displayName()}`);
					c.t6a.emit();
					var f;
					(f = c.Jab()) == null || f.show();
					return _.t();
				});
				_.H();
				_.I(2, "mat-divider", 19);
			}
			a & 2 && (a = _.K(), _.P("filled", a.isStarred()), _.E("iconName", a.S.Jta)("matTooltip", a.isStarred() ? "Unstar model" : "Star model"), _.wh("aria-label", a.isStarred() ? "Unstar model" : "Star model"));
		};
		BYb = function(a) {
			a & 1 && _.I(0, "mat-divider", 19)(1, "a", 20);
			if (a & 2) {
				a = _.K();
				let b = _.Vh(20);
				_.y();
				_.E("iconName", a.S.GV)("href", b, _.rg);
			}
		};
		CYb = function(a) {
			a & 1 && (_.Ee(), _.F(0, "svg", 21), _.I(1, "path", 22), _.H());
		};
		DYb = function(a) {
			a & 1 && (_.Ee(), _.F(0, "svg", 23), _.I(1, "path", 24)(2, "path", 25), _.H());
		};
		_.FYb = function(a) {
			var b;
			return (b = _.EYb.get(a)) != null ? b : "";
		};
		GYb = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 6);
				_.Ei(1, "buildVeMetadata");
				_.J("click", function() {
					var d = _.q(c).V;
					_.K().yk.set(d);
					return _.t();
				});
				_.R(2);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(), _.E("disabled", !b.WS().has(a))("active", b.yk() === a)("ve", b.ve.yea)("veMetadata", _.Fi(1, 8, b.jAa(a)))("veMutable", !0)("veImpression", !0)("veClick", !0), _.y(2), _.S(" ", b.e0a(a), " "));
		};
		HYb = function(a) {
			a & 1 && _.I(0, "mat-divider", 8);
		};
		JYb = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "ms-model-carousel-row", 7);
				_.J("onSelectModel", function() {
					var d = _.q(c).V, e = _.K();
					return _.t(e.dC(d));
				})("onStarToggle", function() {
					_.q(c);
					var d = _.K();
					d.yk() !== "Starred" || IYb(d) || (d.yk.set("All"), d.Ia.lastSelectedModelCategory.set("All"));
					return _.t();
				});
				_.H();
				_.B(1, HYb, 1, 0, "mat-divider", 8);
			}
			if (a & 2) {
				a = b.V;
				let c = b.jb;
				b = b.lj;
				let d = _.K();
				_.P("selected", a.getName() === d.Un());
				_.E("model", a)("selectedCategory", d.yk())("isInModelSelector", !0);
				_.y();
				_.C(c < b - 1 ? 1 : -1);
			}
		};
		KYb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.R(0, " No model matches your search in this category. ");
				_.F(1, "button", 9);
				_.J("click", function() {
					_.q(b);
					_.K(2).yk.set("All");
					return _.t();
				});
				_.R(2, " View \"All\" category ");
				_.H();
			}
		};
		LYb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.R(0, " No model matches your search. ");
				_.F(1, "button", 9);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.Du());
				});
				_.R(2, " Clear search ");
				_.H();
			}
		};
		MYb = function(a) {
			a & 1 && (_.F(0, "p", 5), _.B(1, KYb, 3, 0)(2, LYb, 3, 0), _.H());
			if (a & 2) {
				let b;
				a = _.K();
				_.y();
				_.C(a.yk() != "All" && ((b = a.WS().get("All")) == null ? 0 : b.length) ? 1 : 2);
			}
		};
		NYb = function(a) {
			a & 1 && (_.F(0, "span", 4), _.R(1), _.H(), _.F(2, "span", 5), _.R(3), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.PEa()), _.y(2), _.U(a.description()));
		};
		OYb = function(a) {
			a & 1 && (_.F(0, "span", 3), _.R(1, "In use"), _.H());
		};
		_.BF.prototype.zma = _.ca(160, function(a) {
			a = _.AF(this, a);
			return !!a && _.wm(a).includes(25);
		});
		_.ny.prototype.Vu = _.ca(93, function() {
			return _.Z(this, _.Y7a, 39);
		});
		_.By.prototype.Vu = _.ca(92, function() {
			return _.Z(this, _.Vab, 6);
		});
		_.vO = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
		};
		PYb = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		VXb = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.mj(this, PYb, 1, _.oj());
			}
		};
		XXb = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.mj(this, PYb, 1, _.oj());
			}
		};
		SXb = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		zYb = function(a, b, c) {
			_.x(function* () {
				var d = new Map(a.A()), e = new Map(a.A()), f = d.get(b);
				if (c !== !!f) {
					c ? d.set(b, Date.now()) : d.delete(b);
					a.A.set(d);
					f = new _.sy();
					var g = _.zc(f, 7, _.Zo);
					d.forEach((k, p) => {
						g.set(p, _.SQa(k));
					});
					try {
						yield _.nF(a, f, ["starred_models"]);
					} catch (k) {
						throw a.A.set(e), k;
					}
				}
			});
		};
		QYb = function(a) {
			a.I.set(void 0);
			a.R.set(void 0);
		};
		RYb = function(a, b) {
			a.rb.interactionId() && a.ea.next();
			QYb(a.rb);
			var c = new Map(a.A.entities()), d, e, f = [...(e = (d = a.A.Ob()[b.index]) == null ? void 0 : d.Kc()) != null ? e : [], ...a.A.qd()].filter((k) => {
				k = c.get(k);
				if (k == null ? 0 : k.thought) return !b.zma;
				switch (k == null ? void 0 : k.ob) {
					case "audio": return !b.Awb;
					case "video": return !b.Hwb;
					case "image": return !b.Dwb;
					default: return !1;
				}
			});
			for (let k of f) c.delete(k);
			a.A.entities.set(c);
			var g = new Set(c.keys());
			a.A.qd.set(a.A.qd().filter((k) => g.has(k)));
			if (d = a.A.Ob()[b.index]) d.Kc.set(d.Kc().filter((k) => g.has(k))), d.systemInstructions.set(b.cUa ? d.systemInstructions() : "");
			a.A.Qm.set(a.A.Qm() && (b.index > 0 || b.cUa));
		};
		_.wO = class {
			constructor(a) {
				this.A = a;
			}
			transform(a, b, c) {
				if (!_.Jsa(a)) return null;
				c || (c = this.A);
				try {
					let d = _.Ksa(a);
					return _.Isa(d, c, b);
				} catch (d) {
					throw _.Mk();
				}
			}
		};
		_.wO.J = function(a) {
			return new (a || _.wO)(_.Dg(_.Si, 16));
		};
		_.wO.Wo = _.Xe({
			name: "number",
			type: _.wO,
			wk: !0
		});
		QXb = [
			"models/gemini-2.5-flash-image",
			"models/gemini-3-pro-image-preview",
			"models/gemini-3.1-flash-image-preview",
			"models/gempix-2-flash"
		];
		SYb = new Map([
			["models/gemini-2.5-flash-image", "Image output is priced at $30 per 1,000,000 tokens. Output images up to 1024x1024px consume 1290 tokens and are equivalent to $0.039 per image."],
			["models/gemini-3-pro-image-preview", "Image output is priced at $120 per 1,000,000 tokens. Output images up to 1024x1024px consume 1120 tokens and are equivalent to $0.134 per image."],
			["models/gemini-3.1-flash-image-preview", "Image output is priced at $60 per 1,000,000 tokens. Output images at 0.5K (512x512px) consume 747 tokens and are equivalent to $0.045 per image. Output images at 1K (1024x1024px) consume 1120 tokens and are equivalent to $0.067 per image. Output images at 2K (2048x2048px) consume 1680 tokens and are equivalent to $0.101 per image. Output images at 4K (4096x4096px) consume 2520 tokens and are equivalent to $0.151 per image."]
		]);
		UYb = function(a, b) {
			var c = a.Fha();
			if (!c || c.length <= b) return "invalid window";
			var d = WXb(a.model()), e = YXb(a.model()), f;
			d = d == null ? void 0 : (f = d.A()) == null ? void 0 : f[b];
			var g;
			e = e == null ? void 0 : (g = e.A()) == null ? void 0 : g[b];
			if (g = (d == null ? void 0 : _.l(d, 5)) || (e == null ? void 0 : _.l(e, 5))) return g;
			if (c.length === 1) return "All context lengths";
			if (c.some((k) => _.Pm(k, 4))) return _.Pm(c[b], 4) ? "Thinking" : "Non-thinking";
			g = TYb(a, fYb(a.model(), b));
			if (b === 0) return `<=${g} tokens`;
			a = TYb(a, fYb(a.model(), b - 1));
			return b === c.length - 1 ? `> ${a} tokens` : `> ${a} tokens <= ${g} tokens`;
		};
		VYb = function(a, b) {
			var c;
			return (c = a.A.transform(b, "1.2-4")) != null ? c : "";
		};
		TYb = function(a, b) {
			if (!b) return "";
			var c = b < 0 ? "-" : "";
			b = Math.abs(b);
			a = b < 1e3 ? WYb(a, b, 1) : b < 1e6 ? WYb(a, b, 1e3, "K") : b < 1e9 ? WYb(a, b, 1e6, "M") : WYb(a, b, 1e9, "B");
			return `${c}${a}`;
		};
		WYb = function(a, b, c, d = "") {
			var e;
			return ((e = a.A.transform(b / c, "1.0-2")) != null ? e : "") + d;
		};
		yO = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.wO);
				this.model = _.Li.required();
				this.description = _.W(() => _.uO(this.model()));
				this.Fha = _.W(() => _.eYb(this.model()));
				this.MMb = _.W(() => {
					var a = this.Fha();
					return a ? a.map((b, c) => {
						var d = [UYb(this, c)], e = _.$Xb(this.model(), c), f = cYb(this.model(), c), g = _.aYb(this.model(), c);
						c = dYb(this.model(), c);
						var k = e !== null || f !== null, p = g !== null || c !== null;
						k && (d.push("•"), f !== null ? d.push(`Input: $${VYb(this, f)}/req`) : d.push(`Input: $${VYb(this, e != null ? e : 0)}`));
						p && (k ? d.push("/") : d.push("•"), c !== null ? d.push(`Output: $${VYb(this, c)}/req`) : d.push(`Output: $${VYb(this, g != null ? g : 0)}`));
						return d.join(" ");
					}) : [];
				});
				this.taa = _.W(() => _.TXb(this.model()));
				this.Fna = _.W(() => _.UXb(this.model()));
				this.U3a = _.W(() => {
					var a, b = (a = this.model().Vu()) == null ? void 0 : _.Z(a, _.Zo, 21);
					return b ? new Date(Number(b.getSeconds()) * 1e3) : null;
				});
				this.s8a = _.W(() => gYb(this.model()));
				this.c5a = _.W(() => {
					var a;
					return (a = this.model().Vu()) == null ? void 0 : _.l(a, 15);
				});
				this.kYa = _.W(() => {
					var a;
					return (a = this.model().Vu()) == null ? void 0 : _.l(a, 19);
				});
				this.NMb = _.W(() => {
					var a = this.Fha(), b = this.model();
					return (a != null ? a : []).map((c, d) => {
						c = UYb(this, d).toLowerCase().includes("output per image");
						d = cYb(b, d) !== null || dYb(b, d) !== null;
						d = c ? SYb.get(b.getName()) : d ? "API pricing per request." : "API pricing per 1M tokens.";
						c = _.Mm(b) ? "" : "Usage in AI Studio UI is free of charge when no API key is selected";
						return [d, c].filter(String).join("\n");
					});
				});
			}
		};
		yO.J = function(a) {
			return new (a || yO)();
		};
		yO.ka = _.u({
			type: yO,
			da: [["ms-model-carousel-row-details"]],
			inputs: { model: [1, "model"] },
			features: [_.yi([_.wO])],
			ha: 11,
			ia: 10,
			la: [
				[
					"data-test-deprecation-notice-detail",
					"",
					1,
					"deprecation-notice"
				],
				["data-test-model-alias-line-item-detail", ""],
				["data-test-description-detail", ""],
				["data-test-pricing-message-detail", ""],
				["data-test-knowledge-cutoff-date-detail", ""],
				[
					"data-test-subtitle-icon",
					"",
					3,
					"iconName"
				],
				["data-test-release-date-detail", ""],
				[
					"target",
					"_blank",
					"rel",
					"noopener",
					3,
					"href"
				],
				[
					"data-test-context-window-pricing-range-detail",
					"",
					3,
					"matTooltip"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "ul"), _.B(1, kYb, 3, 2, "li", 0), _.B(2, lYb, 3, 2, "li", 1), _.B(3, mYb, 3, 2, "li", 2), _.B(4, oYb, 4, 3, "li", 3)(5, qYb, 2, 0), _.F(6, "li", 4), _.I(7, "span", 5), _.R(8), _.Ei(9, "date"), _.H(), _.B(10, rYb, 4, 5, "li", 6), _.H());
				a & 2 && (_.y(), _.C(b.kYa() ? 1 : -1), _.y(), _.C(b.c5a() ? 2 : -1), _.y(), _.C(b.description().length > 0 ? 3 : -1), _.y(), _.C(b.taa() ? 4 : 5), _.y(3), _.E("iconName", b.S.unb), _.y(), a = (a = b.U3a()) ? !isNaN(a.getTime()) : !1, _.S(" Knowledge cut off: ", a ? _.Gi(9, 7, b.U3a(), "MMM y") : "Unknown", " "), _.y(2), b = (b = b.s8a()) ? !isNaN(b.getTime()) : !1, _.C(b ? 10 : -1));
			},
			dependencies: [
				_.tz,
				_.dz,
				_.tO,
				_.IC,
				_.HC,
				_.pz
			],
			styles: ["ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;list-style-type:none;text-align:start;margin-bottom:8px}li[_ngcontent-%COMP%]:last-child{margin-bottom:0}li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:15px}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:4px;white-space:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.deprecation-notice[_ngcontent-%COMP%]{color:var(--color-v3-accent-1)}"]
		});
		var XYb, YYb;
		XYb = ["modelTitleText"];
		YYb = ["starTooltip"];
		_.zO = class {
			constructor() {
				this.p5a = _.Ni("modelTitleText");
				this.Jab = _.Ni("starTooltip");
				this.Ga = _.m(_.Jf);
				this.Glb = _.m(_.SC);
				this.ZOa = _.m(_.iC);
				this.Ia = _.m(_.oF);
				this.model = _.Li.required();
				this.yk = _.Li.required();
				this.nS = _.V(!1);
				this.dC = _.Ki();
				this.t6a = _.Ki();
				this.S = _.Dk;
				this.Tga = _.M(!1);
				this.isStarred = _.W(() => {
					var a;
					return (a = this.Ia.U().get(this.model().getName())) != null ? a : !1;
				});
				this.displayName = _.W(() => this.model().getDisplayName());
				this.description = _.W(() => _.uO(this.model()));
				this.subtitle = _.W(() => this.nS() ? this.PEa() : this.description());
				this.categories = _.W(() => _.my(this.model()));
				this.PEa = _.W(() => this.model().getName().split("/")[1]);
				this.ve = {
					L0b: 274385,
					M0b: 274386,
					onb: 274387
				};
				this.CKb = _.W(() => [{
					Hl: 17,
					value: this.model().getName()
				}, {
					Hl: 16,
					value: this.yk()
				}]);
				this.iconName = _.W(() => {
					var a = this.model(), b = this.categories();
					return _.RXb(a.getName()) ? "GEMPIX" : b.includes(3) ? "GEMMA" : _.Im(a, 26) ? "video_camera_front" : b.includes(15) ? "image_edit_auto" : b.includes(14) ? "video_spark" : b.includes(16) ? "music_note" : b.includes(13) ? "audio_magic_eraser" : "spark";
				});
				this.Axb = _.W(() => {
					var a = this.categories(), b = this.yk(), c = [];
					a.includes(5) && b !== 5 && c.push("Confidential");
					a = this.model();
					(a = gYb(a)) && (new Date().getTime() - a.getTime()) / 864e5 <= 60 && c.push("New");
					a = this.model();
					_.Lm(a, 78) === 2 && c.push("Paid");
					return c;
				});
			}
		};
		_.zO.J = function(a) {
			return new (a || _.zO)();
		};
		_.zO.ka = _.u({
			type: _.zO,
			da: [["ms-model-carousel-row"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.p5a, XYb, 5)(b.Jab, YYb, 5);
				a & 2 && _.ki(2);
			},
			inputs: {
				model: [1, "model"],
				yk: [1, "selectedCategory"],
				nS: [1, "isInModelSelector"]
			},
			outputs: {
				dC: "onSelectModel",
				t6a: "onStarToggle"
			},
			ha: 26,
			ia: 23,
			la: [
				["modelTitleText", ""],
				["gemmaIcon", ""],
				["gempixIcon", ""],
				["starTooltip", "matTooltip"],
				[
					1,
					"content-button",
					3,
					"click",
					"mouseenter",
					"ve",
					"veMetadata",
					"veMutable",
					"veImpression",
					"veClick",
					"id"
				],
				[1, "row-header"],
				[
					"data-test-model-icon",
					"",
					1,
					"model-icon",
					3,
					"iconName"
				],
				[1, "row-header-text"],
				[1, "model-title"],
				[1, "model-title-text"],
				[
					1,
					"badge",
					3,
					"class"
				],
				[1, "model-subtitle"],
				[1, "model-details"],
				[1, "row-actions"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"Copy to clipboard",
					"matTooltip",
					"Copy to clipboard",
					"matTooltipPosition",
					"below",
					"data-test-copy-to-clipboard-button",
					"",
					3,
					"click",
					"iconName"
				],
				[4, "ngTemplateOutlet"],
				[1, "badge"],
				[3, "model"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"matTooltipPosition",
					"below",
					"data-test-star-button",
					"",
					3,
					"click",
					"iconName",
					"matTooltip"
				],
				["vertical", "true"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"target",
					"_blank",
					"rel",
					"noopener noreferrer",
					"aria-label",
					"developer guide docs",
					"matTooltip",
					"Developer docs",
					"matTooltipPosition",
					"below",
					"data-test-developer-guide-link",
					"",
					3,
					"iconName",
					"href"
				],
				[
					"viewBox",
					"0 0 24 24",
					"fill",
					"none",
					"xmlns",
					"http://www.w3.org/2000/svg",
					"data-test-model-icon",
					"gemma",
					1,
					"model-icon",
					"svg-icon"
				],
				[
					"d",
					"M11.9961 4.21777C12.2419 4.83171 12.5282 5.42603 12.8584 5.99902C13.4696 7.05965 14.2152 8.02968 15.0928 8.90723C15.9703 9.78478 16.9404 10.5304 18.001 11.1416C18.5766 11.4733 19.1739 11.7583 19.791 12C19.1739 12.2417 18.5766 12.5267 18.001 12.8584C16.9404 13.4696 15.9703 14.2152 15.0928 15.0928C14.2152 15.9703 13.4696 16.9404 12.8584 18.001C12.5267 18.5766 12.2417 19.1739 12 19.791C11.7583 19.1739 11.4733 18.5766 11.1416 18.001C10.5304 16.9404 9.78478 15.9703 8.90723 15.0928C8.02968 14.2152 7.05965 13.4696 5.99902 12.8584C5.42309 12.5265 4.82541 12.2417 4.20801 12C4.82541 11.7583 5.42309 11.4735 5.99902 11.1416C7.05965 10.5304 8.02968 9.78478 8.90723 8.90723C9.78478 8.02968 10.5304 7.05965 11.1416 5.99902C11.4717 5.42614 11.7552 4.83169 11.9961 4.21777Z",
					"stroke-width",
					"2",
					1,
					"svg-icon-stroke"
				],
				[
					"viewBox",
					"0 0 24 24",
					"fill",
					"none",
					"xmlns",
					"http://www.w3.org/2000/svg",
					"data-test-model-icon",
					"gempix",
					1,
					"model-icon",
					"svg-icon"
				],
				[
					"d",
					"M4 12.9993C7.5 10.9993 12 10.9993 14 14.9993C14.8461 14.5673 15.7897 14.3618 16.7389 14.4029C17.688 14.444 18.6103 14.7303 19.4159 15.2338C20.2216 15.7373 20.883 16.4409 21.3359 17.276C21.7887 18.1112 22.0175 19.0494 22 19.9993",
					"stroke-width",
					"2",
					"stroke-linecap",
					"round",
					"stroke-linejoin",
					"round",
					1,
					"svg-icon-stroke"
				],
				[
					"d",
					"M5.15 17.89C10.67 16.37 13.8 11 12.15 5.89C11.55 4 11.5 2 13 2C16.22 2 18 7.5 18 10C18 16.5 13.8 22 7.51 22C5.11 22 2 22 2 20C2 18.5 3.14 18.45 5.15 17.89Z",
					"stroke-width",
					"2",
					"stroke-linecap",
					"round",
					"stroke-linejoin",
					"round",
					1,
					"svg-icon-stroke"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 4), _.Ei(1, "buildVeMetadata"), _.J("click", function() {
					return b.dC.emit();
				})("mouseenter", function() {
					if (b.nS()) {
						var c = b.p5a();
						c ? (c = c.nativeElement, b.Tga.set(c.offsetWidth < c.scrollWidth)) : b.Tga.set(!1);
					} else b.Tga.set(!1);
				}), _.F(2, "div", 5), _.Th(3), _.B(4, tYb, 1, 1, "ng-container")(5, vYb, 1, 1, "ng-container")(6, wYb, 1, 1, "span", 6), _.F(7, "div", 7)(8, "div", 8)(9, "span", 9, 0), _.R(11), _.H(), _.Ah(12, xYb, 2, 3, "span", 10, _.yh), _.H(), _.F(14, "span", 11), _.R(15), _.H()()(), _.B(16, yYb, 2, 1, "div", 12), _.H(), _.F(17, "div", 13), _.B(18, AYb, 3, 5), _.F(19, "button", 14), _.J("click", function() {
					var c = b.model().getName().replace("models/", "");
					b.Glb.copy(c);
					b.ZOa.success(`Copied ${c} to clipboard`);
				}), _.H(), _.Th(20), _.B(21, BYb, 2, 2), _.H(), _.z(22, CYb, 2, 0, "ng-template", null, 1, _.Ii)(24, DYb, 3, 0, "ng-template", null, 2, _.Ii));
				if (a & 2) {
					let c;
					_.E("ve", b.ve.onb)("veMetadata", _.Fi(1, 19, b.CKb()))("veMutable", !0)("veImpression", !0)("veClick", !0)("id", "model-carousel-row-" + b.model().getName());
					_.y(2);
					_.P("has-star-button", b.nS());
					_.y();
					a = _.Uh(b.iconName());
					_.y();
					_.C(a === "GEMMA" ? 4 : a === "GEMPIX" ? 5 : 6);
					_.y(4);
					_.P("can-scroll", b.Tga());
					_.y();
					_.P("ellipses", b.nS());
					_.y(2);
					_.S(" ", b.displayName(), " ");
					_.y();
					_.Bh(b.Axb());
					_.y(3);
					_.U(b.subtitle());
					_.y();
					_.C(b.nS() ? 16 : -1);
					_.y(2);
					_.C(b.nS() ? 18 : -1);
					_.y();
					_.E("iconName", b.S.Ae);
					_.y();
					a = _.Uh((c = b.model().Vu()) == null ? null : _.l(c, 16));
					_.y();
					_.C(a ? 21 : -1);
				}
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				_.dz,
				_.OD,
				_.ND,
				_.IC,
				_.HC,
				yO,
				_.Cz,
				_.Bz,
				_.hz
			],
			styles: ["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr auto auto;border-radius:8px}.selected[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover{background-color:var(--color-v3-surface-container-highest)}p[_ngcontent-%COMP%]{margin:0}button[_ngcontent-%COMP%]{cursor:pointer}.content-button[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:1;background-color:transparent;border:0;padding:12px}.content-button[_ngcontent-%COMP%]:focus{outline:none}.row-header[_ngcontent-%COMP%]{grid-column:2;grid-row:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding-right:76px}.row-header.has-star-button[_ngcontent-%COMP%]{padding-right:88px}.model-icon[_ngcontent-%COMP%]{color:var(--color-v3-text-link);background-color:var(--color-v3-surface-container-high);border-radius:8px;padding:10px;font-size:20px}.svg-icon[_ngcontent-%COMP%]{width:40px;aspect-ratio:1/1}.svg-icon[_ngcontent-%COMP%]   .svg-icon-stroke[_ngcontent-%COMP%]{stroke:var(--color-v3-text-link)}.row-header-text[_ngcontent-%COMP%]{min-width:0;-webkit-box-flex:1;-webkit-flex:1 0 0;-moz-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0}.model-title[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:clip}.model-title.can-scroll[_ngcontent-%COMP%]:hover   .badge[_ngcontent-%COMP%]{opacity:0}.model-title.can-scroll[_ngcontent-%COMP%]:hover   .model-title-text[_ngcontent-%COMP%]{overflow:visible;-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:_ngcontent-%COMP%_scrolling-animation 4s,linear,infinite alternate;animation:_ngcontent-%COMP%_scrolling-animation 4s,linear,infinite alternate}@-webkit-keyframes _ngcontent-%COMP%_scrolling-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-23%);transform:translateX(-23%)}}@keyframes _ngcontent-%COMP%_scrolling-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-23%);transform:translateX(-23%)}}.model-title-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text);text-align:start}.model-title-text.ellipses[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.badge[_ngcontent-%COMP%]{border-radius:8px;padding:1px 6px 1px 5px;border:1px solid var(--color-v3-outline);background-color:var(--color-v3-surface-container-high);color:var(--color-v3-text);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;margin-left:4px;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.badge[_ngcontent-%COMP%]:before{content:\"\";width:6px;aspect-ratio:1/1;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.badge.enabled[_ngcontent-%COMP%]:before, .badge.green[_ngcontent-%COMP%]:before, .badge.new[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-4)}.badge.gray[_ngcontent-%COMP%]:before, .badge.not-enabled[_ngcontent-%COMP%]:before{background-color:var(--color-v3-text-var)}.badge.confidential[_ngcontent-%COMP%]:before, .badge.orange[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-1)}.badge.blue[_ngcontent-%COMP%]:before, .badge.paid[_ngcontent-%COMP%]:before{background-color:var(--color-v3-text-link)}.badge.alert[_ngcontent-%COMP%]:before, .badge.red[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-3)}.badge.hide-circle[_ngcontent-%COMP%]:before{display:none}.model-subtitle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;text-align:start}.model-subtitle[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:15px}.model-details[_ngcontent-%COMP%]{margin-top:12px}.row-actions[_ngcontent-%COMP%]{grid-column:3;grid-row:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:-webkit-min-content;height:-moz-min-content;height:min-content;margin-top:20px;margin-right:12px}.row-actions[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%]   .ms-button-icon-symbol[_ngcontent-%COMP%]{font-variation-settings:\"FILL\" 1}"]
		});
		var AO = class {
			constructor() {
				this.data = _.m(_.qC);
				this.S = _.Dk;
				this.Laa = this.data.Laa;
			}
		};
		AO.J = function(a) {
			return new (a || AO)();
		};
		AO.ka = _.u({
			type: AO,
			da: [["ms-remove-content-confirmation-dialog"]],
			ha: 12,
			ia: 2,
			la: [
				[1, "action-confirmation"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"cdkFocusRegionStart",
					"",
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matDialogClose",
					"",
					"aria-label",
					"Close",
					3,
					"iconName"
				],
				[
					1,
					"v3-font-body",
					"content"
				],
				["align", "end"],
				"ms-button  variant borderless mat-dialog-close ".split(" "),
				"ms-button  data-test-id continue-button cdkFocusRegionEnd  cdkFocusInitial  mat-dialog-close true".split(" ")
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.R(2, " Switch model? "), _.I(3, "button", 2), _.H(), _.F(4, "mat-dialog-content")(5, "div", 3), _.R(6), _.H()(), _.F(7, "mat-dialog-actions", 4)(8, "button", 5), _.R(9, "Cancel"), _.H(), _.F(10, "button", 6), _.R(11, " Continue "), _.H()()());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac), _.y(3), _.S(" ", b.Laa, " Do you want to continue? "));
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC
			],
			Ab: 2
		});
		_.BO = class {
			constructor() {
				this.H = _.m(_.BF);
				this.route = _.m(_.ll);
				this.U = _.m(_.Cl);
				this.R = !1;
				this.I = this.H.X;
				this.A = _.M("models/lyria-3-pro-preview");
				this.modelName = this.A.asReadonly();
				this.If = _.W(() => _.AF(this.H, this.modelName()));
				this.valid = _.W(() => !!this.If());
				_.Fk([this.I], () => {
					var a = this.I();
					if (a.length) {
						if (!this.R) {
							var b = this.route.snapshot.Op.get("model");
							if (b && (b = _.AF(this.H, b.startsWith("models/") ? b : `models/${b}`)) && _.Im(b, 53)) {
								let c;
								b = (c = b.getName()) != null ? c : "";
								this.A.set(b);
							}
							this.R = !0;
						}
						a = a[0];
						if (!this.If()) {
							let c;
							a = (c = a.getName()) != null ? c : "";
							this.A.set(a);
						}
						this.U.url.startsWith("/new_music") && _.Wpb(this.H, this.modelName());
					}
				});
			}
			F() {
				return new _.Tm().setModel(this.modelName());
			}
			reset() {
				var a = this.I()[0], b;
				this.A.set((b = a == null ? void 0 : a.getName()) != null ? b : "");
			}
		};
		_.BO.J = function(a) {
			return new (a || _.BO)();
		};
		_.BO.sa = _.Cd({
			token: _.BO,
			factory: _.BO.J,
			wa: "root"
		});
		_.CO = class {
			constructor() {
				this.H = _.M("");
				this.R = _.M(!1);
				this.A = _.M(!1);
				this.F = _.M();
				this.promptText = this.H.asReadonly();
				this.qe = this.R.asReadonly();
				this.U = this.A.asReadonly();
				this.I = this.F.asReadonly();
			}
		};
		_.CO.J = function(a) {
			return new (a || _.CO)();
		};
		_.CO.sa = _.Cd({
			token: _.CO,
			factory: _.CO.J,
			wa: "root"
		});
		var DO = class {
			g7() {
				var a;
				(a = this.Pz) == null || a.focus();
			}
		};
		DO.J = function(a) {
			return new (a || DO)();
		};
		DO.sa = _.Cd({
			token: DO,
			factory: DO.J,
			wa: "root"
		});
		_.EO = class {
			constructor() {
				this.aa = _.M("");
				this.ea = _.M("");
				this.F = _.M(!1);
				this.na = _.M(0);
				this.H = _.M([]);
				this.A = _.M(0);
				this.X = _.M(!1);
				this.fa = _.M("COMPOSER");
				this.I = _.M(0);
				this.dT = this.aa.asReadonly();
				this.U = this.ea.asReadonly();
				this.R = this.F.asReadonly();
				this.Ak = this.H.asReadonly();
				this.oa = this.A.asReadonly();
				this.Jla = this.X.asReadonly();
				this.yr = this.fa.asReadonly();
				this.ma = this.I.asReadonly();
				this.ta = _.W(() => {
					var a = this.H(), b = this.A(), c, d;
					return (d = (c = a[b]) == null ? void 0 : c.hy) != null ? d : 0;
				});
				this.xp = _.W(() => {
					var a = this.H();
					if (a.length > 1) return 1;
					var b;
					return a.length === 1 && ((b = a[0]) == null ? void 0 : b.hy) !== 0 ? 1 : 0;
				});
			}
			createBlock(a = 0, b = "") {
				return {
					id: _.Yn(),
					hy: a,
					text: b
				};
			}
		};
		_.EO.prototype.F0 = _.ba(195);
		_.EO.prototype.zU = _.ba(184);
		_.EO.J = function(a) {
			return new (a || _.EO)();
		};
		_.EO.sa = _.Cd({
			token: _.EO,
			factory: _.EO.J,
			wa: "root"
		});
		_.FO = function(a, b) {
			a.U.set(b);
			a.H.update((c) => {
				c[0].voice = b;
				return [...c];
			});
		};
		_.GO = class {
			constructor() {
				this.X = _.m(_.BF);
				this.R = this.X.aa;
				this.F = _.M("");
				this.A = _.M(1);
				this.U = _.M("Zephyr");
				this.H = _.M([{
					alias: "Speaker 1",
					voice: "Zephyr"
				}, {
					alias: "Speaker 2",
					voice: "Puck"
				}]);
				this.I = _.M(1);
				this.modelName = this.F.asReadonly();
				this.ttsMode = this.A.asReadonly();
				this.singleSpeakerVoice = this.U.asReadonly();
				this.multiSpeakerConfigs = this.H.asReadonly();
				this.temperature = this.I.asReadonly();
				this.model = _.W(() => _.AF(this.X, this.modelName()));
				this.valid = _.W(() => {
					var a = this.model(), b = this.singleSpeakerVoice(), c = this.multiSpeakerConfigs(), d = this.ttsMode(), e, f = ((e = a == null ? void 0 : _.mj(a, _.vO, 67, _.oj())) != null ? e : []).length > 0;
					b = d === 0 ? b !== "" : c.every((g) => g.voice !== "" && g.alias !== "");
					return !!a && f && b;
				});
				_.Fk([this.R], () => {
					var a = this.R()[0];
					if (a && !this.model()) {
						let c;
						var b = (c = a.getName()) != null ? c : "";
						this.F.set(b);
						b = _.Um(a, 9) ? _.Vm(a, 9) : 1;
						this.I.set(b);
						let d, e;
						_.FO(this, (e = (d = _.mj(a, _.vO, 67, _.oj())[0]) == null ? void 0 : d.getName()) != null ? e : "Zephyr");
					}
				});
			}
			reset() {
				var a = this.model();
				this.I.set((a == null ? 0 : _.Um(a, 9)) ? _.Vm(a, 9) : 1);
				this.A.set(1);
				_.FO(this, "Zephyr");
				this.H.set([{
					alias: "Speaker 1",
					voice: "Zephyr"
				}, {
					alias: "Speaker 2",
					voice: "Puck"
				}]);
			}
		};
		_.GO.J = function(a) {
			return new (a || _.GO)();
		};
		_.GO.sa = _.Cd({
			token: _.GO,
			factory: _.GO.J,
			wa: "root"
		});
		var ZYb, $Yb, aZb, bZb, eZb, fZb, cZb, dZb;
		ZYb = [
			1,
			4,
			5
		];
		$Yb = new Map([
			[0, "prompts/new_chat"],
			[1, "live"],
			[2, "prompts/new_image"],
			[3, "prompts/new_video"],
			[4, "generate-speech"]
		]);
		aZb = function(a, b) {
			return _.x(function* () {
				a.mb = a.dialog.open(AO, { data: { Laa: b } });
				return yield _.pf(_.jC(a.mb));
			});
		};
		bZb = function(a, b) {
			_.my(b).includes(19) || a.Xa.success(`Selected ${b.getDisplayName()}${_.RXb(b.getName()) ? " 🍌" : ""}`);
			a.Db.g7();
			var c = a.H.Lh();
			!_.qn(a.I.url) && ![
				"live",
				"generate-speech",
				"new_music"
			].some((d) => a.I.url.startsWith(`/${d}`)) || c || _.Wpb(a.A, b.getName());
			a.Qc.OB() && a.cb.A.ey() && a.Qc.vJ(!1);
		};
		eZb = function(a, b, c) {
			_.x(function* () {
				if (!cZb(a, b) || (yield aZb(a, `Switching to this model will start a new chat.
        ${ZYb.includes(a.F()) ? "Content in current chat will be lost." : ""}`))) a.fa.reset(), bZb(a, c), dZb(a, b === 5 ? "new_music" : $Yb.get(b), c);
			});
		};
		fZb = function(a, b) {
			a = a.A;
			b = b.getName();
			b = _.AF(a, b);
			return !!b && _.Am(b);
		};
		cZb = function(a, b) {
			var c = a.F();
			if (c === b) return !1;
			switch (c) {
				case 0: return b = !!a.H.I().length, !!a.H.zB() || b;
				case 1: return a = a.U.model, !(a.turns().length === 0 && !a.EC() && !a.Rx());
				case 2: return a.Hg.R().length > 0 || a.Hg.j7a().length > 0 || !!a.Hg.sN() || a.Hg.pZ().length > 0;
				case 3: return a.Rd.Bg().length > 0 || !!a.Rd.X_() || !!a.Rd.Nz();
				case 4: return !!a.ma.U() || !!a.ma.dT();
				case 5: return !!a.Ea.promptText();
				default: _.sb(c, void 0);
			}
		};
		dZb = function(a, b, c) {
			setTimeout(() => {
				a.I.navigate([b], {
					queryParams: { model: c.getName().replace("models/", "") },
					Vq: "merge"
				});
			});
		};
		_.HO = class {
			constructor() {
				this.A = _.m(_.BF);
				this.Jf = _.m(_.UH);
				this.rb = _.m(_.Qp);
				this.ta = _.m(_.Ou);
				this.Ta = _.m(_.LK);
				this.za = _.m(_.fK);
				this.H = _.m(_.gH);
				this.Ii = _.m(_.GJ);
				this.I = _.m(_.Cl);
				this.dialog = _.m(_.rC);
				this.Xa = _.m(_.iC);
				this.Db = _.m(DO);
				this.Fa = _.m(_.NK);
				this.Na = _.m(_.FJ);
				this.cb = _.m(_.ZC);
				this.Qc = _.m(_.BM);
				this.aa = _.m(_.dH);
				this.na = _.m(_.eH);
				this.ea = _.m(_.BO);
				this.oa = _.m(_.GO);
				this.Hg = _.m(_.hH);
				this.Rd = _.m(_.uH);
				this.Ea = _.m(_.CO);
				this.ma = _.m(_.EO);
				this.fa = _.m(_.FH);
				this.U = this.R = null;
				this.xn = _.Ck(this.I.events.pipe(_.Gf((a) => a instanceof _.yl), _.uf((a) => a.url)), { initialValue: this.I.url });
				this.Aa = this.Na.A;
				this.tN = _.W(() => {
					var a, b;
					return (b = (a = this.Aa()) == null ? void 0 : _.Px(a)) != null ? b : 0;
				});
				this.X = _.W(() => {
					var a = this.F();
					switch (a) {
						case 0: return (b) => {
							var c, d;
							return (d = (c = this.H.F()[b]) == null ? void 0 : c.model()) != null ? d : "";
						};
						case 1: return () => {
							var b, c, d;
							return (d = (b = this.R) == null ? void 0 : (c = b.model.model()) == null ? void 0 : c.getName()) != null ? d : "";
						};
						case 2: return () => this.aa.model();
						case 3: return () => this.na.model();
						case 4: return () => this.oa.modelName();
						case 5: return () => this.ea.modelName();
						default: _.sb(a, void 0);
					}
				});
				this.F = _.W(() => {
					var a = this.xn();
					return a.startsWith("/live") ? 1 : a.startsWith("/generate-speech") ? 4 : a.startsWith("/new_music") ? 5 : this.Ii.R() ? 2 : this.Ii.QB() ? 3 : 0;
				});
				this.hb = [
					{
						pY: 26,
						C1: 1,
						hX: (a) => {
							var b;
							(b = this.R) == null || b.setModel(a);
						}
					},
					{
						pY: 19,
						C1: 2,
						hX: (a) => {
							this.aa.setModel(a.getName());
						}
					},
					{
						pY: 20,
						C1: 3,
						hX: (a) => {
							this.na.setModel(a.getName());
						}
					},
					{
						pY: 37,
						C1: 4,
						hX: (a) => {
							var b = this.oa;
							a = a.getName();
							b.F.set(a);
						}
					},
					{
						pY: 53,
						C1: 5,
						hX: (a) => {
							if (_.my(a).includes(16)) {
								var b = this.ea;
								a = a.getName();
								b.A.set(a);
							}
						}
					},
					{
						pY: null,
						C1: 0,
						hX: (a, b = 0) => {
							var c = this.Fa, d = a.getName();
							c.service.F.F.set(d);
							RYb(this.za, {
								zma: this.A.zma(a.getName()),
								Dwb: _.Zpb(this.A, a.getName()),
								Hwb: _.$pb(this.A, a.getName()),
								Awb: _.Ypb(this.A, a.getName()),
								cUa: fZb(this, a),
								index: b
							});
							_.eXb(this.Ta, a.getName(), b);
						}
					}
				];
				_.Fk([this.F], () => {
					this.F() !== 1 && (this.U = this.R = null);
				});
			}
			dC(a, b) {
				var c = this;
				return _.x(function* () {
					_.Rn(c.ta, "FOOTER", "Clicked Model Selector");
					if (b === 0) {
						var d = c.Jf;
						switch (c.tN()) {
							case 7:
							case 14: d.Ia.promptModel.set(a.getName());
						}
					}
					d = c.tN();
					d = _.aGa(d);
					var e = c.H.Ob()[b];
					if (e) {
						var f = e.dQ(), g = hYb(f), k = iYb(f);
						f = jYb(f);
						e = !!e.systemInstructions();
						g = g && !_.Zpb(c.A, a.getName());
						k = d && k && !_.$pb(c.A, a.getName());
						f = d && f && !_.Ypb(c.A, a.getName());
						d = d && e && !fZb(c, a);
						g || k || f || d ? (e = [], g && e.push("images"), k && e.push("videos"), f && e.push("audio"), d && e.push("system instructions"), e.length > 1 && (e[e.length - 1] = `and ${e.pop()}`), d = `remove the ${e.length > 2 ? e.join(", ") : e.join(" ")} from your prompt`) : d = null;
					} else d = null;
					({Laa: d} = { Laa: d });
					g = c.rb.F() === 1;
					k = "Switching to this model will ";
					if (g && d) k += `cancel the active interaction and ${d}.`;
					else if (g) k += "cancel the active interaction.";
					else if (d) k += `${d}.`;
					else {
						c.setModel(a, b);
						return;
					}
					if (yield aZb(c, k)) c.fa.reset(), c.setModel(a, b);
				});
			}
			setModel(a, b) {
				for (let { pY: c, C1: d, hX: e } of this.hb) if (!c || _.Im(a, c)) {
					this.F() === d ? (e(a, b), bZb(this, a)) : eZb(this, d, a);
					break;
				}
			}
		};
		_.HO.J = function(a) {
			return new (a || _.HO)();
		};
		_.HO.sa = _.Cd({
			token: _.HO,
			factory: _.HO.J,
			wa: "root"
		});
		var gZb;
		_.EYb = new Map([
			[10, "Featured"],
			[17, "Gemini"],
			[15, "Images"],
			[14, "Video"],
			[18, "Live"],
			[13, "Audio"],
			[16, "Music"],
			[3, "Gemma"],
			[5, "Confidential"],
			[19, "Agents"],
			["All", "All"],
			["Starred", "Starred"]
		]);
		gZb = [
			"Starred",
			"All",
			10,
			5,
			17,
			18,
			15,
			14,
			13,
			16,
			19,
			3
		];
		var hZb = (a, b) => b.getName(), IYb = function(a) {
			for (let b of a.Ia.U().values()) if (b) return !0;
			return !1;
		}, iZb = function(a, b) {
			return (b = b.trim().toLowerCase()) ? a.getDisplayName().toLowerCase().includes(b) || a.getName().toLowerCase().includes(b) : !0;
		}, jZb = function(a) {
			var b = a.Un();
			b && (a = a.g5a().find((c) => c.model().getName() === b)) && a.Ga.nativeElement.scrollIntoView({
				behavior: "auto",
				block: "center"
			});
		}, IO = class {
			constructor() {
				this.g5a = _.hi();
				this.Go = _.V(!1);
				this.YCa = _.V(!1);
				this.index = _.V(0);
				this.autoFocus = !_.lp();
				this.fN = _.Ki();
				this.Pa = _.m(_.Xf);
				this.F = _.m(_.BF);
				this.H = _.m(_.Ou);
				this.A = _.m(_.HO);
				this.Ia = _.m(_.oF);
				this.We = _.M("");
				this.yk = _.M(10);
				this.e5a = _.W(() => gZb.filter((a) => _.EYb.has(a) ? a === "All" ? !0 : a === "Starred" ? IYb(this) : this.F.Ch().some((b) => _.my(b).includes(a)) : !1));
				this.WS = _.W(() => {
					var a = new Map([["All", []], ["Starred", []]]), b = this.Ia.U();
					for (let d of this.F.Ch()) if (iZb(d, this.We())) {
						a.get("All").push(d);
						b.get(d.getName()) && a.get("Starred").push(d);
						for (let e of _.my(d)) a.has(e) || a.set(e, []), a.get(e).push(d);
					}
					var c;
					(c = a.get("Starred")) == null || c.sort((d, e) => {
						var f;
						d = (f = b.get(d.getName())) != null ? f : 0;
						var g;
						return ((g = b.get(e.getName())) != null ? g : 0) - d;
					});
					return a;
				});
				this.Ioa = _.W(() => {
					var a = this.yk(), b = this.WS().get(a) || [];
					return b.length === 0 ? [] : a === 5 ? b.toSorted((c, d) => c.getDisplayName().localeCompare(d.getDisplayName())) : b;
				});
				this.Un = _.W(() => this.A.X()(this.index()));
				this.ve = { yea: 274388 };
				this.S = _.Dk;
				this.HOb = "Search for a model or agent";
				_.Fk([this.YCa], () => {
					this.YCa() && _.bg(() => {
						jZb(this);
					}, { Pa: this.Pa });
				});
			}
			ib() {
				var a = this.Ia.lastSelectedModelCategory();
				a && gZb.includes(a) && this.yk.set(a);
			}
			e0a(a) {
				return _.FYb(a);
			}
			dC(a) {
				_.Rn(this.H, "FOOTER", "Clicked Model Selector");
				this.A.dC(a, this.index());
				this.Ia.lastSelectedModelCategory.set(this.yk());
				this.fN.emit();
			}
			jAa(a) {
				var b;
				return [{
					Hl: 16,
					value: (b = _.EYb.get(a)) != null ? b : ""
				}];
			}
			oda(a) {
				var b;
				this.We.set((b = String(a)) != null ? b : "");
			}
			Du() {
				this.We.set("");
			}
		};
		IO.J = function(a) {
			return new (a || IO)();
		};
		IO.ka = _.u({
			type: IO,
			da: [["ms-model-carousel"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.g5a, _.zO, 5);
				a & 2 && _.ki();
			},
			eb: [
				"role",
				"region",
				"aria-label",
				"Model carousel",
				1,
				"in-model-selector"
			],
			inputs: {
				Go: [1, "isSideBySide"],
				YCa: [1, "isModelSelectorOpen"],
				index: [1, "index"]
			},
			outputs: { fN: "onModelSelectionChange" },
			ha: 9,
			ia: 8,
			la: [
				[
					"label",
					"Search",
					"hideLabel",
					"",
					3,
					"valueChange",
					"value",
					"icon",
					"placeholder"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Clear search query",
					1,
					"search-bar-close-button",
					3,
					"click",
					"iconName"
				],
				[1, "model-categories-container"],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"activeIndicator",
					"border",
					"data-test-category-button",
					"",
					3,
					"disabled",
					"active",
					"ve",
					"veMetadata",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[1, "model-options-container"],
				[1, "no-search-results-message"],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"activeIndicator",
					"border",
					"data-test-category-button",
					"",
					3,
					"click",
					"disabled",
					"active",
					"ve",
					"veMetadata",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[
					3,
					"onSelectModel",
					"onStarToggle",
					"model",
					"selectedCategory",
					"isInModelSelector"
				],
				[1, "model-carousel-row-divider"],
				[
					"ms-button",
					"",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "ms-input-field", 0), _.J("valueChange", function(c) {
					return b.oda(c);
				}), _.F(1, "button", 1), _.J("click", function() {
					return b.Du();
				}), _.H()(), _.F(2, "div", 2), _.Ah(3, GYb, 3, 10, "button", 3, _.yh), _.H(), _.F(5, "div", 4), _.Ah(6, JYb, 2, 6, null, null, hZb, !1, MYb, 3, 1, "p", 5), _.H());
				a & 2 && (_.E("value", b.We())("icon", b.S.Lm)("placeholder", b.HOb), _.wh("cdkFocusInitial", b.autoFocus ? "" : null), _.y(), _.P("show", b.We()), _.E("iconName", b.S.ac), _.y(2), _.Bh(b.e5a()), _.y(3), _.Bh(b.Ioa()));
			},
			dependencies: [
				_.Yy,
				_.mE,
				_.OD,
				_.ND,
				_.zO,
				_.Cz,
				_.Bz,
				_.hz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;height:100%;overflow:auto;gap:20px;width:100%;max-width:768px;padding:1px}.search-bar-close-button[_ngcontent-%COMP%]{visibility:hidden}.search-bar-close-button.show[_ngcontent-%COMP%]{visibility:visible}.model-categories-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px}.model-options-container[_ngcontent-%COMP%]{width:100%;overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.model-carousel-row-divider[_ngcontent-%COMP%]{margin:8px 0}.no-search-results-message[_ngcontent-%COMP%]{text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}"]
		});
		_.JO = class {
			constructor() {
				this.A = _.m(_.HO);
				this.F = _.m(_.BF);
				this.index = _.V(0);
				this.disabled = _.V(!1);
				this.Go = _.V(!1);
				this.Un = _.W(() => this.A.X()(this.index()));
				this.uc = _.W(() => {
					var a = this.Un();
					return _.AF(this.F, a);
				});
				this.displayName = _.W(() => {
					var a;
					return (a = this.uc()) == null ? void 0 : a.getDisplayName();
				});
				this.PEa = _.W(() => {
					var a;
					return (a = this.uc()) == null ? void 0 : a.getName().split("/")[1];
				});
				this.description = _.W(() => {
					var a = this.uc();
					return a ? _.uO(a) : "";
				});
				this.ps = _.M(!1);
				this.ve = { pnb: 274382 };
			}
			Vz(a) {
				this.ps.set(a);
			}
		};
		_.JO.J = function(a) {
			return new (a || _.JO)();
		};
		_.JO.ka = _.u({
			type: _.JO,
			da: [["ms-model-selector"]],
			inputs: {
				index: [1, "index"],
				disabled: [1, "disabled"],
				Go: [1, "isSideBySide"]
			},
			ha: 6,
			ia: 12,
			la: [
				[
					1,
					"model-selector-card",
					3,
					"click",
					"ve",
					"veClick",
					"veImpression",
					"disabled"
				],
				[1, "title"],
				[
					"title",
					"Model selection",
					3,
					"onClose",
					"isOpen"
				],
				[
					"data-test-id",
					"model-carousel-in-selector",
					3,
					"onModelSelectionChange",
					"index",
					"isSideBySide",
					"isModelSelectorOpen"
				],
				[
					"data-test-id",
					"model-name",
					1,
					"subtitle"
				],
				[
					"data-test-id",
					"model-description",
					1,
					"subtitle"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 0), _.J("click", function() {
					return b.Vz(!0);
				}), _.F(1, "span", 1), _.R(2), _.H(), _.B(3, NYb, 4, 2), _.H(), _.F(4, "ms-sliding-right-panel", 2), _.J("onClose", function() {
					return b.Vz(!1);
				}), _.F(5, "ms-model-carousel", 3), _.J("onModelSelectionChange", function() {
					return b.Vz(!1);
				}), _.H()());
				a & 2 && (_.E("ve", b.ve.pnb)("veClick", !0)("veImpression", !0)("disabled", b.disabled()), _.y(), _.P("is-side-by-side", b.Go()), _.y(), _.U(b.displayName()), _.y(), _.C(b.Go() ? -1 : 3), _.y(), _.E("isOpen", b.ps()), _.y(), _.E("index", b.index())("isSideBySide", b.Go())("isModelSelectorOpen", b.ps()));
			},
			dependencies: [
				IO,
				_.oE,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{width:100%}.model-selector-card[_ngcontent-%COMP%]{width:100%;padding:8px 12px;border-radius:12px;border:1px solid var(--color-v3-outline-var);background:var(--color-v3-surface-container-high);text-align:start;-webkit-transition:background-color .2s ease-in-out,border-color .2s ease-in-out;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;cursor:pointer}.model-selector-card[_ngcontent-%COMP%]:hover{background-color:var(--color-v3-surface-container-highest);border-color:var(--color-v3-outline)}.model-selector-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text);display:block;margin-bottom:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.model-selector-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:var(--color-v3-text-var);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;overflow-wrap:anywhere}.model-selector-card.disabled-interactive[_ngcontent-%COMP%], .model-selector-card[disabled][_ngcontent-%COMP%]{background:transparent;cursor:not-allowed;border-color:var(--color-v3-outline)}.model-selector-card.disabled-interactive[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .model-selector-card.disabled-interactive[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .model-selector-card[disabled][_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .model-selector-card[disabled][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text-disable)}.model-selector-card[_ngcontent-%COMP%]   .title.is-side-by-side[_ngcontent-%COMP%]{margin-bottom:0}"]
		});
		_.KO = class {
			constructor() {
				this.F = _.m(_.OC);
				this.bb = this.F.bb;
				this.A = _.m(_.LH);
				this.disabled = _.V(!1);
				this.Zd = _.V(!1);
				this.title = _.W(() => {
					var a = this.bb();
					return a ? a.getDisplayName() ? a.getDisplayName() : "API Key" : "No API Key";
				});
				this.description = _.W(() => {
					var a = this.bb();
					return a ? this.dM() ? _.Io(a) : "" : "Switch to a paid API key to unlock higher quota and more features.";
				});
				this.dM = _.W(() => {
					var a = this.bb();
					return !!a && !!_.Io(a);
				});
				this.ve = { Ffb: 296302 };
			}
			Ze() {
				this.A.openDialog(this.Zd);
			}
		};
		_.KO.J = function(a) {
			return new (a || _.KO)();
		};
		_.KO.ka = _.u({
			type: _.KO,
			da: [["ms-paid-api-key"]],
			inputs: {
				disabled: [1, "disabled"],
				Zd: [1, "isGenerating"]
			},
			ha: 8,
			ia: 10,
			la: [
				[
					"disabledInteractive",
					"",
					"matTooltipPosition",
					"left",
					1,
					"paid-api-key-card",
					3,
					"click",
					"aria-label",
					"disabled",
					"ve",
					"veClick",
					"veImpression"
				],
				[1, "title-container"],
				[1, "title"],
				[
					1,
					"badge",
					"new"
				],
				[1, "subtitle"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 0), _.J("click", function() {
					return b.Ze();
				}), _.F(1, "div", 1)(2, "span", 2), _.R(3), _.H(), _.B(4, OYb, 2, 0, "span", 3), _.H(), _.F(5, "span", 4), _.R(6), _.Ei(7, "maskApiKeyKeyString"), _.H()());
				a & 2 && (_.vh("aria-label", b.title()), _.E("disabled", b.disabled())("ve", b.ve.Ffb)("veClick", !0)("veImpression", !0), _.y(3), _.U(b.title()), _.y(), _.C(b.dM() ? 4 : -1), _.y(2), _.S(" ", b.dM() ? _.Fi(7, 8, b.description()) : b.description(), " "));
			},
			dependencies: [
				_.Cz,
				_.Bz,
				_.aF
			],
			styles: ["[_nghost-%COMP%]{display:grid;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;width:100%}.paid-api-key-card[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.paid-api-key-card[_ngcontent-%COMP%]{width:100%;padding:8px 12px;border-radius:12px;border:1px solid var(--color-v3-outline-var);background:var(--color-v3-surface-container-high);text-align:start;-webkit-transition:background-color .2s ease-in-out,border-color .2s ease-in-out;transition:background-color .2s ease-in-out,border-color .2s ease-in-out;cursor:pointer}.paid-api-key-card[_ngcontent-%COMP%]:hover{background-color:var(--color-v3-surface-container-highest);border-color:var(--color-v3-outline)}.paid-api-key-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text);display:block;margin-bottom:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.paid-api-key-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:var(--color-v3-text-var);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;overflow-wrap:anywhere}.paid-api-key-card.disabled-interactive[_ngcontent-%COMP%], .paid-api-key-card[disabled][_ngcontent-%COMP%]{background:transparent;cursor:not-allowed;border-color:var(--color-v3-outline)}.paid-api-key-card.disabled-interactive[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .paid-api-key-card.disabled-interactive[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .paid-api-key-card[disabled][_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .paid-api-key-card[disabled][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-v3-text-disable)}.badge[_ngcontent-%COMP%]{border-radius:8px;padding:1px 6px 1px 5px;border:1px solid var(--color-v3-outline);background-color:var(--color-v3-surface-container-high);color:var(--color-v3-text);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;margin-left:4px}.badge[_ngcontent-%COMP%]:before{content:\"\";width:6px;aspect-ratio:1/1;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.badge.enabled[_ngcontent-%COMP%]:before, .badge.green[_ngcontent-%COMP%]:before, .badge.new[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-4)}.badge.gray[_ngcontent-%COMP%]:before, .badge.not-enabled[_ngcontent-%COMP%]:before{background-color:var(--color-v3-text-var)}.badge.confidential[_ngcontent-%COMP%]:before, .badge.orange[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-1)}.badge.blue[_ngcontent-%COMP%]:before, .badge.paid[_ngcontent-%COMP%]:before{background-color:var(--color-v3-text-link)}.badge.alert[_ngcontent-%COMP%]:before, .badge.red[_ngcontent-%COMP%]:before{background-color:var(--color-v3-accent-3)}.badge.hide-circle[_ngcontent-%COMP%]:before{display:none}.title-container[_ngcontent-%COMP%]{-webkit-box-align:baseline;-webkit-align-items:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.title[_ngcontent-%COMP%]{overflow:clip;text-overflow:ellipsis;white-space:nowrap;width:140px}"]
		});
		var mZb, nZb;
		mZb = function(a) {
			var b, c = String.fromCharCode((b = _.yj(a, 5)) != null ? b : 0), d;
			b = (d = _.yj(a, 3)) != null ? d : 0;
			c = c.repeat(b);
			d = a.L7();
			b = c + d + "\n";
			d = _.Pm(a, 6);
			var e;
			b = `${b}${(e = a.Uu()) != null ? e : ""}${c}`;
			a = d ? _.yj(a, 4) : 4;
			var f = " ".repeat(a);
			return b = b.split("\n").map((g) => `${g ? f : ""}${g}`).join("\n");
		};
		nZb = function(a, b, c) {
			var d = [], e = _.OHa.encode(c);
			b.forEach((f) => {
				var g = _.qAb.decode(e.subarray(0, f.getIndex())).length, k = _.yj(f, 3);
				f = f.Gf();
				var p = a.some(({ startIndex: v, endIndex: w }) => g > v && g < w), r = a.some(({ endIndex: v }) => g === v);
				p || d.push({
					index: r ? g + 1 : g,
					z_a: k,
					uri: f
				});
			});
			return d;
		};
		_.oZb = function(a, b, c) {
			var d = 0, e = "";
			nZb(c, b, a).forEach((f) => {
				var g = a.substring(d, f.index);
				e += g;
				e += f.uri ? `[[${f.z_a}](${f.uri})]` : `[${f.z_a}]`;
				d = f.index;
			});
			d < a.length && (e += a.substring(d));
			return e;
		};
		_.pZb = function(a, b) {
			return _.x(function* () {
				var c = (yield _.Zsb(a)).parse(b), d = [];
				for (let e of _.bG(c)) if (e.getType() === 5) {
					c = e.Ff();
					if (!c) continue;
					c = mZb(c);
					let f = b.indexOf(c);
					f < 0 || d.push({
						startIndex: f,
						endIndex: f + c.length
					});
				}
				return d;
			});
		};
		_.LO = class {
			constructor() {
				this.YE = _.V(!1);
				this.text = _.V("Thinking");
			}
		};
		_.LO.J = function(a) {
			return new (a || _.LO)();
		};
		_.LO.ka = _.u({
			type: _.LO,
			da: [["ms-chat-loading-indicator"]],
			inputs: {
				YE: [1, "noAnimation"],
				text: [1, "text"]
			},
			ha: 2,
			ia: 3,
			la: [[1, "thinking-shimmer"]],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "span", 0), _.R(1), _.Eh());
				a & 2 && (_.P("no-animation", b.YE()), _.y(), _.U(b.text()));
			},
			styles: [".thinking-shimmer[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;background:-webkit-gradient(linear,left top,right top,from(var(--color-v3-chat-separator)),color-stop(19%,var(--color-v3-chat-separator)),color-stop(23%,#7bacf8),color-stop(27%,#7bacf8),color-stop(31%,var(--color-v3-chat-separator)),color-stop(37%,var(--color-v3-chat-separator)),color-stop(41%,#5ec47a),color-stop(45%,#5ec47a),color-stop(49%,var(--color-v3-chat-separator)),color-stop(55%,var(--color-v3-chat-separator)),color-stop(59%,#fcd462),color-stop(63%,#fcd462),color-stop(67%,var(--color-v3-chat-separator)),color-stop(71%,var(--color-v3-chat-separator)),color-stop(75%,#e8b8b5),color-stop(79%,#e8b8b5),color-stop(83%,var(--color-v3-chat-separator)),to(var(--color-v3-chat-separator)));background:-webkit-linear-gradient(left,var(--color-v3-chat-separator) 0,var(--color-v3-chat-separator) 19%,#7bacf8 23%,#7bacf8 27%,var(--color-v3-chat-separator) 31%,var(--color-v3-chat-separator) 37%,#5ec47a 41%,#5ec47a 45%,var(--color-v3-chat-separator) 49%,var(--color-v3-chat-separator) 55%,#fcd462 59%,#fcd462 63%,var(--color-v3-chat-separator) 67%,var(--color-v3-chat-separator) 71%,#e8b8b5 75%,#e8b8b5 79%,var(--color-v3-chat-separator) 83%,var(--color-v3-chat-separator) 100%);background:linear-gradient(90deg,var(--color-v3-chat-separator) 0,var(--color-v3-chat-separator) 19%,#7bacf8 23%,#7bacf8 27%,var(--color-v3-chat-separator) 31%,var(--color-v3-chat-separator) 37%,#5ec47a 41%,#5ec47a 45%,var(--color-v3-chat-separator) 49%,var(--color-v3-chat-separator) 55%,#fcd462 59%,#fcd462 63%,var(--color-v3-chat-separator) 67%,var(--color-v3-chat-separator) 71%,#e8b8b5 75%,#e8b8b5 79%,var(--color-v3-chat-separator) 83%,var(--color-v3-chat-separator) 100%);background-size:500% 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:_ngcontent-%COMP%_shimmer-cycle 5s linear infinite;animation:_ngcontent-%COMP%_shimmer-cycle 5s linear infinite;display:inline-block}@-webkit-keyframes _ngcontent-%COMP%_shimmer-cycle{0%{background-position:100% 0}to{background-position:0 0}}@keyframes _ngcontent-%COMP%_shimmer-cycle{0%{background-position:100% 0}to{background-position:0 0}}.no-animation[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;background-position:50% 0}"]
		});
		var qZb, rZb;
		qZb = 1e3 / 60;
		rZb = function(a) {
			a.H.set(!0);
			var b = a.X();
			a.I.update((c) => Math.min(c + b, a.A().length));
			a.aa.update((c) => c + 1);
			a.X.update((c) => {
				var d = a.aa(), e = Math.max(0, a.A().length - a.I());
				return Math.ceil(1 / (1 + d) * Math.ceil(e / 80) + c * (1 - 1 / (1 + d)));
			});
			a.F() && a.animate() ? setTimeout(() => {
				rZb(a);
			}, qZb) : a.H.set(!1);
		};
		_.sZb = class {
			constructor(a, b, c, d, e) {
				this.ea = a;
				this.animate = b;
				this.text = c;
				this.grounding = d;
				this.isJson = e;
				this.A = _.M("");
				this.U = _.M(!1);
				this.I = _.M(0);
				this.H = _.M(!1);
				this.aa = _.M(0);
				this.X = _.M(1);
				this.F = _.W(() => this.I() < this.text().length);
				this.R = _.M(null);
				this.ud = _.W(() => this.animate() && !this.U() ? this.A().substring(0, this.I()) : this.A());
				this.ZK = _.W(() => this.R());
				_.Fk([this.text], () => {
					var f = this.text();
					this.A.set(f);
				});
				this.grounding !== void 0 && _.Fk([this.grounding], () => {
					var f = this;
					return _.x(function* () {
						var g = f.grounding ? f.grounding() : void 0;
						if (g) {
							f.U.set(!0);
							var k = f.text(), p = yield _.pZb(f.ea, k);
							g = _.oZb(k, [..._.lo(g)], p);
							f.A.set(g);
						}
					});
				});
				_.Fk([
					this.animate,
					this.H,
					this.F
				], () => {
					var f = this.animate(), g = this.H(), k = this.F();
					f && !g && k && rZb(this);
				});
				_.Fk([this.ud], () => {
					var f = this;
					return _.x(function* () {
						var g = f.ud();
						if (g && g.length < 1e5) {
							var k;
							f.isJson && f.isJson() ? k = `\`\`\`json\n${g}\n\`\`\`` : k = g;
							f.R.set(yield _.dG(a, k));
						} else f.R.set(null);
					});
				});
			}
		};
		var vZb, uZb;
		_.MO = function(a) {
			var b, c;
			return (c = uZb.get(a)) != null ? c : (b = a.split("/")[1]) == null ? void 0 : b.split("+")[0];
		};
		_.NO = function(a) {
			var [b] = a.split("/"), c = _.MO(a), d = "Generated";
			switch (b) {
				case "image":
					d = `${d} Image`;
					break;
				case "audio":
					d = `${d} Audio`;
					break;
				case "video":
					d = `${d} Video`;
					break;
				default: d = a === "application/pdf" ? `${d} Document` : `${d} File`;
			}
			return `${d} ${_.Qk(Date.now(), "MMMM dd, yyyy - h:mma", "en-US")}.${c}`;
		};
		_.OO = function(a) {
			return _.x(function* () {
				if (a.base64) {
					if (a.fileName) {
						var b = a.fileName;
						var c = a.mimeType;
						let d = _.MO(c), e;
						c = (e = c.split("/")[1]) == null ? void 0 : e.split("+")[0];
						b = !d || b.endsWith(`.${d}`) || b.endsWith(`.${c}`) || vZb.has(d) ? b : `${b}.${d}`;
					} else b = _.NO(a.mimeType);
					yield _.WL.download(new Uint8Array(_.Paa(a.base64)).buffer, b);
				}
			});
		};
		_.wZb = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		_.PO = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		vZb = new Set(["plain"]);
		uZb = new Map([
			["audio/mpeg", "mp3"],
			["audio/x-m4a", "m4a"],
			["image/svg+xml", "svg"],
			["image/jpeg", "jpg"]
		]);
		var yZb, zZb, AZb, CZb, DZb, EZb, FZb, GZb, HZb, IZb, JZb, KZb, LZb, MZb, NZb, OZb, PZb, QZb, RZb;
		_.xZb = function(a) {
			if (!_.ao(a)) return "";
			a = _.go(_.bo(a));
			return new TextDecoder("utf-8").decode(a);
		};
		yZb = function(a) {
			a = new TextEncoder().encode(a);
			a = _.ho(a.buffer);
			return _.fo("text/plain", a);
		};
		zZb = function(a) {
			a & 1 && _.I(0, "ms-cmark-node", 1);
			a & 2 && (a = _.K(), _.E("node", a.node.value()));
		};
		AZb = function(a) {
			a & 1 && (_.F(0, "div"), _.R(1, "Loading..."), _.H());
		};
		CZb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 11);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(BZb(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.BZ() ? a.S.aq : a.S.hK)("matTooltip", a.BZ() ? "View code" : "View preview"), _.wh("aria-label", a.BZ() ? "View code" : "View preview"));
		};
		DZb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 12);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					c.LN(Math.max(c.iJ() - 1, 0));
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.S.EV)("disabled", a.tBb()));
		};
		EZb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 13)(1, "img", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.ABa.set(!c.ABa()));
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.K();
				_.y();
				_.P("zoomed", b.ABa());
				_.E("src", a.poa, _.rg)("alt", a.altText);
			}
		};
		FZb = function(a) {
			a & 1 && (_.F(0, "div", 14), _.I(1, "video", 20), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("src", a.poa, _.rg), _.wh("aria-label", a.altText));
		};
		GZb = function(a) {
			a & 1 && (_.F(0, "div", 15), _.I(1, "audio", 21), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("src", a.poa), _.wh("aria-label", a.altText));
		};
		HZb = function(a) {
			a & 1 && (_.F(0, "div", 16)(1, "pre", 22), _.R(2), _.H()());
			a & 2 && (a = _.K(), _.y(2), _.U(a.Qz == null ? null : a.Qz.text));
		};
		IZb = function(a) {
			a & 1 && (_.F(0, "div", 17), _.I(1, "ms-markdown-preview", 23), _.H());
			if (a & 2) {
				a = _.K();
				_.y();
				let b;
				_.E("text", (b = a.Qz == null ? null : a.Qz.text) != null ? b : "");
			}
		};
		JZb = function(a) {
			a & 1 && _.I(0, "div", 27, 0);
		};
		KZb = function(a) {
			a & 1 && (_.F(0, "div", 18)(1, "div", 24)(2, "pre", 25), _.I(3, "code", 26), _.H()(), _.B(4, JZb, 2, 0, "div", 27), _.H());
			a & 2 && (a = _.K(2), _.y(), _.P("visually-hidden", a.BZ()), _.y(2), _.E("innerHTML", a.qBa(), _.qg), _.y(), _.C(a.BZ() ? 4 : -1));
		};
		LZb = function(a) {
			a & 1 && _.B(0, EZb, 2, 4, "div", 13)(1, FZb, 2, 2, "div", 14)(2, GZb, 2, 2, "div", 15)(3, HZb, 3, 1, "div", 16)(4, IZb, 2, 1, "div", 17)(5, KZb, 5, 4, "div", 18);
			a & 2 && (a = _.K(), _.C(a.E2a() ? 0 : a.F2a() ? 1 : a.oHb() ? 2 : a.rHb() ? 3 : a.qHb() ? 4 : a.pHb() || a.BZ() ? 5 : -1));
		};
		MZb = function(a) {
			a & 1 && (_.F(0, "div", 9), _.R(1, "Loading..."), _.H());
		};
		NZb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 28);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					c.LN(Math.min(c.iJ() + 1, c.qN().length - 1));
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.S.gh)("disabled", a.rBb()));
		};
		OZb = function(a) {
			a & 1 && _.I(0, "img", 31);
			a & 2 && (a = _.K().V, _.E("src", a.thumbnailUrl, _.rg)("alt", a.altText + " thumbnail"));
		};
		PZb = function(a) {
			a & 1 && _.I(0, "video", 32);
			a & 2 && (a = _.K().V, _.E("src", a.thumbnailUrl, _.rg));
		};
		QZb = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 30);
				_.J("click", function() {
					var d = _.q(c).jb, e = _.K(2);
					return _.t(e.LN(d));
				})("keydown.enter", function() {
					var d = _.q(c).jb, e = _.K(2);
					return _.t(e.LN(d));
				})("keydown.space", function() {
					var d = _.q(c).jb, e = _.K(2);
					return _.t(e.LN(d));
				});
				_.B(1, OZb, 1, 2, "img", 31)(2, PZb, 1, 1, "video", 32);
				_.I(3, "div", 33);
				_.H();
			}
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.P("selected", c.iJ() === b);
				_.wh("aria-label", "Select " + a.altText);
				_.y();
				_.C(c.E2a() ? 1 : c.F2a() ? 2 : -1);
			}
		};
		RZb = function(a) {
			a & 1 && (_.F(0, "footer"), _.Ah(1, QZb, 4, 4, "div", 29, _.yh), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.qN()));
		};
		_.SZb = class extends _.h {
			constructor(a) {
				super(a);
			}
			getFileName() {
				return _.l(this, 3);
			}
			getSize() {
				return _.Ys(this, 4);
			}
		};
		_.RO = class {
			constructor() {
				this.text = _.Li.required();
				this.A = _.m(_.eG);
				this.node = _.Zi(Object.assign({}, {}, {
					params: () => ({ text: this.text() }),
					Xc: ({ params: a }) => _.dG(this.A, a.text)
				}));
			}
		};
		_.RO.J = function(a) {
			return new (a || _.RO)();
		};
		_.RO.ka = _.u({
			type: _.RO,
			da: [["ms-markdown-preview"]],
			inputs: { text: [1, "text"] },
			ha: 3,
			ia: 1,
			la: [[1, "markdown-body"], [3, "node"]],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, zZb, 1, 1, "ms-cmark-node", 1)(2, AZb, 2, 0, "div"), _.H());
				a & 2 && (_.y(), _.C(b.node.xc() ? 1 : 2));
			},
			dependencies: [_.cM],
			styles: [".markdown-body[_ngcontent-%COMP%] {\n      max-width: 850px;\n      margin: 0 auto;\n      width: 100%;\n    }"]
		});
		var TZb, BZb, WZb, UZb, XZb;
		TZb = ["htmlContainer"];
		BZb = function(a) {
			var b = a.qN(), c = a.iJ(), d = b[c], e;
			d && ((e = d.Qz) == null ? void 0 : e.mimeType) === "text/html" && (b = [...b], b[c] = Object.assign({}, d, { type: d.type === "html" ? "code" : "html" }), a.qN.set(b), b[c].type === "html" && setTimeout(() => UZb(a)));
		};
		WZb = function(a) {
			var b = a.data.media.map((c, d) => {
				var e = c.mimeType;
				var f = void 0;
				d = c.altText || `Media item ${d + 1}`;
				if (c.source instanceof Blob) {
					var g = _.ld(c.source);
					e = e || c.source.type;
				} else if (typeof c.source === "string") if (_.ao(c.source)) try {
					let k = _.co(c.source) || "", p = _.go(_.bo(c.source)), r = new Blob([p], { type: k });
					if (k.startsWith("video/") || k.startsWith("image/") || k.startsWith("audio/")) g = _.ld(r);
					else if (k.startsWith("text/") || k === "application/json" || k === "application/x-ipynb+json") f = {
						text: _.xZb(c.source),
						mimeType: k
					}, g = (0, _.Kj)``;
					else throw Error("Bf`" + k);
					e = k;
				} catch (k) {
					console.error("Failed to convert data URL string to Blob:", k), g = (0, _.Kj)``, e = "";
				}
				else g = _.kd(c.source), e = e || _.co(c.source) || "";
				else g = c.source, e = e || "";
				e.startsWith("video/") ? e = "video" : e.startsWith("image/") ? e = "image" : e.startsWith("audio/") ? e = "audio" : e === "text/markdown" ? e = "markdown" : e === "text/html" ? e = "code" : (c = e, (VZb.has(c) || c === "text/markdown" ? 0 : c.startsWith("text/") || c === "application/json" || c === "application/x-ipynb+json") ? e = "code" : e.startsWith("text/") ? e = "text" : (console.warn("Could not determine media type, defaulting to image"), e = "image"));
				return {
					poa: g,
					type: e,
					altText: d,
					thumbnailUrl: g,
					Qz: f
				};
			});
			a.qN.set(b);
		};
		UZb = function(a) {
			return _.x(function* () {
				var b, c = (b = a.r1a()) == null ? void 0 : b.nativeElement;
				b = a.Gy();
				c && (b == null ? void 0 : b.type) === "html" && b.Qz && (c.textContent = "", yield (yield new _.$L("view-media-html", {
					sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-downloads allow-pointer-lock allow-popups-to-escape-sandbox allow-presentation".split(" "),
					uia: !0
				}).ZT(b.Qz.text, c)).gR, a.A = !1);
			});
		};
		XZb = function(a) {
			return _.x(function* () {
				var b = a.Gy();
				if (b) {
					var c = b.poa.toString(), d = b.type === "video" ? "video/mp4" : "image/png", e = "";
					if (b.Qz) e = yZb(b.Qz.text);
					else try {
						let f = yield fetch(c).then((g) => {
							if (!g.ok) throw Error("Cf`" + g.statusText);
							return g.blob();
						});
						e = yield _.eo(f);
					} catch (f) {
						console.error("Error fetching or reading media for download:", f);
						return;
					}
					e && (c = _.co(e) || d, b = b.altText || _.NO(c), yield _.OO({
						base64: _.bo(e),
						mimeType: c,
						fileName: b
					}));
				}
			});
		};
		_.SO = class {
			constructor() {
				this.data = _.m(_.qC);
				this.Wa = _.m(_.kC);
				this.F = _.m(_.ZL);
				this.S = _.Dk;
				this.r1a = _.Ni("htmlContainer");
				this.qN = _.M([]);
				this.iJ = _.M(0);
				this.ABa = _.M(!1);
				this.A = !1;
				this.title = _.W(() => this.data.title || "Generated media");
				this.c$ = _.W(() => this.data.c$);
				this.dKa = _.W(() => this.qN().length > 1);
				this.Gy = _.W(() => {
					var a = this.qN(), b = this.iJ();
					return a.length > b ? a[b] : void 0;
				});
				this.F2a = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "video";
				});
				this.E2a = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "image";
				});
				this.rHb = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "text";
				});
				this.qHb = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "markdown";
				});
				this.pHb = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "code";
				});
				this.BZ = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "html";
				});
				this.oHb = _.W(() => {
					var a;
					return ((a = this.Gy()) == null ? void 0 : a.type) === "audio";
				});
				this.THb = _.W(() => {
					var a, b;
					return ((a = this.Gy()) == null ? void 0 : (b = a.Qz) == null ? void 0 : b.mimeType) === "text/html";
				});
				this.qBa = _.W(() => {
					var a = this.Gy();
					return a == null || !a.Qz || a.type !== "code" && a.type !== "html" ? "" : this.F.highlight(a.Qz.text).value;
				});
				this.tBb = _.W(() => this.iJ() <= 0);
				this.rBb = _.W(() => this.iJ() >= this.qN().length - 1);
			}
			ib() {
				WZb(this);
				var a;
				this.iJ.set((a = this.data.W1a) != null ? a : 0);
				this.A = !0;
			}
			Rb() {
				UZb(this);
			}
			LN(a) {
				this.iJ.set(a);
			}
		};
		_.SO.J = function(a) {
			return new (a || _.SO)();
		};
		_.SO.ka = _.u({
			type: _.SO,
			da: [["ms-view-media-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.r1a, TZb, 5);
				a & 2 && _.ki();
			},
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("sixteen-by-nine", b.c$() === "16:9")("nine-by-sixteen", b.c$() === "9:16");
			},
			ha: 14,
			ia: 9,
			la: [
				["htmlContainer", ""],
				[
					"cdkTrapFocus",
					"",
					1,
					"action-confirmation",
					"action-confirmation-wide",
					"view-media-dialog",
					3,
					"cdkTrapFocusAutoCapture"
				],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[1, "text"],
				[1, "actions"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					1,
					"view-toggle-button",
					3,
					"iconName",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Download",
					"matTooltip",
					"Download",
					1,
					"download-button",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matDialogClose",
					"",
					"aria-label",
					"Close",
					"matTooltip",
					"Close",
					1,
					"close-button",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Go to previous media",
					"matTooltip",
					"Go to previous media",
					1,
					"previous-media-button",
					3,
					"iconName",
					"disabled"
				],
				[1, "loading-placeholder"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Go to next media",
					"matTooltip",
					"Go to next media",
					1,
					"next-media-button",
					3,
					"iconName",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					1,
					"view-toggle-button",
					3,
					"click",
					"iconName",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Go to previous media",
					"matTooltip",
					"Go to previous media",
					1,
					"previous-media-button",
					3,
					"click",
					"iconName",
					"disabled"
				],
				[
					"tabindex",
					"0",
					1,
					"image-container"
				],
				[
					"tabindex",
					"0",
					1,
					"video-container"
				],
				[
					"tabindex",
					"0",
					1,
					"audio-container"
				],
				[
					"tabindex",
					"0",
					1,
					"text-container"
				],
				[
					"tabindex",
					"0",
					1,
					"markdown-container"
				],
				[1, "code-preview-wrapper"],
				[
					1,
					"main-media-item",
					"main-image",
					3,
					"click",
					"src",
					"alt"
				],
				[
					"controls",
					"",
					1,
					"main-media-item",
					"main-video",
					3,
					"src"
				],
				[
					"controls",
					"",
					1,
					"main-media-item",
					"main-audio",
					3,
					"src"
				],
				[
					1,
					"main-media-item",
					"main-text"
				],
				[3, "text"],
				[
					"tabindex",
					"0",
					1,
					"code-container"
				],
				[
					1,
					"main-media-item",
					"main-code"
				],
				[3, "innerHTML"],
				[
					"tabindex",
					"0",
					1,
					"html-container"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Go to next media",
					"matTooltip",
					"Go to next media",
					1,
					"next-media-button",
					3,
					"click",
					"iconName",
					"disabled"
				],
				[
					"role",
					"button",
					"tabindex",
					"0",
					1,
					"media-selection-item-container",
					3,
					"selected"
				],
				[
					"role",
					"button",
					"tabindex",
					"0",
					1,
					"media-selection-item-container",
					3,
					"click",
					"keydown.enter",
					"keydown.space"
				],
				[
					1,
					"media-selection-item",
					3,
					"src",
					"alt"
				],
				[
					1,
					"media-selection-item",
					3,
					"src"
				],
				[1, "selection-indicator"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1)(1, "header", 2)(2, "div", 3), _.R(3), _.H(), _.F(4, "div", 4), _.B(5, CZb, 1, 3, "button", 5), _.F(6, "button", 6), _.J("click", function() {
					return XZb(b);
				}), _.H(), _.I(7, "button", 7), _.H()(), _.F(8, "main"), _.B(9, DZb, 1, 2, "button", 8), _.B(10, LZb, 6, 1)(11, MZb, 2, 0, "div", 9), _.B(12, NZb, 1, 2, "button", 10), _.H(), _.B(13, RZb, 3, 0, "footer"), _.H());
				if (a & 2) {
					let c;
					_.E("cdkTrapFocusAutoCapture", !0);
					_.y(3);
					_.U(b.title());
					_.y(2);
					_.C(b.THb() ? 5 : -1);
					_.y();
					_.E("iconName", b.S.Hm);
					_.y();
					_.E("iconName", b.S.ac);
					_.y(2);
					_.C(b.dKa() ? 9 : -1);
					_.y();
					_.C((c = b.Gy()) ? 10 : 11, c);
					_.y(2);
					_.C(b.dKa() ? 12 : -1);
					_.y();
					_.C(b.dKa() ? 13 : -1);
				}
			},
			dependencies: [
				_.Yy,
				_.JA,
				_.RO,
				_.xC,
				_.sC,
				_.uC,
				_.yA,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}[_nghost-%COMP%]:has(.audio-container){max-width:560px}[_nghost-%COMP%]:has(.code-container), [_nghost-%COMP%]:has(.markdown-container), [_nghost-%COMP%]:has(.text-container){max-width:800px}.view-media-dialog[_ngcontent-%COMP%]{max-height:80dvh;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto}.view-media-dialog[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{grid-area:header}.view-media-dialog[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]{grid-area:main}.view-media-dialog[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]{grid-area:footer}main[_ngcontent-%COMP%]{overflow:auto}main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:4px}.shared-dialog-header[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.next-media-button[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:4px;overflow-x:auto;height:120px}footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]{position:relative;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:60px;width:auto;margin:0 4px;border-radius:4px}footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]   .media-selection-item[_ngcontent-%COMP%]{display:block;height:100%;width:auto;object-fit:contain;border-radius:inherit;margin:0}footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]   .selection-indicator[_ngcontent-%COMP%]{display:none;position:absolute;inset:0;border:2px solid transparent;border-radius:inherit;-moz-box-sizing:border-box;box-sizing:border-box;pointer-events:none;margin:0}footer[_ngcontent-%COMP%]   .media-selection-item-container.cdk-keyboard-focused[_ngcontent-%COMP%]   .selection-indicator[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]:focus-visible   .selection-indicator[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]:hover   .selection-indicator[_ngcontent-%COMP%]{display:block;border-color:var(--color-v3-outline)}footer[_ngcontent-%COMP%]   .media-selection-item-container.selected[_ngcontent-%COMP%]   .selection-indicator[_ngcontent-%COMP%]{display:block;border-color:var(--color-v3-text-link)}footer[_ngcontent-%COMP%]   .media-selection-item-container.selected.cdk-keyboard-focused[_ngcontent-%COMP%]   .selection-indicator[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .media-selection-item-container.selected[_ngcontent-%COMP%]:focus-visible   .selection-indicator[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .media-selection-item-container.selected[_ngcontent-%COMP%]:hover   .selection-indicator[_ngcontent-%COMP%]{border-color:var(--color-v3-text-link)}footer[_ngcontent-%COMP%]   .media-selection-item-container[_ngcontent-%COMP%]:focus{outline:none}.view-media-dialog[_ngcontent-%COMP%]:not(:has(footer))   main[_ngcontent-%COMP%]:has(img){margin:0 16px;margin-bottom:8px}.view-media-dialog[_ngcontent-%COMP%]:not(:has(footer))   main[_ngcontent-%COMP%]:has(video){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}main[_ngcontent-%COMP%]:has(video){min-width:77vw}main[_ngcontent-%COMP%]:has(video)   .video-container[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:12px}main[_ngcontent-%COMP%]:has(video)   video[_ngcontent-%COMP%]{object-fit:contain;width:100%;border-radius:12px}.view-media-dialog[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;width:100%;height:100%;text-align:center}.view-media-dialog[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto;max-width:100%;max-height:100%}.view-media-dialog[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.zoomed[_ngcontent-%COMP%]{max-width:unset;max-height:unset}.view-media-dialog[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{margin:0 16px;padding-bottom:16px;overflow:auto}.view-media-dialog[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]{margin:0}.view-media-dialog[_ngcontent-%COMP%]   .audio-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:16px}.view-media-dialog[_ngcontent-%COMP%]   .audio-container[_ngcontent-%COMP%]   .main-audio[_ngcontent-%COMP%]{width:100%;max-width:500px}.view-media-dialog[_ngcontent-%COMP%]   .markdown-container[_ngcontent-%COMP%]{margin:0 16px;padding:8px 12px;padding-bottom:16px;overflow:auto}.view-media-dialog[_ngcontent-%COMP%]   .code-preview-wrapper[_ngcontent-%COMP%]{position:relative;max-height:60vh;overflow:hidden}.view-media-dialog[_ngcontent-%COMP%]   .code-container[_ngcontent-%COMP%]{margin:0 16px;padding-bottom:16px;overflow:auto;max-height:60vh}.view-media-dialog[_ngcontent-%COMP%]   .code-container.visually-hidden[_ngcontent-%COMP%]{visibility:hidden}.view-media-dialog[_ngcontent-%COMP%]   .code-container[_ngcontent-%COMP%]   .main-code[_ngcontent-%COMP%]{margin:0;padding:8px;background-color:var(--color-v3-surface-container);border-radius:8px;font-family:Google Sans Mono,Courier New,Courier,monospace;font-size:13px;line-height:1.5;overflow-x:auto}.view-media-dialog[_ngcontent-%COMP%]   .html-container[_ngcontent-%COMP%]{position:absolute;inset:0}.view-media-dialog[_ngcontent-%COMP%]   .html-container[_ngcontent-%COMP%]     ms-safe-content-frame-renderer{position:absolute;inset:0}.view-media-dialog[_ngcontent-%COMP%]   .html-container[_ngcontent-%COMP%]     iframe{position:absolute;width:100%;height:100%;border:none;border-radius:8px;background:#fff}.main-image[_ngcontent-%COMP%]{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.main-image.zoomed[_ngcontent-%COMP%]{cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out}.view-media-dialog[_ngcontent-%COMP%]:has(footer)   main[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;max-width:77vw}.view-media-dialog[_ngcontent-%COMP%]:has(footer)   .image-container[_ngcontent-%COMP%]{display:block;height:100%;width:100%;overflow:auto}"]
		});
		var VZb = new Set([
			"text/plain",
			"text/csv",
			"text/tab-separated-values",
			"text/rtf",
			"application/rtf"
		]);
		var U_b;
		U_b = function(a, b) {
			a & 1 && (_.F(0, "li")(1, "a", 7), _.R(2), _.H()());
			a & 2 && (a = b.V, _.K(), _.y(), _.E("href", _.wi(`https://www.google.com/search?q=${a}&client=app-vertex-grounding&safesearch=active`), _.rg), _.y(), _.U(a));
		};
		_.YO = class {
			constructor() {
				this.S = _.Dk;
				this.Pl = _.Li.required();
			}
		};
		_.YO.J = function(a) {
			return new (a || _.YO)();
		};
		_.YO.ka = _.u({
			type: _.YO,
			da: [["ms-search-entry-point"]],
			inputs: { Pl: [1, "searchQueries"] },
			ha: 12,
			ia: 1,
			la: [
				[1, "search-entry-container"],
				[1, "search-entry-container-title"],
				[1, "search-entry-container-description"],
				["documentation-path", "/gemini-api/docs/grounding/search-suggestions"],
				[1, "container"],
				[3, "iconName"],
				[1, "carousel"],
				[
					"target",
					"_blank",
					1,
					"chip",
					3,
					"href"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h5", 1), _.R(2, "Google Search Suggestions"), _.H(), _.F(3, "div", 2), _.R(4, " Display of Search Suggestions is required when using Grounding with Google Search. "), _.F(5, "a", 3), _.R(6, " Learn more "), _.H()(), _.F(7, "div", 4), _.I(8, "span", 5), _.F(9, "ul", 6), _.Ah(10, U_b, 3, 3, "li", null, _.yh), _.H()()());
				a & 2 && (_.y(8), _.E("iconName", b.S.Oea), _.y(2), _.Bh(b.Pl()));
			},
			dependencies: [
				_.tz,
				_.LC,
				_.dz
			],
			styles: ["[_nghost-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;margin-top:12px}.search-entry-container[_ngcontent-%COMP%]{border-radius:16px;padding:12px 16px;background-color:var(--color-search-entry-point-background-color);border:1px solid var(--color-search-entry-point-border-color);color:var(--color-search-entry-point-color)}.search-entry-container-title[_ngcontent-%COMP%]{margin:0;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.search-entry-container-description[_ngcontent-%COMP%]{padding:8px 0}.container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow-y:auto;padding:12px;background-color:var(--color-search-entry-point-container-background-color);border:1px solid var(--color-search-entry-point-container-border-color)}.container[_ngcontent-%COMP%]   .ms-custom-icon[_ngcontent-%COMP%]{padding:4px 0;height:24px;width:24px}.carousel[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:8px;scrollbar-width:none;white-space:nowrap;padding:0;margin:0;list-style-type:none}.chip[_ngcontent-%COMP%]{border:1px solid var(--color-search-entry-point-chip-border-color);border-radius:16px;display:inline-block;margin:0 8px;padding:5px 16px;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;min-width:20px;background-color:var(--color-search-entry-point-chip-background-color);color:var(--color-search-entry-point-chip-color)}.chip[_ngcontent-%COMP%]:hover{background-color:var(--color-search-entry-point-chip-hover-background-color)}\n/*# sourceMappingURL=search_entry_point.css.map */"]
		});
		var LXc, MXc, NXc, PXc, QXc, RXc, SXc, UXc, VXc, WXc, XXc, ZXc, $Xc, aYc, bYc, cYc, dYc, eYc, fYc, gYc, hYc, iYc, jYc, kYc, lYc, nYc, oYc, pYc, qYc, rYc, OXc, TXc, YXc, sYc, r1, tYc;
		_.n1 = function(a) {
			var b = _.go(a.data);
			return new Blob([b], { type: a.mimeType });
		};
		LXc = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(2), _.E("src", _.wi(a.dataUrl()), _.rg));
		};
		MXc = function(a) {
			a & 1 && (_.F(0, "video", 4), _.I(1, "source", 5), _.H());
			a & 2 && (a = _.K(2), _.E("width", a.videoWidth())("height", a.videoHeight()), _.y(), _.E("src", a.wMa()));
		};
		NXc = function(a) {
			a & 1 && _.B(0, LXc, 1, 2, "img", 3)(1, MXc, 2, 3, "video", 4);
			a & 2 && (a = _.K(), _.C(a.Bx() === "image" ? 0 : a.Bx() === "video" ? 1 : -1));
		};
		PXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 6)(1, "div", 8)(2, "button", 9);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(OXc(c, "image"));
				});
				_.R(3, " Photo ");
				_.H();
				_.F(4, "button", 10);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(OXc(c, "video"));
				});
				_.R(5, " Video ");
				_.H()()();
			}
			a & 2 && (a = _.K(2), _.y(2), _.E("active", a.Bx() === "image"), _.y(2), _.E("active", a.Bx() === "video"));
		};
		QXc = function(a) {
			a & 1 && _.I(0, "div", 7);
		};
		RXc = function(a) {
			a & 1 && (_.B(0, PXc, 6, 2, "div", 6), _.B(1, QXc, 1, 0, "div", 7));
			a & 2 && (a = _.K(), _.C(a.Bca && a.aqa ? 0 : -1), _.y(), _.C(a.Bx() === "video" && a.lk() ? 1 : -1));
		};
		SXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 11);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.reset());
				});
				_.R(1);
				_.H();
				_.F(2, "button", 12);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.c4());
				});
				_.R(3, " Add to prompt ");
				_.H();
			}
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.QNb(), " "), _.y(), _.E("disabled", !a.dataUrl()));
		};
		UXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 17);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(TXc(c));
				});
				_.R(1, " Camera ");
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("disabled", a.lk()));
		};
		VXc = function(a) {
			a & 1 && _.B(0, UXc, 2, 1, "button", 16);
			a & 2 && (a = _.K(2), _.C(a.WAa() ? 0 : -1));
		};
		WXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 21);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(TXc(c));
				});
				_.R(1, " Screenshot ");
				_.H();
			}
		};
		XXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 22);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(TXc(c));
				});
				_.R(1, " Screencast ");
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("disabled", a.lk()));
		};
		ZXc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(YXc(c));
				});
				_.R(1, " Change camera ");
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("disabled", a.lk()));
		};
		$Xc = function(a) {
			a & 1 && (_.B(0, WXc, 2, 0, "button", 18)(1, XXc, 2, 1, "button", 19), _.B(2, ZXc, 2, 1, "button", 20));
			a & 2 && (a = _.K(2), _.C(a.Bx() === "image" ? 0 : 1), _.y(2), _.C(a.SW().length > 1 ? 2 : -1));
		};
		aYc = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 13);
				_.R(1);
				_.H();
				_.F(2, "div", 14);
				_.B(3, VXc, 1, 1)(4, $Xc, 3, 2);
				_.F(5, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Lo());
				});
				_.R(6);
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.jwb(), " "), _.y(2), _.C(a.kU() ? 3 : 4), _.y(3), _.S(" ", a.OMb(), " "));
		};
		bYc = function(a) {
			a & 1 && (_.F(0, "div", 6), _.I(1, "img", 12), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("src", a.Rxa.imageUrl, _.rg));
		};
		cYc = function(a) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(), a = _.O(14), _.E("ngTemplateOutlet", a));
		};
		dYc = function(a) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(), a = _.O(16), _.E("ngTemplateOutlet", a));
		};
		eYc = function(a) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(), a = _.O(18), _.E("ngTemplateOutlet", a));
		};
		fYc = function(a) {
			a & 1 && (_.F(0, "button", 10), _.R(1, "Cancel"), _.H());
			a & 2 && _.E("mat-dialog-close", !1);
		};
		gYc = function(a) {
			a & 1 && (_.R(0, " As a reminder, recordings of your interactions with the Live API and content you share with it are processed per the "), _.F(1, "a", 13), _.R(2, "Gemini API Additional Terms"), _.H(), _.R(3, ". "), _.I(4, "br")(5, "br"), _.R(6, " Respect others’ privacy and ask permission before recording or including them in a Live chat.\n"));
		};
		hYc = function(a) {
			a & 1 && _.R(0, " Make sure you have the necessary rights to any images you upload, including images of minors. Don't generate content that infringes on others' rights, including content that deceives, harasses, or harms. When using Gemini, you must comply with Google's ");
		};
		iYc = function(a) {
			a & 1 && _.R(0, " By using this feature, you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others intellectual property or privacy rights. Your use of this generative AI service is subject to our ");
		};
		jYc = function(a) {
			a & 1 && (_.B(0, hYc, 1, 0)(1, iYc, 1, 0), _.F(2, "a", 14), _.R(3, "Prohibited Use Policy"), _.H(), _.R(4, ". "), _.I(5, "br")(6, "br"), _.R(7, " Please note that uploads from Google Workspace may be used to develop and improve Google products and services in accordance with our "), _.F(8, "a", 13), _.R(9, "terms"), _.H(), _.R(10, ".\n"));
			a & 2 && (a = _.K(), _.C(a.OIb ? 0 : 1));
		};
		kYc = function(a) {
			a & 1 && (_.R(0, " As a reminder, recordings of your interactions with robotics models and content you share with it are processed according to the "), _.F(1, "a", 13), _.R(2, "Gemini API Additional Terms"), _.H(), _.R(3, ". "), _.I(4, "br")(5, "br"), _.R(6, " Respect others’ privacy and ask permission before recording or including them in sessions with the Robotics models.\n"));
		};
		_.o1 = class {
			constructor() {
				this.Flb = _.m(_.HC);
				this.Elb = _.m(_.Jf);
			}
		};
		_.o1.J = function(a) {
			return new (a || _.o1)();
		};
		_.o1.Oa = _.We({
			type: _.o1,
			da: [[
				"",
				"matTooltip",
				"",
				"msTooltipOnOverflow",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("mouseenter", function() {
					var c = b.Elb.nativeElement;
					c && (b.Flb.disabled = c.scrollWidth <= c.clientWidth);
				});
			}
		});
		_.p1 = _.Wc(_.uv);
		lYc = function(a) {
			var b = new _.ry();
			return _.ln(b, _.Zo, 1, a);
		};
		_.mYc = _.Wc(_.Uu);
		_.q1 = _.Wc(_.Rw);
		nYc = function(a) {
			_.x(function* () {
				var b = _.Yt(new Date());
				a.na.set(b);
				b = lYc(b);
				var c = new _.sy();
				b = _.ln(c, _.ry, 2, b);
				return _.nF(a, b, ["uploading_media_disclaimer_ack"]);
			});
		};
		oYc = function(a) {
			_.x(function* () {
				var b = _.Yt(new Date());
				a.X.set(b);
				b = lYc(b);
				var c = new _.sy();
				b = _.ln(c, _.ry, 3, b);
				return _.nF(a, b, ["live_api_disclaimer_ack"]);
			});
		};
		pYc = function(a) {
			_.x(function* () {
				var b = _.Yt(new Date());
				a.ma.set(b);
				b = lYc(b);
				var c = new _.sy();
				b = _.ln(c, _.ry, 4, b);
				return _.nF(a, b, ["robotics_model_disclaimer_ack"]);
			});
		};
		qYc = {
			LO: 0,
			Asb: 1,
			qpb: 2,
			0: "BIDI",
			1: "UPLOADING_MEDIA",
			2: "ROBOTICS"
		};
		rYc = ["video"];
		OXc = function(a, b) {
			a.Bx.set(b);
			b === "image" && a.lk() && (sYc(a), r1(a));
		};
		TXc = function(a) {
			a.kU.update((b) => !b);
			tYc(a);
			r1(a);
		};
		YXc = function(a) {
			a.SW().length <= 1 || (a.F.update((b) => (b + 1) % a.SW().length), tYc(a), r1(a));
		};
		sYc = function(a) {
			var b;
			(b = a.A()) == null || b.stop();
			a.A.set(null);
			tYc(a);
		};
		r1 = function(a) {
			_.x(function* () {
				var b, c = (b = a.video()) == null ? void 0 : b.nativeElement;
				if (c) try {
					if (a.kU()) try {
						a.stream = yield navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "window" } });
					} catch (d) {
						if (a.WAa()) {
							TXc(a);
							return;
						}
						throw d;
					}
					else a.stream = yield navigator.mediaDevices.getUserMedia({
						video: a.SW().length <= 1 ? !0 : { facingMode: a.SW()[a.F()] },
						audio: a.Bx() === "video"
					});
					c.srcObject = a.stream;
					c.play();
					a.dataUrl.set(null);
					a.wMa.set(null);
					a.aA = [];
				} catch (d) {
					_.mm(a.qr, _.nm, {
						Rc: "ms-toast-snack-bar-container",
						data: {
							content: "No recording devices available.",
							Ne: "error",
							Aj: 20
						}
					});
				}
			});
		};
		tYc = function(a) {
			var b;
			if (a = (b = a.video()) == null ? void 0 : b.nativeElement) {
				var c;
				(c = a.srcObject) == null || c.getTracks().forEach((d) => void d.stop());
				a.srcObject = null;
			}
		};
		_.s1 = class {
			constructor() {
				this.S = _.Dk;
				this.video = _.Ni("video");
				this.Wa = _.m(_.kC);
				this.qr = _.m(_.gC);
				this.data = _.m(_.qC);
				this.Bca = this.data.Bca;
				this.aqa = this.data.aqa;
				this.Bx = _.M(this.Bca ? "image" : "video");
				this.SW = _.M([]);
				this.WAa = _.M(!1);
				this.F = _.M(0);
				this.kU = _.M(!1);
				this.dataUrl = _.M(null);
				this.H = _.M(null);
				this.videoHeight = _.M(480);
				this.videoWidth = _.M(640);
				this.stream = null;
				this.A = _.M(null);
				this.lk = _.W(() => !!this.A());
				this.aA = [];
				this.wMa = _.M(null);
				this.QNb = _.W(() => this.Bx() === "video" ? "Re-record" : this.kU() ? "Re-take screenshot" : "Re-take photo");
				this.jwb = _.W(() => this.Bx() === "video" ? "Video will be added to your prompt" : this.kU() ? "Screenshot will be added to your prompt" : "Photo will be added to your prompt");
				this.OMb = _.W(() => this.Bx() === "image" ? this.kU() ? "Take screenshot" : "Take photo" : this.lk() ? "Stop recording" : "Start recording");
			}
			Rb() {
				this.init();
			}
			Ba() {
				sYc(this);
			}
			reset() {
				r1(this);
			}
			Lo() {
				if (this.Bx() === "image") {
					var a;
					let e = (a = this.video()) == null ? void 0 : a.nativeElement;
					if (e) {
						a = document.createElement("canvas");
						var b = e.videoWidth, c = e.videoHeight, d = a.getContext("2d");
						d && (a.width = b, a.height = c, d.drawImage(e, 0, 0, b, c), this.dataUrl.set(a.toDataURL("image/jpeg", .8)), tYc(this));
					}
				} else this.zLa();
			}
			zLa() {
				if (this.lk()) sYc(this);
				else {
					var a, b = (a = this.video()) == null ? void 0 : a.nativeElement;
					b && this.stream && (a = new MediaRecorder(this.stream), a.addEventListener("dataavailable", (c) => this.aA.push(c.data)), a.addEventListener("stop", (c) => {
						var d = this;
						return _.x(function* () {
							var e = c.target.mimeType.split(";")[0], f = new Blob(d.aA, { type: e });
							d.H.set(e);
							d.dataUrl.set(yield _.eo(f));
							d.wMa.set(_.ld(f));
							d.aA = [];
						});
					}), a.start(), this.videoWidth.set(b.videoWidth), this.videoHeight.set(b.videoHeight), this.A.set(a));
				}
			}
			c4() {
				this.Wa.close({
					dataUrl: this.dataUrl(),
					mimeType: this.Bx() === "image" ? "image/jpeg" : this.H()
				});
			}
			init() {
				var a = this;
				return _.x(function* () {
					try {
						var b = (yield navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === "videoinput");
					} catch (d) {
						return;
					}
					var c = b.map((d) => d.getCapabilities().facingMode).filter((d) => !!d).flat();
					a.SW.set(c);
					b.length > 0 ? a.WAa.set(!0) : a.kU.set(!0);
					r1(a);
				});
			}
		};
		_.s1.J = function(a) {
			return new (a || _.s1)();
		};
		_.s1.ka = _.u({
			type: _.s1,
			da: [["ms-camera-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.video, rYc, 5);
				a & 2 && _.ki();
			},
			ha: 11,
			ia: 7,
			la: [
				["video", ""],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close",
					"matDialogClose",
					"",
					3,
					"iconName"
				],
				[
					"alt",
					"Camera image",
					3,
					"src"
				],
				[
					"controls",
					"",
					3,
					"width",
					"height"
				],
				[3, "src"],
				[1, "recording-toggle"],
				[1, "recording-indicator"],
				[1, "button-group"],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"aria-label",
					"Photo",
					3,
					"click",
					"active"
				],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"aria-label",
					"Video",
					3,
					"click",
					"active"
				],
				[
					"type",
					"button",
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Add to prompt",
					3,
					"click",
					"disabled"
				],
				[1, "text"],
				[1, "actions"],
				[
					"ms-button",
					"",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Camera",
					3,
					"disabled"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Camera",
					3,
					"click",
					"disabled"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Screenshot"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Screencast",
					3,
					"disabled"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Change camera",
					3,
					"disabled"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Screenshot",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Screencast",
					3,
					"click",
					"disabled"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Change camera",
					3,
					"click",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1), _.R(1, " Camera "), _.I(2, "button", 2), _.H(), _.F(3, "mat-dialog-content"), _.B(4, NXc, 2, 1)(5, RXc, 2, 2), _.I(6, "video", null, 0), _.H(), _.F(8, "mat-dialog-actions"), _.B(9, SXc, 4, 2)(10, aYc, 7, 3), _.H());
				a & 2 && (_.y(2), _.E("iconName", b.S.ac), _.y(2), _.C(b.dataUrl() ? 4 : 5), _.y(2), _.P("hidden", b.dataUrl() != null), _.y(2), _.P("with-content", b.dataUrl() != null), _.y(), _.C(b.dataUrl() ? 9 : 10));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.JD,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.fF,
				_.IC
			],
			styles: ["[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{border-radius:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;max-width:100%;min-height:0}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .recording-indicator[_ngcontent-%COMP%]{background:var(--color-recorder-active);border-radius:50%;height:16px;position:absolute;right:32px;top:8px;width:16px;z-index:1}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .recording-toggle[_ngcontent-%COMP%]{bottom:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;right:0;z-index:1}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .recording-toggle[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;padding:8px}[_nghost-%COMP%]   .mat-mdc-dialog-actions.with-content[_ngcontent-%COMP%]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}[_nghost-%COMP%]   .mat-mdc-dialog-actions[_ngcontent-%COMP%]:not(.with-content){-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;row-gap:8px}[_nghost-%COMP%]   .mat-mdc-dialog-actions[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}[_nghost-%COMP%]   .mat-mdc-dialog-actions[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-on-surface);margin-right:8px}"]
		});
		var uYc = new _.$y("45773733", !1);
		var vYc = new Map([
			[0, { title: "Start using Live API in Google AI Studio" }],
			[2, { title: "Start using Robotics model in Google AI Studio" }],
			[1, {
				title: "Start creating with media in Google AI Studio",
				imageUrl: "https://www.gstatic.com/aistudio/dialogs/upload_copyright_dialog_image.png"
			}]
		]), t1 = class {
			constructor() {
				this.A = _.m(_.Op);
				this.Ia = _.m(_.oF);
				this.Wa = _.m(_.kC);
				this.F = _.m(_.qC);
				this.fCb = this.A.getFlag(_.mF);
				this.OIb = this.A.getFlag(uYc);
				this.cPa = this.A.getFlag(_.cob);
				this.bsa = qYc;
				var a;
				if (((a = this.F) == null ? void 0 : a.type) === 0) a = 0;
				else {
					var b;
					a = this.cPa && ((b = this.F) == null ? void 0 : b.type) === 2 ? 2 : 1;
				}
				this.Vxa = a;
				this.Rxa = vYc.get(this.Vxa);
				this.ve = { zjb: 265442 };
			}
		};
		t1.J = function(a) {
			return new (a || t1)();
		};
		t1.ka = _.u({
			type: t1,
			da: [["ms-copyright-acknowledgement-dialog"]],
			ha: 19,
			ia: 7,
			la: [
				["bidiBody", ""],
				["uploadMediaBody", ""],
				["roboticsBody", ""],
				[1, "dialog-container"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[1, "dialog-content-container"],
				[1, "dialog-image-container"],
				[1, "dialog-content"],
				[3, "ngTemplateOutlet"],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"mat-dialog-close"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Agree to the copyright acknowledgement",
					"cdkFocusInitial",
					"",
					3,
					"click",
					"ve",
					"veClick",
					"veImpression"
				],
				[
					"alt",
					"Copyright acknowledgement dialog image",
					3,
					"src"
				],
				[
					"href",
					"https://ai.google.dev/gemini-api/terms",
					"target",
					"_blank"
				],
				[
					"href",
					"https://policies.google.com/terms/generative-ai/use-policy",
					"target",
					"_blank"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 3)(1, "h2", 4), _.R(2), _.H(), _.F(3, "div", 5), _.B(4, bYc, 2, 1, "div", 6), _.F(5, "div", 7), _.B(6, cYc, 1, 1, "ng-container", 8)(7, dYc, 1, 1, "ng-container", 8)(8, eYc, 1, 1, "ng-container", 8), _.H()(), _.F(9, "mat-dialog-actions", 9), _.B(10, fYc, 2, 1, "button", 10), _.F(11, "button", 11), _.J("click", function() {
					switch (b.Vxa) {
						case 0:
							oYc(b.Ia);
							break;
						case 2:
							b.cPa && pYc(b.Ia);
							break;
						case 1: nYc(b.Ia);
					}
					b.Wa.close(!0);
				}), _.R(12, " Acknowledge "), _.H()()(), _.z(13, gYc, 7, 0, "ng-template", null, 0, _.Ii)(15, jYc, 11, 1, "ng-template", null, 1, _.Ii)(17, kYc, 7, 0, "ng-template", null, 2, _.Ii));
				if (a & 2) {
					let c;
					_.y(2);
					_.U(b.Rxa.title);
					_.y(2);
					_.C(b.Rxa.imageUrl ? 4 : -1);
					_.y(2);
					_.C((c = b.Vxa) === b.bsa.LO ? 6 : c === b.bsa.Asb ? 7 : c === b.bsa.qpb ? 8 : -1);
					_.y(4);
					_.C(b.fCb ? 10 : -1);
					_.y();
					_.E("ve", b.ve.zjb)("veClick", !0)("veImpression", !0);
				}
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.OD,
				_.yA,
				_.nz,
				_.Cz,
				_.Bz
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.dialog-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:512px}@media screen and (max-width:600px){.dialog-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:24px}}.dialog-content[_ngcontent-%COMP%]{margin-top:20px}.dialog-content-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 24px 16px}.dialog-content-container[_ngcontent-%COMP%]   .dialog-image-container[_ngcontent-%COMP%]{border-radius:12px;-webkit-clip-path:border-box;clip-path:border-box;background-color:var(--color-copyright-acknowledgement-background)}.dialog-content-container[_ngcontent-%COMP%]   .dialog-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;margin-left:16px;margin-top:16px;margin-bottom:-40px}mat-dialog-actions[_ngcontent-%COMP%]{margin:0 8px 8px 0}"]
		});
		var wYc;
		wYc = function(a, b = 1) {
			return b === 0 ? !a.Ia.Na() : b === 2 ? a.F && !a.Ia.Ta() : !a.Ia.Xa();
		};
		_.u1 = function(a, b = 1) {
			return _.x(function* () {
				if (wYc(a, b)) {
					_.Rn(a.A, "COPYRIGHT", "Opened Copyright Dialog");
					var c = a.dialog.open(t1, {
						id: "copyright-acknowledgement-dialog",
						yi: !0,
						data: { type: b }
					});
					c = yield _.pf(_.jC(c));
					_.Rn(a.A, "COPYRIGHT", "Acknowledged Copyright");
					return c;
				}
				return Promise.resolve(!0);
			});
		};
		_.v1 = class {
			constructor() {
				this.Ia = _.m(_.oF);
				this.dialog = _.m(_.rC);
				this.A = _.m(_.Ou);
				this.H = _.m(_.Op);
				this.F = this.H.getFlag(_.cob);
			}
		};
		_.v1.J = function(a) {
			return new (a || _.v1)();
		};
		_.v1.sa = _.Cd({
			token: _.v1,
			factory: _.v1.J,
			wa: "root"
		});
		var zYc, EYc;
		_.xYc = function() {
			Object.assign({}, {}, { read: _.Jf });
			return _.hi();
		};
		_.yYc = function(a) {
			switch (a) {
				case 0: return 200;
				case 3:
				case 11: return 400;
				case 16: return 401;
				case 7: return 403;
				case 5: return 404;
				case 6:
				case 10: return 409;
				case 9: return 412;
				case 8: return 429;
				case 1: return 499;
				case 15:
				case 13:
				case 2: return 500;
				case 12: return 501;
				case 14: return 503;
				case 4: return 504;
				default: return 0;
			}
		};
		zYc = function(a) {
			return a.mimeType === "application/vnd.google-apps.folder";
		};
		_.AYc = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		_.BYc = function(a, b) {
			return a.F.Xm.pipe(_.Qg(), _.ch((c) => c ? b() : _.zf(() => _.pF(a.F)).pipe(_.ch((d) => d ? b() : _.Ef))));
		};
		_.CYc = function(a, b = {}) {
			return _.BYc(a, () => a.C_(b));
		};
		_.DYc = function(a, b, c, d, e) {
			return _.BYc(a, () => a.A.A).pipe(_.uf((f) => f.getId()), _.ch((f) => _.qH(a.A, c, b, d, [f], !1, e)));
		};
		EYc = function(a, b) {
			var c = b.id;
			return c ? zYc(b) ? _.zf(() => _.x(function* () {
				var d = [];
				b.parents = [];
				for (var e = [c]; e.length;) {
					var f = e.pop();
					f = yield _.qf(_.Svb(a.A, `'${f}' in parents and trashed=false`)).catch(() => {
						a.H.error("Error fetching files in folder.");
						return [];
					});
					for (let g of f) {
						let k, p, r;
						f = {
							id: g.id,
							name: (k = g.name) != null ? k : "",
							mimeType: (p = g.mimeType) != null ? p : "",
							parents: [c],
							url: (r = g.webViewLink) != null ? r : ""
						};
						let v = f.id;
						zYc(f) && v ? e.push(v) : d.push(_.mf(f));
					}
				}
				return d;
			})).pipe(_.wf((d) => d.length === 0 ? (a.H.error("No files found in folder."), _.nf(() => Error("Wh"))) : _.Ff(d).pipe(_.wf((e) => e)))) : _.mf(b) : _.Ef;
		};
		_.w1 = class {
			constructor() {
				this.F = _.m(_.rF);
				this.I = _.m(_.JK);
				this.A = _.m(_.sH);
				this.H = _.m(_.iC);
			}
			C_(a = {}) {
				var b = [
					14,
					15,
					19,
					20,
					12,
					23,
					7,
					22,
					21,
					8,
					11,
					0
				];
				(a == null ? 0 : a.ubb) || b.push(1);
				(a == null ? 0 : a.wbb) || b.push(2);
				(a == null ? 0 : a.sbb) || b.push(16);
				(a == null ? 0 : a.vbb) || b.push(9);
				return this.A.A.pipe(_.Qg(), _.ch((c) => {
					c = c.getId();
					var d;
					return this.I.C_(!0, (d = a.WE) != null ? d : 20, b, !(a == null || !a.cab), c);
				}), _.Qg(), _.Gf((c) => !(c == null || !c.data)), _.wf((c) => _.Ff(c.data.map((d) => EYc(this, d))).pipe(_.wf((d) => d))), _.Dla());
			}
		};
		_.w1.J = function(a) {
			return new (a || _.w1)();
		};
		_.w1.sa = _.Cd({
			token: _.w1,
			factory: _.w1.J,
			wa: "root"
		});
		var n4c;
		n4c = function(a, b) {
			if (b.clipboardData) {
				var c = [...b.clipboardData.items].filter((d) => d.kind === "file").map((d) => d.getAsFile());
				c.length !== 0 && (b.preventDefault(), a.XEa.emit(c));
			}
		};
		_.b2 = class {
			constructor() {
				this.XEa = _.Ki();
				this.s5a = _.V(!1);
				this.t5a = _.V(!1);
			}
			oT(a) {
				if (!this.s5a() && (n4c(this, a), a.clipboardData && this.t5a())) {
					var b = a.clipboardData.getData("text/plain");
					b.length > 25e3 && (a.preventDefault(), this.XEa.emit([new File([b], `Paste ${_.Qk(Date.now(), "MMMM dd, yyyy - h:mma", "en-US")}`, { type: "text/plain" })]));
				}
			}
		};
		_.b2.J = function(a) {
			return new (a || _.b2)();
		};
		_.b2.Oa = _.We({
			type: _.b2,
			da: [[
				"",
				"msFileCopyPaste",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("paste", function(c) {
					return b.oT(c);
				});
			},
			inputs: {
				s5a: [1, "msPasteDisabled"],
				t5a: [1, "msPasteLargeTextAsFile"]
			},
			outputs: { XEa: "msPaste" }
		});
		var o4c, p4c, q4c;
		o4c = ["content"];
		p4c = function(a) {
			var b = a.Ga.nativeElement;
			a.u3a.emit(b.scrollHeight > b.clientHeight);
		};
		q4c = function(a) {
			var b = a.Ga.nativeElement;
			a.mk.emit(b.scrollTop >= b.scrollHeight - b.clientHeight);
		};
		_.c2 = class {
			constructor() {
				this.content = _.Ni.required("content");
				this.disabled = _.V(!1);
				this.smooth = _.V(!1);
				this.r9a = _.V(!1);
				this.v3a = _.M(!1);
				this.u3a = _.Ki();
				this.v9a = _.Ki();
				this.u9a = _.Ki();
				this.mk = _.Ki();
				this.Ga = _.m(_.Jf);
				this.I = new ResizeObserver(() => {
					this.disabled() || (this.eba(), p4c(this), q4c(this));
				});
				this.A = this.H = !1;
				this.R = this.F = 0;
			}
			Rb() {
				this.r9a() && this.eba(!0);
				this.I.observe(this.content().nativeElement);
				this.I.observe(this.Ga.nativeElement);
				p4c(this);
				q4c(this);
			}
			Ba() {
				this.I.disconnect();
			}
			p_() {
				var a = this.Ga.nativeElement;
				this.smooth() && Math.max(0, Math.floor(a.scrollTop)) === 0 && this.F !== 0 && (a.scrollTop = this.R);
				q4c(this);
			}
			Kp() {
				var a = this.Ga.nativeElement, b = a.scrollHeight - a.clientHeight;
				a = Math.max(0, Math.floor(a.scrollTop));
				var c = a >= b;
				!this.A && this.F <= b && this.F > a && (this.H = !0);
				c && (this.H = !1, !this.A && b > 1 && a > this.F && this.u9a.emit());
				!this.A && this.F > 0 && a === 0 && this.v9a.emit();
				this.A = !1;
				this.F = a;
				this.v3a.set(a > 0);
				this.mk.emit(c);
			}
			eba(a = !1) {
				a && (this.H = !1);
				if (!this.H) {
					var b = this.Ga.nativeElement, c = b.scrollHeight - b.clientHeight;
					b.scrollTop >= c || (this.R = c, this.A = !0, this.smooth() && !a ? b.scrollTo({
						top: c,
						behavior: "smooth"
					}) : b.scrollTop = c, this.mk.emit(!0));
				}
			}
			get scrollTop() {
				return this.Ga.nativeElement.scrollTop;
			}
			set scrollTop(a) {
				this.scrollTop !== a && (this.A = !0);
				this.Ga.nativeElement.scrollTop = a;
				q4c(this);
			}
			get scrollHeight() {
				return this.Ga.nativeElement.scrollHeight;
			}
		};
		_.c2.J = function(a) {
			return new (a || _.c2)();
		};
		_.c2.ka = _.u({
			type: _.c2,
			da: [["ms-autoscroll-container"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.content, o4c, 5);
				a & 2 && _.ki();
			},
			Ua: 2,
			Ja: function(a, b) {
				a & 1 && _.J("scroll", function(c) {
					return b.Kp(c);
				});
				a & 2 && _.pi("--ms-autoscroll-container-scrolled", b.v3a() ? 1 : 0);
			},
			inputs: {
				disabled: [1, "disabled"],
				smooth: [1, "smooth"],
				r9a: [1, "scrollToBottomOnInit"]
			},
			outputs: {
				u3a: "isScrollable",
				v9a: "scrolledToTop",
				u9a: "scrolledToBottom",
				mk: "isScrolledBottom"
			},
			fc: ["*"],
			ha: 3,
			ia: 0,
			la: [["content", ""]],
			template: function(a) {
				a & 1 && (_.Xh(), _.Dh(0, "div", null, 0), _.Yh(2), _.Eh());
			},
			dependencies: [_.tz],
			styles: ["[_nghost-%COMP%]{overflow:auto;width:100%}.sticky-content[_nghost-%COMP%]{-webkit-transform:translateZ(0)}.hide-scrollbar[_nghost-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbar[_nghost-%COMP%]::-webkit-scrollbar{display:none}"]
		});
		var r4c, s4c, t4c, w4c;
		r4c = function(a) {
			return Math.pow(4 * a * (1 - a), 10);
		};
		s4c = function(a) {
			return _.x(function* () {
				var b, c, d;
				return _.Bv(`${(b = _.Z(a, _.Uu, 1)) == null ? void 0 : _.Ru(b)} ${(c = _.Z(a, _.Uu, 1)) == null ? void 0 : (d = c.getData()) == null ? void 0 : _.lc(d)}`);
			});
		};
		t4c = function() {
			var a = new _.e5a();
			return _.Uc(a, 1, "ERROR_NO_AUDIO");
		};
		_.u4c = {
			kOa: 0,
			zYb: 1,
			0: "CTRL_ENTER_SUBMITS",
			1: "ENTER_SUBMITS"
		};
		_.v4c = function(a) {
			return a.key === "Enter" && a.altKey && !a.isComposing;
		};
		w4c = function(a) {
			var b = _.Aa();
			return b && a.metaKey || !b && a.ctrlKey;
		};
		_.d2 = function(a, b) {
			return _.lp() && b.key === "Enter" && !b.altKey && !b.ctrlKey && !b.metaKey && !b.shiftKey || b.isComposing || _.v4c(b) ? !1 : a.enterKeyBehavior() === 0 ? b.key === "Enter" && w4c(b) : b.key === "Enter" && !b.shiftKey && !w4c(b);
		};
		_.e2 = class {
			constructor() {
				this.Ia = _.m(_.oF);
				this.enterKeyBehavior = _.W(() => this.Ia.enterKeyBehavior() === 1 ? 1 : 0);
			}
		};
		_.e2.J = function(a) {
			return new (a || _.e2)();
		};
		_.e2.sa = _.Cd({
			token: _.e2,
			factory: _.e2.J,
			wa: "root"
		});
		var x4c = function(a, b) {
			return _.x(function* () {
				var c = b.type, d = yield b.arrayBuffer();
				c = _.Tu(_.Su(new _.Uu(), c), new Uint8Array(d));
				d = new _.d5a();
				c = _.ln(d, _.Uu, 1, c);
				d = yield _.Cp(a.A, yield s4c(c));
				_.Uc(c, 2, d);
				try {
					var e = a.F;
					return yield _.$q(e.A, e.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GeminiSpeechToText", c, {}, _.f5a);
				} catch (f) {
					throw f;
				}
			});
		}, y4c = function(a, b) {
			return _.x(function* () {
				var c = new Audio();
				return new Promise((d) => {
					c.src = _.ld(b).toString();
					c.addEventListener("error", () => _.x(function* () {
						d(t4c());
					}));
					c.addEventListener("canplay", () => _.x(function* () {
						c.duration >= .5 ? d(x4c(a, b)) : d(t4c());
					}));
				});
			});
		}, f2 = class {
			constructor() {
				this.F = _.m(_.Zq);
				this.A = _.m(_.Iw);
			}
		};
		f2.J = function(a) {
			return new (a || f2)();
		};
		f2.sa = _.Cd({
			token: f2,
			factory: f2.J,
			wa: "root"
		});
		var z4c, B4c, C4c, A4c;
		z4c = ["canvas"];
		B4c = function(a) {
			a.lk.set(!1);
			a.A && (a.A.onstop = () => _.x(function* () {
				var b = new Blob(a.audioChunks, { type: a.mimeType });
				a.A.stream.getTracks().forEach((c) => {
					c.stop();
				});
				a.q9.set(!0);
				yield A4c(a, b);
				a.q9.set(!1);
				window.cancelAnimationFrame(a.ea || 0);
			}), a.A.stop());
		};
		C4c = function(a) {
			_.x(function* () {
				a.lk.set(!0);
				a.error.set(!1);
				_.Rn(a.aa, "RUN", "Run Speech Prompt");
				try {
					var b = yield navigator.mediaDevices.getUserMedia({ audio: { deviceId: a.Ia.audioDevice() } });
				} catch (d) {
					a.lk.set(!1);
					a.error.set(!0);
					return;
				}
				a.R = new AudioContext();
				a.F = a.R.createAnalyser();
				a.F.fftSize = 2048;
				a.F.smoothingTimeConstant = .8;
				var c = new Uint8Array(a.F.frequencyBinCount);
				a.H = c;
				a.fa = a.R.createMediaStreamSource(b);
				a.fa.connect(a.F);
				a.mimeType = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
				a.A = new MediaRecorder(b, { mimeType: a.mimeType });
				a.audioChunks.length = 0;
				a.A.ondataavailable = (d) => {
					d.data.size > 0 && a.audioChunks.push(d.data);
				};
				a.A.start();
				a.wp() || a.animate();
			});
		};
		A4c = function(a, b) {
			return _.x(function* () {
				try {
					let c = yield y4c(a.ma, b);
					(_.l(c, 1) || "") !== "ERROR_NO_AUDIO" && a.text.emit(_.l(c, 1) || "");
				} catch (c) {
					a.error.set(!0);
				}
			});
		};
		_.g2 = class {
			qz() {
				this.I.set(window.devicePixelRatio);
			}
			constructor() {
				this.ma = _.m(f2);
				this.Ia = _.m(_.oF);
				this.aa = _.m(_.Ou);
				this.wp = _.V(!1);
				this.dza = _.V(!1);
				this.disabled = _.V(!1);
				this.Ag = _.V("Speech to text");
				this.ve = { nhb: 282217 };
				this.canvas = _.Ni.required("canvas");
				this.lk = _.M(!1);
				this.q9 = _.M(!1);
				this.error = _.M(!1);
				this.audioChunks = [];
				this.I = _.M(window.devicePixelRatio);
				this.mimeType = "audio/webm";
				this.text = _.Ki();
				this.X = (a) => {
					this.ana(a);
				};
				this.U = (a) => {
					this.ana(a);
				};
				this.icon = _.W(() => {
					if (this.error()) return "warning";
					if (!this.q9() && !this.lk()) return "mic";
				});
				_.Fk([this.canvas, this.I], () => {
					var a = this.canvas().nativeElement;
					a.width = 32 * this.I();
					a.height = 32 * this.I();
				});
			}
			onClick(a) {
				this.timeout && clearTimeout(this.timeout);
				_.lp() && this.dza() || (a.preventDefault(), this.lk() ? B4c(this) : C4c(this));
			}
			eGa(a) {
				var b = this;
				return _.x(function* () {
					if (_.lp() && b.dza()) {
						a.preventDefault();
						b.timeout = setTimeout(() => {
							window.navigator.vibrate(100);
							C4c(b);
						}, 400);
						let c = a.currentTarget;
						c.addEventListener("pointerup", b.X);
						c.addEventListener("pointercancel", b.U);
					}
				});
			}
			ana(a) {
				var b = this;
				return _.x(function* () {
					if (_.lp()) {
						a.preventDefault();
						let c = a.currentTarget;
						c.removeEventListener("pointerup", b.X);
						c.removeEventListener("pointercancel", b.U);
						B4c(b);
					}
				});
			}
			onContextMenu(a) {
				a.preventDefault();
			}
			animate() {
				if (this.F && this.H) {
					let g = this.canvas().nativeElement;
					this.F.getByteFrequencyData(this.H);
					let k = Array(8).fill(0);
					var a = Array(8).fill(0), b = Array(8).fill(Number.MAX_SAFE_INTEGER), c = Array(8).fill(Number.MIN_SAFE_INTEGER);
					for (var d = 0; d < this.H.length; d++) {
						var e = -this.H[d];
						if (isFinite(e)) {
							var f = Math.floor(Math.log2(1 + d) / Math.log2(this.H.length) * 7);
							k[f] += e;
							a[f]++;
							b[f] = Math.min(b[f], e);
							c[f] = Math.max(c[f], e);
						}
					}
					for (b = 0; b < k.length; b++) k[b] /= a[b];
					a = window.devicePixelRatio;
					b = g.getContext("2d");
					b.clearRect(0, 0, g.width, g.height);
					b.lineCap = "round";
					b.lineWidth = 3 * a;
					for (c = 0; c < 5; c++) d = -k[c] / 10 * a, this.lk() ? b.strokeStyle = "red" : (e = c * 2 * Math.PI / 20, f = -performance.now() / 1e3, b.strokeStyle = `rgba(255, 0, 0, ${r4c(.5 + .5 * Math.sin(e + f))})`), b.beginPath(), b.moveTo((8 + c * 4) * a, g.height / 2 - d / 2), b.lineTo((8 + c * 4) * a, g.height / 2 + d / 2), b.stroke();
				}
				this.ea = window.requestAnimationFrame(() => {
					this.animate();
				});
			}
		};
		_.g2.J = function(a) {
			return new (a || _.g2)();
		};
		_.g2.ka = _.u({
			type: _.g2,
			da: [["ms-stt-button"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.canvas, z4c, 5);
				a & 2 && _.ki();
			},
			Ja: function(a, b) {
				a & 1 && _.J("resize", function(c) {
					return b.qz(c);
				}, _.Te);
			},
			inputs: {
				wp: [1, "disableAnimations"],
				dza: [1, "enableLongPress"],
				disabled: [1, "disabled"],
				Ag: [1, "tooltipLabel"]
			},
			outputs: { text: "text" },
			ha: 3,
			ia: 9,
			la: [["canvas", ""], [
				"ms-button",
				"",
				"type",
				"button",
				"color",
				"primary",
				"variant",
				"filter-chip",
				3,
				"pointerdown",
				"contextmenu",
				"click",
				"matTooltip",
				"disabled",
				"iconName",
				"ve",
				"veClick",
				"veImpression"
			]],
			template: function(a, b) {
				if (a & 1) {
					let c = _.n();
					_.F(0, "button", 1);
					_.J("pointerdown", function(d) {
						return b.eGa(d);
					})("contextmenu", function(d) {
						return b.onContextMenu(d);
					})("click", function(d) {
						_.q(c);
						b.onClick(d);
						return _.t(d.stopPropagation());
					});
					_.I(1, "canvas", null, 0);
					_.H();
				}
				a & 2 && (_.P("visible", b.lk() || b.q9()), _.E("matTooltip", b.Ag())("disabled", b.disabled() || b.q9())("iconName", b.icon())("ve", b.ve.nhb)("veClick", !0)("veImpression", !0), _.wh("aria-label", b.Ag()));
			},
			dependencies: [
				_.Yy,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{position:relative}button[ms-button].ms-button-filter-chip[_ngcontent-%COMP%]{padding:8px 6px;background:transparent;border-color:var(--color-v3-outline);width:32px}button[ms-button].ms-button-filter-chip[_ngcontent-%COMP%]:hover{background:var(--color-v3-button-container-high)}canvas[_ngcontent-%COMP%]{position:absolute;inset:0;width:32px;height:32px;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;opacity:0}span[_ngcontent-%COMP%]{-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;opacity:1}.visible[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{opacity:1}.visible[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:0}"]
		});
		var HXc, IXc, JXc, KXc, l1;
		_.GXc = function(a) {
			var b = Math.random;
			for (let c = a.length - 1; c > 0; c--) {
				let d = Math.floor(b() * (c + 1)), e = a[c];
				a[c] = a[d];
				a[d] = e;
			}
		};
		HXc = ["scrollContainer"];
		IXc = ["contentContainer"];
		JXc = ["chevronLeftButton"];
		KXc = ["chevronRightButton"];
		l1 = function(a) {
			var b = a.q9a().nativeElement, c = a.Ey().nativeElement, d = a.iWa().nativeElement;
			a = a.jWa().nativeElement;
			var e = c.scrollLeft + c.clientWidth >= c.scrollWidth - 1;
			c.scrollLeft <= 0 ? (d.classList.remove("visible"), b.classList.remove("show-left-gradient")) : (d.classList.add("visible"), b.classList.add("show-left-gradient"));
			e ? (a.classList.remove("visible"), b.classList.remove("show-right-gradient")) : (a.classList.add("visible"), b.classList.add("show-right-gradient"));
		};
		_.m1 = class {
			constructor() {
				this.S = _.Dk;
				this.Eja = _.Li.required();
				this.tKa = _.Li(!1, Object.assign({}, {}, { transform: _.aj }));
				this.dHb = _.W(() => this.Eja() === "surface");
				this.eHb = _.W(() => this.Eja() === "surface-container");
				this.fHb = _.W(() => this.Eja() === "surface-container-high");
				this.q9a = _.Ni.required("scrollContainer");
				this.Ey = _.Ni.required("contentContainer");
				this.iWa = _.Ni.required("chevronLeftButton");
				this.jWa = _.Ni.required("chevronRightButton");
				this.A = new ResizeObserver(() => {
					l1(this);
				});
				this.F = new MutationObserver(() => {
					requestAnimationFrame(() => {
						l1(this);
					});
				});
			}
			Rb() {
				var a = this.Ey().nativeElement;
				this.A.observe(a);
				this.F.observe(a, {
					childList: !0,
					subtree: !0
				});
				a.addEventListener("wheel", this.xGa.bind(this), { passive: !1 });
				requestAnimationFrame(() => {
					l1(this);
				});
			}
			xGa(a) {
				a.deltaX || (this.Ey().nativeElement.scrollLeft += a.deltaY, a.preventDefault());
			}
			Ba() {
				this.A.disconnect();
				this.F.disconnect();
			}
		};
		_.m1.J = function(a) {
			return new (a || _.m1)();
		};
		_.m1.ka = _.u({
			type: _.m1,
			da: [["ms-horizontal-scroll"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.q9a, HXc, 5)(b.Ey, IXc, 5)(b.iWa, JXc, 5)(b.jWa, KXc, 5);
				a & 2 && _.ki(4);
			},
			Ua: 6,
			Ja: function(a, b) {
				a & 2 && _.P("background-surface", b.dHb())("background-surface-container", b.eHb())("background-surface-container-high", b.fHb());
			},
			inputs: {
				Eja: [1, "gradientType"],
				tKa: [1, "smallChevrons"]
			},
			fc: ["*"],
			ha: 9,
			ia: 4,
			la: [
				["scrollContainer", ""],
				["chevronLeftButton", ""],
				["contentContainer", ""],
				["chevronRightButton", ""],
				[1, "scroll-container"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Scroll left",
					1,
					"chevron-btn",
					"left",
					3,
					"click",
					"iconName",
					"size"
				],
				[
					1,
					"content-container",
					3,
					"scroll"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Scroll right",
					1,
					"chevron-btn",
					"right",
					3,
					"click",
					"iconName",
					"size"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(), _.F(0, "div", 4, 0)(2, "button", 5, 1), _.J("click", function() {
					var c = b.Ey().nativeElement;
					c.scrollLeft -= c.getBoundingClientRect().width * .8;
					l1(b);
				}), _.H(), _.F(4, "div", 6, 2), _.J("scroll", function() {
					return l1(b);
				}), _.Yh(6), _.H(), _.F(7, "button", 7, 3), _.J("click", function() {
					var c = b.Ey().nativeElement;
					c.scrollLeft += c.getBoundingClientRect().width * .8;
					l1(b);
				}), _.H()());
				a & 2 && (_.y(2), _.E("iconName", b.S.EV)("size", b.tKa() ? "small" : "default"), _.y(5), _.E("iconName", b.S.gh)("size", b.tKa() ? "small" : "default"));
			},
			dependencies: [_.Yy],
			styles: ["[_nghost-%COMP%]{--horizontal-scroll-gap:8px;display:block;width:100%;overflow:hidden}.background-surface[_nghost-%COMP%]{--background:var(--color-v3-surface)}.background-surface-container[_nghost-%COMP%]{--background:var(--color-v3-surface-container)}.background-surface-container-high[_nghost-%COMP%]{--background:var(--color-v3-surface-container-high)}.scroll-container[_ngcontent-%COMP%]{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.scroll-container[_ngcontent-%COMP%]:after, .scroll-container[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;bottom:0;width:60px;height:100%;z-index:1;pointer-events:none;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;opacity:0}.scroll-container[_ngcontent-%COMP%]:before{left:0;background:-webkit-gradient(linear,left top,right top,color-stop(60%,var(--background)),to(transparent));background:-webkit-linear-gradient(left,var(--background) 60%,transparent);background:linear-gradient(to right,var(--background) 60%,transparent)}.scroll-container[_ngcontent-%COMP%]:after{right:0;background:-webkit-gradient(linear,right top,left top,color-stop(60%,var(--background)),to(transparent));background:-webkit-linear-gradient(right,var(--background) 60%,transparent);background:linear-gradient(to left,var(--background) 60%,transparent)}.scroll-container.show-left-gradient[_ngcontent-%COMP%]:before{opacity:1}.scroll-container.show-right-gradient[_ngcontent-%COMP%]:after{opacity:1}.disable-blur-in-tests[_nghost-%COMP%]   .scroll-container[_ngcontent-%COMP%]:after, .disable-blur-in-tests[_nghost-%COMP%]   .scroll-container[_ngcontent-%COMP%]:before{display:none}.content-container[_ngcontent-%COMP%]{scroll-behavior:smooth;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-padding-inline:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;gap:var(--horizontal-scroll-gap,8px);overflow-x:auto;width:100%;-ms-overflow-style:none;scrollbar-width:none}.content-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.chevron-btn[_ngcontent-%COMP%]{color:var(--color-v3-text-on-button);cursor:pointer;opacity:0;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity .3s ease,visibility .3s ease;transition:opacity .3s ease,visibility .3s ease;visibility:hidden;z-index:2}.chevron-btn.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible}.chevron-btn.left[_ngcontent-%COMP%]{left:0}.chevron-btn.right[_ngcontent-%COMP%]{right:0}.disable-smooth-scroll[_nghost-%COMP%]   .content-container[_ngcontent-%COMP%]{scroll-behavior:auto}"]
		});
		var vWc, uWc, tWc, sWc, xWc, yWc, W0, zWc, AWc, BWc, X0, DWc, EWc, GWc, FWc, HWc, JWc, IWc, LWc, Z0, MWc, NWc, OWc;
		vWc = function(a) {
			var b = a.cloneNode(!0), c = b.querySelectorAll("[id]"), d = a.nodeName.toLowerCase();
			b.removeAttribute("id");
			for (let e = 0; e < c.length; e++) c[e].removeAttribute("id");
			d === "canvas" ? sWc(a, b) : (d === "input" || d === "select" || d === "textarea") && tWc(a, b);
			uWc("canvas", a, b, sWc);
			uWc("input, textarea, select", a, b, tWc);
			return b;
		};
		uWc = function(a, b, c, d) {
			b = b.querySelectorAll(a);
			if (b.length) for (a = c.querySelectorAll(a), c = 0; c < b.length; c++) d(b[c], a[c]);
		};
		tWc = function(a, b) {
			b.type !== "file" && (b.value = a.value);
			b.type === "radio" && b.name && (b.name = `mat-clone-${b.name}-${wWc++}`);
		};
		sWc = function(a, b) {
			if (b = b.getContext("2d")) try {
				b.drawImage(a, 0, 0);
			} catch (c) {}
		};
		xWc = function(a) {
			a = a.getBoundingClientRect();
			return {
				top: a.top,
				right: a.right,
				bottom: a.bottom,
				left: a.left,
				width: a.width,
				height: a.height,
				x: a.x,
				y: a.y
			};
		};
		yWc = function(a, b, c) {
			var d = a.bottom, e = a.left, f = a.right;
			return c >= a.top && c <= d && b >= e && b <= f;
		};
		W0 = function(a, b, c) {
			a.top += b;
			a.bottom = a.top + a.height;
			a.left += c;
			a.right = a.left + a.width;
		};
		zWc = function(a, b, c) {
			var d = a.right, e = a.bottom, f = a.left, g = a.width * .05, k = a.height * .05;
			return c > a.top - k && c < e + k && b > f - g && b < d + g;
		};
		AWc = function(a, b) {
			a = a.ar;
			if (a.length === 1 && a[0].nodeType === b.ELEMENT_NODE) return a[0];
			var c = b.createElement("div");
			a.forEach((d) => c.appendChild(d));
			return c;
		};
		BWc = function(a, b, c) {
			for (let d in b) if (b.hasOwnProperty(d)) {
				let e = b[d];
				e ? a.setProperty(d, e, (c == null ? 0 : c.has(d)) ? "important" : "") : a.removeProperty(d);
			}
		};
		X0 = function(a, b) {
			var c = b ? "" : "none";
			BWc(a.style, {
				"touch-action": b ? "" : "none",
				"-webkit-user-drag": b ? "" : "none",
				"-webkit-tap-highlight-color": b ? "" : "transparent",
				"user-select": c,
				"-ms-user-select": c,
				"-webkit-user-select": c,
				"-moz-user-select": c
			});
		};
		DWc = function(a, b) {
			BWc(a.style, {
				position: b ? "" : "fixed",
				top: b ? "" : "0",
				opacity: b ? "" : "0",
				left: b ? "" : "-999em"
			}, CWc);
		};
		EWc = function(a, b) {
			return b && b != "none" ? a + " " + b : a;
		};
		GWc = function(a, b) {
			a.style.width = `${b.width}px`;
			a.style.height = `${b.height}px`;
			a.style.transform = FWc(b.left, b.top);
		};
		FWc = function(a, b) {
			return `translate3d(${Math.round(a)}px, ${Math.round(b)}px, 0)`;
		};
		HWc = function(a) {
			var b = a.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
			return parseFloat(a) * b;
		};
		JWc = function(a) {
			a = getComputedStyle(a);
			var b = IWc(a, "transition-property"), c = b.find((d) => d === "transform" || d === "all");
			if (!c) return 0;
			b = b.indexOf(c);
			c = IWc(a, "transition-duration");
			a = IWc(a, "transition-delay");
			return HWc(c[b]) + HWc(a[b]);
		};
		IWc = function(a, b) {
			return a.getPropertyValue(b).split(",").map((c) => c.trim());
		};
		LWc = function(a, b, c = {
			mia: 5,
			kaa: 5
		}) {
			var d = a.get(_.cm, null, { optional: !0 }) || a.get(_.Ig).Rr(null, null);
			return new KWc(b, c, a.get(_.Xk), a.get(_.th), a.get(_.Sl), a.get(Y0), d);
		};
		Z0 = function(a) {
			return a.type[0] === "t";
		};
		MWc = function(a) {
			a.preventDefault();
		};
		_.$0 = function(a, b, c) {
			b = Math.max(0, Math.min(a.length - 1, b));
			c = Math.max(0, Math.min(a.length - 1, c));
			if (b !== c) {
				for (var d = a[b], e = c < b ? -1 : 1; b !== c; b += e) a[b] = a[b + e];
				a[c] = d;
			}
		};
		NWc = function(a, b) {
			var c = a.top, d = a.bottom;
			a = a.height * .05;
			return b >= c - a && b <= c + a ? 1 : b >= d - a && b <= d + a ? 2 : 0;
		};
		OWc = function(a, b) {
			var c = a.left, d = a.right;
			a = a.width * .05;
			return b >= c - a && b <= c + a ? 1 : b >= d - a && b <= d + a ? 2 : 0;
		};
		var a1 = { capture: !0 }, PWc = {
			passive: !1,
			capture: !0
		}, b1 = class {};
		b1.J = function(a) {
			return new (a || b1)();
		};
		b1.ka = _.u({
			type: b1,
			da: [["ng-component"]],
			eb: ["cdk-drag-resets-container", ""],
			ha: 0,
			ia: 0,
			template: function() {},
			styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
			Ab: 2
		});
		var QWc = function(a, b) {
			a.I.has(b) || a.I.add(b);
		}, RWc = function(a, b) {
			a.H.add(b);
			a.H.size === 1 && a.qb.runOutsideAngular(() => {
				var c;
				(c = a.aa) == null || c.call(a);
				a.aa = a.U.listen(a.Fb, "touchmove", a.ta, PWc);
			});
		}, SWc = function(a, b) {
			a.A.update((c) => {
				var d = c.indexOf(b);
				return d > -1 ? (c.splice(d, 1), [...c]) : c;
			});
			a.A().length === 0 && a.ea();
		}, TWc = function(a, b) {
			a.H.delete(b);
			SWc(a, b);
			if (a.H.size === 0) {
				let c;
				(c = a.aa) == null || c.call(a);
			}
		}, UWc = function(a, b, c) {
			if (!(a.A().indexOf(b) > -1) && (a.na.load(b1), a.A.update((d) => [...d, b]), a.A().length === 1)) {
				c = c.type.startsWith("touch");
				let d = (f) => a.X.next(f), e = [[
					"scroll",
					(f) => a.ma.next(f),
					a1
				], [
					"selectstart",
					a.za,
					PWc
				]];
				c ? e.push([
					"touchend",
					d,
					a1
				], [
					"touchcancel",
					d,
					a1
				]) : e.push([
					"mouseup",
					d,
					a1
				]);
				c || e.push([
					"mousemove",
					(f) => a.R.next(f),
					PWc
				]);
				a.qb.runOutsideAngular(() => {
					a.fa = e.map(([f, g, k]) => a.U.listen(a.Fb, f, g, k));
				});
			}
		}, VWc = function(a, b) {
			var c = [a.ma];
			b && b !== a.Fb && c.push(new _.ef((d) => a.qb.runOutsideAngular(() => {
				var e = a.U.listen(b, "scroll", (f) => {
					a.A().length && d.next(f);
				}, a1);
				return () => {
					e();
				};
			})));
			return _.Ff(...c);
		}, WWc = function(a, b, c) {
			a.F != null || (a.F = new WeakMap());
			a.F.set(b, c);
		}, XWc = function(a, b) {
			var c;
			(c = a.F) == null || c.delete(b);
		}, YWc = function(a, b) {
			var c;
			return ((c = a.F) == null ? void 0 : c.get(b)) || null;
		}, Y0 = class {
			constructor() {
				this.qb = _.m(_.th);
				this.Fb = _.m(_.Xk);
				this.na = _.m(_.Zl);
				this.U = _.m(_.Ig).Rr(null, null);
				this.ma = new _.Wg();
				this.I = new Set();
				this.H = new Set();
				this.A = _.M([]);
				this.oa = (a) => a.Sc();
				this.F = null;
				this.R = new _.Wg();
				this.X = new _.Wg();
				this.za = (a) => {
					this.A().length > 0 && a.preventDefault();
				};
				this.ta = (a) => {
					this.A().length > 0 && (this.A().some(this.oa) && a.preventDefault(), this.R.next(a));
				};
			}
			Sc(a) {
				return this.A().indexOf(a) > -1;
			}
			Ba() {
				this.H.forEach((a) => TWc(this, a));
				this.I.forEach((a) => {
					this.I.delete(a);
				});
				this.F = null;
				this.ea();
				this.R.complete();
				this.X.complete();
			}
			ea() {
				var a;
				(a = this.fa) == null || a.forEach((b) => b());
				this.fa = void 0;
			}
		};
		Y0.J = function(a) {
			return new (a || Y0)();
		};
		Y0.sa = _.Re({
			token: Y0,
			factory: Y0.J
		});
		var c1 = new _.he("CDK_DRAG_PARENT");
		var ZWc;
		ZWc = new _.he("CdkDragHandle");
		_.d1 = class {
			get disabled() {
				return this.Oc;
			}
			set disabled(a) {
				this.Oc = a;
				this.Ik.next(this);
			}
			constructor() {
				this.element = _.m(_.Jf);
				this.A = _.m(c1, {
					optional: !0,
					eu: !0
				});
				this.F = _.m(Y0);
				this.Ik = new _.Wg();
				this.Oc = !1;
				var a;
				(a = this.A) == null || a.ea(this);
			}
			Rb() {
				if (!this.A) {
					let a = this.element.nativeElement.parentElement;
					for (; a;) {
						let b = YWc(this.F, a);
						if (b) {
							this.A = b;
							b.ea(this);
							break;
						}
						a = a.parentElement;
					}
				}
			}
			Ba() {
				var a;
				(a = this.A) == null || a.na(this);
				this.Ik.complete();
			}
		};
		_.d1.J = function(a) {
			return new (a || _.d1)();
		};
		_.d1.Oa = _.We({
			type: _.d1,
			da: [[
				"",
				"cdkDragHandle",
				""
			]],
			eb: [1, "cdk-drag-handle"],
			inputs: { disabled: [
				2,
				"cdkDragHandleDisabled",
				"disabled",
				_.aj
			] },
			features: [_.yi([{
				Da: ZWc,
				zb: _.d1
			}])]
		});
		var $Wc = new _.he("CDK_DRAG_CONFIG");
		var wWc = 0;
		var aXc = function(a, b) {
			var c = _.Kl(b);
			b = a.positions.get(c);
			if (!b) return null;
			b = b.RIa;
			if (c === a.Fb) {
				var d = window.scrollX;
				var e = window.scrollY;
			} else e = c.scrollTop, d = c.scrollLeft;
			var f = b.top - e, g = b.left - d;
			a.positions.forEach((k, p) => {
				k.hm && c !== p && c.contains(p) && W0(k.hm, f, g);
			});
			b.top = e;
			b.left = d;
			return {
				top: f,
				left: g
			};
		}, bXc = class {
			constructor(a) {
				this.Fb = a;
				this.positions = new Map();
			}
			clear() {
				this.positions.clear();
			}
			cache(a) {
				this.clear();
				this.positions.set(this.Fb, { RIa: {
					top: window.scrollY,
					left: window.scrollX
				} });
				a.forEach((b) => {
					this.positions.set(b, {
						RIa: {
							top: b.scrollTop,
							left: b.scrollLeft
						},
						hm: xWc(b)
					});
				});
			}
		};
		var cXc = new Set(["position"]), dXc = class {
			get element() {
				return this.A;
			}
			constructor(a, b, c, d, e, f, g, k, p, r) {
				this.Fb = a;
				this.ea = b;
				this.U = c;
				this.H = d;
				this.X = e;
				this.ma = f;
				this.R = g;
				this.I = k;
				this.na = p;
				this.aa = r;
				this.F = null;
			}
			attach(a) {
				this.A = this.fa();
				a.appendChild(this.A);
				"showPopover" in this.A && this.A.showPopover();
			}
			destroy() {
				this.A.remove();
				var a;
				(a = this.F) == null || a.destroy();
				this.A = this.F = null;
			}
			getBoundingClientRect() {
				return this.A.getBoundingClientRect();
			}
			Gr(a) {
				this.A.classList.add(a);
			}
			addEventListener(a, b) {
				return this.aa.listen(this.A, a, b);
			}
			fa() {
				var a = this.X, b = this.ma, c = a ? a.template : null;
				if (c && a) {
					let e = a.g_ ? this.H : null;
					c = a.Yg.wo(c, a.context);
					_.Bu(c);
					var d = AWc(c, this.Fb);
					this.F = c;
					a.g_ ? GWc(d, e) : d.style.transform = FWc(this.R.x, this.R.y);
				} else d = vWc(this.ea), GWc(d, this.H), this.I && (d.style.transform = this.I);
				BWc(d.style, {
					"pointer-events": "none",
					margin: "showPopover" in d ? "0 auto 0 0" : "0",
					position: "fixed",
					top: "0",
					left: "0",
					"z-index": this.na + ""
				}, cXc);
				X0(d, !1);
				d.classList.add("cdk-drag-preview");
				d.setAttribute("popover", "manual");
				d.setAttribute("dir", this.U);
				b && (Array.isArray(b) ? b.forEach((e) => d.classList.add(e)) : d.classList.add(b));
				return d;
			}
		};
		var eXc = { passive: !0 }, fXc = { passive: !1 }, gXc = {
			passive: !1,
			capture: !0
		}, CWc = new Set(["position"]), hXc = function(a, b) {
			var c = _.Ol(b);
			if (c !== a.A) {
				a.yL();
				let d = a.zd;
				a.GL = a.qb.runOutsideAngular(() => [
					d.listen(c, "mousedown", a.JA, fXc),
					d.listen(c, "touchstart", a.JA, eXc),
					d.listen(c, "dragstart", a.iNa, fXc)
				]);
				a.na = void 0;
				a.A = c;
			}
			typeof SVGElement !== "undefined" && a.A instanceof SVGElement && (a.cb = a.A.ownerSVGElement);
			return a;
		}, iXc = function(a, b) {
			a.hb = b;
		}, jXc = function(a) {
			return a.Sc() ? a.fa : a.A;
		}, kXc = function(a, b) {
			a.H = b.map((d) => _.Ol(d));
			a.H.forEach((d) => X0(d, a.disabled));
			a.Wc();
			var c = new Set();
			a.ma.forEach((d) => {
				a.H.indexOf(d) > -1 && c.add(d);
			});
			a.ma = c;
		}, lXc = function(a, b) {
			a.oa = b ? _.Ol(b) : null;
			a.bt.unsubscribe();
			b && (a.bt = a.C9.change(10).subscribe(() => a.C$()));
			return a;
		}, mXc = function(a) {
			a.Cg === void 0 && (a.Cg = _.Il(a.A));
			return a.Cg;
		}, KWc = class {
			get disabled() {
				return this.Oc || !(!this.F || !this.F.disabled);
			}
			set disabled(a) {
				a !== this.Oc && (this.Oc = a, this.Wc(), this.H.forEach((b) => X0(b, a)));
			}
			constructor(a, b, c, d, e, f, g) {
				this.Ic = b;
				this.Fb = c;
				this.qb = d;
				this.C9 = e;
				this.ea = f;
				this.zd = g;
				this.za = this.mb = this.I = null;
				this.aa = {
					x: 0,
					y: 0
				};
				this.R = {
					x: 0,
					y: 0
				};
				this.Ta = _.M(!1);
				this.rc = !1;
				this.Nc = new _.Wg();
				this.cb = null;
				this.bt = this.Nf = this.vL = this.sD = _.af.A;
				this.oa = null;
				this.AA = !0;
				this.H = [];
				this.ma = new Set();
				this.Th = "ltr";
				this.rs = this.hb = null;
				this.YX = 0;
				this.scale = 1;
				this.Oc = !1;
				this.ec = new _.Wg();
				this.started = new _.Wg();
				this.released = new _.Wg();
				this.ended = new _.Wg();
				this.Cw = new _.Wg();
				this.Dw = new _.Wg();
				this.Bw = new _.Wg();
				this.UEa = this.Nc;
				this.JA = (k) => {
					this.ec.next();
					if (this.H.length) {
						let p = this.Nm(k);
						!p || this.ma.has(p) || this.disabled || this.fq(p, k);
					} else this.disabled || this.fq(this.A, k);
				};
				this.IVb = (k) => {
					var p = this.Zb(k);
					if (this.Ta()) {
						k.cancelable && k.preventDefault();
						var r = this.Mm(p);
						this.rc = !0;
						this.ou = p;
						this.Bkb(r);
						if (this.F) this.lZ(r, p);
						else {
							p = this.TA ? this.ta : this.U;
							var v = this.R;
							v.x = r.x - p.x + this.aa.x;
							v.y = r.y - p.y + this.aa.y;
							this.ie(v.x, v.y);
						}
						this.Nc.observers.length && this.qb.run(() => {
							this.Nc.next({
								source: this,
								v7a: r,
								event: k,
								distance: this.ue(r),
								delta: this.cf
							});
						});
					} else Math.abs(p.x - this.U.x) + Math.abs(p.y - this.U.y) >= this.Ic.mia && ((p = Date.now() >= this.Gaa + this.Qna(k), v = this.F, p) ? v && (v.Sc() || v.ZV.size > 0) || (k.cancelable && k.preventDefault(), this.Ta.set(!0), this.qb.run(() => this.Mjb(k))) : this.rl(k));
				};
				this.hfb = (k) => {
					this.rl(k);
				};
				this.iNa = (k) => {
					if (this.H.length) {
						let p = this.Nm(k);
						!p || this.ma.has(p) || this.disabled || k.preventDefault();
					} else this.disabled || k.preventDefault();
				};
				iXc(hXc(this, a), b.w8b || null);
				this.Na = new bXc(c);
				RWc(f, this);
			}
			dispose() {
				this.yL();
				if (this.Sc()) {
					let b;
					(b = this.A) == null || b.remove();
				}
				var a;
				(a = this.Xa) == null || a.remove();
				this.Xj();
				this.Wj();
				TWc(this.ea, this);
				this.sf();
				this.ec.complete();
				this.started.complete();
				this.released.complete();
				this.ended.complete();
				this.Cw.complete();
				this.Dw.complete();
				this.Bw.complete();
				this.Nc.complete();
				this.H = [];
				this.ma.clear();
				this.F = void 0;
				this.bt.unsubscribe();
				this.Na.clear();
				this.oa = this.A = this.cb = this.Og = this.Db = this.Xa = this.hb = null;
			}
			Sc() {
				return this.Ta() && this.ea.Sc(this);
			}
			reset() {
				this.A.style.transform = this.na || "";
				this.R = {
					x: 0,
					y: 0
				};
				this.aa = {
					x: 0,
					y: 0
				};
			}
			WZ(a) {
				this.F = a;
			}
			kja() {
				var a = this.Sc() ? this.R : this.aa;
				return {
					x: a.x,
					y: a.y
				};
			}
			E0(a) {
				this.R = {
					x: 0,
					y: 0
				};
				this.aa.x = a.x;
				this.aa.y = a.y;
				this.F || this.ie(a.x, a.y);
			}
			gM() {
				var a = this.ou;
				a && this.F && this.lZ(this.Mm(a), a);
			}
			sf() {
				this.sD.unsubscribe();
				this.vL.unsubscribe();
				this.Nf.unsubscribe();
				var a;
				(a = this.Uh) == null || a.call(this);
				this.Uh = void 0;
			}
			Xj() {
				var a;
				(a = this.I) == null || a.destroy();
				this.I = null;
			}
			Wj() {
				var a;
				(a = this.za) == null || a.remove();
				var b;
				(b = this.fa) == null || b.remove();
				var c;
				(c = this.mb) == null || c.destroy();
				this.fa = this.za = this.mb = null;
			}
			rl(a) {
				if (this.ea.Sc(this) && (this.sf(), SWc(this.ea, this), this.Wc(), this.H && (this.A.style.webkitTapHighlightColor = this.djb), this.Ta())) if (this.released.next({
					source: this,
					event: a
				}), this.F) this.F.R.next(), this.M9().then(() => {
					this.b$(a);
					this.bg();
					SWc(this.ea, this);
				});
				else {
					this.aa.x = this.R.x;
					let b = this.Zb(a);
					this.aa.y = this.R.y;
					this.qb.run(() => {
						this.ended.next({
							source: this,
							distance: this.ue(b),
							pH: b,
							event: a
						});
					});
					this.bg();
					SWc(this.ea, this);
				}
			}
			Mjb(a) {
				Z0(a) && (this.qA = Date.now());
				this.Wc();
				var b = mXc(this), c = this.F;
				b && this.qb.runOutsideAngular(() => {
					this.Uh = this.zd.listen(b, "selectstart", MWc, gXc);
				});
				if (c) {
					let d = this.A, e = d.parentNode, f = this.fa = this.eaa(), g = this.Xa = this.Xa || this.Fb.createComment("");
					e.insertBefore(g, d);
					this.na = d.style.transform || "";
					this.I = new dXc(this.Fb, this.A, this.Th, this.ta, this.Db || null, this.oaa || null, this.U, this.na, this.Ic.zIndex || 1e3, this.zd);
					this.I.attach(this.WLa(e, b));
					DWc(d, !1);
					this.Fb.body.appendChild(e.replaceChild(f, d));
					this.started.next({
						source: this,
						event: a
					});
					c.start();
					this.X = c;
					this.Fc = c.sB(this);
				} else this.started.next({
					source: this,
					event: a
				}), this.X = this.Fc = void 0;
				this.Na.cache(c ? c.I : []);
			}
			fq(a, b) {
				this.hb && b.stopPropagation();
				var c = this.Sc(), d = Z0(b), e = !d && b.button !== 0, f = this.A, g = _.Kl(b), k = !d && this.qA && this.qA + 800 > Date.now();
				d = d ? _.Pva(b) : _.Ova(b);
				g && g.draggable && b.type === "mousedown" && b.preventDefault();
				c || e || k || d || (this.H.length && (c = f.style, this.djb = c.webkitTapHighlightColor || "", c.webkitTapHighlightColor = "transparent"), this.rc = !1, this.Ta.set(this.rc), this.sf(), this.ta = this.A.getBoundingClientRect(), this.sD = this.ea.R.subscribe(this.IVb), this.vL = this.ea.X.subscribe(this.hfb), this.Nf = VWc(this.ea, mXc(this)).subscribe((p) => this.Zjb(p)), this.oa && (this.Aa = xWc(this.oa)), this.Ea = (c = this.Db) && c.template && !c.g_ ? {
					x: 0,
					y: 0
				} : this.fqa(this.ta, a, b), a = this.U = this.ou = this.Zb(b), this.cf = {
					x: 0,
					y: 0
				}, this.JVb = {
					x: a.x,
					y: a.y
				}, this.Gaa = Date.now(), UWc(this.ea, this, b));
			}
			b$(a) {
				DWc(this.A, !0);
				this.Xa.parentNode.replaceChild(this.A, this.Xa);
				this.Xj();
				this.Wj();
				this.ta = this.Aa = this.Fa = this.na = void 0;
				this.qb.run(() => {
					var b = this.F, c = b.sB(this), d = this.Zb(a), e = this.ue(d), f = b.cb(d.x, d.y);
					this.ended.next({
						source: this,
						distance: e,
						pH: d,
						event: a
					});
					this.Bw.next({
						item: this,
						od: c,
						Kl: this.Fc,
						container: b,
						raa: this.X,
						p9: f,
						distance: e,
						pH: d,
						event: a
					});
					var g = this.Fc, k = this.X;
					nXc(b);
					b.Bw.next({
						item: this,
						od: c,
						Kl: g,
						container: b,
						raa: k,
						p9: f,
						distance: e,
						pH: d,
						event: a
					});
					this.F = this.X;
				});
			}
			lZ({ x: a, y: b }, { x: c, y: d }) {
				var e = this.X.Zb(this, a, b);
				!e && this.F !== this.X && this.X.cb(a, b) && (e = this.X);
				e && e !== this.F && this.qb.run(() => {
					var f = this.F.sB(this), g;
					f = ((g = this.F.nja(f + 1)) == null ? void 0 : jXc(g)) || null;
					this.Dw.next({
						item: this,
						container: this.F
					});
					this.F.exit(this);
					this.t$(e, this.F, f);
					this.F = e;
					this.F.enter(this, a, b, e === this.X && e.pJ ? this.Fc : void 0);
					this.Cw.next({
						item: this,
						container: e,
						od: e.sB(this)
					});
				});
				this.Sc() && (this.F.zd(c, d), this.F.Fc(this, a, b, this.cf), this.TA ? this.Dd(a, b) : this.Dd(a - this.Ea.x, b - this.Ea.y));
			}
			M9() {
				if (!this.rc) return Promise.resolve();
				var a = this.fa.getBoundingClientRect();
				this.I.Gr("cdk-drag-animating");
				this.Dd(a.left, a.top);
				var b = JWc(this.I.A);
				return b === 0 ? Promise.resolve() : this.qb.runOutsideAngular(() => new Promise((c) => {
					var d = (g) => {
						if (!g || this.I && _.Kl(g) === this.I.element && g.propertyName === "transform") f(), c(), clearTimeout(e);
					}, e = setTimeout(d, b * 1.5), f = this.I.addEventListener("transitionend", d);
				}));
			}
			eaa() {
				var a = this.Og, b = a ? a.template : null;
				b ? (this.mb = a.Yg.wo(b, a.context), _.Bu(this.mb), a = AWc(this.mb, this.Fb)) : a = vWc(this.A);
				a.style.pointerEvents = "none";
				a.classList.add("cdk-drag-placeholder");
				return a;
			}
			fqa(a, b, c) {
				b = (b = b === this.A ? null : b) ? b.getBoundingClientRect() : a;
				c = Z0(c) ? c.targetTouches[0] : c;
				var d = this.fp();
				return {
					x: b.left - a.left + (c.pageX - b.left - d.left),
					y: b.top - a.top + (c.pageY - b.top - d.top)
				};
			}
			Zb(a) {
				var b = this.fp(), c = Z0(a) ? a.touches[0] || a.changedTouches[0] || {
					pageX: 0,
					pageY: 0
				} : a;
				a = c.pageX - b.left;
				b = c.pageY - b.top;
				if (this.cb && (c = this.cb.getScreenCTM())) {
					let d = this.cb.createSVGPoint();
					d.x = a;
					d.y = b;
					return d.matrixTransform(c.inverse());
				}
				return {
					x: a,
					y: b
				};
			}
			Mm(a) {
				var b = this.F ? this.F.rs : null, { x: c, y: d } = this.TA ? this.TA(a, this, this.ta, this.Ea) : a;
				if (this.rs === "x" || b === "x") d = this.U.y - (this.TA ? this.Ea.y : 0);
				else if (this.rs === "y" || b === "y") c = this.U.x - (this.TA ? this.Ea.x : 0);
				if (this.Aa) {
					let { x: e, y: f } = this.TA ? {
						x: 0,
						y: 0
					} : this.Ea;
					a = this.Aa;
					let { width: g, height: k } = this.cNa();
					b = a.top + f;
					let p = a.bottom - (k - f);
					c = Math.max(a.left + e, Math.min(a.right - (g - e), c));
					d = Math.max(b, Math.min(p, d));
				}
				return {
					x: c,
					y: d
				};
			}
			Bkb(a) {
				var b = a.x;
				a = a.y;
				var c = this.cf, d = this.JVb, e = Math.abs(a - d.y);
				Math.abs(b - d.x) > this.Ic.kaa && (c.x = b > d.x ? 1 : -1, d.x = b);
				e > this.Ic.kaa && (c.y = a > d.y ? 1 : -1, d.y = a);
				return c;
			}
			Wc() {
				if (this.A && this.H) {
					var a = this.H.length > 0 || !this.Sc();
					a !== this.AA && (this.AA = a, X0(this.A, a));
				}
			}
			yL() {
				var a;
				(a = this.GL) == null || a.forEach((b) => b());
				this.GL = void 0;
			}
			ie(a, b) {
				var c = 1 / this.scale;
				a = FWc(a * c, b * c);
				b = this.A.style;
				this.na == null && (this.na = b.transform && b.transform != "none" ? b.transform : "");
				b.transform = EWc(a, this.na);
			}
			Dd(a, b) {
				var c, d = ((c = this.Db) == null ? 0 : c.template) ? void 0 : this.na;
				this.I.A.style.transform = EWc(FWc(a, b), d);
			}
			ue(a) {
				var b = this.U;
				return b ? {
					x: a.x - b.x,
					y: a.y - b.y
				} : {
					x: 0,
					y: 0
				};
			}
			bg() {
				this.Aa = this.Fa = void 0;
				this.Na.clear();
			}
			C$() {
				var { x: a, y: b } = this.aa;
				if (!(a === 0 && b === 0 || this.Sc()) && this.oa) {
					var c = this.A.getBoundingClientRect(), d = this.oa.getBoundingClientRect();
					if (!(d.width === 0 && d.height === 0 || c.width === 0 && c.height === 0)) {
						var e = d.left - c.left, f = c.right - d.right, g = d.top - c.top, k = c.bottom - d.bottom;
						d.width > c.width ? (e > 0 && (a += e), f > 0 && (a -= f)) : a = 0;
						d.height > c.height ? (g > 0 && (b += g), k > 0 && (b -= k)) : b = 0;
						a === this.aa.x && b === this.aa.y || this.E0({
							y: b,
							x: a
						});
					}
				}
			}
			Qna(a) {
				var b = this.YX;
				return typeof b === "number" ? b : Z0(a) ? b.touch : b ? b.mouse : 0;
			}
			Zjb(a) {
				var b = aXc(this.Na, a);
				b && (a = _.Kl(a), this.Aa && a !== this.oa && a.contains(this.oa) && W0(this.Aa, b.top, b.left), this.U.x += b.left, this.U.y += b.top, this.F || (this.R.x -= b.left, this.R.y -= b.top, this.ie(this.R.x, this.R.y)));
			}
			fp() {
				var a;
				return ((a = this.Na.positions.get(this.Fb)) == null ? void 0 : a.RIa) || {
					top: window.scrollY,
					left: window.scrollX
				};
			}
			WLa(a, b) {
				var c = this.Ihb || "global";
				return c === "parent" ? a : c === "global" ? (a = this.Fb, b || a.fullscreenElement || a.webkitFullscreenElement || a.mozFullScreenElement || a.msFullscreenElement || a.body) : _.Ol(c);
			}
			cNa() {
				this.Fa && (this.Fa.width || this.Fa.height) || (this.Fa = this.I ? this.I.getBoundingClientRect() : this.ta);
				return this.Fa;
			}
			Nm(a) {
				return this.H.find((b) => a.target && (a.target === b || b.contains(a.target)));
			}
			t$(a, b, c) {
				if (a === this.X) {
					let d;
					(d = this.za) == null || d.remove();
					this.za = null;
				} else if (b === this.X && b.c8) {
					let d;
					a = (d = this.za) != null ? d : this.za = vWc(this.fa);
					a.classList.remove("cdk-drag-placeholder");
					a.classList.add("cdk-drag-anchor");
					a.style.transform = "";
					c ? c.before(a) : _.Ol(b.element).appendChild(a);
				}
			}
		};
		var oXc, pXc, qXc;
		oXc = new _.he("CdkDropList");
		pXc = function(a, b) {
			var c = b.rs, d = b.YX, e = b.TA, f = b.oaa, g = b.owa, k = b.KBb, p = b.l0;
			b = b.lF;
			a.disabled = k == null ? !1 : k;
			a.YX = d || 0;
			a.rs = c || null;
			e && (a.TA = e);
			f && (a.oaa = f);
			g && (a.owa = g);
			p && (a.l0 = p);
			b && (a.lF = b);
		};
		qXc = function(a, b) {
			b.started.subscribe((c) => {
				a.started.emit({
					source: a,
					event: c.event
				});
				a.wb.lb();
			});
			b.released.subscribe((c) => {
				a.released.emit({
					source: a,
					event: c.event
				});
			});
			b.ended.subscribe((c) => {
				a.ended.emit({
					source: a,
					distance: c.distance,
					pH: c.pH,
					event: c.event
				});
				a.wb.lb();
			});
			b.Cw.subscribe((c) => {
				a.Cw.emit({
					container: c.container.data,
					item: a,
					od: c.od
				});
			});
			b.Dw.subscribe((c) => {
				a.Dw.emit({
					container: c.container.data,
					item: a
				});
			});
			b.Bw.subscribe((c) => {
				a.Bw.emit({
					Kl: c.Kl,
					od: c.od,
					raa: c.raa.data,
					container: c.container.data,
					p9: c.p9,
					item: a,
					distance: c.distance,
					pH: c.pH,
					event: c.event
				});
			});
		};
		_.e1 = class {
			get disabled() {
				return this.Oc || !(!this.R || !this.R.disabled);
			}
			set disabled(a) {
				this.Oc = a;
				this.Fj.disabled = this.Oc;
			}
			constructor() {
				this.element = _.m(_.Jf);
				this.R = _.m(oXc, {
					optional: !0,
					eu: !0
				});
				this.qb = _.m(_.th);
				this.aa = _.m(_.$h);
				this.A = _.m(_.bm, { optional: !0 });
				this.wb = _.m(_.Hu);
				this.za = _.m(ZWc, {
					optional: !0,
					self: !0
				});
				this.X = _.m(c1, {
					optional: !0,
					eu: !0
				});
				this.U = _.m(Y0);
				this.Ub = new _.Wg();
				this.H = new _.ml([]);
				this.rs = this.I = this.F = null;
				this.Oc = !1;
				this.scale = 1;
				this.started = new _.pm();
				this.released = new _.pm();
				this.ended = new _.pm();
				this.Cw = new _.pm();
				this.Dw = new _.pm();
				this.Bw = new _.pm();
				this.UEa = new _.ef((c) => {
					var d = this.Fj.UEa.pipe(_.uf((e) => ({
						source: this,
						v7a: e.v7a,
						event: e.event,
						delta: e.delta,
						distance: e.distance
					}))).subscribe(c);
					return () => {
						d.unsubscribe();
					};
				});
				this.Ec = _.m(_.Xf);
				var a = this.R, b = _.m($Wc, { optional: !0 });
				this.Fj = LWc(this.Ec, this.element, {
					mia: b && b.mia != null ? b.mia : 5,
					kaa: b && b.kaa != null ? b.kaa : 5,
					zIndex: b == null ? void 0 : b.zIndex
				});
				this.Fj.data = this;
				WWc(this.U, this.element.nativeElement, this);
				b && pXc(this, b);
				a && (a.xP(this), a.Xs.aa.pipe(_.dh(this.Ub)).subscribe(() => {
					this.Fj.scale = this.scale;
				}));
				this.Na(this.Fj);
				qXc(this, this.Fj);
			}
			reset() {
				this.Fj.reset();
			}
			kja() {
				return this.Fj.kja();
			}
			E0(a) {
				this.Fj.E0(a);
			}
			Rb() {
				_.bg(() => {
					this.fa();
					this.Fa();
					this.Fj.scale = this.scale;
					this.Wia && this.Fj.E0(this.Wia);
				}, { Pa: this.Ec });
			}
			Wb(a) {
				var b = a.rootElementSelector;
				a = a.freeDragPosition;
				b && !b.wH && this.fa();
				this.Fj.scale = this.scale;
				a && !a.wH && this.Wia && this.Fj.E0(this.Wia);
			}
			Ba() {
				this.R && this.R.removeItem(this);
				XWc(this.U, this.element.nativeElement);
				this.qb.runOutsideAngular(() => {
					this.H.complete();
					this.Ub.next();
					this.Ub.complete();
					this.Fj.dispose();
				});
			}
			ea(a) {
				var b = this.H.getValue();
				b.push(a);
				this.H.next(b);
			}
			na(a) {
				var b = this.H.getValue();
				a = b.indexOf(a);
				a > -1 && (b.splice(a, 1), this.H.next(b));
			}
			Ea(a) {
				this.F = a;
			}
			ta(a) {
				a === this.F && (this.F = null);
			}
			Aa(a) {
				this.I = a;
			}
			oa(a) {
				a === this.I && (this.I = null);
			}
			fa() {
				var a = this.element.nativeElement, b = a;
				if (this.l0) {
					let c;
					b = a.closest !== void 0 ? a.closest(this.l0) : (c = a.parentElement) == null ? void 0 : c.closest(this.l0);
				}
				hXc(this.Fj, b || a);
			}
			ma() {
				var a = this.owa;
				return a ? typeof a === "string" ? this.element.nativeElement.closest(a) : _.Ol(a) : null;
			}
			Na(a) {
				a.ec.subscribe(() => {
					if (!a.Sc()) {
						let c = this.A;
						var b = this.YX;
						let d = this.I ? {
							template: this.I.Je,
							context: this.I.data,
							Yg: this.aa
						} : null, e = this.F ? {
							template: this.F.Je,
							context: this.F.data,
							g_: this.F.g_,
							Yg: this.aa
						} : null;
						a.disabled = this.disabled;
						a.rs = this.rs;
						a.scale = this.scale;
						a.YX = typeof b === "object" && b ? b : _.Pl(b);
						a.TA = this.TA;
						a.oaa = this.oaa;
						b = lXc(a, this.ma());
						b.Og = d;
						b.Db = e;
						b.Ihb = this.lF || "global";
						c && (a.Th = c.value);
					}
				});
				a.ec.pipe(_.Qg()).subscribe(() => {
					if (this.X) a.hb = this.X.Fj;
					else for (var b = this.element.nativeElement.parentElement; b;) {
						let c = YWc(this.U, b);
						if (c) {
							a.hb = c.Fj;
							break;
						}
						b = b.parentElement;
					}
				});
			}
			Fa() {
				this.H.pipe(_.eh((a) => {
					a = a.map((b) => b.element);
					this.za && this.l0 && a.push(this.element);
					kXc(this.Fj, a);
				}), _.ch((a) => _.Ff(...a.map((b) => b.Ik.pipe(_.bh(b))))), _.dh(this.Ub)).subscribe((a) => {
					var b = this.Fj, c = a.element.nativeElement;
					a.disabled ? !b.ma.has(c) && b.H.indexOf(c) > -1 && (b.ma.add(c), X0(c, !0)) : b.ma.has(c) && (b.ma.delete(c), X0(c, b.disabled));
				});
			}
		};
		_.e1.J = function(a) {
			return new (a || _.e1)();
		};
		_.e1.Oa = _.We({
			type: _.e1,
			da: [[
				"",
				"cdkDrag",
				""
			]],
			eb: [1, "cdk-drag"],
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("cdk-drag-disabled", b.disabled)("cdk-drag-dragging", b.Fj.Sc());
			},
			inputs: {
				data: [
					0,
					"cdkDragData",
					"data"
				],
				rs: [
					0,
					"cdkDragLockAxis",
					"lockAxis"
				],
				l0: [
					0,
					"cdkDragRootElement",
					"rootElementSelector"
				],
				owa: [
					0,
					"cdkDragBoundary",
					"boundaryElement"
				],
				YX: [
					0,
					"cdkDragStartDelay",
					"dragStartDelay"
				],
				Wia: [
					0,
					"cdkDragFreeDragPosition",
					"freeDragPosition"
				],
				disabled: [
					2,
					"cdkDragDisabled",
					"disabled",
					_.aj
				],
				TA: [
					0,
					"cdkDragConstrainPosition",
					"constrainPosition"
				],
				oaa: [
					0,
					"cdkDragPreviewClass",
					"previewClass"
				],
				lF: [
					0,
					"cdkDragPreviewContainer",
					"previewContainer"
				],
				scale: [
					2,
					"cdkDragScale",
					"scale",
					_.bj
				]
			},
			outputs: {
				started: "cdkDragStarted",
				released: "cdkDragReleased",
				ended: "cdkDragEnded",
				Cw: "cdkDragEntered",
				Dw: "cdkDragExited",
				Bw: "cdkDragDropped",
				UEa: "cdkDragMoved"
			},
			Cc: ["cdkDrag"],
			features: [_.yi([{
				Da: c1,
				zb: _.e1
			}]), _.su]
		});
		var rXc;
		rXc = new _.he("CdkDragPlaceholder");
		_.f1 = class {
			constructor() {
				this.Je = _.m(_.Zh);
				this.A = _.m(c1, { optional: !0 });
				var a;
				(a = this.A) == null || a.Aa(this);
			}
			Ba() {
				var a;
				(a = this.A) == null || a.oa(this);
			}
		};
		_.f1.J = function(a) {
			return new (a || _.f1)();
		};
		_.f1.Oa = _.We({
			type: _.f1,
			da: [[
				"ng-template",
				"cdkDragPlaceholder",
				""
			]],
			inputs: { data: "data" },
			features: [_.yi([{
				Da: rXc,
				zb: _.f1
			}])]
		});
		var sXc;
		sXc = new _.he("CdkDragPreview");
		_.g1 = class {
			constructor() {
				this.Je = _.m(_.Zh);
				this.A = _.m(c1, { optional: !0 });
				this.g_ = !1;
				var a;
				(a = this.A) == null || a.Ea(this);
			}
			Ba() {
				var a;
				(a = this.A) == null || a.ta(this);
			}
		};
		_.g1.J = function(a) {
			return new (a || _.g1)();
		};
		_.g1.Oa = _.We({
			type: _.g1,
			da: [[
				"ng-template",
				"cdkDragPreview",
				""
			]],
			inputs: {
				data: "data",
				g_: [
					2,
					"matchSize",
					"matchSize",
					_.aj
				]
			},
			features: [_.yi([{
				Da: sXc,
				zb: _.g1
			}])]
		});
		var tXc = new _.he("CdkDropListGroup");
		var vXc = function(a, b, c, d) {
			var e = uXc(a).elementFromPoint(Math.floor(c), Math.floor(d));
			c = e ? a.A.findIndex((f) => {
				f = f.A;
				return e === f || f.contains(e);
			}) : -1;
			return c !== -1 && a.U(c, b) ? c : -1;
		}, uXc = function(a) {
			a.H || (a.H = _.Il(a.cd) || a.Fb);
			return a.H;
		}, wXc = class {
			constructor(a, b) {
				this.Fb = a;
				this.I = b;
				this.R = {
					drag: null,
					deltaX: 0,
					deltaY: 0,
					yT: !1
				};
				this.F = [];
			}
			start(a) {
				var b = this.cd.childNodes;
				this.F = [];
				for (let c = 0; c < b.length; c++) {
					let d = b[c];
					this.F.push([d, d.nextSibling]);
				}
				this.d2(a);
			}
			sort(a, b, c, d) {
				var e = vXc(this, a, b, c), f = this.R;
				if (e === -1 || this.A[e] === a) return null;
				var g = this.A[e];
				if (f.drag === g && f.yT && f.deltaX === d.x && f.deltaY === d.y) return null;
				var k = this.sB(a), p = a.fa;
				a = g.A;
				e > k ? a.after(p) : a.before(p);
				_.$0(this.A, k, e);
				b = uXc(this).elementFromPoint(b, c);
				f.deltaX = d.x;
				f.deltaY = d.y;
				f.drag = g;
				f.yT = a === b || a.contains(b);
				return {
					Kl: k,
					od: e
				};
			}
			enter(a, b, c, d) {
				var e = this.A.indexOf(a);
				e > -1 && this.A.splice(e, 1);
				d = d == null || d < 0 ? vXc(this, a, b, c) : d;
				d === -1 && (d = this.X(a, b, c));
				(b = this.A[d]) && !this.I.Sc(b) ? (this.A.splice(d, 0, a), b.A.before(a.fa)) : (this.A.push(a), this.cd.appendChild(a.fa));
			}
			d2(a) {
				this.A = a.slice();
			}
			geb(a) {
				this.U = a;
			}
			reset() {
				var a = this.cd, b = this.R;
				for (let c = this.F.length - 1; c > -1; c--) {
					let [d, e] = this.F[c];
					d.parentNode === a && d.nextSibling !== e && (e === null ? a.appendChild(d) : e.parentNode === a && a.insertBefore(d, e));
				}
				this.F = [];
				this.A = [];
				b.drag = null;
				b.deltaX = b.deltaY = 0;
				b.yT = !1;
			}
			Q_a() {
				return this.A;
			}
			sB(a) {
				return this.A.indexOf(a);
			}
			nja(a) {
				return this.A[a] || null;
			}
			Vcb() {
				this.A.forEach((a) => {
					this.I.Sc(a) && a.gM();
				});
			}
			c2(a) {
				a !== this.cd && (this.cd = a, this.H = void 0);
			}
			X(a, b, c) {
				if (this.A.length === 0) return -1;
				if (this.A.length === 1) return 0;
				var d = Infinity, e = -1;
				for (let g = 0; g < this.A.length; g++) {
					var f = this.A[g];
					if (f !== a) {
						let { x: k, y: p } = f.A.getBoundingClientRect();
						f = Math.hypot(b - k, c - p);
						f < d && (d = f, e = g);
					}
				}
				return e;
			}
		};
		var xXc = function(a, b, c, d, e) {
			var f = a.orientation === "horizontal", g = a.A.findIndex(({ drag: k, hm: p }) => {
				if (k === b) return !1;
				if (e) {
					let r = f ? e.x : e.y;
					if (k === a.F.drag && a.F.yT && r === a.F.delta) return !1;
				}
				return f ? c >= Math.floor(p.left) && c < Math.floor(p.right) : d >= Math.floor(p.top) && d < Math.floor(p.bottom);
			});
			return g !== -1 && a.X(g, b) ? g : -1;
		}, yXc = class {
			constructor(a) {
				this.I = a;
				this.A = [];
				this.orientation = "vertical";
				this.direction = "ltr";
				this.F = {
					drag: null,
					delta: 0,
					yT: !1
				};
			}
			start(a) {
				this.d2(a);
			}
			sort(a, b, c, d) {
				var e = this.A, f = xXc(this, a, b, c, d);
				if (f === -1 && e.length > 0) return null;
				var g = this.orientation === "horizontal", k = e.findIndex((L) => L.drag === a), p = e[f], r = p.hm, v = k > f ? 1 : -1, w = this.aa(e[k].hm, r, v), D = this.ea(k, e, v), G = e.slice();
				_.$0(e, k, f);
				e.forEach((L, N) => {
					if (G[N] !== L) {
						var Q = L.drag === a;
						N = Q ? w : D;
						Q = Q ? a.fa : L.drag.A;
						L.offset += N;
						var T = Math.round(1 / L.drag.scale * L.offset);
						g ? (Q.style.transform = EWc(`translate3d(${T}px, 0, 0)`, L.JBa), W0(L.hm, 0, N)) : (Q.style.transform = EWc(`translate3d(0, ${T}px, 0)`, L.JBa), W0(L.hm, N, 0));
					}
				});
				this.F.yT = yWc(r, b, c);
				this.F.drag = p.drag;
				this.F.delta = g ? d.x : d.y;
				return {
					Kl: k,
					od: f
				};
			}
			enter(a, b, c, d) {
				var e = this.H, f = e.indexOf(a), g = a.fa;
				f > -1 && e.splice(f, 1);
				d = d == null || d < 0 ? xXc(this, a, b, c) : d;
				f = e[d];
				f === a && (f = e[d + 1]);
				!f && (d == null || d === -1 || d < e.length - 1) && this.fa(b, c) && (f = e[0]);
				f && !this.I.Sc(f) ? (b = f.A, b.parentElement.insertBefore(g, b), e.splice(d, 0, a)) : (this.cd.appendChild(g), e.push(a));
				g.style.transform = "";
				this.R();
			}
			d2(a) {
				this.H = a.slice();
				this.R();
			}
			geb(a) {
				this.X = a;
			}
			reset() {
				var a;
				(a = this.H) == null || a.forEach((b) => {
					var c = b.A;
					if (c) {
						let d, e = (d = this.A.find((f) => f.drag === b)) == null ? void 0 : d.JBa;
						c.style.transform = e || "";
					}
				});
				this.A = [];
				this.H = [];
				this.F.drag = null;
				this.F.delta = 0;
				this.F.yT = !1;
			}
			Q_a() {
				return this.H;
			}
			sB(a) {
				return this.U().findIndex((b) => b.drag === a);
			}
			nja(a) {
				var b;
				return ((b = this.U()[a]) == null ? void 0 : b.drag) || null;
			}
			Vcb(a, b) {
				this.A.forEach(({ hm: c }) => {
					W0(c, a, b);
				});
				this.A.forEach(({ drag: c }) => {
					this.I.Sc(c) && c.gM();
				});
			}
			c2(a) {
				this.cd = a;
			}
			R() {
				var a = this.orientation === "horizontal";
				this.A = this.H.map((b) => {
					var c = jXc(b);
					return {
						drag: b,
						offset: 0,
						JBa: c.style.transform || "",
						hm: xWc(c)
					};
				}).sort((b, c) => a ? b.hm.left - c.hm.left : b.hm.top - c.hm.top);
			}
			U() {
				return this.orientation === "horizontal" && this.direction === "rtl" ? this.A.slice().reverse() : this.A;
			}
			aa(a, b, c) {
				var d = this.orientation === "horizontal", e = d ? b.left - a.left : b.top - a.top;
				c === -1 && (e += d ? b.width - a.width : b.height - a.height);
				return e;
			}
			ea(a, b, c) {
				var d = this.orientation === "horizontal", e = b[a].hm;
				a = b[a + c * -1];
				b = e[d ? "width" : "height"] * c;
				if (a) {
					let f = d ? "left" : "top";
					d = d ? "right" : "bottom";
					b = c === -1 ? b - (a.hm[f] - e[d]) : b + (e[f] - a.hm[d]);
				}
				return b;
			}
			fa(a, b) {
				if (!this.H.length) return !1;
				var c = this.A, d = this.orientation === "horizontal";
				if (c[0].drag !== this.H[0]) return c = c[c.length - 1].hm, d ? a >= c.right : b >= c.bottom;
				c = c[0].hm;
				return d ? a <= c.left : b <= c.top;
			}
		};
		var zXc = function(a, b) {
			if (b === "mixed") a.A = new wXc(a.Fb, a.na);
			else {
				let c = new yXc(a.na);
				c.direction = a.Ea;
				c.orientation = b;
				a.A = c;
			}
			a.A.c2(a.F);
			a.A.geb((c, d) => a.gca(c, d, a));
			return a;
		}, nXc = function(a) {
			a.ea = !1;
			var b = a.F.style;
			b.scrollSnapType = b.u5a = a.rc;
			a.za.forEach((c) => c.Dd(a));
			a.A.reset();
			a.R.next();
			a.fa.unsubscribe();
			a.U.clear();
		}, AXc = function(a, b) {
			var c = a.F;
			a.I = b.indexOf(c) === -1 ? [c, ...b] : b.slice();
		}, BXc = function(a) {
			a.ma || (a.ma = _.Il(a.F) || a.Fb);
			return a.ma;
		}, CXc = class {
			constructor(a, b, c, d, e) {
				this.na = b;
				this.qb = d;
				this.Db = e;
				this.pJ = this.disabled = !1;
				this.rs = null;
				this.QW = !1;
				this.sga = 2;
				this.c8 = !1;
				this.jY = () => !0;
				this.gca = () => !0;
				this.aa = new _.Wg();
				this.Cw = new _.Wg();
				this.Dw = new _.Wg();
				this.Bw = new _.Wg();
				this.sorted = new _.Wg();
				this.Na = new _.Wg();
				this.Ta = new _.Wg();
				this.ea = !1;
				this.H = [];
				this.za = [];
				this.ZV = new Set();
				this.fa = _.af.A;
				this.ta = this.Aa = 0;
				this.R = new _.Wg();
				this.ma = null;
				this.I = [];
				this.Ea = "ltr";
				this.Wc = () => {
					this.R.next();
					_.Df(0, _.FSa).pipe(_.dh(this.R)).subscribe(() => {
						var f = this.Fa, g = this.sga;
						this.Aa === 1 ? f.scrollBy(0, -g) : this.Aa === 2 && f.scrollBy(0, g);
						this.ta === 1 ? f.scrollBy(-g, 0) : this.ta === 2 && f.scrollBy(g, 0);
					});
				};
				a = this.element = _.Ol(a);
				this.Fb = c;
				zXc(this, "vertical").c2(a);
				QWc(b, this);
				this.U = new bXc(c);
			}
			dispose() {
				this.R.next();
				this.R.complete();
				this.fa.unsubscribe();
				this.aa.complete();
				this.Cw.complete();
				this.Dw.complete();
				this.Bw.complete();
				this.sorted.complete();
				this.Na.complete();
				this.Ta.complete();
				this.ZV.clear();
				this.Fa = null;
				this.U.clear();
				this.na.I.delete(this);
			}
			Sc() {
				return this.ea;
			}
			start() {
				this.Xa();
				this.mb();
			}
			enter(a, b, c, d) {
				this.Xa();
				d == null && this.pJ && (d = this.H.indexOf(a));
				this.A.enter(a, b, c, d);
				this.oa();
				this.mb();
				this.Cw.next({
					item: a,
					container: this,
					od: this.sB(a)
				});
			}
			exit(a) {
				nXc(this);
				this.Dw.next({
					item: a,
					container: this
				});
			}
			d2(a) {
				var b = this.H;
				this.H = a;
				a.forEach((c) => c.WZ(this));
				this.Sc() && (b.filter((c) => c.Sc()).every((c) => a.indexOf(c) === -1) ? nXc(this) : this.A.d2(this.H));
			}
			AD(a) {
				this.za = a.slice();
				return this;
			}
			c2(a) {
				if (a !== this.F) {
					var b = this.I.indexOf(this.F), c = this.I.indexOf(a);
					b > -1 && this.I.splice(b, 1);
					c > -1 && this.I.splice(c, 1);
					this.A && this.A.c2(a);
					this.ma = null;
					this.I.unshift(a);
					this.F = a;
				}
			}
			sB(a) {
				return this.ea ? this.A.sB(a) : this.H.indexOf(a);
			}
			nja(a) {
				return this.ea ? this.A.nja(a) : this.H[a] || null;
			}
			Fc(a, b, c, d) {
				!this.pJ && this.X && zWc(this.X, b, c) && (b = this.A.sort(a, b, c, d)) && this.sorted.next({
					Kl: b.Kl,
					od: b.od,
					container: this,
					item: a
				});
			}
			zd(a, b) {
				if (!this.QW) {
					var c = 0, d = 0;
					this.U.positions.forEach((f, g) => {
						if (g !== this.Fb && f.hm && !e && zWc(f.hm, a, b)) {
							var k = f.hm;
							f = NWc(k, b);
							k = OWc(k, a);
							let p = 0, r = 0;
							if (f) {
								let v = g.scrollTop;
								f === 1 ? v > 0 && (p = 1) : g.scrollHeight - v > g.clientHeight && (p = 2);
							}
							k && (f = g.scrollLeft, this.Ea === "rtl" ? k === 2 ? f < 0 && (r = 2) : g.scrollWidth + f > g.clientWidth && (r = 1) : k === 1 ? f > 0 && (r = 1) : g.scrollWidth - f > g.clientWidth && (r = 2));
							[c, d] = [p, r];
							if (c || d) e = g;
						}
					});
					if (!c && !d) {
						let { width: f, height: g } = _.eib(this.Db), k = {
							width: f,
							height: g,
							top: 0,
							right: f,
							bottom: g,
							left: 0
						};
						c = NWc(k, b);
						d = OWc(k, a);
						var e = window;
					}
					!e || c === this.Aa && d === this.ta && e === this.Fa || (this.Aa = c, this.ta = d, this.Fa = e, (c || d) && e ? this.qb.runOutsideAngular(this.Wc) : this.R.next());
				}
			}
			Xa() {
				var a = this.F.style;
				this.aa.next();
				this.ea = !0;
				this.rc = a.u5a || a.scrollSnapType || "";
				a.scrollSnapType = a.u5a = "none";
				this.A.start(this.H);
				this.oa();
				this.fa.unsubscribe();
				this.hb();
			}
			oa() {
				this.U.cache(this.I);
				this.X = this.U.positions.get(this.F).hm;
			}
			cb(a, b) {
				return this.X != null && yWc(this.X, a, b);
			}
			Zb(a, b, c) {
				return this.za.find((d) => d.ec(a, b, c));
			}
			ec(a, b, c) {
				return this.X && yWc(this.X, b, c) && this.jY(a, this) ? (a = BXc(this).elementFromPoint(b, c)) ? a === this.F || this.F.contains(a) : !1 : !1;
			}
			Nc(a, b) {
				var c = this.ZV;
				!c.has(a) && b.every((d) => this.jY(d, this) || this.H.indexOf(d) > -1) && (c.add(a), this.oa(), this.hb(), this.Na.next({
					initiator: a,
					receiver: this,
					items: b
				}));
			}
			Dd(a) {
				this.ZV.delete(a);
				this.fa.unsubscribe();
				this.Ta.next({
					initiator: a,
					receiver: this
				});
			}
			hb() {
				this.fa = VWc(this.na, BXc(this)).subscribe((a) => {
					this.Sc() ? (a = aXc(this.U, a)) && this.A.Vcb(a.top, a.left) : this.ZV.size > 0 && this.oa();
				});
			}
			mb() {
				var a = this.A.Q_a().filter((b) => b.Sc());
				this.za.forEach((b) => b.Nc(this, a));
			}
		};
		var DXc, FXc, EXc;
		DXc = function(a, b) {
			var c = b.rs, d = b.KBb, e = b.pJ, f = b.O7b;
			b = b.P7b;
			a.disabled = d == null ? !1 : d;
			a.pJ = e == null ? !1 : e;
			a.QW = f == null ? !1 : f;
			a.orientation = b || "vertical";
			a.rs = c || null;
		};
		FXc = function(a, b) {
			b.aa.subscribe(() => {
				a.R(EXc(a).map((c) => c.Fj));
				a.wb.lb();
			});
			b.Cw.subscribe((c) => {
				a.Cw.emit({
					container: a,
					item: c.item.data,
					od: c.od
				});
			});
			b.Dw.subscribe((c) => {
				a.Dw.emit({
					container: a,
					item: c.item.data
				});
				a.wb.lb();
			});
			b.sorted.subscribe((c) => {
				a.sorted.emit({
					Kl: c.Kl,
					od: c.od,
					container: a,
					item: c.item.data
				});
			});
			b.Bw.subscribe((c) => {
				a.Bw.emit({
					Kl: c.Kl,
					od: c.od,
					raa: c.raa.data,
					container: c.container.data,
					item: c.item.data,
					p9: c.p9,
					distance: c.distance,
					pH: c.pH,
					event: c.event
				});
				a.wb.lb();
			});
			_.Ff(b.Na, b.Ta).subscribe(() => a.wb.lb());
		};
		EXc = function(a) {
			return Array.from(a.I).sort((b, c) => jXc(b.Fj).compareDocumentPosition(jXc(c.Fj)) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
		};
		_.h1 = class {
			get disabled() {
				return this.Oc || !!this.F && this.F.disabled;
			}
			set disabled(a) {
				this.Xs.disabled = this.Oc = a;
			}
			constructor() {
				this.element = _.m(_.Jf);
				this.wb = _.m(_.Hu);
				this.X = _.m(_.Tl);
				this.A = _.m(_.bm, { optional: !0 });
				this.F = _.m(tXc, {
					optional: !0,
					eu: !0
				});
				this.Ub = new _.Wg();
				this.U = !1;
				this.AD = [];
				this.orientation = "vertical";
				this.id = _.m(_.am).getId("cdk-drop-list-");
				this.rs = null;
				this.pJ = this.Oc = !1;
				this.jY = () => !0;
				this.gca = () => !0;
				this.QW = !1;
				this.Wya = null;
				this.c8 = !1;
				this.Bw = new _.pm();
				this.Cw = new _.pm();
				this.Dw = new _.pm();
				this.sorted = new _.pm();
				this.I = new Set();
				var a = _.m($Wc, { optional: !0 }), b = _.m(_.Xf);
				this.Xs = new CXc(this.element, b.get(Y0), b.get(_.Xk), b.get(_.th), b.get(_.Sl));
				this.Xs.data = this;
				a && DXc(this, a);
				this.Xs.jY = (c, d) => this.jY(c.data, d.data);
				this.Xs.gca = (c, d, e) => this.gca(c, d.data, e.data);
				this.aa(this.Xs);
				FXc(this, this.Xs);
				_.h1.A.push(this);
				this.F && this.F.jd.add(this);
			}
			xP(a) {
				this.I.add(a);
				a.Fj.WZ(this.Xs);
				this.Xs.Sc() && this.R(EXc(this).map((b) => b.Fj));
			}
			removeItem(a) {
				this.I.delete(a);
				this.H && (a = this.H.indexOf(a.Fj), a > -1 && (this.H.splice(a, 1), this.R(this.H)));
			}
			Ba() {
				var a = _.h1.A.indexOf(this);
				a > -1 && _.h1.A.splice(a, 1);
				this.F && this.F.jd.delete(this);
				this.H = void 0;
				this.I.clear();
				this.Xs.dispose();
				this.Ub.next();
				this.Ub.complete();
			}
			aa(a) {
				this.A && this.A.change.pipe(_.bh(this.A.value), _.dh(this.Ub)).subscribe((b) => {
					a.Ea = b;
					a.A instanceof yXc && (a.A.direction = b);
					return a;
				});
				a.aa.subscribe(() => {
					var b = _.Ll(this.AD).map((c) => typeof c === "string" ? _.h1.A.find((d) => d.id === c) : c);
					this.F && this.F.jd.forEach((c) => {
						b.indexOf(c) === -1 && b.push(c);
					});
					if (!this.U) {
						let c = _.aib(this.X, this.element).map((d) => d.Ga.nativeElement);
						AXc(this.Xs, c);
						this.U = !0;
					}
					this.Wya && a.c2(this.element.nativeElement.querySelector(this.Wya));
					a.disabled = this.disabled;
					a.rs = this.rs;
					a.pJ = this.pJ;
					a.QW = this.QW;
					a.sga = _.Pl(this.sga, 2);
					a.c8 = this.c8;
					zXc(a.AD(b.filter((c) => c && c !== this).map((c) => c.Xs)), this.orientation);
				});
			}
			R(a) {
				this.H = a;
				this.Xs.d2(a);
			}
		};
		_.h1.A = [];
		_.h1.J = function(a) {
			return new (a || _.h1)();
		};
		_.h1.Oa = _.We({
			type: _.h1,
			da: [[
				"",
				"cdkDropList",
				""
			], ["cdk-drop-list"]],
			eb: [1, "cdk-drop-list"],
			Ua: 7,
			Ja: function(a, b) {
				a & 2 && (_.wh("id", b.id), _.P("cdk-drop-list-disabled", b.disabled)("cdk-drop-list-dragging", b.Xs.Sc())("cdk-drop-list-receiving", b.Xs.ZV.size > 0));
			},
			inputs: {
				AD: [
					0,
					"cdkDropListConnectedTo",
					"connectedTo"
				],
				data: [
					0,
					"cdkDropListData",
					"data"
				],
				orientation: [
					0,
					"cdkDropListOrientation",
					"orientation"
				],
				id: "id",
				rs: [
					0,
					"cdkDropListLockAxis",
					"lockAxis"
				],
				disabled: [
					2,
					"cdkDropListDisabled",
					"disabled",
					_.aj
				],
				pJ: [
					2,
					"cdkDropListSortingDisabled",
					"sortingDisabled",
					_.aj
				],
				jY: [
					0,
					"cdkDropListEnterPredicate",
					"enterPredicate"
				],
				gca: [
					0,
					"cdkDropListSortPredicate",
					"sortPredicate"
				],
				QW: [
					2,
					"cdkDropListAutoScrollDisabled",
					"autoScrollDisabled",
					_.aj
				],
				sga: [
					0,
					"cdkDropListAutoScrollStep",
					"autoScrollStep"
				],
				Wya: [
					0,
					"cdkDropListElementContainer",
					"elementContainerSelector"
				],
				c8: [
					2,
					"cdkDropListHasAnchor",
					"hasAnchor",
					_.aj
				]
			},
			outputs: {
				Bw: "cdkDropListDropped",
				Cw: "cdkDropListEntered",
				Dw: "cdkDropListExited",
				sorted: "cdkDropListSorted"
			},
			Cc: ["cdkDropList"],
			features: [_.yi([{
				Da: tXc,
				Vc: void 0
			}, {
				Da: oXc,
				zb: _.h1
			}])]
		});
		var i1 = class {
			constructor() {
				this.Ec = _.m(_.Xf);
			}
		};
		i1.J = function(a) {
			return new (a || i1)();
		};
		i1.sa = _.Re({
			token: i1,
			factory: i1.J
		});
		_.j1 = class {};
		_.j1.J = function(a) {
			return new (a || _.j1)();
		};
		_.j1.qc = _.Ve({ type: _.j1 });
		_.j1.oc = _.Dd({
			vd: [i1],
			imports: [_.mB]
		});
		var iWc, jWc, kWc;
		_.I0 = function(a) {
			return a.ownerDocument;
		};
		iWc = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		jWc = function(a) {
			return _.Yp(a, iWc, 1);
		};
		kWc = function(a, b) {
			return _.$q(a.A, a.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GetModelQuota", b, {}, _.d8a);
		};
		_.lWc = function(a, b) {
			return _.x(function* () {
				var c = new _.b8a().setModel(b);
				c = jWc(yield kWc(a.H, c)).find((f) => _.l(f, 1) === "successful_video_generations");
				if (!c) return null;
				var d = Number(_.Ys(c, 2)), e = Number(_.Ys(c, 3));
				return {
					metricName: _.l(c, 1),
					cKb: d,
					XHa: e,
					a8a: e / d <= .5
				};
			});
		};
		_.J0 = class {
			constructor() {
				this.H = _.m(_.Zq);
				this.F = _.M("");
				this.A = _.Zi(Object.assign({}, {}, {
					params: () => ({ model: this.F() }),
					Xc: ({ params: a }) => (a = a.model) ? _.lWc(this, a) : Promise.resolve(null)
				}));
				this.Sa = this.A.asReadonly().Sa;
				this.error = this.A.asReadonly().error;
				this.quota = _.W(() => {
					if (this.error()) return null;
					var a;
					return (a = this.A.value()) != null ? a : null;
				});
			}
		};
		_.J0.J = function(a) {
			return new (a || _.J0)();
		};
		_.J0.sa = _.Cd({
			token: _.J0,
			factory: _.J0.J,
			wa: "root"
		});
		var fnd, gnd, hnd, jnd, knd, mnd, ond, pnd, qnd, snd, K3, tnd;
		fnd = function(...a) {
			var b = _.kf(a), c = _.Xha(a);
			return c.length ? new _.ef((d) => {
				var e = c.map(() => []), f = c.map(() => !1);
				d.add(() => {
					e = f = null;
				});
				for (let g = 0; !d.closed && g < c.length; g++) _.gf(c[g]).subscribe(new _.sf(d, (k) => {
					e[g].push(k);
					e.every((p) => p.length) && (k = e.map((p) => p.shift()), d.next(b ? b(...k) : k), e.some((p, r) => !p.length && f[r]) && d.complete());
				}, void 0, () => {
					f[g] = !0;
					!e[g].length && d.complete();
				}));
				return () => {
					e = f = null;
				};
			}) : _.Ef;
		};
		gnd = function(a) {
			return a ? _.Pla(() => new _.Wg(), a) : _.Pla(new _.Wg());
		};
		hnd = function(a) {
			var b = a.ub;
			return new _.ef((c) => {
				var d = b == null ? void 0 : b.Hc(() => c.complete()), e = a.subscribe((f) => c.next(f));
				return () => {
					e.unsubscribe();
					d == null || d();
				};
			});
		};
		_.F3 = function(a) {
			return {
				id: "nav_button_tour",
				showGotItButton: !1,
				steps: [{
					elementId: "nav-button",
					stepId: "nav-button-step",
					title: "New: Control your API cost",
					html: ind.Em("<span class=\"spend-cap-nav-marker\" style=\"display: none;\"></span>Set a monthly spend cap to prevent accidental overspending"),
					link: {
						label: "Create a spend cap",
						url: a
					}
				}]
			};
		};
		_.G3 = function(a) {
			return {
				id: "spend_nav_item_tour",
				showGotItButton: !1,
				steps: [{
					elementId: "spend-nav-item",
					stepId: "spend-nav-item-step",
					title: "New: Control your API cost",
					html: ind.Em("<span class=\"spend-cap-nav-marker\" style=\"display: none;\"></span>Set a monthly spend cap to prevent accidental overspending"),
					link: {
						label: "Create a spend cap",
						url: a
					}
				}]
			};
		};
		_.H3 = function(a) {
			return {
				id: "dashboard_nav_items_tour",
				showGotItButton: !1,
				steps: [{
					elementId: "dashboard-nav-item",
					stepId: "dashboard-nav-item-step",
					title: "New: Control your API cost",
					html: ind.Em("<span class=\"spend-cap-nav-marker\" style=\"display: none;\"></span>Set a monthly spend cap to prevent accidental overspending"),
					link: {
						label: "Create a spend cap",
						url: a
					}
				}]
			};
		};
		_.I3 = function() {
			return {
				id: "spend_page_tour",
				showGotItButton: !0,
				steps: [{
					elementId: "project-usage-limit-card",
					stepId: "project-usage-limit-card-step",
					title: "New: Control your API cost",
					timeout: 5e3,
					html: ind.Em("<span class=\"spend-cap-project-usage-limit-card-marker\" style=\"display: none;\"></span>Set a monthly spend cap to prevent accidental overspending")
				}, {
					elementId: "project-usage-amount",
					stepId: "project-usage-amount-step",
					title: "Current monthly spend",
					timeout: 5e3,
					html: ind.Em("<span class=\"spend-cap-project-usage-amount-marker\" style=\"display: none;\"></span>Information updates within 10 minutes. You may exceed your cap during this delay.")
				}]
			};
		};
		jnd = function(a) {
			a & 1 && (_.F(0, "h2", 11)(1, "span", 23), _.R(2), _.H()());
			a & 2 && (a = _.K(), _.E("id", a.yya), _.y(2), _.U(a.step().title));
		};
		knd = function(a, b) {
			a & 1 && _.I(0, "li", 25);
			a & 2 && (a = b.jb, b = _.K(2), _.P("current", a === b.Vp()));
		};
		mnd = function(a) {
			a & 1 && (_.F(0, "ol", 17), _.Ah(1, knd, 1, 2, "li", 24, _.yh), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(_.zi(0, lnd).constructor(a.Yca())));
		};
		ond = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 26, 2);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					nnd(c, 3);
					return _.t();
				})("keydown", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(J3(d, c, "actionButton"));
				});
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("href", a.linkUrl, _.rg)("buttonType", a.Qea.ACTION)("tourTheme", a.HC), _.y(2), _.S(" ", a.bEa, " "));
		};
		pnd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 27, 3);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.oHa());
				})("keydown", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(J3(d, c, "backButton"));
				});
				_.Mh(2, 6);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("buttonType", a.Qea.BACK)("tourTheme", a.HC), _.wh("aria-controls", a.Apa));
		};
		qnd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 28, 4);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.aN());
				})("keydown", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(J3(d, c, "nextButton"));
				});
				_.Mh(2, 7);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("buttonType", a.Qea.znb)("tourTheme", a.HC), _.wh("aria-controls", a.Apa));
		};
		snd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 29, 5);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(rnd(c));
				})("keydown", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(J3(d, c, "gotItButton"));
				});
				_.Mh(2, 8);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("buttonType", a.Qea.Kkb)("tourTheme", a.HC), _.wh("aria-controls", a.Apa));
		};
		K3 = _.JVa(new _.LVa());
		tnd = new Map(K3.A.R);
		tnd.set("style", { Np: 4 });
		K3.A = new _.Gv(K3.A.H, K3.A.A, K3.A.I, tnd, K3.A.F);
		var ind = K3.build();
		var L3 = class {
			constructor() {
				this.A = new Map();
			}
			add(a, b, c = !1) {
				this.A.has(a) ? c || this.A.get(a).next(b) : (c = new _.Zg(1), this.A.set(a, c), c.next(b));
			}
			observe(a) {
				this.A.has(a) || this.A.set(a, new _.Zg(1));
				return this.A.get(a).asObservable();
			}
			remove(a) {
				var b;
				(b = this.A.get(a)) == null || b.complete();
				this.A.delete(a);
			}
		};
		L3.J = function(a) {
			return new (a || L3)();
		};
		L3.sa = _.Cd({
			token: L3,
			factory: L3.J,
			wa: "root"
		});
		var und = {
			LEGACY: "LEGACY",
			ipb: "REACH_WHITE",
			Z1b: "REACH_PRIMARY"
		}, vnd = { HC: "LEGACY" }, wnd = new _.he("STEP_OVERLAY_CONFIG_TOKEN");
		var xnd = {
			ACTION: 0,
			BACK: 1,
			znb: 2,
			Kkb: 3,
			0: "ACTION",
			1: "BACK",
			2: "NEXT",
			3: "GOT_IT"
		}, ynd = {
			JWb: 0,
			JOa: 1,
			0: "BASIC",
			1: "FLAT"
		}, znd = class {
			constructor() {
				this.HC = _.V("LEGACY");
				this.buttonType = _.Li.required();
				this.lVa = ynd;
				this.format = {
					format: 0,
					color: void 0
				};
				this.A = new Map([
					["REACH_PRIMARY", new Map([
						[0, {
							format: 1,
							color: "primary"
						}],
						[1, {
							format: 1,
							color: "primary"
						}],
						[2, {
							format: 1,
							color: void 0
						}],
						[3, {
							format: 1,
							color: void 0
						}]
					])],
					["REACH_WHITE", new Map([
						[0, {
							format: 0,
							color: "primary"
						}],
						[1, {
							format: 0,
							color: "primary"
						}],
						[2, {
							format: 1,
							color: "primary"
						}],
						[3, {
							format: 1,
							color: "primary"
						}]
					])],
					["LEGACY", new Map([
						[0, {
							format: 0,
							color: void 0
						}],
						[1, {
							format: 0,
							color: void 0
						}],
						[2, {
							format: 1,
							color: "primary"
						}],
						[3, {
							format: 0,
							color: void 0
						}]
					])]
				]);
			}
			ib() {
				this.format = this.A.get(this.HC()).get(this.buttonType());
			}
		};
		znd.J = function(a) {
			return new (a || znd)();
		};
		znd.Oa = _.We({
			type: znd,
			da: [[
				"button",
				"mat-button",
				"",
				"buttonFormat",
				""
			], [
				"a",
				"mat-button",
				"",
				"buttonFormat",
				""
			]],
			Ua: 9,
			Ja: function(a, b) {
				a & 2 && (_.wh("color", b.format.color), _.P("mdc-button--unelevated", b.format.format === b.lVa.JOa)("mat-mdc-unelevated-button", b.format.format === b.lVa.JOa)("mat-primary", b.format.color === "primary")("mat-unthemed", b.format.color !== "primary"));
			},
			inputs: {
				HC: [1, "tourTheme"],
				buttonType: [1, "buttonType"]
			}
		});
		var And = ["contentContainer"], Bnd = ["closeButton"], Cnd = ["actionButton"], Dnd = ["nextButton"], End = ["backButton"], Fnd = ["gotItButton"], lnd = () => [], Gnd = class {
			constructor(a, b) {
				this.Ga = a;
				if (this.A = b) this.A.F = this;
			}
			get next() {
				var a = this.F;
				return (a == null ? 0 : a.Ga) ? a : a == null ? void 0 : a.next;
			}
			get previous() {
				var a = this.A;
				return (a == null ? 0 : a.Ga) ? a : a == null ? void 0 : a.previous;
			}
		}, J3 = function(a, b, c) {
			b.key === "Tab" && (a = a.A.get(c), a = b.shiftKey ? a.previous : a.next, a == null ? 0 : a.Ga) && (b.stopPropagation(), b.preventDefault(), a.Ga.nativeElement.focus());
		}, rnd = function(a) {
			nnd(a, 0);
			a.exit.emit();
		}, nnd = function(a, b) {
			a.stepId && a.onNavigation() && a.onNavigation()(b, a.stepId);
		}, Hnd = class {
			constructor() {
				this.el = _.m(_.Jf);
				this.DK = _.m(_.im, { optional: !0 }) === "NoopAnimations";
				this.step = _.Li.required();
				this.Vp = _.Li.required();
				this.Yca = _.Li.required();
				this.onNavigation = _.V();
				this.showGotItButton = _.V();
				this.navigation = _.Ki();
				this.exit = _.Ki();
				this.FA = [];
				this.yya = "";
				this.bEa = "Learn More";
				this.xQa = und;
				var a;
				this.F = (a = _.m(wnd, { optional: !0 })) != null ? a : vnd;
				this.HC = this.F.HC;
				this.Qea = xnd;
				this.A = new Map([]);
				this.Ey = _.Ni.required("contentContainer", { read: _.Jf });
				this.pWa = _.Ni.required("closeButton", { read: _.Jf });
				this.rTa = _.Ni("actionButton", Object.assign({}, {}, { read: _.Jf }));
				this.L5a = _.Ni("nextButton", Object.assign({}, {}, { read: _.Jf }));
				this.PUa = _.Ni("backButton", Object.assign({}, {}, { read: _.Jf }));
				this.q0a = _.Ni("gotItButton", Object.assign({}, {}, { read: _.Jf }));
			}
			ib() {
				var a = this.step(), b = this.Vp(), c = this.Yca(), d = `slide-${b + 1}`;
				this.Apa = `slide-container-${d}`;
				this.yya = `dialog-heading-${d}`;
				this.sYa = `dialog-description-${d}`;
				this.Yab = b > 0;
				this.EKa = b < c - 1;
				a.link && (this.bEa = a.link.label || this.bEa, this.linkUrl = a.link.url.toString());
				this.stepId = a.stepId;
				b = document.createElement("p");
				_.ud(b, a.html);
				this.FA.push(this.yya);
				this.FA.push(this.sYa);
				b.remove();
			}
			Rb() {
				_.ud(this.Ey().nativeElement, this.step().html);
				var a = [["slideContainer", this.el]], b = this.L5a();
				b && a.push(["nextButton", b]);
				(b = this.q0a()) && a.push(["gotItButton", b]);
				(b = this.rTa()) && a.push(["actionButton", b]);
				(b = this.PUa()) && a.push(["backButton", b]);
				a.push(["closeButton", this.pWa()]);
				for (b = 0; b < a.length; b++) {
					let [c, d] = a[b], e = b ? this.A.get(a[b - 1][0]) : void 0;
					this.A.set(c, new Gnd(d, e));
				}
				for (let c of this.A.values()) c.next && c.previous && c.Ga.nativeElement.setAttribute("tabindex", "-1");
				this.el.nativeElement.focus();
			}
			oHa() {
				this.Yab && (this.navigate(this.Vp() - 1), nnd(this, 1));
			}
			aN() {
				this.EKa && (this.navigate(this.Vp() + 1), nnd(this, 2));
			}
			navigate(a) {
				this.navigation.emit(a);
			}
		};
		Hnd.J = function(a) {
			return new (a || Hnd)();
		};
		Hnd.ka = _.u({
			type: Hnd,
			da: [["xap-tour-step-overlay"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Ey, And, 5, _.Jf)(b.pWa, Bnd, 5, _.Jf)(b.rTa, Cnd, 5, _.Jf)(b.L5a, Dnd, 5, _.Jf)(b.PUa, End, 5, _.Jf)(b.q0a, Fnd, 5, _.Jf);
				a & 2 && _.ki(6);
			},
			eb: [
				"role",
				"group",
				"aria-roledescription",
				"carousel",
				"tabIndex",
				"-1",
				1,
				"xap-tour-slide"
			],
			Ua: 9,
			Ja: function(a, b) {
				a & 1 && _.J("keydown.tab", function(c) {
					return J3(b, c, "slideContainer");
				})("keydown.esc", function() {
					return rnd(b);
				});
				a & 2 && (_.Ch("id", b.Apa), _.wh("aria-label", b.Vp() + 1 + " of " + b.Yca())("aria-describedby", b.FA), _.P("xap-tour-theme-reach-white", b.HC === b.xQa.ipb)("xap-tour-theme-reach-blue", b.HC === b.xQa.Y1b)("xap-tour-slide-animations-disabled", b.DK));
			},
			inputs: {
				step: [1, "step"],
				Vp: [1, "stepIndex"],
				Yca: [1, "tourLength"],
				onNavigation: [1, "onNavigation"],
				showGotItButton: [1, "showGotItButton"]
			},
			outputs: {
				navigation: "navigation",
				exit: "exit"
			},
			ha: 18,
			ia: 7,
			la: () => [
				["contentContainer", ""],
				["closeButton", ""],
				["actionButton", ""],
				["backButton", ""],
				["nextButton", ""],
				["gotItButton", ""],
				" Back",
				" Next ",
				" Got it ",
				[1, "xap-tour-slide-top-container"],
				[1, "xap-tour-slide-content-container"],
				[
					1,
					"xap-tour-slide-header",
					3,
					"id"
				],
				[
					1,
					"xap-tour-slide-content",
					3,
					"id"
				],
				[
					"aria-label",
					"Close guided tour",
					"mat-icon-button",
					"",
					1,
					"xap-tour-exit-button",
					3,
					"click",
					"keydown"
				],
				[1, "overlay-icon"],
				[1, "xap-tour-slide-footer"],
				[1, "xap-tour-step-list-container"],
				[
					"role",
					"presentation",
					"aria-hidden",
					"true",
					1,
					"xap-tour-step-list"
				],
				[1, "xap-tour-slide-controls"],
				[
					"aria-label",
					"Further resources",
					"mat-button",
					"",
					"buttonFormat",
					"",
					"target",
					"_blank",
					1,
					"xap-tour-navigation",
					3,
					"href",
					"buttonType",
					"tourTheme"
				],
				[
					"aria-label",
					"Previous slide",
					"mat-button",
					"",
					"buttonFormat",
					"",
					1,
					"xap-tour-navigation",
					"xap-tour-back-button",
					3,
					"buttonType",
					"tourTheme"
				],
				[
					"mat-button",
					"",
					"buttonFormat",
					"",
					"aria-label",
					"Next slide",
					1,
					"xap-tour-navigation",
					"xap-tour-next-button",
					3,
					"buttonType",
					"tourTheme"
				],
				[
					"mat-button",
					"",
					"buttonFormat",
					"",
					"aria-label",
					"Close guided tour",
					1,
					"xap-tour-navigation",
					"xap-tour-got-it-button",
					3,
					"buttonType",
					"tourTheme"
				],
				[1, "xap-tour-slide-title"],
				[
					1,
					"xap-tour-step-list-bubble",
					3,
					"current"
				],
				[1, "xap-tour-step-list-bubble"],
				[
					"aria-label",
					"Further resources",
					"mat-button",
					"",
					"buttonFormat",
					"",
					"target",
					"_blank",
					1,
					"xap-tour-navigation",
					3,
					"click",
					"keydown",
					"href",
					"buttonType",
					"tourTheme"
				],
				[
					"aria-label",
					"Previous slide",
					"mat-button",
					"",
					"buttonFormat",
					"",
					1,
					"xap-tour-navigation",
					"xap-tour-back-button",
					3,
					"click",
					"keydown",
					"buttonType",
					"tourTheme"
				],
				[
					"mat-button",
					"",
					"buttonFormat",
					"",
					"aria-label",
					"Next slide",
					1,
					"xap-tour-navigation",
					"xap-tour-next-button",
					3,
					"click",
					"keydown",
					"buttonType",
					"tourTheme"
				],
				[
					"mat-button",
					"",
					"buttonFormat",
					"",
					"aria-label",
					"Close guided tour",
					1,
					"xap-tour-navigation",
					"xap-tour-got-it-button",
					3,
					"click",
					"keydown",
					"buttonType",
					"tourTheme"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Gh(0), _.F(1, "div", 9)(2, "div", 10), _.B(3, jnd, 3, 2, "h2", 11), _.I(4, "section", 12, 0), _.H(), _.F(6, "button", 13, 1), _.J("click", function() {
					return rnd(b);
				})("keydown", function(c) {
					return J3(b, c, "closeButton");
				}), _.F(8, "mat-icon", 14), _.R(9, "close"), _.H()()(), _.F(10, "footer", 15)(11, "span", 16), _.B(12, mnd, 3, 1, "ol", 17), _.H(), _.F(13, "span", 18), _.B(14, ond, 3, 4, "a", 19), _.B(15, pnd, 3, 3, "button", 20), _.B(16, qnd, 3, 3, "button", 21), _.B(17, snd, 3, 3, "button", 22), _.H()(), _.Hh());
				a & 2 && (_.y(3), _.C(b.step().title ? 3 : -1), _.y(), _.E("id", b.sYa), _.y(8), _.C(b.Yca() > 1 ? 12 : -1), _.y(2), _.C(b.linkUrl ? 14 : -1), _.y(), _.C(b.Yab ? 15 : -1), _.y(), _.C(b.EKa ? 16 : -1), _.y(), _.C(b.showGotItButton() && !b.EKa ? 17 : -1));
			},
			dependencies: [
				_.tz,
				_.VC,
				_.UC,
				_.XB,
				_.YB,
				_.yA,
				_.xA,
				_.HB,
				znd
			],
			styles: ["@charset \"UTF-8\";.xap-tour-slide{-webkit-animation:xap-tour-step-overlay-appear .13s cubic-bezier(.4,0,.2,1);animation:xap-tour-step-overlay-appear .13s cubic-bezier(.4,0,.2,1);border-radius:8px;display:block;max-width:350px;min-width:200px;padding:10px;position:relative}.xap-tour-slide.xap-tour-slide-animations-disabled{-webkit-animation:none;animation:none}.xap-tour-slide,.xap-tour-slide .overlay-icon{color:#fff}.xap-tour-slide:before{content:\"\";display:block;height:12px;position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:12px}.xap-tour-slide[data-overlay-y=center]:before{margin-top:-6px;top:50%}.xap-tour-slide[data-overlay-y=center][data-overlay-x=start]{left:6px}.xap-tour-slide[data-overlay-y=center][data-overlay-x=start]:before{left:-6px}.xap-tour-slide[data-overlay-y=center][data-overlay-x=end]{right:6px}.xap-tour-slide[data-overlay-y=center][data-overlay-x=end]:before{right:-6px}.xap-tour-slide[data-overlay-y=bottom]{bottom:6px}.xap-tour-slide[data-overlay-y=bottom]:before{bottom:-6px}.xap-tour-slide[data-overlay-y=top]{top:6px}.xap-tour-slide[data-overlay-y=top]:before{top:-6px}.xap-tour-slide[data-overlay-y=bottom][data-overlay-x=start],.xap-tour-slide[data-overlay-y=top][data-overlay-x=start]{left:-30px}.xap-tour-slide[data-overlay-y=bottom][data-overlay-x=start]:before,.xap-tour-slide[data-overlay-y=top][data-overlay-x=start]:before{left:24px}.xap-tour-slide[data-overlay-y=bottom][data-overlay-x=center]:before,.xap-tour-slide[data-overlay-y=top][data-overlay-x=center]:before{left:50%;margin-left:-6px}.xap-tour-slide[data-overlay-y=bottom][data-overlay-x=end],.xap-tour-slide[data-overlay-y=top][data-overlay-x=end]{right:-30px}.xap-tour-slide[data-overlay-y=bottom][data-overlay-x=end]:before,.xap-tour-slide[data-overlay-y=top][data-overlay-x=end]:before{right:24px}.xap-tour-slide-top-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:10px}.xap-tour-slide-header{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0}.xap-tour-slide-content-container{padding-top:10px}.xap-tour-slide-title{margin-top:0}.xap-tour-slide-content{margin-bottom:8px}.xap-tour-slide-footer{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:10px}.xap-tour-slide-footer .xap-tour-step-list-container{width:70px;overflow:hidden}.xap-tour-slide-footer .xap-tour-step-list{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;list-style:none;margin:0;padding:0;white-space:nowrap}.xap-tour-slide-footer .xap-tour-step-list .xap-tour-step-list-bubble{display:inline;opacity:.5;outline:none}.xap-tour-slide-footer .xap-tour-step-list .xap-tour-step-list-bubble:before{content:\" ● \"}.xap-tour-slide-footer .xap-tour-step-list .xap-tour-step-list-bubble.current{opacity:1}.xap-tour-exit-button{margin:-4px -4px 0}.xap-tour-slide-controls{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:end;padding-right:8px;white-space:nowrap}.xap-tour-slide-controls .xap-tour-navigation{max-width:120px}@-webkit-keyframes xap-tour-step-overlay-appear{0%{opacity:0;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes xap-tour-step-overlay-appear{0%{opacity:0;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"],
			Ab: 2
		});
		var Ind, Lnd, Jnd, Knd, Mnd, Nnd;
		Ind = [
			{
				Bb: "start",
				Gb: "center",
				Lb: "end",
				Mb: "center"
			},
			{
				Bb: "end",
				Gb: "center",
				Lb: "start",
				Mb: "center"
			},
			{
				Bb: "center",
				Gb: "top",
				Lb: "center",
				Mb: "bottom"
			},
			{
				Bb: "end",
				Gb: "top",
				Lb: "center",
				Mb: "bottom"
			},
			{
				Bb: "start",
				Gb: "top",
				Lb: "center",
				Mb: "bottom"
			},
			{
				Bb: "center",
				Gb: "bottom",
				Lb: "center",
				Mb: "top"
			},
			{
				Bb: "end",
				Gb: "bottom",
				Lb: "center",
				Mb: "top"
			},
			{
				Bb: "start",
				Gb: "bottom",
				Lb: "center",
				Mb: "top"
			}
		];
		Lnd = function(a, b, c) {
			Jnd(a);
			var d = _.Ff(a.destroyed, a.Vp.pipe(_.Gf((f) => f !== c)), a.F.pipe(_.Gf((f) => f !== b))).pipe(_.Qg()), e = b.steps[c];
			a.R.observe(e.elementId).pipe(gnd((f) => _.Ff(f.pipe(_.Qg(), _.Zha(e.timeout || 1e3)), f.pipe(_.$g()))), _.dh(d)).subscribe({
				next: (f) => {
					if (f) {
						var g;
						(g = a.H) == null || g.classList.remove("xap-tour-element-active");
						a.H = f;
						var k;
						(k = a.H) == null || k.classList.add("xap-tour-element-active");
						f.scrollIntoView({
							behavior: "smooth",
							block: "nearest"
						});
						var p = b.steps, r = b.onNavigation, v = p[c];
						Knd(a, f, v, c, p.length, r, b.showGotItButton, b.disableBackgroundInteractions);
						_.Af(f, "click").pipe(_.dh(d)).subscribe(() => {
							r == null || r(c < p.length - 1 ? 4 : 5, v == null ? void 0 : v.stepId);
							Jnd(a);
							setTimeout(() => {
								a.Vp.next(c + 1);
							}, 1e3);
						});
						var w = new IntersectionObserver((D) => {
							var { height: G, right: L } = D[0].boundingClientRect;
							if (!G || L <= 0) {
								let N;
								(N = a.H) == null || N.classList.remove("xap-tour-element-active");
								a.H = void 0;
								w.disconnect();
								a.Vp.next(c + 1);
							}
						});
						w.observe(f);
						d.subscribe(() => {
							w.disconnect();
						});
					} else a.Vp.next(c + 1);
				},
				error: () => {
					a.Vp.next(c + 1);
				}
			});
		};
		_.M3 = function(a) {
			var b;
			(b = a.H) == null || b.classList.remove("xap-tour-element-active");
			Jnd(a);
			a.F.next(void 0);
			var c;
			(c = a.U) == null || c.focus();
		};
		_.N3 = function(a, b) {
			return a.I.contains(b);
		};
		Jnd = function(a) {
			var b;
			if ((b = a.Nb) == null ? 0 : b.Ug()) a.Nb.detach(), a.A = void 0;
		};
		Knd = function(a, b, c, d, e, f, g, k) {
			Mnd(a, k);
			b = Nnd(a, b);
			_.pB(a.Nb, b);
			b.cb.pipe(_.dh(a.destroyed)).subscribe((p) => {
				a.A && Object.assign(a.A.location.nativeElement.dataset, {
					overlayX: p.A.Bb,
					overlayY: p.A.Gb
				});
			});
			a.A.zk("step", c);
			a.A.zk("stepIndex", d);
			a.A.zk("tourLength", e);
			a.A.zk("onNavigation", f);
			a.A.zk("showGotItButton", g);
			_.Bu(a.A.ti);
			a.Nb.Cj();
		};
		Mnd = function(a, b) {
			a.Nb || (a.Nb = a.overlay.create({
				HD: !0,
				uf: b != null ? b : !1,
				Rc: "xap-tour-step-overlay",
				zj: a.overlay.A.A({ autoClose: !1 })
			}), a.Nb.Nn.classList.add("xap-tour"), a.Nb.Nn.setAttribute("role", "dialog"), a.Nb.Nn.setAttribute("aria-label", "Guided Tour"), a.Nb.Nn.setAttribute("aria-modal", "false"));
			if (!a.A) {
				a.Nb.detach();
				a.A = a.Nb.attach(new _.xB(Hnd));
				let c = hnd(a.A.instance.navigation).pipe(_.dh(a.destroyed)).subscribe((d) => {
					a.Vp.next(d);
				});
				a.A.instance.exit.subscribe(() => {
					c.unsubscribe();
					_.M3(a);
				});
			}
		};
		Nnd = function(a, b) {
			return _.qB(_.sB(_.rB(_.vB(a.overlay.position(), b), !0), !0), Ind);
		};
		_.O3 = class {
			constructor() {
				this.R = _.m(L3);
				this.overlay = _.m(_.EB);
				this.I = _.m(_.eGb);
				this.destroyed = new _.Zg();
				this.F = new _.Zg(1);
				this.Vp = new _.Zg(1);
				this.Fi = new _.Zg(1);
				_.vf([this.F.pipe(_.Gf(Boolean)), this.Vp]).pipe(_.dh(this.destroyed)).subscribe(([a, b]) => {
					a.steps[b] ? Lnd(this, a, b) : _.M3(this);
				});
				_.vf([this.Vp, this.F]).pipe(_.Gla(([a, b]) => {
					var c, d;
					return (a = b == null ? void 0 : (c = b.steps[a]) == null ? void 0 : (d = c.transition) == null ? void 0 : d.duration) ? _.Df(a) : _.ESa;
				}), _.dh(this.destroyed)).subscribe(([a]) => {
					this.Vp.next(a + 1);
				});
				fnd(this.Fi, this.F.pipe(_.Gf((a) => !a), _.bh(void 0))).pipe(_.uf((a) => a[0]), _.dh(this.destroyed)).subscribe((a) => {
					_.N3(this, a) ? this.F.next(void 0) : (this.I.add(a), this.Vp.next(0), this.F.next(a));
				});
			}
			Ba() {
				Jnd(this);
				this.F.complete();
				this.Vp.complete();
				this.Fi.complete();
				this.destroyed.next();
				this.destroyed.complete();
			}
		};
		_.O3.J = function(a) {
			return new (a || _.O3)();
		};
		_.O3.sa = _.Cd({
			token: _.O3,
			factory: _.O3.J,
			wa: "root"
		});
		_.P3 = class {
			constructor() {
				this.el = _.m(_.Jf);
				this.registry = _.m(L3);
				this.xapTourElementId = _.Mi();
				this.teb = _.V(!1);
			}
			fT() {
				var a = this.xapTourElementId();
				a && this.A !== a && (this.unregister(), this.registry.add(a, this.el.nativeElement, this.teb()), this.A = a);
			}
			unregister() {
				this.A && this.registry.remove(this.A);
			}
			Ba() {
				this.unregister();
			}
		};
		_.P3.J = function(a) {
			return new (a || _.P3)();
		};
		_.P3.Oa = _.We({
			type: _.P3,
			da: [[
				"",
				"xapTourElementId",
				""
			]],
			inputs: {
				xapTourElementId: [1, "xapTourElementId"],
				teb: [1, "xapTourKeepFirstElement"]
			},
			outputs: { xapTourElementId: "xapTourElementIdChange" }
		});
		var Qnd, Snd, Tnd, Und, Vnd, Wnd, Xnd, Ynd, Znd, $nd, aod, bod, cod, dod, fod, god, hod, iod, Pnd, kod, lod, nod, ood, pod, qod, rod;
		_.Ond = function() {
			return `Video ${_.Qk(Date.now(), "MMMM dd, yyyy - h:mma", "en-US")}.mp4`;
		};
		Qnd = function(a, b) {
			return _.x(function* () {
				var c = yield Promise.all(b.map((f) => _.rH(a, f, !1)));
				c = (yield Promise.all(c.map((f) => f == null ? void 0 : f.json()))).filter((f) => !!f).filter((f) => f.name.startsWith("video_generation_"));
				var d = yield Promise.all(c.map((f) => Pnd(a, f.id))), e = yield Promise.all(d.map((f) => f == null ? void 0 : f.json()));
				return new Map(c.map((f, g) => {
					var k;
					return [f.id, (k = e[g]) == null ? void 0 : k.id];
				}));
			});
		};
		_.Rnd = function(a) {
			if (!a) return "";
			a = Math.round((Date.now() - a.getTime()) / 1e3);
			return a < 60 ? "Just now" : a < 120 ? "A minute ago" : a < 3600 ? `${Math.floor(a / 60)} minutes ago` : Math.floor(a / 3600) === 1 ? "1 hour ago" : a < 86400 ? `${Math.floor(a / 3600)} hours ago` : a < 172800 ? "Yesterday" : a < 604800 ? `${Math.floor(a / 86400)} days ago` : Math.floor(a / 604800) === 1 ? "1 week ago" : a < 2592e3 ? `${Math.floor(a / 604800)} weeks ago` : Math.floor(a / 2592e3) === 1 ? "1 month ago" : a < 31536e3 ? `${Math.floor(a / 2592e3)} months ago` : Math.floor(a / 31536e3) === 1 ? "1 year ago" : `${Math.floor(a / 31536e3)} years ago`;
		};
		Snd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "mat-checkbox", 7);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.nCa.set(c.checked));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("checked", a.nCa()), _.y(), _.U(a.Hjb));
		};
		Tnd = function(a) {
			a & 1 && (_.I(0, "mat-spinner", 8), _.R(1, " Deleting "));
		};
		Und = function(a) {
			a & 1 && _.R(0, " Delete ");
		};
		Vnd = function(a) {
			a & 1 && (_.F(0, "div", 2), _.I(1, "mat-spinner", 4), _.F(2, "span"), _.R(3, "Fetching prompt details. Please wait..."), _.H()());
			a & 2 && (_.y(), _.E("diameter", 16));
		};
		Wnd = function(a) {
			a & 1 && (_.F(0, "p", 8), _.R(1, "Cannot be empty or contain only spaces."), _.H());
		};
		Xnd = function(a) {
			a & 1 && (_.F(0, "p", 8), _.R(1, "Cannot be more than 100 characters."), _.H());
		};
		Ynd = function(a) {
			a & 1 && (_.F(0, "p", 8), _.R(1, "Cannot be more than 1000 characters."), _.H());
		};
		Znd = function(a) {
			a & 1 && _.R(0, " Prompt is being processed for saving. Please wait... ");
		};
		$nd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "form")(1, "div", 5)(2, "label", 6);
				_.R(3, "Prompt name");
				_.H();
				_.F(4, "input", 7);
				_.J("input", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.REb(c));
				})("keydown.enter", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.xm());
				});
				_.H();
				_.B(5, Wnd, 2, 0, "p", 8)(6, Xnd, 2, 0, "p", 8);
				_.H();
				_.F(7, "div", 9)(8, "label", 10);
				_.R(9, "Description");
				_.H();
				_.F(10, "textarea", 11);
				_.J("input", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.QEb(c));
				});
				_.R(11, "          ");
				_.H();
				_.B(12, Ynd, 2, 0, "p", 8);
				_.H()();
				_.B(13, Znd, 1, 0);
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(0);
				_.y(4);
				_.E("value", a.Baa());
				_.y();
				_.C(a.A3a() ? 5 : a.B3a() ? 6 : -1);
				_.y(5);
				_.E("value", a.zaa());
				_.y(2);
				_.C(a.K2a() ? 12 : -1);
				_.y();
				_.C(b ? 13 : -1);
			}
		};
		aod = function(a) {
			a & 1 && (_.I(0, "mat-spinner", 14), _.R(1, " Processing "));
		};
		bod = function(a) {
			a & 1 && (_.I(0, "mat-spinner", 14), _.R(1, " Saving "));
		};
		cod = function(a) {
			a & 1 && _.R(0, " Save ");
		};
		dod = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "mat-dialog-actions", 3)(1, "button", 12);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Ue());
				});
				_.R(2, "Cancel");
				_.H();
				_.F(3, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.xm());
				});
				_.B(4, aod, 2, 0)(5, bod, 2, 0)(6, cod, 1, 0);
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(0);
				_.y(3);
				_.E("disabled", a.AIb());
				_.y();
				_.C(b ? 4 : a.kk() ? 5 : 6);
			}
		};
		fod = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 2);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(eod(c));
				});
				_.I(1, "span", 3);
				_.R(2, " Share ");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("disabled", a.yc())("matTooltip", a.rd()), _.y(), _.E("iconName", a.S.hQa));
		};
		god = function(a) {
			a & 1 && _.R(0, " Share ");
		};
		hod = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 4);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(!c.yc() && eod(c));
				});
				_.B(1, god, 1, 0);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("variant", a.nra() ? "borderless" : "icon-borderless")("disabled", a.yc())("matTooltip", a.nra() ? "" : a.rd())("iconName", a.S.hQa), _.y(), _.C(a.nra() ? 1 : -1));
		};
		_.BM.prototype.iu = _.ca(194, function(a, b = !1) {
			a !== void 0 ? this.H.set(a) : this.H.update((c) => !c);
			this.F.A.ey() || b || this.U.set(this.H());
		});
		iod = function(a) {
			return _.x(function* () {
				if (!(yield _.pf(_.jC(a.dialog.open(_.kF, { data: {
					title: "Save your conversations in Google Drive (Recommended)",
					content: "Saving in Drive makes it easy to keep your work safe in one place, and easily find past conversations.",
					Pba: !1,
					dba: "Enable Google Drive",
					T4: "Cancel and use Temporary chat",
					uV: 273916,
					vV: 273917
				} }))))) return a.Ia.hasShownDrivePermissionDialog.set(!0), a.Ia.autosaveEnabled.set(!1), !1;
				var b = yield _.pF(a);
				a.Ia.hasShownDrivePermissionDialog.set(!0);
				return b === !1 ? (a.Ia.autosaveEnabled.set(!1), !1) : !0;
			});
		};
		_.jod = function(a) {
			return _.x(function* () {
				return (yield _.pf(a.H)) ? !0 : a.Ia.hasShownDrivePermissionDialog() ? !1 : yield iod(a);
			});
		};
		Pnd = function(a, b) {
			var c = _.Ond();
			return _.x(function* () {
				var d = _.Yx();
				d = yield _.Ey(a.I, d).then((e) => _.l(e, 1)).catch(() => {});
				return fetch(`https://www.googleapis.com/drive/v3/files/${b}/copy`, {
					method: "POST",
					headers: d ? { Authorization: "Bearer " + d } : void 0,
					body: JSON.stringify({ name: c })
				}).then((e) => e).catch(() => null);
			});
		};
		kod = function(a) {
			return a.PC().map((b) => b.Bg).flat().map((b) => b.driveId).filter((b) => !!b);
		};
		lod = function(a) {
			return _.x(function* () {
				var b = a.I().map((d) => d.Bg).flat().map((d) => d.driveId).filter((d) => !!d), c = yield Qnd(a.ma, b);
				b = a.I().map((d) => {
					var e = d.Bg.map((f) => {
						if (f.driveId !== void 0) {
							let g = c.get(f.driveId);
							if (g !== void 0) return Object.assign({}, f, { driveId: g });
						}
						return f;
					});
					return Object.assign({}, d, { Bg: e });
				});
				a.I.set(b);
			});
		};
		_.mod = function(a, b) {
			return _.x(function* () {
				var c = b.getName(), d, e = (d = b.getMetadata()) == null ? void 0 : d.En();
				yield a.cb.navigate([c], {
					Vq: "merge",
					queryParams: {
						model: null,
						prompt: null,
						resourceKey: e || null,
						save: "true"
					}
				});
			});
		};
		nod = function(a, b, c, d) {
			return _.x(function* () {
				try {
					a.A.set(!0);
					_.hn(_.jn(_.Rs(b, _.kn, 5), c), d);
					let e = yield a.H.save(b);
					a.A.set(!1);
					return e;
				} catch (e) {
					throw a.A.set(!1), e;
				}
			});
		};
		ood = function(a, b, c = []) {
			return _.x(function* () {
				a.R.set(!0);
				yield a.H.delete(b, c);
				a.R.set(!1);
			});
		};
		pod = function(a) {
			var b = [];
			for (let c of a) {
				let d, e, f, g, k, p, r, v;
				b.push((k = (d = _.fj(c, _.gj, 2, _.sq)) == null ? void 0 : d.getId()) != null ? k : "", (p = (e = _.fj(c, _.gj, 3, _.sq)) == null ? void 0 : e.getId()) != null ? p : "", (r = (f = _.fj(c, _.gj, 4, _.sq)) == null ? void 0 : f.getId()) != null ? r : "", (v = (g = _.fj(c, _.gj, 6, _.sq)) == null ? void 0 : g.getId()) != null ? v : "");
			}
			return b.filter((c) => c !== "");
		};
		qod = function(a, b = !0) {
			var c = [];
			if (_.Dr(a, _.zq, 14, _.yq)) {
				var d = _.oq(a);
				d && (d = [..._.pq(d), ..._.mj(d, _.qq, 2, _.oj())], c.push(...pod(d)));
			} else if (_.Dr(a, _.Mx, 17, _.yq) && (a = _.fj(a, _.Mx, 17, _.yq))) {
				let e = _.fj(a, _.gj, 2, _.Nx);
				e && !b && c.push(e.getId());
				for (d of _.mj(a, _.Ix, 5, _.oj())) (b = _.fj(d, _.gj, 2, _.Jx)) && c.push(b.getId());
			}
			return c;
		};
		rod = function(a, b) {
			return _.x(function* () {
				var c = (yield _.kob(a.R, b.split("/")[1], "Allow access to Google Drive to delete this Prompt.")).getPrompt();
				return qod(c);
			});
		};
		_.Q3 = class {
			constructor() {
				this.F = _.m(_.iC);
				this.Jf = _.m(_.UH);
				this.R = _.m(_.rF);
				this.I = _.m(_.jH);
				this.H = _.m(_.Ou);
				this.rb = _.m(_.Qp);
				this.Rd = _.m(_.uH);
				this.A = _.m(_.qC);
				this.Wa = _.m(_.kC);
				this.Mt = _.M(!1);
				this.QB = this.A.af === 17;
				this.Hjb = "Delete generated video/s";
				this.nCa = _.M(!0);
			}
			MFa() {
				var a = this;
				return _.x(function* () {
					try {
						let b = a.A.ii, c = a.A.af;
						a.Mt.set(!0);
						a.F.show({
							content: "Deleting prompt...",
							Ne: "info",
							Aj: 8
						});
						_.Rn(a.H, "NAV", "Clicked Delete Prompt Button");
						let d = [];
						if (a.nCa() && c === 17) {
							let e = a.rb.name();
							if (b === e) {
								let f = a.Rd.Bg();
								for (let g of f) g.driveId && d.push(g.driveId);
							} else {
								let f = yield rod(a, b);
								d.push(...f);
							}
						}
						yield ood(a.Jf, a.A.ii, d);
						a.F.pj();
						a.I.A.set(!0);
						a.Wa.close(!0);
					} catch (b) {
						a.Mt.set(!1), a.F.show({
							content: "Failed to delete prompt. Please retry.",
							Ne: "error",
							Aj: 8
						});
					}
				});
			}
		};
		_.Q3.J = function(a) {
			return new (a || _.Q3)();
		};
		_.Q3.ka = _.u({
			type: _.Q3,
			da: [["ms-prompt-delete-confirmation-dialog"]],
			ha: 13,
			ia: 4,
			la: [
				[1, "action-confirmation"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[1, "content"],
				[
					1,
					"delete-generated-videos-checkbox",
					3,
					"checked"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"mat-dialog-close",
					"",
					3,
					"disabled"
				],
				[
					"ms-button",
					"",
					"cdkFocusRegionEnd",
					"",
					"cdkFocusInitial",
					"",
					3,
					"click",
					"disabled"
				],
				[
					1,
					"delete-generated-videos-checkbox",
					3,
					"change",
					"checked"
				],
				[
					"diameter",
					"16",
					1,
					"delete-progress-indicator"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, " Delete prompt "), _.H(), _.F(3, "mat-dialog-content")(4, "div", 2), _.R(5, "Are you sure?"), _.H(), _.B(6, Snd, 2, 2, "mat-checkbox", 3), _.H(), _.F(7, "mat-dialog-actions", 4)(8, "button", 5), _.R(9, "Cancel"), _.H(), _.F(10, "button", 6), _.J("click", function() {
					return b.MFa();
				}), _.B(11, Tnd, 2, 0)(12, Und, 1, 0), _.H()()());
				a & 2 && (_.y(6), _.C(b.QB ? 6 : -1), _.y(2), _.E("disabled", b.Mt()), _.y(2), _.E("disabled", b.Mt()), _.y(), _.C(b.Mt() ? 11 : 12));
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.zC,
				_.yC,
				_.qE,
				_.pE
			],
			styles: [".content[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.delete-progress-indicator[_ngcontent-%COMP%]{margin-right:4px;margin-top:2px}.delete-generated-videos-checkbox[_ngcontent-%COMP%]{margin-top:2px;margin-left:-4px}"]
		});
		var tod, sod;
		_.uod = function(a, b, c) {
			return _.x(function* () {
				try {
					a.Gx.set(!0), yield sod(a), yield tod(a, b, c), a.Gx.set(!1);
				} catch (d) {
					throw a.Gx.set(!1), d;
				}
			});
		};
		tod = function(a, b, c) {
			return _.x(function* () {
				b = b ? _.bGa(b) : a.rb.title();
				c = c !== void 0 ? c : a.rb.description();
				switch (a.rb.af()) {
					case 14:
						_.SJ(a.F, {
							title: b,
							description: c
						});
						_.GH(a.rb, b);
						_.qwb(a.rb, c);
						break;
					case 16:
					case 17:
						var d = a.rb.title();
						var e = a.rb.description();
						d = _.Q3a(new _.Rx(), a.rb.name()).A(_.hn(_.jn(new _.kn(), d), e));
						switch (a.rb.af()) {
							case 16:
								e = d;
								var f = a.Hg.F();
								e = _.Ap(e, 16, _.yq, f);
								_.Qx(e, a.H.F());
								break;
							case 17: e = d, f = a.Rd.F(), e = _.Ap(e, 17, _.yq, f), _.Qx(e, a.R.F());
						}
						e = d;
						b && b.length > 0 && _.jn(_.Rs(e, _.kn, 5), b);
						c && c.length > 0 && _.hn(_.Rs(e, _.kn, 5), c);
						d = a.rb.kI();
						e = yield _.Gwb(a.Jf, e);
						e.getName();
						a.rb.name();
						_.swb(a.rb, e);
						d && (a.Gx.set(!1), _.Rzb(a.I.service.F, e), yield _.mod(a.rb, e));
				}
			});
		};
		sod = function(a) {
			return _.x(function* () {
				switch (a.rb.af()) {
					case 17: yield lod(a.Rd);
				}
			});
		};
		_.R3 = class {
			constructor() {
				this.rb = _.m(_.Qp);
				_.m(_.Iw);
				_.m(_.jH);
				this.F = _.m(_.fK);
				_.m(_.Zq);
				this.Ia = _.m(_.oF);
				this.Jf = _.m(_.UH);
				this.Hg = _.m(_.hH);
				this.H = _.m(_.dH);
				this.Rd = _.m(_.uH);
				this.R = _.m(_.eH);
				this.NR = _.m(_.iH);
				_.m(_.vH);
				_.m(_.Cl);
				this.A = _.m(_.rF);
				this.dialog = _.m(_.rC);
				_.m(_.Op);
				this.I = _.m(_.NK);
				this.Gx = this.Jf.Gx;
				_.Ck(this.A.Xm, { initialValue: void 0 });
				this.U = _.up(() => {
					_.uod(this);
				}, 3e3);
				_.Fk([
					this.Ia.autosaveEnabled,
					this.rb.af,
					this.rb.Aa,
					this.rb.Fa,
					this.rb.SZ,
					this.NR.F
				], () => {
					var a = this;
					return _.x(function* () {
						var b = a.Ia.autosaveEnabled(), c = a.rb.af(), d = a.rb.Aa(), e = a.rb.Fa(), f = a.rb.SZ(), g = a.NR.F(), k = a.Gx();
						!b || c !== 16 && c !== 17 || (b = !k && !d && e && !f, c === 16 && (b = b && !g), b && (c !== 16 || (yield _.jod(a.A))) && a.U());
					});
				});
			}
		};
		_.R3.J = function(a) {
			return new (a || _.R3)();
		};
		_.R3.sa = _.Cd({
			token: _.R3,
			factory: _.R3.J,
			wa: "root"
		});
		var vod;
		vod = function(a, b, c) {
			return _.x(function* () {
				if (a.data.S8) yield _.uod(a.ea, b, c);
				else {
					let d = yield a.lz(a.data.Ll);
					yield nod(a.Jf, d, b, c);
				}
			});
		};
		_.S3 = class {
			constructor() {
				this.Wa = _.m(_.kC);
				this.R = _.m(_.iC);
				this.I = _.m(_.Nw);
				this.data = _.m(_.qC);
				this.H = _.m(_.Ou);
				this.Jf = _.m(_.UH);
				this.rb = _.m(_.Qp);
				this.ea = _.m(_.R3);
				this.aa = _.m(_.jH);
				this.Ii = _.m(_.GJ);
				this.X = _.m(_.gH);
				this.pCa = _.M(!1);
				this.A = _.M(!1);
				this.Baa = _.M("");
				this.zaa = _.M("");
				this.F = _.W(() => this.Baa().trim());
				this.U = _.W(() => this.zaa().trim());
				this.K2a = _.W(() => this.U().length > 1e3);
				this.A3a = _.W(() => this.F() === "");
				this.B3a = _.W(() => this.F().length > 100);
				this.AIb = _.W(() => this.K2a() || this.B3a() || this.A3a() || this.Ii.Qka() || this.kk());
				this.REb = (a) => {
					this.Baa.set(a.target.value);
				};
				this.QEb = (a) => {
					this.zaa.set(a.target.value);
				};
				this.fa = this.X.kk;
				this.kk = _.W(() => this.Jf.Gx() || this.fa() || this.A());
				this.data.S8 ? (this.Baa.set(this.rb.title()), this.zaa.set(this.rb.description())) : this.pCa.set(!0);
			}
			ib() {
				var a = this;
				return _.x(function* () {
					try {
						if (!a.data.S8) {
							let b = yield a.lz(a.data.Ll), c, d;
							a.Baa.set((d = (c = b.getMetadata()) == null ? void 0 : c.getDisplayName()) != null ? d : "");
							let e, f;
							a.zaa.set((f = (e = b.getMetadata()) == null ? void 0 : e.jc()) != null ? f : "");
							a.pCa.set(!1);
						}
					} catch (b) {
						a.handleError(b), a.Wa.close({ save: !1 });
					}
				});
			}
			xm() {
				var a = this;
				return _.x(function* () {
					if (!a.kk()) try {
						a.A.set(!0);
						let b = a.F(), c = a.U(), d;
						((d = a.data) == null ? 0 : d.FG) && _.Rn(a.H, a.data.FG, "Clicked Save Dialog Action", "confirm");
						yield vod(a, b, c);
						a.Wa.close({
							save: !0,
							title: b,
							description: c
						});
						a.aa.A.set(!0);
					} catch (b) {
						a.A.set(!1), a.handleError(b);
					}
				});
			}
			handleError(a) {
				a instanceof Error ? (this.I.warning(a), this.R.error(a.message)) : (this.I.warning(Error(String(a))), this.R.error("An unexpected error occurred."));
			}
			lz(a) {
				var b = this;
				return _.x(function* () {
					var c = yield _.TH(b.Jf, a).then((d) => d.prompt);
					if (!c) throw Error("si");
					return c;
				});
			}
			Ue() {
				var a;
				((a = this.data) == null ? 0 : a.FG) && _.Rn(this.H, this.data.FG, "Clicked Save Dialog Action", "cancel");
				this.Wa.close({ save: !1 });
			}
		};
		_.S3.J = function(a) {
			return new (a || _.S3)();
		};
		_.S3.ka = _.u({
			type: _.S3,
			da: [["ms-save-prompt-dialog"]],
			ha: 8,
			ia: 3,
			la: [
				[1, "save-prompt-dialog"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[1, "spinner-container"],
				["align", "end"],
				[3, "diameter"],
				[
					1,
					"title-input-container",
					"form-field"
				],
				[1, "save-dialog-label"],
				[
					"ms-input",
					"",
					"cdkFocusInitial",
					"",
					"aria-label",
					"Prompt name text field",
					3,
					"input",
					"keydown.enter",
					"value"
				],
				[
					"data-test-save-dialog-error-caption",
					"",
					1,
					"error-label"
				],
				[
					1,
					"description-input-container",
					"form-field"
				],
				[
					"for",
					"description-input",
					1,
					"save-dialog-label",
					"description-label"
				],
				[
					"ms-input",
					"",
					"id",
					"description-input",
					"aria-label",
					"Prompt description text field",
					"placeholder",
					"Optional",
					"rows",
					"3",
					1,
					"description-input",
					3,
					"input",
					"value"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Cancel",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Save title and description",
					3,
					"click",
					"disabled"
				],
				[
					"diameter",
					"16",
					1,
					"save-progress-indicator"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Th(0), _.F(1, "div", 0)(2, "h2", 1), _.R(3, " Save prompt "), _.H(), _.F(4, "mat-dialog-content"), _.B(5, Vnd, 4, 1, "div", 2)(6, $nd, 14, 5), _.H(), _.B(7, dod, 7, 2, "mat-dialog-actions", 3), _.H());
				a & 2 && (_.Uh(b.Ii.Qka()), a = b.pCa(), _.y(5), _.C(a ? 5 : 6), _.y(2), _.C(a ? -1 : 7));
			},
			dependencies: [
				_.Yy,
				_.JD,
				_.wD,
				_.pD,
				_.rD,
				_.gE,
				_.xC,
				_.uC,
				_.wC,
				_.vC,
				_.zC,
				_.yC
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.save-dialog-label[_ngcontent-%COMP%]{color:var(--color-on-surface);margin-bottom:8px}.save-dialog-label.description-label[_ngcontent-%COMP%]{margin-top:8px}.spinner-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.save-progress-indicator[_ngcontent-%COMP%]{margin-right:4px;margin-top:2px}.error-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}"]
		});
		var eod, wod, xod;
		eod = function(a) {
			return _.x(function* () {
				try {
					if (!a.ii()) throw Error("ti");
					_.Rn(a.H, a.FG(), "Clicked Share Prompt Button");
					if (!(yield _.pf(_.Qvb(a.F)))) throw Error("ui");
					let c = [], d = a.rb.name();
					if (a.ii() === d) {
						if (c.push(...a.Ii.U()), a.rb.af() === 17) {
							let f = kod(a.Rd);
							c.push(...f);
						}
					} else a.A.info("Sharing prompt..."), c.push(...yield wod(a, a.ii())), a.A.pj();
					let e = [a.Ll(), ...c];
					var b = a.F;
					b.F.setItemIds(e);
					b.F.showSettingsDialog();
					a.ev && (yield xod()) && a.A.success("Link copied to clipboard");
				} catch (c) {
					a.A.error(c.message);
				}
			});
		};
		wod = function(a, b) {
			return _.x(function* () {
				var c = (yield _.kob(a.R, b.split("/")[1], "Allow access to Google Drive to share this Prompt.")).getPrompt();
				return qod(c, !1);
			});
		};
		xod = function() {
			return _.x(function* () {
				var a = `${window.location.origin}${window.location.pathname}`;
				if (!navigator.clipboard) return console.error("Clipboard API not available."), !1;
				try {
					return yield navigator.clipboard.writeText(a), !0;
				} catch (b) {
					return console.error("Failed to copy link to clipboard", b), !1;
				}
			});
		};
		_.T3 = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.iC);
				this.F = _.m(_.sH);
				this.Jf = _.m(_.UH);
				this.R = _.m(_.rF);
				this.H = _.m(_.Ou);
				this.rb = _.m(_.Qp);
				this.Rd = _.m(_.uH);
				this.I = _.m(_.Op);
				this.Ii = _.m(_.GJ);
				this.ii = _.Li.required();
				this.FG = _.Li.required();
				this.C8a = _.V(!1);
				this.rd = _.V("");
				this.nra = _.V(!1);
				this.yc = _.V(!1);
				this.ev = this.I.getFlag(_.vE);
				this.Ll = _.W(() => this.ii().split("/")[1]);
			}
		};
		_.T3.J = function(a) {
			return new (a || _.T3)();
		};
		_.T3.ka = _.u({
			type: _.T3,
			da: [["ms-share-prompt"]],
			inputs: {
				ii: [1, "promptName"],
				FG: [1, "analyticsCategory"],
				C8a: [1, "renderAsMenuItem"],
				rd: [1, "tooltipText"],
				nra: [1, "withLabel"],
				yc: [1, "isDisabled"]
			},
			ha: 2,
			ia: 1,
			la: [
				[
					"mat-menu-item",
					"",
					"disabledInteractive",
					"",
					"matTooltipPosition",
					"after",
					1,
					"icon-text-button",
					3,
					"disabled",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Share prompt",
					"matTooltipPosition",
					"below",
					3,
					"variant",
					"disabled",
					"matTooltip",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"disabledInteractive",
					"",
					"matTooltipPosition",
					"after",
					1,
					"icon-text-button",
					3,
					"click",
					"disabled",
					"matTooltip"
				],
				[3, "iconName"],
				[
					"ms-button",
					"",
					"aria-label",
					"Share prompt",
					"matTooltipPosition",
					"below",
					3,
					"click",
					"variant",
					"disabled",
					"matTooltip",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, fod, 3, 3, "button", 0)(1, hod, 2, 5, "button", 1);
				a & 2 && _.C(b.C8a() ? 0 : 1);
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.wI,
				_.sI,
				_.IC,
				_.HC
			],
			styles: [".icon-text-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{margin-right:8px}"]
		});
		var Jmd;
		_.w3 = function(a) {
			return a.startsWith("models/gemma-");
		};
		Jmd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		_.Kmd = function(a, b) {
			a.I = b != null ? b : a.F().map((c) => c.getValues());
		};
		var Nmd, Omd, Pmd, Qmd, Mmd;
		_.Lmd = function(a, b = !1) {
			var c = b ? {
				ctrl: "⌃",
				alt: "⌥",
				shift: "⇧",
				meta: "⌘",
				cmd: "⌘",
				command: "⌘"
			} : _.Baa() ? {
				ctrl: "Ctrl",
				alt: "Alt",
				shift: "Shift",
				meta: "Super"
			} : {
				ctrl: "Ctrl",
				alt: "Alt",
				shift: "Shift",
				meta: "Win"
			};
			return a.map((d) => c[d.toLowerCase()] || d.toUpperCase());
		};
		Nmd = function(a, b) {
			for (let c of a.A().values()) if (a.F().has(c.id) && Mmd(b, c)) return c.id;
			return null;
		};
		Omd = function(a, b) {
			var c = a.A().get(b);
			if (!c) return [];
			var d = new Set();
			for (let e of a.A().values()) e.id !== b && a.F().has(e.id) && Mmd(c, e) && d.add(e.id);
			return Array.from(d);
		};
		Pmd = function(a, b, c) {
			a.I.set(b, c);
		};
		Qmd = function(a, b, c) {
			b = b.map((f) => f.toLowerCase());
			var d = new Set();
			a.ctrlKey && d.add("ctrl");
			a.altKey && d.add("alt");
			a.shiftKey && d.add("shift");
			a.metaKey && d.add("meta");
			var e = a.key.toLowerCase();
			a = a.code;
			[
				"ctrl",
				"alt",
				"shift",
				"meta"
			].includes(e) || (a === "Slash" ? d.add("/") : a.startsWith("Key") ? d.add(a.substring(3).toLowerCase()) : a.startsWith("Digit") ? d.add(a.substring(5)) : d.add(e));
			if (d.size !== b.length) return !1;
			for (let f of b) if (!d.has(c ? f.replace("cmd", "meta").replace("command", "meta") : f)) return !1;
			return !0;
		};
		Mmd = function(a, b) {
			var c = _.Aa();
			a = c && a.St ? a.St : a.keys;
			b = c && b.St ? b.St : b.keys;
			if (a.length !== b.length) return !1;
			c = new Set(a.map((d) => d.toLowerCase()));
			for (let d of b) if (!c.has(d.toLowerCase())) return !1;
			return !0;
		};
		_.x3 = class {
			constructor() {
				this.document = _.m(_.Xk);
				this.ub = _.m(_.ag);
				this.dialog = _.m(_.rC);
				this.veLoggingService = _.m(_.Ry);
				this.A = _.M(new Map());
				this.groups = new Map();
				this.F = _.M(new Set());
				this.R = new Set();
				this.H = new Map();
				this.I = new Map();
				_.W(() => {
					var a = this.A(), b = this.F();
					return Array.from(b).map((c) => a.get(c)).filter((c) => !!c);
				});
			}
			register(a, b) {
				try {
					var c = _.m(_.ag);
				} catch (e) {}
				var d = _.Aa();
				a.D9 = _.Lmd(d && a.St ? a.St : a.keys, d);
				this.A().has(a.id) && (console.warn(`Shortcut with ID "${a.id}" already exists. Replacing.`), this.unregister(a.id));
				if (b && !this.groups.has(b)) throw Error("ni`" + b);
				if (d = Nmd(this, a)) throw Error("oi`" + d);
				this.A.update((e) => new Map(e).set(a.id, a));
				d = !0;
				if (b) {
					let e = this.groups.get(b);
					e.f$a.push(a);
					this.H.set(a.id, b);
					e.active || (d = !1);
				}
				d ? this.F.update((e) => new Set(e).add(a.id)) : this.F.update((e) => {
					e = new Set(e);
					e.delete(a.id);
					return e;
				});
				c && c.Hc(() => {
					this.unregister(a.id);
				});
			}
			unregister(a) {
				if (this.A().has(a)) {
					this.A.update((c) => {
						c = new Map(c);
						c.delete(a);
						return c;
					});
					this.F.update((c) => {
						c = new Set(c);
						c.delete(a);
						return c;
					});
					var b = this.H.get(a);
					if (b) {
						if (b = this.groups.get(b)) b.f$a = b.f$a.filter((c) => c.id !== a);
						this.H.delete(a);
					}
				}
			}
			iha() {
				this.A.set(new Map());
				this.groups.clear();
				this.F.set(new Set());
				this.R.clear();
				this.H.clear();
				this.I.clear();
			}
			wK(a) {
				if (!this.A().has(a)) throw Error("pi`" + a);
				var b = Omd(this, a);
				if (b.length > 0) throw Error("qi`" + a + "`" + b.join(", "));
				this.F.update((c) => new Set(c).add(a));
			}
			g6() {
				if (!this.A().has(void 0)) throw Error("ri`undefined");
				this.F.update((a) => {
					a = new Set(a);
					a.delete(void 0);
					return a;
				});
			}
			jha() {
				this.I.clear();
			}
			init() {
				Pmd(this, "ignore-inputs", (a) => (a = a.target) ? !(a.isContentEditable || [
					"INPUT",
					"TEXTAREA",
					"SELECT"
				].includes(a.tagName)) : !0);
				Pmd(this, "ignore-dialog-open", () => this.dialog.A.length === 0);
				_.Af(this.document, "keydown").pipe(_.Ak(this.ub)).subscribe((a) => {
					var b = _.Aa();
					for (let v of this.F()) {
						let w = this.A().get(v);
						var c;
						if (c = w) {
							a: {
								c = a;
								for (let D of this.I.values()) if (!D(c)) {
									c = !1;
									break a;
								}
								var d = this.H.get(w.id);
								if (d && (d = this.groups.get(d)) && typeof d.filter === "function" && !d.filter(c)) {
									c = !1;
									break a;
								}
								c = w.filter && !w.filter(c) ? !1 : !0;
							}
							c = c && Qmd(a, b && w.St ? w.St : w.keys, b);
						}
						if (c) {
							try {
								var e = this.veLoggingService, f = new _.Ky(), g = new Jmd();
								var k = _.Lj(g, 1, w.id);
								var p = _.Lj(k, 2, "global");
								var r = _.ln(f, Jmd, 7, p);
								_.Qy(e, 305481, r);
								w.action(a);
								a.preventDefault();
							} catch (D) {
								console.error(`Error executing shortcut ${w.id}:`, D);
							}
							break;
						}
					}
				});
			}
		};
		_.x3.J = function(a) {
			return new (a || _.x3)();
		};
		_.x3.sa = _.Cd({
			token: _.x3,
			factory: _.x3.J,
			wa: "root"
		});
		var Pud, Qud, Uud, Vud, Wud, Xud, Yud, h4, Zud, $ud, avd, bvd, cvd, i4, evd, j4, k4, l4, uvd, wvd, xvd, yvd, zvd, Avd, Bvd, Cvd, Dvd, Evd, Fvd, Gvd, Ivd, Jvd, Lvd, Nvd, Ovd, Pvd, Qvd, Svd, Rvd, Tvd, Xvd, Yvd, Wvd, Vvd, cwd, dwd, fwd, gwd, hwd, iwd, jwd, kwd, lwd, qwd, rwd, swd, twd, uwd, vwd, wwd, xwd, ywd, zwd, Awd, Bwd, Cwd, Dwd, Ewd, Fwd, Gwd, Iwd, Jwd, Kwd, Lwd, Mwd, Nwd, Owd, Pwd, Qwd, Rwd, Swd, Twd, Uwd, Vwd, Wwd, Xwd, Ywd, $wd, axd, bxd, cxd, dxd, fxd, gxd, hxd, ixd, jxd, kxd, lxd, mxd, nxd, oxd, pxd, qxd, rxd, sxd, txd, uxd, vxd, wxd, xxd, zxd, Axd, Cxd, Dxd, Exd, Fxd, Gxd, Hxd, Ixd, Jxd, Kxd, Lxd, Nxd, Oxd, Pxd, Qxd, Rxd, Sxd, Txd, Uxd, Wxd, Xxd, Yxd, Zxd, $xd, ayd, byd, cyd, dyd, fyd, gyd, hyd, iyd, jyd, lyd, myd, oyd, pyd, qyd, vyd, wyd, xyd, Ayd, Byd, Cyd, Dyd, Eyd, Fyd, Gyd, Hyd, Iyd, fvd, hvd, gvd, ivd, jvd, kvd, lvd, mvd, nvd, ovd, pvd, qvd, rvd, svd, bwd, Jyd, Kyd, Lyd, Myd, Nyd, g4, Qyd;
		_.f4 = function(a) {
			return _.wm(a).includes(13);
		};
		_.Mud = function(a) {
			return `---
${Object.entries(a).map(([b, c]) => `${b}: "${c.replace(/"/g, "\"\"")}"`).join("\n")}
---\n\n`;
		};
		_.Nud = function(a, b) {
			return _.Mud({
				type: "codesearch",
				file_path: a
			}) + b;
		};
		_.Oud = function(a, b, c, d, e = "") {
			return _.Foa(_.n(), a, b, c, d, e);
		};
		Pud = function(a, b, c = null) {
			return {
				type: 11,
				selector: a,
				animation: b,
				options: c
			};
		};
		Qud = function() {
			return {
				type: 12,
				timings: "80ms",
				animation: [_.rm("150ms 0ms ease-out", _.sm({ transform: "translateY(-7%)" })), _.rm("150ms 0ms cubic-bezier(.36,1.35,.79,1.5)", _.sm({ transform: "translateY(0)" }))]
			};
		};
		_.Rud = function(a) {
			return a.startsWith("models/gemma-3");
		};
		_.Sud = function(a) {
			return a.startsWith("models/gemma-4");
		};
		_.Tud = function(a) {
			return _.Sud(a) ? _.tkb : _.Rud(a) ? _.ukb : _.w3(a) ? _.vkb : null;
		};
		Uud = function(a, b) {
			a = [...a];
			var c = _.Fxa(b);
			_.Dxa(a, c);
			window.localStorage.setItem(_.Exa(b), JSON.stringify(a.map((d) => d.serialize())));
		};
		Vud = function(a) {
			var b = a.map((c) => c.Xi());
			return _.yxa.filter((c) => b.includes(c.harmCategory));
		};
		Wud = function(a) {
			return a.replace(/_([a-z])/g, (b, c) => c.toUpperCase());
		};
		Xud = function(a) {
			return a.replace(/([A-Z])/g, (b) => "_" + b.toLowerCase());
		};
		Yud = function(a) {
			switch (a.toLowerCase()) {
				case "string": return 1;
				case "number": return 2;
				case "integer": return 3;
				case "boolean": return 4;
				case "array": return 5;
				case "object": return 6;
				default: throw new g4(`Invalid "type" ${a}`);
			}
		};
		h4 = function(a, b) {
			var c;
			return (c = a[b]) != null ? c : a[Xud(b)];
		};
		Zud = function(a, b) {
			return Object.hasOwn(a, b) || Object.hasOwn(a, Xud(b));
		};
		$ud = function(a, b) {
			if (!Zud(a, b)) return !1;
			a = h4(a, b);
			if (!_.Bo(a)) throw new g4(`"${b}" must be an object`);
			return !0;
		};
		avd = function(a, b) {
			if (!Zud(a, b)) return !1;
			a = h4(a, b);
			if (!Array.isArray(a) || !a.every((c) => typeof c === "string")) throw new g4(`"${b}" must be a list of strings`);
			return !0;
		};
		bvd = function(a, b) {
			if (!Zud(a, b)) return !1;
			a = h4(a, b);
			if (!Array.isArray(a) || !a.every(_.Bo)) throw new g4(`"${b}" must be a list of Objects`);
			return !0;
		};
		cvd = function(a) {
			switch (a) {
				case 1: return "string";
				case 2: return "number";
				case 3: return "integer";
				case 4: return "boolean";
				case 5: return "array";
				case 6: return "object";
				default: throw new g4(`Invalid "type" ${a}`);
			}
		};
		i4 = function(a, b) {
			var c = { type: "object" };
			_.wn(a, 1) != null && (c.type = cvd(a.getType()), b == null ? 0 : b.P9b) && (c.type = c.type.toUpperCase());
			_.zn(a, 2) && (c.format = _.l(a, 2));
			_.zn(a, 3) && (c.description = a.jc());
			_.vn(a, 4) && (c.nullable = _.Pm(a, 4));
			_.uj(a, 5, 3, void 0, !0).length > 0 && (c.enum = _.uj(a, 5, _.oj()));
			_.sn(a, _.xn, 6) && (c.items = i4(_.Z(a, _.xn, 6), b));
			_.Ws(a, 22) != null && (c.minItems = _.Gk(_.Ys(a, 22)));
			_.Ws(a, 21) != null && (c.maxItems = _.Gk(_.Ys(a, 21)));
			if (_.zc(a, 7, _.xn).size > 0) {
				c.properties = {};
				for (let [d, e] of _.zc(a, 7, _.xn)) c.properties[d] = i4(e, b);
			}
			_.uj(a, 8, 3, void 0, !0).length > 0 && (c.required = _.uj(a, 8, _.oj()));
			_.Ws(a, 9) != null && (c.minProperties = _.Gk(_.Ys(a, 9)));
			_.Ws(a, 10) != null && (c.maxProperties = _.Gk(_.Ys(a, 10)));
			_.Um(a, 11) && (c.minimum = _.Vm(a, 11));
			_.Um(a, 12) && (c.maximum = _.Vm(a, 12));
			_.Ws(a, 13) != null && (c.minLength = _.Gk(_.Ys(a, 13)));
			_.Ws(a, 14) != null && (c.maxLength = _.Gk(_.Ys(a, 14)));
			_.zn(a, 15) && (c.pattern = _.l(a, 15));
			if (_.sn(a, _.qo, 16)) try {
				c.example = _.pBa(_.Z(a, _.qo, 16));
			} catch (d) {
				throw new g4(`Invalid "example": ${d}`);
			}
			_.Ms(a, _.xn, 17) > 0 && (c.oneOf = _.mj(a, _.xn, 17, _.oj()).map((d) => i4(d, b)));
			_.Ms(a, _.xn, 18) > 0 && (c.anyOf = _.mj(a, _.xn, 18, _.oj()).map((d) => i4(d, b)));
			_.Ms(a, _.xn, 19) > 0 && (c.allOf = _.mj(a, _.xn, 19, _.oj()).map((d) => i4(d, b)));
			_.sn(a, _.xn, 20) && (c.not = i4(_.Z(a, _.xn, 20), b));
			_.uj(a, 23, 3, void 0, !0).length > 0 && (c.propertyOrdering = _.uj(a, 23, _.oj()));
			return c;
		};
		_.dvd = function(a) {
			return JSON.stringify(i4(a), null, 2);
		};
		evd = function(a, b, c) {
			if (!Zud(a, b)) return !1;
			if (typeof h4(a, b) !== c) throw new g4(`"${b}" must be a ${c}`);
			return !0;
		};
		j4 = function(a, b) {
			return evd(a, b, "string");
		};
		k4 = function(a, b) {
			return evd(a, b, "number");
		};
		l4 = function(a, b) {
			var c = new _.xn();
			if (!j4(a, "type")) throw new g4("\"type\" must be specified");
			var d = Yud(a.type);
			_.cn(c, 1, d);
			j4(a, "format") && _.Lj(c, 2, a.format);
			j4(a, "description") && _.Lj(c, 3, a.description);
			evd(a, "nullable", "boolean") && _.Mj(c, 4, a.nullable);
			avd(a, "enum") && _.qt(c, 5, a.enum);
			if ($ud(a, "items")) fvd(c, l4(a.items, b));
			else if (d === 5) throw new g4("\"items\" must be specified for array types");
			k4(a, "minItems") && gvd(c, h4(a, "minItems"));
			k4(a, "maxItems") && hvd(c, h4(a, "maxItems"));
			if ($ud(a, "properties")) {
				d = a.properties;
				if (Object.entries(d).length === 0 && !b) throw new g4("\"properties\" must not be empty");
				for (let [f, g] of Object.entries(d)) {
					d = f;
					var e = g;
					if (!_.Bo(e)) throw new g4("\"properties\" values must be Objects");
					ivd(c, d, l4(e, b));
				}
			} else if (d === 6 && !b) throw new g4("\"properties\" must be specified for object types");
			if (avd(a, "required")) {
				d = a.required;
				e = a.properties;
				if (!e || Object.entries(e).length === 0) throw new g4("\"required\" must not be specified without \"properties\"");
				let f = Object.keys(e);
				if (d.some((g) => !f.includes(g))) throw new g4("\"required\" must be a subset of \"properties\"");
				_.qt(c, 8, a.required);
			}
			k4(a, "minProperties") && jvd(c, h4(a, "minProperties"));
			k4(a, "maxProperties") && kvd(c, h4(a, "maxProperties"));
			k4(a, "minimum") && _.Wm(c, 11, a.minimum);
			k4(a, "maximum") && _.Wm(c, 12, a.maximum);
			k4(a, "minLength") && lvd(c, h4(a, "minLength"));
			k4(a, "maxLength") && mvd(c, h4(a, "maxLength"));
			j4(a, "pattern") && _.Lj(c, 15, a.pattern);
			Zud(a, "example") && nvd(c, _.mBa(a.example));
			if (bvd(a, "oneOf")) for (let f of h4(a, "oneOf")) ovd(c, l4(f, b));
			if (bvd(a, "anyOf")) for (let f of h4(a, "anyOf")) pvd(c, l4(f, b));
			if (bvd(a, "allOf")) for (let f of h4(a, "allOf")) qvd(c, l4(f, b));
			$ud(a, "not") && rvd(c, l4(a.not, b));
			avd(a, "propertyOrdering") && svd(c, h4(a, "propertyOrdering"));
			for (let f of Object.keys(a)) if (!_.Tmb.has(f) && !_.Tmb.has(Wud(f))) throw new g4(`Unknown key "${f}"`);
			return c;
		};
		_.tvd = function(a, b) {
			try {
				var c = JSON.parse(a);
			} catch (d) {
				throw new g4(`Invalid JSON: ${d}`);
			}
			if (!_.Bo(c)) throw new g4("Must have a top-level Object");
			return l4(c, b);
		};
		uvd = function(a) {
			return a.filter((b) => b.id === "text-input-chunk-id" ? !1 : !(b.Cb === 1 || b.Cb === 2)).length === 0;
		};
		_.vvd = function(a) {
			return a.some((b) => {
				var c;
				if (c = b.ob !== "text" && b.ob !== "image" && b.ob !== "code_execution") {
					let d, e, f, g, k, p, r, v;
					c = !(b.ob === "file" && (((d = b.Ac) == null ? 0 : (e = d.mimeType) == null ? 0 : e.startsWith("text/")) || ((f = b.Ac) == null ? 0 : (g = f.mimeType) == null ? 0 : g.startsWith("image/")) || ((k = b.kb) == null ? 0 : (p = k.mimeType) == null ? 0 : p.startsWith("text/")) || ((r = b.kb) == null ? 0 : (v = r.mimeType) == null ? 0 : v.startsWith("image/"))));
				}
				return c;
			});
		};
		wvd = function(a, b) {
			return b.some((c) => a.includes(c.ob));
		};
		xvd = function(a) {
			a & 1 && _.I(0, "span", 3);
			a & 2 && (a = _.K(4), _.E("iconName", a.S.vPa));
		};
		yvd = function(a) {
			a & 1 && (_.F(0, "span", 4), _.R(1, " Ctrl "), _.H());
		};
		zvd = function(a) {
			a & 1 && _.B(0, xvd, 1, 1, "span", 3)(1, yvd, 2, 0, "span", 4);
			a & 2 && (a = _.K(3), _.C(a.AM ? 0 : 1));
		};
		Avd = function(a) {
			a & 1 && (_.B(0, zvd, 2, 1), _.I(1, "span", 2));
			if (a & 2) {
				_.K(2);
				a = _.Vh(1);
				let b = _.Vh(2);
				_.C(b ? 0 : -1);
				_.y();
				_.E("iconName", a);
			}
		};
		Bvd = function(a) {
			a & 1 && (_.F(0, "span", 1), _.R(1), _.H(), _.B(2, Avd, 2, 2));
			if (a & 2) {
				a = _.K();
				let b = _.Vh(0);
				_.y();
				_.S(" ", b, " ");
				_.y();
				_.C(a.f3a || a.oka() ? -1 : 2);
			}
		};
		Cvd = function(a) {
			a & 1 && (_.I(0, "span", 5), _.F(1, "span"), _.R(2), _.H());
			a & 2 && (a = _.K(), _.E("iconName", a.S.nA), _.y(2), _.U(a.Kpa()));
		};
		Dvd = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.Qf()));
		};
		Evd = function(a, b) {
			a & 1 && (_.F(0, "strong"), _.R(1), _.H(), _.F(2, "span"), _.R(3, "Unlink or switch API key here."), _.H());
			a & 2 && (_.y(), _.S("Your key, ", b.getDisplayName(), ", is in use"));
		};
		Fvd = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1, "Link a paid API key here."), _.H());
		};
		Gvd = function(a) {
			a & 1 && (_.F(0, "div", 2), _.B(1, Dvd, 2, 1, "span")(2, Evd, 4, 1)(3, Fvd, 2, 0, "span"), _.H());
			if (a & 2) {
				let b;
				a = _.K();
				_.y();
				_.C(a.disabled() ? 1 : (b = a.bb()) ? 2 : 3, b);
			}
		};
		Ivd = function(a, b) {
			a & 1 && _.Ih(0, 1);
			if (a & 2) {
				a = b.V;
				b = b.jb;
				_.K();
				let c = _.O(5);
				_.E("ngTemplateOutlet", c)("ngTemplateOutletContext", _.Bi(2, Hvd, a, b));
			}
		};
		Jvd = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 11), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("value", a), _.y(), _.S(" ", a, " "));
		};
		Lvd = function(a, b) {
			a & 1 && _.Ih(0, 1);
			if (a & 2) {
				a = b.V;
				b = b.jb;
				var c = _.K(2);
				let d = c.entry, e = c.index;
				c = c.vBa;
				_.K();
				let f = _.O(5);
				_.E("ngTemplateOutlet", f)("ngTemplateOutletContext", _.Di(2, Kvd, a, b, d, c + "-" + e));
			}
		};
		Nvd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 16);
				_.Ah(1, Lvd, 1, 7, "ng-container", 1, _.yh);
				_.F(3, "button", 17);
				_.J("click", function() {
					_.q(b);
					var c = _.K().entry, d = _.K();
					return _.t(d.DW(c));
				});
				_.R(4, " Add nested property ");
				_.H()();
			}
			if (a & 2) {
				a = _.K().entry;
				_.y();
				let b;
				_.Bh((b = a.children) != null ? b : _.zi(0, Mvd));
			}
		};
		Ovd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 18)(1, "div", 20)(2, "input", 21);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).jb, f = _.K(2).entry, g = _.K();
					f.hB && (f.hB[e] = d, g.KC());
					return _.t();
				});
				_.H();
				_.yg();
				_.H();
				_.F(3, "div", 22)(4, "button", 23);
				_.J("click", function() {
					var d = _.q(c).jb, e = _.K(2).entry, f = _.K();
					e.hB && (e.hB.splice(d, 1), f.KC());
					return _.t();
				});
				_.H()()();
			}
			a & 2 && (a = b.V, b = _.K(3), _.y(2), _.E("ngModel", a), _.zg(), _.y(2), _.E("iconName", b.S.ni));
		};
		Pvd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 16);
				_.Ah(1, Ovd, 5, 2, "div", 18, _.yh);
				_.F(3, "button", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K().entry, d = _.K(), e;
					c.hB = [...(e = c.hB) != null ? e : [], ""];
					d.KC();
					return _.t();
				});
				_.R(4, " Add enum value ");
				_.H()();
			}
			a & 2 && (a = _.K().entry, _.y(), _.Bh(a.hB));
		};
		Qvd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 3)(1, "div", 4)(2, "label", 5);
				_.R(3, "Property");
				_.H();
				_.F(4, "input", 6);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).entry, f = _.K();
					e.key = d;
					f.KC();
					return _.t();
				});
				_.H();
				_.yg();
				_.H();
				_.I(5, "div", 7);
				_.F(6, "div", 8)(7, "mat-form-field", 9)(8, "mat-select", 10);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).entry, f = _.K();
					e.type = d;
					d !== "object" && (e.children = void 0);
					d !== "enum" && (e.hB = void 0);
					f.KC();
					return _.t();
				});
				_.F(9, "mat-select-trigger");
				_.R(10);
				_.H();
				_.Ah(11, Jvd, 2, 2, "mat-option", 11, _.zh);
				_.H();
				_.yg();
				_.H()();
				_.I(13, "div", 12);
				_.F(14, "button", 13);
				_.J("click", function() {
					var d = _.q(c).entry, e = _.K();
					d.isArray = !d.isArray;
					e.KC();
					return _.t();
				});
				_.H();
				_.F(15, "button", 14);
				_.J("click", function() {
					var d = _.q(c).entry, e = _.K();
					d.isRequired = !d.isRequired;
					e.KC();
					return _.t();
				});
				_.H();
				_.F(16, "button", 15);
				_.J("click", function() {
					var d = _.q(c), e = d.index;
					d = d.parent;
					var f = _.K();
					return _.t(f.removeEntry(e, d));
				});
				_.H()();
				_.B(17, Nvd, 5, 1, "div", 16)(18, Pvd, 5, 0, "div", 16);
			}
			if (a & 2) {
				a = b.entry;
				let c = b.index;
				b = b.vBa;
				let d = _.K();
				_.y(2);
				_.E("for", _.Oud("property-name-input-", b, "-", c));
				_.y(2);
				_.E("id", _.Oud("property-name-input-", b, "-", c))("ngModel", a.key);
				_.zg();
				_.y(4);
				_.E("ngModel", a.type);
				_.zg();
				_.y(2);
				_.S(" ", a.type, " ");
				_.y();
				_.Bh(d.vrb);
				_.y(3);
				_.E("active", a.isArray)("matTooltip", a.isArray ? "Make property a single value" : "Make property an array")("iconName", d.S.Bjb);
				_.y();
				_.E("iconName", d.S.dfb)("active", a.isRequired)("matTooltip", a.isRequired ? "Mark property as optional" : "Mark property as required");
				_.y();
				_.E("iconName", d.S.ni);
				_.y();
				_.C(a.type === d.Pnb ? 17 : a.type === d.Sjb ? 18 : -1);
			}
		};
		Svd = function(a) {
			var b, c = (b = a.properties) != null ? b : {};
			return a.propertyOrdering && a.propertyOrdering.length > 0 ? a.propertyOrdering.map((d) => Rvd(d, c[d], a)) : Object.entries(c).map(([d, e]) => Rvd(d, e, a));
		};
		Rvd = function(a, b, c) {
			var d = Tvd(b), e;
			c = new Set((e = c.required) != null ? e : []);
			if (b.items) {
				let g;
				if (((g = b.items.enum) != null ? g : []).length > 0) return Object.assign({}, {
					key: a,
					type: "enum",
					isArray: !0,
					isRequired: c.has(a),
					hB: [...b.items.enum]
				}, d && { vO: d });
				e = b.items.properties ? Svd(b.items) : void 0;
				return Object.assign({}, {
					key: a,
					type: b.items.type,
					isArray: !0,
					isRequired: c.has(a)
				}, e && { children: e }, d && { vO: d });
			}
			var f;
			if (((f = b.enum) != null ? f : []).length > 0) return Object.assign({}, {
				key: a,
				type: "enum",
				hB: [...b.enum],
				isRequired: c.has(a)
			}, d && { vO: d });
			e = b.properties ? Svd(b) : void 0;
			return Object.assign({}, {
				key: a,
				type: b.type,
				isRequired: c.has(a)
			}, e && { children: e }, d && { vO: d });
		};
		Tvd = function(a) {
			var b = {};
			Uvd.forEach((c) => {
				a[c] && (b[c] = a[c]);
			});
			return Object.keys(b).length > 0 ? b : void 0;
		};
		Xvd = function(a) {
			var b, c;
			if (((b = a.children) != null ? b : []).length !== 0 || Object.keys((c = a.vO) != null ? c : {}).length !== 0) {
				var d;
				if (((d = a.children) != null ? d : []).length === 0) return Vvd({}, a.vO);
				b = a.children.map((e) => e.key);
				c = a.children.filter((e) => e.isRequired).map((e) => e.key);
				b = Object.assign({}, {
					type: "object",
					properties: Wvd(a.children),
					propertyOrdering: b
				}, c && c.length > 0 && { required: c });
				return Vvd(b, a.vO);
			}
		};
		Yvd = function(a) {
			var b = a.children ? a.children.map((e) => e.key) : void 0, c = a.children ? a.children.filter((e) => e.isRequired).map((e) => e.key) : void 0, d = a.children ? Wvd(a.children) : void 0;
			return Object.assign({}, { type: a.type }, d && { properties: d }, b && { propertyOrdering: b }, c && c.length > 0 && { required: c });
		};
		Wvd = function(a) {
			var b = {};
			for (let c of a) {
				if (c.isArray) (a = Yvd(c)) && c.type === "enum" && (a.type = "string", a.enum = c.hB), a = {
					type: "array",
					items: a
				};
				else if (c.type === "enum") {
					if (a = Yvd(c)) a.type = "string", a.enum = c.hB;
				} else a = Yvd(c);
				a && (b[c.key] = a, Vvd(a, c.vO));
			}
			return b;
		};
		Vvd = function(a, b) {
			b && Uvd.forEach((c) => {
				b[c] && (a[c] = b[c]);
			});
			return a;
		};
		_.$vd = function(a) {
			try {
				return a.forEach((b) => {
					if (!b.getName()) throw new m4("\"name\" must be specified");
					if (!b.jc()) throw new m4("\"description\" must be specified");
				}), JSON.stringify(a.map((b) => Object.assign({}, {
					name: b.getName(),
					description: b.jc()
				}, b.cZ() && { parameters: i4(b.getParameters()) }, _.wn(b, 5) != null && _.Lm(b, 5) !== 0 && { behavior: Zvd[_.Lm(b, 5)] })), void 0, 2);
			} catch (b) {
				if (b instanceof g4) throw new m4(`Error in parameters: ${b.message}`);
				throw b;
			}
		};
		cwd = function(a) {
			if (!_.Bo(a)) throw new m4("Function declaration must be an object");
			if (!j4(a, "name")) throw new m4("\"name\" string must be specified");
			if (!j4(a, "description")) throw new m4("\"description\" string must be specified");
			if (j4(a, "behavior") && !awd[a.behavior.toUpperCase()]) throw new m4(`Invalid behavior: "${a.behavior}"`);
			var b = new _.Hn();
			b = _.Uc(b, 1, a.name);
			b = _.Uc(b, 2, a.description);
			j4(a, "behavior") && _.cn(b, 5, awd[a.behavior.toUpperCase()]);
			if ($ud(a, "parameters")) try {
				bwd(b, l4(a.parameters, !0));
			} catch (c) {
				if (c instanceof g4) throw new m4(`Error in parameters: ${c.message}`);
				throw c;
			}
			return b;
		};
		dwd = function(a) {
			a & 1 && (_.F(0, "span", 4), _.R(1, "/"), _.H());
		};
		fwd = function(a) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 3);
				_.J("click", function() {
					_.q(c);
					var d = _.K().V, e = _.K();
					return _.t(ewd(e, d));
				});
				_.R(1);
				_.H();
				_.B(2, dwd, 2, 0, "span", 4);
			}
			if (a & 2) {
				var b = _.K();
				a = b.V;
				let c = b.jb;
				b = b.lj;
				_.P("active", a.isActive());
				_.E("disabled", a.disabled());
				_.wh("id", a.id)("aria-controls", a.contentId)("aria-selected", a.isActive());
				_.y();
				_.S(" ", a.label(), " ");
				_.y();
				_.C(c !== b - 1 ? 2 : -1);
			}
		};
		gwd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 5);
				_.J("click", function() {
					_.q(b);
					var c = _.K().V, d = _.K();
					return _.t(ewd(d, c));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("active", a.isActive())("disabled", a.disabled()), _.wh("id", a.id)("aria-controls", a.contentId)("aria-selected", a.isActive()), _.y(), _.S(" ", a.label(), " "));
		};
		hwd = function(a) {
			a & 1 && _.B(0, fwd, 3, 8)(1, gwd, 2, 6, "button", 2);
			a & 2 && (a = _.K(), _.C(a.edb() ? 0 : 1));
		};
		iwd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-json-schema-editor", 26);
				_.J("textOutput", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					return _.t(e.KC(d, c));
				});
				_.H();
				_.F(1, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K().V, d = _.K(2);
					bwd(c);
					d.functionDeclarations.set([...d.functionDeclarations()]);
					return _.t();
				});
				_.R(2, " Remove parameters ");
				_.H();
			}
			a & 2 && (a = _.K().V, _.K(2), _.E("textInput", a.cZ() ? _.dvd(a.getParameters()) : ""));
		};
		jwd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 28);
				_.J("click", function() {
					_.q(b);
					var c = _.K().V, d = _.K(2);
					bwd(c, new _.xn());
					d.functionDeclarations.set([...d.functionDeclarations()]);
					return _.t();
				});
				_.R(1, " Add parameters ");
				_.H();
			}
		};
		kwd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 16)(1, "div", 17)(2, "label", 18);
				_.R(3, "Name");
				_.H();
				_.F(4, "input", 19);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).V, f = _.K(2);
					_.Uc(e, 1, d);
					f.functionDeclarations.set([...f.functionDeclarations()]);
					return _.t();
				});
				_.H();
				_.yg();
				_.H();
				_.I(5, "div", 20);
				_.F(6, "div", 21)(7, "label", 18);
				_.R(8, "Description");
				_.H();
				_.F(9, "input", 22);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).V, f = _.K(2);
					_.Uc(e, 2, d);
					f.functionDeclarations.set([...f.functionDeclarations()]);
					return _.t();
				});
				_.H();
				_.yg();
				_.H();
				_.I(10, "div", 20);
				_.F(11, "button", 23);
				_.J("click", function() {
					var d = _.q(c).jb, e = _.K(2);
					return _.t(e.removeEntry(d));
				});
				_.H()();
				_.F(12, "div", 24);
				_.B(13, iwd, 3, 1)(14, jwd, 2, 0, "button", 25);
				_.H();
			}
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.y(2);
				_.E("for", _.xi("function-name-", b));
				_.y(2);
				_.E("id", _.xi("function-name-", b))("ngModel", a.getName());
				_.zg();
				_.y(3);
				_.E("for", _.xi("function-description-", b));
				_.y(2);
				_.E("id", _.xi("function-description-", b))("ngModel", a.jc());
				_.zg();
				_.y(2);
				_.E("iconName", c.S.ni);
				_.y(2);
				_.C(a.cZ() ? 13 : 14);
			}
		};
		lwd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.Ah(0, kwd, 15, 12, null, null, _.yh);
				_.F(2, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.DW());
				});
				_.R(3, " Add function declaration ");
				_.H();
			}
			a & 2 && (a = _.K(), _.Bh(a.functionDeclarations()));
		};
		_.pwd = function(a) {
			var b, c;
			return _.mwd((c = a == null ? void 0 : (b = _.Z(a, _.nwd, 48)) == null ? void 0 : _.mj(b, _.owd, 1, _.oj())) != null ? c : []);
		};
		_.mwd = function(a) {
			var b = new Map([
				1,
				2,
				3,
				5,
				6,
				7,
				8
			].map((e) => [e, new Set()]));
			a.forEach((e) => {
				var f = _.Lm(e, 1);
				e = _.Lm(e, 2);
				var g = b.get(f), k = b.get(e);
				g && k && (g == null || g.add(e), k == null || k.add(f));
			});
			var c;
			(c = b.get(2)) == null || c.add(3);
			var d;
			(d = b.get(3)) == null || d.add(2);
			return b;
		};
		_.n4 = function(a, b, c) {
			return c === void 0 || b === void 0 ? !1 : c.has(a) ? !0 : Array.from(c).every((d) => b.has(d));
		};
		qwd = function(a) {
			a & 1 && _.I(0, "span", 0);
			a & 2 && (a = _.K(), _.E("iconName", a.S.cP));
		};
		rwd = function(a) {
			a & 1 && _.I(0, "span", 1);
			a & 2 && (a = _.K(), _.E("iconName", a.S.Zf));
		};
		swd = function(a) {
			a & 1 && _.R(0, " Content of your current prompt will be deleted, this action cannot be undone. ");
		};
		twd = function(a) {
			a & 1 && (_.I(0, "mat-spinner", 3), _.R(1, " Saving in progress. Dialog will close automatically when completed. "));
		};
		uwd = function(a) {
			a & 1 && (_.F(0, "button", 4), _.R(1, "Go back"), _.H(), _.F(2, "button", 5), _.R(3, " Discard and continue "), _.H());
			a & 2 && (_.E("mat-dialog-close", !1), _.y(2), _.E("mat-dialog-close", !0));
		};
		vwd = function(a) {
			a & 1 && (_.F(0, "button", 2), _.R(1, "Go back"), _.H());
			a & 2 && _.E("mat-dialog-close", !1);
		};
		wwd = function(a) {
			a & 1 && _.I(0, "span", 0);
			a & 2 && (a = _.K(), _.E("iconName", a.S.qsa));
		};
		xwd = function(a) {
			a & 1 && (_.F(0, "span", 2), _.R(1, " Your conversation won’t be saved automatically "), _.H());
		};
		ywd = function(a) {
			a & 1 && _.R(0, " Fetching quota... ");
		};
		zwd = function(a) {
			a & 1 && (_.F(0, "span")(1, "span", 1), _.R(2), _.H(), _.R(3), _.H());
			if (a & 2) {
				_.K();
				a = _.Vh(0);
				_.y();
				_.P("low-quota", a == null ? null : a.a8a);
				_.y();
				let b;
				_.S(" ", (b = a == null ? null : a.XHa) != null ? b : "?", "/");
				_.y();
				let c;
				_.S("", (c = a == null ? null : a.cKb) != null ? c : "?", " generations ");
			}
		};
		Awd = function(a) {
			a & 1 && (_.Th(0), _.B(1, zwd, 4, 4, "span"));
			if (a & 2) {
				a = _.K();
				let b = _.Uh(a.quota());
				_.y();
				_.C(b || a.Z7a() ? 1 : -1);
			}
		};
		Bwd = function(a) {
			a & 1 && (_.F(0, "h1", 2), _.sh("title-enter"), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.title()));
		};
		Cwd = function(a) {
			a & 1 && (_.R(0), _.Ei(1, "number"));
			a & 2 && (a = _.K(2), _.S(" ", _.Gi(1, 1, a.DTb(), "1."), " "));
		};
		Dwd = function(a) {
			a & 1 && _.I(0, "div", 4);
		};
		Ewd = function(a) {
			a & 1 && (_.F(0, "span", 3), _.B(1, Cwd, 2, 4)(2, Dwd, 1, 0, "div", 4), _.R(3, " tokens "), _.H());
			if (a & 2) {
				a = _.K();
				let b = _.O(3);
				_.P("error", a.Xp() || a.B0a());
				_.E("xapInlineDialog", b);
				_.y();
				_.C(a.Wz() ? 1 : 2);
			}
		};
		Fwd = function(a) {
			a & 1 && (_.F(0, "div", 6)(1, "span"), _.R(2, "Input tokens:"), _.H(), _.F(3, "span", 11), _.R(4, "Failed to count"), _.H()());
		};
		Gwd = function(a, b) {
			a & 1 && (_.F(0, "div", 9)(1, "span"), _.R(2), _.H(), _.F(3, "span"), _.R(4), _.Ei(5, "number"), _.H()());
			a & 2 && (a = b.V, _.y(2), _.S("", a.modality, ":"), _.y(2), _.U(_.Gi(5, 2, a.tokens, "1.")));
		};
		Iwd = function(a) {
			a & 1 && (_.F(0, "div", 6)(1, "span"), _.R(2, "Input tokens:"), _.H(), _.F(3, "span"), _.R(4), _.Ei(5, "number"), _.H()(), _.Ah(6, Gwd, 6, 5, "div", 9, Hwd));
			a & 2 && (a = _.K(2), _.y(4), _.U(_.Gi(5, 1, a.uZ(), "1.")), _.y(2), _.Bh(a.CGb()));
		};
		Jwd = function(a, b) {
			a & 1 && (_.F(0, "div", 9)(1, "span"), _.R(2), _.H(), _.F(3, "span"), _.R(4), _.Ei(5, "number"), _.H()());
			a & 2 && (a = b.V, _.y(2), _.S("", a.modality, ":"), _.y(2), _.U(_.Gi(5, 2, a.tokens, "1.")));
		};
		Kwd = function(a) {
			a & 1 && (_.F(0, "div", 6)(1, "span"), _.R(2, "Thought tokens:"), _.H(), _.F(3, "span"), _.R(4), _.Ei(5, "number"), _.H()());
			a & 2 && (a = _.K(2), _.y(4), _.U(_.Gi(5, 1, a.fLa(), "1.")));
		};
		Lwd = function(a) {
			a & 1 && (_.F(0, "div", 6)(1, "span"), _.R(2, "Tool use tokens:"), _.H(), _.F(3, "span"), _.R(4), _.Ei(5, "number"), _.H()());
			a & 2 && (a = _.K(2), _.y(4), _.U(_.Gi(5, 1, a.GLa(), "1.")));
		};
		Mwd = function(a) {
			a & 1 && (_.I(0, "mat-divider", 12), _.F(1, "div", 10)(2, "p"), _.R(3), _.H(), _.F(4, "p"), _.R(5, " See details on our "), _.F(6, "a", 13), _.R(7, "pricing page"), _.H(), _.R(8, ". "), _.H()());
			a & 2 && (a = _.K(2), _.y(3), _.U(a.taa()), _.y(3), _.E("href", a.Fna() || a.qHa, _.rg));
		};
		Nwd = function(a) {
			a & 1 && (_.R(0, " Please see the usage and billing "), _.F(1, "a", 14), _.R(2, "dashboards"), _.H(), _.R(3, " to monitor costs. "));
		};
		Owd = function(a) {
			a & 1 && _.R(0, " Usage on AI Studio is free when no API key is selected. ");
		};
		Pwd = function(a) {
			a & 1 && (_.I(0, "mat-divider", 12), _.F(1, "div", 7), _.R(2, "Cost Estimation "), _.F(3, "sup"), _.R(4, "*"), _.H()(), _.F(5, "div", 6)(6, "span"), _.R(7, "Input token cost:"), _.H(), _.F(8, "span"), _.R(9), _.Ei(10, "number"), _.H()(), _.F(11, "div", 6)(12, "span"), _.R(13, "Output token cost:"), _.H(), _.F(14, "span"), _.R(15), _.Ei(16, "number"), _.H()(), _.F(17, "div", 6)(18, "span"), _.R(19, "Total cost:"), _.H(), _.F(20, "span"), _.R(21), _.Ei(22, "number"), _.H()(), _.I(23, "br"), _.F(24, "div", 10)(25, "p"), _.R(26, " *: This is an estimated cost if you make the same request via API. "), _.B(27, Nwd, 4, 0)(28, Owd, 1, 0), _.H(), _.F(29, "p"), _.R(30, "See details on our "), _.F(31, "a", 13), _.R(32, "pricing page"), _.H(), _.R(33, "."), _.H()());
			a & 2 && (a = _.K(2), _.y(9), _.S("$", _.Gi(10, 5, a.OBa(), "1.6-6")), _.y(6), _.S("$", _.Gi(16, 8, a.TGa(), "1.6-6")), _.y(6), _.S("$", _.Gi(22, 11, a.CTb(), "1.6-6")), _.y(6), _.C(a.XBa() ? 27 : 28), _.y(4), _.E("href", a.qHa, _.rg));
		};
		Qwd = function(a) {
			a & 1 && (_.F(0, "div", 10)(1, "p"), _.R(2, " See API usage cost on our "), _.F(3, "a", 13), _.R(4, "pricing page"), _.H(), _.R(5, ". "), _.H()());
			a & 2 && (a = _.K(2), _.y(3), _.E("href", a.qHa, _.rg));
		};
		Rwd = function(a) {
			a & 1 && (_.F(0, "div", 5)(1, "div", 6)(2, "span", 7), _.R(3, "Token Usage:"), _.H(), _.F(4, "span", 8), _.R(5), _.H()(), _.B(6, Fwd, 5, 0, "div", 6)(7, Iwd, 8, 4), _.F(8, "div", 6)(9, "span"), _.R(10, "Output tokens:"), _.H(), _.F(11, "span"), _.R(12), _.Ei(13, "number"), _.H()(), _.Ah(14, Jwd, 6, 5, "div", 9, Hwd), _.B(16, Kwd, 6, 4, "div", 6), _.B(17, Lwd, 6, 4, "div", 6), _.F(18, "div", 6)(19, "span"), _.R(20, "Total tokens:"), _.H(), _.F(21, "span"), _.R(22), _.Ei(23, "number"), _.H()(), _.B(24, Mwd, 9, 2)(25, Pwd, 34, 14)(26, Qwd, 6, 1, "div", 10), _.H());
			a & 2 && (a = _.K(), _.y(5), _.U(a.ETb()), _.y(), _.C(a.B0a() ? 6 : 7), _.y(6), _.U(_.Gi(13, 7, a.xT(), "1.")), _.y(2), _.Bh(a.QLb()), _.y(2), _.C(a.fLa() > 0 ? 16 : -1), _.y(), _.C(a.GLa() > 0 ? 17 : -1), _.y(5), _.U(_.Gi(23, 10, a.tokenCount(), "1.")), _.y(2), _.C(a.taa() ? 24 : a.OBa() + a.TGa() > 0 ? 25 : 26));
		};
		Swd = function(a) {
			switch (a) {
				case 1: return "TEXT";
				case 2: return "IMAGE";
				case 3: return "AUDIO";
				case 4: return "VIDEO";
				case 5: return "DOCUMENT";
				default: return "UNSPECIFIED";
			}
		};
		Twd = function(a) {
			a & 1 && (_.F(0, "div", 18, 15), _.I(2, "ms-incognito-mode-indicator", 25), _.H());
			a & 2 && (a = _.K(), _.E("@fadeIn", void 0), _.y(2), _.E("showTextLabel", a.N0()));
		};
		Uwd = function(a) {
			a & 1 && _.Ih(0, 19);
			a & 2 && (_.K(), a = _.O(23), _.E("ngTemplateOutlet", a));
		};
		Vwd = function(a) {
			a & 1 && _.I(0, "ms-quota-count");
		};
		Wwd = function(a) {
			a & 1 && (_.F(0, "p", 26), _.I(1, "ms-token-count", 27), _.H());
			a & 2 && (_.E("@fadeIn", void 0), _.y(), _.E("index", 0));
		};
		Xwd = function(a) {
			a & 1 && _.B(0, Vwd, 1, 0, "ms-quota-count")(1, Wwd, 2, 2, "p", 26);
			a & 2 && (a = _.K(), _.C(a.lm().pbb ? 0 : a.Lh() || a.lm().RF !== a.YO.MO ? -1 : 1));
		};
		Ywd = function(a) {
			a & 1 && _.Ih(0, 19);
			a & 2 && (_.K(), a = _.O(27), _.E("ngTemplateOutlet", a));
		};
		$wd = function(a) {
			a & 1 && _.Ih(0, 21);
			a & 2 && (_.K(2), a = _.O(33), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.zi(2, Zwd)));
		};
		axd = function(a) {
			a & 1 && (_.B(0, $wd, 1, 3, "ng-container", 21), _.Ih(1, 21));
			if (a & 2) {
				a = _.K();
				let b = _.O(35);
				_.C(a.Ym() ? -1 : 0);
				_.y();
				_.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.zi(3, Zwd));
			}
		};
		bxd = function(a) {
			a & 1 && _.I(0, "span", 29);
		};
		cxd = function(a) {
			a & 1 && (_.F(0, "div", 22), _.I(1, "button", 28), _.B(2, bxd, 1, 0, "span", 29), _.H());
			if (a & 2) {
				a = _.K();
				let b = _.O(15);
				_.E("@slidingInOut", void 0)("@.disabled", a.DK());
				_.y();
				_.E("matMenuTriggerFor", b)("iconName", a.S.my);
				_.y();
				_.C(!a.ev && a.tS() ? 2 : -1);
			}
		};
		dxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 30);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.vJ());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.S.Vea)("@slidingInOut", void 0));
		};
		fxd = function(a) {
			a & 1 && _.Ih(0, 21);
			a & 2 && (_.K(2), a = _.O(33), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.zi(2, exd)));
		};
		gxd = function(a) {
			a & 1 && (_.B(0, fxd, 1, 3, "ng-container", 21), _.Ih(1, 21));
			if (a & 2) {
				a = _.K();
				let b = _.O(35);
				_.C(a.Ym() ? -1 : 0);
				_.y();
				_.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.zi(3, exd));
			}
		};
		hxd = function(a) {
			a & 1 && _.Ih(0, 19)(1, 19);
			if (a & 2) {
				_.K();
				a = _.O(39);
				let b = _.O(43);
				_.E("ngTemplateOutlet", a);
				_.y();
				_.E("ngTemplateOutlet", b);
			}
		};
		ixd = function(a) {
			a & 1 && _.Ih(0, 21);
			a & 2 && (_.K(), a = _.O(27), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.zi(2, exd)));
		};
		jxd = function(a) {
			a & 1 && (_.F(0, "h1", 31), _.R(1, "Playground"), _.H());
		};
		kxd = function(a) {
			a & 1 && (_.F(0, "h1", 31), _.R(1, "Playground"), _.H());
		};
		lxd = function(a) {
			a & 1 && (_.F(0, "h1", 31), _.R(1, "Playground"), _.H());
		};
		mxd = function(a) {
			a & 1 && _.Ih(0, 19);
			a & 2 && (_.K(2), a = _.O(49), _.E("ngTemplateOutlet", a));
		};
		nxd = function(a) {
			a & 1 && _.Ih(0, 19);
			a & 2 && (_.K(2), a = _.O(49), _.E("ngTemplateOutlet", a));
		};
		oxd = function(a) {
			a & 1 && _.Ih(0, 19);
			a & 2 && (_.K(2), a = _.O(49), _.E("ngTemplateOutlet", a));
		};
		pxd = function(a) {
			a & 1 && (_.F(0, "div", 18, 15), _.B(2, jxd, 2, 0, "h1", 31)(3, kxd, 2, 0, "h1", 31)(4, lxd, 2, 0, "h1", 31)(5, mxd, 1, 1, "ng-container", 19)(6, nxd, 1, 1, "ng-container", 19)(7, oxd, 1, 1, "ng-container", 19), _.H());
			if (a & 2) {
				let b;
				a = _.K();
				_.P("can-edit", a.lm().Lv);
				_.E("@fadeIn", void 0);
				_.y(2);
				_.C((b = a.lm().RF) === a.YO.LO ? 2 : b === a.YO.U2 ? 3 : b === a.YO.XC ? 4 : b === a.YO.MO ? 5 : b === a.YO.glb ? 6 : b === a.YO.Ysb ? 7 : -1);
			}
		};
		qxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.Th(0);
				_.F(1, "button", 33);
				_.J("click", function() {
					_.q(b);
					var c = _.Vh(0), d = _.K(2);
					return _.t(!c && d.CLa());
				});
				_.H();
			}
			if (a & 2) {
				let b;
				a = _.K(2);
				let c = _.Uh(!((b = a.Nab()) == null ? 0 : b.GM));
				_.y();
				_.E("matTooltip", c ? "This model doesn't support " + a.eqa() : a.eqa())("disabled", c)("iconName", a.S.j2);
			}
		};
		rxd = function(a) {
			a & 1 && _.B(0, qxd, 2, 4, "button", 32);
			a & 2 && (a = _.K(), _.C(a.lm().q1 ? 0 : -1));
		};
		sxd = function(a) {
			a & 1 && _.I(0, "span", 38);
			a & 2 && (a = _.K(4), _.E("iconName", a.S.Zf));
		};
		txd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 36);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.Uca());
				});
				_.I(1, "span", 37);
				_.R(2, " Raw Mode ");
				_.B(3, sxd, 1, 1, "span", 38);
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("matTooltip", a.Pna())("ve", a.ve.aQa)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.S.Sea), _.y(2), _.C(a.tS() ? 3 : -1));
		};
		uxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 39);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.Uca());
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("iconName", a.S.Sea)("matTooltip", a.Pna())("ve", a.ve.aQa)("veImpression", !0)("veClick", !0)("active", a.tS()));
		};
		vxd = function(a) {
			a & 1 && _.B(0, txd, 4, 6, "button", 34)(1, uxd, 1, 6, "button", 35);
			a & 2 && (a = _.K().IZ, _.C(a ? 0 : 1));
		};
		wxd = function(a) {
			a & 1 && _.B(0, vxd, 2, 1);
			a & 2 && (a = _.K(), _.C(a.lm().YU ? 0 : -1));
		};
		xxd = function(a) {
			a & 1 && _.I(0, "span", 42);
			a & 2 && (a = _.K(3), _.E("iconName", a.S.Zf));
		};
		zxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 41);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(yxd(c));
				});
				_.I(1, "span", 37);
				_.R(2, " Temporary chat ");
				_.B(3, xxd, 1, 1, "span", 42);
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("matTooltip", a.pGb())("disabled", a.Z2a()), _.y(), _.E("iconName", a.S.qsa), _.y(2), _.C(a.Ym() ? 3 : -1));
		};
		Axd = function(a) {
			a & 1 && _.B(0, zxd, 4, 4, "button", 40);
			a & 2 && (a = _.K(), _.C(a.XJa() && a.lm().Lv ? 0 : -1));
		};
		Cxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 45);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(Bxd(c));
				});
				_.I(1, "span", 37);
				_.R(2);
				_.I(3, "ms-drive-save-indicator", 46);
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("disabled", a.r3a()), _.y(), _.E("iconName", a.S.Jea), _.y(), _.S(" ", a.cJ(), " "), _.y(), _.E("isSaving", a.kk())("isSaved", a.Fo())("hasUnsavedChanges", a.Ih()));
		};
		Dxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 47);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(Bxd(c));
				});
				_.I(1, "ms-drive-save-indicator", 46);
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("iconName", a.S.Jea)("matTooltip", a.cJ())("disabled", a.r3a()), _.y(), _.E("isSaving", a.kk())("isSaved", a.Fo())("hasUnsavedChanges", a.Ih()));
		};
		Exd = function(a) {
			a & 1 && _.B(0, Cxd, 4, 6, "button", 43)(1, Dxd, 2, 6, "button", 44);
			a & 2 && (a = _.K().IZ, _.C(a ? 0 : 1));
		};
		Fxd = function(a) {
			a & 1 && _.B(0, Exd, 2, 1);
			a & 2 && (a = _.K(), _.C(a.lm().Lv && a.Ii.XP() ? 0 : -1));
		};
		Gxd = function(a) {
			a & 1 && _.I(0, "ms-share-prompt", 48);
			if (a & 2) {
				a = _.K().IZ;
				let b = _.K(), c;
				_.E("@slidingInOut", void 0)("@.disabled", b.DK())("promptName", (c = b.S7a()) != null ? c : "")("renderAsMenuItem", a)("isDisabled", b.EIb())("tooltipText", b.OPb())("analyticsCategory", b.Ara);
			}
		};
		Hxd = function(a) {
			a & 1 && _.B(0, Gxd, 1, 7, "ms-share-prompt", 48);
			a & 2 && (a = _.K(), _.C(a.Ii.Awa() && a.lm().Lv ? 0 : -1));
		};
		Ixd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 51);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					_.DBb(c.oea);
					return _.t();
				});
				_.I(1, "span", 37);
				_.R(2, " Compare mode ");
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("ve", a.ve.oOa)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.S.hOa));
		};
		Jxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 52);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					_.DBb(c.oea);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("@slidingInOut", void 0)("@.disabled", a.DK())("ve", a.ve.oOa)("veImpression", !0)("veClick", !0)("iconName", a.S.hOa));
		};
		Kxd = function(a) {
			a & 1 && _.B(0, Ixd, 3, 4, "button", 49)(1, Jxd, 1, 6, "button", 50);
			a & 2 && (a = _.K().IZ, _.C(a ? 0 : 1));
		};
		Lxd = function(a) {
			a & 1 && _.B(0, Kxd, 2, 1);
			a & 2 && (a = _.K(), _.C(a.lm().VU && a.xQb() ? 0 : -1));
		};
		Nxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 55);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(Mxd(c));
				});
				_.I(1, "span", 37);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.vh("aria-label", a.N5()), _.E("matTooltip", a.vt())("disabled", !!a.vt()), _.y(), _.E("iconName", a.S.ADD), _.y(), _.S(" ", a.N5(), " "));
		};
		Oxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 56);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(Mxd(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("@slidingInOut", void 0)("@.disabled", a.DK()), _.vh("aria-label", a.N5()), _.E("matTooltip", a.vt() || a.N5())("disabled", !!a.vt())("iconName", a.S.ADD));
		};
		Pxd = function(a) {
			a & 1 && _.B(0, Nxd, 3, 5, "button", 53)(1, Oxd, 1, 6, "button", 54);
			a & 2 && (a = _.K().IZ, _.C(a ? 0 : 1));
		};
		Qxd = function(a) {
			a & 1 && _.B(0, Pxd, 2, 1);
			a & 2 && (a = _.K(), _.C(a.lm().o1 ? 0 : -1));
		};
		Rxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 58);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					c.Llb.info("Copying prompt...");
					_.Rn(c.Gsa, "HEADER", "Clicked Copy Prompt Button");
					c.oea.Hxa({
						title: `Copy of ${c.rb.title()}`,
						description: c.rb.description()
					});
					return _.t();
				});
				_.I(1, "span", 37);
				_.R(2, " Make a copy ");
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("disabled", a.m3a())("ve", a.ve.Arb)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.S.Ae));
		};
		Sxd = function(a) {
			a & 1 && _.B(0, Rxd, 3, 5, "button", 57);
			a & 2 && (a = _.K(), _.C(a.lm().WU ? 0 : -1));
		};
		Txd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 60);
				_.J("click", function() {
					_.q(b);
					_.K(2).b6a.emit();
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("matTooltip", a.Pzb())("disabled", a.jCa())("iconName", a.S.Ae));
		};
		Uxd = function(a) {
			a & 1 && _.B(0, Txd, 1, 3, "button", 59);
			a & 2 && (a = _.K(), _.C(a.lm().obb ? 0 : -1));
		};
		Wxd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 62);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(Vxd(c));
				});
				_.I(1, "span", 37);
				_.R(2, " Delete ");
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("disabled", a.m3a()), _.y(), _.E("iconName", a.S.ni));
		};
		Xxd = function(a) {
			a & 1 && _.B(0, Wxd, 3, 2, "button", 61);
			a & 2 && (a = _.K(), _.C(a.lm().XU ? 0 : -1));
		};
		Yxd = function(a) {
			a & 1 && (_.F(0, "a", 63)(1, "div", 64), _.I(2, "span", 37), _.R(3, " Open in Kaggle "), _.H()(), _.F(4, "a", 65)(5, "div", 64), _.I(6, "span", 37), _.R(7, " Open in Vertex AI "), _.H()());
			a & 2 && (a = _.K(2), _.E("href", a.FDa(), _.rg), _.y(2), _.E("iconName", a.S.Dk), _.y(4), _.E("iconName", a.S.Dk));
		};
		Zxd = function(a) {
			a & 1 && _.B(0, Yxd, 8, 3);
			a & 2 && (a = _.K(), _.C(a.A$a() ? 0 : -1));
		};
		$xd = function(a) {
			a & 1 && (_.F(0, "p", 68), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.S(" ", a.rb.description(), " "));
		};
		ayd = function(a) {
			a & 1 && (_.F(0, "div"), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.S(" Updated ", a.U6a(), " "));
		};
		byd = function(a) {
			a & 1 && (_.F(0, "div", 66)(1, "h3", 67), _.R(2), _.H(), _.B(3, $xd, 2, 1, "p", 68), _.F(4, "div", 69)(5, "div"), _.R(6), _.H(), _.B(7, ayd, 2, 1, "div"), _.H()());
			a & 2 && (a = _.K(), _.y(2), _.U(a.rb.title()), _.y(), _.C(a.rb.description().length > 0 ? 3 : -1), _.y(3), _.S(" by ", a.Ii.owner(), " "), _.y(), _.C(a.U6a() ? 7 : -1));
		};
		cyd = function(a) {
			a & 1 && (_.F(0, "h1", 31), _.R(1, "Playground"), _.H());
		};
		dyd = function(a) {
			a & 1 && _.I(0, "div", 70);
		};
		fyd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "h1", 71);
				_.J("click", function() {
					_.q(b);
					var c = _.K(4);
					return _.t(eyd(c));
				});
				_.R(1);
				_.H();
				_.F(2, "button", 72);
				_.J("click", function() {
					_.q(b);
					var c = _.K(4);
					return _.t(eyd(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(4), _.y(), _.S(" ", a.rb.title(), " "), _.y(), _.E("iconName", a.S.pn));
		};
		gyd = function(a) {
			a & 1 && (_.F(0, "h1", 73), _.R(1), _.H(), _.I(2, "span", 74));
			if (a & 2) {
				a = _.K(4);
				let b = _.O(47);
				_.y();
				_.S(" ", a.rb.title(), " ");
				_.y();
				_.E("iconName", a.S.Bf)("xapInlineDialog", b);
			}
		};
		hyd = function(a) {
			a & 1 && _.B(0, fyd, 3, 2)(1, gyd, 3, 3);
			a & 2 && (a = _.K(3), _.C(a.Ii.XP() ? 0 : 1));
		};
		iyd = function(a) {
			a & 1 && _.B(0, dyd, 1, 0, "div", 70)(1, hyd, 2, 1);
			a & 2 && (a = _.K(2), _.C(a.rb.SZ() ? 0 : 1));
		};
		jyd = function(a) {
			a & 1 && _.B(0, cyd, 2, 0, "h1", 31)(1, iyd, 2, 1);
			a & 2 && (a = _.K(), _.C(a.sFb() && a.O$a() ? 1 : 0));
		};
		lyd = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 6), _.R(1), _.H());
			a & 2 && (a = b.V, _.K(), _.E("value", a)("ve", kyd(a))("veImpression", !0)("veClick", !0), _.y(), _.S(" ", a.language, " "));
		};
		myd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "mat-slide-toggle", 19);
				_.Ei(1, "buildVeMetadata");
				_.J("change", function() {
					_.q(b);
					var c = _.K(2);
					c.Ia.getCodeHistoryToggle.set(!c.Ia.getCodeHistoryToggle());
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("ve", a.ve.Rkb)("veMetadata", _.Fi(1, 6, a.A7()))("veClick", !0)("veImpression", !0)("veMutable", !0)("checked", a.getCodeHistoryToggle()));
		};
		oyd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 20);
				_.Ei(1, "buildVeMetadata");
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(nyd(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Oib)("ve", a.ve.Okb)("veClick", !0)("veImpression", !0)("veMetadata", _.Fi(1, 6, a.A7()))("veMutable", !0));
		};
		pyd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "ms-code-block", 10);
				_.Ei(1, "async");
				_.F(2, "div", 14);
				_.B(3, myd, 2, 8, "mat-slide-toggle", 15);
				_.B(4, oyd, 2, 8, "button", 16);
				_.F(5, "button", 17);
				_.Ei(6, "buildVeMetadata");
				_.J("click", function() {
					_.q(c);
					var d = _.K();
					return _.t(d.kia());
				});
				_.H();
				_.I(7, "a", 18);
				_.Ei(8, "async");
				_.Ei(9, "buildVeMetadata");
				_.H()();
			}
			if (a & 2) {
				let c;
				a = _.K();
				let d;
				_.E("code", b)("language", (d = (c = _.Fi(1, 19, a.PN)) == null ? null : c.language) != null ? d : "")("isExpandable", !1)("icon", a.S.aq);
				_.y(3);
				_.C(a.KQb() ? 3 : -1);
				_.y();
				_.C(a.ELb() ? 4 : -1);
				_.y();
				_.E("iconName", a.S.Hm)("ve", a.ve.Qkb)("veClick", !0)("veImpression", !0)("veMetadata", _.Fi(6, 21, a.A7()))("veMutable", !0);
				_.y(2);
				_.E("href", _.Fi(8, 23, a.Owb), _.rg)("ve", a.ve.Mkb)("veClick", !0)("veImpression", !0)("veMetadata", _.Fi(9, 25, a.A7()))("veMutable", !0)("iconName", a.S.GV);
			}
		};
		qyd = function(a) {
			a & 1 && (_.F(0, "div", 6)(1, "h3", 9), _.R(2, "Text safety settings"), _.H(), _.I(3, "p"), _.R(4, " Changes to the safety settings below apply to text inputs and outputs. "), _.H());
		};
		vyd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 7)(1, "div", 10)(2, "div", 11);
				_.R(3);
				_.H()();
				_.F(4, "div", 12)(5, "div", 13);
				_.R(6);
				_.H();
				_.F(7, "mat-slider", 14)(8, "input", 15);
				_.J("ngModelChange", function(d) {
					var e = _.q(c).V, f = _.K();
					return _.t(ryd(f, e.harmCategory, d));
				});
				_.H();
				_.yg();
				_.H()()();
			}
			a & 2 && (a = b.V, b = _.K(), _.y(3), _.U(a.title), _.y(3), _.S(" ", syd(tyd(b, a.harmCategory)), " "), _.y(), _.E("min", _.wi(b.tKb)), _.y(), _.E("ngModel", tyd(b, a.harmCategory) * -1)("matTooltip", uyd(tyd(b, a.harmCategory))), _.wh("aria-label", a.title), _.zg());
		};
		wyd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 9)(1, "ms-slider", 10);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.OC.emit(c));
				});
				_.H()();
			}
			a & 2 && (a = _.K(2), _.E("matTooltip", a.RRb()), _.y(), _.E("value", a.value())("step", 1)("min", a.X4a())("max", a.Q4a())("floor", !0)("disabled", a.disabled()));
		};
		xyd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 2)(1, "p", 3);
				_.R(2, "Set thinking budget");
				_.H();
				_.F(3, "div", 4)(4, "mat-slide-toggle", 7);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K();
					c.checked ? d.OC.emit(d.RAb()) : d.OC.emit(-1);
					return _.t();
				});
				_.H()()();
				_.F(5, "div", 8);
				_.B(6, wyd, 2, 7, "div", 9);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", a.Sxb()), _.y(4), _.E("checked", a.UZ())("disabled", a.disabled()), _.y(), _.E("@slideUpDown", a.UZ() ? "visible" : "hidden"), _.y(), _.C(a.UZ() ? 6 : -1));
		};
		Ayd = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 7), _.R(1), _.H());
			a & 2 && (a = b.V, b = _.K(), _.E("value", a)("matTooltip", yyd(a)), _.y(), _.U(zyd(b, a)));
		};
		Byd = function(a) {
			return a.toString().replaceAll(/\\/g, "\\\\").replaceAll(/"/g, "\\\"");
		};
		Cyd = function(a) {
			return a.toString().replaceAll(/\\/g, "\\\\").replaceAll(/`/g, "\\`");
		};
		Dyd = function(a) {
			a = JSON.stringify(a.toString());
			return a.substring(1, a.length - 1);
		};
		Eyd = function() {
			return _.x(function* () {
				yield (0, _.Sp)("WddNhf");
				return _.pTb;
			});
		};
		Fyd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 5);
				_.J("click", function() {
					_.q(c);
					var d = _.K();
					_.Rn(d.Olb, "NAV", "Prompt Card", "Prompt Card");
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(), _.E("routerLink", _.Oud("/", b.Zv.xob, "/", a.id))("ariaLabel", a.name)("ve", b.ve.Epb)("veClick", !0), _.y(), _.S(" ", a.description, " "));
		};
		Gyd = function(a) {
			a & 1 && _.Yh(0);
		};
		Hyd = function(a) {
			a & 1 && _.I(0, "ms-gallery-panel");
		};
		Iyd = function(a) {
			a & 1 && (_.F(0, "div", 0), _.B(1, Gyd, 1, 0)(2, Hyd, 1, 0, "ms-gallery-panel"), _.H());
			a & 2 && (a = _.K(), _.E("@slideInOut", a.Q2a() ? "" : "in"), _.y(), _.C(a.state() === "RUN_SETTINGS" ? 1 : a.state() === "GALLERY" ? 2 : -1));
		};
		_.hL.prototype.KC = _.ca(190, function(a, b) {
			return _.$q(this.A, this.F + "/$rpc/google.alkali.boq.makersuite.cloudsql.proto.CloudSqlService/UpdateSchema", a, b || {}, _.GFb);
		});
		_.Hn.prototype.cZ = _.ca(47, function() {
			return _.sn(this, _.xn, 3);
		});
		_.l1a.prototype.cZ = _.ca(46, function() {
			return _.sn(this, _.yv, 3);
		});
		fvd = function(a, b) {
			_.ln(a, _.xn, 6, b);
		};
		hvd = function(a, b) {
			_.ht(a, 21, b);
		};
		gvd = function(a, b) {
			_.ht(a, 22, b);
		};
		ivd = function(a, b, c) {
			_.Nca(a, 7, _.xn).set(b, c);
		};
		jvd = function(a, b) {
			_.ht(a, 9, b);
		};
		kvd = function(a, b) {
			_.ht(a, 10, b);
		};
		lvd = function(a, b) {
			_.ht(a, 13, b);
		};
		mvd = function(a, b) {
			_.ht(a, 14, b);
		};
		nvd = function(a, b) {
			_.ln(a, _.qo, 16, b);
		};
		ovd = function(a, b) {
			_.Us(a, 17, _.xn, b);
		};
		pvd = function(a, b) {
			_.Us(a, 18, _.xn, b);
		};
		qvd = function(a, b) {
			_.Us(a, 19, _.xn, b);
		};
		rvd = function(a, b) {
			_.ln(a, _.xn, 20, b);
		};
		svd = function(a, b) {
			_.qt(a, 23, b);
		};
		bwd = function(a, b) {
			return _.ln(a, _.xn, 3, b);
		};
		Jyd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		Kyd = class extends _.h {
			constructor(a) {
				super(a);
			}
			getLanguage() {
				return _.Lm(this, 2);
			}
			Sb() {
				return _.l(this, 3);
			}
		};
		_.owd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		_.nwd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		Lyd = function(a) {
			var b = new _.F7a();
			return _.$q(a.A, a.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GetGetcodeTemplates", b, {}, _.H7a);
		};
		Myd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		_.o4 = function(a, b, c = "id, name, size, thumbnailLink") {
			return _.oH(a, "picker").pipe(_.Qg(), _.ch(() => _.pH(gapi.client.drive.files.get({
				fileId: b,
				fields: c,
				supportsAllDrives: !0
			})).pipe(_.uf((d) => d.result))));
		};
		Nyd = function(a) {
			return _.BYc(a, () => a.A.A).pipe(_.ch((b) => _.o4(a.A, b.getId())));
		};
		_.Oyd = {
			[5]: {
				title: "Off",
				description: "Do not run safety filters"
			},
			[4]: {
				title: "Block none",
				description: "Always show regardless of probability of being harmful"
			},
			[3]: {
				title: "Block few",
				description: "Block high probability of being harmful"
			},
			[2]: {
				title: "Block some",
				description: "Block medium or high probability of being harmful"
			},
			[1]: {
				title: "Block most",
				description: "Block low, medium and high probability of being harmful"
			}
		};
		g4 = class extends _.PE {
			constructor(a) {
				super();
				this.Yxa = a;
			}
			get message() {
				return this.Yxa;
			}
		};
		_.Pyd = {
			H3b: 0,
			K3b: 4,
			I3b: 1,
			J3b: 2,
			F3b: 3,
			E3b: 5
		};
		Qyd = [_.qm("listen", [_.um("false => true", [Pud(".mobile-icon", [Qud()], { optional: !0 })])]), _.qm("submit", [_.um("false => true", [function(a, b = null) {
			return {
				type: 3,
				steps: a,
				options: b
			};
		}([Pud(".mobile-icon", [Qud()], { optional: !0 }), Pud(".highlight", [_.sm({
			color: "var(--color-v3-button-container)",
			offsetDistance: "0%",
			transform: "scale(1)"
		}), _.rm("400ms 0ms ease-out", _.sm({
			offsetDistance: "100%",
			transform: "scale(0)"
		}))])])])])];
		var Ryd;
		Ryd = function(a) {
			a.lLa = Date.now();
			_.Df(100).pipe(_.uf(() => {
				var b = Date.now() - a.lLa;
				return `${Math.floor(b / 1e3)}.${Math.floor(b % 1e3 / 100)}s`;
			}));
		};
		_.p4 = class {
			constructor() {
				this.Vm = _.m(_.e2);
				this.A = _.m(_.HO);
				this.ve = {
					Fpb: 225921,
					grb: 250044
				};
				this.disabled = _.V(!1);
				this.kO = _.V();
				this.opa = _.Li.required();
				this.veMetadata = _.W(() => {
					var a = new _.gz();
					var b = new _.Rdb();
					var c = this.A.X()(0);
					b = _.Lj(b, 1, c);
					return _.ln(a, _.Rdb, 2, b);
				});
				this.label = _.V("");
				this.Kpa = _.V("Stop");
				this.listening = _.V(!1);
				this.number = _.V(null);
				this.size = _.V("medium");
				this.tooltip = _.V("");
				this.JJ = _.V(null);
				this.T2a = _.V(!1);
				this.wP = _.V(!1);
				this.oka = _.V(!1);
				this.GN = _.Ki();
				this.tJ = _.Ki();
				this.F = _.M(!1);
				this.Wv = _.u4c;
				this.rCb = _.W(() => this.Vm.enterKeyBehavior());
				_.W(() => {
					var a = this.size();
					return a === "large" && this.Vm.enterKeyBehavior() === 1 ? "small" : a;
				});
				_.mf("");
				this.S = _.Dk;
				this.AM = _.Aa();
				this.f3a = _.lp() || _.WCa();
				this.lLa = 0;
				_.Fk([this.kO], () => {
					this.kO() ? Ryd(this) : _.mf("");
				});
			}
			Ba() {
				this.kO() && (_.mf(""), this.tJ.emit());
			}
			Xu() {
				this.disabled() || (this.kO() ? (_.mf(""), this.tJ.emit()) : (this.F.set(!0), this.GN.emit()));
			}
		};
		_.p4.J = function(a) {
			return new (a || _.p4)();
		};
		_.p4.ka = _.u({
			type: _.p4,
			da: [["ms-run-button"]],
			inputs: {
				disabled: [1, "disabled"],
				kO: [1, "stoppable"],
				opa: [1, "showRunningTime"],
				label: [1, "label"],
				Kpa: [1, "stopLabel"],
				listening: [1, "listening"],
				number: [1, "number"],
				size: [1, "size"],
				tooltip: [1, "tooltip"],
				JJ: [1, "veId"],
				T2a: [1, "isGempixModel"],
				wP: [1, "addInsteadOfRun"],
				oka: [1, "hideShortcutKey"]
			},
			outputs: {
				GN: "runClick",
				tJ: "stopClick"
			},
			ha: 7,
			ia: 19,
			la: [
				[
					"ms-button",
					"",
					"matTooltipClass",
					"run-button-tooltip",
					3,
					"click",
					"type",
					"disabled",
					"matTooltip",
					"ve",
					"veMutable",
					"veImpression",
					"veMetadata",
					"veClick"
				],
				[1, "run-button-label"],
				[3, "iconName"],
				[
					1,
					"command-key-icon",
					3,
					"iconName"
				],
				[1, "secondary-key"],
				[
					1,
					"spin",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Th(0)(1)(2), _.F(3, "button", 0), _.Ei(4, "buildVeProtoMetadata"), _.J("click", function() {
					return b.Xu();
				}), _.B(5, Bvd, 3, 2)(6, Cvd, 3, 2), _.H());
				a & 2 && (_.Uh(b.label() || (b.wP() ? "Add" : "Run")), _.y(), _.Uh(b.wP() ? b.S.ADD : b.S.G2), _.y(), a = _.Uh(b.rCb() === b.Wv.kOa), _.y(), _.P("ctrl-enter-submits", a)("showing-add", b.wP() && !b.f3a), _.E("type", b.kO() ? "button" : "submit")("disabled", b.disabled())("matTooltip", b.tooltip())("ve", b.JJ() || (b.kO() ? b.ve.grb : b.ve.Fpb))("veMutable", !0)("veImpression", !0)("veMetadata", _.Fi(4, 17, b.veMetadata()))("veClick", !0), _.wh("aria-disabled", b.disabled()), _.y(2), _.C(b.kO() ? 6 : 5));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.dz,
				_.yA,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz,
				_.iz
			],
			styles: [".run-button[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:var(--color-v3-button-container);border:1px solid var(--color-v3-outline);color:var(--color-v3-text-on-button);border-radius:16px;cursor:pointer;display:block;height:32px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;outline:none;overflow:hidden;padding:0;position:relative;width:32px;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.run-button.gempix[_ngcontent-%COMP%]{background:#ffe135;border-color:transparent}.run-button.gempix.gempix[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#000}.run-button[_ngcontent-%COMP%]   .stoppable-spinner[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_rotate 1s linear infinite;animation:_ngcontent-%COMP%_rotate 1s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.run-button[_ngcontent-%COMP%]   .stoppable-spinner.stoppable-spinner[_ngcontent-%COMP%]{stroke:var(--color-v3-text-on-button);font-size:32px;-webkit-transform-origin:center;transform-origin:center}.run-button[_ngcontent-%COMP%]   .stoppable-stop[_ngcontent-%COMP%]{fill:var(--color-v3-text-on-button)}.run-button[_ngcontent-%COMP%]:focus-visible{-webkit-filter:brightness(.8);filter:brightness(.8)}.run-button[_ngcontent-%COMP%]:hover:not([disabled]){-webkit-filter:brightness(.9);filter:brightness(.9)}.run-button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.run-button[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{aspect-ratio:1/1;background-color:transparent;border-radius:50%;left:0;offset-path:path(\"M16 16 C16 12.5 21 10 23.5 14 C25.5 17 22 21 18.5 19\");position:absolute;top:0;width:100%;z-index:0}.run-button[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.run-button[_ngcontent-%COMP%]   .mobile-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--color-v3-text-on-button)}.run-button[_ngcontent-%COMP%]   .run-button-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.run-button[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%], .run-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .run-button[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:inherit}.run-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{-webkit-font-feature-settings:\"tnum\";-moz-font-feature-settings:\"tnum\";font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums;font-weight:500}.run-button[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 2px;border-radius:20px}.run-button[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%]   .primary-key-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;font-weight:700}.run-button[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%]   .secondary-key[_ngcontent-%COMP%]{font-size:12px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.run-button[_ngcontent-%COMP%]   .command[_ngcontent-%COMP%]   .secondary-key.icon[_ngcontent-%COMP%]{width:12px}.run-button.disabled[_ngcontent-%COMP%]{background-color:var(--color-v3-surface-container);color:var(--color-v3-text-disable);cursor:not-allowed}.run-button.disabled.gempix[_ngcontent-%COMP%]{background-color:#fcf4c5}.run-button.disabled.gempix[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#666}.run-button.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--color-v3-text-disable)}.run-button.small[_ngcontent-%COMP%]{border-radius:14px;height:28px;width:28px}.run-button.small[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{offset-path:path(\"M7 12.5C7.5 7.5 13.5 4.50001 17 8.00001C20.7583 11.7583 15 18 10.5 13\")}.run-button.large[_ngcontent-%COMP%]{border-radius:18px;height:36px;padding:0 16px 0 12px;width:unset;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:left;-webkit-justify-content:left;-moz-box-pack:left;-ms-flex-pack:left;justify-content:left;white-space:nowrap;-webkit-transition:width .3s ease-in;transition:width .3s ease-in}.run-button.large[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{offset-path:path(\"M18 18 C25.5 9.5 42.4231 4.80788 46.5 15 C49.5 22.5 35.5 31.1379 30 22.5\")}.run-button.large.stoppable[_ngcontent-%COMP%]{width:159px}.run-button.large.stoppable.no-timer[_ngcontent-%COMP%]{width:auto}.run-button.medium[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;white-space:nowrap;-webkit-transition:width .3s ease-in;transition:width .3s ease-in}.run-button.medium.stoppable[_ngcontent-%COMP%]{padding:0 8px 0 4px;-webkit-box-pack:left;-webkit-justify-content:left;-moz-box-pack:left;-ms-flex-pack:left;justify-content:left;width:80px}@-webkit-keyframes _ngcontent-%COMP%_counter-clockwise-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes _ngcontent-%COMP%_counter-clockwise-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@-webkit-keyframes _ngcontent-%COMP%_spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spin[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_spin .66s linear infinite;animation:_ngcontent-%COMP%_spin .66s linear infinite;line-height:1}[ms-button][_ngcontent-%COMP%]   span.material-symbols-outlined[_ngcontent-%COMP%]{font-size:15px}.run-button-label[_ngcontent-%COMP%]{min-width:28px}.showing-add[_ngcontent-%COMP%]   .command-key-icon[_ngcontent-%COMP%], .showing-add[_ngcontent-%COMP%]   .secondary-key[_ngcontent-%COMP%]{visibility:hidden}"],
			data: { animation: Qyd }
		});
		var Syd;
		Syd = () => ({ minHeight: "0" });
		_.q4 = class {
			Ze() {
				this.I.openDialog(this.Zd);
			}
			constructor() {
				this.ve = { Efb: 296303 };
				this.tooltip = _.Ni(_.EC);
				this.Yja = _.V(!1);
				this.KE = _.V(!1);
				this.disabled = _.V(!1);
				this.Qf = _.V("API key selection is disabled");
				this.Zd = _.V(!1);
				this.A = _.m(_.OC);
				this.I = _.m(_.LH);
				this.R = _.m(_.nG);
				this.Vb = _.m(_.AG);
				this.bb = this.A.bb;
				this.aHa = _.W(() => this.bb() ? "key" : "key_off");
				this.x9 = _.M(!1);
				this.F = _.M(!1);
				this.yf = _.W(() => (0, _.Jp)() && this.R.Le());
				this.H = _.W(() => this.F() || this.yf() || this.Vb.Hb() || !this.tooltip() ? !1 : this.Yja() && !this.bb() && this.KE() && !this.x9() || this.bb() ? !0 : !1);
				var a = !0;
				_.Fk([this.H, this.A.I], () => {
					if (this.A.I()) {
						if (a && (a = !1, this.bb())) return;
						var b = this.tooltip();
						b && this.H() && (b.openDialog(), setTimeout(() => {
							this.F.set(!0);
							b.wn();
						}, 6e3));
					}
				});
				_.Fk([this.Yja], () => {
					if (this.Yja() && this.bb()) {
						let b;
						(b = this.tooltip()) == null || b.wn();
					}
				});
			}
		};
		_.q4.J = function(a) {
			return new (a || _.q4)();
		};
		_.q4.ka = _.u({
			type: _.q4,
			da: [["ms-paid-api-key-button"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.tooltip, _.EC, 5);
				a & 2 && _.ki();
			},
			inputs: {
				Yja: [1, "hasUserStartedTyping"],
				KE: [1, "isPaidModelSelected"],
				disabled: [1, "disabled"],
				Qf: [1, "disabledTooltip"],
				Zd: [1, "isGenerating"]
			},
			ha: 3,
			ia: 10,
			la: [
				["paidApiKeyTooltip", ""],
				[
					"ms-button",
					"",
					"dialogLabel",
					"API key information",
					1,
					"paid-api-key-button",
					3,
					"click",
					"opened",
					"iconName",
					"active",
					"disabled",
					"xapInlineDialog",
					"overlaySize",
					"ve",
					"veClick",
					"veImpression"
				],
				[1, "paid-api-key-tooltip"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 1), _.J("click", function() {
					return b.Ze();
				})("opened", function() {
					return b.x9.set(!0);
				}), _.H(), _.z(1, Gvd, 4, 1, "ng-template", null, 0, _.Ii));
				a & 2 && (a = _.O(2), _.E("iconName", b.aHa())("active", !!b.bb())("disabled", b.disabled())("xapInlineDialog", a)("overlaySize", _.zi(9, Syd))("ve", b.ve.Efb)("veClick", !0)("veImpression", !0), _.wh("aria-label", b.bb() ? "API key selected" : "No API key selected"));
			},
			dependencies: [
				_.Yy,
				_.Cz,
				_.Bz,
				_.EC
			],
			styles: ["button[_ngcontent-%COMP%]{padding:0 8px}.paid-api-key-tooltip[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding:12px}"]
		});
		_.Tyd = function() {
			return _.mf(void 0);
		};
		_.Uyd = function() {
			return _.mf(void 0);
		};
		_.r4 = !1;
		var Mvd = () => [], Hvd = (a, b) => ({
			entry: a,
			index: b,
			vBa: "root"
		}), Kvd = (a, b, c, d) => ({
			entry: a,
			index: b,
			parent: c,
			vBa: d
		}), Vyd = "string number integer boolean object enum".split(" "), Wyd = new Set("type enum items properties propertyOrdering required".split(" ")), Uvd = new Set([..._.Tmb].filter((a) => !Wyd.has(a))), Xyd = {
			key: "root",
			type: "object",
			children: []
		}, Yyd = function(a) {
			return (a = Xvd(a.schema())) ? JSON.stringify(a, null, 2) : "";
		}, s4 = class {
			constructor() {
				this.vrb = Vyd;
				this.Pnb = "object";
				this.Sjb = "enum";
				this.S = _.Dk;
				this.textInput = _.V("");
				this.Kbb = _.Ki();
				this.EZa = _.Ki();
				this.schema = _.M(Xyd);
				this.Ga = _.m(_.Jf);
				_.Fk([this.textInput], () => {
					var a = this.textInput();
					if (a) try {
						let e = JSON.parse(a);
						if (!_.Bo(e)) throw Error("vi");
						if (e.type && e.type !== "object") throw Error("wi");
						var b = this.schema, c = b.set;
						{
							let f = Tvd(e);
							var d = e.properties || f ? Object.assign({}, Xyd, { children: Svd(e) }, f ? { vO: f } : {}) : void 0;
						}
						c.call(b, d != null ? d : Xyd);
					} catch (e) {
						this.EZa.emit(e.message.split("\n")[0]);
					}
					else this.schema.set(Xyd);
				});
				_.Fk([this.schema], () => {
					this.Kbb.emit(Yyd(this));
				});
			}
			DW(a) {
				if (a) {
					let b;
					a.children = [...(b = a.children) != null ? b : [], {
						key: "",
						type: Vyd[0],
						isRequired: !0
					}];
				} else this.schema.update((b) => {
					var c;
					return Object.assign({}, b, { children: [...(c = b.children) != null ? c : [], {
						key: "",
						type: Vyd[0],
						isRequired: !0
					}] });
				}), setTimeout(() => {
					var b = this.Ga.nativeElement.closest(".scroll");
					b && b.scrollTo({
						top: b.scrollHeight - b.clientHeight,
						behavior: "smooth"
					});
				}, 1);
			}
			removeEntry(a, b) {
				b ? b.children = [...b.children.slice(0, a), ...b.children.slice(a + 1)] : (b = this.schema(), !b.children || b.children.length < a || this.schema.set(Object.assign({}, b, { children: [...b.children.slice(0, a), ...b.children.slice(a + 1)] })));
			}
			KC() {
				this.schema.update((a) => Object.assign({}, a));
			}
		};
		s4.J = function(a) {
			return new (a || s4)();
		};
		s4.ka = _.u({
			type: s4,
			da: [["ms-json-schema-editor"]],
			inputs: { textInput: [1, "textInput"] },
			outputs: {
				Kbb: "textOutput",
				EZa: "errorOutput"
			},
			ha: 6,
			ia: 1,
			la: [
				["entryTemplate", ""],
				[
					3,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Add property",
					3,
					"click"
				],
				[1, "entry"],
				[1, "entry-key"],
				[
					1,
					"entry-key-label",
					3,
					"for"
				],
				[
					"ms-input",
					"",
					"aria-label",
					"Property name",
					3,
					"ngModelChange",
					"id",
					"ngModel"
				],
				[1, "wrap-on-small"],
				[1, "entry-type"],
				"appearance;outline;aria-label;Property type;matTooltip;Type of the property".split(";"),
				[
					3,
					"ngModelChange",
					"ngModel"
				],
				[3, "value"],
				[1, "wrap-on-medium"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Toggle Array",
					3,
					"click",
					"active",
					"matTooltip",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Toggle Required",
					3,
					"click",
					"iconName",
					"active",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Delete property",
					"matTooltip",
					"Delete property",
					3,
					"click",
					"iconName"
				],
				[1, "entry-children"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Add nested property",
					3,
					"click"
				],
				[1, "entry-enum"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Add enum value",
					3,
					"click"
				],
				[1, "enum-value"],
				[
					"ms-input",
					"",
					"aria-label",
					"Enum value",
					"matTooltip",
					"Enum value",
					3,
					"ngModelChange",
					"ngModel"
				],
				[1, "button-container"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Delete enum value",
					"matTooltip",
					"Delete enum value",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Ah(0, Ivd, 1, 5, "ng-container", 1, _.yh), _.F(2, "button", 2), _.J("click", function() {
					return b.DW();
				}), _.R(3, " Add property\n"), _.H(), _.z(4, Qvd, 19, 17, "ng-template", null, 0, _.Ii));
				if (a & 2) {
					let c;
					_.Bh((c = b.schema().children) != null ? c : _.zi(0, Mvd));
				}
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				_.JD,
				_.Wn,
				_.oD,
				_.vD,
				_.gE,
				_.dE,
				_.ZD,
				_.bE,
				_.cE,
				_.QB,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]{width:100%}.entry[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px;margin-bottom:8px;row-gap:4px}.entry[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px}.entry[_ngcontent-%COMP%]   .wrap-on-medium[_ngcontent-%COMP%], .entry[_ngcontent-%COMP%]   .wrap-on-small[_ngcontent-%COMP%]{display:none}@media screen and (max-width:768px){.entry[_ngcontent-%COMP%]   .wrap-on-medium[_ngcontent-%COMP%]{display:block;width:100%}}@media screen and (max-width:600px){.entry[_ngcontent-%COMP%]   .wrap-on-medium[_ngcontent-%COMP%], .entry[_ngcontent-%COMP%]   .wrap-on-small[_ngcontent-%COMP%]{display:block;width:100%}}.entry-children[_ngcontent-%COMP%]{padding-left:20px}.entry-enum[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;margin-bottom:8px}.entry-enum[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}@media screen and (max-width:768px){.entry-enum[_ngcontent-%COMP%]   .enum-value[_ngcontent-%COMP%]{-webkit-box-flex:2;-webkit-flex:2;-moz-box-flex:2;-ms-flex:2;flex:2}.entry-enum[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}}@media screen and (max-width:600px){.entry-enum[_ngcontent-%COMP%]   .enum-value[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.entry-enum[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{-webkit-box-flex:initial;-webkit-flex:initial;-moz-box-flex:initial;-ms-flex:initial;flex:initial}}.entry-key[_ngcontent-%COMP%], .entry-type[_ngcontent-%COMP%], .enum-value[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.entry-key[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .entry-type[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .enum-value[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.entry-key[_ngcontent-%COMP%]   .entry-key-label[_ngcontent-%COMP%], .entry-type[_ngcontent-%COMP%]   .entry-key-label[_ngcontent-%COMP%], .enum-value[_ngcontent-%COMP%]   .entry-key-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.icon-offset[_ngcontent-%COMP%]{margin-left:1px}\n/*# sourceMappingURL=json_schema_editor.css.map */"]
		});
		var awd = {
			UNSPECIFIED: 0,
			BLOCKING: 1,
			NON_BLOCKING: 2
		}, Zvd = {
			[0]: "UNSPECIFIED",
			[1]: "BLOCKING",
			[2]: "NON_BLOCKING"
		}, m4 = class extends _.PE {
			constructor(a) {
				super();
				this.Yxa = a;
			}
			get message() {
				return this.Yxa;
			}
		};
		var t4 = class {
			constructor() {
				this.label = _.Li.required();
				this.disabled = _.V(!1);
				this.isActive = _.M(!1);
				this.wK = _.Ki();
				this.id = `ms-tab-${_.Yn()}`;
				this.contentId = `ms-tab-content-${_.Yn()}`;
			}
		};
		t4.J = function(a) {
			return new (a || t4)();
		};
		t4.ka = _.u({
			type: t4,
			da: [["ms-tab"]],
			eb: ["role", "presentation"],
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && (_.wh("label", b.label())("disabled", b.disabled() || null), _.P("active", b.isActive()));
			},
			inputs: {
				label: [1, "label"],
				disabled: [1, "disabled"]
			},
			outputs: { wK: "activate" },
			fc: ["*"],
			ha: 2,
			ia: 3,
			la: [[
				"role",
				"tabpanel",
				1,
				"tab-content",
				3,
				"hidden"
			]],
			template: function(a, b) {
				a & 1 && (_.Xh(), _.Dh(0, "div", 0), _.Yh(1), _.Eh());
				a & 2 && (_.Ch("hidden", !b.isActive()), _.wh("id", b.contentId)("aria-labelledby", b.id));
			},
			styles: ["[_nghost-%COMP%]{display:block}"]
		});
		var Zyd = (a, b) => b.id, ewd = function(a, b) {
			var c = a.tabs().indexOf(b);
			b.disabled() || c === -1 || a.uC.emit(c);
		}, u4 = class {
			constructor() {
				this.tabs = _.hi();
				this.edb = _.V(!1);
				this.selectedIndex = _.V(0);
				this.uC = _.Ki();
				this.vC = _.W(() => {
					var a = this.tabs(), b = this.selectedIndex();
					if (a.length !== 0) return b >= 0 && b < a.length ? a[b] : a[0];
				});
				_.Fk([this.vC, this.tabs], () => {
					var a = this.vC();
					this.tabs().forEach((b) => {
						b.isActive.set(b === a);
					});
				});
				_.Fk([
					this.selectedIndex,
					this.vC,
					this.tabs
				], () => {
					var a = this.tabs(), b = this.selectedIndex(), c = this.vC();
					a.length > 0 && (b < 0 || b >= a.length) ? this.uC.emit(0) : (a = a.indexOf(c), a !== b && this.uC.emit(a));
				});
			}
		};
		u4.J = function(a) {
			return new (a || u4)();
		};
		u4.ka = _.u({
			type: u4,
			da: [["ms-tab-group"]],
			Ud: function(a, b, c) {
				a & 1 && _.ii(c, b.tabs, t4, 4);
				a & 2 && _.ki();
			},
			inputs: {
				edb: [1, "useInlineButtons"],
				selectedIndex: [1, "selectedIndex"]
			},
			outputs: { uC: "selectedIndexChange" },
			fc: ["*"],
			ha: 5,
			ia: 0,
			la: [
				[
					"role",
					"tablist",
					1,
					"ms-tab-header"
				],
				[1, "ms-tab-body"],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"role",
					"tab",
					3,
					"active",
					"disabled"
				],
				[
					"role",
					"tab",
					1,
					"inline-button",
					3,
					"click",
					"disabled"
				],
				[1, "inline-button-divider"],
				[
					"ms-button",
					"",
					"variant",
					"filter-chip",
					"role",
					"tab",
					3,
					"click",
					"active",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(), _.F(0, "div", 0), _.Ah(1, hwd, 2, 1, null, null, Zyd), _.H(), _.F(3, "div", 1), _.Yh(4), _.H());
				a & 2 && (_.y(), _.Bh(b.tabs()));
			},
			dependencies: [_.tz, _.Yy],
			styles: ["[_nghost-%COMP%]{display:block}.ms-tab-header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-bottom:16px}.inline-button[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;background:none;border:none;cursor:pointer;color:var(--color-v3-text-disable);padding:0}.inline-button.active[_ngcontent-%COMP%]{color:var(--color-v3-text)}.inline-button[_ngcontent-%COMP%]:hover{color:var(--color-v3-text)}.inline-button-divider[_ngcontent-%COMP%]{color:var(--color-v3-text-disable)}"]
		});
		var $yd = ["textarea"], azd = function(a) {
			var b = a.v1();
			if (b) {
				b = b.nativeElement;
				var c, d = (c = a.placeholder()) != null ? c : "";
				if (b.value.length === 0 && d.length > 0) b.value = d;
				else {
					c = b.selectionStart;
					d = b.selectionEnd;
					var e = b.value, f = e.substring(c, d).split("\n");
					f = f.length === 1 ? "  " : f.map((g) => `  ${g}`).join("\n");
					b.value = e.substring(0, c) + f + e.substring(d);
					b.selectionStart = c + 2;
					b.selectionEnd = c + f.length;
				}
				a.aC();
			}
		}, bzd = function(a) {
			var b = a.v1();
			if (b) {
				var c = b.nativeElement;
				b = c.selectionStart !== c.selectionEnd;
				var d = c.selectionStart, e = c.value.lastIndexOf("\n");
				if (!b && d >= e) {
					let f = a.Ga.nativeElement;
					setTimeout(() => {
						c.scrollBy(0, -c.scrollTop);
						f.scrollBy(0, f.scrollHeight);
					}, 1);
				}
			}
		}, v4 = class {
			constructor() {
				this.v1 = _.Ni("textarea");
				this.Ga = _.m(_.Jf);
				this.text = _.V();
				this.placeholder = _.V();
				this.ariaLabel = _.V();
				this.Ibb = _.Ki();
				this.wZ = _.M("");
				this.lineNumbers = _.W(() => this.wZ().split("\n").map((a, b) => b + 1));
				this.zMb = _.W(() => this.placeholder() ? `Press Tab to use an example:\n ${this.placeholder()}` : "");
				this.mM = _.M(!0);
				_.Fk([this.text], () => {
					var a = this.text();
					this.wZ.set(a || "");
				});
			}
			getText() {
				return this.wZ();
			}
			wh() {
				this.mM.set(!1);
			}
			sk(a) {
				switch (a.key) {
					case "Enter":
						this.mM() || (a.preventDefault(), this.mM.set(!0));
						break;
					case "Escape":
						this.mM() && (a.preventDefault(), a.stopPropagation(), this.mM.set(!1));
						break;
					case "Tab": this.mM() && (a.preventDefault(), azd(this));
				}
			}
			aC() {
				var a, b;
				this.wZ.set((b = (a = this.v1()) == null ? void 0 : a.nativeElement.value) != null ? b : "");
				this.Ibb.emit(this.wZ());
				bzd(this);
			}
			ym() {
				bzd(this);
			}
		};
		v4.J = function(a) {
			return new (a || v4)();
		};
		v4.ka = _.u({
			type: v4,
			da: [["ms-text-editor"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.v1, $yd, 5);
				a & 2 && _.ki();
			},
			inputs: {
				text: [1, "text"],
				placeholder: [1, "placeholder"],
				ariaLabel: [1, "ariaLabel"]
			},
			outputs: { Ibb: "textChange" },
			ha: 2,
			ia: 4,
			la: [["textarea", ""], [
				"cdkFocusInitial",
				"",
				"cdkTextareaAutosize",
				"",
				"cdkAutosizeMinRows",
				"12",
				"cdkAutosizeMaxRows",
				"10000",
				"autocomplete",
				"off",
				"spellcheck",
				"false",
				3,
				"input",
				"blur",
				"click",
				"keydown",
				"selectionchange",
				"ngModel",
				"readonly",
				"placeholder"
			]],
			template: function(a, b) {
				a & 1 && (_.F(0, "textarea", 1, 0), _.J("input", function() {
					return b.aC();
				})("blur", function() {
					return b.wh();
				})("click", function() {
					b.mM.set(!0);
				})("keydown", function(c) {
					return b.sk(c);
				})("selectionchange", function() {
					return b.ym();
				}), _.H(), _.yg());
				if (a & 2) {
					_.E("ngModel", b.wZ())("readonly", !b.mM())("placeholder", b.zMb());
					let c;
					_.wh("aria-label", (c = b.ariaLabel()) != null ? c : "");
					_.zg();
				}
			},
			dependencies: [
				_.tz,
				_.JD,
				_.Wn,
				_.oD,
				_.vD,
				_.eF,
				_.dF
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:100%;min-width:100%;width:100%;overflow:auto;border:1px solid var(--color-v3-outline);border-radius:12px}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{color:var(--color-theme-extreme-inverse);font-family:Google Sans Mono,Courier New,Courier,monospace;white-space:pre;outline:none;resize:none;width:100%;padding:20px 16px;overflow-y:hidden}\n/*# sourceMappingURL=text_editor.css.map */"]
		});
		var czd, dzd = new _.Hn(), mzd, nzd;
		czd = _.Uc(dzd, 1, "getWeather");
		var ezd;
		ezd = _.Uc(czd, 2, "gets the weather for a requested city");
		var fzd, gzd, hzd = new _.xn();
		gzd = _.cn(hzd, 1, 6);
		var izd = Map, jzd, kzd = new _.xn();
		jzd = _.cn(kzd, 1, 1);
		var lzd = new izd([["city", _.oc(jzd)]]);
		fzd = _.QPa(gzd, 7, lzd, _.xn);
		mzd = _.rp(bwd(ezd, _.oc(fzd)));
		nzd = function(a) {
			try {
				a.text.set(a.functionDeclarations().length === 0 ? "" : _.$vd(a.functionDeclarations()) + "\n");
			} catch (b) {
				return a.handleError(b), !1;
			}
			return !0;
		};
		_.w4 = class {
			constructor() {
				this.S = _.Dk;
				this.Pwb = "/gemini-api/docs/function-calling";
				this.aLa = _.Ni(v4);
				this.data = _.m(_.qC);
				this.Wa = _.m(_.kC);
				this.Ga = _.m(_.Jf);
				this.window = _.m(_.Sn);
				var a;
				this.vC = _.M(Number((a = this.window.localStorage.getItem("makersuite-function-declarations-editor-preference")) != null ? a : "1"));
				this.functionDeclarations = _.M(this.data.Cka.map((b) => b.clone()));
				this.text = _.M("");
				this.error = _.M("");
				this.AMb = _.$vd([mzd]) + "\n";
				_.Fk([this.functionDeclarations], () => {
					this.error.set("");
				});
				nzd(this);
			}
			onClose() {
				this.Wa.close(void 0);
			}
			vv() {
				this.functionDeclarations.set([]);
				this.text.set("");
			}
			xm() {
				this.update() && this.Wa.close(this.functionDeclarations());
			}
			RKa(a) {
				this.update();
				this.vC.set(a);
				this.window.localStorage.setItem("makersuite-function-declarations-editor-preference", a.toString());
			}
			update() {
				if (this.vC() === 0) a: {
					try {
						let e;
						var a = this.functionDeclarations;
						var b = a.set;
						if ((((e = this.aLa()) == null ? void 0 : e.getText()) || "") === "") var c = [];
						else {
							var d = this.aLa().getText();
							let f;
							try {
								f = JSON.parse(d);
							} catch (g) {
								throw new m4(`Invalid JSON: ${g}`);
							}
							if (!Array.isArray(f)) throw new m4("Must have a top-level Array");
							c = f.map(cwd);
						}
						b.call(a, c);
					} catch (e) {
						this.handleError(e);
						a = !1;
						break a;
					}
					a = !0;
				}
				else a = nzd(this);
				return a;
			}
			handleError(a) {
				a instanceof m4 ? this.error.set(a.message) : this.error.set("Internal Error");
			}
			DW() {
				this.functionDeclarations.set([...this.functionDeclarations(), new _.Hn()]);
				setTimeout(() => {
					var a = this.Ga.nativeElement.querySelector(".scroll");
					a && a.scrollTo({
						top: a.scrollHeight - a.clientHeight,
						behavior: "smooth"
					});
				}, 1);
			}
			removeEntry(a) {
				this.functionDeclarations.set([...this.functionDeclarations().slice(0, a), ...this.functionDeclarations().slice(a + 1)]);
			}
			KC(a, b) {
				b !== "" && (bwd(a, _.tvd(b, !0)), this.functionDeclarations.set([...this.functionDeclarations()]));
			}
		};
		_.w4.J = function(a) {
			return new (a || _.w4)();
		};
		_.w4.ka = _.u({
			type: _.w4,
			da: [["ms-edit-function-declarations-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.aLa, v4, 5);
				a & 2 && _.ki();
			},
			ha: 25,
			ia: 7,
			la: [
				["visualEditor", ""],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matDialogClose",
					"",
					"aria-label",
					"close",
					1,
					"close-button",
					3,
					"click",
					"iconName"
				],
				[1, "code-dialog-help"],
				[3, "documentation-path"],
				[
					"fitInkBarToContent",
					"",
					3,
					"selectedIndexChange",
					"selectedIndex"
				],
				["label", "Code Editor"],
				[
					3,
					"textChange",
					"placeholder",
					"text"
				],
				["label", "Visual Editor"],
				[1, "scroll"],
				[3, "ngTemplateOutlet"],
				[
					1,
					"error",
					"v3-font-body"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Reset the function declarations",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Save the current function declarations",
					"cdkFocusInitial",
					"",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Add function declaration",
					3,
					"click"
				],
				[1, "entry"],
				[
					"matTooltip",
					"Name of the function",
					1,
					"entry-name"
				],
				[3, "for"],
				[
					"ms-input",
					"",
					"aria-label",
					"Function name",
					3,
					"ngModelChange",
					"id",
					"ngModel"
				],
				[1, "wrap-on-small"],
				[
					"matTooltip",
					"Description of the function",
					1,
					"entry-description"
				],
				[
					"ms-input",
					"",
					"aria-label",
					"Function description",
					3,
					"ngModelChange",
					"id",
					"ngModel"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Delete function declaration",
					"matTooltip",
					"Delete function declaration",
					3,
					"click",
					"iconName"
				],
				[1, "parameters"],
				"ms-button;;variant;borderless;aria-label;Add parameters".split(";"),
				[
					3,
					"textOutput",
					"textInput"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Remove parameters",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Add parameters",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div")(1, "h2", 1), _.R(2, " Function declarations "), _.F(3, "button", 2), _.J("click", function() {
					return b.onClose();
				}), _.H()(), _.F(4, "mat-dialog-content")(5, "div", 3), _.R(6, " Enter a list of function declarations for the model to call upon. See the "), _.F(7, "a", 4), _.R(8, "API documentation"), _.H(), _.R(9, " for examples. "), _.H(), _.F(10, "ms-tab-group", 5), _.J("selectedIndexChange", function(c) {
					return b.RKa(c);
				}), _.F(11, "ms-tab", 6)(12, "ms-text-editor", 7), _.J("textChange", function(c) {
					b.text.set(c);
					b.error.set("");
				}), _.H()(), _.F(13, "ms-tab", 8)(14, "div", 9), _.Ih(15, 10), _.H()()(), _.F(16, "div", 11), _.R(17), _.H()(), _.F(18, "mat-dialog-actions", 12)(19, "button", 13), _.J("click", function() {
					return b.vv();
				}), _.R(20, " Reset "), _.H(), _.F(21, "button", 14), _.J("click", function() {
					return b.xm();
				}), _.R(22, " Save "), _.H()()(), _.z(23, lwd, 4, 0, "ng-template", null, 0, _.Ii));
				a & 2 && (a = _.O(24), _.y(3), _.E("iconName", b.S.ac), _.y(4), _.E("documentation-path", b.Pwb), _.y(3), _.E("selectedIndex", b.vC()), _.y(2), _.E("placeholder", b.AMb)("text", b.text()), _.y(3), _.E("ngTemplateOutlet", a), _.y(2), _.U(b.error()));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				_.LC,
				_.JD,
				_.Wn,
				_.oD,
				_.vD,
				_.gE,
				s4,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.IC,
				_.HC,
				t4,
				u4,
				v4
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}mat-dialog-content[_ngcontent-%COMP%]{min-width:50vw}.code-dialog-help[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;margin-bottom:16px}.scroll[_ngcontent-%COMP%]{min-width:100%;width:100%;overflow:auto}.scroll[_ngcontent-%COMP%], ms-text-editor[_ngcontent-%COMP%]{background:var(--color-v3-surface-container);display:block;height:45vh}.entry[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px;margin-bottom:8px;row-gap:4px}.entry[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px}.entry[_ngcontent-%COMP%]   .entry-description[_ngcontent-%COMP%], .entry[_ngcontent-%COMP%]   .entry-name[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.entry[_ngcontent-%COMP%]   .entry-description[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .entry[_ngcontent-%COMP%]   .entry-name[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.entry[_ngcontent-%COMP%]   .wrap-on-small[_ngcontent-%COMP%]{display:none}@media screen and (max-width:600px){.entry[_ngcontent-%COMP%]   .wrap-on-small[_ngcontent-%COMP%]{display:block;width:100%}}.parameters[_ngcontent-%COMP%]{padding-left:20px}.parameters[_ngcontent-%COMP%]   ms-json-schema-editor[_ngcontent-%COMP%]{display:block}.error[_ngcontent-%COMP%]{display:none;color:var(--color-v3-accent-3)}.error[_ngcontent-%COMP%]:not(:empty){display:block}\n/*# sourceMappingURL=edit_function_declarations_dialog.css.map */"]
		});
		var ozd;
		ozd = function(a) {
			var b = a.Q3a();
			b && a.text.set(Yyd(b));
		};
		_.x4 = class {
			constructor() {
				this.data = _.m(_.qC);
				this.S = _.Dk;
				this.window = _.m(_.Sn);
				this.Wa = _.m(_.kC);
				this.Q3a = _.Ni(s4);
				this.dJ = _.M();
				this.Snb = "https://spec.openapis.org/oas/v3.0.3#schema";
				this.Vlb = "/gemini-api/docs/structured-output";
				this.lob = "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"response\": {\n      \"type\": \"string\"\n    }\n  }\n}\n";
				var a;
				this.vC = _.M(Number((a = this.window.localStorage.getItem("makersuite-json-schema-editor-preference")) != null ? a : "1"));
				this.QIb = _.W(() => {
					if (this.text().length === 0) return !0;
					try {
						let b = JSON.parse(this.text());
						if (!_.Bo(b) || b.type !== "object") return !1;
					} catch (b) {
						return !1;
					}
					return !0;
				});
				a = this.data.HBa ? _.dvd(this.data.HBa) : "";
				this.text = _.M(a);
			}
			onClose() {
				this.Wa.close(void 0);
			}
			vv() {
				this.text.set("");
				this.dJ.set(void 0);
			}
			xm() {
				ozd(this);
				var a = this.text();
				if (a.trim().length === 0) this.Wa.close(null);
				else try {
					let b = _.tvd(a, !1);
					this.Wa.close(b);
				} catch (b) {
					b instanceof g4 ? this.dJ.set(b.message) : this.dJ.set("Internal error");
				}
			}
			pGa(a) {
				this.text.set(a);
				this.dJ.set(void 0);
				if (a.trim() !== "") try {
					_.tvd(a, !0);
				} catch (b) {
					b instanceof g4 ? this.dJ.set(b.message) : this.dJ.set("Internal error");
				}
			}
			RKa(a) {
				this.vC.set(a);
				this.window.localStorage.setItem("makersuite-json-schema-editor-preference", a.toString());
				ozd(this);
			}
		};
		_.x4.J = function(a) {
			return new (a || _.x4)();
		};
		_.x4.ka = _.u({
			type: _.x4,
			da: [["ms-edit-schema-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Q3a, s4, 5);
				a & 2 && _.ki();
			},
			ha: 25,
			ia: 10,
			la: [
				[1, "edit-schema-dialog"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matDialogClose",
					"",
					"aria-label",
					"close",
					1,
					"close-button",
					3,
					"click",
					"iconName"
				],
				[1, "code-dialog-content"],
				[1, "code-dialog-help"],
				["target", "_blank"],
				[3, "documentation-path"],
				[
					3,
					"selectedIndexChange",
					"selectedIndex"
				],
				["label", "Code Editor"],
				[
					"ariaLabel",
					"Enter a JSON schema",
					3,
					"textChange",
					"placeholder",
					"text"
				],
				[
					"label",
					"Visual Editor",
					3,
					"disabled"
				],
				[
					3,
					"errorOutput",
					"textInput"
				],
				[1, "error"],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Reset the schema",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Save the current schema",
					"cdkFocusInitial",
					"",
					3,
					"click",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, " Structured outputs "), _.F(3, "button", 2), _.J("click", function() {
					return b.onClose();
				}), _.H()(), _.F(4, "mat-dialog-content", 3)(5, "div", 4), _.R(6, " Enter an "), _.F(7, "a", 5), _.R(8, "OpenAPI schema object"), _.H(), _.R(9, " to constrain the model output. See the "), _.F(10, "a", 6), _.R(11, "API documentation"), _.H(), _.R(12, " for examples. "), _.H(), _.F(13, "ms-tab-group", 7), _.J("selectedIndexChange", function(c) {
					return b.RKa(c);
				}), _.F(14, "ms-tab", 8)(15, "ms-text-editor", 9), _.J("textChange", function(c) {
					return b.pGa(c);
				}), _.H()(), _.F(16, "ms-tab", 10)(17, "ms-json-schema-editor", 11), _.J("errorOutput", function(c) {
					b.dJ.set(c);
				}), _.H()()(), _.F(18, "div", 12), _.R(19), _.H()(), _.F(20, "mat-dialog-actions", 13)(21, "button", 14), _.J("click", function() {
					return b.vv();
				}), _.R(22, " Reset "), _.H(), _.F(23, "button", 15), _.J("click", function() {
					return b.xm();
				}), _.R(24, " Save "), _.H()()());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac), _.y(4), _.wh("href", b.Snb, _.rg), _.y(3), _.E("documentation-path", b.Vlb), _.y(3), _.E("selectedIndex", b.vC()), _.y(2), _.E("placeholder", b.lob)("text", b.text()), _.y(), _.E("disabled", !b.QIb()), _.y(), _.E("textInput", b.text()), _.y(2), _.U(b.dJ()), _.y(4), _.E("disabled", b.dJ()));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.LC,
				s4,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.fF,
				t4,
				u4,
				v4
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.code-dialog-content[_ngcontent-%COMP%]{padding:0;border-radius:20px;overflow:hidden}.code-dialog-help[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:16px}ms-json-schema-editor[_ngcontent-%COMP%], ms-text-editor[_ngcontent-%COMP%]{display:block;height:45vh;overflow:auto}.error[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;margin-top:8px;display:none;color:var(--color-v3-accent-3)}.error[_ngcontent-%COMP%]:not(:empty){display:block}\n/*# sourceMappingURL=edit_schema_dialog.css.map */"]
		});
		_.pzd = {
			a4b: 0,
			OO: 1,
			jG: 2,
			tPa: 3,
			Kea: 5,
			Lra: 6,
			IMAGE_SEARCH: 7,
			ksa: 8
		};
		_.qzd = new _.$y("45689743", !1);
		var rzd = class {
			constructor() {
				this.Lj = _.V(!1);
				this.Fo = _.V(!1);
				this.Ih = _.V(!1);
				this.S = _.Dk;
			}
		};
		rzd.J = function(a) {
			return new (a || rzd)();
		};
		rzd.ka = _.u({
			type: rzd,
			da: [["ms-drive-save-indicator"]],
			eb: [1, "drive-save-indicator"],
			inputs: {
				Lj: [1, "isSaving"],
				Fo: [1, "isSaved"],
				Ih: [1, "hasUnsavedChanges"]
			},
			ha: 2,
			ia: 2,
			la: [[
				"aria-hidden",
				"true",
				1,
				"indicator",
				"rotate",
				3,
				"iconName"
			], [
				"aria-hidden",
				"true",
				1,
				"indicator",
				3,
				"iconName"
			]],
			template: function(a, b) {
				a & 1 && (_.B(0, qwd, 1, 1, "span", 0), _.B(1, rwd, 1, 1, "span", 1));
				a & 2 && (_.C(b.Lj() ? 0 : -1), _.y(), _.C(b.Lj() || !b.Fo() || b.Ih() ? -1 : 1));
			},
			dependencies: [_.dz],
			styles: [".indicator[_ngcontent-%COMP%]{height:12px;width:12px;border-radius:50%;padding:2px;background-color:var(--color-v3-surface-container-highest);color:var(--color-v3-text);font-size:8px}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.indicator.rotate[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_rotate 1s linear infinite;animation:_ngcontent-%COMP%_rotate 1s linear infinite}"]
		});
		var szd = class {
			constructor() {
				this.Wa = _.m(_.kC);
				this.data = _.m(_.qC);
				_.Fk([this.data.s3a], () => {
					this.data.JCa || this.data.s3a() && setTimeout(() => {
						this.Wa.close(!0);
					}, 1e3);
				});
			}
		};
		szd.J = function(a) {
			return new (a || szd)();
		};
		szd.ka = _.u({
			type: szd,
			da: [["ms-confirm-clear-dialog"]],
			ha: 8,
			ia: 2,
			la: [
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					3,
					"mat-dialog-close"
				],
				["diameter", "16"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"mat-dialog-close"
				],
				[
					"ms-button",
					"",
					"cdkFocusRegionEnd",
					"",
					"cdkFocusInitial",
					"",
					3,
					"mat-dialog-close"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "p", 0), _.R(1, " Create a new chat "), _.H(), _.F(2, "mat-dialog-content"), _.B(3, swd, 1, 0)(4, twd, 2, 0), _.H(), _.F(5, "mat-dialog-actions", 1), _.B(6, uwd, 4, 2)(7, vwd, 2, 1, "button", 2), _.H());
				a & 2 && (_.y(3), _.C(b.data.JCa ? 3 : 4), _.y(3), _.C(b.data.JCa ? 6 : 7));
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.zC,
				_.yC
			],
			styles: ["mat-spinner[_ngcontent-%COMP%]{display:inline-block;translate:0 3px}"]
		});
		var tzd = class {
			constructor() {
				this.S = _.Dk;
				this.mKa = _.V(!0);
			}
		};
		tzd.J = function(a) {
			return new (a || tzd)();
		};
		tzd.ka = _.u({
			type: tzd,
			da: [["ms-incognito-mode-indicator"]],
			inputs: { mKa: [1, "showTextLabel"] },
			ha: 4,
			ia: 2,
			la: [
				[
					1,
					"incognito-icon",
					3,
					"iconName"
				],
				[
					"data-test-id",
					"main-text",
					1,
					"main-text"
				],
				[
					"data-test-id",
					"subtitle",
					1,
					"subtitle"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, wwd, 1, 1, "span", 0), _.F(1, "span", 1), _.R(2, "Temporary chat"), _.H(), _.B(3, xwd, 2, 0, "span", 2));
				a & 2 && (_.C(b.mKa() ? 0 : -1), _.y(3), _.C(b.mKa() ? 3 : -1));
			},
			dependencies: [_.dz],
			styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:4px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}[_nghost-%COMP%]   .main-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-on-surface-variant)}[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]:before{content:\"•\";margin-inline:4px}"]
		});
		var uzd = class {
			constructor() {
				this.A = _.m(_.J0);
				this.vIb = this.A.Sa;
				this.Z7a = this.A.error;
				this.quota = this.A.quota;
				this.pNb = _.W(() => this.Z7a() ? "There was an error loading quota info for this model" : "The number of free generations that are remaining for this model. To continue generating past the free limit, please use the Gemini API.");
			}
		};
		uzd.J = function(a) {
			return new (a || uzd)();
		};
		uzd.ka = _.u({
			type: uzd,
			da: [["ms-quota-count"]],
			ha: 3,
			ia: 2,
			la: [[
				"matTooltipPosition",
				"below",
				1,
				"content",
				3,
				"matTooltip"
			], [1, "remaining-quota"]],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, ywd, 1, 0)(2, Awd, 2, 2), _.H());
				a & 2 && (_.E("matTooltip", b.pNb()), _.y(), _.C(b.vIb() ? 1 : 2));
			},
			dependencies: [_.IC, _.HC],
			styles: [".content[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;color:var(--color-v3-text-var)}.remaining-quota[_ngcontent-%COMP%]{color:var(--color-v3-text)}.remaining-quota.low-quota[_ngcontent-%COMP%]{color:var(--color-v3-accent-3)}"]
		});
		var vzd = [[[
			"",
			"leftContent",
			""
		]], [[
			"",
			"rightContent",
			""
		]]], wzd = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Ou);
				this.Qc = _.m(_.BM);
				this.title = _.V();
				this.QKb = "nav-button";
				this.isNavbarExpanded = this.Qc.isNavbarExpanded;
			}
			iu() {
				_.Rn(this.A, "NAV", "Toggled Nav");
				this.Qc.iu();
			}
		};
		wzd.J = function(a) {
			return new (a || wzd)();
		};
		wzd.ka = _.u({
			type: wzd,
			da: [["ms-header"]],
			inputs: { title: [1, "title"] },
			fc: ["[leftContent]", "[rightContent]"],
			ha: 6,
			ia: 3,
			la: [
				[1, "toolbar-left"],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"matTooltip",
					"Toggle navigation menu",
					"aria-label",
					"Toggle navigation menu",
					3,
					"click",
					"xapTourElementId",
					"iconName"
				],
				[1, "title"],
				[1, "toolbar-right"]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(vzd), _.F(0, "div", 0)(1, "button", 1), _.J("click", function() {
					return b.iu();
				}), _.H(), _.B(2, Bwd, 2, 1, "h1", 2), _.Yh(3), _.H(), _.F(4, "div", 3), _.Yh(5, 1), _.H());
				a & 2 && (_.y(), _.E("xapTourElementId", b.QKb)("iconName", b.isNavbarExpanded() ? b.S.Ssa : b.S.L2), _.y(), _.C(b.title() ? 2 : -1));
			},
			dependencies: [
				_.Yy,
				_.IC,
				_.HC,
				_.P3
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}[_nghost-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:var(--color-v3-overlay-background);display:grid;gap:4px;grid-template-columns:auto 1fr auto;padding:16px 20px 8px 20px;position:relative;width:100%;z-index:2}[_nghost-%COMP%]:after{background:-webkit-gradient(linear,left top,left bottom,from(var(--color-v3-surface)),to(transparent));background:-webkit-linear-gradient(top,var(--color-v3-surface) 0,transparent 100%);background:linear-gradient(to bottom,var(--color-v3-surface) 0,transparent 100%);bottom:0;content:\"\";height:32px;left:0;pointer-events:none;position:absolute;right:0;-webkit-transform:translateY(100%);transform:translateY(100%)}@media screen and (max-width:600px){[_nghost-%COMP%]{margin-inline:0}}@media screen and (max-width:480px){[_nghost-%COMP%]{padding:16px 8px 8px 8px}}.title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-inline:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.title-enter[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fadeIn 225ms cubic-bezier(0,0,.2,1) forwards;animation:_ngcontent-%COMP%_fadeIn 225ms cubic-bezier(0,0,.2,1) forwards}.toolbar-left[_ngcontent-%COMP%], .toolbar-right[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.toolbar-left[_ngcontent-%COMP%]{min-width:0}.toolbar-right[_ngcontent-%COMP%]{grid-column:3}@-webkit-keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]
		});
		var Hwd;
		Hwd = (a, b) => b.modality;
		_.y4 = class {
			constructor() {
				this.R = _.m(_.gH);
				this.na = _.m(_.BF);
				this.ma = _.m(_.fK);
				this.X = _.m(_.NK);
				this.oa = _.m(_.FJ);
				this.F = _.m(_.FH);
				this.ta = _.m(_.OC);
				this.veLoggingService = _.m(_.Ry);
				this.fa = this.ea = 0;
				this.aa = void 0;
				this.XBa = _.W(() => !!this.ta.bb());
				this.index = _.Li.required();
				this.wc = _.W(() => this.R.Ob()[this.index()]);
				this.Wg = _.W(() => {
					var a;
					return (a = this.wc()) == null ? void 0 : a.Wg();
				});
				this.za = _.W(() => {
					var a, b, c = (b = (a = this.wc()) == null ? void 0 : a.dQ()) != null ? b : [];
					for (a = c.length - 1; a >= 0; a--) {
						let d;
						if (((d = c[a]) == null ? void 0 : d.role) === "model") return c[a].id;
					}
				});
				this.I = _.W(() => {
					var a, b;
					return (b = (a = this.wc()) == null ? void 0 : a.sqa()) != null ? b : 0;
				});
				this.tokenCount = _.W(() => {
					var a = this.A();
					var b = this.uc();
					if (b && _.Om(b)) {
						a: {
							for (b = a.length - 1; b >= 0; b--) {
								let c = a[b];
								if (c.role === "model" && c.Dp !== void 0) {
									a = c;
									break a;
								}
							}
							a = void 0;
						}
						a = a ? this.uZ() + this.xT() + this.fLa() + this.GLa() : this.I();
					} else a = this.I();
					b = this.F.totalTokenCount();
					return a + b;
				});
				this.A = _.W(() => {
					var a, b;
					return (b = (a = this.wc()) == null ? void 0 : a.dQ()) != null ? b : [];
				});
				this.qHa = "https://ai.google.dev/gemini-api/docs/pricing";
				this.xT = _.W(() => {
					var a = this.A(), b = 0, c = 0;
					for (let d = 0; d < a.length; d++) {
						let e = a[d];
						if (e.role === "model") {
							let f;
							c += (f = e.tokenCount) != null ? f : 0;
							if (d === a.length - 1 || a[d + 1].role !== "model") {
								let g;
								((g = e.Dp) == null ? void 0 : _.yj(g, 5)) !== void 0 ? (c = _.yj(e.Dp, 5), b += c) : b += c;
								c = 0;
							}
						}
					}
					return b;
				});
				this.fLa = _.W(() => {
					var a = this.A(), b = 0;
					for (let c = 0; c < a.length; c++) {
						let d = a[c];
						if (d.role === "model") {
							let e;
							c !== a.length - 1 && a[c + 1].role === "model" || ((e = d.Dp) == null ? void 0 : _.yj(e, 9)) === void 0 || (b += _.yj(d.Dp, 9));
						}
					}
					return b;
				});
				this.GLa = _.W(() => {
					var a = this.A(), b = 0;
					for (let c = 0; c < a.length; c++) {
						let d = a[c];
						if (d.role === "model") {
							let e;
							c !== a.length - 1 && a[c + 1].role === "model" || ((e = d.Dp) == null ? void 0 : _.yj(e, 7)) === void 0 || (b += _.yj(d.Dp, 7));
						}
					}
					return b;
				});
				this.CGb = _.W(() => {
					var a = this.A(), b = new Map();
					for (let d = 0; d < a.length; d++) {
						var c = a[d];
						let e;
						if (c.role === "model" && ((e = c.Dp) == null ? 0 : _.mj(e, Jyd, 2, _.oj())) && (d === a.length - 1 || a[d + 1].role !== "model")) for (let f of _.mj(c.Dp, Jyd, 2, _.oj())) {
							c = Swd(_.Lm(f, 1));
							let g;
							b.set(c, ((g = b.get(c)) != null ? g : 0) + _.yj(f, 2));
						}
					}
					return Array.from(b.entries(), ([d, e]) => ({
						modality: d,
						tokens: e
					}));
				});
				this.QLb = _.W(() => {
					var a = this.A(), b = new Map();
					for (let c of a) {
						let d;
						if (c.role === "model" && ((d = c.Dp) == null ? 0 : _.mj(d, Jyd, 6, _.oj()))) for (let e of _.mj(c.Dp, Jyd, 6, _.oj())) {
							a = Swd(_.Lm(e, 1));
							let f, g = (f = b.get(a)) != null ? f : 0;
							b.set(a, g + _.yj(e, 2));
						}
					}
					return Array.from(b.entries(), ([c, d]) => ({
						modality: c,
						tokens: d
					}));
				});
				this.uZ = _.W(() => {
					var a = this.A(), b = this.uc();
					if (b && _.Om(b)) {
						b = 0;
						for (let c = 0; c < a.length; c++) {
							let d = a[c];
							if (d.role === "model" && d.Dp !== void 0 && (c === a.length - 1 || a[c + 1].role !== "model")) {
								let e;
								b += (e = _.yj(d.Dp, 1)) != null ? e : 0;
							}
						}
						return b;
					}
					return this.I() - this.xT();
				});
				this.Wz = _.W(() => {
					var a = this.A(), b = this.uc();
					a = b && _.Om(b) ? !0 : uvd(a.filter((d) => d.ob !== "tool_activity"));
					b = this.F.A();
					b = Object.values(b != null ? b : {}).every((d) => {
						d = d == null ? void 0 : d.Cb;
						return d === 1 || d === 2;
					});
					var c = !this.F.Na();
					return a && b && c;
				});
				this.DTb = _.W(() => `${this.tokenCount()}`);
				this.Xp = _.W(() => {
					var a, b;
					return (b = (a = this.wc()) == null ? void 0 : a.Xp()) != null ? b : !1;
				});
				this.B0a = this.F.Fa;
				this.ETb = _.W(() => {
					var a = this.tokenCount();
					return this.Wz() ? `${a} / ${this.H()}` : `... / ${this.H()}`;
				});
				this.La = _.W(() => this.R.F()[this.index()]);
				this.H = _.W(() => {
					var a = this.La().model();
					return this.na.RL(a != null ? a : "");
				});
				_.W(() => wvd(["audio"], this.A()));
				_.W(() => wvd(["image"], this.A()));
				_.W(() => wvd(["audio", "video"], this.A()));
				this.Un = _.W(() => this.La().model());
				this.uc = _.W(() => this.La().baseModel());
				this.taa = _.W(() => {
					var a = this.uc();
					return a ? _.TXb(a) : void 0;
				});
				this.Fna = _.W(() => {
					var a = this.uc();
					return a ? _.UXb(a) : void 0;
				});
				this.OBa = _.W(() => {
					var a = this.uc();
					if (a && _.TXb(a)) return 0;
					var b = this.uZ();
					if (!a) return 0;
					var c = _.eYb(a);
					if (!c || c.length === 0) return 0;
					var d = this.A().filter((k) => k.role !== "model"), e = d.some((k) => k.ob === "audio"), f = d.some((k) => k.ob === "video"), g = -1;
					g = [];
					d.some((k) => k.ob === "image") && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("Image")));
					g.length === 0 && e && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("Audio")));
					g.length === 0 && f && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("Video")));
					g.length === 0 && (g = c.filter((k) => !_.l(k, 5).toLowerCase().includes("Video") && !_.l(k, 5).toLowerCase().includes("Audio") && !_.l(k, 5).toLowerCase().includes("Image")));
					g.length === 0 && (g = [...c]);
					(d = g.find((k) => b <= _.yj(k, 1))) || (d = g[g.length - 1]);
					g = c.indexOf(d);
					return (a = _.$Xb(a, g)) ? a * b / 1e6 : 0;
				});
				this.TGa = _.W(() => {
					var a = this.uc();
					if (a && _.TXb(a)) return 0;
					var b = this.xT();
					if (!a) return 0;
					var c = _.eYb(a);
					if (!c || c.length === 0) return 0;
					var d = this.A().filter((k) => k.role === "model"), e = d.some((k) => k.ob === "audio"), f = d.some((k) => k.ob === "video"), g = -1;
					g = [];
					d.some((k) => k.ob === "image") && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("image")));
					g.length === 0 && e && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("audio")));
					g.length === 0 && f && (g = c.filter((k) => _.l(k, 5).toLowerCase().includes("video")));
					g.length === 0 && (g = c.filter((k) => !_.l(k, 5).toLowerCase().includes("audio") && !_.l(k, 5).toLowerCase().includes("video") && !_.l(k, 5).toLowerCase().includes("image")));
					g.length === 0 && (g = [...c]);
					(d = g.find((k) => b <= _.yj(k, 1))) || (d = g[g.length - 1]);
					g = c.indexOf(d);
					return (a = _.aYb(a, g)) ? a * b / 1e6 : 0;
				});
				this.CTb = _.W(() => {
					var a = this.OBa(), b = this.TGa();
					a += b;
					return a === 0 ? "0.00" : `${Number(a.toFixed(9))}`;
				});
				this.U = this.oa.A;
				_.Fk([this.U], () => {
					this.U() && this.Wz() && this.X.service.F.Wz.set(!1);
				});
				_.Fk([
					this.tokenCount,
					this.H,
					this.Wz
				], () => {
					var a = this.tokenCount(), b = this.H(), c = this.Wz();
					b <= 0 || a === void 0 || !c || (a = a > b, this.X.service.F.Xp.set(a), this.ma.Xp({
						GCb: a,
						index: this.index()
					}));
				});
				_.Fk([
					this.Wg,
					this.xT,
					this.uZ,
					this.Wz
				], () => {
					var a = this.uZ() - this.ea, b = this.xT() - this.fa;
					if (this.Wg() === "end" && this.Wz() && !(a <= 0 || b <= 0)) {
						var c = this.za();
						if (c !== this.aa) {
							this.aa = c;
							var d;
							c = (d = this.La().model()) != null ? d : "";
							d = new _.Ky();
							var e = new Myd();
							a = _.Ym(e, 1, a);
							b = _.Ym(a, 2, b);
							b = _.Lj(b, 4, c);
							b = _.ln(d, Myd, 9, b);
							_.Qy(this.veLoggingService, 312781, b);
							this.ea = this.uZ();
							this.fa = this.xT();
						}
					}
				});
			}
		};
		_.y4.J = function(a) {
			return new (a || _.y4)();
		};
		_.y4.ka = _.u({
			type: _.y4,
			da: [["ms-token-count"]],
			inputs: { index: [1, "index"] },
			ha: 4,
			ia: 1,
			la: [
				["tokenCountTooltipTemplate", ""],
				[1, "token-count-container"],
				[
					"dialogLabel",
					"Token count tooltip",
					"tabindex",
					"0",
					1,
					"v3-token-count-value",
					3,
					"xapInlineDialog",
					"error"
				],
				[
					"dialogLabel",
					"Token count tooltip",
					"tabindex",
					"0",
					1,
					"v3-token-count-value",
					3,
					"xapInlineDialog"
				],
				[1, "loading-token-count-placeholder"],
				[1, "token-count-tooltip"],
				[1, "tooltip-row"],
				[1, "token-count-tooltip-section-header"],
				[1, "tooltip-text"],
				[
					1,
					"tooltip-row",
					"modality-row"
				],
				[1, "token-count-tooltip-footer"],
				[1, "error"],
				[1, "tooltip-divider"],
				[
					"target",
					"_blank",
					"rel",
					"noopener noreferrer",
					3,
					"href"
				],
				"href;/spend;target;_blank;rel;noopener noreferrer".split(";")
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1), _.B(1, Ewd, 4, 4, "span", 2), _.H(), _.z(2, Rwd, 27, 13, "ng-template", null, 0, _.Ii));
				a & 2 && (_.y(), _.C(b.tokenCount() ? 1 : -1));
			},
			dependencies: [
				_.tz,
				_.OD,
				_.ND,
				_.IC,
				_.EC,
				_.wO
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.token-count-header[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.token-count-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.token-count-value[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.token-count-value.tokens-over-limit[_ngcontent-%COMP%]{color:var(--color-error)}.token-count-value[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_rotate 1s linear infinite;animation:_ngcontent-%COMP%_rotate 1s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.v3-token-count-value[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;border-radius:32px;cursor:help;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.v3-token-count-value[_ngcontent-%COMP%]   .loading-token-count-placeholder[_ngcontent-%COMP%]{cursor:unset;height:24px;width:30px;border-radius:30px;margin-bottom:-4px;margin-right:4px;margin-top:-4px;-webkit-animation-duration:1.7s;animation-duration:1.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:_ngcontent-%COMP%_moving-gradient;animation-name:_ngcontent-%COMP%_moving-gradient;background:-webkit-linear-gradient(160deg,var(--color-loading-background) 40%,var(--color-loading-background-contrast) 50%,var(--color-loading-background) 60%);background:linear-gradient(290deg,var(--color-loading-background) 40%,var(--color-loading-background-contrast) 50%,var(--color-loading-background) 60%);background-size:800px}@-webkit-keyframes _ngcontent-%COMP%_moving-gradient{0%{background-position:-400px 0}to{background-position:400px 0}}@keyframes _ngcontent-%COMP%_moving-gradient{0%{background-position:-400px 0}to{background-position:400px 0}}.v3-token-count-value[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--color-v3-outline)}.v3-token-count-value[_ngcontent-%COMP%]:focus:not(:focus-visible){outline:none}.error[_ngcontent-%COMP%]{color:var(--color-error)}.token-count-tooltip[_ngcontent-%COMP%]{padding:16px;width:240px}.token-count-tooltip[_ngcontent-%COMP%]   .token-count-tooltip-section-header[_ngcontent-%COMP%]{margin-bottom:20px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px}.token-count-tooltip[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.token-count-tooltip[_ngcontent-%COMP%]   .tooltip-row[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.token-count-tooltip[_ngcontent-%COMP%]   .modality-row[_ngcontent-%COMP%]{padding-left:16px;color:var(--color-v3-text-var)}.token-count-tooltip[_ngcontent-%COMP%]   .token-count-tooltip-content[_ngcontent-%COMP%]{color:var(--color-on-surface-variant);margin-bottom:20px}.token-count-tooltip[_ngcontent-%COMP%]   .tooltip-divider[_ngcontent-%COMP%]{margin-top:14px;margin-bottom:14px}.token-count-tooltip[_ngcontent-%COMP%]   .token-count-tooltip-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);margin:0}"]
		});
		var xzd, yzd, zzd, Zwd, exd, Azd, Bzd, yxd, Bxd, Mxd, Vxd, eyd, Czd, Dzd;
		xzd = ["textarea"];
		yzd = ["title"];
		zzd = [[["additional-actions"]]];
		Zwd = () => ({ IZ: !1 });
		exd = () => ({ IZ: !0 });
		Azd = {
			MO: 0,
			LO: 1,
			glb: 2,
			U2: 3,
			Ysb: 4,
			XC: 5,
			0: "CHAT",
			1: "BIDI",
			2: "IMAGEN",
			3: "SPEECH",
			4: "VIDEO_PROMPT",
			5: "MUSIC"
		};
		Bzd = new Map([
			[0, "/prompts/new_chat"],
			[1, "/live"],
			[2, "/prompts/new_image"],
			[3, "/generate-speech"],
			[4, "/prompts/new_video"]
		]);
		yxd = function(a) {
			return _.x(function* () {
				var b = a.Ym();
				a.aa() ? a.Ia.autosaveEnabled.set(b) : b ? (yield _.pf(_.jC(a.dialog.open(_.kF, { data: a.Na })))) && (yield _.pF(a.I)) && a.Ia.autosaveEnabled.set(!0) : a.Ia.autosaveEnabled.set(!1);
			});
		};
		Bxd = function(a, b = !0) {
			return _.x(function* () {
				_.Rn(a.Gsa, "HEADER", "Clicked Save Prompt Button");
				if (a.aa() || (yield _.pF(a.I))) if (b) {
					let c = eyd(a);
					a.Ym() && _.jC(c).subscribe((d) => {
						(d == null ? 0 : d.save) && a.Ia.autosaveEnabled.set(!0);
					});
				} else yield _.uod(a.Ea);
			});
		};
		Mxd = function(a) {
			return _.x(function* () {
				if (a.lm().Lv) {
					var b = a.Ym(), c = a.ma();
					!b && a.Ih() && Bxd(a, !1);
					if (!b && c || (yield _.pf(_.jC(a.dialog.open(szd, { data: {
						JCa: b,
						s3a: a.ma
					} }))))) {
						b = a.lm().RF;
						switch (b) {
							case 0:
								_.Kmd(a.Aa);
								c = a.oea;
								let f = c.F.Ob();
								var d;
								let g = ((d = f[0]) == null ? void 0 : d.systemInstructions()) || "";
								var e;
								d = ((e = f[1]) == null ? void 0 : e.systemInstructions()) || "";
								c.Fa = d ? [g, d] : [g];
								break;
							case 2:
								e = a.na;
								e.A = e.Xf();
								break;
							case 4:
								e = a.Fa;
								e.A = e.Xf();
								break;
							case 3: break;
							case 1: break;
							case 5: break;
							default: _.sb(b, void 0);
						}
						e = Bzd.get(b);
						b === 5 && (e = "/new_music");
						yield a.H.navigate([e]);
					}
				} else a.c6a.emit();
			});
		};
		Vxd = function(a) {
			return _.x(function* () {
				_.Rn(a.Gsa, "HEADER", "Clicked Delete Prompt Button");
				var b = a.rb.name(), c = a.rb.af();
				b && c && a.Fo() && (yield _.pf(_.jC(a.dialog.open(_.Q3, {
					data: {
						ii: b,
						af: c
					},
					id: "prompt-delete-dialog"
				})))) && _.br(a.H, "library");
			});
		};
		eyd = function(a) {
			return a.dialog.open(_.S3, {
				id: "prompt-edit-dialog",
				data: {
					FG: "HEADER",
					S8: !0
				}
			});
		};
		Czd = function(a, b) {
			a.O$a.set(b > 550);
			var c = a.Ym() ? 880 : 710;
			a.N0.set(b > c);
		};
		Dzd = function(a) {
			if (a.oa) {
				let b = _.kd(_.qA(a.H, a.H.bk(["spend"]))), c = _.H3(b), d = _.G3(b);
				_.N3(a.F, c) || _.N3(a.F, d) || setTimeout(() => {
					if (!a.isNavbarExpanded()) {
						var e = a.F, f = _.F3(b);
						e.Fi.next(f);
					}
				}, 1e3);
			}
		};
		_.z4 = class {
			constructor() {
				this.oea = _.m(_.fK);
				this.A = _.m(_.gH);
				this.Ii = _.m(_.GJ);
				this.dialog = _.m(_.rC);
				this.Llb = _.m(_.iC);
				this.H = _.m(_.Cl);
				this.I = _.m(_.rF);
				this.za = _.m(_.FH);
				this.Gsa = _.m(_.Ou);
				this.Qc = _.m(_.BM);
				this.R = _.m(_.Op);
				this.rb = _.m(_.Qp);
				this.Ea = _.m(_.R3);
				this.Ia = _.m(_.oF);
				this.Aa = _.m(_.LK);
				this.na = _.m(_.dH);
				this.Fa = _.m(_.eH);
				this.fa = _.m(_.ZC);
				this.Hg = _.m(_.hH);
				this.Jf = _.m(_.UH);
				this.el = _.m(_.Jf);
				this.U = _.m(_.x3);
				this.F = _.m(_.O3);
				this.ea = _.m(_.yG);
				this.oa = this.R.getFlag(_.iL);
				this.Aea = "nav-button";
				this.S = _.Dk;
				this.controller = _.V();
				this.ve = {
					oOa: 233240,
					aQa: 272247,
					Arb: 269027
				};
				this.lm = _.Li.required();
				this.Nab = _.V(null);
				this.XJa = _.V(!1);
				this.jCa = _.V(!1);
				this.Jxa = _.V("Copy prompt to clipboard");
				this.oXa = _.V("");
				this.Pzb = _.W(() => this.jCa() ? this.oXa() || this.Jxa() : this.Jxa());
				this.vt = _.V("");
				this.N5 = _.V("New chat");
				this.b6a = _.Ki();
				this.c6a = _.Ki();
				this.j$a = _.M(!1);
				this.DK = _.M(!0);
				this.O$a = _.M(!1);
				this.N0 = _.M(!1);
				this.ta = _.M(!1);
				this.isNavbarExpanded = this.Qc.isNavbarExpanded;
				this.tS = this.Ia.rawModeEnabled;
				this.YO = Azd;
				this.Ara = "HEADER";
				this.pFb = _.W(() => {
					var a = this.lm(), b = this.Ym(), c = !this.N0(), d = this.A$a();
					c = c && a.VU;
					var e = a.Lv;
					b = !b && (a.WU || a.XU);
					var f = !this.ev && a.YU;
					a = this.XJa() && a.Lv;
					return d || c || e || b || f || a;
				});
				this.ma = _.W(() => {
					if (!this.lm().Lv) return !0;
					var a = this.A.kk(), b = this.Ih();
					return !a && !b;
				});
				this.Na = {
					title: "Enable Drive to exit Temporary chat",
					content: "Drive permission is required to save your conversations.",
					Pba: !1,
					dba: "Enable Google Drive",
					T4: "Stay in Temporary chat",
					uV: 273923,
					vV: 273924
				};
				this.QB = _.W(() => this.rb.af() === 17);
				this.Xa = _.W(() => !this.rb.kI());
				this.Z2a = _.W(() => this.QB() || this.Xa());
				this.pGb = _.W(() => this.Z2a() ? this.QB() ? "Temporary chat is not available for Veo" : "Saved conversations can't be switched to Temporary chat" : "Temporary chat");
				this.index = 0;
				this.v1 = _.Ni("textarea");
				this.pLa = _.Ni("title");
				this.ev = this.R.getFlag(_.vE);
				this.modelName = _.W(() => {
					var a;
					return (a = this.A.F()[this.index].model()) != null ? a : "";
				});
				this.Ym = _.W(() => !this.Ia.autosaveEnabled());
				this.eqa = _.W(() => this.ev ? "Developer instructions" : "System instructions");
				this.Lh = this.A.Lh;
				this.FDa = _.W(() => {
					var a = this.modelName();
					return _.Tud(a);
				});
				this.A$a = _.W(() => {
					if (this.lm().RF === 5) return !1;
					var a = this.modelName(), b = this.Lh();
					return _.w3(a) && !b;
				});
				this.jRb = _.W(() => this.Lh() ? !1 : !this.OB() || this.Ta());
				this.kk = _.W(() => {
					var a = this.A.kk(), b = this.Jf.Gx();
					return a || b;
				});
				this.SZ = this.rb.SZ;
				this.S7a = _.W(() => this.rb.name());
				this.sFb = _.W(() => {
					var a = this.Ih(), b = this.kk(), c = this.Fo();
					return a || b || c || _.Rp(this.rb);
				});
				this.U6a = _.W(() => {
					var a;
					return _.Rnd((a = this.Ii.lastModifiedDate()) != null ? a : null).toLowerCase();
				});
				this.aa = _.Ck(this.I.Xm, { initialValue: void 0 });
				this.Fo = _.W(() => {
					switch (this.rb.af()) {
						case 16: return !this.rb.kI();
						case 17: return !this.rb.kI();
						default: return this.Ii.Fo();
					}
				});
				this.Ih = this.rb.Ih;
				this.EIb = _.W(() => !this.Fo() || !this.S7a());
				this.OPb = _.W(() => {
					var a = this.Fo(), b = this.Ih();
					return a ? "Share prompt" : b ? "Save the prompt before sharing it" : "You need to create and run a prompt in order to share it";
				});
				this.Pna = _.W(() => this.tS() ? "Show conversation with markdown formatting" : "Show conversation without markdown formatting");
				this.cJ = _.W(() => {
					if (this.Ym()) return "Save prompt";
					var a = this.Ih(), b = this.Ii.Qka(), c = this.kk(), d = this.Fo();
					return c ? "Saving to Drive" : b ? "Please wait for the content to finish loading" : a ? "Save prompt" : d ? "Saved to Drive" : "No changes to save";
				});
				this.r3a = _.W(() => {
					if (this.Ym()) return !1;
					var a = this.Ih(), b = this.Ii.Qka(), c = this.kk(), d = this.za.ma();
					return !a || b || c || d;
				});
				this.m3a = _.W(() => {
					var a = this.kk();
					switch (this.rb.af()) {
						case 16: return a || this.rb.kI();
						case 17: return a || this.rb.kI();
						default: return a || !this.Fo();
					}
				});
				_.W(() => !!this.Ii.lastModifiedDate());
				this.OB = this.Qc.OB;
				this.Ta = this.fa.A.ey;
				this.xQb = this.fa.F.Il;
				_.W(() => this.lm().RF === 1 ? "BIDI" : "CHAT");
				this.X = new ResizeObserver((a) => {
					for (let b of a) Czd(this, b.contentRect.width);
				});
				_.Fk([this.pLa], () => {
					this.pLa() && this.j$a.set(!0);
				});
				this.U.register({
					id: "toggle-run-settings",
					keys: [
						"ctrl",
						"shift",
						"s"
					],
					St: [
						"meta",
						"shift",
						"s"
					],
					action: (a) => {
						this.Qc.vJ();
						a == null || a.preventDefault();
					},
					label: "Toggle run settings",
					description: "Show/hide the run settings panel",
					variant: "command"
				});
				this.U.register({
					id: "toggle-raw-mode",
					keys: ["shift", "r"],
					St: ["shift", "r"],
					action: (a) => {
						this.Uca();
						a == null || a.preventDefault();
					},
					label: "Toggle raw mode",
					description: "Show/hide raw markdown output",
					variant: "command"
				});
				_.Fk([this.isNavbarExpanded, this.ea.A], () => {
					!this.isNavbarExpanded() && this.ea.A() ? Dzd(this) : _.M3(this.F);
				});
			}
			Rb() {
				var a = this.el.nativeElement;
				a && this.X.observe(a);
				Czd(this, a.getBoundingClientRect().width);
				Promise.resolve().then(() => {
					this.DK.set(!1);
				});
			}
			Ba() {
				this.X.disconnect();
			}
			CLa() {
				this.ta.update((a) => !a);
			}
			Uca() {
				this.Ia.rawModeEnabled.set(!this.tS());
			}
			vJ() {
				this.Qc.vJ();
			}
		};
		_.z4.J = function(a) {
			return new (a || _.z4)();
		};
		_.z4.ka = _.u({
			type: _.z4,
			da: [["ms-playground-toolbar"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.v1, xzd, 5)(b.pLa, yzd, 5);
				a & 2 && _.ki(2);
			},
			inputs: {
				controller: [1, "controller"],
				lm: [1, "featureConfig"],
				Nab: [1, "stateConfig"],
				XJa: [1, "showIncognitoToggle"],
				jCa: [1, "isCopyPromptToClipboardDisabled"],
				Jxa: [1, "copyPromptToClipboardEnabledMessage"],
				oXa: [1, "copyPromptToClipboardDisabledMessage"],
				vt: [1, "createNewButtonDisableMessage"],
				N5: [1, "createNewButtonEnableMessage"]
			},
			outputs: {
				b6a: "onCopyPromptToClipboard",
				c6a: "onCreateNew"
			},
			features: [_.yi([])],
			fc: ["additional-actions"],
			ha: 50,
			ia: 20,
			la: [
				["overflowmenu", ""],
				["titlePart", ""],
				["systemInstructions", ""],
				["rawMode", ""],
				["incognitoToggle", ""],
				["save", ""],
				["share", ""],
				["compare", ""],
				["clearChat", ""],
				["copyPrompt", ""],
				["copyPromptToClipboard", ""],
				["deletePrompt", ""],
				["gemmaActions", ""],
				["infoDialogTemplate", ""],
				["titleTemplate", ""],
				["title", ""],
				["leftContent", ""],
				[1, "title-tokencount-container"],
				[1, "page-title"],
				[3, "ngTemplateOutlet"],
				["rightContent", ""],
				[
					3,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[1, "overflow-menu-wrapper"],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Toggle run settings panel",
					1,
					"runsettings-toggle-button",
					3,
					"iconName"
				],
				[1, "toolbar-overflow-menu"],
				[3, "showTextLabel"],
				[1, "token-container"],
				[3, "index"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"View more actions",
					"matTooltip",
					"View more actions",
					3,
					"matMenuTriggerFor",
					"iconName"
				],
				[
					"data-test-badge",
					"",
					1,
					"badge"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Toggle run settings panel",
					1,
					"runsettings-toggle-button",
					3,
					"click",
					"iconName"
				],
				[1, "mode-title"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"System instructions",
					"data-test-si",
					"",
					"matTooltipPosition",
					"below",
					3,
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"System instructions",
					"data-test-si",
					"",
					"matTooltipPosition",
					"below",
					3,
					"click",
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Toggle viewing raw output",
					"data-test-raw-mode",
					"",
					1,
					"icon-text-button",
					3,
					"matTooltip",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Toggle viewing raw output",
					"data-test-raw-mode",
					"",
					3,
					"iconName",
					"matTooltip",
					"ve",
					"veImpression",
					"veClick",
					"active"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Toggle viewing raw output",
					"data-test-raw-mode",
					"",
					1,
					"icon-text-button",
					3,
					"click",
					"matTooltip",
					"ve",
					"veImpression",
					"veClick"
				],
				[3, "iconName"],
				[
					"data-test-raw-mode-checkmark",
					"",
					1,
					"end-aligned-icon",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Toggle viewing raw output",
					"data-test-raw-mode",
					"",
					3,
					"click",
					"iconName",
					"matTooltip",
					"ve",
					"veImpression",
					"veClick",
					"active"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Toggle temporary chat",
					"data-test-incognito-toggle",
					"",
					1,
					"icon-text-button",
					3,
					"matTooltip",
					"disabled"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Toggle temporary chat",
					"data-test-incognito-toggle",
					"",
					1,
					"icon-text-button",
					3,
					"click",
					"matTooltip",
					"disabled"
				],
				[
					"data-test-incognito-checkmark",
					"",
					1,
					"end-aligned-icon",
					3,
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Save prompt",
					"data-test-manual-save",
					"",
					1,
					"save-button",
					3,
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltipPosition",
					"below",
					"aria-label",
					"Save prompt",
					"data-test-manual-save",
					"",
					1,
					"save-button",
					3,
					"iconName",
					"matTooltip",
					"disabled"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Save prompt",
					"data-test-manual-save",
					"",
					1,
					"save-button",
					3,
					"click",
					"disabled"
				],
				[
					3,
					"isSaving",
					"isSaved",
					"hasUnsavedChanges"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltipPosition",
					"below",
					"aria-label",
					"Save prompt",
					"data-test-manual-save",
					"",
					1,
					"save-button",
					3,
					"click",
					"iconName",
					"matTooltip",
					"disabled"
				],
				[
					3,
					"promptName",
					"renderAsMenuItem",
					"isDisabled",
					"tooltipText",
					"analyticsCategory"
				],
				[
					"mat-menu-item",
					"",
					"data-test-compare",
					"",
					1,
					"icon-text-button",
					"compare-button",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Compare mode",
					"data-test-compare",
					"",
					1,
					"compare-button",
					3,
					"ve",
					"veImpression",
					"veClick",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"data-test-compare",
					"",
					1,
					"icon-text-button",
					"compare-button",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Compare mode",
					"data-test-compare",
					"",
					1,
					"compare-button",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"data-test-clear",
					"inside",
					1,
					"icon-text-button",
					3,
					"aria-label",
					"matTooltip",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"data-test-clear",
					"outside",
					3,
					"aria-label",
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"data-test-clear",
					"inside",
					1,
					"icon-text-button",
					3,
					"click",
					"aria-label",
					"matTooltip",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"data-test-clear",
					"outside",
					3,
					"click",
					"aria-label",
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Make a copy",
					"data-test-copy",
					"",
					1,
					"icon-text-button",
					3,
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Make a copy",
					"data-test-copy",
					"",
					1,
					"icon-text-button",
					3,
					"click",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Copy prompt to clipboard",
					"matTooltipPosition",
					"below",
					3,
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Copy prompt to clipboard",
					"matTooltipPosition",
					"below",
					3,
					"click",
					"matTooltip",
					"disabled",
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Delete prompt",
					"data-test-delete",
					"",
					1,
					"icon-text-button",
					3,
					"disabled"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Delete prompt",
					"data-test-delete",
					"",
					1,
					"icon-text-button",
					3,
					"click",
					"disabled"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Open in Kaggle",
					"target",
					"_blank",
					"rel",
					"noopener noreferrer",
					"data-test-kaggle",
					"",
					1,
					"icon-text-button",
					3,
					"href"
				],
				[1, "external-link-content-container"],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Open in Vertex AI",
					"href",
					"https://cloud.google.com/vertex-ai/generative-ai/docs/open-models/use-gemma",
					"target",
					"_blank",
					"rel",
					"noopener noreferrer",
					"data-test-vertex",
					"",
					1,
					"icon-text-button"
				],
				[1, "info-dialog"],
				[1, "info-dialog-title"],
				[1, "info-dialog-description"],
				[1, "info-dialog-footer"],
				[1, "loading-title-placeholder"],
				[
					1,
					"actions",
					"pointer",
					"mode-title",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"matTooltipPosition",
					"right",
					"matTooltip",
					"Edit title and description",
					"aria-label",
					"Edit prompt title and description",
					3,
					"click",
					"iconName"
				],
				[
					1,
					"page-title",
					"actions",
					"mode-title"
				],
				[
					"aria-label",
					"Show prompt details",
					"dialogLabel",
					"Show prompt details",
					1,
					"tooltip-icon",
					"margin-left",
					3,
					"iconName",
					"xapInlineDialog"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(zzd), _.F(0, "ms-header"), _.Gh(1, 16), _.F(2, "div", 17), _.B(3, Twd, 3, 2, "div", 18)(4, Uwd, 1, 1, "ng-container", 19), _.B(5, Xwd, 2, 1), _.H(), _.Hh(), _.Gh(6, 20), _.Yh(7), _.Ih(8, 19), _.B(9, Ywd, 1, 1, "ng-container", 19), _.B(10, axd, 2, 4), _.Ih(11, 21), _.B(12, cxd, 3, 5, "div", 22), _.B(13, dxd, 1, 2, "button", 23), _.Hh(), _.H(), _.F(14, "mat-menu", 24, 0), _.B(16, gxd, 2, 4), _.Ih(17, 19)(18, 21), _.B(19, hxd, 2, 2), _.B(20, ixd, 1, 3, "ng-container", 21), _.Ih(21, 19), _.H(), _.z(22, pxd, 8, 4, "ng-template", null, 1, _.Ii)(24, rxd, 1, 1, "ng-template", null, 2, _.Ii)(26, wxd, 1, 1, "ng-template", null, 3, _.Ii)(28, Axd, 1, 1, "ng-template", null, 4, _.Ii)(30, Fxd, 1, 1, "ng-template", null, 5, _.Ii)(32, Hxd, 1, 1, "ng-template", null, 6, _.Ii)(34, Lxd, 1, 1, "ng-template", null, 7, _.Ii)(36, Qxd, 1, 1, "ng-template", null, 8, _.Ii)(38, Sxd, 1, 1, "ng-template", null, 9, _.Ii)(40, Uxd, 1, 1, "ng-template", null, 10, _.Ii)(42, Xxd, 1, 1, "ng-template", null, 11, _.Ii)(44, Zxd, 1, 1, "ng-template", null, 12, _.Ii)(46, byd, 8, 4, "ng-template", null, 13, _.Ii)(48, jyd, 2, 1, "ng-template", null, 14, _.Ii));
				if (a & 2) {
					a = _.O(29);
					let c = _.O(31), d = _.O(37), e = _.O(41), f = _.O(45);
					_.y(2);
					_.P("stacked-layout", !b.N0());
					_.y();
					_.C(b.Ym() && b.lm().Lv ? 3 : 4);
					_.y(2);
					_.C(b.j$a() ? 5 : -1);
					_.y(3);
					_.E("ngTemplateOutlet", e);
					_.y();
					_.C(b.ev ? 9 : -1);
					_.y();
					_.C(b.N0() ? 10 : -1);
					_.y();
					_.E("ngTemplateOutlet", d)("ngTemplateOutletContext", _.zi(18, Zwd));
					_.y();
					_.C(b.pFb() ? 12 : -1);
					_.y();
					_.C(b.jRb() ? 13 : -1);
					_.y(3);
					_.C(b.N0() ? -1 : 16);
					_.y();
					_.E("ngTemplateOutlet", a);
					_.y();
					_.E("ngTemplateOutlet", c)("ngTemplateOutletContext", _.zi(19, exd));
					_.y();
					_.C(b.Ym() ? -1 : 19);
					_.y();
					_.C(b.ev ? -1 : 20);
					_.y();
					_.E("ngTemplateOutlet", f);
				}
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				rzd,
				_.JD,
				wzd,
				_.dz,
				tzd,
				_.xC,
				_.$D,
				_.fF,
				_.wI,
				_.tI,
				_.sI,
				_.vI,
				_.IC,
				_.HC,
				uzd,
				_.T3,
				_.eF,
				_.y4,
				_.Cz,
				_.Bz,
				_.EC
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.bordered-menu-item[_ngcontent-%COMP%]{background:var(--color-neutral-background);cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border:1px solid var(--color-v3-outline-var);border-radius:12px;padding-top:2px;padding-bottom:2px}.bordered-menu-item[_ngcontent-%COMP%]:hover{background-color:var(--color-v3-outline-var)}.page-title[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-inline:12px;min-height:24px;overflow:hidden}.page-title[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{cursor:pointer}.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.icon-text-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{margin-right:8px}.icon-text-button[_ngcontent-%COMP%]   .end-aligned-icon[_ngcontent-%COMP%]{margin-left:8px;margin-right:0}.icon-text-button[_ngcontent-%COMP%]   .cloud-run-icon[_ngcontent-%COMP%]{margin-right:4px}.external-link-content-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px}ms-system-instructions[_ngcontent-%COMP%]{padding:0}@media screen and (max-width:768px){.compare-button[_ngcontent-%COMP%]{display:none}}.info-dialog[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;padding:16px;width:320px}.info-dialog[_ngcontent-%COMP%]   .info-dialog-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px;margin-bottom:20px}.info-dialog[_ngcontent-%COMP%]   .info-dialog-description[_ngcontent-%COMP%]{color:var(--color-on-surface-variant);margin-bottom:20px}.info-dialog[_ngcontent-%COMP%]   .info-dialog-footer[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:var(--color-v3-text-var)}.mode-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.save-dialog-label[_ngcontent-%COMP%]{color:var(--color-on-surface);margin-bottom:8px}.save-dialog-content[_ngcontent-%COMP%]{color:var(--color-on-surface);margin-bottom:12px;max-width:480px}.form-field[_ngcontent-%COMP%]{width:100%}.form-field[_ngcontent-%COMP%]   .description-input[_ngcontent-%COMP%]{resize:none}.collapse-all-button[_ngcontent-%COMP%]{margin:0 4px;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.save-button[_ngcontent-%COMP%]{position:relative}.save-button[_ngcontent-%COMP%]   ms-drive-save-indicator[_ngcontent-%COMP%]{position:absolute;left:16px;top:0}.toolbar-system-instructions[_ngcontent-%COMP%]{position:relative;background:var(--color-v3-surface-container-high)}.toolbar-system-instructions[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{position:absolute;right:4px;top:4px}.loading-title-placeholder[_ngcontent-%COMP%]{cursor:unset;padding-block:8px;-webkit-padding-start:6px;-moz-padding-start:6px;padding-inline-start:6px;height:60%;min-width:50px;max-width:25%;border-radius:30px;-webkit-animation-duration:1.7s;animation-duration:1.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:_ngcontent-%COMP%_moving-gradient;animation-name:_ngcontent-%COMP%_moving-gradient;background:-webkit-linear-gradient(160deg,var(--color-loading-background) 40%,var(--color-loading-background-contrast) 50%,var(--color-loading-background) 60%);background:linear-gradient(290deg,var(--color-loading-background) 40%,var(--color-loading-background-contrast) 50%,var(--color-loading-background) 60%);background-size:800px}@-webkit-keyframes _ngcontent-%COMP%_moving-gradient{0%{background-position:-400px 0}to{background-position:400px 0}}@keyframes _ngcontent-%COMP%_moving-gradient{0%{background-position:-400px 0}to{background-position:400px 0}}.title-tokencount-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;min-width:0}.title-tokencount-container.stacked-layout[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.title-tokencount-container.stacked-layout[_ngcontent-%COMP%]   ms-token-count[_ngcontent-%COMP%]{margin-left:4px}.title-tokencount-container.stacked-layout[_ngcontent-%COMP%]   ms-quota-count[_ngcontent-%COMP%]{margin-left:20px}.token-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:4px;margin:0}ms-quota-count[_ngcontent-%COMP%]{display:block}@media screen and (max-width:600px){ms-quota-count[_ngcontent-%COMP%]{margin-inline:12px}}.overflow-menu-wrapper[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.badge[_ngcontent-%COMP%]{background-color:var(--color-v3-text-link);border-radius:50%;height:8px;position:absolute;right:4px;top:0;width:8px;z-index:1;pointer-events:none}"],
			data: { animation: [_.qm("slidingInOut", [_.um(":enter", [_.sm({
				width: 0,
				opacity: 0
			}), _.rm("225ms cubic-bezier(0.0,0.0,0.2,1)", _.sm({
				width: "*",
				opacity: 1
			}))]), _.um(":leave", [_.rm("225ms cubic-bezier(0.4,0.0,1,1)", _.sm({
				width: 0,
				opacity: 0
			}))])]), _.qm("fadeIn", [_.um(":enter", [_.sm({ opacity: 0 }), _.rm("225ms cubic-bezier(0.0,0.0,0.2,1)", _.sm({ opacity: 1 }))])])] }
		});
		_.A4 = class {
			constructor() {
				this.ve = { Hpb: 249371 };
				this.tooltip = _.Li.required();
				this.checked = _.Li.required();
				this.disabled = _.Li.required();
				this.ecb = _.Ki();
			}
		};
		_.A4.J = function(a) {
			return new (a || _.A4)();
		};
		_.A4.ka = _.u({
			type: _.A4,
			da: [["ms-browse-as-a-tool"]],
			inputs: {
				tooltip: [1, "tooltip"],
				checked: [1, "checked"],
				disabled: [1, "disabled"]
			},
			outputs: { ecb: "toggleChanged" },
			ha: 5,
			ia: 6,
			la: [
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					"data-test-id",
					"browseAsAToolTooltip",
					1,
					"settings-item",
					"settings-tool",
					3,
					"matTooltip"
				],
				[1, "v3-font-body"],
				[1, "form-field-density--4"],
				[
					"aria-label",
					"Browse the url context",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h3", 1), _.R(2, "URL context"), _.H(), _.F(3, "div", 2)(4, "mat-slide-toggle", 3), _.J("change", function(c) {
					return b.ecb.emit(c.checked);
				}), _.H()()());
				a & 2 && (_.E("matTooltip", b.tooltip()), _.y(4), _.E("checked", b.checked())("disabled", b.disabled())("ve", b.ve.Hpb)("veImpression", !0)("veClick", !0));
			},
			dependencies: [
				_.tz,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz
			],
			styles: [".settings-item[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-item.settings-tool[_ngcontent-%COMP%]{margin:0 0 12px}.settings-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:8px}.settings-item[_ngcontent-%COMP%]   .gmat-mdc-form-field.mat-primary[_ngcontent-%COMP%], .settings-item[_ngcontent-%COMP%]   .model-option-content[_ngcontent-%COMP%]{overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.settings-tool[_ngcontent-%COMP%]{margin-bottom:16px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.slide-toggle[_ngcontent-%COMP%]{margin:8px 0}"]
		});
		var Gzd, Fzd, Hzd, B4, Izd, Jzd, Lzd, Mzd, Nzd, Ozd, Kzd, Uzd, Pzd, Qzd, Rzd, Szd, Tzd, Vzd, Wzd, Xzd, Yzd, C4;
		_.Ezd = new Map([
			[0, "MEDIA_RESOLUTION_UNSPECIFIED"],
			[1, "MEDIA_RESOLUTION_LOW"],
			[2, "MEDIA_RESOLUTION_MEDIUM"],
			[3, "MEDIA_RESOLUTION_HIGH"]
		]);
		Gzd = function(a) {
			var b = new Fzd();
			b.X = "";
			b.R = a;
			return b;
		};
		Fzd = class {
			constructor() {
				this.lines = [];
				this.R = "  ";
				this.F = "(";
				this.H = ")";
				this.A = "";
				this.I = " =";
				this.X = ",";
				this.U = "\"";
			}
		};
		Hzd = function(a, b) {
			return b !== "" ? `${b}${a.A.I} ` : "";
		};
		B4 = function(a, b, c = 1) {
			a.lines.push(`${`${a.A.R}`.repeat(c)}${b}`);
		};
		Izd = class {
			constructor(a) {
				this.A = a;
				this.lines = [];
				this.lines = [];
			}
			reset() {
				this.lines = [];
			}
		};
		Jzd = function(a) {
			switch (a) {
				case 1: return "string";
				case 2: return "number";
				case 3: return "integer";
				case 4: return "boolean";
				case 6: return "object";
				case 5: return "array";
				default: return "unspecified";
			}
		};
		Lzd = function(a) {
			var b = new Kzd();
			a !== "" && (b.H = `${a}.`);
			return b;
		};
		Mzd = function(a, b) {
			b !== "" && (a.na = `${b}.`);
			return a;
		};
		Nzd = function(a) {
			a.fa = "";
			return a;
		};
		Ozd = function(a) {
			a.oa = "type";
			a.I = "description";
			a.U = "format";
			a.aa = "nullable";
			a.R = "enum";
			a.ma = "required";
			a.X = "items";
			a.ea = "properties";
			return a;
		};
		Kzd = class {
			constructor() {
				this.H = "";
				this.A = "Schema";
				this.na = "";
				this.oa = "type";
				this.I = "description";
				this.U = "format";
				this.aa = "nullable";
				this.R = "enum";
				this.ma = "required";
				this.X = "items";
				this.ea = "properties";
				this.F = (a) => Jzd(a);
				this.fa = "model.ResponseSchema = ";
			}
		};
		Uzd = function(a, b, c) {
			var d = c.getType(), e = c.jc(), f = _.l(c, 2), g = _.Pm(c, 4), k = _.uj(c, 5, _.oj()), p = _.uj(c, 8, _.oj()), r = _.Z(c, _.xn, 6);
			c = _.zc(c, 7, _.xn);
			d !== 0 && B4(a, `${Hzd(a, a.F.oa)}${a.A.A}${a.F.na}${a.F.F(d)},`, b);
			Pzd(a, b, `${a.F.I}`, e);
			Pzd(a, b, `${a.F.U}`, f);
			g && Pzd(a, b, `${a.F.aa}`, "True");
			k.length > 0 && Qzd(a, b, `${a.F.R}`, k.map((v) => Rzd(v)));
			p.length > 0 && Qzd(a, b, `${a.F.ma}`, p.map((v) => Rzd(v)));
			r !== void 0 && d === 5 && Szd(a, b, `${a.F.X}`, r);
			c !== void 0 && d === 6 && Tzd(a, b, `${a.F.ea}`, c);
		};
		Pzd = function(a, b, c, d) {
			d && B4(a, `${Hzd(a, c)}${Rzd(d)},`, b);
		};
		Qzd = function(a, b, c, d) {
			B4(a, `${Hzd(a, c)}[${d.join(", ")}],`, b);
		};
		Rzd = function(a, b = "\"") {
			return [
				`${b}`,
				a,
				`${b}`
			].join("");
		};
		Szd = function(a, b, c, d) {
			B4(a, `${Hzd(a, c)}${`${a.A.A}${a.F.A}`}${a.A.F}`, b);
			Uzd(a, b + 1, d);
			B4(a, `${a.A.H},`, b);
		};
		Tzd = function(a, b, c, d) {
			B4(a, `${Hzd(a, c)}${"{"}`, b);
			for (let [f, g] of d.entries()) {
				let k = g;
				c = B4;
				d = a;
				var e = `${Rzd(f, a.A.U)}`;
				c(d, `${e !== "" ? `${e}: ` : ""}${`${a.A.A}${a.F.A}`}${a.A.F}`, b + 1);
				Uzd(a, b + 2, k);
				B4(a, `${a.A.H},`, b + 1);
			}
			B4(a, "},", b);
		};
		Vzd = class extends Izd {
			constructor(a, b) {
				a.A = b.H;
				super(a);
				this.F = b;
			}
			BH(a, b = 1, c) {
				super.reset();
				B4(this, `${this.F.fa}${`${this.A.A}${this.F.A}`}${this.A.F}`, c != null ? c : b);
				Uzd(this, b + 1, a);
				B4(this, `${this.A.H}${this.A.X}`, b);
				return this.lines;
			}
		};
		Wzd = {
			REST: "/gemini-api/docs#rest",
			Python: "/gemini-api/docs#python",
			TypeScript: "/gemini-api/docs#javascript",
			Java: "/gemini-api/docs#java",
			Go: "/gemini-api/docs#go",
			[".NET"]: "/gemini-api/docs#c"
		};
		Xzd = Gzd("    ");
		Yzd = Nzd(Lzd("genai"));
		Yzd.A = "types.Schema";
		var Zzd = Ozd(Mzd(Yzd, "types.Type"));
		Zzd.F = (a) => {
			switch (a) {
				case 1: return "STRING";
				case 2: return "NUMBER";
				case 3: return "INTEGER";
				case 4: return "BOOLEAN";
				case 6: return "OBJECT";
				case 5: return "ARRAY";
				default: return "UNSPECIFIED";
			}
		};
		_.$zd = new Vzd(Xzd, Zzd);
		C4 = Gzd("  ");
		C4.F = "{";
		C4.H = function(a) {
			switch (a.F) {
				case "(": return ")";
				case "[": return "]";
				case "{": return "}";
				case "<": return ">";
				default: return "";
			}
		}(C4);
		C4.I = ":".endsWith("=") ? " :" : ":";
		C4.U = "";
		var aAd = Nzd(Lzd(""));
		aAd.A = "";
		var bAd = Ozd(Mzd(aAd, "Type"));
		bAd.F = (a) => {
			switch (a) {
				case 1: return "STRING";
				case 2: return "NUMBER";
				case 3: return "INTEGER";
				case 4: return "BOOLEAN";
				case 6: return "OBJECT";
				case 5: return "ARRAY";
				default: return "UNSPECIFIED";
			}
		};
		_.cAd = new Vzd(C4, bAd);
		_.D4 = class {};
		var dAd = function(a, b, c, d) {
			return Nyd(a.A).pipe(_.Qg(), _.uf((e) => {
				e = e.name;
				return d ? JSON.stringify({
					nbformat: 4,
					nbformat_minor: 0,
					metadata: { colab: { name: b } },
					cells: [
						{
							cell_type: "markdown",
							metadata: {},
							source: "# Setup"
						},
						{
							cell_type: "code",
							metadata: {},
							source: "!pip install -U -q \"google\"\n!pip install -U -q \"google.genai\""
						},
						{
							cell_type: "markdown",
							metadata: {},
							source: "# Generated Code"
						},
						{
							cell_type: "code",
							metadata: {},
							source: c
						}
					]
				}) : JSON.stringify({
					nbformat: 4,
					nbformat_minor: 0,
					metadata: { colab: { name: b } },
					cells: [
						{
							cell_type: "markdown",
							metadata: {},
							source: "# Setup\n\nPlease ensure you have imported a Gemini API key from AI Studio. \nYou can do this directly in the Secrets tab on the left.\n\nAfter doing so, please run the setup cell below."
						},
						{
							cell_type: "code",
							metadata: {},
							source: ["!pip install -U -q \"google\"\n!pip install -U -q \"google.genai\"\n\nimport os\nfrom google.colab import userdata\nfrom google.colab import drive\nos.environ[\"GEMINI_API_KEY\"] = userdata.get(\"GOOGLE_API_KEY\")\n\ndrive.mount(\"/content/drive\")\n# Please ensure that uploaded files are available in the AI Studio folder or change the working folder.", `os.chdir("/content/drive/MyDrive/${e}")`].join("\n")
						},
						{
							cell_type: "markdown",
							metadata: {},
							source: "# Generated Code"
						},
						{
							cell_type: "code",
							metadata: {},
							source: c
						}
					]
				});
			}), _.ch((e) => _.DYc(a.A, b, e, "application/vnd.google.colaboratory")), _.Qg(), _.uf((e) => e.id));
		}, E4 = class {
			constructor() {
				this.A = _.m(_.w1);
			}
		};
		E4.J = function(a) {
			return new (a || E4)();
		};
		E4.sa = _.Cd({
			token: E4,
			factory: E4.J,
			wa: "root"
		});
		var eAd, fAd, kyd, nyd;
		eAd = ["codeText"];
		fAd = (a, b) => b.language;
		kyd = function(a) {
			switch (a == null ? void 0 : a.language) {
				case "REST": return 236956;
				case "Python": return 236957;
				case "TypeScript": return 236958;
				case "Java": return 276469;
				case "Go": return 236959;
				case ".NET": return 304864;
			}
		};
		nyd = function(a) {
			_.Rn(a.F, "HEADER", "Clicked Copy Code Button");
			var b = a.rb.title();
			a.PN.pipe(_.Gf((c) => !!c), _.ch(({ language: c }) => a.data.mR(c, a.index)), _.Qg(), _.ch((c) => dAd(a.aa, b, c, a.data.C2a))).subscribe((c) => {
				_.rd(a.window, _.jd(`https://colab.research.google.com/drive/${c}`), "_blank");
			});
		};
		_.F4 = class {
			constructor() {
				this.S = _.Dk;
				this.ve = {
					Mkb: 256901,
					Okb: 256902,
					Pkb: 251854,
					Qkb: 275104,
					EZb: 252999,
					FZb: 253e3,
					Rkb: 251848,
					GZb: 276469,
					Skb: 276470
				};
				this.qzb = _.Ni("codeText");
				this.F = _.m(_.Ou);
				this.A = _.m(_.Uy);
				this.I = _.m(_.SC);
				this.aa = _.m(E4);
				this.data = _.m(_.qC);
				this.Wa = _.m(_.kC);
				_.m(_.KC);
				this.R = _.m(_.XL);
				this.rb = _.m(_.Qp);
				this.H = _.m(_.iC);
				this.Ia = _.m(_.oF);
				_.m(_.ZC);
				this.window = _.m(_.Sn);
				var a;
				this.index = (a = this.data.index) != null ? a : 0;
				this.yCa = _.M(!1);
				_.W(() => !this.data.C2a && (this.X() || this.U()));
				this.X = _.W(() => {
					var c;
					return ((c = this.A.A()) == null ? void 0 : c.length) === 0;
				});
				this.U = _.W(() => this.A.A() === void 0);
				this.getCodeHistoryToggle = this.Ia.getCodeHistoryToggle;
				this.KQb = _.W(() => this.data.DP);
				this.A7 = _.W(() => [{
					Hl: 6,
					value: this.getCodeHistoryToggle()
				}, {
					Hl: 7,
					value: this.Ia.getCodeLanguage()
				}]);
				this.y$a = this.data.y$a;
				var b = _.m(_.Nw);
				this.Mv = this.data.Mv;
				this.PN = _.Bk(this.Ia.getCodeLanguage).pipe(_.uf((c) => this.Mv.find((d) => d.language === c)));
				this.ELb = _.Ck(this.PN.pipe(_.uf((c) => c == null ? void 0 : c.Wpa)));
				this.oha = this.PN.pipe(_.Gf((c) => !!c), _.ch((c) => this.data.Ff(c.language, this.index).pipe(_.Ng((d) => {
					b.warning(d);
					this.H.error("Failed to generate code");
					return _.mf("");
				}))), _.Yg({
					bufferSize: 1,
					refCount: !0
				}));
				this.Owb = this.PN.pipe(_.Gf((c) => !!c), _.uf(({ language: c }) => this.data.YHb ? _.ar("/gemini-api/docs/interactions") : (c = Wzd[c] || "") ? _.ar(c) : ""));
				this.oha.pipe(_.uf((c) => c.split("\n").map((d, e) => e + 1)));
				this.Mv.map((c) => c.language).includes(this.Ia.getCodeLanguage()) || this.Ia.getCodeLanguage.set("Python");
				_.Fk([this.yCa], () => {
					this.yCa() ? this.Wa.xr("90vw") : this.Wa.xr("840px");
				});
			}
			wn() {
				this.Wa.close();
			}
			xl() {
				this.PN.pipe(_.Qg()).subscribe((a) => {
					a && _.Rn(this.F, "HEADER", "Clicked Copy Code Button", a.language);
				});
				this.oha.pipe(_.Qg()).subscribe((a) => {
					this.I.copy(a);
					this.H.success("Copied to clipboard");
				});
			}
			kia() {
				this.oha.pipe(_.Ela(this.PN), _.Qg()).subscribe(([a, b]) => {
					b && this.R.kia(a, b.language);
				});
			}
			Rb() {
				this.data.C2a || _.Sy(this.A);
			}
		};
		_.F4.J = function(a) {
			return new (a || _.F4)();
		};
		_.F4.ka = _.u({
			type: _.F4,
			da: [["ms-get-code-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.qzb, eAd, 5);
				a & 2 && _.ki();
			},
			ha: 23,
			ia: 21,
			la: [
				[1, "get-code-dialog"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matDialogClose",
					"",
					"aria-label",
					"close",
					3,
					"click",
					"iconName"
				],
				[1, "code-dialog-content"],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic",
					1,
					"language-select-field"
				],
				[
					3,
					"selectionChange",
					"value"
				],
				[
					3,
					"value",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"view-all-libraries-option",
					3,
					"value"
				],
				[
					"href",
					"https://ai.google.dev/gemini-api/docs/libraries",
					"target",
					"_blank",
					"rel",
					"noopener noreferrer",
					1,
					"view-all-libraries-link",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[3, "iconName"],
				[
					"enableStickyHeader",
					"true",
					"headerText",
					"Code",
					1,
					"get-code-block",
					3,
					"code",
					"language",
					"isExpandable",
					"icon"
				],
				["align", "end"],
				"ms-button  variant borderless matDialogClose ".split(" "),
				[
					"ms-button",
					"",
					3,
					"click",
					"ve",
					"veClick",
					"veImpression",
					"veMutable",
					"veMetadata"
				],
				[
					"ngProjectAs",
					"actions",
					5,
					["actions"],
					1,
					"code-block-actions"
				],
				[
					"matTooltip",
					"Include prompt history in generated code",
					"aria-label",
					"History toggle",
					1,
					"slide-toggle",
					3,
					"ve",
					"veMetadata",
					"veClick",
					"veImpression",
					"veMutable",
					"checked"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Open in Colab",
					"aria-label",
					"Open in Colab",
					3,
					"iconName",
					"ve",
					"veClick",
					"veImpression",
					"veMetadata",
					"veMutable"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Download",
					"aria-label",
					"Download",
					3,
					"click",
					"iconName",
					"ve",
					"veClick",
					"veImpression",
					"veMetadata",
					"veMutable"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"API Docs",
					"target",
					"_blank",
					"aria-label",
					"API Docs",
					3,
					"href",
					"ve",
					"veClick",
					"veImpression",
					"veMetadata",
					"veMutable",
					"iconName"
				],
				[
					"matTooltip",
					"Include prompt history in generated code",
					"aria-label",
					"History toggle",
					1,
					"slide-toggle",
					3,
					"change",
					"ve",
					"veMetadata",
					"veClick",
					"veImpression",
					"veMutable",
					"checked"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Open in Colab",
					"aria-label",
					"Open in Colab",
					3,
					"click",
					"iconName",
					"ve",
					"veClick",
					"veImpression",
					"veMetadata",
					"veMutable"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, " Get code "), _.F(3, "button", 2), _.J("click", function() {
					return b.wn();
				}), _.H()(), _.F(4, "mat-dialog-content", 3)(5, "mat-form-field", 4)(6, "mat-select", 5), _.Ei(7, "async"), _.J("selectionChange", function(c) {
					c = c.value;
					c.language !== b.Ia.getCodeLanguage() && b.Ia.getCodeLanguage.set(c.language);
				}), _.Ah(8, lyd, 2, 5, "mat-option", 6, fAd), _.I(10, "mat-divider"), _.F(11, "mat-option", 7)(12, "a", 8), _.J("click", function(c) {
					return c.stopPropagation();
				}), _.R(13, "View All Libraries "), _.I(14, "span", 9), _.H()()()(), _.B(15, pyd, 10, 27, "ms-code-block", 10), _.Ei(16, "async"), _.H(), _.F(17, "mat-dialog-actions", 11)(18, "button", 12), _.R(19, " Close "), _.H(), _.F(20, "button", 13), _.Ei(21, "buildVeMetadata"), _.J("click", function() {
					return b.xl();
				}), _.R(22, " Copy "), _.H()()());
				if (a & 2) {
					let c;
					_.y(3);
					_.E("iconName", b.S.ac);
					_.y();
					_.P("full-height", b.yCa());
					_.y(2);
					_.E("value", _.Fi(7, 15, b.PN));
					_.y(2);
					_.Bh(b.Mv);
					_.y(3);
					_.E("value", null);
					_.y();
					_.E("ve", b.ve.Skb)("veImpression", !0)("veClick", !0);
					_.y(2);
					_.E("iconName", b.S.Dk);
					_.y();
					_.C((c = _.Fi(16, 17, b.oha)) ? 15 : -1, c);
					_.y(5);
					_.E("ve", b.ve.Pkb)("veClick", !0)("veImpression", !0)("veMutable", !0)("veMetadata", _.Fi(21, 19, b.A7()));
				}
			},
			dependencies: [
				_.Yy,
				_.aM,
				_.dz,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.OD,
				_.ND,
				_.$D,
				_.ZD,
				_.dE,
				_.bE,
				_.QB,
				_.gF,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz,
				_.oz,
				_.hz
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}.get-code-block[_ngcontent-%COMP%]     code{max-height:45vh;padding-bottom:14px}.get-code-block[_ngcontent-%COMP%]     pre{margin-top:0}mat-divider[_ngcontent-%COMP%]{margin:4px 0}.language-select-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.code-block-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}  .view-all-libraries-option .mdc-list-item__primary-text{display:block;width:100%;margin:0}a.view-all-libraries-link[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;width:100%}.information-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.language-button[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.slide-toggle[_ngcontent-%COMP%]{margin-right:6px;line-height:normal}"]
		});
		var hAd;
		_.gAd = {
			cq: 0,
			VIDEO: 1,
			U2: 2,
			XC: 3,
			G1b: 4,
			LO: 5,
			0: "IMAGE",
			1: "VIDEO",
			2: "SPEECH",
			3: "MUSIC",
			4: "PROMPT",
			5: "BIDI"
		};
		hAd = function(a) {
			if (!a.U_a()) return "This model is not supported by Gemini API";
			switch (a.V_a()) {
				case 4: return "Get SDK code to chat with Gemini";
				case 1: return "Get SDK code to generate a video";
				case 0: return "Get SDK code to generate an image";
				case 2: return "Get SDK code to generate speech";
				case 3: return "Get SDK code to generate music";
				case 5: return "Get SDK code to interact with Gemini Live";
				default: return "";
			}
		};
		_.G4 = class {
			constructor() {
				this.dialog = _.m(_.rC);
				this.Nlb = _.m(_.D4);
				this.S = _.Dk;
				this.A = _.m(_.gH);
				this.Mlb = _.m(_.Ou);
				this.V_a = _.V();
				this.modelName = _.W(() => {
					var a;
					return (a = this.A.F()[0].model()) != null ? a : "";
				});
				this.U_a = _.W(() => {
					var a = this.modelName();
					return (!_.w3(a) || _.Rud(a) || _.Sud(a)) && !(0, _.ym)(a);
				});
			}
		};
		_.G4.J = function(a) {
			return new (a || _.G4)();
		};
		_.G4.ka = _.u({
			type: _.G4,
			da: [["ms-get-code-button"]],
			inputs: { V_a: [1, "getCodeButtonType"] },
			ha: 2,
			ia: 3,
			la: [[
				"ms-button",
				"",
				"variant",
				"borderless",
				"size",
				"small",
				"aria-label",
				"Get code",
				"id",
				"getCodeBtn",
				"data-test-get-code",
				"",
				3,
				"click",
				"matTooltip",
				"disabled",
				"iconName"
			]],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 0), _.J("click", function() {
					_.Rn(b.Mlb, "HEADER", "Clicked Get Code Button");
					b.dialog.open(_.F4, {
						id: "code-dialog",
						width: "840px",
						data: b.Nlb.qB(0)
					});
				}), _.R(1, " Get code\n"), _.H());
				a & 2 && _.E("matTooltip", hAd(b))("disabled", !b.U_a())("iconName", b.S.aq);
			},
			dependencies: [
				_.Yy,
				_.IC,
				_.HC
			],
			Ab: 2
		});
		var ryd, syd, tyd, uyd, kAd, iAd, jAd;
		ryd = function(a, b, c) {
			return _.x(function* () {
				var d = c * -1, e = iAd(a, b);
				e && (_.Qm(e, d), d = [...a.A.value], Uud(d, a.baseModel), a.data.hT(d));
			});
		};
		syd = function(a) {
			var b;
			return ((b = _.Oyd[a]) == null ? void 0 : b.title) || "";
		};
		tyd = function(a, b) {
			var c, d;
			return (d = (c = iAd(a, b)) == null ? void 0 : _.Lm(c, 4)) != null ? d : 5;
		};
		uyd = function(a) {
			var b;
			return ((b = _.Oyd[a]) == null ? void 0 : b.description) || "";
		};
		kAd = function(a) {
			var b = _.Gxa(a.baseModel);
			jAd(a, b);
		};
		iAd = function(a, b) {
			return a.A.value.length === 0 ? null : a.A.value.find((c) => c.Xi() === b) || a.A.value[0];
		};
		jAd = function(a, b) {
			Uud(b, a.baseModel);
			a.data.hT(b);
			a.A.next(b);
			a.KIa.next(Vud(a.A.value));
		};
		_.H4 = class {
			constructor() {
				this.data = _.m(_.qC);
				this.Wa = _.m(_.kC);
				this.S = _.Dk;
				this.A = new _.ml([]);
				this.KIa = new _.ml([..._.yxa]);
				this.baseModel = this.data.baseModel;
				this.tKb = "-5";
				this.A6 = this.data.A6;
				this.data.safetySettings.length === 0 ? kAd(this) : (this.A.next([...this.data.safetySettings.map((a) => a.clone())]), this.KIa.next(Vud(this.data.safetySettings)));
			}
			wn() {
				this.Wa.close();
			}
		};
		_.H4.J = function(a) {
			return new (a || _.H4)();
		};
		_.H4.ka = _.u({
			type: _.H4,
			da: [["run-safety-settings"]],
			ha: 24,
			ia: 2,
			la: [
				[1, "run-safety-settings"],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"close",
					"aria-label",
					"Close Run Safety Settings",
					3,
					"click",
					"iconName"
				],
				["documentation-path", "/gemini-api/terms"],
				[
					"href",
					"https://policies.google.com/terms/generative-ai/use-policy",
					"target",
					"_blank"
				],
				["documentation-path", "/gemini-api/docs/safety-settings"],
				[1, "dialog-subtitle"],
				[1, "safety-item-row"],
				[
					"ms-button",
					"",
					"aria-label",
					"Restore Default Settings",
					"variant",
					"primary",
					3,
					"click"
				],
				[
					1,
					"title",
					"text-safety-settings-title"
				],
				[1, "safety-item-row-left"],
				[1, "title"],
				[1, "safety-item-row-right"],
				[
					"aria-live",
					"polite",
					1,
					"current-selection-text"
				],
				[
					"max",
					"-1",
					"step",
					"1",
					3,
					"min"
				],
				[
					"matTooltipPosition",
					"above",
					"matSliderThumb",
					"",
					3,
					"ngModelChange",
					"ngModel",
					"matTooltip"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, " Run safety settings "), _.F(3, "button", 2), _.J("click", function() {
					return b.wn();
				}), _.H()(), _.F(4, "mat-dialog-content")(5, "p"), _.R(6, " Adjust how likely you are to see responses that could be harmful. Content is blocked based on the probability that it is harmful."), _.H(), _.F(7, "p"), _.R(8, " You are responsible for ensuring that safety settings for your intended use case comply with the "), _.F(9, "a", 3), _.R(10, "Terms"), _.H(), _.R(11, " and "), _.F(12, "a", 4), _.R(13, "Use Policy"), _.H(), _.R(14, ". "), _.F(15, "a", 5), _.R(16, "Learn more"), _.H(), _.R(17, "."), _.H(), _.B(18, qyd, 5, 0, "div", 6), _.Ah(19, vyd, 9, 7, "div", 7, _.zh), _.H(), _.F(21, "mat-dialog-actions")(22, "button", 8), _.J("click", function() {
					var c = _.Cxa(b.baseModel);
					jAd(b, c);
				}), _.R(23, " Reset defaults "), _.H()()());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac), _.y(15), _.C(b.A6 ? 18 : -1), _.y(), _.Bh(b.KIa.value));
			},
			dependencies: [
				_.Yy,
				_.LC,
				_.JD,
				_.Wn,
				_.oD,
				_.vD,
				_.xC,
				_.uC,
				_.wC,
				_.vC,
				_.GN,
				_.FN,
				_.DN,
				_.IC,
				_.HC
			],
			styles: [".run-safety-settings[_ngcontent-%COMP%]{max-width:580px}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid var(--color-inverse-on-surface);padding-top:20px}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]   .safety-item-row-left[_ngcontent-%COMP%]{cursor:default;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:216px}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]   .safety-item-row-left[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding-left:8px}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]   .safety-item-row-right[_ngcontent-%COMP%]{position:relative;padding-right:20px;width:184px}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]   .safety-item-row-right[_ngcontent-%COMP%]   .current-selection-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-on-surface);position:absolute;text-align:center;top:-5px;width:100%}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]   .safety-item-row-right[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{width:100%}.run-safety-settings[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-on-surface);margin-bottom:4px}.run-safety-settings[_ngcontent-%COMP%]   .text-safety-settings-title[_ngcontent-%COMP%]{margin:20px 0}.run-safety-settings[_ngcontent-%COMP%]   .safety-item-row[_ngcontent-%COMP%]:last-child{border-bottom:1px solid var(--color-inverse-on-surface)}"]
		});
		var lAd;
		lAd = function(a, b) {
			return a.disabled() ? [b, a.MYa()].filter(Boolean).join("") : b;
		};
		_.I4 = class {
			constructor() {
				this.value = _.V();
				this.OC = _.Ki();
				this.Tz = _.V();
				this.disabled = _.V(!1);
				this.MYa = _.V();
				this.zS = _.M(!0);
				this.UZ = _.M(!1);
				this.Q4a = _.W(() => {
					var a, b;
					return (b = (a = this.Tz()) == null ? void 0 : _.Db(_.tn(a, 2))) != null ? b : 24576;
				});
				this.X4a = _.W(() => {
					var a, b;
					return (b = (a = this.Tz()) == null ? void 0 : _.Db(_.tn(a, 3))) != null ? b : 0;
				});
				this.RAb = _.W(() => {
					var a, b;
					return (b = (a = this.Tz()) == null ? void 0 : _.Db(_.tn(a, 1))) != null ? b : 8e3;
				});
				this.Pga = _.W(() => {
					var a, b, c;
					(a = this.Tz()) == null ? c = void 0 : c = _.wb(_.tn(a, 4));
					return (b = c) != null ? b : !0;
				});
				this.RRb = _.W(() => {
					var a = this.X4a(), b = this.Q4a();
					return a > 0 ? lAd(this, `Set how much the model should think, with ${b} being as much as possible`) : lAd(this, `Set how much the model should think, 0 tokens being not at all and ${b} being as much as possible`);
				});
				this.BTb = _.W(() => this.Pga() ? lAd(this, "Enable or disable thinking for responses") : "Unable to disable thinking mode for this model.");
				this.Sxb = _.W(() => lAd(this, "Let the model decide how many thinking tokens to use or choose your own value"));
				_.Fk([this.value], () => {
					switch (this.value()) {
						case 0:
							this.zS.set(!1);
							this.UZ.set(!1);
							break;
						case -1:
							this.zS.set(!0);
							this.UZ.set(!1);
							break;
						default: this.zS.set(!0), this.UZ.set(!0);
					}
				});
				_.Fk([this.Pga], () => {
					this.Pga() || this.zS.set(!0);
				});
			}
		};
		_.I4.J = function(a) {
			return new (a || _.I4)();
		};
		_.I4.ka = _.u({
			type: _.I4,
			da: [["ms-thinking-budget-setting"]],
			inputs: {
				value: [1, "value"],
				Tz: [1, "thinkingModelConfig"],
				disabled: [1, "disabled"],
				MYa: [1, "disabledTooltipSuffix"]
			},
			outputs: { OC: "valueChanged" },
			ha: 10,
			ia: 5,
			la: [
				[1, "thinking-budget-setting"],
				[1, "thinking-group-title"],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"settings-item",
					3,
					"matTooltip"
				],
				[1, "settings-item-title"],
				[1, "form-field-density--4"],
				[
					"aria-label",
					"Toggle thinking mode",
					"data-test-toggle",
					"enable-thinking",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				["data-test-id", "thinking-budget-setting-animation-wrapper"],
				[
					"aria-label",
					"Toggle thinking budget between auto and manual",
					"data-test-toggle",
					"manual-budget",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				["data-test-id", "user-setting-budget-animation-wrapper"],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"item-input",
					3,
					"matTooltip"
				],
				[
					"data-test-slider",
					"",
					1,
					"item-input-slider",
					3,
					"valueChange",
					"value",
					"step",
					"min",
					"max",
					"floor",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h3", 1), _.R(2, "Thinking"), _.H(), _.F(3, "div", 2)(4, "p", 3), _.R(5, "Thinking mode"), _.H(), _.F(6, "div", 4)(7, "mat-slide-toggle", 5), _.J("change", function(c) {
					c.checked ? b.OC.emit(-1) : b.OC.emit(0);
				}), _.H()()(), _.F(8, "div", 6), _.B(9, xyd, 7, 5), _.H()());
				a & 2 && (_.y(3), _.E("matTooltip", b.BTb()), _.y(4), _.E("checked", b.zS())("disabled", b.disabled() || !b.Pga()), _.y(), _.E("@slideUpDown", b.zS() ? "visible" : "hidden"), _.y(), _.C(b.zS() ? 9 : -1));
			},
			dependencies: [
				_.tz,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.HN
			],
			styles: [".thinking-budget-setting[_ngcontent-%COMP%]{margin-block:12px 8px}.settings-item[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-item.settings-tool[_ngcontent-%COMP%]{margin:0 0 12px}.settings-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:8px}.settings-item[_ngcontent-%COMP%]   .gmat-mdc-form-field.mat-primary[_ngcontent-%COMP%], .settings-item[_ngcontent-%COMP%]   .model-option-content[_ngcontent-%COMP%]{overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.settings-item[_ngcontent-%COMP%]   .form-field-density--4[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.thinking-group-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);margin-bottom:12px}.settings-item-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;margin-block:8px}"],
			data: { animation: [_.qm("slideUpDown", [
				_.tm("hidden", _.sm({
					opacity: 0,
					height: 0
				})),
				_.tm("visible", _.sm({
					opacity: 1,
					height: "*"
				})),
				_.um("hidden => visible", _.rm("200ms ease-in", _.sm({
					opacity: 1,
					height: "*"
				}))),
				_.um("visible => hidden", _.rm("200ms ease-out", _.sm({
					opacity: 0,
					height: 0
				})))
			])] }
		});
		_.mAd = "";
		_.nAd = "";
		var yyd, zyd;
		yyd = function(a) {
			switch (a) {
				case 4: return "Optimized for fastest response and lowest cost";
				case 1: return "Optimizes for latency";
				case 2: return "A balanced choice for general purpose use and solid quality";
				case 3: return "(Recommended) Maximizes reasoning depth";
				case 5: return _.nAd;
				default: return "";
			}
		};
		zyd = function(a, b) {
			switch (b) {
				case 4: return a.Y4a();
				case 1: return "Low";
				case 2: return "Medium";
				case 3: return "High";
				case 5: return _.mAd;
				default: return "";
			}
		};
		_.J4 = class {
			constructor() {
				this.level = _.V();
				this.rbb = _.V();
				this.Y4a = _.V("Minimal");
				this.disabled = _.V(!1);
				this.h4a = _.Ki();
				this.ThinkingLevel = _.Pyd;
			}
		};
		_.J4.J = function(a) {
			return new (a || _.J4)();
		};
		_.J4.ka = _.u({
			type: _.J4,
			da: [["ms-thinking-level-setting"]],
			inputs: {
				level: [1, "level"],
				rbb: [1, "supportedLevels"],
				Y4a: [1, "minimalLevelLabel"],
				disabled: [1, "disabled"]
			},
			outputs: { h4a: "levelChange" },
			ha: 10,
			ia: 2,
			la: [
				[
					"matTooltipPosition",
					"left",
					"matTooltip",
					"Set the thinking level",
					1,
					"settings-item",
					"settings-item-column"
				],
				[1, "item-about"],
				[1, "item-description"],
				[1, "item-description-title"],
				[
					1,
					"item-input-form-field",
					"form-field-density--4"
				],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic"
				],
				[
					"aria-label",
					"Thinking Level",
					3,
					"selectionChange",
					"value",
					"disabled"
				],
				[
					"matTooltipPosition",
					"left",
					3,
					"value",
					"matTooltip"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3), _.R(4, "Thinking level"), _.H()()(), _.F(5, "div", 4)(6, "mat-form-field", 5)(7, "mat-select", 6), _.J("selectionChange", function(c) {
					return b.h4a.emit(c.value);
				}), _.Ah(8, Ayd, 2, 3, "mat-option", 7, _.zh), _.H()()()());
				a & 2 && (_.y(7), _.E("value", b.level())("disabled", b.disabled()), _.y(), _.Bh(b.rbb()));
			},
			dependencies: [
				_.tz,
				_.$D,
				_.ZD,
				_.TB,
				_.QB,
				_.dE,
				_.bE,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]{display:block}.settings-item[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-item.settings-tool[_ngcontent-%COMP%]{margin:0 0 12px}.settings-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:8px}.settings-item[_ngcontent-%COMP%]   .gmat-mdc-form-field.mat-primary[_ngcontent-%COMP%], .settings-item[_ngcontent-%COMP%]   .model-option-content[_ngcontent-%COMP%]{overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.settings-item[_ngcontent-%COMP%]   .form-field-density--4[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.settings-item-column[_ngcontent-%COMP%]{-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px}.item-about[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:4px}.item-about.item-about-slider[_ngcontent-%COMP%]{margin-bottom:-10px}.item-about.item-about-search[_ngcontent-%COMP%]{display:block}.item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0}.item-about[_ngcontent-%COMP%]   .item-description.tagged[_ngcontent-%COMP%]{width:auto}.item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{margin:0}.item-description-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]
		});
		var oAd;
		oAd = function(a) {
			a.Ui.onended = () => {
				a.qe.set(!1);
				a.xn.set(null);
			};
		};
		_.K4 = class {
			constructor() {
				this.qe = _.M(!1);
				this.xn = _.M(null);
				this.Ui = new Audio();
				oAd(this);
			}
			pqa(a) {
				var b = this;
				return _.x(function* () {
					var c = b.xn(), d = b.qe();
					c = d && c === a;
					d && b.pause();
					c || (yield b.play(a));
				});
			}
			play(a) {
				var b = this;
				return _.x(function* () {
					b.qe.set(!0);
					b.xn.set(a);
					b.Ui.src = a;
					b.Ui.load();
					try {
						yield b.Ui.play();
					} catch (c) {
						console.error("Failed to play audio", c), b.qe.set(!1), b.xn.set(null);
					}
				});
			}
			pause() {
				this.qe.set(!1);
				this.Ui.pause();
			}
			clear() {
				this.pause();
				this.xn.set(null);
				this.Ui.src = "";
				this.Ui.load();
			}
		};
		_.K4.J = function(a) {
			return new (a || _.K4)();
		};
		_.K4.sa = _.Cd({
			token: _.K4,
			factory: _.K4.J,
			wa: "root"
		});
		_.pAd = {};
		_.qAd = {};
		_.rAd = {};
		_.sAd = {};
		_.tAd = {};
		_.L4 = function(a, b, c) {
			var d = _.zf(() => Eyd()), e = b instanceof Promise ? _.zf(() => b) : _.mf(b);
			return _.vf([
				d,
				e,
				c
			]).pipe(_.uf(([f, g, k]) => {
				if (g === void 0) return `${a} is not supported`;
				f.escape = a === "Python" ? Byd : a === "TypeScript" ? Cyd : Dyd;
				f = f.render(g, k != null ? k : {});
				a === "REST" && (f = f.replace(/,\s*\n(\s*[}\]])/g, "\n$1"));
				return f;
			}));
		};
		_.M4 = class {};
		_.M4.J = function(a) {
			return new (a || _.M4)();
		};
		_.M4.sa = _.Cd({
			token: _.M4,
			factory: _.M4.J,
			wa: "root"
		});
		_.N4 = function(a, b, c) {
			return _.x(function* () {
				var d = a.getLanguage(c), e, f;
				return (f = (e = (yield a.F.get()).find((g) => _.Lm(g, 1) === b && g.getLanguage() === d)) == null ? void 0 : e.Sb()) != null ? f : "";
			});
		};
		_.O4 = class {
			constructor() {
				this.A = _.m(_.Zq);
				this.F = new _.Gpb({
					compute: () => Lyd(this.A).then((a) => _.mj(a, Kyd, 2, _.oj())),
					tza: 3e5
				});
			}
			getLanguage(a) {
				switch (a) {
					case "Python": return 1;
					case "TypeScript": return 2;
					case "Java": return 3;
					case "Go": return 4;
					case ".NET": return 5;
					case "REST": return 7;
					default: _.sb(a, void 0);
				}
			}
		};
		_.O4.J = function(a) {
			return new (a || _.O4)();
		};
		_.O4.sa = _.Cd({
			token: _.O4,
			factory: _.O4.J,
			wa: "root"
		});
		var uAd = (a, b) => b.id, vAd = class {
			constructor() {
				this.S = _.Dk;
				this.ve = { Epb: 255335 };
				this.Zv = _.Wy;
				this.A = _.m(_.Op);
				this.Olb = _.m(_.Ou);
				this.Qc = _.m(_.BM);
				this.AHa = _.W(() => _.ryb.filter((a) => a.Bo || a.sza && !a.sza(this.A) ? !1 : !0));
			}
		};
		vAd.J = function(a) {
			return new (a || vAd)();
		};
		vAd.ka = _.u({
			type: vAd,
			da: [["ms-gallery-panel"]],
			ha: 7,
			ia: 3,
			la: () => [
				[1, "header"],
				[1, "no-select"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close",
					1,
					"close-button",
					3,
					"click",
					"iconName"
				],
				[1, "card-container"],
				[
					"role",
					"link",
					"tabindex",
					"0",
					1,
					"prompt-card",
					3,
					"ariaLabel",
					"routerLink",
					"ve",
					"veClick"
				],
				[
					"role",
					"link",
					"tabindex",
					"0",
					1,
					"prompt-card",
					3,
					"click",
					"ariaLabel",
					"routerLink",
					"ve",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "h2", 1), _.R(2, "Prompts gallery"), _.H(), _.F(3, "button", 2), _.J("click", function() {
					b.Qc.Vz("GALLERY", !1);
				}), _.H()(), _.F(4, "div", 3), _.Ah(5, Fyd, 2, 7, "button", 4, uAd), _.H());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac), _.y(), _.P("auto-fill", b.AHa().length <= 2), _.y(), _.Bh(b.AHa()));
			},
			dependencies: [
				_.Yy,
				_.RM,
				_.sA,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;background:var(--color-canvas-background);border-radius:20px}.card-container[_ngcontent-%COMP%]{overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:4px 16px}.prompt-card[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;background-color:var(--color-gallery-chip-background);border:0;border-radius:12px;color:var(--color-on-surface);cursor:pointer;margin:8px 0;padding:16px 12px;text-align:left;width:100%}.header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 16px 0}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}"]
		});
		var wAd;
		wAd = () => ["COLLAPSED", "HIDDEN"];
		_.P4 = class {
			constructor() {
				this.ve = {
					s2b: 255334,
					t2b: 255336
				};
				this.Qc = _.m(_.BM);
				this.rb = _.m(_.Qp);
				_.m(_.Op);
				this.state = this.Qc.ea;
				this.Q2a = _.M(!1);
				_.W(() => this.rb.af() === 14);
			}
			Rb() {
				this.Q2a.set(!0);
			}
			vJ() {
				this.Qc.vJ();
			}
		};
		_.P4.J = function(a) {
			return new (a || _.P4)();
		};
		_.P4.ka = _.u({
			type: _.P4,
			da: [["ms-right-side-panel"]],
			fc: ["*"],
			ha: 1,
			ia: 2,
			la: [[1, "content-container"]],
			template: function(a, b) {
				a & 1 && (_.Xh(), _.B(0, Iyd, 3, 2, "div", 0));
				a & 2 && _.C(_.zi(1, wAd).includes(b.state()) ? -1 : 0);
			},
			dependencies: [
				vAd,
				_.wI,
				_.IC,
				_.Cz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-moz-box-sizing:border-box;box-sizing:border-box;height:100%}@media screen and (max-width:960px){[_nghost-%COMP%]{position:fixed;right:0;top:0;bottom:0;z-index:5}}.content-container[_ngcontent-%COMP%]{width:300px}.toggles-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:10px}@media screen and (max-width:960px){.toggles-container[_ngcontent-%COMP%]{display:none}}"],
			data: { animation: [_.qm("slideInOut", [_.um(":enter", [_.sm({
				opacity: 0,
				width: 0
			}), _.rm("200ms ease-in", _.sm({
				opacity: 1,
				width: "*"
			}))]), _.um(":leave", [_.rm("200ms ease-in", _.sm({
				opacity: 0,
				width: 0
			}))])])] }
		});
		var fBd, iBd, jBd, kBd, lBd, mBd, nBd, oBd, pBd, qBd, rBd, sBd, tBd, uBd, vBd, wBd, xBd, yBd, zBd, ABd, BBd, CBd, DBd, EBd, GBd, IBd, JBd, KBd, MBd, OBd, QBd, SBd, UBd, WBd, XBd, YBd, ZBd, $Bd, aCd, bCd, cCd, dCd, eCd, fCd, gCd, hCd, iCd, jCd, kCd, lCd, mCd, nCd, oCd, pCd, qCd, rCd, sCd, tCd, uCd, vCd, wCd, xCd, zCd, ACd, BCd, CCd, DCd, yCd, FCd, S4, HCd, JCd, KCd, LCd, MCd, NCd, OCd;
		_.cBd = function(a) {
			if (a) {
				a = a.split(":").map(Number);
				if (a.length === 2) a = a[0] * 60 + a[1];
				else if (a.length === 1) a = a[0];
				else return;
				return isNaN(a) ? void 0 : a;
			}
		};
		_.dBd = function(a, b, c) {
			b = b != null ? b : 0;
			a.currentTime < b ? a.currentTime = b : c === void 0 || a.currentTime < c || (a.pause(), a.currentTime = b);
		};
		_.eBd = function(a, b, c) {
			b = b != null ? b : 0;
			a.currentTime >= b && (c === void 0 || a.currentTime < c) || (a.currentTime = b);
		};
		fBd = function(a) {
			if (a && (a = a.match(/^(?:(\d+)h)?\s*(?:(\d+)m)?\s*(?:(\d+)s)?$/))) return (a[1] ? Number(a[1]) : 0) * 3600 + (a[2] ? Number(a[2]) : 0) * 60 + (a[3] ? Number(a[3]) : 0);
		};
		_.gBd = function(a) {
			if (a === void 0 || a < 0) return "";
			if (a === 0) return "0s";
			var b = Math.floor(a / 3600), c = a % 3600;
			a = Math.floor(c / 60);
			c = Number((c % 60).toFixed(1));
			c >= 60 && (c = 0, a++);
			a >= 60 && (a = 0, b++);
			var d = "";
			b > 0 && (d += `${b}h`);
			a > 0 && (d += `${a}m`);
			if (c > 0 || d === "") d += `${c}s`;
			return d;
		};
		_.hBd = function() {
			return _.wa() && !_.za();
		};
		iBd = function(a) {
			a & 1 && _.Fh(0, "audio", 5);
			a & 2 && (a = _.K(), _.Ch("src", a.Hj()));
		};
		jBd = function(a) {
			a & 1 && (_.F(0, "div", 5), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.QHa));
		};
		kBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 7);
				_.J("click", function() {
					_.q(b);
					_.K();
					var c = _.O(5);
					c.Hj.set(void 0);
					c.lda.emit("");
					return _.t();
				});
				_.R(1);
				_.H();
				_.F(2, "button", 8);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.c4());
				});
				_.R(3);
				_.H();
			}
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.W8a, " "), _.y(2), _.S(" ", a.gbb, " "));
		};
		lBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 9);
				_.J("click", function() {
					_.q(b);
					_.K();
					var c = _.O(5);
					return _.t(c.zLa());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.lk() ? "Stop recording" : "Start recording", " "));
		};
		mBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "protoshop", 8, 0);
				_.J("valueEmitted", function(c) {
					_.q(b);
					_.K().a2a.set(c);
					return _.t();
				})("protoChange", function() {
					_.q(b);
					var c = _.O(1);
					return _.t(c.refresh());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("type", a.Gka())("value", a.Fjb)("format", a.R2)("styleAttrs", a.nta)("frameAttrs", a.S2)("refreshIframeOnUnsupportedInputChanges", !0));
		};
		nBd = function(a) {
			a & 1 && (_.F(0, "div", 3), _.I(1, "iframe", 10), _.H());
			a & 2 && (a = _.K(), _.E("@expandCollapse", a.zC() ? "expanded" : "collapsed"), _.y(), _.E("src", a.i2(), _.sg));
		};
		oBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "video", 11, 0);
				_.J("timeupdate", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.HI());
				})("play", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GI());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("src", a.X1(), _.rg)("@expandCollapse", a.X1() ? "expanded" : "collapsed"));
		};
		pBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-input-field", 12);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K();
					typeof c === "string" && (d.d2a.set(c), c = _.Co(c), d.videoId.set(c != null ? c : void 0), c && (d.thumbnailUrl.set(void 0), d.videoDurationSeconds.set(void 0)));
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("type", a.RO)("value", a.d2a()));
		};
		qBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-input-field", 13);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K();
					c = (c != null ? c : "").toString();
					d.CKa.set(c);
					d.startTime.set(fBd(c));
					return _.t();
				});
				_.H();
				_.F(1, "ms-input-field", 14);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K();
					c = (c != null ? c : "").toString();
					d.jza.set(c);
					d.endTime.set(fBd(c));
					return _.t();
				});
				_.H();
				_.F(2, "ms-input-field", 15);
				_.J("valueChange", function(c) {
					_.q(b);
					_.K().fps.set(c === null ? void 0 : Number(c));
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("type", a.RO)("value", a.CKa()), _.y(), _.E("type", a.RO)("value", a.jza()), _.y(), _.E("type", a.mlb)("max", 24)("value", a.fps()));
		};
		rBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1, "Invalid start time format. Use hours, minutes, and seconds (e.g., \"1h1m10s\" or \"70s\")."), _.H());
		};
		sBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1, "Invalid end time format. Use hours, minutes, and seconds (e.g., \"1h1m10s\" or \"70s\")."), _.H());
		};
		tBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1, "End time must be after start time."), _.H());
		};
		uBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1), _.H());
			if (a & 2) {
				a = _.K(2);
				_.y();
				let b;
				_.S("End time must be within the video duration (1 - ", (b = a.videoDurationSeconds()) != null ? b : "N/A", "s).");
			}
		};
		vBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1), _.H());
			if (a & 2) {
				a = _.K(2);
				_.y();
				let b;
				_.S("Start time must be within the video duration (0 - ", (b = a.videoDurationSeconds()) != null ? b : "N/A", "s).");
			}
		};
		wBd = function(a) {
			a & 1 && (_.F(0, "p", 16), _.R(1, "FPS must be a positive number with max value 24."), _.H());
		};
		xBd = function(a) {
			a & 1 && (_.B(0, rBd, 2, 0, "p", 16), _.B(1, sBd, 2, 0, "p", 16), _.B(2, tBd, 2, 0, "p", 16), _.B(3, uBd, 2, 1, "p", 16), _.B(4, vBd, 2, 1, "p", 16), _.B(5, wBd, 2, 0, "p", 16));
			a & 2 && (a = _.K(), _.C(a.HIb() ? 0 : -1), _.y(), _.C(a.zHb() ? 1 : -1), _.y(), _.C(a.AHb() ? 2 : -1), _.y(), _.C(a.M2a() ? 3 : -1), _.y(), _.C(a.z3a() ? 4 : -1), _.y(), _.C(a.IHb() ? 5 : -1));
		};
		yBd = function(a) {
			return _.x(function* () {
				return new Promise((b, c) => {
					var d = new Image();
					d.onload = () => _.x(function* () {
						var e = {
							base64Uri: "",
							width: 0,
							height: 0
						}, f = document.createElement("canvas"), g = d.width, k = d.height;
						if (g > 1280 || k > 1280) g > k ? (k *= 1280 / g, g = 1280) : (g *= 1280 / k, k = 1280);
						f.width = g;
						f.height = k;
						var p = f.getContext("2d");
						if (!p) return c("Unable to get 2D context..."), e;
						p.fillStyle = "white";
						p.fillRect(0, 0, g, k);
						p.drawImage(d, 0, 0, g, k);
						e.base64Uri = f.toDataURL("image/jpeg");
						e.width = f.width;
						e.height = f.height;
						b(e);
						return e;
					});
					d.crossOrigin = "anonymous";
					d.src = a;
				});
			});
		};
		zBd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 7);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(2);
					return _.t(e.LN(d));
				});
				_.I(1, "img", 8);
				_.F(2, "span", 9);
				_.I(3, "span", 10);
				_.H();
				_.F(4, "span", 11);
				_.R(5);
				_.H();
				_.F(6, "span", 12);
				_.R(7);
				_.H()();
			}
			a & 2 && (a = b.V, b = _.K(2), _.P("selected", b.ee(a)), _.vh("aria-label", "Select video " + a.name), _.y(), _.E("src", _.wi(a.thumbnailUrl), _.rg)("alt", a.id), _.y(2), _.E("iconName", b.S.Zf), _.y(2), _.U(a.duration), _.y(2), _.U(a.name));
		};
		ABd = function(a) {
			a & 1 && (_.F(0, "div", 4), _.R(1, "Videos"), _.H(), _.F(2, "div", 5), _.Ah(3, zBd, 8, 9, "button", 6, _.zh), _.H());
			a & 2 && (a = _.K(), _.y(3), _.Bh(a.Bg));
		};
		BBd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 14);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(3);
					return _.t(e.LN(d));
				});
				_.I(1, "img", 15);
				_.F(2, "span", 9);
				_.I(3, "span", 10);
				_.H()();
			}
			if (a & 2) {
				a = b.V;
				b = _.K().V;
				let c = _.K(2);
				_.P("selected", c.ee(a));
				_.vh("aria-label", "Select image from " + b.name);
				_.y();
				_.E("src", _.wi(a.url), _.rg)("alt", b.name);
				_.y(2);
				_.E("iconName", c.S.Zf);
			}
		};
		CBd = function(a, b) {
			a & 1 && (_.F(0, "div", 4), _.R(1), _.H(), _.F(2, "div", 5), _.Ah(3, BBd, 4, 7, "button", 13, _.zh), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a.name), _.y(2), _.Bh(a.images));
		};
		DBd = function(a) {
			a & 1 && _.Ah(0, CBd, 5, 1, null, null, _.zh);
			a & 2 && (a = _.K(), _.Bh(a.categories));
		};
		EBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 11);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.DGa());
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3);
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(3), c;
				_.vh("aria-label", (c = b == null ? null : b.Ag) != null ? c : "");
				let d;
				_.E("matTooltip", (d = b == null ? null : b.Ag) != null ? d : "");
				_.y();
				_.E("iconName", a.S.DRIVE);
				_.y(2);
				let e;
				_.U((e = b == null ? null : b.buttonLabel) != null ? e : "Drive");
			}
		};
		GBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.O(5);
					return _.t(c.click());
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3);
				_.H();
				_.F(4, "input", 14, 1);
				_.J("change", function() {
					_.q(b);
					var c = _.O(5), d = _.K();
					return _.t(FBd(d, c));
				})("click", function() {
					_.q(b);
					var c = _.O(5);
					_.K();
					c.value = "";
					return _.t();
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(4), c;
				_.vh("aria-label", (c = b == null ? null : b.Ag) != null ? c : "");
				let d;
				_.E("matTooltip", (d = b == null ? null : b.Ag) != null ? d : "");
				_.y();
				_.E("iconName", a.S.UPLOAD);
				_.y(2);
				let e;
				_.U((e = b == null ? null : b.buttonLabel) != null ? e : "Upload files");
				_.y();
				_.E("accept", a.Iwb());
				let f;
				_.wh("multiple", ((f = b == null ? null : b.xva) != null ? f : 1) ? "" : null);
			}
		};
		IBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(HBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3);
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(5), c;
				_.vh("aria-label", (c = b == null ? null : b.Ag) != null ? c : "");
				let d;
				_.E("matTooltip", (d = b == null ? null : b.Ag) != null ? d : "");
				_.y();
				_.E("iconName", a.S.CPa);
				_.y(2);
				let e;
				_.U((e = b == null ? null : b.buttonLabel) != null ? e : "Record Audio");
			}
		};
		JBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 17);
				_.J("click", function() {
					var c;
					_.q(b);
					var d = _.K(2);
					return _.t(d.BGa(!0, !d.M8 && !((c = d.wf()) == null || !c.Ama)));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3);
				_.H()();
			}
			if (a & 2) {
				a = _.K(2);
				let b = _.Vh(6), c;
				_.vh("aria-label", (c = b == null ? null : b.Ag) != null ? c : "");
				let d;
				_.E("matTooltip", (d = b == null ? null : b.Ag) != null ? d : "");
				_.y();
				_.E("iconName", a.S.RPa);
				_.y(2);
				let e;
				_.U((e = b == null ? null : b.buttonLabel) != null ? e : "Camera");
			}
		};
		KBd = function(a) {
			a & 1 && _.B(0, JBd, 4, 4, "button", 16);
			if (a & 2) {
				let b;
				a = _.K();
				_.C(((b = a.wf()) == null ? 0 : b.k$) ? 0 : -1);
			}
		};
		MBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 18);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(LBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3);
				_.H()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.Vh(7), c;
				_.vh("aria-label", (c = b == null ? null : b.Ag) != null ? c : "");
				let d;
				_.E("matTooltip", (d = b == null ? null : b.Ag) != null ? d : "");
				_.y();
				_.E("iconName", a.S.c3);
				_.y(2);
				let e;
				_.U((e = b == null ? null : b.buttonLabel) != null ? e : "YouTube Video");
			}
		};
		OBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(NBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3, "Sample Media");
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.cq));
		};
		QBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 20);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(PBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3, "Code Search");
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Lm));
		};
		SBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 21);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(RBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3, "Critique");
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.iy));
		};
		UBd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 22);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(TBd(c));
				});
				_.I(1, "span", 12);
				_.F(2, "span");
				_.R(3, "Add Proto message");
				_.H()();
			}
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.rOa));
		};
		WBd = function(a) {
			a & 1 && (_.ph(0, UBd, 4, 1), _.qh(1, 0, VBd), _.rh());
		};
		XBd = function(a, b) {
			return b.split(",").map((c) => c.trim()).some((c) => c.endsWith("/*") ? (c = c.slice(0, c.indexOf("/")), a.startsWith(`${c}/`)) : a === c);
		};
		YBd = function(a, b) {
			var c = a.lastIndexOf(".");
			if (c === -1) return !1;
			var d = `.${a.slice(c + 1).toLowerCase()}`;
			return b.split(",").map((e) => e.trim()).some((e) => e.startsWith(".") && e.toLowerCase() === d);
		};
		ZBd = function(a) {
			return a.split(",").map((b) => b.trim()).map((b) => b.endsWith("/*") ? b.slice(0, b.indexOf("/")) : b).join(", ");
		};
		$Bd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 4);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.haa());
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.YC));
		};
		aCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 4);
				_.J("click", function() {
					_.q(b);
					var c;
					(c = _.K(2).Ui()) == null || c.nativeElement.pause();
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Dea));
		};
		bCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "audio", 2, 0);
				_.J("play", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GI());
				})("pause", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Yma());
				})("ended", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Yma());
				});
				_.H();
				_.B(2, $Bd, 1, 1, "span", 3)(3, aCd, 1, 1, "span", 3);
			}
			a & 2 && (a = _.K(), _.E("src", a.Hj()), _.y(2), _.C(a.qe() ? 3 : 2));
		};
		cCd = function(a) {
			a & 1 && _.I(0, "span", 1);
			a & 2 && (a = _.K(), _.E("iconName", a.S.Pda));
		};
		dCd = function(a, b, c) {
			a = a === "READY";
			return c ? !a : !a || !(b === 1 || b === 2);
		};
		eCd = function(a) {
			a & 1 && _.I(0, "img", 0);
			a & 2 && (a = _.K(), _.E("src", a.thumbnail(), _.rg));
		};
		fCd = function(a) {
			a & 1 && _.I(0, "span", 1);
			a & 2 && (a = _.K(), _.E("iconName", a.S.DOCS));
		};
		gCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "img", 2);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.hN());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("alt", a.altText())("src", a.JQ(), _.rg));
		};
		hCd = function(a) {
			a & 1 && _.I(0, "span", 1);
			a & 2 && (a = _.K(), _.E("iconName", a.S.cq));
		};
		iCd = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(2), _.E("src", a.thumbnailUrl(), _.rg));
		};
		jCd = function(a) {
			a & 1 && _.I(0, "span", 2);
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Xsb));
		};
		kCd = function(a) {
			a & 1 && _.B(0, iCd, 1, 1, "img", 3)(1, jCd, 1, 1, "span", 2);
			a & 2 && (a = _.K(), _.C(a.thumbnailUrl() ? 0 : 1));
		};
		lCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "video", 4, 0);
				_.J("loadedmetadata", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.tT());
				})("timeupdate", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.HI());
				})("play", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GI());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("src", a.videoUrl(), _.rg));
		};
		mCd = function(a) {
			a & 1 && _.I(0, "span", 2);
			a & 2 && (a = _.K(), _.E("iconName", a.S.HPa));
		};
		nCd = function(a) {
			a & 1 && (_.Dh(0, "span", 0), _.R(1, "Loading..."), _.Eh());
		};
		oCd = function(a) {
			a & 1 && (_.Dh(0, "span", 1), _.R(1), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.U(a.errorMessage() || "Token count failed"));
		};
		pCd = function(a) {
			a & 1 && (_.Dh(0, "span", 2), _.R(1), _.Ei(2, "number"), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.si(" ", _.Gi(2, 2, a.tokenCount(), "1."), " token", a.tokenCount() === 1 ? "" : "s", " "));
		};
		qCd = function(a) {
			a & 1 && _.I(0, "ms-prompt-audio", 4);
			a & 2 && (a = _.K(2), _.E("promptMediaId", a.Yb()));
		};
		rCd = function(a) {
			a & 1 && _.I(0, "ms-prompt-file", 5);
			a & 2 && (a = _.K(2), _.E("promptMediaId", a.Yb())("disableTokenCount", a.wq()));
		};
		sCd = function(a) {
			a & 1 && _.I(0, "ms-prompt-image", 5);
			a & 2 && (a = _.K(2), _.E("promptMediaId", a.Yb())("disableTokenCount", a.wq()));
		};
		tCd = function(a) {
			a & 1 && _.I(0, "ms-prompt-video", 6);
			a & 2 && (a = _.K(2), _.E("promptMediaId", a.Yb())("isDisabled", a.yc()));
		};
		uCd = function(a) {
			a & 1 && _.I(0, "ms-prompt-video", 6);
			a & 2 && (a = _.K(2), _.E("promptMediaId", a.Yb())("isDisabled", a.yc()));
		};
		vCd = function(a) {
			a & 1 && (_.F(0, "span", 10), _.R(1, "Converting"), _.H());
		};
		wCd = function(a) {
			a & 1 && _.I(0, "ms-token-status", 11);
			a & 2 && (a = _.K(2), _.E("tokenCountStatus", a.Cb())("tokenCount", a.tokenCount())("errorMessage", a.errorMessage()));
		};
		xCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					switch (c.Gd()) {
						case "VIDEO":
						case "YOUTUBE":
							let d;
							(d = c.T7a()) == null || d.Lp();
					}
					return _.t();
				});
				_.H();
				_.I(1, "div", 16);
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Vs)("disabled", a.fDa()));
		};
		zCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 17);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2), d, e = (d = c.Wf()) == null ? void 0 : d.Xd;
					yCd(e) && (d = c.pea, e = _.xZb(e), _.CH(d, [d.aa(), e].filter(Boolean).join("\n\n")), c.pea.Dx(c.Yb()));
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.LOa));
		};
		ACd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 2)(1, "div", 3);
				_.B(2, qCd, 1, 1, "ms-prompt-audio", 4)(3, rCd, 1, 2, "ms-prompt-file", 5)(4, sCd, 1, 2, "ms-prompt-image", 5)(5, tCd, 1, 2, "ms-prompt-video", 6)(6, uCd, 1, 2, "ms-prompt-video", 6);
				_.H();
				_.F(7, "div", 7)(8, "span", 8);
				_.R(9);
				_.H();
				_.F(10, "div", 9);
				_.B(11, vCd, 2, 0, "span", 10);
				_.B(12, wCd, 1, 3, "ms-token-status", 11);
				_.H()();
				_.F(13, "div", 12);
				_.B(14, xCd, 2, 2);
				_.B(15, zCd, 1, 1, "button", 13);
				_.F(16, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					c.pea.Dx(c.Yb());
					return _.t();
				});
				_.H()()();
			}
			if (a & 2) {
				let b, c;
				a = _.K();
				_.P("has-error", a.hasError());
				_.y(2);
				_.C((b = a.Gd()) === a.ZO.l2 ? 2 : b === a.ZO.FILE ? 3 : b === a.ZO.cq ? 4 : b === a.ZO.VIDEO ? 5 : b === a.ZO.YOUTUBE ? 6 : -1);
				_.y(6);
				_.E("matTooltip", a.PS());
				_.y();
				_.U(a.PS());
				_.y(2);
				_.C(((c = a.Wf()) == null ? null : c.status) === a.Fea.Wda ? 11 : -1);
				_.y();
				_.C(a.wq() ? -1 : 12);
				_.y(2);
				_.C(a.Gd() === a.ZO.VIDEO || a.Gd() === a.ZO.YOUTUBE ? 14 : -1);
				_.y();
				_.C(a.R4() && a.XHb() ? 15 : -1);
				_.y();
				_.E("iconName", a.S.ac);
			}
		};
		BCd = function(a) {
			a & 1 && _.I(0, "img", 18);
			a & 2 && (a = _.K(2), _.E("src", a.TI(), _.rg)("alt", a.aNb()));
		};
		CCd = function(a) {
			a & 1 && (_.F(0, "div", 19), _.I(1, "span", 24), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.nA));
		};
		DCd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 1);
				_.B(1, BCd, 1, 2, "img", 18)(2, CCd, 2, 1, "div", 19);
				_.F(3, "div", 20)(4, "div", 21)(5, "ms-add-media-button", 22);
				_.J("imageAdded", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.zBa.emit(c));
				});
				_.H();
				_.F(6, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Dx());
				});
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(), _.C(a.TI() ? 1 : 2), _.y(4), _.E("addMediaButtonConfig", a.MNb())("allowMenuToOpen", !0), _.y(), _.E("iconName", a.S.ni)("matTooltip", a.z8a()), _.vh("aria-label", a.z8a()));
		};
		yCd = function(a) {
			return !(a == null || !a.startsWith("data:text/"));
		};
		_.fK.prototype.vra = _.ca(183, function(a) {
			var b = _.Yn();
			_.dK(this, {
				ob: "youtube",
				id: b,
				role: "user",
				timestamp: Date.now(),
				Nd: {
					videoId: a.videoId,
					zg: a.startTime,
					ph: a.endTime,
					fps: a.fps
				},
				Cb: 0,
				tokenCount: void 0
			});
			this.A.qd.set([...this.A.qd(), b]);
			return b;
		});
		_.fK.prototype.roa = _.ca(182, function(a) {
			var b = _.Yn();
			_.dK(this, {
				ob: "video",
				id: b,
				role: "user",
				timestamp: Date.now(),
				he: {
					Ni: a.Ni,
					name: a.name
				}
			});
			this.A.qd.set([...this.A.qd(), b]);
		});
		_.fK.prototype.qoa = _.ca(181, function(a) {
			var b = _.Yn();
			_.dK(this, {
				ob: "image",
				id: b,
				role: "user",
				timestamp: Date.now(),
				Ve: { hk: a.hk }
			});
			this.A.qd.set([...this.A.qd(), b]);
		});
		_.R4 = "application/vnd.google-apps.audio application/vnd.google-apps.document application/vnd.google-apps.drive-sdk application/vnd.google-apps.drawing application/vnd.google-apps.file application/vnd.google-apps.folder application/vnd.google-apps.form application/vnd.google-apps.fusiontable application/vnd.google-apps.jam application/vnd.google-apps.mail-layout application/vnd.google-apps.map application/vnd.google-apps.photo application/vnd.google-apps.presentation application/vnd.google-apps.script application/vnd.google-apps.shortcut application/vnd.google-apps.site application/vnd.google-apps.spreadsheet application/vnd.google-apps.unknown application/vnd.google-apps.video".split(" ");
		_.ECd = function(a, b) {
			var c;
			b = ((c = b.split(".").pop()) != null ? c : "").toLowerCase();
			return _.R4.includes(a) || _.Bvb.includes(a) || "text/plain" === a || "application/zip" === a || a.startsWith("audio/") || a.startsWith("video/") || _.Eo.includes(b);
		};
		FCd = function(a, b, c, d) {
			return _.oH(a, "client").pipe(_.eh(() => {
				a.R.info("Text from this file will be added to the prompt.");
			}), _.ch(() => _.pH(gapi.client.drive.files.copy({
				fileId: b,
				fields: "id, mimeType, name, webViewLink",
				resource: {
					mimeType: d,
					name: c
				}
			}))), _.Rla((e) => _.Hvb(a, e)), _.Qg(), _.uf((e) => ({
				name: "filePicked",
				data: e.result
			})));
		};
		_.GCd = function(a, b, c, d) {
			var e = new Date(`${new Date()} UTC`).toISOString().slice(0, 16).replace("T", " ");
			d = _.Dvb.includes(d) ? "application/vnd.google-apps.spreadsheet" : _.Cvb.includes(d) ? "application/vnd.google-apps.presentation" : "application/vnd.google-apps.document";
			return FCd(a, c, `${b} (Converted - ${e})`, d);
		};
		S4 = function(a, ...b) {
			return b.map(a.A).filter((c) => c !== void 0);
		};
		HCd = function(a) {
			if (a.categories) return a.categories;
			a.categories = [
				{
					name: "Animal",
					images: S4(a, "animal1", "animal2", "animal3", "animal4", "animal5")
				},
				{
					name: "Architecture",
					images: S4(a, "architecture1", "architecture2", "architecture3", "architecture4", "architecture5")
				},
				{
					name: "Nature",
					images: S4(a, "nature1", "nature2", "nature3", "nature4", "nature5")
				},
				{
					name: "Flower",
					images: S4(a, "flower1", "flower2", "flower3", "flower4", "flower5")
				},
				{
					name: "Food",
					images: S4(a, "food1", "food2", "food3", "food4", "food5")
				},
				{
					name: "Objects",
					images: S4(a, "objects1", "objects2", "objects3", "objects4", "objects5")
				},
				{
					name: "Transportation",
					images: S4(a, "transportation1", "transportation2", "transportation3", "transportation4", "transportation5")
				},
				{
					name: "Space",
					images: S4(a, "space1", "space2", "space3", "space4", "space5")
				}
			];
			return a.categories;
		};
		_.ICd = function(a, b) {
			return _.x(function* () {
				var c = yield _.rH(a.F, b), d, e = (d = yield c == null ? void 0 : c.blob()) != null ? d : null;
				return (c = (c == null ? void 0 : c.status) === 404 ? "Image does not exist or you do not have permission to access it." : _.hAb(e)) ? (a.A.error(c), Promise.reject(c)) : e;
			});
		};
		JCd = function(a, b) {
			return _.x(function* () {
				for (let c of a.A.Ob()) c.Kc.set([...c.Kc(), b.id]), c.Ty.set(b.id);
				yield _.bK(a, { chunk: b });
			});
		};
		KCd = function(a, b) {
			_.x(function* () {
				var c = _.Yn(), d = _.Nud(b.filePath, b.fileContent);
				c = Object.assign({}, {
					ob: "code_search",
					id: c,
					role: "user",
					timestamp: Date.now(),
					Ac: {
						url: "",
						mimeType: "text/plain",
						Pb: _.ho(new TextEncoder().encode(d).buffer)
					}
				}, b.tokenCount !== void 0 ? {
					tokenCount: b.tokenCount,
					Cb: 1
				} : {});
				_.dK(a, c);
				yield JCd(a, c);
			});
		};
		LCd = function(a, b) {
			_.x(function* () {
				var c = _.Yn();
				var d = b.f5;
				d = _.Mud({
					type: "changelist",
					cl_number: b.Cy.toString()
				}) + d;
				c = {
					ob: "critique",
					id: c,
					role: "user",
					timestamp: Date.now(),
					Ac: {
						url: "",
						mimeType: "text/plain",
						Pb: _.ho(new TextEncoder().encode(d).buffer)
					}
				};
				_.dK(a, c);
				yield JCd(a, c);
			});
		};
		MCd = {
			oob: "PREPARING",
			Wda: "CONVERTING",
			qo: "READY",
			ERROR: "ERROR"
		};
		NCd = {
			FILE: "FILE",
			cq: "IMAGE",
			l2: "AUDIO",
			VIDEO: "VIDEO",
			YOUTUBE: "YOUTUBE"
		};
		_.T4 = {
			HV: 0,
			qo: 1,
			ERROR: 2,
			0: "FETCHING",
			1: "READY",
			2: "ERROR"
		};
		OCd = function(a, b) {
			a.Sc() !== b && (a.Sc.set(b), a.YYa.emit(b));
		};
		_.U4 = class {
			constructor() {
				this.rv = _.V(!1);
				this.o$ = _.Ki();
				this.YYa = _.Ki();
				this.WX = 0;
				this.Sc = _.M(!1);
				_.Fk([this.rv], () => {
					this.rv() && OCd(this, !1);
				});
			}
			kT(a) {
				!this.rv() && this.hasFiles(a) && (a.preventDefault(), a.stopPropagation());
			}
			I$(a) {
				!this.rv() && this.hasFiles(a) && (a.preventDefault(), a.stopPropagation(), this.WX--, this.WX <= 0 && (this.WX = 0, OCd(this, !1)));
			}
			Wt(a) {
				!this.rv() && this.hasFiles(a) && (a.preventDefault(), a.stopPropagation(), this.WX = 0, OCd(this, !1), a.dataTransfer && (a = [...a.dataTransfer.items].filter((b) => b.kind === "file").map((b) => b.getAsFile()), a.length > 0 && this.o$.emit(a)));
			}
			hasFiles(a) {
				var b, c;
				return (c = (b = a.dataTransfer) == null ? void 0 : b.types.includes("Files")) != null ? c : !1;
			}
		};
		_.U4.J = function(a) {
			return new (a || _.U4)();
		};
		_.U4.Oa = _.We({
			type: _.U4,
			da: [[
				"",
				"msGlobalFileDragDrop",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("dragenter", function(c) {
					!b.rv() && b.hasFiles(c) && (c.preventDefault(), c.stopPropagation(), b.WX++, b.WX === 1 && OCd(b, !0));
				}, _.I0)("dragover", function(c) {
					return b.kT(c);
				}, _.I0)("dragleave", function(c) {
					return b.I$(c);
				}, _.I0)("drop", function(c) {
					return b.Wt(c);
				}, _.I0);
			},
			inputs: { rv: [1, "msDropDisabled"] },
			outputs: {
				o$: "msDrop",
				YYa: "draggingChange"
			}
		});
		var PCd = ["recordingIndicatorRing"], QCd = function(a) {
			var b;
			(b = a.A) == null || b.getTracks().forEach((d) => {
				d.stop();
			});
			a.A = null;
			var c;
			(c = a.F) == null || c.stop();
			a.F = null;
			a.H.suspend();
			a.volume.set(0);
			a.R.next();
		}, RCd = function(a) {
			a.I.getByteFrequencyData(a.U);
			var b = a.U.reduce((c, d) => c + d, 0) / a.X * 10;
			a.volume.set(b);
			a.aa.next(b);
			a.window.requestAnimationFrame(() => {
				RCd(a);
			});
		}, TCd = function(a) {
			a.aa.pipe(_.dh(a.R), _.nO(100)).subscribe((b) => {
				SCd(a, b);
			});
		}, UCd = function(a) {
			_.x(function* () {
				yield a.H.resume();
				try {
					a.A = yield navigator.mediaDevices.getUserMedia({ audio: !0 });
				} catch (b) {
					if (b instanceof DOMException && b.name === "NotFoundError") {
						a.lk.set(!1);
						a.ea.error("No recording devices available.");
						a.lda.emit("");
						return;
					}
				}
				a.A && (a.PHa(a.A), a.H.createMediaStreamSource(a.A).connect(a.I), RCd(a));
				a.lda.emit("");
				TCd(a);
			});
		}, SCd = function(a, b) {
			if (!(b < 15)) {
				var c = 2 + (b - 15) * 3 / 55, d = document.createElement("div");
				d.classList.add("volume-circle");
				d.style.border = "2px solid var(--color-recorder-active)";
				a.i8a().nativeElement.appendChild(d);
				requestAnimationFrame(() => {
					d.animate([{
						transform: `translate(-50%, -50%) scale(${c}, ${c})`,
						opacity: "0"
					}], {
						duration: 300,
						iterations: 1,
						easing: "ease-in-out"
					}).finished.then(() => void d.remove());
				});
			}
		}, VCd = class {
			constructor() {
				this.i8a = _.Ni.required("recordingIndicatorRing");
				this.lda = _.Ki();
				this.Rcb = _.Ki();
				this.window = _.m(_.Sn);
				this.ea = _.m(_.iC);
				this.H = new AudioContext();
				this.I = this.H.createAnalyser();
				this.X = this.I.frequencyBinCount;
				this.U = new Uint8Array(this.X);
				this.audioData = [];
				this.A = null;
				this.R = new _.Wg();
				this.F = null;
				this.aa = new _.ml(0);
				this.volume = _.M(0);
				this.lk = _.M(!1);
				this.Hj = _.M();
				this.I.fftSize = 128;
				_.Fk([this.lk], () => {
					var a = this.lk();
					this.Rcb.emit(a);
				});
			}
			Ba() {
				this.R.next();
				this.R.complete();
			}
			zLa() {
				this.lk.update((a) => !a);
				this.lk() ? UCd(this) : QCd(this);
			}
			PHa(a) {
				this.F = new MediaRecorder(a);
				this.F.start();
				this.F.addEventListener("dataavailable", (b) => {
					this.audioData.push(b.data);
				});
				this.F.addEventListener("stop", () => {
					var b = this;
					return _.x(function* () {
						var c = new Blob(b.audioData, { type: _.hBd() ? "audio/mp4" : "audio/ogg" }), d = new Blob(b.audioData, { type: "audio/ogg" });
						b.audioData = [];
						c = _.ld(c);
						d = yield _.eo(d);
						b.Hj.set(c);
						b.lda.emit(d);
					});
				});
			}
		};
		VCd.J = function(a) {
			return new (a || VCd)();
		};
		VCd.ka = _.u({
			type: VCd,
			da: [["ms-mic-audio-canvas"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.i8a, PCd, 5);
				a & 2 && _.ki();
			},
			outputs: {
				lda: "updateAudioDataBase64",
				Rcb: "updateIsRecording"
			},
			ha: 6,
			ia: 3,
			la: [
				["recordingIndicatorRing", ""],
				[1, "recording-indicator-container"],
				[1, "recording-outer-ring"],
				[1, "recording-pulse"],
				[1, "recording-indicator"],
				[
					"controls",
					"",
					1,
					"audio-player",
					3,
					"src"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div", 1)(1, "div", 2, 0), _.Fh(3, "div", 3)(4, "div", 4), _.Eh()(), _.B(5, iBd, 1, 1, "audio", 5));
				a & 2 && (_.P("recording", b.lk()), _.y(5), _.C(b.Hj() ? 5 : -1));
			},
			dependencies: [_.xC, _.OD],
			styles: [".recording-indicator-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:150px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.recording-indicator-container[_ngcontent-%COMP%]   .recording-outer-ring[_ngcontent-%COMP%]{background-color:var(--color-v3-surface-container-highest);border:none;border-radius:50%;display:block;height:64px;padding:0;position:relative;width:64px}.recording-indicator-container[_ngcontent-%COMP%]   .recording-pulse[_ngcontent-%COMP%]{background-color:var(--color-recorder-inactive);display:none;z-index:1}.recording-indicator-container[_ngcontent-%COMP%]   .recording-indicator[_ngcontent-%COMP%]{background-color:var(--color-recorder-inactive);z-index:2}.recording-indicator-container.recording[_ngcontent-%COMP%]   .recording-indicator[_ngcontent-%COMP%]{background-color:var(--color-recorder-active)}.recording-indicator-container.recording[_ngcontent-%COMP%]   .recording-pulse[_ngcontent-%COMP%]{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:_ngcontent-%COMP%_pulse;animation-name:_ngcontent-%COMP%_pulse;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;display:block}.audio-player[_ngcontent-%COMP%]{text-align:center;width:100%}@-webkit-keyframes _ngcontent-%COMP%_pulse{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}50%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.65);transform:translate(-50%,-50%) scale(1.65)}to{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}50%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1.65);transform:translate(-50%,-50%) scale(1.65)}to{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}}"]
		});
		var WCd = ["micAudioCanvas"], XCd = class {
			constructor() {
				this.data = _.m(_.qC);
				this.S = _.Dk;
				var a, b;
				this.W8a = (b = (a = this.data) == null ? void 0 : a.W8a) != null ? b : "Re-record";
				var c, d;
				this.gbb = (d = (c = this.data) == null ? void 0 : c.gbb) != null ? d : "Add to prompt";
				var e, f;
				this.GD = (f = (e = this.data) == null ? void 0 : e.GD) != null ? f : "Record new audio";
				var g, k;
				this.QHa = (k = (g = this.data) == null ? void 0 : g.QHa) != null ? k : "Audio recording will be added to your prompt";
				this.W4a = _.Ni.required("micAudioCanvas");
				this.Wa = _.m(_.kC);
				this.pga = _.M("");
				this.lk = _.M(!1);
				this.volume = _.M(0);
			}
			Rb() {
				_.jC(this.Wa).subscribe(() => {
					QCd(this.W4a());
				});
			}
			c4() {
				var a = this.pga.asReadonly();
				this.Wa.close(a());
			}
		};
		XCd.J = function(a) {
			return new (a || XCd)();
		};
		XCd.ka = _.u({
			type: XCd,
			da: [["ms-mic-audio-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.W4a, WCd, 5);
				a & 2 && _.ki();
			},
			ha: 10,
			ia: 4,
			la: [
				["micAudioCanvas", ""],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close",
					"matDialogClose",
					"",
					3,
					"iconName"
				],
				[
					3,
					"updateAudioDataBase64",
					"updateIsRecording"
				],
				["align", "end"],
				[1, "add-text"],
				"type button ms-button  data-test-recording-button ".split(" "),
				[
					"ms-button",
					"",
					"type",
					"button",
					"variant",
					"borderless",
					"data-test-restart-button",
					"",
					3,
					"click"
				],
				[
					"type",
					"button",
					"ms-button",
					"",
					"data-test-submit-button",
					"",
					3,
					"click"
				],
				[
					"type",
					"button",
					"ms-button",
					"",
					"data-test-recording-button",
					"",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1), _.R(1), _.I(2, "button", 2), _.H(), _.F(3, "mat-dialog-content")(4, "ms-mic-audio-canvas", 3, 0), _.J("updateAudioDataBase64", function(c) {
					b.pga.set(c);
				})("updateIsRecording", function(c) {
					b.lk.set(c);
				}), _.H()(), _.F(6, "mat-dialog-actions", 4), _.B(7, jBd, 2, 1, "div", 5), _.B(8, kBd, 4, 2)(9, lBd, 2, 1, "button", 6), _.H());
				a & 2 && (_.y(), _.S(" ", b.GD, " "), _.y(), _.E("iconName", b.S.ac), _.y(5), _.C(!b.pga() && b.QHa ? 7 : -1), _.y(), _.C(b.pga() ? 8 : 9));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				VCd
			],
			styles: [".add-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}"]
		});
		var YCd = new Uint8Array(0), ZCd = new TextDecoder("utf8").decode(YCd), $Cd = class {
			constructor() {
				this.RO = "text";
				this.Fjb = ZCd;
				this.Wa = _.m(_.kC);
				this.data = _.m(_.qC);
				this.Gka = _.M("");
				this.a2a = _.M(ZCd);
				this.k_ = _.M("");
				this.isValid = _.W(() => this.k_() !== "");
				this.R2 = "binary";
				this.nta = {
					viewerFontSize: 12,
					viewerCondensedSpacing: !0,
					editorFontSize: 12,
					editorCondensedSpacing: !0,
					heightConfig: "contentHeight"
				};
				this.S2 = { height: "100%" };
				this.z9a = new _.Wg();
				this.z9a.pipe(_.Pg(300)).subscribe((a) => {
					this.k_.set(a);
					this.Gka.set(a);
				});
			}
			xm() {
				if (this.k_()) {
					var a = this.a2a();
					a = new TextEncoder().encode(a);
					a = {
						k_: this.k_(),
						fNb: a
					};
					this.Wa.close(a);
				}
			}
			Ue() {
				this.Wa.close();
			}
		};
		$Cd.J = function(a) {
			return new (a || $Cd)();
		};
		$Cd.ka = _.u({
			type: $Cd,
			da: [["ms-custom-proto-dialog"]],
			ha: 13,
			ia: 4,
			la: [
				["element", ""],
				[1, "custom-proto-dialog"],
				["mat-dialog-title", ""],
				[
					"label",
					"Proto name",
					1,
					"full-row",
					3,
					"valueChange",
					"type",
					"value"
				],
				[
					"tabs",
					"editor,textproto",
					3,
					"type",
					"value",
					"format",
					"styleAttrs",
					"frameAttrs",
					"refreshIframeOnUnsupportedInputChanges"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"primary",
					3,
					"click",
					"disabled"
				],
				[
					"tabs",
					"editor,textproto",
					3,
					"valueEmitted",
					"protoChange",
					"type",
					"value",
					"format",
					"styleAttrs",
					"frameAttrs",
					"refreshIframeOnUnsupportedInputChanges"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1)(1, "h1", 2), _.R(2, "Add protobuffer message"), _.H(), _.F(3, "mat-dialog-content")(4, "p"), _.R(5, "Add a protobuffer message to your prompt."), _.H(), _.F(6, "ms-input-field", 3), _.J("valueChange", function(c) {
					typeof c === "string" && b.z9a.next(c);
				}), _.H(), _.B(7, mBd, 2, 6, "protoshop", 4), _.H(), _.F(8, "mat-dialog-actions", 5)(9, "button", 6), _.J("click", function() {
					return b.Ue();
				}), _.R(10, "Cancel"), _.H(), _.F(11, "button", 7), _.J("click", function() {
					return b.xm();
				}), _.R(12, "Save"), _.H()()());
				a & 2 && (_.y(6), _.E("type", b.RO)("value", b.Gka()), _.y(), _.C(b.Gka() ? 7 : -1), _.y(4), _.E("disabled", !b.isValid()));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.xC,
				_.uC,
				_.wC,
				_.vC,
				_.yA,
				_.nJ,
				_.mJ,
				_.mE
			],
			styles: [".custom-proto-dialog[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}mat-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}protoshop[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.dark-theme[_nghost-%COMP%]   protoshop[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   protoshop[_ngcontent-%COMP%]{-webkit-filter:invert(1) hue-rotate(180deg);filter:invert(1) hue-rotate(180deg)}"]
		});
		var aDd;
		aDd = ["videoPlayer"];
		_.V4 = class {
			constructor() {
				this.S = _.Dk;
				this.Dj = _.Ni("videoPlayer");
				this.Wa = _.m(_.kC);
				this.data = _.m(_.qC);
				this.mlb = "positive-number";
				this.RO = "text";
				this.yRb = _.M(this.data.type === "newYoutube");
				this.d2a = _.M(this.data.type === "newYoutube" && this.data.ura ? _.wBa(this.data.ura) : "");
				this.videoId = _.M(this.data.type === "existingYoutube" || this.data.type === "newYoutube" ? this.data.ura : void 0);
				this.thumbnailUrl = _.M(this.data.type === "existingYoutube" ? this.data.thumbnailUrl : void 0);
				this.X1 = _.M(this.data.type === "uploaded" ? this.data.X1 : void 0);
				this.videoDurationSeconds = _.M(this.data.videoDurationSeconds);
				this.startTime = _.M(this.data.VR);
				this.endTime = _.M(this.data.TR);
				this.fps = _.M(this.data.rZ);
				this.CKa = _.M(_.gBd(this.data.VR));
				this.jza = _.M(_.gBd(this.data.TR));
				this.zC = _.M(!1);
				var a;
				this.Xpa = _.M((a = this.data.Xpa) != null ? a : !0);
				this.i2 = _.W(() => {
					if (this.data.type === "sampleYoutube") return this.data.zeb;
					if (this.data.type === "existingYoutube" || this.data.type === "newYoutube" && this.videoId()) {
						let b = this.videoId();
						if (b) {
							let c = this.startTime(), d = this.endTime();
							return _.Do(b, c, d);
						}
					}
				});
				this.HIb = _.W(() => {
					var b = this.CKa();
					return b !== "" && fBd(b) === void 0;
				});
				this.zHb = _.W(() => {
					var b = this.jza();
					return b !== "" && fBd(b) === void 0;
				});
				this.z3a = _.W(() => {
					var b = this.startTime(), c = this.videoDurationSeconds();
					return b === void 0 || c === void 0 ? !1 : b < 0 || b > c;
				});
				this.M2a = _.W(() => {
					var b = this.endTime(), c = this.videoDurationSeconds();
					return b === void 0 || c === void 0 ? !1 : b < 1 || b > c;
				});
				this.isValid = _.W(() => {
					var b = this.startTime(), c = this.endTime(), d = this.fps();
					return this.data.type === "newYoutube" && !this.videoId() || b !== void 0 && c !== void 0 && b >= c || d !== void 0 && (d <= 0 || d > 24) || this.z3a() || this.M2a() ? !1 : !0;
				});
				this.AHb = _.W(() => {
					var b = this.startTime(), c = this.endTime();
					return b !== void 0 && c !== void 0 && b >= c;
				});
				this.IHb = _.W(() => {
					var b = this.fps();
					return b !== void 0 && (b <= 0 || b > 24);
				});
				_.Fk([this.i2], () => {
					this.i2() ? (this.zC.set(!1), queueMicrotask(() => {
						this.i2() && this.zC.set(!0);
					})) : this.zC.set(!1);
				});
				this.data.type === "existingYoutube" && this.i2() && this.zC.set(!0);
				this.data.type === "sampleYoutube" && this.zC.set(!0);
				_.Fk([this.startTime, this.Dj], () => {
					var b = this.startTime(), c = this.Dj();
					c && b !== void 0 && (c.nativeElement.currentTime = b);
				});
			}
			Rb() {
				var a = this.Dj();
				if (a) {
					a = a.nativeElement;
					let b = this.startTime();
					b !== void 0 && (a.currentTime = b);
				}
			}
			HI() {
				var a, b = (a = this.Dj()) == null ? void 0 : a.nativeElement;
				b && _.dBd(b, this.startTime(), this.endTime());
			}
			GI() {
				var a, b = (a = this.Dj()) == null ? void 0 : a.nativeElement;
				b && _.eBd(b, this.startTime(), this.endTime());
			}
			xm() {
				if (this.isValid()) {
					let a = {
						startTime: this.startTime(),
						endTime: this.endTime(),
						fps: this.fps()
					};
					this.videoId() && (a.videoId = this.videoId());
					this.Wa.close(a);
				}
			}
			Ue() {
				this.Wa.close();
			}
		};
		_.V4.J = function(a) {
			return new (a || _.V4)();
		};
		_.V4.ka = _.u({
			type: _.V4,
			da: [["ms-video-options-dialog"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Dj, aDd, 5);
				a & 2 && _.ki();
			},
			ha: 15,
			ia: 6,
			la: [
				["videoPlayer", ""],
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close",
					"matDialogClose",
					"",
					3,
					"iconName"
				],
				[1, "iframe-wrapper"],
				[
					"controls",
					"",
					3,
					"src"
				],
				[1, "video-options-container"],
				[
					"label",
					"YouTube URL",
					1,
					"full-row",
					3,
					"type",
					"value"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"primary",
					3,
					"click",
					"disabled"
				],
				[
					"title",
					"YouTube video player",
					"frameborder",
					"0",
					"allow",
					"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
					"referrerpolicy",
					"strict-origin-when-cross-origin",
					"allowfullscreen",
					"",
					3,
					"src"
				],
				[
					"controls",
					"",
					3,
					"timeupdate",
					"play",
					"src"
				],
				[
					"label",
					"YouTube URL",
					1,
					"full-row",
					3,
					"valueChange",
					"type",
					"value"
				],
				[
					"label",
					"Start Time (e.g., 1m10s)",
					3,
					"valueChange",
					"type",
					"value"
				],
				[
					"label",
					"End Time (e.g., 2m30s)",
					3,
					"valueChange",
					"type",
					"value"
				],
				[
					"label",
					"FPS (frames per second)",
					"placeholder",
					"Defaults to 1 FPS",
					1,
					"full-row",
					3,
					"valueChange",
					"type",
					"max",
					"value"
				],
				[1, "dialog-error"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1), _.R(1, " Video settings "), _.I(2, "button", 2), _.H(), _.F(3, "mat-dialog-content"), _.B(4, nBd, 2, 2, "div", 3)(5, oBd, 2, 2, "video", 4), _.F(6, "div", 5), _.B(7, pBd, 1, 2, "ms-input-field", 6), _.B(8, qBd, 3, 7), _.H(), _.B(9, xBd, 6, 6), _.H(), _.F(10, "mat-dialog-actions", 7)(11, "button", 8), _.J("click", function() {
					return b.Ue();
				}), _.R(12, "Cancel"), _.H(), _.F(13, "button", 9), _.J("click", function() {
					return b.xm();
				}), _.R(14, "Save"), _.H()());
				a & 2 && (_.y(2), _.E("iconName", b.S.ac), _.y(2), _.C(b.i2() ? 4 : b.X1() ? 5 : -1), _.y(3), _.C(b.yRb() ? 7 : -1), _.y(), _.C(b.Xpa() ? 8 : -1), _.y(), _.C(b.Xpa() ? 9 : -1), _.y(4), _.E("disabled", !b.isValid()));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.yA,
				_.mE
			],
			styles: ["[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:min(30vh,220px);border:none;display:block;margin-bottom:20px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]{width:100%;overflow:hidden;height:min(30vh,220px);margin-bottom:20px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:100%;width:100%;border:none;display:block}.video-options-container[_ngcontent-%COMP%]{width:100%;display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}.video-options-container[_ngcontent-%COMP%]   .full-row[_ngcontent-%COMP%]{grid-column:1/-1}.save-button[_ngcontent-%COMP%]{border-radius:40px;padding:0 24px}.dialog-error[_ngcontent-%COMP%]{margin-bottom:0;color:var(--color-error)}"],
			data: { animation: [_.qm("expandCollapse", [
				_.tm("collapsed", _.sm({
					height: "0px",
					opacity: 0
				})),
				_.tm("expanded", _.sm({
					height: "min(30vh, 220px)",
					opacity: 1
				})),
				_.um("collapsed <=> expanded", [_.rm("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")])
			])] }
		});
		var bDd = class {
			constructor() {
				this.F = _.m(_.AH);
				this.Wa = _.m(_.kC);
				this.A = _.m(_.qC);
				this.S = _.Dk;
				this.categories = HCd(this.F);
				this.Bg = _.nwb;
				this.mJ = this.A.mJ;
				this.oJ = this.A.oJ;
				var a;
				this.WE = (a = this.A.WE) != null ? a : 1;
				this.Ix = _.M([]);
				this.Jx = _.M([]);
				this.J0a = _.W(() => this.Ix().length > 0 || this.Jx().length > 0);
				this.KTa = _.W(() => {
					var b = this.Ix().length + this.Jx().length;
					b = Math.max(0, this.WE - b);
					return this.WE > 1 ? `Select up to ${this.WE} items (${b} remaining)` : this.mJ && this.oJ ? "Select an image or video to add to the prompt" : this.mJ ? "Select an image to add to the prompt" : this.oJ ? "Select a video to add to the prompt" : "";
				});
			}
			LN(a) {
				var b = "thumbnailUrl" in a, c = this.Ix(), d = this.Jx();
				if (this.WE === 1) b ? (this.Ix.set([]), this.Jx.set([a])) : (this.Ix.set([a]), this.Jx.set([]));
				else {
					var e = c.length + d.length;
					b ? d.includes(a) ? this.Jx.set(d.filter((f) => f !== a)) : e < this.WE && this.Jx.set([...d, a]) : c.includes(a) ? this.Ix.set(c.filter((f) => f !== a)) : e < this.WE && this.Ix.set([...c, a]);
				}
			}
			ee(a) {
				return "thumbnailUrl" in a ? this.Jx().includes(a) : this.Ix().includes(a);
			}
			c4() {
				var a = {};
				this.Ix().length > 0 && (a.Ix = this.Ix());
				this.Jx().length > 0 && (a.Jx = this.Jx());
				this.Wa.close(a);
			}
		};
		bDd.J = function(a) {
			return new (a || bDd)();
		};
		bDd.ka = _.u({
			type: bDd,
			da: [["ms-sample-media-picker-dialog"]],
			ha: 11,
			ia: 6,
			la: [
				[
					"mat-dialog-title",
					"",
					1,
					"shared-dialog-header"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close",
					"matDialogClose",
					"",
					3,
					"iconName"
				],
				[1, "add-text"],
				[
					"ms-button",
					"",
					"type",
					"button",
					"aria-label",
					"add to prompt",
					3,
					"click",
					"disabled",
					"matTooltip"
				],
				[1, "category-name"],
				[1, "sample-media"],
				[
					1,
					"sample-video-wrapper",
					3,
					"selected",
					"aria-label"
				],
				[
					1,
					"sample-video-wrapper",
					3,
					"click",
					"aria-label"
				],
				[
					1,
					"sample-video",
					3,
					"alt",
					"src"
				],
				[1, "checkmark"],
				[3, "iconName"],
				[1, "duration"],
				[1, "name"],
				[
					1,
					"sample-image-wrapper",
					3,
					"selected",
					"aria-label"
				],
				[
					1,
					"sample-image-wrapper",
					3,
					"click",
					"aria-label"
				],
				[
					1,
					"sample-image",
					3,
					"alt",
					"src"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.R(1, " Sample Media "), _.I(2, "button", 1), _.H(), _.F(3, "mat-dialog-content"), _.B(4, ABd, 5, 0), _.B(5, DBd, 2, 0), _.H(), _.F(6, "mat-dialog-actions")(7, "div", 2), _.R(8), _.H(), _.F(9, "button", 3), _.J("click", function() {
					return b.c4();
				}), _.R(10, " Add to prompt "), _.H()());
				a & 2 && (_.y(2), _.E("iconName", b.S.ac), _.y(2), _.C(b.oJ ? 4 : -1), _.y(), _.C(b.mJ ? 5 : -1), _.y(3), _.S(" ", b.KTa(), " "), _.y(), _.E("disabled", !b.J0a())("matTooltip", b.J0a() ? "" : b.KTa()));
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.IC,
				_.HC
			],
			styles: [".base-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:76px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.base-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{margin-left:12px}@media screen and (max-width:600px){.base-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{gap:4px;margin-left:4px}}.dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 24px}.prompt-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;height:44px}.prompt-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-header[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px}.prompt-bar[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:3}.prompt-bar[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%], .prompt-bar[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.center[_ngcontent-%COMP%]{text-align:center}.loading-indicator-container[_ngcontent-%COMP%]{overflow:visible}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--color-on-surface);font-weight:500}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{line-height:0}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%]{display:block}form[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{color:var(--color-on-surface);max-width:425px;min-width:425px;width:100%}@media screen and (max-width:768px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:300px;min-width:300px}}@media screen and (max-width:600px){form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:unset;min-width:unset}}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:48px}@media screen and (max-width:720px){form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-transform:initial;transform:none}form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.bold[_ngcontent-%COMP%]{font-weight:700}.link-icon[_ngcontent-%COMP%]{vertical-align:sub}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-image-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]{background:none;border:none;border-radius:4px;cursor:pointer;font-family:inherit;font-size:inherit;outline:1px solid var(--color-v3-outline);outline-offset:-1px;padding:0;position:relative;text-align:left;width:120px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .selected.sample-image-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .selected.sample-video-wrapper[_ngcontent-%COMP%]{outline:4px solid var(--color-v3-text);outline-offset:-4px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .selected.sample-image-wrapper[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .selected.sample-video-wrapper[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-image-wrapper[_ngcontent-%COMP%]:focus-visible, [_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]:focus-visible{outline:4px solid var(--color-v3-outline-accent);outline-offset:-4px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]{padding-bottom:4px;padding-left:16px;padding-right:12px;scrollbar-gutter:stable}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-on-surface);margin-bottom:12px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));margin-bottom:12px;width:min(80vw - 44px,664px)}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:var(--color-v3-text);border-radius:50%;color:var(--color-v3-surface-container);display:none;height:24px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;left:5px;position:absolute;top:5px;width:24px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-image-wrapper[_ngcontent-%COMP%]{height:120px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-image-wrapper[_ngcontent-%COMP%]   .sample-image[_ngcontent-%COMP%]{border-radius:4px;display:block;height:100%;object-fit:cover;width:100%}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]{color:var(--color-on-surface);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:14px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;background-color:var(--color-v3-surface-container);border:1px solid var(--color-v3-outline-var);border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:10px;height:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:20px;position:absolute;right:7px;top:55px;width:33px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 16px 16px}[_nghost-%COMP%]   .mat-mdc-dialog-content[_ngcontent-%COMP%]   .sample-media[_ngcontent-%COMP%]   .sample-video-wrapper[_ngcontent-%COMP%]   .sample-video[_ngcontent-%COMP%]{border-radius:4px 4px 0 0;height:80px;object-fit:cover;width:100%}[_nghost-%COMP%]   .mat-mdc-dialog-actions[_ngcontent-%COMP%]{padding-top:24px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}[_nghost-%COMP%]   .mat-mdc-dialog-actions[_ngcontent-%COMP%]   .add-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-on-surface-variant);margin-right:12px}"]
		});
		var VBd, FBd, HBd, LBd, NBd, PBd, RBd, TBd, cDd, eDd, fDd, gDd, hDd, iDd, dDd;
		VBd = () => [_.dz, _.sI];
		FBd = function(a, b) {
			return _.x(function* () {
				var c = b.files;
				c && c.length !== 0 && (yield cDd(a, Array.from(c)), b.value = "");
			});
		};
		HBd = function(a) {
			_.jC(a.dialog.open(XCd, {
				autoFocus: !1,
				yi: !0,
				height: "335px",
				width: "480px"
			})).subscribe((b) => {
				if (b && (a.EUa.emit(b), b)) {
					var c, d = (c = a.wf()) == null ? void 0 : c.role;
					_.EH(a.A, Object.assign({}, {
						Yb: _.Yn(),
						status: "PREPARING",
						Gd: "AUDIO"
					}, d ? { role: d } : {}, { yd: {
						url: b,
						mimeType: "audio/ogg",
						Pb: _.bo(b)
					} }));
				}
			});
		};
		LBd = function(a) {
			var b, c = {
				type: "newYoutube",
				Xpa: (b = a.wf()) == null ? void 0 : b.SSb
			};
			_.jC(a.dialog.open(_.V4, {
				autoFocus: "first-tabbable",
				width: "500px",
				data: c
			})).subscribe((d) => {
				var e = d == null ? void 0 : d.videoId;
				e && (d = {
					videoId: e,
					startTime: d == null ? void 0 : d.startTime,
					endTime: d == null ? void 0 : d.endTime,
					fps: d == null ? void 0 : d.fps
				}, a.vra.emit(d), _.EH(a.A, {
					Yb: _.Yn(),
					status: "PREPARING",
					Gd: "YOUTUBE",
					Nd: {
						videoId: d.videoId,
						zg: d.startTime,
						ph: d.endTime,
						fps: d.fps
					}
				}));
			});
		};
		NBd = function(a) {
			_.jC(a.dialog.open(bDd, { data: a.p0() })).subscribe((b) => _.x(function* () {
				if (b == null ? 0 : b.Ix) for (var c of b.Ix) {
					a.qoa.emit(c);
					var d = c.url;
					if (d) {
						var e = yield dDd(d);
						if (e) {
							d = void 0;
							let g = _.lc(e.getData());
							e = _.Ru(e);
							var f = _.n1({
								data: g,
								mimeType: e
							});
							f = _.hd(_.ld(f));
							let k = (d = a.wf()) == null ? void 0 : d.role;
							_.EH(a.A, Object.assign({}, {
								Yb: _.Yn(),
								status: "PREPARING",
								Gd: "IMAGE"
							}, k ? { role: k } : {}, {
								Ve: {
									hk: c.id,
									Pb: g,
									mimeType: e
								},
								Xd: f
							}));
						}
					}
				}
				if (b == null ? 0 : b.Jx) for (let g of b.Jx) a.roa.emit(g), c = void 0, d = (c = a.wf()) == null ? void 0 : c.role, c = Object.assign({}, {
					Yb: _.Yn(),
					status: "PREPARING",
					Gd: "VIDEO"
				}, d ? { role: d } : {}, {
					he: {
						Ni: g.id,
						name: g.name
					},
					duration: g.duration
				}), _.EH(a.A, c);
			}));
		};
		PBd = function(a) {
			_.Tyd(a.dialog, {}).subscribe((b) => {
				if (b && b.size > 0) for (let [c, { content: d, tokenCount: e }] of b) KCd(a.U, {
					filePath: c,
					fileContent: d,
					tokenCount: e
				});
			});
		};
		RBd = function(a) {
			_.Uyd(a.dialog, {}).subscribe((b) => {
				b && LCd(a.U, {
					Cy: b.Cy,
					f5: b.f5
				});
			});
		};
		TBd = function(a) {
			_.jC(a.dialog.open($Cd, {
				autoFocus: "first-tabbable",
				width: "800px",
				height: "70vh",
				data: {}
			})).subscribe((b) => {
				var c = b == null ? void 0 : b.k_;
				b = b == null ? void 0 : b.fNb;
				if (c && b) {
					b = new TextDecoder("utf8").decode(b);
					let d = `application/x-protobuf; type=${c}`, e, f = (e = a.wf()) == null ? void 0 : e.role;
					_.EH(a.A, Object.assign({}, {
						Yb: _.Yn(),
						status: "READY",
						Gd: "FILE"
					}, f ? { role: f } : {}, {
						Cb: 1,
						tokenCount: 0,
						yd: {
							url: "",
							mimeType: d,
							Pb: b,
							name: c
						}
					}));
				}
			});
		};
		cDd = function(a, b) {
			return _.x(function* () {
				if (b.length !== 0) {
					var c = yield _.u1(a.X);
					if (!a.aa || c) {
						var d = a.H();
						c = b;
						if (d !== void 0 && (c = b.slice(0, d), b.length > d)) {
							var e = a.NS();
							d = b.length - d;
							a.F.error(`Only up to ${e} item${e === 1 ? "" : "s"} can be attached for this model. ${d} file${d === 1 ? "" : "s"} ${d === 1 ? "was" : "were"} not added.`);
						}
						e = [];
						for (let f of c) eDd(a, f) && e.push(fDd(a, f));
						yield Promise.all(e);
					}
				}
			});
		};
		eDd = function(a, b) {
			var c = b.type, d = b.size, e, f = (e = a.wf()) == null ? void 0 : e.BK;
			return !f || XBd(c, f) || YBd(b.name, f) ? c === "application/pdf" && d > 52428800 ? (a.F.error("PDF file size cannot exceed 50MB."), !1) : c.startsWith("video/") && d > 419430400 ? (a.F.error("Video file size cannot exceed 400MB."), !1) : !0 : (b = ZBd(f), a.F.error(`File type not supported. Only ${b} files can be attached.`), !1);
		};
		fDd = function(a, b) {
			return _.x(function* () {
				var c = _.Yn(), d = b.type, e = b.name, f = _.kya(d), g, k = (g = a.wf()) == null ? void 0 : g.role;
				if (d === "application/zip") f = yield _.eo(b), k = Object.assign({}, {
					Yb: c,
					status: "PREPARING",
					Gd: "FILE"
				}, k ? { role: k } : {}, {
					yd: {
						url: f,
						Pb: _.bo(f),
						mimeType: d,
						name: e
					},
					Xd: void 0
				}), _.EH(a.A, k);
				else if (d.startsWith("video/")) if (b.size > 419430400) a.F.error("Video file size cannot exceed 400MB.");
				else {
					var p = _.ld(b);
					k = Object.assign({}, {
						Yb: c,
						status: "PREPARING",
						Gd: f
					}, k ? { role: k } : {}, {
						yd: {
							url: p.toString(),
							mimeType: d,
							name: e
						},
						Xd: p.toString()
					});
					_.EH(a.A, k);
				}
				else if (d.startsWith("image/")) {
					let { dataUrl: r, bwb: v } = yield gDd(b);
					g = _.bo(r);
					let w;
					d = !((w = a.wf()) == null || !w.H0);
					k = Object.assign({}, {
						Yb: c,
						status: "PREPARING",
						Gd: f
					}, k ? { role: k } : {}, {
						yd: {
							url: r,
							Pb: g,
							mimeType: v,
							name: e
						},
						Xd: r,
						nI: d,
						jv: !1
					});
					_.EH(a.A, k);
					if (d) try {
						p = yield _.LJ(a.I, {
							type: "url",
							url: r,
							mimeType: v,
							name: e
						}), _.DH(a.A, c, {
							jv: p,
							nI: !1,
							status: p ? "ERROR" : "READY"
						}), p && a.F.error("The input image conflicts with our safety policies. Please try again with a different image.");
					} catch (D) {
						console.error("Image safety check failed:", D), _.DH(a.A, c, {
							jv: !0,
							nI: !1,
							status: "ERROR"
						}), a.R.warning(D), a.F.error("Image safety check failed. Please try again.");
					}
					else _.DH(a.A, c, { status: "READY" });
				} else p = yield _.eo(b), k = Object.assign({}, {
					Yb: c,
					status: "PREPARING",
					Gd: f
				}, k ? { role: k } : {}, {
					yd: {
						url: p,
						Pb: _.bo(p),
						mimeType: d,
						name: e
					},
					Xd: void 0
				}), _.EH(a.A, k);
			});
		};
		gDd = function(a) {
			return _.x(function* () {
				var b = a.type;
				var c = !_.Qra(a.type);
				a.size > 1048576 || c ? (b = yield yBd(yield _.eo(a)), c = b.base64Uri, b = _.co(b.base64Uri) || a.type) : c = yield _.eo(a);
				return {
					dataUrl: c,
					bwb: b
				};
			});
		};
		hDd = function(a, b) {
			return _.x(function* () {
				var c = _.Yn(), d = b.mimeType, e = _.kya(d), f, g = !((f = a.wf()) == null || !f.H0);
				f = d.startsWith("image/");
				var k, p = (k = a.wf()) == null ? void 0 : k.role;
				_.EH(a.A, Object.assign({}, {
					Yb: c,
					status: "PREPARING",
					Gd: e
				}, p ? { role: p } : {}, { kb: {
					id: b.id,
					name: b.name
				} }, f ? {
					nI: g,
					jv: !1
				} : {}));
				if (f && g) try {
					let r = yield _.LJ(a.I, {
						type: "driveId",
						driveId: b.id,
						mimeType: d,
						name: b.name
					});
					_.DH(a.A, c, Object.assign({}, {
						jv: r,
						nI: !1
					}, r ? { status: "ERROR" } : {}));
					r && a.F.error("The input image conflicts with our safety policies. Please try again with a different image.");
				} catch (r) {
					console.error("Image safety check failed for Drive file:", r), a.R.warning(r), _.DH(a.A, c, {
						jv: !0,
						nI: !1,
						status: "ERROR"
					}), a.F.error("Image safety check failed. Please try again.");
				}
				else _.DH(a.A, c, { status: "READY" });
			});
		};
		iDd = function(a, b) {
			_.x(function* () {
				var c = b.dataUrl;
				if (c) {
					var d = b.mimeType, e = `camera.${_.MO(d)}`, f = _.Yn(), g = _.kya(d), k, p = (k = a.wf()) == null ? void 0 : k.role;
					if (d.startsWith("video/")) {
						try {
							let v = yield (yield fetch(c)).blob(), w = _.ld(v);
							var r = Object.assign({}, {
								Yb: f,
								status: "PREPARING",
								Gd: g
							}, p ? { role: p } : {}, {
								yd: {
									url: w.toString(),
									mimeType: d,
									name: e
								},
								Xd: w.toString()
							});
						} catch (v) {
							console.error("Error processing camera video:", v), a.F.error("Failed to process camera video.");
						}
						r && _.EH(a.A, r);
					} else if (d.startsWith("image/")) {
						r = _.bo(c);
						let v;
						k = !((v = a.wf()) == null || !v.H0);
						r = Object.assign({}, {
							Yb: f,
							status: "PREPARING",
							Gd: g
						}, p ? { role: p } : {}, {
							yd: {
								url: c,
								Pb: r,
								mimeType: d,
								name: e
							},
							Xd: c,
							nI: k,
							jv: !1
						});
						_.EH(a.A, r);
						if (k) try {
							let w = yield _.LJ(a.I, {
								type: "url",
								url: c,
								mimeType: d,
								name: e
							});
							_.DH(a.A, f, {
								jv: w,
								nI: !1,
								status: w ? "ERROR" : "READY"
							});
							w && a.F.error("The input image conflicts with our safety policies. Please try again with a different image.");
						} catch (w) {
							console.error("Image safety check failed:", w), _.DH(a.A, f, {
								jv: !0,
								nI: !1,
								status: "ERROR"
							}), a.R.warning(w), a.F.error("Image safety check failed. Please try again.");
						}
						else _.DH(a.A, f, { status: "READY" });
					}
				}
			});
		};
		dDd = function(a) {
			return _.x(function* () {
				var b = _.kd(a), c;
				return (b = yield (c = yield fetch(b.toString())) == null ? void 0 : c.blob()) ? _.Tu(_.Su(new _.Uu(), b.type), _.bo(yield _.eo(b))) : null;
			});
		};
		_.W4 = class {
			constructor() {
				this.S = _.Dk;
				this.hGb = _.Ki();
				this.dialog = _.m(_.rC);
				this.ea = _.m(_.w1);
				this.F = _.m(_.iC);
				this.X = _.m(_.v1);
				this.A = _.m(_.FH);
				this.U = _.m(_.fK);
				this.fa = _.m(_.Op);
				this.I = _.m(_.MJ);
				this.R = _.m(_.Nw);
				this.aa = this.fa.getFlag(_.mF);
				this.M8 = _.zaa() && _.lp();
				this.ima = _.V();
				this.disabled = _.V(!1);
				this.aUa = _.V(!0);
				this.wf = _.V();
				this.NS = _.V();
				this.u1a = _.V();
				this.lMa = _.V(!1);
				this.zQb = this.wQb = _.r4;
				this.gRb = _.PC;
				this.ma = _.W(() => {
					var a, b = (a = this.A.A()) != null ? a : {}, c, d = (c = this.wf()) == null ? void 0 : c.role;
					return Object.values(b).filter((e) => e ? d ? e.role === d : !0 : !1).length;
				});
				this.H = _.W(() => {
					var a = this.NS();
					if (a !== void 0) return Math.max(0, a - this.ma());
				});
				this.pS = _.W(() => {
					var a = this.H();
					return a !== void 0 && a <= 0;
				});
				this.rd = _.W(() => {
					if (this.disabled() || this.pS()) {
						let c;
						var a = (c = this.wf()) == null ? void 0 : c.LYa;
						return a ? a : this.pS() ? `Attachment limit of ${this.NS()} reached for this model` : "";
					}
					var b;
					return (b = (a = this.wf()) == null ? void 0 : a.Ag) != null ? b : "";
				});
				this.si = _.W(() => {
					var a;
					return (a = this.wf()) == null ? void 0 : a.si;
				});
				this.Iwb = _.W(() => {
					var a, b = (a = this.wf()) == null ? void 0 : a.BK;
					if (b) return b;
					var c;
					a = (c = this.wf()) == null ? void 0 : c.tq;
					if (!a) return "text/*,application/zip";
					if (_.ixa(a)) return "image/*";
					c = [
						"text/*",
						..._.R4,
						"application/*",
						..._.Eo.map((d) => `.${d}`)
					];
					_.Em(a) && c.push("image/*");
					_.Fm(a) && c.push("video/*");
					_.Dm(a) && c.push("audio/*");
					return c.join(",");
				});
				this.p0 = _.W(() => {
					var a, b;
					return Object.assign({}, (b = (a = this.wf()) == null ? void 0 : a.p0) != null ? b : {
						mJ: !0,
						oJ: !0
					}, { WE: this.H() });
				});
				this.na = _.W(() => {
					var a, b = (a = this.wf()) == null ? void 0 : a.tq;
					a = this.H();
					return Object.assign({}, {
						cab: !1,
						ubb: !!b && (_.Em(b) || _.ixa(b)),
						wbb: !!b && _.Fm(b),
						sbb: !!b && _.Dm(b),
						vbb: !!b && _.Em(b)
					}, a !== void 0 && { WE: a });
				});
				this.qoa = _.Ki();
				this.roa = _.Ki();
				this.vra = _.Ki();
				this.EUa = _.Ki();
				_.Fk([this.wf], () => {});
			}
			gw(a) {
				var b = this;
				return _.x(function* () {
					yield cDd(b, a);
				});
			}
			DGa() {
				var a = this;
				return _.x(function* () {
					var b = yield _.pf(_.CYc(a.ea, a.na()));
					if (b && b.length !== 0) {
						var c = yield _.u1(a.X);
						if (!a.aa || c) for (let e of b) {
							let f;
							b = a;
							c = e.mimeType;
							var d = (f = e.sizeBytes) != null ? f : 0;
							c === "application/pdf" && d > 52428800 ? (b.F.error("PDF file size cannot exceed 50MB."), b = !1) : c.startsWith("video/") && d > 419430400 ? (b.F.error("Video file size cannot exceed 400MB."), b = !1) : b = !0;
							if (!b) continue;
							b = _.kv(new _.gj(), e.id);
							let g;
							(c = (g = a.wf()) == null ? void 0 : g.C6b) && _.Uc(b, 2, c);
							yield hDd(a, e);
						}
					}
				});
			}
			BGa(a, b) {
				_.jC(this.dialog.open(_.s1, { data: {
					Bca: a,
					aqa: b
				} })).subscribe((c) => {
					c != null && c.dataUrl && iDd(this, c);
				});
			}
		};
		_.W4.J = function(a) {
			return new (a || _.W4)();
		};
		_.W4.ka = _.u({
			type: _.W4,
			da: [["ms-add-media-button"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("primary", b.lMa());
			},
			inputs: {
				ima: [1, "mediaFormControl"],
				disabled: [1, "disabled"],
				aUa: [1, "allowMenuToOpen"],
				wf: [1, "addMediaButtonConfig"],
				NS: [1, "maxAttachmentCount"],
				u1a: [1, "iconOverride"],
				lMa: [1, "usePrimaryStyle"]
			},
			outputs: {
				hGb: "imageAdded",
				qoa: "sampleImageSelected",
				roa: "sampleVideoSelected",
				vra: "youtubeVideoSelected",
				EUa: "audioBytesSelected"
			},
			ha: 17,
			ia: 20,
			la: [
				["selectMediaMenu", ""],
				["fileInput", ""],
				[
					"ms-button",
					"",
					"data-test-id",
					"add-media-button",
					"matTooltipPosition",
					"below",
					"data-test",
					"selectMediaMenu",
					3,
					"menuOpened",
					"variant",
					"iconName",
					"matTooltip",
					"disabled",
					"matMenuTriggerFor"
				],
				["xPosition", "before"],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"drive-file-menu-item",
					3,
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"upload-file-menu-item",
					3,
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"record-audio-menu-item",
					3,
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"youtube-video-menu-item",
					3,
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Sample Media",
					1,
					"sample-media-picker-menu-item"
				],
				"mat-menu-item;;aria-label;Add Code from CodeSearch;matTooltipPosition;right".split(";"),
				"mat-menu-item;;aria-label;Add Changelist from Critique;matTooltipPosition;right".split(";"),
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"drive-file-menu-item",
					3,
					"click",
					"aria-label",
					"matTooltip"
				],
				[
					1,
					"start-icon",
					3,
					"iconName"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"upload-file-menu-item",
					3,
					"click",
					"aria-label",
					"matTooltip"
				],
				[
					"type",
					"file",
					"data-test-upload-file-input",
					"",
					1,
					"file-input",
					3,
					"change",
					"click",
					"accept"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"record-audio-menu-item",
					3,
					"click",
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"camera-menu-item",
					3,
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"camera-menu-item",
					3,
					"click",
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"matTooltipPosition",
					"right",
					1,
					"youtube-video-menu-item",
					3,
					"click",
					"aria-label",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Sample Media",
					1,
					"sample-media-picker-menu-item",
					3,
					"click"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Add Code from CodeSearch",
					"matTooltipPosition",
					"right",
					3,
					"click"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Add Changelist from Critique",
					"matTooltipPosition",
					"right",
					3,
					"click"
				],
				[
					"mat-menu-item",
					"",
					"aria-label",
					"Add Proto message",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 2), _.J("menuOpened", function() {}), _.H(), _.F(1, "mat-menu", 3, 0), _.Th(3)(4)(5)(6)(7), _.B(8, EBd, 4, 4, "button", 4), _.B(9, GBd, 6, 6, "button", 5), _.B(10, IBd, 4, 4, "button", 6), _.B(11, KBd, 1, 1), _.B(12, MBd, 4, 4, "button", 7), _.B(13, OBd, 4, 1, "button", 8), _.B(14, QBd, 4, 1, "button", 9), _.B(15, SBd, 4, 1, "button", 10), _.B(16, WBd, 3, 0), _.H());
				if (a & 2) {
					var c, d, e, f, g, k;
					let p, r, v, w;
					a = _.O(2);
					let D;
					_.E("variant", b.lMa() ? "primary" : "filter-chip")("iconName", (D = b.u1a()) != null ? D : b.S.SC)("matTooltip", b.rd())("disabled", b.disabled() || b.pS())("matMenuTriggerFor", b.aUa() ? a : null);
					let G;
					_.wh("aria-label", (G = (c = b.wf()) == null ? null : c.Ag) != null ? G : "");
					_.y(3);
					c = _.Uh((d = b.si()) == null ? null : d.oH);
					_.y();
					d = _.Uh((e = b.si()) == null ? null : e.CJ);
					_.y();
					e = _.Uh((f = b.si()) == null ? null : f.Sna);
					_.y();
					f = _.Uh((g = b.si()) == null ? null : g.aX);
					g = (k = b.si()) == null ? null : k.o0;
					_.y();
					k = _.Uh((p = b.si()) == null ? null : p.tra);
					_.y();
					_.C(!b.si() || (c == null ? 0 : c.visible) ? 8 : -1);
					_.y();
					_.C(!b.si() || (d == null ? 0 : d.visible) ? 9 : -1);
					_.y();
					_.C(!b.si() || (e == null ? 0 : e.visible) ? 10 : -1);
					_.y();
					_.C(!b.si() || (f == null ? 0 : f.visible) ? 11 : -1);
					_.y();
					_.C(!b.si() || (k == null ? 0 : k.visible) ? 12 : -1);
					_.y();
					_.C(!b.si() || (g == null ? 0 : g.visible) ? 13 : -1);
					_.y();
					let L;
					_.C(b.wQb && ((L = (r = b.si()) == null ? null : r.hQ == null ? null : r.hQ.visible) != null ? L : 1) ? 14 : -1);
					_.y();
					let N;
					_.C(b.zQb && ((N = (v = b.si()) == null ? null : v.qQ == null ? null : v.qQ.visible) != null ? N : 1) ? 15 : -1);
					_.y();
					let Q;
					_.C(b.gRb && ((Q = (w = b.si()) == null ? null : w.TT == null ? null : w.TT.visible) != null ? Q : 1) ? 16 : -1);
				}
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.wI,
				_.tI,
				_.sI,
				_.vI,
				_.IC,
				_.HC
			],
			styles: [".file-input[_ngcontent-%COMP%]{display:none}[ms-button][_ngcontent-%COMP%]{padding:8px 6px}[ms-button][_ngcontent-%COMP%]:not(.ms-button-primary){background:transparent;border-color:var(--color-v3-outline)}"]
		});
		var jDd = function(a, b) {
			a.kb.set(b);
			a.Yb() && _.DH(a.A, a.Yb(), { kb: b });
		}, kDd = function(a, b) {
			a.Hj.set(b);
			a.Yb() && _.DH(a.A, a.Yb(), { Xd: b });
		}, lDd = function(a, b) {
			a.status.set(b);
			a.Yb() && _.DH(a.A, a.Yb(), { status: b });
		}, nDd = function(a, b) {
			_.x(function* () {
				try {
					var c = yield _.pf(_.o4(a.F, b, "id, mimeType, name"));
				} catch (d) {
					c = void 0;
				}
				c ? jDd(a, {
					id: c.id,
					name: c.name,
					mimeType: c.mimeType
				}) : mDd(a);
			});
		}, oDd = function(a, b) {
			_.x(function* () {
				var c = null;
				try {
					c = yield _.rH(a.F, b);
				} catch (d) {
					c = null;
				}
				c ? (c = yield c.blob(), kDd(a, _.hd(_.ld(c)))) : mDd(a);
			});
		}, mDd = function(a) {
			_.om(a.qr, {
				content: "Error querying Drive.",
				type: "error"
			});
			a.Yb() && a.A.Dx(a.Yb());
		}, X4 = class {
			constructor() {
				this.F = _.m(_.sH);
				this.qr = _.m(_.gC);
				this.A = _.m(_.FH);
				this.Yb = _.M();
				this.kb = _.M();
				this.jg = _.M();
				this.Hj = _.M();
				this.status = _.M("PREPARING");
				_.W(() => {
					var b, c;
					return (c = (b = this.kb()) == null ? void 0 : b.id) != null ? c : "";
				});
				this.Wf = _.W(() => {
					var b = this.Yb(), c = this.A.A();
					if (b && c) {
						var d;
						return (d = this.A.A()) == null ? void 0 : d[b];
					}
				});
				var a = _.Fk([this.Wf], () => {
					var b = this.Wf();
					b && (b.Xd && kDd(this, b.Xd), jDd(this, b.kb), b = b.yd, this.jg.set(b), this.Yb() && _.DH(this.A, this.Yb(), { yd: b }), a.destroy());
				});
				_.Fk([this.kb, this.Hj], () => {
					var b = this.kb(), c = this.Hj();
					!b || b.name && b.mimeType || nDd(this, b.id);
					c || (_.hBd() ? lDd(this, "READY") : (lDd(this, "PREPARING"), (b == null ? 0 : b.id) && oDd(this, b.id)));
				});
				_.Fk([this.jg], () => {
					var b = this.jg();
					_.hBd() && (b == null ? void 0 : b.mimeType) !== "audio/wav" ? lDd(this, "READY") : (b == null ? 0 : b.url) && kDd(this, b.url);
				});
				_.Fk([this.Hj], () => {
					var b = this.Hj();
					b && (kDd(this, b), lDd(this, "READY"));
				});
			}
		};
		X4.J = function(a) {
			return new (a || X4)();
		};
		X4.sa = _.Cd({
			token: X4,
			factory: X4.J
		});
		var pDd = ["audioPlayer"], Y4 = class {
			constructor() {
				this.Vh = _.T4;
				this.S = _.Dk;
				this.F = _.m(_.EA);
				this.A = _.m(X4);
				_.m(_.FH);
				this.Yb = _.Li.required();
				this.status = this.A.status;
				this.kb = this.A.kb;
				this.jg = this.A.jg;
				this.Hj = this.A.Hj;
				this.qe = _.M(!1);
				this.name = _.W(() => {
					var a, b;
					return (b = (a = this.kb()) == null ? void 0 : a.name) != null ? b : this.jg() ? _.NO(this.jg().mimeType) : "";
				});
				this.Ui = _.Ni("audioPlayer");
				this.ZD = new _.ml(null);
				_.Fk([this.Ui], (a) => {
					var b, c = (b = this.Ui()) == null ? void 0 : b.nativeElement;
					if (c) {
						var d = _.BA(this.F, c).pipe(_.Gf((e) => e != null)).subscribe(this.ZD);
						a(() => {
							d.unsubscribe();
						});
					}
				});
				_.Fk([this.Yb], () => {
					this.A.Yb.set(this.Yb());
				});
			}
			haa() {
				var a;
				(a = this.Ui()) == null || a.nativeElement.play();
			}
			GI() {
				this.qe.set(!0);
			}
			Yma() {
				this.qe.set(!1);
			}
			Z7(a) {
				a = a.relatedTarget;
				a instanceof HTMLElement && _.DA(this.F, a, this.ZD.value);
			}
		};
		Y4.J = function(a) {
			return new (a || Y4)();
		};
		Y4.ka = _.u({
			type: Y4,
			da: [["ms-prompt-audio"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Ui, pDd, 5);
				a & 2 && _.ki();
			},
			eb: [1, "prompt-audio"],
			inputs: { Yb: [1, "promptMediaId"] },
			features: [_.yi([X4])],
			ha: 2,
			ia: 1,
			la: [
				["audioPlayer", ""],
				[
					1,
					"thumbnail-icon",
					"audio-file-icon",
					3,
					"iconName"
				],
				[
					1,
					"audio-player",
					3,
					"play",
					"pause",
					"ended",
					"src"
				],
				[
					1,
					"thumbnail-icon",
					"interactive",
					3,
					"iconName"
				],
				[
					1,
					"thumbnail-icon",
					"interactive",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, bCd, 4, 2)(1, cCd, 1, 1, "span", 1);
				a & 2 && _.C(b.Hj() ? 0 : 1);
			},
			dependencies: [
				_.tz,
				_.dz,
				_.yA,
				_.IC
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;position:relative}.thumbnail-icon[_ngcontent-%COMP%]{position:absolute}.audio-player[_ngcontent-%COMP%]{display:none;max-width:100%;width:100%}audio[_ngcontent-%COMP%]::-webkit-media-controls-panel{background:var(--color-v3-surface-container-highest)}audio[_ngcontent-%COMP%]::-webkit-media-controls-enclosure{background:var(--color-v3-surface-container-highest)}"]
		});
		var qDd = function(a, b) {
			a.kb.set(b);
			a.Yb() && _.DH(a.A, a.Yb(), { kb: b });
		}, rDd = function(a, b) {
			a.status.set(b);
			a.Yb() && _.DH(a.A, a.Yb(), { status: b });
		}, tDd = function(a, b, c, d, e) {
			_.x(function* () {
				try {
					var f = yield _.pf(_.GCd(a.F, b, c, d));
				} catch (g) {
					f = void 0;
				}
				f && f.data ? (f = f.data, qDd(a, {
					id: f.id,
					name: f.name,
					mimeType: f.mimeType,
					thumbnailLink: e
				}), rDd(a, "READY")) : sDd(a, "Failed to convert file.");
			});
		}, uDd = function(a, b) {
			_.x(function* () {
				try {
					var c = yield _.pf(_.o4(a.F, b, "id, mimeType, name, thumbnailLink"));
				} catch (k) {
					c = void 0;
				}
				if (c) {
					var d, e, f, g;
					qDd(a, {
						id: c.id,
						name: (e = c.name) != null ? e : "",
						mimeType: (f = c.mimeType) != null ? f : "",
						thumbnailLink: (g = (d = c.thumbnailLink) == null ? void 0 : d.replace(/=s220$/, "")) != null ? g : ""
					});
				} else sDd(a, "Error querying Drive.");
			});
		}, sDd = function(a, b) {
			_.om(a.qr, {
				content: b,
				type: "error"
			});
			a.Yb() && a.A.Dx(a.Yb());
		}, Z4 = class {
			constructor() {
				this.F = _.m(_.sH);
				this.qr = _.m(_.gC);
				this.A = _.m(_.FH);
				this.Yb = _.M();
				this.status = _.M("PREPARING");
				this.Ac = _.M();
				this.kb = _.M();
				_.W(() => {
					var c, d;
					return (d = (c = this.kb()) == null ? void 0 : c.id) != null ? d : "";
				});
				this.Wf = _.W(() => {
					var c = this.Yb(), d = this.A.A();
					if (c && d) return d[c];
				});
				var a = _.Fk([this.Wf], () => {
					var c = this.Wf();
					if (c) {
						qDd(this, c.kb);
						var d = c.yd;
						this.Ac.set(d);
						this.Yb() && _.DH(this.A, this.Yb(), { yd: d });
						rDd(this, c.status);
						a.destroy();
					}
				}), b = _.Fk([this.Ac], () => {
					this.Ac() && (rDd(this, "READY"), b.destroy());
				});
				_.Fk([this.kb], () => {
					var c = this.kb();
					c && c.id && (c.name && c.mimeType && c.thumbnailLink ? _.ECd(c.mimeType, c.name) ? rDd(this, "READY") : (rDd(this, "CONVERTING"), tDd(this, c.name, c.id, c.mimeType, c.thumbnailLink)) : uDd(this, c.id));
				});
			}
		};
		Z4.J = function(a) {
			return new (a || Z4)();
		};
		Z4.sa = _.Cd({
			token: Z4,
			factory: Z4.J
		});
		var $4 = class {
			constructor() {
				this.F = _.m(_.FH);
				this.A = _.m(Z4);
				this.dialog = _.m(_.rC);
				this.Fea = MCd;
				this.Vh = _.T4;
				this.S = _.Dk;
				this.Yb = _.Li.required();
				this.wq = _.V(!1);
				this.status = this.A.status;
				this.Ac = this.A.Ac;
				this.kb = this.A.kb;
				this.name = _.W(() => {
					var a, b, c, d;
					return (d = (c = (a = this.kb()) == null ? void 0 : a.name) != null ? c : (b = this.Ac()) == null ? void 0 : b.name) != null ? d : this.Ac() ? _.NO(this.Ac().mimeType) : "";
				});
				this.thumbnail = _.W(() => {
					var a;
					return (a = this.kb()) == null ? void 0 : a.thumbnailLink;
				});
				this.videoUrl = _.W(() => {
					var a = this.Ac();
					if ((a == null ? 0 : a.mimeType.startsWith("video/")) && (a == null ? 0 : a.Pb)) return a = _.n1({
						mimeType: a.mimeType,
						data: a.Pb
					}), _.ld(a);
				});
				this.fDa = _.W(() => {
					var a, b;
					return dCd(this.status(), (a = this.F.A()) == null ? void 0 : (b = a[this.Yb()]) == null ? void 0 : b.Cb, this.wq());
				});
				_.Fk([this.Yb], () => {
					this.A.Yb.set(this.Yb());
				});
			}
			MQ() {
				var a = this;
				return _.x(function* () {
					var b = a.Ac();
					b && b.Pb && (yield _.OO({
						base64: b.Pb,
						mimeType: b.mimeType
					}));
				});
			}
		};
		$4.J = function(a) {
			return new (a || $4)();
		};
		$4.ka = _.u({
			type: $4,
			da: [["ms-prompt-file"]],
			Ja: function(a, b) {
				a & 1 && _.J("click", function() {
					var c, d;
					((c = b.Ac()) == null ? 0 : c.mimeType.startsWith("text/")) && ((d = b.Ac()) == null ? 0 : d.Pb) && (c = {
						media: [{
							source: _.io({
								mimeType: b.Ac().mimeType,
								data: b.Ac().Pb
							}),
							mimeType: b.Ac().mimeType,
							altText: b.name()
						}],
						title: b.name()
					}, b.dialog.open(_.SO, { data: c }));
				});
			},
			inputs: {
				Yb: [1, "promptMediaId"],
				wq: [1, "disableTokenCount"]
			},
			features: [_.yi([Z4])],
			ha: 2,
			ia: 1,
			la: [[
				"alt",
				"file thumbnail",
				1,
				"thumbnail-img",
				3,
				"src"
			], [
				1,
				"thumbnail-icon",
				3,
				"iconName"
			]],
			template: function(a, b) {
				a & 1 && _.B(0, eCd, 1, 1, "img", 0)(1, fCd, 1, 1, "span", 1);
				a & 2 && _.C(b.thumbnail() ? 0 : 1);
			},
			dependencies: [_.tz, _.dz],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}.thumbnail-img[_ngcontent-%COMP%]{height:auto;object-fit:cover;object-position:center top;pointer-events:none;width:100%}"]
		});
		var vDd = function(a) {
			_.om(a.qr, {
				content: "Error querying Drive.",
				type: "error"
			});
			var b = a.Yb();
			b && a.A.Dx(b);
		}, a5 = class {
			constructor() {
				this.I = _.m(_.sH);
				this.qr = _.m(_.gC);
				this.R = _.m(_.KJ);
				this.A = _.m(_.FH);
				this.Yb = _.M();
				this.Wf = _.W(() => {
					var a = this.Yb(), b = this.A.A();
					if (a && b) return b[a];
				});
				this.kb = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.kb;
				});
				this.Ve = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Ve;
				});
				this.yd = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.yd;
				});
				this.status = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.status;
				});
				this.H = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Xd;
				});
				this.F = _.M();
				this.U = _.W(() => {
					var a;
					return (a = this.H()) != null ? a : this.F();
				});
				_.Fk([this.kb, this.H], () => {
					var a = this.kb(), b = this.H();
					a == null || !a.id || b ? this.F.set(void 0) : (() => {
						var c = this;
						return _.x(function* () {
							var d = a;
							if (!d.name || !d.mimeType) try {
								let e = yield _.pf(_.o4(c.I, a.id, "id, mimeType, name"));
								if (!e) throw Error("xi");
								d = {
									id: e.id,
									name: e.name,
									mimeType: e.mimeType
								};
								_.DH(c.A, c.Yb(), { kb: d });
							} catch (e) {
								vDd(c);
								return;
							}
							if (d.name && d.mimeType) try {
								let e = yield _.ICd(c.R, d.id), f = e ? _.hd(_.ld(e)) : void 0;
								c.F.set(f);
								c.Yb() && _.DH(c.A, c.Yb(), { status: "READY" });
							} catch (e) {
								vDd(c);
							}
						});
					})();
				});
			}
		};
		a5.J = function(a) {
			return new (a || a5)();
		};
		a5.sa = _.Cd({
			token: a5,
			factory: a5.J
		});
		var b5 = class {
			constructor() {
				this.dialog = _.m(_.rC);
				this.A = _.m(a5);
				_.m(_.FH);
				this.Fea = MCd;
				this.S = _.Dk;
				this.Yb = _.Li.required();
				this.wq = _.V(!1);
				this.R = this.A.status;
				this.kb = this.A.kb;
				this.Ve = this.A.Ve;
				this.yd = this.A.yd;
				this.Wf = this.A.Wf;
				this.I = this.A.U;
				this.altText = _.W(() => {
					var a = this.kb();
					if (a == null ? 0 : a.name) return a.name;
					a = this.Ve();
					if (a == null ? 0 : a.hk) return a.hk;
					if (a = this.yd()) {
						let b;
						return (b = a.name) != null ? b : _.NO(a.mimeType);
					}
					return "";
				});
				this.fDa = _.W(() => {
					var a;
					return dCd(this.R(), (a = this.Wf()) == null ? void 0 : a.Cb, this.wq());
				});
				this.F = _.W(() => {
					var a, b, c, d = (c = (a = this.yd()) == null ? void 0 : a.mimeType) != null ? c : (b = this.kb()) == null ? void 0 : b.mimeType;
					return d === "image/heic" || d === "image/heif";
				});
				this.H = _.wa();
				this.JQ = _.W(() => {
					if (!this.F() || this.H) return this.I();
				});
				_.Fk([this.Yb], () => {
					this.A.Yb.set(this.Yb());
				});
			}
			hN() {
				var a = this;
				return _.x(function* () {
					var b = a.JQ(), c = a.altText();
					if (b) {
						var d;
						b.startsWith("blob:") && (d = yield fetch(b).then((f) => f.blob()));
						var e;
						d = {
							media: [{
								source: d || b,
								altText: c,
								mimeType: ((e = d) == null ? void 0 : e.type) || _.co(b) || void 0
							}],
							title: c
						};
						a.dialog.open(_.SO, { data: d });
					}
				});
			}
		};
		b5.J = function(a) {
			return new (a || b5)();
		};
		b5.ka = _.u({
			type: b5,
			da: [["ms-prompt-image"]],
			inputs: {
				Yb: [1, "promptMediaId"],
				wq: [1, "disableTokenCount"]
			},
			features: [_.yi([a5])],
			ha: 2,
			ia: 1,
			la: [
				[
					1,
					"loaded-image",
					3,
					"alt",
					"src"
				],
				[
					1,
					"thumbnail-icon",
					3,
					"iconName"
				],
				[
					1,
					"loaded-image",
					3,
					"click",
					"alt",
					"src"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, gCd, 1, 2, "img", 0)(1, hCd, 1, 1, "span", 1);
				a & 2 && _.C(b.JQ() ? 0 : 1);
			},
			dependencies: [
				_.dz,
				_.zC,
				_.IC
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;position:relative}.loaded-image[_ngcontent-%COMP%]{display:block;max-height:100%;max-width:100%;object-fit:cover}"]
		});
		var xDd = function(a, b) {
			_.x(function* () {
				try {
					var c = yield _.pf(_.o4(a.I, b, "id, mimeType, name"));
				} catch (e) {
					c = void 0;
				}
				if (c) {
					var d = a.Yb();
					d && _.DH(a.F, d, { kb: {
						id: c.id,
						name: c.name,
						mimeType: c.mimeType
					} });
				} else wDd(a);
			});
		}, yDd = function(a, b) {
			_.x(function* () {
				var c = null;
				try {
					c = yield _.rH(a.I, b);
				} catch (d) {
					c = null;
				}
				c ? (c = yield c.blob(), a.H.set(_.hd(_.ld(c)))) : wDd(a);
			});
		}, wDd = function(a) {
			_.om(a.qr, {
				content: "Error querying Drive.",
				type: "error"
			});
			a.Yb() && a.F.Dx(a.Yb());
		}, c5 = class {
			constructor() {
				this.I = _.m(_.sH);
				this.qr = _.m(_.gC);
				_.m(_.AH);
				this.F = _.m(_.FH);
				this.Yb = _.M();
				this.Wf = _.W(() => {
					var a = this.Yb(), b = this.F.A();
					if (a && b) return b[a];
				});
				this.kb = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.kb;
				});
				this.he = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.he;
				});
				this.Nd = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Nd;
				});
				this.videoUrl = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Xd;
				});
				this.duration = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.duration;
				});
				this.status = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.status;
				});
				this.VZ = _.W(() => {
					var a;
					return ((a = this.Wf()) == null ? void 0 : a.Gd) === "YOUTUBE";
				});
				this.A = _.M();
				this.youtubeUrl = this.A.asReadonly();
				this.H = _.M();
				this.R = _.W(() => {
					var a;
					return (a = this.videoUrl()) != null ? a : this.H();
				});
				_.Fk([this.kb, this.videoUrl], () => {
					if (this.videoUrl()) this.H.set(void 0);
					else {
						var a = this.kb();
						a != null && a.id && (a.name && a.mimeType || xDd(this, a.id), yDd(this, a.id));
					}
				});
				_.Fk([this.he], () => {
					var a = this.he();
					if (a == null ? 0 : a.Ni) (a = _.zH(a.Ni)) ? (a = _.Co(a.videoUrl.toString()), this.A.set(_.Do(a != null ? a : ""))) : this.A.set(void 0);
					else {
						let b;
						((b = this.Nd()) == null ? 0 : b.videoId) || this.A.set(void 0);
					}
				});
				_.Fk([this.Nd], () => {
					var a = this.Nd();
					if (a == null ? 0 : a.videoId) this.A.set(_.Do(a.videoId));
					else {
						let b;
						((b = this.he()) == null ? 0 : b.Ni) || this.A.set(void 0);
					}
				});
			}
		};
		c5.J = function(a) {
			return new (a || c5)();
		};
		c5.sa = _.Cd({
			token: c5,
			factory: c5.J
		});
		var zDd = ["videoPlayer"], d5 = class {
			constructor() {
				this.dialog = _.m(_.rC);
				this.A = _.m(c5);
				this.H = _.m(_.FH);
				this.Yb = _.Li.required();
				this.yc = _.V(!1);
				this.status = this.A.status;
				this.kb = this.A.kb;
				this.he = this.A.he;
				this.F = this.A.Nd;
				this.videoUrl = this.A.R;
				this.youtubeUrl = this.A.youtubeUrl;
				this.VZ = this.A.VZ;
				this.duration = this.A.duration;
				this.Cb = _.W(() => {
					var a;
					return (a = this.A.Wf()) == null ? void 0 : a.Cb;
				});
				this.tokenCount = _.W(() => {
					var a;
					return (a = this.A.Wf()) == null ? void 0 : a.tokenCount;
				});
				this.name = _.W(() => {
					var a, b, c, d, e, f, g;
					return (g = (f = (e = (a = this.kb()) == null ? void 0 : a.name) != null ? e : (b = this.he()) == null ? void 0 : b.name) != null ? f : (c = this.A.Wf()) == null ? void 0 : (d = c.yd) == null ? void 0 : d.name) != null ? g : this.VZ() ? "YouTube Video" : "";
				});
				this.ariaLabel = _.W(() => `Open video settings for ${this.name()}`);
				this.Vh = _.T4;
				this.Fea = MCd;
				this.S = _.Dk;
				this.Dj = _.Ni("videoPlayer");
				this.L6 = _.W(() => {
					var a, b = (a = this.F()) == null ? void 0 : a.videoId, c;
					a = (c = this.F()) == null ? void 0 : c.zg;
					var d;
					c = (d = this.F()) == null ? void 0 : d.ph;
					return b ? _.Do(b, a, c) : void 0;
				});
				this.thumbnailUrl = _.W(() => {
					var a, b = (a = this.F()) == null ? void 0 : a.videoId;
					return b ? _.vBa(b) : void 0;
				});
				this.QG = _.W(() => !this.yc() && this.Cb() === 1);
				_.Fk([
					this.F,
					this.Dj,
					this.videoUrl
				], () => {
					var a = this.F(), b, c = (b = this.Dj()) == null ? void 0 : b.nativeElement;
					if (c && this.videoUrl()) {
						let d;
						a = (d = a == null ? void 0 : a.zg) != null ? d : 0;
						c.currentTime < a && (c.currentTime = a);
					}
				});
				_.Fk([this.Yb], () => {
					this.A.Yb.set(this.Yb());
				});
			}
			tT() {
				var a, b = (a = this.Dj()) == null ? void 0 : a.nativeElement;
				if (b) {
					var c, d;
					a = (d = (c = this.F()) == null ? void 0 : c.zg) != null ? d : 0;
					b.currentTime < a && (b.currentTime = a);
				}
			}
			HI() {
				var a, b = (a = this.Dj()) == null ? void 0 : a.nativeElement;
				b && (a = this.F(), _.dBd(b, a == null ? void 0 : a.zg, a == null ? void 0 : a.ph));
			}
			GI() {
				var a, b = (a = this.Dj()) == null ? void 0 : a.nativeElement;
				b && (a = this.F(), _.eBd(b, a == null ? void 0 : a.zg, a == null ? void 0 : a.ph));
			}
			Lp() {
				if (this.QG()) {
					var a, b = (a = this.F()) != null ? a : {};
					a = _.cBd(this.duration());
					var c;
					this.VZ() ? c = {
						type: "existingYoutube",
						ura: b.videoId,
						thumbnailUrl: this.thumbnailUrl(),
						VR: b.zg,
						TR: b.ph,
						rZ: b.fps,
						videoDurationSeconds: a
					} : this.youtubeUrl() ? c = {
						type: "sampleYoutube",
						zeb: this.youtubeUrl(),
						VR: b.zg,
						TR: b.ph,
						rZ: b.fps,
						videoDurationSeconds: a
					} : c = {
						type: "uploaded",
						X1: this.videoUrl(),
						VR: b.zg,
						TR: b.ph,
						rZ: b.fps,
						videoDurationSeconds: a
					};
					_.jC(this.dialog.open(_.V4, {
						data: c,
						width: "500px"
					})).subscribe((d) => {
						if (d) {
							let g = this.A.Wf(), k;
							if (this.VZ()) var e = b.videoId;
							else {
								var f;
								if (g == null ? 0 : (k = g.he) == null ? 0 : k.Ni) a: {
									e = this.A;
									if ((f = e.he()) == null ? 0 : f.Ni) {
										if (e = _.zH(e.he().Ni)) {
											f = _.Co(e.videoUrl.toString());
											break a;
										}
									}
									f = void 0;
								}
								else f = g == null ? void 0 : (e = g.Nd) == null ? void 0 : e.videoId;
								e = f;
							}
							_.DH(this.H, this.Yb(), {
								Nd: {
									videoId: e,
									zg: d.startTime,
									ph: d.endTime,
									fps: d.fps
								},
								status: "PREPARING",
								Cb: 0
							});
						}
					});
				}
			}
		};
		d5.J = function(a) {
			return new (a || d5)();
		};
		d5.ka = _.u({
			type: d5,
			da: [["ms-prompt-video"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Dj, zDd, 5);
				a & 2 && _.ki();
			},
			Ua: 1,
			Ja: function(a, b) {
				a & 2 && _.wh("aria-label", b.ariaLabel());
			},
			inputs: {
				Yb: [1, "promptMediaId"],
				yc: [1, "isDisabled"]
			},
			features: [_.yi([c5])],
			ha: 3,
			ia: 1,
			la: [
				["videoPlayer", ""],
				[
					1,
					"thumbnail",
					3,
					"src"
				],
				[
					1,
					"thumbnail-icon",
					3,
					"iconName"
				],
				[
					"alt",
					"YouTube video thumbnail",
					1,
					"thumbnail",
					3,
					"src"
				],
				[
					1,
					"thumbnail",
					3,
					"loadedmetadata",
					"timeupdate",
					"play",
					"src"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, kCd, 2, 1)(1, lCd, 2, 1, "video", 1)(2, mCd, 1, 1, "span", 2);
				a & 2 && _.C(b.VZ() ? 0 : b.videoUrl() ? 1 : 2);
			},
			dependencies: [
				_.tz,
				_.dz,
				_.zC,
				_.IC
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;position:relative}"]
		});
		var ADd = class {
			constructor() {
				this.Cb = _.V();
				this.tokenCount = _.V();
				this.errorMessage = _.V();
				this.Vh = _.T4;
			}
		};
		ADd.J = function(a) {
			return new (a || ADd)();
		};
		ADd.ka = _.u({
			type: ADd,
			da: [["ms-token-status"]],
			inputs: {
				Cb: [1, "tokenCountStatus"],
				tokenCount: [1, "tokenCount"],
				errorMessage: [1, "errorMessage"]
			},
			ha: 3,
			ia: 3,
			la: [
				["data-test-id", "status"],
				[
					"data-test-id",
					"status",
					1,
					"token-status-error"
				],
				["data-test-id", "token-count"]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, nCd, 2, 0, "span", 0), _.B(1, oCd, 2, 1, "span", 1), _.B(2, pCd, 3, 5, "span", 2));
				a & 2 && (_.C(b.Cb() === b.Vh.HV ? 0 : -1), _.y(), _.C(b.Cb() === b.Vh.ERROR ? 1 : -1), _.y(), _.C(b.Cb() === b.Vh.qo && b.tokenCount() ? 2 : -1));
			},
			dependencies: [_.tz, _.wO],
			Ab: 2
		});
		var BDd, CDd;
		BDd = function(a) {
			return !a || a === "*" || a.includes("image/*") ? "media" : "image";
		};
		CDd = function(a, b) {
			return _.x(function* () {
				if (_.Zn(_.Uu)(b)) {
					var c = _.fo(_.Ru(b), _.lc(b.getData()));
					return _.kd(c);
				}
				var d = yield (c = yield _.rH(a.H, b.getId())) == null ? void 0 : c.blob();
				if (!d) {
					let e;
					a.I.error(`Failed to load prompt ${BDd((e = a.Zna()) == null ? void 0 : e.BK)} from Drive.`);
					a.Dx();
					return null;
				}
				return _.ld(d);
			});
		};
		_.e5 = class {
			constructor() {
				this.zHa = _.V();
				this.ima = _.V();
				this.Zna = _.V();
				this.Yb = _.V("");
				this.yc = _.V(!1);
				this.tq = _.V();
				this.La = _.V();
				this.wq = _.V(!1);
				this.R4 = _.V(!1);
				this.zBa = _.Ki();
				this.UMb = _.Ni(Y4);
				this.ZMb = _.Ni($4);
				this.QT = _.Ni(b5);
				this.T7a = _.Ni(d5);
				this.A = _.W(() => {
					var a, b = (a = this.Zna()) == null ? void 0 : a.BK;
					return BDd(b);
				});
				this.aNb = _.W(() => `Prompt ${this.A()}`);
				this.z8a = _.W(() => `Remove prompt ${this.A()} from Drive`);
				this.Wf = _.W(() => {
					var a = this.Yb(), b = this.pea.A();
					if (a && b) return b[a];
				});
				this.Gd = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Gd;
				});
				this.XHb = _.W(() => {
					var a;
					return this.Gd() === "FILE" && yCd((a = this.Wf()) == null ? void 0 : a.Xd);
				});
				this.MNb = _.W(() => {
					var a = this.F.H().every((b) => !!b && _.Fm(b));
					return Object.assign({}, this.Zna(), { Ama: a });
				});
				this.tokenCount = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.tokenCount;
				});
				this.Cb = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.Cb;
				});
				this.errorMessage = _.W(() => {
					var a;
					return (a = this.Wf()) == null ? void 0 : a.errorMessage;
				});
				this.hasError = _.W(() => {
					var a;
					return this.Cb() === 2 || ((a = this.Wf()) == null ? void 0 : a.status) === "ERROR";
				});
				this.PS = _.W(() => {
					var a = this.Wf();
					if (!a) return "";
					if (this.Gd() === "YOUTUBE") return "YouTube Video";
					if (this.Gd() === "AUDIO" && a.yd) return _.NO(a.yd.mimeType);
					var b, c, d, e, f, g, k, p;
					return (p = (k = (g = (f = (b = a.kb) == null ? void 0 : b.name) != null ? f : (c = a.Ve) == null ? void 0 : c.hk) != null ? g : (d = a.he) == null ? void 0 : d.name) != null ? k : (e = a.yd) == null ? void 0 : e.name) != null ? p : a.yd ? _.NO(a.yd.mimeType) : "";
				});
				this.fDa = _.W(() => {
					if (this.wq()) {
						let b;
						return ((b = this.Wf()) == null ? void 0 : b.status) === "PREPARING";
					}
					var a;
					return ((a = this.Wf()) == null ? void 0 : a.status) === "PREPARING" || this.Cb() === 0;
				});
				this.H = _.m(_.sH);
				this.F = _.m(_.gH);
				this.I = _.m(_.iC);
				this.pea = _.m(_.FH);
				this.TI = _.M(null);
				this.ZO = NCd;
				this.Fea = MCd;
				this.S = _.Dk;
				_.Fk([this.zHa], () => {
					var a = this;
					return _.x(function* () {
						var b = a.zHa();
						b && (a.TI.set(null), b = yield CDd(a, b), a.TI.set(b));
					});
				});
			}
			Dx() {
				var a;
				(a = this.ima()) == null || a.setValue(null);
				this.zBa.emit(null);
			}
		};
		_.e5.J = function(a) {
			return new (a || _.e5)();
		};
		_.e5.ka = _.u({
			type: _.e5,
			da: [["ms-prompt-media"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.UMb, Y4, 5)(b.ZMb, $4, 5)(b.QT, b5, 5)(b.T7a, d5, 5);
				a & 2 && _.ki(4);
			},
			inputs: {
				zHa: [1, "promptMedia"],
				ima: [1, "mediaFormControl"],
				Zna: [1, "replaceMediaButtonConfig"],
				Yb: [1, "promptMediaId"],
				yc: [1, "isDisabled"],
				tq: [1, "currentModel"],
				La: [1, "runSettings"],
				wq: [1, "disableTokenCount"],
				R4: [1, "canInline"]
			},
			outputs: { zBa: "imageReplaced" },
			ha: 2,
			ia: 1,
			la: [
				[
					"data-test-id",
					"prompt-media-container",
					1,
					"prompt-media-item-container",
					3,
					"has-error"
				],
				[1, "container"],
				[
					"data-test-id",
					"prompt-media-container",
					1,
					"prompt-media-item-container"
				],
				[1, "preview-container"],
				[3, "promptMediaId"],
				[
					3,
					"promptMediaId",
					"disableTokenCount"
				],
				[
					3,
					"promptMediaId",
					"isDisabled"
				],
				[1, "content-container"],
				[
					1,
					"name",
					3,
					"matTooltip"
				],
				[1, "status-and-tokens"],
				["data-test-id", "status"],
				[
					3,
					"tokenCountStatus",
					"tokenCount",
					"errorMessage"
				],
				[1, "actions-container"],
				[
					"ms-button",
					"",
					"aria-label",
					"Inline media",
					"matTooltip",
					"Inline media",
					"variant",
					"icon-borderless",
					1,
					"action-button",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Remove media",
					"matTooltip",
					"Remove media",
					"variant",
					"icon-borderless",
					1,
					"action-button",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"aria-label",
					"Edit video options",
					"matTooltip",
					"Edit video options",
					"variant",
					"icon-borderless",
					1,
					"action-button",
					3,
					"click",
					"iconName",
					"disabled"
				],
				[1, "divider"],
				[
					"ms-button",
					"",
					"aria-label",
					"Inline media",
					"matTooltip",
					"Inline media",
					"variant",
					"icon-borderless",
					1,
					"action-button",
					3,
					"click",
					"iconName"
				],
				[
					1,
					"prompt-media",
					3,
					"src",
					"alt"
				],
				[1, "loading-container"],
				[1, "overlay"],
				[1, "bottom-right-controls"],
				[
					3,
					"imageAdded",
					"addMediaButtonConfig",
					"allowMenuToOpen"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltipPosition",
					"right",
					3,
					"click",
					"iconName",
					"matTooltip",
					"aria-label"
				],
				[
					1,
					"loading-indicator",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, ACd, 17, 10, "div", 0)(1, DCd, 7, 6, "div", 1);
				a & 2 && _.C(b.Yb() ? 0 : 1);
			},
			dependencies: [
				_.W4,
				_.Yy,
				_.tz,
				_.dz,
				_.IC,
				_.HC,
				Y4,
				$4,
				b5,
				d5,
				ADd
			],
			styles: [".prompt-media-item-container[_ngcontent-%COMP%]{cursor:default;background-color:var(--color-v3-surface-container);border-radius:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:56px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:180px;max-width:280px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:1px solid var(--color-v3-outline-var);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 12px;gap:8px}.prompt-media-item-container.has-error[_ngcontent-%COMP%]{border:1px solid var(--color-v3-accent-3)}.prompt-media-item-container.has-error[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{color:var(--color-v3-accent-3)}.prompt-media-item-container.has-error[_ngcontent-%COMP%]     .token-status-error{color:var(--color-v3-accent-3)}.prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]{background-color:var(--color-v3-surface-container-highest);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;overflow:hidden;border-radius:4px;width:32px;height:32px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     ms-prompt-audio, .prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     ms-prompt-file, .prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     ms-prompt-image, .prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     ms-prompt-video{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     img, .prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     video{width:100%;height:100%;object-fit:cover;border-radius:4px}.prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     .thumbnail-icon{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:24px;height:24px;width:24px;pointer-events:none}.prompt-media-item-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]     .thumbnail-icon.interactive{cursor:pointer;pointer-events:auto}.prompt-media-item-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0}.prompt-media-item-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:normal}.prompt-media-item-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .status-and-tokens[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;color:var(--color-v3-text-var)}.prompt-media-item-container[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.prompt-media-item-container[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-button.mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]{--mat-icon-button-state-layer-size:36px;padding:6px}.prompt-media-item-container[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;height:20px;margin-top:2px}.prompt-media-item-container[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:1px;height:24px;background-color:var(--color-v3-outline-var)}"]
		});
		var DDd = function(a) {
			a & 1 && _.I(0, "ms-chat-loading-indicator", 6);
			a & 2 && (a = _.K(), _.E("noAnimation", a.YE()));
		}, EDd = function(a) {
			a & 1 && _.R(0, " Thoughts ");
		}, FDd = function(a) {
			a & 1 && (_.F(0, "div", 7), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.lTb(), " "));
		}, GDd = function(a) {
			a & 1 && (_.F(0, "p", 12), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("@fadeSlide", void 0), _.y(), _.U(a.JWa()));
		}, HDd = function(a) {
			a & 1 && _.B(0, GDd, 2, 2, "p", 12);
			a & 2 && (a = _.K(), _.C(a.SJa() ? 0 : -1));
		}, IDd = function(a) {
			a & 1 && (_.F(0, "p", 12), _.R(1), _.H());
			if (a & 2) {
				a = _.K();
				let b = _.O(2);
				_.y();
				_.S(" ", (b == null ? 0 : b.expanded) ? a.fOa : a.EOa, " ");
			}
		}, KDd;
		_.hx.prototype.XL = _.ca(59, function() {
			return _.mj(this, _.gx, 8, _.oj());
		});
		_.mx.prototype.XL = _.ca(58, function() {
			return _.mj(this, _.Tw, 7, _.oj());
		});
		_.JDd = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		KDd = ["thoughtPanel"];
		_.f5 = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.BF);
				this.F = _.m(_.VL);
				this.ix = _.Li.required();
				this.YE = _.V(!1);
				this.text = _.Li.required();
				this.thinkingBudget = _.V();
				this.modelName = _.Li.required();
				this.oTb = _.Ni("thoughtPanel");
				this.model = void 0;
				this.fOa = "Collapse to hide model thoughts";
				this.EOa = "Expand to view model thoughts";
				this.SJa = _.M(!0);
				this.JWa = _.W(() => {
					var a = this.text().split("\n").map((b) => b.trim()).filter(String);
					return a.map((b) => {
						var c, d;
						return ((c = b.match(/\*\*(.*)\*\*/)) == null ? void 0 : (d = c[1]) == null ? void 0 : d.trim()) || "";
					}).filter(String).at(-1) || a.at(-1) || "";
				});
				this.lTb = _.W(() => {
					if (!this.model || !_.Im(this.model, 35)) return "";
					var a = this.thinkingBudget();
					switch (a) {
						case 0: return "";
						case void 0:
						case -1: return "Auto";
						default: return `Manual: ${a}`;
					}
				});
				this.F.disabled.set(!0);
				_.Fk([this.JWa], () => {
					this.model && _.Im(this.model, 38) && (this.SJa.set(!1), setTimeout(() => {
						this.SJa.set(!0);
					}, 200));
				});
			}
			ib() {
				this.model = _.AF(this.A, this.modelName());
			}
		};
		_.f5.J = function(a) {
			return new (a || _.f5)();
		};
		_.f5.ka = _.u({
			type: _.f5,
			da: [["ms-thought-chunk"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.oTb, KDd, 5);
				a & 2 && _.ki();
			},
			inputs: {
				ix: [1, "isThinkingRunning"],
				YE: [1, "noAnimation"],
				text: [1, "text"],
				thinkingBudget: [1, "thinkingBudget"],
				modelName: [1, "modelName"]
			},
			fc: ["*"],
			ha: 17,
			ia: 11,
			la: [
				["thoughtPanel", ""],
				[
					"displayMode",
					"flat",
					1,
					"compact-accordion"
				],
				[
					"togglePosition",
					"after",
					"hideToggle",
					"true",
					1,
					"thought-panel"
				],
				[1, "top-panel-header"],
				[1, "top-panel-title"],
				[
					"src",
					"https://www.gstatic.com/aistudio/watermark/watermark.png",
					"alt",
					"Thinking",
					1,
					"thinking-progress-icon"
				],
				[3, "noAnimation"],
				[
					"matTooltip",
					"Thinking budget",
					1,
					"v3-font-label",
					"label-chip"
				],
				["disabled", ""],
				[3, "click"],
				[
					1,
					"v3-font-label",
					"thought-panel-footer",
					3,
					"matTooltip"
				],
				[1, "thought-collapsed-text-container"],
				[1, "thought-collapsed-text"],
				[
					1,
					"footer-icon",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				if (a & 1) {
					let c = _.n();
					_.Xh();
					_.F(0, "mat-accordion", 1)(1, "mat-expansion-panel", 2, 0)(3, "mat-expansion-panel-header", 3)(4, "mat-panel-title", 4);
					_.I(5, "img", 5);
					_.B(6, DDd, 1, 1, "ms-chat-loading-indicator", 6)(7, EDd, 1, 0);
					_.H();
					_.B(8, FDd, 2, 1, "div", 7);
					_.H();
					_.Yh(9);
					_.H();
					_.F(10, "mat-expansion-panel", 8)(11, "mat-expansion-panel-header", 9);
					_.J("click", function() {
						_.q(c);
						var d = _.O(2);
						return _.t(d == null ? null : d.toggle());
					});
					_.F(12, "mat-panel-title", 10)(13, "div", 11);
					_.B(14, HDd, 1, 1)(15, IDd, 2, 1, "p", 12);
					_.H();
					_.I(16, "span", 13);
					_.H()()()();
				}
				a & 2 && (a = _.O(2), _.y(5), _.P("in-progress", b.ix())("no-animation", b.YE()), _.y(), _.C(b.ix() ? 6 : 7), _.y(2), _.C(b.model && _.Im(b.model, 35) ? 8 : -1), _.y(4), _.E("matTooltip", (a == null ? 0 : a.expanded) ? b.fOa : b.EOa), _.y(2), _.C(b.model && _.Im(b.model, 38) && b.ix() ? 14 : 15), _.y(2), _.P("expanded", a == null ? null : a.expanded), _.E("iconName", b.S.gh));
			},
			dependencies: [
				_.LO,
				_.tz,
				_.dz,
				_.OE,
				_.NE,
				_.KE,
				_.LE,
				_.ME,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]{display:block;margin-bottom:4px;margin-top:12px;width:100%}[_nghost-%COMP%]   .thinking-progress-icon[_ngcontent-%COMP%]{height:16px;margin-right:4px;width:16px}[_nghost-%COMP%]   .thinking-progress-icon.in-progress[_ngcontent-%COMP%]:not(.no-animation){-webkit-animation:_ngcontent-%COMP%_rotate 3s linear infinite;animation:_ngcontent-%COMP%_rotate 3s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}[_nghost-%COMP%]   .thought-panel-footer[_ngcontent-%COMP%]{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-right:0}[_nghost-%COMP%]   .thought-panel-footer[_ngcontent-%COMP%]   .footer-icon[_ngcontent-%COMP%]{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transform:rotate(90deg);transform:rotate(90deg)}[_nghost-%COMP%]   .thought-panel-footer[_ngcontent-%COMP%]   .footer-icon.expanded[_ngcontent-%COMP%]{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}[_nghost-%COMP%]   .top-panel-header[_ngcontent-%COMP%]{--mat-expansion-header-collapsed-state-height:max(40px,100%);--mat-expansion-header-expanded-state-height:max(40px,100%);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:12px 12px 12px 16px}[_nghost-%COMP%]   .top-panel-header[_ngcontent-%COMP%]   .label-chip[_ngcontent-%COMP%]{padding:2px 4px;background-color:var(--color-v3-outline-var);border-radius:16px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}[_nghost-%COMP%]   .thought-collapsed-text-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;width:0}[_nghost-%COMP%]   .thought-collapsed-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}.top-panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.top-panel-header[_ngcontent-%COMP%]   .top-panel-title[_ngcontent-%COMP%]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.top-panel-header[_ngcontent-%COMP%]   .top-panel-title-content[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.top-panel-header[_ngcontent-%COMP%]   loading-indicator[_ngcontent-%COMP%]{display:block;width:46px;translate:-12px 5px}mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{border:1px solid var(--color-v3-outline-var);border-radius:12px;overflow:hidden;box-shadow:var(--v3-shadow-xs);--mat-expansion-header-disabled-state-text-color:var(--mat-sys-on-surface);--mat-expansion-header-hover-state-layer-color:var(--color-surface-bright);--mat-expansion-container-background-color:var(--color-v3-surface-container)}mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{background:var(--color-v3-surface-container)}mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{margin-bottom:16px}"],
			data: { animation: [_.qm("fadeSlide", [_.um(":enter", [_.sm({
				opacity: 0,
				transform: "translateY(100%)"
			}), _.rm("300ms ease-out", _.sm({
				opacity: 1,
				transform: "translateY(0)"
			}))]), _.um(":leave", [_.rm("200ms ease-in", _.sm({ opacity: 0 }))])])] }
		});
		var SDd, TDd, LDd, MDd, NDd;
		_.ODd = function(a = {}, b = !1) {
			if (b) return "Cancel generation";
			b = a.UHb;
			var c = a.fZ;
			if (a.sIb) return "This model requires a paid API key to use. Please select an API key.";
			if (a.kCb) {
				if (c) return "Cannot run with unsafe images. Please remove them.";
				if (b) return "Checking image safety...";
			}
			return a.iIb ? "Media is processing..." : a.PIb ? "Video is processing..." : a.lza ? LDd : a.hCa ? MDd : NDd;
		};
		_.PDd = function(a, b) {
			return _.Lj(a, 1, b);
		};
		_.QDd = function(a, b) {
			return _.Ap(a, 1, _.e0a, b);
		};
		_.RDd = function(a, b) {
			return _.ln(a, _.Vw, 1, b);
		};
		SDd = _.Aa() ? "⌘" : "Ctrl";
		TDd = _.Aa() ? "Option" : "Alt";
		LDd = `Send prompt (Enter)\nNew line (Shift + Enter)\nAppend to prompt (${TDd} + Enter)`;
		MDd = `Send prompt (${SDd} + Enter)\nAppend to prompt (${TDd} + Enter)`;
		NDd = `Run prompt (${SDd} + Enter)\nAppend to prompt (${TDd} + Enter)`;
		var YDd, ZDd, $Dd, aEd, cEd, eEd, gEd, hEd, jEd, kEd, lEd, oEd, pEd, qEd, sEd, tEd, vEd, wEd, xEd, yEd, zEd, AEd, CEd, DEd, EEd, FEd, HEd, h5, IEd, JEd, KEd, LEd, MEd, OEd, PEd, QEd, REd, SEd, TEd, UEd, VEd, WEd, XEd, YEd, ZEd, $Ed, aFd, gFd, hFd, iFd;
		_.UDd = function(a) {
			return a == null ? void 0 : a.map((b) => {
				switch (b) {
					case 3: return "AUDIO";
					case 2: return "IMAGE";
					case 1: return "TEXT";
					case 4: return "VIDEO";
					case 0: return "";
					default: return "";
				}
			});
		};
		_.VDd = function(a, b) {
			return _.x(function* () {
				if (!b) return !0;
				var c = a.open(_.KH);
				return !!(yield _.pf(_.jC(c)));
			});
		};
		_.WDd = function(a) {
			var b, c;
			return _.mwd((c = a == null ? void 0 : (b = _.Z(a, _.nwd, 58)) == null ? void 0 : _.mj(b, _.owd, 1, _.oj())) != null ? c : []);
		};
		_.XDd = function(a, b) {
			return _.dvd(a).split("\n").map((c, d) => `${"  ".repeat(d === 0 ? 0 : b)}${c}`);
		};
		YDd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 2)(1, "div", 4);
				_.I(2, "span", 5);
				_.H();
				_.F(3, "span", 6);
				_.R(4);
				_.F(5, "a", 7);
				_.J("click", function(c) {
					return c.stopPropagation();
				});
				_.R(6, "Learn more");
				_.H()();
				_.F(7, "button", 8, 0);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.toggle());
				});
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(2), _.E("iconName", a.S.nG), _.y(2), _.S(" ", a.yBb, " "), _.y(), _.E("href", a.SB, _.rg), _.y(2), _.E("iconName", a.S.Pib));
		};
		ZDd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 9, 1);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.toggle());
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.S.nG));
		};
		$Dd = function(a) {
			a & 1 && _.I(0, "span", 8);
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Wsb));
		};
		aEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 2)(1, "div", 7);
				_.B(2, $Dd, 1, 1, "span", 8);
				_.F(3, "button", 9);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.disabled() ? null : c.dcb());
				});
				_.H()()();
			}
			a & 2 && (a = _.K(), _.y(2), _.C(a.Sj() && a.FE() ? 2 : -1), _.y(), _.P("ms-button-active", a.Sj() && a.FE()), _.E("iconName", a.S.CPa)("disabled", (a.disabled() || a.PW()) && !a.FE())("ve", a.ve.XNa)("veImpression", !0)("veClick", !0)("matTooltip", a.nma()));
		};
		cEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 10);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(bEd(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("active", !0)("iconName", a.S.c3)("matTooltip", a.Q4()));
		};
		eEd = function(a) {
			a & 1 && _.I(0, "button", 11);
			if (a & 2) {
				a = _.K(2);
				let b = _.O(6);
				_.E("iconName", a.S.c3)("matMenuTriggerFor", b)("matTooltip", a.Q4())("disabled", a.disabled() || dEd(a, a.Nta.bQa));
			}
		};
		gEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.Th(0);
				_.F(1, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.Vh(0), d = _.K(2);
					return _.t(bEd(d, c));
				});
				_.H();
			}
			if (a & 2) {
				a = _.K(2);
				let b = _.Uh(a.bX()[0]);
				_.y();
				_.E("iconName", a.S.c3)("disabled", fEd(a, b))("matTooltip", a.Q4());
			}
		};
		hEd = function(a) {
			a & 1 && _.B(0, eEd, 1, 4, "button", 11)(1, gEd, 2, 4, "button", 12);
			a & 2 && (a = _.K(), _.C(a.bX().length > 1 ? 0 : a.bX().length === 1 ? 1 : -1));
		};
		jEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(iEd(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.P("ms-button-active", dEd(a, a.Nta.bQa)), _.E("iconName", a.S.Zpb)("disabled", fEd(a, a.s0()))("matTooltip", a.QIa()));
		};
		kEd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K();
					return _.t(bEd(e, d));
				});
				_.I(1, "span", 16);
				_.R(2);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(), _.E("disabled", fEd(b, a)), _.y(), _.E("iconName", b.S.c3), _.y(), _.S(" ", a.name, " "));
		};
		lEd = function(a) {
			a & 1 && _.I(0, "span", 9);
			a & 2 && (a = _.K(2).V, _.E("iconName", a.icon));
		};
		oEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 10)(1, "button", 14);
				_.Ei(2, "buildVeProtoMetadata");
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(2).V, e = _.K(2);
					return _.t(e.Lp(d.id, c));
				});
				_.R(3, " Edit ");
				_.H()();
			}
			if (a & 2) {
				a = _.K(2).V;
				let b = _.Vh(0), c = _.K(2);
				_.y();
				_.E("disabled", a.id === c.aD.jG ? !mEd(c, c.aD.jG) : !b);
				_.vh("aria-label", "Edit " + a.displayName);
				_.E("matTooltip", nEd(c, a.id))("ve", c.ve.vta)("veClick", !0)("veMetadata", _.Fi(2, 6, g5(a.id, "EDIT_BUTTON", b)));
			}
		};
		pEd = function(a) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (_.K(4), a = _.O(6), _.E("ngTemplateOutlet", a));
		};
		qEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 13)(1, "label", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.O(5), d = _.K(4);
					return _.t(!c.disabled && d.D1());
				});
				_.I(2, "span", 9);
				_.R(3, "Automatic Function Response ");
				_.H();
				_.F(4, "mat-slide-toggle", 16, 3);
				_.J("change", function() {
					_.q(b);
					var c = _.K(4);
					return _.t(c.D1());
				})("click", function(c) {
					return c.stopPropagation();
				});
				_.H()();
			}
			a & 2 && (a = _.K(4), _.E("matTooltipPosition", a.JE() ? "below" : "right")("matTooltip", a.A4()), _.y(2), _.E("iconName", a.S.zkb), _.y(2), _.E("checked", a.zZ())("disabled", !mEd(a, a.aD.jG)));
		};
		sEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 7)(1, "label", 8);
				_.Ei(2, "buildVeProtoMetadata");
				_.J("click", function() {
					_.q(b);
					var c = _.K().V, d = _.K(2);
					c.yc() || rEd(d, c.id);
					return _.t();
				});
				_.B(3, lEd, 1, 1, "span", 9);
				_.R(4);
				_.H();
				_.B(5, oEd, 4, 8, "div", 10);
				_.F(6, "mat-slide-toggle", 11, 2);
				_.Ei(8, "buildVeProtoMetadata");
				_.J("change", function() {
					_.q(b);
					var c = _.K().V, d = _.K(2);
					return _.t(rEd(d, c.id));
				});
				_.H()();
				_.B(9, pEd, 1, 1, "ng-container", 12);
				_.B(10, qEd, 6, 5, "div", 13);
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.Vh(0), c = _.K(2);
				_.y();
				_.E("ve", c.ve.vta)("veImpression", !0)("veClick", !0)("veMetadata", _.Fi(2, 17, g5(a.id, "LABEL", b)));
				_.y(2);
				_.C(a.icon ? 3 : -1);
				_.y();
				_.S(" ", a.displayName, " ");
				_.y();
				_.C(a.MH ? 5 : -1);
				_.y();
				_.vh("aria-label", a.displayName);
				_.E("checked", b)("disabled", a.yc())("matTooltip", a.tooltip())("matTooltipPosition", c.JE() ? "below" : "right")("ve", c.ve.vta)("veClick", !0)("veMetadata", _.Fi(8, 19, g5(a.id, "TOGGLE", !b)));
				_.y(3);
				_.C(a.id === c.aD.Kea && b ? 9 : -1);
				_.y();
				_.C(a.id === c.aD.jG && c.ZBa ? 10 : -1);
			}
		};
		tEd = function(a, b) {
			a & 1 && (_.Th(0), _.B(1, sEd, 11, 21));
			a & 2 && (a = b.V, _.Uh(a.bI()), _.y(), _.C(a.isVisible() ? 1 : -1));
		};
		vEd = function(a) {
			a & 1 && (_.F(0, "div", 6), _.Ah(1, tEd, 2, 2, null, null, uEd), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.PK()));
		};
		wEd = function(a) {
			a & 1 && _.I(0, "span", 9);
			a & 2 && (a = _.K(2).V, _.E("iconName", a.icon));
		};
		xEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 17)(1, "button", 19);
				_.B(2, wEd, 1, 1, "span", 9);
				_.F(3, "span", 20);
				_.R(4);
				_.H()();
				_.F(5, "button", 21);
				_.J("click", function() {
					_.q(b);
					var c = _.K().V, d = _.K(2);
					return _.t(rEd(d, c.id));
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y(2);
				_.C(a.icon ? 2 : -1);
				_.y(2);
				_.U(a.displayName);
				_.y();
				_.E("matTooltip", _.xi("Remove ", a.displayName))("iconName", b.S.ac);
				_.vh("aria-label", "Remove " + a.displayName);
				_.E("matTooltip", a.tooltip())("disabled", a.yc());
			}
		};
		yEd = function(a, b) {
			a & 1 && _.B(0, xEd, 6, 8, "div", 17);
			a & 2 && (a = b.V, _.C(a.isVisible() && a.bI() ? 0 : -1));
		};
		zEd = function(a) {
			a & 1 && (_.F(0, "div", 17)(1, "button", 22), _.I(2, "span", 9), _.F(3, "span", 20), _.R(4), _.H()()());
			a & 2 && (a = _.K(2), _.y(), _.E("matTooltip", a.Fza), _.y(), _.E("iconName", a.S.z2), _.y(2), _.U(a.Lia));
		};
		AEd = function(a) {
			a & 1 && _.I(0, "span", 9);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		CEd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 18);
				_.Ei(1, "buildVeProtoMetadata");
				_.F(2, "button", 23);
				_.Ei(3, "buildVeProtoMetadata");
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(2);
					d = d.id;
					rEd(e, d);
					BEd(e, d);
					return _.t();
				});
				_.B(4, AEd, 1, 1, "span", 9);
				_.F(5, "span", 20);
				_.R(6);
				_.H()();
				_.F(7, "button", 24);
				_.Ei(8, "buildVeProtoMetadata");
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(2);
					return _.t(BEd(e, d.id));
				});
				_.H()();
			}
			a & 2 && (a = b.V, b = _.K(2), _.E("ve", b.ve.Uob)("veImpression", !0)("veMetadata", _.Fi(1, 14, g5(a.id, "SUGGESTION", !1))), _.y(2), _.E("ve", b.ve.Tob)("veClick", !0)("veMetadata", _.Fi(3, 16, g5(a.id, "SUGGESTION_ACCEPT", !0))), _.wh("aria-label", "Add suggested tool: " + a.displayName), _.y(2), _.C(a.icon ? 4 : -1), _.y(2), _.U(a.displayName), _.y(), _.E("iconName", b.S.ac), _.vh("aria-label", "Dismiss suggestion: " + a.displayName), _.E("ve", b.ve.Vob)("veClick", !0)("veMetadata", _.Fi(8, 18, g5(a.id, "SUGGESTION_DISMISS", !1))));
		};
		DEd = function(a) {
			a & 1 && (_.F(0, "ms-horizontal-scroll", 5), _.Ah(1, yEd, 1, 1, null, null, uEd), _.B(3, zEd, 5, 3, "div", 17), _.Ah(4, CEd, 9, 20, "div", 18, uEd), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.PK()), _.y(2), _.C(a.gpa() ? 3 : -1), _.y(), _.Bh(a.jbb()));
		};
		EEd = function(a) {
			a & 1 && (_.F(0, "span", 25), _.R(1, " Source: "), _.I(2, "span", 26), _.R(3, " Google Search "), _.H());
			a & 2 && (a = _.K(), _.y(2), _.E("iconName", a.S.Oea));
		};
		FEd = function(a, b, c) {
			b = b.baseModel();
			if (!b) return !0;
			var d;
			b = (d = _.pwd(b)) == null ? void 0 : d.get(a);
			return !_.n4(a, b, c);
		};
		HEd = function(a, b, c) {
			var d, e = (d = GEd[a]) != null ? d : "";
			FEd(a, b, c) && (e += ". This tool is not compatible with the current active tools.");
			return e;
		};
		h5 = function(a) {
			var b, c, d;
			return Object.assign({}, a, {
				MH: (b = a.MH) != null ? b : !1,
				yc: (c = a.yc) != null ? c : (e, f) => FEd(a.id, e, f),
				tooltip: (d = a.tooltip) != null ? d : (e, f) => HEd(a.id, e, f)
			});
		};
		IEd = function(a, b, c) {
			b = b.model();
			if (!b) return !0;
			var d;
			b = (d = _.WDd(b)) == null ? void 0 : d.get(a);
			return !_.n4(a, b, c);
		};
		JEd = function(a) {
			var b;
			return Object.assign({}, a, {
				MH: (b = a.MH) != null ? b : !1,
				yc: (c, d) => IEd(a.id, c, d),
				tooltip: (c, d) => {
					var e = a.id, f, g = (f = GEd[e]) != null ? f : "";
					IEd(e, c, d) && (g += ". This tool is not compatible with the current active tools.");
					return g;
				}
			});
		};
		KEd = function(a) {
			a & 1 && _.I(0, "div", 1);
		};
		LEd = function(a) {
			a & 1 && _.I(0, "ms-light-bulb-disclaimer", 8);
			a & 2 && (a = _.K(), _.E("isExpanded", !a.Gc()));
		};
		MEd = function(a, b) {
			a & 1 && _.I(0, "ms-prompt-media", 18);
			if (a & 2) {
				b = b.V;
				a = _.K(2);
				b = b[1];
				let c;
				_.E("promptMediaId", (c = b == null ? null : b.Yb) != null ? c : "")("currentModel", a.tq())("runSettings", a.La())("disableTokenCount", !!a.cl().wq)("canInline", !0);
			}
		};
		OEd = function(a) {
			a & 1 && (_.F(0, "div", 9), _.Ah(1, MEd, 1, 5, "ms-prompt-media", 18, NEd), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.Odb()));
		};
		PEd = function(a) {
			a & 1 && _.I(0, "ms-paid-api-key-button", 12);
			a & 2 && (a = _.K(), _.E("hasUserStartedTyping", a.zB())("isPaidModelSelected", a.KE())("isGenerating", a.Gc())("disabled", a.eDa())("disabledTooltip", a.W6a())("isGenerating", a.Gc()));
		};
		QEd = function(a) {
			a & 1 && _.I(0, "ms-prompt-box-tools", 13);
			a & 2 && (a = _.K(), _.E("context", a.cl().context || "chat")("toolConfigs", a.vqa())("disabled", a.KIb())("disabledTooltip", a.ocb())("promptText", a.promptText()));
		};
		REd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-streaming-buttons", 19);
				_.J("startAudioRecordingClick", function() {
					_.q(b);
					_.K().FF.emit();
					return _.t();
				})("stopAudioRecordingClick", function() {
					_.q(b);
					_.K().Qx.emit();
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("requirePaidUsage", a.DN()));
		};
		SEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-stt-button", 20);
				_.J("text", function(c) {
					_.q(b);
					var d = _.K();
					c = c.trim();
					var e = d.promptText();
					d.promptText.set(e ? `${e} ${c}` : c);
					return _.t();
				});
				_.H();
			}
		};
		TEd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-add-media-button", 21);
				_.J("click", function() {
					_.q(b);
					_.K().HTa.emit();
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("addMediaButtonConfig", a.hwb())("disabled", a.PGb())("allowMenuToOpen", a.YTa())("maxAttachmentCount", a.NS())("ve", a.ITa() || a.ve.qfb)("veClick", !0)("veImpression", !0));
		};
		UEd = function(a) {
			a & 1 && (_.F(0, "a", 2), _.R(1, "Gemma models"), _.H());
		};
		VEd = function(a) {
			a & 1 && _.R(0, " Google AI models ");
		};
		WEd = function(a) {
			a & 1 && _.R(0, " To access without Search grounding, please use the API directly. ");
		};
		XEd = function(a) {
			a & 1 && _.Fh(0, "div", 0);
		};
		YEd = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1, " You are out of free generations. "), _.I(2, "br"), _.R(3, " You can continue by using your own paid API key. "), _.H());
		};
		ZEd = function(a) {
			a & 1 && (_.F(0, "span", 4), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.S(" ", a.Hoa(), " "));
		};
		$Ed = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 5)(1, "button", 6);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.Ze());
				});
				_.R(2, " Link API key ");
				_.H()();
			}
		};
		aFd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-callout", 2);
				_.J("onDismiss", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.P4.set(!0));
				});
				_.F(1, "div", 3);
				_.B(2, YEd, 4, 0, "span")(3, ZEd, 2, 1, "span", 4);
				_.H();
				_.B(4, $Ed, 3, 0, "div", 5);
				_.H();
			}
			if (a & 2) {
				let b;
				_.K();
				a = _.Vh(1);
				_.E("calloutType", a.calloutType);
				_.y(2);
				_.C((b = a.type) === "resource_exhausted" ? 2 : b === "api_key_changed" ? 3 : -1);
				_.y(2);
				_.C(a.type === "resource_exhausted" ? 4 : -1);
			}
		};
		_.bFd = function(a) {
			return _.x(function* () {
				var b, c, d;
				return _.Bv([
					(b = _.Z(a, _.Hn, 1)) == null ? void 0 : b.getName(),
					(c = _.Z(a, _.Hn, 1)) == null ? void 0 : c.jc(),
					(d = _.Z(a, _.dv, 2)) == null ? void 0 : d.getName()
				].join(" "));
			});
		};
		_.cFd = function(a, b) {
			return _.ln(a, _.Hn, 1, b);
		};
		_.dFd = function(a, b) {
			return _.ln(a, _.dv, 2, b);
		};
		_.eFd = function(a) {
			return _.Z(a, _.gv, 1);
		};
		_.fFd = function(a, b) {
			return _.$q(a.A, a.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GenerateFunctionCallAnswer", b, {}, _.P5a);
		};
		gFd = class extends _.h {
			constructor(a) {
				super(a);
			}
			fE() {
				return _.Lm(this, 2);
			}
		};
		_.i5 = function(a) {
			return _.x(function* () {
				return _.u1(a, 0);
			});
		};
		hFd = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu\.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/|shorts\/)?)([\w\-]+)([^\s,.]*)/g;
		iFd = {
			bQa: "SCREEN",
			Yhb: "CAMERA"
		};
		var jFd = ["collapseBtn"], kFd = ["expandBtn"], lFd = class {
			constructor(a) {
				this.Pa = a;
				this.vc = _.V(!0);
				this.S = _.Dk;
				this.X8 = _.M(!0);
				this.yBb = _.lnb;
				this.SB = _.mnb;
				this.IWa = _.Ni("collapseBtn");
				this.IZa = _.Ni("expandBtn");
				_.Fk([this.vc], () => {
					this.vc() || this.X8.set(!1);
				});
			}
			toggle() {
				this.X8.update((a) => !a);
				_.bg(() => {
					var a;
					(a = this.X8() ? this.IWa() : this.IZa()) == null || a.nativeElement.focus();
				}, { Pa: this.Pa });
			}
		};
		lFd.J = function(a) {
			return new (a || lFd)(_.Dg(_.Xf));
		};
		lFd.ka = _.u({
			type: lFd,
			da: [["ms-light-bulb-disclaimer"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.IWa, jFd, 5)(b.IZa, kFd, 5);
				a & 2 && _.ki(2);
			},
			inputs: { vc: [1, "isExpanded"] },
			ha: 2,
			ia: 2,
			la: [
				["collapseBtn", ""],
				["expandBtn", ""],
				[1, "disclaimer-expanded"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Show agent disclaimer",
					1,
					"collapsed-button",
					3,
					"iconName"
				],
				[1, "lightbulb-icon-container"],
				[
					1,
					"lightbulb-icon",
					3,
					"iconName"
				],
				[1, "disclaimer-text"],
				[
					"target",
					"_blank",
					3,
					"click",
					"href"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Collapse agent disclaimer",
					1,
					"collapse-button",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Show agent disclaimer",
					1,
					"collapsed-button",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, YDd, 9, 4, "div", 2), _.B(1, ZDd, 2, 1, "button", 3));
				a & 2 && (_.C(b.X8() ? 0 : -1), _.y(), _.C(b.X8() ? -1 : 1));
			},
			dependencies: [_.Yy, _.dz],
			styles: ["[_nghost-%COMP%]{display:contents}.disclaimer-expanded[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;width:95%;padding:2px 8px;margin:0 auto;background:var(--color-v3-surface-container);border:1px solid var(--color-v3-outline-var);border-bottom:none;border-radius:6px 6px 0 0;position:absolute;bottom:calc(100% + 1px);left:0;right:0;z-index:1}.disclaimer-expanded[_ngcontent-%COMP%]   .lightbulb-icon-container[_ngcontent-%COMP%]{padding:6px}.disclaimer-expanded[_ngcontent-%COMP%]   .lightbulb-icon[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:18px;height:18px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:15px;color:var(--color-v3-accent-1);text-align:center}.disclaimer-expanded[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.disclaimer-expanded[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-v3-text-link);text-decoration:none}.disclaimer-expanded[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.disclaimer-expanded[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;color:var(--color-v3-text-var)}.collapsed-button[_ngcontent-%COMP%]{color:var(--color-v3-accent-1);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin-top:-5.5px}"]
		});
		_.mFd = function() {
			return !1;
		};
		_.j5 = class {
			constructor() {
				this.A = _.M(!1);
				this.na = _.M(!1);
				this.aa = _.M(!1);
				this.ma = _.M(!1);
				this.oa = _.M(!1);
				this.fa = _.M([]);
				this.F = _.M();
				this.U = _.M(!1);
				this.H = _.M(!1);
				this.ea = _.M(0);
				this.disabled = this.A.asReadonly();
				this.aKa = this.na.asReadonly();
				this.PW = this.aa.asReadonly();
				this.X = this.ma.asReadonly();
				this.Sj = this.oa.asReadonly();
				this.R = this.fa.asReadonly();
				this.I = this.F.asReadonly();
				this.FE = this.U.asReadonly();
				this.IM = this.H.asReadonly();
				this.audioLevel = this.ea.asReadonly();
				this.nma = _.W(() => this.disabled() ? "Start stream to record" : this.Sj() && this.FE() ? "Stop recording" : this.PW() ? "Failed to open the microphone. Check permissions in the browser and try again." : "Start recording");
				this.Q4 = _.W(() => {
					if (this.disabled()) return "Start stream to use camera";
					var a = this.Sj(), b = this.IM(), c = this.I();
					if (b && a && (c == null ? void 0 : c.type) === "CAMERA") return "Stop camera sharing";
					if (this.X()) return "Failed to open the camera. Check permissions in the browser and try again.";
					a = this.R();
					return a.length === 1 && a[0].type === "CAMERA" ? "Start camera sharing" : "Select camera source";
				});
				this.QIa = _.W(() => {
					if (this.disabled()) return "Start stream to share screen";
					var a = this.Sj(), b = this.IM(), c = this.I();
					return b && a && (c == null ? void 0 : c.type) === "SCREEN" ? "Stop screen sharing" : "Start screen sharing";
				});
				this.s0 = _.W(() => this.R().find((a) => a.type === "SCREEN"));
				this.bX = _.W(() => this.R().filter((a) => a.type === "CAMERA"));
			}
			FF() {
				this.U.set(!0);
			}
			Qx() {
				this.U.set(!1);
			}
			jca() {
				this.H.set(!0);
			}
		};
		_.j5.J = function(a) {
			return new (a || _.j5)();
		};
		_.j5.sa = _.Cd({
			token: _.j5,
			factory: _.j5.J,
			wa: "root"
		});
		var bEd = function(a, b) {
			return _.x(function* () {
				if (!a.disabled() && (!b || (yield _.VDd(a.dialog, a.DN())))) {
					var c = yield _.i5(a.R);
					if (!a.X || c) b ? (a.A.jca(), b.type === "CAMERA" && _.Rn(a.F, "RUN", "Stream Start Camera"), b.type === "SCREEN" && _.Rn(a.F, "RUN", "Stream Start Screenshare")) : (a.A.H.set(!1), a.A.Qx(), a.GKa.emit()), a.A.F.set(b);
				}
			});
		}, dEd = function(a, b) {
			var c;
			return a.IM() && a.Sj() && ((c = a.H()) == null ? void 0 : c.type) === b;
		}, fEd = function(a, b) {
			var c;
			return a.disabled() || b.type === "CAMERA" && a.I() || a.H() && b.type !== ((c = a.H()) == null ? void 0 : c.type);
		}, iEd = function(a) {
			return _.x(function* () {
				a.s0() && (dEd(a, "SCREEN") ? yield bEd(a) : yield bEd(a, a.s0()));
			});
		}, nFd = class {
			constructor() {
				this.S = _.Dk;
				this.ve = { XNa: 247641 };
				this.F = _.m(_.Ou);
				this.A = _.m(_.j5);
				this.R = _.m(_.v1);
				this.U = _.m(_.Op);
				this.dialog = _.m(_.rC);
				this.DN = _.V(!1);
				this.disabled = this.A.disabled;
				this.aKa = this.A.aKa;
				this.FE = this.A.FE;
				this.PW = this.A.PW;
				this.IM = this.A.IM;
				this.Sj = this.A.Sj;
				this.H = this.A.I;
				this.s0 = this.A.s0;
				this.I = this.A.X;
				this.nma = this.A.nma;
				this.Q4 = this.A.Q4;
				this.QIa = this.A.QIa;
				this.bX = this.A.bX;
				this.audioLevel = this.A.audioLevel;
				this.X = this.U.getFlag(_.mF);
				this.Kab = _.Ki();
				this.GKa = _.Ki();
				this.Kh = _.lp();
				this.Nta = iFd;
			}
			dcb() {
				this.FE() ? (this.A.Qx(), this.GKa.emit()) : (_.Rn(this.F, "RUN", "Stream Start Audio Recording"), this.A.FF(), this.Kab.emit());
			}
		};
		nFd.J = function(a) {
			return new (a || nFd)();
		};
		nFd.ka = _.u({
			type: nFd,
			da: [["ms-streaming-buttons"]],
			inputs: { DN: [1, "requirePaidUsage"] },
			outputs: {
				Kab: "startAudioRecordingClick",
				GKa: "stopAudioRecordingClick"
			},
			ha: 9,
			ia: 3,
			la: [
				["cameraSourceMenu", ""],
				[1, "streaming-buttons-container"],
				[1, "mic-container"],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Camera",
					3,
					"active",
					"iconName",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Screen",
					3,
					"iconName",
					"disabled",
					"ms-button-active",
					"matTooltip"
				],
				["xPosition", "after"],
				[
					"mat-menu-item",
					"",
					3,
					"disabled"
				],
				[1, "audio-button-wrapper"],
				[
					1,
					"audio-enabled-icon",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Microphone",
					"data-test",
					"microphone-tooltip",
					3,
					"click",
					"iconName",
					"disabled",
					"ve",
					"veImpression",
					"veClick",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Camera",
					3,
					"click",
					"active",
					"iconName",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Camera",
					3,
					"iconName",
					"matMenuTriggerFor",
					"matTooltip",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Camera",
					3,
					"iconName",
					"disabled",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Camera",
					3,
					"click",
					"iconName",
					"disabled",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-primary",
					"aria-label",
					"Screen",
					3,
					"click",
					"iconName",
					"disabled",
					"matTooltip"
				],
				[
					"mat-menu-item",
					"",
					3,
					"click",
					"disabled"
				],
				[
					1,
					"start-icon",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1), _.B(1, aEd, 4, 9, "div", 2), _.B(2, cEd, 1, 3, "button", 3)(3, hEd, 2, 1), _.B(4, jEd, 1, 5, "button", 4), _.F(5, "mat-menu", 5, 0), _.Ah(7, kEd, 3, 3, "button", 6, _.yh), _.H()());
				a & 2 && (_.y(), _.C(b.aKa() ? 1 : -1), _.y(), _.C(dEd(b, b.Nta.Yhb) ? 2 : 3), _.y(2), _.C(b.s0() && !b.Kh ? 4 : -1), _.y(3), _.Bh(b.bX()));
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.yA,
				_.wI,
				_.tI,
				_.sI,
				_.vI,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{--color-recorder-active:var(--color-bidi-icons);position:relative}.streaming-buttons-container[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.streaming-buttons-container[_ngcontent-%COMP%]   .mic-container[_ngcontent-%COMP%]:first-child, .streaming-buttons-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:-16px}.mic-container[_ngcontent-%COMP%]{position:relative}.audio-button-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--color-v3-button-container);border:1px solid var(--color-v3-outline);border-radius:12px;position:relative;-moz-box-sizing:border-box;box-sizing:border-box;height:32px}.audio-enabled-icon[_ngcontent-%COMP%]{cursor:default;color:var(--color-v3-text-link);font-size:18px;padding-left:8px;padding-right:4px}.audio-button-wrapper[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{border:none;height:100%}"]
		});
		var oFd = class {
			constructor() {
				this.model = _.M();
				this.ye = _.xm(this.model, !1, [30]);
				this.functionDeclarations = _.M([]);
				this.outputModality = _.M(3);
				this.voiceName = _.M("");
				this.RC = _.M("");
				this.enableCodeExecution = _.xm(this.model, !1, [29]);
				this.enableSearchAsATool = _.xm(this.model, !1, [31]);
				this.enableBrowseAsATool = _.xm(this.model, !1, [32]);
				this.Ef = _.M(!1);
				this.rH = _.xm(this.model, !1, [39]);
				this.LD = _.xm(this.model, !1, [40]);
				this.safetySettings = _.M([]);
				this.mediaResolution = _.M(2);
				this.TQ = _.M(!1);
				this.oQ = _.M(0);
				this.jL = _.M(0);
				this.Sz = _.M();
				this.thinkingLevel = _.M(0);
				this.MD = _.xm(this.model, !1, [46]);
				this.dY = _.M(!0);
			}
			reset() {
				this.ye.set(!1);
				this.enableCodeExecution.set(!1);
				this.enableSearchAsATool.set(!1);
				this.enableBrowseAsATool.set(!1);
				this.Ef.set(!1);
				this.rH.set(!1);
				this.LD.set(!1);
				this.safetySettings.set([]);
				this.mediaResolution.set(2);
				this.TQ.set(!1);
				this.oQ.set(0);
				this.jL.set(0);
				this.Sz.set(void 0);
				this.thinkingLevel.set(0);
				this.MD.set(!1);
				this.dY.set(!0);
			}
			setModel(a) {
				this.model.set(a);
			}
		};
		_.k5 = class {
			constructor() {
				this.model = this.A = new oFd();
				this.Ia = _.m(_.oF);
			}
			setModel(a) {
				this.A.setModel(a);
				this.A.reset();
				_.Im(a, 46) && this.A.MD.set(!0);
				if (_.bn(a)) {
					var b = _.bn(a);
					if (_.Im(a, 52)) {
						var c = this.A;
						b = _.Lm(b, 6);
						c.thinkingLevel.set(b);
					} else _.Im(a, 35) && (c = this.A, b = _.Pm(b, 5) ? 0 : -1, c.Sz.set(b));
				}
				c = _.Im(a, 46) ? 0 : a.RL();
				this.A.oQ.set(Math.floor(c * .8));
				this.A.jL.set(Math.floor(c * .4));
				this.Ia.bidiModel.set(a.getName());
			}
			reset() {
				this.A.reset();
			}
		};
		_.k5.J = function(a) {
			return new (a || _.k5)();
		};
		_.k5.sa = _.Cd({
			token: _.k5,
			factory: _.k5.J
		});
		var pFd = "(?:an|accessnow|accessnow2|auto|autocap|bamach|boq|cdpush|cider|collaborator|cs|dash|dm|dmrh|easyokrs|engplay|f|g|g2|g3doc|ganpati|ganpati2|glossary|go|godoc|google3|goto|gpaste|groups|gu|il|irm|kg|mendel|mh|moma|mpms|mpmbrowse|ms|nexus|oncall|pcon|playbook|playbooks|pod|rapid|rapid-qa|requiem|rh|rs|screen|screenshot|shortn|sigma|simba|simhub|sites|sv|tap|taskflow|test|tf|undash|vi|viceroy|wiki|yaqs)/(?:[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]+(?:[\\.;][\\w~#-&\\(\\*-\\-/-:<-@!\\[.])+)*[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]* annealing/[-a-zA-Z0-9]+ ag/[0-9]+ (?:launch|ariane)/[0-9]{5,} banjolele/[0-9]+ b/[0-9]{4,}(?:#comment\\d+)? cases/[0-9]+-[0-9]+ (?:cl|cr)/[0-9]{5,} crbug/[0-9]{3,}(?:#c\\d+)? crrev/[0-9]+ fxb/[0-9]+ fxr/[0-9]+ mdb/[a-zA-Z][\\w\\-]* chg/[0-9]{3,} (?:t|tick)/[0-9]{5,} shax/[0-9]+ meme(?:gen)?/[0-9]{6,} omg(?:tool)?/[0-9]+ o/[0-9]{4,} pegboard/[a-z0-9+-]+ prodspec/[-a-zA-Z0-9]+ (?:sem|sempervi)/[0-9]+ (?:teams|who)/[a-z][a-z0-9]* tqr/[0-9]+ anyup/[-a-z0-9_]+ xids?/[0-9]+(/[-a-zA-Z0-9_]+)* vizier/(?:study/)?[0-9]+(?:/[0-9]+)?(?:[/?#][\\w\\-_./?&#=]+)? b/(?:hotlists|savedsearches|bookmark-groups|dashboard)/[0-9]+ sponge2?/[a-f0-9]+-[a-f0-9]+-[a-f0-9]+-[a-f0-9]+-[a-f0-9]+ fusion2/presubmit/\\w+/\\w+(/targets|/OCL:\\w+:BASE:\\w+:\\w+:\\w+(/\\w+[?]?(\\w+=\\w+&?)*)?)? fusion2?/[a-f0-9]+-[a-f0-9]+-[a-f0-9]+-[a-f0-9]+-[a-f0-9]+ kcl/[a-fA-F0-9]+ study/[a-zA-Z0-9]{8}\\b waymo-launch(?:es)?/[a-zA-Z0-9]{11}".split(" "), qFd = new RegExp("\\b(?:(?:https?://|www\\.)(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?[.])+(?:com|org|net|edu|gov|app|dev|google|[a-z][a-z])\\b(?::\\d{1,5}\\b)?|[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?::\\d{1,5}\\b)?)(?:[?/#&](?:[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]+(?:[\\.;][\\w~#-&\\(\\*-\\-/-:<-@!\\[.])+)*[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]*)?|" + pFd.join("|") + ")", "i");
		[
			"(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|app|dev|google|[a-z][a-z])\\b)",
			"changelist ([0-9]{5,})",
			"((?:https?|ftp)://)+(?:[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]+(?:[\\.;][\\w~#-&\\(\\*-\\-/-:<-@!\\[.])+)*[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]*",
			"(?:(?:(?:https?|ftp)://)(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(?::\\d{1,5}\\b)?|\\[[a-fA-F0-9:]*:[a-fA-F0-9:]+\\](?::\\d{1,5}\\b)?|(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?[.])+(?:com|org|net|edu|gov|app|dev|google|[a-z][a-z])\\b(?::\\d{1,5}\\b)?|[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)|(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(?::\\d{1,5}\\b)?|\\[[a-fA-F0-9:]*:[a-fA-F0-9:]+\\](?::\\d{1,5}\\b)?|(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?[.])+(?:com|org|net|edu|gov|app|dev|google|[a-z][a-z])\\b(?::\\d{1,5}\\b)?))(?:[?/#&](?:[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]+(?:[\\.;][\\w~#-&\\(\\*-\\-/-:<-@!\\[.])+)*[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]*)?",
			...pFd
		].map((a) => `\\b${a}|`).join("");
		[
			"(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|app|dev|google|[a-z][a-z])\\b)",
			"changelist ([0-9]{5,})",
			"((?:https?|ftp)://)+(?:[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]+(?:[\\.;][\\w~#-&\\(\\*-\\-/-:<-@!\\[.])+)*[\\w~#-&\\(-\\-/-:<-@!\\[\\]\\|]*",
			...pFd
		].map((a) => `\\b${a}|`).join("");
		var rFd = {
			p_b: 0,
			W3b: 1,
			nYb: 2,
			LABEL: 3,
			k3b: 4,
			l3b: 5,
			m3b: 6
		};
		var uEd = (a, b) => b.id, GEd = {
			[3]: "Generate structured outputs",
			[1]: "Lets Gemini use code to solve complex tasks",
			[2]: "Lets you define functions that Gemini can call",
			[5]: "Use Google Search",
			[6]: "Browse the url context",
			[7]: "Use Image search.",
			[8]: "Location results from Google Maps"
		}, mEd = function(a, b) {
			return a.F().has(b);
		}, nEd = function(a, b) {
			if (!a.A()) return null;
			var c = a.PK().find((e) => e.id === b);
			if (!c) return null;
			var d = c.bI();
			return (c.id === 2 ? mEd(a, 2) : d) ? null : `Enable ${c.displayName} to edit`;
		}, g5 = function(a, b, c) {
			var d = new _.gz(), e = new gFd();
			a = _.Ym(e, 1, a);
			b = _.cn(a, 2, rFd[b]);
			c = _.Mj(b, 3, c);
			return _.ln(d, gFd, 10, c);
		}, rEd = function(a, b) {
			if (a.A() && (a = a.PK().find((c) => c.id === b))) {
				let c = !a.bI();
				a.qT(c);
			}
		}, BEd = function(a, b) {
			a.U.update((c) => {
				c = new Set(c);
				c.add(b);
				return c;
			});
		}, sFd = function(a) {
			return a.disabled() && a.Qf() ? a.Qf() : a.hBa() ? a.JE() ? "Tools" : null : "Tools not available for this model";
		}, tFd = class {
			constructor() {
				this.ea = _.m(_.ZC);
				this.I = _.m(_.LK);
				this.X = _.m(_.gH);
				this.H = _.m(_.k5, { optional: !0 });
				this.dialog = _.m(_.rC);
				this.aa = _.m(_.Op);
				this.context = _.V("chat");
				this.vqa = _.Li.required();
				this.PK = _.W(() => {
					var a = this.vqa(), b = this.La(), c = this.context() === "chat";
					return a.map((d) => {
						var e = c ? d.Cz(b) : d.Cz(b);
						return {
							id: d.id,
							displayName: d.displayName,
							icon: d.icon,
							isVisible: e.isSupported,
							bI: _.W(() => {
								var f;
								return (f = e.Aca()) != null ? f : !1;
							}),
							qT: d.qT ? (f) => {
								d.qT ? c ? d.qT(f, b) : d.qT(f, b) : e.set(f);
							} : (f) => {
								e.set(f);
							},
							MH: d.MH,
							Lp: d.Lp ? () => {
								c ? d.Lp(this.dialog, b) : d.Lp(this.dialog, this.H);
							} : void 0,
							yc: _.W(() => c ? d.yc(b, this.F(), this.R()) : d.yc(b, this.F(), this.R())),
							tooltip: _.W(() => this.A() ? c ? d.tooltip(b, this.F()) : d.tooltip(b, this.F()) : "Tools are not supported for this model")
						};
					});
				});
				this.disabled = _.V(!1);
				this.Qf = _.V("");
				this.promptText = _.V("");
				this.aD = _.pzd;
				this.JE = this.ea.A.Il;
				this.ZBa = this.aa.getFlag(_.qzd);
				this.S = _.Dk;
				this.ve = {
					vta: 300021,
					Tob: 310262,
					Uob: 310263,
					Vob: 310264
				};
				this.La = _.W(() => this.context() === "chat" ? this.I.A() : this.H.model);
				this.uc = _.W(() => {
					var a = this.La();
					return this.context() === "chat" ? a.baseModel() : a.model();
				});
				this.gpa = _.W(() => {
					var a = this.uc();
					return _.TE && !!a && _.wm(a).includes(65);
				});
				this.Lia = _.jnb;
				this.Fza = _.knb;
				this.A = _.W(() => {
					var a = this.uc();
					return a ? _.wm(a).includes(6) || _.wm(a).includes(9) || _.wm(a).includes(10) || _.Gm(a) || _.f4(a) || _.wm(a).includes(54) || _.wm(a).includes(58) || _.Im(a, 29) || _.Im(a, 30) || _.Im(a, 31) || _.Im(a, 32) || this.gpa() : !1;
				});
				this.R = _.W(() => {
					var a, b;
					return (b = (a = this.X.Ob()[0]) == null ? void 0 : a.dQ()) != null ? b : [];
				});
				this.F = _.W(() => {
					var a = new Set();
					if (!this.A()) return a;
					for (let b of this.PK()) b.isVisible() && b.bI() && a.add(b.id);
					return a;
				});
				this.q2a = _.W(() => this.F().size > 0 || this.gpa());
				this.hBa = _.W(() => this.uc() && this.A() ? this.PK().some((a) => a.isVisible()) || this.gpa() : !1);
				this.U = _.M(new Set());
				this.fa = _.W(() => {
					var a = this.promptText();
					return a ? qFd.test(a) : !1;
				});
				this.jbb = _.W(() => {
					if (this.context() !== "chat" || !this.fa() || !this.uc()) return [];
					var a = this.U();
					return this.PK().filter((b) => b.id !== 6 || !b.isVisible() || b.bI() || a.has(b.id) || b.yc() ? !1 : !0);
				});
				this.xFb = _.W(() => this.jbb().length > 0);
				this.zZ = _.W(() => {
					if (!this.A()) return !1;
					var a = this.La();
					return this.context() === "chat" ? !!a.Ef() : !!a.Ef();
				});
				this.A4 = _.W(() => mEd(this, 2) ? "Gemini automatically generates a response for each function call. " : "Enable function calling to get automatically generated responses for your function calls.");
			}
			D1() {
				if (this.A()) if (this.context() === "chat") this.I.A().Ef.set(!this.zZ());
				else {
					var a;
					if ((a = this.H) != null) {
						var b = !this.zZ();
						a.A.Ef.set(b);
					}
				}
			}
			Lp(a, b) {
				b.stopPropagation();
				this.A() && (b = this.PK().find((c) => c.id === a), (b == null ? 0 : b.Lp) && (this.context() === "chat" ? this.I : this.H) && b.Lp());
			}
		};
		tFd.J = function(a) {
			return new (a || tFd)();
		};
		tFd.ka = _.u({
			type: tFd,
			da: [["ms-prompt-box-tools"]],
			inputs: {
				context: [1, "context"],
				vqa: [1, "toolConfigs"],
				disabled: [1, "disabled"],
				Qf: [1, "disabledTooltip"],
				promptText: [1, "promptText"]
			},
			ha: 7,
			ia: 10,
			la: [
				["toolsDialogTemplate", ""],
				["searchSource", ""],
				["toolToggle", ""],
				["autoFunctionResponseToggle", ""],
				[
					"ms-button",
					"",
					"dialogLabel",
					"Tools menu",
					"aria-label",
					"Open tools menu",
					3,
					"iconName",
					"variant",
					"active",
					"matTooltip",
					"matTooltipDisabled",
					"xapInlineDialog",
					"disabled",
					"xapInlineDialogDisabled"
				],
				[
					"gradientType",
					"surface-container-high",
					1,
					"enabled-tool-container"
				],
				[1, "tools-dialog"],
				[1, "tool-item"],
				[
					1,
					"tool-label",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick",
					"veMetadata"
				],
				[
					1,
					"tool-icon",
					3,
					"iconName"
				],
				[1, "edit-button-container"],
				[
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"aria-label",
					"checked",
					"disabled",
					"matTooltip",
					"matTooltipPosition",
					"ve",
					"veClick",
					"veMetadata"
				],
				[3, "ngTemplateOutlet"],
				[
					"matTooltipClass",
					"settings-tooltip",
					"data-test-id",
					"autoFunctionCallTooltip",
					1,
					"tool-item",
					3,
					"matTooltipPosition",
					"matTooltip"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					3,
					"click",
					"disabled",
					"aria-label",
					"matTooltip",
					"ve",
					"veClick",
					"veMetadata"
				],
				[
					1,
					"tool-label",
					3,
					"click"
				],
				[
					"aria-label",
					"Automatic Function Response",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"click",
					"checked",
					"disabled"
				],
				[1, "enabled-tool"],
				[
					1,
					"suggested-tool",
					3,
					"ve",
					"veImpression",
					"veMetadata"
				],
				[1, "tool-chip-button"],
				[1, "tool-name"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					3,
					"click",
					"iconName",
					"aria-label",
					"matTooltip",
					"disabled"
				],
				[
					1,
					"tool-chip-button",
					3,
					"matTooltip"
				],
				[
					1,
					"tool-chip-button",
					3,
					"click",
					"ve",
					"veClick",
					"veMetadata"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"matTooltip",
					"Dismiss suggestion",
					3,
					"click",
					"iconName",
					"aria-label",
					"ve",
					"veClick",
					"veMetadata"
				],
				[1, "search-source"],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 4), _.R(1), _.H(), _.z(2, vEd, 3, 0, "ng-template", null, 0, _.Ii), _.B(4, DEd, 6, 1, "ms-horizontal-scroll", 5), _.z(5, EEd, 4, 1, "ng-template", null, 1, _.Ii));
				if (a & 2) {
					a = _.O(3);
					let c;
					_.E("iconName", b.S.rtb)("variant", b.JE() ? "icon-primary" : "primary")("active", b.JE() && b.q2a())("matTooltip", (c = sFd(b)) != null ? c : "")("matTooltipDisabled", !sFd(b))("xapInlineDialog", a)("disabled", b.disabled() || !b.hBa())("xapInlineDialogDisabled", b.disabled() || !b.hBa());
					_.y();
					_.S(" ", b.JE() ? null : "Tools", "\n");
					_.y(3);
					_.C(!b.q2a() && !b.xFb() || b.JE() ? -1 : 4);
				}
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				_.m1,
				_.dz,
				_.$D,
				_.dE,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.HB,
				_.Cz,
				_.Bz,
				_.EC,
				_.iz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.tools-dialog[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding:16px}.tool-icon[_ngcontent-%COMP%]{margin-right:4px}.tool-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.tool-item[_ngcontent-%COMP%]   .tool-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:var(--color-v3-text);-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:left;cursor:pointer}.tool-item[_ngcontent-%COMP%]   .edit-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.tool-item[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.tool-item[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     label{padding:0}.tool-item[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     button:focus-visible{outline:2px solid var(--color-v3-text-link);outline-offset:2px;border-radius:4px}.search-source[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:11px;padding-bottom:8px}.search-source[_ngcontent-%COMP%]   .ms-custom-icon[_ngcontent-%COMP%]{height:1em;margin-left:4px;margin-right:2px}ms-horizontal-scroll[_ngcontent-%COMP%]{width:100%}.enabled-tool-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow-x:auto;padding-inline:8px;gap:4px}.enabled-tool[_ngcontent-%COMP%], .suggested-tool[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:12px;padding:2px 8px;max-height:32px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.enabled-tool[_ngcontent-%COMP%]   .tool-chip-button[_ngcontent-%COMP%], .suggested-tool[_ngcontent-%COMP%]   .tool-chip-button[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:none;border:none;padding:0;font:inherit;color:inherit;cursor:inherit}.enabled-tool[_ngcontent-%COMP%]   .tool-name[_ngcontent-%COMP%], .suggested-tool[_ngcontent-%COMP%]   .tool-name[_ngcontent-%COMP%]{border-radius:12px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;white-space:nowrap}.enabled-tool[_ngcontent-%COMP%]   button[ms-button][_ngcontent-%COMP%], .suggested-tool[_ngcontent-%COMP%]   button[ms-button][_ngcontent-%COMP%]{padding:0}.enabled-tool[_ngcontent-%COMP%]{cursor:default;background-color:var(--color-v3-button-container-accent)}.enabled-tool[_ngcontent-%COMP%]   .tool-name[_ngcontent-%COMP%]{color:var(--color-v3-text-on-button)}.enabled-tool[_ngcontent-%COMP%]   button[ms-button][aria-disabled=true][_ngcontent-%COMP%]{color:var(--color-v3-accent-5)}.suggested-tool[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;border:1px dashed var(--color-v3-outline)}.suggested-tool[_ngcontent-%COMP%]   .tool-name[_ngcontent-%COMP%]{color:var(--color-v3-text)}"]
		});
		var uFd = h5({
			id: 3,
			displayName: "Structured outputs",
			icon: "file_json",
			Cz: (a) => a.A,
			MH: !0,
			Lp: (a, b) => {
				var c, d = { HBa: (c = b.vj()) != null ? c : null };
				_.jC(a.open(_.x4, { data: d })).subscribe((e) => {
					e !== void 0 && b.vj.set(e != null ? e : void 0);
				});
			}
		}), vFd = Object.assign({}, h5({
			id: 1,
			displayName: "Code execution",
			icon: "code",
			Cz: (a) => a.enableCodeExecution
		}), { yc: (a, b, c) => {
			b = FEd(1, a, b);
			c = _.vvd(c != null ? c : []);
			a = _.hnb(a.baseModel());
			return b || c && !a;
		} }), wFd = h5({
			id: 2,
			displayName: "Function calling",
			icon: "function",
			Cz: (a) => a.ye,
			qT: (a, b) => {
				b.ye.set(a);
				a || b.Ef.set(!1);
			},
			MH: !0,
			Lp: (a, b) => {
				var c, d = { Cka: (c = b.functionDeclarations()) != null ? c : [] };
				_.jC(a.open(_.w4, { data: d })).subscribe((e) => {
					e !== void 0 && b.functionDeclarations.set(e);
				});
			}
		}), xFd = Object.assign({}, h5({
			id: 5,
			displayName: "Grounding with Google Search",
			icon: "google",
			Cz: (a) => a.enableSearchAsATool
		}), {
			yc: (a, b) => FEd(5, a, b) || !!a.baseModel() && _.Hm(a.baseModel()),
			tooltip: (a, b) => {
				var c = a.baseModel();
				return c && _.Hm(c) ? "Gemma models may make mistakes. To access without Search grounding, please use the API directly." : HEd(5, a, b);
			}
		}), yFd = h5({
			id: 7,
			displayName: "Image search",
			icon: "image_search",
			Cz: (a) => a.enableImageSearch
		}), zFd = h5({
			id: 6,
			displayName: "URL context",
			icon: "link",
			Cz: (a) => a.enableBrowseAsATool
		}), AFd = h5({
			id: 8,
			displayName: "Grounding with Google Maps",
			icon: "maps",
			Cz: (a) => a.enableGoogleMaps
		}), BFd = [
			uFd,
			vFd,
			wFd,
			xFd,
			AFd,
			yFd,
			zFd
		], CFd = JEd({
			id: 1,
			displayName: "Code Execution",
			icon: "code",
			Cz: (a) => a.enableCodeExecution
		}), DFd = JEd({
			id: 2,
			displayName: "Function calling",
			icon: "function",
			Cz: (a) => a.ye,
			qT: (a, b) => {
				b.ye.set(a);
				a || b.Ef.set(!1);
			},
			MH: !0,
			Lp: (a, b) => {
				var c = { Cka: [...b.model.functionDeclarations().map((d) => _.oc(d))] };
				_.jC(a.open(_.w4, { data: c })).subscribe((d) => {
					d !== void 0 && b.A.functionDeclarations.set(d);
				});
			}
		}), EFd = JEd({
			id: 5,
			displayName: "Grounding with Google Search",
			icon: "google",
			Cz: (a) => a.enableSearchAsATool
		}), FFd = JEd({
			id: 6,
			displayName: "Browse the url context",
			icon: "link",
			Cz: (a) => a.enableBrowseAsATool
		}), GFd = [
			CFd,
			DFd,
			EFd,
			FFd
		];
		var HFd, IFd, NEd, JFd;
		HFd = ["textarea"];
		IFd = [[[
			"",
			"prefixContent",
			""
		]]];
		NEd = (a, b) => b[0];
		JFd = function(a, b) {
			return _.x(function* () {
				var c = b.map((d) => _.x(function* () {
					var e = _.Yn();
					try {
						if (d.type.startsWith("video/") && d.size > 419430400) a.A.error("Video file size cannot exceed 400MB.");
						else if (d.type === "application/pdf" && d.size > 52428800) a.A.error("PDF file size cannot exceed 50MB.");
						else if (d.size <= 2147483648) if (d.type === "application/zip") {
							let f = yield _.eo(d);
							_.EH(a.Km, {
								Yb: e,
								status: "PREPARING",
								Gd: "FILE",
								yd: {
									url: f,
									Pb: _.bo(f),
									mimeType: d.type,
									name: d.name
								},
								Xd: f
							});
						} else if (d.type.startsWith("image/")) {
							let f = yield _.eo(d);
							_.EH(a.Km, {
								Yb: e,
								status: "PREPARING",
								Gd: "IMAGE",
								yd: {
									url: f,
									Pb: _.bo(f),
									mimeType: d.type,
									name: d.name
								},
								Xd: f
							});
							if (a.cl().HJa) try {
								let g = yield _.LJ(a.X, {
									type: "url",
									url: f,
									mimeType: d.type,
									name: d.name
								});
								_.DH(a.Km, e, {
									jv: g,
									status: g ? "ERROR" : "READY"
								});
								g && a.A.error("The input image conflicts with our safety policies. Please try again with a different image.");
							} catch (g) {
								console.error("Image safety check failed:", g), _.DH(a.Km, e, {
									jv: !0,
									status: "ERROR"
								}), a.ea.warning(g), a.A.error("Image safety check failed. Please try again.");
							}
							else _.DH(a.Km, e, {
								jv: !1,
								status: "READY"
							});
						} else if (d.type.startsWith("video/")) {
							let f = _.hd(_.ld(d));
							_.EH(a.Km, {
								Yb: e,
								status: "PREPARING",
								Gd: "VIDEO",
								yd: {
									url: f,
									mimeType: d.type,
									name: d.name
								},
								Xd: f
							});
						} else {
							let f = yield _.eo(d);
							_.EH(a.Km, {
								Yb: e,
								status: "PREPARING",
								Gd: "FILE",
								yd: {
									url: f,
									Pb: _.bo(f),
									mimeType: d.type,
									name: d.name
								},
								Xd: f
							});
						}
						else a.A.error("Some files are too large. Only files under 2GB are supported.");
					} catch (f) {
						console.error("Error processing pasted file:", f), a.A.error("Error processing file.");
					}
				}));
				yield Promise.all(c);
			});
		};
		_.KFd = function(a, b) {
			return _.x(function* () {
				if (!a.disabled() && !a.cl().zYa && b.length !== 0) {
					var c = yield _.u1(a.aa);
					if (!a.ma || c) {
						c = a.tq();
						var d = [], e = [];
						if (c) {
							for (let f of b) {
								let g = f.type, k, p, r = (p = (k = f.name.split(".").pop()) == null ? void 0 : k.toLowerCase()) != null ? p : "", v = !1;
								g.startsWith("text/") ? v = !0 : _.R4.includes(g) ? v = !0 : g.startsWith("application/") ? v = !0 : _.Eo.includes(r) ? v = !0 : g.startsWith("image/") && _.Em(c) ? v = !0 : g.startsWith("video/") && _.Fm(c) ? v = !0 : g.startsWith("audio/") && _.Dm(c) && (v = !0);
								v ? d.push(f) : e.push(f);
							}
							e.length > 0 && (d.length === 0 ? a.A.error("The current model doesn't support files of this type.") : a.A.error("Not all files are supported by the current model."));
							d.length !== 0 && (yield JFd(a, d));
						} else a.A.error("The current model doesn't support files of this type.");
					}
				}
			});
		};
		_.l5 = class {
			constructor() {
				this.S = _.Dk;
				this.Vm = _.m(_.e2);
				this.Pa = _.m(_.Xf);
				this.ta = _.m(_.ZC);
				this.H = _.m(_.HD);
				this.Km = _.m(_.FH);
				this.aa = _.m(_.v1);
				this.A = _.m(_.iC);
				this.X = _.m(_.MJ);
				_.m(_.LH);
				this.oa = _.m(_.OC);
				this.Vb = _.m(_.AG);
				this.Ia = _.m(_.oF);
				this.enterKeyBehavior = this.Ia.enterKeyBehavior;
				this.route = _.m(_.ll);
				this.ea = _.m(_.Nw);
				this.fa = _.m(_.Op);
				this.veLoggingService = _.m(_.Ry);
				this.U = _.m(_.gH);
				this.ve = {
					qfb: 225926,
					u2b: 250757
				};
				this.na = _.m(_.x3);
				this.ppb = "Please start a new chat to resume prompting.";
				this.vea = 10;
				this.wea = 1;
				this.Pz = _.Ni.required("textarea");
				this.Bz = _.Ni.required(_.p4);
				this.cl = _.Li.required();
				this.wf = _.V();
				this.ITa = _.V();
				this.dga = _.V(!1);
				this.NS = _.V();
				this.YTa = _.V(!1);
				this.Gc = _.V(!1);
				this.jS = _.V(!1);
				this.autoFocus = _.V(!0);
				this.disabled = _.V(!1);
				this.tq = _.V();
				this.La = _.V();
				this.V6a = _.V(!1);
				this.W6a = _.V("");
				this.wqa = _.V(!1);
				this.ocb = _.V("");
				this.wP = _.V(!1);
				this.mpa = _.V(!1);
				this.nHa = _.V(!1);
				this.Nbb = _.V(!1);
				this.jma = _.Li([]);
				this.dya = _.V("");
				this.ma = this.fa.getFlag(_.mF);
				this.Lh = this.U.Lh;
				this.GN = _.Ki();
				this.tJ = _.Ki();
				this.g7 = _.Ki();
				this.HTa = _.Ki();
				this.EYa = _.Ki();
				this.FF = _.Ki();
				this.Qx = _.Ki();
				this.Iab = _.Ki();
				this.promptText = _.Mi("");
				this.form = this.H.Oq.group({ promptText: this.H.Oq.control("") });
				this.bb = this.oa.bb;
				this.F = this.Km.promptText;
				this.I = this.Km.A;
				this.za = _.W(() => {
					var d;
					return Object.values((d = this.I()) != null ? d : {}).filter((e) => !!e).length === 0;
				});
				this.Odb = _.W(() => {
					var d = new Set(this.jma()), e;
					return Object.entries((e = this.I()) != null ? e : {}).filter(([, f]) => {
						var g;
						return !!f && !d.has((g = f.role) != null ? g : "");
					});
				});
				this.R = _.W(() => {
					var d = this.promptText().length > 0 || this.F().length > 0, e = !this.za();
					return this.Nbb() ? d || this.nHa() : d || e || this.nHa();
				});
				this.Rn = _.W(() => {
					if (this.disabled()) return !0;
					var d = this.cl(), e = this.R(), f = this.Gc(), g = this.Km.ma(), k = this.Km.ea(), p = this.Km.na(), r = this.Km.fZ();
					d = d.HJa;
					k = (r || k) && !!d;
					return f ? !1 : this.dya() || g || k || p ? !0 : !e;
				});
				this.Xaa = _.W(() => this.ta.A.Il() ? "medium" : "large");
				this.fRb = _.W(() => this.cl().gKa);
				this.hwb = _.W(() => this.wf());
				this.PGb = _.W(() => {
					if (this.disabled() || this.dga()) return !0;
					var d, e = (d = this.wf()) == null ? void 0 : d.si;
					if (!e) return !1;
					var f, g, k, p, r, v;
					return !((f = e.CJ) == null ? 0 : f.visible) && !((g = e.oH) == null ? 0 : g.visible) && !((k = e.Sna) == null ? 0 : k.visible) && !((p = e.aX) == null ? 0 : p.visible) && !((r = e.tra) == null ? 0 : r.visible) && !((v = e.o0) == null ? 0 : v.visible);
				});
				this.xF = _.W(() => {
					var d = this.dya();
					if (d && !this.Gc()) return d;
					d = this.cl();
					var e = this.tq(), f = this.bb();
					d = !!d.Tba && !!e && _.Mm(e) && !f && !this.Vb.Hb();
					return _.ODd({
						hCa: !0,
						lza: this.enterKeyBehavior() === 1,
						iIb: this.Km.ma(),
						PIb: this.Km.na(),
						UHb: this.Km.ea(),
						fZ: this.Km.fZ(),
						kCb: this.cl().HJa,
						sIb: d
					}, this.Gc());
				});
				this.aHa = _.W(() => this.bb() ? "key" : "key_off");
				this.vqa = _.W(() => this.cl().context === "chat" ? BFd : GFd);
				this.KE = _.W(() => {
					var d = this.tq();
					return _.Mm(d);
				});
				this.DN = _.W(() => this.KE() && !this.bb());
				this.eDa = _.W(() => this.disabled() || this.V6a());
				this.KIb = _.W(() => this.disabled() || this.wqa());
				this.zB = _.W(() => this.R());
				this.Kh = _.lp();
				this.uZa = !this.Kh;
				this.Object = Object;
				this.blur = () => {
					this.Pz().nativeElement.blur();
				};
				_.Fk([this.Pz, this.autoFocus], () => {
					var d = this.Pz(), e = this.autoFocus();
					d && e && !this.Kh ? d.nativeElement.focus() : d && !e && d.nativeElement.blur();
				});
				_.Fk([this.Rn], () => {
					this.EYa.emit(this.Rn());
				});
				_.Fk([this.promptText], () => {
					var d = this.promptText();
					this.form.controls.promptText.value !== d && this.form.controls.promptText.setValue(d);
				});
				_.Fk([this.F], () => {
					var d = this.F();
					this.form.controls.promptText.value !== d && this.form.controls.promptText.setValue(d);
				});
				_.Fk([this.cl], () => {
					var d = this.Km, e = !!this.cl().wq;
					d.H.set(e);
				});
				this.form.controls.promptText.zh.subscribe((d) => {
					this.promptText() !== d && this.promptText.set(d);
					this.F() !== d && _.CH(this.Km, d);
				});
				var a, b, c = (a = this.route.snapshot) == null ? void 0 : (b = a.Op) == null ? void 0 : b.get("prompt");
				c && _.CH(this.Km, c);
				this.na.register({
					id: "focus-input",
					keys: ["/"],
					action: (d) => {
						_.bg(() => {
							this.focus();
						}, { Pa: this.Pa });
						d == null || d.preventDefault();
					},
					label: "Focus input",
					description: "Focus the main input field",
					variant: "command"
				});
			}
			focus() {
				this.Pz().nativeElement.focus();
			}
			AR(a) {
				a.key === "Escape" ? this.blur() : this.Gc() || this.Rn() || (_.d2(this.Vm, a) ? (a.preventDefault(), a.stopPropagation(), _.Qy(this.veLoggingService, 250757), this.Bz().Xu()) : _.v4c(a) && this.Iab.emit());
			}
		};
		_.l5.J = function(a) {
			return new (a || _.l5)();
		};
		_.l5.ka = _.u({
			type: _.l5,
			da: [["ms-prompt-box"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Pz, HFd, 5)(b.Bz, _.p4, 5);
				a & 2 && _.ki(2);
			},
			inputs: {
				cl: [1, "promptBoxConfig"],
				wf: [1, "addMediaButtonConfig"],
				ITa: [1, "addMediaVe"],
				dga: [1, "addMediaButtonDisabled"],
				NS: [1, "maxAttachmentCount"],
				YTa: [1, "allowAddMediaButtonMenuToOpen"],
				Gc: [1, "isRunning"],
				jS: [1, "isExternallyDragging"],
				autoFocus: [1, "autoFocus"],
				disabled: [1, "disabled"],
				tq: [1, "currentModel"],
				La: [1, "runSettings"],
				V6a: [1, "paidApiKeyButtonDisabled"],
				W6a: [1, "paidApiKeyButtonDisabledTooltip"],
				wqa: [1, "toolsDisabled"],
				ocb: [1, "toolsDisabledTooltip"],
				wP: [1, "addInsteadOfRun"],
				mpa: [1, "showLightBulbDisclaimer"],
				nHa: [1, "prefixContentValid"],
				Nbb: [1, "textRequiredWithMedia"],
				jma: [1, "mediaRolesToExclude"],
				dya: [1, "customValidationError"],
				promptText: [1, "promptText"]
			},
			outputs: {
				GN: "runClick",
				tJ: "stopClick",
				g7: "focusTextArea",
				HTa: "addMediaClick",
				EYa: "disableRunButton",
				FF: "startAudioRecording",
				Qx: "stopAudioRecording",
				Iab: "stageContent",
				promptText: "promptTextChange"
			},
			fc: ["[prefixContent]"],
			ha: 21,
			ia: 29,
			la: [
				["textarea", ""],
				[1, "viewport-blur-overlay"],
				[1, "dragging-overlay"],
				[3, "iconName"],
				[
					1,
					"prompt-box-container",
					3,
					"click",
					"matTooltip"
				],
				[1, "textarea-row"],
				[
					1,
					"text-wrapper",
					3,
					"formGroup"
				],
				[
					"cdkTextareaAutosize",
					"",
					"formControlName",
					"promptText",
					"msFileCopyPaste",
					"",
					1,
					"textarea",
					3,
					"paste",
					"msPaste",
					"keydown",
					"focus",
					"cdkAutosizeMinRows",
					"cdkAutosizeMaxRows",
					"placeholder",
					"aria-label",
					"msPasteDisabled",
					"msPasteLargeTextAsFile"
				],
				[3, "isExpanded"],
				[1, "multi-media-row"],
				[1, "buttons-row"],
				[1, "button-row-left"],
				[
					3,
					"hasUserStartedTyping",
					"isPaidModelSelected",
					"isGenerating",
					"disabled",
					"disabledTooltip"
				],
				[
					3,
					"context",
					"toolConfigs",
					"disabled",
					"disabledTooltip",
					"promptText"
				],
				[1, "button-wrapper"],
				[3, "requirePaidUsage"],
				[
					1,
					"add-media-button",
					3,
					"addMediaButtonConfig",
					"disabled",
					"allowMenuToOpen",
					"maxAttachmentCount",
					"ve",
					"veClick",
					"veImpression"
				],
				[
					3,
					"runClick",
					"stopClick",
					"size",
					"tooltip",
					"stoppable",
					"showRunningTime",
					"disabled",
					"addInsteadOfRun"
				],
				[
					3,
					"promptMediaId",
					"currentModel",
					"runSettings",
					"disableTokenCount",
					"canInline"
				],
				[
					3,
					"startAudioRecordingClick",
					"stopAudioRecordingClick",
					"requirePaidUsage"
				],
				[3, "text"],
				[
					1,
					"add-media-button",
					3,
					"click",
					"addMediaButtonConfig",
					"disabled",
					"allowMenuToOpen",
					"maxAttachmentCount",
					"ve",
					"veClick",
					"veImpression"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Xh(IFd), _.B(0, KEd, 1, 0, "div", 1), _.F(1, "div", 2), _.I(2, "span", 3), _.R(3, " Drop files here\n"), _.H(), _.F(4, "div", 4), _.J("click", function(c) {
					b.disabled() || c.target.closest("button, ms-prompt-media") || b.focus();
				}), _.Yh(5), _.F(6, "div", 5)(7, "div", 6)(8, "textarea", 7, 0), _.J("paste", function(c) {
					if (!b.disabled()) {
						var d, e = (d = c.clipboardData) == null ? void 0 : d.getData("text/plain");
						if (e && !(e.length > 25e3)) {
							d = e.match(hFd);
							var f = b.tq(), g = !!f && _.mFd(f);
							f = !!f && _.Fm(f);
							if (d && d.length > 0 && !g && f) {
								c.preventDefault();
								c = e;
								for (var k of d) if (d = _.Co(k)) e = b.Km, g = _.Yn(), _.EH(e, {
									Yb: g,
									status: "PREPARING",
									Gd: "YOUTUBE",
									Nd: { videoId: d }
								}), c = c.replace(k, "");
								k = b.Pz().nativeElement;
								e = k.selectionStart;
								d = k.selectionEnd;
								g = k.value;
								k.value = `${g.substring(0, e)}${c}${g.substring(d)}`;
								k.selectionStart = k.selectionEnd = e + `${c}`.length;
								b.form.controls.promptText.setValue(k.value);
							}
						}
					}
				})("msPaste", function(c) {
					return _.KFd(b, c);
				})("keydown", function(c) {
					return b.AR(c);
				})("focus", function() {
					b.g7.emit();
				}), _.H(), _.yg(), _.H(), _.B(10, LEd, 1, 1, "ms-light-bulb-disclaimer", 8), _.H(), _.B(11, OEd, 3, 0, "div", 9), _.F(12, "div", 10)(13, "div", 11), _.B(14, PEd, 1, 6, "ms-paid-api-key-button", 12), _.B(15, QEd, 1, 5, "ms-prompt-box-tools", 13), _.H(), _.F(16, "div", 14), _.B(17, REd, 1, 1, "ms-streaming-buttons", 15), _.B(18, SEd, 1, 0, "ms-stt-button"), _.B(19, TEd, 1, 7, "ms-add-media-button", 16), _.F(20, "ms-run-button", 17), _.J("runClick", function() {
					b.GN.emit();
				})("stopClick", function() {
					b.tJ.emit();
				}), _.H()()()());
				a & 2 && (_.C(b.jS() ? 0 : -1), _.y(), _.P("dragging", b.jS()), _.y(), _.E("iconName", b.S.SC), _.y(2), _.P("dragging", b.jS())("disabled", b.disabled()), _.E("matTooltip", b.disabled() ? b.ppb : ""), _.y(3), _.E("formGroup", b.form), _.y(), _.E("cdkAutosizeMinRows", b.wea)("cdkAutosizeMaxRows", b.vea)("placeholder", b.cl().placeholder), _.vh("aria-label", b.cl().jqa), _.E("msPasteDisabled", b.disabled())("msPasteLargeTextAsFile", !0), _.zg(), _.y(2), _.C(b.mpa() ? 10 : -1), _.y(), _.C(b.Odb().length > 0 && b.fRb() ? 11 : -1), _.y(3), _.C(b.cl().Tba ? 14 : -1), _.y(), _.C(b.Lh() ? -1 : 15), _.y(2), _.C(b.cl().PSb ? 17 : -1), _.y(), _.C(b.cl().oRb ? 18 : -1), _.y(), _.C(b.cl().jga ? 19 : -1), _.y(), _.E("size", b.Xaa())("tooltip", b.xF())("stoppable", b.Gc())("showRunningTime", !0)("disabled", b.Rn())("addInsteadOfRun", b.wP()));
			},
			dependencies: [
				_.W4,
				_.b2,
				_.JD,
				_.Wn,
				_.oD,
				_.pD,
				_.dz,
				lFd,
				_.yA,
				_.IC,
				_.HC,
				_.q4,
				_.e5,
				_.MD,
				_.DD,
				_.CD,
				_.p4,
				nFd,
				_.g2,
				_.eF,
				_.dF,
				tFd,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;max-width:1000px;width:100%;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;position:relative}[_nghost-%COMP%]:has(.dragging-overlay.dragging)   .prompt-box-container[_ngcontent-%COMP%]{box-shadow:none}.viewport-blur-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9;pointer-events:none}.dragging-overlay[_ngcontent-%COMP%]{position:absolute;background-color:var(--color-v3-overlay-background);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:var(--v3-shadow-lg);z-index:10;border:4px dashed var(--color-v3-text-link);border-radius:12px;pointer-events:none;visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;min-height:174px;margin:0 12px 12px 12px;bottom:0;left:0;right:0}@-webkit-keyframes _ngcontent-%COMP%_fadeInScaleUp{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes _ngcontent-%COMP%_fadeInScaleUp{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.dragging-overlay.dragging[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fadeInScaleUp .2s ease-in-out forwards;animation:_ngcontent-%COMP%_fadeInScaleUp .2s ease-in-out forwards;visibility:visible}.prompt-box-container[_ngcontent-%COMP%]{box-shadow:var(--v3-shadow-md);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;margin:0 12px 12px 12px;border:1px solid var(--color-v3-outline);border-radius:12px;padding:12px;background-color:var(--color-v3-surface-container-high);position:relative;-webkit-transition:box-shadow .2s ease-in-out;transition:box-shadow .2s ease-in-out}.prompt-box-container.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.38}.prompt-box-container.disabled[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;z-index:1}.textarea-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.text-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-height:36px;min-width:0}textarea[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text);-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;border:none;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 0;-moz-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;outline:none;overflow-wrap:anywhere;min-width:0;padding:0;resize:none;white-space:pre-wrap;width:100%;background-color:transparent}textarea[_ngcontent-%COMP%]:not(.cdk-textarea-autosize-measuring){-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.buttons-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.buttons-row[_ngcontent-%COMP%]:has(ms-prompt-box-tools,button){-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.buttons-row[_ngcontent-%COMP%]:not(:has(ms-prompt-box-tools,button)){-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.button-row-left[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;gap:12px;overflow:hidden}.button-row-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 8px}.button-wrapper[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;height:36px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.add-media-button[_ngcontent-%COMP%]{margin-right:4px}.multi-media-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px;overflow-x:auto;padding:2px;margin-left:-2px;margin-right:-2px}"]
		});
		_.m5 = class {
			constructor() {
				this.S = _.Dk;
				this.type = _.V(1);
				this.vla = _.V(!1);
				this.dQb = _.W(() => this.type() === 0);
			}
		};
		_.m5.J = function(a) {
			return new (a || _.m5)();
		};
		_.m5.ka = _.u({
			type: _.m5,
			da: [["ms-hallucinations-disclaimer"]],
			inputs: {
				type: [1, "type"],
				vla: [1, "isSearchGroundingForced"]
			},
			ha: 6,
			ia: 3,
			la: [
				[3, "iconName"],
				[1, "disclaimer-text"],
				[
					"href",
					"https://ai.google.dev/gemma",
					"target",
					"_blank"
				]
			],
			template: function(a, b) {
				a & 1 && (_.I(0, "span", 0), _.F(1, "div", 1), _.B(2, UEd, 2, 0, "a", 2)(3, VEd, 1, 0), _.R(4, " may make mistakes, so double-check outputs. "), _.B(5, WEd, 1, 0), _.H());
				a & 2 && (_.E("iconName", b.S.Bf), _.y(2), _.C(b.dQb() ? 2 : 3), _.y(3), _.C(b.vla() ? 5 : -1));
			},
			dependencies: [_.dz],
			styles: ["[_nghost-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;color:var(--color-on-surface-variant);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:11px}[_nghost-%COMP%] > span.material-symbols-outlined[_ngcontent-%COMP%]{margin-right:4px;margin-top:1px}[_nghost-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}"]
		});
		_.n5 = class {
			constructor() {
				this.Fq = _.V(!1);
				this.mk = _.V(!1);
			}
		};
		_.n5.J = function(a) {
			return new (a || _.n5)();
		};
		_.n5.ka = _.u({
			type: _.n5,
			da: [["ms-chat-bottom-overlay"]],
			inputs: {
				Fq: [1, "isChatScrollable"],
				mk: [1, "isScrolledBottom"]
			},
			ha: 1,
			ia: 1,
			la: [[1, "bottom-overlay"]],
			template: function(a, b) {
				a & 1 && _.B(0, XEd, 1, 0, "div", 0);
				a & 2 && _.C(b.Fq() && !b.mk() ? 0 : -1);
			},
			styles: ["[_nghost-%COMP%]{display:block;position:absolute;bottom:100%;left:0;right:0;height:60px;pointer-events:none;z-index:2}.bottom-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;height:100%;background:-webkit-gradient(linear,left bottom,left top,from(var(--color-v3-surface)),color-stop(95%,transparent));background:-webkit-linear-gradient(bottom,var(--color-v3-surface) 0,transparent 95%);background:linear-gradient(to top,var(--color-v3-surface) 0,transparent 95%)}\n/*# sourceMappingURL=chat_bottom_overlay.css.map */"]
		});
		_.o5 = class {
			constructor() {
				this.F = _.m(_.OC);
				this.A = _.m(_.LH);
				this.window = _.m(_.Sn);
				this.Zd = _.V(!1);
				this.uS = _.V(!1);
				this.bb = this.F.bb;
				this.P4 = _.M(!1);
				this.ZW = _.M();
				this.Hoa = _.W(() => {
					var a = this.bb();
					if (a) {
						var b = a.te();
						return `You're using Paid API key ${a.getDisplayName()} as part of ${b == null ? void 0 : b.getDisplayName()}. All requests sent in this session will be charged.`;
					}
				});
				_.Fk([this.uS], () => {
					!this.uS() || this.bb() || (0, _.Jp)() ? this.ZW.set(void 0) : this.ZW.set({
						calloutType: "warning",
						type: "resource_exhausted"
					});
				});
				_.Fk([this.Hoa], () => {
					this.Hoa() ? this.ZW.set({
						content: this.Hoa(),
						calloutType: "success",
						type: "api_key_changed"
					}) : this.P4.set(!0);
				});
				_.Fk([this.ZW], (a) => {
					this.P4.set(!1);
					var b = this.window.setTimeout(() => {
						this.P4.set(!0);
					}, 8e3);
					a(() => {
						this.window.clearTimeout(b);
					});
				});
			}
			Ze() {
				this.A.openDialog(this.Zd);
			}
		};
		_.o5.J = function(a) {
			return new (a || _.o5)();
		};
		_.o5.ka = _.u({
			type: _.o5,
			da: [["ms-paid-api-key-callout"]],
			inputs: {
				Zd: [1, "isGenerating"],
				uS: [1, "isResourceExhaustedError"]
			},
			ha: 3,
			ia: 2,
			la: [
				[1, "api-callout-container"],
				[
					1,
					"callout",
					3,
					"calloutType"
				],
				[
					1,
					"callout",
					3,
					"onDismiss",
					"calloutType"
				],
				["callout-content-text", ""],
				[1, "api-key-changed-callout-text"],
				["callout-actions", ""],
				[
					"ms-button",
					"",
					"size",
					"large",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.Th(1), _.B(2, aFd, 5, 3, "ms-callout", 1), _.H());
				a & 2 && (_.y(), a = _.Uh(b.ZW()), _.y(), _.C(a && !b.P4() ? 2 : -1));
			},
			dependencies: [_.Yy, _.zA],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.api-callout-container[_ngcontent-%COMP%]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;max-width:780px;position:relative;width:100%}ms-callout[_ngcontent-%COMP%]{left:0;position:absolute;top:26px;width:100%;z-index:2}"]
		});
		_.hr("YUh4Se");
		/*
		
		The MIT License (MIT)
		
		Copyright (c) 2016 Matt Lewis
		
		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:
		
		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.
		
		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
		
		*/
		var LFd = function(a) {
			return a.type === 2 || a.type === 0 || a.type === 9;
		}, MFd = function(a, b) {
			return b.startsWith("```") && !a.endsWith("\n\n") ? `${a.trim()}\n\n${b}` : `${a}${b}`;
		}, p5 = function(a, b) {
			var c, d;
			return a.error.message.toLowerCase().includes(b.toLowerCase()) || ((c = a.debugInfo) == null ? void 0 : (d = _.l(c, 2)) == null ? void 0 : d.toLowerCase().includes(b.toLowerCase()));
		}, NFd = function(a) {
			var b = new ArrayBuffer(a.length * 2);
			b = new DataView(b);
			_.dBa(b, 0, a);
			return b;
		}, OFd = function(a, b, c) {
			a = _.bBa(a, b).map((d) => {
				if (c !== 16e3) {
					for (var e = c / 16e3, f = 0, g = 0, k = new Float32Array(Math.round(b / e)); f < k.length;) {
						let p = Math.round((f + 1) * e), r = 0, v = 0;
						for (; g < p && g < d.length; ++g) r += d[g], v++;
						k[f] = r / v;
						++f;
						g = p;
					}
					d = k;
				}
				return d;
			})[0];
			a = NFd(a);
			return {
				mimeType: "audio/pcm",
				data: _.ho(a.buffer)
			};
		}, PFd = function(a, b = !1) {
			if (_.rt(a, 2, _.hj)) return {
				type: a.sj() ? 9 : 0,
				text: a.getText()
			};
			if (_.ov(a)) {
				let d;
				return {
					type: 6,
					name: "Executable code",
					code: (d = _.nv(a).Ff()) != null ? d : "",
					language: "python"
				};
			}
			if (_.qv(a)) {
				b = _.pv(a);
				a: {
					var c;
					a = (c = _.Wu(b)) != null ? c : "";
					switch (_.Vu(b)) {
						case 1:
							b = a;
							break a;
						case 3:
							b = `Code execution took too long.\n${a}`;
							break a;
						default: b = `Code execution failed.\n${a}`;
					}
				}
				return {
					type: 6,
					name: "Code execution output",
					code: b,
					language: "Code execution output"
				};
			}
			if (_.Dr(a, _.Uu, 3, _.hj)) return c = _.ej(a), a = _.Ru(c), c.getData().isEmpty() ? b = void 0 : a.startsWith("audio/") ? b = b ? {
				type: 2,
				kt: [{
					mimeType: _.Ru(c),
					data: _.lc(c.getData())
				}],
				jn: []
			} : {
				type: 1,
				kt: {
					mimeType: _.Ru(c),
					data: _.lc(c.getData())
				},
				jn: []
			} : a.startsWith("video/") ? (b = c.getData(), b = _.Hc(b), b = {
				type: 4,
				blob: b ? new Blob([b], void 0) : new Blob([], void 0)
			}) : b = a.startsWith("image/") ? {
				type: 7,
				kt: {
					mimeType: _.Ru(c),
					data: _.lc(c.getData())
				}
			} : a === "application/json" ? {
				type: 6,
				name: "Result",
				code: new TextDecoder().decode(_.ep(c.getData())),
				language: "json"
			} : {
				type: 8,
				name: `File ${_.Qk(Date.now(), "MMMM dd, yyyy - h:mma", "en-US")}`,
				kt: {
					mimeType: _.Ru(c),
					data: _.lc(c.getData())
				}
			}, b;
			if (_.Dr(a, _.gj, 6, _.hj)) return {
				type: 8,
				driveId: _.fj(a, _.gj, 6, _.hj).getId()
			};
		}, QFd = function(a) {
			var b, c;
			return (c = a == null ? void 0 : (b = a.Sb()) == null ? void 0 : b.Gg()) != null ? c : [];
		}, RFd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 7)(1, "button", 11, 0);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K();
					c.preventDefault();
					c.stopPropagation();
					e.D2.pqa(d.MP);
					return _.t();
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K();
				_.y();
				_.E("iconName", b.qe() && b.xn() === a.MP ? b.S.Dea : b.S.YC);
			}
		}, SFd = function(a) {
			a & 1 && (_.F(0, "div", 10), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("title", a.iX), _.y(), _.S(" ", a.iX, " "));
		}, TFd = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 5)(1, "div", 6), _.B(2, RFd, 3, 1, "div", 7), _.F(3, "div", 8)(4, "div", 9), _.R(5), _.H(), _.B(6, SFd, 2, 2, "div", 10), _.H()()());
			a & 2 && (a = b.V, _.E("value", a.name), _.y(2), _.C(a.MP ? 2 : -1), _.y(3), _.U(a.name), _.y(), _.C(a.iX ? 6 : -1));
		}, UFd = function(a, b) {
			a & 1 && (_.Dh(0, "div", 2), _.R(1), _.Eh());
			a & 2 && (_.y(), _.U(b));
		}, VFd = function(a) {
			a & 1 && _.I(0, "audio", 0);
			a & 2 && (a = _.K(), _.E("src", a.audio()));
		}, XFd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 1)(1, "div", 3);
				_.I(2, "div", 4);
				_.H();
				_.F(3, "button", 5);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(WFd(c));
				});
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.pi("mask-size", _.xi("62px ", a.audioLevel(), "px")), _.y(2), _.E("iconName", a.muted() ? a.S.YC : a.S.kQa), _.wh("aria-label", a.muted() ? "Resume" : "Stop"));
		}, YFd = function(a, b) {
			a & 1 && (_.F(0, "div", 2), _.R(1), _.H());
			a & 2 && (_.y(), _.U(b));
		}, ZFd = function(a) {
			a = a[0].mimeType;
			a = (a = a == null ? void 0 : a.match(/rate=(\d+)/)) ? Number(a[1]) : void 0;
			return a != null ? a : 16e3;
		}, $Fd = function(a) {
			a & 1 && _.I(0, "img", 0);
			a & 2 && (a = _.K(), _.E("src", a.thumbnailUrl(), _.rg));
		}, aGd = function(a) {
			a & 1 && _.I(0, "span", 3);
			a & 2 && (a = _.K(), _.E("iconName", a.S.nA));
		}, bGd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 5);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.Kya());
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.Hm));
		}, cGd = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H(), _.B(2, bGd, 1, 1, "button", 4));
			a & 2 && (a = _.K(), _.y(), _.U(a.displayName()), _.y(), _.C(a.kt() ? 2 : -1));
		}, dGd = function(a) {
			var { font: b } = getComputedStyle(a);
			return {
				jTb: a.offsetWidth,
				uyb: a.selectionStart,
				text: a.value,
				AEb: (c) => {
					var d = document.createElement("canvas").getContext("2d");
					d.font = b;
					return d.measureText(c).width;
				}
			};
		}, eGd = function(a, b) {
			a & 1 && (_.F(0, "div", 5), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, fGd = function(a) {
			a & 1 && (_.F(0, "div", 8), _.I(1, "mat-slide-toggle", 14), _.yg(), _.R(2, " Will continue "), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("formControl", a.kra), _.zg());
		}, gGd = function(a) {
			a & 1 && (_.F(0, "span", 11), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.error()));
		}, hGd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.Ah(0, eGd, 2, 1, "div", 5, _.yh);
				_.F(2, "form", 6, 1);
				_.J("ngSubmit", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.sendResponse());
				});
				_.F(4, "textarea", 7);
				_.J("keydown", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.onKeyDown(c));
				});
				_.H();
				_.yg();
				_.B(5, fGd, 3, 1, "div", 8);
				_.F(6, "footer")(7, "div", 9)(8, "button", 10);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.xl());
				});
				_.H();
				_.B(9, gGd, 2, 1, "span", 11);
				_.H();
				_.F(10, "div", 12);
				_.I(11, "button", 13);
				_.H()()();
			}
			a & 2 && (a = _.K(), _.Bh(a.responses()), _.y(2), _.E("formGroup", a.AH), _.y(2), _.P("invalid", a.response() && !a.xIa()), _.E("cdkTextareaAutosize", a.wZa())("cdkAutosizeMinRows", 1)("cdkAutosizeMaxRows", 5)("placeholder", a.placeholder())("formControl", a.Zq)("msTextInputHistoryId", a.TFb)("msTextInputHistoryClearOnDestroy", !1)("msTextInputHistoryResetOnSubmit", !1), _.zg(), _.y(), _.C(a.bCb() && !a.h0() ? 5 : -1), _.y(3), _.E("iconName", a.S.Ae), _.y(), _.C(a.error() ? 9 : -1), _.y(), _.E("matTooltip", a.Qf())("tabIndex", a.BVa() ? -1 : 0), _.y(), _.E("iconName", a.S.hqb)("disabled", !a.BVa()));
		}, iGd = function(a, b) {
			a & 1 && (_.F(0, "li")(1, "a", 4), _.R(2), _.H()());
			a & 2 && (a = b.V, _.y(), _.E("href", a.Gf(), _.rg), _.y(), _.U(a.getTitle()));
		}, jGd = function(a) {
			a & 1 && (_.F(0, "div", 0)(1, "div", 2), _.R(2, " Sources "), _.I(3, "span", 3), _.H(), _.F(4, "ol"), _.Ah(5, iGd, 3, 2, "li", null, _.yh), _.H()());
			a & 2 && (a = _.K(), _.y(3), _.E("iconName", a.S.iea), _.y(2), _.Bh(a.sources()));
		}, kGd = function(a) {
			a & 1 && (_.F(0, "div", 1), _.I(1, "ms-search-entry-point", 5), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("searchQueries", a.Pl()));
		}, lGd = function(a, b) {
			a & 1 && _.I(0, "ms-cmark-node", 0);
			a & 2 && _.E("node", b);
		}, mGd = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K(), _.S(" ", a.Nv.ud(), "\n"));
		}, nGd = function(a, b) {
			a & 1 && _.I(0, "ms-cmark-node", 1);
			a & 2 && _.E("node", b);
		}, oGd = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K(), _.S(" ", a.Nv.ud(), " "));
		}, pGd = function(a) {
			return _.x(function* () {
				if (a) try {
					let g = document.createElement("video"), k = new Promise((r) => {
						g.addEventListener("durationchange", () => {
							g.duration === Infinity ? g.currentTime = 1e6 * Math.random() : r(g.duration);
						});
						setTimeout(() => void r(Infinity), 1e3);
					});
					g.src = a.toString();
					let p = yield k;
					if (p !== Infinity) {
						var b = new Promise((r) => {
							g.addEventListener("seeked", () => {
								r();
							});
						});
						g.currentTime = p / 2;
						yield b;
						var c = g.videoWidth, d = g.videoHeight, e = document.createElement("canvas");
						e.width = c;
						e.height = d;
						var f = e.getContext("2d");
						if (f) return f.drawImage(g, 0, 0, c, d), new Promise((r) => {
							e.toBlob((v) => void r(v ? _.ld(v) : void 0), "image/jpeg", .8);
						});
					}
				} catch (g) {}
			});
		}, qGd = function(a) {
			a & 1 && _.I(0, "div", 3);
		}, rGd = function(a) {
			a & 1 && (_.B(0, qGd, 1, 0, "div", 3), _.F(1, "div", 2), _.R(2, "User"), _.H());
			a & 2 && (a = _.K(2), _.C(a.Z8() ? -1 : 0));
		}, sGd = function(a) {
			a & 1 && (_.F(0, "div", 2), _.R(1, "Model"), _.H());
		}, tGd = function(a) {
			a & 1 && _.B(0, rGd, 3, 1)(1, sGd, 2, 0, "div", 2);
			a & 2 && (a = _.K(), _.C(a.turn().role === a.Role.USER ? 0 : a.turn().role === a.Role.MODEL ? 1 : -1));
		}, uGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-text-part", 4);
			if (a & 2) {
				a = _.K().V;
				let b = _.K();
				_.E("text", a.text)("grounding", a.grounding)("animate", b.turn().role === b.Role.MODEL && b.last() && !a.interrupted);
			}
		}, vGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-audio-part", 5);
			if (a & 2) {
				a = _.K().V;
				let b = _.K();
				_.E("audio", a.kt)("role", b.turn().role)("transcripts", a.jn);
			}
		}, wGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-audio-stream-part", 6);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("audioData", a.kt)("transcripts", a.jn)("closed", (b = a.closed) != null ? b : !1)("interrupted", (c = a.interrupted) != null ? c : !1);
			}
		}, xGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-function-call-part", 7);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("id", a.id)("name", a.name)("args", a.args)("submitUserResponse", a.Rpa)("behavior", a.behavior)("autogeneratedResponse", a.vga)("cancelled", (b = a.TG) != null ? b : !1);
			}
		}, yGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-video-part", 8);
			a & 2 && (a = _.K().V, _.E("video", a.blob));
		}, zGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-search-query-part", 9);
			a & 2 && (a = _.K().V, _.E("searchQueries", a.Pl)("sources", a.sources));
		}, AGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-code-block-part", 10);
			a & 2 && (a = _.K().V, _.E("name", a.name)("code", a.code)("language", a.language));
		}, BGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-image-part", 11);
			a & 2 && (a = _.K().V, _.E("image", a.kt));
		}, CGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-file-part", 12);
			if (a & 2) {
				a = _.K().V;
				let b = _.K();
				_.E("name", a.name)("driveId", a.driveId)("base64Data", a.kt)("role", b.turn().role);
			}
		}, DGd = function(a) {
			a & 1 && _.I(0, "ms-bidi-thought-part", 13);
			if (a & 2) {
				a = _.K().V;
				let b = _.K(), c;
				_.E("text", a.text)("closed", (c = a.closed) != null ? c : !1)("animate", b.last() && !a.interrupted)("modelName", b.modelName());
			}
		}, EGd = function(a, b) {
			a & 1 && (_.B(0, uGd, 1, 3, "ms-bidi-text-part", 4), _.B(1, vGd, 1, 3, "ms-bidi-audio-part", 5), _.B(2, wGd, 1, 4, "ms-bidi-audio-stream-part", 6), _.B(3, xGd, 1, 7, "ms-bidi-function-call-part", 7), _.B(4, yGd, 1, 1, "ms-bidi-video-part", 8), _.B(5, zGd, 1, 2, "ms-bidi-search-query-part", 9), _.B(6, AGd, 1, 3, "ms-bidi-code-block-part", 10), _.B(7, BGd, 1, 1, "ms-bidi-image-part", 11), _.B(8, CGd, 1, 4, "ms-bidi-file-part", 12), _.B(9, DGd, 1, 4, "ms-bidi-thought-part", 13));
			a & 2 && (a = b.V, b = _.K(), _.C(a.type === b.ZC.Ws ? 0 : -1), _.y(), _.C(a.type === b.ZC.l2 ? 1 : -1), _.y(), _.C(a.type === b.ZC.gfb ? 2 : -1), _.y(), _.C(a.type === b.ZC.fsa ? 3 : -1), _.y(), _.C(a.type === b.ZC.VIDEO ? 4 : -1), _.y(), _.C(a.type === b.ZC.bqb ? 5 : -1), _.y(), _.C(a.type === b.ZC.Lib ? 6 : -1), _.y(), _.C(a.type === b.ZC.cq ? 7 : -1), _.y(), _.C(a.type === b.ZC.FILE ? 8 : -1), _.y(), _.C(a.type === b.ZC.jrb ? 9 : -1));
		}, FGd = function(a, b) {
			return a.filter((c) => {
				c = c.type;
				return b ? c.startsWith("text/") || _.R4.includes(c) ? !0 : c.startsWith("image/") ? _.Em(b) : c.startsWith("video/") ? _.Fm(b) : c.startsWith("audio/") ? _.Dm(b) : !1 : !1;
			});
		}, IGd = function(a, b) {
			return _.x(function* () {
				var c = yield a.arrayBuffer();
				{
					var d = new DataView(c);
					c = new Uint8Array(d.buffer);
					var e = new ArrayBuffer(d.byteLength + 11), f = new DataView(e);
					let r = new Uint8Array(e);
					var g = GGd(d, 172351395);
					r.set(c.slice(g.fB, g.end), g.fB);
					g = GGd(d, 139690087);
					var k = new DataView(d.buffer.slice(g.cB, g.end));
					k = GGd(k, 88713574);
					var p = new DataView(d.buffer.slice(g.cB + k.cB, g.end + k.end));
					HGd(p, 1161) ? c = d : (d = { pos: g.fB }, q5(f, d, 139690087), q5(f, d, g.end - g.cB + 11), p = g.cB - d.pos, p !== 0 && (e = new ArrayBuffer(e.byteLength - p), f = new Uint8Array(e), f.set(r.subarray(0, d.pos)), r = f, f = new DataView(e)), q5(f, d, 88713574), q5(f, d, k.g4a + 11), r.set(c.slice(g.cB + k.cB, g.cB + k.end), d.pos), d.pos += k.g4a, q5(f, d, 1161), q5(f, d, 8), f.setFloat64(d.pos, b), d.pos += 8, r.set(c.slice(g.cB, g.cB + k.fB), d.pos), d.pos += k.fB, r.set(c.slice(g.cB + k.end, g.end), d.pos), c = f);
				}
				return new Blob([c], { type: a.type });
			});
		}, HGd = function(a, b) {
			for (var c = 0, d = a.byteLength; c < d;) {
				let e = { pos: c }, f = JGd(a, e), g = JGd(a, e), k = Math.min(e.pos + g, a.byteLength);
				if (f === b) return {
					id: f,
					fB: c,
					cB: e.pos,
					g4a: g,
					end: k
				};
				c = k;
			}
		}, GGd = function(a, b) {
			a = HGd(a, b);
			if (!a) throw Error("yi`" + b.toString(16));
			return a;
		}, q5 = function(a, b, c) {
			var d;
			var e = 1;
			for (d = 128; c >= d && e < 8; e++, d *= 128);
			c = d + c;
			for (d = e - 1; d >= 0; d--) {
				let f = c % 256;
				a.setUint8(b.pos + d, f);
				c = (c - f) / 256;
			}
			b.pos += e;
		}, JGd = function(a, b) {
			var c = a.getUint8(b.pos++), d = 8 - c.toString(2).length;
			c -= 1 << 7 - d;
			for (let e = 0; e < d; e++) c *= 256, c += a.getUint8(b.pos++);
			return c;
		}, KGd = function(a, b, c = 3) {
			return Math.abs(a - b) < c;
		}, LGd = function(a, b, c, d) {
			a = {
				top: a.top,
				bottom: a.bottom,
				left: a.left,
				right: a.right
			};
			b.top && (a.top += d);
			b.bottom && (a.bottom += d);
			b.left && (a.left += c);
			b.right && (a.right += c);
			a.height = a.bottom - a.top;
			a.width = a.right - a.left;
			return a;
		}, MGd = function(a, b) {
			var c = 0, d = 0, e = a.nativeElement.style, f = [
				"transform",
				"-ms-transform",
				"-moz-transform",
				"-o-transform"
			].map((g) => e[g]).find((g) => !!g);
			f && f.includes("translate") && (c = f.replace(/.*translate\((.*)px, (.*)px\).*/, "$1"), d = f.replace(/.*translate\((.*)px, (.*)px\).*/, "$2"));
			if (b === "absolute") return {
				height: a.nativeElement.offsetHeight,
				width: a.nativeElement.offsetWidth,
				top: a.nativeElement.offsetTop - d,
				bottom: a.nativeElement.offsetHeight + a.nativeElement.offsetTop - d,
				left: a.nativeElement.offsetLeft - c,
				right: a.nativeElement.offsetWidth + a.nativeElement.offsetLeft - c
			};
			b = a.nativeElement.getBoundingClientRect();
			return {
				height: b.height,
				width: b.width,
				top: b.top - d,
				bottom: b.bottom - d,
				left: b.left - c,
				right: b.right - c,
				scrollTop: a.nativeElement.scrollTop,
				scrollLeft: a.nativeElement.scrollLeft
			};
		}, NGd = function({ clientY: a, rect: b }) {
			return a >= b.top && a <= b.bottom;
		}, OGd = function({ clientX: a, rect: b }) {
			return a >= b.left && a <= b.right;
		}, PGd = function({ clientX: a, clientY: b, xo: c, dUa: d, EXa: e }) {
			c = c.nativeElement.getBoundingClientRect();
			var f = {};
			d.left && KGd(a, c.left, e) && NGd({
				clientY: b,
				rect: c
			}) && (f.left = !0);
			d.right && KGd(a, c.right, e) && NGd({
				clientY: b,
				rect: c
			}) && (f.right = !0);
			d.top && KGd(b, c.top, e) && OGd({
				clientX: a,
				rect: c
			}) && (f.top = !0);
			d.bottom && KGd(b, c.bottom, e) && OGd({
				clientX: a,
				rect: c
			}) && (f.bottom = !0);
			return f;
		}, QGd = function(a, b) {
			return a.left && a.top ? b.tcb : a.right && a.top ? b.vcb : a.left && a.bottom ? b.cVa : a.right && a.bottom ? b.dVa : a.left || a.right ? b.e4a : a.top || a.bottom ? b.ucb : "";
		}, RGd = function({ edges: a, Dka: b, Gma: c }) {
			var d = {};
			Object.keys(a).forEach((e) => {
				d[e] = (c[e] || 0) - (b[e] || 0);
			});
			return d;
		}, XGd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 8, 1);
				_.J("resizing", function(c) {
					_.q(b);
					var d = _.O(1), e = _.K(2);
					return _.t(e.OAa(c, d));
				});
				_.F(2, "ms-bidi-video-recorder", 9);
				_.J("ready", function() {
					_.q(b);
					var c = _.K(2);
					c.gFb() && !c.FE() && c.FF();
					return _.t();
				})("frame", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.Via(c));
				})("error", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(SGd(c));
				});
				_.H();
				_.I(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13);
				_.H();
			}
			a & 2 && (a = _.K(2), _.P("video-container--hidden", a.lka()), _.E("validateResize", a.Wqa)("resizeCursors", a.mpb), _.y(2), _.E("source", a.Ada()), _.y(), _.E("resizeEdges", _.zi(9, TGd)), _.y(), _.E("resizeEdges", _.zi(10, UGd)), _.y(), _.E("resizeEdges", _.zi(11, VGd)), _.y(), _.E("resizeEdges", _.zi(12, WGd)));
		}, YGd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 14)(1, "ms-bidi-video-recorder", 15);
				_.J("frame", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.Via(c));
				})("error", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(SGd(c));
				});
				_.H()();
			}
			a & 2 && (a = _.K(2), _.P("video-container--hidden", a.lka()), _.y(), _.E("source", a.Ada()));
		}, ZGd = function(a) {
			a & 1 && (_.F(0, "div", 5), _.B(1, XGd, 7, 13, "div", 6)(2, YGd, 2, 3, "div", 7), _.H());
			a & 2 && (a = _.K(), _.y(), _.C(a.uZa ? 1 : 2));
		}, $Gd = function(a) {
			a & 1 && (_.F(0, "div", 4)(1, "h1", 10), _.R(2, "Try the Live API"), _.H()());
		}, aHd = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 12);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(2);
					return _.t(e.Xt(d.id));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, _.E("iconName", a.icon)("ariaLabel", a.title)("ve", a.ve)("veImpression", !0)("veClick", !0), _.y(), _.S(" ", a.title, " "));
		}, cHd = function(a) {
			a & 1 && (_.Th(0), _.Ei(1, "async"), _.F(2, "div", 5), _.Ah(3, aHd, 2, 6, "button", 11, bHd), _.H());
			a & 2 && (a = _.Fi(1, 0, _.K().wca), _.y(3), _.Bh(a));
		}, dHd = function(a, b) {
			a & 1 && _.I(0, "ms-bidi-turn", 15);
			if (a & 2) {
				a = b.V;
				let c = b.jb;
				b = b.lj;
				let d = _.K(2);
				_.E("turn", a)("last", c === b - 1)("modelName", d.La.model().getName())("showAuthorLabel", d.NJa(a, c))("isFirstTurn", c === 0);
			}
		}, eHd = function(a) {
			a & 1 && _.I(0, "ms-hallucinations-disclaimer", 16);
		}, fHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-autoscroll-container", 13);
				_.J("isScrollable", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.Fq.set(c));
				})("isScrolledBottom", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.mk.set(c));
				});
				_.F(1, "div", 14);
				_.Ah(2, dHd, 1, 5, "ms-bidi-turn", 15, bHd);
				_.B(4, eHd, 1, 0, "ms-hallucinations-disclaimer", 16);
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(2), _.Bh(a.model.turns()), _.y(2), _.C(a.eQb() && a.PCa() ? 4 : -1));
		}, gHd = function(a) {
			a & 1 && (_.F(0, "span", 20), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.S(" - ", a.RMb()));
		}, hHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.onDisconnect());
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("iconName", a.S.ac));
		}, iHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 26);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.onResume());
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("iconName", a.S.opb));
		}, jHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.B(0, iHd, 1, 1, "button", 24);
				_.F(1, "button", 25);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					c.hn = void 0;
					c.NG().clear();
					c.controller.clear();
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(2), _.C(a.model.C0() ? 0 : -1), _.y(), _.P("primary", !a.model.C0())("secondary", a.model.C0()), _.E("iconName", a.S.jpb));
		}, kHd = function(a) {
			a & 1 && (_.F(0, "div", 8)(1, "div", 17), _.I(2, "mat-divider"), _.H(), _.F(3, "div", 18)(4, "div", 19)(5, "span"), _.R(6), _.B(7, gHd, 2, 1, "span", 20), _.H()(), _.B(8, hHd, 1, 1, "button", 21), _.B(9, jHd, 2, 6), _.H(), _.F(10, "div", 22), _.I(11, "mat-divider"), _.H()());
			a & 2 && (a = _.K(), _.y(6), _.S(" ", a.Wg(), " "), _.y(), _.C(a.M$a() ? 7 : -1), _.y(), _.C(a.model.Sj() ? 8 : -1), _.y(), _.C(a.model.Rx() ? 9 : -1));
		}, lHd = function() {
			return _.x(function* () {
				var a = yield navigator.mediaDevices.enumerateDevices(), b = a.some((c) => c.kind === "audioinput");
				a = a.some((c) => c.kind === "videoinput");
				return [
					...b ? [{
						id: "mic",
						icon: "mic",
						title: "Talk",
						content: "Start a real-time conversation using your microphone.",
						ve: 247646
					}] : [],
					...a ? [{
						id: "videocam",
						icon: "videocam",
						title: "Webcam",
						content: "Use your webcam to share what you're looking at and get real-time feedback.",
						ve: 247647
					}] : [],
					...b || a ? [] : [{
						id: "text",
						icon: "chat_bubble",
						title: "Talk",
						content: "Start a real-time conversation by typing a prompt.",
						ve: 247652
					}],
					..._.lp() ? [] : [{
						id: "screen",
						icon: "screenshot_monitor",
						title: "Share Screen",
						content: "Share your screen to show Gemini what you're working on.",
						ve: 247648
					}]
				];
			});
		}, mHd = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 4)(1, "div", 5)(2, "div", 6), _.R(3), _.H()()());
			a & 2 && (a = b.V, _.E("value", a.Jw()), _.y(3), _.U(a.getDisplayName()));
		}, nHd = function(a) {
			a & 1 && _.I(0, "ms-paid-api-key", 11);
			a & 2 && (a = _.K(), _.E("matTooltip", r5(a))("disabled", a.readOnly()));
		}, pHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 12)(1, "div", 22)(2, "div", 23);
				_.R(3, " Output format ");
				_.H()();
				_.F(4, "div", 24)(5, "ms-button-toggle", 25);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K();
					c && oHd(d.controller, c);
					return _.t();
				});
				_.H()()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", "Output format that the model should generate" + r5(a)), _.y(4), _.P("disabled", a.readOnly()), _.y(), _.E("options", a.RLb)("value", a.model.outputModality())("disabled", a.readOnly()));
		}, qHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 13)(1, "div", 22)(2, "div", 26);
				_.R(3, "Voice");
				_.H()();
				_.F(4, "ms-voice-selector", 27);
				_.J("voiceChanged", function(c) {
					_.q(b);
					var d = _.K().controller;
					c = c.getName();
					d.A.voiceName.set(c);
					return _.t();
				});
				_.H()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", "Select the model voice" + r5(a)), _.y(4), _.E("selectedVoiceId", a.model.voiceName())("disabled", a.readOnly())("voices", a.Vpa()));
		}, rHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 14)(1, "div", 22)(2, "div", 28);
				_.R(3);
				_.H()();
				_.F(4, "ms-language-selector", 29);
				_.J("languageChanged", function(c) {
					_.q(b);
					var d = _.K().controller;
					c = c.Jw();
					d.A.RC.set(c);
					return _.t();
				});
				_.H()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", "Select the model language" + r5(a)), _.y(3), _.S(" ", a.aJb(), " "), _.y(), _.E("disabled", a.readOnly())("languages", a.ira())("selectedLanguageCode", a.model.RC()));
		}, sHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-run-settings-slide-toggle", 30);
				_.J("toggleChange", function(c) {
					_.q(b);
					_.K().controller.A.dY.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("text", a.PBb)("tooltip", a.QBb + r5(a))("checked", a.model.dY())("disabled", a.readOnly()));
		}, tHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 16)(1, "div", 22)(2, "div", 31);
				_.R(3, "Media resolution");
				_.H()();
				_.F(4, "mat-form-field", 32)(5, "mat-select", 33);
				_.J("selectionChange", function(c) {
					_.q(b);
					_.K().controller.A.mediaResolution.set(c.value);
					return _.t();
				});
				_.F(6, "mat-option", 34);
				_.R(7, "66 tokens / image");
				_.H();
				_.F(8, "mat-option", 34);
				_.R(9, " 258 tokens / image ");
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", "Select media resolution" + r5(a)), _.y(5), _.E("value", a.model.mediaResolution())("disabled", a.readOnly()), _.y(), _.E("value", a.KPa.Jmb), _.y(2), _.E("value", a.KPa.Kmb));
		}, uHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-run-settings-slide-toggle", 35);
				_.J("toggleChange", function(c) {
					_.q(b);
					_.K().controller.A.TQ.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("tooltip", a.kUb())("checked", a.model.TQ())("disabled", a.readOnly()));
		}, vHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-thinking-level-setting", 36);
				_.J("levelChange", function(c) {
					_.q(b);
					_.K().controller.A.thinkingLevel.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("level", a.thinkingLevel())("supportedLevels", a.MKa())("minimalLevelLabel", "No Thinking")("disabled", a.readOnly()));
		}, wHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-thinking-budget-setting", 37);
				_.J("valueChanged", function(c) {
					_.q(b);
					_.K().controller.A.Sz.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("thinkingModelConfig", a.Tz())("value", a.Sz())("disabled", a.readOnly())("disabledTooltipSuffix", r5(a)));
		}, xHd = function(a) {
			a & 1 && _.I(0, "mat-divider");
		}, yHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-run-settings-slide-toggle", 38);
				_.J("toggleChange", function(c) {
					_.q(b);
					_.K().controller.A.rH.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("checked", a.model.rH())("disabled", a.readOnly() || a.xHb()));
		}, zHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-run-settings-slide-toggle", 39);
				_.J("toggleChange", function(c) {
					_.q(b);
					_.K().controller.A.LD.set(c);
					return _.t();
				});
				_.H();
			}
			a & 2 && (a = _.K(), _.E("checked", a.model.LD())("disabled", a.readOnly() || a.nHb()));
		}, AHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 43)(1, "div", 44)(2, "h3", 45);
				_.R(3, "Max context size");
				_.H()();
				_.F(4, "ms-slider", 46);
				_.J("valueChange", function(c) {
					_.q(b);
					var d = _.K(2).controller;
					d.A.oQ.set(c);
					_.Qd(d.A.jL) >= c && c > 0 && d.A.jL.set(Math.max(16e3, c - 1));
					return _.t();
				});
				_.H()();
				_.F(5, "div", 43)(6, "div", 44)(7, "h3", 45);
				_.R(8, "Target context size");
				_.H()();
				_.F(9, "ms-slider", 46);
				_.J("valueChange", function(c) {
					_.q(b);
					_.K(2).controller.A.jL.set(c);
					return _.t();
				});
				_.H()();
			}
			a & 2 && (a = _.K(2), _.E("matTooltip", "Number of tokens accumulated before sliding the context window" + r5(a)), _.y(4), _.E("value", a.model.oQ())("step", 1)("min", a.JQa)("max", a.Lzb())("disabled", a.readOnly()), _.y(), _.E("matTooltip", "Number of tokens kept in context after sliding the context window" + r5(a)), _.y(4), _.E("value", a.model.jL())("step", 1)("min", a.JQa)("max", a.model.oQ())("disabled", a.readOnly()));
		}, CHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.I(0, "mat-divider");
				_.F(1, "div", 40);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(BHd(c));
				});
				_.F(2, "div", 22);
				_.I(3, "button", 41);
				_.F(4, "div", 42);
				_.R(5, "Session Context");
				_.H()()();
				_.B(6, AHd, 10, 12);
			}
			a & 2 && (a = _.K(), _.y(), _.P("expanded", a.Eha()), _.y(2), _.E("iconName", a.Eha() ? a.S.iA : a.S.Ck), _.y(3), _.C(a.Eha() ? 6 : -1));
		}, DHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 49)(1, "div", 44)(2, "h3", 45);
				_.R(3, " Code Execution ");
				_.H()();
				_.F(4, "div", 51)(5, "mat-slide-toggle", 52);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K(3);
					return _.t(d.vLa(c.checked));
				});
				_.H()()();
			}
			a & 2 && (a = _.K(3), _.E("matTooltip", "Lets Gemini use code to solve complex tasks" + r5(a, a.aD.OO)), _.y(5), _.E("checked", a.model.enableCodeExecution())("disabled", a.readOnly() || !a.sM()));
		}, EHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 49)(1, "div", 44)(2, "h3", 45);
				_.R(3, " Function calling ");
				_.H()();
				_.F(4, "div", 53)(5, "mat-slide-toggle", 54);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K(3);
					return _.t(d.xLa(c.checked));
				});
				_.H();
				_.F(6, "button", 55);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.EGa());
				});
				_.R(7, " Edit ");
				_.H()()();
				_.F(8, "div", 49)(9, "div", 44)(10, "h3", 45);
				_.R(11, " Automatic Function Response ");
				_.H()();
				_.F(12, "div", 51)(13, "mat-slide-toggle", 56);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K(3);
					return _.t(d.D1(c.checked));
				});
				_.H()()();
			}
			a & 2 && (a = _.K(3), _.E("matTooltip", "Lets you define functions that Gemini can call" + r5(a, a.aD.jG)), _.y(5), _.E("checked", a.model.ye())("disabled", a.readOnly() || !a.gI()), _.y(), _.E("disabled", a.readOnly() || !a.model.ye() || !a.gI()), _.y(2), _.E("matTooltip", a.A4()), _.y(5), _.E("checked", a.model.Ef())("disabled", !a.model.ye() || !a.gI()));
		}, FHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 49)(1, "div", 44)(2, "h3", 45);
				_.R(3, " Grounding with Google Search ");
				_.H();
				_.Ih(4, 57);
				_.H();
				_.F(5, "div", 51)(6, "mat-slide-toggle", 58);
				_.J("change", function(c) {
					_.q(b);
					var d = _.K(3);
					return _.t(d.ALa(c.checked));
				});
				_.H()()();
			}
			if (a & 2) {
				a = _.K(3);
				let b = _.O(28);
				_.E("matTooltip", "Ground responses with Google Search." + r5(a, a.aD.Kea));
				_.y(4);
				_.E("ngTemplateOutlet", b);
				_.y(2);
				_.E("checked", a.model.enableSearchAsATool())("disabled", a.readOnly() || !a.t9());
			}
		}, GHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-browse-as-a-tool", 59);
				_.J("toggleChanged", function(c) {
					_.q(b);
					var d = _.K(3);
					return _.t(d.uLa(c));
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("tooltip", "Browse the url context." + r5(a, a.aD.Lra))("checked", a.model.enableBrowseAsATool())("disabled", a.readOnly() || !a.N8()));
		}, HHd = function(a) {
			a & 1 && (_.B(0, DHd, 6, 3, "div", 49), _.B(1, EHd, 14, 7), _.B(2, FHd, 7, 4, "div", 49), _.B(3, GHd, 1, 3, "ms-browse-as-a-tool", 50));
			a & 2 && (a = _.K(2), _.C(a.dZ.get(a.Feature.Mib)() ? 0 : -1), _.y(), _.C(a.dZ.get(a.Feature.Akb)() ? 1 : -1), _.y(), _.C(a.dZ.get(a.Feature.aqb)() ? 2 : -1), _.y(), _.C(a.dZ.get(a.Feature.Ehb)() ? 3 : -1));
		}, JHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.I(0, "mat-divider");
				_.F(1, "div", 47);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(IHd(c));
				});
				_.F(2, "div", 22);
				_.I(3, "button", 48);
				_.F(4, "div", 42);
				_.R(5, "Tools");
				_.H()()();
				_.B(6, HHd, 4, 4);
			}
			a & 2 && (a = _.K(), _.y(), _.P("expanded", a.JLa()), _.y(2), _.E("iconName", a.JLa() ? a.S.iA : a.S.Ck), _.y(3), _.C(a.JLa() ? 6 : -1));
		}, LHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 62)(1, "div", 44)(2, "h3", 45);
				_.R(3, "Safety settings");
				_.H()();
				_.F(4, "div", 63)(5, "button", 64);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(KHd(c));
				});
				_.R(6, " Edit safety settings ");
				_.H()()();
			}
			a & 2 && (a = _.K(3), _.y(5), _.E("disabled", a.readOnly()));
		}, MHd = function(a) {
			a & 1 && _.B(0, LHd, 7, 1, "div", 62);
			a & 2 && (a = _.K(2), _.C(a.R$a ? 0 : -1));
		}, OHd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.I(0, "mat-divider");
				_.F(1, "div", 47);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(NHd(c));
				});
				_.F(2, "div", 22);
				_.I(3, "button", 60);
				_.F(4, "div", 61);
				_.R(5, "Advanced settings");
				_.H()()();
				_.B(6, MHd, 1, 1);
			}
			a & 2 && (a = _.K(), _.y(), _.P("expanded", a.QTa()), _.y(2), _.E("iconName", a.S.Ck), _.y(3), _.C(a.QTa() ? 6 : -1));
		}, PHd = function(a) {
			a & 1 && (_.F(0, "span", 65), _.R(1, " Source: "), _.I(2, "span", 66), _.R(3, " Google Search "), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.E("iconName", a.S.Oea));
		}, QHd = function(a) {
			a & 1 && _.B(0, PHd, 4, 1, "span", 65);
			a & 2 && (a = _.K(), _.C(a.model.enableSearchAsATool() ? 0 : -1));
		};
		_.yn.prototype.Jw = _.ca(50, function() {
			return _.l(this, 2);
		});
		_.Xw.prototype.Jw = _.ca(49, function() {
			return _.l(this, 2);
		});
		var RHd = function(a, b) {
			return _.cq(a, 4, b);
		}, SHd = function(a) {
			return _.x(function* () {
				if (a.ea()) {
					var b, c = (b = a.X()) == null ? void 0 : b.A().flatMap((f) => _.lc(f.getData()));
					return _.Bv((c == null ? void 0 : c.join(" ")) || "");
				}
				if (a.I()) {
					var d;
					c = (d = a.F()) == null ? void 0 : d.A().flatMap((f) => f.Gg()).map(_.ij);
					return _.Bv((c == null ? void 0 : c.join(" ")) || "");
				}
				if (a.fa()) {
					let f, g;
					b = (f = a.A()) == null ? void 0 : (g = f.A()) == null ? void 0 : g.Gg().map(_.ij);
					var e;
					d = (e = a.A()) == null ? void 0 : e.XL().flatMap((k) => _.mj(k, _.Hn, 2, _.oj())).map((k) => `${k.getName()} ${k.jc()}`);
					e = [
						(c = a.A()) == null ? void 0 : c.getModel(),
						b,
						d
					].flat().filter((k) => k);
					return _.Bv(e.join(" "));
				}
				if (a.aa()) {
					let f, g, k;
					return _.Bv(((f = a.R()) == null ? void 0 : (g = f.A()) == null ? void 0 : (k = g[0]) == null ? void 0 : k.getId()) || "");
				}
				return _.Bv("");
			});
		}, THd = class extends _.h {
			constructor(a) {
				super(a);
			}
			Jw() {
				return _.l(this, 1);
			}
			getDisplayName() {
				return _.l(this, 2);
			}
		}, UHd = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.mj(this, _.Rw, 1, _.oj());
			}
		}, VHd = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, WHd = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.mj(this, _.gv, 2, _.oj());
			}
		}, s5 = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.mj(this, _.Uu, 1, _.oj());
			}
			tD() {
				_.In(this, 2);
			}
			getText() {
				return _.l(this, 5);
			}
			setText(a) {
				return _.Lj(this, 5, a);
			}
		}, XHd = function() {
			var a = new s5();
			return _.Mj(a, 3, !0);
		}, YHd = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, ZHd = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, $Hd = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, aId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, bId = [2], cId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, dId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, eId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, fId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, gId = class extends _.h {
			constructor(a) {
				super(a);
			}
			getModel() {
				return _.l(this, 1);
			}
			setModel(a) {
				return _.Uc(this, 1, a);
			}
			A() {
				return _.Z(this, _.Rw, 3);
			}
			XL() {
				return _.mj(this, _.Tw, 4, _.oj());
			}
			I7() {
				return _.Z(this, VHd, 17);
			}
			aBa() {
				return _.sn(this, VHd, 17);
			}
		}, t5 = [
			2,
			3,
			4,
			7,
			8,
			9
		], hId = class extends _.h {
			constructor(a) {
				super(a);
			}
			A() {
				return _.fj(this, gId, 7, t5);
			}
			fa() {
				return _.Dr(this, gId, 7, t5);
			}
			F() {
				return _.fj(this, UHd, 2, t5);
			}
			I() {
				return _.Dr(this, UHd, 2, t5);
			}
			X() {
				return _.fj(this, s5, 3, t5);
			}
			ea() {
				return _.Dr(this, s5, 3, t5);
			}
			R() {
				return _.fj(this, WHd, 4, t5);
			}
			aa() {
				return _.Dr(this, WHd, 4, t5);
			}
		}, iId = class extends _.h {
			constructor(a) {
				super(a);
			}
			getText() {
				return _.l(this, 1);
			}
			setText(a) {
				return _.Uc(this, 1, a);
			}
			getFinished() {
				return _.Pm(this, 2);
			}
		}, jId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, kId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, lId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, mId = class extends _.h {
			constructor(a) {
				super(a);
			}
			Sb() {
				return _.Z(this, _.Rw, 1);
			}
			Fe() {
				return _.sn(this, _.Rw, 1);
			}
		}, nId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, oId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, u5 = [
			2,
			3,
			4,
			5,
			7,
			8
		], pId = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, qId = function(a, b, c = !0) {
			return _.x(function* () {
				c && (yield a.F);
				var d = _.cc(b), e = yield SHd(d);
				e = yield _.Cp(a.H, e);
				_.Uc(d, 6, e);
				a.A.send(_.oc(d));
			});
		}, rId = function(a, b, c) {
			return _.x(function* () {
				var d = b.model, e = new gId().setModel(d.getName()), f = b.modality, g = _.iXb(f), k = f === 3 && b.RC && !b.MD;
				f === 3 && b.voiceName ? (k = b.RC || void 0, f = _.RDd(new _.yn(), _.rp(_.QDd(new _.Vw(), _.rp(_.PDd(new _.Uw(), b.voiceName))))), f = _.Uc(f, 2, k), _.q0a(g, _.oc(f))) : k && (f = new _.yn(), f = _.Uc(f, 2, b.RC), _.q0a(g, _.oc(f)));
				if (b.MD) {
					k = b.RC.split("-")[0].toLowerCase();
					f = _.o0a(g, !1);
					var p = new _.JDd();
					p = _.Mj(p, 3, b.dY);
					k = _.Lj(p, 4, k);
					_.ln(f, _.JDd, 29, k);
				} else _.rxa(g, b.mediaResolution);
				_.Im(d, 39) && b.rH && _.Mj(g, 20, b.rH);
				_.Im(d, 52) && b.thinkingLevel !== 0 ? (f = _.Ww(new _.Ts(), !0), f = _.cn(f, 4, b.thinkingLevel), _.r0a(g, _.oc(f))) : _.Im(d, 35) && b.Sz !== void 0 && _.r0a(g, _.rp(_.f0a(_.Ww(new _.Ts(), !0), b.Sz)));
				(d = _.Im(d, 40)) && b.LD && (f = new eId(), d = _.Mj(f, 1, d && b.LD), d = _.Mj(d, 2, !1), d = _.oc(d), _.ln(e, eId, 12, d));
				d = new ZHd();
				f = new YHd();
				k = Intl.DateTimeFormat().resolvedOptions().timeZone;
				f = _.Uc(f, 1, k);
				f = _.oc(f);
				d = _.ln(d, YHd, 5, f);
				d = _.oc(d);
				_.ln(e, ZHd, 16, d);
				g = _.ln(e, _.Km, 2, g);
				d = _.rp(new $Hd());
				g = _.ln(g, $Hd, 11, d);
				d = _.rp(new $Hd());
				_.ln(g, $Hd, 10, d);
				b.MD || (g = new dId(), g = _.Lj(g, 1, c), g = _.cq(g, 2, !1), g = _.oc(g), _.ln(e, dId, 7, g), g = new cId(), g = _.ht(g, 1, b.contextWindowCompression.triggerTokens), d = new aId(), d = _.ht(d, 1, b.contextWindowCompression.targetTokens), d = _.oc(d), g = _.Ap(g, 2, bId, d), g = _.oc(g), _.ln(e, cId, 8, g));
				b.systemInstructions && (g = _.rp(_.Pw(new _.Rw(), [_.rp(new _.uv().setText(b.systemInstructions))])), _.ln(e, _.Rw, 3, g));
				b.functionDeclarations.length > 0 && (g = _.rp(_.Y_a(new _.Tw(), b.functionDeclarations)), _.Us(e, 4, _.Tw, g));
				b.enableSearchAsATool && (g = _.rp(_.Z_a(new _.$m())), _.Us(e, 4, _.Tw, g));
				b.enableBrowseAsATool && (g = _.rp(_.$_a()), _.Us(e, 4, _.Tw, g));
				b.enableCodeExecution && (g = _.rp(_.X_a()), _.Us(e, 4, _.Tw, g));
				a.I && b.safetySettings.length > 0 && _.Gn(e, 5, _.un, b.safetySettings);
				b.TQ && (g = new fId(), g = _.cn(g, 4, 2), g = _.oc(g), _.ln(e, fId, 6, g));
				g = new hId();
				e = _.Ap(g, 7, t5, e);
				e = _.oc(e);
				yield qId(a, e, !1);
				e = yield _.pf(a.A.I);
				if (e.eventType !== "channel_message" || !_.Dr(e.message, oId, 2, u5)) throw Error("Af");
			});
		}, sId = function(a) {
			switch (a.status) {
				case 0:
				case 1: return "Stream ended.";
				case 4:
				case 14: return p5(a, "deadline=") || p5(a, "deadline_exceeded") ? "Stream reached maximum duration." : "Something went wrong.";
				case 3: return p5(a, "unsafe prompt") || p5(a, "unsafe generated content") ? "Stream ended due to a safety error." : p5(a, "more than the max tokens limit allowed") ? "Maximum number of tokens exceeded." : p5(a, "Unsupported file:") ? a.error.message : "Something went wrong.";
				case 8:
				case 13: return p5(a, "throttled") || p5(a, "overloaded") ? "Service is currently overloaded." : p5(a, "quota exceeded") ? "Quota exceeded." : "Something went wrong.";
				default: return "Something went wrong.";
			}
		}, tId = class {
			constructor(a, b, c, d) {
				this.H = b;
				this.events = new _.Wg();
				this.F = null;
				this.I = c.getFlag(_.kXb);
				b = {
					ZJb: a.Fa,
					WWa: a.Ea
				};
				d = d.bb();
				c = {};
				if (d == null ? 0 : _.Io(d)) c["X-AIStudio-User-Api-Key"] = _.Io(d);
				this.A = new _.aXb(`${a.X}/v1/bidiGenerateContent`, a.F, a.A, pId, b, c);
			}
			connect() {
				var a = this;
				return _.x(function* () {
					a.A.connect();
					yield _.pf(a.A.R.pipe(_.Gf((b) => b)));
				});
			}
			setup(a, b) {
				return this.F = rId(this, a, b);
			}
			listen() {
				this.A.I.subscribe((a) => {
					switch (a.eventType) {
						case "channel_message":
							this.events.next(a.message);
							break;
						case "channel_error":
							this.events.error(Error(sId(a)));
							break;
						case "channel_client_close":
						case "channel_server_close": this.events.complete();
					}
				}).add(() => void this.events.complete());
				return this.events.asObservable();
			}
			close() {
				var a;
				(a = this.A) == null || a.disconnect();
			}
			destroy() {
				var a;
				(a = this.A) == null || a.destroy();
			}
		}, uId = function(a, { name: b, args: c, functionDeclaration: d }) {
			return _.x(function* () {
				var e = _.cFd(_.dFd(new _.N5a(), _.cv(_.av(new _.dv(), b), _.po(c))), d), f = yield _.bFd(e).then((k) => _.Cp(a.A, k));
				_.Uc(e, 3, f);
				var g;
				return (e = (g = _.eFd(yield _.fFd(a.I, e))) == null ? void 0 : _.hv(g)) && _.xo(e);
			});
		}, vId = function(a, b, c) {
			return _.x(function* () {
				var d = a.U;
				d = new tId(d.H, d.A, d.F, d.R);
				a.stream = d;
				a.A.EC.set(!0);
				a.A.Rx.set(!1);
				a.A.nca.set("");
				yield a.stream.connect();
				yield a.stream.setup(b, c);
			});
		}, wId = function(a) {
			var b = a.A, c = _.nXb(a.turns, !1);
			b.turns.set(c);
			a.F = void 0;
			a.R.set(!1);
			a.H = [];
		}, xId = function(a, b, c) {
			return _.x(function* () {
				try {
					yield vId(a, b, a.A.C0());
				} catch (d) {
					a.A.Rx.set(!0);
					a.A.nca.set("Connection failed");
					let e;
					(e = a.stream) == null || e.close();
					a.stream = null;
					a.A.EC.set(!1);
					a.A.Sj.set(!1);
				}
				if (!a.A.EC() || !a.stream) return !1;
				a.stream.listen().subscribe({
					next: (d) => {
						if (_.Dr(d, nId, 8, u5)) d = _.fj(d, nId, 8, u5), _.l(d, 1) && _.Pm(d, 2) && a.A.C0.set(_.l(d, 1));
						else if (_.Dr(d, lId, 7, u5)) {
							_.fj(d, lId, 7, u5);
							a.mI = !0;
							let e;
							(e = a.stream) == null || e.close();
						} else c(d);
					},
					error: (d) => {
						a.A.nca.set(d.message);
						_.mXb(a);
					}
				}).add(() => {
					a.stream = null;
					wId(a);
					a.mI ? (a.mI = !1, xId(a, b, c)) : (a.A.EC.set(!1), a.A.Rx.set(!0), a.A.Sj.set(!1));
				});
				a.A.Sj.set(!0);
				return !0;
			});
		}, yId = function(a, b) {
			if ((a = a.stream) != null) {
				var c = new hId(), d = new UHd();
				b = _.Zm(d, 1, b);
				b = _.cq(b, 2, !0);
				b = _.oc(b);
				c = _.Ap(c, 2, t5, b);
				c = _.oc(c);
				qId(a, c);
			}
		}, zId = function(a, b) {
			return uId(a.U, b);
		}, AId = function(a, b) {
			if (b) {
				var c = a.turns, d = c.at(-1), e = c.length - 1;
				if (d) {
					var f = d.parts.map((g, k) => {
						if (g.type === 0) return {
							index: k,
							text: g.text
						};
					}).filter((g) => !!g);
					b = _.PHa(f, b);
					for (let g of b) (b = g.grounding) && (d.parts[g.index] = {
						type: 0,
						text: g.text,
						grounding: b
					});
					c[e] = d;
					a.A.turns.set(c);
				}
			}
		}, v5 = function(a, b, c) {
			var d = a.turns;
			if (b === "model") if (a.R.set(!0), a.F) {
				b = a.F.turn;
				var e = d[b], f = [...e.parts];
				let g = f[a.F.part];
				if (c.type === 2) g.type === 2 ? (f[a.F.part] = Object.assign({}, g, {
					kt: [...g.kt, ...c.kt],
					jn: [
						...a.H,
						...g.jn,
						...c.jn
					]
				}), a.H = []) : LFd(g) && (f[a.F.part] = Object.assign({}, g, { closed: !0 }), f.push(c), a.F.part = f.length - 1);
				else if (c.type === 0) g.type === 0 ? f[a.F.part] = Object.assign({}, g, { text: MFd(g.text, c.text) }) : LFd(g) && (f[a.F.part] = Object.assign({}, g, { closed: !0 }), f.push(c), a.F.part = f.length - 1);
				else if (c.type === 9) g.type === 9 ? f[a.F.part] = Object.assign({}, g, { text: MFd(g.text, c.text) }) : LFd(g) && (f[a.F.part] = Object.assign({}, g, { closed: !0 }), f.push(c), a.F.part = f.length - 1);
				else {
					if (g.type === 0 || g.type === 9) f[a.F.part] = Object.assign({}, g, { closed: !0 }), a.F = void 0;
					f.push(c);
				}
				d[b] = Object.assign({}, e, { parts: f });
			} else c.type === 2 && a.H && (c = Object.assign({}, c, { jn: [...a.H, ...c.jn] }), a.H = []), ((e = d.at(-1)) == null ? void 0 : e.role) === "model" ? (b = d.pop(), d.push(Object.assign({}, b, { parts: [...b.parts, c] }))) : d.push({
				id: a.aa++,
				role: b,
				parts: [c]
			}), LFd(c) && (a.F = {
				turn: d.length - 1,
				part: d.at(-1).parts.length - 1
			});
			else c.type === 1 && (c.jn = [...a.I, ...c.jn], a.I = []), b === ((f = d.at(-1)) == null ? void 0 : f.role) ? (b = d.pop(), d.push(Object.assign({}, b, { parts: [...b.parts, c] }))) : d.push({
				id: a.aa++,
				role: b,
				parts: [c]
			});
			a.A.turns.set(d);
		}, BId = function(a, b) {
			var c = a.turns.map((d) => {
				var e = d.parts.map((f) => f.type === 3 && f.id === b ? Object.assign({}, f, { TG: !0 }) : f);
				return Object.assign({}, d, { parts: e });
			});
			a.A.turns.set(c);
		}, CId = function(a, b, c) {
			a.R = b;
			a.U = c;
		}, oHd = function(a, b) {
			a.A.outputModality.set(b);
			a.Ia.bidiOutputFormat.set(b);
		}, DId = {
			KYb: 0,
			mXb: 1,
			e3b: 2,
			XZb: 3,
			O4b: 4,
			kWb: 5,
			tPa: 6,
			B_b: 7,
			o3b: 8,
			OO: 9,
			jG: 10,
			cQa: 11,
			Kea: 12,
			IMAGE_SEARCH: 54,
			VYb: 50,
			Lra: 13,
			i4b: 14,
			y2b: 28,
			x2b: 16,
			UYb: 18,
			WZb: 19,
			N4b: 20,
			ZZb: 21,
			m1b: 55,
			mWb: 22,
			e4b: 23,
			d4b: 24,
			sQa: 25,
			L3b: 38,
			LWb: 26,
			x3b: 27,
			Mib: 29,
			Akb: 30,
			aqb: 31,
			WYb: 51,
			Ehb: 32,
			z3b: 34,
			D3b: 35,
			F0b: 37,
			uYb: 39,
			IXb: 40,
			JXb: 41,
			f3b: 42,
			c0b: 43,
			e0b: 44,
			D0b: 45,
			NWb: 46,
			cfb: 47,
			DXb: 48,
			c_b: 49,
			G3b: 52,
			H0b: 53,
			PWb: 56,
			OWb: 57,
			ksa: 58,
			VVb: 59,
			WVb: 60,
			TVb: 61,
			UVb: 65,
			w3b: 62,
			c3b: 63,
			Z_b: 64,
			MWb: 66,
			RWb: 67,
			QWb: 68
		}, EId = {
			g0b: 0,
			Jmb: 1,
			Kmb: 2,
			d0b: 3,
			f0b: 4
		}, FId = _.Wc(_.no), GId = _.Wc(_.gj), HId = {
			USER: "user",
			MODEL: "model"
		}, IId = {
			Ws: 0,
			l2: 1,
			gfb: 2,
			fsa: 3,
			VIDEO: 4,
			bqb: 5,
			Lib: 6,
			cq: 7,
			FILE: 8,
			jrb: 9,
			0: "TEXT",
			1: "AUDIO",
			2: "AUDIO_STREAM",
			3: "FUNCTION_CALL",
			4: "VIDEO",
			5: "SEARCH_QUERY",
			6: "CODE_BLOCK",
			7: "IMAGE",
			8: "FILE",
			9: "THOUGHT"
		}, JId = (a, b) => b.name, KId = class {
			constructor() {
				this.ve = { Upb: 242890 };
				this.S = _.Dk;
				this.lJa = _.Li.required();
				this.Ns = _.Li.required();
				this.disabled = _.V(!1);
				this.Zdb = _.Ki();
				this.wha = _.W(() => this.Ns().map((a) => {
					var b = a.getName(), c = _.l(a, 2), d = _.uj(a, 4, _.oj());
					(a = _.l(a, 3)) && (d = d.concat(a + " pitch"));
					return {
						name: b,
						MP: c,
						iX: d.join(", ")
					};
				}));
				this.D2 = _.m(_.K4);
				this.qe = this.D2.qe;
				this.xn = this.D2.xn;
			}
			Ba() {
				this.D2.clear();
			}
			x6a(a) {
				this.Zdb.emit(this.Ns().find((b) => b.getName() === a));
			}
		};
		KId.J = function(a) {
			return new (a || KId)();
		};
		KId.ka = _.u({
			type: KId,
			da: [["ms-voice-selector"]],
			inputs: {
				lJa: [1, "selectedVoiceId"],
				Ns: [1, "voices"],
				disabled: [1, "disabled"]
			},
			outputs: { Zdb: "voiceChanged" },
			ha: 8,
			ia: 7,
			la: [
				["audioSampleButton", ""],
				[
					1,
					"container",
					"form-field-density--4"
				],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic"
				],
				[
					3,
					"closed",
					"selectionChange",
					"value",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"aria-hidden",
					"true",
					3,
					"iconName"
				],
				[3, "value"],
				[1, "option-container"],
				[1, "audio-sample"],
				[1, "description"],
				[1, "name"],
				[
					1,
					"characteristics",
					3,
					"title"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Play audio sample",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1)(1, "mat-form-field", 2)(2, "mat-select", 3), _.J("closed", function() {
					b.D2.pause();
				})("selectionChange", function(c) {
					return b.x6a(c.value);
				}), _.F(3, "mat-select-trigger"), _.I(4, "span", 4), _.R(5), _.H(), _.Ah(6, TFd, 7, 4, "mat-option", 5, JId), _.H()()());
				a & 2 && (_.y(2), _.E("value", b.lJa())("disabled", b.disabled())("ve", b.ve.Upb)("veImpression", !0)("veClick", !0), _.y(2), _.E("iconName", b.S.atb), _.y(), _.S(" ", b.lJa(), " "), _.y(), _.Bh(b.wha()));
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.$D,
				_.ZD,
				_.TB,
				_.QB,
				_.dE,
				_.bE,
				_.cE,
				_.Cz,
				_.Bz
			],
			styles: [".container[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}.option-container[_ngcontent-%COMP%], mat-select-trigger[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}mat-option[_ngcontent-%COMP%]    >span{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.audio-sample[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{display:none}.description[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.description[_ngcontent-%COMP%]   .characteristics[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n/*# sourceMappingURL=voice_selector.css.map */"]
		});
		var LId = class {
			constructor(a, b) {
				this.A = a;
				this.Dy = b;
				this.isConnected = !1;
			}
			connect(a, b) {
				var c = this.A.createAnalyser();
				a.connect(c);
				var d = new Uint8Array(c.fftSize), e = () => {
					c.getByteTimeDomainData(d);
					var f = d.reduce((g, k) => Math.max(g, Math.abs(k - 127)), 0) / 128;
					this.Dy.HUa(f);
					this.isConnected && setTimeout(e, 1e3 / b);
				};
				this.isConnected = !0;
				e();
			}
			disconnect() {
				this.isConnected = !1;
			}
		};
		var MId = function(a) {
			a.H = !0;
			a.nodes.forEach((b) => {
				b.Zia.gain.value = 0;
			});
		}, NId = function(a) {
			a.H = !1;
			a.nodes.forEach((b) => {
				b.Zia.gain.value = 1;
			});
		}, OId = class {
			constructor(a, b = 16e3) {
				this.Dy = a;
				this.sampleRate = b;
				this.qe = !1;
				this.nodes = [];
				this.F = 0;
				this.H = !1;
				this.A = new AudioContext();
				this.audioLevel = new LId(this.A, a);
			}
			stop() {
				this.nodes.forEach((a) => {
					a.audioSource.onended = () => {};
					a.audioSource.stop();
					a.audioSource.disconnect();
					a.Zia.disconnect();
				});
				this.nodes = [];
				this.F = 0;
				this.audioLevel.disconnect();
				this.qe = !1;
				this.Dy.iHa.set(!1);
				this.H = !1;
			}
			haa(a) {
				var b = this.A.createBuffer(1, a.length / 2, this.sampleRate), c = b.getChannelData(0);
				_.$Aa(a, c);
				a = this.A.createBufferSource();
				a.buffer = b;
				b = this.A.createGain();
				a.connect(b);
				b.connect(this.A.destination);
				b.gain.value = this.H ? 0 : 1;
				this.audioLevel.connect(a, 30);
				a.onended = () => {
					var f = this.nodes.shift();
					f == null || f.audioSource.disconnect();
					f == null || f.Zia.disconnect();
					this.nodes.length === 0 && this.stop();
				};
				this.nodes.push({
					audioSource: a,
					Zia: b
				});
				a.start(this.F);
				var d, e;
				this.F += (e = (d = a.buffer) == null ? void 0 : d.duration) != null ? e : 0;
				this.qe = !0;
				this.Dy.iHa.set(!0);
			}
		};
		var QId = function(a) {
			a.X = Array(1).fill([]);
			a.R = 0;
			a.source = a.H.createMediaStreamSource(a.I);
			var b = a.source.context;
			a.node = b.createScriptProcessor(256, 1, 1);
			a.node.onaudioprocess = (c) => {
				for (var d = 0; d < 1; ++d) a.A[d].push([...c.inputBuffer.getChannelData(d)]), a.X[d].push([...c.inputBuffer.getChannelData(d)]);
				a.U += 256;
				a.R += 256;
				c = (a.F < 350 ? 40 : a.F < 700 ? 80 : a.F < 1050 ? 160 : a.F < 1400 ? 320 : a.F < 1750 ? 640 : 1280) * a.sampleRate / 1e3;
				if (!(a.U < c)) {
					var e = Array(1).fill([]);
					d = Array(1).fill([]);
					for (var f = 0; f < 1; ++f) {
						var g = 0;
						for (var k = 0; k < a.A[f].length; ++k) g >= c ? d[f].push(a.A[f][k]) : g + a.A[f][k].length >= c ? (e[f].push(a.A[f][k].slice(0, c - g)), d[f].push(a.A[f][k].slice(c - g)), g = c) : (e[f].push(a.A[f][k]), g += a.A[f][k].length);
					}
					f = a.Dy;
					g = OFd(e, c, a.sampleRate);
					e = f.Z_;
					f = e.emit;
					k = new s5();
					g = _.rp(_.Tu(_.Su(new _.Uu(), g.mimeType), _.ab(g.data)));
					g = _.ln(k, _.Uu, 2, g);
					f.call(e, _.oc(g));
					a.U -= c;
					a.A = d;
				}
			};
			a.source.connect(a.node);
			a.node.connect(b.destination);
			PId(a);
		}, RId = function(a) {
			var b;
			(b = a.source) == null || b.disconnect();
			var c;
			(c = a.node) == null || c.disconnect();
			var d;
			(d = a.audioLevel) == null || d.disconnect();
			var e;
			(e = a.I) == null || e.getTracks().forEach((g) => void g.stop());
			var f;
			(f = a.promiseResolve) == null || f.call(a);
			a.I = null;
			a.H = null;
			a.source = null;
			a.node = null;
			a.promise = null;
			a.promiseResolve = null;
		}, SId = function(a) {
			return _.x(function* () {
				if (!a.I) {
					if (_.Iaa()) {
						var b = { audio: !0 };
						var c = {};
					} else b = { audio: {
						channelCount: 1,
						sampleRate: 16e3,
						echoCancellation: !0
					} }, c = { sampleRate: 16e3 };
					a.I = yield navigator.mediaDevices.getUserMedia(b);
					a.H = new AudioContext(c);
					a.sampleRate = a.H.sampleRate;
					a.promise = new Promise((d, e) => {
						a.promiseResolve = d;
						try {
							QId(a);
						} catch (f) {
							RId(a), e(f);
						}
					});
					return a.promise;
				}
			});
		}, PId = function(a) {
			a.audioLevel = new LId(a.H, a.Dy);
			a.audioLevel.connect(a.source, 30);
		}, TId = class {
			constructor(a) {
				this.Dy = a;
				this.promiseResolve = this.promise = this.audioLevel = this.node = this.source = this.H = this.I = null;
				this.sampleRate = 16e3;
				this.A = Array(1).fill([]);
				this.U = 0;
				this.X = Array(1).fill([]);
				this.F = this.R = 0;
			}
			Qoa(a) {
				this.F = a;
			}
			vja() {
				var a = _.eBa(this.X, this.R, this.sampleRate);
				this.X = Array(1).fill([]);
				this.R = 0;
				return a;
			}
		};
		var w5 = class {};
		w5.J = function(a) {
			return new (a || w5)();
		};
		w5.sa = _.Cd({
			token: w5,
			factory: w5.J,
			wa: "root"
		});
		var UId = ["audioEl"], VId = class {
			constructor() {
				this.Role = HId;
				this.audio = _.Li.required();
				this.role = _.Li.required();
				this.jn = _.Li([]);
				this.sxb = _.W(() => _.io(this.audio()));
				this.transcript = _.W(() => this.jn().map((a) => a.text).join(""));
				this.Rva = _.Ni("audioEl", Object.assign({}, {}, { read: _.Jf }));
				_.Fk([this.Rva], () => {
					setTimeout(() => {
						var a, b = (a = this.Rva()) == null ? void 0 : a.nativeElement;
						b && (b.style.boxSizing = "initial");
					}, 1);
				});
			}
		};
		VId.J = function(a) {
			return new (a || VId)();
		};
		VId.ka = _.u({
			type: VId,
			da: [["ms-bidi-audio-part"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Rva, UId, 5, _.Jf);
				a & 2 && _.ki();
			},
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("user", b.role() === b.Role.USER)("model", b.role() === b.Role.MODEL);
			},
			inputs: {
				audio: [1, "audio"],
				role: [1, "role"],
				jn: [1, "transcripts"]
			},
			ha: 3,
			ia: 2,
			la: [
				["audioEl", ""],
				[
					"controls",
					"",
					3,
					"src"
				],
				[1, "transcript"]
			],
			template: function(a, b) {
				a & 1 && (_.Fh(0, "audio", 1, 0), _.B(2, UFd, 2, 1, "div", 2));
				if (a & 2) {
					let c;
					_.Ch("src", b.sxb());
					_.y(2);
					_.C((c = b.transcript()) ? 2 : -1, c);
				}
			},
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px}.user[_nghost-%COMP%]   audio[_ngcontent-%COMP%]::-webkit-media-controls-panel{background:var(--user-chunk-background-color)}.user[_nghost-%COMP%]   audio[_ngcontent-%COMP%]::-webkit-media-controls-enclosure{background:var(--user-chunk-background-color)}audio[_ngcontent-%COMP%]{max-width:max(256px,33cqw)}"]
		});
		var WFd = function(a) {
			a.muted.update((b) => !b);
		}, WId = class {
			constructor() {
				this.S = _.Dk;
				this.audioData = _.Li.required();
				this.jn = _.Li([]);
				this.closed = _.V(!1);
				this.interrupted = _.V(!1);
				this.iHa = _.M(!1);
				this.muted = _.M(!1);
				this.K$a = _.W(() => this.closed() && !this.iHa());
				this.audio = _.W(() => {
					if (!this.K$a()) return "";
					var a = this.audioData(), b = ZFd(a);
					a = _.aBa(a.map((c) => c.data));
					b = _.eBa([[a]], a.length, b);
					return _.io(b);
				});
				this.audioLevel = _.M(5);
				this.transcript = _.W(() => this.jn().map((a) => a.text).join(""));
				this.A = void 0;
				this.F = 0;
				_.Fk([this.audioData], () => {
					var a = this.audioData();
					this.A || (this.A = new OId(this, ZFd(a)));
					for (let d = this.F; d < a.length; ++d) {
						var b = this.A, c = a[d].data;
						b.F === 0 && (b.F = b.A.currentTime);
						b.haa(_.go(c));
					}
					this.F = a.length;
				});
				_.Fk([this.interrupted], () => {
					if (this.interrupted()) {
						let a;
						(a = this.A) == null || a.stop();
					}
				});
				_.Fk([this.muted], () => {
					if (this.muted()) {
						let a;
						(a = this.A) == null || MId(a);
					} else {
						let a;
						(a = this.A) == null || NId(a);
					}
				});
			}
			Ba() {
				var a;
				(a = this.A) == null || a.stop();
			}
			HUa(a) {
				this.audioLevel.set(5 + 15 * Math.min(a * 2, 1));
			}
		};
		WId.J = function(a) {
			return new (a || WId)();
		};
		WId.ka = _.u({
			type: WId,
			da: [["ms-bidi-audio-stream-part"]],
			inputs: {
				audioData: [1, "audioData"],
				jn: [1, "transcripts"],
				closed: [1, "closed"],
				interrupted: [1, "interrupted"]
			},
			ha: 3,
			ia: 2,
			la: [
				[
					"controls",
					"",
					3,
					"src"
				],
				[1, "streaming-output"],
				[1, "transcript"],
				[1, "image-container"],
				[1, "image-block"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, VFd, 1, 1, "audio", 0)(1, XFd, 4, 5, "div", 1), _.B(2, YFd, 2, 1, "div", 2));
				if (a & 2) {
					let c;
					_.C(b.K$a() ? 0 : 1);
					_.y(2);
					_.C((c = b.transcript()) ? 2 : -1, c);
				}
			},
			dependencies: [_.Yy],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px}.streaming-output[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.image-container[_ngcontent-%COMP%]{background:var(--color-on-surface);height:20px;margin:10px 0;-webkit-mask-image:url(https://www.gstatic.com/aistudio/sound-wave.gif);mask-image:url(https://www.gstatic.com/aistudio/sound-wave.gif);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;width:62px}.image-container[_ngcontent-%COMP%]   .image-block[_ngcontent-%COMP%]{width:100%;height:100%}audio[_ngcontent-%COMP%]{max-width:max(256px,33cqw)}"]
		});
		var XId = class {
			constructor() {
				_.m(_.Op);
				this.name = _.Li.required();
				this.code = _.Li.required();
				this.language = _.Li.required();
			}
		};
		XId.J = function(a) {
			return new (a || XId)();
		};
		XId.ka = _.u({
			type: XId,
			da: [["ms-bidi-code-block-part"]],
			inputs: {
				name: [1, "name"],
				code: [1, "code"],
				language: [1, "language"]
			},
			ha: 2,
			ia: 2,
			la: [[1, "container"], [
				"enableStickyHeader",
				"",
				3,
				"code",
				"language"
			]],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.I(1, "ms-code-block", 1), _.H());
				a & 2 && (_.y(), _.E("code", b.code())("language", b.name()));
			},
			dependencies: [_.aM],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.container[_ngcontent-%COMP%]{min-width:50cqw;max-width:100cqw}"]
		});
		var YId = function(a, b) {
			_.x(function* () {
				a.Sa.set(!0);
				var c = void 0;
				try {
					c = yield _.pf(_.o4(a.A, b));
				} catch (f) {}
				var d;
				((d = c) == null ? 0 : d.name) ? a.displayName.set(c.name) : a.displayName.set(`File ${b}`);
				var e;
				((e = c) == null ? 0 : e.thumbnailLink) && a.thumbnailUrl.set(c.thumbnailLink);
				a.Sa.set(!1);
			});
		}, ZId = class {
			constructor() {
				this.Role = HId;
				this.S = _.Dk;
				this.name = _.V();
				this.driveId = _.V();
				this.kt = _.V();
				this.role = _.Li.required();
				this.A = _.m(_.sH);
				this.icon = _.M("docs");
				this.displayName = _.M("");
				this.thumbnailUrl = _.M();
				this.Sa = _.M(!1);
				_.Fk([this.name, this.driveId], () => {
					var a = this.name(), b = this.driveId();
					a ? this.displayName.set(a) : b && YId(this, b);
				});
			}
			Kya() {
				var a = this.kt();
				if (a) {
					var b;
					_.OO({
						base64: a.data,
						mimeType: a.mimeType,
						fileName: (b = this.name()) != null ? b : _.NO(a.mimeType)
					});
				}
			}
		};
		ZId.J = function(a) {
			return new (a || ZId)();
		};
		ZId.ka = _.u({
			type: ZId,
			da: [["ms-bidi-file-part"]],
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("user", b.role() === b.Role.USER)("model", b.role() === b.Role.MODEL);
			},
			inputs: {
				name: [1, "name"],
				driveId: [1, "driveId"],
				kt: [1, "base64Data"],
				role: [1, "role"]
			},
			ha: 5,
			ia: 3,
			la: [
				[
					"alt",
					"Thumbnail",
					3,
					"src"
				],
				[1, "file-wrapper"],
				[3, "iconName"],
				[
					1,
					"loading-indicator",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Download file",
					"matTooltip",
					"Download file",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Download file",
					"matTooltip",
					"Download file",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, $Fd, 1, 1, "img", 0), _.F(1, "div", 1), _.I(2, "span", 2), _.B(3, aGd, 1, 1, "span", 3)(4, cGd, 3, 2), _.H());
				a & 2 && (_.C(b.thumbnailUrl() ? 0 : -1), _.y(2), _.E("iconName", b.icon()), _.y(), _.C(b.Sa() ? 3 : 4));
			},
			dependencies: [
				_.Yy,
				_.dz,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]{border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.user[_nghost-%COMP%]{background:var(--user-chunk-background-color);border:1px solid var(--user-chunk-background-color)}.model[_nghost-%COMP%]{border:1px solid var(--color-v3-outline-var)}.file-wrapper[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;padding:8px 12px 8px 8px}.loading-indicator[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_rotate 1s linear infinite;animation:_ngcontent-%COMP%_rotate 1s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}button[_ngcontent-%COMP%]{margin-right:-12px}\n/*# sourceMappingURL=bidi_file_part.css.map */"]
		});
		var x5 = class {
			constructor() {
				this.history = new Map();
			}
			DW(a, b) {
				this.history.has(a) || this.history.set(a, []);
				this.history.get(a).unshift(b);
			}
			clear(a) {
				this.history.delete(a);
			}
			get(a) {
				var b, c;
				return (c = (b = this.history.get(a)) == null ? void 0 : b.slice()) != null ? c : [];
			}
		};
		x5.J = function(a) {
			return new (a || x5)();
		};
		x5.sa = _.Cd({
			token: x5,
			factory: x5.J,
			wa: "root"
		});
		var $Id = ["ArrowUp", "ArrowDown"], aJd = class {
			constructor() {
				this.AH = _.m(_.DD);
				this.ub = _.m(_.ag);
				this.Cma = _.Li(_.Yn());
				this.v5a = _.V(!0);
				this.w5a = _.V(!0);
				this.ge = _.m(_.lD);
				this.history = _.m(x5);
				this.A = -1;
			}
			Ba() {
				this.v5a() && this.history.clear(this.Cma());
			}
			Rb() {
				this.AH.q_.pipe(_.Ak(this.ub)).subscribe(() => {
					var a = this.ge.control.value;
					a && (this.history.DW(this.Cma(), a), this.w5a() && this.ge.control.reset());
				});
				this.ge.control.zh.pipe(_.Ak(this.ub), _.bh(this.ge.control.value)).subscribe((a) => {
					a || (this.A = -1);
				});
			}
			sk(a) {
				var b = this.history.get(this.Cma());
				if (b.length) {
					if ($Id.includes(a.key)) {
						var c = dGd(a.target);
						var d = c.jTb;
						let g = c.AEb, k = c.uyb;
						c = c.text;
						let p, r, v, w = 0;
						for (let D = 0; D < c.length; D++) {
							let G = c.charAt(D), L = g(G);
							G === "\n" ? (r = D, w = 0, v = void 0) : (G === " " && (v = D), w + L > d && (v !== void 0 ? (r = v, w = g(c.slice(v + 1, D))) : (r = D, w = 0), v = void 0), p != null || (p = r), w += L);
						}
						var { Rma: e, Uma: f } = p === void 0 ? {
							Rma: !0,
							Uma: !0
						} : k <= p ? {
							Rma: !0,
							Uma: !1
						} : k >= r ? {
							Rma: !1,
							Uma: !0
						} : {
							Rma: !1,
							Uma: !1
						};
						d = _.Aa() ? a.metaKey : a.ctrlKey;
						d = a.key === "ArrowUp" && (d || e) ? 1 : a.key === "ArrowDown" && (d || f) ? -1 : 0;
					} else d = 0;
					d && (this.A > -1 ? this.ge.control.value === b[this.A] : this.ge.control.value === "") && (d = this.A + d, d < -1 || d >= b.length || (a.preventDefault(), a.stopPropagation(), this.A = d, this.ge.control.setValue(d === -1 ? "" : b[d])));
				}
			}
		};
		aJd.J = function(a) {
			return new (a || aJd)();
		};
		aJd.Oa = _.We({
			type: aJd,
			da: [[
				"textarea",
				"msTextInputHistory",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("keydown", function(c) {
					return b.sk(c);
				});
			},
			inputs: {
				Cma: [1, "msTextInputHistoryId"],
				v5a: [1, "msTextInputHistoryClearOnDestroy"],
				w5a: [1, "msTextInputHistoryResetOnSubmit"]
			}
		});
		var bJd = ["form"], cJd = class {
			constructor() {
				this.S = _.Dk;
				this.Vm = _.m(_.e2);
				_.m(_.Op);
				this.TFb = "bidi-function-call";
				this.form = _.Ni.required("form");
				this.id = _.Li.required();
				this.name = _.Li.required();
				this.args = _.Li.required();
				this.behavior = _.V();
				this.vga = _.V();
				this.TG = _.Li.required();
				this.Rpa = _.Li.required();
				this.I = _.m(_.SC);
				this.H = _.m(_.iC);
				this.A = _.m(_.HD);
				this.bCb = _.W(() => this.behavior() === 2);
				this.Zq = this.A.control("", { Oq: !0 });
				this.kra = this.A.control(!1, { Oq: !0 });
				this.AH = this.A.group({
					responseControl: this.Zq,
					willContinue: this.kra
				});
				this.oga = _.W(() => JSON.stringify(this.args(), void 0, 2));
				this.error = _.M("");
				this.wZa = _.M(!1);
				this.F = _.M(!1);
				this.h0 = _.M(!1);
				this.response = _.Ck(this.Zq.zh, { initialValue: this.Zq.value });
				this.xIa = _.W(() => this.response());
				this.willContinue = _.Ck(this.kra.zh, { initialValue: this.kra.value });
				this.responses = _.M([]);
				this.placeholder = _.W(() => this.TG() ? "Cancelled" : this.F() ? "Generating response…" : "Type a response value as JSON");
				this.BVa = _.W(() => !this.h0() && !this.TG() && this.xIa());
				this.Qf = _.W(() => this.h0() ? "Response already sent" : this.TG() ? "Function call has been cancelled" : this.xIa() ? "" : "Response must be valid JSON");
				_.Fk([this.h0, this.TG], () => {
					var a = this.h0(), b = this.TG();
					a || b ? this.Zq.disable() : this.Zq.enable();
					b && this.Zq.setValue("");
				});
			}
			ib() {
				var a = this;
				return _.x(function* () {
					var b = a.vga();
					if (b) {
						a.F.set(!0);
						try {
							let c = yield b;
							!c || a.Zq.value || a.TG() || a.Zq.setValue(JSON.stringify(c, void 0, 2));
						} catch (c) {
							c instanceof Error && a.error.set(c.message);
						} finally {
							a.F.set(!1);
						}
					}
				});
			}
			Rb() {
				this.wZa.set(!0);
			}
			xl() {
				var a = this.I.copy(this.response()), b = a ? "Copied to clipboard" : "Error copying to clipboard";
				a ? this.H.success(b) : this.H.error(b);
			}
			sendResponse() {
				var a = this.response();
				try {
					var b = JSON.parse(a);
					var c = _.Bo(b) ? a : JSON.stringify({ response: b });
				} catch (d) {
					c = JSON.stringify({ response: a });
				}
				(b = this.willContinue()) ? this.responses.update((d) => [...d, a]) : this.h0.set(!0);
				this.Rpa()(_.rp(RHd(_.DUa(_.CUa(this.id()), this.name()).mr(_.po(JSON.parse(c))), b)));
			}
			onKeyDown(a) {
				if (_.d2(this.Vm, a)) {
					a.preventDefault();
					a.stopPropagation();
					var b;
					(b = this.form()) == null || b.wj(new Event("submit"));
				}
			}
		};
		cJd.J = function(a) {
			return new (a || cJd)();
		};
		cJd.ka = _.u({
			type: cJd,
			da: [["ms-bidi-function-call-part"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.form, bJd, 5);
				a & 2 && _.ki();
			},
			inputs: {
				id: [1, "id"],
				name: [1, "name"],
				args: [1, "args"],
				behavior: [1, "behavior"],
				vga: [1, "autogeneratedResponse"],
				TG: [1, "cancelled"],
				Rpa: [1, "submitUserResponse"]
			},
			ha: 5,
			ia: 4,
			la: [
				["userInput", ""],
				["form", "ngForm"],
				[1, "container"],
				[
					"showDivider",
					"",
					3,
					"code",
					"headerText",
					"icon"
				],
				[3, "ngTemplateOutlet"],
				[1, "response"],
				[
					3,
					"ngSubmit",
					"formGroup"
				],
				[
					"msTextInputHistory",
					"",
					1,
					"textarea",
					3,
					"keydown",
					"cdkTextareaAutosize",
					"cdkAutosizeMinRows",
					"cdkAutosizeMaxRows",
					"placeholder",
					"formControl",
					"msTextInputHistoryId",
					"msTextInputHistoryClearOnDestroy",
					"msTextInputHistoryResetOnSubmit"
				],
				[1, "will-continue-container"],
				[1, "footer-start"],
				[
					"type",
					"button",
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Copy to clipboard",
					"data-test-id",
					"copy-to-clipboard-button",
					3,
					"click",
					"iconName"
				],
				[1, "error"],
				[
					"matTooltipPosition",
					"right",
					3,
					"matTooltip",
					"tabIndex"
				],
				[
					"type",
					"submit",
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Send response",
					"matTooltipPosition",
					"right",
					3,
					"iconName",
					"disabled"
				],
				[
					"aria-label",
					"Will continue",
					1,
					"slide-toggle",
					"large",
					3,
					"formControl"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 2)(1, "ms-code-block", 3), _.Ih(2, 4), _.H(), _.z(3, hGd, 12, 18, "ng-template", null, 0, _.Ii), _.H());
				a & 2 && (a = _.O(4), _.y(), _.E("code", b.oga())("headerText", b.name())("icon", b.S.MOa), _.y(), _.E("ngTemplateOutlet", a));
			},
			dependencies: [
				_.Yy,
				_.aM,
				_.JD,
				_.wD,
				_.Wn,
				_.oD,
				_.pD,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.nz,
				_.MD,
				_.zD,
				_.DD,
				_.eF,
				_.dF,
				aJd
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.container[_ngcontent-%COMP%]{min-width:50cqw;max-width:100cqw}.error[_ngcontent-%COMP%]{color:var(--color-v3-accent-3);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}form[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}div.response[_ngcontent-%COMP%], textarea.textarea[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;background:var(--color-v3-surface-container);border:1px solid transparent;font-family:Google Sans Mono,Courier New,Courier,monospace;padding:16px}div.response[_ngcontent-%COMP%]{border-bottom:4px solid var(--color-surface-bright);opacity:.38}textarea.textarea[_ngcontent-%COMP%]{-moz-box-sizing:content-box;box-sizing:content-box;outline:none;resize:none;white-space:pre-wrap;width:calc(100% - 34px)}textarea.textarea[_ngcontent-%COMP%]:disabled{opacity:.38}textarea.textarea.invalid[_ngcontent-%COMP%]{border-color:var(--color-error-80)}.will-continue-container[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;background:var(--color-surface-bright);padding:12px}footer[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:var(--color-surface-bright);border-bottom-left-radius:8px;border-bottom-right-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.footer-start[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}"]
		});
		var dJd = function(a) {
			_.jC(a.dialog.open(_.SO, {
				data: { media: [{
					source: a.v1a(),
					altText: a.yE()
				}] },
				maxWidth: "100vw"
			})).subscribe((b) => {
				(b == null ? 0 : b.download) && a.NQ();
			});
		}, eJd = class {
			constructor() {
				this.image = _.Li.required();
				this.dialog = _.m(_.rC);
				this.v1a = _.W(() => _.io(this.image()));
				this.yE = _.W(() => "Image");
				this.S = _.Dk;
			}
			NQ() {
				_.OO({
					mimeType: this.image().mimeType,
					base64: this.image().data
				});
			}
		};
		eJd.J = function(a) {
			return new (a || eJd)();
		};
		eJd.ka = _.u({
			type: eJd,
			da: [["ms-bidi-image-part"]],
			inputs: { image: [1, "image"] },
			ha: 5,
			ia: 3,
			la: [
				[
					1,
					"image-container-button",
					3,
					"click"
				],
				[
					"alt",
					"Image",
					3,
					"src"
				],
				[1, "buttons"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Download",
					1,
					"image-button",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"View full image",
					1,
					"image-button",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "button", 0), _.J("click", function() {
					return dJd(b);
				}), _.I(1, "img", 1), _.H(), _.F(2, "div", 2)(3, "button", 3), _.J("click", function() {
					return b.NQ();
				}), _.H(), _.F(4, "button", 4), _.J("click", function() {
					return dJd(b);
				}), _.H()());
				a & 2 && (_.y(), _.E("src", b.v1a(), _.rg), _.y(2), _.E("iconName", b.S.Hm), _.y(), _.E("iconName", b.S.IV));
			},
			dependencies: [
				_.Yy,
				_.IC,
				_.HC
			],
			styles: ["[_nghost-%COMP%]{border:1px solid var(--color-on-surface-variant);border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;position:relative}.image-container-button[_ngcontent-%COMP%]{background:transparent;border:none;cursor:pointer;padding:0;margin:0}img[_ngcontent-%COMP%]{max-height:min(30vh,178px);max-width:100%}.buttons[_ngcontent-%COMP%]{bottom:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;position:absolute;right:8px;z-index:1}.image-button[_ngcontent-%COMP%]{background-color:var(--color-v3-outline);opacity:.8}.image-button[_ngcontent-%COMP%]:hover{opacity:1}.image-button.image-button.image-button.image-button[_ngcontent-%COMP%]{--mat-icon-button-state-layer-size:24px;padding:0}"]
		});
		var fJd = class {
			constructor() {
				this.S = _.Dk;
				this.Pl = _.Li.required();
				this.sources = _.Li([]);
			}
		};
		fJd.J = function(a) {
			return new (a || fJd)();
		};
		fJd.ka = _.u({
			type: fJd,
			da: [["ms-bidi-search-query-part"]],
			inputs: {
				Pl: [1, "searchQueries"],
				sources: [1, "sources"]
			},
			ha: 2,
			ia: 2,
			la: [
				[1, "search-sources"],
				[1, "search-entry-point"],
				[
					1,
					"sources-title",
					"v3-font-label"
				],
				[
					"aria-label",
					"Tooltip for search from specific sources",
					"matTooltip",
					"Sources are provided when a significant portion of the model response comes from a particular source.",
					"matTooltipPosition",
					"above",
					3,
					"iconName"
				],
				[
					"target",
					"_blank",
					3,
					"href"
				],
				[3, "searchQueries"]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, jGd, 7, 1, "div", 0), _.B(1, kGd, 2, 1, "div", 1));
				a & 2 && (_.C(b.sources().length > 0 ? 0 : -1), _.y(), _.C(b.Pl().length > 0 ? 1 : -1));
			},
			dependencies: [
				_.dz,
				_.IC,
				_.HC,
				_.YO
			],
			styles: [".sources-title[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.sources-title[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{cursor:pointer}.search-sources[_ngcontent-%COMP%]{border-radius:16px;padding:16px;margin:14px 0 4px;background-color:var(--color-search-sources-background-color);color:var(--color-search-sources-color)}.search-sources[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin-bottom:0;padding-left:20px}.search-sources[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:4px}.search-sources[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.search-entry-point[_ngcontent-%COMP%]{margin-top:10px}"]
		});
		var gJd = class {
			constructor() {
				this.text = _.Li.required();
				this.grounding = _.V();
				this.animate = _.V(!1);
				this.A = _.m(_.eG);
				this.Nv = new _.sZb(this.A, this.animate, this.text, this.grounding);
			}
		};
		gJd.J = function(a) {
			return new (a || gJd)();
		};
		gJd.ka = _.u({
			type: gJd,
			da: [["ms-bidi-text-part"]],
			inputs: {
				text: [1, "text"],
				grounding: [1, "grounding"],
				animate: [1, "animate"]
			},
			ha: 2,
			ia: 1,
			la: [[3, "node"]],
			template: function(a, b) {
				a & 1 && _.B(0, lGd, 1, 1, "ms-cmark-node", 0)(1, mGd, 1, 1);
				if (a & 2) {
					let c;
					_.C((c = b.Nv.ZK()) ? 0 : 1, c);
				}
			},
			dependencies: [_.cM],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
		});
		var hJd = class {
			constructor() {
				this.text = _.Li.required();
				this.animate = _.V(!1);
				this.closed = _.V(!1);
				this.modelName = _.Li.required();
				this.A = _.m(_.eG);
				this.Nv = new _.sZb(this.A, this.animate, this.text);
			}
		};
		hJd.J = function(a) {
			return new (a || hJd)();
		};
		hJd.ka = _.u({
			type: hJd,
			da: [["ms-bidi-thought-part"]],
			inputs: {
				text: [1, "text"],
				animate: [1, "animate"],
				closed: [1, "closed"],
				modelName: [1, "modelName"]
			},
			ha: 3,
			ia: 4,
			la: [[
				3,
				"text",
				"isThinkingRunning",
				"modelName"
			], [3, "node"]],
			template: function(a, b) {
				a & 1 && (_.F(0, "ms-thought-chunk", 0), _.B(1, nGd, 1, 1, "ms-cmark-node", 1)(2, oGd, 1, 1), _.H());
				if (a & 2) {
					let c;
					_.E("text", b.text())("isThinkingRunning", !b.closed())("modelName", b.modelName());
					_.y();
					_.C((c = b.Nv.ZK()) ? 1 : 2, c);
				}
			},
			dependencies: [_.cM, _.f5],
			styles: ["[_nghost-%COMP%]{width:100%}"]
		});
		var iJd = class {
			constructor() {
				this.video = _.Li.required();
				this.videoUrl = _.M();
				this.z7a = _.M();
				_.Fk([this.video], () => {
					var a = this;
					return _.x(function* () {
						var b = yield a.video(), c = void 0;
						try {
							c = _.ld(b);
						} catch (d) {}
						a.videoUrl.set(c);
						a.z7a.set(yield pGd(c));
					});
				});
			}
		};
		iJd.J = function(a) {
			return new (a || iJd)();
		};
		iJd.ka = _.u({
			type: iJd,
			da: [["ms-bidi-video-part"]],
			inputs: { video: [1, "video"] },
			ha: 1,
			ia: 2,
			la: [[
				"controls",
				"",
				3,
				"src",
				"poster"
			]],
			template: function(a, b) {
				a & 1 && _.Fh(0, "video", 0);
				a & 2 && _.Ch("src", b.videoUrl(), _.rg)("poster", b.z7a());
			},
			styles: ["video[_ngcontent-%COMP%]{border-radius:8px;max-width:max(256px,33cqw)}"]
		});
		var jJd = class {
			constructor() {
				this.Role = HId;
				this.ZC = IId;
				this.turn = _.Li.required();
				this.last = _.Li.required();
				this.modelName = _.Li.required();
				this.Nba = _.V(!0);
				this.Z8 = _.V(!0);
			}
		};
		jJd.J = function(a) {
			return new (a || jJd)();
		};
		jJd.ka = _.u({
			type: jJd,
			da: [["ms-bidi-turn"]],
			inputs: {
				turn: [1, "turn"],
				last: [1, "last"],
				modelName: [1, "modelName"],
				Nba: [1, "showAuthorLabel"],
				Z8: [1, "isFirstTurn"]
			},
			ha: 5,
			ia: 5,
			la: [
				[1, "turn"],
				[1, "content"],
				[1, "author-label"],
				[1, "turn-separator"],
				[
					3,
					"text",
					"grounding",
					"animate"
				],
				[
					3,
					"audio",
					"role",
					"transcripts"
				],
				[
					3,
					"audioData",
					"transcripts",
					"closed",
					"interrupted"
				],
				[
					3,
					"id",
					"name",
					"args",
					"submitUserResponse",
					"behavior",
					"autogeneratedResponse",
					"cancelled"
				],
				[3, "video"],
				[
					3,
					"searchQueries",
					"sources"
				],
				[
					3,
					"name",
					"code",
					"language"
				],
				[3, "image"],
				[
					3,
					"name",
					"driveId",
					"base64Data",
					"role"
				],
				[
					3,
					"text",
					"closed",
					"animate",
					"modelName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, tGd, 2, 1), _.F(1, "div", 0)(2, "div", 1), _.Ah(3, EGd, 10, 10, null, null, _.yh), _.H()());
				a & 2 && (_.C(b.Nba() ? 0 : -1), _.y(), _.P("user", b.turn().role === b.Role.USER)("model", b.turn().role === b.Role.MODEL), _.y(2), _.Bh(b.turn().parts));
			},
			dependencies: [
				VId,
				WId,
				XId,
				ZId,
				cJd,
				eJd,
				fJd,
				gJd,
				hJd,
				iJd,
				_.tz
			],
			styles: ["[_nghost-%COMP%]{container-type:inline-size}.author-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);margin-top:20px;margin-bottom:8px}.turn-separator[_ngcontent-%COMP%]{border-top:1px solid var(--turn-separator-color,var(--color-v3-outline))}.turn[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;width:100%}.user[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.model[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.model[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ms-bidi-text-part[_ngcontent-%COMP%]{padding:4px 0}"]
		});
		var kJd = function(a) {
			return _.x(function* () {
				var b = yield _.aob(a.X);
				yield _.mob(a.I, b);
			});
		}, mJd = function(a, b) {
			return _.x(function* () {
				a.A.set(!0);
				var c = yield Promise.all(b.map((d) => lJd(a, d)));
				a.U.set(c);
				a.A.set(!1);
			});
		}, lJd = function(a, b) {
			return _.x(function* () {
				if (b.type.startsWith("image/")) {
					var c = yield _.eo(b);
					_.EH(a.H, {
						Yb: _.Yn(),
						status: "PREPARING",
						Gd: "IMAGE",
						yd: {
							url: c,
							mimeType: b.type,
							Pb: _.bo(c),
							name: b.name
						},
						Xd: c
					});
					var d = b.type;
					c = _.ab(_.bo(c));
					return _.rp(_.Pw(_.pp((0, _.q1)()), [_.rp(_.lv(_.pp((0, _.p1)()), _.rp(_.Tu(_.Su(_.pp((0, _.mYc)()), d), c))))]));
				}
				d = yield nJd(a, b);
				_.EH(a.H, {
					Yb: _.Yn(),
					status: "PREPARING",
					Gd: "FILE",
					kb: {
						id: d,
						name: b.name,
						mimeType: b.type
					}
				});
				return _.rp(_.Pw(_.pp((0, _.q1)()), [_.rp(_.mv(_.pp((0, _.p1)()), _.rp(_.kv(_.pp(GId()), d))))]));
			});
		}, nJd = function(a, b) {
			return _.x(function* () {
				var [c, d] = yield Promise.all([_.eo(b), _.pf(a.F.A.pipe(_.uf((e) => e.getId())))]);
				return (yield _.pf(_.qH(a.F, _.bo(c), b.name, b.type, [d], !0))).id;
			});
		}, y5 = class {
			constructor() {
				this.I = _.m(_.rF);
				this.X = _.m(_.lF);
				this.F = _.m(_.sH);
				this.R = _.m(_.iC);
				this.H = _.m(_.FH);
				this.Wd = _.Ck(this.I.Xm, { initialValue: !1 });
				this.A = _.M(!1);
				this.A.asReadonly();
				this.U = _.M([]);
				this.U.asReadonly();
			}
			gw(a, b) {
				var c = this;
				return _.x(function* () {
					var d = FGd(a, b);
					d.length < a.length && c.R.error(a.length === 1 ? `Filetype ${a[0].type} is not supported by the selected model.` : "Some filetypes are not supported by the selected model.");
					if (d.length !== 0) {
						var e = d.filter((f) => !f.type.startsWith("video/") || f.size < 419430400 ? !0 : (c.R.error("Video file size cannot exceed 400MB."), !1));
						e.length < d.length && (d = e);
						d.length !== 0 && (c.Wd() || (e = d.length, d = d.filter((f) => f.type.startsWith("image/")), d.length < e && (yield kJd(c))), yield mJd(c, d));
					}
				});
			}
		};
		y5.J = function(a) {
			return new (a || y5)();
		};
		y5.sa = _.Cd({
			token: y5,
			factory: y5.J
		});
		var oJd = function(a, b) {
			return _.x(function* () {
				b.type === "CAMERA" ? a.stream = yield navigator.mediaDevices.getUserMedia({
					audio: !1,
					video: Object.assign({}, b.deviceId && { deviceId: b.deviceId }, { facingMode: { ideal: b.facingMode || "environment" } })
				}) : b.type === "SCREEN" && (a.stream = yield navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "window" } }));
				if (!a.stream) throw Error("zi");
				a.ho.srcObject = a.stream;
				a.ho.play();
			});
		}, pJd = function(a) {
			a.timeout = setTimeout(() => {
				var b = a.F.getContext("2d");
				if (b) {
					var c = a.ho.videoWidth, d = a.ho.videoHeight;
					a.F.width = c;
					a.F.height = d;
					b.drawImage(a.ho, 0, 0, c, d);
					b = a.F.toDataURL("image/jpeg", .8);
					a.Dy.Via({
						mimeType: "image/jpeg",
						data: _.bo(b)
					});
				}
				pJd(a);
			}, 1e3);
		}, qJd = function(a) {
			return _.x(function* () {
				if (!a.stream) throw Error("zi");
				a.data = [];
				a.H = !1;
				return new Promise((b) => {
					a.resolve = b;
					b = MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : void 0;
					a.A = new MediaRecorder(a.stream, { mimeType: b });
					a.A.ondataavailable = (c) => {
						a.data.push(c.data);
					};
					a.A.onstop = () => {
						a.data = [];
						if (a.H) {
							a.H = !1;
							a.startTime = new Date().getTime();
							let c;
							(c = a.A) == null || c.start(200);
						}
					};
					a.startTime = new Date().getTime();
					a.A.start(200);
					pJd(a);
				});
			});
		}, rJd = function(a) {
			var b;
			(b = a.A) == null || b.stop();
			a.A = null;
			clearTimeout(a.timeout);
			a.timeout = 0;
			var c;
			(c = a.ho.srcObject) == null || c.getTracks().forEach((e) => void e.stop());
			a.ho.srcObject = null;
			var d;
			(d = a.resolve) == null || d.call(a);
			a.resolve = null;
		}, sJd = class {
			constructor(a, b) {
				this.Dy = a;
				this.ho = b;
				this.F = document.createElement("canvas");
				this.A = this.stream = null;
				this.data = [];
				this.timeout = this.startTime = 0;
				this.H = !1;
				this.resolve = null;
			}
		};
		var tJd = ["video"], uJd = function(a) {
			return _.x(function* () {
				a.A = new sJd(a, a.ho().nativeElement);
				yield oJd(a.A, a.source());
				a.ready.emit();
				return qJd(a.A);
			});
		}, z5 = class {
			constructor() {
				this.ho = _.Ni.required("video");
				this.source = _.Li.required();
				this.ready = _.Ki();
				this.frame = _.Ki();
				this.error = _.Ki();
				this.A = null;
				this.Nt = !1;
			}
			Rb() {
				uJd(this).catch((a) => void this.error.emit(a)).finally(() => {
					this.A = null;
				});
			}
			Ba() {
				this.Nt = !0;
				var a;
				(a = this.A) == null || rJd(a);
			}
			Via(a) {
				this.Nt || this.frame.emit(a);
			}
			vja() {
				var a;
				if ((a = this.A) == null) a = void 0;
				else if (a.A && a.data.length !== 0) {
					var b, c = (b = a.A.mimeType.replaceAll(" ", "")) != null ? b : "";
					b = [...a.data];
					a.H = !0;
					var d = new Date().getTime() - a.startTime;
					a.A.stop();
					a = c.startsWith("video/webm") ? IGd(new Blob(b, { type: c }), d) : Promise.resolve(new Blob(b, { type: c }));
				} else a = void 0;
				return a;
			}
		};
		z5.J = function(a) {
			return new (a || z5)();
		};
		z5.ka = _.u({
			type: z5,
			da: [["ms-bidi-video-recorder"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.ho, tJd, 5);
				a & 2 && _.ki();
			},
			inputs: { source: [1, "source"] },
			outputs: {
				ready: "ready",
				frame: "frame",
				error: "error"
			},
			ha: 2,
			ia: 0,
			la: [["video", ""], ["playsinline", ""]],
			template: function(a) {
				a & 1 && _.Fh(0, "video", 1, 0);
			},
			styles: ["video[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:auto;width:100%}\n/*# sourceMappingURL=bidi_video_recorder.css.map */"]
		});
		var vJd = Object.freeze({
			tcb: "nw-resize",
			vcb: "ne-resize",
			cVa: "sw-resize",
			dVa: "se-resize",
			e4a: "col-resize",
			ucb: "row-resize"
		}), wJd = function(a, b, c, d) {
			d ? a.Dc.Gr(b.nativeElement, c) : a.Dc.Cx(b.nativeElement, c);
		}, A5 = class {
			constructor(a, b, c, d, e, f) {
				this.U = a;
				this.Dc = b;
				this.xo = c;
				this.zone = d;
				this.Dv = {};
				this.qZa = !1;
				this.YI = {};
				this.M8a = vJd;
				this.oIa = 3;
				this.IAa = "fixed";
				this.bUa = !1;
				this.O8a = new _.pm();
				this.P8a = new _.pm();
				this.N8a = new _.pm();
				this.H = new _.Wg();
				this.F = new _.Wg();
				this.m$ = new _.Wg();
				this.A = new _.Wg();
				this.R = new _.Wg();
				a = e.Rr(f, null);
				xJd || (xJd = new yJd(a, d));
				this.I = xJd;
			}
			ib() {
				var a = _.Ff(this.I.H, this.F), b = _.Ff(this.I.A, this.m$).pipe(_.eh(({ event: g }) => {
					d && g.preventDefault();
				}), _.Xg()), c = _.Ff(this.I.F, this.H), d, e = () => {
					d && d.rq && (this.xo.nativeElement.parentElement.removeChild(d.rq), this.Dc.Oh(this.xo.nativeElement, "visibility", "inherit"));
				}, f = () => Object.assign({}, vJd, this.M8a);
				this.R.pipe(_.bh(this.Dv), _.uf(() => this.Dv && Object.keys(this.Dv).some((g) => !!this.Dv[g])), _.ch((g) => g ? b : _.Ef), _.Mg(50), _.dh(this.A)).subscribe(({ clientX: g, clientY: k }) => {
					g = PGd({
						clientX: g,
						clientY: k,
						xo: this.xo,
						dUa: this.Dv,
						EXa: this.oIa
					});
					k = f();
					d || this.Dc.Oh(this.xo.nativeElement, "cursor", QGd(g, k));
					wJd(this, this.xo, "resize-left-hover", g.left === !0);
					wJd(this, this.xo, "resize-right-hover", g.right === !0);
					wJd(this, this.xo, "resize-top-hover", g.top === !0);
					wJd(this, this.xo, "resize-bottom-hover", g.bottom === !0);
				});
				a.pipe(_.wf((g) => {
					function k(r) {
						return {
							clientX: r.clientX - g.clientX,
							clientY: r.clientY - g.clientY
						};
					}
					var p = () => {
						var r = {
							x: 1,
							y: 1
						};
						d && (this.YI.left && d.edges.left ? r.x = +this.YI.left : this.YI.right && d.edges.right && (r.x = +this.YI.right), this.YI.top && d.edges.top ? r.y = +this.YI.top : this.YI.bottom && d.edges.bottom && (r.y = +this.YI.bottom));
						return r;
					};
					return _.Ff(b.pipe(_.Qg()).pipe(_.uf((r) => [, r])), b.pipe(_.Vg())).pipe(_.uf(([r, v]) => [r ? k(r) : r, k(v)])).pipe(_.Gf(([r, v]) => {
						if (!r) return !0;
						var w = p(), D = Math.ceil(r.clientY / w.y), G = Math.ceil(v.clientY / w.y);
						return Math.ceil(r.clientX / w.x) !== Math.ceil(v.clientX / w.x) || D !== G;
					})).pipe(_.uf(([, r]) => {
						var v = p();
						return {
							clientX: Math.round(r.clientX / v.x) * v.x,
							clientY: Math.round(r.clientY / v.y) * v.y
						};
					})).pipe(_.dh(_.Ff(c, a)));
				})).pipe(_.Gf(() => !!d)).pipe(_.uf(({ clientX: g, clientY: k }) => LGd(d.GF, d.edges, g, k))).pipe(_.Gf((g) => this.bUa || !!(g.height && g.width && g.height > 0 && g.width > 0))).pipe(_.Gf((g) => this.Wqa ? this.Wqa({
					qF: g,
					edges: RGd({
						edges: d.edges,
						Dka: d.GF,
						Gma: g
					})
				}) : !0), _.dh(this.A)).subscribe((g) => {
					d && d.rq && (this.Dc.Oh(d.rq, "height", `${g.height}px`), this.Dc.Oh(d.rq, "width", `${g.width}px`), this.Dc.Oh(d.rq, "top", `${g.top}px`), this.Dc.Oh(d.rq, "left", `${g.left}px`));
					this.zone.run(() => {
						this.P8a.emit({
							edges: RGd({
								edges: d.edges,
								Dka: d.GF,
								Gma: g
							}),
							qF: g
						});
					});
					d.currentRect = g;
				});
				a.pipe(_.uf(({ clientX: g, clientY: k, edges: p }) => p || PGd({
					clientX: g,
					clientY: k,
					xo: this.xo,
					dUa: this.Dv,
					EXa: this.oIa
				}))).pipe(_.Gf((g) => Object.keys(g).length > 0), _.dh(this.A)).subscribe((g) => {
					d && e();
					var k = MGd(this.xo, this.IAa);
					d = {
						edges: g,
						GF: k,
						currentRect: k
					};
					var p = f();
					this.Dc.Oh(document.body, "cursor", QGd(d.edges, p));
					wJd(this, this.xo, "resize-active", !0);
					this.qZa && (d.rq = this.xo.nativeElement.cloneNode(!0), this.xo.nativeElement.parentElement.appendChild(d.rq), this.Dc.Oh(this.xo.nativeElement, "visibility", "hidden"), this.Dc.Oh(d.rq, "position", this.IAa), this.Dc.Oh(d.rq, "left", `${d.GF.left}px`), this.Dc.Oh(d.rq, "top", `${d.GF.top}px`), this.Dc.Oh(d.rq, "height", `${d.GF.height}px`), this.Dc.Oh(d.rq, "width", `${d.GF.width}px`), this.Dc.Oh(d.rq, "cursor", QGd(d.edges, p)), this.Dc.Gr(d.rq, "resize-ghost-element"), d.rq.scrollTop = d.GF.scrollTop, d.rq.scrollLeft = d.GF.scrollLeft);
					this.zone.run(() => {
						this.O8a.emit({
							edges: RGd({
								edges: g,
								Dka: k,
								Gma: k
							}),
							qF: LGd(k, {}, 0, 0)
						});
					});
				});
				c.pipe(_.dh(this.A)).subscribe(() => {
					d && (this.Dc.Cx(this.xo.nativeElement, "resize-active"), this.Dc.Oh(document.body, "cursor", ""), this.Dc.Oh(this.xo.nativeElement, "cursor", ""), this.zone.run(() => {
						this.N8a.emit({
							edges: RGd({
								edges: d.edges,
								Dka: d.GF,
								Gma: d.currentRect
							}),
							qF: d.currentRect
						});
					}), e(), d = null);
				});
			}
			Wb(a) {
				a.Dv && this.R.next(this.Dv);
			}
			Ba() {
				_.Uk(this.U) && this.Dc.Oh(document.body, "cursor", "");
				this.F.complete();
				this.H.complete();
				this.m$.complete();
				this.R.complete();
				this.A.next();
			}
		};
		A5.J = function(a) {
			return new (a || A5)(_.Dg(_.Au), _.Dg(_.cm), _.Dg(_.Jf), _.Dg(_.th), _.Dg(_.Ig), _.Dg(_.Xk));
		};
		A5.Oa = _.We({
			type: A5,
			da: [[
				"",
				"mwlResizable",
				""
			]],
			inputs: {
				Wqa: "validateResize",
				Dv: "resizeEdges",
				qZa: "enableGhostResize",
				YI: "resizeSnapGrid",
				M8a: "resizeCursors",
				oIa: "resizeCursorPrecision",
				IAa: "ghostElementPositioning",
				bUa: "allowNegativeResizes"
			},
			outputs: {
				O8a: "resizeStart",
				P8a: "resizing",
				N8a: "resizeEnd"
			},
			standalone: !1,
			features: [_.su]
		});
		var yJd = class {
			constructor(a, b) {
				this.H = new _.ef((c) => {
					var d, e;
					b.runOutsideAngular(() => {
						d = a.listen("document", "mousedown", (f) => {
							c.next({
								clientX: f.clientX,
								clientY: f.clientY,
								event: f
							});
						});
						e = a.listen("document", "touchstart", (f) => {
							c.next({
								clientX: f.touches[0].clientX,
								clientY: f.touches[0].clientY,
								event: f
							});
						});
					});
					return () => {
						d();
						e();
					};
				}).pipe(_.Xg());
				this.A = new _.ef((c) => {
					var d, e;
					b.runOutsideAngular(() => {
						d = a.listen("document", "mousemove", (f) => {
							c.next({
								clientX: f.clientX,
								clientY: f.clientY,
								event: f
							});
						});
						e = a.listen("document", "touchmove", (f) => {
							c.next({
								clientX: f.targetTouches[0].clientX,
								clientY: f.targetTouches[0].clientY,
								event: f
							});
						});
					});
					return () => {
						d();
						e();
					};
				}).pipe(_.Xg());
				this.F = new _.ef((c) => {
					var d, e, f;
					b.runOutsideAngular(() => {
						d = a.listen("document", "mouseup", (g) => {
							c.next({
								clientX: g.clientX,
								clientY: g.clientY,
								event: g
							});
						});
						e = a.listen("document", "touchend", (g) => {
							c.next({
								clientX: g.changedTouches[0].clientX,
								clientY: g.changedTouches[0].clientY,
								event: g
							});
						});
						f = a.listen("document", "touchcancel", (g) => {
							c.next({
								clientX: g.changedTouches[0].clientX,
								clientY: g.changedTouches[0].clientY,
								event: g
							});
						});
					});
					return () => {
						d();
						e();
						f();
					};
				}).pipe(_.Xg());
			}
		}, xJd;
		var zJd = function(a) {
			Object.keys(a.VQ).forEach((b) => {
				a.VQ[b]();
				delete a.VQ[b];
			});
		}, AJd = function(a, b, c, d) {
			a.A.m$.next({
				clientX: c,
				clientY: d,
				edges: a.Dv,
				event: b
			});
		}, BJd = function(a, b, c, d) {
			b.preventDefault();
			a.zone.runOutsideAngular(() => {
				a.VQ.OTb || (a.VQ.OTb = a.Dc.listen(a.element.nativeElement, "touchmove", (e) => {
					AJd(a, e, e.targetTouches[0].clientX, e.targetTouches[0].clientY);
				}));
				a.VQ.m$ || (a.VQ.m$ = a.Dc.listen(a.element.nativeElement, "mousemove", (e) => {
					AJd(a, e, e.clientX, e.clientY);
				}));
				a.A.F.next({
					clientX: c,
					clientY: d,
					edges: a.Dv
				});
			});
		}, CJd = function(a, b, c) {
			a.zone.runOutsideAngular(() => {
				zJd(a);
				a.A.H.next({
					clientX: b,
					clientY: c,
					edges: a.Dv
				});
			});
		}, DJd = class {
			constructor(a, b, c, d) {
				this.Dc = a;
				this.element = b;
				this.zone = c;
				this.A = d;
				this.Dv = {};
				this.VQ = {};
			}
			Ba() {
				zJd(this);
			}
		};
		DJd.J = function(a) {
			return new (a || DJd)(_.Dg(_.cm), _.Dg(_.Jf), _.Dg(_.th), _.Dg(A5));
		};
		DJd.Oa = _.We({
			type: DJd,
			da: [[
				"",
				"mwlResizeHandle",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("touchstart", function(c) {
					return BJd(b, c, c.touches[0].clientX, c.touches[0].clientY);
				})("mousedown", function(c) {
					return BJd(b, c, c.clientX, c.clientY);
				})("touchend", function(c) {
					return CJd(b, c.changedTouches[0].clientX, c.changedTouches[0].clientY);
				})("touchcancel", function(c) {
					return CJd(b, c.changedTouches[0].clientX, c.changedTouches[0].clientY);
				})("mouseup", function(c) {
					return CJd(b, c.clientX, c.clientY);
				});
			},
			inputs: { Dv: "resizeEdges" },
			standalone: !1
		});
		var B5 = class {};
		B5.J = function(a) {
			return new (a || B5)();
		};
		B5.qc = _.Ve({ type: B5 });
		B5.oc = _.Dd({});
		var EJd = ["form"], FJd = ["textarea"], TGd = () => ({
			top: !0,
			left: !0
		}), UGd = () => ({
			top: !0,
			right: !0
		}), VGd = () => ({
			bottom: !0,
			left: !0
		}), WGd = () => ({
			bottom: !0,
			right: !0
		}), GJd = {
			Ag: "Insert assets such as images, folders, files, or audio",
			LYa: "Insert assets such as images, folders, files, or audio",
			BK: `image/*,text/*,${_.R4.join(",")}`,
			k$: !0,
			Ama: !1,
			si: {
				CJ: {
					visible: !0,
					buttonLabel: "Upload File",
					Ag: "Send a file to the model"
				},
				oH: {
					visible: !0,
					buttonLabel: "My Drive",
					Ag: "Select or Upload a file on Google Drive to send to the model"
				},
				hQ: { visible: !1 },
				qQ: { visible: !1 },
				TT: { visible: !1 }
			}
		}, SGd = function(a) {
			var b;
			((b = a.Ada()) == null ? void 0 : b.type) === "CAMERA" && a.A.ma.set(!0);
			a.A.F.set(void 0);
			a.A.H.set(!1);
		}, HJd = function(a) {
			_.x(function* () {
				try {
					let b = (yield navigator.mediaDevices.enumerateDevices()).some((c) => c.kind === "audioinput");
					a.A.na.set(b);
				} catch (b) {}
			});
		}, IJd = function(a) {
			_.x(function* () {
				var b = a.Kh ? [] : [{
					type: "SCREEN",
					name: "Screen"
				}];
				try {
					(yield navigator.mediaDevices.enumerateDevices()).filter((c) => c.kind === "videoinput").forEach((c) => {
						var d = void 0;
						try {
							d = c.getCapabilities().facingMode;
						} catch (f) {}
						var e = c.label.replace(/\s*\([^)]*\)/g, "").trim() || "Camera";
						d && d.length > 0 ? d.forEach((f) => {
							b.push({
								type: "CAMERA",
								name: `${e} (${f})`,
								deviceId: c.deviceId,
								facingMode: f
							});
						}) : b.push({
							type: "CAMERA",
							name: e,
							deviceId: c.deviceId
						});
					});
				} catch (c) {}
				a.A.fa.set(b);
			});
		}, JJd = function(a) {
			return _.x(function* () {
				return _.VDd(a.dialog, a.DN());
			});
		}, KJd = function(a) {
			return _.x(function* () {
				if (yield JJd(a)) {
					var b = yield _.i5(a.H);
					if (!a.I || b) {
						_.Rn(a.Hsa, "RUN", "Stream Send Text");
						a.Z_.emit(_.rp(new s5().setText(a.R.promptText())));
						for (let d of a.Aa()) {
							let e;
							if ((e = d) == null ? 0 : e.yd) {
								b = a;
								var c = _.Tu(_.Su(new _.Uu(), d.yd.mimeType), d.yd.Pb);
								b.content.emit(_.rp(_.Pw(_.pp((0, _.q1)()), [_.rp(_.lv(_.pp((0, _.p1)()), c))])));
							} else {
								let f, g;
								if ((f = d) == null ? 0 : (g = f.kb) == null ? 0 : g.id) b = a, c = _.kv(new _.gj(), d.kb.id), b.content.emit(_.rp(_.Pw(_.pp((0, _.q1)()), [_.rp(_.mv(_.pp((0, _.p1)()), c))])));
							}
						}
						a.R.reset();
					}
				}
			});
		}, C5 = class {
			constructor() {
				this.Vm = _.m(_.e2);
				this.oa = _.m(_.Op);
				this.dialog = _.m(_.rC);
				this.ta = _.m(_.OC);
				this.Vb = _.m(_.AG);
				this.mpb = {
					tcb: "nwse-resize",
					vcb: "nesw-resize",
					cVa: "nesw-resize",
					dVa: "nwse-resize",
					e4a: "",
					ucb: ""
				};
				this.Wnb = [{
					Lb: "end",
					Mb: "bottom",
					Bb: "end",
					Gb: "bottom"
				}];
				this.ve = {
					cXb: 247642,
					dXb: 247645,
					XNa: 247641,
					eXb: 247644
				};
				this.Gdb = _.Ni(z5);
				this.form = _.Ni("form");
				this.Cwa = _.Ni(_.e1);
				this.textarea = _.Ni("textarea");
				this.Fdb = _.Ni(_.GB);
				this.yM = _.V(!1);
				this.disabled = _.V(!1);
				this.model = _.V();
				this.Sj = _.V(!1);
				this.REa = _.W(() => {
					var a = this.model();
					return a ? !_.Im(a, 57) : !1;
				});
				this.jS = _.V(!1);
				this.wf = _.W(() => Object.assign({}, GJd, { tq: this.model() }));
				this.Z_ = _.Ki();
				this.content = _.Ki();
				_.m(w5);
				this.Hsa = _.m(_.Ou);
				this.za = _.m(_.ZC);
				this.aa = _.m(_.hO);
				this.fa = _.m(y5);
				this.R = _.m(_.FH);
				this.A = _.m(_.j5);
				this.H = _.m(_.v1);
				this.I = this.oa.getFlag(_.mF);
				this.Kh = _.lp();
				this.uZa = !this.Kh;
				this.Bk = new _.uD("", {
					Oq: !0,
					CO: [_.dD]
				});
				this.vea = 10;
				this.wea = 1;
				this.AH = new _.qD({ textarea: this.Bk });
				this.KE = _.W(() => {
					var a = this.model();
					return _.Mm(a);
				});
				this.DN = _.W(() => {
					var a = this.ta.bb();
					return this.KE() && !a && !this.Vb.Hb();
				});
				this.MCa = _.Ck(this.AH.HF.pipe(_.uf((a) => a === "INVALID")));
				this.gFb = _.M(!1);
				this.na = _.M([]);
				this.lka = _.M(!0);
				this.ea = _.M(0);
				this.PW = _.M(!1);
				_.M(!1);
				this.FE = _.M(!1);
				this.audioLevel = _.M(36);
				this.nma = _.W(() => this.disabled() ? "Start stream to record" : this.FE() ? "Stop recording" : this.PW() ? "Failed to open the microphone. Check permissions in the browser and try again." : "Start recording");
				_.W(() => {
					if (this.disabled()) return "Start stream to record";
					var a = this.Sj();
					return this.IM() && a ? "Stop recording" : this.na().length === 1 ? "Start recording" : "Select video source";
				});
				this.Ada = _.M();
				this.ma = this.A.I;
				this.IM = _.W(() => this.Ada() !== void 0);
				this.Xaa = _.W(() => this.za.A.Il() ? "medium" : "large");
				this.F = null;
				this.Wqa = (a) => {
					var b, c, d;
					if (d = ((b = a.qF.width) != null ? b : 0) >= 50 && ((c = a.qF.height) != null ? c : 0) >= 50) a = a.qF, d = a.top >= 0 && a.left >= 0 && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) && a.right <= (window.innerWidth || document.documentElement.clientWidth);
					return d;
				};
				this.placeholder = _.W(() => this.disabled() ? "Clear the chat to start a new stream" : "Start typing a prompt");
				this.cl = _.W(() => ({
					jqa: "Enter a prompt to generate a video",
					placeholder: this.placeholder(),
					wq: !0,
					jga: !0,
					gKa: !0,
					zYa: !this.REa(),
					PSb: !0,
					Tba: !0,
					context: "bidi"
				}));
				this.xF = _.ODd();
				_.W(() => {
					var a = [], b, c;
					a.push({
						Hl: 4,
						value: (c = (b = this.model()) == null ? void 0 : b.getName()) != null ? c : ""
					});
					return a;
				});
				this.Aa = _.W(() => {
					var a, b = (a = this.R.A()) != null ? a : {};
					return Object.values(b);
				});
				this.eDa = _.W(() => this.disabled() || this.Sj());
				this.wqa = _.W(() => this.disabled() || this.Sj());
				_.Fk([this.disabled], () => {
					if (this.disabled()) {
						this.Bk.disable();
						var a;
						(a = this.F) != null && RId(a);
						this.A.F.set(void 0);
					} else this.Bk.enable();
					a = this.A;
					var b = this.disabled();
					a.A.set(b);
				});
				_.Fk([this.yM], () => {
					if (this.yM()) this.lka.set(!0);
					else {
						let a, b;
						(a = this.Fdb()) == null || (b = a.Nb) == null || b.Cj();
						this.lka.set(!1);
					}
				});
				_.Fk([this.yM, this.textarea], () => {
					if (!this.Kh && this.yM()) {
						let a;
						(a = this.textarea()) == null || a.nativeElement.focus();
					}
				});
				_.Fk([this.R.promptText], () => {
					this.aa.setPrompt(this.R.promptText());
				});
				_.Fk([this.Sj], () => {
					var a = this.A, b = this.Sj();
					a.oa.set(b);
				});
				_.Fk([this.ma], () => {
					this.Ada.set(this.ma());
				});
				this.Bk.zh.subscribe((a) => {
					this.aa.setPrompt(a);
				});
				HJd(this);
				IJd(this);
			}
			Ba() {
				var a;
				(a = this.F) != null && RId(a);
			}
			FF() {
				var a = this;
				return _.x(function* () {
					if (yield JJd(a)) {
						var b = yield _.i5(a.H);
						a.I && !b ? a.Qx() : (a.U = void 0, a.F = new TId(a), a.F.Qoa(a.ea()), SId(a.F).catch(() => {
							a.A.aa.set(!0);
						}).finally(() => {
							a.A.Qx();
							a.F = null;
						}), a.A.FF());
					} else a.Qx();
				});
			}
			Qx() {
				var a;
				this.U = (a = this.F) == null ? void 0 : a.vja();
				var b;
				(b = this.F) != null && RId(b);
				this.A.Qx();
			}
			jca(a) {
				var b = this;
				_.x(function* () {
					var c = yield _.i5(b.H);
					if (!b.I || c) b.X = void 0, b.A.jca(), b.A.F.set(a);
				});
			}
			clear() {
				this.Qx();
				this.U = void 0;
				this.A.H.set(!1);
				this.A.F.set(void 0);
				this.X = void 0;
				this.Bk.setValue("");
			}
			Qoa(a) {
				this.ea.set(a);
				var b;
				(b = this.F) == null || b.Qoa(a);
			}
			HUa(a) {
				this.A.ea.set(a);
			}
			Via(a) {
				var b = this.Z_, c = b.emit;
				var d = new s5();
				a = _.rp(_.Tu(_.Su(new _.Uu(), a.mimeType), _.ab(a.data)));
				d = _.ln(d, _.Uu, 4, a);
				c.call(b, _.oc(d));
			}
			dcb() {
				this.F ? (this.Qx(), this.Z_.emit(_.rp(XHd()))) : (_.Rn(this.Hsa, "RUN", "Stream Start Audio Recording"), this.FF());
			}
			Wt(a) {
				var b = this;
				return _.x(function* () {
					if (b.REa()) {
						var c = yield _.i5(b.H);
						b.I && !c || b.fa.gw(a, b.model()).then(() => {
							KJd(b);
						});
					}
				});
			}
			onKeyDown(a) {
				switch (a.key) {
					case "Enter": if (_.d2(this.Vm, a)) {
						a.preventDefault();
						a.stopPropagation();
						var b;
						(b = this.form()) == null || b.wj(new Event("submit"));
					}
				}
			}
			oT(a) {
				var b = this;
				return _.x(function* () {
					var c = yield _.i5(b.H);
					b.I && !c || b.fa.gw(a, b.model()).then(() => {
						KJd(b);
					});
				});
			}
			OAa(a, b) {
				var { width: c, height: d } = b.getBoundingClientRect(), e, f;
				if (((e = a.qF.width) != null ? e : 0) / ((f = a.qF.height) != null ? f : 0) > c / d) b.style.width = `${a.qF.width}px`;
				else {
					let N;
					e = ((N = a.qF.height) != null ? N : 0) / d;
					b.style.width = `${c * e}px`;
				}
				var { width: g, height: k } = b.getBoundingClientRect(), { bBb: p, aBb: r } = {
					bBb: g - c,
					aBb: k - d
				};
				if (!a.edges.top || !a.edges.left) {
					var v, w, { x: D, y: G } = (w = (v = this.Cwa()) == null ? void 0 : v.kja()) != null ? w : {
						x: 0,
						y: 0
					};
					b = a.edges.right ? p : 0;
					a = a.edges.bottom ? r : 0;
					var L;
					(L = this.Cwa()) == null || L.E0({
						x: D + b,
						y: G + a
					});
				}
			}
			KFa(a) {
				this.content.emit(a);
			}
		};
		C5.J = function(a) {
			return new (a || C5)();
		};
		C5.ka = _.u({
			type: C5,
			da: [["ms-bidi-input"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.Gdb, z5, 5)(b.form, EJd, 5)(b.Cwa, _.e1, 5)(b.textarea, FJd, 5)(b.Fdb, _.GB, 5);
				a & 2 && _.ki(5);
			},
			inputs: {
				yM: [1, "isInZeroState"],
				disabled: [1, "disabled"],
				model: [1, "model"],
				Sj: [1, "streamConnected"],
				jS: [1, "isExternallyDragging"]
			},
			outputs: {
				Z_: "realtimeUserInput",
				content: "content"
			},
			features: [_.yi([y5])],
			ha: 4,
			ia: 11,
			la: [
				["videoOverlayOrigin", "cdkOverlayOrigin"],
				["videoContainer", ""],
				[
					"paidApiKeyButtonDisabledTooltip",
					"\n      To change API keys, clear the chat and start a new stream first\n    ",
					"toolsDisabledTooltip",
					"\n      To change tools, clear the chat and start a new stream first\n    ",
					"context",
					"bidi",
					3,
					"runClick",
					"startAudioRecording",
					"stopAudioRecording",
					"promptBoxConfig",
					"currentModel",
					"addMediaButtonConfig",
					"allowAddMediaButtonMenuToOpen",
					"addMediaButtonDisabled",
					"paidApiKeyButtonDisabled",
					"toolsDisabled",
					"isExternallyDragging"
				],
				[
					"cdkOverlayOrigin",
					"",
					1,
					"video-overlay-origin"
				],
				[
					"cdkConnectedOverlay",
					"",
					"cdkConnectedOverlayPanelClass",
					"bidi-video-overlay-panel",
					3,
					"cdkConnectedOverlayOrigin",
					"cdkConnectedOverlayPositions",
					"cdkConnectedOverlayOpen"
				],
				[
					"cdkDrag",
					"",
					"cdkDragBoundary",
					"body"
				],
				[
					"mwlResizable",
					"",
					1,
					"video-container",
					"mat-elevation-z4",
					3,
					"video-container--hidden",
					"validateResize",
					"resizeCursors"
				],
				[
					1,
					"video-container",
					"mat-elevation-z4",
					3,
					"video-container--hidden"
				],
				[
					"mwlResizable",
					"",
					1,
					"video-container",
					"mat-elevation-z4",
					3,
					"resizing",
					"validateResize",
					"resizeCursors"
				],
				[
					"cdkDragHandle",
					"",
					3,
					"ready",
					"frame",
					"error",
					"source"
				],
				[
					"mwlResizeHandle",
					"",
					1,
					"resize-handle",
					"tl",
					3,
					"resizeEdges"
				],
				[
					"mwlResizeHandle",
					"",
					1,
					"resize-handle",
					"tr",
					3,
					"resizeEdges"
				],
				[
					"mwlResizeHandle",
					"",
					1,
					"resize-handle",
					"bl",
					3,
					"resizeEdges"
				],
				[
					"mwlResizeHandle",
					"",
					1,
					"resize-handle",
					"br",
					3,
					"resizeEdges"
				],
				[
					1,
					"video-container",
					"mat-elevation-z4"
				],
				[
					"cdkDragHandle",
					"",
					3,
					"frame",
					"error",
					"source"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "ms-prompt-box", 2), _.J("runClick", function() {
					return KJd(b);
				})("startAudioRecording", function() {
					_.Rn(b.Hsa, "RUN", "Stream Start Audio Recording");
					b.FF();
				})("stopAudioRecording", function() {
					b.Qx();
					b.Z_.emit(_.rp(XHd()));
				}), _.H(), _.I(1, "div", 3, 0), _.z(3, ZGd, 3, 1, "ng-template", 4));
				a & 2 && (a = _.O(2), _.E("promptBoxConfig", b.cl())("currentModel", b.model())("addMediaButtonConfig", b.wf())("allowAddMediaButtonMenuToOpen", !0)("addMediaButtonDisabled", b.disabled() || !b.REa())("paidApiKeyButtonDisabled", b.eDa())("toolsDisabled", b.wqa())("isExternallyDragging", b.jS()), _.y(3), _.E("cdkConnectedOverlayOrigin", a)("cdkConnectedOverlayPositions", b.Wnb)("cdkConnectedOverlayOpen", b.IM()));
			},
			dependencies: [
				z5,
				_.j1,
				_.e1,
				_.d1,
				_.ZB,
				_.wI,
				_.IC,
				_.HB,
				_.GB,
				_.FB,
				_.l5,
				_.MD,
				B5,
				A5,
				DJd,
				_.eF,
				_.Cz
			],
			styles: ["[_nghost-%COMP%]{--color-recorder-active:var(--color-bidi-icons);position:relative}.container[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px}.container[_ngcontent-%COMP%]:not(:has(ms-paid-api-key-button)){padding-left:20px}@media screen and (max-width:768px){.container[_ngcontent-%COMP%]:not(:has(ms-paid-api-key-button)){padding-left:16px}}.container[_ngcontent-%COMP%]:not(:has(ms-paid-api-key-button))   .mic-container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:not(:has(ms-paid-api-key-button)) > button[_ngcontent-%COMP%]:first-child{margin-left:-16px}.container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:var(--color-recorder-active);color:var(--color-recorder-active-icon)}.container[_ngcontent-%COMP%]   button.mat-mdc-icon-button.mat-mdc-button-base[_ngcontent-%COMP%]{--mat-icon-button-state-layer-size:36px;padding:6px}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px;height:20px;margin-top:2px}.mic-container[_ngcontent-%COMP%]{position:relative}.audio-recording-indicator[_ngcontent-%COMP%]{background:var(--color-recorder-active);border-radius:50%;left:50%;pointer-events:none;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:width .1s ease-in-out,height .1s ease-in-out;transition:width .1s ease-in-out,height .1s ease-in-out}.input-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;gap:7px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:36px;min-width:0}textarea[_ngcontent-%COMP%]{border:none;-moz-box-sizing:content-box;box-sizing:content-box;outline:none;min-width:0;padding:0;resize:none;white-space:pre-wrap;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.button-wrapper[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:36px}.video-overlay-origin[_ngcontent-%COMP%]{height:0;position:absolute;right:8px;top:-8px;width:0}@media screen and (max-width:768px){.video-overlay-origin[_ngcontent-%COMP%]{--stream-status-calculated-height:56px;top:calc((12px + var(--stream-status-calculated-height))*-1)}}.video-container[_ngcontent-%COMP%]{background:var(--color-surface);border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;pointer-events:auto;width:min(340px,33vw)}.video-container[_ngcontent-%COMP%]:not(.resize-active)   .cdk-drag-handle[_ngcontent-%COMP%]{cursor:move}.video-container--hidden[_ngcontent-%COMP%]{display:none}form[_ngcontent-%COMP%]{display:contents}.resize-handle[_ngcontent-%COMP%]{--handle-size:20px;height:var(--handle-size);position:absolute;width:var(--handle-size)}.resize-handle.tl[_ngcontent-%COMP%]{cursor:nwse-resize;left:0;top:0}.resize-handle.tr[_ngcontent-%COMP%]{cursor:nesw-resize;right:0;top:0}.resize-handle.bl[_ngcontent-%COMP%]{cursor:nesw-resize;bottom:0;left:0}.resize-handle.br[_ngcontent-%COMP%]{cursor:nwse-resize;bottom:0;right:0}ms-bidi-video-recorder[_ngcontent-%COMP%]{width:100%}"]
		});
		var bHd = (a, b) => b.id, LJd = {
			[0]: "https://www.gstatic.com/aistudio/bidi/sounds/stream-start.ogg",
			[1]: "https://www.gstatic.com/aistudio/bidi/sounds/stream-end.ogg"
		}, MJd = function(a) {
			return _.x(function* () {
				return _.VDd(a.dialog, a.DN());
			});
		}, OJd = function(a, b) {
			return _.x(function* () {
				if (yield NJd(a, [{
					type: 0,
					text: b.getText()
				}])) {
					var c;
					if ((c = a.controller.stream) != null) {
						var d = new hId();
						d = _.Ap(d, 3, t5, b);
						d = _.oc(d);
						qId(c, d);
					}
				}
			});
		}, QJd = function(a, b) {
			return _.x(function* () {
				if (yield PJd(a)) {
					var c;
					if ((c = a.controller.stream) != null) {
						var d = new hId();
						d = _.Ap(d, 3, t5, b);
						d = _.oc(d);
						qId(c, d);
					}
					c = a.NG();
					d = c.Qoa;
					let f, g;
					var e = (g = (f = a.controller.stream) == null ? void 0 : f.A.U) != null ? g : 0;
					d.call(c, e);
				}
			});
		}, RJd = function(a, b) {
			return _.x(function* () {
				b.getText() ? yield OJd(a, b) : yield QJd(a, b);
			});
		}, NJd = function(a, b) {
			return _.x(function* () {
				if (!(yield MJd(a))) return !1;
				b.forEach((c) => {
					v5(a.controller, "user", c);
				});
				return PJd(a);
			});
		}, PJd = function(a) {
			return _.x(function* () {
				if (!(yield MJd(a))) return !1;
				a.aa() && (a.F = SJd(a));
				return a.F;
			});
		}, SJd = function(a) {
			return _.x(function* () {
				var b = a.La.model();
				return xId(a.controller, {
					systemInstructions: a.model.systemInstructions(),
					functionDeclarations: a.functionDeclarations(),
					model: b,
					modality: a.La.outputModality(),
					voiceName: a.La.voiceName(),
					RC: a.La.RC(),
					enableSearchAsATool: a.La.enableSearchAsATool(),
					enableBrowseAsATool: a.La.enableBrowseAsATool(),
					enableCodeExecution: a.La.enableCodeExecution(),
					Ef: a.La.Ef(),
					rH: a.La.rH(),
					LD: a.La.LD(),
					safetySettings: a.La.safetySettings(),
					mediaResolution: a.La.mediaResolution(),
					TQ: a.La.TQ(),
					contextWindowCompression: {
						triggerTokens: a.La.oQ(),
						targetTokens: a.La.jL()
					},
					Sz: a.La.Sz(),
					thinkingLevel: a.La.thinkingLevel(),
					MD: a.La.MD(),
					dY: a.La.dY()
				}, (c) => {
					if (a.La.MD()) var d = !1;
					else {
						d = QFd(_.fj(c, mId, 3, u5)).length > 0;
						var e, f = !((e = _.fj(c, mId, 3, u5)) == null || !_.Z(e, _.Zw, 4));
						d = d || f ? !a.controller.X() : !1;
					}
					if (d) {
						e = a.NG();
						d = e.X ? Promise.resolve(e.X) : void 0;
						e.X = void 0;
						var g, k;
						(e = (k = (g = e.Gdb()) == null ? void 0 : g.vja()) != null ? k : d) && v5(a.controller, "user", {
							type: 4,
							blob: e
						});
						k = a.NG();
						g = k.U;
						k.U = void 0;
						let p, r;
						(k = (r = (p = k.F) == null ? void 0 : p.vja()) != null ? r : g) && v5(a.controller, "user", {
							type: 1,
							kt: k,
							jn: []
						});
					}
					if (_.Dr(c, mId, 3, u5)) TJd(a, _.fj(c, mId, 3, u5));
					else if (_.Dr(c, kId, 4, u5)) UJd(a, _.fj(c, kId, 4, u5));
					else if (_.Dr(c, jId, 5, u5)) {
						c = _.fj(c, jId, 5, u5);
						for (let p of _.uj(c, 1, _.oj())) BId(a.controller, p);
					}
				});
			});
		}, TJd = function(a, b) {
			QFd(b).forEach((d) => {
				(d = PFd(d, !0)) && v5(a.controller, "model", d);
			});
			if (_.sn(b, _.Zw, 4)) {
				var c = _.pp(_.Z(b, _.Zw, 4));
				c = _.MHa(c);
				a.hn = _.CHa(a.hn, c);
			}
			if (_.Pm(b, 2)) {
				AId(a.controller, a.hn);
				let d, e, f, g;
				if (((d = a.hn) == null ? 0 : (e = _.ko(d)) == null ? 0 : e.length) || ((f = a.hn) == null ? 0 : (g = _.Tp(f)) == null ? 0 : g.length)) {
					let k, p, r, v;
					v5(a.controller, "model", {
						type: 5,
						Pl: [...(r = (k = a.hn) == null ? void 0 : _.ko(k)) != null ? r : []],
						sources: (v = (p = a.hn) == null ? void 0 : _.Tp(p)) != null ? v : []
					});
					a.hn = void 0;
				}
				wId(a.controller);
			}
			_.Pm(b, 3) && (a.hn = void 0, a.controller.interrupt());
			_.sn(b, iId, 7) && VJd(a, _.Z(b, iId, 7));
			_.sn(b, iId, 6) && WJd(a, _.Z(b, iId, 6));
			a.M$a() && XJd(a, b);
		}, UJd = function(a, b) {
			for (let c of _.mj(b, _.dv, 2, _.oj())) {
				let d = c.getName(), e;
				b = _.xo((e = _.bv(c)) != null ? e : FId());
				let f = a.functionDeclarations().find((p) => p.getName() === d), g = void 0;
				a.La.ye() && a.La.Ef() && f && (g = zId(a.controller, {
					name: d,
					args: b,
					functionDeclaration: f
				}));
				let k;
				v5(a.controller, "model", {
					type: 3,
					id: c.getId(),
					name: c.getName(),
					args: _.xo((k = _.bv(c)) != null ? k : FId()),
					behavior: f == null ? void 0 : _.Lm(f, 5),
					vga: g,
					Rpa: (p) => {
						var r = a.controller, v = new WHd();
						p = _.Zm(v, 2, [p]);
						p = _.oc(p);
						(r = r.stream) != null && (v = new hId(), p = _.Ap(v, 4, t5, p), p = _.oc(p), qId(r, p));
					}
				});
			}
		}, VJd = function(a, b) {
			a = a.controller;
			b = {
				text: b.getText(),
				durationMs: Number(_.$s(b, 3))
			};
			if (a.F) {
				var c = a.turns, d = c[a.F.turn], e = [...d.parts], f = e[a.F.part];
				f && f.type === 2 ? (e[a.F.part] = Object.assign({}, f, { jn: [
					...a.H,
					...f.jn,
					b
				] }), a.H = [], c[a.F.turn] = Object.assign({}, d, { parts: e }), a.A.turns.set(c)) : a.H.push(b);
			} else a.H.push(b);
		}, WJd = function(a, b) {
			a = a.controller;
			b = {
				text: b.getText(),
				durationMs: Number(_.$s(b, 3))
			};
			var c = void 0, d = a.turns;
			for (let e = d.length - 1; e >= 0 && d[e].role !== "model"; --e) {
				let f = d[e].parts;
				for (let g = f.length - 1; g >= 0; --g) if (f[g].type === 1) {
					c = f[g];
					break;
				}
			}
			c ? c.jn = [...c.jn, b] : a.I.push(b);
		}, XJd = function(a, b) {
			var c = _.Pm(b, 2), d = _.Pm(b, 5), e = _.Pm(b, 8);
			b = b.Fe();
			switch (a.A()) {
				case "Listening":
				case "Listening (Waiting for input)":
				case "Listening (Ignoring noise)":
					b ? a.A.set("Responding (Generating)") : a.A() === "Listening" && (e ? a.A.set("Listening (Waiting for input)") : d && a.A.set("Listening (Ignoring noise)"));
					break;
				case "Responding (Generating)":
					d && a.A.set("Responding");
					break;
				case "Responding": c && a.A.set("Listening");
			}
		}, YJd = class {
			constructor() {
				this.wca = lHd();
				this.T8 = _.M(!1);
				this.S = _.Dk;
				this.NG = _.Ni.required(C5);
				this.functionDeclarations = _.W(() => this.La.ye() && this.La.functionDeclarations() || []);
				this.controller = _.m(_.hO);
				this.H = _.m(_.Op);
				this.U = _.m(_.k5);
				this.history = _.m(x5);
				this.I = _.m(_.v1);
				this.X = _.m(_.OC);
				this.dialog = _.m(_.rC);
				this.Vb = _.m(_.AG);
				this.R = this.H.getFlag(_.mF);
				this.lS = this.H.getFlag(_.bob);
				this.model = this.controller.model;
				this.La = this.U.model;
				this.Fq = _.M(!1);
				this.mk = _.M(!1);
				this.fxb = _.W(() => this.model.EC() || this.model.Rx());
				this.KE = _.W(() => {
					var a = this.La.model();
					return _.Mm(a);
				});
				this.DN = _.W(() => {
					var a = this.X.bb();
					return this.KE() && !a && !this.Vb.Hb();
				});
				_.W(() => this.model.turns().length > 0);
				this.So = _.W(() => this.model.turns().length === 0 && !this.model.EC() && !this.model.Rx());
				this.pBb = _.W(() => this.model.Rx());
				this.Wg = _.W(() => {
					if (this.model.EC()) return this.model.Sj() ? "Stream is live" : "Connecting to server...";
					if (this.model.Rx()) {
						let a = this.model.nca();
						return a ? `${a}` : "Start new stream";
					}
					return "";
				});
				this.M$a = _.W(() => this.La.LD() && this.model.EC() && this.model.Sj());
				this.F = null;
				this.aa = _.W(() => !this.model.EC() && !this.model.Rx() && !!this.La.model());
				this.hn = void 0;
				this.A = _.M("Listening");
				this.RMb = _.W(() => {
					switch (this.A()) {
						case "Listening": return "Listening";
						case "Listening (Waiting for input)": return "Listening (Waiting for input)";
						case "Listening (Ignoring noise)": return "Listening (Ignoring noise)";
						case "Responding (Generating)": return "Responding (Generating)";
						case "Responding": return "Responding";
						default: return "";
					}
				});
				this.eQb = _.W(() => this.lS && this.model.turns().length > 0 && !this.controller.X());
				this.HLa = {
					RF: 1,
					o1: !1,
					Lv: !1,
					q1: !0,
					VU: !1,
					zca: !0,
					WU: !1,
					XU: !1,
					YU: !1
				};
				this.ILa = _.W(() => {
					var a = this.La.model();
					return { GM: !!a && _.Am(a) };
				});
				this.PCa = _.W(() => {
					var a = this.model.turns();
					if (a.length === 0) return !1;
					var b;
					return ((b = a[a.length - 1]) == null ? void 0 : b.role) === "model";
				});
				_.Fk([this.model.Sj], () => {
					this.model.Sj() && new Audio(LJd[0]).play();
				});
				_.Fk([this.model.Rx], () => {
					this.model.Rx() && (new Audio(LJd[1]).play(), this.F = null);
				});
			}
			Ba() {
				this.history.clear("bidi-function-call");
			}
			KFa(a) {
				var b = this;
				return _.x(function* () {
					var c = a.Gg().map((d) => PFd(d, !1)).filter((d) => d !== void 0);
					(yield NJd(b, c)) && yId(b.controller, [a]);
				});
			}
			onResume() {
				this.F = SJd(this);
			}
			onDisconnect() {
				this.controller.disconnect();
			}
			Xt(a) {
				var b = this;
				return _.x(function* () {
					if (yield MJd(b)) {
						var c = yield _.i5(b.I);
						if (!b.R || c) switch (a) {
							case "mic":
								(yield PJd(b)) && b.NG().FF();
								break;
							case "videocam":
								(yield PJd(b)) && b.NG().jca({
									type: "CAMERA",
									name: ""
								});
								break;
							case "screen":
								(yield PJd(b)) && b.NG().jca({
									type: "SCREEN",
									name: ""
								});
								break;
							case "text": b.KFa(_.rp(_.Pw(new _.Rw(), [_.rp(new _.uv().setText("Hello"))])));
						}
					}
				});
			}
			NJa(a, b) {
				return b === 0 ? !0 : (b = this.model.turns()[b - 1]) ? a.role !== b.role : !0;
			}
		};
		YJd.J = function(a) {
			return new (a || YJd)();
		};
		YJd.ka = _.u({
			type: YJd,
			da: [["ms-bidi-chat"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.NG, C5, 5);
				a & 2 && _.ki();
			},
			features: [_.yi([_.VL])],
			ha: 12,
			ia: 17,
			la: [
				[1, "container"],
				[
					"msGlobalFileDragDrop",
					"",
					3,
					"draggingChange",
					"msDrop"
				],
				[
					3,
					"featureConfig",
					"stateConfig"
				],
				[1, "title-cards-and-footer"],
				[
					1,
					"title-container",
					"no-select"
				],
				[1, "chips-container"],
				[1, "footer"],
				[
					3,
					"isChatScrollable",
					"isScrolledBottom"
				],
				[1, "stream-status"],
				[
					3,
					"realtimeUserInput",
					"content",
					"isInZeroState",
					"disabled",
					"model",
					"streamConnected",
					"isExternallyDragging"
				],
				[1, "hero-text"],
				[
					"ms-button",
					"",
					"size",
					"large",
					3,
					"iconName",
					"ariaLabel",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"size",
					"large",
					3,
					"click",
					"iconName",
					"ariaLabel",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"isScrollable",
					"isScrolledBottom"
				],
				[1, "chat-turns-wrapper"],
				[
					3,
					"turn",
					"last",
					"modelName",
					"showAuthorLabel",
					"isFirstTurn"
				],
				[1, "hallucinations-disclaimer-container"],
				[
					1,
					"stream-status-divider",
					"left"
				],
				[1, "stream-status-content"],
				[1, "stream-status-text"],
				[1, "proactive-audio-streaming-state"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Disconnect",
					"matTooltip",
					"Disconnect",
					"matTooltipPosition",
					"above",
					"matTooltipClass",
					"bidi-actions-tooltip",
					1,
					"disconnect-button",
					"secondary",
					3,
					"iconName"
				],
				[
					1,
					"stream-status-divider",
					"right"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Disconnect",
					"matTooltip",
					"Disconnect",
					"matTooltipPosition",
					"above",
					"matTooltipClass",
					"bidi-actions-tooltip",
					1,
					"disconnect-button",
					"secondary",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Resume stream",
					"matTooltipPosition",
					"above",
					"matTooltipClass",
					"bidi-actions-tooltip",
					"aria-label",
					"Resume stream",
					1,
					"resume-button",
					"primary",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Clear the chat to start a new stream",
					"matTooltipPosition",
					"above",
					"matTooltipClass",
					"bidi-actions-tooltip",
					"aria-label",
					"Restart stream",
					1,
					"clear-button",
					3,
					"click",
					"iconName"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"matTooltip",
					"Resume stream",
					"matTooltipPosition",
					"above",
					"matTooltipClass",
					"bidi-actions-tooltip",
					"aria-label",
					"Resume stream",
					1,
					"resume-button",
					"primary",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.J("draggingChange", function(c) {
					var d = b.La.model();
					d && !_.Im(d, 57) && b.T8.set(c);
				})("msDrop", function(c) {
					return b.NG().Wt(c);
				}), _.H(), _.I(2, "ms-playground-toolbar", 2)(3, "ms-paid-api-key-callout"), _.F(4, "div", 3), _.B(5, $Gd, 3, 0, "div", 4), _.B(6, cHd, 5, 2, "div", 5), _.B(7, fHd, 5, 1, "ms-autoscroll-container"), _.H(), _.F(8, "div", 6), _.I(9, "ms-chat-bottom-overlay", 7), _.B(10, kHd, 12, 4, "div", 8), _.F(11, "ms-bidi-input", 9), _.J("realtimeUserInput", function(c) {
					return RJd(b, c);
				})("content", function(c) {
					return b.KFa(c);
				}), _.H()()());
				a & 2 && (_.y(2), _.E("featureConfig", b.HLa)("stateConfig", b.ILa()), _.y(2), _.P("zero-state", b.So()), _.y(), _.C(b.So() ? 5 : -1), _.y(), _.C(b.So() ? 6 : -1), _.y(), _.C(b.So() ? -1 : 7), _.y(), _.P("zero-state", b.So()), _.y(), _.E("isChatScrollable", b.Fq())("isScrolledBottom", b.mk()), _.y(), _.C(b.Wg() ? 10 : -1), _.y(), _.E("isInZeroState", b.So())("disabled", b.pBb())("model", b.La.model())("streamConnected", b.model.Sj())("isExternallyDragging", b.T8()));
			},
			dependencies: [
				_.c2,
				C5,
				jJd,
				_.Yy,
				_.n5,
				_.U4,
				_.m5,
				_.RM,
				_.OD,
				_.ND,
				_.IC,
				_.HC,
				_.o5,
				_.z4,
				_.Cz,
				_.Bz,
				_.oz
			],
			styles: [".container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:0;gap:0;height:100%;background-color:var(--color-v3-surface)}@media screen and (max-width:768px){.container[_ngcontent-%COMP%]{margin:0}}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin:0}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:calc(50dvh - 140px)}}.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:120px;padding-top:calc(50vh - 200px);margin-bottom:0;margin-top:67px}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{padding-top:0}}.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]{color:var(--color-logo-lockup);margin-bottom:0;font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:36px;font-weight:300;line-height:1.2em}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]{font-size:32px}}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0}}@media screen and (max-width:768px){.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-top:84px}}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-top:34px}}.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--color-theme-extreme-inverse);font-size:72px;font-weight:400;line-height:80px;margin-bottom:32px;max-width:680px}.container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--color-on-surface-variant);font-size:20px;font-weight:400;line-height:28px;max-width:680px;text-align:center}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]{background:var(--color-v3-surface-container-high);border-radius:16px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;height:-webkit-max-content;height:-moz-max-content;height:max-content;min-height:100%;padding:24px;width:100%;position:relative;-moz-box-sizing:border-box;box-sizing:border-box}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-svg[_ngcontent-%COMP%]{color:var(--color-v3-button-container);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:32px;width:100%}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-svg[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:inherit}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-image[_ngcontent-%COMP%]{background:var(--color-v3-button-container);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-image[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]{height:32px;width:32px}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px;min-width:0}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%]{display:none}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]{padding:12px}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-svg[_ngcontent-%COMP%]{font-size:20px}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .icon-container-image[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]{height:20px;width:20px}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{gap:2px}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%]{display:block}}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]{padding:0}.container[_ngcontent-%COMP%]   .suggestion-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%]{padding:0}.container[_ngcontent-%COMP%]   .chips-container[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;-webkit-order:2;-moz-box-ordinal-group:3;-ms-flex-order:2;order:2;width:100%;max-width:1000px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:8px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .chips-container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px;max-width:200px}}.container[_ngcontent-%COMP%]   .title-cards-and-footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-inline:20px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden auto}.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]{-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start}.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{margin-top:0}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{-webkit-box-flex:0;-webkit-flex:0;-moz-box-flex:0;-ms-flex:0;flex:0}.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]   .chips-container[_ngcontent-%COMP%]{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:auto}.container[_ngcontent-%COMP%]   .title-cards-and-footer.zero-state[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .title-cards-and-footer[_ngcontent-%COMP%]{padding:0 20px 8px 20px}}.chat-turns-wrapper[_ngcontent-%COMP%]{margin-bottom:72px}.footer[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;position:relative;width:100%}.footer[_ngcontent-%COMP%]:not(:has(ms-prompt-box)){padding-inline:20px;padding-bottom:8px}.footer.zero-state[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-webkit-order:1;-moz-box-ordinal-group:2;-ms-flex-order:1;order:1;max-width:1000px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}@media screen and (max-width:600px){.footer.zero-state[_ngcontent-%COMP%]{-webkit-box-ordinal-group:4;-webkit-order:3;-moz-box-ordinal-group:4;-ms-flex-order:3;order:3}}ms-autoscroll-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;margin:0 auto;padding:20px 20px 0 20px;width:100%;max-width:1000px}@media screen and (max-width:768px){ms-autoscroll-container[_ngcontent-%COMP%]{padding:20px 8px 0 8px}}ms-bidi-turn[_ngcontent-%COMP%]{display:block}ms-bidi-turn[_ngcontent-%COMP%]:not(:first-child){margin-top:24px}ms-bidi-input[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}ms-playground-toolbar[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.stream-status[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:56px;padding:8px 16px;position:absolute;left:50%;text-align:center;top:0;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;width:100%;max-width:1000px;margin:0 auto;z-index:4}.stream-status[_ngcontent-%COMP%]   .stream-status-divider[_ngcontent-%COMP%]{background:var(--color-v3-surface);border-radius:8px;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:4px}.stream-status[_ngcontent-%COMP%]   .stream-status-divider.left[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.stream-status[_ngcontent-%COMP%]   .stream-status-divider.right[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.stream-status[_ngcontent-%COMP%]   .stream-status-divider[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:100%}.stream-status[_ngcontent-%COMP%]   .stream-status-content[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:var(--color-v3-surface);border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:16px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 12px}.stream-status[_ngcontent-%COMP%]   .stream-status-text[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.stream-status[_ngcontent-%COMP%]   .stream-status-text[_ngcontent-%COMP%]   .stream-countdown[_ngcontent-%COMP%]{color:var(--color-on-surface-variant);font-size:12px;-webkit-font-feature-settings:\"tnum\";-moz-font-feature-settings:\"tnum\";font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums}.stream-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-left:0}.action-button[_ngcontent-%COMP%]{margin:8px}.proactive-audio-streaming-state[_ngcontent-%COMP%]{color:var(--color-v3-text)}.hallucinations-disclaimer-container[_ngcontent-%COMP%]{margin-top:12px}"]
		});
		_.ZJd = !1;
		_.$Jd = "";
		_.aKd = "";
		_.bKd = "";
		var cKd = (a, b) => b.Jw(), dKd = function(a, b) {
			a.W3a.emit(a.languages().find((c) => c.Jw() === b));
		}, eKd = class {
			constructor() {
				this.M9a = _.Li.required();
				this.languages = _.Li.required();
				this.disabled = _.V(!1);
				this.W3a = _.Ki();
				this.S = _.Dk;
				this.L9a = _.W(() => this.languages().find((a) => a.Jw() === this.M9a()));
				this.WRb = _.W(() => this.languages().slice().sort((a, b) => {
					var c = a.Jw(), d = b.Jw();
					if (c === "en-US" || c === "en") return -1;
					if (d === "en-US" || d === "en") return 1;
					a = a.getDisplayName();
					b = b.getDisplayName();
					return a.localeCompare(b);
				}));
			}
		};
		eKd.J = function(a) {
			return new (a || eKd)();
		};
		eKd.ka = _.u({
			type: eKd,
			da: [["ms-language-selector"]],
			inputs: {
				M9a: [1, "selectedLanguageCode"],
				languages: [1, "languages"],
				disabled: [1, "disabled"]
			},
			outputs: { W3a: "languageChanged" },
			ha: 8,
			ia: 4,
			la: [
				[
					1,
					"container",
					"form-field-density--4"
				],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic"
				],
				[
					3,
					"selectionChange",
					"value",
					"disabled"
				],
				[
					"aria-hidden",
					"true",
					3,
					"iconName"
				],
				[3, "value"],
				[1, "option-container"],
				[1, "v3-font-body"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2), _.J("selectionChange", function(c) {
					return dKd(b, c.value);
				}), _.F(3, "mat-select-trigger"), _.I(4, "span", 3), _.R(5), _.H(), _.Ah(6, mHd, 4, 2, "mat-option", 4, cKd), _.H()()());
				if (a & 2) {
					let c, d;
					_.y(2);
					_.E("value", (c = b.L9a()) == null ? null : c.Jw())("disabled", b.disabled());
					_.y(2);
					_.E("iconName", b.S.VO);
					_.y();
					_.S(" ", (d = b.L9a()) == null ? null : d.getDisplayName(), " ");
					_.y();
					_.Bh(b.WRb());
				}
			},
			dependencies: [
				_.dz,
				_.$D,
				_.ZD,
				_.TB,
				_.QB,
				_.dE,
				_.bE,
				_.cE
			],
			styles: [".container[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}.option-container[_ngcontent-%COMP%], mat-select-trigger[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}\n/*# sourceMappingURL=language_selector.css.map */"]
		});
		var fKd = class {
			constructor() {
				this.text = _.Li.required();
				this.checked = _.Li.required();
				this.tooltip = _.V("");
				this.disabled = _.V(!1);
				this.Pca = _.Ki();
			}
		};
		fKd.J = function(a) {
			return new (a || fKd)();
		};
		fKd.ka = _.u({
			type: fKd,
			da: [["ms-run-settings-slide-toggle"]],
			inputs: {
				text: [1, "text"],
				checked: [1, "checked"],
				tooltip: [1, "tooltip"],
				disabled: [1, "disabled"]
			},
			outputs: { Pca: "toggleChange" },
			ha: 4,
			ia: 5,
			la: [
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"wrapper",
					3,
					"matTooltip"
				],
				[1, "label"],
				[
					3,
					"change",
					"aria-label",
					"checked",
					"disabled"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "p", 1), _.R(2), _.H(), _.F(3, "mat-slide-toggle", 2), _.J("change", function(c) {
					return b.Pca.emit(c.checked);
				}), _.H()());
				a & 2 && (_.E("matTooltip", b.tooltip()), _.y(2), _.U(b.text()), _.y(), _.vh("aria-label", b.text()), _.E("checked", b.checked())("disabled", b.disabled()));
			},
			dependencies: [
				_.hF,
				_.gF,
				_.IC,
				_.HC
			],
			styles: [".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px}.label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;margin:0}\n/*# sourceMappingURL=slide_toggle.css.map */"]
		});
		var gKd = [
			{
				feature: 29,
				Gqa: (a) => {
					a.A.enableCodeExecution.set(!1);
				}
			},
			{
				feature: 30,
				Gqa: (a) => {
					a.A.ye.set(!1);
				}
			},
			{
				feature: 31,
				Gqa: (a) => {
					a.A.enableSearchAsATool.set(!1);
				}
			},
			{
				feature: 32,
				Gqa: (a) => {
					a.A.enableBrowseAsATool.set(!1);
				}
			}
		], r5 = function(a, b) {
			var c = a.readOnly() ? "\n\nTo change this setting, disconnect the stream first." : "";
			if (b) {
				let d = a.F(), e;
				a = (e = a.I()) == null ? void 0 : e.get(b);
				_.n4(b, a, d) || (c += "\n\nThis tool is not compatible with the current active tools.");
			}
			return c;
		}, BHd = function(a) {
			a.Eha.update((b) => !b);
		}, IHd = function(a) {
			a.Ia.areToolsOpen.update((b) => !b);
		}, KHd = function(a) {
			var b = {
				baseModel: a.uc(),
				safetySettings: [...a.model.safetySettings()],
				A6: !1,
				hT: (c) => {
					a.controller.A.safetySettings.set(c);
				}
			};
			a.dialog.open(_.H4, { data: b });
		}, NHd = function(a) {
			a.Ia.isAdvancedOpen.update((b) => !b);
		}, D5 = function(a, b, c) {
			return b && a.ea.get(c) !== !1 ? _.Im(b, c) : !1;
		}, hKd = function(a, b) {
			var c = a.F(), d;
			a = (d = a.I()) == null ? void 0 : d.get(b);
			return _.n4(b, a, c);
		}, iKd = class {
			constructor() {
				this.Ge = _.Jp;
				this.KPa = EId;
				this.aD = _.pzd;
				this.Feature = DId;
				this.JQa = 16e3;
				this.readOnly = _.Li.required();
				this.controller = _.m(_.k5);
				this.H = _.m(_.hO);
				this.X = _.m(_.Op);
				this.A = _.m(_.BF);
				this.dialog = _.m(_.rC);
				this.Qc = _.m(_.BM);
				this.Ia = _.m(_.oF);
				this.aa = _.m(_.HO);
				this.model = this.controller.model;
				this.uc = this.model.model;
				this.Un = _.W(() => {
					var a, b;
					return (b = (a = this.uc()) == null ? void 0 : a.getName()) != null ? b : "";
				});
				this.UOa = _.gAd;
				this.S = _.Dk;
				this.RLb = [{
					value: 3,
					icon: "lyrics",
					label: "Audio & Text"
				}, {
					value: 1,
					icon: "text_format",
					label: "Text"
				}];
				this.R = _.ZJd;
				this.I = _.W(() => _.WDd(this.uc()));
				this.F = _.W(() => {
					var a = this.model.enableCodeExecution, b = this.model.ye, c = this.model.enableSearchAsATool, d = this.model.enableBrowseAsATool, e = new Set();
					a() && e.add(1);
					b() && e.add(2);
					c() && e.add(5);
					d() && e.add(6);
					return e;
				});
				_.W(() => {
					var a, b;
					return (b = (a = this.uc()) == null ? void 0 : a.RL()) != null ? b : 0;
				});
				this.ea = new Map([[41, !1]]);
				this.gxb = _.W(() => {
					var a = this.uc();
					return D5(this, a, 8);
				});
				this.sRb = _.W(() => {
					var a = this.uc();
					return D5(this, a, 52);
				});
				this.rRb = _.W(() => {
					var a = this.uc();
					return D5(this, a, 35);
				});
				this.Tz = _.W(() => {
					var a;
					return (a = this.uc()) == null ? void 0 : _.bn(a);
				});
				this.Sz = _.W(() => {
					var a = this.model.Sz();
					if (a !== void 0) return a;
					var b, c;
					return (c = (b = this.Tz()) == null ? void 0 : _.yj(b, 1)) != null ? c : 0;
				});
				this.thinkingLevel = _.W(() => {
					if (this.model.thinkingLevel() !== 0) return this.model.thinkingLevel();
					var a, b;
					return (b = (a = this.Tz()) == null ? void 0 : _.Lm(a, 6)) != null ? b : 0;
				});
				this.MKa = _.W(() => {
					var a, b;
					return (b = (a = this.Tz()) == null ? void 0 : _.en(a, 7, _.oj())) != null ? b : [];
				});
				this.w$a = _.W(() => {
					var a = this.uc();
					return D5(this, a, 39);
				});
				this.xHb = _.W(() => {
					var a = this.model.ye(), b = this.model.LD();
					return a || b;
				});
				this.s$a = _.W(() => {
					var a = this.uc();
					return D5(this, a, 40);
				});
				this.nHb = _.W(() => {
					var a = this.model.ye(), b = this.model.rH();
					return a || b;
				});
				this.dZ = gKd.reduce((a, b) => {
					a.set(b.feature, _.W(() => {
						var c = this.uc();
						return c ? _.Im(c, b.feature) : !1;
					}));
					return a;
				}, new Map());
				this.gBa = _.W(() => [...this.dZ.values()].some((a) => a()));
				this.U = _.W(() => {
					var a = this.uc();
					return D5(this, a, 46);
				});
				this.VQb = _.W(() => !this.U());
				this.wRb = _.W(() => {
					var a = this.uc();
					return !D5(this, a, 46) && !D5(this, a, 56);
				});
				this.yQb = _.W(() => !this.U());
				this.Lzb = _.W(() => {
					var a, b;
					return (b = (a = this.uc()) == null ? void 0 : a.RL()) != null ? b : 0;
				});
				this.expanded = this.Qc.OB;
				this.JLa = this.Ia.areToolsOpen;
				this.QTa = this.Ia.isAdvancedOpen;
				this.Eha = _.M(!1);
				this.oKa = _.W(() => this.model.outputModality() === 3 && this.Vpa().length > 0);
				this.nKa = _.W(() => {
					var a = this.uc();
					return a ? _.Im(a, 34) : !1;
				});
				this.R$a = this.X.getFlag(_.kXb);
				this.ira = _.W(() => {
					var a = this.uc(), b;
					a ? b = _.mj(a, THd, 68, _.oj()) : b = [];
					return b;
				});
				this.RQb = _.W(() => this.model.outputModality() === 3 && this.ira().length > 0);
				this.aJb = _.W(() => this.R && this.model.MD() ? _.$Jd : "Language");
				this.CQb = _.W(() => this.R && this.model.MD());
				this.PBb = _.aKd;
				this.QBb = _.bKd;
				this.rQb = this.R$a;
				this.aT = this.A.oa;
				this.Vpa = _.W(() => {
					var a = this.uc();
					return a ? [..._.mj(a, _.vO, 66, _.oj())] : [];
				});
				this.sM = _.W(() => hKd(this, 1));
				this.gI = _.W(() => {
					var a = this.model.LD(), b = this.model.rH();
					return hKd(this, 2) && !a && !b;
				});
				this.t9 = _.W(() => hKd(this, 5));
				this.N8 = _.W(() => hKd(this, 6));
				this.A4 = _.W(() => this.model.ye() ? "Gemini automatically generates a response for each function call." : "Enable function calling to get automatically generated responses for your function calls.");
				this.kUb = _.W(() => "Lets Gemini send audio and video when speech is not detected" + r5(this));
				_.Fk([
					this.aT,
					this.uc,
					this.Ia.bidiModel
				], () => {
					var a = this.aT();
					if (!this.uc() && this.A.Ch().length) {
						var b = _.Vpb(this.A, 26);
						if (b) this.controller.setModel(b);
						else {
							var c = this.Ia.bidiModel();
							(b = a.find((d) => d.getName() === c)) ? this.controller.setModel(b) : a.length > 0 && this.controller.setModel(a[0]);
						}
					}
				});
				_.Fk([this.model.ye], () => {
					this.model.ye() || this.controller.A.Ef.set(!1);
				});
				_.Fk([this.Vpa], () => {
					var a = this.Vpa();
					if (a.length > 0) {
						var b = this.controller;
						a = a[0].getName();
						b.A.voiceName.set(a);
					} else this.controller.A.voiceName.set("");
				});
				_.Fk([this.nKa, this.model.outputModality], () => {
					this.nKa() || this.model.outputModality() !== 1 || oHd(this.controller, 3);
				});
				_.Fk([this.ira], () => {
					var a = this.ira();
					if (a.length > 0) {
						var b = this.controller;
						a = a[0].Jw();
						b.A.RC.set(a);
					} else this.controller.A.RC.set("");
				});
				_.Fk([this.Ia.bidiOutputFormat], () => {
					var a = this.Ia.bidiOutputFormat();
					a && oHd(this.controller, a);
				});
				_.Fk([], () => {
					for (let a of gKd) this.dZ.get(a.feature)() || a.Gqa(this.controller);
				});
				CId(this.aa, this.controller, this.H);
			}
			mxa(a) {
				a.stopPropagation();
				this.Qc.A.set("COLLAPSED");
			}
			ALa(a) {
				this.controller.A.enableSearchAsATool.set(a);
			}
			uLa(a) {
				this.controller.A.enableBrowseAsATool.set(a);
			}
			D1(a) {
				this.controller.A.Ef.set(a);
			}
			vLa(a) {
				this.controller.A.enableCodeExecution.set(a);
			}
			xLa(a) {
				this.controller.A.ye.set(a);
			}
			EGa() {
				_.jC(this.dialog.open(_.w4, { data: { Cka: [...this.model.functionDeclarations()] } })).subscribe((a) => {
					a !== void 0 && this.controller.A.functionDeclarations.set(a);
				});
			}
			reset() {
				this.controller.reset();
				this.H.A.systemInstructions.set("");
			}
		};
		iKd.J = function(a) {
			return new (a || iKd)();
		};
		iKd.ka = _.u({
			type: iKd,
			da: [["ms-bidi-run-settings"]],
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("expanded", b.expanded())("collapsed", !b.expanded());
			},
			inputs: { readOnly: [1, "readOnly"] },
			ha: 29,
			ia: 21,
			la: [
				["searchSource", ""],
				[1, "header"],
				[
					1,
					"no-select",
					"run-settings-title"
				],
				[1, "right"],
				[3, "getCodeButtonType"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"Reset default settings",
					"matTooltip",
					"Reset default settings",
					1,
					"button-reset-defaults",
					"gray",
					3,
					"click",
					"iconName",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"Close run settings panel",
					3,
					"click",
					"iconName"
				],
				[1, "content"],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"settings-model-selector",
					3,
					"matTooltip"
				],
				[3, "disabled"],
				[
					"promptType",
					"BIDI",
					3,
					"disabled"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					3,
					"matTooltip",
					"disabled"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"output-modality",
					3,
					"matTooltip"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"voice-selector",
					3,
					"matTooltip"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"language-selector",
					3,
					"matTooltip"
				],
				[
					"data-test-opaque-toggle-b-458098451",
					"",
					3,
					"text",
					"tooltip",
					"checked",
					"disabled"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"media-resolution",
					3,
					"matTooltip"
				],
				[
					"text",
					"Turn coverage",
					3,
					"tooltip",
					"checked",
					"disabled"
				],
				[
					3,
					"level",
					"supportedLevels",
					"minimalLevelLabel",
					"disabled"
				],
				[
					3,
					"thinkingModelConfig",
					"value",
					"disabled",
					"disabledTooltipSuffix"
				],
				[
					"text",
					"Affective dialog",
					"tooltip",
					"Let Gemini adapt its response style to the input expression and tone",
					3,
					"checked",
					"disabled"
				],
				[
					"text",
					"Proactive audio",
					"tooltip",
					"This feature enables the model to choose to not respond to audio that’s not relevant to the ongoing conversation",
					3,
					"checked",
					"disabled"
				],
				[
					1,
					"label",
					"no-select"
				],
				[
					"id",
					"bidi-output-format-label",
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"selector-label"
				],
				[1, "output-format-item-input"],
				[
					"layoutVariant",
					"vertical",
					3,
					"valueChange",
					"options",
					"value",
					"disabled"
				],
				[
					"id",
					"bidi-voice-label",
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"selector-label"
				],
				[
					3,
					"voiceChanged",
					"selectedVoiceId",
					"disabled",
					"voices"
				],
				[
					"id",
					"bidi-language-label",
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"selector-label"
				],
				[
					3,
					"languageChanged",
					"disabled",
					"languages",
					"selectedLanguageCode"
				],
				[
					"data-test-opaque-toggle-b-458098451",
					"",
					3,
					"toggleChange",
					"text",
					"tooltip",
					"checked",
					"disabled"
				],
				[
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"selector-label"
				],
				[
					"appearance",
					"outline",
					"subscriptSizing",
					"dynamic"
				],
				[
					"aria-label",
					"Media resolution",
					3,
					"selectionChange",
					"value",
					"disabled"
				],
				[3, "value"],
				[
					"text",
					"Turn coverage",
					3,
					"toggleChange",
					"tooltip",
					"checked",
					"disabled"
				],
				[
					3,
					"levelChange",
					"level",
					"supportedLevels",
					"minimalLevelLabel",
					"disabled"
				],
				[
					3,
					"valueChanged",
					"thinkingModelConfig",
					"value",
					"disabled",
					"disabledTooltipSuffix"
				],
				[
					"text",
					"Affective dialog",
					"tooltip",
					"Let Gemini adapt its response style to the input expression and tone",
					3,
					"toggleChange",
					"checked",
					"disabled"
				],
				[
					"text",
					"Proactive audio",
					"tooltip",
					"This feature enables the model to choose to not respond to audio that’s not relevant to the ongoing conversation",
					3,
					"toggleChange",
					"checked",
					"disabled"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltip",
					"Enable a sliding context window to automatically shorten chat history by removing the oldest turns.",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"settings-group-header",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Expand session context",
					3,
					"iconName"
				],
				[
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"group-title"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					3,
					"matTooltip"
				],
				[
					1,
					"item-description",
					"no-select"
				],
				[1, "settings-title"],
				[
					1,
					"item-input-slider",
					"large-number",
					3,
					"valueChange",
					"value",
					"step",
					"min",
					"max",
					"disabled"
				],
				[
					1,
					"settings-group-header",
					3,
					"click"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Expand tools",
					3,
					"iconName"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"settings-tool",
					3,
					"matTooltip"
				],
				[
					3,
					"tooltip",
					"checked",
					"disabled"
				],
				[
					1,
					"item-input-toggle",
					"form-field-density--4"
				],
				[
					"aria-label",
					"Code Execution",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				[
					1,
					"item-input-toggle",
					"form-field-density--4",
					"toggle-and-button"
				],
				[
					"data-test-id",
					"function-calling-toggle",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					1,
					"edit-button",
					3,
					"click",
					"disabled"
				],
				[
					"aria-label",
					"Automatic Function Response",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				[3, "ngTemplateOutlet"],
				[
					"aria-label",
					"Grounding with Google Search",
					1,
					"slide-toggle",
					"large",
					3,
					"change",
					"checked",
					"disabled"
				],
				[
					3,
					"toggleChanged",
					"tooltip",
					"checked",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Expand advanced settings",
					3,
					"iconName"
				],
				[
					"tabindex",
					"0",
					"role",
					"button",
					1,
					"advanced-settings-label"
				],
				[
					"matTooltipPosition",
					"left",
					"matTooltip",
					"Safety settings",
					"matTooltipClass",
					"settings-tooltip",
					1,
					"entry",
					"settings-tool"
				],
				[
					1,
					"item-input-toggle",
					"toggle-and-button",
					"form-field-density--4"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Edit safety settings",
					1,
					"edit-safety-button",
					3,
					"click",
					"disabled"
				],
				[
					1,
					"search-source",
					"grounding-source"
				],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1)(1, "h2", 2), _.R(2, "Run settings"), _.H(), _.F(3, "div", 3), _.I(4, "ms-get-code-button", 4), _.F(5, "button", 5), _.J("click", function() {
					return b.reset();
				}), _.H(), _.F(6, "button", 6), _.J("click", function(c) {
					return b.mxa(c);
				}), _.H()()(), _.F(7, "div", 7)(8, "div", 8), _.I(9, "ms-model-selector", 9), _.H(), _.I(10, "ms-system-instructions-panel", 10), _.B(11, nHd, 1, 2, "ms-paid-api-key", 11), _.I(12, "mat-divider"), _.B(13, pHd, 6, 6, "div", 12), _.B(14, qHd, 5, 4, "div", 13), _.B(15, rHd, 5, 5, "div", 14), _.B(16, sHd, 1, 4, "ms-run-settings-slide-toggle", 15), _.B(17, tHd, 10, 5, "div", 16), _.B(18, uHd, 1, 3, "ms-run-settings-slide-toggle", 17), _.B(19, vHd, 1, 4, "ms-thinking-level-setting", 18)(20, wHd, 1, 4, "ms-thinking-budget-setting", 19), _.B(21, xHd, 1, 0, "mat-divider"), _.B(22, yHd, 1, 2, "ms-run-settings-slide-toggle", 20), _.B(23, zHd, 1, 2, "ms-run-settings-slide-toggle", 21), _.B(24, CHd, 7, 4), _.B(25, JHd, 7, 4), _.B(26, OHd, 7, 4), _.H(), _.z(27, QHd, 1, 1, "ng-template", null, 0, _.Ii));
				a & 2 && (_.y(4), _.E("getCodeButtonType", b.UOa.LO), _.y(), _.E("iconName", b.S.Cta)("disabled", b.readOnly()), _.y(), _.E("iconName", b.S.ac), _.y(2), _.E("matTooltip", "Model used to generate response" + r5(b)), _.y(), _.E("disabled", b.readOnly()), _.y(), _.E("disabled", !b.gxb()), _.y(), _.C(b.Ge() ? -1 : 11), _.y(2), _.C(b.nKa() ? 13 : -1), _.y(), _.C(b.oKa() ? 14 : -1), _.y(), _.C(b.RQb() ? 15 : -1), _.y(), _.C(b.CQb() ? 16 : -1), _.y(), _.C(b.VQb() ? 17 : -1), _.y(), _.C(b.wRb() ? 18 : -1), _.y(), _.C(b.sRb() ? 19 : b.rRb() ? 20 : -1), _.y(2), _.C(b.w$a() || b.s$a() ? 21 : -1), _.y(), _.C(b.w$a() ? 22 : -1), _.y(), _.C(b.s$a() ? 23 : -1), _.y(), _.C(b.yQb() ? 24 : -1), _.y(), _.C(b.gBa() ? 25 : -1), _.y(), _.C(b.rQb ? 26 : -1));
			},
			dependencies: [
				_.A4,
				_.Yy,
				_.qI,
				_.G4,
				_.dz,
				eKd,
				_.OD,
				_.ND,
				_.$D,
				_.ZD,
				_.yA,
				_.TB,
				_.QB,
				_.dE,
				_.bE,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.JO,
				_.nz,
				_.KO,
				fKd,
				_.HN,
				_.lO,
				_.I4,
				_.J4,
				KId
			],
			styles: ["[_nghost-%COMP%]{border-left:1px solid var(--color-v3-outline-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;height:100%;overflow:hidden;-webkit-transition:width .2s cubic-bezier(.4,0,.2,0);transition:width .2s cubic-bezier(.4,0,.2,0);display:flex;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--color-run-settings-text);gap:0}@media screen and (max-width:960px){[_nghost-%COMP%]{background:var(--color-v3-surface-container);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);opacity:0;-webkit-transform:translate(100%);transform:translate(100%);-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),opacity .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);z-index:4;width:300px}.collapsed.collapsed[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .collapsed.collapsed[_nghost-%COMP%]   .header[_ngcontent-%COMP%], .expanded[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .expanded[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{opacity:1}.expanded[_nghost-%COMP%]{opacity:1;-webkit-transform:translate(0);transform:translate(0);-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),opacity .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),opacity .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0)}}[_nghost-%COMP%]   .entry.settings-model-selector[_ngcontent-%COMP%], [_nghost-%COMP%]   .settings-item.settings-model-selector[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   mat-divider.mat-divider[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}.expanded[_nghost-%COMP%]{width:300px}.collapsed[_nghost-%COMP%]{width:66px;cursor:pointer}.collapsed[_nghost-%COMP%]   .content[_ngcontent-%COMP%], .collapsed[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.collapsed[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0)}.header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:44px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;opacity:1;padding:16px 16px 0;-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,0);transition:opacity .2s cubic-bezier(.4,0,.2,0)}.header[_ngcontent-%COMP%]   .run-settings-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;white-space:nowrap}.header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-right:0}.content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow:clip auto;padding:16px;opacity:1;-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,0);transition:opacity .2s cubic-bezier(.4,0,.2,0);width:300px}.content[_ngcontent-%COMP%]   ms-bidi-model-selector[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}ms-run-settings-slide-toggle[_ngcontent-%COMP%]{display:block;margin-block:12px}.entry[_ngcontent-%COMP%]{margin:8px 0}.entry[_ngcontent-%COMP%]   .item-input-toggle[_ngcontent-%COMP%]{margin:0}.entry[_ngcontent-%COMP%]   .item-input-toggle[_ngcontent-%COMP%] > .slide-toggle[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;-webkit-order:2;-moz-box-ordinal-group:3;-ms-flex-order:2;order:2;margin:8px 0}.entry[_ngcontent-%COMP%]   .item-input-toggle[_ngcontent-%COMP%] > .edit-button[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-webkit-order:1;-moz-box-ordinal-group:2;-ms-flex-order:1;order:1}.entry.settings-turn-coverage[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.entry.settings-turn-coverage.settings-tool[_ngcontent-%COMP%]{margin:0 0 12px}.entry.settings-turn-coverage[_ngcontent-%COMP%]:last-of-type{margin-bottom:8px}.entry.settings-turn-coverage[_ngcontent-%COMP%]   .gmat-mdc-form-field.mat-primary[_ngcontent-%COMP%], .entry.settings-turn-coverage[_ngcontent-%COMP%]   .model-option-content[_ngcontent-%COMP%]{overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.entry.settings-turn-coverage[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-bottom:0}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.entry[_ngcontent-%COMP%]   .item-description.item-about-slider[_ngcontent-%COMP%]{margin-bottom:-10px}.entry[_ngcontent-%COMP%]   .item-description.item-about-search[_ngcontent-%COMP%]{display:block}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-description.tagged[_ngcontent-%COMP%]{width:auto}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{margin:0}.entry[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.entry[_ngcontent-%COMP%]   .output-format-item-input[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.entry[_ngcontent-%COMP%]   .output-format-item-input[_ngcontent-%COMP%]   .aspect-ratio-gallery[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.entry[_ngcontent-%COMP%]   .output-format-item-input[_ngcontent-%COMP%]   .output-modality-gallery[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.entry[_ngcontent-%COMP%]   .output-format-item-input.disabled[_ngcontent-%COMP%]{pointer-events:none}.label[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;margin-left:0;margin-bottom:8px}.language-selector[_ngcontent-%COMP%], .media-resolution[_ngcontent-%COMP%], .output-modality[_ngcontent-%COMP%], .voice-selector[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.language-selector[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%], .media-resolution[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%], .output-modality[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%], .voice-selector[_ngcontent-%COMP%]   .selector-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.footer[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:12px;min-height:52px;-webkit-transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0)}.footer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0)}.item-input-toggle[_ngcontent-%COMP%]{margin-top:12px}.item-input-toggle.toggle-and-button[_ngcontent-%COMP%]{margin-top:4px}.toggle-and-button[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-group-header[_ngcontent-%COMP%]{margin:8px 0;cursor:pointer}.settings-group-header[_ngcontent-%COMP%]   .advanced-settings-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.settings-group-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-group-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;-webkit-order:2;-moz-box-ordinal-group:3;-ms-flex-order:2;order:2}.settings-group-header.expanded[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.settings-group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.settings-group-header-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;gap:8px}.settings-tool[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.settings-tool.settings-tool[_ngcontent-%COMP%]{margin:0 0 12px}.settings-tool[_ngcontent-%COMP%]:last-of-type{margin-bottom:8px}.settings-tool[_ngcontent-%COMP%]   .gmat-mdc-form-field.mat-primary[_ngcontent-%COMP%], .settings-tool[_ngcontent-%COMP%]   .model-option-content[_ngcontent-%COMP%]{overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.settings-tool[_ngcontent-%COMP%] > .search-source[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-left:0;margin-top:3px}.settings-tool[_ngcontent-%COMP%] > .search-source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px;margin:6px 4px}.grounding-source[_ngcontent-%COMP%]   .ms-custom-icon[_ngcontent-%COMP%]{height:1em}.clickable-space[_ngcontent-%COMP%]{cursor:pointer;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;margin:-12px -24px -16px -40px;min-height:0}.group-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var);margin-block:0}.edit-safety-button[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}"]
		});
		var E5 = class {
			constructor() {
				this.language = _.M("Python");
				this.A = _.m(_.hO);
				this.F = _.m(_.k5);
				this.I = new Map([
					[1, "MEDIA_RESOLUTION_LOW"],
					[2, "MEDIA_RESOLUTION_MEDIUM"],
					[3, "MEDIA_RESOLUTION_HIGH"]
				]);
				this.view = _.W(() => {
					var a = this.F.model, b = this.A.model, c = this.language(), d = this.A.model.prompt(), e = a.enableSearchAsATool(), f = a.enableBrowseAsATool(), g = a.enableCodeExecution(), k = a.functionDeclarations(), p = a.ye();
					b = b.systemInstructions();
					var r = e || g || p || f, v = (a == null ? void 0 : a.outputModality()) === 3, w, D, G, L = {
						model: (w = a.model()) == null ? void 0 : w.getName(),
						prompt: d || "INSERT_INPUT_HERE",
						systemInstruction: b,
						outputModality: _.UDd([a.outputModality()]),
						triggerTokens: (D = a.oQ()) != null ? D : void 0,
						targetTokens: (G = a.jL()) != null ? G : void 0,
						voiceName: v ? a.voiceName() : void 0,
						voiceLanguage: v ? a.RC() : void 0,
						mediaResolution: this.I.get(a.mediaResolution()),
						turnCoverage: a.TQ() ? "TURN_INCLUDES_ALL_INPUT" : void 0,
						grounding: e,
						urlContext: f,
						codeExecution: g,
						hasTool: r,
						functionCalling: p && k ? { functionDeclarations: k.map((N) => {
							var Q = N.getName(), T = N.jc();
							if (N.getParameters()) {
								a: switch (N = N.getParameters(), c) {
									case "TypeScript":
										N = _.cAd.BH(N, 5, 0);
										break a;
									case "Python":
										N = _.$zd.BH(N, 4, 0);
										break a;
									case ".NET":
										N = _.XDd(N, 12);
										break a;
									default: N = [];
								}
								N = N.join("\n");
							} else N = "";
							return {
								name: Q,
								description: T,
								parameters: N
							};
						}) } : void 0
					};
					return {
						live: Object.assign({}, L),
						internal: Object.assign({}, _.qAd)
					};
				});
				this.H = _.Bk(this.view);
			}
		};
		E5.J = function(a) {
			return new (a || E5)();
		};
		E5.sa = _.Cd({
			token: E5,
			factory: E5.J
		});
		var F5 = class {
			constructor() {
				_.m(_.M4);
				this.A = _.m(E5);
				this.F = _.m(_.O4);
			}
			qB() {
				var a = this.A.H, b = (c) => {
					this.A.language.set(c);
					return _.L4(c, _.N4(this.F, 2, c), a);
				};
				return {
					DP: !1,
					Mv: [
						{ language: "Python" },
						{
							language: "TypeScript",
							aDa: !0
						},
						{ language: ".NET" }
					],
					Ff: b,
					mR: b
				};
			}
		};
		F5.J = function(a) {
			return new (a || F5)();
		};
		F5.sa = _.Cd({
			token: F5,
			factory: F5.J
		});
		_.ss = class {};
		_.ss.J = function(a) {
			return new (a || _.ss)();
		};
		_.ss.ka = _.u({
			type: _.ss,
			da: [["ms-bidi-ui"]],
			features: [_.yi([
				_.hO,
				_.k5,
				E5,
				{
					Da: _.D4,
					Mf: F5
				}
			])],
			ha: 4,
			ia: 1,
			la: [["bidiChat", ""], [3, "readOnly"]],
			template: function(a) {
				a & 1 && (_.I(0, "ms-bidi-chat", null, 0), _.F(2, "ms-right-side-panel"), _.I(3, "ms-bidi-run-settings", 1), _.H());
				a & 2 && (a = _.O(1), _.y(3), _.E("readOnly", a.fxb()));
			},
			dependencies: [
				YJd,
				iKd,
				_.P4
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:100%;width:100%}ms-bidi-chat[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


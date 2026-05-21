"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var PTb, QTb, RTb, STb, TTb, VTb, WTb, YTb, ZTb, UTb, XTb;
		PTb = function(a, b) {
			a & 1 && (_.F(0, "mat-option", 17), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("value", a), _.y(), _.S(" ", a, " "));
		};
		QTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
				_.J("selectionChange", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.Ltb(c.value));
				});
				_.Ah(3, PTb, 2, 2, "mat-option", 17, _.zh);
				_.H();
				_.F(5, "div", 18);
				_.J("click", function() {
					_.q(b);
					var c = _.O(2);
					return _.t(c.open());
				});
				_.H()();
			}
			a & 2 && (a = _.K(2), _.E("appearance", a.bub)("color", a.color), _.y(), _.E("value", a.pageSize)("disabled", a.disabled), _.vh("aria-labelledby", a.zSa), _.E("panelClass", a.YIa.Rc || "")("disableOptionCentering", a.YIa.Bya), _.y(2), _.Bh(a.gW));
		};
		RTb = function(a) {
			a & 1 && (_.F(0, "div", 15), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.pageSize));
		};
		STb = function(a) {
			a & 1 && (_.F(0, "div", 3)(1, "div", 13), _.R(2), _.H(), _.B(3, QTb, 6, 7, "mat-form-field", 14), _.B(4, RTb, 2, 1, "div", 15), _.H());
			a & 2 && (a = _.K(), _.y(), _.wh("id", a.zSa), _.y(), _.S(" ", a.Cr.L3a, " "), _.y(), _.C(a.gW.length > 1 ? 3 : -1), _.y(), _.C(a.gW.length <= 1 ? 4 : -1));
		};
		TTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.bfa(0, c.pK()));
				});
				_.Ee();
				_.F(1, "svg", 8);
				_.I(2, "path", 20);
				_.H()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", a.Cr.u_a)("matTooltipDisabled", a.pK())("disabled", a.pK())("tabindex", a.pK() ? -1 : null), _.wh("aria-label", a.Cr.u_a));
		};
		VTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 21);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.bfa(UTb(c) - 1, c.nK()));
				});
				_.Ee();
				_.F(1, "svg", 8);
				_.I(2, "path", 22);
				_.H()();
			}
			a & 2 && (a = _.K(), _.E("matTooltip", a.Cr.Z3a)("matTooltipDisabled", a.nK())("disabled", a.nK())("tabindex", a.nK() ? -1 : null), _.wh("aria-label", a.Cr.Z3a));
		};
		WTb = function(a) {
			a & 1 && _.Ih(0);
		};
		YTb = function(a) {
			a & 1 && _.z(0, WTb, 1, 0, "ng-container", 6);
			a & 2 && (a = _.K(), _.E("ngTemplateOutlet", a.data.template)("ngTemplateOutletContext", _.Ai(2, XTb, a.data.IF)));
		};
		ZTb = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K(), _.S(" ", a.data.bodyText, " "));
		};
		_.IN = class {
			constructor() {
				this.changes = new _.Wg();
				this.L3a = "Items per page:";
				this.M5a = "Next page";
				this.C7a = "Previous page";
				this.u_a = "First page";
				this.Z3a = "Last page";
				this.uEb = (a, b, c) => {
					if (c == 0 || b == 0) return `0 of ${c}`;
					c = Math.max(c, 0);
					a *= b;
					return `${a + 1} \u2013 ${a < c ? Math.min(a + b, c) : a + b} of ${c}`;
				};
			}
		};
		_.IN.J = function(a) {
			return new (a || _.IN)();
		};
		_.IN.sa = _.Re({
			token: _.IN,
			factory: _.IN.J
		});
		UTb = function(a) {
			return a.pageSize ? Math.ceil(a.length / a.pageSize) : 0;
		};
		_.JN = function(a) {
			return a.Vf < UTb(a) - 1 && a.pageSize != 0;
		};
		_.KN = class {
			get Vf() {
				return this.ea;
			}
			set Vf(a) {
				this.ea = Math.max(a || 0, 0);
				this.wb.lb();
			}
			get length() {
				return this.aa;
			}
			set length(a) {
				this.aa = a || 0;
				this.wb.lb();
			}
			get pageSize() {
				return this.H;
			}
			set pageSize(a) {
				this.H = Math.max(a || 0, 0);
				this.R();
			}
			get F_() {
				return this.I;
			}
			set F_(a) {
				this.I = (a || []).map((b) => _.bj(b, 0));
				this.R();
			}
			constructor() {
				this.Cr = _.m(_.IN);
				this.wb = _.m(_.Hu);
				this.zSa = _.m(_.am).getId("mat-paginator-page-size-label-");
				this.U = !1;
				this.F = new _.Zg(1);
				this.aa = this.ea = 0;
				this.I = [];
				this.Qba = this.mka = !1;
				this.YIa = {};
				this.disabled = !1;
				this.page = new _.pm();
				this.Xk = this.F;
				var a = this.Cr, b = _.m(_.Txb, { optional: !0 });
				this.fa = a.changes.subscribe(() => this.wb.lb());
				if (b) {
					let c = b.pageSize, d = b.F_, e = b.mka, f = b.Qba;
					c != null && (this.H = c);
					d != null && (this.I = d);
					e != null && (this.mka = e);
					f != null && (this.Qba = f);
				}
				this.bub = (b == null ? void 0 : b.T6b) || "outline";
			}
			ib() {
				this.U = !0;
				this.R();
				this.F.next();
			}
			Ba() {
				this.F.complete();
				this.fa.unsubscribe();
			}
			nextPage() {
				_.JN(this) && this.A(this.Vf + 1);
			}
			firstPage() {
				this.Vf >= 1 && this.pageSize != 0 && this.A(0);
			}
			lastPage() {
				_.JN(this) && this.A(UTb(this) - 1);
			}
			Ltb(a) {
				var b = this.Vf;
				this.Vf = Math.floor(this.Vf * this.pageSize / a) || 0;
				this.pageSize = a;
				this.X(b);
			}
			nK() {
				return this.disabled || !_.JN(this);
			}
			pK() {
				return this.disabled || !(this.Vf >= 1 && this.pageSize != 0);
			}
			R() {
				this.U && (this.pageSize || (this.H = this.F_.length != 0 ? this.F_[0] : 50), this.gW = this.F_.slice(), this.gW.indexOf(this.pageSize) === -1 && this.gW.push(this.pageSize), this.gW.sort((a, b) => a - b), this.wb.lb());
			}
			X(a) {
				this.page.emit({
					G8b: a,
					Vf: this.Vf,
					pageSize: this.pageSize,
					length: this.length
				});
			}
			A(a) {
				var b = this.Vf;
				a !== b && (this.Vf = a, this.X(b));
			}
			bfa(a, b) {
				b || this.A(a);
			}
		};
		_.KN.J = function(a) {
			return new (a || _.KN)();
		};
		_.KN.ka = _.u({
			type: _.KN,
			da: [["mat-paginator"]],
			eb: [
				"role",
				"group",
				1,
				"mat-mdc-paginator"
			],
			inputs: {
				color: "color",
				Vf: [
					2,
					"pageIndex",
					"pageIndex",
					_.bj
				],
				length: [
					2,
					"length",
					"length",
					_.bj
				],
				pageSize: [
					2,
					"pageSize",
					"pageSize",
					_.bj
				],
				F_: "pageSizeOptions",
				mka: [
					2,
					"hidePageSize",
					"hidePageSize",
					_.aj
				],
				Qba: [
					2,
					"showFirstLastButtons",
					"showFirstLastButtons",
					_.aj
				],
				YIa: "selectConfig",
				disabled: [
					2,
					"disabled",
					"disabled",
					_.aj
				]
			},
			outputs: { page: "page" },
			Cc: ["matPaginator"],
			ha: 14,
			ia: 14,
			la: [
				["selectRef", ""],
				[1, "mat-mdc-paginator-outer-container"],
				[1, "mat-mdc-paginator-container"],
				[1, "mat-mdc-paginator-page-size"],
				[1, "mat-mdc-paginator-range-actions"],
				[
					"aria-atomic",
					"true",
					"aria-live",
					"polite",
					"role",
					"status",
					1,
					"mat-mdc-paginator-range-label"
				],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-first",
					3,
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-previous",
					3,
					"click",
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				[
					"viewBox",
					"0 0 24 24",
					"focusable",
					"false",
					"aria-hidden",
					"true",
					1,
					"mat-mdc-paginator-icon"
				],
				["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-next",
					3,
					"click",
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-last",
					3,
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				[
					"aria-hidden",
					"true",
					1,
					"mat-mdc-paginator-page-size-label"
				],
				[
					1,
					"mat-mdc-paginator-page-size-select",
					3,
					"appearance",
					"color"
				],
				[1, "mat-mdc-paginator-page-size-value"],
				[
					"hideSingleSelectionIndicator",
					"",
					3,
					"selectionChange",
					"value",
					"disabled",
					"aria-labelledby",
					"panelClass",
					"disableOptionCentering"
				],
				[3, "value"],
				[
					1,
					"mat-mdc-paginator-touch-target",
					3,
					"click"
				],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-first",
					3,
					"click",
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],
				[
					"matIconButton",
					"",
					"type",
					"button",
					"matTooltipPosition",
					"above",
					"disabledInteractive",
					"",
					1,
					"mat-mdc-paginator-navigation-last",
					3,
					"click",
					"matTooltip",
					"matTooltipDisabled",
					"disabled",
					"tabindex"
				],
				["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 1)(1, "div", 2), _.B(2, STb, 5, 4, "div", 3), _.F(3, "div", 4)(4, "div", 5), _.R(5), _.H(), _.B(6, TTb, 3, 5, "button", 6), _.F(7, "button", 7), _.J("click", function() {
					return b.bfa(b.Vf - 1, b.pK());
				}), _.Ee(), _.F(8, "svg", 8), _.I(9, "path", 9), _.H()(), _.Fe(), _.F(10, "button", 10), _.J("click", function() {
					return b.bfa(b.Vf + 1, b.nK());
				}), _.Ee(), _.F(11, "svg", 8), _.I(12, "path", 11), _.H()(), _.B(13, VTb, 3, 5, "button", 12), _.H()()());
				a & 2 && (_.y(2), _.C(b.mka ? -1 : 2), _.y(3), _.S(" ", b.Cr.uEb(b.Vf, b.pageSize, b.length), " "), _.y(), _.C(b.Qba ? 6 : -1), _.y(), _.E("matTooltip", b.Cr.C7a)("matTooltipDisabled", b.pK())("disabled", b.pK())("tabindex", b.pK() ? -1 : null), _.wh("aria-label", b.Cr.C7a), _.y(3), _.E("matTooltip", b.Cr.M5a)("matTooltipDisabled", b.nK())("disabled", b.nK())("tabindex", b.nK() ? -1 : null), _.wh("aria-label", b.Cr.M5a), _.y(3), _.C(b.Qba ? 13 : -1));
			},
			dependencies: [
				_.ZD,
				_.bE,
				_.QB,
				_.YB,
				_.HC
			],
			styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"],
			Ab: 2
		});
		_.LN = class {};
		_.LN.J = function(a) {
			return new (a || _.LN)();
		};
		_.LN.qc = _.Ve({ type: _.LN });
		_.LN.oc = _.Dd({ imports: [
			_.ZB,
			_.dE,
			_.IC,
			_.KN
		] });
		XTb = (a) => ({ V: a });
		_.MN = class {
			constructor() {
				this.S = _.Dk;
				this.data = _.m(_.qC);
			}
		};
		_.MN.J = function(a) {
			return new (a || _.MN)();
		};
		_.MN.ka = _.u({
			type: _.MN,
			da: [["ms-console-confirmation-dialog"]],
			ha: 12,
			ia: 5,
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
				["align", "end"],
				"ms-button  variant borderless mat-dialog-close ".split(" "),
				"ms-button  data-test-id continue-button cdkFocusRegionEnd  cdkFocusInitial  mat-dialog-close true".split(" "),
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.R(2), _.I(3, "button", 2), _.H(), _.F(4, "mat-dialog-content"), _.B(5, YTb, 1, 4, "ng-container")(6, ZTb, 1, 1), _.H(), _.F(7, "mat-dialog-actions", 3)(8, "button", 4), _.R(9), _.H(), _.F(10, "button", 5), _.R(11), _.H()()());
				if (a & 2) {
					_.y(2);
					_.S(" ", b.data.Ht, " ");
					_.y();
					_.E("iconName", b.S.ac);
					_.y(2);
					_.C(b.data.template ? 5 : 6);
					_.y(4);
					let c;
					_.S(" ", (c = b.data.dX) != null ? c : "Cancel", " ");
					_.y(2);
					let d;
					_.S(" ", (d = b.data.zD) != null ? d : "Ok", " ");
				}
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.nz
			],
			Ab: 2
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
		_.tZb = function(a) {
			if (a != null && _.Dr(a, _.Uu, 3, _.hj)) {
				var b = _.ej(a);
				a = _.Ru(b);
				try {
					var c = _.lc(b.getData());
					a: {
						try {
							let e = atob(c), f = Array(e.length);
							for (c = 0; c < e.length; c++) f[c] = e.charCodeAt(c);
							let g = new Uint8Array(f);
							var d = new Blob([g], { type: a });
							break a;
						} catch (e) {
							console.error("Failed to convert base64 to Blob:", e);
							d = null;
							break a;
						}
						d = void 0;
					}
					if (d) return _.hd(_.ld(d));
				} catch (e) {
					console.error("Error creating object URL for inline data:", e);
				}
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
		var YZb, ZZb, $Zb, a_b, b_b, c_b, d_b, e_b, f_b, g_b, h_b, i_b, j_b, k_b, l_b, m_b, n_b, o_b, p_b, q_b, r_b, s_b, t_b, u_b, v_b, w_b, x_b, y_b, z_b, TO, A_b, B_b;
		YZb = function(a) {
			a & 1 && _.Ih(0, 7);
			a & 2 && (_.K(2), a = _.O(3), _.E("ngTemplateOutlet", a));
		};
		ZZb = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(5), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		$Zb = function(a) {
			a & 1 && _.B(0, ZZb, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		a_b = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(7), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		b_b = function(a) {
			a & 1 && _.B(0, a_b, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		c_b = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(9), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		d_b = function(a) {
			a & 1 && _.B(0, c_b, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		e_b = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(11), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		f_b = function(a) {
			a & 1 && _.B(0, e_b, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		g_b = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(13), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		h_b = function(a) {
			a & 1 && _.B(0, g_b, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		i_b = function(a, b) {
			a & 1 && _.Ih(0, 8);
			a & 2 && (_.K(3), a = _.O(15), _.E("ngTemplateOutlet", a)("ngTemplateOutletContext", _.Ai(2, TO, b)));
		};
		j_b = function(a) {
			a & 1 && _.B(0, i_b, 1, 4, "ng-container", 8);
			if (a & 2) {
				let b;
				a = _.K(2);
				_.C((b = a.Uq()) ? 0 : -1, b);
			}
		};
		k_b = function(a) {
			a & 1 && (_.F(0, "p")(1, "i"), _.R(2, "Unsupported data type encountered."), _.H()());
		};
		l_b = function(a, b) {
			a & 1 && _.B(0, YZb, 1, 1, "ng-container", 7)(1, $Zb, 1, 1)(2, b_b, 1, 1)(3, d_b, 1, 1)(4, f_b, 1, 1)(5, h_b, 1, 1)(6, j_b, 1, 1)(7, k_b, 3, 0, "p");
			a & 2 && _.C(b === "text" ? 0 : b === "code" ? 1 : b === "function_call" ? 2 : b === "function_response" ? 3 : b === "image" ? 4 : b === "audio" ? 5 : b === "file" ? 6 : b === "unknown" ? 7 : -1);
		};
		m_b = function(a, b) {
			a & 1 && (_.F(0, "div"), _.I(1, "ms-cmark-node", 9), _.H());
			a & 2 && (_.y(), _.E("node", b));
		};
		n_b = function(a) {
			a & 1 && (_.B(0, m_b, 2, 1, "div"), _.Ei(1, "async"));
			if (a & 2) {
				let b;
				a = _.K();
				_.C((b = _.Fi(1, 1, a.WJb)) ? 0 : -1, b);
			}
		};
		o_b = function(a, b) {
			a & 1 && (_.F(0, "div", 10), _.I(1, "ms-code-block", 11), _.H());
			a & 2 && (a = b.Uq, _.y(), _.E("code", a.DMb())("title", a.name));
		};
		p_b = function(a, b) {
			a & 1 && (_.F(0, "div", 10), _.I(1, "ms-code-block", 12), _.H());
			a & 2 && (a = b.Uq, _.y(), _.E("code", a.args)("title", a.name));
		};
		q_b = function(a, b) {
			a & 1 && (_.F(0, "div", 10), _.I(1, "ms-code-block", 12), _.H());
			a & 2 && (a = b.Uq, _.y(), _.E("code", a.response)("title", a.name));
		};
		r_b = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "img", 15);
				_.J("click", function() {
					_.q(c);
					var d = _.K().Uq, e = _.K();
					return _.t(e.hN(d));
				});
				_.H();
			}
			a & 2 && (a = _.K().Uq, _.E("src", b, _.rg)("alt", a.fileName));
		};
		s_b = function(a) {
			a & 1 && (_.F(0, "div", 14), _.I(1, "span", 16), _.F(2, "span"), _.R(3), _.H()());
			if (a & 2) {
				a = _.K().Uq;
				let b = _.K();
				_.y();
				_.E("iconName", b.S.cq);
				_.y(2);
				_.S("", a.fileName, " (preview unavailable)");
			}
		};
		t_b = function(a, b) {
			a & 1 && _.B(0, r_b, 1, 2, "img", 13)(1, s_b, 4, 2, "div", 14);
			if (a & 2) {
				let c;
				a = b.Uq;
				_.C((c = a == null ? null : a.Xd) ? 0 : 1, c);
			}
		};
		u_b = function(a, b) {
			a & 1 && _.I(0, "audio", 19);
			a & 2 && _.E("src", b);
		};
		v_b = function(a) {
			a & 1 && (_.F(0, "div", 14), _.I(1, "span", 16), _.F(2, "span"), _.R(3), _.H()());
			if (a & 2) {
				a = _.K().Uq;
				let b = _.K();
				_.y();
				_.E("iconName", b.S.Pda);
				_.y(2);
				_.S("", a.fileName, " (preview unavailable)");
			}
		};
		w_b = function(a, b) {
			a & 1 && (_.F(0, "div", 17)(1, "div", 18), _.B(2, u_b, 1, 1, "audio", 19)(3, v_b, 4, 2, "div", 14), _.H()());
			if (a & 2) {
				let c;
				a = b.Uq;
				_.y(2);
				_.C((c = a == null ? null : a.Xd) ? 2 : 3, c);
			}
		};
		x_b = function(a, b) {
			a & 1 && (_.F(0, "div", 20), _.I(1, "span", 16), _.F(2, "span", 21), _.R(3), _.H()());
			a & 2 && (a = b.Uq, b = _.K(), _.y(), _.E("iconName", b.S.DESCRIPTION), _.y(2), _.U(a.fileName));
		};
		y_b = function(a) {
			switch (a == null ? void 0 : _.dj(a)) {
				case 2: return "text";
				case 8:
				case 9: return "code";
				case 11: return "function_call";
				case 12: return "function_response";
				case 3:
					let b, c;
					a = (c = a == null ? void 0 : (b = _.ej(a)) == null ? void 0 : _.Ru(b)) != null ? c : "";
					return a.startsWith("image/") ? "image" : a.startsWith("audio/") ? "audio" : a.startsWith("video/") ? "video" : "file";
				default: return "unknown";
			}
		};
		z_b = function(a) {
			return _.ov(a) ? {
				name: "Executable code",
				code: _.nv(a).Ff(),
				language: _.mo(_.nv(a).getLanguage())
			} : _.qv(a) ? {
				name: "Code execution result",
				code: _.Wu(_.pv(a)),
				language: "Code execution output"
			} : {
				name: "",
				code: "",
				language: ""
			};
		};
		TO = (a) => ({ Uq: a });
		A_b = function(a, b, c) {
			return _.x(function* () {
				var d = yield _.pZb(a.H, c);
				return _.oZb(c, b, d);
			});
		};
		B_b = function(a) {
			a.A && (URL.revokeObjectURL(a.A), a.A = void 0);
		};
		_.UO = class {
			constructor() {
				this.part = _.Li.required();
				this.yB = _.V();
				this.h7a = _.V(0);
				this.hUa = _.V(!0);
				this.S = _.Dk;
				this.H = _.m(_.eG);
				this.dialog = _.m(_.rC);
				this.F = _.W(() => {
					var a = this.part();
					return a ? y_b(a) : "unknown";
				});
				this.I = _.W(() => {
					switch (this.F()) {
						case "text": return this.part().getText();
						case "code": return z_b(this.part()).code;
						default: return "";
					}
				});
				this.Nv = new _.sZb(this.H, _.W(() => this.hUa() && this.I().length > 0), this.I, this.yB);
				this.Uq = _.W(() => {
					var a = this.part();
					switch (this.F()) {
						case "text": return a.getText();
						case "code": return Object.assign({}, z_b(a), { DMb: this.Nv.ud });
						case "function_call":
							var b = _.rv(a), c;
							return b ? {
								name: b.getName(),
								args: JSON.stringify(_.xo((c = _.bv(b)) != null ? c : new _.no()), null, 2)
							} : null;
						case "function_response": return (c = _.sv(a)) ? {
							name: c.getName(),
							response: JSON.stringify(_.xo((b = _.hv(c)) != null ? b : new _.no()), null, 2)
						} : null;
						case "image":
						case "audio":
						case "video":
						case "file": return (c = _.ej(a)) ? {
							mimeType: _.Ru(c),
							Xd: this.A,
							fileName: _.NO(_.Ru(c))
						} : null;
						default: return null;
					}
				});
				this.mMb = _.Bk(this.F);
				this.R = _.Bk(_.W(() => {
					if (this.F() === "text") {
						var a = this.yB();
						if (a && (a = _.lo(a), a.length !== 0)) {
							var b = this.part().getText();
							if (b) return {
								Gha: a,
								text: b,
								offset: this.h7a()
							};
						}
					}
				})).pipe(_.ch((a) => {
					if (!a) return _.mf(void 0);
					var b = a.Gha.filter((c) => c.getIndex() > a.offset && c.getIndex() <= a.offset + a.text.length).map((c) => c.setIndex(c.getIndex() - a.offset));
					return A_b(this, b, a.text);
				}));
				this.WJb = _.Bk(this.Nv.ud).pipe(_.Ela(this.R), _.ch(([a, b]) => _.dG(this.H, b != null ? b : a)));
				this.A = void 0;
				_.Fk([this.part], () => {
					var a = this.part();
					B_b(this);
					this.A = _.tZb(a);
				});
			}
			Ba() {
				B_b(this);
			}
			hN(a) {
				var b = this;
				return _.x(function* () {
					var c;
					_.jC(b.dialog.open(_.SO, {
						data: { media: [{
							source: yield C_b.bEb((c = a == null ? void 0 : a.Xd) != null ? c : ""),
							altText: a == null ? void 0 : a.fileName,
							mimeType: a == null ? void 0 : a.mimeType
						}] },
						maxWidth: "100vw"
					})).subscribe((d) => {
						(d == null ? 0 : d.download) && b.MQ();
					});
				});
			}
			MQ() {
				return _.x(function* () {});
			}
		};
		_.UO.J = function(a) {
			return new (a || _.UO)();
		};
		_.UO.ka = _.u({
			type: _.UO,
			da: [["ms-part-renderer"]],
			inputs: {
				part: [1, "part"],
				yB: [1, "groundingData"],
				h7a: [1, "partTextStartIndex"],
				hUa: [1, "animateText"]
			},
			ha: 16,
			ia: 3,
			la: [
				["text", ""],
				["codeBlock", ""],
				["functionCall", ""],
				["functionResponse", ""],
				["inlineImage", ""],
				["inlineAudio", ""],
				["inlineFile", ""],
				[3, "ngTemplateOutlet"],
				[
					3,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					1,
					"cmark-node",
					"v3-font-body",
					3,
					"node"
				],
				[1, "container"],
				[
					"enableStickyHeader",
					"",
					3,
					"code",
					"title"
				],
				[
					3,
					"code",
					"title"
				],
				[
					1,
					"inline-image",
					3,
					"src",
					"alt"
				],
				[1, "inline-placeholder"],
				[
					1,
					"inline-image",
					3,
					"click",
					"src",
					"alt"
				],
				[3, "iconName"],
				[1, "audio-container"],
				[1, "preview-container"],
				[
					"controls",
					"",
					1,
					"inline-audio",
					3,
					"src"
				],
				[1, "inline-file"],
				[1, "file-name"]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, l_b, 8, 1), _.Ei(1, "async"), _.z(2, n_b, 2, 3, "ng-template", null, 0, _.Ii)(4, o_b, 2, 2, "ng-template", null, 1, _.Ii)(6, p_b, 2, 2, "ng-template", null, 2, _.Ii)(8, q_b, 2, 2, "ng-template", null, 3, _.Ii)(10, t_b, 2, 1, "ng-template", null, 4, _.Ii)(12, w_b, 4, 1, "ng-template", null, 5, _.Ii)(14, x_b, 4, 2, "ng-template", null, 6, _.Ii));
				if (a & 2) {
					let c;
					_.C((c = _.Fi(1, 1, b.mMb)) ? 0 : -1, c);
				}
			},
			dependencies: [
				_.cM,
				_.aM,
				_.tz,
				_.nz,
				_.dz,
				_.oz
			],
			styles: [".inline-image[_ngcontent-%COMP%]{cursor:pointer;max-height:min(30vh,358px);max-width:100%}.audio-container[_ngcontent-%COMP%]{border:1px solid var(--color-neutral-variant-30);border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:unset;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:348px}.audio-container[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:64px}.file-chunk-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:36px;padding:4px 8px;pointer-events:none;width:100%}.file-chunk-container[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-width:0}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   .name[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   .material-symbols-outlined[_ngcontent-%COMP%]{margin-right:10px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   .loading-icon[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-left:0;margin-right:10px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child   .loading-icon[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_rotate 1s linear infinite;animation:_ngcontent-%COMP%_rotate 1s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-left:10px;pointer-events:none;white-space:nowrap}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   .status[_ngcontent-%COMP%]{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:var(--color-on-surface-variant)}.file-chunk-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)   .token-count[_ngcontent-%COMP%]{color:var(--color-on-surface-variant)}\n/*# sourceMappingURL=part_renderer.css.map */"]
		});
		var C_b = { bEb: (a) => fetch(a).then((b) => b.blob()) };
		var TP, UP, q4b, s4b, t4b, XP, w4b, aQ, z4b, F4b, E4b, H4b, bQ, K4b, S4b, U4b, W4b, Y4b, cQ, eQ, a5b, c5b, e5b, fQ, iQ, g5b, o5b, p5b, q5b, r5b, s5b, j5b, I5b, H5b, J5b, K5b, L5b, N5b, O5b, P5b, Q5b, F5b, G5b, S5b, T5b, m5b, U5b, V5b, D4b, kQ, u4b, v4b, W5b, Y5b, Z5b;
		TP = function() {
			throw Error(_.fba(_.eba));
		};
		UP = function(a) {
			var b = _.eba;
			if (!a) throw Error(_.fba(b) || String(a));
		};
		_.VP = function(a) {
			return _.jb(a, _.Js);
		};
		q4b = function(a) {
			return _.kb((b) => b instanceof a);
		};
		_.r4b = function(...a) {
			return _.kb((b) => a.some((c) => c(b)));
		};
		s4b = function(a, b = !1) {
			var c = typeof a;
			if (a == null) return a;
			if (c === "bigint") return String((0, _.Sb)(64, a));
			if (_.yb(a)) return c === "string" ? _.Rb(a) : b ? _.Aba(a) : _.Qb(a);
		};
		t4b = function(a) {
			if (!((a == null ? void 0 : a.prototype) instanceof _.h)) throw Error();
			return a[_.Yb] || (a[_.Yb] = _.Zb(a));
		};
		XP = function() {
			if (_.WP !== _.WP) throw Error();
		};
		_.YP = function(a, b, c, d, ...e) {
			var f = new u4b(a, b, c, d, e);
			a && (a[_.IQa] != null || (a[_.IQa] = f));
			return () => f;
		};
		_.ZP = function(a, b) {
			return (() => {
				var c = new v4b(a, b);
				return () => c;
			})();
		};
		w4b = function(a) {
			a.indexOf(".") === 0 && (a = a.substring(1));
			return _.JQa.get(a);
		};
		aQ = function(a) {
			var b;
			(b = a[$P]) != null ? a = b : (XP(), a = a[$P] = x4b(a.A));
			return a;
		};
		z4b = function(a) {
			var b;
			return (b = a[$P]) != null ? b : a[$P] = y4b(a.F(_.WP));
		};
		F4b = function(a, b, c) {
			if (c) {
				var d;
				var e = (d = a[A4b]) != null ? d : a[A4b] = new Map();
			} else if (b) {
				let f;
				e = (f = a[B4b]) != null ? f : a[B4b] = new Map();
			} else {
				let f;
				e = (f = a[C4b]) != null ? f : a[C4b] = new Map();
			}
			a = D4b(a);
			if (e.size !== a.size) for (let f of a.values()) a = f.A(_.WP), d = z4b(f).getName(), e.set(E4b(a, d, b, c), f);
			return e;
		};
		E4b = function(a, b, c, d) {
			return d ? b : c ? bQ(b) : a == null ? `[${b}]` : `[${a}.${b}]`;
		};
		H4b = function(a) {
			a.length === 2 ? (a = a[1], a = a > "z" || a < "a" ? a : G4b(a.charCodeAt(0) - 32)) : a = "";
			return a;
		};
		bQ = function(a) {
			return a.replace(I4b, H4b);
		};
		K4b = function(a) {
			return a.replace(J4b, (b) => `_${b > "Z" || b < "A" ? b : G4b(b.charCodeAt(0) + 32)}`);
		};
		_.O4b = function(a) {
			var b;
			return (b = a[L4b]) != null ? b : a[L4b] = new Map(M4b(aQ(a)).map((c) => [c.getName(), N4b(c)]));
		};
		_.Q4b = function(a) {
			var b;
			return (b = a[P4b]) != null ? b : a[P4b] = new Map(M4b(aQ(a)).map((c) => [N4b(c), c.getName()]));
		};
		S4b = function(a) {
			return !!(_.ec(R4b) && _.ec(R4b) in a);
		};
		U4b = function(a) {
			return !!(_.ec(T4b) && _.ec(T4b) in a);
		};
		W4b = function(a) {
			return !!(_.ec(V4b) && _.ec(V4b) in a);
		};
		Y4b = function(a) {
			return !!(_.ec(X4b) && _.ec(X4b) in a);
		};
		cQ = function(a) {
			return !!(_.ec(Z4b) && _.ec(Z4b) in a);
		};
		eQ = function(a) {
			return !!(_.ec(dQ) && _.ec(dQ) in a);
		};
		a5b = function(a, b) {
			return b ? U4b(a) && !$4b.has(b) : !1;
		};
		c5b = function(a) {
			return !!(_.ec(b5b) && _.ec(b5b) in a);
		};
		e5b = function(a) {
			return !!(_.ec(d5b) && _.ec(d5b) in a);
		};
		fQ = function(a) {
			return !!(_.ec(f5b) && _.ec(f5b) in a);
		};
		iQ = function(a, b, c, d) {
			if (_.ec(_.gQ.get) && c === null && b.typeName === "google.protobuf.Value" && !eQ(a)) return _.rp(_.ro(new _.qo(), 0));
			if (c != null) {
				var e = b.messageType, f = b.isRepeated, g = b.enumType, k = b.HWa;
				if (b.isMap) {
					fQ(a) && Array.isArray(c) && (c = Object.fromEntries(c.map((r) => [_.jb(r.key, _.Js), _.jb(r.value, _.Js)])));
					b = e[1];
					var p = e[2];
					e = new Map();
					for (let [r, v] of Object.entries(_.jb(c, hQ))) {
						d = r;
						f = v;
						switch (b.fieldType) {
							case 8:
								switch (d) {
									case "true":
										c = !0;
										break;
									case "false":
										c = !1;
										break;
									default: continue;
								}
								break;
							case 5:
							case 13:
							case 17:
							case 7:
							case 15:
								c = Number(_.jb(d, _.Js));
								if (!Number.isFinite(c)) continue;
								break;
							case 2:
							case 1:
								c = Number(_.jb(d, _.Js));
								if (Number.isNaN(c) && d !== "NaN") continue;
								break;
							case 14:
								isNaN(d) || (d = +d);
								c = iQ(a, b, _.jb(d, _.Js));
								break;
							default: c = iQ(a, b, _.jb(d, _.Js));
						}
						d = iQ(a, p, _.jb(f, _.Js));
						d != null && e.set(c, d);
					}
					return e;
				}
				if (f && !d) {
					e = [];
					for (p of _.jb(c, _.zPa)) UP(p != null), c = iQ(a, b, p, !0), c != null && e.push(c);
					return e;
				}
				if (e) return g5b(a, e, c);
				if (g) return typeof c !== "string" ? _.VP(_.jb(k, _.Js)(c, 1), `incompatible wire value for field ${b.field.getName()}: ${c}`) : _.O4b(g).get(_.jb(c, _.mb));
				_.ec(jQ) && _.ec(jQ) in a && typeof c === "number" && !Number.isFinite(c) && (c = String(c));
				return _.VP(_.jb(k, _.Js)(c, 1), `incompatible wire value for field ${b.field.getName()}: ${c}`);
			}
		};
		g5b = function(a, b, c) {
			if (c != null) {
				var d = c[h5b], e = _.VP(kQ(b.pL));
				if (d && typeof d === "object") {
					if (Array.isArray(d)) return _.Zca(t4b(e), d);
					if (d instanceof e) return d;
					throw Error();
				}
				if (!eQ(a) || a5b(a, b.typeName)) {
					if (d = lQ.get(b.typeName)) return d.Ls(c, a);
				}
				e = new e();
				var f = e.Pd, g = f[_.Ra] | 0, k;
				(k = c[i5b]) == null || k.forEach((D, G) => {
					_.sc(f, g, G, D, _.hb(g));
				});
				(k = _.ec(_.fc)) && (d = c[k]) && (f[k] = _.nca(d));
				k = b.ayb;
				_.ec(mQ) && _.ec(mQ) in a && (k = b.oVa);
				W4b(a) && (k = b.pVa);
				d = new Set();
				var p = new Set();
				for (let [D, G] of Object.entries(_.jb(c, hQ))) {
					var r = D, v = G;
					let L;
					if (_.ec(nQ) && _.ec(nQ) in a && ((L = b.N4) == null ? 0 : L.has(r))) {
						if (!v) continue;
						c = b.oVa.get(v.case);
						v = v.value;
					} else c = k.get(r);
					if (c == null) {
						var w = F4b(b.pL, !!(_.ec(oQ) && _.ec(oQ) in a), W4b(a)).get(r);
						w && (c = j5b(b.pL, z4b(w)));
					}
					c == null && (c = b.pVa.get(r));
					if (c == null) {
						UP(!0);
						continue;
					}
					_.ec(k5b) && v === null && c.T5a && !eQ(a) && (v = 0);
					r = iQ(a, c, v);
					if (r == null) continue;
					(v = c.AGa) && (d.has(v) ? TP() : d.add(v));
					w = c.aDb;
					UP(!p.has(w));
					p.add(w);
					let N = f[_.Ra] | 0;
					if (Array.isArray(r)) for (let Q of r) _.Dc(f, f[_.Ra] | 0, w).push(Q);
					else if (r instanceof Map) for (let Q of r.entries()) _.KPa(f, w, Q);
					else v ? _.Qs(f, w, v, _.jb(r, l5b)) : (c.qFb || !m5b(c, r)) && _.sc(f, N, w, _.jb(r, l5b), _.hb(N));
				}
				_.Ta(f);
				return e;
			}
		};
		o5b = function(a, b, c) {
			if (c != null) {
				var d = b.messageType, e = b.enumType, f = b.HWa;
				if (d) return _.n5b(a, d, _.jb(c, _.r4b(_.APa, q4b(_.h))));
				if (e) {
					b = _.jb(f, _.Js)(c, 0);
					if (b == null) return;
					var g;
					return _.ec(pQ) && _.ec(pQ) in a ? b : (g = _.Q4b(e).get(b)) != null ? g : b;
				}
				e = _.jb(f, _.Js)(c, 0);
				if (_.ec(jQ) && _.ec(jQ) in a && (b.fieldType === 2 || b.fieldType === 1) && typeof e === "string") switch (e) {
					case "NaN": return Number.NaN;
					case "Infinity": return Number.POSITIVE_INFINITY;
					case "-Infinity": return Number.NEGATIVE_INFINITY;
				}
				var k;
				if (g = Y4b(a) && _.Pa()) a: switch (b.fieldType) {
					case 3:
					case 4:
					case 18:
					case 6:
					case 16:
						g = !0;
						break a;
					default: g = !1;
				}
				if (g && ((k = b.field.getOptions()) == null ? void 0 : _.wn(k, 6)) !== 1 && e != null) return BigInt(e);
				if (b.fieldType === 12 && e) {
					if (typeof e === "object" && e instanceof _.bb) return cQ(a) ? _.ep(e) : _.lc(e);
					if (typeof e === "string") return cQ(a) ? _.Vaa(e) : e;
				}
				return e;
			}
		};
		_.n5b = function(a, b, c) {
			var d = c[_.Va] === _.Wa, e = !d && Array.isArray(c);
			e && _.xca(c, 500, b.messageId);
			c = d ? c.Pd : e ? c : void 0;
			if (c == null) a = c;
			else a: {
				e = c[_.Ra] | 0;
				if (d = S4b(a) && !!(e & 2)) {
					let f = c[h5b];
					if (f) {
						a = f;
						break a;
					}
				}
				a = p5b(a, b, c, e, d);
				d && a != null && typeof a === "object" && (a[h5b] = c, b = ArrayBuffer.isView(a) ? a : Object.freeze(a), c[h5b] = b);
			}
			return a;
		};
		p5b = function(a, b, c, d, e) {
			if (U4b(a)) {
				var f = lQ.get(b.typeName);
				if (f && f.rLa) return c = _.Zca(t4b(_.VP(kQ(b.pL))), _.ic(c, 0, _.jc)), f.rLa(c, a);
			}
			if (!eQ(a) || a5b(a, b.typeName)) {
				if (f = lQ.get(b.typeName)) return c = _.Zca(t4b(_.VP(kQ(b.pL))), _.ic(c, 0, _.jc)), f.Ks(c, a);
			}
			var g = c5b(a) || e5b(a) ? new Set() : void 0, k = q5b(a, b), p = new Set(), r;
			_.dba(c, d, (v, w) => {
				if (!(w == null || _.bba(w) || w && typeof w === "object" && w.UJb === _.tPa && w.size === 0)) {
					var D = b[v];
					if (D == null) {
						var G = D4b(b.pL).get(v);
						if (G) {
							var L = z4b(G);
							D = j5b(b.pL, L);
							L = E4b(G.A(_.WP), L.getName(), !!(_.ec(oQ) && _.ec(oQ) in a), W4b(a));
						}
						if (D == null) {
							UP(!0);
							var N;
							((N = r) != null ? N : r = new Map()).set(v, w);
							return;
						}
					} else L = r5b(a, D);
					_.ib(L, _.Js);
					_.ib(D, _.Js);
					N = D.isMap;
					var Q = D.isRepeated;
					G = D.messageType;
					var T;
					if (N && !fQ(a)) {
						w instanceof _.dc ? w = w.entries() : Array.isArray(w) || (w = [], TP());
						var X = G[1], Y = G[2];
						for (let [Fa, Ka] of w) {
							G = Fa;
							w = Ka;
							G = String(G == null ? s5b(a, X) : _.VP(o5b(a, X, G)));
							N = o5b(a, Y, w);
							_.ec(_.gQ.get) && w === null && D.typeName === "google.protobuf.Value" && !eQ(a) || w != null || N != null || (N = s5b(a, Y));
							var ia = void 0;
							((ia = T) != null ? ia : T = {})[G] = N;
						}
					} else if (Q) {
						fQ(a) && N && w instanceof _.dc && (w = [...w.entries()]);
						T = e5b(a) ? [] : null;
						for (X of _.jb(w, _.zPa)) {
							if (X == null) continue;
							ia = o5b(a, D, X);
							if (ia == null) continue;
							((Y = T) != null ? Y : T = []).push(ia);
						}
					} else if (_.ec(k5b) && D.T5a && w === 0 && !eQ(a)) {
						var fa = !0;
						T = null;
					} else T = o5b(a, D, w);
					_.ec(_.gQ.get) && T === null && D.typeName === "google.protobuf.Value" && !eQ(a) && (fa = !0);
					e && T != null && typeof T === "object" && !ArrayBuffer.isView(T) && Object.freeze(T);
					if (fa || T != null) D.AGa && _.ec(nQ) && _.ec(nQ) in a && !_.Pm(D.field, 17) ? (fa = _.mj(b.vya, t5b, 8, _.oj())[_.yj(D.field, 9)], fa = bQ(fa.getName()), D = D.zwa, g && g.add(v), p.add(fa), v = T != null && typeof T === "object" && cQ(a) && S4b(a) && T instanceof Uint8Array ? {
						case: D,
						get value() {
							return T.slice();
						}
					} : {
						case: D,
						value: T
					}, k[fa] = e ? Object.freeze(v) : v) : (g && g.add(v), p.has(L) && TP(), p.add(L), T != null && typeof T === "object" && cQ(a) && S4b(a) && T instanceof Uint8Array ? Object.defineProperty(k, L, {
						enumerable: !0,
						get() {
							return T.slice();
						}
					}) : k[L] = T);
				}
			});
			if (c5b(a) || e5b(a)) for (let [v, w] of Object.entries(b)) {
				f = v;
				d = w;
				if (Number.isNaN(+f)) continue;
				if (g.has(+f)) continue;
				f = r5b(a, d);
				let D = d.isMap;
				d.isRepeated && (!D || fQ(a)) && e5b(a) ? k[f] = e ? u5b : [] : D && c5b(a) && !fQ(a) && (k[f] = e ? v5b : {});
			}
			r && (k[i5b] = r);
			(d = _.ec(_.fc)) && (c = _.hc(c)) && (k[d] = _.nca(c));
			return k;
		};
		q5b = function(a, b) {
			if (_.ec(w5b) && _.ec(w5b) in a) {
				if (!b.Eaa && (UP(_.ec(nQ)), UP(b.N4), !b.Eaa)) {
					b.Eaa = {};
					b.Daa = {};
					b.W7a = new Set();
					var c = b.vya;
					for (let f of _.mj(c, x5b, 2, _.oj())) {
						c = _.VP(b[_.yj(f, 3)]);
						let g = c.AGa, k = c.isRepeated, p = c.isMap, r = c.fieldType, v = c.fieldPresence, w = r5b(a, c);
						if (k || p) b.Daa[w] = p ? v5b : u5b;
						else if (!g && r !== 11 && r !== 10 && !_.Pm(f, 17)) switch (b.Eaa[w] = c.V7a, v) {
							case 1:
							case 3:
								b.W7a.add(w);
								break;
							case 2:
								b.Daa[w] = c.V7a;
								break;
							default: TP(`unknown field presence ${v} for field ${f.getName()} in ${b.typeName}`);
						}
					}
					var d, e;
					for (let f of (e = (d = b.N4) == null ? void 0 : d.keys()) != null ? e : []) b.Daa[f] = y5b;
					a = b.pL.fieldPresence;
					if (a === 1 || a === 3 || b.W7a.size > 0) b.CUb = !0;
				}
				return b.CUb ? (a = Object.create(b.Eaa, { $typeName: {
					value: b.typeName,
					enumerable: !0
				} }), Object.assign(a, b.Daa), a) : Object.assign({ $typeName: b.typeName }, b.Eaa, b.Daa);
			}
			return {};
		};
		_.B5b = function(a) {
			if (a != null) {
				var b = a[z5b];
				if (b != null) return b;
				(b = a[$P]) == null && (XP(), b = a[$P] = A5b(a.A));
				var c, d = a[z5b] = {
					typeName: a.getTypeName(),
					pL: a,
					vya: b,
					messageId: (c = kQ(a)) == null ? void 0 : c.messageId
				};
				!kQ(a) || new (kQ(a))();
				_.ec(nQ) && (d.N4 = new Map());
				c = d.ayb = new Map();
				var e = _.ec(mQ) ? d.oVa = new Map() : void 0, f = d.pVa = new Map(), g = new Map();
				for (let p of _.mj(b, x5b, 2, _.oj())) {
					let r;
					if (_.dn(p, 9)) {
						var k = _.yj(p, 9);
						r = g.get(k);
						r == null && g.set(k, r = []);
						r.push(_.yj(p, 3));
						if (d.N4 && !_.Pm(p, 17)) {
							let v = _.mj(b, t5b, 8, _.oj())[k];
							d.N4.set(bQ(v.getName()), k);
						}
					}
					k = j5b(a, p, r);
					k != null && (d[_.yj(p, 3)] = k, c.set(k.jsonName, k), f.set(p.getName(), k), e && e.set(k.zwa, k));
				}
				return d;
			}
		};
		r5b = function(a, b) {
			return W4b(a) ? b.field.getName() : _.ec(mQ) && _.ec(mQ) in a ? b.zwa : b.jsonName;
		};
		s5b = function(a, b) {
			switch (b.fieldType) {
				case 11:
				case 10: return {};
				default: return _.ec(pQ) && _.ec(pQ) in a && b.enumType ? b.fYa : b.defaultValue;
			}
		};
		j5b = function(a, b, c) {
			var d = b[C5b];
			if (d) return d;
			d = b.getType();
			var e = b.Bl() === 3, f = d === 11 || d === 10, g = f ? _.B5b(w4b(b.getTypeName())) : void 0;
			if (g) {
				var k;
				var p = (k = g.vya.getOptions()) == null ? void 0 : _.Pm(k, 7);
				e || (e = !!p);
			} else f && TP(`unknown message type for field ${b.getName()} in ${a.getTypeName()}`);
			k = _.Ss(b, D5b, 8);
			k = _.Ss(k, E5b, 21);
			k = _.wn(k, 1);
			k = k != null ? k : a.fieldPresence;
			f = !e && !p && (k !== 2 || !!c);
			if (d === 14) {
				var r = b.getTypeName();
				r.indexOf(".") === 0 && (r = r.substring(1));
				r = _.KQa.get(r);
				r = _.jb(r, _.Js);
			} else r = void 0;
			var v = _.Xb(_.tn(b, 6));
			v = (v == null ? 0 : v.startsWith(".")) ? v.substring(1) : v;
			var w = bQ(b.getName()), D;
			_.ec(k5b) && r && c && v === "google.protobuf.NullValue" && (D = !0);
			var G;
			return b[C5b] = {
				parent: a,
				field: b,
				fieldType: d,
				aDb: _.yj(b, 3),
				isRepeated: e,
				qFb: f,
				fieldPresence: k,
				typeName: v,
				isMap: p,
				AGa: c,
				messageType: g,
				enumType: r,
				zwa: w,
				jsonName: (G = _.Xb(_.tn(b, 10))) != null ? G : w,
				HWa: F5b(d),
				defaultValue: G5b(b, r),
				fYa: G5b(b, r, !0),
				V7a: G5b(b, r, !0, !0),
				T5a: D
			};
		};
		I5b = function(a, b) {
			if (a == null) return a;
			b === 1 && typeof a === "number" && UP(Math.abs(a) <= 34028234663852886e22);
			return H5b(a, b);
		};
		H5b = function(a, b) {
			if (a == null) return a;
			if (b === 1) switch (typeof a) {
				case "number":
					UP(Number.isFinite(a));
					break;
				case "string": UP(a.length && (!isNaN(a) || a === "NaN")), a = Number(a);
			}
			a = _.ub(a);
			return b !== 0 || Number.isFinite(a) ? a : String(a);
		};
		J5b = function(a) {
			if (a == null) return a;
			a = _.Xb(a);
			a != null && _.iaa(a);
			return a;
		};
		K5b = function(a) {
			if (a == null) return a;
			typeof a === "string" && (a = _.Uaa(a), UP(atob(btoa(a)) === a));
			typeof a === "object" && a instanceof Uint8Array ? a = _.cb(new Uint8Array(a)) : a = a == null || a instanceof _.bb ? a : typeof a === "string" ? _.ab(a) : void 0;
			return a;
		};
		L5b = function(a, b) {
			b === 1 && UP(a == null || typeof a === "boolean");
			return _.wb(a);
		};
		N5b = function(a, b) {
			if (a == null) return a;
			var c = Number(a);
			b === 1 && (typeof a === "string" && UP(M5b.test(a)), UP(Number.isSafeInteger(c) && c >= 0 && c <= 4294967295));
			return _.Fb(a);
		};
		O5b = function(a, b) {
			if (a == null) return a;
			var c = Number(a);
			b === 1 && (typeof a === "string" && UP(M5b.test(a)), UP(Number.isSafeInteger(c) && c >= -2147483648 && c <= 2147483647));
			return _.Db(a);
		};
		P5b = function(a, b) {
			if (a == null) return a;
			b === 1 && _.Pa() && (b = BigInt(a), UP(b >= BigInt(0)), UP(b <= BigInt("18446744073709551615")));
			return s4b(a, !0);
		};
		Q5b = function(a, b) {
			if (a == null) return a;
			b === 1 && _.Pa() && (b = BigInt(a), UP(b >= BigInt("-9223372036854775808")), UP(b <= BigInt("9223372036854775807")));
			return _.Dba(a, !0);
		};
		F5b = function(a) {
			switch (a) {
				case 1: return H5b;
				case 2: return I5b;
				case 8: return L5b;
				case 9: return J5b;
				case 12: return K5b;
				case 7:
				case 13: return N5b;
				case 5:
				case 14:
				case 15:
				case 17: return O5b;
				case 4:
				case 6: return P5b;
				case 3:
				case 18:
				case 16: return Q5b;
			}
		};
		G5b = function(a, b, c = !1, d = !1) {
			var e = _.Xb(_.tn(a, 7));
			switch (a.getType()) {
				case 1:
				case 2:
					switch (e == null ? void 0 : e.toLowerCase()) {
						case "inf": return Infinity;
						case "-inf": return -Infinity;
						case "nan": return NaN;
					}
					return Number(e != null ? e : 0);
				case 7:
				case 13:
				case 5:
				case 15:
				case 17: return Number(e != null ? e : 0);
				case 8: return e === "true";
				case 9: return e != null ? e : "";
				case 12: return d ? e ? new TextEncoder().encode(e) : new Uint8Array(0) : e != null ? e : "";
				case 14: return c ? e ? N4b(R5b(aQ(b)).find((g) => g.getName() === e)) : N4b(R5b(aQ(b))[0]) : e != null ? e : R5b(aQ(b))[0].getName();
				case 4:
				case 6:
				case 3:
				case 18:
				case 16:
					let f;
					return d && _.Pa() && ((f = a.getOptions()) == null ? void 0 : _.wn(f, 6)) !== 1 ? BigInt(e != null ? e : "0") : e != null ? e : "0";
			}
		};
		S5b = function(a, b) {
			(!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || Math.abs(a) > 315576e6 || Math.abs(b) > 999999999) && TP();
			return !0;
		};
		T5b = function(a, b) {
			(!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || a > 253402300799 || a < -62135596800 || b > 999999999 || b < 0) && TP();
			return !0;
		};
		m5b = function(a, b) {
			b instanceof _.bb && (b = _.lc(b));
			a = a.fYa;
			return a != null && a === b;
		};
		_.Cy.prototype.sja = _.ca(112, function() {
			return _.uj(this, 1, _.oj());
		});
		_.mpb.prototype.sja = _.ca(111, function() {
			return _.uj(this, 1, _.oj());
		});
		_.no.prototype.ao = _.ca(7, function() {
			var a = {};
			_.zc(this, 1, _.qo).forEach(function(b, c) {
				a[c] = b.ao();
			});
			return a;
		});
		_.qo.prototype.ao = _.ca(6, function() {
			switch (_.jj(this, _.yo)) {
				case 1: return null;
				case 2: return _.zo(this, 2, _.yo);
				case 3: return _.qj(this, 3, _.yo);
				case 4: return _.Ao(this, 4, _.yo);
				case 5: return _.fj(this, _.no, 5, _.yo).ao();
				case 6: return _.fj(this, _.uo, 6, _.yo).ao();
				default: throw Error("Ha");
			}
		});
		_.uo.prototype.ao = _.ca(5, function() {
			var a = [], b = _.qBa(this);
			for (let c = 0; c < b.length; c++) a[c] = b[c].ao();
			return a;
		});
		_.WP = {};
		U5b = class {
			constructor() {
				if (_.WP !== _.WP) throw Error();
			}
		};
		V5b = class {
			constructor() {
				if (_.WP !== _.WP) throw Error();
			}
		};
		D4b = function(a) {
			XP();
			var b = _.LQa.get(a.typeName);
			b == null && _.LQa.set(a.typeName, b = new Map());
			return b;
		};
		kQ = function(a) {
			XP();
			return a.ctor;
		};
		u4b = class extends U5b {
			constructor(a, b, c, d, e) {
				super();
				this.ctor = a;
				this.typeName = b;
				this.fieldPresence = c;
				this.A = d;
				_.WOa(e);
				_.JQa.set(b, this);
				a && (this.ctor[_.HQa] = d);
			}
			getTypeName() {
				return this.typeName;
			}
		};
		v4b = class extends V5b {
			constructor(a, b) {
				super();
				this.typeName = a;
				this.A = b;
				XP();
				_.KQa.set(a, this);
			}
			getTypeName() {
				return this.typeName;
			}
		};
		_.X5b = function(a) {
			var b = new _.no(), c = _.zc(b, 1, _.qo);
			for (let d in a) {
				let e = a[d];
				e !== void 0 && c.set(d, W5b(e));
			}
			return b;
		};
		W5b = function(a) {
			var b = new _.qo();
			switch (_.vb(a)) {
				case "string": return _.to(b, a);
				case "number": return _.so(b, a);
				case "boolean": return _.nBa(b, a);
				case "null": return _.ro(b, 0);
				case "array": return _.vo(b, Y5b(a));
				case "object": return _.wo(b, _.X5b(a));
				default: throw Error("Ga");
			}
		};
		Y5b = function(a) {
			var b = new _.uo();
			for (let c = 0; c < a.length; c++) _.oBa(b, W5b(a[c]));
			return b;
		};
		Z5b = _.Wc(_.$u);
		var E5b = class extends _.h {
			constructor(a) {
				super(a, 10);
			}
		};
		var $5b = class extends _.h {
			constructor(a) {
				super(a, 500);
			}
		};
		var a6b = class extends _.h {
			constructor(a) {
				super(a, 500);
			}
		};
		var N4b = function(a) {
			return _.yj(a, 2);
		}, b6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			getOptions() {
				return _.Z(this, a6b, 3);
			}
			setOptions(a) {
				return _.ln(this, a6b, 3, a);
			}
			F() {
				return _.sn(this, a6b, 3);
			}
		};
		var D5b = class extends _.h {
			constructor(a) {
				super(a, 500);
			}
		};
		var x5b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			Bl() {
				return _.Lm(this, 4, 1);
			}
			hasLabel() {
				return _.wn(this, 4) != null;
			}
			getType() {
				return _.Lm(this, 5, 1);
			}
			getTypeName() {
				return _.l(this, 6);
			}
			getOptions() {
				return _.Z(this, D5b, 8);
			}
			setOptions(a) {
				return _.ln(this, D5b, 8, a);
			}
			F() {
				return _.sn(this, D5b, 8);
			}
		};
		var c6b = class extends _.h {
			constructor(a) {
				super(a, 500);
			}
		};
		var d6b = class extends _.h {
			constructor(a) {
				super(a, 500);
			}
		};
		var t5b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			getOptions() {
				return _.Z(this, d6b, 2);
			}
			setOptions(a) {
				return _.ln(this, d6b, 2, a);
			}
			F() {
				return _.sn(this, d6b, 2);
			}
		};
		var A5b = _.$c(class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			getOptions() {
				return _.Z(this, c6b, 7);
			}
			setOptions(a) {
				return _.ln(this, c6b, 7, a);
			}
			F() {
				return _.sn(this, c6b, 7);
			}
		});
		var R5b = function(a) {
			return _.mj(a, b6b, 2, _.oj());
		}, M4b = function(a) {
			return _.Yp(a, b6b, 2);
		}, x4b = _.$c(class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			setValue(a, b) {
				return _.Os(this, 2, b6b, a, b);
			}
			getOptions() {
				return _.Z(this, $5b, 3);
			}
			setOptions(a) {
				return _.ln(this, $5b, 3, a);
			}
			F() {
				return _.sn(this, $5b, 3);
			}
		});
		var y4b = _.$c(x5b);
		var $P = Symbol(), C4b = Symbol(), B4b = Symbol(), A4b = Symbol(), I4b = RegExp("_[a-z]?", "g"), J4b = RegExp("[A-Z]", "g"), G4b = String.fromCharCode;
		var L4b = Symbol(), P4b = Symbol();
		_.e6b = {};
		_.e6b.get = _.YP(_.$u, "google.protobuf.Any", 2, "[null,[[\"type_url\",null,1,1,9,null,null,[2]],[\"value\",null,2,1,12,null,null,[1]]]]");
		_.f6b = {};
		_.f6b.get = _.YP(_.kp, "google.protobuf.Duration", 2, "[null,[[\"seconds\",null,1,1,3],[\"nanos\",null,2,1,5]]]");
		var g6b = {};
		g6b.get = _.YP(_.Cy, "google.protobuf.FieldMask", 2, "[null,[[\"paths\",null,1,3,9]]]");
		var k5b = _.ZP("google.protobuf.NullValue", "[null,[[\"NULL_VALUE\",0]]]");
		var h6b, i6b;
		h6b = {};
		_.qQ = {};
		i6b = {};
		_.gQ = {};
		i6b.get = _.YP(void 0, "google.protobuf.Struct.FieldsEntry", 2, "[null,[[\"key\",null,1,1,9],[\"value\",null,2,1,11,\".google.protobuf.Value\"]],null,null,null,null,[null,null,null,null,null,null,1]]", _.gQ.get);
		_.qQ.get = _.YP(_.no, "google.protobuf.Struct", 2, "[null,[[\"fields\",null,1,3,11,\".google.protobuf.Struct.FieldsEntry\"]]]", i6b.get);
		_.gQ.get = _.YP(_.qo, "google.protobuf.Value", 2, "[null,[[\"null_value\",null,1,1,14,\".google.protobuf.NullValue\",null,null,0],[\"number_value\",null,2,1,1,null,null,null,0],[\"string_value\",null,3,1,9,null,null,null,0],[\"bool_value\",null,4,1,8,null,null,null,0],[\"struct_value\",null,5,1,11,\".google.protobuf.Struct\",null,null,0],[\"list_value\",null,6,1,11,\".google.protobuf.ListValue\",null,null,0]],null,null,null,null,null,[[\"kind\"]]]", h6b.get, _.qQ.get, k5b);
		h6b.get = _.YP(_.uo, "google.protobuf.ListValue", 2, "[null,[[\"values\",null,1,3,11,\".google.protobuf.Value\"]]]", _.gQ.get);
		_.j6b = {};
		_.j6b.get = _.YP(_.Zo, "google.protobuf.Timestamp", 2, "[null,[[\"seconds\",null,1,1,3],[\"nanos\",null,2,1,5]]]");
		var k6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Pm(this, 1);
			}
			setValue(a) {
				return _.cq(this, 1, a);
			}
		};
		var l6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.fp(this, 1);
			}
			setValue(a) {
				return _.nt(this, 1, a);
			}
		};
		var m6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Vm(this, 1);
			}
			setValue(a) {
				return _.lt(this, 1, a);
			}
		};
		var n6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Vm(this, 1);
			}
			setValue(a) {
				return _.lt(this, 1, a);
			}
		};
		var o6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.yj(this, 1);
			}
			setValue(a) {
				return _.gt(this, 1, a);
			}
		};
		var p6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Ys(this, 1);
			}
			HAa() {
				return _.$s(this, 1);
			}
			setValue(a) {
				return _.jt(this, 1, a);
			}
		};
		var q6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.l(this, 1);
			}
			setValue(a) {
				return _.Uc(this, 1, a);
			}
		};
		var r6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Xs(this, 1);
			}
			setValue(a) {
				return _.Bc(this, 1, _.Eb(a), 0);
			}
		};
		var s6b = class extends _.h {
			constructor(a) {
				super(a);
			}
			getValue() {
				return _.Zs(this, 1);
			}
			HAa() {
				var a = s4b(_.tn(this, 1, void 0, void 0, _.Vb));
				return a != null ? a : "0";
			}
			setValue(a) {
				return _.Bc(this, 1, a == null ? a : _.Eba(a), "0");
			}
		};
		var t6b = {};
		t6b.get = _.YP(k6b, "google.protobuf.BoolValue", 2, "[null,[[\"value\",null,1,1,8]]]");
		var u6b = {};
		u6b.get = _.YP(l6b, "google.protobuf.BytesValue", 2, "[null,[[\"value\",null,1,1,12,null,null,[1]]]]");
		var v6b = {};
		v6b.get = _.YP(m6b, "google.protobuf.DoubleValue", 2, "[null,[[\"value\",null,1,1,1]]]");
		var w6b = {};
		w6b.get = _.YP(n6b, "google.protobuf.FloatValue", 2, "[null,[[\"value\",null,1,1,2]]]");
		var x6b = {};
		x6b.get = _.YP(o6b, "google.protobuf.Int32Value", 2, "[null,[[\"value\",null,1,1,5]]]");
		var y6b = {};
		y6b.get = _.YP(p6b, "google.protobuf.Int64Value", 2, "[null,[[\"value\",null,1,1,3]]]");
		var z6b = {};
		z6b.get = _.YP(q6b, "google.protobuf.StringValue", 2, "[null,[[\"value\",null,1,1,9]]]");
		var A6b = {};
		A6b.get = _.YP(r6b, "google.protobuf.UInt32Value", 2, "[null,[[\"value\",null,1,1,13]]]");
		var B6b = {};
		B6b.get = _.YP(s6b, "google.protobuf.UInt64Value", 2, "[null,[[\"value\",null,1,1,4]]]");
		var V4b = Symbol(), pQ = Symbol(), X4b = Symbol(), dQ = Symbol(), b5b = Symbol(), d5b = Symbol(), oQ = Symbol(), mQ = Symbol(), f5b = Symbol(), R4b = Symbol(), nQ = Symbol(), Z4b = Symbol(), w5b = Symbol(), T4b = Symbol(), jQ = Symbol(), i5b = Symbol(), u5b = Object.freeze([]), v5b = Object.freeze({}), y5b = Object.freeze({ case: void 0 }), h5b = Symbol();
		Object.freeze([]);
		Object.freeze([oQ]);
		Object.freeze([pQ, oQ]);
		Object.freeze([
			oQ,
			f5b,
			mQ,
			dQ
		]);
		Object.freeze([
			pQ,
			oQ,
			mQ,
			dQ
		]);
		Object.freeze([
			nQ,
			w5b,
			T4b,
			X4b,
			pQ,
			Z4b,
			jQ,
			mQ,
			R4b,
			b5b,
			d5b,
			dQ
		]);
		Object.freeze([
			pQ,
			dQ,
			V4b
		]);
		var $4b = new Set([
			"google.protobuf.Timestamp",
			"google.protobuf.Duration",
			"google.protobuf.FieldMask",
			"google.protobuf.Value",
			"google.protobuf.ListValue"
		]), z5b = Symbol(), C5b = Symbol(), M5b = RegExp("^-?[0-9]+([Ee][+-]?[0-9]+)?$"), l5b = _.kb((a) => {
			if (a == null) return !1;
			switch (typeof a) {
				case "number":
				case "boolean":
				case "string":
				case "bigint": return !0;
				default: return a instanceof _.bb || a instanceof _.h;
			}
		}), hQ = _.kb((a) => a != null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object), lQ = new Map();
		_.ec(_.e6b.get) && lQ.set("google.protobuf.Any", {
			Ks(a, b) {
				a = _.jb(a, _.Zn(_.$u));
				if (U4b(b)) {
					b = _.tn(a, 2);
					if (b instanceof Uint8Array) b = new Uint8Array(b);
					else if (b instanceof _.bb) b = _.ep(b);
					else if (typeof b === "string") b = _.ep(_.ab(b));
					else if (b == null) b = new Uint8Array(0);
					else throw Error("Pf");
					return {
						$typeName: "google.protobuf.Any",
						typeUrl: _.l(a, 1),
						value: b
					};
				}
				if (_.l(a, 1) === "" && _.tn(a, 2) == null) return {};
				var c = a.getTypeName(), d = w4b(c);
				d == null && TP();
				var e = _.B5b(d);
				e == null && TP();
				var f = _.tn(a, 2);
				(typeof f === "string" || f instanceof _.bb || f instanceof Uint8Array) && TP();
				d = _.VP(kQ(d));
				a.bla() ? (d = t4b(d), d = _.Vc(a, d, c)) : d = _.Vc(a, d, c);
				b = _.n5b(b, e, d);
				b == null && TP();
				if (lQ.has(c)) return {
					"@type": _.l(a, 1),
					value: b
				};
				b = _.jb(b, hQ);
				b["@type"] = _.l(a, 1);
				return b;
			},
			Ls(a, b) {
				a = _.jb(a, hQ);
				if (U4b(b)) {
					b = a.typeUrl;
					var c = a.value;
					c = c instanceof Uint8Array ? new Uint8Array(c) : new Uint8Array(0);
					if (!b && c.length === 0) return Z5b();
					b = b ? b.substring(b.lastIndexOf("/") + 1) : "";
					return _.rp(new _.$u().pack(c, b));
				}
				var { "@type": d } = a;
				if (d == null) {
					for (c in a) c !== "@type" && TP();
					return Z5b();
				}
				_.ib(d, _.mb);
				d.indexOf("type.googleapis.com/") === 0 || TP();
				c = d.substring(20);
				d = w4b(c);
				d == null && TP();
				d = _.B5b(d);
				d == null && TP();
				var e = lQ.has(c);
				a = e ? a.value : Object.assign({}, a);
				e || delete _.jb(a, hQ)["@type"];
				b = g5b(b, d, a);
				b == null && TP();
				a = new _.$u();
				d = b.constructor;
				b.oPb = void 0;
				_.Zda(a, c, "type.googleapis.com");
				_.ln(a, d, 2, b, void 0);
				return _.oc(a);
			}
		});
		_.ec(t6b.get) && lQ.set("google.protobuf.BoolValue", {
			Ks(a) {
				return _.jb(a, _.Zn(k6b)).getValue();
			},
			Ls(a) {
				return _.rp(new k6b().setValue(_.jb(a, _.iba)));
			}
		});
		_.ec(u6b.get) && lQ.set("google.protobuf.BytesValue", {
			Ks(a, b) {
				a = _.jb(a, _.Zn(l6b)).getValue();
				return cQ(b) ? _.ep(a) : _.lc(a);
			},
			Ls(a) {
				a = _.jb(a, _.r4b(_.mb, q4b(Uint8Array)));
				return _.rp(new l6b().setValue(K5b(a, 1)));
			}
		});
		_.ec(w6b.get) && lQ.set("google.protobuf.FloatValue", {
			Ks(a) {
				return _.jb(a, _.Zn(n6b)).getValue();
			},
			Ls(a) {
				return _.rp(new n6b().setValue(I5b(a, 1)));
			}
		});
		_.ec(v6b.get) && lQ.set("google.protobuf.DoubleValue", {
			Ks(a) {
				return _.jb(a, _.Zn(m6b)).getValue();
			},
			Ls(a) {
				return _.rp(new m6b().setValue(H5b(a, 1)));
			}
		});
		_.ec(x6b.get) && lQ.set("google.protobuf.Int32Value", {
			Ks(a) {
				return _.jb(a, _.Zn(o6b)).getValue();
			},
			Ls(a) {
				return _.rp(new o6b().setValue(O5b(a, 1)));
			}
		});
		_.ec(y6b.get) && lQ.set("google.protobuf.Int64Value", {
			Ks(a) {
				return _.jb(a, _.Zn(p6b)).HAa();
			},
			Ls(a) {
				return _.rp(new p6b().setValue(Q5b(a, 1)));
			}
		});
		_.ec(A6b.get) && lQ.set("google.protobuf.UInt32Value", {
			Ks(a) {
				return _.jb(a, _.Zn(r6b)).getValue();
			},
			Ls(a) {
				return _.rp(new r6b().setValue(N5b(a, 1)));
			}
		});
		_.ec(B6b.get) && lQ.set("google.protobuf.UInt64Value", {
			Ks(a) {
				return _.jb(a, _.Zn(s6b)).HAa();
			},
			Ls(a) {
				return _.rp(new s6b().setValue(P5b(a, 1)));
			}
		});
		_.ec(z6b.get) && lQ.set("google.protobuf.StringValue", {
			Ks(a) {
				return _.jb(a, _.Zn(q6b)).getValue();
			},
			Ls(a) {
				return _.rp(new q6b().setValue(J5b(a, 1)));
			}
		});
		var C6b = RegExp("(?:|0{3}|0{6}|0{9})$");
		_.ec(_.f6b.get) && lQ.set("google.protobuf.Duration", {
			Ks(a) {
				var b = _.jb(a, _.Zn(_.kp)), c = b.getSeconds();
				a = b.Cl();
				var d = Number(c);
				if (S5b(d, a)) return c = (Math.abs(a) / 1e9).toFixed(9).substring(2), c = c.replace(C6b, ""), a = (d < 0 || a < 0 ? "-" : "") + `${Math.abs(d)}`, c.length > 0 && (a += `.${c}`), a + "s";
			},
			rLa(a, b) {
				var c = _.jb(a, _.Zn(_.kp)), d = c.getSeconds();
				a = c.Cl();
				Y4b(b) && _.Pa() && (d = BigInt(d));
				return {
					$typeName: "google.protobuf.Duration",
					seconds: d,
					nanos: a
				};
			},
			Ls(a) {
				var b;
				if (b = typeof a === "string") b = a, b = b.lastIndexOf("s") === Math.max(0, b.length - 1);
				b || TP();
				a = a.substring(0, a.length - 1);
				b = _.jb(a, _.mb).split(".");
				b.length > 2 && TP();
				var c = a[0] === "-";
				a = Number(b[0]);
				b = b[1];
				b = b == null ? 0 : Number(b + "0".repeat(9 - b.length)) * (c ? -1 : 1);
				if (S5b(a, b)) return a = new _.kp().setSeconds(a), a = _.gt(a, 2, b), _.oc(a);
			}
		});
		var D6b = RegExp("((0){3})+$", "gi"), E6b = RegExp("\\.[0-9]{3}Z", "gi"), F6b = RegExp("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})(\\.\\d{1,9})?([+-]\\d{2}:\\d{2}|Z)$");
		_.ec(_.j6b.get) && lQ.set("google.protobuf.Timestamp", {
			Ks(a) {
				var b = _.jb(a, _.Zn(_.Zo)), c = b.getSeconds();
				a = b.Cl();
				c = Number(c);
				if (T5b(c, a)) {
					var d = String(a).padStart(9, "0").replace(D6b, "");
					return new Date(c * 1e3 + Math.trunc(a / 1e9)).toISOString().replace(E6b, (d.length > 0 ? `.${d}` : "") + "Z");
				}
			},
			rLa(a, b) {
				var c = _.jb(a, _.Zn(_.Zo)), d = c.getSeconds();
				a = c.Cl();
				Y4b(b) && _.Pa() && (d = BigInt(d));
				return {
					$typeName: "google.protobuf.Timestamp",
					seconds: d,
					nanos: a
				};
			},
			Ls(a) {
				typeof a === "string" && F6b.test(a) || TP();
				var b = new Date(a).getTime() / 1e3;
				a = a.match(F6b);
				b = Math.floor(b);
				a = Math.trunc(a[2] != null ? Number(a[2]) * 1e9 : 0);
				if (T5b(b, a)) return _.rp(_.fq(new _.Zo().setSeconds(b), a));
			}
		});
		_.ec(g6b.get) && lQ.set("google.protobuf.FieldMask", {
			Ks(a) {
				return _.jb(a, _.Zn(_.Cy)).sja().map((b) => {
					var c = b.split(".").map(bQ).join("."), d = c.split(".").map(K4b).join(".");
					UP(b === d);
					return c;
				}).join(",");
			},
			Ls(a) {
				return _.rp(_.bbb(new _.Cy(), _.jb(a, _.mb).split(",").filter((b) => {
					UP(!b.includes("_"));
					return b.length > 0;
				}).map((b) => b.split(".").map(K4b).join("."))));
			}
		});
		_.ec(_.qQ.get) && lQ.set("google.protobuf.Struct", {
			Ks(a) {
				return _.jb(a, _.Zn(_.no)).ao();
			},
			Ls(a) {
				return _.rp(_.X5b(_.jb(a, hQ)));
			}
		});
		_.ec(_.gQ.get) && lQ.set("google.protobuf.Value", {
			Ks(a) {
				a = _.jb(a, _.Zn(_.qo)).ao();
				typeof a !== "number" || Number.isFinite(a) || TP();
				return a;
			},
			Ls(a) {
				return _.rp(W5b(a));
			}
		});
		_.ec(h6b.get) && lQ.set("google.protobuf.ListValue", {
			Ks(a) {
				return _.jb(a, _.Zn(_.uo)).ao();
			},
			Ls(a) {
				return _.rp(Y5b(_.jb(a, _.APa)));
			}
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
		var vMd = class {
			constructor() {
				this.S = _.Dk;
				this.ve = { Shb: 311858 };
				this.Wa = _.m(_.kC);
				this.dialog = _.m(_.rC);
				this.Za = _.m(_.Iy);
				this.xa = _.M(null);
				this.Eo = this.Za.je;
				this.iia = _.W(() => this.Za.Sd().filter((a) => {
					var b;
					return !((b = _.au(a)) == null ? 0 : b.gk());
				}));
				_.Gy(this.Za);
			}
			Zk(a) {
				this.xa.set(a);
			}
		};
		vMd.J = function(a) {
			return new (a || vMd)();
		};
		vMd.ka = _.u({
			type: vMd,
			da: [["ms-billing-setup-project-selector-dialog"]],
			ha: 12,
			ia: 11,
			la: () => [
				" Select project �#2��/#2�",
				" Select a project to set up billing ",
				" Cancel ",
				" Set up billing ",
				[1, "shared-dialog-header"],
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
					"iconName"
				],
				[1, "body-text"],
				[
					3,
					"onProjectSelectionChange",
					"showSelectorLabel",
					"projectOptions",
					"selectedProject",
					"isLoading",
					"showImportProjectOption",
					"showCreateProjectOption"
				],
				["align", "end"],
				"variant borderless ms-button  matDialogClose ".split(" "),
				[
					"ms-button",
					"",
					3,
					"click",
					"disabled",
					"ve",
					"veClick",
					"veImpression"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "h2", 4), _.Kh(1, 0), _.I(2, "button", 5), _.Lh(), _.H(), _.F(3, "mat-dialog-content")(4, "p", 6), _.Mh(5, 1), _.H(), _.F(6, "ms-project-selector", 7), _.J("onProjectSelectionChange", function(c) {
					return b.Zk(c);
				}), _.H()(), _.F(7, "mat-dialog-actions", 8)(8, "button", 9), _.Mh(9, 2), _.H(), _.F(10, "button", 10), _.J("click", function() {
					var c = b.xa();
					c && (b.dialog.open(_.MG, {
						id: "oaas-dialog",
						data: { st: c }
					}), b.Wa.close());
				}), _.Mh(11, 3), _.H()());
				a & 2 && (_.y(2), _.E("iconName", b.S.ac), _.y(4), _.E("showSelectorLabel", !1)("projectOptions", b.iia())("selectedProject", b.xa())("isLoading", b.Eo())("showImportProjectOption", !0)("showCreateProjectOption", !0), _.y(4), _.E("disabled", !b.xa())("ve", b.ve.Shb)("veClick", !0)("veImpression", !0));
			},
			dependencies: [
				_.Yy,
				_.xC,
				_.sC,
				_.wC,
				_.vC,
				_.xE,
				_.Cz,
				_.Bz
			],
			styles: [".body-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text-var);margin-bottom:12px}"]
		});
		var wMd;
		wMd = function(a, b) {
			if (b) return a.Za.Sd().find((c) => {
				var d;
				return ((d = _.au(c)) == null ? void 0 : d.gk()) === b;
			});
		};
		_.y6 = class {
			constructor() {
				this.dialog = _.m(_.rC);
				this.A = _.m(_.Qu);
				this.Za = _.m(_.Iy);
				this.Hb = _.Nn(this.A.Oe);
			}
			n9(a) {
				a = a.ah();
				return ![
					20,
					0,
					1
				].includes(a);
			}
			fC(a = "", b) {
				if (!this.Hb) return (a = wMd(this, a)) ? this.dialog.open(_.MG, {
					id: "oaas-dialog",
					data: {
						st: a,
						experienceId: b
					}
				}) : this.dialog.open(vMd, { id: "billing-setup-project-selector-dialog" });
			}
		};
		_.y6.J = function(a) {
			return new (a || _.y6)();
		};
		_.y6.sa = _.Cd({
			token: _.y6,
			factory: _.y6.J,
			wa: "root"
		});
		var wCe, ACe, CCe, DCe, ECe, FCe, xCe, yCe, zCe, ICe, KCe, LCe, MCe, NCe, OCe, HCe, GCe, JCe, PCe, QCe, RCe;
		wCe = function(a) {
			var b, c = !1, d = null, e = null, f = () => {
				b = void 0;
				c && (c = !1, g());
			}, g = () => {
				b = setTimeout(f, 16);
				var k = d, p = e;
				e = d = null;
				k && a.apply(p, k);
			};
			_.m(_.ag).Hc(() => {
				b !== void 0 && (clearTimeout(b), b = void 0);
				c = !1;
				e = d = null;
			});
			return function(...k) {
				d = k;
				e = this;
				b ? c = !0 : g();
			};
		};
		ACe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 7)(1, "button", 8, 2);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K();
					return _.t(xCe(e, d.id));
				})("dragstart", function(d) {
					var e = _.q(c).V, f = _.K();
					return _.t(f.aF(d, e.id));
				})("drag", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.PFa(d));
				})("dragend", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.sx(d));
				})("dragover", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.kT(d));
				})("touchstart", function(d) {
					var e = _.q(c).V, f = _.K();
					return _.t(f.uGa(d, e.id));
				})("touchmove", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.tGa(d));
				})("touchend", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.sGa(d));
				});
				_.I(3, "div", 9);
				_.H()();
			}
			a & 2 && (a = b.V, b = _.K(), _.pi("top", yCe(b, a.id) + "%"), _.y(), _.E("active", zCe(b, a.id))("matTooltip", a.label)("matTooltipDisabled", b.Sc())("ve", b.ve.epb)("veClick", !0)("veImpression", !0), _.vh("aria-pressed", zCe(b, a.id)), _.wh("aria-label", a.label)("id", "scrollbar-item-" + a.id)("aria-controls", "turn-" + a.id)("draggable", zCe(b, a.id))("data-test-item-id", a.id));
		};
		_.BCe = class extends _.h {
			constructor(a) {
				super(a);
			}
		};
		CCe = ["itemButton"];
		DCe = ["scrollbarTrack"];
		ECe = ["scrollHandle"];
		FCe = (a, b) => b.id;
		xCe = function(a, b) {
			var c = a.Rv().get(b), d = a.Tn();
			if (c && d) {
				a.U.set(!0);
				_.f9(a);
				d.addEventListener("scrollend", () => {
					GCe(a, b);
					a.U.set(!1);
				}, { once: !0 });
				let e = a.items(), f = e.findIndex((g) => g.id === b);
				f === 0 ? d.scrollTo({
					top: 0,
					behavior: "smooth"
				}) : f === e.length - 1 ? d.scrollTo({
					top: d.scrollHeight,
					behavior: "smooth"
				}) : c.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
				requestAnimationFrame(() => {
					GCe(a, b);
				});
				(c = a.document.activeElement) && a.Ga.nativeElement.contains(c) && c.blur();
				d.focus({ preventScroll: !0 });
			} else console.warn(`Element for itemId ${b} not found`);
		};
		yCe = function(a, b) {
			var c;
			return (c = a.aa().get(b)) != null ? c : 0;
		};
		zCe = function(a, b) {
			return a.A() === b;
		};
		ICe = function(a) {
			var b = null, c = a.Tn();
			if (c) {
				if (a.Zw()) {
					var d, e = (d = a.xoa()) == null ? void 0 : d.nativeElement, f, g = (f = a.fba()) == null ? void 0 : f.nativeElement;
					e && g && (b = e.getBoundingClientRect(), b = HCe(a, b.top + b.height / 2), f = a.Yy(), e = a.OE(), e.length > 0 && (d = e[0].nativeElement.getBoundingClientRect(), e = e[e.length - 1].nativeElement.getBoundingClientRect(), g = g.getBoundingClientRect(), e = e.top + e.height / 2 - g.top, f <= d.top + d.height / 2 - g.top ? b = a.items()[0].id : f + a.KH() >= e && (b = a.items()[a.items().length - 1].id)));
				} else {
					let k = a.items();
					if (k.length === 0) {
						a.A.set(null);
						return;
					}
					if (c.scrollTop <= 0) {
						a.A.set(k[0].id);
						return;
					}
					if (c.scrollHeight - c.scrollTop - c.clientHeight < 1) {
						a.A.set(k[k.length - 1].id);
						return;
					}
					f = Infinity;
					d = null;
					c = c.getBoundingClientRect();
					let p = a.Rv(), r = new Map();
					for (e of k) {
						let v = p.get(e.id);
						v && r.set(e.id, v.getBoundingClientRect());
					}
					for (g of k) if (e = r.get(g.id)) e.bottom <= c.top && (d = g.id), e.top < c.bottom && e.bottom > c.top && (e = e.top - c.top, e < f && (f = e, b = g.id));
					b || (b = d);
				}
				a.A.set(b);
			}
		};
		_.f9 = function(a) {
			var b = a.Tn(), c, d = (c = a.fba()) == null ? void 0 : c.nativeElement;
			if (b && d) {
				c = b.scrollTop;
				var e = b.scrollHeight;
				b = b.clientHeight;
				if (e <= b) a.KH.set(0), a.Yy.set(0);
				else {
					var f = a.OE();
					if (f.length === 0) a.KH.set(0), a.Yy.set(0);
					else if (d = d.getBoundingClientRect(), f.length === 1) {
						var g = Math.max(b / e * d.height, 80);
						g = Math.min(g, d.height);
						a.KH.set(g);
						a.Zw() || a.U() || (f = f[0].nativeElement.getBoundingClientRect(), f = f.top + f.height / 2 - d.top, d = d.height - g, d > f ? (e -= b, a.Yy.set(Math.max(f, f + (e > 0 ? c / e : 0) * (d - f)))) : a.Yy.set(f));
					} else {
						g = f[0].nativeElement.getBoundingClientRect();
						let k = f[f.length - 1].nativeElement.getBoundingClientRect();
						f = g.top + g.height / 2 - d.top;
						d = k.top + k.height / 2 - d.top - f;
						g = Math.max(b / e * d, 80);
						a.KH.set(g);
						a.Zw() || a.U() || (e -= b, b = d - g, d = f + b, g = (g = a.A()) ? JCe(a, g) : null, a.Yy.set(Math.max(f, Math.min(g !== null ? g : f + (e > 0 ? c / e : 0) * b, d))));
					}
				}
			} else a.KH.set(0), a.Yy.set(0);
		};
		KCe = function(a) {
			var b = a.Ga.nativeElement;
			a.lDa.set(b.scrollTop === 0);
			var c = b.scrollHeight > b.clientHeight;
			a.mk.set(c && b.scrollHeight - b.scrollTop - b.clientHeight < 1);
			c || (a.lDa.set(!0), a.mk.set(!0));
		};
		LCe = function(a) {
			var b = new Map(), c = a.Tn();
			if (c) {
				var d = c.scrollHeight, e = c.scrollTop;
				if (d <= c.clientHeight) a.items().forEach((p) => {
					b.set(p.id, 0);
				});
				else {
					var f = a.Rv(), g = c.getBoundingClientRect(), k = new Map();
					a.items().forEach((p) => {
						var r = f.get(p.id);
						r && k.set(p.id, r.getBoundingClientRect());
					});
					a.items().forEach((p) => {
						var r = k.get(p.id);
						r ? b.set(p.id, Math.max(0, Math.min(100, (r.top - g.top + e) / d * 100))) : b.set(p.id, 0);
					});
				}
			}
			a.aa.set(b);
		};
		MCe = function(a, b) {
			var c = a.Ga.nativeElement, d;
			if (a = (d = a.OE().find((e) => e.nativeElement.id === `scrollbar-item-${b}`)) == null ? void 0 : d.nativeElement) d = c.getBoundingClientRect(), a = a.getBoundingClientRect(), c.scrollTo({
				top: c.scrollTop + (a.top - d.top + a.height / 2 - d.height / 2),
				behavior: "smooth"
			});
		};
		NCe = function(a) {
			var b = a.Tn();
			if (b) {
				if (!a.F || a.F.root !== b) {
					let d;
					(d = a.F) == null || d.disconnect();
					a.F = new IntersectionObserver(() => {
						a.X();
					}, {
						root: b,
						threshold: 0
					});
				}
				var c = new Set();
				a.items().forEach((d) => {
					if (d = a.Rv().get(d.id)) c.add(d), a.H.has(d) || (a.F.observe(d), a.H.add(d));
				});
				a.H.forEach((d) => {
					c.has(d) || (a.F.unobserve(d), a.H.delete(d));
				});
			} else {
				let d;
				(d = a.F) == null || d.disconnect();
				a.H.clear();
			}
		};
		OCe = function(a) {
			var b = a.Tn();
			a.I && (a.I(), a.I = null);
			b && (a.I = a.Dc.listen(b, "scroll", a.Fa));
		};
		HCe = function(a, b) {
			a = a.OE();
			if (a.length === 0) return null;
			var c = null, d = Infinity;
			a.forEach((e) => {
				e = e.nativeElement;
				var f = e.querySelector(".items-scrollbar-dot");
				f && (f = f.getBoundingClientRect(), f = Math.abs(b - (f.top + f.height / 2)), f < d && (d = f, c = e.id.replace("scrollbar-item-", "")));
			});
			return c;
		};
		GCe = function(a, b) {
			b = JCe(a, b);
			b !== null && a.Yy.set(b);
		};
		JCe = function(a, b) {
			var c, d = (c = a.fba()) == null ? void 0 : c.nativeElement, e;
			c = (e = a.OE().find((g) => g.nativeElement.id === `scrollbar-item-${b}`)) == null ? void 0 : e.nativeElement;
			e = a.KH();
			if (!d || !c || e === 0) return null;
			var f = a.Ga.nativeElement.getBoundingClientRect();
			c = c.getBoundingClientRect();
			if (!(c.top >= f.top && c.bottom <= f.bottom)) return null;
			d = d.getBoundingClientRect();
			d = c.top + c.height / 2 - d.top;
			a = a.items();
			c = a.findIndex((g) => g.id === b);
			return c === 0 ? d : c === a.length - 1 ? d - e : d - e / 2;
		};
		PCe = function(a, b) {
			a = a.Ga.nativeElement;
			var c = a.getBoundingClientRect(), d = b.getBoundingClientRect();
			b = d.top;
			d = d.bottom;
			var e = c.top + 60;
			c = c.bottom - 60;
			b < e ? a.scrollTop -= e - b : d > c && (a.scrollTop += d - c);
		};
		QCe = function(a, b) {
			if (a.Zw()) {
				var c = a.Tn(), d, e = (d = a.fba()) == null ? void 0 : d.nativeElement;
				if (c && e) {
					var f = a.OE();
					d = a.items();
					if (f.length !== 0 && d.length !== 0) {
						var g = e.getBoundingClientRect(), k = a.KH();
						e = c.scrollHeight;
						d = c.clientHeight;
						if (f.length === 1) {
							f = f[0].nativeElement.getBoundingClientRect();
							f = f.top + f.height / 2 - g.top;
							k = g.height - k;
							if (k <= f) {
								a.Yy.set(f);
								c.scrollTop = 0;
								return;
							}
							b = Math.max(f, Math.min(b - g.top - a.Ija, k));
							a.Yy.set(b);
							g = k - f;
							c.scrollTop = (g > 0 ? (b - f) / g : 0) * (e - d);
						} else {
							let p = f[0].nativeElement.getBoundingClientRect(), r = f[f.length - 1].nativeElement.getBoundingClientRect();
							f = p.top + p.height / 2 - g.top;
							k = r.top + r.height / 2 - g.top - k;
							b = Math.max(f, Math.min(b - g.top - a.Ija, k));
							a.Yy.set(b);
							g = k - f;
							g = g > 0 ? (b - f) / g : 0;
							b <= f ? g = 0 : b >= k && (g = 1);
							c.scrollTop = g * (e - d);
						}
						ICe(a);
					}
				}
			}
		};
		RCe = function(a) {
			a.Zw() && (a.Zw.set(!1), a.document.body.style.cursor = "");
		};
		_.g9 = class {
			constructor() {
				this.document = _.m(_.Xk);
				this.Dc = _.m(_.cm);
				this.Ga = _.m(_.Jf);
				this.ve = { epb: 273488 };
				this.OE = _.hi();
				this.fba = _.Ni("scrollbarTrack");
				this.xoa = _.Ni("scrollHandle");
				this.items = _.Li.required();
				this.Tn = _.Li.required();
				this.Rv = _.Li(new Map());
				this.oI = _.V(!1);
				this.A = _.M(null);
				this.F = null;
				this.H = new Set();
				this.na = this.ma = this.oa = this.fa = this.I = null;
				this.lDa = _.M(!0);
				this.mk = _.M(!1);
				this.Sc = _.M(!1);
				this.KH = _.M(0);
				this.Yy = _.M(0);
				this.Zw = _.M(!1);
				this.Ija = 0;
				this.U = _.M(!1);
				this.aa = _.M(new Map());
				this.R = null;
				this.X = _.vp(() => {
					ICe(this);
				}, _.m(_.ag), 50);
				this.ea = wCe((a) => {
					if (this.Sc() && a !== 0) {
						var b = this.Tn();
						if (b && (a = HCe(this, a)) && (a = this.Rv().get(a))) {
							let c = b.getBoundingClientRect();
							a = a.getBoundingClientRect().top - c.top;
							b.scrollTop += a;
							ICe(this);
						}
					}
				});
				this.Fa = wCe(() => {
					_.f9(this);
					this.X();
				});
				this.fa = this.Dc.listen(this.document, "mousemove", this.ta.bind(this));
				this.oa = this.Dc.listen(this.document, "touchmove", this.Ea.bind(this));
				this.ma = this.Dc.listen(this.document, "mouseup", this.za.bind(this));
				this.na = this.Dc.listen(this.document, "touchend", this.Aa.bind(this));
				_.Fk([this.Tn, this.items], (a) => {
					NCe(this);
					OCe(this);
					KCe(this);
					_.f9(this);
					var b = this.Tn(), c;
					(c = this.R) == null || c.disconnect();
					b && (this.R = new ResizeObserver(() => {
						LCe(this);
						_.f9(this);
					}), this.R.observe(b));
					Promise.resolve().then(() => {
						LCe(this);
					});
					a(() => {
						var d;
						(d = this.R) == null || d.disconnect();
					});
				});
				_.Fk([this.A], () => {
					var a = this.A();
					a && MCe(this, a);
				});
				_.Fk([this.A], () => {
					_.f9(this);
				});
			}
			Ba() {
				var a;
				(a = this.F) == null || a.disconnect();
				this.H.clear();
				var b;
				(b = this.I) == null || b.call(this);
				var c;
				(c = this.fa) == null || c.call(this);
				var d;
				(d = this.oa) == null || d.call(this);
				var e;
				(e = this.ma) == null || e.call(this);
				var f;
				(f = this.na) == null || f.call(this);
			}
			TFa(a) {
				_.f9(this);
				a.target === this.Ga.nativeElement && this.Yr("active");
			}
			Yr(a) {
				var b = this.OE();
				if (b.length !== 0) {
					if (a === "first") var c = b[0];
					else if (a === "last") c = b[b.length - 1];
					else {
						let d = this.A();
						d && (a = this.items().findIndex((e) => e.id === d), a !== -1 && (c = b[a]));
						c || (c = b[0]);
					}
					c && (c.nativeElement.focus({ preventScroll: !0 }), PCe(this, c.nativeElement), _.f9(this));
				}
			}
			VFa(a) {
				if (a.key === "Escape") {
					var b = this.document.activeElement;
					if (b && this.Ga.nativeElement.contains(b)) {
						var c;
						(c = this.Tn()) == null || c.focus({ preventScroll: !0 });
						a.preventDefault();
						a.stopPropagation();
					}
				} else {
					if ((a.key === "Enter" || a.key === " ") && (b = this.document.activeElement) && b.tagName === "BUTTON" && this.Ga.nativeElement.contains(b)) {
						xCe(this, b.id.replace("scrollbar-item-", ""));
						a.preventDefault();
						return;
					}
					if (a.key === "ArrowUp" || a.key === "ArrowDown") {
						if (a.preventDefault(), b = this.items(), b.length !== 0 && (c = this.OE().map((e) => e.nativeElement).indexOf(this.document.activeElement), c !== -1)) {
							var d = 0;
							d = a.key === "ArrowUp" ? c > 0 ? c - 1 : b.length - 1 : c < b.length - 1 ? c + 1 : 0;
							if (a = this.OE()[d]) a.nativeElement.focus({ preventScroll: !0 }), PCe(this, a.nativeElement);
						}
					}
				}
			}
			aF(a, b) {
				zCe(this, b) ? (this.Sc.set(!0), this.Ga.nativeElement.classList.add("dragging")) : a.preventDefault();
			}
			kT(a) {
				a.preventDefault();
				a.dataTransfer && (a.dataTransfer.dropEffect = "move");
			}
			PFa(a) {
				a.preventDefault();
				this.ea(a.clientY);
			}
			sx(a) {
				this.Sc() && (this.Sc.set(!1), this.Ga.nativeElement.classList.remove("dragging"), (a = HCe(this, a.clientY)) && xCe(this, a));
			}
			uGa(a, b) {
				zCe(this, b) && (this.Sc.set(!0), this.Ga.nativeElement.classList.add("dragging"), a.preventDefault());
			}
			tGa(a) {
				this.Sc() && (a.preventDefault(), this.ea(a.touches[0].clientY));
			}
			sGa(a) {
				this.Sc() && (this.Sc.set(!1), this.Ga.nativeElement.classList.remove("dragging"), a.preventDefault(), (a = HCe(this, a.changedTouches[0].clientY)) && xCe(this, a));
			}
			ta(a) {
				this.Zw() && (a.preventDefault(), QCe(this, a.clientY));
			}
			Ea(a) {
				this.Zw() && a.touches.length === 1 && (a.preventDefault(), QCe(this, a.touches[0].clientY));
			}
			za(a) {
				this.Zw() && a.button === 0 && RCe(this);
			}
			Aa() {
				this.Zw() && RCe(this);
			}
		};
		_.g9.J = function(a) {
			return new (a || _.g9)();
		};
		_.g9.ka = _.u({
			type: _.g9,
			da: [["ms-items-scrollbar"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.OE, CCe, 5)(b.fba, DCe, 5)(b.xoa, ECe, 5);
				a & 2 && _.ki(3);
			},
			eb: "role;toolbar;aria-orientation;vertical;aria-label;Conversation turn navigation".split(";"),
			Ua: 13,
			Ja: function(a, b) {
				a & 1 && _.J("scroll", function() {
					return KCe(b);
				})("keydown", function(c) {
					return b.VFa(c);
				})("mouseenter", function() {
					_.f9(b);
				})("focusin", function(c) {
					return b.TFa(c);
				});
				a & 2 && (_.wh("tabindex", b.items().length > 0 ? 0 : -1), _.pi("--total-items", b.items().length), _.P("multiple-items", b.items().length > 1)("is-scrolled-top", b.lDa())("is-scrolled-bottom", b.mk())("handle-dragging", b.Zw())("user-scrolling", b.oI()));
			},
			inputs: {
				items: [1, "items"],
				Tn: [1, "scrollableElement"],
				Rv: [1, "turnElements"],
				oI: [1, "isScrolling"]
			},
			ha: 7,
			ia: 4,
			la: [
				["scrollbarTrack", ""],
				["scrollHandle", ""],
				["itemButton", ""],
				[1, "scrollbar-track"],
				[1, "scrollbar-line"],
				[
					1,
					"scrollbar-handle",
					3,
					"mousedown",
					"touchstart"
				],
				[
					1,
					"items-scrollbar-item",
					3,
					"top"
				],
				[1, "items-scrollbar-item"],
				[
					"ms-button",
					"",
					"size",
					"small",
					"variant",
					"icon-borderless",
					"matTooltipPosition",
					"left",
					"matTooltipTouchGestures",
					"on",
					"tabindex",
					"-1",
					3,
					"click",
					"dragstart",
					"drag",
					"dragend",
					"dragover",
					"touchstart",
					"touchmove",
					"touchend",
					"active",
					"matTooltip",
					"matTooltipDisabled",
					"ve",
					"veClick",
					"veImpression",
					"aria-pressed"
				],
				[1, "items-scrollbar-dot"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 3, 0), _.I(2, "div", 4), _.F(3, "div", 5, 1), _.J("mousedown", function(c) {
					if (c.button === 0) {
						c.preventDefault();
						b.Zw.set(!0);
						var d, e = (d = b.xoa()) == null ? void 0 : d.nativeElement;
						e && (b.Ija = c.clientY - e.getBoundingClientRect().top, b.document.body.style.cursor = "grabbing");
					}
				})("touchstart", function(c) {
					if (c.touches.length === 1) {
						c.preventDefault();
						b.Zw.set(!0);
						var d, e = (d = b.xoa()) == null ? void 0 : d.nativeElement;
						e && (b.Ija = c.touches[0].clientY - e.getBoundingClientRect().top);
					}
				}), _.H(), _.Ah(5, ACe, 4, 14, "div", 6, FCe), _.H());
				a & 2 && (_.y(3), _.pi("top", b.Yy() + "px")("height", b.KH() + "px"), _.y(2), _.Bh(b.items()));
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.IC,
				_.HC,
				_.Cz,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{position:absolute;top:0;bottom:0;right:-20px;height:auto;margin:0;padding:0;background-color:transparent;opacity:.6;overflow-y:auto;pointer-events:auto;-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;-ms-overflow-style:none;scrollbar-width:none}.user-scrolling[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover{opacity:1}[_nghost-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]:before{content:\"\";position:-webkit-sticky;position:sticky;top:-8px;left:0;right:0;height:60px;background:-webkit-gradient(linear,left top,left bottom,color-stop(3%,var(--color-v3-surface)),to(transparent));background:-webkit-linear-gradient(top,var(--color-v3-surface) 3%,transparent);background:linear-gradient(to bottom,var(--color-v3-surface) 3%,transparent);z-index:5;display:block;pointer-events:none;margin-bottom:-60px}[_nghost-%COMP%]:after{content:\"\";position:-webkit-sticky;position:sticky;bottom:-8px;left:0;right:0;height:60px;background:-webkit-gradient(linear,left bottom,left top,color-stop(3%,var(--color-v3-surface)),to(transparent));background:-webkit-linear-gradient(bottom,var(--color-v3-surface) 3%,transparent);background:linear-gradient(to top,var(--color-v3-surface) 3%,transparent);z-index:5;display:block;pointer-events:none;margin-top:-60px}.is-scrolled-top[_nghost-%COMP%]:before{display:none}.is-scrolled-bottom[_nghost-%COMP%]:after{display:none}.scrollbar-track[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:28px;min-height:100%}.scrollbar-line[_ngcontent-%COMP%]{position:absolute;top:10px;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1px;background-color:var(--color-v3-outline);pointer-events:none;z-index:0}.scrollbar-handle[_ngcontent-%COMP%]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:8px;min-height:80px;background-color:var(--color-v3-outline-var);border-radius:4px;z-index:1;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.scrollbar-handle[_ngcontent-%COMP%]:hover{background-color:var(--color-v3-text-disable);z-index:3}[_nghost-%COMP%]:not(.handle-dragging)   .scrollbar-handle[_ngcontent-%COMP%]{-webkit-transition:background-color .2s ease-in-out,top .6s ease-in-out;transition:background-color .2s ease-in-out,top .6s ease-in-out}.handle-dragging[_nghost-%COMP%]   .scrollbar-handle[_ngcontent-%COMP%]{background-color:var(--color-v3-text-disable);cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing;z-index:3}.items-scrollbar-item[_ngcontent-%COMP%]{padding:2px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:relative;z-index:2}.items-scrollbar-item[_ngcontent-%COMP%]:has(button.ms-button-active){z-index:4}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:default}.items-scrollbar-item[_ngcontent-%COMP%]   button.ms-button-active[_ngcontent-%COMP%]{cursor:default}.items-scrollbar-item[_ngcontent-%COMP%]   button.ms-button-active[_ngcontent-%COMP%]:active{cursor:default}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .items-scrollbar-dot[_ngcontent-%COMP%]{width:6px;height:10px;border-radius:9999px;background-color:var(--color-v3-text-disable);border:1px solid transparent;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:transparent}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ms-button-active):not(:focus-visible)   .items-scrollbar-dot[_ngcontent-%COMP%]{background-color:var(--color-v3-text-link);-webkit-transform:translate(-50%,-50%) scale(1.25);transform:translate(-50%,-50%) scale(1.25)}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{outline:none}.items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible   .items-scrollbar-dot[_ngcontent-%COMP%]{background-color:var(--color-v3-text-link);-webkit-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5);box-shadow:0 0 0 2px var(--color-v3-button-container-accent)}.items-scrollbar-item[_ngcontent-%COMP%]   button.ms-button-active[_ngcontent-%COMP%]{background-color:transparent!important}.items-scrollbar-item[_ngcontent-%COMP%]   button.ms-button-active[_ngcontent-%COMP%]   .items-scrollbar-dot[_ngcontent-%COMP%]{-webkit-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5);background-color:light-dark(var(--color-v3-text-var),var(--color-v3-text-on-button));border:none;box-shadow:var(--v3-shadow-sm)}.dragging[_nghost-%COMP%]   .items-scrollbar-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{opacity:.5}"]
		});
		var sNe = function(a) {
			a & 1 && (_.F(0, "div", 5), _.R(1, " Please select Good or Bad when providing feedback text. "), _.H());
		}, tNe = function(a) {
			var b = _.M("idle"), c = _.M(), d = _.M(null), e = null, f = 0, g = _.m(_.ag, { optional: !0 });
			g == null || g.Hc(() => {
				e && (e.abort(), e = null);
			});
			return {
				Ut: (k) => _.x(function* () {
					var p = ++f, r = new AbortController();
					e = r;
					b.set("pending");
					d.set(null);
					try {
						let v = a.action(k, { abortSignal: r.signal }), w = new Promise((G, L) => {
							r.signal.addEventListener("abort", () => {
								var N = r.signal.reason;
								L(N instanceof Error ? N : Error(String(N)));
							}, { once: !0 });
						}), D = yield Promise.race([v, w]);
						if (p !== f || (g == null ? 0 : g.destroyed)) return D;
						c.set(D);
						b.set("success");
						return D;
					} catch (v) {
						if (r.signal.aborted) p !== f || (g == null ? 0 : g.destroyed) || b.set("idle");
						else if (p === f && (g == null || !g.destroyed)) throw d.set(v), b.set("error"), v;
					} finally {
						e === r && (e = null);
					}
				}),
				reset: () => {
					e && (e.abort(), e = null);
					f++;
					b.set("idle");
					c.set(void 0);
					d.set(null);
				},
				cancel: () => {
					e && (e.abort(), e = null);
				},
				status: b.asReadonly(),
				value: c.asReadonly(),
				error: d.asReadonly(),
				lI: _.W(() => b() === "pending"),
				yS: _.W(() => b() === "success"),
				isError: _.W(() => b() === "error")
			};
		}, uNe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
			getDisplayName() {
				return _.l(this, 2);
			}
		}, H9 = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, vNe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
		}, wNe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getModel() {
				return _.l(this, 1);
			}
			setModel(a) {
				return _.Uc(this, 1, a);
			}
			getPrompt() {
				return _.Z(this, vNe, 2);
			}
			setPrompt(a) {
				return _.ln(this, vNe, 2, a);
			}
			jc() {
				return _.l(this, 5);
			}
		}, xNe, CNe, DNe, ENe, FNe;
		_.Zq.prototype.nC = _.ca(133, function(a, b, c) {
			return _.$q(this.A, this.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/RecordSessionTurnFeedback", a, b || {}, _.Gab, c);
		});
		_.KF.prototype.nC = _.ca(132, function(a, b) {
			return new _.ef((c) => {
				var d = new AbortController();
				_.$q(this.A, this.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/RecordSessionTurnFeedback", a, b || {}, _.Mrb, { signal: d.signal }).then((e) => {
					c.next(e);
					c.complete();
				}, (e) => {
					c.error(e);
				});
				return () => {
					d.abort();
				};
			});
		});
		_.Lbb.prototype.yAa = _.ca(113, function() {
			return _.Lm(this, 3);
		});
		_.qy.prototype.mja = _.ca(99, function() {
			return _.Pm(this, 3);
		});
		_.Dy.prototype.mja = _.ca(98, function() {
			return _.Pm(this, 2);
		});
		_.py.prototype.rB = _.ca(97, function() {
			return _.Z(this, H9, 6);
		});
		_.zy.prototype.rB = _.ca(96, function() {
			return _.Z(this, H9, 4);
		});
		_.wDa.prototype.rB = _.ca(95, function() {
			return _.Z(this, _.AYc, 4);
		});
		_.Fyb.prototype.rB = _.ca(94, function() {
			return _.Z(this, wNe, 1);
		});
		_.H4a.prototype.TL = _.ca(87, function() {
			return _.Z(this, uNe, 1);
		});
		_.qy.prototype.TL = _.ca(86, function() {
			return _.Z(this, uNe, 1);
		});
		_.Dy.prototype.TL = _.ca(85, function() {
			return _.Z(this, uNe, 1);
		});
		_.Mbb.prototype.TL = _.ca(84, function() {
			return _.Z(this, uNe, 1);
		});
		xNe = function(a) {
			return _.x(function* () {
				var b = `${a.getParent() || ""}-${a.Sf() || ""}`;
				_.l(a, 3) && (b += `-${_.l(a, 3)}`);
				return _.Bv(b);
			});
		};
		_.yNe = function(a, b) {
			return _.Uc(a, 2, b);
		};
		_.zNe = function(a, b) {
			return _.Uc(a, 6, b);
		};
		_.I9 = function(a) {
			return _.uj(a, 3, _.oj());
		};
		_.ANe = function(a, b) {
			return _.Xm(a, 3, b);
		};
		_.BNe = function(a, b) {
			return _.cq(a, 5, b);
		};
		CNe = class extends _.h {
			constructor(a) {
				super(a);
			}
			yAa() {
				return _.Lm(this, 4);
			}
		};
		DNe = function(a, b) {
			return _.Ym(a, 2, b);
		};
		_.J9 = function(a) {
			return _.mj(a, _.ey, 3, _.oj());
		};
		ENe = function(a, b) {
			return _.Zm(a, 1, b);
		};
		FNe = function(a, b, c) {
			({pageSize: f, pageToken: e, filter: d} = {});
			var d, e, f;
			return _.x(function* () {
				var g = new _.vy().setParent(b).setApiKey(c);
				g = _.gt(g, 2, f);
				g = _.Uc(g, 3, e).Lx(d);
				var k = a.A;
				g = yield _.$q(k.A, k.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/ListDatasets", g, {}, _.I9a);
				return _.mj(g, _.px, 1, _.oj());
			});
		};
		_.GNe = function(a, b, c, d, e) {
			e == null && (e = new _.Cy(), e = _.qt(e, 1, [
				"display_name",
				"description",
				"opted_into_sharing"
			]));
			var f = new _.Ebb();
			d = _.ln(f, _.px, 1, d);
			b = _.Uc(d, 2, b);
			c = _.ln(b, _.Cy, 3, e).setApiKey(c);
			a = a.A;
			return _.$q(a.A, a.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/UpdateDataset", c, {}, _.Fbb);
		};
		_.K9 = class {
			constructor() {
				this.A = _.m(_.Zq);
			}
		};
		_.K9.prototype.Bt = _.ba(129);
		_.K9.prototype.xt = _.ba(125);
		_.K9.J = function(a) {
			return new (a || _.K9)();
		};
		_.K9.sa = _.Cd({
			token: _.K9,
			factory: _.K9.J,
			wa: "root"
		});
		var L9 = class {
			constructor() {
				this.A = _.m(_.Zq);
			}
		};
		L9.J = function(a) {
			return new (a || L9)();
		};
		L9.sa = _.Cd({
			token: L9,
			factory: L9.J,
			wa: "root"
		});
		var HNe, INe;
		HNe = function(a, b, c, { pageSize: d, pageToken: e, filter: f }) {
			return _.x(function* () {
				var g = new _.wy().setParent(b);
				g = _.gt(g, 2, d);
				g = _.Uc(g, 3, e).Lx(f).setApiKey(c);
				var k = yield xNe(g);
				k = yield _.Cp(a.F, k);
				_.Uc(g, 6, k);
				k = a.A;
				return yield _.$q(k.A, k.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/ListSessionTurns", g, {}, _.q$a);
			});
		};
		INe = function(a, b, c, d) {
			return _.x(function* () {
				var e = new _.x0a().setParent(b).setApiKey(c);
				e = _.Xm(e, 3, d);
				var f = a.A;
				return _.$q(f.A, f.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/BulkDeleteSessionTurns", e, {}, _.y0a);
			});
		};
		_.M9 = class {
			constructor() {
				this.A = _.m(_.Zq);
				this.F = _.m(_.Iw);
			}
			getSession(a, b) {
				var c = new _.p8a();
				b = _.Uc(c, 1, b);
				a = _.Uc(b, 2, a);
				return this.A.getSession(a);
			}
			nC(a, b, c, d, e) {
				var f = this;
				return _.x(function* () {
					var g = void 0;
					d === "thumb_up" ? g = 1 : d === "thumb_down" && (g = 0);
					var k = new _.zy();
					k = _.Uc(k, 1, c);
					k = _.Uc(k, 2, a).setApiKey(b);
					var p = new H9();
					p = _.Uc(p, 1, "thumbs_up_down");
					g = _.rp(DNe(_.Uc(p, 3, e), g));
					g = _.ln(k, H9, 4, g);
					return f.A.nC(g);
				});
			}
		};
		_.M9.J = function(a) {
			return new (a || _.M9)();
		};
		_.M9.sa = _.Cd({
			token: _.M9,
			factory: _.M9.J,
			wa: "root"
		});
		_.N9 = new Map([
			["code_execution", "Code execution"],
			["function_calling", "Function calling"],
			["image_search", "Image search"],
			["search_grounding", "Search grounding"],
			["url_context", "URL context"],
			["computer_use", "Computer use"],
			["mcp_servers", "MCP servers"],
			["file_search", "File search"],
			["google_maps", "Google maps"]
		]);
		_.JNe = new _.$y("45772164", !1);
		_.KNe = new _.$y("45748488", !1);
		_.O9 = new _.$y("45764242", !1);
		_.LNe = new _.$y("45754287", !1);
		_.MNe = new _.$y("45733504", !1);
		_.P9 = class {
			constructor() {
				this.S = _.Dk;
				this.ve = {
					Brb: 291105,
					Crb: 291106,
					Drb: 291104,
					Erb: 291107,
					Frb: 291419
				};
				this.Wa = _.m(_.kC);
				this.Xx = _.m(_.qC, { optional: !0 });
				this.A = _.m(_.Op);
				this.Ulb = _.m(_.Ou);
				var a, b, c, d, e;
				this.displayName = _.M((e = (d = (a = this.Xx) == null ? void 0 : (b = a.dataset) == null ? void 0 : b.getDisplayName()) != null ? d : (c = this.Xx) == null ? void 0 : c.name) != null ? e : "");
				var f, g, k;
				this.description = _.M((k = (f = this.Xx) == null ? void 0 : (g = f.dataset) == null ? void 0 : g.jc()) != null ? k : "");
				var p, r, v;
				this.GJa = _.M((v = (p = this.Xx) == null ? void 0 : (r = p.dataset) == null ? void 0 : _.Pm(r, 5)) != null ? v : !0);
				this.Rza = this.A.getFlag(_.MNe);
				this.kCa = _.W(() => this.displayName().trim().length === 0);
			}
		};
		_.P9.J = function(a) {
			return new (a || _.P9)();
		};
		_.P9.ka = _.u({
			type: _.P9,
			da: [["ms-traces-create-dataset-dialog"]],
			ha: 38,
			ia: 20,
			la: [
				["datasetNameInput", ""],
				["datasetDescriptionInput", ""],
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
					"mat-dialog-close",
					"",
					"aria-label",
					"Close",
					3,
					"iconName",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "dataset-name-container"],
				[
					"label",
					"Name your dataset",
					3,
					"valueChange",
					"value"
				],
				[1, "dataset-description-container"],
				[1, "description-label"],
				[
					"aria-label",
					"Dataset description",
					"placeholder",
					"Briefly describe your dataset.",
					"disabledInteractive",
					"",
					"ms-input",
					"",
					"row",
					"5",
					3,
					"input",
					"value"
				],
				[1, "share-with-google-container"],
				[
					3,
					"change",
					"checked",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "share-with-google-description"],
				[1, "share-with-google-description-label"],
				[1, "share-with-google-description-hint"],
				["href", "https://developers.google.com/terms"],
				["href", "https://ai.google.dev/gemini-api/terms#data-use-unpaid"],
				[
					"documentation-path",
					"/gemini-api/docs/logs-datasets#data_logging_and_sharing_for_service_improvement",
					"target",
					"_blank"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"mat-dialog-close",
					"",
					"variant",
					"borderless",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"color",
					"primary",
					"mat-dialog-close",
					"",
					3,
					"click",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "h2", 2)(1, "span"), _.R(2), _.H(), _.I(3, "button", 3), _.H(), _.F(4, "mat-dialog-content")(5, "div", 4)(6, "ms-input-field", 5, 0), _.J("valueChange", function(c) {
					typeof c === "string" && b.displayName.set(c);
				}), _.H()(), _.F(8, "div", 6)(9, "label", 7), _.R(10, "Description"), _.H(), _.F(11, "textarea", 8, 1), _.J("input", function(c) {
					b.description.set(c.target.value);
				}), _.H()(), _.I(13, "mat-divider"), _.F(14, "div", 9)(15, "mat-checkbox", 10), _.J("change", function(c) {
					b.GJa.set(c.checked);
				}), _.H(), _.F(16, "div", 11)(17, "span", 12), _.R(18, " Share dataset with Google "), _.H(), _.F(19, "span", 13), _.R(20, " When you share a dataset with Google, your logs in that dataset, including requests and responses, will be processed in accordance with our "), _.F(21, "a", 14), _.R(22, "Terms"), _.H(), _.R(23, " for “"), _.F(24, "a", 15), _.R(25, "Unpaid Services"), _.H(), _.R(26, "” meaning the dataset may be used to develop and improve Google products, services, and machine learning technologies, including improving and training our models. "), _.F(27, "strong"), _.R(28, "Do not include personal, sensitive, or confidential information"), _.H(), _.R(29, ". "), _.F(30, "a", 16), _.R(31, "Learn more"), _.H(), _.R(32, ". "), _.H()()()(), _.F(33, "mat-dialog-actions", 17)(34, "button", 18), _.R(35, "Cancel"), _.H(), _.F(36, "button", 19), _.J("click", function() {
					_.Rn(b.Ulb, "TRACES", "Clicked Create Dataset Dialog Create Button");
					b.Wa.close({
						name: b.displayName(),
						description: b.description(),
						share: b.GJa()
					});
				}), _.R(37), _.H()());
				a & 2 && (_.y(2), _.S(" ", (b.Xx == null ? 0 : b.Xx.dataset == null ? 0 : b.Xx.dataset.getDisplayName()) ? "Update dataset" : "Create dataset", " "), _.y(), _.E("iconName", b.S.ac)("ve", b.ve.Crb)("veImpression", !0)("veClick", !0), _.y(3), _.E("value", b.displayName()), _.y(5), _.E("value", b.description()), _.y(4), _.E("checked", b.GJa())("disabled", b.Rza)("ve", b.ve.Erb)("veImpression", !0)("veClick", !0), _.y(19), _.E("ve", b.ve.Brb)("veImpression", !0)("veClick", !0), _.y(2), _.E("disabled", b.kCa())("ve", (b.Xx == null ? 0 : b.Xx.dataset == null ? 0 : b.Xx.dataset.getDisplayName()) ? b.ve.Frb : b.ve.Drb)("veImpression", !0)("veClick", !0), _.y(), _.U((b.Xx == null ? 0 : b.Xx.dataset == null ? 0 : b.Xx.dataset.getDisplayName()) ? "Update dataset" : "Create a dataset"));
			},
			dependencies: [
				_.Yy,
				_.LC,
				_.gE,
				_.mE,
				_.qE,
				_.pE,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.OD,
				_.ND,
				_.Cz,
				_.Bz
			],
			styles: [".description-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}textarea[_ngcontent-%COMP%]{height:120px}mat-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.share-with-google-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.share-with-google-description[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:var(--color-v3-text);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.share-with-google-description-hint[_ngcontent-%COMP%]{color:var(--color-v3-text-var);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}"]
		});
		_.Q9 = class {
			constructor() {
				this.S = _.Dk;
				this.ve = {
					Mrb: 291099,
					Nrb: 291101,
					Orb: 291100,
					Prb: 291103,
					Qrb: 291102
				};
				this.Wa = _.m(_.kC);
				this.A = _.m(_.qC);
				var a, b;
				this.zs = _.M((b = (a = this.A) == null ? void 0 : a.message) != null ? b : "");
				var c, d;
				this.feedback = _.M((d = (c = this.A) == null ? void 0 : c.jM) != null ? d : null);
				this.CHb = _.W(() => this.feedback() === "thumb_down");
				this.tIb = _.W(() => this.feedback() === "thumb_up");
				this.Ala = _.W(() => this.zs() !== "" && this.feedback() === null);
			}
			submit() {
				this.Wa.close({
					feedback: this.feedback(),
					zs: this.zs()
				});
			}
		};
		_.Q9.J = function(a) {
			return new (a || _.Q9)();
		};
		_.Q9.ka = _.u({
			type: _.Q9,
			da: [["ms-traces-feedback-dialog"]],
			ha: 25,
			ia: 25,
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
					"matDialogClose",
					"",
					"aria-label",
					"Close",
					3,
					"iconName",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "feedback-buttons"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"size",
					"large",
					3,
					"click",
					"iconName",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"aria-label",
					"Explain what was good, what was bad, or what was missing.",
					"placeholder",
					"Explain what was good, what was bad, or what was missing.",
					"ms-input",
					"",
					"rows",
					"5",
					3,
					"input",
					"value"
				],
				[1, "validation-error"],
				[1, "feedback-footer-text"],
				[
					"href",
					"https://ai.google.dev/gemini-api/terms",
					"target",
					"_blank"
				],
				[
					"documentation-path",
					"/gemini-api/docs/logs-datasets#data_logging_and_sharing_for_service_improvement",
					"target",
					"_blank"
				],
				["align", "end"],
				[
					"ms-button",
					"",
					"mat-dialog-close",
					"",
					"variant",
					"borderless",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"ms-button",
					"",
					"color",
					"primary",
					"mat-dialog-close",
					"",
					3,
					"click",
					"disabled",
					"ve",
					"veImpression",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "h2", 0)(1, "span"), _.R(2, " Help us improve "), _.H(), _.I(3, "button", 1), _.H(), _.F(4, "mat-dialog-content")(5, "div", 2)(6, "button", 3), _.J("click", function() {
					b.feedback() === "thumb_up" ? b.feedback.set(null) : b.feedback.set("thumb_up");
				}), _.R(7, " Good "), _.H(), _.F(8, "button", 3), _.J("click", function() {
					b.feedback() === "thumb_down" ? b.feedback.set(null) : b.feedback.set("thumb_down");
				}), _.R(9, " Bad "), _.H()(), _.F(10, "textarea", 4), _.J("input", function(c) {
					b.zs.set(c.target.value);
				}), _.H(), _.B(11, sNe, 2, 0, "div", 5), _.F(12, "div", 6), _.R(13, " If shared with Google, your feedback is subject to the "), _.F(14, "a", 7), _.R(15, "Gemini API Additional Terms of Service"), _.H(), _.R(16, " and may be reviewed and used for product improvement, including to improve Google AI. Do not include personal, sensitive, or confidential information. "), _.F(17, "a", 8), _.R(18, "Learn more"), _.H(), _.R(19, ". "), _.H()(), _.F(20, "mat-dialog-actions", 9)(21, "button", 10), _.R(22, "Cancel"), _.H(), _.F(23, "button", 11), _.J("click", function() {
					return b.submit();
				}), _.R(24, " Submit "), _.H()());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac)("ve", b.ve.Nrb)("veImpression", !0)("veClick", !0), _.y(3), _.P("active", b.tIb()), _.E("iconName", b.S.sG)("ve", b.ve.Qrb)("veImpression", !0)("veClick", !0), _.y(2), _.P("active", b.CHb()), _.E("iconName", b.S.gK)("ve", b.ve.Prb)("veImpression", !0)("veClick", !0), _.y(2), _.E("value", b.zs()), _.y(), _.C(b.Ala() ? 11 : -1), _.y(10), _.E("ve", b.ve.Mrb)("veImpression", !0)("veClick", !0), _.y(2), _.E("disabled", b.Ala())("ve", b.ve.Orb)("veImpression", !0)("veClick", !0));
			},
			dependencies: [
				_.Yy,
				_.LC,
				_.gE,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC,
				_.Cz,
				_.Bz
			],
			styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.feedback-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:16px;padding:8px 0}.feedback-footer-text[_ngcontent-%COMP%]{color:var(--color-v3-text-var);max-width:448px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}button.active[_ngcontent-%COMP%]{border:1px solid var(--color-v3-outline);background-color:var(--color-v3-button-container-high)}.validation-error[_ngcontent-%COMP%]{color:var(--color-error)}"]
		});
		var NNe;
		NNe = function(a, b, c, d, e) {
			if (!d) throw Error("fj`" + e);
			if (!b) throw Error("gj`" + e);
			if (!c || a.F.status() !== "resolved") throw Error("hj`" + e);
			if (!a.ta()) throw Error("ij");
		};
		_.ONe = function(a) {
			a.Ea.clear();
			a.ea.set(!1);
			a.I.reload();
		};
		_.PNe = function({ model: a, dataset: b, Sr: c, status: d, tools: e, rating: f, mq: g }) {
			var k = [];
			a && k.push(`model_id=${a}`);
			b && k.push(`dataset_id=${b}`);
			if (c) switch (a = Date.now(), c) {
				case "last_hour":
					k.push(`create_timestamp>=${new Date(a - 36e5).valueOf()}`);
					break;
				case "last_day":
					k.push(`create_timestamp>=${new Date(a - 864e5).valueOf()}`);
					break;
				case "last_7_days":
					k.push(`create_timestamp>=${new Date(a - 6048e5).valueOf()}`);
					break;
				case "last_28_days":
					k.push(`create_timestamp>=${new Date(a - 24192e5).valueOf()}`);
					break;
				case "all_time": break;
				default: _.sb(c, void 0);
			}
			d && k.push(`status=${d === "fail" ? "failure" : "success"}`);
			e && e.length > 0 && k.push(e.join(","));
			f && (f === "thumb_up" ? k.push("tutd=true") : f === "thumb_down" && k.push("tutd=false"));
			g && (g === "generate_content" ? k.push("interactions_api=false") : g === "interactions" && k.push("interactions_api=true"));
			return k.join(",");
		};
		_.R9 = function(a, b) {
			a.ea.set(!1);
			a.fa = [""];
			a.A.update((c) => Object.assign({}, c, b, { Vf: 0 }));
		};
		_.QNe = function(a, b) {
			return _.x(function* () {
				var c = a.apiKey();
				if (!a.ZP()) throw Error("lj");
				if (!c) throw Error("mj");
				var d = a.R, e = a.xa().getName();
				e = new _.C2a().setParent(e);
				c = _.ln(e, _.px, 2, b).setApiKey(c);
				d = d.A;
				d = yield _.$q(d.A, d.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/CreateDataset", c, {}, _.D2a);
				a.U.reload();
				_.R9(a, { datasetId: d.getName() });
				a.H.success(`Dataset "${d.getDisplayName()}" created.`);
				return d;
			});
		};
		_.RNe = function(a, b, c) {
			return _.x(function* () {
				var d = a.apiKey();
				if (!d) throw Error("nj");
				d = yield _.GNe(a.R, a.xa().getName(), d, b, c);
				a.U.reload();
				a.H.success(`Dataset "${d.getDisplayName()}" updated.`);
				return d;
			});
		};
		_.S9 = class {
			constructor() {
				this.Ta = _.m(_.Uy);
				this.R = _.m(_.K9);
				this.Dd = _.m(_.w1);
				this.Fc = _.m(_.BF);
				this.ma = _.m(L9);
				this.Aa = _.m(_.M9);
				this.hb = _.m(_.EG);
				this.H = _.m(_.iC);
				this.dialog = _.m(_.rC);
				this.zd = _.m(_.y6);
				this.X = new Map();
				this.Ea = new Map();
				this.oa = _.M(!1);
				this.xa = _.W(() => {
					var a;
					return (a = this.hb.A()) != null ? a : void 0;
				});
				this.cJa = _.W(() => this.A().datasetId);
				this.A = _.M({
					Sr: "all_time",
					tools: [],
					pageSize: 25,
					Vf: 0
				});
				this.Zb = _.W(() => {
					var a = this.A();
					return !!a.modelName || !!a.datasetId || a.Sr !== "all_time" || !!a.status || a.tools.length > 0 || !!a.rating || a.mq !== "all_apis";
				});
				this.Ch = _.W(() => [...this.Fc.ea(), ...this.Fc.aa()]);
				this.pageSize = _.W(() => this.A().pageSize);
				this.Vf = _.W(() => this.A().Vf);
				this.fa = [""];
				this.ea = _.M(!1);
				this.cb = !1;
				this.ef = this.Ta.ef;
				this.xQ = _.W(() => {
					var a;
					return (a = this.hb.A()) != null ? a : void 0;
				});
				this.na = _.W(() => {
					var a = this.xa();
					return a ? new Set(a.Ap()) : new Set();
				});
				this.ta = _.W(() => this.na().has(8));
				this.mb = _.W(() => this.na().has(9));
				this.ZP = _.W(() => this.na().has(11));
				this.Qga = _.W(() => this.na().has(12));
				this.cX = _.W(() => this.na().has(10));
				this.apiKey = _.W(() => {
					var a = this.xa();
					if (a) {
						var b, c;
						return (c = (b = this.Ta.A().find((d) => _.$x(d) === a.getName())) == null ? void 0 : _.Io(b)) != null ? c : void 0;
					}
				});
				this.F = _.Zi(Object.assign({}, {}, {
					params: () => this.apiKey(),
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							if (a) {
								var c = b.xa();
								if (c) {
									if (c.getName() && b.X.has(c.getName())) var d = b.X.get(c.getName());
									else {
										d = b.ma;
										c = c.getName();
										var e = new _.v8a();
										c = _.Uc(e, 1, c).setApiKey(a);
										d = d.A;
										d = yield _.$q(d.A, d.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GetTracesLoggingStatus", c, {}, _.w8a);
									}
									return d;
								}
							}
						});
					}
				}));
				this.Db = _.W(() => {
					var a = this.xa();
					return a ? this.zd.n9(a) : !1;
				});
				this.loggingEnabled = _.W(() => {
					if (!this.Db()) return !1;
					var a, b;
					return (b = (a = this.F.value()) == null ? void 0 : a.qja()) != null ? b : !1;
				});
				this.Xa = _.W(() => {
					if (!this.Db()) return !1;
					var a, b;
					return (b = (a = this.F.value()) == null ? void 0 : a.mja()) != null ? b : !1;
				});
				this.Na = _.W(() => {
					var a = this.loggingEnabled(), b = this.Xa();
					return a || b;
				});
				this.preset = _.W(() => {
					var a, b;
					return (a = this.F.value()) == null ? void 0 : (b = a.TL()) == null ? void 0 : _.oc(b);
				});
				_.W(() => {
					var a, b;
					return (b = (a = this.preset()) == null ? void 0 : a.getName()) != null ? b : void 0;
				});
				this.sf = _.W(() => {
					var a, b, c = (a = this.preset()) == null ? void 0 : (b = _.Z(a, CNe, 4)) == null ? void 0 : b.yAa();
					return c !== 0 ? c : void 0;
				});
				this.ec = tNe({ action: (a) => {
					var b = this;
					return _.x(function* () {
						var c = b.xa(), d = b.apiKey(), e = b.F.value();
						NNe(b, d, e, c, "logging status");
						c = c.getName();
						var f = b.F, g = f.set;
						var k = e.clone();
						k = _.cq(k, 2, a);
						g.call(f, k);
						try {
							if (a) {
								var p = b.ma, r = new _.G4a();
								let L = _.Uc(r, 1, c).setApiKey(d);
								var v = p.A;
								yield _.$q(v.A, v.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/EnableTracesLogging", L, {}, _.I4a);
							} else {
								var w = b.ma, D = new _.w4a();
								let L = _.Uc(D, 1, c).setApiKey(d);
								var G = w.A;
								yield _.$q(G.A, G.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/DisableTracesLogging", L, {}, _.y4a);
							}
							b.X.delete(c);
							b.F.reload();
						} catch (L) {
							throw b.F.set(e), L;
						}
					});
				} });
				this.Nc = tNe({ action: (a) => {
					var b = this;
					return _.x(function* () {
						var c = b.xa(), d = b.apiKey(), e = b.F.value();
						NNe(b, d, e, c, "interactions logging");
						c = c.getName();
						var f = b.F, g = f.set;
						var k = e.clone();
						k = _.cq(k, 3, a);
						g.call(f, k);
						try {
							var p = b.ma, r = new _.obb(), v = _.Uc(r, 1, c).setApiKey(d);
							var w = _.cq(v, 3, a);
							var D = p.A;
							yield _.$q(D.A, D.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/ToggleInteractionsLogging", w, {}, _.pbb);
							b.X.delete(c);
							b.F.reload();
						} catch (G) {
							throw b.F.set(e), G;
						}
					});
				} });
				this.Wc = tNe({ action: (a) => {
					var b = this;
					return _.x(function* () {
						var c = b.apiKey();
						if (!c) throw Error("jj");
						var d = b.ma, e = b.xa().getName(), f = new _.Lbb();
						c = _.Uc(f, 1, e).setApiKey(c);
						c = _.cn(c, 3, a);
						d = d.A;
						yield _.$q(d.A, d.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/UpdateTracesPreset", c, {}, _.Nbb);
					});
				} });
				this.Fa = tNe({ action: (a) => {
					var b = this;
					return _.x(function* () {
						var c = b.apiKey();
						if (!c) throw Error("kj");
						try {
							yield INe(b.Aa, b.xa().getName(), c, a.map((d) => d.id)), b.H.success(`${a.length} ${a.length === 1 ? "log" : "logs"} deleted.`), _.ONe(b);
						} catch (d) {
							throw b.H.error("Failed to delete logs."), d;
						}
					});
				} });
				this.ie = _.W(() => this.ec.lI() || this.Nc.lI() || this.Wc.lI());
				this.rc = _.W(() => {
					var a = this.xa(), b = this.apiKey(), c = this.mb();
					if (a && b && c) {
						var d;
						return {
							apiKey: b,
							project: a,
							model: this.A().modelName,
							dataset: this.A().datasetId,
							Sr: this.A().Sr,
							status: this.A().status,
							tools: this.A().tools,
							rating: this.A().rating,
							pageSize: this.A().pageSize,
							pageToken: (d = this.fa[this.A().Vf]) != null ? d : "",
							mq: this.A().mq,
							Vf: this.A().Vf
						};
					}
				});
				this.I = _.Zi(Object.assign({}, {}, {
					params: () => this.rc(),
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							if (a) {
								var c = {
									apiKey: a.apiKey,
									projectName: a.project.Ya(),
									model: a.model,
									dataset: a.dataset,
									Sr: a.Sr,
									status: a.status,
									tools: a.tools,
									rating: a.rating,
									pageSize: a.pageSize,
									pageToken: a.pageToken,
									mq: a.mq
								};
								c = JSON.stringify(c);
								if (b.Ea.has(c)) {
									c = b.Ea.get(c);
									var d = _.l(c, 2);
									d && (b.fa[a.Vf + 1] = d);
									return c;
								}
								var e = (d = _.PNe(a)) != null ? d : void 0;
								d = yield HNe(b.Aa, a.project.getName(), a.apiKey, {
									filter: e,
									pageSize: a.pageSize,
									pageToken: a.pageToken
								});
								b.Ea.set(c, d);
								(c = _.l(d, 2)) && (b.fa[a.Vf + 1] = c);
								return d;
							}
						});
					}
				}));
				this.aa = _.W(() => {
					var a = this.I.value();
					return a ? Number(_.Ys(a, 4)) : 0;
				});
				this.yJ = _.W(() => {
					if (this.I.xc()) {
						let a = this.I.value();
						return Number(_.Ys(a, 3));
					}
					return 0;
				});
				this.sessions = _.W(() => {
					var a = this.I.error();
					if (a) return console.error("Failed to fetch session turns:", a.message), [];
					a = this.I.value();
					if (!a) return [];
					var b;
					return ((b = _.mj(a, _.py, 1, _.oj())) != null ? b : []).map((c) => {
						var d = c.Kw(), e = _.J9(c)[0], f = void 0, g = c.rB();
						g && _.dn(g, 2) && (g = _.yj(g, 2), g === 1 ? f = "thumb_up" : g === 0 && (f = "thumb_down"));
						var k, p, r, v, w, D, G;
						g = _.l(c, 4);
						var L = (w = d == null ? void 0 : _.Dw(d)[0]) != null ? w : void 0;
						e = (D = e == null ? void 0 : (k = _.dy(e)[0]) == null ? void 0 : k.Sb()) != null ? D : void 0;
						k = _.uj(c, 5, _.oj());
						a: {
							switch (_.Lm(c, 11)) {
								case 1:
									D = "generate_content";
									break a;
								case 2:
									D = "interactions";
									break a;
							}
							D = void 0;
						}
						return {
							id: g,
							input: L,
							output: e,
							uq: k,
							mq: D,
							statusCode: (p = _.Z(c, _.lw, 8)) == null ? void 0 : p.Ff(),
							model: (G = d == null ? void 0 : d.getModel()) != null ? G : "",
							createTime: (r = c.aj()) == null ? void 0 : r.toDate(),
							jM: f,
							zs: (v = c.rB()) == null ? void 0 : _.l(v, 3)
						};
					});
				});
				this.Sa = _.W(() => this.I.Sa());
				this.cf = _.W(() => {
					var a = this.xa(), b = this.apiKey(), c = this.mb();
					return a && b && c ? {
						apiKey: b,
						projectName: a.getName()
					} : void 0;
				});
				this.U = _.Zi(Object.assign({}, {}, {
					params: () => this.cf(),
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							return a ? yield FNe(b.R, a.projectName, a.apiKey) : Promise.resolve([]);
						});
					}
				}));
				this.uq = _.W(() => {
					var a = this.U.error();
					if (a) return console.error("Failed to fetch datasets:", a.message), [];
					var b;
					return (b = this.U.value()) != null ? b : [];
				});
				this.CAb = _.W(() => this.uq().map((a) => ({
					id: a.getName(),
					displayName: a.getDisplayName()
				})));
				this.ue = _.W(() => {
					var a = this.cJa(), b = this.apiKey(), c = this.xa(), d = this.mb();
					return a && a !== "none" && b && c && d ? {
						id: a,
						apiKey: b,
						projectName: c.getName()
					} : void 0;
				});
				this.Gz = _.Zi(Object.assign({}, {}, {
					params: () => this.ue(),
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							if (a) {
								var c = b.R, d = b.xa().getName(), e = a.apiKey, f = a.id, g = new _.d7a();
								f = _.Uc(g, 1, f);
								d = _.Uc(f, 2, d).setApiKey(e);
								c = c.A;
								return yield _.$q(c.A, c.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GetDataset", d, {}, _.e7a);
							}
						});
					}
				}));
				_.Sy(this.Ta);
				_.Fk([this.F.value, this.xa], () => {
					var a = this.xa(), b = this.F.value();
					if (a && b) {
						let c;
						this.X.set((c = a.getName()) != null ? c : "", b);
					}
				});
				_.Fk([this.ea], () => {
					this.ea() && this.H.show({
						content: "New sessions available. Click to refresh.",
						Ne: "info",
						onClick: () => {
							_.ONe(this);
						}
					});
				});
			}
			Xn(a) {
				a && this.hb.Xn(a);
			}
			nC(a, b, c) {
				var d = this;
				return _.x(function* () {
					var e = d.apiKey();
					if (!e) throw Error("tj");
					yield d.Aa.nC(d.xa().getName(), e, a, b, c);
					d.I.update((f) => {
						if (!f) return f;
						var g, k = ((g = _.mj(f, _.py, 1, _.oj())) != null ? g : []).map((p) => {
							if (_.l(p, 4) === a) {
								p = p.clone();
								if (b === "thumb_up") {
									var r = DNe(new H9(), 1);
									r = _.Uc(r, 3, c);
									_.ln(p, H9, 6, r);
								} else b === "thumb_down" ? (r = DNe(new H9(), 0), r = _.Uc(r, 3, c), _.ln(p, H9, 6, r)) : _.ln(p, H9, 6, void 0);
								return p;
							}
							return p;
						});
						return ENe(f.clone(), k);
					});
					d.H.success("Feedback recorded for session.");
				});
			}
		};
		_.S9.prototype.rya = _.ba(216);
		_.S9.prototype.Sca = _.ba(215);
		_.S9.prototype.Bt = _.ba(128);
		_.S9.prototype.xt = _.ba(124);
		_.S9.J = function(a) {
			return new (a || _.S9)();
		};
		_.S9.sa = _.Cd({
			token: _.S9,
			factory: _.S9.J,
			wa: "root"
		});
		_.T9 = class {
			constructor() {
				this.S = _.Dk;
			}
		};
		_.T9.J = function(a) {
			return new (a || _.T9)();
		};
		_.T9.ka = _.u({
			type: _.T9,
			da: [["ms-traces-update-dataset-dialog"]],
			ha: 18,
			ia: 2,
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
					"mat-dialog-close",
					"",
					"aria-label",
					"Close",
					3,
					"iconName"
				],
				["documentation-path", "/gemini-api/docs/logs-datasets"],
				["align", "end"],
				"ms-button  mat-dialog-close  variant borderless".split(" "),
				[
					"ms-button",
					"",
					"color",
					"primary",
					3,
					"matDialogClose"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "h2", 0)(1, "span"), _.R(2, " Add new logs to a dataset shared with Google "), _.H(), _.I(3, "button", 1), _.H(), _.F(4, "mat-dialog-content")(5, "p"), _.R(6, "This dataset is shared with Google and may be used for product development and improvement. "), _.F(7, "strong"), _.R(8, "Do not include personal, sensitive, or confidential information."), _.H(), _.R(9, "\xA0 "), _.F(10, "a", 2), _.R(11, "Learn more"), _.H(), _.R(12, ". "), _.H()(), _.F(13, "mat-dialog-actions", 3)(14, "button", 4), _.R(15, "Cancel"), _.H(), _.F(16, "button", 5), _.R(17, " Continue "), _.H()());
				a & 2 && (_.y(3), _.E("iconName", b.S.ac), _.y(13), _.E("matDialogClose", !0));
			},
			dependencies: [
				_.Yy,
				_.LC,
				_.xC,
				_.sC,
				_.uC,
				_.wC,
				_.vC
			],
			styles: ["mat-dialog-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}"]
		});
		_.hr("QKzqef");
		var TNe = function(a) {
			return new SNe(typeof a.get === "function" ? a.get() : a);
		}, UNe = function(a) {
			for (let b of a.Gg()) _.Dr(b, _.Uu, 3, _.hj) && _.Tu(_.ej(b), new Uint8Array());
		}, WNe = function(a) {
			a = _.cc(a);
			var b = _.Z(a, _.Rw, 6);
			b && UNe(b);
			for (let c of _.Dw(a)) UNe(c);
			return JSON.stringify(_.VP(_.n5b(VNe.options, VNe.table, a)), null, 2);
		}, XNe = function(a) {
			var b, c;
			return _.dj(a) === 3 && !!((b = _.ej(a)) == null ? 0 : (c = _.Ru(b)) == null ? 0 : c.startsWith("audio/"));
		}, YNe = function(a, b) {
			if (a.sj() && b.sj()) return !0;
			if (a.sj() || b.sj()) return !1;
			var c = _.dj(a), d = _.dj(b);
			if (c === 2 && d === 2) return !0;
			a = XNe(a);
			b = XNe(b);
			return a && b ? !0 : !1;
		}, ZNe = function(a, b) {
			if (a.length !== 0) {
				if (XNe(a[0])) {
					var c = a.map((f) => {
						f = _.ej(f);
						if (!f) return null;
						var g = _.lc(f.getData());
						return g ? {
							mimeType: _.Ru(f),
							Pb: g,
							url: ""
						} : null;
					}).filter(Boolean);
					c = _.fBa(c);
					a = a[0];
					let e = _.ej(a);
					_.Su(e, c.mimeType);
					var d;
					_.Tu(e, (d = c.Pb) != null ? d : "");
					a = [a];
				}
				d = a[0].sj() ? "Reasoning" : "Model";
				b.push(_.K_a(_.Qw(new _.Rw(), d), a));
			}
		}, $Ne = function(a) {
			var b = [];
			for (let d of a) {
				if (d.Bq() !== "model") {
					b.push(d);
					continue;
				}
				a = [];
				for (let e of d.Gg()) {
					var c;
					if (c = !e.sj()) {
						a: switch (_.dj(e)) {
							case 2:
							case 8:
							case 9:
							case 11:
							case 12:
							case 3:
								c = !0;
								break a;
							default: c = !1;
						}
						c = !c;
					}
					if (c) continue;
					(c = a[a.length - 1]) && c.sj() !== e.sj() && (ZNe(a, b), a.length = 0);
					(c = a[a.length - 1]) && YNe(c, e) ? _.dj(c) === 2 ? c.setText(`${c.getText()}${e.getText()}`) : a.push(e) : (ZNe(a, b), a.length = 0, a.push(e));
				}
				ZNe(a, b);
			}
			return b;
		}, aOe = function(a) {
			a & 1 && _.R(0, " Back ");
		}, bOe = function(a) {
			a & 1 && (_.F(0, "div", 25), _.I(1, "span", 26), _.F(2, "span", 27), _.R(3), _.H()());
			a & 2 && (a = _.K(2), _.P("success", a.status() === "success")("fail", a.status() === "fail"), _.y(), _.E("iconName", a.S.Rra), _.y(2), _.S(" ", a.statusMessage(), " "));
		}, cOe = function(a) {
			a & 1 && _.I(0, "mat-progress-bar", 15);
			a & 2 && (a = _.K(2), _.E("mode", a.Vza() ? "determinate" : "indeterminate")("value", a.Vza() ? 75 : void 0));
		}, dOe = function(a) {
			a & 1 && (_.F(0, "div", 31)(1, "span"), _.R(2, "Instructions"), _.H()());
		}, eOe = function(a) {
			a & 1 && _.I(0, "ms-code-block", 39);
			a & 2 && (a = _.K(), _.K(3), a = _.b2a(new _.mx(), a), a = WNe(_.oc(a)), _.E("code", a));
		}, fOe = function(a, b) {
			a & 1 && _.I(0, "ms-part-renderer", 43);
			a & 2 && _.E("part", b.V)("animateText", !1);
		}, gOe = function(a) {
			a & 1 && (_.F(0, "div", 40, 2)(2, "span", 41), _.R(3), _.H(), _.F(4, "span", 42), _.Ah(5, fOe, 1, 2, "ms-part-renderer", 43, _.yh), _.H()());
			a & 2 && (a = _.K(), _.y(3), _.U(a.Bq()), _.y(2), _.Bh(a.Gg()));
		}, hOe = function(a) {
			a & 1 && (_.F(0, "div", 38), _.B(1, dOe, 3, 0, "div", 31), _.F(2, "div", 32), _.B(3, eOe, 1, 1, "ms-code-block", 39)(4, gOe, 7, 1, "div", 40), _.H()(), _.I(5, "mat-divider", 34));
			a & 2 && (a = _.K(3), _.y(), _.C(a.rawModeEnabled() ? -1 : 1), _.y(2), _.C(a.rawModeEnabled() ? 3 : 4));
		}, iOe = function(a) {
			a & 1 && (_.F(0, "div", 31)(1, "span"), _.R(2, " Input "), _.H()());
		}, jOe = function(a) {
			a & 1 && _.I(0, "ms-code-block", 33);
			if (a & 2) {
				a = _.K(3);
				let b;
				_.E("code", (b = a.BGb()) != null ? b : "");
			}
		}, kOe = function(a) {
			a & 1 && (_.F(0, "ms-thought-chunk", 45), _.I(1, "ms-part-renderer", 43), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(5), c;
				_.E("text", a.getText())("isThinkingRunning", !1)("modelName", (c = b.model()) != null ? c : "");
				_.y();
				_.E("part", a)("animateText", !1);
			}
		}, lOe = function(a) {
			a & 1 && _.I(0, "ms-part-renderer", 43);
			a & 2 && (a = _.K().V, _.E("part", a)("animateText", !1));
		}, mOe = function(a, b) {
			a & 1 && _.B(0, kOe, 2, 5, "ms-thought-chunk", 45)(1, lOe, 1, 2, "ms-part-renderer", 43);
			a & 2 && _.C(b.V.sj() ? 0 : 1);
		}, nOe = function(a, b) {
			a & 1 && (_.F(0, "div", 44, 2)(2, "span", 41), _.R(3), _.H(), _.F(4, "span", 42), _.Ah(5, mOe, 2, 1, null, null, _.yh), _.H()());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(4);
				_.wh("data-content-id", "content-" + (b + c.gab()));
				_.y(3);
				_.U(a.Bq());
				_.y(2);
				_.Bh(a.Gg());
			}
		}, oOe = function(a) {
			a & 1 && (_.F(0, "div", 32), _.Ah(1, nOe, 7, 2, "div", 44, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.MBa()));
		}, pOe = function(a) {
			a & 1 && (_.F(0, "div", 31)(1, "span"), _.R(2, " Output "), _.H()());
		}, qOe = function(a) {
			a & 1 && (_.F(0, "div", 36), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.S(" ", a.errorMessage(), " "));
		}, rOe = function(a, b) {
			a & 1 && _.I(0, "ms-code-block", 46);
			a & 2 && _.E("code", b.V);
		}, sOe = function(a) {
			a & 1 && _.Ah(0, rOe, 1, 1, "ms-code-block", 46, _.yh);
			a & 2 && (a = _.K(4), _.Bh(a.h2a()));
		}, uOe = function(a, b) {
			a & 1 && _.I(0, "ms-code-block", 47);
			if (a & 2) {
				a = b.V;
				_.K(5);
				a = _.cc(a);
				for (c of _.dy(a)) c.Fe() && UNe(c.Sb());
				var c = JSON.stringify(_.VP(_.n5b(tOe.options, tOe.table, a)), null, 2);
				_.E("code", c);
			}
		}, vOe = function(a) {
			a & 1 && _.Ah(0, uOe, 1, 1, "ms-code-block", 47, _.yh);
			a & 2 && (a = _.K(4), _.Bh(a.K6a()));
		}, wOe = function(a) {
			a & 1 && _.B(0, sOe, 2, 0)(1, vOe, 2, 0);
			a & 2 && (a = _.K(3), _.C(a.h2a() && a.Qu ? 0 : 1));
		}, xOe = function(a) {
			a & 1 && (_.F(0, "ms-thought-chunk", 45), _.I(1, "ms-part-renderer", 43), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(5), c;
				_.E("text", a.getText())("isThinkingRunning", !1)("modelName", (c = b.model()) != null ? c : "");
				_.y();
				_.E("part", a)("animateText", !1);
			}
		}, yOe = function(a) {
			a & 1 && _.I(0, "ms-part-renderer", 43);
			a & 2 && (a = _.K().V, _.E("part", a)("animateText", !1));
		}, zOe = function(a, b) {
			a & 1 && _.B(0, xOe, 2, 5, "ms-thought-chunk", 45)(1, yOe, 1, 2, "ms-part-renderer", 43);
			a & 2 && _.C(b.V.sj() ? 0 : 1);
		}, AOe = function(a, b) {
			a & 1 && (_.F(0, "div", 44, 2)(2, "span", 41), _.R(3), _.H(), _.F(4, "span", 42), _.Ah(5, zOe, 2, 1, null, null, _.yh), _.H()());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(4);
				_.wh("data-content-id", "content-" + (b + c.gab() + c.MBa().length));
				_.y(3);
				_.U(a.Bq());
				_.y(2);
				_.Bh(a.Gg());
			}
		}, BOe = function(a) {
			a & 1 && (_.F(0, "div", 32), _.Ah(1, AOe, 7, 2, "div", 44, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.J6a()));
		}, COe = function(a) {
			a & 1 && _.I(0, "ms-items-scrollbar", 37);
			a & 2 && (a = _.K(3), _.E("items", a.UIa())("turnElements", a.Rv())("scrollableElement", a.Tn()));
		}, DOe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "ms-autoscroll-container", 28);
				_.J("scroll", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.BFa());
				})("keydown", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.AFa(c));
				})("isScrollable", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.CIb.set(c));
				});
				_.F(1, "div", 29, 1);
				_.B(3, hOe, 6, 2);
				_.F(4, "div", 30);
				_.B(5, iOe, 3, 0, "div", 31);
				_.F(6, "div", 32);
				_.B(7, jOe, 1, 1, "ms-code-block", 33)(8, oOe, 3, 0, "div", 32);
				_.H()();
				_.I(9, "mat-divider", 34);
				_.F(10, "div", 35);
				_.B(11, pOe, 3, 0, "div", 31);
				_.B(12, qOe, 2, 1, "div", 36);
				_.F(13, "div", 32);
				_.B(14, wOe, 2, 1)(15, BOe, 3, 0, "div", 32);
				_.H()()()();
				_.B(16, COe, 1, 3, "ms-items-scrollbar", 37);
			}
			if (a & 2) {
				let b;
				a = _.K(2);
				_.P("hide-scrollbar", !a.rawModeEnabled());
				_.E("disabled", !0);
				_.y();
				_.P("has-scrollbar", !a.rawModeEnabled());
				_.y(2);
				_.C((b = a.systemInstruction()) ? 3 : -1, b);
				_.y(2);
				_.C(a.rawModeEnabled() ? -1 : 5);
				_.y(2);
				_.C(a.rawModeEnabled() ? 7 : 8);
				_.y(4);
				_.C(a.rawModeEnabled() ? -1 : 11);
				_.y();
				_.C(a.errorMessage() ? 12 : -1);
				_.y(2);
				_.C(a.rawModeEnabled() ? 14 : 15);
				_.y(2);
				_.C(a.rawModeEnabled() ? -1 : 16);
			}
		}, EOe = function(a) {
			a & 1 && _.R(0, " \xA0 ");
		}, FOe = function(a) {
			a & 1 && (_.R(0), _.Ei(1, "date"));
			a & 2 && (a = _.K(3), _.S(" ", _.Gi(1, 1, a.created(), "medium"), " "));
		}, GOe = function(a) {
			a & 1 && _.R(0, " \xA0 ");
		}, HOe = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K(3), _.S(" ", a.id(), " "));
		}, IOe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 24)(1, "div", 18)(2, "span");
				_.R(3, "Previous ID");
				_.H()();
				_.F(4, "div", 49)(5, "span", 50);
				_.R(6);
				_.H();
				_.F(7, "button", 57);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3), d = c.previousInteractionId();
					d && _.rd(c.window, _.jd(`${window.location.origin}/logs/${d}?${c.oPa.toString()}`), "_blank");
					return _.t();
				});
				_.H()()();
			}
			a & 2 && (a = _.K(3), _.y(6), _.S(" ", a.previousInteractionId(), " "), _.y(), _.E("iconName", a.S.Dk));
		}, JOe = function(a) {
			a & 1 && _.R(0, " \xA0 ");
		}, KOe = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K(3), _.S(" ", a.model(), " "));
		}, LOe = function(a, b) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.si(" - ", a.modality, " (cached): ", a.tokenCount, " "));
		}, MOe = function(a) {
			a & 1 && _.Ah(0, LOe, 2, 2, "li", 58, _.yh);
			a & 2 && (a = _.K(4), _.Bh(a.ywa()));
		}, NOe = function(a, b) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.si(" - ", a.modality, ": ", a.tokenCount, " "));
		}, OOe = function(a) {
			a & 1 && _.Ah(0, NOe, 2, 2, "li", 58, _.yh);
			a & 2 && (a = _.K(4), _.Bh(a.Hcb()));
		}, POe = function(a, b) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.si(" - ", a.modality, " (tool-use): ", a.tokenCount, " "));
		}, QOe = function(a) {
			a & 1 && _.Ah(0, POe, 2, 2, "li", 58, _.yh);
			a & 2 && (a = _.K(5), _.Bh(a.toolUsePromptTokensDetails()));
		}, ROe = function(a) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.H(), _.B(2, QOe, 2, 0));
			a & 2 && (a = _.K(4), _.y(), _.S("- Tool-use tokens: ", a.lcb(), " "), _.y(), _.C(a.toolUsePromptTokensDetails() ? 2 : -1));
		}, SOe = function(a) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.B(2, MOe, 2, 0), _.H(), _.F(3, "li", 58), _.R(4), _.B(5, OOe, 2, 0), _.H(), _.B(6, ROe, 3, 2));
			a & 2 && (a = _.K(3), _.y(), _.S("- Cached content tokens: ", a.rVa(), " "), _.y(), _.C(a.ywa() ? 2 : -1), _.y(2), _.S("- Uncached content tokens: ", a.lUb(), " "), _.y(), _.C(a.Hcb() ? 5 : -1), _.y(), _.C(a.lcb() ? 6 : -1));
		}, TOe = function(a) {
			a & 1 && (_.F(0, "li"), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.S("Thought tokens: ", a.Tbb(), " "));
		}, UOe = function(a, b) {
			a & 1 && (_.F(0, "li", 58), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.si(" - ", a.modality, ": ", a.tokenCount, " "));
		}, VOe = function(a) {
			a & 1 && _.Ah(0, UOe, 2, 2, "li", 58, _.yh);
			a & 2 && (a = _.K(3), _.Bh(a.M6a()));
		}, WOe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 59);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.Cla.set(!c.Cla()));
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.P("expanded", a.Cla()), _.E("iconName", a.S.Vj));
		}, YOe = function(a) {
			a & 1 && (_.F(0, "span", 60), _.R(1), _.H());
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("xapInlineDialog", (b = a.GTb) != null ? b : null)("overlaySize", _.zi(3, XOe));
				_.y();
				_.S("- ", a.detail);
			}
		}, ZOe = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H(), _.B(2, YOe, 2, 4, "span", 60));
			a & 2 && (a = b.V, b = _.K(3), _.y(), _.S(" ", a.name, " "), _.y(), _.C(a.detail && b.Cla() ? 2 : -1));
		}, $Oe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1, "\xA0"), _.H());
		}, aPe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1, " None "), _.H());
		}, bPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 24)(1, "div", 18)(2, "span");
				_.R(3, "Created");
				_.H()();
				_.F(4, "div", 48)(5, "span");
				_.B(6, EOe, 1, 0)(7, FOe, 2, 4);
				_.H()()();
				_.F(8, "div", 24)(9, "div", 18)(10, "span");
				_.R(11, "ID");
				_.H()();
				_.F(12, "div", 49)(13, "span", 50);
				_.B(14, GOe, 1, 0)(15, HOe, 1, 1);
				_.H();
				_.F(16, "button", 51);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					c.xl(c.id());
					return _.t();
				});
				_.H()()();
				_.B(17, IOe, 8, 2, "div", 24);
				_.F(18, "div", 24)(19, "div", 18)(20, "span");
				_.R(21, "Model");
				_.H()();
				_.F(22, "div", 48)(23, "span");
				_.B(24, JOe, 1, 0)(25, KOe, 1, 1);
				_.H();
				_.F(26, "button", 52);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					c.xl(c.model());
					return _.t();
				});
				_.H()()();
				_.F(27, "div", 24)(28, "div", 18)(29, "span");
				_.R(30, "Tokens");
				_.H();
				_.F(31, "button", 53);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.w9.set(!c.w9()));
				});
				_.H()();
				_.F(32, "div", 48)(33, "ul", 54)(34, "li");
				_.R(35);
				_.H();
				_.B(36, SOe, 7, 5);
				_.B(37, TOe, 2, 1, "li");
				_.F(38, "li");
				_.R(39);
				_.H();
				_.B(40, VOe, 2, 0);
				_.F(41, "li");
				_.R(42);
				_.H()()()();
				_.F(43, "div", 24)(44, "div", 18)(45, "span");
				_.R(46, "Tools");
				_.H();
				_.B(47, WOe, 1, 3, "button", 55);
				_.H();
				_.F(48, "div", 56);
				_.Ah(49, ZOe, 3, 2, null, null, _.yh);
				_.B(51, $Oe, 2, 0, "span")(52, aPe, 2, 0, "span");
				_.H()();
			}
			a & 2 && (a = _.K(2), _.y(6), _.C(!a.created() && a.Sa() ? 6 : 7), _.y(8), _.C(!a.id() && a.Sa() ? 14 : 15), _.y(2), _.E("iconName", a.S.Ae)("disabled", !a.id()), _.y(), _.C(a.previousInteractionId() && a.Qu ? 17 : -1), _.y(7), _.C(!a.model() && a.Sa() ? 24 : 25), _.y(2), _.E("iconName", a.S.Ae)("disabled", !a.model()), _.y(5), _.P("expanded", a.w9()), _.E("iconName", a.S.Vj), _.y(4), _.S("Input tokens: ", a.c2a(), " "), _.y(), _.C(a.w9() ? 36 : -1), _.y(), _.C(a.Tbb() ? 37 : -1), _.y(2), _.S("Output tokens: ", a.VLb(), " "), _.y(), _.C(a.M6a() && a.w9() ? 40 : -1), _.y(2), _.S("Total tokens: ", a.totalTokens(), " "), _.y(5), _.C(a.AFb() ? 47 : -1), _.y(2), _.Bh(a.tools()), _.y(2), _.C(a.Sa() && !a.tools().length ? 51 : a.tools().length ? -1 : 52));
		}, cPe = function(a) {
			a & 1 && (_.F(0, "div", 61), _.R(1, " Billing depends on the model used. "), _.F(2, "a", 62), _.R(3, "Learn more"), _.H()());
		}, dPe = function(a) {
			a & 1 && (_.F(0, "span", 71), _.R(1), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(3);
				_.y();
				_.S(" ", b.oAa(a), " ");
			}
		}, ePe = function(a, b) {
			a & 1 && _.B(0, dPe, 2, 1, "span", 71);
			a & 2 && (a = b.jb, b = _.K(3), _.C(b.Ska() || a < 3 ? 0 : -1));
		}, fPe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1, " None "), _.H());
		}, gPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 72);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.Ska.set(!c.Ska()));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(3), _.y(), _.S(" ", a.Ska() ? "See less" : a.B0().length - 3 + " more dataset(s)", " "));
		}, iPe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "mat-checkbox", 73);
				_.J("click", function(d) {
					return d.stopPropagation();
				})("change", function(d) {
					var e = _.q(c).V, f = _.K(3);
					return _.t(hPe(f, d.checked, e.id));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(3), _.E("checked", b.v0().has(a.id)), _.y(), _.U(a.displayName));
		}, mPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 24)(1, "div", 63);
				_.Ah(2, ePe, 1, 1, null, null, _.yh);
				_.B(4, fPe, 2, 0, "span");
				_.H();
				_.B(5, gPe, 2, 1, "button", 64);
				_.F(6, "button", 65);
				_.J("menuOpened", function() {
					_.q(b);
					var c = _.K(2);
					c.v0.set(new Set(c.B0()));
					c.KX.set("");
					return _.t();
				})("menuClosed", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(jPe(c));
				});
				_.R(7, " Change ");
				_.H();
				_.F(8, "mat-menu", null, 3)(10, "ms-input-field", 66);
				_.J("click", function(c) {
					return c.stopPropagation();
				})("valueChange", function(c) {
					_.q(b);
					var d = _.K(2);
					typeof c === "string" ? d.KX.set(c) : c === null && d.KX.set("");
					return _.t();
				});
				_.H();
				_.F(11, "mat-checkbox", 67);
				_.J("click", function(c) {
					return c.stopPropagation();
				})("change", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(kPe(d, c.checked));
				});
				_.R(12, "Select all");
				_.H();
				_.F(13, "div", 68);
				_.Ah(14, iPe, 2, 2, "mat-checkbox", 69, lPe);
				_.I(16, "mat-divider");
				_.F(17, "button", 70);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.CGa());
				});
				_.R(18, " Create dataset... ");
				_.H()()()();
			}
			if (a & 2) {
				a = _.O(9);
				let b = _.K(2);
				_.y(2);
				_.Bh(b.B0());
				_.y(2);
				_.C(b.B0().length === 0 ? 4 : -1);
				_.y();
				_.C(b.B0().length > 3 ? 5 : -1);
				_.y();
				_.E("matMenuTriggerFor", a);
				_.y(4);
				_.E("hideLabel", !0)("icon", b.S.Lm)("type", b.InputType.Ws)("value", b.KX());
				_.y();
				_.E("checked", b.jba().checked)("indeterminate", b.jba().indeterminate);
				_.y(3);
				_.Bh(b.Jza());
			}
		}, nPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 80);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.r9.set(!c.r9()));
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(3), _.y(), _.S(" ", a.r9() ? "See less" : "See more", " "));
		}, oPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 24)(1, "div", 74)(2, "button", 75);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.mda(c, "thumb_up"));
				});
				_.H();
				_.F(3, "button", 76);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(2);
					return _.t(d.mda(c, "thumb_down"));
				});
				_.H()();
				_.F(4, "div", 77)(5, "p", 78);
				_.R(6);
				_.H();
				_.B(7, nPe, 2, 1, "button", 79);
				_.H()();
			}
			a & 2 && (a = _.K(2), _.y(2), _.E("iconName", a.S.sG)("active", a.jM() === "thumb_up")("disabled", a.Sa()), _.y(), _.E("iconName", a.S.gK)("active", a.jM() === "thumb_down")("disabled", a.Sa()), _.y(2), _.P("expanded", a.r9()), _.y(), _.U(a.zs()), _.y(), _.C(a.zs() && (a.zs().length > 200 || a.r9()) ? 7 : -1));
		}, qPe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "button", 7);
				_.B(4, aOe, 1, 0);
				_.H()();
				_.F(5, "div", 8)(6, "div", 9);
				_.R(7);
				_.H();
				_.B(8, bOe, 4, 6, "div", 10);
				_.H();
				_.F(9, "div", 11)(10, "label", 12);
				_.R(11, " Raw Mode ");
				_.F(12, "mat-slide-toggle", 13);
				_.J("change", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Uca());
				});
				_.H()();
				_.F(13, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(pPe(c));
				});
				_.H()()();
				_.B(14, cOe, 1, 2, "mat-progress-bar", 15)(15, DOe, 17, 12);
				_.H();
				_.F(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "button", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(pPe(c));
				});
				_.H();
				_.F(20, "span", 20);
				_.R(21, "Details");
				_.H()()();
				_.F(22, "div", 21)(23, "div", 18)(24, "span", 22);
				_.R(25, "Properties");
				_.H();
				_.F(26, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.qla.set(!c.qla()));
				});
				_.H()();
				_.B(27, bPe, 53, 19);
				_.z(28, cPe, 4, 0, "ng-template", null, 0, _.Ii);
				_.I(30, "mat-divider");
				_.F(31, "div", 18)(32, "span", 22);
				_.R(33, "Datasets");
				_.H();
				_.F(34, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.Tka.set(!c.Tka()));
				});
				_.H()();
				_.B(35, mPe, 19, 9, "div", 24);
				_.I(36, "mat-divider");
				_.F(37, "div", 18)(38, "span", 22);
				_.R(39, "Human eval");
				_.H();
				_.F(40, "button", 23);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.ala.set(!c.ala()));
				});
				_.H()();
				_.B(41, oPe, 8, 10, "div", 24);
				_.H()();
			}
			a & 2 && (a = _.K(), _.y(), _.P("hidden", a.Wka() && a.Id()), _.y(2), _.E("variant", a.Id() ? "icon-primary" : "primary")("iconName", a.S.mn), _.y(), _.C(a.Id() ? -1 : 4), _.y(3), _.S(" ", a.fda(), " "), _.y(), _.C(a.status() ? 8 : -1), _.y(2), _.E("matTooltip", a.Pna()), _.y(2), _.E("checked", a.rawModeEnabled())("ve", a.ve.Zqb)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.S.Vea), _.y(), _.C(a.Sa() ? 14 : 15), _.y(2), _.P("expanded", a.Wka()), _.y(3), _.E("iconName", a.S.ac), _.y(7), _.P("expanded", a.qla()), _.E("iconName", a.S.Vj), _.y(), _.C(a.qla() ? 27 : -1), _.y(7), _.P("expanded", a.Tka()), _.E("iconName", a.S.Vj), _.y(), _.C(a.Tka() ? 35 : -1), _.y(5), _.P("expanded", a.ala()), _.E("iconName", a.S.Vj), _.y(), _.C(a.ala() ? 41 : -1));
		};
		_.hx.prototype.uja = _.ca(61, function() {
			return _.l(this, 17);
		});
		_.py.prototype.uja = _.ca(60, function() {
			return _.l(this, 12);
		});
		var rPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, sPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, tPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, uPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getName() {
				return _.l(this, 1);
			}
		}, vPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, wPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getData() {
				return _.fp(this, 2);
			}
		}, xPe = function(a, b, c, d) {
			return _.x(function* () {
				var e = new _.t8a();
				e = _.Uc(e, 1, c);
				e = _.Uc(e, 2, b).setApiKey(d);
				var f = a.A;
				return _.$q(f.A, f.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GetSessionTurn", e, {}, _.u8a);
			});
		}, yPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getType() {
				return _.Lm(this, 1);
			}
		}, zPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, APe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, BPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, CPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			XL() {
				return _.uj(this, 1, _.oj());
			}
		}, DPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			Gf() {
				return _.l(this, 1);
			}
			setTimeout(a) {
				return _.ln(this, _.kp, 3, a);
			}
			clearTimeout() {
				return _.In(this, 3);
			}
		}, EPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, FPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, GPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, HPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, IPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, JPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, KPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, LPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, MPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, NPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, OPe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, PPe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getMessage() {
				return _.l(this, 3);
			}
		}, SNe = class {
			constructor(a) {
				this.options = {};
				if (_.WP !== _.WP) throw Error();
				this.table = _.VP(_.B5b(a));
			}
		};
		var QPe = {};
		QPe.get = _.YP(class extends _.h {
			constructor(a) {
				super(a);
			}
		}, "google.internal.alkali.applications.makersuite.v1.BilledToolCall", 2, "[null,[[\"tool\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.BilledTool\",null,[{\"1052\":[3]}]],[\"successful_tool_call_count\",null,2,1,5,null,null,[]]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.BilledTool", "[null,[[\"BILLED_TOOL_UNSPECIFIED\",0],[\"GOOGLE_SEARCH_RETRIEVAL\",1],[\"BROWSING\",2]]]"));
		var RPe = {};
		RPe.get = _.YP(_.Uu, "google.internal.alkali.applications.makersuite.v1.Blob", 2, "[null,[[\"mime_type\",null,1,1,9,null,null,[]],[\"data\",null,2,1,12,null,null,[]],[\"tool_input_only\",null,4,1,8,null,null,[{\"1052\":[1]}]]]]");
		var SPe = {};
		SPe.get = _.YP(_.SZb, "google.internal.alkali.applications.makersuite.v1.Blobref", 2, "[null,[[\"mime_type\",null,1,1,9,null,null,[]],[\"blob_id\",null,2,1,9,null,null,[]],[\"file_name\",null,3,1,9,null,null,[]],[\"size\",null,4,1,3]]]");
		var TPe = {};
		TPe.get = _.YP(_.Xu, "google.internal.alkali.applications.makersuite.v1.CodeExecutionResult", 2, "[null,[[\"outcome\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.CodeExecutionResult.Outcome\",null,[{\"1052\":[2]}]],[\"output\",null,2,1,9,null,null,[{\"1052\":[1]}]]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.CodeExecutionResult.Outcome", "[null,[[\"OUTCOME_UNSPECIFIED\",0],[\"OUTCOME_OK\",1],[\"OUTCOME_FAILED\",2],[\"OUTCOME_DEADLINE_EXCEEDED\",3]]]"));
		var UPe = _.ZP("google.internal.alkali.applications.makersuite.v1.ExecutableCode.Language", "[null,[[\"LANGUAGE_UNSPECIFIED\",0],[\"PYTHON\",1],[\"BASH\",2]]]");
		var VPe = {};
		VPe.get = _.YP(_.Yu, "google.internal.alkali.applications.makersuite.v1.ExecutableCode", 2, "[null,[[\"language\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.ExecutableCode.Language\",null,[{\"1052\":[2]}]],[\"code\",null,2,1,9,null,null,[{\"1052\":[2]}]]]]", UPe);
		var WPe = {};
		WPe.get = _.YP(_.Zu, "google.internal.alkali.applications.makersuite.v1.FileData", 2, "[null,[[\"mime_type\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"file_uri\",null,2,1,9,null,null,[{\"1052\":[2]}]],[\"tool_input_only\",null,4,1,8,null,null,[{\"1052\":[1]}]]]]");
		var XPe = {}, YPe = {};
		YPe.get = _.YP(void 0, "google.internal.alkali.applications.makersuite.v1.FunctionCall.AdditionalArgumentsEntry", 2, "[null,[[\"key\",null,1,1,9],[\"value\",null,2,1,11,\".google.protobuf.Any\"]],null,null,null,null,[null,null,null,null,null,null,1]]", _.e6b.get);
		XPe.get = _.YP(_.dv, "google.internal.alkali.applications.makersuite.v1.FunctionCall", 2, "[null,[[\"id\",null,3,1,9,null,null,[{\"1052\":[1]}]],[\"name\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"args\",null,2,1,11,\".google.protobuf.Struct\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"additional_arguments\",null,4,3,11,\".google.internal.alkali.applications.makersuite.v1.FunctionCall.AdditionalArgumentsEntry\",null,[]]],null,null,null,null,null,[[\"_args\"]]]", YPe.get, _.qQ.get);
		var ZPe = {};
		ZPe.get = _.YP(_.gv, "google.internal.alkali.applications.makersuite.v1.FunctionResponse", 2, "[null,[[\"id\",null,3,1,9,null,null,[{\"1052\":[1]}]],[\"name\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"response\",null,2,1,11,\".google.protobuf.Struct\",null,[{\"1052\":[2]}]],[\"will_continue\",null,4,1,8,null,null,[{\"1052\":[1]}]],[\"scheduling\",null,5,1,14,\".google.internal.alkali.applications.makersuite.v1.FunctionResponse.Scheduling\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_scheduling\"]]]", _.qQ.get, _.ZP("google.internal.alkali.applications.makersuite.v1.FunctionResponse.Scheduling", "[null,[[\"SCHEDULING_UNSPECIFIED\",0],[\"SILENT\",1],[\"WHEN_IDLE\",2],[\"INTERRUPT\",3]]]"));
		var $Pe = {};
		$Pe.get = _.YP(yPe, "google.internal.alkali.applications.makersuite.v1.Notification", 2, "[null,[[\"type\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.Notification.Type\",null,[]]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.Notification.Type", "[null,[[\"TYPE_UNSPECIFIED\",0],[\"UPCOMING_IMAGE\",1]]]"));
		var aQe = {};
		aQe.get = _.YP(_.EUa, "google.internal.alkali.applications.makersuite.v1.ToolCall", 2, "[null,[[\"tool_type\",null,1,1,5,null,null,[]],[\"function_name\",null,2,1,9,null,null,[]],[\"args\",null,3,1,11,\".google.protobuf.Struct\",null,[]],[\"call_id\",null,4,1,9,null,null,[]]]]", _.qQ.get);
		var bQe = {};
		bQe.get = _.YP(_.FUa, "google.internal.alkali.applications.makersuite.v1.ToolResponse", 2, "[null,[[\"tool_type\",null,1,1,5,null,null,[]],[\"function_name\",null,2,1,9,null,null,[]],[\"response\",null,3,1,11,\".google.protobuf.Struct\",null,[]],[\"call_id\",null,4,1,9,null,null,[]]]]", _.qQ.get);
		var cQe = {};
		cQe.get = _.YP(_.iv, "google.internal.alkali.applications.makersuite.v1.VideoMetadata", 2, "[null,[[\"start_offset\",null,1,1,11,\".google.protobuf.Duration\",null,[]],[\"end_offset\",null,2,1,11,\".google.protobuf.Duration\",null,[]],[\"fps\",null,3,1,1,null,null,[]],[\"max_number_of_frames\",null,4,1,5,null,null,[],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_max_number_of_frames\"]]]", _.f6b.get);
		var dQe = {};
		dQe.get = _.YP(_.gj, "google.internal.alkali.applications.makersuite.v1.DriveFile", 2, "[null,[[\"id\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"version_info\",null,2,1,9,null,null,[{\"1052\":[1]}]],[\"resource_key\",null,3,1,9,null,null,[{\"1052\":[1]}]]]]");
		var eQe = {};
		eQe.get = _.YP(_.uv, "google.internal.alkali.applications.makersuite.v1.Part", 2, "[null,[[\"text\",null,2,1,9,null,null,[],0],[\"inline_data\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.Blob\",null,null,0],[\"blobref\",null,18,1,11,\".google.internal.alkali.applications.makersuite.v1.Blobref\",null,null,0],[\"sample_video_id\",null,5,1,9,null,null,[],0],[\"drive_file\",null,6,1,11,\".google.internal.alkali.applications.makersuite.v1.DriveFile\",null,null,0],[\"file_data\",null,7,1,11,\".google.internal.alkali.applications.makersuite.v1.FileData\",null,null,0],[\"executable_code\",null,8,1,11,\".google.internal.alkali.applications.makersuite.v1.ExecutableCode\",null,null,0],[\"code_execution_result\",null,9,1,11,\".google.internal.alkali.applications.makersuite.v1.CodeExecutionResult\",null,null,0],[\"function_call\",null,11,1,11,\".google.internal.alkali.applications.makersuite.v1.FunctionCall\",null,null,0],[\"function_response\",null,12,1,11,\".google.internal.alkali.applications.makersuite.v1.FunctionResponse\",null,null,0],[\"tool_call\",null,26,1,11,\".google.internal.alkali.applications.makersuite.v1.ToolCall\",null,[],0],[\"tool_response\",null,27,1,11,\".google.internal.alkali.applications.makersuite.v1.ToolResponse\",null,[],0],[\"notification\",null,17,1,11,\".google.internal.alkali.applications.makersuite.v1.Notification\",null,[],0],[\"thought\",null,13,1,8,null,null,[]],[\"thought_signature\",null,15,1,12,null,null,[]],[\"video_metadata\",null,16,1,11,\".google.internal.alkali.applications.makersuite.v1.VideoMetadata\",null,[{\"1052\":[1]}],1]],null,null,null,null,null,[[\"data\",[]],[\"metadata\"]]]", RPe.get, SPe.get, TPe.get, dQe.get, VPe.get, WPe.get, XPe.get, ZPe.get, $Pe.get, aQe.get, bQe.get, cQe.get);
		var fQe = {};
		fQe.get = _.YP(_.Rw, "google.internal.alkali.applications.makersuite.v1.Content", 2, "[null,[[\"parts\",null,1,3,11,\".google.internal.alkali.applications.makersuite.v1.Part\"],[\"role\",null,2,1,9,null,null,[]]]]", eQe.get);
		var gQe = _.ZP("google.internal.alkali.applications.makersuite.v1.ConversationTrackingMode", "[null,[[\"CONVERSATION_TRACKING_MODE_UNSPECIFIED\",0],[\"CONVERSATION_TRACKING_DISABLED\",1],[\"BASELINE_CONVERSATION_TRACKING\",2],[\"CONVERSATION_TRACKING_ENABLE_SESSION_STORAGE\",3],[\"CONVERSATION_TRACKING_USE_SESSION_STORAGE\",4]]]");
		var hQe = _.ZP("google.internal.alkali.applications.makersuite.v1.GenerationConfig.MediaResolution", "[null,[[\"MEDIA_RESOLUTION_UNSPECIFIED\",0],[\"MEDIA_RESOLUTION_LOW\",1],[\"MEDIA_RESOLUTION_MEDIUM\",2],[\"MEDIA_RESOLUTION_HIGH\",3],[\"MEDIA_RESOLUTION_ULTRA_HIGH\",4]]]");
		var iQe = _.ZP("google.internal.alkali.applications.makersuite.v1.GenerationConfig.Modality", "[null,[[\"MODALITY_UNSPECIFIED\",0],[\"TEXT\",1],[\"IMAGE\",2],[\"AUDIO\",3],[\"VIDEO\",4]]]");
		var jQe = {};
		jQe.get = _.YP(_.d0a, "google.internal.alkali.applications.makersuite.v1.ImageConfig", 2, "[null,[[\"aspect_ratio\",null,1,1,9,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"image_size\",null,2,1,9,null,null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_aspect_ratio\"],[\"_image_size\"]]]");
		var kQe = _.ZP("google.internal.alkali.applications.makersuite.v1.Type", "[null,[[\"TYPE_UNSPECIFIED\",0],[\"STRING\",1],[\"NUMBER\",2],[\"INTEGER\",3],[\"BOOLEAN\",4],[\"ARRAY\",5],[\"OBJECT\",6]]]");
		var lQe = {}, mQe = {};
		mQe.get = _.YP(void 0, "google.internal.alkali.applications.makersuite.v1.Schema.PropertiesEntry", 2, "[null,[[\"key\",null,1,1,9],[\"value\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.Schema\"]],null,null,null,null,[null,null,null,null,null,null,1]]", lQe.get);
		lQe.get = _.YP(_.xn, "google.internal.alkali.applications.makersuite.v1.Schema", 2, "[null,[[\"type\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.Type\",null,[{\"1052\":[2]}],0,null,null,null,null,null,null,null,1],[\"format\",null,2,1,9,null,null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1],[\"description\",null,3,1,9,null,null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1],[\"nullable\",null,4,1,8,null,null,[{\"1052\":[1]}],3,null,null,null,null,null,null,null,1],[\"enum\",null,5,3,9,null,null,[{\"1052\":[1]}]],[\"items\",null,6,1,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}],4,null,null,null,null,null,null,null,1],[\"max_items\",null,21,1,3,null,null,[{\"1052\":[1]}],5,null,null,null,null,null,null,null,1],[\"min_items\",null,22,1,3,null,null,[{\"1052\":[1]}],6,null,null,null,null,null,null,null,1],[\"properties\",null,7,3,11,\".google.internal.alkali.applications.makersuite.v1.Schema.PropertiesEntry\",null,[{\"1052\":[1]}]],[\"required\",null,8,3,9,null,null,[{\"1052\":[1]}]],[\"min_properties\",null,9,1,3,null,null,[{\"1052\":[1]}],7,null,null,null,null,null,null,null,1],[\"max_properties\",null,10,1,3,null,null,[{\"1052\":[1]}],8,null,null,null,null,null,null,null,1],[\"minimum\",null,11,1,1,null,null,[{\"1052\":[1]}],9,null,null,null,null,null,null,null,1],[\"maximum\",null,12,1,1,null,null,[{\"1052\":[1]}],10,null,null,null,null,null,null,null,1],[\"min_length\",null,13,1,3,null,null,[{\"1052\":[1]}],11,null,null,null,null,null,null,null,1],[\"max_length\",null,14,1,3,null,null,[{\"1052\":[1]}],12,null,null,null,null,null,null,null,1],[\"pattern\",null,15,1,9,null,null,[{\"1052\":[1]}],13,null,null,null,null,null,null,null,1],[\"example\",null,16,1,11,\".google.protobuf.Value\",null,[{\"1052\":[1]}],14,null,null,null,null,null,null,null,1],[\"one_of\",null,17,3,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}]],[\"any_of\",null,18,3,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}]],[\"all_of\",null,19,3,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}]],[\"not\",null,20,1,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}],15,null,null,null,null,null,null,null,1],[\"property_ordering\",null,23,3,9,null,null,[{\"1052\":[1]}]]],null,null,null,null,null,[[\"_type\"],[\"_format\"],[\"_description\"],[\"_nullable\"],[\"_items\"],[\"_max_items\"],[\"_min_items\"],[\"_min_properties\"],[\"_max_properties\"],[\"_minimum\"],[\"_maximum\"],[\"_min_length\"],[\"_max_length\"],[\"_pattern\"],[\"_example\"],[\"_not\"]]]", lQe.get, mQe.get, _.gQ.get, kQe);
		var nQe = {};
		nQe.get = _.YP(EPe, "google.internal.alkali.applications.makersuite.v1.VoiceHardTokens", 2, "[null,[[\"speaker_voice_tokens\",null,1,3,5,null,null,[]]]]");
		var oQe = {};
		oQe.get = _.YP(FPe, "google.internal.alkali.applications.makersuite.v1.ClonedVoiceConfig", 2, "[null,[[\"voice_hard_tokens\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.VoiceHardTokens\",null,[{\"1052\":[1]}],0],[\"voice_cloning_key\",null,2,1,9,null,null,[{\"1052\":[1]}],0]],null,null,null,null,null,[[\"voice\"]]]", nQe.get);
		var pQe = {};
		pQe.get = _.YP(GPe, "google.internal.alkali.applications.makersuite.v1.CustomVoiceConfig", 2, "[null,[[\"mime_type\",null,1,1,9,null,null,[{\"1052\":[1]}]],[\"custom_voice_sample\",null,2,1,12,null,null,[{\"1052\":[1]}]]]]");
		var qQe = {};
		qQe.get = _.YP(_.Uw, "google.internal.alkali.applications.makersuite.v1.PrebuiltVoiceConfig", 2, "[null,[[\"voice_name\",null,1,1,9,null,null,null,0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_voice_name\"]]]");
		var rQe = {};
		rQe.get = _.YP(HPe, "google.internal.alkali.applications.makersuite.v1.VoiceConsentSignature", 2, "[null,[[\"signature\",null,1,1,9,null,null,[{\"1052\":[1]}]]]]");
		var sQe = {};
		sQe.get = _.YP(IPe, "google.internal.alkali.applications.makersuite.v1.ReplicatedVoiceConfig", 2, "[null,[[\"mime_type\",null,1,1,9,null,null,[{\"1052\":[1]}]],[\"voice_sample_audio\",null,2,1,12,null,null,[{\"1052\":[1]}]],[\"consent_audio\",null,3,1,12,null,null,[{\"1052\":[1]}]],[\"voice_consent_signature\",null,4,1,11,\".google.internal.alkali.applications.makersuite.v1.VoiceConsentSignature\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_voice_consent_signature\"]]]", rQe.get);
		var tQe = {};
		tQe.get = _.YP(_.Vw, "google.internal.alkali.applications.makersuite.v1.VoiceConfig", 2, "[null,[[\"prebuilt_voice_config\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.PrebuiltVoiceConfig\",null,null,0],[\"cloned_voice_config\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.ClonedVoiceConfig\",null,null,0],[\"custom_voice_config\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.CustomVoiceConfig\",null,[null,null,1],0],[\"replicated_voice_config\",null,4,1,11,\".google.internal.alkali.applications.makersuite.v1.ReplicatedVoiceConfig\",null,null,0]],null,null,null,null,null,[[\"voice_config\"]]]", oQe.get, pQe.get, qQe.get, sQe.get);
		var uQe = {};
		uQe.get = _.YP(_.wZb, "google.internal.alkali.applications.makersuite.v1.SpeakerVoiceConfig", 2, "[null,[[\"speaker\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"voice_config\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.VoiceConfig\",null,[{\"1052\":[2]}]]]]", tQe.get);
		var vQe = {};
		vQe.get = _.YP(_.PO, "google.internal.alkali.applications.makersuite.v1.MultiSpeakerVoiceConfig", 2, "[null,[[\"speaker_voice_configs\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.SpeakerVoiceConfig\",null,[{\"1052\":[2]}]]]]", uQe.get);
		var wQe = {};
		wQe.get = _.YP(_.yn, "google.internal.alkali.applications.makersuite.v1.SpeechConfig", 2, "[null,[[\"voice_config\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.VoiceConfig\"],[\"multi_speaker_voice_config\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.MultiSpeakerVoiceConfig\",null,[]],[\"language_code\",null,2,1,9,null,null,[{\"1052\":[1]}]]]]", vQe.get, tQe.get);
		var xQe = {};
		xQe.get = _.YP(JPe, "google.internal.alkali.applications.makersuite.v1.StreamingBidirectionalTranslationConfig", 2, "[null,[[\"source_language_code\",null,1,1,9,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"target_language_code\",null,2,1,9,null,null,[{\"1052\":[2]}],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_source_language_code\"],[\"_target_language_code\"]]]");
		var yQe = {};
		yQe.get = _.YP(KPe, "google.internal.alkali.applications.makersuite.v1.StreamingDirectionalTranslationConfig", 2, "[null,[[\"play_target_audio\",null,1,1,8,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"target_language_code\",null,2,1,9,null,null,[{\"1052\":[2]}],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_play_target_audio\"],[\"_target_language_code\"]]]");
		var zQe = {};
		zQe.get = _.YP(_.JDd, "google.internal.alkali.applications.makersuite.v1.StreamingTranslationConfig", 2, "[null,[[\"directional_translation\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.StreamingDirectionalTranslationConfig\",null,null,0],[\"bidirectional_translation\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.StreamingBidirectionalTranslationConfig\",null,null,0],[\"echo_target_language\",null,3,1,8,null,null,[],1,null,null,null,null,null,null,null,1],[\"target_language_code\",null,4,1,9,null,null,[],2,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"config\"],[\"_echo_target_language\"],[\"_target_language_code\"]]]", xQe.get, yQe.get);
		var AQe = {};
		AQe.get = _.YP(_.Ts, "google.internal.alkali.applications.makersuite.v1.ThinkingConfig", 2, "[null,[[\"include_thoughts\",null,1,1,8,null,null,null,0,null,null,null,null,null,null,null,1],[\"thinking_budget\",null,2,1,5,null,null,[],1,null,null,null,null,null,null,null,1],[\"thinking_level\",null,4,1,14,\".google.internal.alkali.applications.makersuite.v1.ThinkingConfig.ThinkingLevel\",null,[],2,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_include_thoughts\"],[\"_thinking_budget\"],[\"_thinking_level\"]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.ThinkingConfig.ThinkingLevel", "[null,[[\"THINKING_LEVEL_UNSPECIFIED\",0],[\"MINIMAL\",4],[\"LOW\",1],[\"MEDIUM\",2],[\"HIGH\",3],[\"EXTRA_HIGH\",5]]]"));
		var BQe = {};
		BQe.get = _.YP(LPe, "google.internal.alkali.applications.makersuite.v1.VideoConfig", 2, "[null,[[\"target_fps\",null,1,1,2,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"enable_image_latents_for_ldm\",null,2,1,8,null,null,[{\"1052\":[1]}]],[\"ldm_model_endpoint_override\",null,3,1,9,null,null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1],[\"decoder_model_endpoint_override\",null,4,1,9,null,null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1],[\"fps\",null,5,1,14,\".google.internal.alkali.applications.makersuite.v1.VideoConfig.FPS\",null,[{\"1052\":[1]}]]],null,null,null,null,null,[[\"_target_fps\"],[\"_ldm_model_endpoint_override\"],[\"_decoder_model_endpoint_override\"]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.VideoConfig.FPS", "[null,[[\"FPS_UNSPECIFIED\",0],[\"FPS20\",2],[\"FPS24\",1]]]"));
		var CQe = {};
		CQe.get = _.YP(_.Km, "google.internal.alkali.applications.makersuite.v1.GenerationConfig", 2, "[null,[[\"candidate_count\",null,1,1,5,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"stop_sequences\",null,2,3,9,null,null,[{\"1052\":[1]}]],[\"max_output_tokens\",null,4,1,5,null,null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1],[\"temperature\",null,5,1,2,null,null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1],[\"top_p\",null,6,1,2,null,null,[{\"1052\":[1]}],3,null,null,null,null,null,null,null,1],[\"top_k\",null,7,1,5,null,null,[{\"1052\":[1]}],4,null,null,null,null,null,null,null,1],[\"response_mime_type\",null,8,1,9,null,null,[{\"1052\":[1]}],5,null,null,null,null,null,null,null,1],[\"response_schema\",null,9,1,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}]],[\"response_regex_constraint\",null,26,1,9,null,null,[{\"1052\":[1]}],6,null,null,null,null,null,null,null,1],[\"presence_penalty\",null,10,1,2,null,null,[{\"1052\":[1]}],7,null,null,null,null,null,null,null,1],[\"frequency_penalty\",null,11,1,2,null,null,[{\"1052\":[1]}],8,null,null,null,null,null,null,null,1],[\"response_logprobs\",null,12,1,8,null,null,[{\"1052\":[1]}],9,null,null,null,null,null,null,null,1],[\"logprobs\",null,13,1,5,null,null,[{\"1052\":[1]}],10,null,null,null,null,null,null,null,1],[\"enable_enhanced_civic_answers\",null,14,1,8,null,null,[{\"1052\":[1]}],11,null,null,null,null,null,null,null,1],[\"response_modalities\",null,15,3,14,\".google.internal.alkali.applications.makersuite.v1.GenerationConfig.Modality\",null,[{\"1052\":[1]}]],[\"speech_config\",null,16,1,11,\".google.internal.alkali.applications.makersuite.v1.SpeechConfig\",null,[{\"1052\":[1]}],12,null,null,null,null,null,null,null,1],[\"thinking_config\",null,17,1,11,\".google.internal.alkali.applications.makersuite.v1.ThinkingConfig\",null,[{\"1052\":[1]}],13,null,null,null,null,null,null,null,1],[\"media_resolution\",null,18,1,14,\".google.internal.alkali.applications.makersuite.v1.GenerationConfig.MediaResolution\",null,[{\"1052\":[1]}],14,null,null,null,null,null,null,null,1],[\"seed\",null,19,1,5,null,null,[{\"1052\":[1]}],15,null,null,null,null,null,null,null,1],[\"enable_affective_dialog\",null,20,1,8,null,null,[{\"1052\":[1]}],16,null,null,null,null,null,null,null,1],[\"image_config\",null,27,1,11,\".google.internal.alkali.applications.makersuite.v1.ImageConfig\",null,[{\"1052\":[1]}],17,null,null,null,null,null,null,null,1],[\"video_config\",null,28,1,11,\".google.internal.alkali.applications.makersuite.v1.VideoConfig\",null,[{\"1052\":[1]}],18,null,null,null,null,null,null,null,1],[\"streaming_translation_config\",null,29,1,11,\".google.internal.alkali.applications.makersuite.v1.StreamingTranslationConfig\",null,[{\"1052\":[1]}],19,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_candidate_count\"],[\"_max_output_tokens\"],[\"_temperature\"],[\"_top_p\"],[\"_top_k\"],[\"_response_mime_type\"],[\"_response_regex_constraint\"],[\"_presence_penalty\"],[\"_frequency_penalty\"],[\"_response_logprobs\"],[\"_logprobs\"],[\"_enable_enhanced_civic_answers\"],[\"_speech_config\"],[\"_thinking_config\"],[\"_media_resolution\"],[\"_seed\"],[\"_enable_affective_dialog\"],[\"_image_config\"],[\"_video_config\"],[\"_streaming_translation_config\"]]]", jQe.get, lQe.get, wQe.get, zQe.get, AQe.get, BQe.get, hQe, iQe);
		var DQe = {};
		DQe.get = _.YP(zPe, "google.internal.alkali.applications.makersuite.v1.Bash", 2, "[]");
		var EQe = {};
		EQe.get = _.YP(_.O_a, "google.internal.alkali.applications.makersuite.v1.CodeExecution", 2, "[null,[[\"languages\",null,1,3,14,\".google.internal.alkali.applications.makersuite.v1.ExecutableCode.Language\",null,[{\"1052\":[1]}]]]]", UPe);
		var FQe = {};
		FQe.get = _.YP(rPe, "google.internal.alkali.applications.makersuite.v1.FileSearch", 2, "[]");
		var GQe = {};
		GQe.get = _.YP(_.Hn, "google.internal.alkali.applications.makersuite.v1.FunctionDeclaration", 2, "[null,[[\"name\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"description\",null,2,1,9,null,null,[{\"1052\":[2]}]],[\"parameters\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.Schema\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"behavior\",null,5,1,14,\".google.internal.alkali.applications.makersuite.v1.FunctionDeclaration.Behavior\",null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_parameters\"],[\"_behavior\"]]]", lQe.get, _.ZP("google.internal.alkali.applications.makersuite.v1.FunctionDeclaration.Behavior", "[null,[[\"UNSPECIFIED\",0],[\"BLOCKING\",1],[\"NON_BLOCKING\",2]]]"));
		var HQe = {};
		HQe.get = _.YP(_.P_a, "google.internal.alkali.applications.makersuite.v1.GoogleMaps", 2, "[null,[[\"enable_widget\",null,1,1,8,null,null,[{\"1052\":[1]}]]]]");
		var IQe = {};
		IQe.get = _.YP(APe, "google.internal.alkali.applications.makersuite.v1.DynamicRetrievalConfig", 2, "[null,[[\"mode\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.DynamicRetrievalConfig.Mode\",null,[]],[\"dynamic_threshold\",null,2,1,2,null,null,[],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_dynamic_threshold\"]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.DynamicRetrievalConfig.Mode", "[null,[[\"MODE_UNSPECIFIED\",0],[\"MODE_DYNAMIC\",1]]]"));
		var JQe = {};
		JQe.get = _.YP(sPe, "google.internal.alkali.applications.makersuite.v1.GoogleSearchRetrieval", 2, "[null,[[\"dynamic_retrieval_config\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.DynamicRetrievalConfig\",null,[]]]]", IQe.get);
		var KQe = {};
		KQe.get = _.YP(BPe, "google.internal.alkali.applications.makersuite.v1.ImageSearch", 2, "[null,[[\"mode\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.ExecutionMode\",null,[{\"1052\":[1]}]]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.ExecutionMode", "[null,[[\"EXECUTION_MODE_UNSPECIFIED\",0],[\"SERVER_SIDE\",1],[\"CLIENT_SIDE\",2]]]"));
		var LQe = {};
		LQe.get = _.YP(tPe, "google.internal.alkali.applications.makersuite.v1.Tool.ComputerUse", 2, "[null,[[\"environment\",null,3,1,14,\".google.internal.alkali.applications.makersuite.v1.Tool.ComputerUse.Environment\",null,[{\"1052\":[2]}]],[\"excluded_predefined_functions\",null,5,3,9,null,null,[{\"1052\":[1]}]]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.Tool.ComputerUse.Environment", "[null,[[\"ENVIRONMENT_UNSPECIFIED\",0],[\"ENVIRONMENT_BROWSER\",1]]]"));
		var MQe = {};
		MQe.get = _.YP(_.Q_a, "google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.ImageSearch", 2, "[]");
		var NQe = {};
		NQe.get = _.YP(_.R_a, "google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.WebSearch", 2, "[]");
		var OQe = {};
		OQe.get = _.YP(_.Sw, "google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.SearchTypes", 2, "[null,[[\"web_search\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.WebSearch\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"image_search\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.ImageSearch\",null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_web_search\"],[\"_image_search\"]]]", MQe.get, NQe.get);
		var PQe = {};
		PQe.get = _.YP(_.BCe, "google.type.Interval", 2, "[null,[[\"start_time\",null,1,1,11,\".google.protobuf.Timestamp\"],[\"end_time\",null,2,1,11,\".google.protobuf.Timestamp\"]],null,null,null,null,[]]", _.j6b.get);
		var QQe = {};
		QQe.get = _.YP(_.$m, "google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch", 2, "[null,[[\"time_range_filter\",null,1,1,11,\".google.type.Interval\",null,[{\"1052\":[1]}]],[\"search_types\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch.SearchTypes\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_search_types\"]]]", OQe.get, PQe.get);
		var RQe = {};
		RQe.get = _.YP(CPe, "google.internal.alkali.applications.makersuite.v1.AllowedTools", 2, "[null,[[\"tools\",null,1,3,9,null,null,[]]]]");
		var SQe = {}, TQe = {};
		TQe.get = _.YP(void 0, "google.internal.alkali.applications.makersuite.v1.Tool.McpServer.StreamableHttpTransport.HeadersEntry", 2, "[null,[[\"key\",null,1,1,9],[\"value\",null,2,1,9]],null,null,null,null,[null,null,null,null,null,null,1]]");
		SQe.get = _.YP(DPe, "google.internal.alkali.applications.makersuite.v1.Tool.McpServer.StreamableHttpTransport", 2, "[null,[[\"uri\",null,1,1,9,null,null,[]],[\"headers\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.Tool.McpServer.StreamableHttpTransport.HeadersEntry\",null,[]],[\"timeout\",null,3,1,11,\".google.protobuf.Duration\"],[\"sse_read_timeout\",null,4,1,11,\".google.protobuf.Duration\"],[\"terminate_on_close\",null,5,1,8]]]", TQe.get, _.f6b.get);
		var UQe = {};
		UQe.get = _.YP(uPe, "google.internal.alkali.applications.makersuite.v1.Tool.McpServer", 2, "[null,[[\"name\",null,1,1,9,null,null,[]],[\"streamable_http_transport\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.McpServer.StreamableHttpTransport\",null,[{\"1052\":[1]}],0],[\"allowed_tools\",null,3,3,11,\".google.internal.alkali.applications.makersuite.v1.AllowedTools\",null,[{\"1052\":[1]}]]],null,null,null,null,null,[[\"transport\"]]]", RQe.get, SQe.get);
		var VQe = {};
		VQe.get = _.YP(_.W_a, "google.internal.alkali.applications.makersuite.v1.UrlContext", 2, "[]");
		var WQe = {};
		WQe.get = _.YP(_.Tw, "google.internal.alkali.applications.makersuite.v1.Tool", 2, "[null,[[\"code_execution\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.CodeExecution\",null,[{\"1052\":[1]}]],[\"function_declarations\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.FunctionDeclaration\",null,[{\"1052\":[1]}]],[\"google_search_retrieval\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.GoogleSearchRetrieval\",null,[{\"1052\":[1]}]],[\"google_search\",null,4,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.GoogleSearch\",null,[{\"1052\":[1]}]],[\"computer_use\",null,6,1,11,\".google.internal.alkali.applications.makersuite.v1.Tool.ComputerUse\",null,[{\"1052\":[1]}]],[\"url_context\",null,8,1,11,\".google.internal.alkali.applications.makersuite.v1.UrlContext\",null,[{\"1052\":[1]}]],[\"mcp_servers\",null,9,3,11,\".google.internal.alkali.applications.makersuite.v1.Tool.McpServer\",null,[{\"1052\":[1]}]],[\"file_search\",null,10,1,11,\".google.internal.alkali.applications.makersuite.v1.FileSearch\",null,[{\"1052\":[1]}]],[\"google_maps\",null,11,1,11,\".google.internal.alkali.applications.makersuite.v1.GoogleMaps\",null,[{\"1052\":[1]}]],[\"bash\",null,12,1,11,\".google.internal.alkali.applications.makersuite.v1.Bash\",null,[{\"1052\":[1]}]],[\"image_search\",null,13,1,11,\".google.internal.alkali.applications.makersuite.v1.ImageSearch\",null,[null,null,1,{\"1052\":[1]}]]]]", DQe.get, EQe.get, FQe.get, GQe.get, HQe.get, JQe.get, KQe.get, LQe.get, QQe.get, UQe.get, VQe.get);
		var XQe = {};
		XQe.get = _.YP(MPe, "google.type.LatLng", 2, "[null,[[\"latitude\",null,1,1,1],[\"longitude\",null,2,1,1]]]");
		var YQe = {};
		YQe.get = _.YP(_.Xw, "google.internal.alkali.applications.makersuite.v1.RetrievalConfig", 2, "[null,[[\"lat_lng\",null,1,1,11,\".google.type.LatLng\",null,[{\"1052\":[1]}]],[\"language_code\",null,2,1,9,null,null,[{\"1052\":[1]}]],[\"time_zone\",null,3,1,9,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_time_zone\"]]]", XQe.get);
		var ZQe = {};
		ZQe.get = _.YP(_.u0a, "google.internal.alkali.applications.makersuite.v1.ToolConfig", 2, "[null,[[\"retrieval_config\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.RetrievalConfig\"],[\"include_server_side_tool_invocations\",null,3,1,8]]]", YQe.get);
		var $Qe = {};
		$Qe.get = _.YP(_.Y1a, "google.internal.alkali.applications.makersuite.v1.PreambleConfig", 2, "[null,[[\"system_instruction\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.Content\",null,[]],[\"mode\",null,2,1,14,\".google.internal.alkali.applications.makersuite.v1.PreambleConfig.SystemInstructionMode\"]]]", fQe.get, _.ZP("google.internal.alkali.applications.makersuite.v1.PreambleConfig.SystemInstructionMode", "[null,[[\"SYSTEM_INSTRUCTION_MODE_UNSPECIFIED\",0],[\"SYSTEM_INSTRUCTION_MODE_APPEND\",1],[\"SYSTEM_INSTRUCTION_MODE_REPLACE\",2]]]"));
		var aRe = _.ZP("google.internal.alkali.applications.makersuite.v1.HarmCategory", "[null,[[\"HARM_CATEGORY_UNSPECIFIED\",0],[\"HARM_CATEGORY_DEROGATORY\",1],[\"HARM_CATEGORY_TOXICITY\",2],[\"HARM_CATEGORY_VIOLENCE\",3],[\"HARM_CATEGORY_SEXUAL\",4],[\"HARM_CATEGORY_MEDICAL\",5],[\"HARM_CATEGORY_DANGEROUS\",6],[\"HARM_CATEGORY_HARASSMENT\",7],[\"HARM_CATEGORY_HATE_SPEECH\",8],[\"HARM_CATEGORY_SEXUALLY_EXPLICIT\",9],[\"HARM_CATEGORY_DANGEROUS_CONTENT\",10],[\"HARM_CATEGORY_CIVIC_INTEGRITY\",11]]]");
		var bRe = {};
		bRe.get = _.YP(_.un, "google.internal.alkali.applications.makersuite.v1.SafetySetting", 2, "[null,[[\"category\",null,3,1,14,\".google.internal.alkali.applications.makersuite.v1.HarmCategory\",null,[{\"1052\":[2]}]],[\"threshold\",null,4,1,14,\".google.internal.alkali.applications.makersuite.v1.SafetySetting.HarmBlockThreshold\",null,[{\"1052\":[2]}]]]]", aRe, _.ZP("google.internal.alkali.applications.makersuite.v1.SafetySetting.HarmBlockThreshold", "[null,[[\"HARM_BLOCK_THRESHOLD_UNSPECIFIED\",0],[\"BLOCK_LOW_AND_ABOVE\",1],[\"BLOCK_MEDIUM_AND_ABOVE\",2],[\"BLOCK_ONLY_HIGH\",3],[\"BLOCK_NONE\",4],[\"OFF\",5]]]"));
		var cRe = {};
		cRe.get = _.YP(_.mx, "google.internal.alkali.applications.makersuite.v1.GenerateContentRequest", 2, "[null,[[\"model\",null,1,1,9,null,null,[{\"1052\":[2]}]],[\"contents\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.Content\",null,[{\"1052\":[2]}]],[\"safety_settings\",null,3,3,11,\".google.internal.alkali.applications.makersuite.v1.SafetySetting\",null,[{\"1052\":[1]}]],[\"generation_config\",null,4,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerationConfig\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"request_snapshot\",null,5,1,9,null,null,[{\"1052\":[1]}]],[\"preamble_config\",null,16,1,11,\".google.internal.alkali.applications.makersuite.v1.PreambleConfig\",null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1],[\"system_instruction\",null,6,1,11,\".google.internal.alkali.applications.makersuite.v1.Content\",null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1],[\"tools\",null,7,3,11,\".google.internal.alkali.applications.makersuite.v1.Tool\",null,[{\"1052\":[1]}]],[\"tool_config\",null,14,1,11,\".google.internal.alkali.applications.makersuite.v1.ToolConfig\",null,[{\"1052\":[1]}],3,null,null,null,null,null,null,null,1],[\"evergreen_model_uri\",null,8,1,9,null,null,[{\"1052\":[1]}],4,null,null,null,null,null,null,null,1],[\"session_id\",null,9,1,3,null,null,[{\"1052\":[1]}],5,null,null,null,null,null,null,null,1],[\"enable_obfuscation_conversion\",null,10,1,8,null,null,[{\"1052\":[1]}],6,null,null,null,null,null,null,null,1],[\"allow_inline_preference_voting\",null,11,1,8,null,null,null,7,null,null,null,null,null,null,null,1],[\"turn_token\",null,12,1,9,null,null,[{\"1052\":[1]}],8,null,null,null,null,null,null,null,1],[\"conversation_tracking_mode\",null,13,1,14,\".google.internal.alkali.applications.makersuite.v1.ConversationTrackingMode\",null,[{\"1052\":[1]}],9,null,null,null,null,null,null,null,1],[\"api_key\",null,15,1,9,null,null,[{\"1052\":[1]}],10,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_generation_config\"],[\"_preamble_config\"],[\"_system_instruction\"],[\"_tool_config\"],[\"_evergreen_model_uri\"],[\"_session_id\"],[\"_enable_obfuscation_conversion\"],[\"_allow_inline_preference_voting\"],[\"_turn_token\"],[\"_conversation_tracking_mode\"],[\"_api_key\"]]]", fQe.get, CQe.get, $Qe.get, bRe.get, WQe.get, ZQe.get, gQe);
		var dRe = {};
		dRe.get = _.YP(_.s5a, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingAbortMetadata", 2, "[null,[[\"is_error\",null,1,1,8],[\"error_type\",null,2,1,14,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingAbortMetadata.ErrorType\"]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingAbortMetadata.ErrorType", "[null,[[\"ERROR_TYPE_UNSPECIFIED\",0],[\"TRIGGERING_ERROR\",1],[\"API_ERROR\",2]]]"));
		var eRe = {};
		eRe.get = _.YP(_.t5a, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingContentMetadata", 2, "[null,[[\"obfuscated_model\",null,1,1,9],[\"id\",null,2,1,5]]]");
		var fRe = {};
		fRe.get = _.YP(_.u5a, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingExperimentMetadata", 2, "[null,[[\"experiment_id\",null,1,1,9],[\"latency_masking\",null,2,1,14,\".google.internal.alkali.applications.makersuite.v1.CompareModelData.LatencyMasking\",null,null,0,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_latency_masking\"]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.CompareModelData.LatencyMasking", "[null,[[\"LATENCY_MASKING_UNSPECIFIED\",0],[\"NO_MASKING\",1],[\"WAIT_BOTH_SIDES\",2],[\"WAIT_BOTH_SIDES_THEN_EXTRA\",3],[\"ONE_SIDE_ADD_EXTRA_LATENCY\",4]]]"));
		var gRe = _.ZP("google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.PromptFeedback.BlockReason", "[null,[[\"BLOCK_REASON_UNSPECIFIED\",0],[\"SAFETY\",1],[\"OTHER\",2],[\"BLOCKLIST\",3],[\"PROHIBITED_CONTENT\",4],[\"IMAGE_SAFETY\",5]]]");
		var hRe = {};
		hRe.get = _.YP(_.Cx, "google.internal.alkali.applications.makersuite.v1.SafetyRating", 2, "[null,[[\"category\",null,3,1,14,\".google.internal.alkali.applications.makersuite.v1.HarmCategory\",null,[{\"1052\":[2]}]],[\"probability\",null,4,1,14,\".google.internal.alkali.applications.makersuite.v1.SafetyRating.HarmProbability\",null,[{\"1052\":[2]}]],[\"blocked\",null,5,1,8]]]", aRe, _.ZP("google.internal.alkali.applications.makersuite.v1.SafetyRating.HarmProbability", "[null,[[\"HARM_PROBABILITY_UNSPECIFIED\",0],[\"NEGLIGIBLE\",1],[\"LOW\",2],[\"MEDIUM\",3],[\"HIGH\",4]]]"));
		var iRe = {};
		iRe.get = _.YP(_.ay, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.PromptFeedback", 2, "[null,[[\"block_reason\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.PromptFeedback.BlockReason\",null,[{\"1052\":[1]}]],[\"safety_ratings\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.SafetyRating\"],[\"block_reason_message\",null,3,1,9,null,null,[{\"1052\":[1]}]]]]", hRe.get, gRe);
		var jRe = {};
		jRe.get = _.YP(vPe, "google.internal.alkali.applications.makersuite.v1.ModalityTokenCount", 2, "[null,[[\"modality\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.Modality\"],[\"token_count\",null,2,1,5]]]", _.ZP("google.internal.alkali.applications.makersuite.v1.Modality", "[null,[[\"MODALITY_UNSPECIFIED\",0],[\"TEXT\",1],[\"IMAGE\",2],[\"VIDEO\",3],[\"AUDIO\",4],[\"DOCUMENT\",5]]]"));
		var kRe = {};
		kRe.get = _.YP(_.by, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.UsageMetadata", 2, "[null,[[\"prompt_token_count\",null,1,1,5,null,null,[]],[\"cached_content_token_count\",null,4,1,5,null,null,[]],[\"candidates_token_count\",null,2,1,5,null,null,[]],[\"tool_use_prompt_token_count\",null,8,1,5,null,null,[{\"1052\":[3]}]],[\"thoughts_token_count\",null,10,1,5,null,null,[{\"1052\":[3]}]],[\"total_token_count\",null,3,1,5,null,null,[]],[\"prompt_tokens_details\",null,5,3,11,\".google.internal.alkali.applications.makersuite.v1.ModalityTokenCount\",null,[{\"1052\":[3]}]],[\"cache_tokens_details\",null,6,3,11,\".google.internal.alkali.applications.makersuite.v1.ModalityTokenCount\",null,[{\"1052\":[3]}]],[\"candidates_tokens_details\",null,7,3,11,\".google.internal.alkali.applications.makersuite.v1.ModalityTokenCount\",null,[{\"1052\":[3]}]],[\"tool_use_prompt_tokens_details\",null,9,3,11,\".google.internal.alkali.applications.makersuite.v1.ModalityTokenCount\",null,[{\"1052\":[3]}]],[\"billed_tool_calls\",null,11,3,11,\".google.internal.alkali.applications.makersuite.v1.BilledToolCall\",null,[{\"1052\":[3]}]]]]", QPe.get, jRe.get);
		var lRe = {};
		lRe.get = _.YP(_.v5a, "google.internal.alkali.applications.makersuite.v1.CitationSource", 2, "[null,[[\"start_index\",null,1,1,5,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"end_index\",null,2,1,5,null,null,[{\"1052\":[1]}],1,null,null,null,null,null,null,null,1],[\"uri\",null,3,1,9,null,null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1],[\"license\",null,4,1,9,null,null,[{\"1052\":[1]}],3,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_start_index\"],[\"_end_index\"],[\"_uri\"],[\"_license\"]]]");
		var mRe = {};
		mRe.get = _.YP(_.w5a, "google.internal.alkali.applications.makersuite.v1.CitationMetadata", 2, "[null,[[\"citation_sources\",null,1,3,11,\".google.internal.alkali.applications.makersuite.v1.CitationSource\"]]]", lRe.get);
		var nRe = _.ZP("google.internal.alkali.applications.makersuite.v1.Candidate.FinishReason", "[null,[[\"FINISH_REASON_UNSPECIFIED\",0],[\"STOP\",1],[\"MAX_TOKENS\",2],[\"SAFETY\",3],[\"RECITATION\",4],[\"OTHER\",5],[\"LANGUAGE\",6],[\"BLOCKLIST\",7],[\"PROHIBITED_CONTENT\",8],[\"SPII\",9],[\"MALFORMED_FUNCTION_CALL\",10],[\"IMAGE_SAFETY\",11],[\"IMAGE_PROHIBITED_CONTENT\",14],[\"IMAGE_OTHER\",15],[\"NO_IMAGE\",16],[\"IMAGE_RECITATION\",17],[\"UNEXPECTED_TOOL_CALL\",12],[\"TOO_MANY_TOOL_CALLS\",13],[\"MISSING_THOUGHT_SIGNATURE\",18],[\"MALFORMED_RESPONSE\",19]]]");
		var oRe = {};
		oRe.get = _.YP(_.w0a, "google.internal.alkali.applications.makersuite.v1.GroundingChunk.Image", 2, "[null,[[\"source_uri\",null,1,1,9,null,null,[],0,null,null,null,null,null,null,null,1],[\"domain\",null,2,1,9,null,null,[],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_source_uri\"],[\"_domain\"]]]");
		var pRe = {};
		pRe.get = _.YP(_.FHa, "google.internal.alkali.applications.makersuite.v1.GroundingChunk.Maps", 2, "[null,[[\"uri\",null,1,1,9,null,null,[],0,null,null,null,null,null,null,null,1],[\"title\",null,2,1,9,null,null,[],1,null,null,null,null,null,null,null,1],[\"text\",null,3,1,9,null,null,[],2,null,null,null,null,null,null,null,1],[\"place_id\",null,4,1,9,null,null,[],3,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_uri\"],[\"_title\"],[\"_text\"],[\"_place_id\"]]]");
		var qRe = {};
		qRe.get = _.YP(_.DHa, "google.internal.alkali.applications.makersuite.v1.GroundingChunk.Web", 2, "[null,[[\"uri\",null,1,1,9,null,null,[],0,null,null,null,null,null,null,null,1],[\"title\",null,2,1,9,null,null,[],1,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_uri\"],[\"_title\"]]]");
		var rRe = {};
		rRe.get = _.YP(_.Zp, "google.internal.alkali.applications.makersuite.v1.GroundingChunk", 2, "[null,[[\"web\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.GroundingChunk.Web\",null,[],0],[\"image\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.GroundingChunk.Image\",null,[],0],[\"maps\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.GroundingChunk.Maps\",null,[],0]],null,null,null,null,null,[[\"chunk_type\"]]]", oRe.get, pRe.get, qRe.get);
		var sRe = {};
		sRe.get = _.YP(_.JHa, "google.internal.alkali.applications.makersuite.v1.Segment", 2, "[null,[[\"part_index\",null,1,1,5,null,null,[{\"1052\":[3]}]],[\"start_index\",null,2,1,5,null,null,[{\"1052\":[3]}]],[\"end_index\",null,3,1,5,null,null,[{\"1052\":[3]}]],[\"text\",null,4,1,9,null,null,[{\"1052\":[3]}]]]]");
		var tRe = {};
		tRe.get = _.YP(_.HHa, "google.internal.alkali.applications.makersuite.v1.GroundingSupport", 2, "[null,[[\"segment\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.Segment\",null,[],0,null,null,null,null,null,null,null,1],[\"grounding_chunk_indices\",null,2,3,5,null,null,[null,1]],[\"confidence_scores\",null,3,3,2,null,null,[null,1]]],null,null,null,null,null,[[\"_segment\"]]]", sRe.get);
		var uRe = {};
		uRe.get = _.YP(NPe, "google.internal.alkali.applications.makersuite.v1.RetrievalMetadata", 2, "[null,[[\"google_search_dynamic_retrieval_score\",null,2,1,2,null,null,[{\"1052\":[1]}]]]]");
		var vRe = {};
		vRe.get = _.YP(OPe, "google.internal.alkali.applications.makersuite.v1.SearchEntryPoint", 2, "[null,[[\"rendered_content\",null,1,1,9,null,null,[{\"1052\":[1]}]],[\"sdk_blob\",null,2,1,12,null,null,[{\"1052\":[1]}]]]]");
		var wRe = {};
		wRe.get = _.YP(_.Zw, "google.internal.alkali.applications.makersuite.v1.GroundingMetadata", 2, "[null,[[\"search_entry_point\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.SearchEntryPoint\",null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"grounding_chunks\",null,2,3,11,\".google.internal.alkali.applications.makersuite.v1.GroundingChunk\"],[\"grounding_supports\",null,3,3,11,\".google.internal.alkali.applications.makersuite.v1.GroundingSupport\"],[\"retrieval_metadata\",null,4,1,11,\".google.internal.alkali.applications.makersuite.v1.RetrievalMetadata\",null,null,1,null,null,null,null,null,null,null,1],[\"web_search_queries\",null,5,3,9],[\"image_search_queries\",null,6,3,9],[\"google_maps_widget_context_token\",null,7,1,9,null,null,[{\"1052\":[1]}],2,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_search_entry_point\"],[\"_retrieval_metadata\"],[\"_google_maps_widget_context_token\"]]]", rRe.get, tRe.get, uRe.get, vRe.get);
		var xRe = {};
		xRe.get = _.YP(_.x5a, "google.internal.alkali.applications.makersuite.v1.Candidate", 2, "[null,[[\"index\",null,3,1,5],[\"content\",null,1,1,11,\".google.internal.alkali.applications.makersuite.v1.Content\"],[\"finish_reason\",null,2,1,14,\".google.internal.alkali.applications.makersuite.v1.Candidate.FinishReason\",null,[{\"1052\":[1]}]],[\"finish_message\",null,4,1,9,null,null,[{\"1052\":[1]}],0,null,null,null,null,null,null,null,1],[\"safety_ratings\",null,5,3,11,\".google.internal.alkali.applications.makersuite.v1.SafetyRating\"],[\"citation_metadata\",null,7,1,11,\".google.internal.alkali.applications.makersuite.v1.CitationMetadata\",null,[{\"1052\":[3]}]],[\"token_count\",null,6,1,5,null,null,[]],[\"grounding_metadata\",null,8,1,11,\".google.internal.alkali.applications.makersuite.v1.GroundingMetadata\",null,[{\"1052\":[3]}]]],null,null,null,null,null,[[\"_finish_message\"]]]", mRe.get, fQe.get, wRe.get, hRe.get, nRe);
		var yRe = {};
		yRe.get = _.YP(PPe, "google.internal.alkali.applications.makersuite.v1.ModelStatus", 2, "[null,[[\"model_stage\",null,1,1,14,\".google.internal.alkali.applications.makersuite.v1.ModelStatus.ModelStage\"],[\"retirement_time\",null,2,1,11,\".google.protobuf.Timestamp\"],[\"message\",null,3,1,9]]]", _.j6b.get, _.ZP("google.internal.alkali.applications.makersuite.v1.ModelStatus.ModelStage", "[null,[[\"MODEL_STAGE_UNSPECIFIED\",0],[\"UNSTABLE_EXPERIMENTAL\",1,[1]],[\"EXPERIMENTAL\",2],[\"PREVIEW\",3],[\"STABLE\",4],[\"LEGACY\",5],[\"DEPRECATED\",6,[1]],[\"RETIRED\",7]]]"));
		var zRe = {};
		zRe.get = _.YP(_.cy, "EventIdMessage", 1, "[null,[[\"time_usec\",null,1,2,3],[\"server_ip\",null,2,2,7,null,null,[]],[\"process_id\",null,3,2,7]]]");
		var ARe = {};
		ARe.get = _.YP(_.ey, "google.internal.alkali.applications.makersuite.v1.GenerateContentResponse", 2, "[null,[[\"candidates\",null,1,3,11,\".google.internal.alkali.applications.makersuite.v1.Candidate\"],[\"prompt_feedback\",null,2,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.PromptFeedback\"],[\"usage_metadata\",null,3,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.UsageMetadata\",null,[]],[\"event_id\",null,4,1,11,\".EventIdMessage\"],[\"inline_preference_voting_content_metadata\",null,5,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingContentMetadata\",null,null,0,null,null,null,null,null,null,null,1],[\"inline_preference_voting_experiment_metadata\",null,6,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingExperimentMetadata\",null,null,1,null,null,null,null,null,null,null,1],[\"inline_preference_voting_abort_metadata\",null,7,1,11,\".google.internal.alkali.applications.makersuite.v1.GenerateContentResponse.InlinePreferenceVotingAbortMetadata\",null,null,2,null,null,null,null,null,null,null,1],[\"turn_token\",null,8,1,9,null,null,[]],[\"model_status\",null,9,1,11,\".google.internal.alkali.applications.makersuite.v1.ModelStatus\"],[\"voice_consent_signature\",null,10,1,11,\".google.internal.alkali.applications.makersuite.v1.VoiceConsentSignature\",null,null,3,null,null,null,null,null,null,null,1]],null,null,null,null,null,[[\"_inline_preference_voting_content_metadata\"],[\"_inline_preference_voting_experiment_metadata\"],[\"_inline_preference_voting_abort_metadata\"],[\"_voice_consent_signature\"]]]", zRe.get, xRe.get, dRe.get, eRe.get, fRe.get, iRe.get, kRe.get, yRe.get, rQe.get);
		var VNe = TNe(cRe.get()), tOe = TNe(ARe.get());
		var BRe = ["contentItem"], CRe = ["searchGroundingTooltipTemplate"], XOe = () => ({ minHeight: "0" }), lPe = (a, b) => b.name, hPe = function(a, b, c) {
			a.v0.update((d) => {
				d = new Set(d);
				b ? d.add(c) : d.delete(c);
				return d;
			});
		}, jPe = function(a) {
			return _.x(function* () {
				var b = new Set(a.B0()), c = a.v0(), d = Array.from(c.values()).filter((k) => !b.has(k)), e = Array.from(b.values()).filter((k) => !c.has(k));
				if (d.length !== 0 || e.length !== 0) {
					var f = a.dialog.open(_.T9, { width: "500px" });
					if (yield _.pf(_.jC(f))) {
						f = [];
						for (var g of d) if (d = a.I().get(`datasets/${g}`)) {
							let k = new Set(_.I9(d));
							k.add(a.id());
							f.push(DRe(a, d, k));
						}
						for (let k of e) if (e = a.I().get(`datasets/${k}`)) g = new Set(_.I9(e)), g.delete(a.id()), f.push(DRe(a, e, g));
						yield Promise.all(f);
						a.Qj.reload();
					}
				}
			});
		}, kPe = function(a, b) {
			a.v0.update((c) => {
				c = new Set(c);
				for (let d of a.Jza()) b ? c.add(d.id) : c.delete(d.id);
				return c;
			});
		}, pPe = function(a) {
			a.Wka.update((b) => !b);
		}, ERe = function(a) {
			if (!a) return "Empty";
			switch (_.dj(a)) {
				case 2: return "Text";
				case 3:
					let b;
					a = (b = _.ej(a)) == null ? void 0 : _.Ru(b);
					return (a == null ? 0 : a.startsWith("audio/")) ? "Audio file" : (a == null ? 0 : a.startsWith("image/")) ? "Image file" : "File";
				case 7: return "File";
				case 11: return "Function Call";
				case 12: return "Function Response";
				case 8: return "Executable Code";
				case 9: return "Code Execution Result";
				default: return "Other";
			}
		}, DRe = function(a, b, c) {
			return _.x(function* () {
				var d = _.ANe(b.clone(), [...c.values()]);
				yield _.RNe(a.tb, d, _.bbb(new _.Cy(), ["interaction_ids"]));
			});
		};
		_.is = class {
			oAa(a) {
				var b, c;
				return (c = (b = this.I().get(`datasets/${a}`)) == null ? void 0 : b.getDisplayName()) != null ? c : a;
			}
			constructor() {
				this.InputType = _.lE;
				this.ve = { Zqb: 291108 };
				this.S = _.Dk;
				this.Qc = _.m(_.BM);
				this.A = _.m(_.ll);
				this.dialog = _.m(_.rC);
				this.za = _.m(_.M9);
				this.tb = _.m(_.S9);
				this.oPa = _.m(_.$E);
				this.ea = _.m(_.SC);
				this.Aa = _.m(_.iC);
				this.ma = _.m(_.Op);
				this.window = _.m(_.Sn);
				this.ta = _.m(_.Cl);
				this.Ea = _.m(_.ZC);
				this.scrollbar = _.Ni(_.g9);
				this.wva = _.hi();
				this.Rv = _.M(new Map());
				this.Vza = _.V(!1);
				this.Qu = this.ma.getFlag(_.O9);
				this.LG = _.Ni(_.c2);
				this.Tn = _.W(() => {
					var a, b, c;
					return (c = (a = this.LG()) == null ? void 0 : (b = a.Ga) == null ? void 0 : b.nativeElement) != null ? c : null;
				});
				this.H = new Map([
					[1, "Text"],
					[2, "Image"],
					[3, "Audio"],
					[4, "Video"],
					[0, "Unspecified"]
				]);
				this.fda = _.Ck(this.A.lC.pipe(_.uf((a) => {
					var b;
					return (b = a.get("turnId")) != null ? b : "";
				})));
				this.projectId = this.oPa.get("project");
				this.R = this.tb.uq;
				this.Sa = _.W(() => {
					var a = this.Qj;
					return !a || a.Sa() || !a.value();
				});
				this.X = _.W(() => {
					if (this.Qu) {
						var a = this.Qj.value();
						if (a && _.Lm(a, 11) === 2) {
							var b;
							if (a = (b = _.Z(a, wPe, 9)) == null ? void 0 : b.getData()) {
								b = _.Is(a);
								try {
									return JSON.parse(b);
								} catch (c) {
									console.error("Failed to parse interactions request data:", c);
								}
							}
						}
					}
				});
				this.aa = _.W(() => {
					if (this.Qu) {
						var a = this.X();
						if (a) return JSON.stringify(a, null, 2);
					}
				});
				this.Ta = _.W(() => {
					if (this.Qu) {
						var a, b, c, d = (a = this.Qj) == null ? void 0 : (b = a.value()) == null ? void 0 : (c = _.mj(b, wPe, 10, _.oj())) == null ? void 0 : c.map((e) => e.getData());
						if (d && d.length !== 0) try {
							return d.map((e) => JSON.parse(_.Is(e)));
						} catch (e) {
							console.error("Failed to parse interactions response data array:", e);
						}
					}
				});
				this.h2a = _.W(() => {
					if (this.Qu) {
						var a = this.Ta();
						if (a) return a.map((b) => JSON.stringify(b, null, 2));
					}
				});
				this.previousInteractionId = _.W(() => {
					var a, b, c = (a = this.Qj) == null ? void 0 : (b = a.value()) == null ? void 0 : b.uja();
					if (c) return c;
					if (a = this.X()) return a.previous_interaction_id;
				});
				this.cb = _.W(() => {
					var a = this.fda(), b = `projects/${this.projectId()}`, c = this.tb.apiKey();
					return a && b && c ? {
						fda: a,
						projectId: b,
						apiKey: c
					} : void 0;
				});
				this.Qj = _.Zi(Object.assign({}, {}, {
					params: () => this.cb(),
					Xc: ({ params: a }) => {
						var b = this;
						return _.x(function* () {
							return a ? xPe(b.za, a.projectId, a.fda, a.apiKey) : Promise.resolve(void 0);
						});
					}
				}));
				this.Wka = _.M(!0);
				this.qla = _.M(!0);
				this.ala = _.M(!0);
				this.r9 = _.M(!1);
				this.w9 = _.M(!1);
				this.Cla = _.M(!1);
				this.x9a = _.Ni("searchGroundingTooltipTemplate");
				this.AFb = _.W(() => this.tools().some((a) => !!a.detail));
				this.Tka = _.M(!0);
				this.Ska = _.M(!1);
				this.KX = _.M("");
				this.rawModeEnabled = _.M(!0);
				this.oa = this.Ea.A.small;
				this.Id = _.W(() => this.oa() || _.lp());
				this.created = _.W(() => {
					var a, b;
					return (a = this.Qj.value()) == null ? void 0 : (b = a.aj()) == null ? void 0 : b.toDate();
				});
				this.B0 = _.W(() => {
					var a, b;
					return (b = (a = this.Qj.value()) == null ? void 0 : _.uj(a, 5, _.oj())) != null ? b : [];
				});
				this.I = _.W(() => new Map(this.R().map((a) => [a.getName(), a])));
				this.U = _.W(() => this.R().map((a) => ({
					id: a.getName().split("/")[1],
					displayName: a.getDisplayName(),
					name: a.getName()
				})));
				this.Jza = _.W(() => {
					var a = this.KX().toLowerCase();
					return a ? this.U().filter((b) => b.displayName.toLowerCase().includes(a)) : this.U();
				});
				this.jba = _.W(() => {
					var a = this.Jza(), b = a.length;
					if (b === 0) return {
						checked: !1,
						indeterminate: !1
					};
					a = a.filter((c) => this.v0().has(c.id)).length;
					return {
						checked: a === b,
						indeterminate: a > 0 && a < b
					};
				});
				this.id = this.fda;
				this.model = _.W(() => {
					var a, b, c;
					return (c = (a = this.Qj.value()) == null ? void 0 : (b = a.Kw()) == null ? void 0 : b.getModel()) != null ? c : void 0;
				});
				this.F = _.W(() => {
					var a, b, c, d = (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.map((e) => _.Z(e, _.by, 3))) != null ? c : [];
					if (d.length === 0) return new Map();
					a = d.reduce((e, f) => {
						var g;
						e.input += (g = f == null ? void 0 : _.yj(f, 1)) != null ? g : 0;
						var k;
						e.cachedContent += (k = f == null ? void 0 : _.yj(f, 4)) != null ? k : 0;
						var p;
						e.FLa += (p = f == null ? void 0 : _.yj(f, 8)) != null ? p : 0;
						var r;
						e.thought += (r = f == null ? void 0 : _.yj(f, 10)) != null ? r : 0;
						var v;
						e.output += (v = f == null ? void 0 : _.yj(f, 2)) != null ? v : 0;
						var w;
						e.total += (w = f == null ? void 0 : _.yj(f, 3)) != null ? w : 0;
						return e;
					}, {
						input: 0,
						cachedContent: 0,
						FLa: 0,
						thought: 0,
						output: 0,
						total: 0
					});
					return new Map([
						["input", a.input],
						["cachedContent", a.cachedContent],
						["toolUsePrompt", a.FLa],
						["thought", a.thought],
						["output", a.output],
						["total", a.total]
					]);
				});
				this.c2a = _.W(() => this.F().get("input"));
				this.Na = _.W(() => {
					var a, b, c, d = (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.flatMap((e) => {
						var f, g, k;
						(f = _.Z(e, _.by, 3)) == null ? k = void 0 : k = _.mj(f, vPe, 5, _.oj());
						return (g = k) != null ? g : [];
					})) != null ? c : [];
					if (d.length !== 0) return d.map((e) => {
						var f;
						return {
							modality: (f = this.H.get(_.Lm(e, 1))) != null ? f : "UNSPECIFIED",
							tokenCount: _.yj(e, 2)
						};
					});
				});
				this.rVa = _.W(() => this.F().get("cachedContent"));
				this.ywa = _.W(() => {
					var a, b, c, d = (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.flatMap((e) => {
						var f, g, k;
						(f = _.Z(e, _.by, 3)) == null ? k = void 0 : k = _.mj(f, vPe, 6, _.oj());
						return (g = k) != null ? g : [];
					})) != null ? c : [];
					if (d.length !== 0) return d.map((e) => {
						var f;
						return {
							modality: (f = this.H.get(_.Lm(e, 1))) != null ? f : "UNSPECIFIED",
							tokenCount: _.yj(e, 2)
						};
					});
				});
				this.lcb = _.W(() => this.F().get("toolUsePrompt"));
				this.toolUsePromptTokensDetails = _.W(() => {
					var a, b, c, d = (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.flatMap((e) => {
						var f, g, k;
						(f = _.Z(e, _.by, 3)) == null ? k = void 0 : k = _.mj(f, vPe, 9, _.oj());
						return (g = k) != null ? g : [];
					})) != null ? c : [];
					if (d.length !== 0) return d.map((e) => {
						var f;
						return {
							modality: (f = this.H.get(_.Lm(e, 1))) != null ? f : "UNSPECIFIED",
							tokenCount: _.yj(e, 2)
						};
					});
				});
				this.lUb = _.W(() => {
					var a, b;
					return ((a = this.c2a()) != null ? a : 0) - ((b = this.rVa()) != null ? b : 0);
				});
				this.Hcb = _.W(() => {
					var a = this.Na(), b = this.ywa();
					if (a && b) {
						var c = new Map(a.map((d) => [d.modality, d.tokenCount]));
						b = new Map(b.map((d) => [d.modality, d.tokenCount]));
						a = [];
						for (let [d, e] of c) {
							c = d;
							let f = e, g, k = (g = b.get(c)) != null ? g : 0;
							a.push({
								modality: c,
								tokenCount: f - k
							});
						}
						return a;
					}
				});
				this.Tbb = _.W(() => this.F().get("thought"));
				this.VLb = _.W(() => this.F().get("output"));
				this.M6a = _.W(() => {
					var a, b, c, d = (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.flatMap((e) => {
						var f, g, k;
						(f = _.Z(e, _.by, 3)) == null ? k = void 0 : k = _.mj(f, vPe, 7, _.oj());
						return (g = k) != null ? g : [];
					})) != null ? c : [];
					if (d.length !== 0) return d.map((e) => {
						var f;
						return {
							modality: (f = this.H.get(_.Lm(e, 1))) != null ? f : "UNSPECIFIED",
							tokenCount: _.yj(e, 2)
						};
					});
				});
				this.totalTokens = _.W(() => this.F().get("total"));
				this.status = _.W(() => {
					var a, b = (a = this.Qj.value()) == null ? void 0 : _.Z(a, _.lw, 8);
					if (b) return b.Ff() === 0 ? "success" : "fail";
				});
				this.statusMessage = _.W(() => {
					var a, b = (a = this.Qj.value()) == null ? void 0 : _.Z(a, _.lw, 8);
					if (b) return `${_.yYc(b.Ff())} - ${_.Uj(b.Ff())}`;
				});
				this.errorMessage = _.W(() => {
					var a, b = (a = this.Qj.value()) == null ? void 0 : _.Z(a, _.lw, 8);
					if (b && b.Ff() !== 0) return b.getMessage() || void 0;
				});
				this.jM = _.W(() => {
					var a, b = (a = this.Qj.value()) == null ? void 0 : a.rB();
					if (b) return _.yj(b, 2) === 1 ? "thumb_up" : "thumb_down";
				});
				this.zs = _.W(() => {
					var a, b = (a = this.Qj.value()) == null ? void 0 : a.rB();
					if (b) return _.l(b, 3);
				});
				this.Xa = _.W(() => {
					var a, b;
					return ((b = (a = this.Qj.value()) == null ? void 0 : _.J9(a)) != null ? b : []).flatMap((c) => _.dy(c).flatMap((d) => {
						var e, f;
						return (f = (e = _.Z(d, _.Zw, 8)) == null ? void 0 : _.uj(e, 5, _.oj())) != null ? f : [];
					})).length;
				});
				this.na = _.W(() => {
					var a;
					return ((a = this.model()) != null ? a : "").startsWith("models/gemini-3");
				});
				this.tools = _.W(() => {
					var a, b, c;
					return (c = (a = this.Qj.value()) == null ? void 0 : (b = a.Kw()) == null ? void 0 : b.XL().map((d) => {
						if (_.sn(d, _.O_a, 1)) return { name: _.N9.get("code_execution") };
						if (_.mj(d, _.Hn, 2, _.oj()).length) return { name: _.N9.get("function_calling") };
						if (_.sn(d, sPe, 3) || _.sn(d, _.$m, 4)) {
							d = {
								name: _.N9.get("search_grounding"),
								GTb: this.x9a()
							};
							if (this.na()) {
								var e = this.Xa();
								e && (d.detail = `Web search queries: ${e}`);
							}
							return d;
						}
						_.sn(d, tPe, 6) ? d = { name: _.N9.get("computer_use") } : (_.sn(d, _.W_a, 8) ? e = { name: _.N9.get("url_context") } : e = _.mj(d, uPe, 9, _.oj()).length ? { name: _.N9.get("mcp_servers") } : _.sn(d, rPe, 10) ? { name: _.N9.get("file_search") } : _.sn(d, _.P_a, 11) ? { name: _.N9.get("google_maps") } : { name: "Unknown tool" }, d = e);
						return d;
					})) != null ? c : [];
				});
				this.input = _.W(() => {
					var a, b;
					return (a = this.Qj.value()) == null ? void 0 : (b = a.Kw()) == null ? void 0 : _.oc(b);
				});
				this.K6a = _.W(() => {
					var a, b, c;
					return (c = (a = this.Qj.value()) == null ? void 0 : (b = _.J9(a)) == null ? void 0 : b.map((d) => _.oc(d))) != null ? c : [];
				});
				this.systemInstruction = _.W(() => {
					var a = this.input();
					if (a == null ? 0 : _.sn(a, _.Rw, 6)) return _.Qw(_.pp(_.Z(a, _.Rw, 6)), "System instruction");
				});
				this.gab = _.W(() => this.systemInstruction() ? 1 : 0);
				this.MBa = _.W(() => {
					var a, b, c = ((b = (a = this.input()) == null ? void 0 : _.Dw(a)) != null ? b : []).map((d) => _.cc(d));
					return $Ne(c);
				});
				this.J6a = _.W(() => {
					var a = this.K6a();
					if (a) {
						var b;
						a = ((b = a.map((c) => _.dy(c)).flat()) != null ? b : []).map((c) => _.pp(c.Sb()));
						return $Ne(a);
					}
				});
				this.Fa = _.W(() => {
					var a = this.systemInstruction(), b, c = (b = this.MBa()) != null ? b : [], d;
					b = (d = this.J6a()) != null ? d : [];
					return (a ? [
						a,
						...c,
						...b
					] : [...c, ...b]).map((e, f) => ({
						content: e.clone(),
						id: `content-${f}`
					}));
				});
				this.UIa = _.W(() => this.Fa().map((a) => {
					var b = a.content, c = b.Bq();
					c = c ? c.charAt(0).toUpperCase() + c.slice(1) : "";
					b = b.Gg()[0];
					b = ERe(b);
					return {
						id: a.id,
						label: `${c} - ${b}`
					};
				}));
				this.Pna = _.W(() => this.rawModeEnabled() ? "Show conversation with markdown formatting" : "Show conversation without markdown formatting");
				this.BGb = _.W(() => {
					if (this.aa() && this.Qu) return this.aa();
					var a = this.input();
					return a ? WNe(a) : void 0;
				});
				this.v0 = _.M(new Set());
				this.oI = _.M(!1);
				this.CIb = _.M(!1);
				_.M(!1);
				this.fa = _.vp(() => {
					this.oI.set(!1);
				}, _.m(_.ag), 200);
				this.Id() && (this.Wka.set(!1), this.rawModeEnabled.set(!1));
				_.Fk([this.wva], () => {
					var a = this.wva(), b = new Map();
					a.forEach((c) => {
						var d = c.nativeElement.dataset.contentId;
						d && b.set(d, c.nativeElement);
					});
					this.Rv.set(b);
				});
				_.Fk([this.Qj.error], () => {
					this.Qj.error() && this.ta.navigate(["/no-log-access"]);
				});
			}
			ib() {
				this.Qc.BF.set(!1);
			}
			Ba() {
				this.Qc.BF.set(!0);
			}
			xl(a) {
				a && (this.ea.copy(a), this.Aa.success("Copied to clipboard", 20));
			}
			Uca() {
				this.rawModeEnabled.update((a) => !a);
			}
			mda(a, b) {
				var c = this;
				return _.x(function* () {
					a.stopPropagation();
					var d = c.dialog.open(_.Q9, {
						data: {
							jM: b,
							message: c.zs()
						},
						width: "500px"
					});
					if (d = yield _.pf(_.jC(d))) {
						let e;
						yield c.tb.nC(c.id(), (e = d.feedback) != null ? e : void 0, d.zs);
						c.Qj.reload();
					}
				});
			}
			BFa() {
				this.oI.set(!0);
				this.fa();
			}
			AFa(a) {
				var b = a.target;
				if (!b || b.tagName !== "INPUT" && b.tagName !== "TEXTAREA" && !b.isContentEditable) {
					if (b = a.altKey && !a.shiftKey && !a.ctrlKey && !a.metaKey, (a.key === "ArrowUp" || a.key === "ArrowDown") && b && (a.preventDefault(), a = this.scrollbar())) _.f9(a), a.Yr("active");
				}
			}
			CGa() {
				var a = this;
				return _.x(function* () {
					var b = a.dialog.open(_.P9, {
						width: "500px",
						data: { name: a.KX() }
					});
					if (b = yield _.pf(_.jC(b))) b = _.BNe(_.ANe(_.zNe(_.yNe(new _.px(), b.name), b.description), [a.id()]), b.share), yield _.QNe(a.tb, b);
				});
			}
		};
		_.is.J = function(a) {
			return new (a || _.is)();
		};
		_.is.ka = _.u({
			type: _.is,
			da: [["ms-session"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.scrollbar, _.g9, 5)(b.wva, BRe, 5)(b.LG, _.c2, 5)(b.x9a, CRe, 5);
				a & 2 && _.ki(4);
			},
			inputs: { Vza: [1, "freezeLoadingBarForTesting"] },
			features: [_.yi([_.VL])],
			ha: 1,
			ia: 1,
			la: [
				["searchGroundingTooltipTemplate", ""],
				["sessionContainer", ""],
				["contentItem", ""],
				["datasetMenu", "matMenu"],
				[1, "session-main"],
				[1, "header"],
				[1, "header-left"],
				[
					"ms-button",
					"",
					"routerLink",
					"..",
					"queryParamsHandling",
					"preserve",
					"aria-label",
					"Back to logs page",
					1,
					"ms-button-primary",
					3,
					"variant",
					"iconName"
				],
				[1, "title"],
				[1, "title-text-main"],
				[
					1,
					"status-chip",
					3,
					"success",
					"fail"
				],
				[1, "view-options-container"],
				[3, "matTooltip"],
				[
					"aria-label",
					"Toggle viewing raw output",
					"data-test-raw-toggle",
					"",
					3,
					"change",
					"checked",
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
					"Open properties panel",
					1,
					"properties-open-button",
					3,
					"click",
					"iconName"
				],
				[
					3,
					"mode",
					"value"
				],
				[1, "right-side-panel"],
				[1, "settings-group-header"],
				[1, "item-about"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"Close properties panel",
					3,
					"click",
					"iconName"
				],
				[1, "panel-title"],
				[1, "right-side-panel-content"],
				[1, "group-title"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"aria-label",
					"expand properties section",
					1,
					"expand-properties-button",
					3,
					"click",
					"iconName"
				],
				[1, "item-row"],
				[1, "status-chip"],
				[
					1,
					"icon",
					"filled",
					3,
					"iconName"
				],
				[1, "status-message"],
				[
					"tabindex",
					"-1",
					1,
					"session-autoscroll-container",
					3,
					"scroll",
					"keydown",
					"isScrollable",
					"disabled"
				],
				[1, "session-container"],
				[1, "session-input"],
				[1, "session-label"],
				[1, "session-content-container"],
				[
					"language",
					"json",
					"headerText",
					"Input",
					"wrapLines",
					"",
					"data-test-id",
					"interactions-request-raw-mode",
					3,
					"code"
				],
				[1, "session-content-divider"],
				[1, "session-output"],
				[
					"data-test-id",
					"error-message",
					1,
					"session-error-message"
				],
				[
					1,
					"session-scrollbar",
					3,
					"items",
					"turnElements",
					"scrollableElement"
				],
				[1, "session-system-instruction"],
				[
					"language",
					"json",
					"headerText",
					"System Instructions",
					"wrapLines",
					"",
					3,
					"code"
				],
				[
					"data-content-id",
					"content-0",
					1,
					"session-content"
				],
				[1, "session-content-role"],
				[1, "session-content-parts"],
				[
					3,
					"part",
					"animateText"
				],
				[1, "session-content"],
				[
					3,
					"text",
					"isThinkingRunning",
					"modelName"
				],
				[
					"language",
					"json",
					"headerText",
					"Output",
					"wrapLines",
					"",
					"data-test-id",
					"interactions-response-raw-mode",
					3,
					"code"
				],
				[
					"language",
					"json",
					"headerText",
					"Output",
					"wrapLines",
					"",
					3,
					"code"
				],
				[1, "item-value"],
				[
					1,
					"item-value",
					"id-container"
				],
				[1, "id-value"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"Copy the ID to the clipboard",
					1,
					"id-button",
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
					"Copy the model name to the clipboard",
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
					"expand tokens section",
					1,
					"expand-properties-button",
					3,
					"click",
					"iconName"
				],
				[1, "token-count-list"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"expand tools section",
					1,
					"expand-properties-button",
					3,
					"iconName",
					"expanded"
				],
				[1, "item-tools"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"Open the previous interaction in new window",
					1,
					"id-button",
					3,
					"click",
					"iconName"
				],
				[1, "child-token-count"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"small",
					"aria-label",
					"expand tools section",
					1,
					"expand-properties-button",
					3,
					"click",
					"iconName"
				],
				[
					"dialogLabel",
					"Tool billing information",
					"tabindex",
					"0",
					1,
					"child-token-count",
					3,
					"xapInlineDialog",
					"overlaySize"
				],
				[1, "tool-tooltip"],
				"href https://ai.google.dev/gemini-api/docs/google-search#pricing target _blank rel noopener".split(" "),
				[1, "dataset-chips"],
				[
					"ms-button",
					"",
					"variant",
					"link",
					"data-test-dataset-expand-button",
					"",
					1,
					"dataset-chips-button"
				],
				[
					"ms-button",
					"",
					"variant",
					"link",
					"data-test-dataset-change-button",
					"",
					1,
					"dataset-chips-button",
					3,
					"menuOpened",
					"menuClosed",
					"matMenuTriggerFor"
				],
				[
					"label",
					"Search datasets",
					"placeholder",
					"Search datasets",
					3,
					"click",
					"valueChange",
					"hideLabel",
					"icon",
					"type",
					"value"
				],
				[
					3,
					"click",
					"change",
					"checked",
					"indeterminate"
				],
				[1, "dataset-options-wrapper"],
				[3, "checked"],
				[
					"ms-button",
					"",
					"size",
					"large",
					"variant",
					"borderless",
					3,
					"click"
				],
				[1, "dataset-chip"],
				[
					"ms-button",
					"",
					"variant",
					"link",
					"data-test-dataset-expand-button",
					"",
					1,
					"dataset-chips-button",
					3,
					"click"
				],
				[
					3,
					"click",
					"change",
					"checked"
				],
				[1, "human-eval-buttons"],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Give thumbs up for output",
					"matTooltip",
					"Pass",
					3,
					"click",
					"iconName",
					"active",
					"disabled"
				],
				[
					"ms-button",
					"",
					"variant",
					"borderless",
					"aria-label",
					"Give thumbs down for output",
					"matTooltip",
					"Fail",
					3,
					"click",
					"iconName",
					"active",
					"disabled"
				],
				[
					1,
					"item-value",
					"rationale-container"
				],
				[1, "rationale-text"],
				[
					"ms-button",
					"",
					"variant",
					"link",
					1,
					"rationale-button"
				],
				[
					"ms-button",
					"",
					"variant",
					"link",
					1,
					"rationale-button",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, qPe, 42, 29);
				a & 2 && _.C(b.Qj.error() ? -1 : 0);
			},
			dependencies: [
				_.c2,
				_.Yy,
				_.aM,
				_.JD,
				_.dz,
				_.qE,
				_.pE,
				_.OD,
				_.ND,
				_.wI,
				_.tI,
				_.vI,
				_.tO,
				_.sO,
				_.hF,
				_.gF,
				_.IC,
				_.HC,
				_.UO,
				_.tA,
				_.sA,
				_.f5,
				_.Cz,
				_.Bz,
				_.EC,
				_.g9,
				_.mE,
				_.pz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:100%}.session-main[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;min-width:0;height:100%;background-color:var(--color-v3-surface)}ms-autoscroll-container[_ngcontent-%COMP%]{container-type:size;outline:none;height:100%;padding:0}.session-scrollbar[_ngcontent-%COMP%]{bottom:0;padding:16px 0;position:absolute;right:0;top:64px;z-index:1}.header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px;border-bottom:1px solid var(--color-v3-outline-var);gap:8px}.header.hidden[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:4px;overflow:hidden}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text-main[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--color-v3-surface-container-high);border-radius:8px;border:1px solid var(--color-v3-outline);color:var(--color-v3-text);cursor:default;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:2px 6px 2px 4px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:12px;margin-right:4px}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .status-chip.success[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:var(--color-v3-accent-4)}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .status-chip.fail[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:var(--color-v3-accent-3)}.header[_ngcontent-%COMP%]   .view-options-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;gap:8px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.header[_ngcontent-%COMP%]   .view-options-container[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{margin-left:12px}.right-side-panel[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;width:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,0);transition:width .2s cubic-bezier(.4,0,.2,0)}@media screen and (max-width:600px){.right-side-panel[_ngcontent-%COMP%]{-webkit-transition:none;transition:none}}.right-side-panel.expanded[_ngcontent-%COMP%]{width:300px;border-left:1px solid var(--color-v3-outline-var)}@media screen and (max-width:600px){.right-side-panel.expanded[_ngcontent-%COMP%]{width:100%;border-left:none}}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]{cursor:pointer;margin-left:0;margin-top:8px;margin-bottom:8px;margin-top:16px;margin-inline:16px}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%] > .item-about[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header.last-group[_ngcontent-%COMP%]:not(.expanded){margin-bottom:24px}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header.expanded[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{-webkit-box-ordinal-group:3;-webkit-order:2;-moz-box-ordinal-group:3;-ms-flex-order:2;order:2}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-webkit-order:1;-moz-box-ordinal-group:2;-ms-flex-order:1;order:1}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%]{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.right-side-panel[_ngcontent-%COMP%]   .settings-group-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{white-space:nowrap}.right-side-panel[_ngcontent-%COMP%]   .right-side-panel-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px;height:100%;padding-inline:16px}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.right-side-panel[_ngcontent-%COMP%]   .item-about.item-about-slider[_ngcontent-%COMP%]{margin-bottom:-10px}.right-side-panel[_ngcontent-%COMP%]   .item-about.item-about-search[_ngcontent-%COMP%]{display:block}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .item-description.tagged[_ngcontent-%COMP%]{width:auto}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{margin:0}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .expand-properties-button[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:-webkit-transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0);transition:transform .2s cubic-bezier(.4,0,.2,0),-webkit-transform .2s cubic-bezier(.4,0,.2,0);-webkit-transform:rotate(0deg);transform:rotate(0deg)}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .expand-properties-button.expanded[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.right-side-panel[_ngcontent-%COMP%]   .item-about[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%]{color:var(--color-v3-text-var);margin-block:0;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.right-side-panel[_ngcontent-%COMP%]   .item-value[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.right-side-panel[_ngcontent-%COMP%]   .item-tools[_ngcontent-%COMP%]{color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.session-container[_ngcontent-%COMP%]{padding:32px;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media screen and (max-width:600px){.session-container[_ngcontent-%COMP%]{padding:12px}.session-container.has-scrollbar[_ngcontent-%COMP%]{padding-right:32px}}.session-input[_ngcontent-%COMP%], .session-output[_ngcontent-%COMP%], .session-system-instruction[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:60px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.session-label[_ngcontent-%COMP%]{color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:-webkit-sticky;position:sticky;top:0;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}.session-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:75px}.session-content-divider[_ngcontent-%COMP%]{margin:24px 0}.session-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px}.session-content-role[_ngcontent-%COMP%]{color:var(--color-v3-text-var);text-transform:capitalize;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.session-content-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;min-width:0}.session-error-message[_ngcontent-%COMP%]{color:var(--color-v3-accent-3);font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px}pre[_ngcontent-%COMP%]{white-space:pre-wrap}.token-count-list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.token-count-list[_ngcontent-%COMP%]   .child-token-count[_ngcontent-%COMP%]{margin-left:16px}.human-eval-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:4px}.human-eval-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:6px}.rationale-container[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.rationale-container[_ngcontent-%COMP%]   .rationale-text[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;margin-bottom:2px}.rationale-container[_ngcontent-%COMP%]   .rationale-text.expanded[_ngcontent-%COMP%]{display:block;-webkit-line-clamp:unset}.rationale-container[_ngcontent-%COMP%]   .rationale-button[_ngcontent-%COMP%]{padding:0}.panel-title[_ngcontent-%COMP%]{color:var(--color-v3-text-var);margin-block:0;font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.dataset-chips[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:4px}.dataset-chips[_ngcontent-%COMP%]   .dataset-chip[_ngcontent-%COMP%]{background-color:var(--color-v3-surface-container-high);border-radius:8px;border:1px solid var(--color-v3-outline);color:var(--color-v3-text);cursor:default;max-width:128px;overflow:hidden;padding:2px 6px 2px 4px;text-overflow:ellipsis;white-space:nowrap;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px}.dataset-chips-button[_ngcontent-%COMP%]{padding:0}.dataset-options-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:240px;overflow-y:auto}.tool-tooltip[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text-var);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding:12px}.id-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:8px}.id-container[_ngcontent-%COMP%]   .id-value[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.id-container[_ngcontent-%COMP%]   .id-button[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


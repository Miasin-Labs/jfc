"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var Emd;
		Emd = function(a) {
			return _.x(function* () {
				if (a.A === 0) {
					let { promise: b, resolve: c } = Promise.withResolvers();
					a.Fi.push(c);
					return b;
				}
				a.A--;
			});
		};
		_.Fmd = function(a, b, c) {
			return _.x(function* () {
				if (a.A > 0) {
					if (c !== void 0 && a.F + a.A > c) throw Error("nc`" + a.F + "`" + a.A + "`" + c);
					a.F += a.A;
					yield new Promise((d) => {
						setTimeout(d, a.A);
					});
				}
				yield Emd(a.H);
				try {
					(yield b()).success ? (a.A = 0, a.F = 0) : a.A = a.A === 0 ? 500 : Math.min(a.A * 2, 6e4);
				} finally {
					a.H.release();
				}
			});
		};
		_.t3 = class {
			constructor() {
				this.Ia = _.m(_.oF);
				this.A = _.m(_.uG);
				this.F = _.m(_.sdb);
				this.A5 = _.vf([_.Bk(this.Ia.theme), _.Bk(this.A.H)]).pipe(_.uf(([a, b]) => {
					a: switch (a) {
						case "dark":
							a = 2;
							break a;
						case "light":
							a = 1;
							break a;
						default: a = 0;
					}
					return Object.assign({}, this.F, { colorScheme: a }, b ? { productData: { contextError: b } } : {});
				}));
			}
		};
		_.t3.J = function(a) {
			return new (a || _.t3)();
		};
		_.t3.sa = _.Cd({
			token: _.t3,
			factory: _.t3.J,
			wa: "root"
		});
		var Gmd = new _.he("xapFeedbackConfig");
		var Hmd = function(a, b, c) {
			_.IBb(a, b, c);
		}, u3 = class {};
		u3.J = function(a) {
			return new (a || u3)();
		};
		u3.sa = _.Cd({
			token: u3,
			factory: u3.J,
			wa: "root"
		});
		var Imd;
		Imd = function(a) {
			var b, c = (b = a.TD()) != null ? b : a.config;
			b = Object.assign({}, c);
			c = b.productData;
			var d = b.window;
			delete b.window;
			delete b.productData;
			Hmd(Object.assign({}, b, {
				callback: (e) => {
					a.SZa.emit({ y7b: e });
				},
				onLoadCallback: () => {
					if (a.element.nativeElement.closest("[popover]")) {
						var e = a.document.getElementById("google-feedback");
						e && "showPopover" in e && (e.style.background = "none", e.style.border = "none", e.style.padding = "0", e.setAttribute("popover", "manual"), e.hidePopover(), e.showPopover());
					}
					a.TZa.emit();
				}
			}), c, d);
		};
		_.v3 = class {
			constructor() {
				this.feedback = _.m(u3);
				this.element = _.m(_.Jf);
				this.document = _.m(_.Xk);
				this.config = _.m(Gmd, { optional: !0 });
				this.TD = _.Li(void 0, Object.assign({}, {}, { alias: "xapFeedbackConfig" }));
				this.SZa = _.Ki();
				this.TZa = _.Ki();
			}
		};
		_.v3.J = function(a) {
			return new (a || _.v3)();
		};
		_.v3.Oa = _.We({
			type: _.v3,
			da: [[
				"button",
				"xapFeedback",
				""
			]],
			Ja: function(a, b) {
				a & 1 && _.J("click", function() {
					return Imd(b);
				});
			},
			inputs: { TD: [
				1,
				"xapFeedbackConfig",
				"feedbackConfig"
			] },
			outputs: {
				SZa: "xapFeedbackCompleted",
				TZa: "xapFeedbackLoaded"
			}
		});
		_.hr("QzEnaf");
		var rOd = function(a) {
			a & 1 && (_.F(0, "p", 4), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.Q8a()));
		}, sOd = function(a) {
			a & 1 && (_.F(0, "button", 5), _.R(1), _.H());
			a & 2 && (a = _.K(), _.E("iconName", a.g0())("routerLink", a.ZNb()), _.y(), _.S(" ", a.sIa(), " "));
		}, tOd = function(a) {
			a & 1 && (_.F(0, "button", 6), _.Ei(1, "async"), _.I(2, "span", 8), _.R(3), _.H());
			if (a & 2) {
				a = _.K();
				let b;
				_.E("xapFeedbackConfig", (b = _.Fi(1, 3, a.Dza.A5)) != null ? b : void 0);
				_.y(2);
				_.E("iconName", a.g0());
				_.y();
				_.S(" ", a.sIa(), " ");
			}
		}, uOd = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 9);
				_.J("click", function() {
					_.q(b);
					var c;
					(c = _.K().wwa()) == null || c();
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("iconName", a.g0()), _.y(), _.S(" ", a.sIa(), " "));
		};
		_.hs = class {
			constructor() {
				this.A = _.m(_.ll);
				this.Dza = _.m(_.t3);
				this.title = _.V("Page not found");
				this.description = _.V("Check that the URL was entered correctly and try again");
				this.buttonType = _.V("link");
				this.buttonIcon = _.V("home_storage");
				this.buttonLabel = _.V("Go to library");
				this.buttonRouterLink = _.V("/library");
				this.wwa = _.V();
				this.BJb = "link";
				this.YCb = "feedback";
				this.cya = "custom";
				this.F = _.Ck(this.A.data, { initialValue: {} });
				this.aOb = _.W(() => {
					var a;
					return (a = this.F().title) != null ? a : this.title();
				});
				this.Q8a = _.W(() => {
					var a;
					return (a = this.F().description) != null ? a : this.description();
				});
				this.tIa = _.W(() => {
					var a;
					return (a = this.F().buttonType) != null ? a : this.buttonType();
				});
				this.g0 = _.W(() => {
					var a;
					return (a = this.F().buttonIcon) != null ? a : this.buttonIcon();
				});
				this.sIa = _.W(() => {
					var a;
					return (a = this.F().buttonLabel) != null ? a : this.buttonLabel();
				});
				this.ZNb = _.W(() => {
					var a;
					return (a = this.F().buttonRouterLink) != null ? a : this.buttonRouterLink();
				});
			}
		};
		_.hs.J = function(a) {
			return new (a || _.hs)();
		};
		_.hs.ka = _.u({
			type: _.hs,
			da: [["error-state"]],
			inputs: {
				title: [1, "title"],
				description: [1, "description"],
				buttonType: [1, "buttonType"],
				buttonIcon: [1, "buttonIcon"],
				buttonLabel: [1, "buttonLabel"],
				buttonRouterLink: [1, "buttonRouterLink"],
				wwa: [1, "buttonAction"]
			},
			ha: 10,
			ia: 5,
			la: [
				[1, "page-content-wrapper"],
				[1, "page-content-inner-wrapper"],
				[1, "no-access"],
				[1, "content"],
				[1, "description"],
				[
					"ms-button",
					"",
					3,
					"iconName",
					"routerLink"
				],
				[
					"ms-button",
					"",
					"xapFeedback",
					"",
					"aria-label",
					"Send feedback",
					3,
					"xapFeedbackConfig"
				],
				[
					"ms-button",
					"",
					3,
					"iconName"
				],
				[
					1,
					"start-icon",
					3,
					"iconName"
				],
				[
					"ms-button",
					"",
					3,
					"click",
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h2"), _.R(5), _.H(), _.B(6, rOd, 2, 1, "p", 4), _.B(7, sOd, 2, 3, "button", 5), _.B(8, tOd, 4, 5, "button", 6), _.B(9, uOd, 2, 2, "button", 7), _.H()()()());
				a & 2 && (_.y(5), _.U(b.aOb()), _.y(), _.C(b.Q8a().length > 0 ? 6 : -1), _.y(), _.C(b.tIa() === b.BJb && b.g0() ? 7 : -1), _.y(), _.C(b.tIa() === b.YCb && b.g0() ? 8 : -1), _.y(), _.C(b.tIa() === b.cya && b.g0() && b.wwa() ? 9 : -1));
			},
			dependencies: [
				_.Yy,
				_.v3,
				_.dz,
				_.sA,
				_.oz
			],
			styles: [".no-access[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.content[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:24px;margin-top:120px}.description[_ngcontent-%COMP%]{max-width:500px;text-align:center}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


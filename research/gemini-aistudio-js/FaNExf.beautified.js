"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var Jie;
		Jie = function(a) {
			a = a.Ga.nativeElement;
			a.muted = !0;
			var b = window.navigator;
			b.getAutoplayPolicy ? b.getAutoplayPolicy(a) === "allowed" || b.getAutoplayPolicy(a) === "allowed-muted" ? (a = a.play()) && a.catch(() => {}) : b.getAutoplayPolicy(a) === "disallowed" && a.removeAttribute("autoplay") : (a = a.play()) && a.catch(() => {});
		};
		_.$7 = class {
			constructor() {
				this.Ga = _.m(_.Jf);
			}
			Oj() {
				Jie(this);
			}
		};
		_.$7.J = function(a) {
			return new (a || _.$7)();
		};
		_.$7.Oa = _.We({
			type: _.$7,
			da: [[
				"",
				"ms-autoplaying-video",
				""
			]]
		});
		var Kie, Lie, Mie, Nie, Oie, Pie, Qie, Rie, Sie, Tie, Uie, Vie, Wie, Xie, Yie;
		Kie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 25, 0);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.ada(c));
				});
				_.I(2, "span", 26);
				_.R(3, " Sign up and get started ");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("routerLink", a.sq(""))("ve", a.ve.WO)("veImpression", !0)("veClick", !0), _.y(2), _.E("iconName", a.S.ZJ));
		};
		Lie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 27, 0);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.ada(c));
				});
				_.I(2, "span", 26);
				_.R(3, " Sign up and get started ");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("ve", a.ve.WO)("veImpression", !0)("veClick", !0), _.wh("href", a.sq(""), _.rg), _.y(2), _.E("iconName", a.S.ZJ));
		};
		Mie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 28);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(a8(d, c));
				});
				_.R(1, "AI Studio");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("routerLink", a.sq(""))("ve", a.ve.Ss)("veImpression", !0)("veClick", !0));
		};
		Nie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 18);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(a8(d, c));
				});
				_.R(1, "AI Studio");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("ve", a.ve.Ss)("veImpression", !0)("veClick", !0), _.wh("href", a.sq(""), _.rg));
		};
		Oie = function(a) {
			a & 1 && _.I(0, "img", 20);
		};
		Pie = function(a) {
			a & 1 && _.I(0, "img", 21);
		};
		Qie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 19);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(b8(d, c));
				});
				_.B(1, Oie, 1, 0, "img", 20)(2, Pie, 1, 0, "img", 21);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("routerLink", a.sq("").toString())("ve", a.ve.xPa)("veImpression", !0)("veClick", !0), _.y(), _.C(a.FU() || a.JE() ? 2 : 1));
		};
		Rie = function(a) {
			a & 1 && _.I(0, "img", 20);
		};
		Sie = function(a) {
			a & 1 && _.I(0, "img", 21);
		};
		Tie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 22);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(b8(d, c));
				});
				_.B(1, Rie, 1, 0, "img", 20)(2, Sie, 1, 0, "img", 21);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("ve", a.ve.xPa)("veImpression", !0)("veClick", !0), _.wh("href", a.sq(""), _.rg), _.y(), _.C(a.FU() || a.JE() ? 2 : 1));
		};
		Uie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 23);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.ada(c));
				});
				_.I(1, "span", 13);
				_.R(2, " Get started ");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("routerLink", a.sq("").toString())("ve", a.ve.WO)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.S.ZJ));
		};
		Vie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 24);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.ada(c));
				});
				_.I(1, "span", 13);
				_.R(2, " Get started ");
				_.H();
			}
			a & 2 && (a = _.K(), _.E("ve", a.ve.WO)("veImpression", !0)("veClick", !0), _.wh("href", a.sq(""), _.rg), _.y(), _.E("iconName", a.S.ZJ));
		};
		Wie = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 25, 2);
				_.J("mousemove", function(c) {
					_.q(b);
					var d = _.K();
					return _.t(d.onMouseMove(c));
				})("click", function(c) {
					_.q(b);
					var d = _.K(), e;
					_.Rn(d.Isa, "WELCOME_LANDING", "Clicked Welcome Page Notification Banner", (e = c.target.textContent) != null ? e : "");
					return _.t();
				});
				_.I(2, "div", 26);
				_.F(3, "div", 27);
				_.Ee();
				_.F(4, "svg", 28);
				_.I(5, "circle", 29);
				_.H();
				_.Fe();
				_.F(6, "span", 30);
				_.R(7, "New");
				_.H()();
				_.F(8, "div", 31)(9, "div", 32);
				_.R(10);
				_.H();
				_.F(11, "div", 33);
				_.R(12);
				_.H()()();
			}
			if (a & 2) {
				a = _.K();
				let b = a.isSignedIn ? a.Jma.CRb.toString() : a.Jma.DRb.toString();
				_.E("ve", a.ve.pmb)("veImpression", !0)("veClick", !0);
				_.wh("href", b, _.rg);
				_.y(10);
				_.S(" ", a.Jma.title, " ");
				_.y(2);
				_.S(" ", a.Jma.description, " ");
			}
		};
		Xie = ["canvas"];
		Yie = function(a) {
			var b, c;
			a = (b = a.canvas()) == null ? void 0 : (c = b.nativeElement) == null ? void 0 : c.getBoundingClientRect();
			return {
				dg: a.width,
				Pf: a.height
			};
		};
		_.c8 = class {
			constructor() {
				this.dg = _.M(0);
				this.Pf = _.M(0);
				this.canvas = _.Ni("canvas");
				this.F = [];
				this.A = new ResizeObserver(() => {
					var a, b = (a = this.canvas()) == null ? void 0 : a.nativeElement;
					if (b) {
						let { dg: c, Pf: d } = Yie(this);
						b.width = `${c}`;
						b.height = `${d}`;
						this.Pya(b, this.F);
					}
				});
				_.Fk([this.canvas], () => {
					var a, b = (a = this.canvas()) == null ? void 0 : a.nativeElement;
					if (b) {
						let { dg: c, Pf: d } = Yie(this);
						a = d / 30;
						let e = c / 30, f = Math.floor(a * e * .05), g = [];
						for (let k = 0; k < f; k++) g.push([Math.floor(Math.random() * e), Math.floor(Math.random() * a)]);
						this.F = g;
						this.A.observe(b);
					}
				});
			}
			Ba() {
				this.A.disconnect();
			}
			Pya(a, b) {
				var c = a.getContext("2d"), d = a.width;
				a = a.height;
				if (c) {
					c.clearRect(0, 0, d, a);
					c.save();
					c.strokeStyle = "#2a2a2a";
					for (var e = 0; e < d; e += 30) c.moveTo(e, 0), c.lineTo(e, a), c.stroke();
					for (e = 0; e < a; e += 30) c.moveTo(0, e), c.lineTo(d, e), c.stroke();
					c.fillStyle = "#3e3e3e";
					c.globalAlpha = .5;
					for (let [f, g] of b) c.fillRect(f * 30, g * 30, 30, 30);
					c.restore();
				}
			}
		};
		_.c8.J = function(a) {
			return new (a || _.c8)();
		};
		_.c8.ka = _.u({
			type: _.c8,
			da: [["ms-marketing-grid-canvas"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.canvas, Xie, 5);
				a & 2 && _.ki();
			},
			ha: 2,
			ia: 0,
			la: [["canvas", ""], [1, "canvas"]],
			template: function(a) {
				a & 1 && _.Fh(0, "canvas", 1, 0);
			},
			styles: [".canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]
		});
		var Zie, a8;
		Zie = ["animateInView"];
		a8 = function(a, b) {
			var c;
			_.Rn(a.A, "FOOTER", "Clicked Footer Link", (c = b.target.textContent) != null ? c : "");
		};
		_.d8 = class {
			constructor() {
				this.A = _.m(_.Ou);
				this.H = _.m(_.Qu);
				this.isSignedIn = this.H.isSignedIn;
				this.S = _.Dk;
				this.ve = {
					Ss: 271739,
					WO: 271733
				};
				this.lp = _.hi();
				this.F = new IntersectionObserver((a) => {
					var b = 0;
					for (let c of a) c.isIntersecting && (setTimeout(() => {
						c.target.classList.add("animation-triggered");
					}, b), this.F.unobserve(c.target), b += 100);
				}, { threshold: .5 });
				_.Fk([this.lp], () => {
					var a = this.lp();
					if (a.length > 0) for (let b of a) this.F.observe(b.nativeElement);
				});
			}
			ada(a) {
				var b;
				_.Rn(this.A, "WELCOME_LANDING", "Clicked Sign Up and Get Started Button", (b = a.target.href) != null ? b : "");
			}
			sq(a) {
				return this.isSignedIn ? `/${a}` : _.kd(_.On(new _.hk("https://accounts.google.com/ServiceLogin"), "continue", `${window.location.origin}/${a}`).toString()).toString();
			}
		};
		_.d8.J = function(a) {
			return new (a || _.d8)();
		};
		_.d8.ka = _.u({
			type: _.d8,
			da: [["ms-marketing-welcome-footer"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.lp, Zie, 5);
				a & 2 && _.ki();
			},
			ha: 44,
			ia: 44,
			la: [
				["animateInView", ""],
				[1, "footer-cta-container"],
				[
					1,
					"footer-lockup-container",
					"animate-in-view"
				],
				[
					"type",
					"lockup",
					1,
					"footer-lockup-logo",
					3,
					"useCurrentColor"
				],
				[
					1,
					"footer-subtitle",
					"wipe-container"
				],
				[1, "wipe-text"],
				[1, "footer-cta-button-container"],
				[
					1,
					"custom-button-large",
					"footer-cta-button",
					"animate-in-view",
					3,
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"custom-button-large",
					"footer-cta-button",
					"animate-in-view",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "footer-links"],
				[1, "link-group"],
				[
					"documentation-path",
					"/gemini-api/terms",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"https://policies.google.com/privacy",
					"target",
					"_blank",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"https://gemini.google/about/",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"documentation-path",
					"/gemini-api/docs",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"documentation-path",
					"/gemini-api/docs/pricing",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"documentation-path",
					"/gemini-api/docs/models",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"/models/gemini-3",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"/models/gemini-3-1-flash-image",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"/models/gemini-3-pro-image",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"documentation-path",
					"/gemini-api/docs/imagen",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"href",
					"/models/veo-3",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"custom-button-large",
					"footer-cta-button",
					"animate-in-view",
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[3, "iconName"],
				[
					1,
					"custom-button-large",
					"footer-cta-button",
					"animate-in-view",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 1)(1, "div", 2, 0), _.I(3, "ms-logo-icon", 3), _.H(), _.F(4, "div", 4, 0)(6, "span", 5), _.R(7, " Start exploring and building with Google’s latest AI models "), _.H()(), _.F(8, "div", 6), _.B(9, Kie, 4, 5, "a", 7)(10, Lie, 4, 5, "a", 8), _.H()(), _.F(11, "section", 9)(12, "div", 10)(13, "a", 11), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(14, "Terms"), _.H(), _.F(15, "a", 12), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(16, "Privacy"), _.H()(), _.F(17, "div", 10), _.B(18, Mie, 2, 4, "a", 13)(19, Nie, 2, 4, "a", 14), _.F(20, "a", 15), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(21, "Gemini App"), _.H(), _.F(22, "a", 16), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(23, "Documentation"), _.H(), _.F(24, "a", 17), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(25, "Pricing"), _.H()(), _.F(26, "div", 10)(27, "a", 18), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(28, "Vibe Code"), _.H(), _.F(29, "a", 18), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(30, "Gemini API Key"), _.H()(), _.F(31, "div", 10)(32, "a", 19), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(33, "Gemini"), _.H(), _.F(34, "a", 20), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(35, "Gemini 3 Pro Preview"), _.H(), _.F(36, "a", 21), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(37, "Gemini 3.1 Flash Image"), _.H(), _.F(38, "a", 22), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(39, "Gemini 3 Pro Image Preview"), _.H(), _.F(40, "a", 23), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(41, "Imagen"), _.H(), _.F(42, "a", 24), _.J("click", function(c) {
					return a8(b, c);
				}), _.R(43, "Veo 3"), _.H()()());
				a & 2 && (_.y(3), _.E("useCurrentColor", !0), _.y(6), _.C(b.isSignedIn ? 9 : 10), _.y(4), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(3), _.C(b.isSignedIn ? 18 : 19), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(3), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.wh("href", "vibe-code", _.rg), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.wh("href", b.sq("apikey"), _.rg), _.y(3), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.Ss)("veImpression", !0)("veClick", !0));
			},
			dependencies: [
				_.tz,
				_.LC,
				_.dz,
				_.tG,
				_.tA,
				_.sA,
				_.Cz,
				_.Bz
			],
			styles: ["@-webkit-keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.feature-cards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px 16px;margin-bottom:30px;min-width:0;width:100%}@media screen and (max-width:600px){.feature-cards-container[_ngcontent-%COMP%]{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:0;overflow-x:scroll;width:100%}}.feature-cards-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin:56px 0}.feature-card[_ngcontent-%COMP%]{background:rgba(31,31,31,.6);border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 45%;-moz-box-flex:1;-ms-flex:1 0 45%;flex:1 0 45%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}@media screen and (max-width:768px){.feature-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}}@media screen and (max-width:600px){.feature-card[_ngcontent-%COMP%]{overflow:hidden;max-width:95%}}.feature-card.full-width[_ngcontent-%COMP%]{background:transparent;border:none;-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:120px}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0}.feature-card.full-width[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .feature-card.full-width[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none}}.feature-card.full-width.last-card-of-group[_ngcontent-%COMP%]{margin-bottom:0}.feature-card-content[_ngcontent-%COMP%]{padding:20px 20px 0 20px}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{max-width:400px;padding:70px 45px 0 0}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{padding:0}}.feature-card-tagline[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-tagline-text[_ngcontent-%COMP%]{color:#8c8c8c;text-align:center;font-family:Inter Tight,sans-serif;font-size:16px;font-style:normal;font-weight:300;line-height:20px}@media screen and (max-width:600px){.feature-card-tagline-text[_ngcontent-%COMP%]{font-size:14px}}.feature-card-tagline-icon[_ngcontent-%COMP%]{color:#8c8c8c;font-size:20px;margin-right:4px}.feature-card-tagline-image[_ngcontent-%COMP%]{margin-right:6px}.feature-card-title[_ngcontent-%COMP%]{margin-bottom:12px;color:#d4d4d4;font-family:Inter Tight,sans-serif;font-size:28px;font-style:normal;font-weight:300;line-height:normal}@media screen and (max-width:600px){.feature-card-title[_ngcontent-%COMP%]{font-size:18px}}.feature-card-description[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;font-size:16px;line-height:1.5;margin-bottom:20px}@media screen and (max-width:600px){.feature-card-description[_ngcontent-%COMP%]{margin-bottom:10px}}.feature-card-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-image[_ngcontent-%COMP%]{min-width:0;width:100%}.feature-card-media-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-media-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;max-height:500px;max-width:500px;width:100%}.feature-card[_ngcontent-%COMP%]:not(.full-width)   .feature-card-media-container[_ngcontent-%COMP%]{margin-top:20px}.feature-card-video[_ngcontent-%COMP%]{aspect-ratio:1/1;border-radius:32px;max-height:500px;object-fit:cover;width:100%}[_nghost-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:auto;max-width:998px;width:100%}@media (max-width:1046px){[_nghost-%COMP%]{padding:0 24px}}.footer-cta-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:50px;margin-bottom:250px;width:100%}@media screen and (max-width:768px){.footer-cta-container[_ngcontent-%COMP%]{margin-bottom:60px;margin-top:50px}}.footer-lockup-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:100%}.footer-lockup-logo[_ngcontent-%COMP%]{color:#8c8c8c;display:block;margin-bottom:8px;width:384px;max-width:100%}@media screen and (max-width:600px){.footer-lockup-logo[_ngcontent-%COMP%]{color:#d4d4d4;width:200px}}.footer-subtitle[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter Tight,sans-serif;font-size:24px;font-style:normal;font-weight:300;line-height:normal;letter-spacing:.2px;margin-bottom:36px}@media screen and (max-width:600px){.footer-subtitle[_ngcontent-%COMP%]{font-size:16px;text-align:center}}@media screen and (max-width:768px){.footer-subtitle[_ngcontent-%COMP%]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;padding:0 20px;margin-bottom:36px}}.footer-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:50px;width:100%}@media screen and (max-width:768px){.footer-links[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:32px;margin-bottom:24px}}.link-group[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:9px;width:160px}@media screen and (max-width:768px){.link-group[_ngcontent-%COMP%]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%}}.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#8c8c8c;-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d4d4d4}.custom-button-large[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;border:1px solid #3e3e3e;border-radius:16px;color:#d4d4d4;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;height:40px;padding:12px;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}@media screen and (max-width:600px){.custom-button-large[_ngcontent-%COMP%]{border-radius:9px;gap:6px;height:30px;font-size:12px}.custom-button-large[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.custom-button-large[_ngcontent-%COMP%]:hover{background:#2a2a2a}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.animate-in-view[_ngcontent-%COMP%]{opacity:0}.animate-in-view.animation-triggered[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);opacity:1}@-webkit-keyframes _ngcontent-%COMP%_wipeBlurIn{0%{background-position:100% 0;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}to{background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes _ngcontent-%COMP%_wipeBlurIn{0%{background-position:100% 0;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}to{background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}}.wipe-container[_ngcontent-%COMP%]{display:inline-block}.wipe-text[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,right top,color-stop(70%,#d4d4d4),to(transparent));background:-webkit-linear-gradient(left,#d4d4d4 70%,transparent);background:linear-gradient(90deg,#d4d4d4 70%,transparent);background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}.wipe-container.animation-triggered[_ngcontent-%COMP%]   .wipe-text[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_wipeBlurIn 1.2s cubic-bezier(.25,.46,.45,.94) forwards;animation:_ngcontent-%COMP%_wipeBlurIn 1.2s cubic-bezier(.25,.46,.45,.94) forwards;background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}"]
		});
		var bje;
		_.$ie = [
			{
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/spark_icon_outline.svg`,
				tagline: "Discover",
				title: "Explore all of Google’s AI models in one place",
				description: "Access a unified AI playground to test your prompts across all our modalities. Experiment with text, image, audio, and video models in one place to find the perfect fit for your project.",
				videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/discover.mp4`,
				ek: !0,
				iaa: !0
			},
			{
				icon: "design_services",
				tagline: "Build",
				title: "Go from idea to app with the power of Gemini",
				description: "The fastest way to build AI-first applications. Use natural language to generate fully functional apps with built-in features like Nano Banana or Google Search integration, then deploy with a single click.",
				videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/build.mp4`,
				ek: !0,
				iaa: !0
			},
			{
				icon: "monitoring",
				tagline: "Operate",
				title: "Stay on top of your resource usage",
				description: "Manage API keys and projects in one space. Track your usage, billing, and rate limits from one centralized dashboard, and view detailed logs to get the most out of your projects.",
				videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/operate.mp4`,
				ek: !0,
				iaa: !0
			},
			{
				icon: "docs",
				tagline: "Learn",
				title: "Build directly with the SDK",
				description: "From quickstart guides to deep-dive API references, access all the documentation and code samples you need to ship your features.  ",
				videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/learn.mp4`,
				ek: !0,
				iaa: !0
			}
		];
		_.aje = [
			{
				title: "Gemini",
				description: "Our state of the art models, excellent at coding, reasoning, creative writing, and multimodal capabilities.",
				yt: (0, _.Kj)`/gemini-api/docs/models`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_spark_icon_outline.png`
			},
			{
				title: "Imagen",
				description: "Our best image generation model yet, engineered for creativity. Bring your imagination to life faster than ever before.",
				yt: (0, _.Kj)`/gemini-api/docs/imagen`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_image_icon_outline.png`
			},
			{
				title: "Veo",
				description: "Our latest video generation model, designed to empower filmmakers and storytellers.",
				yt: (0, _.Kj)`/gemini-api/docs/video`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_videocam_icon_outline.png`
			},
			{
				title: "Gemini TTS",
				description: "Transform text input into single speaker or multi-speaker audio using native, controllable text-to-speech.",
				yt: (0, _.Kj)`/gemini-api/docs/speech-generation`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_audio_magic_eraser_icon_outline.png`
			},
			{
				title: "Gemini Native Audio",
				description: "Hyper realistic audio generation, supporting a wide variety of voices.",
				yt: (0, _.Kj)`/gemini-api/docs/live-guide#native-audio-output`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_mic_detect_audio_icon_outline.png`
			},
			{
				title: "Gemma",
				description: "Lightweight, state-of-the-art open models built from the same technology that powers our Gemini models.",
				yt: (0, _.Kj)`/gemma/docs/core/gemma_on_gemini_api`,
				UH: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/offset_spark_icon_outline.png`
			}
		];
		bje = {
			title: "Gemini 3 is here",
			description: "Our most intelligent models to date.",
			CRb: (0, _.Kj)`/prompts/new_chat?model=gemini-3.1-pro-preview`,
			DRb: (0, _.Kj)`/models/gemini-3`
		};
		_.cje = {
			title: "Gemini 3",
			subtitle: "Our most intelligent models that help you bring any idea to life",
			fka: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gemini_3/gemini_3_poster.png`,
			lBa: ["Gemini 3 Pro and 3 Flash come with state-of-the-art reasoning, advanced multimodal understanding, and exceptional coding capabilities."],
			dma: [
				{
					icon: "spark",
					link: (0, _.Kj)`prompts/new_chat?model=gemini-3.1-pro-preview`,
					text: "Try Gemini 3 Pro",
					ve: 271733,
					pE: "Clicked Chat with Model Button"
				},
				{
					icon: "spark",
					link: (0, _.Kj)`prompts/new_chat?model=gemini-3-flash-preview`,
					text: "Try Gemini 3 Flash",
					ve: 271733,
					pE: "Clicked Chat with Model Button"
				},
				{
					icon: "spark",
					link: (0, _.Kj)`prompts/new_chat?model=gemini-3.1-flash-lite-preview`,
					text: "Try Gemini 3 Flash-Lite",
					ve: 271733,
					pE: "Clicked Chat with Model Button"
				}
			],
			yt: (0, _.Kj)`/gemini-api/docs/gemini-3`,
			l0a: (0, _.Kj)`prompts/new_chat?model=gemini-3.1-pro-preview`,
			zL: [
				{
					tagline: "Agentic capabilities",
					title: "The next generation of intelligence",
					description: "Develop agents that leverage advanced reasoning, robust function calling, and persistent context across multi-step interactions to create fully autonomous workflows that handle complex tasks.",
					imageSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gemini_3/reasoning_thumbnail.png`,
					ek: !0,
					button: {
						link: (0, _.Kj)`/gemini-api/docs/gemini-3`,
						wCa: !0,
						text: "Gemini 3 developer guide",
						icon: "docs"
					}
				},
				{
					tagline: "Vibe code",
					title: "Intuitive development for everyone",
					description: "Build software by simply describing your UI and requirements. With exceptional zero-shot generation, Gemini 3 handles the planning and code generation, reducing development time to minutes.",
					imageSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gemini_3/build_thumbnail.png`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps`,
						text: "Build with Gemini 3",
						icon: "design_services"
					}
				},
				{
					tagline: "Get inspired",
					title: "Supercharge any experience",
					description: "Explore our gallery of Gemini 3 demo apps showcasing a range of use cases from research agents to immersive games.",
					imageSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gemini_3/agentic_thumbnail.png`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps?source=showcase&showcaseTag=gemini-3`,
						text: "Explore demos",
						icon: "apps"
					}
				}
			]
		};
		_.dje = {
			title: "Gemini 3 Pro Image (Nano Banana Pro)",
			subtitle: "Define the next generation of professional asset creation.",
			fka: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/gempix_2.png`,
			dma: [{
				icon: "docs",
				yt: (0, _.Kj)`/gemini-api/docs/image-generation`,
				text: "Get started in our docs",
				ve: 274949,
				pE: "Clicked Get Started in Docs Button"
			}, {
				icon: "login",
				link: (0, _.Kj)`prompts/new_chat?model=gemini-3-pro-image-preview`,
				text: "Sign up and get started",
				ve: 271733,
				pE: "Clicked Sign Up and Get Started Button"
			}],
			yt: (0, _.Kj)`/gemini-api/docs/image-generation`,
			l0a: (0, _.Kj)`prompts/new_chat?model=gemini-3-pro-image-preview`,
			zL: [
				{
					tagline: "A new era of consistency and detail",
					title: "Consistent heroes, superior text, and total control",
					description: "Gemini 3 Pro Image doesn't just upgrade the standard; it redefines it. Generate characters and subjects with locked-in identity across infinite variations, now accompanied by superior text rendering and pixel-perfect detail. From showcasing products with readable labels to placing consistent characters in rich, detailed environments, this is a powerful new model built for total control.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/27_Comics.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/personalized_comics?showPreview=true`,
						text: "Try Infinite Heroes"
					}
				},
				{
					tagline: "Studio-quality visuals without the studio",
					title: "Flawless mockups, adaptive styling, and pixel-perfect realism",
					description: "Input uploaded product shots or AI-generated assets to drive style and composition. Use conversational editing to seamlessly blend items into new environments while maintaining perfect lighting and perspective. Produce production-ready assets with native 1K output and built-in upscaling to 2K and 4K resolutions, ensuring your visuals are crisp enough for digital billboards and high-end media.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/23_Product.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/product_mockup?showPreview=true`,
						text: "Try Product Mockup Visualizations"
					}
				},
				{
					tagline: "Uncompromising beauty at maximum resolution",
					title: "4K upscaling, intricate textures, and masterful lighting",
					description: "Harness the native high-fidelity output and intelligent upscaling of Gemini 3 Pro Image to craft breathtaking, atmospheric environments. Command complex lighting effects and delicate textures with conversational prompting, ensuring every strand of mist and beam of light is rendered in pixel-perfect 4K resolution. This tool marries artistic freedom with a rigorous technical backbone, delivering production-ready digital art that retains sharpness even on the largest displays.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/26_Wallpaper.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/wallpaper?showPreview=true`,
						text: "Try PixelWalls"
					},
					HP: !0
				},
				{
					tagline: "Intelligent design, grounded in reality",
					title: "Smart Infographics, legible text, and real-time data",
					description: "Generate charts, diagrams, and advertisements with legible, accurate text—perfect for creating menus, invites, and educational content with precise labeling. Leverage integrated Grounding with Google Search to produce factual, timely imagery, allowing you to visualize real-world data ranging from up-to-date weather maps to trustworthy infographics about recent events.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/24_Info.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/info_genius?showPreview=true`,
						text: "Try Info Genius"
					},
					HP: !0
				},
				{
					tagline: "Unwavering consistency and pixel-perfect fidelity",
					title: "One Shot Arcade: Precision Sprites, Identity Retention, and Fluid Motion",
					description: "Input a single reference photo to anchor your character's likeness using the model's advanced subject retention. Use the engine's superior coherence to generate a comprehensive sprite sheet, ensuring facial features remain distinct and recognizable even when downsampled to 8-bit art. This demonstrates the ability to maintain strict visual continuity and style adherence across dynamic, playable sequences without hallucinating details.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/gempix_2/21_Arcade.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/one_shot_arcade?showPreview=true`,
						text: "Try One Shot Arcade"
					},
					HP: !0
				},
				{
					title: "Trust and Safety, Built-in",
					description: "All images created or edited with Gemini 3.0 Pro Image include an invisible SynthID digital watermark to clearly identify them as AI-generated. Build with confidence and provide transparency for your users.",
					imageSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/shield_spark_icon_outline.svg`,
					DEa: "shield-spark-icon",
					ek: !0,
					HP: !0
				}
			]
		};
		_.eje = {
			title: "Gemini 3.1 Flash Image (Nano Banana 2)",
			subtitle: "Unlock Pro-level creativity at the speed of Flash",
			fka: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/native_image_generation_hero3.png`,
			dma: [{
				icon: "docs",
				yt: (0, _.Kj)`/gemini-api/docs/image-generation`,
				text: "Get started in our docs",
				ve: 274949,
				pE: "Clicked Get Started in Docs Button"
			}, {
				icon: "login",
				link: (0, _.Kj)`prompts/new_chat?model=gemini-3.1-flash-image-preview`,
				text: "Sign up and get started",
				ve: 271733,
				pE: "Clicked Sign Up and Get Started Button"
			}],
			yt: (0, _.Kj)`/gemini-api/docs/image-generation`,
			l0a: (0, _.Kj)`prompts/new_chat?model=gemini-3.1-flash-image-preview`,
			zL: [
				{
					tagline: "Advanced world knowledge",
					title: "Image generation grounded in reality",
					description: "With native support for Grounding with Google Search, reference a vast index of real-world imagery for more accurate depictions of landmarks, lesser-known objects, and specific details.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/starter-apps/thumbnails/window_seat_2.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/window_seat?showPreview=true`,
						text: "Try Window Seat"
					}
				},
				{
					tagline: "Enhanced quality and control",
					title: "High-fidelity asset creation",
					description: "Unlock a new world of creative production with precision text rendering, flexible aspect ratios, and image resolutions up to 4K.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/starter-apps/thumbnails/global_kit_generator.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/global_kit_generator?showPreview=true`,
						text: "Try Global Ad Localizer"
					}
				},
				{
					tagline: "Subject identity, maintained",
					title: "Character and object consistency across multiple images",
					description: "Enable intuitive editing directly within your app. Users can perform targeted transformations through multi-turn conversations—perfect for storytelling or iterative workflows.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/starter-apps/thumbnails/pet_passport.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/pet_passport?showPreview=true`,
						text: "Try Pet Passport"
					}
				},
				{
					tagline: "Intelligent, prompt-based editing",
					title: "Build intuitive, prompt-based editing into your apps",
					description: "Place the power of intuitive editing directly into your users’ hands. Enable targeted transformations and precise local edits, like removing an object from the background or changing a subject’s pose, all with simple text prompts and without complex manual selection tools.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/pixshop_demo.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/pixshop?showPreview=true`,
						text: "Try PixShop"
					}
				},
				{
					tagline: "Go beyond generation with visual reasoning",
					title: "Unlock true multimodal creativity",
					description: "Build applications that combine Gemini’s deep image understanding with its powerful generation capabilities. Let your apps tap into the model’s world knowledge to perform tasks that rely on a true understanding of what it sees, from solving hand-drawn equations to following complex editing instructions.",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/gemini_codrawing_demo.mp4`,
					ek: !0,
					button: {
						link: (0, _.Kj)`apps/bundled/codrawing?showPreview=true&showCode=true`,
						text: "Try Gemini Co-Drawing"
					},
					HP: !0
				},
				{
					title: "Trust and Safety, Built-in",
					description: "All images created or edited with Gemini 3.1 Flash Image models include an invisible SynthID digital watermark to clearly identify them as AI-generated. Build with confidence and provide transparency for your users.",
					imageSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/v3/shield_spark_icon_outline.svg`,
					DEa: "shield-spark-icon",
					ek: !0,
					HP: !0
				}
			]
		};
		_.fje = {
			title: "Veo 3.1",
			subtitle: "Our state-of-the-art video generation model",
			Y0a: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/mongolian_horses_4k.mp4`,
			lBa: ["Veo 3.1 is engineered to meet the demands of real-world applications. Now supporting stunning 4K output alongside configurable landscape (16:9) and portrait (9:16) aspect ratios, it is designed for high-quality production needs.", "This latest release represents a significant leap in generative video, delivering enhanced realism, better prompt adherence, and richer native audio. Veo 3.1 introduces a suite of advanced creative controls, including updated reference image capabilities—now available in both portrait and landscape—to guide character and style consistency across any format. Along with features to extend clips and generate seamless transitions, the model has been fine-tuned to produce more expressive and creative outputs, offering unprecedented control to bring your most ambitious visions to life."],
			dma: [{
				icon: "docs",
				yt: (0, _.Kj)`/gemini-api/docs/video?example=dialogue`,
				text: "Read docs",
				ve: 274949,
				pE: "Clicked Get Started in Docs Button"
			}, {
				icon: "login",
				link: (0, _.Kj)`prompts/new_chat?model=veo-3.1-fast-generate-preview`,
				text: "Try Veo 3.1",
				ve: 271733,
				pE: "Clicked Sign Up and Get Started Button"
			}],
			yt: (0, _.Kj)`/gemini-api/docs/video`,
			zL: [
				{
					tagline: "Video generation meets audio",
					title: "Bring your generated videos to life with native audio generation",
					description: "Veo 3 pairs audio with the context of what you’re generating so you can bring your stories to life in a way you couldn’t before",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/sloth_on_train.mp4`,
					ek: !0
				},
				{
					tagline: "Realism like you’ve never seen",
					title: "Best in class quality, excelling in physics, realism and prompt adherence",
					description: "Create videos that interplay light, shadow, and real-world physics for an unprecedented level of realism",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/welcome/crimson_sheets_4k.mp4`,
					ek: !0
				},
				{
					title: "Veo 3 Fast: Build and Iterate Quicker",
					description: "Optimized for speed and price, Veo 3 Fast allows for rapid development and high-quality video output. Now you can generate video with audio from text or an image, making it perfect for building apps that need to produce social media content or ad creatives on the fly",
					videoSrc: (0, _.Kj)`https://www.gstatic.com/aistudio/zero-state/magical_ink.mp4`,
					ek: !0
				}
			]
		};
		_.gje = [
			{
				name: "description",
				content: "Integrate videos with breathtaking realism and natively generated audio with our latest video generation model."
			},
			{
				property: "og:url",
				content: "https://aistudio.google.com/models/veo-3"
			},
			{
				property: "og:title",
				content: _.Mn("veo-3")
			},
			{
				property: "og:description",
				content: "Integrate videos with breathtaking realism and natively generated audio with our latest video generation model."
			}
		];
		_.hje = [
			{
				name: "description",
				content: "Get started using Gemini 3 Pro Image (aka Nano Banana Pro) in AI Studio and Gemini API today."
			},
			{
				property: "og:url",
				content: "https://aistudio.google.com/models/gemini-3-pro-image"
			},
			{
				property: "og:title",
				content: _.Mn("gemini-3-pro-image")
			},
			{
				property: "og:description",
				content: "Get started using Gemini 3 Pro Image (aka Nano Banana Pro) in AI Studio and Gemini API today."
			}
		];
		_.ije = [
			{
				name: "description",
				content: "Start building with Gemini 3, our most intelligent model, in Google AI Studio and with the Gemini API today."
			},
			{
				property: "og:url",
				content: "https://aistudio.google.com/models/gemini-3"
			},
			{
				property: "og:title",
				content: _.Mn("gemini-3")
			},
			{
				property: "og:description",
				content: "Start building with Gemini 3, our most intelligent model, in Google AI Studio and with the Gemini API today."
			}
		];
		_.jje = [
			{
				name: "description",
				content: "Get started using Gemini 3.1 Flash Image (aka Nano Banana 2) in AI Studio today."
			},
			{
				property: "og:url",
				content: "https://aistudio.google.com/models/gemini-3-1-flash-image"
			},
			{
				property: "og:title",
				content: _.Mn("gemini-3.1-flash-image-preview")
			},
			{
				property: "og:description",
				content: "Get started using Gemini 3.1 Flash Image (aka Nano Banana 2) in AI Studio today."
			}
		];
		var kje, b8;
		kje = ["animateInView"];
		b8 = function(a, b) {
			var c;
			_.Rn(a.Isa, "NAV", "Clicked Main Nav", (c = b.target.textContent) != null ? c : "");
		};
		_.e8 = class {
			constructor() {
				this.S = _.Dk;
				this.FU = _.V(!1);
				this.qBb = _.V(!1);
				this.F = _.m(_.ZC);
				this.Isa = _.m(_.Ou);
				this.H = _.m(_.Qu);
				this.isSignedIn = this.H.isSignedIn;
				this.hv = this.F.A.small;
				this.JE = this.F.A.Il;
				this.Jma = bje;
				this.FVa = "/case-studies";
				this.ve = {
					xPa: 271738,
					RV: 271729,
					WO: 271733,
					pmb: 272876
				};
				this.T0a = _.Ni(_.vI);
				this.lp = _.hi();
				this.A = new IntersectionObserver((a) => {
					var b = 0;
					for (let c of a) c.isIntersecting && (setTimeout(() => {
						c.target.classList.add("animation-triggered");
					}, b), this.A.unobserve(c.target), b += 100);
				}, { threshold: .5 });
				_.Fk([this.lp], () => {
					var a = this.lp();
					if (a.length > 0) for (let b of a) this.A.observe(b.nativeElement);
				});
			}
			sq(a) {
				return this.isSignedIn ? `/${a}` : _.kd(_.On(new _.hk("https://accounts.google.com/ServiceLogin"), "continue", `${window.location.origin}/${a}`).toString());
			}
			ada(a) {
				var b;
				_.Rn(this.Isa, "WELCOME_LANDING", "Clicked Sign Up and Get Started Button", (b = a.target.href) != null ? b : "");
			}
			onMouseMove(a) {
				var b = a.target, c = b.getBoundingClientRect(), d = a.clientY - c.top;
				b.style.setProperty("--mouse-x", `${a.clientX - c.left}px`);
				b.style.setProperty("--mouse-y", `${d}px`);
			}
		};
		_.e8.J = function(a) {
			return new (a || _.e8)();
		};
		_.e8.ka = _.u({
			type: _.e8,
			da: [["ms-marketing-welcome-screen-header"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.T0a, _.vI, 5)(b.lp, kje, 5);
				a & 2 && _.ki(2);
			},
			inputs: {
				FU: [1, "showNotificationCard"],
				qBb: [1, "disableLockupLogo"]
			},
			ha: 25,
			ia: 25,
			la: [
				["headerMenuTrigger", ""],
				["headerMenu", ""],
				["animateInView", ""],
				[1, "header-container"],
				[
					"aria-label",
					"Google AI Studio home",
					1,
					"nav-logo",
					3,
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"aria-label",
					"Google AI Studio home",
					1,
					"nav-logo",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "header-links"],
				[
					"documentation-path",
					"/gemini-api/docs/pricing",
					1,
					"custom-button-small",
					"link-button",
					"viewport-small-hidden",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"documentation-path",
					"/gemini-api/docs",
					1,
					"custom-button-small",
					"link-button",
					"viewport-small-hidden",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"custom-button-small",
					"link-button",
					"viewport-small-hidden",
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"get-started-button",
					1,
					"custom-button-small",
					3,
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"get-started-button",
					1,
					"custom-button-small",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"custom-button-small",
					"viewport-small-shown",
					3,
					"click"
				],
				[3, "iconName"],
				[
					1,
					"header-menu-trigger",
					"viewport-small-shown",
					3,
					"matMenuTriggerFor"
				],
				[
					"mat-menu-item",
					"",
					"documentation-path",
					"/gemini-api/docs/pricing",
					1,
					"custom-button-small",
					"link-button",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"mat-menu-item",
					"",
					"documentation-path",
					"/gemini-api/docs",
					1,
					"custom-button-small",
					"link-button",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"mat-menu-item",
					"",
					1,
					"custom-button-small",
					"link-button",
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"notification-card",
					"viewport-small-hidden",
					"animate-in-view",
					3,
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"aria-label",
					"Google AI Studio home",
					1,
					"nav-logo",
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"src",
					"https://www.gstatic.com/aistudio-static/mobile/ais-logo.svg",
					"alt",
					"Google AI Studio",
					1,
					"nav-logo-wordmark"
				],
				[
					"src",
					"https://www.gstatic.com/aistudio-static/mobile/ais-icon.svg",
					"alt",
					"Google AI Studio",
					1,
					"nav-logo-icon"
				],
				[
					"aria-label",
					"Google AI Studio home",
					1,
					"nav-logo",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"get-started-button",
					1,
					"custom-button-small",
					3,
					"click",
					"routerLink",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"get-started-button",
					1,
					"custom-button-small",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					1,
					"notification-card",
					"viewport-small-hidden",
					"animate-in-view",
					3,
					"mousemove",
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "mouse-light"],
				[1, "model-badge"],
				"xmlns;http://www.w3.org/2000/svg;width;8;height;8;viewBox;0 0 8 8;fill;none".split(";"),
				"cx 4 cy 4 r 3 fill #3DDB85".split(" "),
				[1, "model-badge-text"],
				[1, "notification-card-content"],
				[1, "notification-card-title"],
				[1, "notification-card-description"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "header", 3), _.B(1, Qie, 3, 5, "a", 4)(2, Tie, 3, 5, "a", 5), _.F(3, "div", 6)(4, "a", 7), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(5, " Pricing "), _.H(), _.F(6, "a", 8), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(7, " Explore documentation "), _.H(), _.F(8, "a", 9), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(9, " Case studies "), _.H(), _.B(10, Uie, 3, 5, "a", 10)(11, Vie, 3, 5, "a", 11), _.F(12, "button", 12), _.J("click", function() {
					var c;
					(c = b.T0a()) != null && c.D3(!0);
				}), _.I(13, "span", 13), _.H(), _.I(14, "div", 14, 0), _.F(16, "mat-menu", null, 1)(18, "a", 15), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(19, " Pricing "), _.H(), _.F(20, "a", 16), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(21, " Explore documentation "), _.H(), _.F(22, "a", 17), _.J("click", function(c) {
					return b8(b, c);
				}), _.R(23, " Case studies "), _.H()(), _.B(24, Wie, 13, 6, "a", 18), _.H()());
				a & 2 && (a = _.O(17), _.y(), _.C(b.isSignedIn ? 1 : 2), _.y(3), _.E("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.E("routerLink", b.FVa)("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.C(b.isSignedIn ? 10 : 11), _.y(3), _.E("iconName", b.S.L2), _.y(), _.E("matMenuTriggerFor", a), _.y(4), _.E("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.E("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.E("routerLink", b.FVa)("ve", b.ve.RV)("veImpression", !0)("veClick", !0), _.y(2), _.C(b.FU() ? 24 : -1));
			},
			dependencies: [
				_.tz,
				_.LC,
				_.dz,
				_.wI,
				_.tI,
				_.sI,
				_.vI,
				_.sA,
				_.tA,
				_.Cz,
				_.Bz
			],
			styles: ["@-webkit-keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.animate-in-view[_ngcontent-%COMP%]{opacity:0}.animate-in-view.animation-triggered[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);opacity:1}.feature-cards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px 16px;margin-bottom:30px;min-width:0;width:100%}@media screen and (max-width:600px){.feature-cards-container[_ngcontent-%COMP%]{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:0;overflow-x:scroll;width:100%}}.feature-cards-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin:56px 0}.feature-card[_ngcontent-%COMP%]{background:rgba(31,31,31,.6);border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 45%;-moz-box-flex:1;-ms-flex:1 0 45%;flex:1 0 45%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}@media screen and (max-width:768px){.feature-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}}@media screen and (max-width:600px){.feature-card[_ngcontent-%COMP%]{overflow:hidden;max-width:95%}}.feature-card.full-width[_ngcontent-%COMP%]{background:transparent;border:none;-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:120px}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0}.feature-card.full-width[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .feature-card.full-width[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none}}.feature-card.full-width.last-card-of-group[_ngcontent-%COMP%]{margin-bottom:0}.feature-card-content[_ngcontent-%COMP%]{padding:20px 20px 0 20px}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{max-width:400px;padding:70px 45px 0 0}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{padding:0}}.feature-card-tagline[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-tagline-text[_ngcontent-%COMP%]{color:#8c8c8c;text-align:center;font-family:Inter Tight,sans-serif;font-size:16px;font-style:normal;font-weight:300;line-height:20px}@media screen and (max-width:600px){.feature-card-tagline-text[_ngcontent-%COMP%]{font-size:14px}}.feature-card-tagline-icon[_ngcontent-%COMP%]{color:#8c8c8c;font-size:20px;margin-right:4px}.feature-card-tagline-image[_ngcontent-%COMP%]{margin-right:6px}.feature-card-title[_ngcontent-%COMP%]{margin-bottom:12px;color:#d4d4d4;font-family:Inter Tight,sans-serif;font-size:28px;font-style:normal;font-weight:300;line-height:normal}@media screen and (max-width:600px){.feature-card-title[_ngcontent-%COMP%]{font-size:18px}}.feature-card-description[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;font-size:16px;line-height:1.5;margin-bottom:20px}@media screen and (max-width:600px){.feature-card-description[_ngcontent-%COMP%]{margin-bottom:10px}}.feature-card-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-image[_ngcontent-%COMP%]{min-width:0;width:100%}.feature-card-media-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-media-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;max-height:500px;max-width:500px;width:100%}.feature-card[_ngcontent-%COMP%]:not(.full-width)   .feature-card-media-container[_ngcontent-%COMP%]{margin-top:20px}.feature-card-video[_ngcontent-%COMP%]{aspect-ratio:1/1;border-radius:32px;max-height:500px;object-fit:cover;width:100%}[_nghost-%COMP%]{display:block;width:100%;position:relative;z-index:2}@media screen and (max-width:600px){*[_ngcontent-%COMP%]   .viewport-small-hidden[_ngcontent-%COMP%]{display:none}}*[_ngcontent-%COMP%]   .viewport-small-shown[_ngcontent-%COMP%]{display:none}@media screen and (max-width:600px){*[_ngcontent-%COMP%]   .viewport-small-shown[_ngcontent-%COMP%]{display:initial}}.header-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:130px;padding:30px 60px 0 60px;width:100%}@media screen and (max-width:768px){.header-container[_ngcontent-%COMP%]{padding:30px 24px 0 24px}}@media screen and (max-width:600px){.header-container[_ngcontent-%COMP%]{margin-bottom:60px;padding:24px 24px 0 24px}}.header-menu-trigger[_ngcontent-%COMP%]{bottom:-10px;position:absolute;right:0}.custom-button-small[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#323232;border:1px solid #3e3e3e;border-radius:12px;color:#d4d4d4;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;height:36px;opacity:.9;padding:8px;-webkit-transition:background-color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,opacity .2s ease-in-out}.custom-button-small.link-button[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.custom-button-small.link-button[_ngcontent-%COMP%]:hover, .custom-button-small[_ngcontent-%COMP%]:hover{background:#3c3c3c;border-color:#3e3e3e;opacity:1}.header-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;position:relative}@media screen and (max-width:600px){.header-links[_ngcontent-%COMP%]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}.nav-logo[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.nav-logo-icon[_ngcontent-%COMP%]{height:36px;width:auto}@media screen and (max-width:600px){.nav-logo-icon[_ngcontent-%COMP%]{height:28px}}.nav-logo-wordmark[_ngcontent-%COMP%]{height:28px;width:auto}.notification-card[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(37,37,37,.2);border:1px solid #2a2a2a;border-radius:12px;bottom:-80px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-filter:drop-shadow(0 1px 2px #000);filter:drop-shadow(0 1px 2px #000);gap:12px;padding:12px;position:absolute;right:0;width:100%;max-width:350px;overflow:hidden;-webkit-transition:box-shadow .2s ease-in-out,-webkit-transform .2s ease-in-out;transition:box-shadow .2s ease-in-out,-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-transform .2s ease-in-out}.notification-card[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-filter:drop-shadow(0 5px 15px rgba(0,0,0,.3));filter:drop-shadow(0 5px 15px rgba(0,0,0,.3))}.notification-card[_ngcontent-%COMP%]   .mouse-light[_ngcontent-%COMP%]{background:-webkit-radial-gradient(circle,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,0) 70%);background:radial-gradient(circle,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,0) 70%);border-radius:50%;height:150px;left:var(--mouse-x,-9999px);opacity:0;pointer-events:none;position:absolute;top:var(--mouse-y,-9999px);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:left .05s ease-out,top .05s ease-out,opacity .3s ease-out;transition:left .05s ease-out,top .05s ease-out,opacity .3s ease-out;width:150px}.notification-card[_ngcontent-%COMP%]:hover   .mouse-light[_ngcontent-%COMP%]{opacity:1}.notification-card-content[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;pointer-events:none}.model-badge[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(37,37,37,.5);border-radius:8px;border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:18px;padding:2px 6px 2px 4px;gap:4px;pointer-events:none}.model-badge-text[_ngcontent-%COMP%]{color:#d4d4d4;font-family:Inter,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}.notification-card-title[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;color:#d4d4d4}.notification-card-description[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter Tight,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px}"]
		});
		_.hr("FaNExf");
		var vve = function(a) {
			a & 1 && _.Ih(0, 11);
			if (a & 2) {
				a = _.K();
				let b = _.O(39);
				_.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, uve, a.XS()));
			}
		}, wve = function(a) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (_.K(), a = _.O(37), _.E("ngTemplateOutlet", a));
		}, xve = function(a, b) {
			a & 1 && _.R(0);
			a & 2 && _.S(" ", b.V, " ");
		}, yve = function(a, b) {
			a & 1 && (_.F(0, "mat-tab", 23)(1, "div", 25)(2, "div", 26), _.Ah(3, xve, 1, 1, null, null, _.yh), _.H(), _.F(5, "pre"), _.I(6, "code", 27), _.H()()());
			a & 2 && (a = b.V, _.E("label", _.wi(a.title)), _.y(3), _.Bh(a.lineNumbers), _.y(3), _.E("innerHtml", a.mX, _.qg));
		}, zve = function(a) {
			a & 1 && (_.Ih(0, 12), _.I(1, "span", null, 6));
			a & 2 && (_.K(), a = _.O(41), _.E("ngTemplateOutlet", a));
		}, Ave = function(a) {
			a & 1 && (_.F(0, "h1", 13, 7), _.R(3, " Explore our models "), _.H());
		}, Cve = function(a, b) {
			a & 1 && _.Ih(0, 11);
			a & 2 && (a = b.V, _.K(), b = _.O(45), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, Bve, a)));
		}, Eve = function(a, b) {
			a & 1 && _.Ih(0, 11);
			a & 2 && (a = b.V, _.K(2), b = _.O(43), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, Dve, a)));
		}, Fve = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div");
				_.I(1, "ms-logo-icon", 28);
				_.H();
				_.F(2, "div", 29);
				_.R(3, "The fastest path from prompt to production with Gemini");
				_.H();
				_.I(4, "video", 30, 0);
				_.F(6, "div", 31)(7, "a", 32);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(), e;
					_.Rn(d.UO, "WELCOME_LANDING", "Clicked Chat with Model Button", (e = c.target.href) != null ? e : "");
					return _.t();
				});
				_.R(8, " Try our models ");
				_.H();
				_.F(9, "a", 32);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(), e;
					_.Rn(d.UO, "WELCOME_LANDING", "Clicked Vibe Code Button", (e = c.target.href) != null ? e : "");
					return _.t();
				});
				_.R(10, " Vibe code AI apps ");
				_.H();
				_.F(11, "a", 32);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					_.Rn(c.UO, "WELCOME_LANDING", "Clicked Get API Key Button in Header");
					return _.t();
				});
				_.R(12, " Get an API key ");
				_.H()();
				_.Ih(13, 12);
				_.F(14, "div", 33, 0);
				_.Ah(16, Eve, 1, 4, "ng-container", 11, _.yh);
				_.H();
				_.Ih(18, 12);
			}
			if (a & 2) {
				a = _.K();
				let b = _.O(41);
				_.y(4);
				_.E("muted", !0);
				_.y(3);
				_.E("ve", a.ve.kmb)("veImpression", !0)("veClick", !0);
				_.wh("href", a.sq("prompts/new_chat"), _.rg);
				_.y(2);
				_.E("ve", a.ve.WO)("veImpression", !0)("veClick", !0);
				_.wh("href", a.sq("apps"), _.rg);
				_.y(2);
				_.E("ve", a.ve.omb)("veImpression", !0)("veClick", !0);
				_.wh("href", a.sq("api-keys"), _.rg);
				_.y(2);
				_.E("ngTemplateOutlet", b);
				_.y();
				_.P("animate-in-view", a.hv());
				_.y(2);
				_.Bh(a.zL);
				_.y(2);
				_.E("ngTemplateOutlet", b);
			}
		}, Gve = function(a) {
			a & 1 && _.I(0, "img", 36, 0);
			a & 2 && (a = _.K().XS, _.E("src", _.wi(a.fka.toString()), _.rg)("alt", _.wi(a.title)));
		}, Hve = function(a) {
			a & 1 && _.I(0, "video", 37, 0);
			a & 2 && (a = _.K().XS, _.E("src", _.wi(a.Y0a.toString()), _.rg)("muted", !0));
		}, Ive = function(a, b) {
			a & 1 && (_.F(0, "p", 39), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.S(" ", a, " "));
		}, Jve = function(a) {
			a & 1 && _.Ah(0, Ive, 2, 1, "p", 39, _.yh);
			a & 2 && (a = _.K().XS, _.Bh(a.lBa));
		}, Lve = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 42);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					return _.t(Kve(e, c, d.pE));
				});
				_.I(1, "span", 18);
				_.R(2);
				_.H();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.E("ve", a.ve)("veMutable", !0)("veImpression", !0)("veClick", !0);
				_.wh("href", b.sq(a.link.toString()), _.rg);
				_.y();
				_.E("iconName", a.icon);
				_.y();
				_.S(" ", a.text, " ");
			}
		}, Mve = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 43);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					return _.t(Kve(e, c, d.pE));
				});
				_.I(1, "span", 18);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("documentation-path", a.yt.toString())("ve", a.ve)("veMutable", !0)("veImpression", !0)("veClick", !0), _.y(), _.E("iconName", a.icon), _.y(), _.S(" ", a.text, " "));
		}, Nve = function(a, b) {
			a & 1 && _.B(0, Lve, 3, 7, "a", 40)(1, Mve, 3, 7, "a", 41);
			a & 2 && (a = b.V, _.C(a.link ? 0 : a.yt ? 1 : -1));
		}, Ove = function(a, b) {
			a & 1 && _.Ih(0, 11);
			a & 2 && (a = b.V, _.K(2), b = _.O(43), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, Dve, a)));
		}, Pve = function(a) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (_.K(2), a = _.O(41), _.E("ngTemplateOutlet", a));
		}, Qve = function(a, b) {
			a & 1 && (_.F(0, "h1", 34, 0), _.R(2), _.H(), _.F(3, "div", 35, 0), _.R(5), _.H(), _.B(6, Gve, 2, 4, "img", 36)(7, Hve, 2, 3, "video", 37), _.B(8, Jve, 2, 0), _.F(9, "div", 38, 0), _.Ah(11, Nve, 2, 1, null, null, _.yh), _.H(), _.Ih(13, 12), _.F(14, "div", 33), _.Ah(15, Ove, 1, 4, "ng-container", 11, _.yh), _.H(), _.B(17, Pve, 1, 1, "ng-container", 12));
			if (a & 2) {
				a = b.XS;
				b = _.K();
				let c = _.O(41);
				_.y(2);
				_.S(" ", a.title, " ");
				_.y(3);
				_.S(" ", a.subtitle, " ");
				_.y();
				_.C(a.fka ? 6 : a.Y0a ? 7 : -1);
				_.y(2);
				_.C(a.lBa ? 8 : -1);
				_.y(3);
				_.Bh(a.dma);
				_.y(2);
				_.E("ngTemplateOutlet", c);
				_.y(2);
				_.Bh(a.zL);
				_.y(2);
				_.C(b.hv() ? 17 : -1);
			}
		}, Rve = function(a) {
			a & 1 && (_.F(0, "div", 44, 0), _.I(2, "mat-divider", 45), _.H());
		}, Sve = function(a) {
			a & 1 && _.I(0, "span", 49);
			a & 2 && (a = _.K().YQ, _.E("iconName", a.icon));
		}, Tve = function(a) {
			a & 1 && _.I(0, "img", 50);
			a & 2 && (a = _.K().YQ, _.E("src", _.wi(a.UH.toString()), _.rg)("alt", _.wi(a.tagline)));
		}, Uve = function(a) {
			a & 1 && (_.F(0, "span", 51), _.R(1), _.H());
			a & 2 && (a = _.K().YQ, _.y(), _.U(a.tagline));
		}, Wve = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 54)(1, "a", 58);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(2), e;
					_.Rn(d.UO, "WELCOME_LANDING", "Clicked Feature Card Button", (e = c.target.textContent) != null ? e : "");
					return _.t();
				});
				_.I(2, "span", 18);
				_.R(3);
				_.H()();
			}
			if (a & 2) {
				a = _.K().YQ;
				let b = _.K();
				_.y();
				_.E("ve", b.ve.mmb)("veImpression", !0)("veClick", !0);
				_.wh("href", Vve(b, a.button), _.rg)("target", a.button.wCa ? "_blank" : null)("rel", a.button.wCa ? "noopener noreferrer" : null);
				_.y();
				_.E("iconName", a.button.icon || b.S.Ps);
				_.y();
				_.S(" ", a.button.text, " ");
			}
		}, Xve = function(a) {
			a & 1 && _.I(0, "img", 59);
			a & 2 && (a = _.K().YQ, _.qi(_.xi("feature-card-image ", a.DEa)), _.E("src", _.wi(a.imageSrc.toString()), _.rg)("alt", _.wi(a.title)));
		}, Yve = function(a) {
			a & 1 && _.I(0, "video", 60);
			a & 2 && (a = _.K().YQ, _.qi(_.xi("feature-card-video ", a.DEa)), _.E("src", _.wi(a.videoSrc.toString()), _.rg)("autoplay", a.iaa ? !1 : !0)("loop", a.iaa ? !1 : !0)("muted", !0));
		}, Zve = function(a) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (_.K(2), a = _.O(41), _.E("ngTemplateOutlet", a));
		}, $ve = function(a, b) {
			a & 1 && (_.F(0, "div", 46, 0)(2, "div", 47)(3, "div", 48), _.B(4, Sve, 1, 1, "span", 49)(5, Tve, 1, 4, "img", 50), _.B(6, Uve, 2, 1, "span", 51), _.H(), _.F(7, "div", 52), _.R(8), _.H(), _.F(9, "div", 53), _.R(10), _.H(), _.B(11, Wve, 4, 8, "div", 54), _.H(), _.F(12, "div", 55), _.B(13, Xve, 1, 7, "img", 56)(14, Yve, 1, 8, "video", 57), _.H()(), _.B(15, Zve, 1, 1, "ng-container", 12));
			a & 2 && (a = b.YQ, b = _.K(), _.P("animate-in-view", !b.hv())("last-card-of-group", a.HP)("full-width", a.ek), _.y(4), _.C(a.icon ? 4 : a.UH ? 5 : -1), _.y(2), _.C(a.tagline ? 6 : -1), _.y(2), _.S(" ", a.title, " "), _.y(2), _.S(" ", a.description, " "), _.y(), _.C(a.button ? 11 : -1), _.y(2), _.C(a.imageSrc ? 13 : a.videoSrc ? 14 : -1), _.y(2), _.C(a.HP && !b.hv() ? 15 : -1));
		}, awe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "a", 61, 0);
				_.J("click", function(d) {
					_.q(c);
					var e = _.K(), f;
					_.Rn(e.UO, "WELCOME_LANDING", "Clicked Model Card", (f = d.target.textContent) != null ? f : "");
					return _.t();
				});
				_.F(2, "div", 62)(3, "div", 63);
				_.R(4);
				_.H();
				_.F(5, "div", 64);
				_.R(6);
				_.H()();
				_.I(7, "img", 65);
				_.H();
			}
			a & 2 && (a = b.vKb, b = _.K(), _.P("animate-in-view", !b.hv()), _.E("documentation-path", _.wi(a.yt.toString()))("ve", b.ve.lmb)("veImpression", !0)("veClick", !0), _.y(4), _.S(" ", a.title, " "), _.y(2), _.S(" ", a.description, " "), _.y(), _.E("src", _.wi(a.UH.toString()), _.rg)("alt", _.wi(a.title)));
		}, bwe = ["animateInView"], uve = (a) => ({ XS: a }), Bve = (a) => ({ vKb: a }), Dve = (a) => ({ YQ: a }), Kve = function(a, b, c) {
			var d;
			_.Rn(a.UO, "WELCOME_LANDING", c, (d = b.target.href) != null ? d : "");
		}, Vve = function(a, b) {
			var c = b.link.toString();
			return b.wCa ? _.ar(c) : a.sq(c);
		}, cwe = function(a) {
			return a.split("\n").map((b, c) => c + 1);
		};
		_.ds = class {
			constructor() {
				_.m(_.KC);
				this.UO = _.m(_.Ou);
				this.H = _.m(_.ZL);
				this.X = _.m(_.$E);
				this.ea = _.m(_.ZC);
				this.A = _.m(_.ll);
				this.F = _.m(_.nK);
				this.aa = _.m(_.HG);
				this.ve = {
					Q_b: 274949,
					kmb: 271732,
					lmb: 271730,
					mmb: 274948,
					nmb: 271734,
					omb: 301648,
					WO: 271733
				};
				this.zL = _.$ie;
				this.wKb = _.aje;
				this.lp = _.hi();
				this.S = _.Dk;
				this.U = _.m(_.Qu);
				this.isSignedIn = this.U.isSignedIn;
				this.yWa = _.M(0);
				this.I = _.Ck(this.A.data.pipe(_.uf((a) => a.modelId)));
				this.fa = this.X.get("model");
				this.modelId = _.W(() => {
					var a = this.fa(), b;
					return (b = this.I()) != null ? b : a;
				});
				this.XS = _.W(() => {
					switch (this.modelId()) {
						case "veo-3": return _.fje;
						case "gemini-3.1-flash-image-preview": return _.eje;
						case "gemini-3": return _.cje;
						case "gemini-3-pro-image": return _.dje;
					}
				});
				this.FU = _.W(() => !this.XS());
				this.hv = this.ea.A.small;
				this.R = new IntersectionObserver((a) => {
					var b = 0;
					for (let c of a) c.isIntersecting && (setTimeout(() => {
						c.target.classList.add("animation-triggered");
						var d;
						(d = c.target.querySelector("video")) == null || d.play();
					}, b), this.R.unobserve(c.target), b += 100);
				}, { threshold: .5 });
				this.mzb = _.W(() => {
					switch (this.modelId()) {
						case "veo-3":
							var a = "import time\nfrom google import genai\nfrom google.genai import types\n\nclient = genai.Client()\n\noperation = client.models.generate_videos(\n    model=\"veo-3.1-fast-generate-preview\",\n    prompt=\"a close-up shot of a golden retriever playing in a field of sunflowers\",\n    config=types.GenerateVideosConfig(\n      negative_prompt=\"barking, woofing\",\n      aspect_ratio=\"9:16\",\n      resolution=\"720p\",\n    ),\n)\n\n# Waiting for the video(s) to be generated\nwhile not operation.done:\n    time.sleep(20)\n    operation = client.operations.get(operation)\n    print(operation)\n\ngenerated_video = operation.response.generated_videos[0]\nclient.files.download(file=generated_video.video)\ngenerated_video.video.save(\"golden_retriever.mp4\")";
							break;
						case "gemini-3.1-flash-image-preview":
							a = "import PIL.Image\nfrom google import genai\nfrom google.genai import types\nfrom io import BytesIO\n\nclient = genai.Client()\n\nprompt = \"\"\"\n    Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\n  \"\"\"\n\nresponse = client.models.generate_content(\n    model=\"gemini-3.1-flash-image-preview\",\n    contents=[prompt],\n)\n\nfor part in response.candidates[0].content.parts:\n  if part.text is not None:\n    print(part.text)\n  elif part.inline_data is not None:\n    image = PIL.Image.open(BytesIO(part.inline_data.data))\n    image.save(f\"generated_image.png\")";
							var b = "import { GoogleGenAI, Modality } from \"@google/genai\";\nimport * as fs from \"node:fs\";\n\nasync function main() {\n\n  const ai = new GoogleGenAI({});\n\n  const prompt =\n    \"Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\";\n\n  const response = await ai.models.generateContent({\n    model: \"gemini-3.1-flash-image-preview\",\n    contents: prompt,\n  });\n  for (const part of response.candidates[0].content.parts) {\n    if (part.text) {\n      console.log(part.text);\n    } else if (part.inlineData) {\n      const imageData = part.inlineData.data;\n      const buffer = Buffer.from(imageData, \"base64\");\n      fs.writeFileSync(\"gemini-native-image.png\", buffer);\n      console.log(\"Image saved as gemini-native-image.png\");\n    }\n  }\n}\n\nmain();";
							var c = "curl -s -X POST\n  \"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent\"\\\n  -H \"x-goog-api-key: $GEMINI_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"contents\": [{\n      \"parts\": [\n        {\"text\": \"Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\"}\n      ]\n    }]\n  }' \\\n  | grep -o '\"data\": \"[^\"]*\"' \\\n  | cut -d'\"' -f4 \\\n  | base64 --decode > gemini-native-image.png";
							break;
						case "gemini-3":
							a = "from google import genai\n\nclient = genai.Client()\n\nresponse = client.models.generate_content(\n    model=\"gemini-3.1-pro-preview\",\n    contents=\"Explain how AI works in a few words\"\n)\nprint(response.text)";
							b = "import { GoogleGenAI } from \"@google/genai\";\n\nconst ai = new GoogleGenAI({});\n\nasync function main() {\n  const response = await ai.models.generateContent({\n    model: \"gemini-3.1-pro-preview\",\n    contents: \"Explain how AI works in a few words\",\n  });\n  console.log(response.text);\n}\n\nawait main();";
							c = "curl \"https://generativelanguage.googleapis.com/v1beta/models/\\\ngemini-3.1-pro-preview:generateContent\" \\\n  -H \"x-goog-api-key: $GEMINI_API_KEY\" \\\n  -H 'Content-Type: application/json' \\\n  -X POST \\\n  -d '{\n    \"contents\": [\n      {\n        \"parts\": [\n          {\n            \"text\": \"Explain how AI works in a few words\"\n          }\n        ]\n      }\n    ]\n  }'";
							break;
						case "gemini-3-pro-image":
							a = "import PIL.Image\nfrom google import genai\nfrom google.genai import types\nfrom io import BytesIO\n\nclient = genai.Client()\n\nprompt = \"\"\"\n    Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\n  \"\"\"\n\nresponse = client.models.generate_content(\n    model=\"gemini-3-pro-image-preview\",\n    contents=[prompt],\n)\n\nfor part in response.candidates[0].content.parts:\n  if part.text is not None:\n    print(part.text)\n  elif part.inline_data is not None:\n    image = PIL.Image.open(BytesIO(part.inline_data.data))\n    image.save(f\"generated_image.png\")";
							b = "import { GoogleGenAI, Modality } from \"@google/genai\";\nimport * as fs from \"node:fs\";\n\nasync function main() {\n\n  const ai = new GoogleGenAI({});\n\n  const prompt =\n    \"Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\";\n\n  const response = await ai.models.generateContent({\n    model: \"gemini-3-pro-image-preview\",\n    contents: prompt,\n  });\n  for (const part of response.candidates[0].content.parts) {\n    if (part.text) {\n      console.log(part.text);\n    } else if (part.inlineData) {\n      const imageData = part.inlineData.data;\n      const buffer = Buffer.from(imageData, \"base64\");\n      fs.writeFileSync(\"gemini-native-image.png\", buffer);\n      console.log(\"Image saved as gemini-native-image.png\");\n    }\n  }\n}\n\nmain();";
							c = "curl -s -X POST\n  \"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent\"\\\n  -H \"x-goog-api-key: $GEMINI_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"contents\": [{\n      \"parts\": [\n        {\"text\": \"Show me a picture of a nano banana dish in a fancy restaurant with a Gemini theme\"}\n      ]\n    }]\n  }' \\\n  | grep -o '\"data\": \"[^\"]*\"' \\\n  | cut -d'\"' -f4 \\\n  | base64 --decode > gemini-native-image.png";
							break;
						default: a = "from google import genai\n\nclient = genai.Client()\n\nresponse = client.models.generate_content(\n    model=\"gemini-3.1-pro-preview\",\n    contents=\"Explain how AI works in a few words\"\n)\nprint(response.text)", b = "import { GoogleGenAI } from \"@google/genai\";\n\nconst ai = new GoogleGenAI({});\n\nasync function main() {\n  const response = await ai.models.generateContent({\n    model: \"gemini-3.1-pro-preview\",\n    contents: \"Explain how AI works in a few words\",\n  });\n  console.log(response.text);\n}\n\nawait main();", c = "curl \"https://generativelanguage.googleapis.com/v1beta/models/\\\ngemini-3.1-pro-preview:generateContent\" \\\n  -H \"x-goog-api-key: $GEMINI_API_KEY\" \\\n  -H 'Content-Type: application/json' \\\n  -X POST \\\n  -d '{\n    \"contents\": [\n      {\n        \"parts\": [\n          {\n            \"text\": \"Explain how AI works in a few words\"\n          }\n        ]\n      }\n    ]\n  }'";
					}
					a = a ? this.H.highlight(a, "python").value : "";
					b = b ? this.H.highlight(b, "javascript").value : "";
					c = c ? this.H.highlight(c, "bash").value : "";
					var d = [];
					a && d.push({
						title: "Python",
						mX: a,
						lineNumbers: cwe(a)
					});
					b && d.push({
						title: "Node.js",
						mX: b,
						lineNumbers: cwe(b)
					});
					c && d.push({
						title: "REST",
						mX: c,
						lineNumbers: cwe(c)
					});
					return d;
				});
				this.aa.A.set(!0);
				_.Fk([this.lp], () => {
					var a = this.lp();
					if (a.length > 0) for (let b of a) this.R.observe(b.nativeElement);
				});
				_.Fk([this.I], () => {
					var a = this.I();
					switch (a) {
						case "gemini-3.1-flash-image-preview":
							_.mK(this.F, _.jje);
							break;
						case "veo-3":
							_.mK(this.F, _.gje);
							break;
						case "gemini-3-pro-image":
							_.mK(this.F, _.hje);
							break;
						case "gemini-3":
							_.mK(this.F, _.ije);
							break;
						default: _.OBb(this.F);
					}
					if (a) {
						a = _.jd(`${window.location.origin}${window.location.pathname}`);
						let b = document.head.querySelector("link[rel=\"canonical\"]");
						a && b && _.xea(b, a, "canonical");
					}
				});
			}
			sq(a) {
				return _.jya(a, this.isSignedIn);
			}
		};
		_.ds.J = function(a) {
			return new (a || _.ds)();
		};
		_.ds.ka = _.u({
			type: _.ds,
			da: [["ms-marketing-welcome-screen"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.lp, bwe, 5);
				a & 2 && _.ki();
			},
			ha: 46,
			ia: 15,
			la: [
				["animateInView", ""],
				["defaultLandingPageContent", ""],
				["modelPage", ""],
				["dividerTemplate", ""],
				["featureCardTemplate", ""],
				["modelCardTemplate", ""],
				["exploreModelsSection", ""],
				[
					"exploreModelsSection",
					"",
					"animateInView",
					""
				],
				[1, "grid-background"],
				[3, "showNotificationCard"],
				[1, "main-container"],
				[
					3,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[3, "ngTemplateOutlet"],
				[
					1,
					"section-header",
					"animate-in-view"
				],
				[
					1,
					"code-block-card",
					"animate-in-view"
				],
				[1, "code-block-left-side"],
				[1, "code-block-title"],
				[
					1,
					"code-block-time-estimate",
					"viewport-small-hidden"
				],
				[3, "iconName"],
				[1, "code-block-button-container"],
				[
					1,
					"custom-button-small",
					"code-block-button",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "code-block-right-side"],
				[
					1,
					"code-block-tab-group",
					3,
					"selectedTabChange",
					"animationDuration",
					"mat-stretch-tabs",
					"selectedIndex"
				],
				[3, "label"],
				[1, "model-cards-container"],
				[1, "code-block-tab-content"],
				[
					1,
					"line-numbers",
					"viewport-small-hidden"
				],
				[3, "innerHtml"],
				[
					"type",
					"lockup",
					1,
					"header-lockup-logo"
				],
				[1, "header-subtitle"],
				[
					"ms-autoplaying-video",
					"",
					"loop",
					"",
					"controls",
					"",
					"controlsList",
					"nodownload",
					"src",
					"https://www.gstatic.com/aistudio/welcome/v3/welcome_hero_2.mp4",
					1,
					"splash-content",
					"chat-landing-page-video",
					"animate-in-view",
					3,
					"muted"
				],
				[1, "main-content-buttons"],
				[
					1,
					"custom-button-large",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "feature-cards-container"],
				[
					1,
					"model-page-title",
					"animate-in-view"
				],
				[
					1,
					"model-page-subtitle",
					"animate-in-view"
				],
				[
					1,
					"splash-content",
					"model-page-image",
					"animate-in-view",
					3,
					"src",
					"alt"
				],
				[
					"ms-autoplaying-video",
					"",
					"controls",
					"",
					"controlsList",
					"nodownload",
					"loop",
					"",
					1,
					"splash-content",
					"model-page-video",
					"animate-in-view",
					3,
					"muted",
					"src"
				],
				[
					1,
					"main-content-buttons",
					"animate-in-view"
				],
				[1, "model-page-hero-footer-text"],
				[
					"data-test-id",
					"model-page-main-cta-button",
					1,
					"custom-button-large",
					3,
					"ve",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"model-page-main-cta-button",
					1,
					"custom-button-large",
					3,
					"documentation-path",
					"ve",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"model-page-main-cta-button",
					1,
					"custom-button-large",
					3,
					"click",
					"ve",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[
					"data-test-id",
					"model-page-main-cta-button",
					1,
					"custom-button-large",
					3,
					"click",
					"documentation-path",
					"ve",
					"veMutable",
					"veImpression",
					"veClick"
				],
				[
					1,
					"divider-container",
					"animate-in-view"
				],
				[1, "divider"],
				[1, "feature-card"],
				[1, "feature-card-content"],
				[1, "feature-card-tagline"],
				[
					1,
					"feature-card-tagline-icon",
					3,
					"iconName"
				],
				[
					1,
					"feature-card-tagline-image",
					3,
					"src",
					"alt"
				],
				[1, "feature-card-tagline-text"],
				[1, "feature-card-title"],
				[1, "feature-card-description"],
				[1, "feature-card-button-container"],
				[1, "feature-card-media-container"],
				[
					3,
					"class",
					"src",
					"alt"
				],
				[
					"ms-autoplaying-video",
					"",
					3,
					"autoplay",
					"loop",
					"class",
					"muted",
					"src"
				],
				[
					1,
					"custom-button-small",
					3,
					"click",
					"ve",
					"veImpression",
					"veClick"
				],
				[
					3,
					"src",
					"alt"
				],
				[
					"ms-autoplaying-video",
					"",
					3,
					"autoplay",
					"loop",
					"muted",
					"src"
				],
				[
					1,
					"model-card",
					3,
					"click",
					"documentation-path",
					"ve",
					"veImpression",
					"veClick"
				],
				[1, "model-card-content"],
				[1, "model-card-title"],
				[1, "model-card-description"],
				[
					1,
					"model-card-icon",
					3,
					"src",
					"alt"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 8), _.I(1, "ms-marketing-grid-canvas"), _.H(), _.I(2, "ms-marketing-welcome-screen-header", 9), _.F(3, "main", 10), _.B(4, vve, 1, 4, "ng-container", 11)(5, wve, 1, 1, "ng-container", 12), _.F(6, "h1", 13, 0), _.R(8, " Start building with the API today "), _.H(), _.F(9, "div", 14, 0)(11, "div", 15)(12, "div", 16), _.R(13, "Developer quickstart"), _.H(), _.F(14, "div"), _.R(15, " Set up your environment and make your first API request in minutes "), _.H(), _.F(16, "div", 17), _.I(17, "span", 18), _.F(18, "span"), _.R(19, "4 min"), _.H()(), _.F(20, "div", 19)(21, "a", 20), _.J("click", function() {
					_.Rn(b.UO, "WELCOME_LANDING", "Clicked Get API Key Button");
				}), _.I(22, "span", 18), _.R(23, " Get API key "), _.H()()(), _.F(24, "div", 21)(25, "mat-tab-group", 22), _.J("selectedTabChange", function(c) {
					b.yWa.set(c.index);
				}), _.Ah(26, yve, 7, 3, "mat-tab", 23, _.yh), _.H()()(), _.B(28, zve, 3, 1)(29, Ave, 4, 0, "h1", 13), _.F(30, "div", 24, 0), _.Ah(32, Cve, 1, 4, "ng-container", 11, _.yh), _.H(), _.Ih(34, 12), _.H(), _.I(35, "ms-marketing-welcome-footer"), _.z(36, Fve, 19, 17, "ng-template", null, 1, _.Ii)(38, Qve, 18, 6, "ng-template", null, 2, _.Ii)(40, Rve, 3, 0, "ng-template", null, 3, _.Ii)(42, $ve, 16, 13, "ng-template", null, 4, _.Ii)(44, awe, 8, 13, "ng-template", null, 5, _.Ii));
				a & 2 && (a = _.O(41), _.y(2), _.E("showNotificationCard", b.FU()), _.y(2), _.C(b.FU() ? 5 : 4), _.y(13), _.E("iconName", b.S.uQa), _.y(4), _.E("ve", b.ve.nmb)("veImpression", !0)("veClick", !0), _.wh("href", b.sq("api-keys"), _.rg), _.y(), _.E("iconName", b.S.ly), _.y(3), _.E("animationDuration", 0)("mat-stretch-tabs", !0)("selectedIndex", b.yWa()), _.y(), _.Bh(b.mzb()), _.y(2), _.C(b.hv() ? 28 : 29), _.y(2), _.P("animate-in-view", b.hv()), _.y(2), _.Bh(b.wKb), _.y(2), _.E("ngTemplateOutlet", a));
			},
			dependencies: [
				_.$7,
				_.tz,
				_.nz,
				_.LC,
				_.c8,
				_.dz,
				_.tG,
				_.OD,
				_.ND,
				_.wI,
				_.MM,
				_.KM,
				_.LM,
				_.Cz,
				_.Bz,
				_.d8,
				_.e8
			],
			styles: ["@-webkit-keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.animate-in-view[_ngcontent-%COMP%]{opacity:0}.animate-in-view.animation-triggered[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);animation:_ngcontent-%COMP%_fadeIn .4s cubic-bezier(.215,.61,.355,1);opacity:1}.feature-cards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px 16px;margin-bottom:30px;min-width:0;width:100%}@media screen and (max-width:600px){.feature-cards-container[_ngcontent-%COMP%]{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:0;overflow-x:scroll;width:100%}}.feature-cards-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{margin:56px 0}.feature-card[_ngcontent-%COMP%]{background:rgba(31,31,31,.6);border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 45%;-moz-box-flex:1;-ms-flex:1 0 45%;flex:1 0 45%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}@media screen and (max-width:768px){.feature-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}}@media screen and (max-width:600px){.feature-card[_ngcontent-%COMP%]{overflow:hidden;max-width:95%}}.feature-card.full-width[_ngcontent-%COMP%]{background:transparent;border:none;-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:120px}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0}.feature-card.full-width[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .feature-card.full-width[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none}}.feature-card.full-width.last-card-of-group[_ngcontent-%COMP%]{margin-bottom:0}.feature-card-content[_ngcontent-%COMP%]{padding:20px 20px 0 20px}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{max-width:400px;padding:70px 45px 0 0}@media screen and (max-width:600px){.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-content[_ngcontent-%COMP%]{padding:0}}.feature-card-tagline[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-tagline-text[_ngcontent-%COMP%]{color:#8c8c8c;text-align:center;font-family:Inter Tight,sans-serif;font-size:16px;font-style:normal;font-weight:300;line-height:20px}@media screen and (max-width:600px){.feature-card-tagline-text[_ngcontent-%COMP%]{font-size:14px}}.feature-card-tagline-icon[_ngcontent-%COMP%]{color:#8c8c8c;font-size:20px;margin-right:4px}.feature-card-tagline-image[_ngcontent-%COMP%]{margin-right:6px}.feature-card-title[_ngcontent-%COMP%]{margin-bottom:12px;color:#d4d4d4;font-family:Inter Tight,sans-serif;font-size:28px;font-style:normal;font-weight:300;line-height:normal}@media screen and (max-width:600px){.feature-card-title[_ngcontent-%COMP%]{font-size:18px}}.feature-card-description[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;font-size:16px;line-height:1.5;margin-bottom:20px}@media screen and (max-width:600px){.feature-card-description[_ngcontent-%COMP%]{margin-bottom:10px}}.feature-card-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.feature-card-image[_ngcontent-%COMP%]{min-width:0;width:100%}.feature-card-media-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.feature-card.full-width[_ngcontent-%COMP%]   .feature-card-media-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;max-height:500px;max-width:500px;width:100%}.feature-card[_ngcontent-%COMP%]:not(.full-width)   .feature-card-media-container[_ngcontent-%COMP%]{margin-top:20px}.feature-card-video[_ngcontent-%COMP%]{aspect-ratio:1/1;border-radius:32px;max-height:500px;object-fit:cover;width:100%}[_nghost-%COMP%]{background-color:#191919;overflow:hidden auto;position:relative;width:100%}@media screen and (max-width:600px){*[_ngcontent-%COMP%]   .viewport-small-hidden[_ngcontent-%COMP%]{display:none}}*[_ngcontent-%COMP%]   .viewport-small-shown[_ngcontent-%COMP%]{display:none}@media screen and (max-width:600px){*[_ngcontent-%COMP%]   .viewport-small-shown[_ngcontent-%COMP%]{display:initial}}.grid-background[_ngcontent-%COMP%]{height:600px;-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(transparent));-webkit-mask-image:-webkit-linear-gradient(top,#fff,transparent);mask-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(transparent));mask-image:linear-gradient(180deg,#fff,transparent);position:absolute;width:100%;z-index:1}.footer-container[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]{position:relative;z-index:2}@media screen and (max-width:768px){.footer-container[_ngcontent-%COMP%], .footer-subtitle[_ngcontent-%COMP%], .header-subtitle[_ngcontent-%COMP%], .model-page-subtitle[_ngcontent-%COMP%]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;padding:0 20px}}@-webkit-keyframes _ngcontent-%COMP%_wipeBlurIn{0%{background-position:100% 0;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}to{background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes _ngcontent-%COMP%_wipeBlurIn{0%{background-position:100% 0;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}to{background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}}.wipe-container[_ngcontent-%COMP%]{display:inline-block}.wipe-text[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,right top,color-stop(70%,#d4d4d4),to(transparent));background:-webkit-linear-gradient(left,#d4d4d4 70%,transparent);background:linear-gradient(90deg,#d4d4d4 70%,transparent);background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8}.wipe-container.animation-triggered[_ngcontent-%COMP%]   .wipe-text[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_wipeBlurIn 1.2s cubic-bezier(.25,.46,.45,.94) forwards;animation:_ngcontent-%COMP%_wipeBlurIn 1.2s cubic-bezier(.25,.46,.45,.94) forwards;background-position:0 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}.divider-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%}.divider[_ngcontent-%COMP%]{border-color:#2a2a2a;margin:80px 0;width:100%}@media screen and (max-width:600px){.divider[_ngcontent-%COMP%]{margin:32px 0}}.custom-button-small[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#323232;border:1px solid #3e3e3e;border-radius:12px;color:#d4d4d4;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;height:36px;opacity:.9;padding:8px;-webkit-transition:background-color .2s ease-in-out,opacity .2s ease-in-out;transition:background-color .2s ease-in-out,opacity .2s ease-in-out}.custom-button-small.link-button[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.custom-button-small.link-button[_ngcontent-%COMP%]:hover, .custom-button-small[_ngcontent-%COMP%]:hover{background:#3c3c3c;border-color:#3e3e3e;opacity:1}.custom-button-large[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;border:1px solid #3e3e3e;border-radius:16px;color:#d4d4d4;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;height:40px;padding:12px;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}@media screen and (max-width:600px){.custom-button-large[_ngcontent-%COMP%]{border-radius:9px;gap:6px;height:30px;font-size:12px}.custom-button-large[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.custom-button-large[_ngcontent-%COMP%]:hover{background:#2a2a2a}.main-content-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.main-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:auto;max-width:998px;width:100%}@media (max-width:1046px){.main-container[_ngcontent-%COMP%]{padding:0 24px}}.header-lockup-logo[_ngcontent-%COMP%]{display:block;margin-bottom:8px;width:323px}@media screen and (max-width:600px){.header-lockup-logo[_ngcontent-%COMP%]{width:200px}}.model-page-hero-footer-text[_ngcontent-%COMP%]{color:#8c8c8c;font-size:16px;line-height:1.6;margin:0 auto 40px;max-width:700px;text-align:center}@media screen and (max-width:600px){.model-page-hero-footer-text[_ngcontent-%COMP%]{font-size:14px;margin-bottom:24px;max-width:100%}}.footer-subtitle[_ngcontent-%COMP%], .header-subtitle[_ngcontent-%COMP%], .model-page-subtitle[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter Tight,sans-serif;font-size:24px;font-style:normal;font-weight:300;line-height:normal;letter-spacing:.2px}@media screen and (max-width:600px){.footer-subtitle[_ngcontent-%COMP%], .header-subtitle[_ngcontent-%COMP%], .model-page-subtitle[_ngcontent-%COMP%]{font-size:16px;text-align:center}}.header-subtitle[_ngcontent-%COMP%], .model-page-subtitle[_ngcontent-%COMP%]{margin-bottom:40px}@media screen and (max-width:600px){.header-subtitle[_ngcontent-%COMP%], .model-page-subtitle[_ngcontent-%COMP%]{margin-bottom:20px}}.footer-subtitle[_ngcontent-%COMP%]{margin-bottom:36px}.section-header[_ngcontent-%COMP%]{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:40px;color:#d4d4d4;font-family:Inter Tight,sans-serif;font-size:28px;font-style:normal;font-weight:300;line-height:normal}@media screen and (max-width:600px){.section-header[_ngcontent-%COMP%]{font-size:18px}}@media screen and (max-width:600px){.section-header[_ngcontent-%COMP%]{margin-bottom:30px}}.splash-content[_ngcontent-%COMP%]{margin-bottom:50px;width:100%}@media screen and (max-width:600px){.splash-content[_ngcontent-%COMP%]{margin-bottom:32px}}.chat-landing-page-image[_ngcontent-%COMP%], .model-page-image[_ngcontent-%COMP%]{aspect-ratio:988/507;max-width:988px}.chat-landing-page-video[_ngcontent-%COMP%]{border-radius:16px}.model-page-video[_ngcontent-%COMP%]{aspect-ratio:16/9}.main-content-buttons[_ngcontent-%COMP%]{margin-bottom:20px}@media screen and (max-width:768px){.main-content-buttons[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0;width:100%}}@media screen and (max-width:600px){.main-content-buttons[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.model-page-title[_ngcontent-%COMP%]{color:#d4d4d4;font-family:Inter Tight,sans-serif;font-style:normal;font-weight:300;line-height:normal;font-size:58px;margin-bottom:12px;text-align:center}@media screen and (max-width:600px){.model-page-title[_ngcontent-%COMP%]{font-size:40px}}.model-card-content[_ngcontent-%COMP%]{padding:20px 20px 0 20px}.model-card-title[_ngcontent-%COMP%]{margin-bottom:12px;color:#d4d4d4;font-family:Inter Tight,sans-serif;font-size:28px;font-style:normal;font-weight:300;line-height:normal}@media screen and (max-width:600px){.model-card-title[_ngcontent-%COMP%]{font-size:18px}}.model-card-description[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.model-card-description[_ngcontent-%COMP%]{margin-bottom:250px}.shield-spark-icon[_ngcontent-%COMP%]{height:300px;width:300px}.code-block-card[_ngcontent-%COMP%]{background:#1f1f1f;border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:70px;padding:16px;width:100%}@media screen and (max-width:768px){.code-block-card[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}}@media screen and (max-width:600px){.code-block-card[_ngcontent-%COMP%]{margin-bottom:20px}}.code-block-left-side[_ngcontent-%COMP%]{color:#8c8c8c;font-family:Inter,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;color:#d4d4d4;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;margin-right:30px;max-width:240px}@media screen and (max-width:768px){.code-block-left-side[_ngcontent-%COMP%]{margin-right:0;max-width:unset}}.code-block-title[_ngcontent-%COMP%]{margin-bottom:8px}.code-block-time-estimate[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px}.code-block-button-container[_ngcontent-%COMP%]{margin-top:auto}.code-block-button[_ngcontent-%COMP%]{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;width:130px}@media screen and (max-width:768px){.code-block-button[_ngcontent-%COMP%]{margin-top:8px}}.code-block-right-side[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;min-width:0;width:100%}.code-block-right-side[_ngcontent-%COMP%]   mat-tab-group[_ngcontent-%COMP%]{width:100%}.code-block-right-side[_ngcontent-%COMP%]   mat-tab-group.code-block-tab-group[_ngcontent-%COMP%]{--mat-tab-active-label-text-color:#d4d4d4;--mat-tab-active-focus-label-text-color:#d4d4d4;--mat-tab-active-focus-indicator-color:#d4d4d4;--mat-tab-active-indicator-color:#d4d4d4;--mat-tab-active-indicator-shape:3px 3px 0 0;--mat-tab-active-indicator-height:3px;--mat-tab-active-ripple-color:hsla(0,0%,100%,.7);--mat-tab-active-hover-label-text-color:#d4d4d4;--mat-tab-active-hover-indicator-color:#d4d4d4;--mat-tab-inactive-focus-label-text-color:#8c8c8c;--mat-tab-inactive-hover-label-text-color:#8c8c8c;--mat-tab-inactive-label-text-color:#8c8c8c;--mat-tab-inactive-ripple-color:hsla(0,0%,100%,.7)}.code-block-tab-content[_ngcontent-%COMP%]{border-top:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:350px;margin-right:16px;overflow-x:auto;padding-top:12px}.line-numbers[_ngcontent-%COMP%]{-webkit-box-align:end;-webkit-align-items:end;-moz-box-align:end;-ms-flex-align:end;align-items:end;background:inherit;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:Google Sans Mono,Courier New,Courier,monospace;left:0;padding:0 12px;position:-webkit-sticky;position:sticky;z-index:1;background:#1f1f1f;color:#8c8c8c;width:36px}pre[_ngcontent-%COMP%]{margin:0}.model-cards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:16px;margin-bottom:30px}@media screen and (max-width:600px){.model-cards-container[_ngcontent-%COMP%]{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:0;overflow-x:scroll;width:100%}}.model-card[_ngcontent-%COMP%]{background:#1f1f1f;border:1px solid #2a2a2a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 30%;-moz-box-flex:1;-ms-flex:1 0 30%;flex:1 0 30%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;position:relative;width:100%;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}.model-card[_ngcontent-%COMP%]:hover{background-color:#2a2a2a}@media screen and (max-width:768px){.model-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1 0 100%;-moz-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}}@media screen and (max-width:600px){.model-card[_ngcontent-%COMP%]{overflow:hidden;max-width:87%}}.model-card-icon[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


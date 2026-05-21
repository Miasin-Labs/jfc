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
		var nle, ole, ple, qle, rle, sle, ule, vle, wle, tle;
		nle = function(a) {
			a & 1 && (_.F(0, "a", 4), _.R(1), _.H());
			a & 2 && (a = _.K(), _.E("href", _.wi(a.Gh.href), _.rg), _.y(), _.U(a.Gh.label));
		};
		ole = function(a) {
			a & 1 && (_.F(0, "a", 5), _.R(1), _.H());
			a & 2 && (a = _.K(), _.E("routerLink", a.Gh.routerLink.path)("queryParams", a.UL(a.Gh.routerLink.queryParams)), _.y(), _.U(a.Gh.label));
		};
		ple = function(a) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", _.wi(a.href), _.rg), _.y(), _.U(a.label));
		};
		qle = function(a) {
			a & 1 && (_.F(0, "a", 12), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("documentation-path", _.wi(a.zn)), _.y(), _.U(a.label));
		};
		rle = function(a) {
			a & 1 && (_.F(0, "a", 13), _.R(1), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.E("routerLink", a.routerLink.path)("queryParams", b.UL(a.routerLink.queryParams));
				_.y();
				_.U(a.label);
			}
		};
		sle = function(a, b) {
			a & 1 && _.B(0, ple, 2, 3, "a", 11)(1, qle, 2, 3, "a", 12)(2, rle, 2, 3, "a", 13);
			a & 2 && (a = b.V, _.C(a.href ? 0 : a.zn ? 1 : a.routerLink ? 2 : -1));
		};
		ule = function(a, b) {
			a & 1 && (_.F(0, "div", 6)(1, "h4", 10), _.R(2), _.H(), _.Ah(3, sle, 3, 1, null, null, tle), _.H());
			a & 2 && (a = b.V, _.y(2), _.U(a.title), _.y(), _.Bh(a.links));
		};
		vle = function(a) {
			return Object.fromEntries(a);
		};
		wle = (a, b) => b.title;
		tle = (a, b) => b.label;
		_.h8 = class {
			constructor() {
				this.theme = _.V("dark");
				this.description = "Start exploring and building with Google’s latest models.";
				this.Gh = {
					label: "Sign up and get started",
					routerLink: {
						path: "/apps",
						queryParams: []
					}
				};
				this.columns = [
					{
						title: "Models",
						links: [
							{
								label: "Gemini",
								zn: "/gemini-api/docs/models/gemini-3.1-pro-preview"
							},
							{
								label: "Nano Banana",
								routerLink: {
									path: "/models/gemini-3-1-flash-image",
									queryParams: []
								}
							},
							{
								label: "Veo",
								routerLink: {
									path: "/models/veo-3",
									queryParams: []
								}
							}
						]
					},
					{
						title: "Product",
						links: [
							{
								label: "AI Studio",
								routerLink: {
									path: "/apps",
									queryParams: []
								}
							},
							{
								label: "App gallery",
								routerLink: {
									path: "/apps",
									queryParams: [
										["source", "showcase"],
										["NLb", "featured"],
										["showcaseTag", "featured"]
									]
								}
							},
							{
								label: "Documentation",
								zn: "/gemini-api/docs"
							},
							{
								label: "Gemini API key",
								zn: "/gemini-api/docs/models/gemini-3.1-pro-preview"
							},
							{
								label: "Pricing",
								zn: "/gemini-api/docs/pricing"
							},
							{
								label: "Case studies",
								routerLink: {
									path: "/case-studies",
									queryParams: []
								}
							}
						]
					},
					{
						title: "Capabilities",
						links: [{
							label: "Vibe coding",
							routerLink: {
								path: "/vibe-code",
								queryParams: []
							}
						}]
					},
					{
						title: "Information",
						links: [
							{
								label: "Gemini app",
								href: "https://gemini.google/about/"
							},
							{
								label: "Privacy",
								href: "https://policies.google.com/privacy"
							},
							{
								label: "Terms",
								href: "https://ai.google.dev/gemini-api/terms"
							}
						]
					}
				];
				this.UL = vle;
			}
		};
		_.h8.J = function(a) {
			return new (a || _.h8)();
		};
		_.h8.ka = _.u({
			type: _.h8,
			da: [["ms-marketing-footer"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("theme-light", b.theme() === "light");
			},
			inputs: { theme: [1, "theme"] },
			ha: 12,
			ia: 2,
			la: [
				[1, "footer"],
				[1, "footer_divider"],
				[1, "footer__brand"],
				[1, "footer__description"],
				[
					1,
					"footer__cta",
					"btn",
					"btn--primary",
					3,
					"href"
				],
				[
					1,
					"footer__cta",
					"btn",
					"btn--primary",
					3,
					"routerLink",
					"queryParams"
				],
				[1, "footer__col"],
				[1, "footer__bottom"],
				[1, "footer__logo-large"],
				[
					"src",
					"https://www.gstatic.com/aistudio-static/vibe_code/footer_logo.svg",
					"alt",
					"Google AI Studio large logo",
					1,
					"footer__logo-img"
				],
				[1, "footer__col-title"],
				[
					1,
					"footer__col-link",
					3,
					"href"
				],
				[
					1,
					"footer__col-link",
					3,
					"documentation-path"
				],
				[
					1,
					"footer__col-link",
					3,
					"routerLink",
					"queryParams"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "footer", 0), _.I(1, "div", 1), _.F(2, "div", 2)(3, "p", 3), _.R(4), _.H(), _.B(5, nle, 2, 3, "a", 4)(6, ole, 2, 3, "a", 5), _.H(), _.Ah(7, ule, 5, 1, "div", 6, wle), _.F(9, "div", 7)(10, "div", 8), _.I(11, "img", 9), _.H()()());
				a & 2 && (_.y(4), _.U(b.description), _.y(), _.C(b.Gh.href ? 5 : b.Gh.routerLink ? 6 : -1), _.y(2), _.Bh(b.columns));
			},
			dependencies: [_.sA, _.LC],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-bottom:20px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}@media (min-width:1024px){.footer[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.footer[_ngcontent-%COMP%]{padding-bottom:40px}}.footer_divider[_ngcontent-%COMP%]{width:100%;height:1px;background-color:transparent;margin-bottom:40px}@media (min-width:1024px){.footer_divider[_ngcontent-%COMP%]{margin-bottom:80px}}.footer__brand[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-bottom:32px}@media (min-width:1024px){.footer__brand[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0}}.footer__description[_ngcontent-%COMP%]{color:#fff;font-size:24px;line-height:25.92px;letter-spacing:-.144px;margin-bottom:24px;max-width:400px}@media (min-width:1024px){.footer__description[_ngcontent-%COMP%]{max-width:329px}}.footer__cta[_ngcontent-%COMP%]{margin-top:0}.footer__col[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px}@media (min-width:1024px){.footer__col[_ngcontent-%COMP%]{width:calc(16.6666666667% - 16.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0}}.footer__col-title[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;color:#fff;letter-spacing:.1925px;margin-bottom:10px}.footer__col-link[_ngcontent-%COMP%]{font-size:14.5px;line-height:11px;color:#b2bbc5;letter-spacing:.11px;-webkit-transition:color .2s ease;transition:color .2s ease}.footer__col-link[_ngcontent-%COMP%] + .footer__col-link[_ngcontent-%COMP%]{margin-top:20px}.footer__col-link[_ngcontent-%COMP%]:hover{color:#fff}.footer__bottom[_ngcontent-%COMP%]{width:100%;margin-top:40px}@media (min-width:1024px){.footer__bottom[_ngcontent-%COMP%]{margin-top:80px}}.footer__logo-large[_ngcontent-%COMP%]{width:100%}.footer__logo-large[_ngcontent-%COMP%]   .footer__logo-img[_ngcontent-%COMP%]{width:100%;height:auto;display:block}.theme-light[_nghost-%COMP%]{display:block;width:100%;background:#f8f9fa}.theme-light[_nghost-%COMP%]   .footer_divider[_ngcontent-%COMP%]{background-color:transparent}.theme-light[_nghost-%COMP%]   .footer__description[_ngcontent-%COMP%]{color:#1f1f1f}.theme-light[_nghost-%COMP%]   .footer__cta[_ngcontent-%COMP%]{background:#1f1f1f;color:#fff}.theme-light[_nghost-%COMP%]   .footer__cta[_ngcontent-%COMP%]:hover{background:#333}.theme-light[_nghost-%COMP%]   .footer__col-title[_ngcontent-%COMP%]{color:#1f1f1f}.theme-light[_nghost-%COMP%]   .footer__col-link[_ngcontent-%COMP%]{color:#5f6368}.theme-light[_nghost-%COMP%]   .footer__col-link[_ngcontent-%COMP%]:hover{color:#1f1f1f}.theme-light[_nghost-%COMP%]   .footer__logo-img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}"]
		});
		var xle, yle, zle, Ale, Ble, Cle, Dle, Ele, Fle, Gle, Hle, Ile, Jle, Kle, Lle, Mle, Nle, Ole, Ple;
		xle = function(a) {
			a & 1 && (_.F(0, "a", 10), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", _.wi(a.href), _.rg), _.y(), _.U(a.label));
		};
		yle = function(a) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("documentation-path", _.wi(a.zn)), _.y(), _.U(a.label));
		};
		zle = function(a) {
			a & 1 && (_.F(0, "a", 12), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("routerLink", _.wi(a.routerLink)), _.y(), _.U(a.label));
		};
		Ale = function(a, b) {
			a & 1 && _.B(0, xle, 2, 3, "a", 10)(1, yle, 2, 3, "a", 11)(2, zle, 2, 3, "a", 12);
			a & 2 && (a = b.V, _.C(a.href ? 0 : a.zn ? 1 : a.routerLink ? 2 : -1));
		};
		Ble = function(a) {
			a & 1 && (_.F(0, "span", 15), _.I(1, "span", 5), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.Gh().icon));
		};
		Cle = function(a) {
			a & 1 && (_.F(0, "a", 13), _.B(1, Ble, 2, 1, "span", 15), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.E("href", _.wi(a.Gh().href), _.rg), _.y(), _.C(a.Gh().icon ? 1 : -1), _.y(), _.S(" ", a.Gh().label, " "));
		};
		Dle = function(a) {
			a & 1 && (_.F(0, "span", 15), _.I(1, "span", 5), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.Gh().icon));
		};
		Ele = function(a) {
			a & 1 && (_.F(0, "a", 14), _.B(1, Dle, 2, 1, "span", 15), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.E("routerLink", _.wi(a.Gh().routerLink)), _.y(), _.C(a.Gh().icon ? 1 : -1), _.y(), _.S(" ", a.Gh().label, " "));
		};
		Fle = function(a) {
			a & 1 && _.B(0, Cle, 3, 4, "a", 13)(1, Ele, 3, 4, "a", 14);
			a & 2 && (a = _.K(), _.C(a.Gh().href ? 0 : a.Gh().routerLink ? 1 : -1));
		};
		Gle = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("href", _.wi(a.href), _.rg), _.y(), _.U(a.label));
		};
		Hle = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 20);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("documentation-path", _.wi(a.zn)), _.y(), _.U(a.label));
		};
		Ile = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 21);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("routerLink", _.wi(a.routerLink)), _.y(), _.U(a.label));
		};
		Jle = function(a, b) {
			a & 1 && _.B(0, Gle, 2, 3, "a", 16)(1, Hle, 2, 3, "a", 17)(2, Ile, 2, 3, "a", 18);
			a & 2 && (a = b.V, _.C(a.href ? 0 : a.zn ? 1 : a.routerLink ? 2 : -1));
		};
		Kle = function(a) {
			a & 1 && (_.F(0, "span", 15), _.I(1, "span", 5), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.Gh().icon));
		};
		Lle = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 24);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.B(1, Kle, 2, 1, "span", 15);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("href", _.wi(a.Gh().href), _.rg), _.y(), _.C(a.Gh().icon ? 1 : -1), _.y(), _.S(" ", a.Gh().label, " "));
		};
		Mle = function(a) {
			a & 1 && (_.F(0, "span", 15), _.I(1, "span", 5), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.Gh().icon));
		};
		Nle = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 25);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.B(1, Mle, 2, 1, "span", 15);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("routerLink", _.wi(a.Gh().routerLink)), _.y(), _.C(a.Gh().icon ? 1 : -1), _.y(), _.S(" ", a.Gh().label, " "));
		};
		Ole = function(a) {
			a & 1 && _.B(0, Lle, 3, 4, "a", 22)(1, Nle, 3, 4, "a", 23);
			a & 2 && (a = _.K(), _.C(a.Gh().href ? 0 : a.Gh().routerLink ? 1 : -1));
		};
		Ple = (a, b) => b.label;
		_.i8 = class {
			constructor() {
				this.qf = _.Dk;
				this.bx = !1;
				this.links = [
					{
						label: "Pricing",
						zn: "/gemini-api/docs/pricing"
					},
					{
						label: "Documentation",
						zn: "/gemini-api/docs"
					},
					{
						label: "Case studies",
						routerLink: "/case-studies"
					}
				];
				this.Gh = _.Li({
					label: "Get started",
					routerLink: "/",
					icon: "login"
				});
			}
			Tca() {
				this.bx = !this.bx;
			}
			mw() {
				this.bx = !1;
			}
		};
		_.i8.J = function(a) {
			return new (a || _.i8)();
		};
		_.i8.ka = _.u({
			type: _.i8,
			da: [["ms-marketing-nav"]],
			inputs: { Gh: [1, "cta"] },
			ha: 17,
			ia: 7,
			la: [
				[1, "nav"],
				[
					"routerLink",
					"/welcome",
					1,
					"nav__logo",
					3,
					"click"
				],
				[
					"src",
					"https://www.gstatic.com/aistudio-static/mobile/ais-logo.svg",
					"alt",
					"Google AI Studio",
					1,
					"nav__logo-img"
				],
				[1, "nav__links"],
				[
					1,
					"nav__menu-btn",
					3,
					"click"
				],
				[3, "iconName"],
				[1, "nav__mobile-overlay"],
				[1, "nav__mobile-links"],
				[1, "nav__mobile-footer"],
				[1, "nav__mobile-text"],
				[
					1,
					"nav__link",
					3,
					"href"
				],
				[
					1,
					"nav__link",
					3,
					"documentation-path"
				],
				[
					1,
					"nav__link",
					3,
					"routerLink"
				],
				[
					1,
					"nav__cta",
					"btn",
					"btn--primary",
					3,
					"href"
				],
				[
					1,
					"nav__cta",
					"btn",
					"btn--primary",
					3,
					"routerLink"
				],
				[1, "btn__icon"],
				[
					1,
					"nav__mobile-link",
					3,
					"href"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"documentation-path"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"routerLink"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"click",
					"href"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"click",
					"documentation-path"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"click",
					"routerLink"
				],
				[
					1,
					"nav__mobile-cta",
					"btn",
					"btn--primary",
					3,
					"href"
				],
				[
					1,
					"nav__mobile-cta",
					"btn",
					"btn--primary",
					3,
					"routerLink"
				],
				[
					1,
					"nav__mobile-cta",
					"btn",
					"btn--primary",
					3,
					"click",
					"href"
				],
				[
					1,
					"nav__mobile-cta",
					"btn",
					"btn--primary",
					3,
					"click",
					"routerLink"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "nav", 0)(1, "a", 1), _.J("click", function() {
					return b.mw();
				}), _.I(2, "img", 2), _.H(), _.F(3, "div", 3), _.Ah(4, Ale, 3, 1, null, null, Ple), _.H(), _.B(6, Fle, 2, 1), _.F(7, "button", 4), _.J("click", function() {
					return b.Tca();
				}), _.I(8, "span", 5), _.H(), _.F(9, "div", 6)(10, "div", 7), _.Ah(11, Jle, 3, 1, null, null, Ple), _.H(), _.F(13, "div", 8)(14, "p", 9), _.R(15, "Start exploring and building with Google latest models."), _.H(), _.B(16, Ole, 2, 1), _.H()()());
				a & 2 && (_.P("nav--menu-open", b.bx), _.y(4), _.Bh(b.links), _.y(2), _.C(b.Gh() ? 6 : -1), _.y(2), _.E("iconName", b.bx ? b.qf.ac : b.qf.L2), _.y(), _.P("nav__mobile-overlay--open", b.bx), _.y(2), _.Bh(b.links), _.y(5), _.C(b.Gh() ? 16 : -1));
			},
			dependencies: [
				_.tz,
				_.LC,
				_.sA,
				_.dz
			],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:100;padding:22px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(18,19,23,.7);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}@media (min-width:1024px){.nav[_ngcontent-%COMP%]{padding:22px 40px}}.nav__logo[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:2px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;z-index:2}.nav__logo-img[_ngcontent-%COMP%]{height:24px;width:auto}@media (min-width:1024px){.nav__logo-img[_ngcontent-%COMP%]{height:28px}}.nav__links[_ngcontent-%COMP%]{display:none;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:31px;margin-left:40px}@media (min-width:1024px){.nav__links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}.nav__link[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;color:#cdd4dc;-webkit-transition:color .2s ease;transition:color .2s ease;text-decoration:none}.nav__link[_ngcontent-%COMP%]:hover{color:#fff}.nav__cta[_ngcontent-%COMP%]{display:none;margin-left:auto}@media (min-width:1024px){.nav__cta[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}}.nav__menu-btn[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:auto;font-family:Material Symbols Outlined;font-size:24px;color:#fff;cursor:pointer;position:relative;z-index:2}@media (min-width:1024px){.nav__menu-btn[_ngcontent-%COMP%]{display:none}}.nav__mobile-overlay[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#0e0f12;z-index:1;padding:80px 20px 40px;opacity:0;visibility:hidden;-webkit-transition:opacity .3s ease,visibility .3s ease;transition:opacity .3s ease,visibility .3s ease}.nav__mobile-overlay--open[_ngcontent-%COMP%]{opacity:1;visibility:visible}.dark-theme[_nghost-%COMP%]   .nav__mobile-overlay[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .nav__mobile-overlay[_ngcontent-%COMP%]{background-color:#0e0f12}@media (min-width:1024px){.nav__mobile-overlay[_ngcontent-%COMP%]{display:none}}.nav__mobile-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:auto}.nav__mobile-link[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:32px;line-height:39px;letter-spacing:-.5px;color:#fff;text-decoration:none;margin-bottom:24px;-webkit-transition:color .2s ease;transition:color .2s ease}.nav__mobile-link[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nav__mobile-link[_ngcontent-%COMP%]:hover{color:#d4d4d4}.nav__mobile-footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-top:auto}.nav__mobile-text[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-size:22px;line-height:24px;letter-spacing:-.13px;max-width:256px;color:#cdd4dc;margin:0 0 24px 0}"]
		});
		var lte, mte, nte, ote, pte, qte;
		lte = function(a) {
			a & 1 && (_.F(0, "h2", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.headline()));
		};
		mte = function(a) {
			a & 1 && _.I(0, "video", 5);
			a & 2 && (a = _.K().V, _.E("src", a.video, _.rg));
		};
		nte = function(a) {
			a & 1 && _.I(0, "img", 6);
			a & 2 && (a = _.K().V, _.E("src", a.image, _.rg)("alt", a.imageAlt || ""));
		};
		ote = function(a) {
			a & 1 && (_.F(0, "div", 8), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.description));
		};
		pte = function(a) {
			a & 1 && (_.F(0, "a", 9), _.R(1), _.I(2, "span", 10), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K();
				_.E("href", a.url, _.rg);
				_.y();
				_.S(" ", a.Sl, " ");
				_.y();
				_.E("iconName", b.S.gh);
			}
		};
		qte = function(a, b) {
			a & 1 && (_.F(0, "div", 3)(1, "div", 4), _.B(2, mte, 1, 1, "video", 5)(3, nte, 1, 2, "img", 6), _.H(), _.F(4, "div", 7), _.R(5), _.H(), _.B(6, ote, 2, 1, "div", 8), _.B(7, pte, 3, 3, "a", 9), _.H());
			a & 2 && (a = b.V, _.y(2), _.C(a.video ? 2 : a.image ? 3 : -1), _.y(3), _.U(a.title), _.y(), _.C(a.description ? 6 : -1), _.y(), _.C(a.Sl ? 7 : -1));
		};
		_.s8 = class {
			constructor() {
				this.S = _.Dk;
				this.headline = _.V("");
				this.Fh = _.Li([]);
			}
		};
		_.s8.J = function(a) {
			return new (a || _.s8)();
		};
		_.s8.ka = _.u({
			type: _.s8,
			da: [["ms-marketing-card-grid"]],
			inputs: {
				headline: [1, "headline"],
				Fh: [1, "cards"]
			},
			ha: 5,
			ia: 1,
			la: [
				[1, "card-grid"],
				[1, "card-grid__title"],
				[1, "card-grid__grid"],
				[1, "card-grid__card"],
				[1, "card-grid__thumb"],
				[
					"autoplay",
					"",
					"loop",
					"",
					"muted",
					"",
					"playsinline",
					"",
					3,
					"src"
				],
				[
					3,
					"src",
					"alt"
				],
				[1, "card-grid__card-title"],
				[1, "card-grid__card-desc"],
				[
					1,
					"card-grid__card-link",
					3,
					"href"
				],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 0), _.B(1, lte, 2, 1, "h2", 1), _.F(2, "div", 2), _.Ah(3, qte, 8, 4, "div", 3, _.yh), _.H()());
				a & 2 && (_.y(), _.C(b.headline() ? 1 : -1), _.y(2), _.Bh(b.Fh()));
			},
			dependencies: [_.tz, _.dz],
			styles: [":root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}.card-grid{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px}@media (min-width:1024px){.card-grid{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.card-grid{padding-top:80px;padding-bottom:80px}}.card-grid__title{font-family:Google Sans Flex,sans-serif;font-size:45px;line-height:1.1;text-align:left;color:#fff;margin-bottom:36px;font-weight:400}.card-grid__grid{display:grid;grid-template-columns:1fr;gap:44px 20px;width:100%}@media (min-width:768px){.card-grid__grid{grid-template-columns:repeat(2,1fr)}}@media (min-width:1024px){.card-grid__grid{grid-template-columns:repeat(3,1fr)}}.card-grid__card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-grid__thumb{width:100%;aspect-ratio:440/253;border-radius:12px;overflow:hidden;margin-bottom:48px}.card-grid__thumb img,.card-grid__thumb video{width:100%;height:100%;object-fit:cover;display:block}.card-grid__card-title{font-family:Google Sans Flex,sans-serif;font-size:28px;line-height:30.2px;color:#fff;margin-bottom:16px}.card-grid__card-desc{font-family:Google Sans Flex,sans-serif;font-size:14.5px;line-height:21px;color:#b2bbc5;margin-bottom:36px;-webkit-padding-end:44px;-moz-padding-end:44px;padding-inline-end:44px}a.card-grid__card-link{font-family:Google Sans Flex,sans-serif;font-size:17.5px;line-height:25.4px;color:#fff;font-weight:500;text-decoration:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;gap:4px;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}a.card-grid__card-link:hover{opacity:.8}a.card-grid__card-link .material-symbols-outlined{font-size:20px}"],
			Ab: 2
		});
		var Gte, Hte, Ite, Jte, Kte, Mte, Nte, Ote, Lte;
		Gte = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(), _.E("src", a.QS(), _.rg));
		};
		Hte = function(a) {
			a & 1 && _.I(0, "video", 4, 0);
			a & 2 && (a = _.K(), _.E("src", a.QS(), _.rg));
		};
		Ite = function(a) {
			a & 1 && (_.F(0, "h1", 6), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.title()));
		};
		Jte = function(a) {
			a & 1 && _.I(0, "span", 12);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		Kte = function(a, b) {
			a & 1 && (_.F(0, "a", 11), _.B(1, Jte, 1, 1, "span", 12), _.R(2), _.H());
			a & 2 && (a = b.V, _.P("btn--primary", a.variant === "primary")("btn--secondary", a.variant === "secondary"), _.E("href", a.url, _.rg), _.y(), _.C(a.icon ? 1 : -1), _.y(), _.S(" ", a.text, " "));
		};
		Mte = function(a) {
			a & 1 && _.Ah(0, Kte, 3, 7, "a", 10, Lte);
			a & 2 && (a = _.K(), _.Bh(a.YA()));
		};
		Nte = function(a) {
			a & 1 && (_.F(0, "a", 9), _.Ee(), _.F(1, "svg", 13), _.I(2, "path", 14), _.H(), _.R(3), _.H());
			a & 2 && (a = _.K(), _.E("href", a.Ju(), _.rg), _.y(3), _.S(" ", a.Iu(), " "));
		};
		Ote = ["video"];
		Lte = (a, b) => b.url;
		_.u8 = class {
			constructor() {
				this.S = _.Dk;
				this.title = _.V();
				this.layout = _.V("default");
				this.YA = _.Li([]);
				this.mediaType = _.V("image");
				this.QS = _.V("assets/images/hero-bg.jpg");
				this.subtitle = _.V("Turn your ideas into real apps with Gemini in Google AI Studio.");
				this.Ju = _.V("https://aistudio.google.com/apps");
				this.Iu = _.V("Build your first app");
			}
			set ho(a) {
				this.mediaType() === "video" && a && (a.nativeElement.defaultMuted = !0, a.nativeElement.muted = !0, a.nativeElement.play().catch(() => {}));
			}
		};
		_.u8.J = function(a) {
			return new (a || _.u8)();
		};
		_.u8.ka = _.u({
			type: _.u8,
			da: [["ms-marketing-hero"]],
			Ka: function(a, b) {
				a & 1 && _.ci(Ote, 5);
				if (a & 2) {
					let c;
					_.ei(c = _.fi()) && (b.ho = c.first);
				}
			},
			inputs: {
				title: [1, "title"],
				layout: [1, "layout"],
				YA: [1, "ctas"],
				mediaType: [1, "mediaType"],
				QS: [1, "mediaSrc"],
				subtitle: [1, "subtitle"],
				Ju: [1, "ctaUrl"],
				Iu: [1, "ctaText"]
			},
			ha: 11,
			ia: 6,
			la: [
				["video", ""],
				[1, "hero"],
				[1, "hero__media"],
				[
					"alt",
					"",
					3,
					"src"
				],
				[
					"autoplay",
					"",
					"muted",
					"",
					"loop",
					"",
					"playsinline",
					"",
					3,
					"src"
				],
				[1, "hero__content"],
				[1, "hero__title"],
				[1, "hero__subtitle"],
				[1, "hero__ctas"],
				[
					1,
					"hero__cta",
					"btn",
					"btn--primary",
					"btn--large",
					3,
					"href"
				],
				[
					1,
					"hero__cta",
					"btn",
					3,
					"href",
					"btn--primary",
					"btn--secondary"
				],
				[
					1,
					"hero__cta",
					"btn",
					3,
					"href"
				],
				[3, "iconName"],
				[
					"width",
					"16",
					"height",
					"16",
					"viewBox",
					"0 0 16 16",
					"fill",
					"none",
					"xmlns",
					"http://www.w3.org/2000/svg",
					1,
					"btn__icon-svg"
				],
				[
					"d",
					"M7.91602 15.8332C7.83268 15.8332 7.75629 15.8054 7.68685 15.7498C7.63129 15.6943 7.58963 15.6248 7.56185 15.5415C7.33963 14.6665 6.99935 13.8401 6.54102 13.0623C6.09657 12.2846 5.5549 11.5693 4.91602 10.9165C4.26324 10.2776 3.54796 9.73595 2.77018 9.2915C1.9924 8.83317 1.15907 8.49289 0.270182 8.27067C0.200738 8.24289 0.138238 8.20123 0.0826825 8.14567C0.0271269 8.07623 -0.000650942 7.99984 -0.000650942 7.9165C-0.000650942 7.83317 0.0271269 7.76373 0.0826825 7.70817C0.138238 7.63873 0.200738 7.59011 0.270182 7.56234C1.15907 7.34011 1.9924 7.00678 2.77018 6.56234C3.54796 6.104 4.26324 5.55539 4.91602 4.9165C5.5549 4.26373 6.09657 3.54845 6.54102 2.77067C6.99935 1.99289 7.33963 1.15956 7.56185 0.270669C7.58963 0.201225 7.63129 0.138725 7.68685 0.0831697C7.75629 0.0276142 7.83268 -0.000163555 7.91602 -0.000163555C7.99935 -0.000163555 8.06879 0.0276142 8.12435 0.0831697C8.19379 0.138725 8.2424 0.201225 8.27018 0.270669C8.4924 1.15956 8.82574 1.99289 9.27018 2.77067C9.72852 3.54845 10.2771 4.26373 10.916 4.9165C11.5688 5.55539 12.2841 6.104 13.0619 6.56234C13.8396 7.00678 14.673 7.34011 15.5619 7.56234C15.6313 7.59011 15.6938 7.63873 15.7493 7.70817C15.8049 7.76373 15.8327 7.83317 15.8327 7.9165C15.8327 7.99984 15.8049 8.07623 15.7493 8.14567C15.6938 8.20123 15.6313 8.24289 15.5619 8.27067C14.673 8.49289 13.8396 8.83317 13.0619 9.2915C12.2841 9.73595 11.5688 10.2776 10.916 10.9165C10.2771 11.5693 9.72852 12.2846 9.27018 13.0623C8.82574 13.8401 8.4924 14.6665 8.27018 15.5415C8.2424 15.6248 8.19379 15.6943 8.12435 15.7498C8.06879 15.8054 7.99935 15.8332 7.91602 15.8332Z",
					"fill",
					"#121317"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 1)(1, "div", 2), _.B(2, Gte, 1, 1, "img", 3)(3, Hte, 2, 1, "video", 4), _.H(), _.F(4, "div", 5), _.B(5, Ite, 2, 1, "h1", 6), _.F(6, "p", 7), _.R(7), _.H(), _.F(8, "div", 8), _.B(9, Mte, 2, 0)(10, Nte, 4, 2, "a", 9), _.H()()());
				a & 2 && (_.P("hero--centered", b.layout() === "centered"), _.y(2), _.C(b.mediaType() === "image" ? 2 : b.mediaType() === "video" ? 3 : -1), _.y(3), _.C(b.title() ? 5 : -1), _.y(2), _.S(" ", b.subtitle(), " "), _.y(2), _.C(b.YA() && b.YA().length > 0 ? 9 : 10));
			},
			dependencies: [_.dz],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.hero[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:60px;overflow:hidden;background:#000}@media (min-width:1024px){.hero[_ngcontent-%COMP%]{padding-bottom:120px}}.hero--centered[_ngcontent-%COMP%]{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:278px;background:-webkit-gradient(linear,left bottom,left top,from(#121317),to(rgba(18,19,23,0)));background:-webkit-linear-gradient(bottom,#121317,rgba(18,19,23,0));background:linear-gradient(0deg,#121317,rgba(18,19,23,0));z-index:1;pointer-events:none}.hero__media[_ngcontent-%COMP%]{position:absolute;inset:0;margin:0 auto;width:100%;max-width:1500px;z-index:0}.hero__media[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;z-index:1;pointer-events:none;background:-webkit-gradient(linear,left top,right top,from(#000),to(transparent)) 0 0/10% 100% no-repeat,-webkit-gradient(linear,right top,left top,from(#000),to(transparent)) 100% 0/10% 100% no-repeat,-webkit-gradient(linear,left top,left bottom,from(#000),to(transparent)) 0 0/100% 10% no-repeat;background:-webkit-linear-gradient(left,#000,transparent) 0 0/10% 100% no-repeat,-webkit-linear-gradient(right,#000,transparent) 100% 0/10% 100% no-repeat,-webkit-linear-gradient(top,#000,transparent) 0 0/100% 10% no-repeat;background:linear-gradient(90deg,#000,transparent) 0 0/10% 100% no-repeat,linear-gradient(270deg,#000,transparent) 100% 0/10% 100% no-repeat,linear-gradient(180deg,#000,transparent) 0 0/100% 10% no-repeat}.hero__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hero__media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.hero__content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.hero__title[_ngcontent-%COMP%]{font-size:32px;font-weight:500;line-height:1.2;color:#fff;margin-bottom:16px}.hero--centered[_ngcontent-%COMP%]   .hero__title[_ngcontent-%COMP%]{font-size:48px;margin-bottom:24px}@media (min-width:1024px){.hero--centered[_ngcontent-%COMP%]   .hero__title[_ngcontent-%COMP%]{font-size:124px;margin-bottom:50px}}.hero__subtitle[_ngcontent-%COMP%]{font-size:14.5px;line-height:21px;letter-spacing:.11px;color:#cdd4dc;max-width:300px;margin-bottom:24px}@media (min-width:1024px){.hero__subtitle[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;max-width:418px;margin-bottom:32px}}.hero__ctas[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:8px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.hero__ctas[_ngcontent-%COMP%]   .btn--secondary[_ngcontent-%COMP%]{background:rgba(183,191,217,.2);border-color:rgba(183,191,217,.2)}.hero__ctas[_ngcontent-%COMP%]   .btn--secondary[_ngcontent-%COMP%]:hover{background:rgba(183,191,217,.4);border-color:rgba(183,191,217,.4)}.hero__cta[_ngcontent-%COMP%]{margin-top:0}"]
		});
		var Pte, Rte, Ste, Tte, Ute, Qte;
		Pte = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 12);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(2);
					return _.t(e.Lx(d.category));
				});
				_.F(1, "span", 13);
				_.I(2, "span", 14);
				_.H();
				_.R(3);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(2), _.P("is-active", b.kva() === a.category), _.y(2), _.E("iconName", a.icon), _.y(), _.S(" ", a.label, " "));
		};
		Rte = function(a) {
			a & 1 && (_.F(0, "div", 5), _.Ah(1, Pte, 4, 4, "button", 11, Qte), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.filters()));
		};
		Ste = function(a) {
			a & 1 && _.I(0, "div", 6);
		};
		Tte = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "a", 15);
				_.J("mouseenter", function() {
					var d = _.q(c).V, e = _.O(3), f = _.O(5), g = _.K();
					return _.t(d.video && g.play(e, f));
				})("mouseleave", function() {
					var d = _.q(c).V, e = _.O(5);
					return _.t(d.video && e.pause());
				});
				_.F(1, "div", 16);
				_.I(2, "img", 17, 0)(4, "video", 18, 1);
				_.F(6, "div", 19)(7, "button", 20);
				_.R(8, "Remix app");
				_.H()()();
				_.F(9, "div", 21);
				_.R(10);
				_.H();
				_.F(11, "div", 22);
				_.R(12);
				_.H()();
			}
			a & 2 && (a = b.V, _.E("routerLink", a.url)("queryParams", a.queryParams), _.wh("data-category", a.category), _.y(2), _.E("src", a.image, _.rg), _.y(2), _.E("src", a.video, _.rg)("poster", a.image), _.y(6), _.U(a.title), _.y(2), _.U(a.description));
		};
		Ute = () => ({ source: "showcase" });
		Qte = (a, b) => b.category;
		_.w8 = class {
			constructor() {
				this.S = _.Dk;
				this.title = _.V("Projects ready to Remix");
				this.filters = _.Li([]);
				this.Fh = _.Li([]);
				this.en = !1;
				this.window = _.m(_.Sn);
				this.kva = _.M("featured");
				this.iDb = _.W(() => {
					if (this.filters().length === 0) return this.Fh();
					var a = this.kva();
					return this.Fh().filter((b) => b.category === a);
				});
				this.en = this.window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			}
			Lx(a) {
				this.kva.set(a);
			}
			play(a, b) {
				if (!this.en) {
					a.style.opacity = "0";
					b.style.opacity = "1";
					b.defaultMuted = !0;
					b.muted = !0;
					var c;
					(c = b.play()) == null || c.catch(() => {});
				}
			}
		};
		_.w8.J = function(a) {
			return new (a || _.w8)();
		};
		_.w8.ka = _.u({
			type: _.w8,
			da: [["ms-marketing-remix"]],
			inputs: {
				title: [1, "title"],
				filters: [1, "filters"],
				Fh: [1, "cards"]
			},
			ha: 12,
			ia: 7,
			la: [
				["image", ""],
				["video", ""],
				[1, "remix"],
				[1, "remix__header"],
				[1, "remix__title"],
				[1, "remix__filters"],
				[1, "remix__divider"],
				[1, "remix__grid"],
				[
					1,
					"remix__card",
					3,
					"routerLink",
					"queryParams"
				],
				[1, "remix__cta"],
				[
					"routerLink",
					"/apps",
					1,
					"btn",
					"btn--primary",
					3,
					"queryParams"
				],
				[
					1,
					"remix__filter",
					3,
					"is-active"
				],
				[
					1,
					"remix__filter",
					3,
					"click"
				],
				[1, "remix__filter-icon"],
				[3, "iconName"],
				[
					1,
					"remix__card",
					3,
					"mouseenter",
					"mouseleave",
					"routerLink",
					"queryParams"
				],
				[1, "remix__card-thumb"],
				[
					"alt",
					"",
					1,
					"thumb__image",
					3,
					"src"
				],
				[
					"loop",
					"",
					"muted",
					"",
					"playsinline",
					"",
					"alt",
					"",
					1,
					"thumb__video",
					3,
					"src",
					"poster"
				],
				[1, "remix__card-overlay"],
				[1, "remix__card-remix-btn"],
				[1, "remix__card-title"],
				[1, "remix__card-desc"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 2)(1, "div", 3)(2, "h2", 4), _.R(3), _.H(), _.B(4, Rte, 3, 0, "div", 5), _.H(), _.B(5, Ste, 1, 0, "div", 6), _.F(6, "div", 7), _.Ah(7, Tte, 13, 8, "a", 8, _.yh), _.H(), _.F(9, "div", 9)(10, "a", 10), _.R(11, "Explore the app gallery"), _.H()()());
				a & 2 && (_.y(2), _.P("remix__title--no-filters", b.filters().length === 0), _.y(), _.U(b.title()), _.y(), _.C(b.filters().length > 0 ? 4 : -1), _.y(), _.C(b.filters().length > 0 ? 5 : -1), _.y(2), _.Bh(b.iDb()), _.y(3), _.E("queryParams", _.zi(6, Ute)));
			},
			dependencies: [_.sA, _.dz],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.remix[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px}@media (min-width:1024px){.remix[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.remix[_ngcontent-%COMP%]{padding-top:80px;padding-bottom:80px}}.remix__header[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:40px;text-align:center}.remix__title[_ngcontent-%COMP%]{font-size:28px;line-height:1.1;letter-spacing:-.5px;color:#fff;margin-bottom:20px}.remix__title.remix__title--no-filters[_ngcontent-%COMP%]{margin-bottom:0}@media (min-width:1024px){.remix__title[_ngcontent-%COMP%]{font-size:42px;line-height:1.04;letter-spacing:-.84px;margin-bottom:40px}.remix__title.remix__title--no-filters[_ngcontent-%COMP%]{margin-bottom:0}}.remix__filters[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:0;overflow-x:auto;-webkit-overflow-scrolling:touch;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media (min-width:1024px){.remix__filters[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow-x:visible}}.remix__filter[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;gap:8px;padding:10px 16px 10px 12px;border-radius:12px;font-family:Google Sans Flex,sans-serif;font-size:14.5px;line-height:21px;letter-spacing:.11px;color:#b2bbc5;opacity:.8;-webkit-transition:opacity .2s ease,color .2s ease,background .2s ease;transition:opacity .2s ease,color .2s ease,background .2s ease;cursor:pointer;white-space:nowrap}@media (min-width:1024px){.remix__filter[_ngcontent-%COMP%]{padding:12px 20px 12px 16px;font-size:17.5px;line-height:25.375px;letter-spacing:.1925px}}.remix__filter[_ngcontent-%COMP%]:hover{opacity:1;color:#fff}.remix__filter.is-active[_ngcontent-%COMP%]{background:#212226;color:#fff;opacity:1}.remix__filter-icon[_ngcontent-%COMP%]{font-family:Material Symbols Outlined;font-size:20px;line-height:1;color:#b2bbc5}.is-active[_ngcontent-%COMP%]   .remix__filter-icon[_ngcontent-%COMP%]{color:#2e96ff}.remix__divider[_ngcontent-%COMP%]{width:100%;height:1px;background:hsla(0,0%,100%,.1);margin-bottom:40px}.remix__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:44px 20px;width:100%}@media (min-width:768px){.remix__grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width:1024px){.remix__grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.remix__card[_ngcontent-%COMP%]{position:relative;border-radius:12px;padding:10px;margin:-10px;-webkit-transition:background .2s ease;transition:background .2s ease;display:block;cursor:pointer;text-decoration:none}.remix__card[_ngcontent-%COMP%]:hover{background:#212226}.remix__card[_ngcontent-%COMP%]:hover   .remix__card-overlay[_ngcontent-%COMP%]{opacity:1}.remix__card-thumb[_ngcontent-%COMP%]{width:100%;aspect-ratio:440/253;border-radius:8px;overflow:hidden;margin-bottom:12px;position:relative}.remix__card-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.remix__card-thumb[_ngcontent-%COMP%]   .thumb__image[_ngcontent-%COMP%], .remix__card-thumb[_ngcontent-%COMP%]   .thumb__video[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.remix__card-thumb[_ngcontent-%COMP%]   .thumb__video[_ngcontent-%COMP%]{opacity:0}.remix__card-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.remix__card-remix-btn[_ngcontent-%COMP%]{background:#fff;color:#0e0f12;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;padding:8px 16px;border-radius:12px;cursor:pointer}.remix__card-title[_ngcontent-%COMP%]{font-size:14.5px;line-height:21px;letter-spacing:.11px;color:#fff}@media (min-width:1024px){.remix__card-title[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px}}.remix__card-desc[_ngcontent-%COMP%]{font-size:12px;line-height:18px;letter-spacing:.1px;color:#9299a2;margin-top:4px}@media (min-width:1024px){.remix__card-desc[_ngcontent-%COMP%]{font-size:14.5px;line-height:21px;letter-spacing:.1595px;margin-top:6px}}.remix__cta[_ngcontent-%COMP%]{width:100%;margin-top:40px;text-align:center}"]
		});
		_.Vte = {
			image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/mandelbulb_explorer.png",
			video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/mandelbulb_explorer.mp4",
			title: "The Mandelbulb Explorer",
			description: "A raw WebGL masterpiece featuring a Mandelbulb fractal with overlay fog.",
			category: "art",
			url: "/apps/bundled/mandelbulb_explorer",
			queryParams: {
				showPreview: "true",
				showAssistant: "true"
			}
		};
		_.Wte = [
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Neon_Snake.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Neon_Snake.mp4",
				title: "Multiplayer Neon Snake",
				description: "Collect orbs to dominate the neon grid in this real-time multiplayer snake game.",
				category: "featured",
				url: "/apps/bundled/neon_snake_3d",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/window_seat.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/window_seat_2.mp4",
				title: "Window Seat",
				description: "Generate photorealistic window views based on live weather and specific locations.",
				category: "featured",
				url: "/apps/bundled/window_seat",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/sky_metropolis.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/sky_metropolis.mp4",
				title: "Sky Metropolis",
				description: "Manage a virtual metropolis and fulfill tasks provided by Gemini.",
				category: "featured",
				url: "/apps/bundled/sky_metropolis",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/research_visualization.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/research_visualization.mp4",
				title: "Research Visualization",
				description: "Research paper reimagined as an elegant, interactive narrative site.",
				category: "personal",
				url: "/apps/bundled/research_visualization",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/lumina.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/lumina.mp4",
				title: "Lumina Festival",
				description: "Immersive event landing page with interactive scroll effects.",
				category: "personal",
				url: "/apps/bundled/lumina",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/aura_quiet_living.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/aura_quiet_living.mp4",
				title: "Aura Quiet Living",
				description: "A serene e-commerce sample experience with an AI concierge.",
				category: "personal",
				url: "/apps/bundled/aura_quiet_living",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Massive_Multiplayer_Laser_Tag.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Massive_Multiplayer_Laser_Tag.mp4",
				title: "Massive Multiplayer Laser Tag",
				description: "Battle players worldwide in real-time multiplayer laser tag.",
				category: "games",
				url: "/apps/bundled/neon_arena_laser_tag",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Geo_Seeker.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Geo_Seeker.mp4",
				title: "GeoSeeker",
				description: "Play hide and seek against Gemini on Google Maps. Use streetview images and directional clues to guess where Gemini is hiding.",
				category: "games",
				url: "/apps/bundled/geoseeker",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/gemini_slingshot.jpg",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/gemini_slingshot.mp4",
				title: "Gemini Slingshot",
				description: "Gemini 3 Flash is your strategic co-pilot, analyzing the board and suggesting the best shots in this webcam bubble shooter.",
				category: "games",
				url: "/apps/bundled/gemini_slingshot",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Cosmic_Flow.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/Cosmic_Flow.mp4",
				title: "Cosmic Flow",
				description: "Collaborate live with others to create living particle art.",
				category: "art",
				url: "/apps/bundled/cosmic_flow",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			_.Vte,
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/personalized_comics.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/personalized_comics.mp4",
				title: "Infinite Heroes",
				description: "Localized and personalized comic book generator.",
				category: "art",
				url: "/apps/bundled/personalized_comics",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			}
		];
		_.Xte = [
			{
				icon: "star",
				label: "Featured",
				category: "featured"
			},
			{
				icon: "language",
				label: "Personal websites",
				category: "personal"
			},
			{
				icon: "stadia_controller",
				label: "2D & 3D games",
				category: "games"
			},
			{
				icon: "palette",
				label: "Interactive art",
				category: "art"
			}
		];
		var Due, Eue, Fue, Gue, Hue, Iue, Jue, Kue, Lue, Mue, Nue, Oue, Pue, Rue, Sue, Tue, Uue, Vue, Wue, Xue, Yue, $ue, ave, bve, cve, dve, eve, fve, Zue, Que;
		Due = function(a) {
			a & 1 && (_.F(0, "h2", 25), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.title()));
		};
		Eue = function(a) {
			a & 1 && (_.F(0, "a", 26), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.bka(), _.rg), _.y(), _.S(" ", a.aka(), " "));
		};
		Fue = function(a) {
			a & 1 && (_.F(0, "div", 24), _.B(1, Due, 2, 1, "h2", 25), _.B(2, Eue, 2, 2, "a", 26), _.H());
			a & 2 && (a = _.K(), _.P("model-comparison__header--wide", a.columns().length >= 3), _.y(), _.C(a.title() ? 1 : -1), _.y(), _.C(a.aka() && a.bka() ? 2 : -1));
		};
		Gue = function(a) {
			a & 1 && _.I(0, "div", 28);
			if (a & 2) {
				a = _.K().jb;
				let b = _.K();
				_.pi("grid-row", "1 / span " + (b.rows().length + 2));
				_.wh("data-col-index", a);
			}
		};
		Hue = function(a, b) {
			a & 1 && _.B(0, Gue, 1, 3, "div", 27);
			a & 2 && _.C(b.V.xM ? 0 : -1);
		};
		Iue = function(a) {
			a & 1 && (_.F(0, "div", 32), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.description));
		};
		Jue = function(a, b) {
			a & 1 && (_.F(0, "div", 29)(1, "div", 30)(2, "div", 31), _.R(3), _.H(), _.B(4, Iue, 2, 1, "div", 32), _.H()());
			a & 2 && (a = b.V, b = b.jb, _.pi("grid-row", 1), _.P("is-highlighted", a.xM)("has-description", !!a.description), _.wh("data-col-index", b), _.y(3), _.U(a.name), _.y(), _.C(a.description ? 4 : -1));
		};
		Kue = function(a, b) {
			a & 1 && _.I(0, "span", 36);
			a & 2 && _.E("iconName", b);
		};
		Lue = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K().V, _.S(" ", a, " "));
		};
		Mue = function(a, b) {
			a & 1 && (_.F(0, "div", 35), _.B(1, Kue, 1, 1, "span", 36)(2, Lue, 1, 1), _.H());
			if (a & 2) {
				let c;
				a = b.V;
				b = b.jb;
				let d = _.K().jb, e = _.K();
				_.pi("grid-row", d + 2);
				_.P("is-highlighted", e.columns()[b].xM);
				_.wh("data-col-index", b);
				_.y();
				_.C((c = e.Tg(a)) ? 1 : 2, c);
			}
		};
		Nue = function(a, b) {
			a & 1 && (_.F(0, "div", 33), _.R(1), _.H(), _.Ah(2, Mue, 3, 6, "div", 34, _.yh));
			a & 2 && (a = b.V, _.pi("grid-row", b.jb + 2), _.y(), _.U(a.label), _.y(), _.Bh(a.values));
		};
		Oue = function(a) {
			a & 1 && _.I(0, "span", 36);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		Pue = function(a, b) {
			a & 1 && (_.F(0, "a", 38), _.B(1, Oue, 1, 1, "span", 36), _.R(2), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.y(), _.C(a.icon ? 1 : -1), _.y(), _.S(" ", a.text, " "));
		};
		Rue = function(a, b) {
			a & 1 && (_.F(0, "div", 37), _.Ah(1, Pue, 3, 3, "a", 38, Que), _.H());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.pi("grid-row", c.rows().length + 2);
				_.P("is-highlighted", a.xM);
				_.wh("data-col-index", b);
				_.y();
				_.Bh(a.YA);
			}
		};
		Sue = function(a, b) {
			a & 1 && (_.F(0, "div", 17), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.S(" ", a.label, " "));
		};
		Tue = function(a) {
			a & 1 && (_.F(0, "span", 32), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.description));
		};
		Uue = function(a, b) {
			a & 1 && _.I(0, "span", 36);
			a & 2 && _.E("iconName", b);
		};
		Vue = function(a) {
			a & 1 && _.R(0);
			if (a & 2) {
				a = _.K().V;
				let b = _.K().jb;
				_.S(" ", a.values[b], " ");
			}
		};
		Wue = function(a, b) {
			a & 1 && (_.F(0, "div", 35), _.B(1, Uue, 1, 1, "span", 36)(2, Vue, 1, 1), _.H());
			if (a & 2) {
				let d;
				a = b.V;
				var c = _.K();
				b = c.V;
				c = c.jb;
				let e = _.K();
				_.P("is-highlighted", b.xM);
				_.y();
				_.C((d = e.Tg(a.values[c])) ? 1 : 2, d);
			}
		};
		Xue = function(a) {
			a & 1 && _.I(0, "span", 36);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		Yue = function(a, b) {
			a & 1 && (_.F(0, "a", 38), _.B(1, Xue, 1, 1, "span", 36), _.R(2), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.y(), _.C(a.icon ? 1 : -1), _.y(), _.S(" ", a.text, " "));
		};
		$ue = function(a, b) {
			a & 1 && (_.F(0, "div", 29)(1, "div", 30)(2, "span", 31), _.R(3), _.H(), _.B(4, Tue, 2, 1, "span", 32), _.H()(), _.Ah(5, Wue, 3, 3, "div", 39, Zue), _.F(7, "div", 37), _.Ah(8, Yue, 3, 3, "a", 38, Que), _.H());
			a & 2 && (a = b.V, b = _.K(), _.P("is-highlighted", a.xM)("has-description", !!a.description), _.y(3), _.U(a.name), _.y(), _.C(a.description ? 4 : -1), _.y(), _.Bh(b.rows()), _.y(2), _.P("is-highlighted", a.xM), _.y(), _.Bh(a.YA));
		};
		ave = function(a) {
			a & 1 && _.I(0, "video", 3);
			a & 2 && (a = _.K().V, _.E("src", a.video, _.rg));
		};
		bve = function(a) {
			a & 1 && _.I(0, "img", 4);
			a & 2 && (a = _.K().V, _.E("src", a.image, _.rg));
		};
		cve = function(a) {
			a & 1 && (_.F(0, "span", 9), _.I(1, "span", 10), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.E("iconName", a.ctaIcon));
		};
		dve = function(a) {
			a & 1 && (_.F(0, "a", 8), _.B(1, cve, 2, 1, "span", 9), _.R(2), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.Ju, _.rg), _.y(), _.C(a.ctaIcon ? 1 : -1), _.y(), _.S(" ", a.Iu, " "));
		};
		eve = function(a, b) {
			a & 1 && (_.F(0, "div", 1)(1, "div", 2), _.B(2, ave, 1, 1, "video", 3)(3, bve, 1, 1, "img", 4), _.H(), _.F(4, "div", 5)(5, "h2", 6), _.R(6), _.H(), _.F(7, "p", 7), _.R(8), _.H(), _.B(9, dve, 3, 3, "a", 8), _.H()());
			a & 2 && (a = b.V, _.y(2), _.C(a.video ? 2 : a.image ? 3 : -1), _.y(4), _.U(a.title), _.y(2), _.U(a.body), _.y(), _.C(a.Iu && a.Ju ? 9 : -1));
		};
		fve = (a, b) => b.name;
		Zue = (a, b) => b.label;
		Que = (a, b) => b.text;
		_.z8 = class {
			constructor() {
				this.columns = _.Li([]);
				this.rows = _.Li([]);
				this.title = _.V();
				this.aka = _.V();
				this.bka = _.V();
			}
			Tg(a) {
				if (a === "check") return "check";
				if (a === "close") return "close";
			}
		};
		_.z8.J = function(a) {
			return new (a || _.z8)();
		};
		_.z8.ka = _.u({
			type: _.z8,
			da: [["ms-marketing-model-comparison"]],
			inputs: {
				columns: [1, "columns"],
				rows: [1, "rows"],
				title: [1, "title"],
				aka: [1, "headerBtnText"],
				bka: [1, "headerBtnUrl"]
			},
			ha: 39,
			ia: 13,
			la: [
				[1, "model-comparison"],
				[
					"viewBox",
					"0 0 1414 1031",
					"fill",
					"none",
					"xmlns",
					"http://www.w3.org/2000/svg",
					1,
					"model-comparison__bg-svg"
				],
				[
					"opacity",
					"0.3",
					"filter",
					"url(#filter0_f_11099_1795)"
				],
				[
					"d",
					"M129.775 198.389C87.1532 213.571 98.7618 327.033 112.858 397.872C115.649 411.901 121.473 425.168 128.986 437.34C227.98 597.739 160.08 588.548 117.408 697.116C73.1711 809.668 198.272 862.192 227.763 859.691C257.254 857.189 398.527 863.692 438.008 908.713C477.488 953.734 606.394 919.218 674.89 898.708C743.386 878.199 748.619 914.216 906.064 919.218C1063.51 924.22 1154.36 892.205 1160.55 795.161C1166.73 698.117 1279.46 645.093 1315.14 577.062C1350.81 509.031 1267.1 384.474 1269.47 302.936C1271.85 221.399 1243.79 190.385 1160.55 198.389C1077.3 206.393 701.052 230.403 623.518 239.407C545.984 248.411 426.611 148.794 311.5 108.776C196.389 68.7578 188.758 177.379 129.775 198.389Z",
					"fill",
					"url(#paint0_linear_11099_1795)"
				],
				"id filter0_f_11099_1795 x 0 y 0 width 1424 height 1030.78 filterUnits userSpaceOnUse color-interpolation-filters sRGB".split(" "),
				[
					"flood-opacity",
					"0",
					"result",
					"BackgroundImageFix"
				],
				"mode normal in SourceGraphic in2 BackgroundImageFix result shape".split(" "),
				[
					"stdDeviation",
					"50",
					"result",
					"effect1_foregroundBlur_11099_1795"
				],
				"id paint0_linear_11099_1795 x1 1175.05 y1 -30.4576 x2 174.451 y2 1096.23 gradientUnits userSpaceOnUse".split(" "),
				["stop-color", "#2954BD"],
				[
					"offset",
					"0.403846",
					"stop-color",
					"#0A0A0A"
				],
				[
					"offset",
					"1",
					"stop-color",
					"#2954BD"
				],
				[
					1,
					"model-comparison__header",
					3,
					"model-comparison__header--wide"
				],
				[1, "model-comparison__table"],
				[1, "model-comparison__table-scroll"],
				[1, "model-comparison__layout--desktop"],
				[1, "model-comparison__table-inner"],
				[
					1,
					"model-comparison__label",
					"model-comparison__label--header"
				],
				[
					1,
					"model-comparison__value",
					"model-comparison__value--header",
					3,
					"is-highlighted",
					"has-description",
					"grid-row"
				],
				[
					1,
					"model-comparison__label",
					"model-comparison__label--cta"
				],
				[
					1,
					"model-comparison__ctas",
					3,
					"is-highlighted",
					"grid-row"
				],
				[1, "model-comparison__layout--mobile"],
				[1, "model-comparison__table-inner--mobile"],
				[
					1,
					"model-comparison__label",
					"model-comparison__label--header",
					"model-comparison__label--sticky-left"
				],
				[1, "model-comparison__header"],
				[1, "model-comparison__title"],
				[
					"target",
					"_blank",
					1,
					"model-comparison__header-btn",
					3,
					"href"
				],
				[
					1,
					"model-comparison__highlight-bg",
					3,
					"grid-row"
				],
				[1, "model-comparison__highlight-bg"],
				[
					1,
					"model-comparison__value",
					"model-comparison__value--header"
				],
				[1, "model-comparison__header-wrapper"],
				[1, "model-comparison__model-name"],
				[1, "model-comparison__subheadline"],
				[1, "model-comparison__label"],
				[
					1,
					"model-comparison__value",
					3,
					"is-highlighted",
					"grid-row"
				],
				[1, "model-comparison__value"],
				[3, "iconName"],
				[1, "model-comparison__ctas"],
				[
					1,
					"model-comparison__btn",
					3,
					"href"
				],
				[
					1,
					"model-comparison__value",
					3,
					"is-highlighted"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 0), _.Ee(), _.F(1, "svg", 1)(2, "g", 2), _.I(3, "path", 3), _.H(), _.F(4, "defs")(5, "filter", 4), _.I(6, "feFlood", 5)(7, "feBlend", 6)(8, "feGaussianBlur", 7), _.H(), _.F(9, "linearGradient", 8), _.I(10, "stop", 9)(11, "stop", 10)(12, "stop", 11), _.H()()(), _.B(13, Fue, 3, 4, "div", 12), _.Fe(), _.F(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16), _.Ah(18, Hue, 1, 1, null, null, fve), _.F(20, "div", 17), _.R(21, "Model"), _.H(), _.Ah(22, Jue, 5, 9, "div", 18, fve), _.Ah(24, Nue, 4, 3, null, null, Zue), _.I(26, "div", 19), _.Ah(27, Rue, 3, 5, "div", 20, fve), _.H()(), _.F(29, "div", 21)(30, "div", 22)(31, "div", 23), _.R(32, "Model"), _.H(), _.Ah(33, Sue, 2, 1, "div", 17, Zue), _.F(35, "div", 17), _.R(36, "Actions"), _.H(), _.Ah(37, $ue, 10, 8, null, null, fve), _.H()()()()());
				a & 2 && (_.y(13), _.C(b.title() || b.aka() && b.bka() ? 13 : -1), _.y(), _.P("model-comparison__table--3-or-more-cols", b.columns().length >= 3), _.y(3), _.P("two-columns", b.columns().length !== 3)("three-columns", b.columns().length === 3), _.y(), _.Bh(b.columns()), _.y(2), _.pi("grid-row", 1), _.y(2), _.Bh(b.columns()), _.y(2), _.Bh(b.rows()), _.y(2), _.pi("grid-row", b.rows().length + 2), _.y(), _.Bh(b.columns()), _.y(3), _.pi("grid-template-columns", "minmax(150px, 200px) repeat(" + b.rows().length + ", minmax(150px, max-content)) max-content"), _.y(3), _.Bh(b.rows()), _.y(4), _.Bh(b.columns()));
			},
			dependencies: [_.dz],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}.btn[_ngcontent-%COMP%], .model-comparison__btn[_ngcontent-%COMP%], .model-comparison__header-btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%], .model-comparison__btn[_ngcontent-%COMP%], .model-comparison__header-btn[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover, .model-comparison__btn[_ngcontent-%COMP%]:hover, .model-comparison__header-btn[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active, .model-comparison__btn[_ngcontent-%COMP%]:active, .model-comparison__header-btn[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled, .is-disabled.model-comparison__btn[_ngcontent-%COMP%], .is-disabled.model-comparison__header-btn[_ngcontent-%COMP%], .model-comparison__btn[_ngcontent-%COMP%]:disabled, .model-comparison__header-btn[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.model-comparison[_ngcontent-%COMP%]{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-top:40px;padding-bottom:40px;position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px}@media (min-width:1024px){.model-comparison[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.model-comparison[_ngcontent-%COMP%]{padding-top:80px;padding-bottom:80px}}.model-comparison__header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:12px;padding:0}@media (min-width:1024px){.model-comparison__header[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 auto 20px;padding:0}}@media (min-width:1024px){.model-comparison__header.model-comparison__header--wide[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}.model-comparison__title[_ngcontent-%COMP%]{color:#fff;font-family:Google Sans Flex,sans-serif;font-weight:500;margin:0;font-size:16px}@media (min-width:1024px){.model-comparison__title[_ngcontent-%COMP%]{font-size:32px;line-height:33.9px;letter-spacing:-.51px;font-weight:450}}.model-comparison__bg-svg[_ngcontent-%COMP%]{position:absolute;top:-20%;left:-5%;width:110%;height:130%;z-index:-1;pointer-events:none}.model-comparison__table[_ngcontent-%COMP%]{width:100%;padding:16px 0 32px;border-radius:24px;border:1px solid transparent;background:-webkit-gradient(linear,left top,left bottom,from(#121317),to(#121317)) padding-box,-webkit-gradient(linear,left top,right top,from(#3186ff),color-stop(50%,#346bf1),to(#4fa0ff)) border-box;background:-webkit-linear-gradient(#121317,#121317) padding-box,-webkit-linear-gradient(left,#3186ff,#346bf1 50%,#4fa0ff) border-box;background:linear-gradient(#121317,#121317) padding-box,linear-gradient(90deg,#3186ff,#346bf1 50%,#4fa0ff) border-box;position:relative}@media (min-width:1024px){.model-comparison__table[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 auto;padding:34px}}.model-comparison__table-scroll[_ngcontent-%COMP%]{overflow-x:auto;width:100%;border-radius:16px;z-index:1}.model-comparison__layout--desktop[_ngcontent-%COMP%]{display:none}@media (min-width:1024px){.model-comparison__layout--desktop[_ngcontent-%COMP%]{display:block}}.model-comparison__layout--mobile[_ngcontent-%COMP%]{display:block}@media (min-width:1024px){.model-comparison__layout--mobile[_ngcontent-%COMP%]{display:none}}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]{background:#121317;display:inline-grid;gap:0;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-family:Google Sans Flex,sans-serif;position:relative}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .model-comparison__label[_ngcontent-%COMP%]{grid-column:auto;z-index:4;position:relative}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .model-comparison__label.model-comparison__label--sticky-left[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;background:#121317;z-index:5}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .is-highlighted[_ngcontent-%COMP%]{margin-left:0}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .model-comparison__highlight-bg[_ngcontent-%COMP%]{margin-left:0}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .model-comparison__value--header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;background:#121317;z-index:5;font-size:10px}.model-comparison__table-inner--mobile[_ngcontent-%COMP%]   .model-comparison__value--header[_ngcontent-%COMP%]   .model-comparison__model-name[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,right top,from(#3186ff),color-stop(50%,#346bf1),to(#4fa0ff));background:-webkit-linear-gradient(left,#3186ff,#346bf1 50%,#4fa0ff);background:linear-gradient(90deg,#3186ff,#346bf1 50%,#4fa0ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent}.model-comparison__table-inner[_ngcontent-%COMP%]{background:#121317;display:grid;grid-template-columns:130px 1fr 1fr;gap:0;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-family:Google Sans Flex,sans-serif;position:relative;min-width:700px}@media (min-width:1024px){.model-comparison__table-inner[_ngcontent-%COMP%]{min-width:0}}@media (min-width:1024px){.model-comparison__table-inner.two-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(10,1fr)}.model-comparison__table-inner.two-columns[_ngcontent-%COMP%]   .model-comparison__label[_ngcontent-%COMP%]{grid-column:span 2}.model-comparison__table-inner.two-columns[_ngcontent-%COMP%]   [data-col-index=\"0\"][_ngcontent-%COMP%]{grid-column:3/7}.model-comparison__table-inner.two-columns[_ngcontent-%COMP%]   [data-col-index=\"1\"][_ngcontent-%COMP%]{grid-column:7/11}}@media (min-width:1024px){.model-comparison__table-inner.three-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(12,minmax(60px,1fr))}.model-comparison__table-inner.three-columns[_ngcontent-%COMP%]   .model-comparison__label[_ngcontent-%COMP%]{grid-column:span 3}.model-comparison__table-inner.three-columns[_ngcontent-%COMP%]   [data-col-index=\"0\"][_ngcontent-%COMP%]{grid-column:4/7}.model-comparison__table-inner.three-columns[_ngcontent-%COMP%]   [data-col-index=\"1\"][_ngcontent-%COMP%]{grid-column:7/10}.model-comparison__table-inner.three-columns[_ngcontent-%COMP%]   [data-col-index=\"2\"][_ngcontent-%COMP%]{grid-column:10/13}}.model-comparison__label[_ngcontent-%COMP%]{color:#b2bbc5;padding:12px 16px;font-size:10px;z-index:3;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#121317;position:-webkit-sticky;position:sticky;left:0;grid-column:1}@media (min-width:1024px){.model-comparison__label[_ngcontent-%COMP%]{padding:24px;border-bottom:1px solid #1e1f23;position:static;background:transparent;font-size:14px}}@media (min-width:1024px){.model-comparison__label.model-comparison__label--cta[_ngcontent-%COMP%]{border-bottom:none}}.model-comparison__value[_ngcontent-%COMP%]{color:#fff;padding:12px 16px;font-size:12px;white-space:pre-line;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media (min-width:1024px){.model-comparison__value[_ngcontent-%COMP%]{padding:24px;border-bottom:1px solid #1e1f23;font-size:16px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}.model-comparison__value.is-highlighted[_ngcontent-%COMP%]{background:transparent;border:none;margin-left:5px}@media (min-width:1024px){.model-comparison__value.is-highlighted[_ngcontent-%COMP%]{margin-left:40px}}.model-comparison__value.model-comparison__value--header[_ngcontent-%COMP%]{font-weight:500;font-size:14px}.model-comparison__value.model-comparison__value--header[_ngcontent-%COMP%]   .model-comparison__model-name[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,right top,from(#3186ff),color-stop(50%,#346bf1),to(#4fa0ff));background:-webkit-linear-gradient(left,#3186ff,#346bf1 50%,#4fa0ff);background:linear-gradient(90deg,#3186ff,#346bf1 50%,#4fa0ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;display:inline-block}@media (min-width:1024px){.model-comparison__value.model-comparison__value--header[_ngcontent-%COMP%]{font-size:20px}}.model-comparison__ctas[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:16px;z-index:2;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:1024px){.model-comparison__ctas[_ngcontent-%COMP%]{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:24px}}@media (max-width:1300px){.model-comparison__layout--desktop[_ngcontent-%COMP%]   .model-comparison__ctas[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}}.model-comparison__ctas.is-highlighted[_ngcontent-%COMP%]{background:transparent;border:none;margin-left:5px}@media (min-width:1024px){.model-comparison__ctas.is-highlighted[_ngcontent-%COMP%]{margin-left:40px}}.model-comparison__highlight-bg[_ngcontent-%COMP%]{display:block;grid-column:2;border-radius:16px;pointer-events:none;z-index:1;background:#1e1f23;margin-left:5px}@media (min-width:1024px){.model-comparison__highlight-bg[_ngcontent-%COMP%]{margin-left:40px}}.model-comparison__header-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;width:100%}.model-comparison__layout--mobile[_ngcontent-%COMP%]   .model-comparison__header-wrapper[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left}.model-comparison__subheadline[_ngcontent-%COMP%]{font-size:12px;line-height:1.4;font-weight:400;display:block;color:#b2bbc5;margin-top:4px;-webkit-text-fill-color:#b2bbc5;background:none}@media (min-width:1024px){.model-comparison__value--header.has-description[_ngcontent-%COMP%]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media (min-width:1024px){.model-comparison__value--header.has-description[_ngcontent-%COMP%]   .model-comparison__header-wrapper[_ngcontent-%COMP%]{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left}}@media (min-width:1024px){.model-comparison__table--3-or-more-cols[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (min-width:1024px){.model-comparison__table--3-or-more-cols[_ngcontent-%COMP%]   .is-highlighted[_ngcontent-%COMP%]{margin-left:0}}@media (min-width:1024px){.model-comparison__table--3-or-more-cols[_ngcontent-%COMP%]   .model-comparison__highlight-bg[_ngcontent-%COMP%]{margin-left:0}}@media (min-width:1024px){.model-comparison__table--3-or-more-cols[_ngcontent-%COMP%]   .model-comparison__value[_ngcontent-%COMP%]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media (min-width:1024px){.model-comparison__table--3-or-more-cols[_ngcontent-%COMP%]   .model-comparison__ctas[_ngcontent-%COMP%]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}"]
		});
		_.A8 = class {
			constructor() {
				this.S = _.Dk;
				this.blocks = _.Li([]);
			}
		};
		_.A8.J = function(a) {
			return new (a || _.A8)();
		};
		_.A8.ka = _.u({
			type: _.A8,
			da: [["ms-marketing-split-blocks"]],
			inputs: { blocks: [1, "blocks"] },
			ha: 3,
			ia: 0,
			la: [
				[1, "split-blocks"],
				[1, "split-blocks__item"],
				[1, "split-blocks__media"],
				[
					"ms-autoplaying-video",
					"",
					"muted",
					"",
					"autoplay",
					"",
					"loop",
					"",
					"playsinline",
					"",
					3,
					"src"
				],
				[
					"alt",
					"",
					3,
					"src"
				],
				[1, "split-blocks__text"],
				[1, "split-blocks__title"],
				[1, "split-blocks__body"],
				[
					"target",
					"_blank",
					1,
					"btn",
					"btn--primary",
					3,
					"href"
				],
				[1, "btn__icon"],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 0), _.Ah(1, eve, 10, 4, "div", 1, _.yh), _.H());
				a & 2 && (_.y(), _.Bh(b.blocks()));
			},
			dependencies: [_.dz, _.$7],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.split-blocks[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:60px;padding-top:80px;padding-bottom:80px;background:var(--ms-marketing-color-bg)}@media (min-width:1024px){.split-blocks[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.split-blocks[_ngcontent-%COMP%]{gap:120px}}.split-blocks__item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:32px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (min-width:1024px){.split-blocks__item[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(10,1fr);gap:80px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.split-blocks__item[_ngcontent-%COMP%]:nth-child(2n)   .split-blocks__media[_ngcontent-%COMP%]{grid-column:6/span 5}.split-blocks__item[_ngcontent-%COMP%]:nth-child(2n)   .split-blocks__text[_ngcontent-%COMP%]{grid-column:1/span 5;grid-row:1}}.split-blocks__media[_ngcontent-%COMP%]{width:100%;border-radius:24px;overflow:hidden;background:var(--ms-marketing-color-bg-container)}@media (min-width:1024px){.split-blocks__media[_ngcontent-%COMP%]{grid-column:span 5}}.split-blocks__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .split-blocks__media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.split-blocks__text[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:16px;width:100%}@media (min-width:1024px){.split-blocks__text[_ngcontent-%COMP%]{grid-column:span 5}}.split-blocks__title[_ngcontent-%COMP%]{font-size:28px;line-height:1.2;letter-spacing:-.5px;font-weight:500;font-family:Google Sans Flex,sans-serif;color:var(--ms-marketing-color-text-primary)}@media (min-width:1024px){.split-blocks__title[_ngcontent-%COMP%]{font-size:32px;line-height:33.9px;letter-spacing:-.51px;font-weight:450}}.split-blocks__body[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;font-family:Google Sans Flex,sans-serif;color:var(--ms-marketing-color-text-muted)}@media (min-width:1024px){.split-blocks__body[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.4px;letter-spacing:.19px;font-weight:400}}"]
		});
		_.hr("DUlrGe");
		var gve = [
			_.Vte,
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/map-styling-sandbox.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/map-styling-sandbox.mp4",
				title: "Maps Styling",
				description: "Give your Google Map a new personality to match your brand, your mood, or the spirit of your favorite holiday",
				category: "featured",
				url: "/apps/bundled/budgeted",
				queryParams: {
					showPreview: "true",
					showAssistant: "true"
				}
			},
			{
				image: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/retail-agent-dashboard.png",
				video: "https://www.gstatic.com/aistudio/starter-apps/thumbnails/retail-agent-dashboard.mp4",
				title: "Versatile Execution Agent",
				description: "A SaaS agent that plans and executes multi-step tasks, adaptable to a wide range of real-world workflows.",
				category: "featured",
				url: "/apps/bundled/versatile_execution_agent"
			}
		];
		_.cs = class {
			constructor() {
				this.Jt = "Our most intelligent models that help you bring any idea to life";
				this.It = "video";
				this.Eq = "https://www.gstatic.com/aistudio-static/models/gemini3/gemini-3.mp4";
				this.AB = [{
					url: "https://aistudio.google.com/prompts/new_chat?model=gemini-pro-latest",
					text: "Get started",
					variant: "primary",
					icon: "login"
				}, {
					url: "https://ai.google.dev/gemini-api/docs/gemini-3",
					text: "Read docs",
					variant: "primary",
					icon: "docs"
				}];
				this.pC = gve;
				this.gBb = "Developer stories";
				this.fBb = [
					{
						title: "Expanding healthcare access with Assort Health agents",
						url: "https://aistudio.google.com/case-studies/assorthealth",
						image: "https://www.gstatic.com/aistudio/case_studies/assort/Assort_thumbnail.jpg",
						Sl: "Learn more"
					},
					{
						title: "Improving worksite safety practices with CompScience",
						url: "https://aistudio.google.com/case-studies/compscience",
						image: "https://www.gstatic.com/aistudio/case_studies/compScience/CompScience_thumbnail.jpg",
						Sl: "Learn more"
					},
					{
						title: "Transforming field service and logistics with Instalily",
						url: "https://aistudio.google.com/case-studies/instalily",
						image: "https://www.gstatic.com/aistudio/case_studies/Instality_thumbnail.jpg",
						Sl: "Learn more"
					}
				];
				this.BKa = [{
					title: "Intuitive development for everyone",
					body: "Build software by simply describing your UI and requirements. With exceptional zero-shot generation, Gemini 3 handles the planning and code generation, reducing development time to minutes.",
					video: "https://www.gstatic.com/aistudio-static/vibe_code/vibe_coding_search.mp4",
					Iu: "Build apps",
					Ju: "https://aistudio.google.com/apps",
					ctaIcon: "login"
				}];
				this.NEa = [
					{
						name: "Gemini 3.1 Pro",
						description: "Advanced reasoning for coding and complex tasks",
						xM: !0,
						YA: [{
							text: "Try in AI Studio",
							url: "https://aistudio.google.com/prompts/new_chat?model=gemini-3.1-pro-preview",
							icon: "login"
						}]
					},
					{
						name: "Gemini 3 Flash",
						description: "Frontier intelligence built for speed",
						YA: [{
							text: "Try in AI Studio",
							url: "https://aistudio.google.com/prompts/new_chat?model=gemini-3-flash-preview",
							icon: "login"
						}]
					},
					{
						name: "Gemini 3.1 Flash-Lite",
						description: "Efficiency and intelligence for high-volume tasks",
						YA: [{
							text: "Try in AI Studio",
							url: "https://aistudio.google.com/prompts/new_chat?model=gemini-3.1-flash-lite",
							icon: "login"
						}]
					}
				];
				this.OEa = [
					{
						label: "Audio generation",
						values: [
							"close",
							"check",
							"close"
						]
					},
					{
						label: "Code execution",
						values: [
							"check",
							"check",
							"check"
						]
					},
					{
						label: "Computer Use",
						values: [
							"close",
							"check",
							"close"
						]
					},
					{
						label: "File Search",
						values: [
							"check",
							"check",
							"check"
						]
					},
					{
						label: "Grounding with Google Maps",
						values: [
							"check",
							"check",
							"check"
						]
					},
					{
						label: "Grounding with Google Search",
						values: [
							"check",
							"check",
							"close"
						]
					},
					{
						label: "Image generation",
						values: [
							"check",
							"check",
							"close"
						]
					},
					{
						label: "Live API",
						values: [
							"close",
							"check",
							"close"
						]
					},
					{
						label: "Thinking",
						values: [
							"check",
							"check",
							"check"
						]
					},
					{
						label: "URL context",
						values: [
							"check",
							"check",
							"check"
						]
					}
				];
			}
		};
		_.cs.J = function(a) {
			return new (a || _.cs)();
		};
		_.cs.ka = _.u({
			type: _.cs,
			da: [["ms-marketing-gemini3-screen"]],
			eb: [
				1,
				"marketing-v2-theme",
				"dark-theme"
			],
			ha: 7,
			ia: 10,
			la: [
				[
					"title",
					"Gemini 3",
					"layout",
					"centered",
					3,
					"subtitle",
					"mediaType",
					"mediaSrc",
					"ctas"
				],
				[
					"title",
					"Model capabilities",
					"headerBtnText",
					"Read Gemini 3 docs",
					"headerBtnUrl",
					"https://ai.google.dev/gemini-api/docs/gemini-3",
					3,
					"columns",
					"rows"
				],
				[3, "blocks"],
				[
					"title",
					"Explore the App Gallery",
					3,
					"cards"
				],
				[
					3,
					"headline",
					"cards"
				]
			],
			template: function(a, b) {
				a & 1 && _.I(0, "ms-marketing-nav")(1, "ms-marketing-hero", 0)(2, "ms-marketing-model-comparison", 1)(3, "ms-marketing-split-blocks", 2)(4, "ms-marketing-remix", 3)(5, "ms-marketing-card-grid", 4)(6, "ms-marketing-footer");
				a & 2 && (_.y(), _.E("subtitle", b.Jt)("mediaType", b.It)("mediaSrc", b.Eq)("ctas", b.AB), _.y(), _.E("columns", b.NEa)("rows", b.OEa), _.y(), _.E("blocks", b.BKa), _.y(), _.E("cards", b.pC), _.y(), _.E("headline", b.gBb)("cards", b.fBb));
			},
			dependencies: [
				_.s8,
				_.i8,
				_.u8,
				_.A8,
				_.h8,
				_.z8,
				_.w8
			],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}[_nghost-%COMP%]{display:block;height:100%;overflow:hidden auto;background-color:#121317}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


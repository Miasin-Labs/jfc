"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		var jle, kle, lle, mle;
		jle = function(a, b) {
			a & 1 && (_.Dh(0, "li"), _.R(1), _.Eh());
			a & 2 && (a = b.V, _.y(), _.U(a));
		};
		kle = function(a) {
			a & 1 && (_.Dh(0, "ul", 11), _.Ah(1, jle, 2, 1, "li", null, _.yh), _.Eh());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.bullets));
		};
		lle = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.Dh(0, "div", 6)(1, "button", 7);
				_.Wh("click", function() {
					var d = _.q(c).jb, e = _.K();
					return _.t(e.toggle(d));
				});
				_.R(2);
				_.Fh(3, "span", 8);
				_.Eh();
				_.Dh(4, "div", 9, 0)(6, "div", 10);
				_.R(7);
				_.B(8, kle, 3, 0, "ul", 11);
				_.Eh()()();
			}
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.P("is-open", c.GGa() === b);
				_.y(2);
				_.S(" ", a.question, " ");
				_.y(5);
				_.S(" ", a.answer, " ");
				_.y();
				_.C(a.bullets ? 8 : -1);
			}
		};
		mle = ["answers"];
		_.g8 = class {
			constructor() {
				this.title = _.V("Frequently asked questions");
				this.items = _.Li([]);
				this.lUa = _.hi();
				this.GGa = _.M(null);
			}
			toggle(a) {
				var b = this.GGa() === a ? null : a;
				this.GGa.set(b);
				this.lUa().forEach((c, d) => {
					c.nativeElement.style.maxHeight = d === b ? `${c.nativeElement.scrollHeight}px` : "0px";
				});
			}
		};
		_.g8.J = function(a) {
			return new (a || _.g8)();
		};
		_.g8.ka = _.u({
			type: _.g8,
			da: [["ms-marketing-faq"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.lUa, mle, 5);
				a & 2 && _.ki();
			},
			inputs: {
				title: [1, "title"],
				items: [1, "items"]
			},
			ha: 7,
			ia: 1,
			la: [
				["answers", ""],
				[1, "faq"],
				[1, "faq__header"],
				[1, "faq__title"],
				[1, "faq__list"],
				[
					1,
					"faq__item",
					3,
					"is-open"
				],
				[1, "faq__item"],
				[
					1,
					"faq__question",
					3,
					"click"
				],
				[1, "faq__arrow"],
				[1, "faq__answer"],
				[1, "faq__answer-inner"],
				[1, "faq__bullets"]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "section", 1)(1, "div", 2)(2, "h2", 3), _.R(3), _.Eh()(), _.Dh(4, "div", 4), _.Ah(5, lle, 9, 5, "div", 5, _.yh), _.Eh()());
				a & 2 && (_.y(3), _.U(b.title()), _.y(2), _.Bh(b.items()));
			},
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.faq[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:40px;padding-bottom:40px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}@media (min-width:1024px){.faq[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.faq[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:80px;padding-bottom:80px}}.faq__header[_ngcontent-%COMP%]{width:100%;margin-bottom:24px}@media (min-width:1024px){.faq__header[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0}}.faq__title[_ngcontent-%COMP%]{font-size:28px;line-height:1.1;letter-spacing:-.5px;color:#fff}@media (min-width:1024px){.faq__title[_ngcontent-%COMP%]{font-size:42px;line-height:1.04;letter-spacing:-.84px}}.faq__list[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}@media (min-width:1024px){.faq__list[_ngcontent-%COMP%]{width:calc(58.3333333333% - 8.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:auto}}.faq__item[_ngcontent-%COMP%]{background:#212226;border-radius:16px;overflow:hidden}.faq__question[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:16px;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:14.5px;line-height:1.45;letter-spacing:.11px;color:#fff;cursor:pointer;text-align:left}@media (min-width:1024px){.faq__question[_ngcontent-%COMP%]{padding:24px;font-size:17.5px;letter-spacing:.1925px}}.faq__arrow[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:16px;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.faq__arrow[_ngcontent-%COMP%]:after{content:\"\";display:block;width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px}.faq__item.is-open[_ngcontent-%COMP%]   .faq__arrow[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.faq__answer[_ngcontent-%COMP%]{max-height:0;overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.faq__answer-inner[_ngcontent-%COMP%]{padding:0 16px 16px;font-size:13px;line-height:1.6;white-space:pre-line;color:#b2bbc5}@media (min-width:1024px){.faq__answer-inner[_ngcontent-%COMP%]{padding:0 24px 24px;font-size:14px}}.light-theme[_nghost-%COMP%]   .faq[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq[_ngcontent-%COMP%]{background:var(--color-v3-surface,#fff)}.light-theme[_nghost-%COMP%]   .faq__title[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq__title[_ngcontent-%COMP%]{color:var(--color-v3-text,#1f1f1f)}.light-theme[_nghost-%COMP%]   .faq__item[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq__item[_ngcontent-%COMP%]{background:#f1f3f4}.light-theme[_nghost-%COMP%]   .faq__question[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq__question[_ngcontent-%COMP%]{color:var(--color-v3-text,#1f1f1f)}.light-theme[_nghost-%COMP%]   .faq__arrow[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq__arrow[_ngcontent-%COMP%]{color:var(--color-v3-text,#1f1f1f)}.light-theme[_nghost-%COMP%]   .faq__answer-inner[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .faq__answer-inner[_ngcontent-%COMP%]{color:#5f6368}"]
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
		var Use, Vse, Wse, Xse, Yse, Zse, $se, ate, bte, cte, dte, ete, fte, gte, ite, jte, hte, kte;
		Use = function(a) {
			a & 1 && _.I(0, "span", 9);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		Vse = function(a) {
			a & 1 && _.I(0, "img", 10);
			a & 2 && (a = _.K().V, _.E("src", a.icon, _.rg));
		};
		Wse = function(a) {
			a & 1 && (_.F(0, "span", 14), _.I(1, "span", 15), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.E("iconName", a.ctaIcon));
		};
		Xse = function(a) {
			a & 1 && (_.F(0, "a", 13), _.B(1, Wse, 2, 1, "span", 14), _.R(2), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.Ju, _.rg), _.y(), _.C(a.ctaIcon ? 1 : -1), _.y(), _.S(" ", a.Iu, " "));
		};
		Yse = function(a, b) {
			a & 1 && (_.F(0, "div", 7)(1, "div", 8), _.B(2, Use, 1, 1, "span", 9)(3, Vse, 1, 1, "img", 10), _.F(4, "h3", 11), _.R(5), _.H()(), _.F(6, "p", 12), _.R(7), _.H(), _.B(8, Xse, 3, 3, "a", 13), _.H());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.P("is-active", c.iva === b);
				_.wh("data-block", b);
				_.y(2);
				_.C(a.Vk === "font" ? 2 : a.Vk === "svg-file" ? 3 : -1);
				_.y(3);
				_.U(a.title);
				_.y(2);
				_.U(a.description);
				_.y();
				_.C(a.Iu && a.Ju ? 8 : -1);
			}
		};
		Zse = function(a) {
			a & 1 && _.I(0, "video", 17, 1);
			a & 2 && (a = _.K().V, _.E("src", a.video, _.rg));
		};
		$se = function(a) {
			a & 1 && _.I(0, "img", 18);
			a & 2 && (a = _.K().V, _.E("src", a.image, _.rg));
		};
		ate = function(a) {
			a & 1 && _.I(0, "span", 9);
			a & 2 && (a = _.K().V, _.E("iconName", a.icon));
		};
		bte = function(a) {
			a & 1 && _.I(0, "img", 10);
			a & 2 && (a = _.K().V, _.E("src", a.icon, _.rg));
		};
		cte = function(a) {
			a & 1 && (_.F(0, "span", 14), _.I(1, "span", 15), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.E("iconName", a.ctaIcon));
		};
		dte = function(a) {
			a & 1 && (_.F(0, "a", 13), _.B(1, cte, 2, 1, "span", 14), _.R(2), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.Ju, _.rg), _.y(), _.C(a.ctaIcon ? 1 : -1), _.y(), _.S(" ", a.Iu, " "));
		};
		ete = function(a, b) {
			a & 1 && (_.F(0, "div", 6)(1, "div", 16, 0), _.B(3, Zse, 2, 1, "video", 17)(4, $se, 1, 1, "img", 18), _.H(), _.F(5, "div", 19)(6, "div", 8), _.B(7, ate, 1, 1, "span", 9)(8, bte, 1, 1, "img", 10), _.F(9, "h3", 11), _.R(10), _.H()(), _.F(11, "p", 12), _.R(12), _.H(), _.B(13, dte, 3, 3, "a", 13), _.H()());
			a & 2 && (a = b.V, b = b.jb, _.y(), _.wh("data-block", b), _.y(2), _.C(a.video ? 3 : a.image ? 4 : -1), _.y(4), _.C(a.Vk === "font" ? 7 : a.Vk === "svg-file" ? 8 : -1), _.y(3), _.U(a.title), _.y(2), _.U(a.description), _.y(), _.C(a.Iu && a.Ju ? 13 : -1));
		};
		fte = ["mediaItem"];
		gte = ["video"];
		ite = function(a) {
			a.observer && a.observer.disconnect();
			a.A.clear();
			a.observer = new IntersectionObserver((b) => {
				hte(a, b);
			}, {
				root: null,
				rootMargin: "-30% 0px -30% 0px",
				threshold: 0
			});
			a.T4a().forEach((b) => {
				a.observer.observe(b.nativeElement);
			});
		};
		jte = function(a) {
			a.Bg().forEach((b) => {
				b = b.nativeElement;
				b.defaultMuted = !0;
				b.muted = !0;
				b.play().catch(() => {});
			});
		};
		hte = function(a, b) {
			b.forEach((c) => {
				var d = c.target.dataset.block;
				d !== void 0 && (c.isIntersecting ? a.A.add(d) : a.A.delete(d));
			});
			b = kte(a);
			b !== void 0 ? a.iva = Number(b) : a.iva = null;
			a.ti.lb();
		};
		kte = function(a) {
			if (a.A.size !== 0) return [...a.A].sort((b, c) => Number(b) - Number(c))[0];
		};
		_.r8 = class {
			constructor() {
				this.S = _.Dk;
				this.blocks = _.Li([]);
				this.T4a = _.hi();
				this.Bg = _.hi();
				this.iva = null;
				this.ti = _.m(_.Hu);
				this.A = new Set();
				_.Kg(() => {
					ite(this);
				});
				_.Kg(() => {
					jte(this);
				});
			}
			qz() {
				this.F && clearTimeout(this.F);
				this.F = setTimeout(() => {
					ite(this);
				}, 100);
			}
			Ba() {
				this.F && clearTimeout(this.F);
				this.observer && this.observer.disconnect();
			}
		};
		_.r8.J = function(a) {
			return new (a || _.r8)();
		};
		_.r8.ka = _.u({
			type: _.r8,
			da: [["ms-marketing-blocks"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.T4a, fte, 5)(b.Bg, gte, 5);
				a & 2 && _.ki(2);
			},
			Ja: function(a, b) {
				a & 1 && _.J("resize", function() {
					return b.qz();
				}, _.Te);
			},
			inputs: { blocks: [1, "blocks"] },
			ha: 7,
			ia: 0,
			la: [
				["mediaItem", ""],
				["video", ""],
				[1, "blocks"],
				[1, "blocks__text-col"],
				[
					1,
					"blocks__text-item",
					3,
					"is-active"
				],
				[1, "blocks__media-col"],
				[1, "blocks__group"],
				[1, "blocks__text-item"],
				[1, "blocks__text-title-row"],
				[
					1,
					"blocks__text-icon",
					3,
					"iconName"
				],
				[
					"alt",
					"",
					1,
					"blocks__text-icon-svg",
					3,
					"src"
				],
				[1, "blocks__text-title"],
				[1, "blocks__text-description"],
				[
					"target",
					"_blank",
					1,
					"blocks__text-cta",
					"btn",
					"btn--primary",
					3,
					"href"
				],
				[1, "btn__icon"],
				[3, "iconName"],
				[1, "blocks__media-item"],
				[
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
				[
					1,
					"blocks__text-item",
					"blocks__text-item--mobile"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 2)(1, "div", 3), _.Ah(2, Yse, 9, 7, "div", 4, _.yh), _.H(), _.F(4, "div", 5), _.Ah(5, ete, 14, 6, "div", 6, _.yh), _.H()());
				a & 2 && (_.y(2), _.Bh(b.blocks()), _.y(3), _.Bh(b.blocks()));
			},
			dependencies: [_.dz],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.blocks[_ngcontent-%COMP%]{position:relative;background:#121317;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:40px;padding-bottom:40px}@media (min-width:1024px){.blocks[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}@media (min-width:1024px){.blocks[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:80px;padding-bottom:80px}}.blocks__text-col[_ngcontent-%COMP%]{display:none}@media (min-width:1024px){.blocks__text-col[_ngcontent-%COMP%]{display:block;width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:-webkit-sticky;position:sticky;top:120px;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;height:auto;margin-bottom:0}}.blocks__media-col[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:52px}@media (min-width:1024px){.blocks__media-col[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:auto;gap:80px}}.blocks__text-item[_ngcontent-%COMP%]{-webkit-transition:opacity .3s ease,margin-bottom .3s ease;transition:opacity .3s ease,margin-bottom .3s ease;margin-bottom:24px}@media (min-width:1024px){.blocks__text-item[_ngcontent-%COMP%]{margin-left:40px}}.blocks__text-item.is-active[_ngcontent-%COMP%]{margin-bottom:48px}.blocks__text-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.blocks__text-icon[_ngcontent-%COMP%]{font-size:32px;color:#2e96ff;line-height:1;position:absolute;right:calc(100% + 12px);top:0;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.is-active[_ngcontent-%COMP%]   .blocks__text-icon[_ngcontent-%COMP%]{opacity:1}.blocks__text-icon-svg[_ngcontent-%COMP%]{position:absolute;right:calc(100% + 12px);top:0;width:24px;height:auto;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}@media (min-width:1250px){.blocks__text-icon-svg[_ngcontent-%COMP%]{width:28px}}.is-active[_ngcontent-%COMP%]   .blocks__text-icon-svg[_ngcontent-%COMP%]{opacity:1}.blocks__text-title[_ngcontent-%COMP%]{font-size:24px;line-height:1.15;letter-spacing:-.4px;color:#fff;display:inline}@media (min-width:1250px){.blocks__text-title[_ngcontent-%COMP%]{font-size:32px;line-height:1.06;letter-spacing:-.512px}}.blocks__text-item[_ngcontent-%COMP%]:not(.is-active)   .blocks__text-title[_ngcontent-%COMP%]{color:#45474d}.blocks__text-title-row[_ngcontent-%COMP%]{position:relative;margin-bottom:8px}.blocks__text-description[_ngcontent-%COMP%]{font-size:14.5px;line-height:1.45;letter-spacing:.11px;margin-bottom:0;color:#b2bbc5;max-width:368px;opacity:0;max-height:0;overflow:hidden;-webkit-transition:opacity .3s ease,max-height .3s ease,margin-bottom .3s ease;transition:opacity .3s ease,max-height .3s ease,margin-bottom .3s ease}@media (min-width:1250px){.blocks__text-description[_ngcontent-%COMP%]{font-size:17.5px;letter-spacing:.1925px}}.is-active[_ngcontent-%COMP%]   .blocks__text-description[_ngcontent-%COMP%]{opacity:1;max-height:150px;margin-bottom:20px}@media (min-width:1024px){.is-active[_ngcontent-%COMP%]   .blocks__text-description[_ngcontent-%COMP%]{margin-bottom:42px}}.blocks__text-cta[_ngcontent-%COMP%]{opacity:0;max-height:0;overflow:hidden;margin-bottom:0;-webkit-transition:opacity .3s ease,max-height .3s ease,margin-bottom .3s ease;transition:opacity .3s ease,max-height .3s ease,margin-bottom .3s ease}.is-active[_ngcontent-%COMP%]   .blocks__text-cta[_ngcontent-%COMP%]{opacity:1;max-height:100px}.blocks__media-item[_ngcontent-%COMP%]{border-radius:20px;overflow:hidden;aspect-ratio:670/670}@media (min-width:1024px){.blocks__media-item[_ngcontent-%COMP%]{border-radius:36px}}.blocks__media-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .blocks__media-item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.blocks__group[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.blocks__text-item--mobile[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:0}@media (min-width:1024px){.blocks__text-item--mobile[_ngcontent-%COMP%]{display:none}}.blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-title-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-bottom:12px}.blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-icon[_ngcontent-%COMP%], .blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-icon-svg[_ngcontent-%COMP%]{position:static;-webkit-transform:none;transform:none;opacity:1;margin-right:12px}.blocks__text-item--mobile.blocks__text-item[_ngcontent-%COMP%]   .blocks__text-title[_ngcontent-%COMP%]{color:#fff}.blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-cta[_ngcontent-%COMP%], .blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-description[_ngcontent-%COMP%]{opacity:1;max-height:none}.blocks__text-item--mobile[_ngcontent-%COMP%]   .blocks__text-description[_ngcontent-%COMP%]{margin-bottom:20px}"]
		});
		_.hr("MvkJ5");
		var nue = function(a) {
			a & 1 && (_.Ee(), _.F(0, "svg", 32), _.I(1, "path", 33)(2, "path", 34)(3, "path", 35)(4, "path", 36), _.H());
		}, oue = function(a) {
			a & 1 && (_.Ee(), _.F(0, "svg", 32), _.I(1, "path", 37), _.H());
		}, pue = function(a) {
			a & 1 && (_.F(0, "a", 38), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("documentation-path", _.wi(a.zn)), _.y(), _.U(a.label));
		}, que = function(a) {
			a & 1 && (_.F(0, "a", 39), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("routerLink", a.routerLink), _.y(), _.U(a.label));
		}, rue = function(a, b) {
			a & 1 && _.B(0, pue, 2, 3, "a", 38)(1, que, 2, 2, "a", 39);
			a & 2 && (a = b.V, _.C(a.zn ? 0 : a.routerLink ? 1 : -1));
		}, sue = function(a) {
			a & 1 && _.Ih(0);
		}, tue = function(a) {
			a & 1 && _.Ih(0);
		}, uue = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 42);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("documentation-path", _.wi(a.zn)), _.y(), _.U(a.label));
		}, vue = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 43);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.mw());
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K().V, _.E("routerLink", a.routerLink), _.y(), _.U(a.label));
		}, wue = function(a, b) {
			a & 1 && _.B(0, uue, 2, 3, "a", 40)(1, vue, 2, 2, "a", 41);
			a & 2 && (a = b.V, _.C(a.zn ? 0 : a.routerLink ? 1 : -1));
		}, xue = function(a) {
			a & 1 && _.Ih(0);
		}, yue = function(a) {
			a & 1 && _.Ih(0);
		}, zue = function(a) {
			a & 1 && _.Ih(0);
		}, Aue = function(a) {
			a & 1 && _.Ih(0);
		}, Bue = ["video"], Cue = (a, b) => b.label;
		_.Vr = class {
			constructor() {
				this.A = _.m(_.ZC);
				this.bx = _.M(!1);
				this.Kh = this.A.A.Il;
				this.G5a = [
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
				this.Eq = "https://www.gstatic.com/aistudio-static/mobile/mobile-hero-v2.mp4";
				this.JFb = "https://www.gstatic.com/aistudio-static/mobile/mobile-hero-v3.mp4";
				this.hHa = "https://play.google.com/store/apps/details?id=com.google.android.apps.aistudio";
				this.blocks = [
					{
						Vk: "svg-file",
						icon: "https://www.gstatic.com/aistudio-static/vibe_code/icon_idea.svg",
						title: "Create when ideas strike",
						description: "Just describe what you want to build and watch it come to life. Create, prototype and iterate from anywhere — whether you're commuting, at the café, or relaxing at home.",
						image: "https://www.gstatic.com/aistudio-static/mobile/create-card.png"
					},
					{
						Vk: "svg-file",
						icon: "https://www.gstatic.com/aistudio-static/vibe_code/icon_arrow_split.svg",
						title: "Spark inspiration with remixing",
						description: "Discover new app ideas and take them in a whole new direction. Expand, tweak and personalize concepts to make them your own.",
						image: "https://www.gstatic.com/aistudio-static/mobile/remix-card.png"
					},
					{
						Vk: "svg-file",
						icon: "https://www.gstatic.com/aistudio-static/vibe_code/icon_rocket.svg",
						title: "Share in seconds",
						description: "Make your app available to the world in a single tap. Go from idea to URL you can share, all from your phone.",
						image: "https://www.gstatic.com/aistudio-static/mobile/share-card.png"
					}
				];
				this.Cza = [
					{
						question: "What is Google AI Studio for mobile?",
						answer: "The Google AI Studio mobile app is a full-featured companion to Google AI Studio, allowing builders, developers and creators to prototype ideas, test prompts with Gemini models, and build fully functional web apps directly from their iOS or Android devices."
					},
					{
						question: "When will the mobile app be available?",
						answer: "We are working to bring the app to users globally in the coming weeks. Pre-register now to be the first to try it."
					},
					{
						question: "Which platforms are supported?",
						answer: "The app is available on both Android and iOS."
					},
					{
						question: "Can I continue my mobile projects on desktop?",
						answer: "Absolutely. Your workspace syncs automatically from the mobile app to your web based account. You can draft something on mobile and continue refining, testing, or sharing it from your computer."
					}
				];
			}
			Tca() {
				this.bx.update((a) => !a);
			}
			mw() {
				this.bx.set(!1);
			}
			set ho(a) {
				a && (a.nativeElement.defaultMuted = !0, a.nativeElement.muted = !0, a.nativeElement.play().catch(() => {}));
			}
		};
		_.Vr.J = function(a) {
			return new (a || _.Vr)();
		};
		_.Vr.ka = _.u({
			type: _.Vr,
			da: [["ms-marketing-mobile-screen"]],
			Ka: function(a, b) {
				a & 1 && _.ci(Bue, 5);
				if (a & 2) {
					let c;
					_.ei(c = _.fi()) && (b.ho = c.first);
				}
			},
			eb: [
				1,
				"marketing-v2-theme",
				"dark-theme"
			],
			ha: 58,
			ia: 18,
			la: [
				["googlePlayIcon", ""],
				["appleIcon", ""],
				["video", ""],
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
				[1, "nav__ctas"],
				[
					"target",
					"_blank",
					"rel",
					"noopener",
					"aria-label",
					"Pre-order on Google Play",
					1,
					"nav__cta-btn",
					"nav__cta-btn--play",
					3,
					"href"
				],
				[4, "ngTemplateOutlet"],
				[
					"role",
					"button",
					"tabindex",
					"0",
					"aria-label",
					"App Store — Coming Soon",
					"aria-disabled",
					"true",
					1,
					"nav__cta-btn",
					"nav__cta-btn--apple",
					"nav__cta-btn--disabled"
				],
				[1, "nav__cta-btn-label"],
				[1, "nav__cta-btn-hover-label"],
				[
					1,
					"nav__menu-btn",
					3,
					"click"
				],
				[1, "material-symbols-outlined"],
				[1, "nav__mobile-overlay"],
				[1, "nav__mobile-links"],
				[1, "nav__mobile-footer"],
				[1, "nav__mobile-text"],
				[1, "nav__mobile-ctas"],
				[
					"target",
					"_blank",
					"rel",
					"noopener",
					"aria-label",
					"Pre-register on Google Play",
					1,
					"preorder-cta",
					"preorder-cta--android",
					3,
					"click",
					"href"
				],
				[
					"role",
					"button",
					"tabindex",
					"0",
					"aria-label",
					"Pre-order on App Store — Coming Soon",
					"aria-disabled",
					"true",
					1,
					"preorder-cta",
					"preorder-cta--ios",
					"preorder-cta--disabled"
				],
				[1, "preorder-cta__label"],
				[1, "preorder-cta__hover-label"],
				[1, "hero"],
				[1, "hero__media"],
				[
					"autoplay",
					"",
					"muted",
					"",
					"loop",
					"",
					"playsinline",
					"",
					"aria-hidden",
					"true",
					3,
					"src"
				],
				[1, "hero__content"],
				[1, "hero__ctas"],
				[
					"target",
					"_blank",
					"rel",
					"noopener",
					"aria-label",
					"Pre-register on Google Play",
					1,
					"preorder-cta",
					"preorder-cta--android",
					3,
					"href"
				],
				[3, "blocks"],
				[3, "items"],
				[
					"viewBox",
					"0 0 24 24",
					"fill",
					"none",
					"xmlns",
					"http://www.w3.org/2000/svg",
					"aria-hidden",
					"true",
					1,
					"cta-icon"
				],
				[
					"d",
					"M3.18 2.84C3.07 3.03 3 3.27 3 3.57v16.86c0 .3.07.54.18.73l.04.04 9.43-9.43v-.22L3.22 2.8l-.04.04z",
					"fill",
					"currentColor"
				],
				[
					"d",
					"M16.93 15.48l-3.28-3.28v-.22l3.28-3.28.07.04 3.89 2.21c1.11.63 1.11 1.66 0 2.29l-3.89 2.21-.07.03z",
					"fill",
					"currentColor"
				],
				[
					"d",
					"M17 15.52l-3.35-3.35L3.18 22.63c.37.39.97.44 1.67.05L17 15.52z",
					"fill",
					"currentColor"
				],
				[
					"d",
					"M17 8.7L4.85 1.54c-.7-.39-1.3-.34-1.67.05l10.47 10.46L17 8.7z",
					"fill",
					"currentColor"
				],
				[
					"d",
					"M17.5923 11.5674C17.6189 14.4262 20.1002 15.3775 20.1277 15.3896C20.1066 15.4567 19.7312 16.7453 18.8204 18.0763C18.0331 19.2271 17.2159 20.3736 15.9286 20.3973C14.6639 20.4206 14.2571 19.6473 12.811 19.6473C11.3654 19.6473 10.9135 20.3736 9.71614 20.4206C8.47362 20.4677 7.52743 19.1763 6.73361 18.0298C5.11136 15.6845 3.87166 11.4026 5.53627 8.51221C6.36319 7.07682 7.84106 6.16794 9.44504 6.14463C10.6652 6.12138 11.8168 6.96549 12.5627 6.96549C13.3081 6.96549 14.7076 5.95038 16.1789 6.09945C16.7947 6.1251 18.5237 6.34819 19.6338 7.9732C19.5443 8.02866 17.5709 9.17751 17.5923 11.5675M15.2153 4.54786C15.875 3.74935 16.3189 2.63781 16.1978 1.53174C15.2469 1.56995 14.0972 2.16538 13.4151 2.9634C12.8039 3.67016 12.2686 4.80129 12.413 5.88543C13.4729 5.96744 14.5555 5.34684 15.2153 4.54786Z",
					"fill",
					"currentColor"
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
					"documentation-path"
				],
				[
					1,
					"nav__mobile-link",
					3,
					"click",
					"routerLink"
				]
			],
			template: function(a, b) {
				a & 1 && (_.z(0, nue, 5, 0, "ng-template", null, 0, _.Ii)(2, oue, 2, 0, "ng-template", null, 1, _.Ii), _.F(4, "nav", 3)(5, "a", 4), _.J("click", function() {
					return b.mw();
				}), _.I(6, "img", 5), _.H(), _.F(7, "div", 6), _.Ah(8, rue, 2, 1, null, null, Cue), _.H(), _.F(10, "div", 7)(11, "a", 8), _.z(12, sue, 1, 0, "ng-container", 9), _.R(13, " Google Play "), _.H(), _.F(14, "span", 10), _.z(15, tue, 1, 0, "ng-container", 9), _.F(16, "span", 11), _.R(17, "App Store"), _.H(), _.F(18, "span", 12), _.R(19, "Coming Soon"), _.H()()(), _.F(20, "button", 13), _.J("click", function() {
					return b.Tca();
				}), _.F(21, "span", 14), _.R(22), _.H()(), _.F(23, "div", 15)(24, "div", 16), _.Ah(25, wue, 2, 1, null, null, Cue), _.H(), _.F(27, "div", 17)(28, "p", 18), _.R(29, "Get AI Studio on your phone."), _.H(), _.F(30, "div", 19)(31, "a", 20), _.J("click", function() {
					return b.mw();
				}), _.z(32, xue, 1, 0, "ng-container", 9), _.R(33, " Pre-register on Google Play "), _.H(), _.F(34, "span", 21), _.z(35, yue, 1, 0, "ng-container", 9), _.F(36, "span", 22), _.R(37, "Pre-order on App Store"), _.H(), _.F(38, "span", 23), _.R(39, "Coming Soon"), _.H()()()()()(), _.F(40, "section", 24)(41, "div", 25), _.I(42, "video", 26, 2), _.H(), _.F(44, "div", 27)(45, "div", 28)(46, "a", 29), _.z(47, zue, 1, 0, "ng-container", 9), _.R(48, " Pre-register on Google Play "), _.H(), _.F(49, "span", 21), _.z(50, Aue, 1, 0, "ng-container", 9), _.F(51, "span", 22), _.R(52, "Pre-order on App Store"), _.H(), _.F(53, "span", 23), _.R(54, "Coming Soon"), _.H()()()()(), _.I(55, "ms-marketing-blocks", 30)(56, "ms-marketing-faq", 31)(57, "ms-marketing-footer"));
				if (a & 2) {
					a = _.O(1);
					let c = _.O(3);
					_.y(4);
					_.P("nav--menu-open", b.bx());
					_.y(4);
					_.Bh(b.G5a);
					_.y(3);
					_.E("href", b.hHa, _.rg);
					_.y();
					_.E("ngTemplateOutlet", a);
					_.y(3);
					_.E("ngTemplateOutlet", c);
					_.y(5);
					_.wh("aria-label", b.bx() ? "Close menu" : "Open menu");
					_.y(2);
					_.U(b.bx() ? "close" : "menu");
					_.y();
					_.P("nav__mobile-overlay--open", b.bx());
					_.y(2);
					_.Bh(b.G5a);
					_.y(6);
					_.E("href", b.hHa, _.rg);
					_.y();
					_.E("ngTemplateOutlet", a);
					_.y(3);
					_.E("ngTemplateOutlet", c);
					_.y(7);
					_.E("src", b.Kh() ? b.JFb : b.Eq, _.rg);
					_.y(4);
					_.E("href", b.hHa, _.rg);
					_.y();
					_.E("ngTemplateOutlet", a);
					_.y(3);
					_.E("ngTemplateOutlet", c);
					_.y(5);
					_.E("blocks", b.blocks);
					_.y();
					_.E("items", b.Cza);
				}
			},
			dependencies: [
				_.nz,
				_.sA,
				_.LC,
				_.r8,
				_.g8,
				_.h8
			],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1540px;margin-left:auto;margin-right:auto;gap:20px;padding-left:20px;padding-right:20px}@media (min-width:1024px){.container[_ngcontent-%COMP%]{max-width:1580px;padding-left:40px;padding-right:40px}}.row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;gap:20px}.col-1[_ngcontent-%COMP%]{width:calc(8.3333333333% - 18.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-2[_ngcontent-%COMP%]{width:calc(16.6666666667% - 16.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-3[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-4[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-5[_ngcontent-%COMP%]{width:calc(41.6666666667% - 11.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-6[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-7[_ngcontent-%COMP%]{width:calc(58.3333333333% - 8.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-8[_ngcontent-%COMP%]{width:calc(66.6666666667% - 6.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-9[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-10[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-11[_ngcontent-%COMP%]{width:calc(91.6666666667% - 1.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-12[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}@media (min-width:1728px){.col-xl-1[_ngcontent-%COMP%]{width:calc(8.3333333333% - 18.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-2[_ngcontent-%COMP%]{width:calc(16.6666666667% - 16.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-3[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-4[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-5[_ngcontent-%COMP%]{width:calc(41.6666666667% - 11.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-6[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-7[_ngcontent-%COMP%]{width:calc(58.3333333333% - 8.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-8[_ngcontent-%COMP%]{width:calc(66.6666666667% - 6.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-9[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-10[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-11[_ngcontent-%COMP%]{width:calc(91.6666666667% - 1.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xl-12[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (min-width:1250px){.col-lg-1[_ngcontent-%COMP%]{width:calc(8.3333333333% - 18.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-2[_ngcontent-%COMP%]{width:calc(16.6666666667% - 16.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-3[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-4[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-5[_ngcontent-%COMP%]{width:calc(41.6666666667% - 11.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-6[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-7[_ngcontent-%COMP%]{width:calc(58.3333333333% - 8.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-8[_ngcontent-%COMP%]{width:calc(66.6666666667% - 6.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-9[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-10[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-11[_ngcontent-%COMP%]{width:calc(91.6666666667% - 1.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-lg-12[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (min-width:1024px) and (max-width:1249px){.col-md-1[_ngcontent-%COMP%]{width:calc(8.3333333333% - 18.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-2[_ngcontent-%COMP%]{width:calc(16.6666666667% - 16.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-3[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-4[_ngcontent-%COMP%]{width:calc(33.3333333333% - 13.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-5[_ngcontent-%COMP%]{width:calc(41.6666666667% - 11.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-6[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-7[_ngcontent-%COMP%]{width:calc(58.3333333333% - 8.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-8[_ngcontent-%COMP%]{width:calc(66.6666666667% - 6.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-9[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-10[_ngcontent-%COMP%]{width:calc(83.3333333333% - 3.3333333333px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-11[_ngcontent-%COMP%]{width:calc(91.6666666667% - 1.6666666667px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-md-12[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (min-width:768px) and (max-width:1023px){.col-sm-1[_ngcontent-%COMP%]{width:calc(12.5% - 17.5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-2[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-3[_ngcontent-%COMP%]{width:calc(37.5% - 12.5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-4[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-5[_ngcontent-%COMP%]{width:calc(62.5% - 7.5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-6[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-7[_ngcontent-%COMP%]{width:calc(87.5% - 2.5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-sm-8[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (max-width:767px){.col-xs-1[_ngcontent-%COMP%]{width:calc(25% - 15px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xs-2[_ngcontent-%COMP%]{width:calc(50% - 10px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xs-3[_ngcontent-%COMP%]{width:calc(75% - 5px);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.col-xs-4[_ngcontent-%COMP%]{width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}[_nghost-%COMP%]{display:block}  body{background-color:#121317;overflow-y:auto}.cta-icon[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.nav[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:100;padding:16px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(18,19,23,.7);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}@media (min-width:1024px){.nav[_ngcontent-%COMP%]{padding:16px 40px}}.nav__logo[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative;z-index:2;gap:2px}.nav__logo-img[_ngcontent-%COMP%]{height:24px;width:auto}@media (min-width:1024px){.nav__logo-img[_ngcontent-%COMP%]{height:28px}}.nav__links[_ngcontent-%COMP%]{display:none;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:31px;margin-left:40px}@media (min-width:1024px){.nav__links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}.nav__link[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;color:#d4d4d4;-webkit-transition:color .2s ease;transition:color .2s ease;text-decoration:none}.nav__link[_ngcontent-%COMP%]:hover{color:#fff}.nav__ctas[_ngcontent-%COMP%]{display:none;margin-left:auto;gap:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:1024px){.nav__ctas[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}.nav__cta-btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;font-family:Google Sans Flex,sans-serif;font-size:14px;font-weight:500;text-decoration:none;cursor:pointer;-webkit-transition:background-color .15s ease,-webkit-transform .15s ease;transition:background-color .15s ease,-webkit-transform .15s ease;transition:transform .15s ease,background-color .15s ease;transition:transform .15s ease,background-color .15s ease,-webkit-transform .15s ease;white-space:nowrap}.nav__cta-btn[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{width:18px;height:18px}.nav__cta-btn[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-1px);transform:translateY(-1px)}.nav__cta-btn--play[_ngcontent-%COMP%]{background-color:#fff;color:#121317}.nav__cta-btn--play[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.nav__cta-btn--apple[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:1.5px solid hsla(0,0%,100%,.35)}.nav__cta-btn--apple[_ngcontent-%COMP%]:hover{border-color:hsla(0,0%,100%,.6);background-color:hsla(0,0%,100%,.06)}.nav__cta-btn--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default}.nav__cta-btn--disabled[_ngcontent-%COMP%]:hover{-webkit-transform:none;transform:none;opacity:.7}.nav__cta-btn-hover-label[_ngcontent-%COMP%], .nav__cta-btn-label[_ngcontent-%COMP%]{-webkit-transition:opacity .25s ease;transition:opacity .25s ease}.nav__cta-btn-label[_ngcontent-%COMP%]{opacity:1}.nav__cta-btn-hover-label[_ngcontent-%COMP%]{position:absolute;opacity:0}.nav__cta-btn--disabled[_ngcontent-%COMP%]:hover   .nav__cta-btn-label[_ngcontent-%COMP%]{opacity:0}.nav__cta-btn--disabled[_ngcontent-%COMP%]:hover   .nav__cta-btn-hover-label[_ngcontent-%COMP%]{opacity:1}.nav__cta-btn--disabled[_ngcontent-%COMP%]:hover   .cta-icon[_ngcontent-%COMP%]{opacity:0;-webkit-transition:opacity .25s ease;transition:opacity .25s ease}.nav__menu-btn[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:auto;font-size:24px;color:#fff;cursor:pointer;background:none;border:none;position:relative;z-index:2}@media (min-width:1024px){.nav__menu-btn[_ngcontent-%COMP%]{display:none}}.nav__mobile-overlay[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#0e0f12;z-index:1;padding:80px 20px 40px;opacity:0;visibility:hidden;-webkit-transition:opacity .3s ease,visibility .3s ease;transition:opacity .3s ease,visibility .3s ease}.nav__mobile-overlay--open[_ngcontent-%COMP%]{opacity:1;visibility:visible}@media (min-width:1024px){.nav__mobile-overlay[_ngcontent-%COMP%]{display:none}}.nav__mobile-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:auto}.nav__mobile-link[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:32px;line-height:39px;letter-spacing:-.5px;color:#fff;text-decoration:none;margin-bottom:24px;-webkit-transition:color .2s ease;transition:color .2s ease}.nav__mobile-link[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nav__mobile-link[_ngcontent-%COMP%]:hover{color:#d4d4d4}.nav__mobile-footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-top:auto}.nav__mobile-text[_ngcontent-%COMP%]{font-family:Google Sans Flex,sans-serif;font-size:22px;line-height:24px;letter-spacing:-.13px;max-width:256px;color:#d4d4d4;margin:0 0 24px 0}.nav__mobile-ctas[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px;width:100%}.hero[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:80px;overflow:hidden;background:#000}@media (min-width:1024px){.hero[_ngcontent-%COMP%]{padding-bottom:120px}}.hero[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:278px;background:-webkit-gradient(linear,left bottom,left top,from(#121317),to(rgba(18,19,23,0)));background:-webkit-linear-gradient(bottom,#121317,rgba(18,19,23,0));background:linear-gradient(0deg,#121317,rgba(18,19,23,0));z-index:1;pointer-events:none}.hero__media[_ngcontent-%COMP%]{position:absolute;inset:0;margin:0 auto;width:100%;max-width:1500px;z-index:0}.hero__media[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:0;z-index:1;pointer-events:none;background:-webkit-gradient(linear,left top,right top,from(#000),to(transparent)) 0 0/10% 100% no-repeat,-webkit-gradient(linear,right top,left top,from(#000),to(transparent)) 100% 0/10% 100% no-repeat,-webkit-gradient(linear,left top,left bottom,from(#000),to(transparent)) 0 0/100% 10% no-repeat;background:-webkit-linear-gradient(left,#000,transparent) 0 0/10% 100% no-repeat,-webkit-linear-gradient(right,#000,transparent) 100% 0/10% 100% no-repeat,-webkit-linear-gradient(top,#000,transparent) 0 0/100% 10% no-repeat;background:linear-gradient(90deg,#000,transparent) 0 0/10% 100% no-repeat,linear-gradient(270deg,#000,transparent) 100% 0/10% 100% no-repeat,linear-gradient(180deg,#000,transparent) 0 0/100% 10% no-repeat}.hero__media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:80%;object-fit:contain}@media screen and (max-width:768px){.hero__media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{object-fit:cover;height:80%}}@media screen and (max-width:600px){.hero__media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{height:70%}}.hero__content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.hero__ctas[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:16px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:1000px){.hero__ctas[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;max-width:340px;padding-left:20px;padding-right:20px;-moz-box-sizing:border-box;box-sizing:border-box}}.preorder-cta[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:14px;padding:20px 40px;border-radius:100px;font-family:Google Sans Flex,sans-serif;font-size:18px;font-weight:500;line-height:1.4;text-decoration:none;cursor:pointer;white-space:nowrap;min-width:280px;-webkit-transition:box-shadow .2s ease,background-color .2s ease,-webkit-transform .2s ease;transition:box-shadow .2s ease,background-color .2s ease,-webkit-transform .2s ease;transition:transform .2s ease,box-shadow .2s ease,background-color .2s ease;transition:transform .2s ease,box-shadow .2s ease,background-color .2s ease,-webkit-transform .2s ease}.preorder-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{width:28px;height:28px}.preorder-cta[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3)}.preorder-cta[_ngcontent-%COMP%]:active{-webkit-transform:translateY(0);transform:translateY(0)}.preorder-cta[_ngcontent-%COMP%]:focus-visible{outline:2px solid #2e96ff;outline-offset:4px}.preorder-cta--android[_ngcontent-%COMP%]{background-color:#fff;color:#121317}.preorder-cta--android[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.preorder-cta--ios[_ngcontent-%COMP%]{background-color:transparent;color:#fff;border:2px solid hsla(0,0%,100%,.4)}.preorder-cta--ios[_ngcontent-%COMP%]:hover{border-color:hsla(0,0%,100%,.7);background-color:hsla(0,0%,100%,.08)}.preorder-cta--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;pointer-events:auto}.preorder-cta--disabled[_ngcontent-%COMP%]:hover{-webkit-transform:none;transform:none;box-shadow:none;opacity:.7}.preorder-cta--disabled[_ngcontent-%COMP%]:active{-webkit-transform:none;transform:none}.preorder-cta__hover-label[_ngcontent-%COMP%], .preorder-cta__label[_ngcontent-%COMP%]{-webkit-transition:opacity .25s ease;transition:opacity .25s ease}.preorder-cta__label[_ngcontent-%COMP%]{opacity:1}.preorder-cta__hover-label[_ngcontent-%COMP%]{position:absolute;opacity:0}.preorder-cta--disabled[_ngcontent-%COMP%]:hover   .preorder-cta__label[_ngcontent-%COMP%]{opacity:0}.preorder-cta--disabled[_ngcontent-%COMP%]:hover   .preorder-cta__hover-label[_ngcontent-%COMP%]{opacity:1}.preorder-cta--disabled[_ngcontent-%COMP%]:hover   .cta-icon[_ngcontent-%COMP%]{opacity:0;-webkit-transition:opacity .25s ease;transition:opacity .25s ease}@media screen and (max-width:1000px){.preorder-cta[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;min-width:unset;width:100%;padding:18px 32px;font-size:14px;-moz-box-sizing:border-box;box-sizing:border-box}.preorder-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{width:24px;height:24px}}@media screen and (max-width:600px){.preorder-cta[_ngcontent-%COMP%]{padding:12px 24px}.preorder-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{width:20px;height:20px}}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


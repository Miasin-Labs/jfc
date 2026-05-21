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
		_.hr("S9crUb");
		var Qle = function(a) {
			a & 1 && _.I(0, "video", 2);
			a & 2 && (a = _.K(), _.E("src", a.videoSrc(), _.rg)("poster", a.imageSrc()));
		}, Rle = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(), _.E("src", a.imageSrc(), _.rg)("alt", a.imageAlt()));
		}, Sle = function(a) {
			a & 1 && (_.F(0, "a", 5), _.I(1, "span", 8), _.R(2), _.H());
			a & 2 && (a = _.K(), _.E("href", a.playUrl(), _.rg), _.y(), _.E("iconName", a.S.cK), _.y(), _.S(" ", a.playText(), " "));
		}, Tle = function(a) {
			a & 1 && (_.F(0, "a", 9), _.I(1, "span", 10), _.R(2), _.H());
			a & 2 && (a = _.K(), _.P("full-width", !a.playText()), _.E("href", a.remixUrl(), _.rg), _.y(), _.E("iconName", a.S.Ae), _.y(), _.S(" ", a.remixText(), " "));
		}, Ule = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = b.V, _.qi("chip chip-" + (b.jb % 2 === 0 ? "blue" : "green")), _.y(), _.U(a));
		}, Vle = function(a) {
			a & 1 && (_.F(0, "span", 13), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.tagline()));
		}, Wle = function(a) {
			a & 1 && (_.F(0, "div", 7)(1, "div", 11), _.Ah(2, Ule, 2, 3, "span", 12, _.zh), _.H(), _.B(4, Vle, 2, 1, "span", 13), _.H());
			a & 2 && (a = _.K(), _.y(2), _.Bh(a.techChips()), _.y(2), _.C(a.tagline() ? 4 : -1));
		}, Xle = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 0)(1, "button", 1);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.H();
				_.F(2, "div", 2)(3, "button", 3);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.I(4, "span", 4);
				_.H();
				_.F(5, "div", 5);
				_.I(6, "span", 4);
				_.H();
				_.F(7, "h3", 6);
				_.R(8);
				_.H();
				_.F(9, "p", 7);
				_.R(10);
				_.H();
				_.F(11, "div", 8)(12, "button", 9);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.R(13, "Maybe later");
				_.H();
				_.F(14, "button", 10);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.uxa());
				});
				_.I(15, "span", 4);
				_.R(16);
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(4), _.E("iconName", a.S.ac), _.y(2), _.E("iconName", a.S.Us), _.y(2), _.U(a.a5a()), _.y(2), _.U(a.Z4a()), _.y(5), _.E("iconName", a.S.ZJ), _.y(), _.S(" ", a.bXa(), " "));
		}, Yle = function(a) {
			a & 1 && (_.F(0, "h3"), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.qi("app-name heading-" + a.headingSize()), _.y(), _.U(a.title()));
		}, Zle = function(a) {
			a & 1 && _.I(0, "div", 6);
			a & 2 && (a = _.K(2), _.E("innerHTML", a.description(), _.qg));
		}, ame = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = b.V, b = b.jb, _.K(3), _.qi("chip chip-" + $le[b % $le.length]), _.y(), _.U(a));
		}, bme = function(a) {
			a & 1 && (_.F(0, "div", 7), _.Ah(1, ame, 2, 3, "span", 5, _.zh), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.techChips()));
		}, cme = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.playUrl()));
				});
				_.I(1, "span", 14);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.vaa())("color", a.waa()), _.y(), _.E("iconName", a.S.cK), _.y(), _.S(" ", a.playText(), " "));
		}, dme = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.remixUrl()));
				});
				_.I(1, "span", 16);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.hba())("color", a.JN())("border-color", a.JN()), _.y(), _.E("iconName", a.S.Ae), _.y(), _.S(" ", a.remixText(), " "));
		}, eme = function(a) {
			a & 1 && (_.F(0, "div", 8), _.B(1, cme, 3, 6, "button", 11), _.B(2, dme, 3, 8, "button", 12), _.H());
			a & 2 && (a = _.K(2), _.y(), _.C(a.playText() ? 1 : -1), _.y(), _.C(a.remixText() ? 2 : -1));
		}, fme = function(a) {
			a & 1 && _.Ih(0);
		}, gme = function(a) {
			a & 1 && (_.F(0, "div", 1)(1, "div", 4), _.B(2, Yle, 2, 3, "h3", 5), _.B(3, Zle, 1, 1, "div", 6), _.B(4, bme, 3, 0, "div", 7), _.B(5, eme, 3, 2, "div", 8), _.H(), _.F(6, "div", 9), _.z(7, fme, 1, 0, "ng-container", 10), _.H()());
			if (a & 2) {
				a = _.K();
				let b = _.O(4);
				_.y(2);
				_.C(a.title() ? 2 : -1);
				_.y();
				_.C(a.description() ? 3 : -1);
				_.y();
				_.C(a.techChips().length ? 4 : -1);
				_.y();
				_.C(a.playText() || a.remixText() ? 5 : -1);
				_.y(2);
				_.E("ngTemplateOutlet", b);
			}
		}, hme = function(a) {
			a & 1 && (_.F(0, "h3"), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.qi("app-name heading-" + a.headingSize()), _.y(), _.U(a.title()));
		}, ime = function(a) {
			a & 1 && _.I(0, "div", 6);
			a & 2 && (a = _.K(2), _.E("innerHTML", a.description(), _.qg));
		}, jme = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = b.V, b = b.jb, _.K(3), _.qi("chip chip-" + $le[b % $le.length]), _.y(), _.U(a));
		}, kme = function(a) {
			a & 1 && (_.F(0, "div", 7), _.Ah(1, jme, 2, 3, "span", 5, _.zh), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.techChips()));
		}, lme = function(a) {
			a & 1 && _.Ih(0);
		}, mme = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.playUrl()));
				});
				_.I(1, "span", 14);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.vaa())("color", a.waa()), _.y(), _.E("iconName", a.S.cK), _.y(), _.S(" ", a.playText(), " "));
		}, nme = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.remixUrl()));
				});
				_.I(1, "span", 16);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.hba())("color", a.JN())("border-color", a.JN()), _.y(), _.E("iconName", a.S.Ae), _.y(), _.S(" ", a.remixText(), " "));
		}, ome = function(a) {
			a & 1 && (_.F(0, "div", 17), _.B(1, mme, 3, 6, "button", 11), _.B(2, nme, 3, 8, "button", 12), _.H());
			a & 2 && (a = _.K(2), _.y(), _.C(a.playText() ? 1 : -1), _.y(), _.C(a.remixText() ? 2 : -1));
		}, pme = function(a) {
			a & 1 && (_.F(0, "div", 2)(1, "div", 4), _.B(2, hme, 2, 3, "h3", 5), _.B(3, ime, 1, 1, "div", 6), _.B(4, kme, 3, 0, "div", 7), _.H(), _.F(5, "div", 9), _.z(6, lme, 1, 0, "ng-container", 10), _.B(7, ome, 3, 2, "div", 17), _.H()());
			if (a & 2) {
				a = _.K();
				let b = _.O(4);
				_.y(2);
				_.C(a.title() ? 2 : -1);
				_.y();
				_.C(a.description() ? 3 : -1);
				_.y();
				_.C(a.techChips().length ? 4 : -1);
				_.y(2);
				_.E("ngTemplateOutlet", b);
				_.y();
				_.C(a.playText() || a.remixText() ? 7 : -1);
			}
		}, qme = function(a) {
			a & 1 && (_.F(0, "p", 20), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.subtitle()));
		}, rme = function(a) {
			a & 1 && (_.F(0, "div", 18)(1, "h3"), _.R(2), _.H(), _.B(3, qme, 2, 1, "p", 20), _.H());
			a & 2 && (a = _.K(2), _.y(), _.qi("app-name heading-" + a.headingSize()), _.y(), _.U(a.title()), _.y(), _.C(a.subtitle() ? 3 : -1));
		}, sme = function(a) {
			a & 1 && _.Ih(0);
		}, tme = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 13);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.playUrl()));
				});
				_.I(1, "span", 14);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.vaa())("color", a.waa()), _.y(), _.E("iconName", a.S.cK), _.y(), _.S(" ", a.playText(), " "));
		}, ume = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 15);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.VM(c.remixUrl()));
				});
				_.I(1, "span", 16);
				_.R(2);
				_.H();
			}
			a & 2 && (a = _.K(3), _.pi("background-color", a.hba())("color", a.JN())("border-color", a.JN()), _.y(), _.E("iconName", a.S.Ae), _.y(), _.S(" ", a.remixText(), " "));
		}, vme = function(a) {
			a & 1 && (_.F(0, "div", 19), _.B(1, tme, 3, 6, "button", 11), _.B(2, ume, 3, 8, "button", 12), _.H());
			a & 2 && (a = _.K(2), _.y(), _.C(a.playText() ? 1 : -1), _.y(), _.C(a.remixText() ? 2 : -1));
		}, wme = function(a) {
			a & 1 && (_.F(0, "div", 3), _.B(1, rme, 4, 4, "div", 18), _.F(2, "div", 9), _.z(3, sme, 1, 0, "ng-container", 10), _.H(), _.B(4, vme, 3, 2, "div", 19), _.H());
			if (a & 2) {
				a = _.K();
				let b = _.O(4);
				_.y();
				_.C(a.title() ? 1 : -1);
				_.y(2);
				_.E("ngTemplateOutlet", b);
				_.y();
				_.C(a.playText() || a.remixText() ? 4 : -1);
			}
		}, xme = function(a) {
			a & 1 && _.I(0, "video", 21);
			a & 2 && (a = _.K(2), _.E("src", a.videoSrc(), _.rg)("poster", a.imageSrc()));
		}, yme = function(a) {
			a & 1 && _.I(0, "img", 22);
			a & 2 && (a = _.K(2), _.E("src", a.imageSrc(), _.rg)("alt", a.imageAlt()));
		}, zme = function(a) {
			a & 1 && _.B(0, xme, 1, 2, "video", 21)(1, yme, 1, 2, "img", 22);
			a & 2 && (a = _.K(), _.C(a.videoSrc() ? 0 : a.imageSrc() ? 1 : -1));
		}, Ame = function(a) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.url, _.rg), _.y(), _.U(a.label));
		}, Bme = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			if (a & 2) {
				a = _.K();
				let b = a.V;
				_.P("breadcrumb-current", a.jb === a.lj - 1);
				_.y();
				_.U(b.label);
			}
		}, Cme = function(a) {
			a & 1 && (_.F(0, "span", 13), _.R(1, "/"), _.H());
		}, Dme = function(a, b) {
			a & 1 && (_.F(0, "li", 10), _.B(1, Ame, 2, 2, "a", 11)(2, Bme, 2, 3, "span", 12), _.B(3, Cme, 2, 0, "span", 13), _.H());
			if (a & 2) {
				a = b.V;
				let c = b.jb;
				b = b.lj;
				_.y();
				_.C(c !== b - 1 && a.url ? 1 : 2);
				_.y(2);
				_.C(c !== b - 1 ? 3 : -1);
			}
		}, Fme = function(a) {
			a & 1 && (_.F(0, "nav", 2)(1, "ol", 9), _.Ah(2, Dme, 4, 2, "li", 10, Eme), _.H()());
			a & 2 && (a = _.K(2), _.y(2), _.Bh(a.breadcrumb()));
		}, Gme = function(a) {
			a & 1 && _.I(0, "span", 16);
			a & 2 && (a = _.K(3), _.pi("color", a.labelDotColor()), _.E("iconName", a.labelIcon()));
		}, Hme = function(a) {
			a & 1 && _.I(0, "span", 16);
			a & 2 && (a = _.K(3), _.pi("color", a.labelDotColor()), _.E("iconName", a.S.BPa));
		}, Ime = function(a) {
			a & 1 && _.I(0, "span", 17);
			a & 2 && (a = _.K(3), _.pi("background", a.labelDotColor()));
		}, Jme = function(a) {
			a & 1 && (_.F(0, "div", 3), _.B(1, Gme, 1, 3, "span", 14)(2, Hme, 1, 3, "span", 14)(3, Ime, 1, 2, "span", 15), _.R(4), _.H());
			a & 2 && (a = _.K(2), _.y(), _.C(a.labelIcon() ? 1 : a.label() === "Tutorial" ? 2 : 3), _.y(3), _.S(" ", a.label(), " "));
		}, Kme = function(a) {
			a & 1 && (_.F(0, "p", 5), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.subhead()));
		}, Lme = function(a) {
			a & 1 && (_.F(0, "span", 7)(1, "span", 18), _.R(2), _.H(), _.R(3), _.H());
			a & 2 && (a = _.K(2), _.y(), _.pi("background", a.labelDotColor() + "22")("color", a.labelDotColor()), _.y(), _.S(" ", a.meta().authorInitials || "", " "), _.y(), _.S(" Built by ", a.meta().authorName, " "));
		}, Mme = function(a) {
			a & 1 && (_.F(0, "span", 8), _.I(1, "span", 19), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.VV), _.y(), _.S(" ", a.meta().readTime, " "));
		}, Nme = function(a) {
			a & 1 && (_.F(0, "span", 8), _.I(1, "span", 19), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.VV), _.y(), _.S(" ", a.meta().buildTime, " "));
		}, Ome = function(a) {
			a & 1 && (_.F(0, "span", 8), _.I(1, "span", 19), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.Qra), _.y(), _.S(" ", a.meta().publishDate, " "));
		}, Pme = function(a) {
			a & 1 && (_.F(0, "span", 8), _.I(1, "span", 19), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.Jta), _.y(), _.S(" ", a.meta().rating, " "));
		}, Qme = function(a) {
			a & 1 && (_.F(0, "div", 0), _.B(1, Fme, 4, 0, "nav", 2), _.B(2, Jme, 5, 2, "div", 3), _.F(3, "h1", 4), _.R(4), _.H(), _.B(5, Kme, 2, 1, "p", 5), _.F(6, "div", 6), _.B(7, Lme, 4, 6, "span", 7), _.B(8, Mme, 3, 2, "span", 8), _.B(9, Nme, 3, 2, "span", 8), _.B(10, Ome, 3, 2, "span", 8), _.B(11, Pme, 3, 2, "span", 8), _.H()());
			a & 2 && (a = _.K(), _.y(), _.C(a.breadcrumb().length > 0 ? 1 : -1), _.y(), _.C(a.label() ? 2 : -1), _.y(2), _.U(a.headline()), _.y(), _.C(a.subhead() ? 5 : -1), _.y(2), _.C(a.meta().authorName ? 7 : -1), _.y(), _.C(a.meta().readTime ? 8 : -1), _.y(), _.C(a.meta().buildTime ? 9 : -1), _.y(), _.C(a.meta().publishDate ? 10 : -1), _.y(), _.C(a.meta().rating ? 11 : -1));
		}, Rme = function(a) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.url, _.rg), _.y(), _.U(a.label));
		}, Sme = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			if (a & 2) {
				a = _.K();
				let b = a.V;
				_.P("breadcrumb-current", a.jb === a.lj - 1);
				_.y();
				_.U(b.label);
			}
		}, Tme = function(a) {
			a & 1 && (_.F(0, "span", 13), _.R(1, "/"), _.H());
		}, Ume = function(a, b) {
			a & 1 && (_.F(0, "li", 10), _.B(1, Rme, 2, 2, "a", 11)(2, Sme, 2, 3, "span", 12), _.B(3, Tme, 2, 0, "span", 13), _.H());
			if (a & 2) {
				a = b.V;
				let c = b.jb;
				b = b.lj;
				_.y();
				_.C(c !== b - 1 && a.url ? 1 : 2);
				_.y(2);
				_.C(c !== b - 1 ? 3 : -1);
			}
		}, Vme = function(a) {
			a & 1 && (_.F(0, "nav", 2)(1, "ol", 9), _.Ah(2, Ume, 4, 2, "li", 10, Eme), _.H()());
			a & 2 && (a = _.K(2), _.y(2), _.Bh(a.breadcrumb()));
		}, Wme = function(a) {
			a & 1 && (_.F(0, "p", 5), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.subhead()));
		}, Xme = function(a) {
			a & 1 && (_.F(0, "div", 1), _.B(1, Vme, 4, 0, "nav", 2), _.F(2, "h1", 4), _.R(3), _.H(), _.B(4, Wme, 2, 1, "p", 5), _.H());
			a & 2 && (a = _.K(), _.y(), _.C(a.breadcrumb().length > 0 ? 1 : -1), _.y(2), _.U(a.headline()), _.y(), _.C(a.subhead() ? 4 : -1));
		}, Yme = function(a) {
			a & 1 && (_.F(0, "span", 1)(1, "span", 3), _.R(2), _.H(), _.R(3), _.H());
			a & 2 && (a = _.K(), _.y(), _.pi("background", a.authorColor() + "22")("color", a.authorColor()), _.y(), _.S(" ", a.authorInitials(), " "), _.y(), _.S(" ", a.authorName(), " "));
		}, Zme = function(a) {
			a & 1 && (_.F(0, "span", 2), _.I(1, "span", 4), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Qra), _.y(), _.S(" ", a.publishDate(), " "));
		}, $me = function(a) {
			a & 1 && (_.F(0, "span", 2), _.I(1, "span", 4), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.VV), _.y(), _.S(" ", a.readTime(), " "));
		}, ane = function(a) {
			a & 1 && (_.F(0, "span", 2), _.I(1, "span", 4), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.VV), _.y(), _.S(" ", a.buildTime(), " "));
		}, bne = function(a) {
			a & 1 && (_.F(0, "span", 2), _.I(1, "span", 4), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.SPEED), _.y(), _.S(" ", a.difficulty(), " "));
		}, cne = function(a) {
			a & 1 && (_.F(0, "span", 2), _.I(1, "span", 4), _.R(2), _.H());
			a & 2 && (a = _.K(), _.y(), _.E("iconName", a.S.Jta), _.y(), _.S(" ", a.rating(), " "));
		}, dne = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "audio", 5, 0);
				_.J("timeupdate", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.HI(d));
				})("loadedmetadata", function(d) {
					_.q(c);
					var e = _.K();
					return _.t(e.ZFa(d));
				})("ended", function() {
					_.q(c);
					var d = _.K();
					return _.t(d.QFa());
				})("error", function() {
					_.q(c);
					var d = _.K();
					return _.t(d.onError());
				})("canplay", function() {
					_.q(c);
					var d = _.K();
					return _.t(d.EFa());
				});
				_.H();
			}
			if (a & 2) {
				_.E("src", b.src);
				let c;
				_.wh("type", (c = b.mimeType) != null ? c : "audio/mpeg");
			}
		}, ene = function(a) {
			a & 1 && (_.F(0, "h3", 3), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.title()));
		}, fne = function(a) {
			a & 1 && (_.F(0, "div", 12), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.description));
		}, gne = function(a) {
			a & 1 && (_.F(0, "div", 13), _.R(1, "Unable to load audio"), _.H());
		}, hne = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 7);
				_.J("click", function() {
					var d = _.q(c).jb, e = _.K(2);
					d === e.xK() ? e.qe() ? e.pause() : e.play() : (e.xK.set(d), e.qe.set(!1), e.currentTime.set(0), e.duration.set(0), e.hasError.set(!1), e.BU.set(!0));
					return _.t();
				});
				_.F(1, "div", 8);
				_.I(2, "span", 9);
				_.H();
				_.F(3, "div", 10)(4, "div", 11);
				_.R(5);
				_.H();
				_.B(6, fne, 2, 1, "div", 12);
				_.H();
				_.B(7, gne, 2, 0, "div", 13);
				_.H();
			}
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.P("active", b === c.xK())("playing", b === c.xK() && c.qe());
				_.wh("aria-label", "Play " + a.label);
				_.y(2);
				_.E("iconName", b === c.xK() && c.qe() ? c.qf.Cea : c.qf.cK);
				_.y(3);
				_.U(a.label);
				_.y();
				_.C(a.description ? 6 : -1);
				_.y();
				_.C(b === c.xK() && c.hasError() ? 7 : -1);
			}
		}, jne = function(a) {
			a & 1 && (_.F(0, "div", 4), _.Ah(1, hne, 8, 9, "button", 6, ine), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.samples()));
		}, kne = function(a) {
			a & 1 && (_.F(0, "div", 15), _.I(1, "span", 9), _.F(2, "span"), _.R(3, "Unable to load audio"), _.H()());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.qf.ERROR));
		}, lne = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 16)(1, "button", 17);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					c.qe() ? c.pause() : c.play();
					return _.t();
				});
				_.I(2, "span", 9);
				_.H();
				_.F(3, "div", 18)(4, "div", 19);
				_.R(5);
				_.H();
				_.F(6, "button", 20);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(3), e = c.currentTarget.getBoundingClientRect();
					c = Math.max(0, Math.min(1, (c.clientX - e.left) / e.width));
					var f;
					(e = (f = d.qga()) == null ? void 0 : f.nativeElement) && d.duration() > 0 && (e.currentTime = c * d.duration(), d.currentTime.set(e.currentTime));
					return _.t();
				});
				_.I(7, "div", 21);
				_.H();
				_.F(8, "div", 22);
				_.R(9);
				_.H()()();
			}
			if (a & 2) {
				a = _.K();
				let b = _.K(2);
				_.y();
				_.wh("aria-label", b.qe() ? "Pause" : "Play");
				_.y();
				_.E("iconName", b.qe() ? b.qf.Cea : b.qf.cK);
				_.y(3);
				_.U(a.label);
				_.y();
				_.wh("aria-valuenow", b.currentTime())("aria-valuemin", 0)("aria-valuemax", b.duration());
				_.y();
				_.pi("width", b.duration() <= 0 ? 0 : b.currentTime() / b.duration() * 100, "%");
				_.y(2);
				_.si(" ", b.bE(b.currentTime()), " / ", b.bE(b.duration()), " ");
			}
		}, mne = function(a) {
			a & 1 && (_.F(0, "div", 14), _.B(1, kne, 4, 1, "div", 15)(2, lne, 10, 10, "div", 16), _.H());
			a & 2 && (a = _.K(2), _.y(), _.C(a.hasError() ? 1 : 2));
		}, nne = function(a) {
			a & 1 && _.B(0, mne, 3, 1, "div", 14);
			if (a & 2) {
				let b;
				a = _.K();
				_.C((b = a.yTa) ? 0 : -1, b);
			}
		}, one = function(a) {
			a & 1 && (_.F(0, "span", 2), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.sectionLabel()));
		}, pne = function(a) {
			a & 1 && (_.F(0, "h3", 3), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.sectionTitle()));
		}, qne = function(a) {
			a & 1 && (_.F(0, "p", 4), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.introText()));
		}, rne = function(a) {
			a & 1 && (_.F(0, "span", 13), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.tag));
		}, sne = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 11);
				_.J("click", function() {
					var d = _.q(c).V, e = _.K(3);
					return _.t(e.haa(d.audioSrc));
				});
				_.I(1, "span", 12);
				_.B(2, rne, 2, 1, "span", 13);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(3), _.P("icon-only", !a.tag)("is-default", a.tag === "Default"), _.wh("aria-label", a.tag ? "Play audio for " + a.tag : "Play base audio"), _.y(), _.E("iconName", b.qf.YC), _.y(), _.C(a.tag ? 2 : -1));
		}, une = function(a, b) {
			a & 1 && (_.F(0, "div", 6)(1, "div", 7)(2, "p", 8), _.R(3), _.H(), _.F(4, "div", 9), _.Ah(5, sne, 3, 7, "button", 10, tne), _.H()()());
			a & 2 && (a = b.V, _.y(3), _.U(a.transcript), _.y(2), _.Bh(a.variations));
		}, wne = function(a) {
			a & 1 && (_.F(0, "section", 0)(1, "header", 1), _.B(2, one, 2, 1, "span", 2), _.B(3, pne, 2, 1, "h3", 3), _.B(4, qne, 2, 1, "p", 4), _.H(), _.F(5, "div", 5), _.Ah(6, une, 7, 1, "div", 6, vne), _.H()());
			a & 2 && (a = _.K(), _.y(2), _.C(a.sectionLabel() ? 2 : -1), _.y(), _.C(a.sectionTitle() ? 3 : -1), _.y(), _.C(a.introText() ? 4 : -1), _.y(2), _.Bh(a.examples()));
		}, xne = function(a) {
			a & 1 && _.I(0, "img", 1);
			a & 2 && (a = _.K(), _.E("src", a.avatarUrl(), _.rg)("alt", a.authorName()));
		}, yne = function(a) {
			a & 1 && (_.F(0, "div", 2), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.authorInitials()));
		}, zne = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (_.K(2), a = _.Vh(0), _.y(), _.U(a));
		}, Ane = function(a) {
			a & 1 && (_.F(0, "span", 6), _.R(1, " · "), _.H());
		}, Bne = function(a) {
			a & 1 && (_.F(0, "a", 7), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", "https://x.com/" + a.xHandle().replace("@", ""), _.rg), _.y(), _.U(a.xHandle()));
		}, Cne = function(a) {
			a & 1 && (_.F(0, "div", 5), _.B(1, zne, 2, 1, "span"), _.B(2, Ane, 2, 0, "span", 6), _.B(3, Bne, 2, 2, "a", 7), _.H());
			if (a & 2) {
				a = _.K();
				let b = _.Vh(0);
				_.y();
				_.C(b ? 1 : -1);
				_.y();
				_.C(b && a.xHandle() ? 2 : -1);
				_.y();
				_.C(a.xHandle() ? 3 : -1);
			}
		}, Dne = function(a) {
			a & 1 && (_.F(0, "span", 10), _.I(1, "span", 11), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.Qra), _.y(), _.S(" ", a.publishDate()));
		}, Ene = function(a) {
			a & 1 && (_.F(0, "span", 10), _.I(1, "span", 11), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.y(), _.E("iconName", a.S.VV), _.y(), _.S(" ", a.readTime()));
		}, Fne = function(a) {
			a & 1 && (_.I(0, "div", 8), _.F(1, "div", 9), _.B(2, Dne, 3, 2, "span", 10), _.B(3, Ene, 3, 2, "span", 10), _.H());
			a & 2 && (a = _.K(), _.y(2), _.C(a.publishDate() ? 2 : -1), _.y(), _.C(a.readTime() ? 3 : -1));
		}, Hne = function(a) {
			a & 1 && (_.Dh(0, "h2", 4), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.K(2), _.Ch("id", Gne(a.heading || "")), _.y(), _.U(a.heading));
		}, Ine = function(a) {
			a & 1 && _.Fh(0, "p", 5);
			a & 2 && (a = _.K().V, _.Ch("innerHTML", a.body, _.qg));
		}, Jne = function(a) {
			a & 1 && (_.Dh(0, "p", 6), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.y(), _.U(a.body));
		}, Kne = function(a, b) {
			a & 1 && (_.Dh(0, "div", 3), _.B(1, Hne, 2, 2, "h2", 4), _.B(2, Ine, 1, 1, "p", 5)(3, Jne, 2, 1, "p", 6), _.Eh());
			a & 2 && (a = b.V, b = _.K(2), _.y(), _.C(a.heading ? 1 : -1), _.y(), _.C(b.bd() ? 2 : 3));
		}, Mne = function(a) {
			a & 1 && (_.Dh(0, "div", 0), _.Ah(1, Kne, 4, 2, "div", 3, Lne), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.sections()));
		}, Nne = function(a) {
			a & 1 && (_.Dh(0, "h2", 4), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.K(2), _.Ch("id", Gne(a.heading || "")), _.y(), _.U(a.heading));
		}, One = function(a) {
			a & 1 && _.Fh(0, "p", 5);
			a & 2 && (a = _.K().V, _.Ch("innerHTML", a.body, _.qg));
		}, Pne = function(a) {
			a & 1 && (_.Dh(0, "p", 6), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.y(), _.U(a.body));
		}, Qne = function(a, b) {
			a & 1 && (_.Dh(0, "div", 3), _.B(1, Nne, 2, 2, "h2", 4), _.B(2, One, 1, 1, "p", 5)(3, Pne, 2, 1, "p", 6), _.Eh());
			a & 2 && (a = b.V, b = _.K(2), _.y(), _.C(a.heading ? 1 : -1), _.y(), _.C(b.bd() ? 2 : 3));
		}, Rne = function(a) {
			a & 1 && (_.Dh(0, "div", 1), _.Ah(1, Qne, 4, 2, "div", 3, Lne), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.sections()));
		}, Sne = function(a) {
			a & 1 && (_.Dh(0, "h2", 4), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.K(2), _.Ch("id", Gne(a.heading || "")), _.y(), _.U(a.heading));
		}, Tne = function(a) {
			a & 1 && _.Fh(0, "p", 5);
			a & 2 && (a = _.K().V, _.Ch("innerHTML", a.body, _.qg));
		}, Une = function(a) {
			a & 1 && (_.Dh(0, "p", 6), _.R(1), _.Eh());
			a & 2 && (a = _.K().V, _.y(), _.U(a.body));
		}, Vne = function(a, b) {
			a & 1 && (_.Dh(0, "div", 3), _.B(1, Sne, 2, 2, "h2", 4), _.B(2, Tne, 1, 1, "p", 5)(3, Une, 2, 1, "p", 6), _.Eh());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.P("lead-section", b === 0 && c.isLead());
				_.y();
				_.C(a.heading ? 1 : -1);
				_.y();
				_.C(c.bd() ? 2 : 3);
			}
		}, Wne = function(a) {
			a & 1 && (_.Dh(0, "div", 2), _.Ah(1, Vne, 4, 4, "div", 7, Lne), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.sections()));
		}, Xne = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 5);
				_.J("click", function(c) {
					_.q(b);
					var d = _.K(), e = d.linkUrl();
					if (e.startsWith("#")) {
						c.preventDefault();
						c = d.F;
						e = e.substring(1);
						a: {
							d = c.document;
							var f = d.getElementById(e) || d.getElementsByName(e)[0];
							if (f) e = f;
							else {
								if (typeof d.createTreeWalker === "function" && d.body && typeof d.body.attachShadow === "function") for (d = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT), f = d.currentNode; f;) {
									if (f = f.shadowRoot) {
										if (f = f.getElementById(e) || f.querySelector(`[name="${e}"]`)) {
											e = f;
											break a;
										}
									}
									f = d.nextNode();
								}
								e = null;
							}
						}
						if (e) {
							f = e.getBoundingClientRect();
							d = f.left + c.window.pageXOffset;
							f = f.top + c.window.pageYOffset;
							let g = c.offset();
							c.window.scrollTo(Object.assign({}, void 0, {
								left: d - g[0],
								top: f - g[1]
							}));
							e.focus({ preventScroll: !0 });
						}
					}
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = _.K(), _.E("href", a.linkUrl(), _.rg), _.y(), _.U(a.linkText()));
		}, Yne = function(a) {
			a & 1 && (_.F(0, "h2", 4), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.headline()));
		}, Zne = function(a) {
			a & 1 && (_.F(0, "p", 5), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.description()));
		}, $ne = function(a) {
			a & 1 && (_.F(0, "a", 7), _.I(1, "span", 8), _.R(2), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.primaryCtaUrl(), _.rg), _.y(), _.E("iconName", a.ctaIcon() || a.S.Us), _.y(), _.S(" ", a.primaryCtaText(), " "));
		}, aoe = function(a) {
			a & 1 && (_.F(0, "div", 0)(1, "div", 3), _.B(2, Yne, 2, 1, "h2", 4), _.B(3, Zne, 2, 1, "p", 5), _.H(), _.F(4, "div", 6), _.B(5, $ne, 3, 3, "a", 7), _.H()());
			a & 2 && (a = _.K(), _.y(2), _.C(a.headline() ? 2 : -1), _.y(), _.C(a.description() ? 3 : -1), _.y(2), _.C(a.primaryCtaText() ? 5 : -1));
		}, boe = function(a) {
			a & 1 && (_.F(0, "h2", 4), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.headline()));
		}, coe = function(a) {
			a & 1 && (_.F(0, "p", 5), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.description()));
		}, doe = function(a) {
			a & 1 && (_.F(0, "a", 7), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.primaryCtaUrl(), _.rg), _.y(), _.U(a.primaryCtaText()));
		}, eoe = function(a) {
			a & 1 && (_.F(0, "a", 10), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.secondaryCtaUrl(), _.rg), _.y(), _.U(a.secondaryCtaText()));
		}, foe = function(a) {
			a & 1 && (_.F(0, "div", 1), _.B(1, boe, 2, 1, "h2", 4), _.B(2, coe, 2, 1, "p", 5), _.F(3, "div", 9), _.B(4, doe, 2, 2, "a", 7), _.B(5, eoe, 2, 2, "a", 10), _.H()());
			a & 2 && (a = _.K(), _.y(), _.C(a.headline() ? 1 : -1), _.y(), _.C(a.description() ? 2 : -1), _.y(2), _.C(a.primaryCtaText() ? 4 : -1), _.y(), _.C(a.secondaryCtaText() ? 5 : -1));
		}, goe = function(a) {
			a & 1 && _.I(0, "span", 11);
			a & 2 && (a = _.K(2), _.E("iconName", a.ctaIcon()));
		}, hoe = function(a) {
			a & 1 && (_.F(0, "a", 12), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.primaryCtaUrl(), _.rg), _.y(), _.U(a.headline()));
		}, ioe = function(a) {
			a & 1 && (_.F(0, "a", 13), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.primaryCtaUrl(), _.rg), _.y(), _.U(a.primaryCtaText()));
		}, joe = function(a) {
			a & 1 && (_.F(0, "a", 14), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.E("href", a.secondaryCtaUrl(), _.rg), _.y(), _.U(a.secondaryCtaText()));
		}, koe = function(a) {
			a & 1 && (_.F(0, "div", 2), _.B(1, goe, 1, 1, "span", 11), _.B(2, hoe, 2, 2, "a", 12), _.B(3, ioe, 2, 2, "a", 13), _.B(4, joe, 2, 2, "a", 14), _.H());
			a & 2 && (a = _.K(), _.y(), _.C(a.ctaIcon() ? 1 : -1), _.y(), _.C(a.headline() ? 2 : -1), _.y(), _.C(a.primaryCtaText() ? 3 : -1), _.y(), _.C(a.secondaryCtaText() ? 4 : -1));
		}, loe = function(a) {
			a & 1 && (_.F(0, "h3", 0), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.header()));
		}, moe = function(a) {
			a & 1 && (_.F(0, "div", 5), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.stepLabel));
		}, noe = function(a, b) {
			a & 1 && (_.F(0, "div", 4), _.B(1, moe, 2, 1, "div", 5), _.F(2, "h4", 6), _.R(3), _.H(), _.I(4, "p", 7), _.H());
			a & 2 && (a = b.V, b = _.K(2), _.y(), _.C(b.showStepLabels() && a.stepLabel ? 1 : -1), _.y(2), _.U(a.title), _.y(), _.E("innerHTML", a.description, _.qg));
		}, poe = function(a) {
			a & 1 && (_.F(0, "div", 3), _.Ah(1, noe, 5, 3, "div", 4, ooe), _.H());
			a & 2 && (a = _.K(), _.P("feature-grid-single", a.items().length === 1), _.y(), _.Bh(a.items()));
		}, qoe = function(a) {
			a & 1 && (_.F(0, "div", 9), _.R(1), _.H());
			a & 2 && (a = _.K().jb, _.y(), _.U(a + 1));
		}, roe = function(a) {
			a & 1 && (_.F(0, "div", 10), _.I(1, "span", 12), _.H());
			a & 2 && (a = _.K().V, _.y(), _.E("iconName", a.icon || "info"));
		}, soe = function(a, b) {
			a & 1 && (_.F(0, "div", 8), _.B(1, qoe, 2, 1, "div", 9)(2, roe, 2, 1, "div", 10), _.F(3, "div", 11)(4, "h4", 6), _.R(5), _.H(), _.I(6, "p", 7), _.H()());
			a & 2 && (a = b.V, b = _.K(2), _.y(), _.C(b.variant() === "numbered" ? 1 : 2), _.y(4), _.U(a.title), _.y(), _.E("innerHTML", a.description, _.qg));
		}, toe = function(a) {
			a & 1 && (_.F(0, "div", 2), _.Ah(1, soe, 7, 3, "div", 8, ooe), _.H());
			a & 2 && (a = _.K(), _.y(), _.Bh(a.items()));
		}, uoe = function(a) {
			a & 1 && _.Fh(0, "img", 1);
			a & 2 && (a = _.K(), _.Ch("src", a.src(), _.rg)("alt", a.alt()));
		}, voe = function(a) {
			a & 1 && (_.Dh(0, "video", 2), _.R(1), _.Eh());
			a & 2 && (a = _.K(), _.Ch("src", a.src(), _.rg), _.y(), _.S(" ", a.alt(), " "));
		}, woe = function(a) {
			a & 1 && (_.Dh(0, "figcaption", 3), _.R(1), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.U(a.caption()));
		}, xoe = function(a, b) {
			a & 1 && (_.Dh(0, "div", 3), _.R(1), _.Eh());
			a & 2 && (_.y(), _.U(b));
		}, yoe = function(a) {
			a & 1 && (_.Dh(0, "div", 1)(1, "span", 2), _.R(2), _.Eh(), _.B(3, xoe, 2, 1, "div", 3), _.Eh());
			if (a & 2) {
				let b;
				a = _.K();
				_.P("has-subtitle", !!a.subtitle());
				_.y();
				_.pi("color", a.labelColor());
				_.P("mono", a.mono());
				_.y();
				_.U(a.label());
				_.y();
				_.C((b = a.subtitle()) ? 3 : -1, b);
			}
		}, zoe = function(a) {
			a & 1 && (_.F(0, "h3", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.label()));
		}, Aoe = function(a, b) {
			a & 1 && (_.F(0, "div", 3), _.I(1, "span", 4), _.F(2, "span", 5), _.R(3), _.H()());
			a & 2 && (a = b.V, b = _.K(), _.y(), _.E("iconName", b.S.iy), _.y(2), _.U(a));
		}, Boe = function(a) {
			a & 1 && (_.F(0, "p", 18), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.description()));
		}, Coe = function(a) {
			a & 1 && (_.F(0, "div", 7)(1, "h3", 17), _.R(2), _.H(), _.B(3, Boe, 2, 1, "p", 18), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.title()), _.y(), _.C(a.description() ? 3 : -1));
		}, Doe = function(a) {
			a & 1 && (_.F(0, "span", 19), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.text));
		}, Goe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 20)(1, "input", 21, 0);
				_.J("input", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					Eoe(e, d.slotKey, c.target.value);
					return _.t(Foe(c));
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y();
				_.E("placeholder", b.lE(a.slotKey));
			}
		}, Hoe = function(a, b) {
			a & 1 && (_.B(0, Doe, 2, 1, "span", 19), _.B(1, Goe, 3, 1, "span", 20));
			a & 2 && (a = b.V, _.C(a.text != null ? 0 : -1), _.y(), _.C(a.slotKey ? 1 : -1));
		}, Ioe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 1);
				_.B(1, Coe, 4, 2, "div", 7);
				_.F(2, "div", 8)(3, "div", 9)(4, "span", 10);
				_.R(5, "template prompt");
				_.H();
				_.F(6, "div", 11)(7, "button", 12);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.WA());
				});
				_.I(8, "span", 13);
				_.R(9);
				_.H();
				_.F(10, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.UP());
				});
				_.I(11, "span", 13);
				_.R(12, " Start building ");
				_.H()()();
				_.F(13, "div", 15)(14, "div", 16);
				_.Ah(15, Hoe, 2, 2, null, null, _.yh);
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(), _.C(a.title() ? 1 : -1), _.y(7), _.E("iconName", a.Qk() ? a.qf.Zf : a.qf.Ae), _.y(), _.S(" ", a.Qk() ? "Copied!" : "Copy", " "), _.y(2), _.E("iconName", a.qf.Us), _.y(4), _.Bh(a.segments()));
		}, Joe = function(a) {
			a & 1 && (_.F(0, "p", 18), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.description()));
		}, Koe = function(a) {
			a & 1 && (_.F(0, "div", 23)(1, "h3", 17), _.R(2), _.H(), _.B(3, Joe, 2, 1, "p", 18), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.title()), _.y(), _.C(a.description() ? 3 : -1));
		}, Loe = function(a) {
			a & 1 && (_.F(0, "span", 19), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.text));
		}, Moe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 28)(1, "input", 21, 0);
				_.J("input", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					Eoe(e, d.slotKey, c.target.value);
					return _.t(Foe(c));
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y();
				_.E("placeholder", b.lE(a.slotKey));
			}
		}, Noe = function(a, b) {
			a & 1 && (_.B(0, Loe, 2, 1, "span", 19), _.B(1, Moe, 3, 1, "span", 28));
			a & 2 && (a = b.V, _.C(a.text != null ? 0 : -1), _.y(), _.C(a.slotKey ? 1 : -1));
		}, Ooe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 2)(1, "div", 22);
				_.B(2, Koe, 4, 2, "div", 23);
				_.F(3, "div", 24)(4, "div", 25);
				_.Ah(5, Noe, 2, 2, null, null, _.yh);
				_.H()();
				_.F(7, "div", 26)(8, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.WA());
				});
				_.I(9, "span", 13);
				_.R(10);
				_.H();
				_.F(11, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.UP());
				});
				_.I(12, "span", 13);
				_.R(13, " Start building ");
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(2), _.C(a.title() ? 2 : -1), _.y(3), _.Bh(a.segments()), _.y(4), _.E("iconName", a.Qk() ? a.qf.Zf : a.qf.Ae), _.y(), _.S(" ", a.Qk() ? "Copied!" : "Copy prompt", " "), _.y(2), _.E("iconName", a.qf.Us));
		}, Poe = function(a) {
			a & 1 && (_.F(0, "p", 18), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.description()));
		}, Qoe = function(a) {
			a & 1 && (_.F(0, "div", 7)(1, "h3", 17), _.R(2), _.H(), _.B(3, Poe, 2, 1, "p", 18), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.title()), _.y(), _.C(a.description() ? 3 : -1));
		}, Roe = function(a) {
			a & 1 && (_.F(0, "span", 19), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.text));
		}, Soe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 32)(1, "input", 21, 0);
				_.J("input", function(c) {
					_.q(b);
					var d = _.K().V, e = _.K(2);
					Eoe(e, d.slotKey, c.target.value);
					return _.t(Foe(c));
				});
				_.H()();
			}
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y();
				_.E("placeholder", b.lE(a.slotKey));
			}
		}, Toe = function(a, b) {
			a & 1 && (_.B(0, Roe, 2, 1, "span", 19), _.B(1, Soe, 3, 1, "span", 32));
			a & 2 && (a = b.V, _.C(a.text != null ? 0 : -1), _.y(), _.C(a.slotKey ? 1 : -1));
		}, Uoe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 3);
				_.B(1, Qoe, 4, 2, "div", 7);
				_.F(2, "div", 29)(3, "div", 30);
				_.Ah(4, Toe, 2, 2, null, null, _.yh);
				_.H();
				_.F(6, "div", 31)(7, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.WA());
				});
				_.I(8, "span", 13);
				_.H();
				_.F(9, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.UP());
				});
				_.I(10, "span", 13);
				_.R(11, " Start building ");
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(), _.C(a.title() ? 1 : -1), _.y(3), _.Bh(a.segments()), _.y(4), _.E("iconName", a.Qk() ? a.qf.Zf : a.qf.Ae), _.y(2), _.E("iconName", a.qf.Us));
		}, Voe = function(a) {
			a & 1 && (_.F(0, "p", 18), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.description()));
		}, Woe = function(a) {
			a & 1 && (_.F(0, "div", 7)(1, "h3", 17), _.R(2), _.H(), _.B(3, Voe, 2, 1, "p", 18), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.title()), _.y(), _.C(a.description() ? 3 : -1));
		}, Xoe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 35)(1, "label", 40);
				_.R(2);
				_.H();
				_.F(3, "input", 41, 0);
				_.J("input", function(d) {
					var e = _.q(c).V, f = _.K(2);
					return _.t(Eoe(f, e.key, d.target.value));
				});
				_.H()();
			}
			a & 2 && (a = b.V, _.y(2), _.U(a.placeholder), _.y(), _.E("placeholder", a.placeholder));
		}, Yoe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.text));
		}, Zoe = function(a) {
			a & 1 && (_.F(0, "span", 42), _.R(1), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y();
				_.U(b.Bpa()[a.slotKey] || b.lE(a.slotKey));
			}
		}, $oe = function(a, b) {
			a & 1 && (_.B(0, Yoe, 2, 1, "span"), _.B(1, Zoe, 2, 1, "span", 42));
			a & 2 && (a = b.V, _.C(a.text != null ? 0 : -1), _.y(), _.C(a.slotKey ? 1 : -1));
		}, bpe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 4);
				_.B(1, Woe, 4, 2, "div", 7);
				_.F(2, "div", 33)(3, "div", 34);
				_.Ah(4, Xoe, 5, 2, "div", 35, ape);
				_.H();
				_.F(6, "div", 36)(7, "div", 37);
				_.R(8, "Generated prompt");
				_.H();
				_.F(9, "div", 38);
				_.Ah(10, $oe, 2, 2, null, null, _.yh);
				_.H()();
				_.F(12, "div", 39)(13, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.WA());
				});
				_.I(14, "span", 13);
				_.R(15);
				_.H();
				_.F(16, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.UP());
				});
				_.I(17, "span", 13);
				_.R(18, " Start building ");
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(), _.C(a.title() ? 1 : -1), _.y(3), _.Bh(a.slots()), _.y(6), _.Bh(a.segments()), _.y(4), _.E("iconName", a.Qk() ? a.qf.Zf : a.qf.Ae), _.y(), _.S(" ", a.Qk() ? "Copied!" : "Copy prompt", " "), _.y(2), _.E("iconName", a.qf.Us));
		}, cpe = function(a) {
			a & 1 && (_.F(0, "p", 18), _.R(1), _.H());
			a & 2 && (a = _.K(3), _.y(), _.U(a.description()));
		}, dpe = function(a) {
			a & 1 && (_.F(0, "div", 7)(1, "h3", 17), _.R(2), _.H(), _.B(3, cpe, 2, 1, "p", 18), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.title()), _.y(), _.C(a.description() ? 3 : -1));
		}, epe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 35)(1, "label", 40);
				_.R(2);
				_.H();
				_.F(3, "input", 41, 0);
				_.J("input", function(d) {
					var e = _.q(c).V, f = _.K(2);
					return _.t(Eoe(f, e.key, d.target.value));
				});
				_.H()();
			}
			a & 2 && (a = b.V, _.y(2), _.U(a.placeholder), _.y(), _.E("placeholder", a.placeholder));
		}, fpe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.y(), _.U(a.text));
		}, gpe = function(a) {
			a & 1 && (_.F(0, "span", 42), _.R(1), _.H());
			if (a & 2) {
				a = _.K().V;
				let b = _.K(2);
				_.y();
				_.U(b.Bpa()[a.slotKey] || b.lE(a.slotKey));
			}
		}, hpe = function(a, b) {
			a & 1 && (_.B(0, fpe, 2, 1, "span"), _.B(1, gpe, 2, 1, "span", 42));
			a & 2 && (a = b.V, _.C(a.text != null ? 0 : -1), _.y(), _.C(a.slotKey ? 1 : -1));
		}, ipe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 5);
				_.B(1, dpe, 4, 2, "div", 7);
				_.F(2, "div", 43)(3, "div", 44)(4, "div", 45);
				_.R(5, "Customize your template");
				_.H();
				_.Ah(6, epe, 5, 2, "div", 35, ape);
				_.H();
				_.F(8, "div", 46)(9, "div", 47)(10, "div", 48)(11, "span", 37);
				_.R(12, "prompt preview");
				_.H();
				_.F(13, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.WA());
				});
				_.I(14, "span", 13);
				_.R(15);
				_.H()();
				_.F(16, "div", 49)(17, "div", 38);
				_.Ah(18, hpe, 2, 2, null, null, _.yh);
				_.H()();
				_.F(20, "div", 50)(21, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.UP());
				});
				_.I(22, "span", 13);
				_.R(23, " Start building ");
				_.H()()()()()();
			}
			a & 2 && (a = _.K(), _.y(), _.C(a.title() ? 1 : -1), _.y(5), _.Bh(a.slots()), _.y(8), _.E("iconName", a.Qk() ? a.qf.Zf : a.qf.Ae), _.y(), _.S(" ", a.Qk() ? "Copied!" : "Copy", " "), _.y(3), _.Bh(a.segments()), _.y(4), _.E("iconName", a.qf.Us));
		}, jpe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 6)(1, "button", 51);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.H();
				_.F(2, "div", 52)(3, "button", 53);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.I(4, "span", 13);
				_.H();
				_.F(5, "div", 54);
				_.I(6, "span", 13);
				_.H();
				_.F(7, "h3", 55);
				_.R(8, "Almost there!");
				_.H();
				_.F(9, "p", 56);
				_.R(10, " Sign in with your Google account to start remixing. Your customized prompt is saved — you'll pick up right where you left off. ");
				_.H();
				_.F(11, "div", 57)(12, "button", 58);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.GQ());
				});
				_.R(13, " Maybe later ");
				_.H();
				_.F(14, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(c.uxa());
				});
				_.I(15, "span", 13);
				_.R(16, " Sign in & start building ");
				_.H()()()();
			}
			a & 2 && (a = _.K(), _.y(4), _.E("iconName", a.qf.ac), _.y(2), _.E("iconName", a.qf.Us), _.y(9), _.E("iconName", a.qf.ZJ));
		}, kpe = function(a) {
			a & 1 && (_.F(0, "h3", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.label()));
		}, lpe = function(a, b) {
			a & 1 && (_.F(0, "a", 3), _.I(1, "span", 4), _.F(2, "div", 5)(3, "span", 6), _.R(4), _.H(), _.F(5, "span", 7), _.R(6), _.H()(), _.I(7, "span", 8), _.H());
			a & 2 && (a = b.V, b = _.K(), _.E("href", a.url || "", _.rg), _.y(), _.E("iconName", a.iconName), _.y(3), _.U(a.title), _.y(2), _.U(a.subtitle), _.y(), _.E("iconName", b.S.DV));
		}, mpe = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(), _.E("src", a.authorAvatarUrl(), _.rg)("alt", a.authorName()));
		}, npe = function(a) {
			a & 1 && (_.F(0, "div", 4), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.authorName().charAt(0), " "));
		}, ope = function(a) {
			a & 1 && _.I(0, "img", 14);
			a & 2 && (a = _.K(), _.E("src", a.mediaImageUrl(), _.rg));
		}, ppe = function(a) {
			a & 1 && _.I(0, "img", 3);
			a & 2 && (a = _.K(), _.E("src", a.authorAvatarUrl(), _.rg)("alt", a.authorName()));
		}, qpe = function(a) {
			a & 1 && (_.F(0, "div", 4), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.S(" ", a.authorName().charAt(0), " "));
		}, rpe = function(a) {
			a & 1 && _.I(0, "img", 13);
			a & 2 && (a = _.K(), _.E("src", a.mediaImageUrl(), _.rg));
		}, spe = function(a) {
			a & 1 && (_.Fh(0, "img", 4), _.Dh(1, "button", 5), _.Ee(), _.Dh(2, "svg", 6), _.Fh(3, "path", 7)(4, "path", 8), _.Eh()());
			a & 2 && (a = _.K(), _.Ch("src", a.thumbnailUrl, _.rg)("alt", a.title()), _.y(), _.wh("aria-label", "Play " + a.title()));
		}, tpe = function(a) {
			a & 1 && _.Fh(0, "iframe", 2);
			a & 2 && (a = _.K(), _.Ch("src", a.L6, _.sg)("title", a.title()));
		}, upe = function(a) {
			a & 1 && (_.Dh(0, "p", 3), _.R(1), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.U(a.caption()));
		}, vpe = function(a) {
			a & 1 && (_.F(0, "h2", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.heading()));
		}, wpe = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-x", 4);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("authorName", a.content.authorName)("authorHandle", a.content.authorHandle)("authorAvatarUrl", a.content.authorAvatarUrl)("tweetText", a.content.tweetText)("timestamp", a.content.timestamp)("likeCount", a.content.likeCount)("retweetCount", a.content.retweetCount)("replyCount", a.content.replyCount)("mediaImageUrl", (b = a.content.mediaImageUrl) != null ? b : "");
			}
		}, xpe = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-youtube", 5);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("videoId", a.content.videoId)("title", a.content.title)("startTime", (b = a.content.startTime) != null ? b : 0)("caption", (c = a.content.caption) != null ? c : "");
			}
		}, ype = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-linkedin", 6);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("authorName", a.content.authorName)("authorTitle", a.content.authorTitle)("authorAvatarUrl", a.content.authorAvatarUrl)("postText", a.content.postText)("timestamp", a.content.timestamp)("likeCount", a.content.likeCount)("commentCount", a.content.commentCount)("mediaImageUrl", (b = a.content.mediaImageUrl) != null ? b : "");
			}
		}, zpe = function(a, b) {
			a & 1 && (_.F(0, "div", 3), _.B(1, wpe, 1, 9, "ms-marketing-social-x", 4)(2, xpe, 1, 4, "ms-marketing-social-youtube", 5)(3, ype, 1, 8, "ms-marketing-social-linkedin", 6), _.H());
			if (a & 2) {
				let c;
				a = b.V;
				_.y();
				_.C((c = a.type) === "social_x" ? 1 : c === "social_youtube" ? 2 : c === "social_linkedin" ? 3 : -1);
			}
		}, Ape = function(a) {
			a & 1 && (_.F(0, "div", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionLabel()));
		}, Bpe = function(a) {
			a & 1 && (_.F(0, "h2", 2), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionTitle()));
		}, Cpe = function(a, b) {
			a & 1 && (_.F(0, "li"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, Dpe = function(a) {
			a & 1 && (_.F(0, "ul", 12), _.Ah(1, Cpe, 2, 1, "li", null, _.zh), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.Bh(a.bullets));
		}, Epe = function(a, b) {
			a & 1 && (_.F(0, "a", 16), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.wh("target", a.external ? "_blank" : null)("rel", a.external ? "noopener noreferrer" : null), _.y(), _.U(a.text));
		}, Gpe = function(a) {
			a & 1 && (_.F(0, "div", 13), _.Ah(1, Epe, 2, 4, "a", 16, Fpe), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.Bh(a.links));
		}, Hpe = function(a) {
			a & 1 && _.I(0, "img", 14);
			if (a & 2) {
				a = _.K(2).V;
				let b;
				_.E("src", a.imageSrc, _.rg)("alt", (b = a.imageAlt) != null ? b : "");
			}
		}, Ipe = function(a) {
			a & 1 && (_.F(0, "div", 15), _.I(1, "span", 17), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.qf.cq));
		}, Jpe = function(a) {
			a & 1 && (_.F(0, "div", 10)(1, "p", 11), _.R(2), _.H(), _.B(3, Dpe, 3, 0, "ul", 12), _.B(4, Gpe, 3, 0, "div", 13), _.B(5, Hpe, 1, 2, "img", 14)(6, Ipe, 2, 1, "div", 15), _.H());
			a & 2 && (a = _.K().V, _.y(2), _.U(a.description), _.y(), _.C(a.bullets ? 3 : -1), _.y(), _.C(a.links ? 4 : -1), _.y(), _.C(a.imageSrc ? 5 : 6));
		}, Kpe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "div", 5)(1, "button", 6);
				_.J("click", function() {
					var d = _.q(c).jb, e = _.K();
					e.lg.set(e.lg() === d ? -1 : d);
					return _.t();
				});
				_.F(2, "div", 7);
				_.R(3);
				_.H();
				_.F(4, "h3", 8);
				_.R(5);
				_.H();
				_.I(6, "span", 9);
				_.H();
				_.B(7, Jpe, 7, 4, "div", 10);
				_.H();
			}
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.P("active", c.isActive(b));
				_.y(3);
				_.U(c.zY(b));
				_.y(2);
				_.U(a.title);
				_.y();
				_.E("iconName", c.qf.Ck);
				_.y();
				_.C(c.isActive(b) ? 7 : -1);
			}
		}, Lpe = function(a) {
			a & 1 && (_.F(0, "div", 0), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionLabel()));
		}, Mpe = function(a) {
			a & 1 && (_.F(0, "h2", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionTitle()));
		}, Npe = function(a, b) {
			a & 1 && (_.F(0, "li"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, Ope = function(a) {
			a & 1 && (_.F(0, "ul", 7), _.Ah(1, Npe, 2, 1, "li", null, _.zh), _.H());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.bullets));
		}, Ppe = function(a, b) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.wh("target", a.external ? "_blank" : null)("rel", a.external ? "noopener noreferrer" : null), _.y(), _.U(a.text));
		}, Rpe = function(a) {
			a & 1 && (_.F(0, "div", 8), _.Ah(1, Ppe, 2, 4, "a", 11, Qpe), _.H());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.links));
		}, Spe = function(a) {
			a & 1 && (_.F(0, "div", 12), _.R(1), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.U(a.promptLabel));
		}, Tpe = function(a) {
			a & 1 && (_.F(0, "div", 9), _.B(1, Spe, 2, 1, "div", 12), _.F(2, "span", 13), _.R(3), _.H()());
			a & 2 && (a = _.K().V, _.y(), _.C(a.promptLabel ? 1 : -1), _.y(2), _.U(a.promptText));
		}, Upe = function(a) {
			a & 1 && _.I(0, "span", 14);
			a & 2 && (a = _.K(2).V, _.E("iconName", a.chipIcon));
		}, Vpe = function(a) {
			a & 1 && (_.F(0, "span", 10), _.B(1, Upe, 1, 1, "span", 14), _.R(2), _.H());
			a & 2 && (a = _.K().V, _.y(), _.C(a.chipIcon ? 1 : -1), _.y(), _.S(" ", a.chipLabel, " "));
		}, Wpe = function(a, b) {
			a & 1 && (_.F(0, "div", 2)(1, "div", 3), _.R(2), _.H(), _.F(3, "div", 4)(4, "h3", 5), _.R(5), _.H(), _.F(6, "p", 6), _.R(7), _.H(), _.B(8, Ope, 3, 0, "ul", 7), _.B(9, Rpe, 3, 0, "div", 8), _.B(10, Tpe, 4, 2, "div", 9), _.B(11, Vpe, 3, 2, "span", 10), _.H()());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.y(2);
				_.U(c.zY(b));
				_.y(3);
				_.U(a.title);
				_.y(2);
				_.U(a.description);
				_.y();
				_.C(a.bullets ? 8 : -1);
				_.y();
				_.C(a.links ? 9 : -1);
				_.y();
				_.C(a.promptText ? 10 : -1);
				_.y();
				_.C(a.chipLabel ? 11 : -1);
			}
		}, Ype = function(a) {
			a & 1 && _.Ah(0, Wpe, 12, 7, "div", 2, Xpe);
			a & 2 && (a = _.K(), _.Bh(a.steps()));
		}, Zpe = function(a, b) {
			a & 1 && (_.F(0, "li"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, $pe = function(a) {
			a & 1 && (_.F(0, "ul", 7), _.Ah(1, Zpe, 2, 1, "li", null, _.zh), _.H());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.bullets));
		}, aqe = function(a, b) {
			a & 1 && (_.F(0, "a", 11), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.wh("target", a.external ? "_blank" : null)("rel", a.external ? "noopener noreferrer" : null), _.y(), _.U(a.text));
		}, bqe = function(a) {
			a & 1 && (_.F(0, "div", 8), _.Ah(1, aqe, 2, 4, "a", 11, Qpe), _.H());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.links));
		}, cqe = function(a, b) {
			a & 1 && (_.F(0, "div", 15)(1, "div", 3), _.R(2), _.H(), _.F(3, "div", 4)(4, "h3", 5), _.R(5), _.H(), _.F(6, "p", 6), _.R(7), _.H(), _.B(8, $pe, 3, 0, "ul", 7), _.B(9, bqe, 3, 0, "div", 8), _.H()());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K(2);
				_.y(2);
				_.U(c.zY(b));
				_.y(3);
				_.U(a.title);
				_.y(2);
				_.U(a.description);
				_.y();
				_.C(a.bullets ? 8 : -1);
				_.y();
				_.C(a.links ? 9 : -1);
			}
		}, dqe = function(a) {
			a & 1 && _.Ah(0, cqe, 10, 5, "div", 15, Xpe);
			a & 2 && (a = _.K(), _.Bh(a.steps()));
		}, eqe = function(a) {
			a & 1 && (_.F(0, "div", 1), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionLabel()));
		}, fqe = function(a) {
			a & 1 && (_.F(0, "h2", 2), _.R(1), _.H());
			a & 2 && (a = _.K(), _.y(), _.U(a.sectionTitle()));
		}, gqe = function(a) {
			a & 1 && (_.F(0, "a", 12), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.url, _.rg), _.wh("target", a.external ? "_blank" : null)("rel", a.external ? "noopener noreferrer" : null), _.y(), _.U(a.text));
		}, hqe = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K().V, _.S(" ", a.text, " "));
		}, iqe = function(a, b) {
			a & 1 && _.B(0, gqe, 2, 4, "a", 12)(1, hqe, 1, 1);
			a & 2 && _.C(b.V.url ? 0 : 1);
		}, jqe = function(a) {
			a & 1 && _.Ah(0, iqe, 2, 1, null, null, _.yh);
			a & 2 && (a = _.K().V, _.Bh(a.descriptionParts));
		}, kqe = function(a, b) {
			a & 1 && (_.F(0, "a", 12), _.R(1), _.H());
			a & 2 && (a = b.V, _.E("href", a.url, _.rg), _.wh("target", a.external ? "_blank" : null)("rel", a.external ? "noopener noreferrer" : null), _.y(), _.U(a.text));
		}, mqe = function(a) {
			a & 1 && (_.Ah(0, kqe, 2, 4, "a", 12, lqe), _.R(2));
			a & 2 && (a = _.K().V, _.Bh(a.links), _.y(2), _.S(" ", a.description, " "));
		}, nqe = function(a) {
			a & 1 && _.R(0);
			a & 2 && (a = _.K().V, _.S(" ", a.description, " "));
		}, oqe = function(a, b) {
			a & 1 && (_.F(0, "li"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, pqe = function(a) {
			a & 1 && (_.F(0, "ul", 10), _.Ah(1, oqe, 2, 1, "li", null, _.zh), _.H());
			a & 2 && (a = _.K().V, _.y(), _.Bh(a.bullets));
		}, qqe = function(a) {
			a & 1 && _.I(0, "img", 13);
			if (a & 2) {
				a = _.K(2).V;
				let b;
				_.E("src", a.imageSrc, _.rg)("alt", (b = a.imageAlt) != null ? b : "");
			}
		}, rqe = function(a) {
			a & 1 && (_.F(0, "div", 14), _.I(1, "span", 15), _.H());
			a & 2 && (a = _.K(3), _.y(), _.E("iconName", a.qf.cq));
		}, sqe = function(a) {
			a & 1 && (_.F(0, "div", 11), _.B(1, qqe, 1, 2, "img", 13)(2, rqe, 2, 1, "div", 14), _.H());
			a & 2 && (a = _.K().V, _.y(), _.C(a.imageSrc ? 1 : 2));
		}, tqe = function(a, b) {
			a & 1 && (_.F(0, "div", 4)(1, "div", 5)(2, "div", 6), _.R(3), _.H(), _.F(4, "div", 7)(5, "h3", 8), _.R(6), _.H(), _.F(7, "p", 9), _.B(8, jqe, 2, 0)(9, mqe, 3, 1)(10, nqe, 1, 1), _.H(), _.B(11, pqe, 3, 0, "ul", 10), _.H()(), _.B(12, sqe, 3, 1, "div", 11), _.H());
			if (a & 2) {
				a = b.V;
				b = b.jb;
				let c = _.K();
				_.P("reverse", !c.alignLeft() && b % 2 !== 0)("text-only", a.hideImage)("has-divider", c.showDividers());
				_.y(3);
				_.U(c.zY(b));
				_.y(3);
				_.U(a.title);
				_.y(2);
				_.C(a.descriptionParts ? 8 : a.links ? 9 : 10);
				_.y(3);
				_.C(a.bullets ? 11 : -1);
				_.y();
				_.C(a.hideImage ? -1 : 12);
			}
		}, uqe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 7);
				_.J("click", function() {
					var d = _.q(c).V;
					_.K(3).kq.set(d.language);
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(3), _.P("active", a.language === b.kq()), _.y(), _.U(a.language));
		}, vqe = function(a) {
			a & 1 && (_.F(0, "div", 4), _.Ah(1, uqe, 2, 3, "button", 6, j8), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.tabs()));
		}, wqe = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, yqe = function(a, b) {
			a & 1 && (_.F(0, "div", 8)(1, "div", 9)(2, "div", 10), _.Ah(3, wqe, 2, 1, "span", null, _.zh), _.H(), _.F(5, "pre"), _.I(6, "code", 11), _.H()()());
			a & 2 && (a = b.V, b = _.K(2), _.P("active", a.language === b.kq()), _.y(3), _.Bh(b.sAa(a.code)), _.y(3), _.E("innerHTML", xqe(b, a.code, a.language), _.qg));
		}, Aqe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 0)(1, "span", 1);
				_.R(2);
				_.H();
				_.F(3, "button", 2);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(zqe(c));
				});
				_.I(4, "span", 3);
				_.R(5);
				_.H()();
				_.B(6, vqe, 3, 0, "div", 4);
				_.Ah(7, yqe, 7, 3, "div", 5, j8);
			}
			if (a & 2) {
				let b;
				a = _.K();
				_.y(2);
				let c;
				_.U((c = (b = a.tabs()[0]) == null ? null : b.language) != null ? c : "code");
				_.y();
				_.P("copied", a.Qk());
				_.y();
				_.E("iconName", a.qf.Ae);
				_.y();
				_.S(" ", a.Qk() ? "Copied!" : "Copy", " ");
				_.y();
				_.C(a.tabs().length > 1 ? 6 : -1);
				_.y();
				_.Bh(a.tabs());
			}
		}, Bqe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 17);
				_.J("click", function() {
					var d = _.q(c).V;
					_.K(3).kq.set(d.language);
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(3), _.P("active", a.language === b.kq()), _.y(), _.U(a.language));
		}, Cqe = function(a) {
			a & 1 && (_.F(0, "div", 15), _.Ah(1, Bqe, 2, 3, "button", 16, j8), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.tabs()));
		}, Dqe = function(a, b) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, Eqe = function(a, b) {
			a & 1 && (_.F(0, "div", 8)(1, "div", 9)(2, "div", 10), _.Ah(3, Dqe, 2, 1, "span", null, _.zh), _.H(), _.F(5, "pre"), _.I(6, "code", 11), _.H()()());
			a & 2 && (a = b.V, b = _.K(2), _.P("active", a.language === b.kq()), _.y(3), _.Bh(b.sAa(a.code)), _.y(3), _.E("innerHTML", xqe(b, a.code, a.language), _.qg));
		}, Fqe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "div", 12)(1, "span", 13);
				_.R(2);
				_.H();
				_.F(3, "button", 14);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(zqe(c));
				});
				_.I(4, "span", 3);
				_.R(5);
				_.H()();
				_.B(6, Cqe, 3, 0, "div", 15);
				_.Ah(7, Eqe, 7, 3, "div", 5, j8);
			}
			if (a & 2) {
				let b;
				a = _.K();
				_.y(2);
				let c;
				_.U((c = (b = a.tabs()[0]) == null ? null : b.language) != null ? c : "code");
				_.y();
				_.P("copied", a.Qk());
				_.y();
				_.E("iconName", a.qf.Ae);
				_.y();
				_.S(" ", a.Qk() ? "Copied!" : "Copy", " ");
				_.y();
				_.C(a.tabs().length > 1 ? 6 : -1);
				_.y();
				_.Bh(a.tabs());
			}
		}, Gqe = function(a, b) {
			if (a & 1) {
				let c = _.n();
				_.F(0, "button", 22);
				_.J("click", function() {
					var d = _.q(c).V;
					_.K(3).kq.set(d.language);
					return _.t();
				});
				_.R(1);
				_.H();
			}
			a & 2 && (a = b.V, b = _.K(3), _.P("active", a.language === b.kq()), _.y(), _.U(a.language));
		}, Hqe = function(a) {
			a & 1 && (_.F(0, "div", 20), _.Ah(1, Gqe, 2, 3, "button", 21, j8), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.tabs()));
		}, Iqe = function(a, b) {
			a & 1 && (_.F(0, "div", 8)(1, "pre"), _.I(2, "code", 11), _.H()());
			a & 2 && (a = b.V, b = _.K(2), _.P("active", a.language === b.kq()), _.y(2), _.E("innerHTML", xqe(b, a.code, a.language), _.qg));
		}, Jqe = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "span", 18);
				_.R(1);
				_.H();
				_.F(2, "button", 19);
				_.J("click", function() {
					_.q(b);
					var c = _.K();
					return _.t(zqe(c));
				});
				_.I(3, "span", 3);
				_.H();
				_.B(4, Hqe, 3, 0, "div", 20);
				_.Ah(5, Iqe, 3, 3, "div", 5, j8);
			}
			if (a & 2) {
				let b;
				a = _.K();
				_.y();
				let c;
				_.U((c = (b = a.tabs()[0]) == null ? null : b.language) != null ? c : "code");
				_.y();
				_.P("copied", a.Qk());
				_.y();
				_.E("iconName", a.qf.Ae);
				_.y();
				_.C(a.tabs().length > 1 ? 4 : -1);
				_.y();
				_.Bh(a.tabs());
			}
		}, Kqe = function(a) {
			a & 1 && (_.Dh(0, "h3", 1), _.R(1), _.Eh());
			a & 2 && (a = _.K(), _.y(), _.U(a.header()));
		}, Lqe = function(a, b) {
			a & 1 && (_.Dh(0, "th"), _.R(1), _.Eh());
			a & 2 && (a = b.V, _.y(), _.U(a));
		}, Mqe = function(a, b) {
			a & 1 && (_.Dh(0, "tr")(1, "td"), _.R(2), _.Eh(), _.Dh(3, "td")(4, "span", 4), _.R(5), _.Eh()(), _.Dh(6, "td", 5), _.R(7), _.Eh(), _.Fh(8, "td", 6), _.Eh());
			a & 2 && (a = b.V, _.y(2), _.U(a.tool), _.y(2), _.P("pill-grey", !a.default), _.y(), _.U(a.type), _.y(2), _.U(a.default ? "✅" : "—"), _.y(), _.Ch("innerHTML", a.description, _.qg));
		}, Nqe = function(a) {
			a & 1 && (_.F(0, "div", 1)(1, "h1"), _.R(2, "Page not found"), _.H(), _.F(3, "p"), _.R(4, "This page doesn't exist."), _.H()());
		}, Oqe = function(a) {
			a & 1 && (_.F(0, "a", 6), _.R(1), _.H());
			a & 2 && (a = _.K().V, _.E("href", a.url, _.rg), _.y(), _.U(a.label));
		}, Pqe = function(a) {
			a & 1 && (_.F(0, "span"), _.R(1), _.H());
			if (a & 2) {
				a = _.K();
				let b = a.V;
				_.P("breadcrumb-current", a.jb === a.lj - 1);
				_.y();
				_.U(b.label);
			}
		}, Qqe = function(a) {
			a & 1 && (_.F(0, "span", 8), _.R(1, "/"), _.H());
		}, Rqe = function(a, b) {
			a & 1 && (_.F(0, "li", 5), _.B(1, Oqe, 2, 2, "a", 6)(2, Pqe, 2, 3, "span", 7), _.B(3, Qqe, 2, 0, "span", 8), _.H());
			if (a & 2) {
				a = b.V;
				let c = b.jb;
				b = b.lj;
				_.y();
				_.C(c !== b - 1 && a.url ? 1 : 2);
				_.y(2);
				_.C(c !== b - 1 ? 3 : -1);
			}
		}, Tqe = function(a) {
			a & 1 && (_.F(0, "div", 2)(1, "ol", 4), _.Ah(2, Rqe, 4, 2, "li", 5, Sqe), _.H()());
			a & 2 && (a = _.K(2), _.y(2), _.Bh(a.breadcrumbs));
		}, Uqe = function(a, b) {
			a & 1 && (_.F(0, "div", 10), _.Ih(1, 12), _.H());
			a & 2 && (a = b.V, _.K(3), b = _.O(4), _.wh("data-module-type", a.type), _.y(), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(3, k8, a)));
		}, Vqe = function(a, b) {
			a & 1 && (_.F(0, "div", 10), _.Ih(1, 12), _.H());
			a & 2 && (a = b.V, _.K(3), b = _.O(4), _.wh("data-module-type", a.type), _.y(), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(3, k8, a)));
		}, Wqe = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(4), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, Xqe = function(a) {
			a & 1 && (_.F(0, "div", 11), _.Ah(1, Wqe, 1, 4, "ng-container", 12, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.H4));
		}, Yqe = function(a) {
			a & 1 && (_.F(0, "div", 9), _.Ah(1, Uqe, 2, 5, "div", 10, _.yh), _.Ah(3, Vqe, 2, 5, "div", 10, _.yh), _.H(), _.B(5, Xqe, 3, 0, "div", 11));
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.gka), _.y(2), _.Bh(a.hka), _.y(2), _.C(a.H4.length > 0 ? 5 : -1));
		}, Zqe = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(4), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, $qe = function(a) {
			a & 1 && (_.F(0, "div", 13), _.Ah(1, Zqe, 1, 4, "ng-container", 12, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.hka));
		}, are = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(3), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, bre = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(4), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, cre = function(a) {
			a & 1 && (_.F(0, "aside", 16), _.Ah(1, bre, 1, 4, "ng-container", 12, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.bca));
		}, dre = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(4), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, ere = function(a) {
			a & 1 && (_.F(0, "div", 17), _.Ah(1, dre, 1, 4, "ng-container", 12, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.Yia));
		}, fre = function(a, b) {
			a & 1 && _.Ih(0, 12);
			a & 2 && (a = b.V, _.K(4), b = _.O(4), _.E("ngTemplateOutlet", b)("ngTemplateOutletContext", _.Ai(2, k8, a)));
		}, gre = function(a) {
			a & 1 && (_.F(0, "div", 18), _.Ah(1, fre, 1, 4, "ng-container", 12, _.yh), _.H());
			a & 2 && (a = _.K(3), _.y(), _.Bh(a.gka));
		}, hre = function(a) {
			a & 1 && (_.B(0, $qe, 3, 0, "div", 13), _.F(1, "div", 14)(2, "main", 15), _.Ah(3, are, 1, 4, "ng-container", 12, _.yh), _.H(), _.B(5, cre, 3, 0, "aside", 16), _.H(), _.B(6, ere, 3, 0, "div", 17), _.B(7, gre, 3, 0, "div", 18));
			a & 2 && (a = _.K(2), _.C(a.hka.length > 0 ? 0 : -1), _.y(), _.P("has-sidebar", a.bca.length > 0), _.y(2), _.Bh(a.H4), _.y(2), _.C(a.bca.length > 0 ? 5 : -1), _.y(), _.C(a.Yia.length > 0 ? 6 : -1), _.y(), _.C(a.gka.length > 0 ? 7 : -1));
		}, ire = function(a) {
			a & 1 && (_.B(0, Tqe, 4, 0, "div", 2), _.B(1, Yqe, 6, 1), _.B(2, hre, 8, 6), _.I(3, "ms-marketing-footer", 3));
			a & 2 && (a = _.K(), _.C(a.breadcrumbs.length > 0 ? 0 : -1), _.y(), _.C(a.layout === "split-hero" ? 1 : -1), _.y(), _.C(a.layout === "linear" || a.layout === "blog-3col" ? 2 : -1));
		}, kre = function(a) {
			a & 1 && _.I(0, "ms-marketing-article-header", 19);
			if (a & 2) {
				var b = _.K().V, c, d, e, f;
				a = _.E("label", (c = b.content.label) != null ? c : "")("labelDotColor", (d = b.content.labelDotColor) != null ? d : "")("labelIcon", (e = b.content.labelIcon) != null ? e : "")("headline", b.content.headline)("subhead", (f = b.content.subhead) != null ? f : "")("breadcrumb", _.zi(7, jre));
				c = b.content.author == null ? null : b.content.author.name;
				d = b.content.author == null ? null : b.content.author.initials;
				e = b.content.buildTime;
				f = b.content.readTime;
				var g = b.content.publishDate;
				b = b.content.rating;
				let k = _.Ae() + 8, p = _.n(), r = _.Aia(p, k, c, d, e, f);
				c = _.Of(p, k + 4, g, b) || r ? _.Lf(p, k + 6, {
					authorName: c,
					authorInitials: d,
					buildTime: e,
					readTime: f,
					publishDate: g,
					rating: b
				}) : p[k + 6];
				a("meta", c);
			}
		}, lre = function(a) {
			a & 1 && _.I(0, "ms-marketing-step-list", 20);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("sectionLabel", (b = a.content.sectionLabel) != null ? b : "")("sectionTitle", (c = a.content.sectionTitle) != null ? c : "")("steps", a.content.steps);
			}
		}, mre = function(a) {
			a & 1 && _.I(0, "ms-marketing-cta-banner", 21);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e, f;
				_.E("headline", a.content.headline)("description", (b = a.content.description) != null ? b : "")("primaryCtaText", a.content.primaryCtaText)("primaryCtaUrl", a.content.primaryCtaUrl)("secondaryCtaText", (c = a.content.secondaryCtaText) != null ? c : "")("secondaryCtaUrl", (d = a.content.secondaryCtaUrl) != null ? d : "")("variant", (e = a.content.variant) != null ? e : "a")("ctaIcon", (f = a.content.ctaIcon) != null ? f : "");
			}
		}, nre = function(a) {
			a & 1 && _.I(0, "ms-marketing-applet-frame", 22);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e, f, g, k;
				_.E("imageSrc", a.content.imageSrc)("imageAlt", (b = a.content.imageAlt) != null ? b : "")("playText", (c = a.content.playText) != null ? c : "")("playUrl", (d = a.content.playUrl) != null ? d : "")("remixText", (e = a.content.remixText) != null ? e : "")("remixUrl", (f = a.content.remixUrl) != null ? f : "")("techChips", (g = a.content.techChips) != null ? g : _.zi(8, jre))("tagline", (k = a.content.tagline) != null ? k : "");
			}
		}, ore = function(a) {
			a & 1 && _.I(0, "ms-marketing-prereqs-checklist", 23);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("label", (b = a.content.label) != null ? b : "Before you start")("items", a.content.items);
			}
		}, pre = function(a) {
			a & 1 && _.I(0, "ms-marketing-related-guides", 24);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("label", (b = a.content.label) != null ? b : "Related guides")("guides", a.content.guides);
			}
		}, qre = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-x", 25);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("authorName", a.content.authorName)("authorHandle", a.content.authorHandle)("authorAvatarUrl", a.content.authorAvatarUrl)("tweetText", a.content.tweetText)("timestamp", a.content.timestamp)("likeCount", a.content.likeCount)("retweetCount", a.content.retweetCount)("replyCount", a.content.replyCount)("mediaImageUrl", (b = a.content.mediaImageUrl) != null ? b : "");
			}
		}, rre = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-youtube", 26);
			if (a & 2) {
				a = _.K().V;
				let b, c, d;
				_.E("videoId", a.content.videoId)("title", a.content.title)("startTime", (b = a.content.startTime) != null ? b : 0)("caption", (c = a.content.caption) != null ? c : "")("variant", (d = a.content.variant) != null ? d : "inline");
			}
		}, sre = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-linkedin", 27);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("authorName", a.content.authorName)("authorTitle", a.content.authorTitle)("authorAvatarUrl", a.content.authorAvatarUrl)("postText", a.content.postText)("timestamp", a.content.timestamp)("likeCount", a.content.likeCount)("commentCount", a.content.commentCount)("mediaImageUrl", (b = a.content.mediaImageUrl) != null ? b : "");
			}
		}, tre = function(a) {
			a & 1 && _.I(0, "ms-marketing-social-gallery", 28);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("heading", (b = a.content.heading) != null ? b : "")("items", a.content.items);
			}
		}, ure = function(a) {
			a & 1 && _.I(0, "ms-marketing-step-zigzag", 29);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e, f;
				_.E("sectionLabel", (b = a.content.sectionLabel) != null ? b : "")("sectionTitle", (c = a.content.sectionTitle) != null ? c : "")("steps", a.content.steps)("startIndex", (d = a.content.startIndex) != null ? d : 0)("alignLeft", (e = a.content.alignLeft) != null ? e : !1)("showDividers", (f = a.content.showDividers) != null ? f : !1);
			}
		}, vre = function(a) {
			a & 1 && _.I(0, "ms-marketing-step-accordion", 30);
			if (a & 2) {
				a = _.K().V;
				let b, c, d;
				_.E("sectionLabel", (b = a.content.sectionLabel) != null ? b : "")("sectionTitle", (c = a.content.sectionTitle) != null ? c : "")("steps", a.content.steps)("startIndex", (d = a.content.startIndex) != null ? d : 0);
			}
		}, wre = function(a) {
			a & 1 && _.I(0, "ms-marketing-body-text", 31);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("sections", a.content.sections)("variant", (b = a.content.variant) != null ? b : "a")("isLead", (c = a.content.isLead) != null ? c : !1);
			}
		}, xre = function(a) {
			a & 1 && _.I(0, "ms-marketing-author-byline", 32);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e, f, g, k;
				_.E("authorName", a.content.authorName)("authorInitials", a.content.authorInitials)("authorRole", (b = a.content.authorRole) != null ? b : "")("avatarColor", (c = a.content.avatarColor) != null ? c : "")("avatarUrl", (d = a.content.avatarUrl) != null ? d : "")("authorUrl", (e = a.content.authorUrl) != null ? e : "")("xHandle", (f = a.content.xHandle) != null ? f : "")("publishDate", (g = a.content.publishDate) != null ? g : "")("readTime", (k = a.content.readTime) != null ? k : "");
			}
		}, yre = function(a) {
			a & 1 && _.I(0, "ms-marketing-article-meta", 33);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e, f, g, k, p;
				_.E("publishDate", (b = a.content.publishDate) != null ? b : "")("readTime", (c = a.content.readTime) != null ? c : "")("buildTime", (d = a.content.buildTime) != null ? d : "")("authorName", (e = a.content.authorName) != null ? e : "")("authorInitials", (f = a.content.authorInitials) != null ? f : "")("authorColor", (g = a.content.authorColor) != null ? g : "")("rating", (k = a.content.rating) != null ? k : "")("difficulty", (p = a.content.difficulty) != null ? p : "");
			}
		}, zre = function(a) {
			a & 1 && _.I(0, "ms-marketing-prompt-highlight", 34);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("quote", a.content.quote)("attribution", (b = a.content.attribution) != null ? b : "");
			}
		}, Are = function(a) {
			a & 1 && _.I(0, "ms-marketing-prompt-template", 40);
			if (a & 2) {
				a = _.K(2).V;
				let b, c, d;
				_.E("title", a.content.title)("description", (b = a.content.description) != null ? b : "")("slots", a.content.slots)("segments", a.content.segments)("bundledSlug", (c = a.content.bundledSlug) != null ? c : "")("variant", (d = a.content.variant) != null ? d : "a");
			}
		}, Bre = function(a) {
			a & 1 && _.B(0, Are, 1, 6, "ms-marketing-prompt-template", 40);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Cre = function(a) {
			a & 1 && _.I(0, "ms-marketing-callout-box", 35);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e;
				_.E("text", a.content.text)("calloutType", (b = a.content.calloutType) != null ? b : "info")("icon", (c = a.content.icon) != null ? c : "")("linkText", (d = a.content.linkText) != null ? d : "")("linkUrl", (e = a.content.linkUrl) != null ? e : "");
			}
		}, Dre = function(a) {
			a & 1 && _.I(0, "ms-marketing-features", 36);
			if (a & 2) {
				a = _.K().V;
				let b, c, d, e;
				_.E("layout", (b = a.content.layout) != null ? b : "inline")("variant", (c = a.content.variant) != null ? c : "numbered")("header", (d = a.content.header) != null ? d : "")("showStepLabels", (e = a.content.showStepLabels) != null ? e : !1)("items", a.content.items);
			}
		}, Ere = function(a) {
			a & 1 && _.I(0, "ms-marketing-media-embed", 37);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("mediaType", a.content.mediaType)("src", a.content.src)("alt", (b = a.content.alt) != null ? b : "")("caption", (c = a.content.caption) != null ? c : "");
			}
		}, Fre = function(a) {
			a & 1 && _.I(0, "ms-marketing-tabbed-code-block", 38);
			if (a & 2) {
				a = _.K().V;
				let b, c;
				_.E("tabs", a.content.tabs)("title", (b = a.content.title) != null ? b : "")("variant", (c = a.content.variant) != null ? c : "a");
			}
		}, Gre = function() {}, Hre = function(a) {
			a & 1 && (_.F(0, "div", 43), _.I(1, "span", 47), _.R(2), _.H());
			a & 2 && (a = _.K(3).V, _.y(), _.pi("background", a.content.j8.labelDotColor), _.y(), _.S(" ", a.content.j8.label, " "));
		}, Ire = function(a) {
			a & 1 && (_.F(0, "p", 45), _.R(1), _.H());
			a & 2 && (a = _.K(3).V, _.y(), _.U(a.content.j8.subhead));
		}, Jre = function(a) {
			a & 1 && (_.F(0, "div", 41)(1, "div", 42), _.B(2, Hre, 3, 3, "div", 43), _.F(3, "h2", 44), _.R(4), _.H(), _.B(5, Ire, 2, 1, "p", 45), _.H(), _.F(6, "div", 46), _.I(7, "ms-marketing-applet-frame", 22), _.H()());
			if (a & 2) {
				a = _.K(2).V;
				_.y(2);
				_.C(a.content.j8.label ? 2 : -1);
				_.y(2);
				_.U(a.content.j8.headline);
				_.y();
				_.C(a.content.j8.subhead ? 5 : -1);
				_.y(2);
				let b, c, d, e, f, g, k;
				_.E("imageSrc", a.content.ua.imageSrc)("imageAlt", (b = a.content.ua.imageAlt) != null ? b : "")("playText", (c = a.content.ua.playText) != null ? c : "")("playUrl", (d = a.content.ua.playUrl) != null ? d : "")("remixText", (e = a.content.ua.remixText) != null ? e : "")("remixUrl", (f = a.content.ua.remixUrl) != null ? f : "")("techChips", (g = a.content.ua.techChips) != null ? g : _.zi(11, jre))("tagline", (k = a.content.ua.tagline) != null ? k : "");
			}
		}, Kre = function(a) {
			a & 1 && _.B(0, Jre, 8, 12, "div", 41);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Lre = function(a) {
			a & 1 && _.I(0, "ms-marketing-faq", 39);
			if (a & 2) {
				a = _.K().V;
				let b;
				_.E("title", (b = a.content.title) != null ? b : "Frequently asked questions")("items", a.content.items);
			}
		}, Mre = function(a) {
			a & 1 && (_.F(0, "h3", 49), _.R(1), _.H());
			a & 2 && (a = _.K(3).V, _.y(), _.U(a.content.heading));
		}, Nre = function(a) {
			a & 1 && (_.F(0, "p", 50), _.R(1), _.H());
			a & 2 && (a = _.K(3).V, _.y(), _.U(a.content.description));
		}, Ore = function(a, b) {
			a & 1 && (_.F(0, "div", 52), _.I(1, "span", 53), _.F(2, "span", 54), _.R(3), _.H()());
			a & 2 && (a = b.V, _.y(), _.E("iconName", a), _.y(2), _.U(a));
		}, Pre = function(a) {
			a & 1 && (_.F(0, "section", 48), _.B(1, Mre, 2, 1, "h3", 49), _.B(2, Nre, 2, 1, "p", 50), _.F(3, "div", 51), _.Ah(4, Ore, 4, 2, "div", 52, _.zh), _.H()());
			a & 2 && (a = _.K(2).V, _.y(), _.C(a.content.heading ? 1 : -1), _.y(), _.C(a.content.description ? 2 : -1), _.y(2), _.Bh(a.content.Wk));
		}, Qre = function(a) {
			a & 1 && _.B(0, Pre, 6, 2, "section", 48);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Rre = function(a) {
			a & 1 && _.I(0, "ms-marketing-audio-player", 55);
			if (a & 2) {
				a = _.K(2).V;
				let b, c, d;
				_.E("title", (b = a.content.title) != null ? b : "")("sectionId", (c = a.content.sectionId) != null ? c : "")("samples", a.content.samples)("variant", (d = a.content.variant) != null ? d : "single");
			}
		}, Sre = function(a) {
			a & 1 && _.B(0, Rre, 1, 4, "ms-marketing-audio-player", 55);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Tre = function(a) {
			a & 1 && _.I(0, "ms-marketing-audio-showcase", 56);
			if (a & 2) {
				a = _.K(2).V;
				let b, c, d, e;
				_.E("sectionLabel", (b = a.content.sectionLabel) != null ? b : "")("sectionTitle", (c = a.content.sectionTitle) != null ? c : "")("introText", (d = a.content.introText) != null ? d : "")("examples", a.content.examples)("variant", (e = a.content.variant) != null ? e : "card");
			}
		}, Ure = function(a) {
			a & 1 && _.B(0, Tre, 1, 5, "ms-marketing-audio-showcase", 56);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Vre = function(a, b) {
			a & 1 && (_.F(0, "div", 58)(1, "div", 59), _.R(2), _.H(), _.F(3, "div", 60), _.R(4), _.H()());
			a & 2 && (a = b.V, _.y(2), _.U(a.value), _.y(2), _.U(a.label));
		}, Wre = function(a) {
			a & 1 && (_.F(0, "div", 57), _.Ah(1, Vre, 5, 2, "div", 58, Sqe), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.Bh(a.content.items));
		}, Xre = function(a) {
			a & 1 && _.B(0, Wre, 3, 0, "div", 57);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, Yre = function(a) {
			a & 1 && (_.F(0, "h3", 49), _.R(1), _.H());
			a & 2 && (a = _.K(3).V, _.y(), _.U(a.content.heading));
		}, Zre = function(a) {
			a & 1 && (_.F(0, "section", 61), _.B(1, Yre, 2, 1, "h3", 49), _.I(2, "div", 62), _.H());
			a & 2 && (a = _.K(2).V, _.y(), _.C(a.content.heading ? 1 : -1), _.y(), _.E("innerHTML", a.content.body, _.qg));
		}, $re = function(a) {
			a & 1 && _.B(0, Zre, 3, 2, "section", 61);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, ase = function(a) {
			a & 1 && _.I(0, "ms-marketing-model-card", 63);
			if (a & 2) {
				a = _.K(2).V;
				let b, c, d;
				_.E("label", a.content.label)("mono", (b = a.content.mono) != null ? b : !0)("labelColor", (c = a.content.labelColor) != null ? c : "#1a73e8")("subtitle", (d = a.content.subtitle) != null ? d : "");
			}
		}, bse = function(a) {
			a & 1 && _.B(0, ase, 1, 4, "ms-marketing-model-card", 63);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, cse = function(a) {
			a & 1 && _.I(0, "ms-marketing-table-box", 64);
			if (a & 2) {
				a = _.K(2).V;
				let b;
				_.E("header", (b = a.content.header) != null ? b : "")("columns", a.content.columns)("rows", a.content.rows);
			}
		}, dse = function(a) {
			a & 1 && _.B(0, cse, 1, 3, "ms-marketing-table-box", 64);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, ese = function(a) {
			a & 1 && _.I(0, "ms-marketing-applet-preview", 65);
			if (a & 2) {
				a = _.K(2).V;
				let b, c, d, e, f, g, k, p, r, v, w, D, G, L, N, Q, T;
				_.E("title", (b = a.content.title) != null ? b : "")("description", (c = a.content.description) != null ? c : "")("imageSrc", (d = a.content.imageSrc) != null ? d : "")("videoSrc", (e = a.content.videoSrc) != null ? e : "")("imageAlt", (f = a.content.imageAlt) != null ? f : "")("playText", (g = a.content.playText) != null ? g : "")("playUrl", (k = a.content.playUrl) != null ? k : "")("remixText", (p = a.content.remixText) != null ? p : "Remix to make it your own")("remixUrl", (r = a.content.remixUrl) != null ? r : "")("techChips", (v = a.content.techChips) != null ? v : _.zi(17, jre))("variant", (w = a.content.variant) != null ? w : "a")("headingSize", (D = a.content.headingSize) != null ? D : "md")("subtitle", (G = a.content.subtitle) != null ? G : "")("primaryBgColor", (L = a.content.vaa) != null ? L : "")("primaryTextColor", (N = a.content.waa) != null ? N : "")("secondaryBgColor", (Q = a.content.hba) != null ? Q : "")("secondaryTextColor", (T = a.content.JN) != null ? T : "");
			}
		}, fse = function(a) {
			a & 1 && _.B(0, ese, 1, 18, "ms-marketing-applet-preview", 65);
			a & 2 && (a = _.K(2), _.C(a.bd() ? 0 : -1));
		}, gse = function(a, b) {
			a & 1 && _.B(0, kre, 1, 15, "ms-marketing-article-header", 19)(1, lre, 1, 3, "ms-marketing-step-list", 20)(2, mre, 1, 8, "ms-marketing-cta-banner", 21)(3, nre, 1, 9, "ms-marketing-applet-frame", 22)(4, ore, 1, 2, "ms-marketing-prereqs-checklist", 23)(5, pre, 1, 2, "ms-marketing-related-guides", 24)(6, qre, 1, 9, "ms-marketing-social-x", 25)(7, rre, 1, 5, "ms-marketing-social-youtube", 26)(8, sre, 1, 8, "ms-marketing-social-linkedin", 27)(9, tre, 1, 2, "ms-marketing-social-gallery", 28)(10, ure, 1, 6, "ms-marketing-step-zigzag", 29)(11, vre, 1, 4, "ms-marketing-step-accordion", 30)(12, wre, 1, 3, "ms-marketing-body-text", 31)(13, xre, 1, 9, "ms-marketing-author-byline", 32)(14, yre, 1, 8, "ms-marketing-article-meta", 33)(15, zre, 1, 2, "ms-marketing-prompt-highlight", 34)(16, Bre, 1, 1)(17, Cre, 1, 5, "ms-marketing-callout-box", 35)(18, Dre, 1, 5, "ms-marketing-features", 36)(19, Ere, 1, 4, "ms-marketing-media-embed", 37)(20, Fre, 1, 3, "ms-marketing-tabbed-code-block", 38)(21, Gre, 0, 0)(22, Kre, 1, 1)(23, Lre, 1, 2, "ms-marketing-faq", 39)(24, Qre, 1, 1)(25, Sre, 1, 1)(26, Ure, 1, 1)(27, Xre, 1, 1)(28, $re, 1, 1)(29, bse, 1, 1)(30, dse, 1, 1)(31, fse, 1, 1);
			if (a & 2) {
				let c;
				_.C((c = b.V.type) === "hero" ? 0 : c === "steps" ? 1 : c === "cta" ? 2 : c === "applet_frame" ? 3 : c === "prereqs" ? 4 : c === "related_guides" ? 5 : c === "social_x" ? 6 : c === "social_youtube" ? 7 : c === "social_linkedin" ? 8 : c === "social_gallery" ? 9 : c === "step_zigzag" ? 10 : c === "step_accordion" ? 11 : c === "body_text" ? 12 : c === "author_byline" ? 13 : c === "article_meta" ? 14 : c === "prompt_highlight" ? 15 : c === "prompt_template" ? 16 : c === "callout_box" ? 17 : c === "features" ? 18 : c === "media" ? 19 : c === "tabbed_code_block" ? 20 : c === "gallery" ? 21 : c === "hero_applet_combo" ? 22 : c === "faq" ? 23 : c === "icon_grid" ? 24 : c === "audio_player" ? 25 : c === "audio_showcase" ? 26 : c === "stats" ? 27 : c === "text" ? 28 : c === "model_card" ? 29 : c === "table" ? 30 : c === "applet_preview" ? 31 : -1);
			}
		}, hse = new Map([["multimodal-rag-file-search", {
			title: "Multimodal RAG with the Gemini API File Search Tool | Google AI Studio",
			description: "A developer guide to creating stores, uploading documents and images, querying with grounded generation, and retrieving image citations using the Gemini API File Search tool."
		}]]), ise = new Map([["multimodal-rag-file-search", "780492e7-38a9-4ab1-a701-2ad665ad5853"]]), jse = new Map([
			["text-to-speech", () => _.x(function* () {
				yield (0, _.Sp)("PZLRqb");
				return _.hOa;
			})],
			["build-app-from-drawing", () => _.x(function* () {
				yield (0, _.Sp)("wXHOWc");
				return _.lOa;
			})],
			["gemini-tts-prompt-guide-with-tags", () => _.x(function* () {
				yield (0, _.Sp)("Elsn0b");
				return _.jOa;
			})],
			["deep-research-developer-guide", () => _.x(function* () {
				yield (0, _.Sp)("OBmsNc");
				return _.kOa;
			})],
			["starter-templates", () => _.x(function* () {
				yield (0, _.Sp)("ntsIL");
				return _.iOa;
			})]
		]);
		[...new Set([...Array.from(ise.keys()), ...Array.from(jse.keys())])];
		var kse = function(a, b) {
			var c;
			return (a = (c = a.manifest) == null ? void 0 : c.pages[b]) ? Object.assign({}, {
				title: a.title,
				description: a.description
			}, a.ogImage ? { ogImage: a.ogImage } : {}) : hse.get(b);
		}, lse = function(a) {
			return _.x(function* () {
				if (a.manifest) return a.manifest;
				if (a.A) return a.A;
				var b = Math.floor(Date.now() / 36e5);
				a.A = fetch(`https://www.gstatic.com/aistudio-static/editorial/pages/_manifest.json?v=${b}`).then((c) => c.ok ? c.json() : void 0).then((c) => a.manifest = c).catch(() => {
					a.A = void 0;
				});
				return a.A;
			});
		}, mse = function(a, b, c) {
			return _.x(function* () {
				var d = window.location.hostname === "aistudio.google.com";
				if (c && !d) {
					try {
						let p = new URL(c);
						var e = p.hostname === "localhost" || p.hostname === "googleplex.com" || p.hostname.endsWith(".googleplex.com") || p.hostname === "www.gstatic.com";
					} catch (p) {
						e = !1;
					}
					if (e) try {
						let p = yield fetch(c);
						if (!p.ok) throw Error("cj`" + p.status);
						let r = yield p.json(), v = hse.get(b);
						if (r && v) return Object.assign({}, r, { meta: v });
						if (r && !v) return Object.assign({}, r, { meta: {
							title: "Preview | Google AI Studio",
							description: ""
						} });
					} catch (p) {
						console.warn(`[Editorial] Failed to fetch preview from ${c}`, p);
					}
					else console.warn("[Editorial] Preview URL blocked: domain not allowed.");
				}
				var f, g, k;
				if (d = (k = (f = yield lse(a)) == null ? void 0 : (g = f.pages[b]) == null ? void 0 : g.contentId) != null ? k : ise.get(b)) try {
					let p = yield fetch(`https://www.gstatic.com/aistudio-static/editorial/pages/${d}.json`);
					if (!p.ok) throw Error("cj`" + p.status);
					let r = yield p.json(), v = kse(a, b);
					if (r && v) return Object.assign({}, r, { meta: v });
					r && !v && console.warn(`[Editorial] gstatic payload for "${b}" has no metadata. Falling back to compiled content.`);
				} catch (p) {}
				return (f = jse.get(b)) ? f() : void 0;
			});
		}, l8 = class {};
		l8.J = function(a) {
			return new (a || l8)();
		};
		l8.sa = _.Cd({
			token: l8,
			factory: l8.J,
			wa: "root"
		});
		var nse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.imageSrc = _.V("");
				this.videoSrc = _.V("");
				this.imageAlt = _.V("");
				this.playText = _.V("");
				this.playUrl = _.V("");
				this.remixText = _.V("Remix to make it your own");
				this.remixUrl = _.V("");
				this.techChips = _.Li([]);
				this.tagline = _.V("");
			}
		};
		nse.J = function(a) {
			return new (a || nse)();
		};
		nse.ka = _.u({
			type: nse,
			da: [["ms-marketing-applet-frame"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				imageSrc: [1, "imageSrc"],
				videoSrc: [1, "videoSrc"],
				imageAlt: [1, "imageAlt"],
				playText: [1, "playText"],
				playUrl: [1, "playUrl"],
				remixText: [1, "remixText"],
				remixUrl: [1, "remixUrl"],
				techChips: [1, "techChips"],
				tagline: [1, "tagline"]
			},
			ha: 8,
			ia: 4,
			la: [
				[1, "applet-frame"],
				[1, "image-container"],
				[
					"autoplay",
					"",
					"loop",
					"",
					"muted",
					"",
					"playsinline",
					"",
					1,
					"applet-video",
					3,
					"src",
					"poster"
				],
				[
					1,
					"applet-image",
					3,
					"src",
					"alt"
				],
				[1, "button-row"],
				[
					1,
					"play-btn",
					3,
					"href"
				],
				[
					1,
					"remix-btn",
					3,
					"href",
					"full-width"
				],
				[1, "meta-row"],
				[
					1,
					"play-icon",
					3,
					"iconName"
				],
				[
					1,
					"remix-btn",
					3,
					"href"
				],
				[
					1,
					"remix-icon",
					3,
					"iconName"
				],
				[1, "chips"],
				[3, "class"],
				[1, "tagline"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.B(2, Qle, 1, 2, "video", 2)(3, Rle, 1, 2, "img", 3), _.H(), _.F(4, "div", 4), _.B(5, Sle, 3, 3, "a", 5), _.B(6, Tle, 3, 5, "a", 6), _.H(), _.B(7, Wle, 5, 1, "div", 7), _.H());
				a & 2 && (_.y(2), _.C(b.videoSrc() ? 2 : b.imageSrc() ? 3 : -1), _.y(3), _.C(b.playText() ? 5 : -1), _.y(), _.C(b.remixText() ? 6 : -1), _.y(), _.C(b.techChips().length || b.tagline() ? 7 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .applet-frame[_ngcontent-%COMP%]{margin:64px 0 24px}.editorial-components-enabled[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]{border:1px solid #e9e9e9;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);background:-webkit-linear-gradient(315deg,#f5f5f5,#ececec);background:linear-gradient(135deg,#f5f5f5,#ececec)}.editorial-components-enabled[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]:empty{display:none}.editorial-components-enabled[_nghost-%COMP%]   .applet-image[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}.editorial-components-enabled[_nghost-%COMP%]   .applet-video[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}.editorial-components-enabled[_nghost-%COMP%]   .button-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-top:12px}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .remix-btn[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:12px 24px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:500;text-decoration:none;border:none;border-radius:8px;cursor:pointer;-webkit-transition:opacity .12s,box-shadow .12s;transition:opacity .12s,box-shadow .12s;-moz-box-sizing:border-box;box-sizing:border-box}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover, .editorial-components-enabled[_nghost-%COMP%]   .remix-btn[_ngcontent-%COMP%]:hover{opacity:.9}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]{background:#1a73e8;color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px rgba(26,115,232,.3)}.editorial-components-enabled[_nghost-%COMP%]   .remix-btn[_ngcontent-%COMP%]{background:#f1f3f4;color:#111;border:1px solid #e9e9e9}.editorial-components-enabled[_nghost-%COMP%]   .remix-btn[_ngcontent-%COMP%]:hover{background:#e8eaed}.editorial-components-enabled[_nghost-%COMP%]   .remix-btn.full-width[_ngcontent-%COMP%]{-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;width:100%;background:#1a73e8;color:#fff;border:none}.editorial-components-enabled[_nghost-%COMP%]   .remix-btn.full-width[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px rgba(26,115,232,.3)}.editorial-components-enabled[_nghost-%COMP%]   .play-icon[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .remix-icon[_ngcontent-%COMP%]{font-size:18px}.editorial-components-enabled[_nghost-%COMP%]   .meta-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:12px;gap:12px}.editorial-components-enabled[_nghost-%COMP%]   .chips[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .chip[_ngcontent-%COMP%]{display:inline-block;font-size:11px;font-weight:500;padding:4px 10px;border-radius:100px;line-height:1.4}.editorial-components-enabled[_nghost-%COMP%]   .chip-blue[_ngcontent-%COMP%]{background:#e8f0fe;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .chip-green[_ngcontent-%COMP%]{background:#e8f5e9;color:#0f9d58}.editorial-components-enabled[_nghost-%COMP%]   .tagline[_ngcontent-%COMP%]{font-size:12px;color:#999;white-space:nowrap}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]   .meta-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}}"]
		});
		var m8 = class {
			constructor() {
				this.S = _.Dk;
				this.F = _.m(_.Op);
				this.bd = () => this.F.getFlag(_.Pp);
				this.H = _.m(_.Qu);
				this.visible = _.M(!1);
				this.A = "";
				this.a5a = _.V("Almost there!");
				this.Z4a = _.V("Sign in with your Google account to start building. Your progress is saved — you’ll pick up right where you left off.");
				this.bXa = _.V("Sign in & start building");
			}
			VM(a) {
				this.H.isSignedIn ? (a = _.jd(a)) && _.rd(window, a, "_blank") : (this.A = a, this.visible.set(!0));
			}
			uxa() {
				this.visible.set(!1);
				var a = _.jd(this.A);
				a && _.rd(window, a, "_blank");
			}
			GQ() {
				this.visible.set(!1);
				this.A = "";
			}
		};
		m8.J = function(a) {
			return new (a || m8)();
		};
		m8.ka = _.u({
			type: m8,
			da: [["ms-marketing-sign-in-modal"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				a5a: [1, "modalTitle"],
				Z4a: [1, "modalBody"],
				bXa: [1, "confirmText"]
			},
			ha: 1,
			ia: 1,
			la: [
				[
					"role",
					"dialog",
					"aria-modal",
					"true",
					"aria-label",
					"Sign in required",
					1,
					"signin-modal-overlay"
				],
				[
					"aria-label",
					"Close dialog",
					1,
					"signin-modal-backdrop",
					3,
					"click"
				],
				[1, "signin-modal"],
				[
					1,
					"signin-modal-close",
					3,
					"click"
				],
				[3, "iconName"],
				[1, "signin-modal-icon"],
				[1, "signin-modal-title"],
				[1, "signin-modal-body"],
				[1, "signin-modal-actions"],
				[
					1,
					"signin-modal-secondary",
					3,
					"click"
				],
				[
					1,
					"signin-modal-confirm",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && _.B(0, Xle, 17, 6, "div", 0);
				a & 2 && _.C(b.visible() ? 0 : -1);
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000;-webkit-animation:_ngcontent-%COMP%_signin-fade-in .2s ease;animation:_ngcontent-%COMP%_signin-fade-in .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.5);border:none;cursor:default}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:40px;max-width:420px;width:calc(100% - 48px);text-align:center;position:relative;z-index:1;box-shadow:0 8px 32px rgba(0,0,0,.15);-webkit-animation:_ngcontent-%COMP%_signin-slide-up .25s ease;animation:_ngcontent-%COMP%_signin-slide-up .25s ease}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-close[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;background:none;border:none;color:#999;cursor:pointer;padding:4px;border-radius:50%;-webkit-transition:color .12s,background .12s;transition:color .12s,background .12s}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-close[_ngcontent-%COMP%]:hover{color:#111;background:#f4f4f5}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-icon[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:#e8f0fe;color:#1a73e8;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto 20px;font-size:28px}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#111;margin:0 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-body[_ngcontent-%COMP%]{font-size:15px;color:#666;line-height:1.6;margin:0 0 28px}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-secondary[_ngcontent-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:500;color:#666;background:none;border:none;cursor:pointer;padding:8px 16px;border-radius:20px;-webkit-transition:background .12s,color .12s;transition:background .12s,color .12s}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-secondary[_ngcontent-%COMP%]:hover{background:#f4f4f5;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-confirm[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;text-decoration:none;border:none;cursor:pointer;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;background:#1a73e8;color:#fff;-webkit-transition:box-shadow .12s;transition:box-shadow .12s}.editorial-components-enabled[_nghost-%COMP%]   .signin-modal-confirm[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px rgba(26,115,232,.3)}@-webkit-keyframes _ngcontent-%COMP%_signin-fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_signin-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes _ngcontent-%COMP%_signin-slide-up{0%{opacity:0;-webkit-transform:translateY(16px);transform:translateY(16px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes _ngcontent-%COMP%_signin-slide-up{0%{opacity:0;-webkit-transform:translateY(16px);transform:translateY(16px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"]
		});
		var $le = [
			"blue",
			"green",
			"purple"
		], ose = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.iab = _.Ni(m8);
				this.title = _.V("");
				this.description = _.V("");
				this.imageSrc = _.V("");
				this.videoSrc = _.V("");
				this.imageAlt = _.V("");
				this.playText = _.V("");
				this.playUrl = _.V("");
				this.remixText = _.V("Remix to make it your own");
				this.remixUrl = _.V("");
				this.techChips = _.Li([]);
				this.variant = _.V("a");
				this.headingSize = _.V("md");
				this.subtitle = _.V("");
				this.vaa = _.V("");
				this.waa = _.V("");
				this.hba = _.V("");
				this.JN = _.V("");
			}
			VM(a) {
				var b;
				(b = this.iab()) == null || b.VM(a);
			}
		};
		ose.J = function(a) {
			return new (a || ose)();
		};
		ose.ka = _.u({
			type: ose,
			da: [["ms-marketing-applet-preview"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.iab, m8, 5);
				a & 2 && _.ki();
			},
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				title: [1, "title"],
				description: [1, "description"],
				imageSrc: [1, "imageSrc"],
				videoSrc: [1, "videoSrc"],
				imageAlt: [1, "imageAlt"],
				playText: [1, "playText"],
				playUrl: [1, "playUrl"],
				remixText: [1, "remixText"],
				remixUrl: [1, "remixUrl"],
				techChips: [1, "techChips"],
				variant: [1, "variant"],
				headingSize: [1, "headingSize"],
				subtitle: [1, "subtitle"],
				vaa: [1, "primaryBgColor"],
				waa: [1, "primaryTextColor"],
				hba: [1, "secondaryBgColor"],
				JN: [1, "secondaryTextColor"]
			},
			ha: 6,
			ia: 3,
			la: [
				["mediaBlock", ""],
				[
					1,
					"applet-preview",
					"variant-a"
				],
				[
					1,
					"applet-preview",
					"variant-b"
				],
				[
					1,
					"applet-preview",
					"variant-c"
				],
				[1, "text-side"],
				[3, "class"],
				[
					1,
					"app-desc",
					3,
					"innerHTML"
				],
				[1, "chips-row"],
				[1, "cta-row"],
				[1, "media-side"],
				[4, "ngTemplateOutlet"],
				[
					1,
					"btn",
					"btn-primary",
					3,
					"backgroundColor",
					"color"
				],
				[
					1,
					"btn",
					"btn-secondary",
					3,
					"backgroundColor",
					"color",
					"borderColor"
				],
				[
					1,
					"btn",
					"btn-primary",
					3,
					"click"
				],
				[
					1,
					"play-icon",
					3,
					"iconName"
				],
				[
					1,
					"btn",
					"btn-secondary",
					3,
					"click"
				],
				[
					1,
					"remix-icon",
					3,
					"iconName"
				],
				[
					1,
					"cta-row",
					"cta-below-media"
				],
				[1, "variant-c-header"],
				[
					1,
					"cta-row",
					"cta-centered"
				],
				[1, "app-subtitle"],
				[
					"autoplay",
					"",
					"loop",
					"",
					"muted",
					"",
					"playsinline",
					"",
					1,
					"preview-video",
					3,
					"src",
					"poster"
				],
				[
					1,
					"preview-image",
					3,
					"src",
					"alt"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, gme, 8, 5, "div", 1), _.B(1, pme, 8, 5, "div", 2), _.B(2, wme, 5, 3, "div", 3), _.z(3, zme, 2, 1, "ng-template", null, 0, _.Ii), _.I(5, "ms-marketing-sign-in-modal"));
				a & 2 && (_.C(b.variant() === "a" ? 0 : -1), _.y(), _.C(b.variant() === "b" ? 1 : -1), _.y(), _.C(b.variant() === "c" ? 2 : -1));
			},
			dependencies: [
				_.dz,
				_.nz,
				m8
			],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .applet-preview[_ngcontent-%COMP%]{margin:56px 0}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 3fr;gap:40px;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .text-side[_ngcontent-%COMP%]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 3fr;gap:40px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.editorial-components-enabled[_nghost-%COMP%]   .cta-below-media[_ngcontent-%COMP%]{margin-top:16px}.editorial-components-enabled[_nghost-%COMP%]   .cta-below-media[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .media-side[_ngcontent-%COMP%]{width:100%}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .preview-video[_ngcontent-%COMP%]{aspect-ratio:16/9}.editorial-components-enabled[_nghost-%COMP%]   .cta-centered[_ngcontent-%COMP%]{margin-top:16px}.editorial-components-enabled[_nghost-%COMP%]   .cta-centered[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-c-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:24px}.editorial-components-enabled[_nghost-%COMP%]   .app-subtitle[_ngcontent-%COMP%]{font-size:16px;color:#5f6368;line-height:1.5;margin:8px 0 0}.editorial-components-enabled[_nghost-%COMP%]   .text-side[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.editorial-components-enabled[_nghost-%COMP%]   .app-name[_ngcontent-%COMP%]{font-weight:500;line-height:1.3;color:#202124;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .heading-xs[_ngcontent-%COMP%]{font-size:18px}.editorial-components-enabled[_nghost-%COMP%]   .heading-sm[_ngcontent-%COMP%]{font-size:21px}.editorial-components-enabled[_nghost-%COMP%]   .heading-md[_ngcontent-%COMP%]{font-size:24px}.editorial-components-enabled[_nghost-%COMP%]   .heading-lg[_ngcontent-%COMP%]{font-size:30px}.editorial-components-enabled[_nghost-%COMP%]   .heading-xl[_ngcontent-%COMP%]{font-size:36px}.editorial-components-enabled[_nghost-%COMP%]   .app-desc[_ngcontent-%COMP%]{font-size:15px;color:#5f6368;line-height:1.6;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .app-desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .app-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:8px 0 0;padding-left:20px}.editorial-components-enabled[_nghost-%COMP%]   .app-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .chips-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .chip[_ngcontent-%COMP%]{display:inline-block;font-size:11px;font-weight:500;padding:4px 10px;border-radius:100px;line-height:1.4}.editorial-components-enabled[_nghost-%COMP%]   .chip-blue[_ngcontent-%COMP%]{background:#e8f0fe;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .chip-green[_ngcontent-%COMP%]{background:#e8f5e9;color:#0f9d58}.editorial-components-enabled[_nghost-%COMP%]   .chip-purple[_ngcontent-%COMP%]{background:#f3e8fd;color:#7c3aed}.editorial-components-enabled[_nghost-%COMP%]   .cta-row[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;margin-top:4px}.editorial-components-enabled[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;text-decoration:none;border:none;cursor:pointer;-webkit-transition:opacity .12s,box-shadow .12s;transition:opacity .12s,box-shadow .12s;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:hover{opacity:.9}.editorial-components-enabled[_nghost-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:#1a73e8;color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px rgba(26,115,232,.3)}.editorial-components-enabled[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{background:#f1f3f4;color:#202124;border:1px solid #e0e0e0}.editorial-components-enabled[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover{background:#e8eaed}.editorial-components-enabled[_nghost-%COMP%]   .play-icon[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .remix-icon[_ngcontent-%COMP%]{font-size:18px}.editorial-components-enabled[_nghost-%COMP%]   .media-side[_ngcontent-%COMP%]{position:relative}.editorial-components-enabled[_nghost-%COMP%]   .preview-image[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .preview-video[_ngcontent-%COMP%]{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;border:1px solid #e0e0e0;box-shadow:0 2px 12px rgba(0,0,0,.06);margin-bottom:13px}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .media-side[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .media-side[_ngcontent-%COMP%]{-webkit-box-ordinal-group:0;-webkit-order:-1;-moz-box-ordinal-group:0;-ms-flex-order:-1;order:-1}}"]
		});
		var Eme = (a, b) => b.label, pse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.label = _.V("");
				this.labelDotColor = _.V("#7c4dff");
				this.headline = _.V("");
				this.subhead = _.V("");
				this.breadcrumb = _.Li([]);
				this.meta = _.Li({});
				this.variant = _.V("a");
				this.labelIcon = _.V();
			}
		};
		pse.J = function(a) {
			return new (a || pse)();
		};
		pse.ka = _.u({
			type: pse,
			da: [["ms-marketing-article-header"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				label: [1, "label"],
				labelDotColor: [1, "labelDotColor"],
				headline: [1, "headline"],
				subhead: [1, "subhead"],
				breadcrumb: [1, "breadcrumb"],
				meta: [1, "meta"],
				variant: [1, "variant"],
				labelIcon: [1, "labelIcon"]
			},
			ha: 3,
			ia: 4,
			la: [
				[1, "hero-content"],
				[1, "header-simple"],
				[
					"aria-label",
					"Breadcrumb",
					1,
					"breadcrumb-nav"
				],
				[1, "hero-label"],
				[1, "headline"],
				[1, "subhead"],
				[1, "hero-meta"],
				[
					1,
					"meta-chip",
					"author-chip"
				],
				[1, "meta-chip"],
				[1, "breadcrumb-list"],
				[1, "breadcrumb-item"],
				[
					1,
					"breadcrumb-link",
					3,
					"href"
				],
				[3, "breadcrumb-current"],
				[
					"aria-hidden",
					"true",
					1,
					"breadcrumb-sep"
				],
				[
					1,
					"label-icon",
					3,
					"iconName",
					"color"
				],
				[
					1,
					"label-dot",
					3,
					"background"
				],
				[
					1,
					"label-icon",
					3,
					"iconName"
				],
				[1, "label-dot"],
				[1, "author-avatar"],
				[
					1,
					"meta-icon",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div"), _.B(1, Qme, 12, 9, "div", 0), _.B(2, Xme, 5, 3, "div", 1), _.H());
				a & 2 && (_.qi("article-header variant-" + b.variant()), _.y(), _.C(b.variant() === "a" ? 1 : -1), _.y(), _.C(b.variant() === "b" ? 2 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:1180px;margin-inline:auto;padding-inline:40px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .article-header[_ngcontent-%COMP%]{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-nav[_ngcontent-%COMP%]{margin-bottom:0}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;padding:0;margin:0;font-size:12px;color:#999;height:38px}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]{color:#999;text-decoration:none;-webkit-transition:color .12s;transition:color .12s}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]:hover{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-current[_ngcontent-%COMP%]{color:#111;font-weight:500}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-sep[_ngcontent-%COMP%]{color:#d4d4d4;margin:0 6px;font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .hero-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#999;margin-bottom:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.editorial-components-enabled[_nghost-%COMP%]   .label-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;display:inline-block}.editorial-components-enabled[_nghost-%COMP%]   .label-icon[_ngcontent-%COMP%]{font-size:14px;display:inline-block}.editorial-components-enabled[_nghost-%COMP%]   .headline[_ngcontent-%COMP%]{font-size:42px;font-weight:500;line-height:1.06;letter-spacing:-1px;color:#111;margin:0 0 16px}.editorial-components-enabled[_nghost-%COMP%]   .subhead[_ngcontent-%COMP%]{font-size:19px;line-height:1.65;color:#80868b;letter-spacing:-.2px;margin:0 0 24px}.editorial-components-enabled[_nghost-%COMP%]   .hero-meta[_ngcontent-%COMP%]{display:none;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;font-size:12px;color:#999;padding-bottom:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .hero-meta[_ngcontent-%COMP%]:has(.meta-chip){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.editorial-components-enabled[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.editorial-components-enabled[_nghost-%COMP%]   .meta-icon[_ngcontent-%COMP%]{font-size:13px}.editorial-components-enabled[_nghost-%COMP%]   .author-chip[_ngcontent-%COMP%]{gap:6px}.editorial-components-enabled[_nghost-%COMP%]   .author-avatar[_ngcontent-%COMP%]{width:22px;height:22px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:10px;font-weight:700}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{padding-top:52px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .header-simple[_ngcontent-%COMP%]{padding:40px 0 32px;max-width:800px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{font-size:36px;margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .subhead[_ngcontent-%COMP%]{font-size:16px;margin-bottom:0}@media (max-width:900px){.editorial-components-enabled[_nghost-%COMP%]   .headline[_ngcontent-%COMP%]{font-size:28px}}"]
		});
		var qse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.publishDate = _.V("");
				this.readTime = _.V("");
				this.buildTime = _.V("");
				this.authorName = _.V("");
				this.authorInitials = _.V("");
				this.authorColor = _.V("#7c4dff");
				this.rating = _.V("");
				this.difficulty = _.V("");
			}
		};
		qse.J = function(a) {
			return new (a || qse)();
		};
		qse.ka = _.u({
			type: qse,
			da: [["ms-marketing-article-meta"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				publishDate: [1, "publishDate"],
				readTime: [1, "readTime"],
				buildTime: [1, "buildTime"],
				authorName: [1, "authorName"],
				authorInitials: [1, "authorInitials"],
				authorColor: [1, "authorColor"],
				rating: [1, "rating"],
				difficulty: [1, "difficulty"]
			},
			ha: 7,
			ia: 6,
			la: [
				[1, "article-meta"],
				[
					1,
					"meta-chip",
					"author-chip"
				],
				[1, "meta-chip"],
				[1, "author-avatar"],
				[
					1,
					"meta-icon",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, Yme, 4, 6, "span", 1), _.B(2, Zme, 3, 2, "span", 2), _.B(3, $me, 3, 2, "span", 2), _.B(4, ane, 3, 2, "span", 2), _.B(5, bne, 3, 2, "span", 2), _.B(6, cne, 3, 2, "span", 2), _.H());
				a & 2 && (_.y(), _.C(b.authorName() ? 1 : -1), _.y(), _.C(b.publishDate() ? 2 : -1), _.y(), _.C(b.readTime() ? 3 : -1), _.y(), _.C(b.buildTime() ? 4 : -1), _.y(), _.C(b.difficulty() ? 5 : -1), _.y(), _.C(b.rating() ? 6 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .article-meta[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:13px;color:#999;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.editorial-components-enabled[_nghost-%COMP%]   .meta-icon[_ngcontent-%COMP%]{font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .author-chip[_ngcontent-%COMP%]{gap:6px}.editorial-components-enabled[_nghost-%COMP%]   .author-avatar[_ngcontent-%COMP%]{width:22px;height:22px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:10px;font-weight:700}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .article-meta[_ngcontent-%COMP%]{gap:12px;font-size:12px}}"]
		});
		var rse = ["audioEl"], ine = (a, b) => b.label, sse = class {
			constructor() {
				this.qf = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.title = _.V("");
				this.sectionId = _.V("");
				this.samples = _.Li([]);
				this.variant = _.V("single");
				this.xK = _.M(0);
				this.qe = _.M(!1);
				this.currentTime = _.M(0);
				this.duration = _.M(0);
				this.hasError = _.M(!1);
				this.BU = _.M(!1);
				this.qga = _.Ni("audioEl");
			}
			ib() {
				this.variant() === "grid" && this.xK.set(-1);
			}
			get yTa() {
				return this.samples()[this.xK()];
			}
			HI(a) {
				this.currentTime.set(a.target.currentTime);
			}
			ZFa(a) {
				this.duration.set(a.target.duration);
				this.hasError.set(!1);
			}
			QFa() {
				this.qe.set(!1);
				this.currentTime.set(0);
			}
			onError() {
				this.qe.set(!1);
				this.hasError.set(!0);
			}
			bE(a) {
				return !isFinite(a) || a < 0 ? "0:00" : `${Math.floor(a / 60)}:${Math.floor(a % 60).toString().padStart(2, "0")}`;
			}
			EFa() {
				this.BU() && (this.BU.set(!1), this.play());
			}
			play() {
				var a, b = (a = this.qga()) == null ? void 0 : a.nativeElement;
				b && b.play().then(() => {
					this.qe.set(!0);
				}).catch(() => {
					this.hasError.set(!0);
				});
			}
			pause() {
				var a, b = (a = this.qga()) == null ? void 0 : a.nativeElement;
				b && (b.pause(), this.qe.set(!1));
			}
		};
		sse.J = function(a) {
			return new (a || sse)();
		};
		sse.ka = _.u({
			type: sse,
			da: [["ms-marketing-audio-player"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.qga, rse, 5);
				a & 2 && _.ki();
			},
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				title: [1, "title"],
				sectionId: [1, "sectionId"],
				samples: [1, "samples"],
				variant: [1, "variant"]
			},
			ha: 5,
			ia: 7,
			la: [
				["audioEl", ""],
				[
					"preload",
					"metadata",
					3,
					"src"
				],
				[
					1,
					"audio-player-block",
					3,
					"id"
				],
				[1, "audio-title"],
				[1, "sample-grid"],
				[
					"preload",
					"metadata",
					3,
					"timeupdate",
					"loadedmetadata",
					"ended",
					"error",
					"canplay",
					"src"
				],
				[
					"type",
					"button",
					1,
					"sample-card",
					3,
					"active",
					"playing"
				],
				[
					"type",
					"button",
					1,
					"sample-card",
					3,
					"click"
				],
				[1, "card-play-icon"],
				[3, "iconName"],
				[1, "card-text"],
				[1, "card-label"],
				[1, "card-desc"],
				[1, "card-error"],
				[1, "single-player"],
				[1, "error-state"],
				[1, "player-controls"],
				[
					"type",
					"button",
					1,
					"play-btn",
					3,
					"click"
				],
				[1, "player-info"],
				[1, "player-label"],
				[
					"type",
					"button",
					"role",
					"slider",
					"aria-label",
					"Audio progress",
					1,
					"progress-bar",
					3,
					"click"
				],
				[1, "progress-fill"],
				[1, "time-display"]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, dne, 2, 2, "audio", 1), _.F(1, "div", 2), _.B(2, ene, 2, 1, "h3", 3), _.B(3, jne, 3, 0, "div", 4), _.B(4, nne, 1, 1), _.H());
				if (a & 2) {
					let c;
					_.C((c = b.yTa) ? 0 : -1, c);
					_.y();
					_.P("variant-grid", b.variant() === "grid");
					_.E("id", b.sectionId());
					_.y();
					_.C(b.title() ? 2 : -1);
					_.y();
					_.C(b.variant() === "grid" ? 3 : -1);
					_.y();
					_.C(b.variant() === "single" ? 4 : -1);
				}
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .audio-player-block[_ngcontent-%COMP%]{padding:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .audio-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;letter-spacing:-.3px;margin:0 0 20px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .single-player[_ngcontent-%COMP%]{background:#f8f9fa;border:1px solid #e0e0e0;border-radius:12px;padding:20px 24px}.editorial-components-enabled[_nghost-%COMP%]   .player-controls[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:48px;height:48px;min-width:48px;border-radius:50%;border:none;background:#1a73e8;color:#fff;cursor:pointer;-webkit-transition:background .15s;transition:background .15s}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover{background:#1557b0}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:28px}.editorial-components-enabled[_nghost-%COMP%]   .player-info[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .player-label[_ngcontent-%COMP%]{font-size:15px;font-weight:500;color:#111;margin-bottom:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.editorial-components-enabled[_nghost-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border:none;padding:0;font:inherit;display:block;width:100%;-moz-appearance:none;appearance:none;-webkit-appearance:none;height:6px;background:#dadce0;border-radius:3px;cursor:pointer;position:relative;margin-bottom:6px}.editorial-components-enabled[_nghost-%COMP%]   .progress-bar[_ngcontent-%COMP%]:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}.editorial-components-enabled[_nghost-%COMP%]   .progress-fill[_ngcontent-%COMP%]{height:100%;background:#1a73e8;border-radius:3px;-webkit-transition:width 1s linear;transition:width 1s linear;will-change:width}.editorial-components-enabled[_nghost-%COMP%]   .time-display[_ngcontent-%COMP%]{font-size:12px;color:#666;font-variant-numeric:tabular-nums}.editorial-components-enabled[_nghost-%COMP%]   .error-state[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;color:#d93025;font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .error-state[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.editorial-components-enabled[_nghost-%COMP%]   .sample-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}.editorial-components-enabled[_nghost-%COMP%]   .sample-card[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:14px;min-height:68px;position:relative;background:#f8f9fa;border:1px solid #e0e0e0;border-radius:12px;cursor:pointer;text-align:left;font-family:inherit;-webkit-transition:border-color .15s,background .15s;transition:border-color .15s,background .15s}.editorial-components-enabled[_nghost-%COMP%]   .sample-card[_ngcontent-%COMP%]:hover{background:#f1f3f4}.editorial-components-enabled[_nghost-%COMP%]   .sample-card.active[_ngcontent-%COMP%]{border-color:#1a73e8;background:#e8f0fe}.editorial-components-enabled[_nghost-%COMP%]   .sample-card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}.editorial-components-enabled[_nghost-%COMP%]   .card-play-icon[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;min-width:36px;border-radius:50%;background:#1a73e8;color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .card-play-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:22px}.playing   .editorial-components-enabled[_nghost-%COMP%]   .card-play-icon[_ngcontent-%COMP%]{background:#174ea6}.editorial-components-enabled[_nghost-%COMP%]   .card-text[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .card-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#111;margin-bottom:2px}.editorial-components-enabled[_nghost-%COMP%]   .card-desc[_ngcontent-%COMP%]{font-size:12px;color:#666;line-height:1.4}.editorial-components-enabled[_nghost-%COMP%]   .card-error[_ngcontent-%COMP%]{font-size:11px;color:#d93025;white-space:nowrap;margin-left:auto}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]   .sample-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]{width:44px;height:44px;min-width:44px}}@media (min-width:601px) and (max-width:900px){.editorial-components-enabled[_nghost-%COMP%]   .sample-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}"]
		});
		var vne = (a, b) => b.transcript, tne = (a, b) => b.audioSrc, n8 = class {
			constructor() {
				this.qf = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.sectionLabel = _.V("");
				this.sectionTitle = _.V("");
				this.introText = _.V("");
				this.examples = _.Li([]);
				this.variant = _.V("card");
			}
			haa(a) {
				n8.A && (n8.A.pause(), n8.A.currentTime = 0);
				n8.A || (n8.A = new Audio());
				n8.F = this;
				n8.A.src = a;
				n8.A.play().catch(() => {});
			}
			Ba() {
				n8.A && n8.F === this && (n8.A.pause(), n8.A.currentTime = 0, n8.F = null);
			}
		};
		n8.A = null;
		n8.F = null;
		n8.J = function(a) {
			return new (a || n8)();
		};
		n8.ka = _.u({
			type: n8,
			da: [["ms-marketing-audio-showcase"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				sectionLabel: [1, "sectionLabel"],
				sectionTitle: [1, "sectionTitle"],
				introText: [1, "introText"],
				examples: [1, "examples"],
				variant: [1, "variant"]
			},
			ha: 1,
			ia: 1,
			la: [
				[1, "audio-showcase"],
				[1, "showcase-header"],
				[1, "section-label"],
				[1, "section-title"],
				[1, "intro-text"],
				[1, "examples-list"],
				[1, "example-card"],
				[1, "example-content"],
				[1, "transcript"],
				[1, "variations-list"],
				[
					1,
					"play-pill",
					3,
					"icon-only",
					"is-default"
				],
				[
					1,
					"play-pill",
					3,
					"click"
				],
				[3, "iconName"],
				[1, "tag-text"]
			],
			template: function(a, b) {
				a & 1 && _.B(0, wne, 8, 3, "section", 0);
				a & 2 && _.C(b.bd() ? 0 : -1);
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:680px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box}.editorial-components-enabled[_nghost-%COMP%]   .audio-showcase[_ngcontent-%COMP%]{margin-bottom:32px}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:#1a73e8;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .showcase-header[_ngcontent-%COMP%]{margin-bottom:32px}.editorial-components-enabled[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px;color:#202124;margin-bottom:16px}.editorial-components-enabled[_nghost-%COMP%]   .intro-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;font-size:16px;font-weight:500;line-height:1.5;color:#1f1f1f;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .examples-list[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.editorial-components-enabled[_nghost-%COMP%]   .example-card[_ngcontent-%COMP%]{padding:20px;border-radius:16px;background:#f8f9fa;border:1px solid transparent;-webkit-transition:all .2s ease;transition:all .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .example-card[_ngcontent-%COMP%]:hover{background:#f1f3f4;border-color:#dadce0}.editorial-components-enabled[_nghost-%COMP%]   .example-content[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.editorial-components-enabled[_nghost-%COMP%]   .variations-list[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px}.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .2s ease;transition:all .2s ease;text-decoration:none;background:#fff;border:1px solid #dadce0;padding:3px 10px 3px 6px;border-radius:6px;gap:6px;font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]:hover{border-color:#1a73e8;background:#f8f9fa}.editorial-components-enabled[_nghost-%COMP%]   .play-pill.icon-only[_ngcontent-%COMP%]{padding:3px 6px}.editorial-components-enabled[_nghost-%COMP%]   .play-pill.is-default[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%]{color:#70757a}.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%]{font-family:Google Sans Mono,monospace;color:#1a73e8;font-weight:500;font-size:11px}.editorial-components-enabled[_nghost-%COMP%]   .transcript[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-weight:400;line-height:21px;font-size:14px;color:#1f1f1f;line-height:1.5;margin:0}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{color:#e3e3e3}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .intro-text[_ngcontent-%COMP%]{color:#c4c7c5}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .example-card[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.04)}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .example-card[_ngcontent-%COMP%]:hover{background:hsla(0,0%,100%,.08);border-color:hsla(0,0%,100%,.12)}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .example-card[_ngcontent-%COMP%]:hover   .play-pill[_ngcontent-%COMP%]{background:rgba(168,199,250,.24)}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]{background:rgba(168,199,250,.12);border-color:hsla(0,0%,100%,.1)}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#a8c7fa}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%]{color:#a8c7fa}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .play-pill[_ngcontent-%COMP%]:hover{background:rgba(168,199,250,.24);border-color:#a8c7fa}.dark-theme.editorial-components-enabled[_nghost-%COMP%]   .transcript[_ngcontent-%COMP%]{color:#e3e3e3}"]
		});
		var tse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.authorName = _.V("");
				this.authorInitials = _.V("");
				this.authorRole = _.V("");
				this.avatarColor = _.V("#1a73e8");
				this.avatarUrl = _.V("");
				this.authorUrl = _.V("");
				this.xHandle = _.V("");
				this.publishDate = _.V("");
				this.readTime = _.V("");
			}
		};
		tse.J = function(a) {
			return new (a || tse)();
		};
		tse.ka = _.u({
			type: tse,
			da: [["ms-marketing-author-byline"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				authorName: [1, "authorName"],
				authorInitials: [1, "authorInitials"],
				authorRole: [1, "authorRole"],
				avatarColor: [1, "avatarColor"],
				avatarUrl: [1, "avatarUrl"],
				authorUrl: [1, "authorUrl"],
				xHandle: [1, "xHandle"],
				publishDate: [1, "publishDate"],
				readTime: [1, "readTime"]
			},
			ha: 9,
			ia: 5,
			la: [
				[
					"id",
					"introduction",
					1,
					"byline"
				],
				[
					1,
					"author-avatar",
					"author-avatar-img",
					3,
					"src",
					"alt"
				],
				[1, "author-avatar"],
				[1, "byline-text"],
				[1, "byline-name"],
				[1, "byline-role"],
				[1, "byline-role-sep"],
				[
					"target",
					"_blank",
					"rel",
					"noopener",
					1,
					"byline-x-handle",
					3,
					"href"
				],
				[1, "byline-divider"],
				[1, "byline-meta"],
				[1, "meta-item"],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.Th(0), _.F(1, "div", 0), _.B(2, xne, 1, 2, "img", 1)(3, yne, 2, 1, "div", 2), _.F(4, "div", 3)(5, "div", 4), _.R(6), _.H(), _.B(7, Cne, 4, 3, "div", 5), _.H(), _.B(8, Fne, 4, 2), _.H());
				a & 2 && (a = _.Uh(b.authorRole()), _.y(2), _.C(b.avatarUrl() ? 2 : 3), _.y(4), _.U(b.authorName()), _.y(), _.C(a || b.xHandle() ? 7 : -1), _.y(), _.C(b.publishDate() || b.readTime() ? 8 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .byline[_ngcontent-%COMP%]{margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .author-avatar[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#e8f0fe;color:#1a73e8;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Google Sans,sans-serif;font-size:16px;font-weight:700;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .author-avatar.author-avatar-img[_ngcontent-%COMP%]{object-fit:cover}.editorial-components-enabled[_nghost-%COMP%]   .byline-text[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.editorial-components-enabled[_nghost-%COMP%]   .byline-name[_ngcontent-%COMP%]{font-family:Google Sans,sans-serif;font-size:16px;font-weight:600;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .byline-role[_ngcontent-%COMP%]{font-family:Google Sans,sans-serif;font-size:13px;color:#999}.editorial-components-enabled[_nghost-%COMP%]   .byline-link[_ngcontent-%COMP%]{text-decoration:none;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .byline-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.editorial-components-enabled[_nghost-%COMP%]   .byline-x-handle[_ngcontent-%COMP%]{color:#1a73e8;text-decoration:none}.editorial-components-enabled[_nghost-%COMP%]   .byline-x-handle[_ngcontent-%COMP%]:hover{text-decoration:underline}.editorial-components-enabled[_nghost-%COMP%]   .byline-divider[_ngcontent-%COMP%]{width:1px;height:28px;background:#e9e9e9}.editorial-components-enabled[_nghost-%COMP%]   .byline-meta[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px}.editorial-components-enabled[_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-family:Google Sans,sans-serif;font-size:12px;color:#999}.editorial-components-enabled[_nghost-%COMP%]   .meta-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:13px}"]
		});
		var Lne = (a, b) => b.body, Gne = function(a) {
			return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
		}, use = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.sections = _.Li([]);
				this.variant = _.V("a");
				this.isLead = _.V(!1);
			}
		};
		use.J = function(a) {
			return new (a || use)();
		};
		use.ka = _.u({
			type: use,
			da: [["ms-marketing-body-text"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				sections: [1, "sections"],
				variant: [1, "variant"],
				isLead: [1, "isLead"]
			},
			ha: 4,
			ia: 3,
			la: [
				[1, "single-column"],
				[1, "two-columns"],
				[1, "prose-column"],
				[1, "text-section"],
				[
					1,
					"section-heading",
					3,
					"id"
				],
				[
					1,
					"section-body",
					3,
					"innerHTML"
				],
				[1, "section-body"],
				[
					1,
					"text-section",
					3,
					"lead-section"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div"), _.B(1, Mne, 3, 0, "div", 0)(2, Rne, 3, 0, "div", 1)(3, Wne, 3, 0, "div", 2), _.Eh());
				if (a & 2) {
					let c;
					_.qi("body-text variant-" + b.variant());
					_.y();
					_.C((c = b.variant()) === "a" ? 1 : c === "b" ? 2 : c === "c" ? 3 : -1);
				}
			},
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .body-text[_ngcontent-%COMP%]{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .text-section[_ngcontent-%COMP%]{margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .text-section[_ngcontent-%COMP%]:last-child{margin-bottom:0}.editorial-components-enabled[_nghost-%COMP%]   .text-section[_ngcontent-%COMP%]:first-child   .section-heading[_ngcontent-%COMP%]{margin-top:0}.editorial-components-enabled[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:28px;font-weight:400;letter-spacing:-.8px;line-height:1.3;color:#111;margin:48px 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .section-body[_ngcontent-%COMP%]{font-size:16px;line-height:1.65;color:#444;margin:0}.editorial-components-enabled[_nghost-%COMP%]     .section-body code.copyable-model{font-family:Google Sans Mono,monospace;background:#f1f3f4;padding:2px 6px;border-radius:4px;cursor:pointer;position:relative;font-size:.9em;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]     .section-body code.copyable-model:hover:not(.copied):after{content:\"Click to copy\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#3c4043;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]     .section-body code.copyable-model.copied:after{content:\"Copied!\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#34a853;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .single-column[_ngcontent-%COMP%]{max-width:720px;margin-inline:auto;padding:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:40px;padding:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .prose-column[_ngcontent-%COMP%]{max-width:680px;padding:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .text-section[_ngcontent-%COMP%]{margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:28px;font-weight:400;letter-spacing:-.8px;color:#111;margin:48px 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .text-section[_ngcontent-%COMP%]:first-child   .section-heading[_ngcontent-%COMP%]{margin-top:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]{font-size:15.5px;line-height:1.65;color:#444;margin:0 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .lead-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]{font-size:17px;line-height:1.7;font-weight:400;margin-bottom:0;padding-bottom:32px;border-bottom:1px solid #e9e9e9}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:18px;margin:48px 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]{font-size:15px}}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .two-columns[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}.editorial-components-enabled[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]{font-size:20px}}"]
		});
		var vse = {
			info: "info",
			note: "edit_note",
			tip: "lightbulb",
			warning: "warning"
		}, wse = class {
			constructor() {
				this.A = _.m(_.Op);
				this.F = _.m(_.yeb);
				this.bd = () => this.A.getFlag(_.Pp);
				this.text = _.V("");
				this.calloutType = _.V("info");
				this.icon = _.V();
				this.linkText = _.V("");
				this.linkUrl = _.V("");
				this.ABb = _.W(() => this.icon() || vse[this.calloutType()] || "info");
			}
		};
		wse.J = function(a) {
			return new (a || wse)();
		};
		wse.ka = _.u({
			type: wse,
			da: [["ms-marketing-callout-box"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				text: [1, "text"],
				calloutType: [1, "calloutType"],
				icon: [1, "icon"],
				linkText: [1, "linkText"],
				linkUrl: [1, "linkUrl"]
			},
			ha: 6,
			ia: 5,
			la: [
				[1, "callout-icon"],
				[3, "iconName"],
				[1, "callout-text"],
				[3, "innerHTML"],
				[
					1,
					"callout-link",
					3,
					"href"
				],
				[
					1,
					"callout-link",
					3,
					"click",
					"href"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div")(1, "div", 0), _.I(2, "span", 1), _.H(), _.F(3, "div", 2), _.I(4, "span", 3), _.B(5, Xne, 2, 2, "a", 4), _.H()());
				a & 2 && (_.qi("callout callout-" + b.calloutType()), _.y(2), _.E("iconName", b.ABb()), _.y(2), _.E("innerHTML", b.text(), _.qg), _.y(), _.C(b.linkText() ? 5 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;margin:28px 0}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .callout[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:16px;padding:22px 26px;background:#fafbfc;border:1px solid #eaecef;border-radius:4px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:14.5px;line-height:1.72;color:#444;-webkit-transition:box-shadow .2s ease,-webkit-transform .2s ease;transition:box-shadow .2s ease,-webkit-transform .2s ease;transition:transform .2s ease,box-shadow .2s ease;transition:transform .2s ease,box-shadow .2s ease,-webkit-transform .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .callout[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);box-shadow:0 8px 24px -4px rgba(0,0,0,.06)}.editorial-components-enabled[_nghost-%COMP%]   .callout-icon[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:16px;margin-top:2px}.editorial-components-enabled[_nghost-%COMP%]   .callout-text[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding-top:0}.editorial-components-enabled[_nghost-%COMP%]   .callout-text[_ngcontent-%COMP%]     b{color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .callout-info[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%]{background:#e8f0fe;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .callout-note[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%]{background:#f3f4f6;color:#666}.editorial-components-enabled[_nghost-%COMP%]   .callout-tip[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%]{background:#e8f0fe;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .callout-warning[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%]{background:#fef7e0;color:#ea8600}.editorial-components-enabled[_nghost-%COMP%]   .callout-link[_ngcontent-%COMP%]{color:#1a73e8;font-weight:500;text-decoration:none;margin-left:4px}.editorial-components-enabled[_nghost-%COMP%]   .callout-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]
		});
		var xse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.headline = _.V("");
				this.description = _.V("");
				this.primaryCtaText = _.V("");
				this.primaryCtaUrl = _.V("");
				this.secondaryCtaText = _.V("");
				this.secondaryCtaUrl = _.V("");
				this.variant = _.V("a");
				this.ctaIcon = _.V();
			}
		};
		xse.J = function(a) {
			return new (a || xse)();
		};
		xse.ka = _.u({
			type: xse,
			da: [["ms-marketing-cta-banner"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				headline: [1, "headline"],
				description: [1, "description"],
				primaryCtaText: [1, "primaryCtaText"],
				primaryCtaUrl: [1, "primaryCtaUrl"],
				secondaryCtaText: [1, "secondaryCtaText"],
				secondaryCtaUrl: [1, "secondaryCtaUrl"],
				variant: [1, "variant"],
				ctaIcon: [1, "ctaIcon"]
			},
			ha: 4,
			ia: 5,
			la: [
				[1, "banner-horizontal"],
				[1, "banner-stacked"],
				[1, "banner-inline"],
				[1, "banner-text"],
				[1, "banner-headline"],
				[1, "banner-description"],
				[1, "banner-action-right"],
				[
					1,
					"cta-btn",
					"cta-primary",
					3,
					"href"
				],
				[
					1,
					"btn-icon",
					3,
					"iconName"
				],
				[1, "banner-actions"],
				[
					1,
					"cta-btn",
					"cta-secondary",
					3,
					"href"
				],
				[
					1,
					"inline-icon",
					3,
					"iconName"
				],
				[
					1,
					"inline-text",
					3,
					"href"
				],
				[
					1,
					"cta-btn",
					"cta-inline",
					3,
					"href"
				],
				[
					1,
					"cta-btn",
					"cta-inline-secondary",
					3,
					"href"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div"), _.B(1, aoe, 6, 3, "div", 0), _.B(2, foe, 6, 4, "div", 1), _.B(3, koe, 5, 4, "div", 2), _.H());
				a & 2 && (_.qi("cta-banner variant-" + b.variant()), _.y(), _.C(b.variant() === "a" ? 1 : -1), _.y(), _.C(b.variant() === "b" ? 2 : -1), _.y(), _.C(b.variant() === "c" ? 3 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .cta-banner[_ngcontent-%COMP%]{margin-top:52px}.editorial-components-enabled[_nghost-%COMP%]   .banner-headline[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin:0 0 6px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .banner-description[_ngcontent-%COMP%]{font-size:14px;color:#444;line-height:1.6;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .banner-horizontal[_ngcontent-%COMP%]{padding:32px;background:#fafafa;border:1px solid #e9e9e9;border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:32px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]{height:48px;padding:0 80px;border-radius:4px;background:#111;color:#fff;font-size:14px;font-weight:600;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;text-decoration:none;white-space:nowrap;-webkit-transition:opacity .15s;transition:opacity .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]:hover{opacity:.85}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:15px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .banner-stacked[_ngcontent-%COMP%]{padding:32px;background:#111;color:#fff;border-radius:8px;text-align:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .banner-headline[_ngcontent-%COMP%]{color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.7);max-width:480px;margin:0 auto 20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .banner-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]{height:40px;padding:0 24px;border-radius:4px;background:#fff;color:#111;font-size:13px;font-weight:600;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .cta-secondary[_ngcontent-%COMP%]{height:40px;padding:0 24px;border-radius:4px;background:transparent;color:#fff;font-size:13px;font-weight:500;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;border:1px solid hsla(0,0%,100%,.3)}.editorial-components-enabled[_nghost-%COMP%]:has(.variant-c){max-width:1180px;padding-inline:40px}.editorial-components-enabled[_nghost-%COMP%]   .cta-banner.variant-c[_ngcontent-%COMP%]{margin-top:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .banner-inline[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:0 0 12px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .inline-icon[_ngcontent-%COMP%]{font-size:16px;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .inline-text[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1a73e8;text-decoration:none;margin-right:6px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .inline-text[_ngcontent-%COMP%]:hover{text-decoration:underline}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .cta-inline[_ngcontent-%COMP%]{height:36px;padding:0 20px;border-radius:18px;background:#1a73e8;color:#fff;font-size:13px;font-weight:600;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;text-decoration:none;white-space:nowrap;-webkit-transition:background .15s;transition:background .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .cta-inline[_ngcontent-%COMP%]:hover{background:#1557b0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .cta-inline[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:16px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .cta-inline-secondary[_ngcontent-%COMP%]{height:36px;padding:0 20px;border-radius:18px;background:transparent;color:#1a73e8;font-size:13px;font-weight:500;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;white-space:nowrap;border:1px solid #dadce0;-webkit-transition:background .15s;transition:background .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .cta-inline-secondary[_ngcontent-%COMP%]:hover{background:#f1f3f4}@media (max-width:800px){.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .banner-horizontal[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]{padding:0 40px;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .banner-inline[_ngcontent-%COMP%]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .inline-text[_ngcontent-%COMP%]{-webkit-flex-basis:calc(100% - 32px);-ms-flex-preferred-size:calc(100% - 32px);flex-basis:calc(100% - 32px);margin-right:0;margin-bottom:4px}}"]
		});
		var ooe = (a, b) => b.title, yse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.layout = _.V("inline");
				this.variant = _.V("numbered");
				this.header = _.V("");
				this.showStepLabels = _.V(!1);
				this.items = _.Li([]);
			}
		};
		yse.J = function(a) {
			return new (a || yse)();
		};
		yse.ka = _.u({
			type: yse,
			da: [["ms-marketing-features"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				layout: [1, "layout"],
				variant: [1, "variant"],
				header: [1, "header"],
				showStepLabels: [1, "showStepLabels"],
				items: [1, "items"]
			},
			ha: 4,
			ia: 4,
			la: [
				[1, "features-header"],
				[
					1,
					"feature-grid",
					3,
					"feature-grid-single"
				],
				[1, "feature-list"],
				[1, "feature-grid"],
				[1, "feature-card"],
				[1, "step-label"],
				[1, "feature-title"],
				[
					1,
					"feature-description",
					3,
					"innerHTML"
				],
				[1, "feature-list-item"],
				[1, "number-circle"],
				[1, "icon-container"],
				[1, "feature-body"],
				[
					1,
					"icon-symbol",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div"), _.B(1, loe, 2, 1, "h3", 0), _.B(2, poe, 3, 2, "div", 1)(3, toe, 3, 0, "div", 2), _.H());
				a & 2 && (_.qi("features-module layout-" + b.layout()), _.y(), _.C(b.header() ? 1 : -1), _.y(), _.C(b.layout() === "inline" ? 2 : 3));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .features-header[_ngcontent-%COMP%]{font-size:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#80868b;margin:0 0 16px}.editorial-components-enabled[_nghost-%COMP%]   .feature-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.editorial-components-enabled[_nghost-%COMP%]   .feature-grid-single[_ngcontent-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .feature-grid-single[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]{max-width:340px}.editorial-components-enabled[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]{background:#f8f9fa;border-radius:12px;padding:24px 20px;border:1.5px solid transparent;-webkit-transition:all .2s ease;transition:all .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover{border-color:#e0e0e0;box-shadow:0 2px 8px rgba(0,0,0,.06)}.editorial-components-enabled[_nghost-%COMP%]   .step-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#1a73e8;margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .feature-title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#111;margin:0 0 8px;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .feature-description[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#444;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .feature-list-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:14px;padding:12px 0}.editorial-components-enabled[_nghost-%COMP%]   .number-circle[_ngcontent-%COMP%]{width:28px;height:28px;min-width:28px;border-radius:50%;background:#f8f9fa;border:1.5px solid #e0e0e0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:13px;font-weight:600;color:#5f6368;-webkit-transition:all .2s ease;transition:all .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .feature-list-item[_ngcontent-%COMP%]:hover   .number-circle[_ngcontent-%COMP%]{background:#1a73e8;border-color:#1a73e8;color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:8px;background:#e8f0fe;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .2s ease;transition:all .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .icon-container[_ngcontent-%COMP%]   .icon-symbol[_ngcontent-%COMP%]{font-size:18px;color:#1a73e8;-webkit-transition:color .2s ease;transition:color .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .feature-list-item[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]{background:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .feature-list-item[_ngcontent-%COMP%]:hover   .icon-container[_ngcontent-%COMP%]   .icon-symbol[_ngcontent-%COMP%]{color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .feature-body[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%]{font-size:14px;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{font-size:13px;line-height:1.45}.editorial-components-enabled[_nghost-%COMP%]     .text-accent{color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]     .text-purple{color:#a855f7}.editorial-components-enabled[_nghost-%COMP%]     .text-green{color:#0d9488}.editorial-components-enabled[_nghost-%COMP%]     .text-orange{color:#ea580c}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]   .feature-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]
		});
		var zse = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.mediaType = _.V("image");
				this.src = _.V("");
				this.alt = _.V("");
				this.caption = _.V("");
				this.variant = _.V("a");
			}
		};
		zse.J = function(a) {
			return new (a || zse)();
		};
		zse.ka = _.u({
			type: zse,
			da: [["ms-marketing-media-embed"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				mediaType: [1, "mediaType"],
				src: [1, "src"],
				alt: [1, "alt"],
				caption: [1, "caption"],
				variant: [1, "variant"]
			},
			ha: 5,
			ia: 4,
			la: [
				[1, "media-figure"],
				[
					"loading",
					"lazy",
					1,
					"media-content",
					3,
					"src",
					"alt"
				],
				[
					"controls",
					"",
					"preload",
					"metadata",
					1,
					"media-content",
					3,
					"src"
				],
				[1, "media-caption"]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div")(1, "figure", 0), _.B(2, uoe, 1, 2, "img", 1)(3, voe, 2, 2, "video", 2), _.B(4, woe, 2, 1, "figcaption", 3), _.Eh()());
				a & 2 && (_.qi("media-embed variant-" + b.variant()), _.y(2), _.C(b.mediaType() === "image" ? 2 : b.mediaType() === "video" ? 3 : -1), _.y(2), _.C(b.caption() ? 4 : -1));
			},
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .media-embed[_ngcontent-%COMP%]{color:#111;margin:32px 0}.editorial-components-enabled[_nghost-%COMP%]   .media-figure[_ngcontent-%COMP%]{margin:0}.editorial-components-enabled[_nghost-%COMP%]   .media-content[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.editorial-components-enabled[_nghost-%COMP%]   .media-caption[_ngcontent-%COMP%]{font-size:13px;line-height:1.5;color:#999;margin-top:12px;text-align:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .media-figure[_ngcontent-%COMP%]{max-width:800px;margin-inline:auto}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08)}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]{border-radius:12px}.editorial-components-enabled[_nghost-%COMP%]   .media-caption[_ngcontent-%COMP%]{font-size:12px}}"]
		});
		var Ase = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.label = _.Li.required();
				this.mono = _.V(!0);
				this.labelColor = _.V("#1a73e8");
				this.subtitle = _.V("");
			}
		};
		Ase.J = function(a) {
			return new (a || Ase)();
		};
		Ase.ka = _.u({
			type: Ase,
			da: [["ms-marketing-model-card"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				label: [1, "label"],
				mono: [1, "mono"],
				labelColor: [1, "labelColor"],
				subtitle: [1, "subtitle"]
			},
			ha: 1,
			ia: 1,
			la: [
				[
					1,
					"model-card",
					3,
					"has-subtitle"
				],
				[1, "model-card"],
				[1, "model-label"],
				[1, "model-subtitle"]
			],
			template: function(a, b) {
				a & 1 && _.B(0, yoe, 4, 8, "div", 0);
				a & 2 && _.C(b.bd() ? 0 : -1);
			},
			styles: ["[_nghost-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .model-card[_ngcontent-%COMP%]{background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;padding:12px 16px;text-align:center}.editorial-components-enabled[_nghost-%COMP%]   .model-card.has-subtitle[_ngcontent-%COMP%]{padding:14px 16px}.model-label[_ngcontent-%COMP%]{font-family:Google Sans,sans-serif;font-size:14px;font-weight:500;display:inline-block}.model-label.mono[_ngcontent-%COMP%]{font-family:Google Sans Mono,monospace;font-size:13px;font-weight:400}.model-subtitle[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#5f6368;margin-top:4px;text-transform:uppercase;letter-spacing:.05em}"]
		});
		var Bse = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.label = _.V("Before you start");
				this.items = _.Li([]);
			}
		};
		Bse.J = function(a) {
			return new (a || Bse)();
		};
		Bse.ka = _.u({
			type: Bse,
			da: [["ms-marketing-prereqs-checklist"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				label: [1, "label"],
				items: [1, "items"]
			},
			ha: 5,
			ia: 1,
			la: [
				[1, "prereqs-checklist"],
				[1, "section-label"],
				[1, "items"],
				[1, "checklist-item"],
				[
					1,
					"check-icon",
					3,
					"iconName"
				],
				[1, "item-text"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 0), _.B(1, zoe, 2, 1, "h3", 1), _.F(2, "div", 2), _.Ah(3, Aoe, 4, 2, "div", 3, _.zh), _.H()());
				a & 2 && (_.y(), _.C(b.label() ? 1 : -1), _.y(2), _.Bh(b.items()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .prereqs-checklist[_ngcontent-%COMP%]{border-top:1px solid #e9e9e9;padding-top:24px;margin:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;margin:0 0 14px}.editorial-components-enabled[_nghost-%COMP%]   .items[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.editorial-components-enabled[_nghost-%COMP%]   .checklist-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.editorial-components-enabled[_nghost-%COMP%]   .check-icon[_ngcontent-%COMP%]{font-size:15px;color:#0f9d58;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .item-text[_ngcontent-%COMP%]{font-size:13.5px;color:#444;line-height:1.5}"]
		});
		var Cse = function(a) {
			navigator.clipboard.writeText(a.quote());
			a.Qk.set(!0);
			a.A = setTimeout(() => {
				a.Qk.set(!1);
			}, 2e3);
		}, Dse = class {
			constructor() {
				this.qf = _.Dk;
				this.F = _.m(_.Op);
				this.bd = () => this.F.getFlag(_.Pp);
				this.ub = _.m(_.ag);
				this.quote = _.V("");
				this.attribution = _.V("");
				this.Qk = _.M(!1);
				this.ub.Hc(() => {
					this.A && clearTimeout(this.A);
				});
			}
		};
		Dse.J = function(a) {
			return new (a || Dse)();
		};
		Dse.ka = _.u({
			type: Dse,
			da: [["ms-marketing-prompt-highlight"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				quote: [1, "quote"],
				attribution: [1, "attribution"]
			},
			ha: 10,
			ia: 3,
			la: [
				[1, "prompt-codeblock"],
				[1, "tab-bar"],
				[1, "tab-label"],
				[
					1,
					"copy-btn",
					3,
					"click"
				],
				[3, "iconName"],
				[1, "code-body"],
				[1, "prompt-text"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "span", 2), _.R(3, "prompt"), _.H(), _.F(4, "button", 3), _.J("click", function() {
					return Cse(b);
				}), _.I(5, "span", 4), _.R(6), _.H()(), _.F(7, "div", 5)(8, "div", 6), _.R(9), _.H()()());
				a & 2 && (_.y(5), _.E("iconName", b.Qk() ? b.qf.Zf : b.qf.Ae), _.y(), _.S(" ", b.Qk() ? "Copied!" : "Copy", " "), _.y(3), _.U(b.quote()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;margin:32px 0}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .prompt-codeblock[_ngcontent-%COMP%]{border-radius:6px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.editorial-components-enabled[_nghost-%COMP%]   .tab-bar[_ngcontent-%COMP%]{background:#f9fafb;padding:8px 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e5e7eb}.editorial-components-enabled[_nghost-%COMP%]   .tab-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.8px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .copy-btn[_ngcontent-%COMP%]{font-size:12px;color:#6b7280;background:none;border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;-webkit-transition:color .12s;transition:color .12s}.editorial-components-enabled[_nghost-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover{color:#111827}.editorial-components-enabled[_nghost-%COMP%]   .copy-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .code-body[_ngcontent-%COMP%]{background:#fff;padding:20px 24px}.editorial-components-enabled[_nghost-%COMP%]   .prompt-text[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:14px;color:#374151;white-space:pre-wrap;line-height:1.7}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]   .code-body[_ngcontent-%COMP%]{padding:16px 18px}.editorial-components-enabled[_nghost-%COMP%]   .prompt-text[_ngcontent-%COMP%]{font-size:13px}}"]
		});
		var Ese = ["slotInput"], ape = (a, b) => b.key, Eoe = function(a, b, c) {
			a.Bpa.update((d) => Object.assign({}, d, { [b]: c }));
		}, Foe = function(a) {
			a = a.target;
			if (a.value) {
				var b = document.createElement("span");
				b.style.cssText = "position:absolute;visibility:hidden;white-space:pre;font:inherit;padding:0 6px;";
				b.textContent = a.value;
				var c;
				(c = a.parentElement) == null || c.appendChild(b);
				c = b.offsetWidth + 12;
				b.remove();
				c > a.offsetWidth && (a.style.width = `${c}px`);
			} else a.style.removeProperty("width");
		}, Fse = function(a) {
			var b = a.Bpa();
			return a.segments().map((c) => c.text != null ? c.text : c.slotKey ? b[c.slotKey] || a.lE(c.slotKey) : "").join("");
		}, Gse = class {
			constructor() {
				this.qf = _.Dk;
				this.H = _.m(_.Op);
				this.bd = () => this.H.getFlag(_.Pp);
				this.I = _.m(_.Qu);
				this.isSignedIn = this.I.isSignedIn;
				this.ub = _.m(_.ag);
				this.spa = _.M(!1);
				this.A = "";
				this.title = _.V("");
				this.description = _.V("");
				this.slots = _.Li([]);
				this.segments = _.Li([]);
				this.bundledSlug = _.V("");
				this.variant = _.V("a");
				this.SRb = _.hi();
				this.Qk = _.M(!1);
				this.Bpa = _.M({});
				this.ub.Hc(() => {
					this.F && clearTimeout(this.F);
				});
			}
			lE(a) {
				var b, c;
				return (c = (b = this.slots().find((d) => d.key === a)) == null ? void 0 : b.placeholder) != null ? c : "";
			}
			WA() {
				navigator.clipboard.writeText(Fse(this));
				this.Qk.set(!0);
				this.F = setTimeout(() => {
					this.Qk.set(!1);
				}, 2e3);
			}
			UP() {
				var a = Fse(this), b = this.bundledSlug();
				b = b ? `/apps/bundled/${b}` : "/app/code-assistant";
				a = new URLSearchParams({
					showAssistant: "true",
					prompt: a
				});
				a = `${b}?${a.toString()}`;
				this.isSignedIn ? _.rd(window, _.jd(a), "_blank") : (this.A = a, this.spa.set(!0));
			}
			uxa() {
				this.spa.set(!1);
				_.rd(window, _.jd(this.A), "_blank");
			}
			GQ() {
				this.spa.set(!1);
				this.A = "";
			}
		};
		Gse.J = function(a) {
			return new (a || Gse)();
		};
		Gse.ka = _.u({
			type: Gse,
			da: [["ms-marketing-prompt-template"]],
			Ka: function(a, b) {
				a & 1 && _.ji(b.SRb, Ese, 5);
				a & 2 && _.ki();
			},
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				title: [1, "title"],
				description: [1, "description"],
				slots: [1, "slots"],
				segments: [1, "segments"],
				bundledSlug: [1, "bundledSlug"],
				variant: [1, "variant"]
			},
			ha: 6,
			ia: 6,
			la: [
				["slotInput", ""],
				[
					1,
					"prompt-template",
					"variant-a"
				],
				[
					1,
					"prompt-template",
					"variant-b"
				],
				[
					1,
					"prompt-template",
					"variant-c"
				],
				[
					1,
					"prompt-template",
					"variant-d"
				],
				[
					1,
					"prompt-template",
					"variant-e"
				],
				[
					"role",
					"dialog",
					"aria-modal",
					"true",
					"aria-label",
					"Sign in required",
					1,
					"pt-modal-overlay"
				],
				[1, "pt-header"],
				[1, "pt-codeblock"],
				[1, "pt-tab-bar"],
				[1, "pt-tab-label"],
				[1, "pt-tab-actions"],
				[
					1,
					"pt-copy-btn",
					3,
					"click"
				],
				[3, "iconName"],
				[
					1,
					"pt-build-btn",
					3,
					"click"
				],
				[1, "pt-code-body"],
				[1, "pt-prompt-text"],
				[1, "pt-title"],
				[1, "pt-desc"],
				[1, "pt-static"],
				[1, "pt-slot"],
				[
					"type",
					"text",
					3,
					"input",
					"placeholder"
				],
				[1, "pt-card"],
				[1, "pt-card-header"],
				[1, "pt-card-body"],
				[1, "pt-prompt-text-light"],
				[1, "pt-card-footer"],
				[
					1,
					"pt-copy-btn-light",
					3,
					"click"
				],
				[1, "pt-slot-light"],
				[1, "pt-pill-container"],
				[1, "pt-pill-prompt"],
				[1, "pt-pill-actions"],
				[1, "pt-pill"],
				[1, "pt-form"],
				[1, "pt-form-fields"],
				[1, "pt-field"],
				[1, "pt-form-preview"],
				[1, "pt-preview-label"],
				[1, "pt-preview-text"],
				[1, "pt-form-actions"],
				[1, "pt-field-label"],
				[
					"type",
					"text",
					1,
					"pt-field-input",
					3,
					"input",
					"placeholder"
				],
				[1, "pt-preview-slot"],
				[1, "pt-split"],
				[1, "pt-split-left"],
				[1, "pt-split-label"],
				[1, "pt-split-right"],
				[1, "pt-preview-card"],
				[1, "pt-preview-bar"],
				[1, "pt-preview-body"],
				[1, "pt-preview-footer"],
				[
					"aria-label",
					"Close dialog",
					1,
					"pt-modal-backdrop",
					3,
					"click"
				],
				[1, "pt-modal"],
				[
					1,
					"pt-modal-close",
					3,
					"click"
				],
				[1, "pt-modal-icon"],
				[1, "pt-modal-title"],
				[1, "pt-modal-body"],
				[1, "pt-modal-actions"],
				[
					1,
					"pt-modal-secondary",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, Ioe, 17, 4, "div", 1), _.B(1, Ooe, 14, 4, "div", 2), _.B(2, Uoe, 12, 3, "div", 3), _.B(3, bpe, 19, 4, "div", 4), _.B(4, ipe, 24, 4, "div", 5), _.B(5, jpe, 17, 3, "div", 6));
				a & 2 && (_.C(b.variant() === "a" ? 0 : -1), _.y(), _.C(b.variant() === "b" ? 1 : -1), _.y(), _.C(b.variant() === "c" ? 2 : -1), _.y(), _.C(b.variant() === "d" ? 3 : -1), _.y(), _.C(b.variant() === "e" ? 4 : -1), _.y(), _.C(b.spa() ? 5 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;margin:32px 0;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .pt-header[_ngcontent-%COMP%]{margin-bottom:16px}.editorial-components-enabled[_nghost-%COMP%]   .pt-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#111;margin:0 0 4px}.editorial-components-enabled[_nghost-%COMP%]   .pt-desc[_ngcontent-%COMP%]{font-size:14px;color:#666;line-height:1.5;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .pt-codeblock[_ngcontent-%COMP%]{border-radius:6px;overflow:hidden;border:1px solid #2a2a2a}.editorial-components-enabled[_nghost-%COMP%]   .pt-tab-bar[_ngcontent-%COMP%]{background:#2a2a2a;padding:8px 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.editorial-components-enabled[_nghost-%COMP%]   .pt-tab-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.8px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .pt-tab-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn[_ngcontent-%COMP%]{font-size:12px;color:#999;background:none;border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;-webkit-transition:color .12s;transition:color .12s}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn[_ngcontent-%COMP%]:hover{color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .pt-build-btn[_ngcontent-%COMP%]{background:#1a73e8;color:#fff;border-radius:20px;padding:8px 20px;font-weight:600;font-size:14px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;border:none;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;-webkit-transition:background .15s,box-shadow .15s,-webkit-transform 80ms;transition:background .15s,box-shadow .15s,-webkit-transform 80ms;transition:background .15s,transform 80ms,box-shadow .15s;transition:background .15s,transform 80ms,box-shadow .15s,-webkit-transform 80ms;box-shadow:0 1px 3px rgba(26,115,232,.3)}.editorial-components-enabled[_nghost-%COMP%]   .pt-build-btn[_ngcontent-%COMP%]:hover{background:#1557b0;box-shadow:0 2px 8px rgba(26,115,232,.4)}.editorial-components-enabled[_nghost-%COMP%]   .pt-build-btn[_ngcontent-%COMP%]:active{-webkit-transform:scale(.97);transform:scale(.97)}.editorial-components-enabled[_nghost-%COMP%]   .pt-build-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:16px}.editorial-components-enabled[_nghost-%COMP%]   .pt-code-body[_ngcontent-%COMP%]{background:#1e1e2e;padding:20px 24px}.editorial-components-enabled[_nghost-%COMP%]   .pt-prompt-text[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:14px;color:#cdd5e0;white-space:pre-wrap;line-height:1.9}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(46,150,255,.1);border:1px solid rgba(46,150,255,.3);border-radius:4px;padding:1px 2px;margin:0 1px;vertical-align:baseline;-webkit-transition:border-color .2s,background .2s;transition:border-color .2s,background .2s}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]:focus-within{border-color:rgba(46,150,255,.7);background:rgba(46,150,255,.15)}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:14px;color:#7ab8ff;background:none;border:none;outline:none;min-width:50px;width:auto;padding:0 4px;line-height:1.9}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(122,184,255,.45);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(122,184,255,.45);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(122,184,255,.45);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(122,184,255,.45);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:rgba(122,184,255,.45);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn-light[_ngcontent-%COMP%]{font-size:13px;color:#555;background:none;border:1px solid #e4e4e7;border-radius:8px;padding:6px 14px;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;-webkit-transition:background .12s,color .12s;transition:background .12s,color .12s}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn-light[_ngcontent-%COMP%]:hover{background:#f4f4f5;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .pt-copy-btn-light[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .pt-field[_ngcontent-%COMP%]{margin-bottom:16px}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-label[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:500;color:#666;text-transform:capitalize;margin-bottom:6px}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]{width:100%;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;color:#1a73e8;background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:10px 14px;outline:none;-webkit-transition:border-color .2s;transition:border-color .2s}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]:focus{border-color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]::-moz-placeholder{color:#bbb;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#bbb;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#bbb;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-field-input[_ngcontent-%COMP%]::placeholder{color:#bbb;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .pt-preview-slot[_ngcontent-%COMP%]{color:#1a73e8;border-bottom:2px solid #1a73e8;padding-bottom:1px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-card[_ngcontent-%COMP%]{border-radius:12px;border:1px solid #e4e4e7;overflow:hidden}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-card-header[_ngcontent-%COMP%]{padding:20px 24px 0}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-card-body[_ngcontent-%COMP%]{padding:16px 24px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-prompt-text-light[_ngcontent-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;color:#444;line-height:2.8}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#e8f0fe;border:1px solid #d2e3fc;border-radius:6px;padding:2px 4px;margin:0 2px;vertical-align:baseline;-webkit-transition:border-color .2s,background .2s;transition:border-color .2s,background .2s}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]:focus-within{border-color:#1a73e8;background:#d2e3fc}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;color:#1a73e8;background:none;border:none;outline:none;min-width:80px;width:auto;padding:4px 6px;line-height:1.4;height:30px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(26,115,232,.5);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(26,115,232,.5);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(26,115,232,.5);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(26,115,232,.5);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-slot-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:rgba(26,115,232,.5);font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .pt-card-footer[_ngcontent-%COMP%]{padding:12px 24px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;gap:8px;border-top:1px solid #f0f0f0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill-container[_ngcontent-%COMP%]{border:1px solid #e4e4e7;border-radius:12px;overflow:hidden}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill-prompt[_ngcontent-%COMP%]{padding:16px 20px;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;color:#444;line-height:2.2}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#f4f4f5;border:1px solid #e4e4e7;border-radius:100px;padding:2px 4px;margin:0 2px;vertical-align:baseline;-webkit-transition:border-color .2s,background .2s;transition:border-color .2s,background .2s}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]:focus-within{border-color:#1a73e8;background:#e8f0fe}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:14px;color:#1a73e8;background:none;border:none;outline:none;min-width:50px;width:auto;padding:0 8px;line-height:1.8}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#999;font-style:normal}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#999;font-style:normal}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#999;font-style:normal}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#999;font-style:normal}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#999;font-style:normal}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .pt-pill-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;gap:8px;padding:0 16px 16px}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-form[_ngcontent-%COMP%]{border:1px solid #e4e4e7;border-radius:12px;overflow:hidden}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-form-fields[_ngcontent-%COMP%]{padding:24px 24px 8px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0 20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-form-preview[_ngcontent-%COMP%]{margin:0 24px;padding:16px;background:#fafafa;border:1px solid #eee;border-radius:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-preview-label[_ngcontent-%COMP%]{font-size:10px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-preview-text[_ngcontent-%COMP%]{font-size:14px;color:#444;line-height:1.7}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-form-actions[_ngcontent-%COMP%]{padding:16px 24px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;gap:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.5fr;gap:24px;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-left[_ngcontent-%COMP%]{padding:24px;border-right:1px solid #eee}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-label[_ngcontent-%COMP%]{font-size:10px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:.8px;margin-bottom:20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-actions[_ngcontent-%COMP%]{margin-top:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-build-btn-full[_ngcontent-%COMP%]{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-right[_ngcontent-%COMP%]   .pt-preview-card[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#fafafa}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-right[_ngcontent-%COMP%]   .pt-preview-bar[_ngcontent-%COMP%]{padding:10px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #eee}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-right[_ngcontent-%COMP%]   .pt-preview-body[_ngcontent-%COMP%]{padding:20px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-right[_ngcontent-%COMP%]   .pt-preview-text[_ngcontent-%COMP%]{font-size:14px;color:#444;line-height:1.7}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-right[_ngcontent-%COMP%]   .pt-preview-footer[_ngcontent-%COMP%]{padding:12px 20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #eee}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .pt-code-body[_ngcontent-%COMP%]{padding:16px 18px}.editorial-components-enabled[_nghost-%COMP%]   .pt-prompt-text[_ngcontent-%COMP%]{font-size:13px}.editorial-components-enabled[_nghost-%COMP%]   .pt-slot[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:13px}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split[_ngcontent-%COMP%]{grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .variant-e[_ngcontent-%COMP%]   .pt-split-left[_ngcontent-%COMP%]{border-right:none;border-bottom:1px solid #eee}.editorial-components-enabled[_nghost-%COMP%]   .variant-d[_ngcontent-%COMP%]   .pt-form-fields[_ngcontent-%COMP%]{grid-template-columns:1fr}}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000;-webkit-animation:_ngcontent-%COMP%_pt-fade-in .2s ease;animation:_ngcontent-%COMP%_pt-fade-in .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.5);border:none;cursor:default}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:40px;max-width:420px;width:calc(100% - 48px);text-align:center;position:relative;z-index:1;box-shadow:0 8px 32px rgba(0,0,0,.15);-webkit-animation:_ngcontent-%COMP%_pt-slide-up .25s ease;animation:_ngcontent-%COMP%_pt-slide-up .25s ease}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-close[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;background:none;border:none;color:#999;cursor:pointer;padding:4px;border-radius:50%;-webkit-transition:color .12s,background .12s;transition:color .12s,background .12s}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-close[_ngcontent-%COMP%]:hover{color:#111;background:#f4f4f5}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-icon[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;background:#e8f0fe;color:#1a73e8;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto 20px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:28px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:#111;margin:0 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-body[_ngcontent-%COMP%]{font-size:15px;color:#666;line-height:1.6;margin:0 0 28px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-secondary[_ngcontent-%COMP%]{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:500;color:#666;background:none;border:none;cursor:pointer;padding:8px 16px;border-radius:20px;-webkit-transition:background .12s,color .12s;transition:background .12s,color .12s}.editorial-components-enabled[_nghost-%COMP%]   .pt-modal-secondary[_ngcontent-%COMP%]:hover{background:#f4f4f5;color:#111}@-webkit-keyframes _ngcontent-%COMP%_pt-fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_pt-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes _ngcontent-%COMP%_pt-slide-up{0%{opacity:0;-webkit-transform:translateY(16px);transform:translateY(16px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes _ngcontent-%COMP%_pt-slide-up{0%{opacity:0;-webkit-transform:translateY(16px);transform:translateY(16px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"]
		});
		var Hse = (a, b) => b.title, Ise = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.label = _.V("Related guides");
				this.guides = _.Li([]);
			}
		};
		Ise.J = function(a) {
			return new (a || Ise)();
		};
		Ise.ka = _.u({
			type: Ise,
			da: [["ms-marketing-related-guides"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				label: [1, "label"],
				guides: [1, "guides"]
			},
			ha: 5,
			ia: 1,
			la: [
				[1, "related-guides"],
				[1, "section-label"],
				[1, "guide-list"],
				[
					1,
					"guide-card",
					3,
					"href"
				],
				[
					1,
					"guide-icon",
					3,
					"iconName"
				],
				[1, "guide-text"],
				[1, "guide-title"],
				[1, "guide-subtitle"],
				[
					1,
					"arrow-icon",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "section", 0), _.B(1, kpe, 2, 1, "h3", 1), _.F(2, "div", 2), _.Ah(3, lpe, 8, 5, "a", 3, Hse), _.H()());
				a & 2 && (_.y(), _.C(b.label() ? 1 : -1), _.y(2), _.Bh(b.guides()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .related-guides[_ngcontent-%COMP%]{border-top:1px solid #e9e9e9;padding-top:24px;margin:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;margin:0 0 14px}.editorial-components-enabled[_nghost-%COMP%]   .guide-list[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.editorial-components-enabled[_nghost-%COMP%]   .guide-card[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:10px 12px;border-radius:6px;border:1px solid #e9e9e9;margin-bottom:10px;text-decoration:none;color:inherit;-webkit-transition:background .12s;transition:background .12s}.editorial-components-enabled[_nghost-%COMP%]   .guide-card[_ngcontent-%COMP%]:hover{background:#fafafa}.editorial-components-enabled[_nghost-%COMP%]   .guide-icon[_ngcontent-%COMP%]{font-size:18px;color:#1a73e8;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .guide-text[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .guide-title[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#111;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .guide-subtitle[_ngcontent-%COMP%]{font-size:11px;color:#999;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{font-size:14px;color:#999;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}"]
		});
		var o8 = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.authorName = _.V("");
				this.authorTitle = _.V("");
				this.authorAvatarUrl = _.V("");
				this.postText = _.V("");
				this.timestamp = _.V("");
				this.likeCount = _.V(0);
				this.commentCount = _.V(0);
				this.mediaImageUrl = _.V("");
			}
		};
		o8.J = function(a) {
			return new (a || o8)();
		};
		o8.ka = _.u({
			type: o8,
			da: [["ms-marketing-social-linkedin"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				authorName: [1, "authorName"],
				authorTitle: [1, "authorTitle"],
				authorAvatarUrl: [1, "authorAvatarUrl"],
				postText: [1, "postText"],
				timestamp: [1, "timestamp"],
				likeCount: [1, "likeCount"],
				commentCount: [1, "commentCount"],
				mediaImageUrl: [1, "mediaImageUrl"]
			},
			ha: 28,
			ia: 10,
			la: [
				[1, "linkedin-card"],
				[1, "linkedin-header"],
				[1, "linkedin-avatar-wrap"],
				[
					1,
					"linkedin-avatar",
					3,
					"src",
					"alt"
				],
				[1, "linkedin-avatar-placeholder"],
				[1, "linkedin-author"],
				[1, "linkedin-author-name"],
				[1, "linkedin-author-title"],
				[1, "linkedin-timestamp"],
				[1, "linkedin-brand"],
				"viewBox;0 0 24 24;width;20;height;20;aria-hidden;true;fill;#0a66c2".split(";"),
				["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"],
				[1, "linkedin-body"],
				[1, "linkedin-text"],
				[
					"alt",
					"Post media",
					1,
					"linkedin-media",
					3,
					"src"
				],
				[1, "linkedin-actions"],
				[1, "linkedin-action"],
				[3, "iconName"],
				[1, "linkedin-action-count"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "div", 2), _.B(3, mpe, 1, 2, "img", 3)(4, npe, 2, 1, "div", 4), _.H(), _.F(5, "div", 5)(6, "span", 6), _.R(7), _.H(), _.F(8, "span", 7), _.R(9), _.H(), _.F(10, "span", 8), _.R(11), _.H()(), _.F(12, "div", 9), _.Ee(), _.F(13, "svg", 10), _.I(14, "path", 11), _.H()()(), _.Fe(), _.F(15, "div", 12)(16, "p", 13), _.R(17), _.H(), _.B(18, ope, 1, 1, "img", 14), _.H(), _.F(19, "div", 15)(20, "div", 16), _.I(21, "span", 17), _.F(22, "span", 18), _.R(23), _.H()(), _.F(24, "div", 16), _.I(25, "span", 17), _.F(26, "span", 18), _.R(27), _.H()()()());
				a & 2 && (_.y(3), _.C(b.authorAvatarUrl() ? 3 : 4), _.y(4), _.U(b.authorName()), _.y(2), _.U(b.authorTitle()), _.y(2), _.U(b.timestamp()), _.y(6), _.U(b.postText()), _.y(), _.C(b.mediaImageUrl() ? 18 : -1), _.y(3), _.E("iconName", b.S.sG), _.y(2), _.U(b.likeCount()), _.y(2), _.E("iconName", b.S.COMMENT), _.y(2), _.U(b.commentCount()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:520px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:16px}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:10px;margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-avatar[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .linkedin-avatar-placeholder[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;object-fit:cover;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-avatar-placeholder[_ngcontent-%COMP%]{background:#0a66c2;color:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:20px;font-weight:600}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-author[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-author-name[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#191919;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-author-title[_ngcontent-%COMP%]{font-size:12px;color:#666;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-timestamp[_ngcontent-%COMP%]{font-size:12px;color:#666;line-height:1.3}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-brand[_ngcontent-%COMP%]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-text[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#191919;margin:0;white-space:pre-wrap;word-wrap:break-word}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-media[_ngcontent-%COMP%]{display:block;width:100%;border-radius:4px;margin-top:12px}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:24px;padding-top:12px;margin-top:12px;border-top:1px solid #e0e0e0}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-action[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;color:#666;font-size:13px;cursor:default}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-action[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.editorial-components-enabled[_nghost-%COMP%]   .linkedin-action-count[_ngcontent-%COMP%]{font-size:13px}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]{padding-inline:16px}}"]
		});
		var p8 = class {
			constructor() {
				this.S = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.authorName = _.V("");
				this.authorHandle = _.V("");
				this.authorAvatarUrl = _.V("");
				this.tweetText = _.V("");
				this.timestamp = _.V("");
				this.likeCount = _.V(0);
				this.retweetCount = _.V(0);
				this.replyCount = _.V(0);
				this.mediaImageUrl = _.V("");
			}
		};
		p8.J = function(a) {
			return new (a || p8)();
		};
		p8.ka = _.u({
			type: p8,
			da: [["ms-marketing-social-x"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				authorName: [1, "authorName"],
				authorHandle: [1, "authorHandle"],
				authorAvatarUrl: [1, "authorAvatarUrl"],
				tweetText: [1, "tweetText"],
				timestamp: [1, "timestamp"],
				likeCount: [1, "likeCount"],
				retweetCount: [1, "retweetCount"],
				replyCount: [1, "replyCount"],
				mediaImageUrl: [1, "mediaImageUrl"]
			},
			ha: 32,
			ia: 12,
			la: [
				[1, "tweet-card"],
				[1, "tweet-header"],
				[1, "tweet-avatar-wrap"],
				[
					1,
					"tweet-avatar",
					3,
					"src",
					"alt"
				],
				[1, "tweet-avatar-placeholder"],
				[1, "tweet-author"],
				[1, "tweet-author-name"],
				[1, "tweet-author-handle"],
				[1, "tweet-brand"],
				"viewBox;0 0 24 24;width;20;height;20;aria-hidden;true".split(";"),
				[
					"fill",
					"currentColor",
					"d",
					"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				],
				[1, "tweet-body"],
				[1, "tweet-text"],
				[
					"alt",
					"Tweet media",
					1,
					"tweet-media",
					3,
					"src"
				],
				[1, "tweet-timestamp"],
				[1, "tweet-actions"],
				[1, "tweet-action"],
				[3, "iconName"],
				[1, "tweet-action-count"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "div", 2), _.B(3, ppe, 1, 2, "img", 3)(4, qpe, 2, 1, "div", 4), _.H(), _.F(5, "div", 5)(6, "span", 6), _.R(7), _.H(), _.F(8, "span", 7), _.R(9), _.H()(), _.F(10, "div", 8), _.Ee(), _.F(11, "svg", 9), _.I(12, "path", 10), _.H()()(), _.Fe(), _.F(13, "div", 11)(14, "p", 12), _.R(15), _.H(), _.B(16, rpe, 1, 1, "img", 13), _.H(), _.F(17, "div", 14), _.R(18), _.H(), _.F(19, "div", 15)(20, "div", 16), _.I(21, "span", 17), _.F(22, "span", 18), _.R(23), _.H()(), _.F(24, "div", 16), _.I(25, "span", 17), _.F(26, "span", 18), _.R(27), _.H()(), _.F(28, "div", 16), _.I(29, "span", 17), _.F(30, "span", 18), _.R(31), _.H()()()());
				a & 2 && (_.y(3), _.C(b.authorAvatarUrl() ? 3 : 4), _.y(4), _.U(b.authorName()), _.y(2), _.U(b.authorHandle()), _.y(6), _.U(b.tweetText()), _.y(), _.C(b.mediaImageUrl() ? 16 : -1), _.y(2), _.U(b.timestamp()), _.y(3), _.E("iconName", b.S.Vda), _.y(2), _.U(b.replyCount()), _.y(2), _.E("iconName", b.S.REPEAT), _.y(2), _.U(b.retweetCount()), _.y(2), _.E("iconName", b.S.hkb), _.y(2), _.U(b.likeCount()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:520px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .tweet-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e1e8ed;border-radius:12px;padding:16px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-avatar[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .tweet-avatar-placeholder[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;object-fit:cover}.editorial-components-enabled[_nghost-%COMP%]   .tweet-avatar-placeholder[_ngcontent-%COMP%]{background:#1da1f2;color:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:20px;font-weight:600}.editorial-components-enabled[_nghost-%COMP%]   .tweet-author[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .tweet-author-name[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#0f1419;line-height:1.2}.editorial-components-enabled[_nghost-%COMP%]   .tweet-author-handle[_ngcontent-%COMP%]{font-size:14px;color:#536471;line-height:1.2}.editorial-components-enabled[_nghost-%COMP%]   .tweet-brand[_ngcontent-%COMP%]{color:#0f1419;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]   .tweet-text[_ngcontent-%COMP%]{font-size:15px;line-height:1.5;color:#0f1419;margin:0;white-space:pre-wrap;word-wrap:break-word}.editorial-components-enabled[_nghost-%COMP%]   .tweet-media[_ngcontent-%COMP%]{display:block;width:100%;border-radius:12px;margin-top:12px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-timestamp[_ngcontent-%COMP%]{font-size:13px;color:#536471;margin-top:12px;padding-bottom:12px;border-bottom:1px solid #e1e8ed}.editorial-components-enabled[_nghost-%COMP%]   .tweet-actions[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:48px;padding-top:12px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-action[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;color:#536471;font-size:13px;cursor:default}.editorial-components-enabled[_nghost-%COMP%]   .tweet-action[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:18px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-action-count[_ngcontent-%COMP%]{font-size:13px}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]{padding-inline:16px}.editorial-components-enabled[_nghost-%COMP%]   .tweet-actions[_ngcontent-%COMP%]{gap:24px}}"]
		});
		var q8 = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.videoId = _.V("");
				this.title = _.V("");
				this.startTime = _.V(0);
				this.caption = _.V("");
				this.variant = _.V("inline");
				this.zC = !1;
			}
			get thumbnailUrl() {
				return _.vBa(this.videoId());
			}
			get L6() {
				return _.Do(this.videoId(), this.startTime(), void 0, !0);
			}
		};
		q8.J = function(a) {
			return new (a || q8)();
		};
		q8.ka = _.u({
			type: q8,
			da: [["ms-marketing-social-youtube"]],
			Ua: 4,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd())("full-width", b.variant() === "full-width");
			},
			inputs: {
				videoId: [1, "videoId"],
				title: [1, "title"],
				startTime: [1, "startTime"],
				caption: [1, "caption"],
				variant: [1, "variant"]
			},
			ha: 5,
			ia: 2,
			la: [
				[1, "youtube-embed"],
				[
					"role",
					"button",
					"tabindex",
					"0",
					1,
					"youtube-player",
					3,
					"click",
					"keydown.enter",
					"keydown.space"
				],
				[
					"frameborder",
					"0",
					"allow",
					"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					"allowfullscreen",
					"",
					"loading",
					"lazy",
					1,
					"youtube-iframe",
					3,
					"src",
					"title"
				],
				[1, "youtube-caption"],
				[
					"loading",
					"lazy",
					1,
					"youtube-thumbnail",
					3,
					"src",
					"alt"
				],
				[1, "youtube-play-btn"],
				"viewBox;0 0 68 48;width;68;height;48".split(";"),
				[
					"d",
					"M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z",
					"fill",
					"#f00",
					1,
					"play-bg"
				],
				[
					"d",
					"M45 24 27 14v20",
					"fill",
					"#fff"
				]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div", 0)(1, "div", 1), _.Wh("click", function() {
					b.zC = !0;
				})("keydown.enter", function() {
					b.zC = !0;
				})("keydown.space", function() {
					b.zC = !0;
				}), _.B(2, spe, 5, 3)(3, tpe, 1, 2, "iframe", 2), _.Eh(), _.B(4, upe, 2, 1, "p", 3), _.Eh());
				a & 2 && (_.y(2), _.C(b.zC ? 3 : 2), _.y(2), _.C(b.caption() ? 4 : -1));
			},
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:720px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .youtube-embed[_ngcontent-%COMP%]{margin-top:8px}.editorial-components-enabled[_nghost-%COMP%]   .youtube-player[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;background:#000;cursor:pointer}.editorial-components-enabled[_nghost-%COMP%]   .youtube-thumbnail[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.editorial-components-enabled[_nghost-%COMP%]   .youtube-play-btn[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:none;border:none;cursor:pointer;padding:0;opacity:.85;-webkit-transition:opacity .15s;transition:opacity .15s}.editorial-components-enabled[_nghost-%COMP%]   .youtube-play-btn[_ngcontent-%COMP%]:hover{opacity:1}.editorial-components-enabled[_nghost-%COMP%]   .youtube-iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:0}.editorial-components-enabled[_nghost-%COMP%]   .youtube-caption[_ngcontent-%COMP%]{font-size:13px;color:#666;margin:8px 0 0;line-height:1.4}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]{padding-inline:16px}}.full-width[_nghost-%COMP%]{max-width:none}"]
		});
		var Jse = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.heading = _.V("");
				this.items = _.Li([]);
			}
		};
		Jse.J = function(a) {
			return new (a || Jse)();
		};
		Jse.ka = _.u({
			type: Jse,
			da: [["ms-marketing-social-gallery"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				heading: [1, "heading"],
				items: [1, "items"]
			},
			ha: 5,
			ia: 1,
			la: [
				[1, "social-gallery"],
				[1, "gallery-heading"],
				[1, "gallery-grid"],
				[1, "gallery-item"],
				[
					3,
					"authorName",
					"authorHandle",
					"authorAvatarUrl",
					"tweetText",
					"timestamp",
					"likeCount",
					"retweetCount",
					"replyCount",
					"mediaImageUrl"
				],
				[
					3,
					"videoId",
					"title",
					"startTime",
					"caption"
				],
				[
					3,
					"authorName",
					"authorTitle",
					"authorAvatarUrl",
					"postText",
					"timestamp",
					"likeCount",
					"commentCount",
					"mediaImageUrl"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, vpe, 2, 1, "h2", 1), _.F(2, "div", 2), _.Ah(3, zpe, 4, 1, "div", 3, _.yh), _.H()());
				a & 2 && (_.y(), _.C(b.heading() ? 1 : -1), _.y(2), _.Bh(b.items()));
			},
			dependencies: [
				_.tz,
				o8,
				p8,
				q8
			],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:1080px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .social-gallery[_ngcontent-%COMP%]{margin-top:40px}.editorial-components-enabled[_nghost-%COMP%]   .gallery-heading[_ngcontent-%COMP%]{font-size:24px;font-weight:500;text-align:center;margin:0 0 40px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.editorial-components-enabled[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]{min-width:0}.editorial-components-enabled[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   ms-marketing-social-linkedin[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   ms-marketing-social-x[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .gallery-item[_ngcontent-%COMP%]   ms-marketing-social-youtube[_ngcontent-%COMP%]{max-width:none;padding-inline:0}@media (max-width:960px){.editorial-components-enabled[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]{padding-inline:16px}.editorial-components-enabled[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .gallery-heading[_ngcontent-%COMP%]{font-size:20px;margin-bottom:24px}}"]
		});
		var Kse = (a, b) => b.title, Fpe = (a, b) => b.text, Lse = class {
			constructor() {
				this.qf = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.sectionLabel = _.V("");
				this.sectionTitle = _.V("");
				this.steps = _.Li([]);
				this.startIndex = _.V(0);
				this.lg = _.M(0);
			}
			zY(a) {
				return (this.startIndex() + a).toString();
			}
			isActive(a) {
				return this.lg() === a;
			}
		};
		Lse.J = function(a) {
			return new (a || Lse)();
		};
		Lse.ka = _.u({
			type: Lse,
			da: [["ms-marketing-step-accordion"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				sectionLabel: [1, "sectionLabel"],
				sectionTitle: [1, "sectionTitle"],
				steps: [1, "steps"],
				startIndex: [1, "startIndex"]
			},
			ha: 6,
			ia: 2,
			la: [
				[1, "accordion-block"],
				[1, "section-label"],
				[1, "section-title"],
				[1, "accordion-steps"],
				[
					1,
					"acc-step",
					3,
					"active"
				],
				[1, "acc-step"],
				[
					"type",
					"button",
					1,
					"acc-header",
					3,
					"click"
				],
				[1, "step-num"],
				[1, "step-title"],
				[
					1,
					"acc-chevron",
					3,
					"iconName"
				],
				[1, "acc-body"],
				[1, "step-desc"],
				[1, "step-bullets"],
				[1, "step-links"],
				[
					1,
					"step-image",
					3,
					"src",
					"alt"
				],
				[1, "step-placeholder"],
				[
					1,
					"step-link",
					3,
					"href"
				],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, Ape, 2, 1, "div", 1), _.B(2, Bpe, 2, 1, "h2", 2), _.F(3, "div", 3), _.Ah(4, Kpe, 8, 6, "div", 4, Kse), _.H()());
				a & 2 && (_.y(), _.C(b.sectionLabel() ? 1 : -1), _.y(), _.C(b.sectionTitle() ? 2 : -1), _.y(2), _.Bh(b.steps()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:800px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .accordion-block[_ngcontent-%COMP%]{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#999;margin-bottom:14px}.editorial-components-enabled[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;letter-spacing:-.3px;margin:0 0 24px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .accordion-steps[_ngcontent-%COMP%]{max-width:800px}.editorial-components-enabled[_nghost-%COMP%]   .acc-step[_ngcontent-%COMP%]{border:1px solid #e9e9e9;border-radius:10px;margin-bottom:12px;overflow:hidden;-webkit-transition:box-shadow .2s;transition:box-shadow .2s}.editorial-components-enabled[_nghost-%COMP%]   .acc-step[_ngcontent-%COMP%]:hover{box-shadow:0 2px 12px rgba(0,0,0,.04)}.editorial-components-enabled[_nghost-%COMP%]   .acc-header[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px;padding:18px 20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;background:none;border:none;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;text-align:left}.editorial-components-enabled[_nghost-%COMP%]   .step-num[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:28px;height:28px;min-width:28px;border-radius:50%;font-size:12px;font-weight:600;background:#e9e9e9;color:#999;-webkit-transition:background .2s,color .2s;transition:background .2s,color .2s}.editorial-components-enabled[_nghost-%COMP%]   .step-title[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:17px;font-weight:600;color:#111;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .acc-chevron[_ngcontent-%COMP%]{font-size:20px;color:#999;-webkit-transition:color .2s,-webkit-transform .2s;transition:color .2s,-webkit-transform .2s;transition:transform .2s,color .2s;transition:transform .2s,color .2s,-webkit-transform .2s}.editorial-components-enabled[_nghost-%COMP%]   .acc-step.active[_ngcontent-%COMP%]{border-color:#1a73e8;box-shadow:0 2px 16px rgba(26,115,232,.08)}.editorial-components-enabled[_nghost-%COMP%]   .acc-step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%]{background:#1a73e8;color:#fff}.editorial-components-enabled[_nghost-%COMP%]   .acc-step.active[_ngcontent-%COMP%]   .acc-chevron[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .acc-body[_ngcontent-%COMP%]{padding:0 20px 20px 62px}.editorial-components-enabled[_nghost-%COMP%]   .step-desc[_ngcontent-%COMP%]{font-size:14.5px;line-height:1.65;color:#444;margin:0 0 14px}.editorial-components-enabled[_nghost-%COMP%]   .step-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto;border-radius:8px;border:1px solid #e9e9e9}.editorial-components-enabled[_nghost-%COMP%]   .step-placeholder[_ngcontent-%COMP%]{height:240px;border-radius:8px;overflow:hidden;border:1px solid #e9e9e9;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background:-webkit-linear-gradient(315deg,#f5f7fa,#e8f0fe);background:linear-gradient(135deg,#f5f7fa,#e8f0fe);color:#c5d5f5}.editorial-components-enabled[_nghost-%COMP%]   .step-placeholder[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:36px}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]{margin:8px 0 0;padding-left:20px;list-style:disc}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.65;color:#444;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .step-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-top:10px}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1a73e8;text-decoration:none}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]
		});
		var Xpe = (a, b) => b.title, Qpe = (a, b) => b.text, Mse = class {
			constructor() {
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.sectionLabel = _.V("");
				this.sectionTitle = _.V("");
				this.steps = _.Li([]);
				this.variant = _.V("a");
			}
			zY(a) {
				return (a + 1).toString();
			}
		};
		Mse.J = function(a) {
			return new (a || Mse)();
		};
		Mse.ka = _.u({
			type: Mse,
			da: [["ms-marketing-step-list"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				sectionLabel: [1, "sectionLabel"],
				sectionTitle: [1, "sectionTitle"],
				steps: [1, "steps"],
				variant: [1, "variant"]
			},
			ha: 5,
			ia: 6,
			la: [
				[1, "section-label"],
				[1, "section-title"],
				[1, "step"],
				[1, "step-num"],
				[1, "step-content"],
				[1, "step-title"],
				[1, "step-desc"],
				[1, "step-bullets"],
				[1, "step-links"],
				[1, "prompt-block"],
				[1, "step-chip"],
				[
					1,
					"step-link",
					3,
					"href"
				],
				[1, "prompt-label"],
				[1, "prompt-text"],
				[
					1,
					"chip-icon",
					3,
					"iconName"
				],
				[
					1,
					"step",
					"step-compact"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div"), _.B(1, Lpe, 2, 1, "div", 0), _.B(2, Mpe, 2, 1, "h2", 1), _.B(3, Ype, 2, 0), _.B(4, dqe, 2, 0), _.H());
				a & 2 && (_.qi("step-list-block variant-" + b.variant()), _.y(), _.C(b.sectionLabel() ? 1 : -1), _.y(), _.C(b.sectionTitle() ? 2 : -1), _.y(), _.C(b.variant() === "a" ? 3 : -1), _.y(), _.C(b.variant() === "b" ? 4 : -1));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .step-list-block[_ngcontent-%COMP%]{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#999;margin-bottom:14px}.editorial-components-enabled[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;letter-spacing:-.3px;margin:0 0 16px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .step[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 1fr;gap:16px;padding:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .step-num[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;min-width:24px;border-radius:50%;background:#1a73e8;color:#fff;font-size:13px;font-weight:600;margin-top:1px}.editorial-components-enabled[_nghost-%COMP%]   .step-title[_ngcontent-%COMP%]{font-size:17px;font-weight:600;margin:0 0 6px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .step-desc[_ngcontent-%COMP%]{font-size:15px;line-height:1.65;color:#444;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .prompt-block[_ngcontent-%COMP%]{background:#1a1a1a;border-radius:5px;padding:12px 14px;margin-top:12px;font-family:Google Sans Mono,monospace;font-size:12.5px;color:#cdd5e0;line-height:1.6}.editorial-components-enabled[_nghost-%COMP%]   .prompt-label[_ngcontent-%COMP%]{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#666;margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .prompt-text[_ngcontent-%COMP%]{white-space:pre-wrap}.editorial-components-enabled[_nghost-%COMP%]   .step-chip[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;margin-top:10px;padding:3px 8px;border-radius:3px;font-size:11px;font-weight:600;background:#e8f0fe;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .chip-icon[_ngcontent-%COMP%]{font-size:12px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .step-compact[_ngcontent-%COMP%]{padding:16px 0;border-bottom:1px solid #e9e9e9}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .step-compact[_ngcontent-%COMP%]:last-child{border-bottom:none}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .step[_ngcontent-%COMP%]{grid-template-columns:24px 1fr;gap:12px}}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]{margin:8px 0 0;padding-left:20px;list-style:disc}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.65;color:#444;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .step-links[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-top:10px}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#1a73e8;text-decoration:none}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]
		});
		var Nse = (a, b) => b.title, lqe = (a, b) => b.text, Ose = class {
			constructor() {
				this.qf = _.Dk;
				this.A = _.m(_.Op);
				this.bd = () => this.A.getFlag(_.Pp);
				this.sectionLabel = _.V("");
				this.sectionTitle = _.V("");
				this.steps = _.Li([]);
				this.startIndex = _.V(0);
				this.alignLeft = _.V(!1);
				this.showDividers = _.V(!1);
			}
			zY(a) {
				return (this.startIndex() + a + 1).toString();
			}
		};
		Ose.J = function(a) {
			return new (a || Ose)();
		};
		Ose.ka = _.u({
			type: Ose,
			da: [["ms-marketing-step-zigzag"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				sectionLabel: [1, "sectionLabel"],
				sectionTitle: [1, "sectionTitle"],
				steps: [1, "steps"],
				startIndex: [1, "startIndex"],
				alignLeft: [1, "alignLeft"],
				showDividers: [1, "showDividers"]
			},
			ha: 5,
			ia: 2,
			la: [
				[1, "zigzag-block"],
				[1, "section-label"],
				[1, "section-title"],
				[
					1,
					"zigzag-step",
					3,
					"reverse",
					"text-only",
					"has-divider"
				],
				[1, "zigzag-step"],
				[1, "zigzag-text"],
				[1, "step-num"],
				[1, "step-body"],
				[1, "step-title"],
				[1, "step-desc"],
				[1, "step-bullets"],
				[1, "zigzag-media"],
				[
					1,
					"step-link",
					3,
					"href"
				],
				[
					1,
					"step-image",
					3,
					"src",
					"alt"
				],
				[1, "step-placeholder"],
				[3, "iconName"]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0), _.B(1, eqe, 2, 1, "div", 1), _.B(2, fqe, 2, 1, "h2", 2), _.Ah(3, tqe, 13, 11, "div", 3, Nse), _.H());
				a & 2 && (_.y(), _.C(b.sectionLabel() ? 1 : -1), _.y(), _.C(b.sectionTitle() ? 2 : -1), _.y(), _.Bh(b.steps()));
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;max-width:960px;margin-inline:auto;padding-inline:24px;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Google Sans,Helvetica Neue,Arial,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:18px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-block[_ngcontent-%COMP%]{color:#111}.editorial-components-enabled[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%]{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#999;margin-bottom:14px}.editorial-components-enabled[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;letter-spacing:-.3px;margin:0 0 32px;color:#111}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:48px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:40px 0}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step.has-divider[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #e9e9e9}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step[_ngcontent-%COMP%]:not(:has(.zigzag-media)){grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step.reverse[_ngcontent-%COMP%]{direction:rtl}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step.reverse[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{direction:ltr}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step.text-only[_ngcontent-%COMP%]{grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-text[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:16px}.editorial-components-enabled[_nghost-%COMP%]   .step-num[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:36px;height:36px;min-width:36px;border-radius:50%;background:#1a73e8;color:#fff;font-size:15px;font-weight:600;margin-top:2px}.editorial-components-enabled[_nghost-%COMP%]   .step-title[_ngcontent-%COMP%]{font-size:17px;font-weight:600;color:#111;margin:0 0 6px}.editorial-components-enabled[_nghost-%COMP%]   .step-desc[_ngcontent-%COMP%]{font-size:14.5px;line-height:1.65;color:#444;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-media[_ngcontent-%COMP%]{border-radius:8px;overflow:hidden}.editorial-components-enabled[_nghost-%COMP%]   .step-image[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.editorial-components-enabled[_nghost-%COMP%]   .step-placeholder[_ngcontent-%COMP%]{height:280px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background:-webkit-linear-gradient(315deg,#f5f7fa,#e8f0fe);background:linear-gradient(135deg,#f5f7fa,#e8f0fe);color:#c5d5f5}.editorial-components-enabled[_nghost-%COMP%]   .step-placeholder[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:36px}@media (max-width:768px){.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:24px}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step[_ngcontent-%COMP%]:not(:has(.zigzag-media)){grid-template-columns:1fr}.editorial-components-enabled[_nghost-%COMP%]   .zigzag-step.reverse[_ngcontent-%COMP%]{direction:ltr}}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]{margin:8px 0 0;padding-left:20px;list-style:disc}.editorial-components-enabled[_nghost-%COMP%]   .step-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.65;color:#444;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]     .step-desc a{color:#1a73e8;text-decoration:none;font-weight:500}.editorial-components-enabled[_nghost-%COMP%]   .step-link[_ngcontent-%COMP%]:hover, .editorial-components-enabled[_nghost-%COMP%]     .step-desc a:hover{text-decoration:underline}"]
		});
		var j8 = (a, b) => b.language, xqe = function(a, b, c) {
			if (!b) return "";
			a = a.H.highlight(b, c).value;
			return _.tdb.Em(a);
		}, zqe = function(a) {
			var b, c, d = (c = (b = a.tabs().find((e) => e.language === a.kq())) == null ? void 0 : b.code) != null ? c : "";
			navigator.clipboard.writeText(d);
			a.Qk.set(!0);
			a.A && clearTimeout(a.A);
			a.A = setTimeout(() => {
				a.Qk.set(!1);
			}, 2e3);
		}, Pse = class {
			constructor() {
				this.qf = _.Dk;
				this.F = _.m(_.Op);
				this.H = _.m(_.ZL);
				this.bd = () => this.F.getFlag(_.Pp);
				this.ub = _.m(_.ag);
				this.tabs = _.Li([]);
				this.title = _.V("");
				this.variant = _.V("a");
				this.kq = _.M("");
				this.Qk = _.M(!1);
				this.ub.Hc(() => {
					this.A && clearTimeout(this.A);
				});
			}
			ib() {
				var a, b;
				this.kq.set((b = (a = this.tabs()[0]) == null ? void 0 : a.language) != null ? b : "");
			}
			sAa(a) {
				return Array.from({ length: a.split("\n").length }, (b, c) => c + 1);
			}
		};
		Pse.J = function(a) {
			return new (a || Pse)();
		};
		Pse.ka = _.u({
			type: Pse,
			da: [["ms-marketing-tabbed-code-block"]],
			Ua: 2,
			Ja: function(a, b) {
				a & 2 && _.P("editorial-components-enabled", b.bd());
			},
			inputs: {
				tabs: [1, "tabs"],
				title: [1, "title"],
				variant: [1, "variant"]
			},
			ha: 4,
			ia: 3,
			la: [
				[1, "titlebar-vscode"],
				[1, "filename"],
				[
					1,
					"copy-btn-vscode",
					3,
					"click"
				],
				[3, "iconName"],
				[1, "tab-bar-vscode"],
				[
					1,
					"code-panel",
					3,
					"active"
				],
				[
					1,
					"tab-vscode",
					3,
					"active"
				],
				[
					1,
					"tab-vscode",
					3,
					"click"
				],
				[1, "code-panel"],
				[1, "code-body"],
				[1, "line-numbers"],
				[3, "innerHTML"],
				[1, "titlebar-github"],
				[1, "lang-badge"],
				[
					1,
					"copy-btn-github",
					3,
					"click"
				],
				[1, "tab-bar-github"],
				[
					1,
					"tab-github",
					3,
					"active"
				],
				[
					1,
					"tab-github",
					3,
					"click"
				],
				[1, "floating-label"],
				[
					1,
					"copy-btn-minimal",
					3,
					"click"
				],
				[1, "tab-bar-minimal"],
				[
					1,
					"tab-minimal",
					3,
					"active"
				],
				[
					1,
					"tab-minimal",
					3,
					"click"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div"), _.B(1, Aqe, 9, 6)(2, Fqe, 9, 6)(3, Jqe, 7, 5), _.H());
				if (a & 2) {
					let c;
					_.qi("code-block variant-" + b.variant());
					_.y();
					_.C((c = b.variant()) === "a" ? 1 : c === "b" ? 2 : c === "c" ? 3 : -1);
				}
			},
			dependencies: [_.dz],
			styles: [".editorial-components-enabled[_nghost-%COMP%]{display:block;font-family:Google Sans,sans-serif}.editorial-components-enabled[_nghost-%COMP%]   .code-block[_ngcontent-%COMP%]{border-radius:12px;overflow:hidden;margin:32px 0;box-shadow:0 2px 12px rgba(0,0,0,.08);position:relative}.editorial-components-enabled[_nghost-%COMP%]   .code-panel[_ngcontent-%COMP%]{display:none}.editorial-components-enabled[_nghost-%COMP%]   .code-panel.active[_ngcontent-%COMP%]{display:block}.editorial-components-enabled[_nghost-%COMP%]   .code-body[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;overflow-x:auto}.editorial-components-enabled[_nghost-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;overflow-x:auto;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.editorial-components-enabled[_nghost-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:13px;line-height:1.65}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]{background:#282a36}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .titlebar-vscode[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#1e1e2e;padding:0 16px;height:40px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:12px;color:#8b949e;letter-spacing:.3px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .copy-btn-vscode[_ngcontent-%COMP%]{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px;font-family:Google Sans,sans-serif;font-size:11px;font-weight:500;color:#8b949e;background:none;border:none;cursor:pointer;padding:4px 8px;border-radius:4px;-webkit-transition:color .15s,background .15s;transition:color .15s,background .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .copy-btn-vscode[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:13px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .copy-btn-vscode[_ngcontent-%COMP%]:hover{color:#e4e4e4;background:hsla(0,0%,100%,.06)}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .copy-btn-vscode.copied[_ngcontent-%COMP%]{color:#98c379}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .tab-bar-vscode[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background:#1e1e2e;border-bottom:1px solid #2d2d3d;padding:0 16px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .tab-vscode[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:11.5px;font-weight:500;color:#8b949e;padding:8px 14px;cursor:pointer;background:none;border:none;border-bottom:2px solid transparent;-webkit-transition:color .15s,border-color .15s;transition:color .15s,border-color .15s;letter-spacing:.3px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .tab-vscode.active[_ngcontent-%COMP%]{color:#e4e4e4;border-bottom-color:#c678dd}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .tab-vscode[_ngcontent-%COMP%]:hover:not(.active){color:#c9d1d9}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .code-panel[_ngcontent-%COMP%]{background:#282a36}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:18px 0;min-width:44px;text-align:right;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-right:1px solid #3d3d5c;background:rgba(0,0,0,.15)}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:13px;line-height:1.65;color:#5c6370;padding-right:12px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:18px 20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#e4e4e4}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-keyword[_ngcontent-%COMP%]{color:#c678dd}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-function[_ngcontent-%COMP%]{color:#61afef}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-string[_ngcontent-%COMP%]{color:#98c379}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-comment[_ngcontent-%COMP%]{color:#5c6370;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-number[_ngcontent-%COMP%]{color:#d19a66}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-builtin[_ngcontent-%COMP%]{color:#e5c07b}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-operator[_ngcontent-%COMP%]{color:#c678dd}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-decorator[_ngcontent-%COMP%]{color:#e5c07b}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .token-property[_ngcontent-%COMP%]{color:#61afef}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-keyword, .editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-selector-tag{color:#c678dd}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-built_in{color:#e5c07b}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-title, .editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-title\\.function_{color:#61afef}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-doctag, .editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-string{color:#98c379}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-comment{color:#5c6370;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-number{color:#d19a66}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-attr, .editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-variable{color:#d19a66}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-params{color:#e4e4e4}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-meta{color:#e5c07b}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]     .hljs-subst{color:#e4e4e4}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]{background:#fff;border:1px solid #d1d5db}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .titlebar-github[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#f6f8fa;border-bottom:1px solid #d1d5db;padding:0 16px;height:40px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .lang-badge[_ngcontent-%COMP%]{font-family:Google Sans,sans-serif;font-size:11px;font-weight:600;color:#57606a;background:#e1e4e8;padding:2px 8px;border-radius:4px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .copy-btn-github[_ngcontent-%COMP%]{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px;font-family:Google Sans,sans-serif;font-size:11px;font-weight:500;color:#57606a;background:#fff;border:1px solid #d1d5db;cursor:pointer;padding:4px 10px;border-radius:6px;-webkit-transition:color .15s,background .15s,border-color .15s;transition:color .15s,background .15s,border-color .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .copy-btn-github[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:13px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .copy-btn-github[_ngcontent-%COMP%]:hover{color:#24292e;background:#f6f8fa;border-color:#afb8c1}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .copy-btn-github.copied[_ngcontent-%COMP%]{color:#1a7f37;border-color:#1a7f37}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .tab-bar-github[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background:#f6f8fa;border-bottom:1px solid #d1d5db;padding:0 16px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .tab-github[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:11.5px;font-weight:500;color:#57606a;padding:8px 14px;cursor:pointer;background:none;border:none;border-bottom:2px solid transparent;-webkit-transition:color .15s,border-color .15s;transition:color .15s,border-color .15s;letter-spacing:.3px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .tab-github.active[_ngcontent-%COMP%]{color:#24292e;border-bottom-color:#d73a49}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .tab-github[_ngcontent-%COMP%]:hover:not(.active){color:#24292e}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .code-panel[_ngcontent-%COMP%]{background:#fff}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:18px 0;min-width:44px;text-align:right;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-right:1px solid #e1e4e8;background:#f6f8fa}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:13px;line-height:1.65;color:#afb8c1;padding-right:12px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:18px 20px}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#24292e}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-keyword[_ngcontent-%COMP%]{color:#d73a49}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-function[_ngcontent-%COMP%]{color:#6f42c1}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-string[_ngcontent-%COMP%]{color:#032f62}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-comment[_ngcontent-%COMP%]{color:#6a737d;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-number[_ngcontent-%COMP%]{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-builtin[_ngcontent-%COMP%]{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-operator[_ngcontent-%COMP%]{color:#d73a49}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-decorator[_ngcontent-%COMP%]{color:#6f42c1}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .token-property[_ngcontent-%COMP%]{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-keyword, .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-selector-tag{color:#d73a49}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-built_in{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-title, .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-title\\.function_{color:#6f42c1}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-doctag, .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-string{color:#032f62}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-comment{color:#6a737d;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-number{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-attr, .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-variable{color:#005cc5}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-params{color:#24292e}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-meta{color:#6f42c1}.editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]     .hljs-subst{color:#24292e}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]{background:#0d1117;border-radius:8px;padding:24px 28px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%]{position:absolute;top:12px;right:16px;font-family:Google Sans Mono,Roboto Mono,monospace;font-size:10px;font-weight:500;color:#484f58;text-transform:uppercase;letter-spacing:.8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .copy-btn-minimal[_ngcontent-%COMP%]{position:absolute;top:12px;right:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:none;border:none;cursor:pointer;color:#484f58;padding:4px;border-radius:4px;-webkit-transition:color .15s,background .15s;transition:color .15s,background .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .copy-btn-minimal[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-size:14px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .copy-btn-minimal[_ngcontent-%COMP%]:hover{color:#c9d1d9;background:hsla(0,0%,100%,.06)}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .copy-btn-minimal.copied[_ngcontent-%COMP%]{color:#3fb950}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .tab-bar-minimal[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-bottom:16px;gap:4px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .tab-minimal[_ngcontent-%COMP%]{font-family:Google Sans Mono,Roboto Mono,monospace;font-size:11px;font-weight:500;color:#484f58;padding:4px 10px;cursor:pointer;background:none;border:none;border-radius:4px;-webkit-transition:color .15s,background .15s;transition:color .15s,background .15s}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .tab-minimal.active[_ngcontent-%COMP%]{color:#c9d1d9;background:hsla(0,0%,100%,.06)}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .tab-minimal[_ngcontent-%COMP%]:hover:not(.active){color:#8b949e}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .code-panel[_ngcontent-%COMP%]{background:#0d1117}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:0}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#c9d1d9}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-keyword[_ngcontent-%COMP%]{color:#ff7b72}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-function[_ngcontent-%COMP%]{color:#d2a8ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-string[_ngcontent-%COMP%]{color:#a5d6ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-comment[_ngcontent-%COMP%]{color:#484f58;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-number[_ngcontent-%COMP%]{color:#79c0ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-builtin[_ngcontent-%COMP%]{color:#ffa657}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-operator[_ngcontent-%COMP%]{color:#ff7b72}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-decorator[_ngcontent-%COMP%]{color:#ffa657}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]   .token-property[_ngcontent-%COMP%]{color:#79c0ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-keyword, .editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-selector-tag{color:#ff7b72}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-built_in{color:#ffa657}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-title, .editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-title\\.function_{color:#d2a8ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-doctag, .editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-string{color:#a5d6ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-comment{color:#484f58;font-style:italic}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-number{color:#79c0ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-attr, .editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-variable{color:#79c0ff}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-params{color:#c9d1d9}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-meta{color:#ffa657}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]     .hljs-subst{color:#c9d1d9}@media (max-width:600px){.editorial-components-enabled[_nghost-%COMP%]   .code-block[_ngcontent-%COMP%]{border-radius:8px;margin:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]{min-width:36px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;padding-right:8px}.editorial-components-enabled[_nghost-%COMP%]   .variant-a[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .variant-b[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:11.5px}.editorial-components-enabled[_nghost-%COMP%]   .variant-c[_ngcontent-%COMP%]{padding:16px 18px}}"]
		});
		var Qse = (a, b) => b.tool, Rse = class {
			constructor() {
				this.header = _.V("");
				this.columns = _.Li([]);
				this.rows = _.Li([]);
			}
		};
		Rse.J = function(a) {
			return new (a || Rse)();
		};
		Rse.ka = _.u({
			type: Rse,
			da: [["ms-marketing-table-box"]],
			inputs: {
				header: [1, "header"],
				columns: [1, "columns"],
				rows: [1, "rows"]
			},
			ha: 11,
			ia: 1,
			la: [
				[1, "table-box-module"],
				[1, "table-header"],
				[1, "container"],
				[1, "table-glass"],
				[1, "pill-type"],
				[1, "status-check"],
				[3, "innerHTML"]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div", 0), _.B(1, Kqe, 2, 1, "h3", 1), _.Dh(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr"), _.Ah(6, Lqe, 2, 1, "th", null, _.zh), _.Eh()(), _.Dh(8, "tbody"), _.Ah(9, Mqe, 9, 6, "tr", null, Qse), _.Eh()()()());
				a & 2 && (_.y(), _.C(b.header() ? 1 : -1), _.y(5), _.Bh(b.columns()), _.y(3), _.Bh(b.rows()));
			},
			styles: ["[_nghost-%COMP%]{display:block;font-family:Google Sans,Helvetica Neue,Arial,sans-serif;margin:32px 0}[_nghost-%COMP%]   .table-header[_ngcontent-%COMP%]{font-size:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#80868b;margin:0 0 16px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{background:#fff;padding:0;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}[_nghost-%COMP%]   .table-glass[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;text-align:left;font-size:14px}[_nghost-%COMP%]   .table-glass[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f8f9fa;color:#1f1f1f;font-weight:600;padding:14px 20px;font-size:12px;letter-spacing:.5px;text-transform:uppercase;border-bottom:1px solid #e0e0e0}[_nghost-%COMP%]   .table-glass[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:16px 20px;border-bottom:1px solid #f1f3f4;color:#3c4043;vertical-align:middle}[_nghost-%COMP%]   .table-glass[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}[_nghost-%COMP%]   .table-glass[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:#f1f6fe}[_nghost-%COMP%]   .pill-type[_ngcontent-%COMP%]{background:#fff;border:1px solid #1a73e8;color:#1a73e8;padding:3px 10px;font-size:12px;font-family:Google Sans Mono,monospace;display:inline-block;border-radius:6px;font-weight:500}[_nghost-%COMP%]   .pill-grey[_ngcontent-%COMP%]{border-color:#bdc1c6;color:#5f6368}[_nghost-%COMP%]   .status-check[_ngcontent-%COMP%]{color:#1a73e8;font-weight:700}[_nghost-%COMP%]     td a{color:#1a73e8;text-decoration:none}[_nghost-%COMP%]     td a:hover{text-decoration:underline}[_nghost-%COMP%]     td b, [_nghost-%COMP%]     td strong{font-weight:600}"]
		});
		var k8 = (a) => ({ V: a }), jre = () => [], Sqe = (a, b) => b.label, Tse = function(a, b, c) {
			return _.x(function* () {
				a.page = void 0;
				a.notFound = !1;
				var d = kse(a.H, b);
				d && Sse(a, d);
				if (d = yield mse(a.H, b, c)) {
					a.page = d;
					var e;
					a.layout = (e = d.layout) != null ? e : "linear";
					var f;
					a.gka = (f = d.heroLeft) != null ? f : [];
					var g;
					a.hka = (g = d.heroRight) != null ? g : [];
					var k;
					a.bca = (k = d.sidebar) != null ? k : [];
					var p;
					e = (p = d.belowFold) != null ? p : d.modules;
					if (a.bca.length > 0) {
						g = new Set(["faq"]);
						p = [];
						f = [];
						k = !1;
						for (var r of e) !k && g.has(r.type) && (k = !0), k ? f.push(r) : p.push(r);
						(r = p[p.length - 1]) && r.type === "cta" && r.content && r.content.variant === "a" && f.unshift(p.pop());
						a.H4 = p;
						a.Yia = f;
					} else a.H4 = e, a.Yia = [];
					var v;
					a.breadcrumbs = (v = d.breadcrumbs) != null ? v : [];
					Sse(a, d.meta);
					_.Rn(a.I, "LEARN_PAGE", "Learn Page Viewed", b);
				} else a.notFound = !0, a.F.A.title = "Page Not Found | Google AI Studio", _.Rz(a.A, {
					name: "description",
					content: "The requested page could not be found."
				}), _.Rz(a.A, {
					property: "og:title",
					content: "Page Not Found | Google AI Studio"
				}), _.Rz(a.A, {
					property: "og:description",
					content: "The requested page could not be found."
				});
				a.R.lb();
			});
		}, Sse = function(a, b) {
			a.F.A.title = b.title || "";
			_.Rz(a.A, {
				name: "description",
				content: b.description
			});
			_.Rz(a.A, {
				property: "og:title",
				content: b.title
			});
			_.Rz(a.A, {
				property: "og:description",
				content: b.description
			});
			b.ogImage && _.Rz(a.A, {
				property: "og:image",
				content: b.ogImage
			});
		};
		_.Ur = class {
			constructor() {
				this.U = _.m(_.Op);
				this.bd = () => this.U.getFlag(_.Pp);
				this.route = _.m(_.ll);
				this.R = _.m(_.Hu);
				this.F = _.m(_.Tz);
				this.A = _.m(_.Sz);
				this.I = _.m(_.Ou);
				this.H = _.m(l8);
				this.document = _.m(_.Xk);
				this.Dc = _.m(_.cm);
				this.notFound = !1;
				this.layout = "linear";
				this.breadcrumbs = [];
				this.gka = [];
				this.hka = [];
				this.H4 = [];
				this.Yia = [];
				this.bca = [];
			}
			Zca(a) {
				return a;
			}
			UFa(a) {
				var b = a.target.closest(".copyable-model");
				b && (a = b.textContent) && (navigator.clipboard.writeText(a.trim()), b.classList.add("copied"), setTimeout(() => {
					b.classList.remove("copied");
				}, 1500));
			}
			ib() {
				this.Dc.Oh(this.document.documentElement, "overflow-y", "auto");
				this.Dc.Oh(this.document.body, "overflow-y", "auto");
				this.X = _.vf([this.route.lC, this.route.Op]).pipe(_.ch(([a, b]) => {
					var c, d, e = (d = (c = a.get("slug")) != null ? c : this.route.snapshot.data.slug) != null ? d : "", f = (a = b.get("content_id")) ? `https://www.gstatic.com/aistudio-static/editorial/pages/${a}.json` : b.get("preview_url");
					return _.zf(() => Tse(this, e, f));
				})).subscribe();
			}
			Ba() {
				this.Dc.Oh(this.document.documentElement, "overflow-y", "hidden");
				this.Dc.Oh(this.document.body, "overflow-y", "hidden");
				var a;
				(a = this.X) == null || a.unsubscribe();
			}
		};
		_.Ur.J = function(a) {
			return new (a || _.Ur)();
		};
		_.Ur.ka = _.u({
			type: _.Ur,
			da: [["ms-marketing-learn-screen"]],
			Ua: 4,
			Ja: function(a, b) {
				a & 1 && _.J("click", function(c) {
					return b.UFa(c);
				});
				a & 2 && _.P("editorial-components-enabled", b.bd())("light-theme", !0);
			},
			ha: 5,
			ia: 2,
			la: [
				["moduleRenderer", ""],
				[1, "not-found"],
				[1, "breadcrumb-bar"],
				["theme", "light"],
				[1, "breadcrumb-list"],
				[1, "breadcrumb-item"],
				[
					1,
					"breadcrumb-link",
					3,
					"href"
				],
				[3, "breadcrumb-current"],
				[
					"aria-hidden",
					"true",
					1,
					"breadcrumb-sep"
				],
				[1, "hero-grid"],
				[1, "hero-grid__item"],
				[1, "below-fold"],
				[
					3,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					1,
					"full-width-section",
					"full-width-top"
				],
				[1, "page-linear"],
				[1, "main-col"],
				[1, "sidebar-col"],
				[
					1,
					"full-width-section",
					"full-width-bottom"
				],
				[1, "full-width-section"],
				[
					"variant",
					"a",
					3,
					"label",
					"labelDotColor",
					"labelIcon",
					"headline",
					"subhead",
					"breadcrumb",
					"meta"
				],
				[
					"variant",
					"a",
					3,
					"sectionLabel",
					"sectionTitle",
					"steps"
				],
				[
					3,
					"headline",
					"description",
					"primaryCtaText",
					"primaryCtaUrl",
					"secondaryCtaText",
					"secondaryCtaUrl",
					"variant",
					"ctaIcon"
				],
				[
					3,
					"imageSrc",
					"imageAlt",
					"playText",
					"playUrl",
					"remixText",
					"remixUrl",
					"techChips",
					"tagline"
				],
				[
					3,
					"label",
					"items"
				],
				[
					3,
					"label",
					"guides"
				],
				[
					3,
					"authorName",
					"authorHandle",
					"authorAvatarUrl",
					"tweetText",
					"timestamp",
					"likeCount",
					"retweetCount",
					"replyCount",
					"mediaImageUrl"
				],
				[
					3,
					"videoId",
					"title",
					"startTime",
					"caption",
					"variant"
				],
				[
					3,
					"authorName",
					"authorTitle",
					"authorAvatarUrl",
					"postText",
					"timestamp",
					"likeCount",
					"commentCount",
					"mediaImageUrl"
				],
				[
					3,
					"heading",
					"items"
				],
				[
					3,
					"sectionLabel",
					"sectionTitle",
					"steps",
					"startIndex",
					"alignLeft",
					"showDividers"
				],
				[
					3,
					"sectionLabel",
					"sectionTitle",
					"steps",
					"startIndex"
				],
				[
					3,
					"sections",
					"variant",
					"isLead"
				],
				[
					3,
					"authorName",
					"authorInitials",
					"authorRole",
					"avatarColor",
					"avatarUrl",
					"authorUrl",
					"xHandle",
					"publishDate",
					"readTime"
				],
				[
					3,
					"publishDate",
					"readTime",
					"buildTime",
					"authorName",
					"authorInitials",
					"authorColor",
					"rating",
					"difficulty"
				],
				[
					3,
					"quote",
					"attribution"
				],
				[
					3,
					"text",
					"calloutType",
					"icon",
					"linkText",
					"linkUrl"
				],
				[
					3,
					"layout",
					"variant",
					"header",
					"showStepLabels",
					"items"
				],
				[
					3,
					"mediaType",
					"src",
					"alt",
					"caption"
				],
				[
					3,
					"tabs",
					"title",
					"variant"
				],
				[
					3,
					"title",
					"items"
				],
				[
					3,
					"title",
					"description",
					"slots",
					"segments",
					"bundledSlug",
					"variant"
				],
				[1, "hero-applet-combo"],
				[
					1,
					"hero-applet-combo__hero",
					"dimmed"
				],
				[1, "combo-label"],
				[1, "combo-headline"],
				[1, "combo-subhead"],
				[1, "hero-applet-combo__applet"],
				[1, "combo-label-dot"],
				[1, "editorial-icon-grid"],
				[1, "editorial-text-heading"],
				[1, "editorial-text-body"],
				[1, "icon-grid-container"],
				[1, "icon-grid-cell"],
				[
					1,
					"icon-grid-icon",
					3,
					"iconName"
				],
				[1, "icon-grid-label"],
				[
					3,
					"title",
					"sectionId",
					"samples",
					"variant"
				],
				[
					3,
					"sectionLabel",
					"sectionTitle",
					"introText",
					"examples",
					"variant"
				],
				[1, "editorial-stats-grid"],
				[1, "stats-card"],
				[1, "stats-value"],
				[1, "stats-label"],
				[1, "editorial-text-module"],
				[
					1,
					"editorial-text-body",
					3,
					"innerHTML"
				],
				[
					3,
					"label",
					"mono",
					"labelColor",
					"subtitle"
				],
				[
					3,
					"header",
					"columns",
					"rows"
				],
				[
					3,
					"title",
					"description",
					"imageSrc",
					"videoSrc",
					"imageAlt",
					"playText",
					"playUrl",
					"remixText",
					"remixUrl",
					"techChips",
					"variant",
					"headingSize",
					"subtitle",
					"primaryBgColor",
					"primaryTextColor",
					"secondaryBgColor",
					"secondaryTextColor"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, Nqe, 5, 0, "div", 1), _.I(1, "ms-marketing-nav"), _.B(2, ire, 4, 3), _.z(3, gse, 32, 1, "ng-template", null, 0, _.Ii));
				a & 2 && (_.C(b.notFound ? 0 : -1), _.y(2), _.C(b.page ? 2 : -1));
			},
			dependencies: [
				_.nz,
				nse,
				ose,
				pse,
				xse,
				Bse,
				Ise,
				Mse,
				Jse,
				o8,
				p8,
				q8,
				_.i8,
				Lse,
				Ose,
				qse,
				tse,
				use,
				wse,
				yse,
				zse,
				Ase,
				Dse,
				Gse,
				Pse,
				Rse,
				sse,
				n8,
				_.g8,
				_.h8,
				_.dz
			],
			styles: ["[_ngcontent-%COMP%]:root{--ms-marketing-color-bg:#121317;--ms-marketing-color-text-primary:#fff;--ms-marketing-color-text-muted:#b2bbc5;--ms-marketing-color-text-nav:#d4d4d4;--ms-marketing-color-accent-blue:#2e96ff;--ms-marketing-color-button-bg:#fff;--ms-marketing-color-button-text:#0e0f12;--ms-marketing-color-neutral-90:#1e1f23;--ms-marketing-color-bg-container:#1a1b1f}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Google Sans Flex,sans-serif;font-weight:400;font-size:16px;line-height:1.5;color:#fff;background-color:#121317}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border:none;background:none}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;border:none;outline:none;background:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:400;line-height:1.2}.text-muted[_ngcontent-%COMP%]{color:#b2bbc5}.text-accent[_ngcontent-%COMP%]{color:#2e96ff}.material-symbols-outlined[_ngcontent-%COMP%]{font-family:Google Symbols;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\";-moz-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-variation-settings:\"FILL\" 0,\"wght\" 300,\"GRAD\" 0,\"opsz\" 30}.btn[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-weight:500;font-size:14.5px;line-height:21px;letter-spacing:.11px;border-radius:12px;padding:8px 16px;-webkit-transition:background-color .2s ease;transition:background-color .2s ease;white-space:nowrap;cursor:pointer;text-decoration:none}.btn--primary[_ngcontent-%COMP%]{background-color:#fff;color:#0e0f12}.btn--primary[_ngcontent-%COMP%]:hover{background-color:#e6eaf0}.btn--primary[_ngcontent-%COMP%]:active{background-color:#cdd4dc}.btn--primary.is-disabled[_ngcontent-%COMP%], .btn--primary[_ngcontent-%COMP%]:disabled{background-color:#18191d;color:#45474d;cursor:default}.btn--large[_ngcontent-%COMP%]{font-size:17.5px;line-height:25.375px;letter-spacing:.1925px;padding:14px 24px 14px 20px}.btn--large[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{font-size:20px}.btn__icon[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:Material Symbols Outlined;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:18px;line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.btn__icon-svg[_ngcontent-%COMP%]{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.editorial-components-enabled[_nghost-%COMP%]{display:block;padding-top:70px;min-height:100vh;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;background:var(--color-v3-surface,#fff);color:var(--color-v3-text,#1f1f1f)}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-nav .nav{background:#121317}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-bar[_ngcontent-%COMP%]{border-bottom:1px solid var(--color-v3-outline);padding:0 40px;height:38px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:1180px;margin:0 auto}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-list[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;padding:0;margin:0;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var)}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]{color:var(--color-v3-text-var);text-decoration:none;-webkit-transition:color .12s;transition:color .12s}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-link[_ngcontent-%COMP%]:hover{color:var(--color-v3-text,#1f1f1f)}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-current[_ngcontent-%COMP%]{color:var(--color-v3-text,#1f1f1f);font-weight:500}.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-sep[_ngcontent-%COMP%]{color:var(--color-v3-outline-var);margin:0 6px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid[_ngcontent-%COMP%]{max-width:1180px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:55fr 45fr;grid-template-areas:\"hero         applet\" \"steps        prereqs\" \"steps        related\";gap:0;min-height:520px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=hero][_ngcontent-%COMP%]{grid-area:hero;padding:52px 32px 24px 0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=steps][_ngcontent-%COMP%]{grid-area:steps;padding:0 32px 52px 0;border-right:1px solid var(--color-v3-outline)}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=applet_frame][_ngcontent-%COMP%]{grid-area:prereqs;padding:0 0 16px 32px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=applet_frame][_ngcontent-%COMP%]     .applet-frame{margin-top:-12px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=social_youtube][_ngcontent-%COMP%]{grid-area:applet;padding:64px 0 0 16px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=social_youtube][_ngcontent-%COMP%]     ms-marketing-social-youtube{padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=cta][_ngcontent-%COMP%]{grid-area:prereqs;padding:0 0 16px 32px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=prereqs][_ngcontent-%COMP%]{grid-area:steps;padding:0 32px 16px 0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=prereqs][_ngcontent-%COMP%]     ms-marketing-prereqs-checklist{padding-left:60px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=prereqs][_ngcontent-%COMP%]     ms-marketing-prereqs-checklist .prereqs-checklist{border-top:none;padding-top:0;margin-top:0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=related_guides][_ngcontent-%COMP%]{grid-area:related;padding:0 0 52px 32px}.editorial-components-enabled[_nghost-%COMP%]   .below-fold[_ngcontent-%COMP%]{max-width:1180px;margin:0 auto;padding:0 40px 80px}.editorial-components-enabled[_nghost-%COMP%]   .below-fold[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:32px}.editorial-components-enabled[_nghost-%COMP%]   .page-linear[_ngcontent-%COMP%]{max-width:1180px;margin:0 auto;padding:0 40px}.editorial-components-enabled[_nghost-%COMP%]   .page-linear.has-sidebar[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:40px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]{padding:0 0 60px 0;overflow-x:hidden;position:relative;max-width:100%}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-article-header[_ngcontent-%COMP%]:first-child{margin-bottom:0}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-article-header[_ngcontent-%COMP%] + ms-marketing-cta-banner[_ngcontent-%COMP%]{margin-top:12px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-article-header[_ngcontent-%COMP%] + ms-marketing-cta-banner[_ngcontent-%COMP%]     .banner-inline{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-article-header[_ngcontent-%COMP%] + ms-marketing-social-youtube[_ngcontent-%COMP%]{margin-top:32px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-body-text[_ngcontent-%COMP%] + ms-marketing-features[_ngcontent-%COMP%]{margin-top:32px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-article-header[_ngcontent-%COMP%] + ms-marketing-author-byline[_ngcontent-%COMP%]{margin-top:16px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-author-byline[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-top:20px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-audio-player[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-audio-showcase[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-callout-box[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-media-embed[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-tabbed-code-block[_ngcontent-%COMP%]{margin-top:32px;margin-bottom:32px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-body-text[_ngcontent-%COMP%]:not(:first-child){margin-top:48px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-cta-banner[_ngcontent-%COMP%]:not(:first-child), .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-faq[_ngcontent-%COMP%], .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-related-guides[_ngcontent-%COMP%]{margin-top:56px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child):has(.variant-c){margin-bottom:20px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-prompt-highlight[_ngcontent-%COMP%]{margin-top:24px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%] > ms-marketing-cta-banner[_ngcontent-%COMP%]:first-child{margin-top:8px;margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-article-header, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-article-meta, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-author-byline, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-body-text, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-callout-box, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-cta-banner, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-features, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-media-embed, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-prompt-highlight, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-tabbed-code-block{max-width:none;padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-article-header .subhead{margin:0}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-body-text p:not(:last-child){margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     .sidebar-col .section-body, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     .sidebar-col ms-marketing-body-text, .editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     .sidebar-col ms-marketing-body-text p{font-size:20px;font-weight:500;margin-bottom:8px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-related-guides{max-width:480px;padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-article-header .header-blog{padding:32px 0 20px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]     ms-marketing-author-byline .byline{margin-top:0;margin-bottom:0}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]{padding:24px 0 60px 28px;border-left:1px solid var(--color-v3-outline);position:-webkit-sticky;position:sticky;top:90px}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:32px}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]     ms-marketing-related-guides, .editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]     ms-marketing-related-guides ms-marketing-related-guides{max-width:none;padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]   .editorial-text-heading[_ngcontent-%COMP%]{font-size:11px;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .editorial-text-body{font-size:14px;line-height:1.4}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]     ms-marketing-cta-banner .banner-inline{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:6px}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]     ms-marketing-cta-banner .banner-inline .cta-inline{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:4px}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]{max-width:1180px;margin:0 auto;padding:0 40px 40px}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-article-header, .editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-article-header ms-marketing-article-header{max-width:none;padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed, .editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed ms-marketing-media-embed{display:block;max-width:none;padding-inline:0}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed .media-content, .editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed ms-marketing-media-embed .media-content{max-height:420px;object-fit:cover;width:100%;border-radius:12px}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed .media-figure, .editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]     ms-marketing-media-embed ms-marketing-media-embed .media-figure{margin:0}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-faq{display:block}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-faq .faq__title{color:var(--color-v3-text,#1f1f1f)}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-faq .faq__item{background:var(--color-v3-surface-container,#f8f9fa);border:1px solid var(--color-v3-outline,#e0e0e0)}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-faq .faq__question{color:var(--color-v3-text,#1f1f1f)}.editorial-components-enabled[_nghost-%COMP%]     ms-marketing-faq .faq__answer-inner{color:var(--color-v3-text-var,#5f6368)}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]{padding:0}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]   .editorial-text-heading[_ngcontent-%COMP%]{font-size:14px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-v3-text-var);margin:24px 0 8px}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .editorial-text-body{font-family:Google Sans,Helvetica Neue,Arial,sans-serif;font-size:15.5px;line-height:1.65;color:#444;margin:0}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .editorial-text-body code.copyable-model{font-family:Google Sans Mono,monospace;background:#f1f3f4;padding:2px 6px;border-radius:4px;cursor:pointer;position:relative;font-size:.9em;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .editorial-text-body code.copyable-model:hover:not(.copied):after{content:\"Click to copy\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#3c4043;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .editorial-text-body code.copyable-model.copied:after{content:\"Copied!\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#34a853;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .editorial-text-module[_ngcontent-%COMP%]     .section-heading{margin-top:4px}.editorial-components-enabled[_nghost-%COMP%]   .hero-applet-combo[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:32px;padding:32px 0;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}@media (max-width:900px){.editorial-components-enabled[_nghost-%COMP%]   .hero-applet-combo[_ngcontent-%COMP%]{grid-template-columns:1fr}}.editorial-components-enabled[_nghost-%COMP%]   .hero-applet-combo__hero.dimmed[_ngcontent-%COMP%]{opacity:.4;padding:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .combo-label[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--color-v3-text-var);margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .combo-label-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;display:inline-block}.editorial-components-enabled[_nghost-%COMP%]   .combo-headline[_ngcontent-%COMP%]{font-size:28px;line-height:1.15;font-weight:500;color:var(--color-v3-text,#1f1f1f);margin:0 0 12px}.editorial-components-enabled[_nghost-%COMP%]   .combo-subhead[_ngcontent-%COMP%]{font-size:16px;line-height:1.5;color:var(--color-v3-text-var);margin:0}.editorial-components-enabled[_nghost-%COMP%]   .editorial-icon-grid[_ngcontent-%COMP%]{padding:24px 0}.editorial-components-enabled[_nghost-%COMP%]   .icon-grid-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;padding:16px 0}.editorial-components-enabled[_nghost-%COMP%]   .icon-grid-cell[_ngcontent-%COMP%]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100px;padding:12px 4px;gap:6px;border:1px solid var(--color-v3-outline);border-radius:8px;background:var(--color-v3-surface-container)}.editorial-components-enabled[_nghost-%COMP%]   .icon-grid-icon[_ngcontent-%COMP%]{font-size:24px;color:var(--color-v3-text,#1f1f1f)}.editorial-components-enabled[_nghost-%COMP%]   .icon-grid-label[_ngcontent-%COMP%]{font-size:9px;color:var(--color-v3-text-var);word-break:break-all;text-align:center;line-height:1.2;font-family:Google Sans Mono,monospace}.editorial-components-enabled[_nghost-%COMP%]   .editorial-stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:16px;padding:16px 0}.editorial-components-enabled[_nghost-%COMP%]   .stats-card[_ngcontent-%COMP%]{background:#fafbfc;border:1px solid #eaeaea;border-radius:8px;padding:16px;text-align:left;-webkit-transition:box-shadow .2s ease;transition:box-shadow .2s ease}.editorial-components-enabled[_nghost-%COMP%]   .stats-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 8px rgba(0,0,0,.05)}.editorial-components-enabled[_nghost-%COMP%]   .stats-value[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#1f1f1f;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .stats-label[_ngcontent-%COMP%]{font-size:12px;color:#5f6368;text-transform:uppercase;letter-spacing:.05em}.editorial-components-enabled[_nghost-%COMP%]   .copyable-model[_ngcontent-%COMP%]{font-family:Google Sans Mono,monospace;background:#f1f3f4;padding:2px 6px;border-radius:4px;cursor:pointer;position:relative;font-size:.9em;color:#1a73e8}.editorial-components-enabled[_nghost-%COMP%]   .copyable-model[_ngcontent-%COMP%]:hover:not(.copied):after{content:\"Click to copy\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#3c4043;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .copyable-model.copied[_ngcontent-%COMP%]:after{content:\"Copied!\";position:absolute;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#34a853;color:#fff;padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;margin-bottom:4px}.editorial-components-enabled[_nghost-%COMP%]   .full-width-top[_ngcontent-%COMP%]     ms-marketing-article-header{max-width:720px;margin-left:0}.editorial-components-enabled[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%]{max-width:600px;margin:120px auto;text-align:center}.editorial-components-enabled[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:24px;font-weight:600;line-height:32px;margin-bottom:12px}.editorial-components-enabled[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px;color:var(--color-v3-text-var)}@media (max-width:900px){.editorial-components-enabled[_nghost-%COMP%]   .breadcrumb-bar[_ngcontent-%COMP%]{padding:0 20px}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-areas:\"hero\" \"applet\" \"steps\" \"prereqs\" \"related\";padding:0 20px;min-height:auto}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=hero][_ngcontent-%COMP%]{padding:32px 0 16px;border-right:none}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=steps][_ngcontent-%COMP%]{padding:0 0 32px;border-right:none}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=applet_frame][_ngcontent-%COMP%]{padding:16px 0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=prereqs][_ngcontent-%COMP%]{padding:16px 0}.editorial-components-enabled[_nghost-%COMP%]   .hero-grid__item[data-module-type=related_guides][_ngcontent-%COMP%]{padding:16px 0 32px}.editorial-components-enabled[_nghost-%COMP%]   .below-fold[_ngcontent-%COMP%]{padding:0 20px 60px}.editorial-components-enabled[_nghost-%COMP%]   .page-linear[_ngcontent-%COMP%]{padding:0 20px}.editorial-components-enabled[_nghost-%COMP%]   .page-linear.has-sidebar[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:0}.editorial-components-enabled[_nghost-%COMP%]   .sidebar-col[_ngcontent-%COMP%]{display:none}.editorial-components-enabled[_nghost-%COMP%]   .full-width-section[_ngcontent-%COMP%]{padding:0 20px 40px}.editorial-components-enabled[_nghost-%COMP%]   .main-col[_ngcontent-%COMP%]{padding:0 0 40px 20px}}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


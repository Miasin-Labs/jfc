"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		_.hr("FEyY2e");
		var cTb = function(a) {
			a & 1 && (_.I(0, "mat-divider", 4), _.F(1, "div", 5)(2, "div", 6), _.Ih(3, 7), _.H()());
			a & 2 && (_.K(), a = _.O(3), _.y(3), _.E("ngTemplateOutlet", a));
		}, dTb = function(a) {
			a & 1 && (_.F(0, "div", 3), _.Ih(1, 7), _.H());
			a & 2 && (_.K(), a = _.O(3), _.y(), _.E("ngTemplateOutlet", a));
		}, eTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 27);
				_.J("click", function() {
					_.q(b);
					var c = _.K(3);
					return _.t(c.close.emit());
				});
				_.H();
			}
			a & 2 && (a = _.K(3), _.E("iconName", a.S.ac)("ve", a.Isb)("veClick", !0));
		}, fTb = function(a) {
			a & 1 && (_.F(0, "div", 8)(1, "h2", 25), _.R(2), _.H(), _.B(3, eTb, 1, 3, "button", 26), _.H());
			a & 2 && (a = _.K(2), _.y(2), _.U(a.header()), _.y(), _.C(a.kF() === "dialog" ? 3 : -1));
		}, gTb = function(a) {
			a & 1 && (_.F(0, "p", 9), _.R(1), _.H());
			a & 2 && (a = _.K(2), _.y(), _.U(a.hZa()));
		}, hTb = function(a) {
			a & 1 && _.R(0, " Take your app building journey further with usage based billing ");
		}, iTb = function(a) {
			a & 1 && _.R(0, " Experiment with Gemini API models and features directly in the UI. ");
		}, kTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 12, 2);
				_.J("click", function() {
					_.q(b);
					var c = _.O(1), d = _.K(2);
					return _.t(jTb(d, "google-one", c));
				});
				_.F(2, "span", 13)(3, "span", 28);
				_.R(4, "Google");
				_.H();
				_.R(5, " AI ");
				_.H();
				_.F(6, "span", 14);
				_.R(7, "Monthly subscription");
				_.H();
				_.F(8, "span", 15);
				_.R(9, " Access a range of models in AI Studio, higher limits, and more across Google products ");
				_.H();
				_.F(10, "div", 16)(11, "div", 17);
				_.I(12, "span", 18);
				_.F(13, "span", 19);
				_.R(14, "Higher limits");
				_.H()();
				_.F(15, "div", 17);
				_.I(16, "span", 20);
				_.F(17, "span", 19);
				_.R(18, "Access to all models & agents");
				_.H()();
				_.F(19, "div", 17);
				_.I(20, "span", 18);
				_.F(21, "span", 19);
				_.R(22, "Additional Google AI benefits");
				_.H()()()();
			}
			a & 2 && (a = _.K(2), _.P("selected", a.gr() === "google-one"), _.E("ve", a.Lsb)("veClick", !0), _.y(12), _.E("iconName", a.S.iy), _.y(4), _.E("iconName", a.S.CANCEL), _.y(4), _.E("iconName", a.S.iy));
		}, lTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "button", 29);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					return _.t(c.w_());
				});
				_.R(1, " Continue with pay per request ");
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("ve", a.Ksb)("veClick", !0));
		}, mTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.F(0, "a", 30);
				_.J("click", function() {
					_.q(b);
					var c = _.K(2);
					c.PZa.emit();
					_.pMb(c.Vb);
					return _.t();
				});
				_.R(1, " Continue with a Google AI plan ");
				_.H();
			}
			a & 2 && (a = _.K(2), _.E("ve", a.Jsb)("veClick", !0), _.wh("href", a.QCb(), _.rg));
		}, nTb = function(a) {
			if (a & 1) {
				let b = _.n();
				_.B(0, fTb, 4, 2, "div", 8);
				_.B(1, gTb, 2, 1, "p", 9);
				_.F(2, "div", 10)(3, "div", 11)(4, "button", 12, 1);
				_.J("click", function() {
					_.q(b);
					var c = _.O(5), d = _.K();
					return _.t(jTb(d, "pay-per-request", c));
				});
				_.F(6, "span", 13);
				_.R(7, "Gemini API");
				_.H();
				_.F(8, "span", 14);
				_.R(9, "Pay per request");
				_.H();
				_.F(10, "span", 15);
				_.B(11, hTb, 1, 0)(12, iTb, 1, 0);
				_.H();
				_.F(13, "div", 16)(14, "div", 17);
				_.I(15, "span", 18);
				_.F(16, "span", 19);
				_.R(17, "Higher limits");
				_.H()();
				_.F(18, "div", 17);
				_.I(19, "span", 18);
				_.F(20, "span", 19);
				_.R(21, "Access to all models & agents");
				_.H()();
				_.F(22, "div", 17);
				_.I(23, "span", 20);
				_.F(24, "span", 19);
				_.R(25, "Additional Google AI benefits");
				_.H()()()();
				_.B(26, kTb, 23, 7, "button", 21);
				_.H()();
				_.F(27, "div", 22);
				_.B(28, lTb, 2, 2, "button", 23)(29, mTb, 2, 3, "a", 24);
				_.H();
			}
			a & 2 && (a = _.K(), _.C(a.header() && a.kF() !== "inline" ? 0 : -1), _.y(), _.C(a.hZa() ? 1 : -1), _.y(3), _.P("selected", a.gr() === "pay-per-request"), _.E("ve", a.Msb)("veClick", !0), _.y(7), _.C(a.z2a() ? 11 : 12), _.y(4), _.E("iconName", a.S.iy), _.y(4), _.E("iconName", a.S.iy), _.y(4), _.E("iconName", a.S.CANCEL), _.y(3), _.C(a.Hb() || a.r7() === a.Jhb.lrb ? -1 : 26), _.y(2), _.C(a.gr() === "pay-per-request" ? 28 : 29));
		}, oTb = {
			KWb: 0,
			O3b: 1,
			lrb: 2,
			N3b: 3
		}, jTb = function(a, b, c) {
			a.gr.set(b);
			c.scrollIntoView({
				behavior: "smooth",
				block: "nearest"
			});
		};
		_.As = class {
			constructor() {
				this.Isb = 317588;
				this.Msb = 317589;
				this.Lsb = 317590;
				this.Ksb = 317591;
				this.Jsb = 317592;
				this.header = _.V("");
				this.subtitle = _.V("");
				this.kF = _.V("dialog");
				this.r7 = _.V(0);
				this.source = _.V("playground");
				this.PZa = _.Ki();
				this.close = _.Ki();
				this.k7a = _.Ki();
				this.pMb = _.Ki();
				this.S = _.Dk;
				this.Jhb = oTb;
				this.gr = _.M("pay-per-request");
				this.Uha = "You have exceeded your Google AI limits for this model, you can either upgrade to a higher tier or pay as you go until your daily limit resets.";
				this.hZa = _.W(() => this.subtitle() ? this.subtitle() : this.kF() === "inline" ? this.Uha : "");
				this.A = _.m(_.Qu);
				this.Vb = _.m(_.AG);
				this.F = _.m(_.pG);
				this.Hb = _.W(() => _.Nn(this.A.Oe));
				this.z2a = _.W(() => {
					var a = this.F.url();
					return a.startsWith("/apps") || a.startsWith("/build");
				});
				this.QCb = _.W(() => {
					var a = this.A.A;
					a = a > 0 ? `/u/${a}` : "";
					var b = this.z2a(), c = this.r7() === 1;
					return `https://one.google.com${a}/ai?utm_source=ai_studio&utm_campaign=${b ? c ? "ais_build_limited_reached" : "ais_build_limit_reached" : c ? "ais_pg_limited_reached" : "ais_pg_limit_reached"}&utm_medium=web`;
				});
			}
			w_() {
				this.k7a.emit();
			}
		};
		_.As.J = function(a) {
			return new (a || _.As)();
		};
		_.As.ka = _.u({
			type: _.As,
			da: [["ms-upgrade-options"]],
			inputs: {
				header: [1, "header"],
				subtitle: [1, "subtitle"],
				kF: [1, "presentation"],
				r7: [1, "g1Tier"],
				source: [1, "source"]
			},
			outputs: {
				PZa: "explorePlans",
				close: "close",
				k7a: "payAsYouGo",
				pMb: "payAsYouGoSuccess"
			},
			ha: 4,
			ia: 1,
			la: [
				["upgradeOptionsContent", ""],
				["payPerRequestCard", ""],
				["googleOneCard", ""],
				[1, "upgrade-modal-container"],
				[1, "upgrade-divider"],
				[1, "upgrade-inline"],
				[1, "upgrade-inline-container"],
				[3, "ngTemplateOutlet"],
				[1, "shared-dialog-header"],
				[1, "upgrade-subtitle"],
				[1, "upgrade-scrollable-content"],
				[1, "cards-container"],
				[
					1,
					"option-card",
					3,
					"click",
					"ve",
					"veClick"
				],
				[1, "option-title"],
				[1, "option-subtitle"],
				[1, "option-description"],
				[1, "option-features"],
				[1, "feature-item"],
				[
					1,
					"feature-icon",
					"check",
					3,
					"iconName"
				],
				[1, "feature-text"],
				[
					1,
					"feature-icon",
					"cancel",
					3,
					"iconName"
				],
				[
					1,
					"option-card",
					3,
					"selected",
					"ve",
					"veClick"
				],
				[1, "continue-action"],
				[
					"ms-button",
					"",
					3,
					"ve",
					"veClick"
				],
				[
					"ms-button",
					"",
					"target",
					"_blank",
					"rel",
					"noreferrer",
					1,
					"explore-plans-button",
					3,
					"ve",
					"veClick"
				],
				[1, "upgrade-title"],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"large",
					"aria-label",
					"close",
					1,
					"close-button",
					3,
					"iconName",
					"ve",
					"veClick"
				],
				[
					"ms-button",
					"",
					"variant",
					"icon-borderless",
					"size",
					"large",
					"aria-label",
					"close",
					1,
					"close-button",
					3,
					"click",
					"iconName",
					"ve",
					"veClick"
				],
				[1, "google-one-brand"],
				[
					"ms-button",
					"",
					3,
					"click",
					"ve",
					"veClick"
				],
				[
					"ms-button",
					"",
					"target",
					"_blank",
					"rel",
					"noreferrer",
					1,
					"explore-plans-button",
					3,
					"click",
					"ve",
					"veClick"
				]
			],
			template: function(a, b) {
				a & 1 && (_.B(0, cTb, 4, 1)(1, dTb, 2, 1, "div", 3), _.z(2, nTb, 30, 12, "ng-template", null, 0, _.Ii));
				a & 2 && _.C(b.kF() === "inline" ? 0 : 1);
			},
			dependencies: [
				_.Yy,
				_.tz,
				_.nz,
				_.dz,
				_.OD,
				_.ND,
				_.Bz
			],
			styles: ["[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:inherit;max-height:calc(100vh - 48px)}.upgrade-modal-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-height:0;-moz-box-sizing:border-box;box-sizing:border-box}.upgrade-modal-container[_ngcontent-%COMP%]   .shared-dialog-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.upgrade-scrollable-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-height:0;overflow-y:auto}.upgrade-scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.upgrade-inline[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:12px}.upgrade-divider[_ngcontent-%COMP%]{margin-block:20px 24px}.upgrade-inline-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:490px}.upgrade-inline-container[_ngcontent-%COMP%]   .upgrade-subtitle[_ngcontent-%COMP%]{margin-bottom:0;padding-bottom:32px;text-align:unset}.upgrade-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:24px;font-weight:600;line-height:32px;color:var(--color-v3-text);margin:0 0 8px 0}.upgrade-subtitle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:400;line-height:21px;color:var(--color-v3-text-var);margin:0 0 24px 0}.cards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px}.option-card[_ngcontent-%COMP%]{border:1px solid var(--color-v3-outline-var);-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;background:light-dark(var(--color-v3-surface),var(--color-v3-surface-container-highest));border-radius:12px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px;padding:16px;text-align:left;-webkit-transition:border-color .2s;transition:border-color .2s;font-family:inherit}.option-card.selected[_ngcontent-%COMP%]{border-color:var(--color-v3-outline-accent)}.option-card[_ngcontent-%COMP%]:hover:not(.selected){border-color:var(--color-v3-text-var)}.option-icon[_ngcontent-%COMP%]{color:var(--color-v3-text-var);font-size:16px;margin-bottom:2px}.option-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;color:var(--color-v3-text)}.option-subtitle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var)}.option-description[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var)}.option-features[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;gap:8px;margin-top:8px}.feature-item[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:2px}.feature-icon[_ngcontent-%COMP%]{font-size:16px}.feature-icon.check[_ngcontent-%COMP%]{color:var(--color-v3-accent-4)}.feature-icon.cancel[_ngcontent-%COMP%]{color:var(--color-v3-text-var)}.feature-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:var(--color-v3-text-var)}.google-one-brand[_ngcontent-%COMP%]{font-weight:700}.continue-action[_ngcontent-%COMP%]{margin-top:16px}.continue-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


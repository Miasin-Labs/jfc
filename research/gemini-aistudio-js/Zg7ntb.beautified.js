"use strict";
this.default_MakerSuite = this.default_MakerSuite || {};
(function(_) {
	var window = this;
	try {
		_.hr("Zg7ntb");
		var qTe = function(a, b) {
			a & 1 && (_.Dh(0, "div", 2)(1, "div", 3)(2, "span", 4), _.R(3), _.Eh(), _.Dh(4, "span", 5), _.R(5), _.Eh()(), _.Dh(6, "div", 6), _.R(7), _.Ei(8, "date"), _.Eh()());
			if (a & 2) {
				let c;
				a = b.V;
				b = _.K(2);
				_.y(3);
				_.S(" ", b.Vjb[_.Lm(a, 1)], " ");
				_.y(2);
				_.S(" ", _.l(a, 4), " ");
				_.y(2);
				_.S(" ", _.Gi(8, 3, (c = a.Nw()) == null ? null : c.toDate(), "MMM d, HH:mm"), " ");
			}
		}, sTe = function(a, b) {
			a & 1 && (_.Dh(0, "div", 1), _.R(1), _.Eh(), _.Ah(2, qTe, 9, 6, "div", 2, rTe));
			a & 2 && (a = b.V, b = _.K(), _.P("severity-moderate", a.CE.WL() === b.VJ.jea)("severity-major", a.CE.WL() === b.VJ.psa), _.y(), _.S(" ", a.CE.getTitle(), " "), _.y(), _.Bh(a.events));
		}, tTe = function(a) {
			a & 1 && (_.F(0, "div", 5)(1, "div", 6), _.I(2, "span", 7), _.F(3, "span", 8), _.R(4), _.H()()());
			a & 2 && (a = _.K(2), _.P("severity-moderate", a.DD().severity === a.VJ.jea)("severity-major", a.DD().severity === a.VJ.psa), _.y(2), _.E("iconName", a.MPb()), _.y(2), _.S("", a.DD().severity === a.VJ.jea ? "Partial" : "Full", " outage"));
		}, uTe = function(a) {
			a & 1 && (_.F(0, "div"), _.R(1, "No issues recorded on this day"), _.H());
		}, vTe = function(a, b) {
			a & 1 && (_.F(0, "div", 10)(1, "div", 11), _.R(2), _.H(), _.F(3, "div"), _.R(4), _.H()());
			a & 2 && (a = b.V, _.K(3), _.y(2), _.S(" ", a.CE.getTitle(), " "), _.y(2), a = Math.min(a.F1a, 1440), _.S(" ", `${Math.floor(a / 60)}h ${Math.round(a % 60)}m`, " "));
		}, wTe = function(a) {
			a & 1 && (_.F(0, "div", 9), _.R(1, "Related"), _.H(), _.F(2, "div"), _.Ah(3, vTe, 5, 2, "div", 10, _.yh), _.H());
			a & 2 && (a = _.K(2), _.y(3), _.Bh(a.yka()));
		}, xTe = function(a) {
			a & 1 && (_.F(0, "div", 2)(1, "div", 3), _.R(2), _.Ei(3, "date"), _.H(), _.B(4, tTe, 5, 6, "div", 4)(5, uTe, 2, 0, "div"), _.F(6, "div"), _.B(7, wTe, 5, 0), _.H()());
			a & 2 && (a = _.K(), _.y(2), _.U(_.Fi(3, 3, a.DD().date)), _.y(2), _.C(a.DD().severity ? 4 : 5), _.y(3), _.C(a.yka().length > 0 ? 7 : -1));
		}, yTe = function(a, b) {
			a & 1 && _.I(0, "ms-status-dashboard-day", 2);
			a & 2 && _.E("dailyData", b.V);
		}, zTe = function(a) {
			return a && a.length !== 0 ? a.some((b) => b.WL() === 2) ? 2 : 1 : null;
		}, BTe = function(a, b) {
			var c = null, d = null;
			a = _.mj(a, ATe, 4, _.oj());
			if (!a || a.length === 0) return {
				M1a: null,
				L1a: null
			};
			d = a.map((e) => e.Nw()).filter((e) => e !== null && e !== void 0);
			c = d.reduce((e, f) => f < e ? f : e, d[0]);
			a = a.some((e) => _.Lm(e, 1) === 4);
			d = d.reduce((e, f) => f > e ? f : e, d[0]);
			!c || a && d && d !== c || (d = _.Yt(b));
			return {
				M1a: c,
				L1a: d
			};
		}, CTe = function(a, b) {
			a = a.Nw().getSeconds();
			b = b.Nw().getSeconds();
			return Number(BigInt(b) - BigInt(a));
		}, DTe = function(a) {
			a = a.flatMap((b) => _.mj(b, ATe, 4, _.oj()).map((c) => ({
				CE: b,
				event: c,
				DCb: _.Qk(c.Nw().toDate(), "MMM d, yyyy", "en-US")
			}))).reduce((b, { CE: c, event: d, DCb: e }) => {
				if (!e) return b;
				b.has(e) || b.set(e, []);
				var f = b.get(e).find((g) => g.CE.getId() === c.getId());
				f || (f = {
					CE: c,
					events: []
				}, b.get(e).push(f));
				f.events.push(d);
				return b;
			}, new Map());
			for (let b of a.values()) for (let c of b) c.events.sort(CTe);
			return Array.from(a, ([b, c]) => ({
				date: b,
				tAb: c
			})).sort((b, c) => new Date(c.date).getTime() - new Date(b.date).getTime());
		}, ETe = function(a, b) {
			a & 1 && (_.F(0, "div", 12), _.I(1, "span", 13), _.F(2, "span", 14), _.R(3), _.H()());
			a & 2 && (a = b.V, b = _.K(3), _.y(), _.E("iconName", b.Ipa() === "check" ? b.S.Zf : b.S.WARNING), _.y(2), _.U(a.getTitle()));
		}, FTe = function(a) {
			a & 1 && (_.F(0, "div", 5), _.Ah(1, ETe, 4, 2, "div", 12, _.zh), _.H());
			a & 2 && (a = _.K(2), _.y(), _.Bh(a.y6a()));
		}, GTe = function(a) {
			a & 1 && (_.F(0, "div", 15), _.I(1, "span", 13), _.F(2, "span"), _.R(3), _.H()());
			a & 2 && (a = _.K(2), _.P("full-outage", a.status() === a.Status.ykb)("operational", a.status() === a.Status.Tnb), _.y(), _.E("iconName", a.Ipa() === "check" ? a.S.Zf : a.S.WARNING), _.y(2), _.U(a.status()));
		}, HTe = function(a, b) {
			a & 1 && (_.F(0, "div")(1, "div", 16), _.R(2), _.H(), _.I(3, "ms-status-dashboard", 17), _.H());
			a & 2 && (a = b.V, _.y(2), _.U(a.service), _.y(), _.E("incidents", a.incidents));
		}, ITe = function(a, b) {
			a & 1 && (_.F(0, "div")(1, "div", 18), _.R(2), _.H(), _.I(3, "mat-divider")(4, "ms-status-daily-log", 19), _.H());
			a & 2 && (a = b.V, _.y(2), _.U(a.date), _.y(2), _.E("dailyLogData", a.tAb));
		}, LTe = function(a) {
			a & 1 && (_.F(0, "div", 3), _.B(1, FTe, 3, 0, "div", 5)(2, GTe, 4, 6, "div", 6), _.F(3, "div", 7), _.Ah(4, HTe, 4, 2, "div", null, JTe), _.H(), _.F(6, "div", 8)(7, "h3", 9), _.R(8, "Past Incidents"), _.H(), _.Ah(9, ITe, 5, 2, "div", null, KTe), _.H(), _.F(11, "footer")(12, "div", 10), _.R(13, " Individual customer availability may vary depending on billing status and surface used: free tier, billed tier, as well as the chosen model and API features in use. "), _.F(14, "a", 11), _.R(15, "Developer forum"), _.H()()()());
			a & 2 && (a = _.K(), _.y(), _.C(a.status() === a.Status.kob ? 1 : 2), _.y(3), _.Bh(a.MEb()), _.y(5), _.Bh(a.LEb()));
		}, MTe = function(a) {
			a & 1 && (_.I(0, "span", 21), _.F(1, "span", 9), _.R(2, "Failed to load incidents"), _.H());
			a & 2 && (a = _.K(2), _.E("iconName", a.S.ERROR));
		}, NTe = function(a) {
			a & 1 && _.I(0, "mat-spinner", 20);
			a & 2 && _.E("diameter", 40);
		}, OTe = function(a) {
			a & 1 && (_.F(0, "div", 4), _.B(1, MTe, 3, 1)(2, NTe, 1, 1, "mat-spinner", 20), _.H());
			a & 2 && (a = _.K(), _.y(), _.C(a.RR.kGb() ? 1 : 2));
		}, ATe = class extends _.h {
			constructor(a) {
				super(a);
			}
			Nw() {
				return _.Z(this, _.Zo, 3);
			}
		}, PTe = class extends _.h {
			constructor(a) {
				super(a);
			}
			getId() {
				return _.l(this, 1);
			}
			getTitle() {
				return _.l(this, 2);
			}
			WL() {
				return _.Lm(this, 3);
			}
			uJa(a, b) {
				return _.Os(this, 4, ATe, a, b);
			}
			getService() {
				return _.Lm(this, 5);
			}
		}, QTe = class extends _.h {
			constructor(a) {
				super(a);
			}
		}, RTe = {
			g_b: 0,
			jea: 1,
			psa: 2
		};
		var STe = (a, b) => b.CE.getId(), rTe = (a, b) => b.Nw(), TTe = {
			[0]: "",
			[1]: "Detected",
			[2]: "Identified",
			[3]: "Mitigated",
			[4]: "Resolved",
			[5]: "Update"
		}, UTe = class {
			constructor() {
				this.HXa = _.Li.required();
				this.VJ = RTe;
				this.Vjb = TTe;
			}
		};
		UTe.J = function(a) {
			return new (a || UTe)();
		};
		UTe.ka = _.u({
			type: UTe,
			da: [["ms-status-daily-log"]],
			inputs: { HXa: [1, "dailyLogData"] },
			ha: 3,
			ia: 0,
			la: [
				[1, "daily-log"],
				[1, "incident-title"],
				[1, "incident-event"],
				[1, "incident-event-details"],
				[1, "incident-update-status"],
				[1, "incident-update-description"],
				[1, "incident-update-time"]
			],
			template: function(a, b) {
				a & 1 && (_.Dh(0, "div", 0), _.Ah(1, sTe, 4, 5, null, null, STe), _.Eh());
				a & 2 && (_.y(), _.Bh(b.HXa()));
			},
			dependencies: [_.tz, _.pz],
			styles: [".daily-log[_ngcontent-%COMP%]{color:#e2e2e5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.incident-event[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.incident-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.incident-title.severity-moderate[_ngcontent-%COMP%]{color:#ffb95c}.incident-title.severity-major[_ngcontent-%COMP%]{color:#ff2a6a}.incident-update-description[_ngcontent-%COMP%]:before{content:\" - \"}.incident-update-status[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.incident-update-time[_ngcontent-%COMP%]{color:#8f9194;font-size:12px}"]
		});
		var VTe = function(a) {
			_.x(function* () {
				var b = new _.S9a(), c = [];
				try {
					let k;
					var d, e = a.U, f = yield _.$q(e.A, e.F + "/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/ListIncidentsHistory", b, {}, _.U9a);
					var g = _.Z(f, QTe, 1);
					g == null ? d = void 0 : d = _.mj(g, PTe, 1, _.oj());
					c = (k = d) != null ? k : [];
					a.H.set(c);
					a.R.set(!0);
				} catch (k) {
					a.I.set(!0);
				}
			});
		}, WTe = function(a) {
			_.x(function* () {
				a.A || (a.A = _.Df(6e5).pipe(_.bh(0)).subscribe(() => {
					VTe(a);
				}));
			});
		}, a$ = class {
			constructor() {
				this.U = _.m(_.Zq);
				this.H = _.M([]);
				this.A = null;
				this.R = _.M(!1);
				this.I = _.M(!1);
				this.F = this.H.asReadonly();
				this.lGb = this.R.asReadonly();
				this.kGb = this.I.asReadonly();
			}
		};
		a$.J = function(a) {
			return new (a || a$)();
		};
		a$.sa = _.Cd({
			token: a$,
			factory: a$.J,
			wa: "root"
		});
		var XTe = _.Ujb[0], YTe = _.Ujb[3], ZTe = {
			Lb: "center",
			Mb: "bottom",
			Bb: "center",
			Gb: "top",
			offsetY: 8
		}, $Te = class {
			constructor() {
				this.DD = _.Li.required();
				this.VJ = RTe;
				this.Xnb = { minWidth: 320 };
				this.A = _.m(_.ZC);
				this.Ga = _.m(_.Jf);
				this.yka = _.W(() => this.DD().yka);
				this.cyb = _.W(() => this.A.A.small() ? this.Ga.nativeElement.getBoundingClientRect().left <= 160 ? [XTe] : [ZTe] : [XTe, YTe]);
				this.MPb = _.W(() => {
					switch (this.DD().severity) {
						case 1: return "warning";
						case 2: return "running_with_errors";
					}
				});
			}
		};
		$Te.J = function(a) {
			return new (a || $Te)();
		};
		$Te.ka = _.u({
			type: $Te,
			da: [["ms-status-dashboard-day"]],
			inputs: { DD: [1, "dailyData"] },
			ha: 3,
			ia: 8,
			la: [
				["incidentInfo", ""],
				[
					"dialogLabel",
					"incidentInfo",
					"panelClass",
					"incident-info-dialog-panel",
					1,
					"timeline-day",
					3,
					"xapInlineDialog",
					"hoverDelayMs",
					"overlayPositions",
					"overlaySize"
				],
				[1, "incident-info-dialog"],
				[1, "date-info"],
				[
					1,
					"dialog-header",
					3,
					"severity-moderate",
					"severity-major"
				],
				[1, "dialog-header"],
				[1, "severity"],
				[3, "iconName"],
				[1, "severity-info"],
				[1, "related"],
				[1, "incident-info-row"],
				[1, "incident-info-row-title"]
			],
			template: function(a, b) {
				a & 1 && (_.I(0, "div", 1), _.z(1, xTe, 8, 5, "ng-template", null, 0, _.Ii));
				a & 2 && (a = _.O(2), _.P("severity-moderate", b.DD().severity === b.VJ.jea)("severity-major", b.DD().severity === b.VJ.psa), _.E("xapInlineDialog", a)("hoverDelayMs", 300)("overlayPositions", b.cyb())("overlaySize", b.Xnb));
			},
			dependencies: [
				_.tz,
				_.dz,
				_.EC,
				_.pz
			],
			styles: ["[_nghost-%COMP%]{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;width:.77%}@media screen and (max-width:768px){[_nghost-%COMP%]{width:1.16%}}@media screen and (max-width:600px){[_nghost-%COMP%]{width:2.2%}}.timeline-day[_ngcontent-%COMP%]{border-radius:12px;height:100%;width:100%;-webkit-transition:-webkit-transform .1s ease-in-out;transition:-webkit-transform .1s ease-in-out;transition:transform .1s ease-in-out;transition:transform .1s ease-in-out,-webkit-transform .1s ease-in-out;background-color:#1abd74}.timeline-day.severity-moderate[_ngcontent-%COMP%]{background-color:#ffb95c}.timeline-day.severity-major[_ngcontent-%COMP%]{background-color:#ff2a6a}.timeline-day[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);transform:scale(1.1);z-index:1}.incident-info-dialog[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;padding:12px 16px;width:320px}.incident-info-dialog[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%], .incident-info-dialog[_ngcontent-%COMP%]   .severity-info[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.incident-info-dialog[_ngcontent-%COMP%]   .related[_ngcontent-%COMP%]{color:#8f9194;font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.incident-info-dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 16px}.incident-info-dialog[_ngcontent-%COMP%]   .dialog-header.severity-moderate[_ngcontent-%COMP%]{background-color:#ffddb7;color:#690005}.incident-info-dialog[_ngcontent-%COMP%]   .dialog-header.severity-major[_ngcontent-%COMP%]{background-color:#ffdad6;color:#690005}.incident-info-dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .severity[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:4px}.incident-info-dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{background:transparent;font-weight:500;margin-right:4px}.incident-info-dialog[_ngcontent-%COMP%]   .incident-info-row[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:11px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.incident-info-dialog[_ngcontent-%COMP%]   .incident-info-row[_ngcontent-%COMP%]   .incident-info-row-title[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}"]
		});
		var aUe = class {
			constructor() {
				this.incidents = _.Li.required();
				this.A = _.m(_.ZC);
				this.wTb = _.W(() => this.A.A.small() ? 30 : this.A.A.Il() ? 60 : 90);
				this.xTb = _.W(() => {
					var a = this.incidents();
					a || (a = []);
					var b = [], c = new Date(Date.now()), d = new Date(c.getTime());
					d.setHours(0, 0, 0, 0);
					for (let f = 0; f < 90; f++) {
						let g = new Date(d.getTime());
						var e = new Date(d.getTime());
						e.setHours(23, 59, 59, 999);
						let k = g.getTime(), p = e.getTime();
						e = a.map((v) => {
							var { M1a: w, L1a: D } = BTe(v, c);
							if (!w || !D) return null;
							var G = w.toDate().getTime(), L = D.toDate().getTime();
							G = G > k ? G : k;
							L = L < p ? L : p;
							return {
								CE: v,
								F1a: G >= L ? 0 : Math.round((L - G) / 6e4)
							};
						}).filter((v) => !!v && v.F1a > 0);
						let r = e.map((v) => v.CE);
						b.unshift({
							date: g,
							yka: e,
							severity: zTe(r)
						});
						d.setDate(d.getDate() - 1);
					}
					return b;
				});
			}
		};
		aUe.J = function(a) {
			return new (a || aUe)();
		};
		aUe.ka = _.u({
			type: aUe,
			da: [["ms-status-dashboard"]],
			inputs: { incidents: [1, "incidents"] },
			ha: 9,
			ia: 1,
			la: [
				[1, "status-dashboard-wrapper"],
				[1, "timeline-grid"],
				[3, "dailyData"],
				[1, "status-dashboard-footer"],
				[
					1,
					"v3-font-label",
					"footer-label"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1), _.Ah(2, yTe, 1, 1, "ms-status-dashboard-day", 2, _.zh), _.H(), _.F(4, "div", 3)(5, "div", 4), _.R(6), _.H(), _.F(7, "div", 4), _.R(8, "Today"), _.H()()());
				a & 2 && (_.y(2), _.Bh(b.xTb()), _.y(4), _.S("", b.wTb(), " days"));
			},
			dependencies: [_.tz, $Te],
			styles: [".status-dashboard-wrapper[_ngcontent-%COMP%]{border-bottom:1px solid #2f3133;padding:8px 0}.status-dashboard-footer[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.status-dashboard-footer[_ngcontent-%COMP%]   .footer-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px;color:#8f9194}.timeline-grid[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:42px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px}@media screen and (max-width:768px){.timeline-grid[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(-n+30){display:none}}@media screen and (max-width:600px){.timeline-grid[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(-n+60){display:none}}"]
		});
		var JTe = (a, b) => b.service, KTe = (a, b) => b.date, bUe = {
			Tnb: "All Systems Operational",
			kob: "Partial Outage",
			ykb: "We are working to resolve the issues as quickly as possible"
		}, cUe = {
			[0]: "Unspecified",
			[1]: "API",
			[2]: "Multimodal Live API",
			[3]: "Google AI Studio"
		};
		_.$r = class {
			constructor() {
				this.S = _.Dk;
				this.RR = _.m(a$);
				this.A = _.m(_.HG);
				this.Status = bUe;
				this.Zv = _.Wy;
				this.y6a = _.W(() => this.RR.F().filter((a) => !_.mj(a, ATe, 4, _.oj()).some((b) => _.Lm(b, 1) === 4)));
				this.status = _.W(() => {
					var a = this.y6a();
					return a.length === 0 ? "All Systems Operational" : a.some((b) => b.WL() === 2) ? "We are working to resolve the issues as quickly as possible" : "Partial Outage";
				});
				this.Ipa = _.W(() => this.status() === "All Systems Operational" ? "check" : "warning");
				this.MEb = _.W(() => {
					var a = this.RR.F(), b = new Map();
					for (let c in cUe) if (Object.prototype.hasOwnProperty.call(cUe, c)) {
						let d = Number(c);
						d !== 0 && b.set(cUe[d], []);
					}
					for (let c of a) for (let d of _.en(c, 6, _.oj())) (a = cUe[d]) && b.set(a, [...b.get(a) || [], c]);
					return Array.from(b.entries(), ([c, d]) => ({
						service: c,
						incidents: d
					}));
				});
				this.LEb = _.W(() => DTe(this.RR.F()));
				this.A.A.set(!0);
			}
			ib() {
				WTe(this.RR);
			}
			Ba() {
				var a = this.RR, b;
				(b = a.A) == null || b.unsubscribe();
				a.A = null;
			}
		};
		_.$r.J = function(a) {
			return new (a || _.$r)();
		};
		_.$r.ka = _.u({
			type: _.$r,
			da: [["ms-status-page"]],
			ha: 7,
			ia: 2,
			la: [
				[
					"cdkScrollable",
					"",
					1,
					"page-container"
				],
				[1, "header"],
				[
					1,
					"name",
					"plain-text",
					3,
					"routerLink"
				],
				[1, "status-page-container"],
				[1, "empty"],
				[1, "partial-outage-incidents"],
				[
					1,
					"status",
					"status-large",
					3,
					"full-outage",
					"operational"
				],
				[1, "dashboards-container"],
				[1, "daily-log-container"],
				[1, "plain-text"],
				[
					1,
					"label-text",
					"plain-text"
				],
				[
					"href",
					"https://discuss.ai.google.dev/c/gemini-api/4",
					"target",
					"_blank"
				],
				[
					1,
					"partial-outage",
					"status"
				],
				[
					"aria-hidden",
					"true",
					3,
					"iconName"
				],
				["data-testid", "partial-outage-incident-title"],
				[
					1,
					"status",
					"status-large"
				],
				[
					"data-testid",
					"service-name",
					1,
					"label-text",
					"plain-text"
				],
				[3, "incidents"],
				[
					1,
					"daily-log-date",
					"plain-text"
				],
				[3, "dailyLogData"],
				[3, "diameter"],
				[
					"aria-hidden",
					"true",
					1,
					"plain-text",
					3,
					"iconName"
				]
			],
			template: function(a, b) {
				a & 1 && (_.F(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span"), _.R(4, "Google AI Studio and the Gemini API Status"), _.H()()(), _.B(5, LTe, 16, 1, "div", 3)(6, OTe, 3, 1, "div", 4), _.H());
				a & 2 && (_.y(2), _.E("routerLink", b.Zv.rpb), _.y(3), _.C(b.RR.lGb() ? 5 : 6));
			},
			dependencies: [
				_.tz,
				UTe,
				_.dz,
				_.OD,
				_.ND,
				_.zC,
				_.yC,
				_.sA,
				_.nB,
				_.gB,
				aUe
			],
			styles: ["[_nghost-%COMP%]{background-color:#000;height:100%}.page-container[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px;overflow-y:auto;padding:60px;height:100%}@media screen and (max-width:600px){.page-container[_ngcontent-%COMP%]{padding:32px}}.page-container[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{border-top-color:#fff;opacity:.2}.plain-text[_ngcontent-%COMP%]{color:#fff}.label-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:12px;font-weight:400;line-height:18px}.header[_ngcontent-%COMP%]{max-width:960px;width:100%}.header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:24px;font-weight:600;line-height:32px;cursor:pointer;overflow:hidden;white-space:nowrap}.header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.empty[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;gap:4px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:24px 0}.status-page-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:72px;max-width:960px}.status-page-container[_ngcontent-%COMP%]   .dashboards-container[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.partial-outage-incidents[_ngcontent-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.status[_ngcontent-%COMP%]{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:5px;padding:32px 16px;font-family:Inter Tight,sans-serif;font-optical-sizing:auto;font-size:16px;font-weight:600;line-height:24px}.status.operational[_ngcontent-%COMP%]{background-color:rgba(61,219,133,.149);color:#3ddb85}.status.partial-outage[_ngcontent-%COMP%]{background-color:rgba(255,186,123,.2);color:#ffba7b}.status.full-outage[_ngcontent-%COMP%]{background-color:rgba(255,42,106,.2);color:#ff2a6a}.status-large[_ngcontent-%COMP%]{padding:40px 16px}.status-large[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{font-weight:700}.daily-log-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:32px}.daily-log-container[_ngcontent-%COMP%]   .daily-log-date[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-optical-sizing:auto;font-size:14px;font-weight:500;line-height:21px;margin:32px 0 16px}.daily-log-container[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%]{margin:12px 0}footer[_ngcontent-%COMP%]{max-width:960px;width:100%}"]
		});
		_.ir();
	} catch (e) {
		_._DumpException(e);
	}
}).call(this, this.default_MakerSuite);
// Google Inc.


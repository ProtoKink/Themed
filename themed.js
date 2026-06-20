"use strict";
var Themed = (() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // <define:MOD_INFO>
  var define_MOD_INFO_default = { name: "Themed", fullName: "BC Themed", repository: "https://github.com/dDeepLb/Themed-BC" };

  // node_modules/.pnpm/bc-deeplib@5.0.1_sass-embedded@1.100.0/node_modules/bc-deeplib/dist/deeplib.js
  var ye = Object.create;
  var J = Object.defineProperty;
  var xe = Object.getOwnPropertyDescriptor;
  var Ge = Object.getOwnPropertyNames;
  var Ce = Object.getPrototypeOf;
  var Be = Object.prototype.hasOwnProperty;
  var r = /* @__PURE__ */ __name((t, e) => J(t, "name", { value: e, configurable: true }), "r");
  var we = /* @__PURE__ */ __name((t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), "we");
  var Te = /* @__PURE__ */ __name((t, e, n, i) => {
    if (e && typeof e == "object" || typeof e == "function") for (let o of Ge(e)) !Be.call(t, o) && o !== n && J(t, o, { get: /* @__PURE__ */ __name(() => e[o], "get"), enumerable: !(i = xe(e, o)) || i.enumerable });
    return t;
  }, "Te");
  var oe = /* @__PURE__ */ __name((t, e, n) => (n = t != null ? ye(Ce(t)) : {}, Te(e || !t || !t.__esModule ? J(n, "default", { value: t, enumerable: true }) : n, t)), "oe");
  var $ = we((ce, Q) => {
    (function(t) {
      "use strict";
      var e = {};
      e.VERSION = "1.6.1";
      var n, i = {}, o = r(function(a, h) {
        return function() {
          return h.apply(a, arguments);
        };
      }, "bind"), s = r(function() {
        var a = arguments, h = a[0], T, v;
        for (v = 1; v < a.length; v++) for (T in a[v]) !(T in h) && a[v].hasOwnProperty(T) && (h[T] = a[v][T]);
        return h;
      }, "merge"), l = r(function(a, h) {
        return { value: a, name: h };
      }, "defineLogLevel");
      e.TRACE = l(1, "TRACE"), e.DEBUG = l(2, "DEBUG"), e.INFO = l(3, "INFO"), e.TIME = l(4, "TIME"), e.WARN = l(5, "WARN"), e.ERROR = l(8, "ERROR"), e.OFF = l(99, "OFF");
      var c = r(function(a) {
        this.context = a, this.setLevel(a.filterLevel), this.log = this.info;
      }, "ContextualLogger");
      c.prototype = { setLevel: r(function(a) {
        a && "value" in a && (this.context.filterLevel = a);
      }, "setLevel"), getLevel: r(function() {
        return this.context.filterLevel;
      }, "getLevel"), enabledFor: r(function(a) {
        var h = this.context.filterLevel;
        return a.value >= h.value;
      }, "enabledFor"), trace: r(function() {
        this.invoke(e.TRACE, arguments);
      }, "trace"), debug: r(function() {
        this.invoke(e.DEBUG, arguments);
      }, "debug"), info: r(function() {
        this.invoke(e.INFO, arguments);
      }, "info"), warn: r(function() {
        this.invoke(e.WARN, arguments);
      }, "warn"), error: r(function() {
        this.invoke(e.ERROR, arguments);
      }, "error"), time: r(function(a) {
        typeof a == "string" && a.length > 0 && this.invoke(e.TIME, [a, "start"]);
      }, "time"), timeEnd: r(function(a) {
        typeof a == "string" && a.length > 0 && this.invoke(e.TIME, [a, "end"]);
      }, "timeEnd"), invoke: r(function(a, h) {
        n && this.enabledFor(a) && n(h, s({ level: a }, this.context));
      }, "invoke") };
      var d = new c({ filterLevel: e.OFF });
      (function() {
        var a = e;
        a.enabledFor = o(d, d.enabledFor), a.trace = o(d, d.trace), a.debug = o(d, d.debug), a.time = o(d, d.time), a.timeEnd = o(d, d.timeEnd), a.info = o(d, d.info), a.warn = o(d, d.warn), a.error = o(d, d.error), a.log = a.info;
      })(), e.setHandler = function(a) {
        n = a;
      }, e.setLevel = function(a) {
        d.setLevel(a);
        for (var h in i) i.hasOwnProperty(h) && i[h].setLevel(a);
      }, e.getLevel = function() {
        return d.getLevel();
      }, e.get = function(a) {
        return i[a] || (i[a] = new c(s({ name: a }, d.context)));
      }, e.createDefaultHandler = function(a) {
        a = a || {}, a.formatter = a.formatter || r(function(y, B) {
          B.name && y.unshift("[" + B.name + "]");
        }, "defaultMessageFormatter");
        var h = {}, T = r(function(v, y) {
          Function.prototype.apply.call(v, console, y);
        }, "invokeConsoleMethod");
        return typeof console > "u" ? function() {
        } : function(v, y) {
          v = Array.prototype.slice.call(v);
          var B = console.log, F;
          y.level === e.TIME ? (F = (y.name ? "[" + y.name + "] " : "") + v[0], v[1] === "start" ? console.time ? console.time(F) : h[F] = (/* @__PURE__ */ new Date()).getTime() : console.timeEnd ? console.timeEnd(F) : T(B, [F + ": " + ((/* @__PURE__ */ new Date()).getTime() - h[F]) + "ms"])) : (y.level === e.WARN && console.warn ? B = console.warn : y.level === e.ERROR && console.error ? B = console.error : y.level === e.INFO && console.info ? B = console.info : y.level === e.DEBUG && console.debug ? B = console.debug : y.level === e.TRACE && console.trace && (B = console.trace), a.formatter(v, y), T(B, v));
        };
      }, e.useDefaults = function(a) {
        e.setLevel(a && a.defaultLevel || e.DEBUG), e.setHandler(e.createDefaultHandler(a));
      }, e.setDefaults = e.useDefaults, typeof define == "function" && define.amd ? define(e) : typeof Q < "u" && Q.exports ? Q.exports = e : (e._prevLogger = t.Logger, e.noConflict = function() {
        return t.Logger = e._prevLogger, e;
      }, t.Logger = e);
    })(ce);
  });
  var _a;
  var L = (_a = class {
    get settingsScreen() {
      return null;
    }
    get settingsStorage() {
      return this.constructor.name;
    }
    get settings() {
      return this.settingsStorage ? (p.playerStorage ? p.playerStorage[this.settingsStorage] || this.registerDefaultSettings(p.playerStorage) : this.registerDefaultSettings(p.playerStorage), p.playerStorage[this.settingsStorage]) : null;
    }
    set settings(e) {
      this.settingsStorage && (p.playerStorage ? p.playerStorage[this.settingsStorage] || this.registerDefaultSettings(p.playerStorage) : this.registerDefaultSettings(p.playerStorage), p.playerStorage[this.settingsStorage] = e);
    }
    init() {
    }
    registerDefaultSettings(e) {
      let n = this.settingsStorage, i = this.defaultSettings;
      !n || !i || Object.entries(this.defaultSettings).length !== 0 && (e[n] = f(this.defaultSettings, e[n], { concatArrays: false, matchingOnly: true }));
    }
    get defaultSettings() {
      return null;
    }
    load() {
    }
    run() {
    }
    unload() {
    }
  }, __name(_a, "L"), r(_a, "BaseModule"), _a);
  async function Z(t) {
    if (!k.instance) throw new Error("Attempt to set subscreen before init");
    let e = typeof t == "string" ? t : t?.options.name, n = `${define_MOD_INFO_default.name}_${e}`;
    await CommonSetScreen("DeepLibMod", `${n}`);
  }
  __name(Z, "Z");
  r(Z, "setSubscreen");
  var _a2;
  var I = (_a2 = class {
    constructor(e) {
      __publicField(this, "options");
      __publicField(this, "module");
      e && (this.module = e);
      let n = this.constructor;
      this.options = { ..._a2.subscreenOptions, ...n.subscreenOptions };
      let i = this.options.name, o = `${define_MOD_INFO_default.name}_${i}`;
      O(`${o}Load`, this.load.bind(this)), O(`${o}Run`, this.run.bind(this)), O(`${o}Click`, this.click.bind(this)), O(`${o}Exit`, this.exit.bind(this)), O(`${o}Unload`, this.unload.bind(this)), O(`${o}Resize`, this.resize.bind(this)), O(`${o}Background`, this.options.background), CommonCSVCache[ScreenFileGetTranslation("DeepLibMod", o)] = [];
    }
    async setSubscreen(e) {
      return await Z(e);
    }
    get settings() {
      return this.module.settings;
    }
    set settings(e) {
      this.module.settings = e;
    }
    get pageStructure() {
      return [[]];
    }
    get currentPage() {
      return this.pageStructure[Math.min(_a2.currentPage - 1, this.pageStructure.length - 1)];
    }
    getPageLabel() {
      return g("settings.page.label", { $currentPage$: _a2.currentPage, $totalPages$: this.pageStructure.length });
    }
    changePage(e, n) {
      let i = this.pageStructure.length;
      e > i && (e = 1), e < 1 && (e = i), _a2.currentPage = e, this.managePageElementsVisibility(), n(this.getPageLabel());
    }
    managePageElementsVisibility() {
      this.pageStructure.forEach((e, n) => {
        e.forEach((i) => {
          let o = ElementWrap(`${i.id}-container`) ?? ElementWrap(`${i.id}`);
          n !== _a2.currentPage - 1 ? o && S.hide(o) : o && S.unhide(o);
        });
      });
    }
    load() {
      var _a15, _b;
      for (let i of x()) i.settingsScreen && (!i.settings || !Object.keys(i.settings).length) && i.registerDefaultSettings(p.playerStorage);
      _a2.currentPage = 1, b.getSubscreen();
      let e = b.getSettingsDiv();
      if (b.appendToSubscreen(e), _a2.menu = ElementMenu.Create("deeplib-nav-menu", []), b.appendToSubscreen(_a2.menu), this.pageStructure.length > 1) {
        let i = u.createBackNext({ id: "deeplib-page-back-next", next: r(({ setLabel: o }) => this.changePage(_a2.currentPage + 1, o), "next"), initialNextTooltip: g("settings.button.next_button_hint"), back: r(({ setLabel: o }) => this.changePage(_a2.currentPage - 1, o), "back"), initialPrevTooltip: g("settings.button.prev_button_hint"), initialLabel: this.getPageLabel() });
        _a2.menu.prepend(i);
      }
      if (this.options.help) {
        let i = this.options.help.onClick, o = r(() => {
        }, "action");
        typeof i == "string" || i instanceof URL ? o = r(() => window.open(i, "_blank"), "action") : typeof i == "function" ? o = i : i instanceof _a2 && (o = r(async () => await this.setSubscreen(i), "action")), (_a15 = this.options.help).tooltip ?? (_a15.tooltip = g("settings.button.help_button_hint")), (_b = this.options.help).icon ?? (_b.icon = `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/bookmark.svg`);
        let s = u.createButton({ id: "deeplib-help", size: [90, 90], onClick: o, options: { image: this.options.help.icon, tooltip: this.options.help.tooltip } });
        _a2.menu.append(s);
      }
      if (this.options.doShowTitle) {
        let i = u.createLabel({ id: "deeplib-subscreen-title", label: g(`${this.options.name}.title`, { $ModVersion: "1.8.2" }) });
        b.appendToSubscreen(i);
      }
      if (this.options.doShowExitButton) {
        let i = u.createButton({ id: "deeplib-exit", size: [90, 90], onClick: r(() => {
          this.exit();
        }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/exit.svg`, tooltip: g("settings.button.back_button_hint") } });
        _a2.menu.append(i);
      }
      let n = u.createTooltip();
      b.appendToSubscreen(n), this.pageStructure.forEach((i) => i.forEach((o) => {
        let s;
        switch (o.type) {
          case "text":
          case "number":
          case "color":
            s = u.createInput(o);
            break;
          case "checkbox":
            s = u.createCheckbox(o);
            break;
          case "button":
            s = u.createButton(o);
            break;
          case "label":
            s = u.createLabel(o);
            break;
          case "custom":
            s = u.createCustom(o);
            break;
          case "dropdown":
            s = u.createDropdown(o);
            break;
        }
        s.parentElement && s.parentElement !== e || b.appendToSettingsDiv(s);
      })), this.managePageElementsVisibility(), this.options.drawCharacter && this.options.forceUpCharacter ? CharacterAppearanceForceUpCharacter = Player.MemberNumber : CharacterAppearanceForceUpCharacter = -1;
    }
    run() {
      this.options.drawCharacter && DrawCharacter(Player, 50, 50, 0.9, false);
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1, CharacterLoadCanvas(Player);
      let e = CommonUnwrapThunk(this.options.returnScreen);
      e instanceof _a2 || !e ? Z(e ?? "mainmenu").then(() => {
        p.save();
      }) : Array.isArray(e) && CommonSetScreen(...e).then(() => {
        p.save();
      });
    }
    resize(e = false) {
      let n = this.options.drawCharacter ? 0 : 380, i = b.getSubscreen(), o = b.getSettingsDiv();
      ElementSetPosition(i, 0, 0), ElementSetSize(i, 2e3, 1e3), ElementSetFontSize(i, "auto"), ElementSetPosition(o, 530 - n, 170), ElementSetSize(o, this.options.settingsWidth ?? 1e3 + n, 660), this.options.doShowTitle && (ElementSetPosition("deeplib-subscreen-title", 530 - n, 75), ElementSetSize("deeplib-subscreen-title", 800, 90)), ElementSetPosition("deeplib-nav-menu", 1905, 75, "top-right"), ElementSetSize("deeplib-nav-menu", null, 90), ElementSetSize(u.getTooltip() || "", 1500), _a2.currentElements.forEach((s) => {
        let l = s[0], c = s[1];
        S.autoSetPosition(c.id ?? l.id, c.position), S.autoSetSize(c.id ?? l.id, c.size);
      }), o && (S.hasOverflow(o)?.vertical ? o.classList.add("deeplib-overflow-box") : o.classList.remove("deeplib-overflow-box"));
    }
    unload() {
      _a2.currentElements = [], b.removeSubscreen();
    }
  }, __name(_a2, "t"), r(_a2, "BaseSubscreen"), __publicField(_a2, "currentElements", []), __publicField(_a2, "currentPage", 1), __publicField(_a2, "id", CommonGenerateUniqueID()), __publicField(_a2, "subscreenOptions", { drawCharacter: true, name: "UNKNOWN", background: "Sheet", doShowExitButton: true, doShowTitle: true, settingsWidth: 1e3, forceUpCharacter: false }), __publicField(_a2, "menu", null), _a2);
  var re = `.deeplib-subscreen,
.deeplib-modal {
  --deeplib-background-color: var(--tmd-main, white);
  --deeplib-element-color: var(--tmd-element, white);
  --deeplib-element-hover-color: var(--tmd-element-hover, cyan);
  --deeplib-accent-color: var(--tmd-accent, #FFFF88);
  --deeplib-blocked-color: var(--tmd-blocked, red);
  --deeplib-text-color: var(--tmd-text, black);
  --deeplib-icon-color: var(--tmd-accent, black);
  --deeplib-icon-hover-color: var(--tmd-accent-hover, black);
  --deeplib-border-color: var(--tmd-accent, black);
  --deeplib-border-width: min(0.2vh, 0.1vw);
  --deeplib-border-width: min(0.2dvh, 0.1dvw);
  --deeplib-border-radius: min(1vh, 0.5vw);
  --deeplib-border-radius: min(1dvh, 0.5dvw);
}

.deeplib-button {
  color: var(--deeplib-text-color);
  width: 100%;
  height: 100%;
}
.deeplib-button.button-styling, .deeplib-button.button-styling::before {
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-button img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-position: left;
  background-color: var(--deeplib-icon-color);
  background-blend-mode: multiply;
  background-size: contain;
  mask-position: left;
  mask-size: contain;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  color: transparent;
  background-image: var(--image);
  mask-image: var(--image);
  pointer-events: none;
}
.deeplib-button:hover img {
  background-color: var(--deeplib-icon-hover-color);
}
.deeplib-button .button-label {
  background-color: transparent !important;
  color: var(--deeplib-text-color);
  font-size: 0.9em;
  display: contents;
}
.deeplib-button .button-tooltip {
  border-radius: min(1dvh, 0.5dvw);
  pointer-events: none;
}

#deeplib-page-label {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

#deeplib-subscreen-title {
  text-align: left;
  color: var(--deeplib-text-color);
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.deeplib-text {
  color: var(--deeplib-text-color);
}

.deeplib-label {
  color: var(--deeplib-text-color);
  user-select: none;
  pointer-events: none;
}

.deeplib-subscreen {
  padding: 0;
  margin: 0;
  pointer-events: none;
}

.deeplib-subscreen * {
  box-sizing: border-box;
  pointer-events: all;
}

.deeplib-settings {
  display: grid;
  grid-auto-rows: min-content;
  padding: min(1dvh, 0.5dvw);
  gap: 0.3em;
}

.deeplib-misc {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: min(1vh, 0.5vw);
}

.deeplib-tooltip {
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1vh, 0.5vw);
  font-size: 0.8em;
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
  z-index: 1;
}
.deeplib-tooltip.anchor-top {
  position: absolute;
  top: min(1vh, 0.5vw);
  left: 50%;
  transform: translateX(-50%);
}
.deeplib-tooltip.anchor-bottom {
  position: absolute;
  bottom: min(1vh, 0.5vw);
  left: 50%;
  transform: translateX(-50%);
}

.deeplib-overflow-box {
  border: var(--deeplib-border-color) solid var(--deeplib-border-width);
}

.deeplib-prev-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  border-radius: min(1dvh, 0.5dvw);
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
}
.deeplib-prev-next .deeplib-prev-next-button:hover {
  background-color: var(--deeplib-element-hover-color);
  border-radius: var(--deeplib-border-radius);
}
.deeplib-prev-next .deeplib-prev-next-button {
  height: 100%;
  aspect-ratio: 1;
}
.deeplib-prev-next .deeplib-prev-next-label {
  white-space: nowrap;
  user-select: none;
}

#deeplib-nav-menu {
  display: flex;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
  z-index: 1;
}
#deeplib-nav-menu > .deeplib-button {
  flex: 1 1 auto;
  height: 100%;
  aspect-ratio: 1;
}

#deeplib-storage-meter {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--deeplib-element-color);
  border: var(--deeplib-border-width) solid var(--deeplib-border-color);
  border-radius: var(--deeplib-border-radius);
  z-index: -1;
}
#deeplib-storage-meter #deeplib-storage-bar {
  height: 100%;
  width: 0%;
  background: var(--deeplib-accent-color);
}

.deeplib-checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  width: fit-content;
}
.deeplib-checkbox-container span {
  user-select: none;
}
.deeplib-checkbox-container .deeplib-input {
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  width: min(5dvh, 2.5dvw);
  height: min(5dvh, 2.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-checkbox-container .deeplib-input[type=checkbox]:checked::before {
  width: 80%;
  height: 80%;
}

.deeplib-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
  width: fit-content;
}
.deeplib-input-container span {
  user-select: none;
}
.deeplib-input-container:has(.deeplib-text) {
  margin-top: min(1vh, 0.5vw);
  margin-top: min(1dvh, 0.5dvw);
}
.deeplib-input-container .deeplib-input {
  font-size: 0.9em;
  padding: min(1vh, 0.5vw);
  padding: min(1dvh, 0.5dvw);
  outline: none;
  min-height: min(5vh, 2.5vw);
  min-height: min(5dvh, 2.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-input-container .deeplib-input[type=color] {
  padding: 0px;
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  width: min(5dvh, 2.5dvw);
  height: min(5dvh, 2.5dvw);
  border-radius: 0px;
}
.deeplib-input-container .deeplib-input[type=color]:disabled {
  border: var(--deeplib-blocked-color) solid var(--deeplib-border-width);
  cursor: not-allowed;
}

.deeplib-dropdown-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: min(2vh, 1vw);
  gap: min(2dvh, 1dvw);
  color: var(--deeplib-text-color);
  width: fit-content;
}
.deeplib-dropdown-container select {
  padding: 0 min(1vh, 0.5vw);
  padding: 0 min(1dvh, 0.5dvw);
  border-radius: min(1vh, 0.5vw);
  border-radius: min(1dvh, 0.5dvw);
}
.deeplib-dropdown-container span {
  user-select: none;
}

.deeplib-checkbox-container.row,
.deeplib-input-container.row,
.deeplib-dropdown-container.row {
  flex-direction: row;
}
.deeplib-checkbox-container.column,
.deeplib-input-container.column,
.deeplib-dropdown-container.column {
  flex-direction: column;
}
.deeplib-checkbox-container.rowReverse,
.deeplib-input-container.rowReverse,
.deeplib-dropdown-container.rowReverse {
  flex-direction: row-reverse;
}
.deeplib-checkbox-container.columnReverse,
.deeplib-input-container.columnReverse,
.deeplib-dropdown-container.columnReverse {
  flex-direction: column-reverse;
}

.deeplib-highlight-text {
  font-weight: bold;
  color: rgb(203, 185, 23);
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message {
  background-color: var(--deeplib-element-color);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message {
  background-color: #eee;
  border: min(0.2dvh, 0.1dvw) solid #440171;
  color: #111;
  padding-left: min(0.6dvh, 0.3dvw);
  display: block;
  white-space: normal;
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message a,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message a {
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message a {
  cursor: pointer;
  font-weight: bold;
  color: #111;
}

.deeplib-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  min-width: max(50dvw, 25dvh);
  font-size: 1em;
  padding: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  border-radius: min(1.2dvh, 0.6dvw);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
  max-width: max(90dvw, 45dvh);
}
.deeplib-modal .deeplib-modal-input {
  width: 100%;
  font-size: 1em;
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1dvh, 0.5dvw);
}
.deeplib-modal input.deeplib-modal-input {
  max-width: max(50dvh, 25dvw);
}
.deeplib-modal .deeplib-modal-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5em;
  width: 100%;
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button {
  font-size: 0.8em;
  display: flex;
  width: auto;
  padding: min(0.4vh, 0.2vw) min(2vh, 1vw);
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button .button-label {
  display: contents;
}
.deeplib-modal .deeplib-modal-prompt-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.deeplib-modal-blocker {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
}

#deeplib-modal-import_export .deeplib-modal-checkbox-container {
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  gap: var(--half-gap);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuc2NzcyIsImJ1dHRvbnMuc2NzcyIsImVsZW1lbnRzLnNjc3MiLCJpbnB1dHMuc2NzcyIsIm1lc3NhZ2VzLnNjc3MiLCJtb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FDZEY7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7O0FDNUNKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0U7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdFO0VBQ0U7RUFDQTs7QUFISjtFQU1FO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUN6SUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOzs7QUFLTjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7O0FBT1I7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7OztBQU9GO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUNFOzs7QUMxR0o7RUFDRTtFQUNBOzs7QUFHRjtBQUFBO0VBRUU7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7QUFBQTtFQUVFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FDN0JGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUtOO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlBO0VBQ0U7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVlcGxpYi1zdWJzY3JlZW4sXG4uZGVlcGxpYi1tb2RhbCB7XG4gIC0tZGVlcGxpYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10bWQtbWFpbiwgd2hpdGUpO1xuICAtLWRlZXBsaWItZWxlbWVudC1jb2xvcjogdmFyKC0tdG1kLWVsZW1lbnQsIHdoaXRlKTtcbiAgLS1kZWVwbGliLWVsZW1lbnQtaG92ZXItY29sb3I6IHZhcigtLXRtZC1lbGVtZW50LWhvdmVyLCBjeWFuKTtcbiAgLS1kZWVwbGliLWFjY2VudC1jb2xvcjogdmFyKC0tdG1kLWFjY2VudCwgI0ZGRkY4OCk7XG4gIC0tZGVlcGxpYi1ibG9ja2VkLWNvbG9yOiB2YXIoLS10bWQtYmxvY2tlZCwgcmVkKTtcbiAgLS1kZWVwbGliLXRleHQtY29sb3I6IHZhcigtLXRtZC10ZXh0LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWhvdmVyLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LWhvdmVyLCBibGFjayk7XG4gIC0tZGVlcGxpYi1ib3JkZXItY29sb3I6IHZhcigtLXRtZC1hY2NlbnQsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWJvcmRlci13aWR0aDogbWluKDAuMnZoLCAwLjF2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItd2lkdGg6IG1pbigwLjJkdmgsIDAuMWR2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAwLjV2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbn1cbiIsIi5kZWVwbGliLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYuYnV0dG9uLXN0eWxpbmcsXG4gICYuYnV0dG9uLXN0eWxpbmc6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1pY29uLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBtYXNrLXBvc2l0aW9uOiBsZWZ0O1xuICAgIG1hc2stc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1hZ2UpO1xuICAgIG1hc2staW1hZ2U6IHZhcigtLWltYWdlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWljb24taG92ZXItY29sb3IpO1xuICB9XG5cbiAgLmJ1dHRvbi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG5cbiAgLmJ1dHRvbi10b29sdGlwIHtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59IiwiI2RlZXBsaWItcGFnZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2RlZXBsaWItc3Vic2NyZWVuLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlZXBsaWItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xufVxuXG4uZGVlcGxpYi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmRlZXBsaWItc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIHBhZGRpbmc6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIGdhcDogMC4zZW07XG59XG5cbi5kZWVwbGliLW1pc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGdhcDogbWluKDF2aCwgMC41dncpO1xufVxuXG4uZGVlcGxpYi10b29sdGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJvcmRlcjogbWluKDAuMnZoLCAwLjF2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuICB6LWluZGV4OiAxO1xuXG4gICYuYW5jaG9yLXRvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogbWluKDF2aCwgMC41dncpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cblxuICAmLmFuY2hvci1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IG1pbigxdmgsIDAuNXZ3KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG59XG5cbi5kZWVwbGliLW92ZXJmbG93LWJveCB7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLXdpZHRoKTtcbn1cblxuLmRlZXBsaWItcHJldi1uZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IG1pbigyZHZoLCAxZHZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIGJvcmRlcjogbWluKDAuMnZoLCAwLjF2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuXG4gIC5kZWVwbGliLXByZXYtbmV4dC1idXR0b24ge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWhvdmVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZXBsaWItYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgfVxuXG4gIC5kZWVwbGliLXByZXYtbmV4dC1sYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxufVxuXG4jZGVlcGxpYi1uYXYtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogbWluKDJkdmgsIDFkdncpO1xuICB6LWluZGV4OiAxO1xuXG4gICY+LmRlZXBsaWItYnV0dG9uIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG59XG5cbiNkZWVwbGliLXN0b3JhZ2UtbWV0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzKTtcbiAgei1pbmRleDogLTE7XG5cbiAgI2RlZXBsaWItc3RvcmFnZS1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVlcGxpYi1hY2NlbnQtY29sb3IpO1xuICB9XG59IiwiLmRlZXBsaWItY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLmRlZXBsaWItaW5wdXQge1xuICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgd2lkdGg6IG1pbig1ZHZoLCAyLjVkdncpO1xuICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxuICB9XG59XG5cbi5kZWVwbGliLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICBzcGFuIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICY6aGFzKC5kZWVwbGliLXRleHQpIHtcbiAgICBtYXJnaW4tdG9wOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgbWFyZ2luLXRvcDogbWluKDFkdmgsIDAuNWR2dyk7XG4gIH1cblxuICAuZGVlcGxpYi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgcGFkZGluZzogbWluKDFkdmgsIDAuNWR2dyk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgbWluLWhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNvbG9yXCJdIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgICBoZWlnaHQ6IG1pbig1dmgsIDIuNXZ3KTtcbiAgICAgIHdpZHRoOiBtaW4oNWR2aCwgMi41ZHZ3KTtcbiAgICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBib3JkZXI6IHZhcigtLWRlZXBsaWItYmxvY2tlZC1jb2xvcikgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5kZWVwbGliLWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogbWluKDJ2aCwgMXZ3KTtcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwIG1pbigxdmgsIDAuNXZ3KTtcbiAgICBwYWRkaW5nOiAwIG1pbigxZHZoLCAwLjVkdncpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDAuNXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG5cbi5kZWVwbGliLWNoZWNrYm94LWNvbnRhaW5lcixcbi5kZWVwbGliLWlucHV0LWNvbnRhaW5lcixcbi5kZWVwbGliLWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICYucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgJi5jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmLnJvd1JldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gICYuY29sdW1uUmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59IiwiLmRlZXBsaWItaGlnaGxpZ2h0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyMDMsIDE4NSwgMjMpO1xufVxuXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyayddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgYm9yZGVyOiBtaW4oMC4yZHZoLCAwLjFkdncpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG59XG5cbiNUZXh0QXJlYUNoYXRMb2cgZGl2LkNoYXRNZXNzYWdlLmRlZXBsaWItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCAjNDQwMTcxO1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZy1sZWZ0OiBtaW4oMC42ZHZoLCAwLjNkdncpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuI1RleHRBcmVhQ2hhdExvZ1tkYXRhLWNvbG9ydGhlbWU9J2RhcmsnXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbn1cblxuI1RleHRBcmVhQ2hhdExvZyBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzExMTtcbn1cbiIsIi5kZWVwbGliLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMTAwMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41ZW07XG4gIG1pbi13aWR0aDogbWF4KDUwZHZ3LCAyNWR2aCk7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjJkdmgsIDAuNmR2dyk7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICBtYXgtd2lkdGg6IG1heCg5MGR2dywgNDVkdmgpO1xuXG4gIC5kZWVwbGliLW1vZGFsLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICAgIHBhZGRpbmc6IG1pbigxZHZoLCAwLjVkdncpO1xuICB9XG5cbiAgaW5wdXQuZGVlcGxpYi1tb2RhbC1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiBtYXgoNTBkdmgsIDI1ZHZ3KTtcbiAgfVxuXG4gIC5kZWVwbGliLW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMC41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZGVlcGxpYi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmc6IG1pbigwLjR2aCwgMC4ydncpIG1pbigydmgsIDF2dyk7XG5cbiAgICAgIC5idXR0b24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVlcGxpYi1tb2RhbC1wcm9tcHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uZGVlcGxpYi1tb2RhbC1ibG9ja2VyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBkdnc7XG4gIGhlaWdodDogMTAwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNkZWVwbGliLW1vZGFsLWltcG9ydF9leHBvcnQge1xuICAuZGVlcGxpYi1tb2RhbC1jaGVja2JveC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLWhhbGYtZ2FwKTtcbiAgfVxufSJdfQ== */`;
  var _a3;
  var X = (_a3 = class extends L {
    constructor() {
      super(...arguments);
      __publicField(this, "debugSettings", { showRawTranslations: false, showFileNames: false, showIncomingServerTransactions: false, incomingMessageFilterMode: "exclude", incomingMessageTypes: "", showOutcomingServerTransactions: false, outcomingMessageFilterMode: "exclude", outcomingMessageTypes: "", showRawActivityNames: false, showRawAssetNames: false });
    }
    load() {
      let e = p.getLocalStorage("debugOptions");
      e && (this.debugSettings = Object.assign(this.debugSettings, e)), Le(), w.hookFunction("TextGet", E.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o] = n, s = TextScreenCache?.fileName() ?? "[unknown]";
        return this.debugSettings.showFileNames ? `${s}::${o}` : o;
      }), w.hookFunction("TextGetInScope", E.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o, s] = n, l = o.lastIndexOf("/");
        l === -1 ? l = 0 : l = l + 1;
        let c = o.substring(l);
        return this.debugSettings.showFileNames ? `${c}::${s}` : s;
      }), w.hookFunction("InterfaceTextGet", E.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawTranslations) return i(n);
        let [o] = n, s = InterfaceStringsPath.lastIndexOf("/");
        s === -1 ? s = 0 : s = s + 1;
        let l = InterfaceStringsPath.substring(s);
        return this.debugSettings.showFileNames ? `${l}::${o}` : o;
      }), w.hookFunction("ActivityDictionaryText", E.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawActivityNames) return i(n);
        let [o] = n;
        return o;
      }), w.hookFunction("ElementButton.CreateForAsset", E.ModifyBehavior, (n, i) => {
        if (!this.debugSettings.showRawAssetNames) return i(n);
        let [, o, , , s] = n;
        return o = ("Asset" in o ? o : { Asset: o }).Asset, s ?? (s = {}), s.label = o.Name, i(n);
      });
    }
    unload() {
      Oe();
    }
    saveDebugSettings() {
      p.setLocalStorage("debugOptions", this.debugSettings);
    }
  }, __name(_a3, "X"), r(_a3, "DebugModule"), _a3);
  var M;
  function se(...t) {
    let e = Array.isArray(t[0]) && typeof t[0][0] == "string" ? t[0][0] : "[unknown]", n = Array.isArray(t[0]) ? t[0].slice(1) : [], i = C("DebugModule");
    return i.debugSettings.showIncomingServerTransactions && le(e, i.debugSettings.incomingMessageTypes, i.debugSettings.incomingMessageFilterMode) && m.debug("\u25BC Receive", e, ...n), M?.apply(this, t);
  }
  __name(se, "se");
  r(se, "processIncomingTransaction");
  var V;
  function ae(...t) {
    let e = typeof t[0] == "string" ? t[0] : "[unknown]", n = Array.isArray(t[1]) ? t[1] : [t[1]], i = C("DebugModule");
    return i.debugSettings.showOutcomingServerTransactions && le(e, i.debugSettings.outcomingMessageTypes, i.debugSettings.outcomingMessageFilterMode) && m.debug("\u25B2 Send", e, ...n), V?.apply(this, t);
  }
  __name(ae, "ae");
  r(ae, "processOutcomingTransaction");
  function le(t, e, n) {
    if (!e.trim()) return true;
    let o = e.split(",").map((s) => s.trim()).filter((s) => s.length > 0).some((s) => t === s);
    return n === "include" ? o : !o;
  }
  __name(le, "le");
  r(le, "shouldLogMessage");
  function Le() {
    M === void 0 && typeof ServerSocket?.__proto__?.emitEvent == "function" && (M = ServerSocket.__proto__.emitEvent, ServerSocket.__proto__.emitEvent = se), V === void 0 && typeof ServerSocket?.__proto__?.emit == "function" && (V = ServerSocket.__proto__.emit, ServerSocket.__proto__.emit = ae);
  }
  __name(Le, "Le");
  r(Le, "loadServerTransactions");
  function Oe() {
    M && ServerSocket.__proto__.emitEvent === se && (ServerSocket.__proto__.emitEvent = M, M = void 0), V && ServerSocket.__proto__.emit === ae && (ServerSocket.__proto__.emit = V, V = void 0);
  }
  __name(Oe, "Oe");
  r(Oe, "unloadServerTransactions");
  var de = oe($(), 1);
  var p;
  var w;
  var m;
  async function wt(t) {
    w = new W({ name: define_MOD_INFO_default.name, fullName: define_MOD_INFO_default.fullName, version: "1.8.2", repository: define_MOD_INFO_default.repository }), p = new Y(define_MOD_INFO_default.name), m = de.default.get(define_MOD_INFO_default.name), H.injectInline("deeplib-style-5.0.1", re), m.debug("Init wait"), (!CurrentScreen || CurrentScreen === "Login") && t.beforeLogin?.(), await ServerIsLoggedInAsync(), Se(t);
  }
  __name(wt, "wt");
  r(wt, "initMod");
  async function Se(t) {
    if (window[define_MOD_INFO_default.name + "Loaded"]) return;
    let e = N(() => {
      p.load();
    }, (s) => s);
    e.ok || m.error(e.error);
    let n = await ge(async () => {
      await A.init(t.translationOptions);
    }, (s) => s);
    n.ok || m.error(n.error);
    let i = Object.entries(t.modules ?? {}), o = [];
    if (i.some((s) => s[1] instanceof U) || o.push(["VersionModule", new U()]), false, o.push(...i), !Fe(o)) {
      Ze();
      return;
    }
    await t.initFunction?.(), t.mainMenuOptions && C("GUI") && R.setOptions({ ...t.mainMenuOptions, repoLink: define_MOD_INFO_default.repository }), window[define_MOD_INFO_default.name + "Loaded"] = true, m.log(`Loaded! Version: ${"1.8.2"}`);
  }
  __name(Se, "Se");
  r(Se, "init");
  function Fe(t) {
    for (let [e, n] of t) ue(e, n);
    for (let e of x()) {
      let n = N(() => e.init(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of x()) {
      let n = N(() => e.load(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of x()) {
      let n = N(() => e.run(), (i) => i);
      n.ok || m.error(n.error);
    }
    for (let e of x()) e.registerDefaultSettings(p.playerStorage);
    return m.debug("Modules Loaded."), true;
  }
  __name(Fe, "Fe");
  r(Fe, "initModules");
  function Ze() {
    return ke(), w.unload(), delete window[define_MOD_INFO_default.name + "Loaded"], m.debug("Unloaded."), true;
  }
  __name(Ze, "Ze");
  r(Ze, "unloadMod");
  function ke() {
    for (let t of x()) t.unload();
  }
  __name(ke, "ke");
  r(ke, "unloadModules");
  var _ = /* @__PURE__ */ new Map();
  function x() {
    return [..._.values()];
  }
  __name(x, "x");
  r(x, "modules");
  function ue(t, e) {
    return _.set(t, e), e;
  }
  __name(ue, "ue");
  r(ue, "registerModule");
  function C(t) {
    return _.get(t);
  }
  __name(C, "C");
  r(C, "getModule");
  var _a4;
  var pe = (_a4 = class {
  }, __name(_a4, "pe"), r(_a4, "BaseMigrator"), _a4);
  var _a5;
  var k = (_a5 = class extends L {
    constructor(e = null) {
      super();
      __publicField(this, "_subscreens", []);
      __publicField(this, "_mainMenu", null);
      __publicField(this, "_modButtonOptions");
      if (_a5.instance) throw new Error("Duplicate initialization");
      for (let n of x()) n.settingsScreen;
      this._modButtonOptions = e, _a5.instance = this;
    }
    get subscreens() {
      return this._subscreens;
    }
    get mainMenu() {
      return this._mainMenu;
    }
    load() {
      if (!this._modButtonOptions) return;
      let e = this._modButtonOptions;
      this._mainMenu = e?.mainMenu ? new e.mainMenu(this) : new R(this), this._subscreens = [this._mainMenu];
      for (let n of x()) n.settingsScreen && this._subscreens.push(new n.settingsScreen(n));
      this._mainMenu.subscreens = this._subscreens, PreferenceRegisterExtensionSetting({ Identifier: this._modButtonOptions.identifier, ButtonText: this._modButtonOptions.buttonText, Image: this._modButtonOptions.image, load: r(async () => {
        this._mainMenu && await Z(this._mainMenu);
      }, "load"), run: r(() => {
      }, "run"), click: r(() => {
      }, "click"), exit: r(() => {
      }, "exit") });
    }
  }, __name(_a5, "t"), r(_a5, "GUI"), __publicField(_a5, "instance", null), _a5);
  var _a6;
  var U = (_a6 = class extends L {
    constructor(e) {
      super(), e ?? (e = {}), _a6.newVersionMessage = e.newVersionMessage, e.migrators && (_a6.migrators = e.migrators, _a6.migrators.sort((n, i) => n.migrationVersion.localeCompare(i.migrationVersion))), _a6.beforeEach = e.beforeEach, _a6.afterEach = e.afterEach, _a6.beforeAll = e.beforeAll, _a6.afterAll = e.afterAll;
    }
    load() {
      _a6.version = "1.8.2", _a6.checkVersionUpdate(), p.playerStorage.GlobalModule.doShowNewVersionMessage && _a6.isItNewVersion && _a6.sendNewVersionMessage();
    }
    static checkVersionUpdate() {
      let e = _a6.loadVersion(), n = _a6.version;
      _a6.isNewVersion(e, n) && (_a6.isItNewVersion = true, _a6.checkVersionMigration(), _a6.saveVersion()), p.save();
    }
    static checkVersionMigration() {
      let e = _a6.loadVersion(), n = _a6.migrators.filter((i) => _a6.isNewVersion(e, i.migrationVersion));
      if (n.length) {
        _a6.beforeAll?.();
        for (let i of n) _a6.beforeEach?.(), i.migrate(), m.info(`Migrating from ${e} to ${i.migrationVersion} with ${i.constructor.name}`), _a6.afterEach?.();
        _a6.afterAll?.();
      }
    }
    static sendNewVersionMessage() {
      if (!_a6.newVersionMessage) return;
      let n = FriendListBeepLog.push({ MemberNumber: Player.MemberNumber, MemberName: define_MOD_INFO_default.name, ChatRoomName: g("module.version.version_update"), ChatRoomSpace: "X", Private: false, Sent: false, Time: /* @__PURE__ */ new Date(), Message: _a6.newVersionMessage }) - 1, i = g("module.version.new_version_toast_title", { $modName$: define_MOD_INFO_default.name, $modVersion$: _a6.version }), o = FriendListBeepLog[n];
      ServerShowBeep(_a6.newVersionMessage, 1e4, { memberNumber: o.MemberNumber, memberName: o.MemberName, chatRoomName: o.ChatRoomName, ...o.Message && { onClick: r(() => {
        FriendListShowBeep(n);
      }, "onClick") } }, i);
    }
    static isNewVersion(e, n) {
      if (e !== void 0) {
        let i = e.split("."), o = n.split(".");
        for (let s = 0; s < 3; s++) if (i[s] !== o[s]) return o[s] > i[s];
      }
      return e === void 0 || e === "" || !e;
    }
    static saveVersion() {
      p.playerStorage && (p.playerStorage.Version = _a6.version);
    }
    static loadVersion() {
      return p.playerStorage?.Version;
    }
  }, __name(_a6, "t"), r(_a6, "VersionModule"), __publicField(_a6, "isItNewVersion", false), __publicField(_a6, "version"), __publicField(_a6, "newVersionMessage", ""), __publicField(_a6, "migrators", []), __publicField(_a6, "beforeEach"), __publicField(_a6, "afterEach"), __publicField(_a6, "beforeAll"), __publicField(_a6, "afterAll"), _a6);
  var _a7;
  var j = (_a7 = class extends I {
    get pageStructure() {
      return [[{ type: "checkbox", id: "debug-show-incoming-server-transactions", label: "Show Incoming Server Transactions", setElementValue: r(() => this.module.debugSettings.showIncomingServerTransactions, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showIncomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-incoming-filter-mode", label: "Filter Mode", description: ["Configure which incoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.incomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.incomingMessageFilterMode === "exclude" } }], setSettingValue: r((e) => {
        this.module.debugSettings.incomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-incoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomChat, ChatRoomSync")', setElementValue: r(() => this.module.debugSettings.incomingMessageTypes, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.incomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-outcoming-server-transactions", label: "Show Outcoming Server Transactions", setElementValue: r(() => this.module.debugSettings.showOutcomingServerTransactions, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showOutcomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-outcoming-filter-mode", label: "Filter Mode", description: ["Configure which outcoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.outcomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.outcomingMessageFilterMode === "exclude" } }], setSettingValue: r((e) => {
        this.module.debugSettings.outcomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-outcoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomMessage, AccountUpdate")', setElementValue: r(() => this.module.debugSettings.outcomingMessageTypes, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.outcomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-translations", label: "Show Raw Translations", setElementValue: r(() => this.module.debugSettings.showRawTranslations, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawTranslations = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-file-names", label: "Show File Names", description: "Show the file name of the translation in the translation string.", setElementValue: r(() => this.module.debugSettings.showFileNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showFileNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-asset-names", label: "Show Raw Asset Names", setElementValue: r(() => this.module.debugSettings.showRawAssetNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawAssetNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-activity-names", label: "Show Raw Activity Names", setElementValue: r(() => this.module.debugSettings.showRawActivityNames, "setElementValue"), setSettingValue: r((e) => {
        this.module.debugSettings.showRawActivityNames = e;
      }, "setSettingValue") }], [{ type: "button", id: "test-deeplib-big-button", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        G.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button", options: { tooltip: "This is a small button", image: "Icons/Exit.png" }, size: [90, 90], onClick() {
        G.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        G.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        G.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        G.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label", label: "Label", description: "This is a label" }], [{ type: "button", id: "test-deeplib-big-button2", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        G.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button2", options: { tooltip: "This is a small button", image: "Icons/Next.png" }, size: [90, 90], onClick() {
        G.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox2", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        G.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input2", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        G.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input2", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        G.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label2", label: "Label", description: "This is a label" }, { type: "dropdown", id: "test-deeplib-dropdown", label: "Dropdown", description: "This is a dropdown", optionsList: ["Option 1", "Option 2", "Option 3"], setElementValue() {
        return "Option 2";
      }, setSettingValue(e) {
        G.info("Dropdown value:", e);
      } }]];
    }
    exit() {
      this.module.saveDebugSettings(), super.exit();
    }
  }, __name(_a7, "j"), r(_a7, "GuiDebug"), __publicField(_a7, "subscreenOptions", { name: "debug" }), _a7);
  function be(t) {
    return t !== null && typeof t == "object" && Object.getPrototypeOf(t) === Object.prototype && !Array.isArray(t);
  }
  __name(be, "be");
  r(be, "isPlainObject");
  function f(t, e, n = { concatArrays: true, matchingOnly: false }) {
    if (t === void 0) return e;
    if (e === void 0) return t;
    if (Array.isArray(t) && Array.isArray(e) && n.concatArrays) return [...t, ...e];
    if (be(t) && be(e)) {
      let i = { ...t }, o = Object.keys(t).length === 0, s = n.matchingOnly && !o ? Object.keys(e).filter((l) => l in t) : Object.keys(e);
      for (let l of s) l === "__proto__" || l === "constructor" || l === "prototype" || (i[l] = l in t ? f(t[l], e[l], n) : e[l]);
      return i;
    }
    return e;
  }
  __name(f, "f");
  r(f, "deepMerge");
  function Yt(t) {
    let e = JSON.parse(JSON.stringify(t)), n = [];
    for (; e.length > 0; ) {
      let i = Math.floor(Math.random() * e.length);
      n.push(e[i]), e.splice(i, 1);
    }
    return n;
  }
  __name(Yt, "Yt");
  r(Yt, "shuffleArray");
  function O(t, e) {
    let n = t.split("."), i = globalThis;
    for (let o = 0; o < n.length - 1; o++) i[n[o]] || (i[n[o]] = {}), i = i[n[o]];
    i[n[n.length - 1]] = e;
  }
  __name(O, "O");
  r(O, "exportToGlobal");
  function q(t, e) {
    for (; t && t !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t, e)?.get) return true;
      t = Object.getPrototypeOf(t);
    }
    return false;
  }
  __name(q, "q");
  r(q, "hasGetter");
  function Ht(t, e) {
    for (; t && t !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t, e)?.set) return true;
      t = Object.getPrototypeOf(t);
    }
    return false;
  }
  __name(Ht, "Ht");
  r(Ht, "hasSetter");
  var me = r((t) => Math.round(t / 100) / 10, "byteToKB");
  function N(t, e) {
    try {
      return { ok: true, value: t() };
    } catch (n) {
      return { ok: false, error: e ? e(n) : n };
    }
  }
  __name(N, "N");
  r(N, "tryCatch");
  async function ge(t, e) {
    try {
      return { ok: true, value: await t() };
    } catch (n) {
      return { ok: false, error: e ? e(n) : n };
    }
  }
  __name(ge, "ge");
  r(ge, "tryCatchAsync");
  var u = { createButton: Ee, createCheckbox: Me, createInput: Re, createLabel: Ae, createCustom: Ve, createDropdown: We, createTooltip: De, getTooltip: he, setTooltip: ee, createBackNext: Xe };
  function Ee(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "button";
    let n;
    t.options?.image && (n = t.options.image, t.options.image = void 0);
    let i = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, o = ElementButton.Create(t.id, t?.onClick ?? (() => {
    }), f({ labelPosition: "center" }, t.options), f({ button: { classList: ["deeplib-button"], attributes: { disabled: i }, children: [n ? f({ tag: "img", attributes: { id: `${t.id}-image`, alt: "", decoding: "async", loading: "lazy", src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }, style: { "--image": `url("${n}")` } }, t.htmlOptions?.img) : void 0] } }, t.htmlOptions ?? {}));
    return I.currentElements.push([o, t]), o;
  }
  __name(Ee, "Ee");
  r(Ee, "elementCreateButton");
  function Me(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "checkbox";
    let n = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, i = ElementCreate(f({ tag: "label", classList: ["deeplib-checkbox-container", t?.options?.direction ?? "rowReverse"], attributes: { id: `${t.id}-container`, for: t.id }, children: [t.label ? f({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t.id}-label` }, children: [t.label] }, t.htmlOptions?.label) : void 0, f({ tag: "input", classList: ["checkbox", "deeplib-input"], attributes: { type: "checkbox", id: t.id, disabled: n, checked: t?.setElementValue?.() || void 0 }, eventListeners: { change: r(function() {
      t?.setSettingValue?.(this.checked);
    }, "change") } }, t.htmlOptions?.checkbox)] }, t.htmlOptions?.container));
    return t.description && (i.addEventListener("mouseover", function(o) {
      z.call(this, o, t.description || null);
    }), i.addEventListener("mouseout", function(o) {
      P.call(this, o);
    })), I.currentElements.push([i, t]), i;
  }
  __name(Me, "Me");
  r(Me, "elementCreateCheckbox");
  function Ve(t) {
    var _a15, _b;
    t.id ?? (t.id = ElementGenerateID()), (_a15 = t.htmlOptions).attributes ?? (_a15.attributes = {}), (_b = t.htmlOptions.attributes).id ?? (_b.id = t.id);
    let e = document.getElementById(t.htmlOptions.attributes.id);
    if (e) return e;
    t.type = "custom";
    let n = ElementCreate(t.htmlOptions);
    return I.currentElements.push([n, t]), n;
  }
  __name(Ve, "Ve");
  r(Ve, "elementCreateCustom");
  function Re(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    let n = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, i = ElementCreate(f({ tag: "label", classList: ["deeplib-input-container", t?.options?.direction ?? void 0], attributes: { id: `${t.id}-container`, for: t.id }, children: [t.label ? f({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t.id}-label` }, children: [t.label] }, t.htmlOptions?.label) : void 0, f({ tag: "input", classList: ["deeplib-input"], attributes: { type: t.type, id: t.id, placeholder: " ", disabled: n, value: t?.setElementValue?.() || void 0 }, eventListeners: { input: r(function() {
      t?.setSettingValue?.(this.value);
    }, "input") } }, t.htmlOptions?.input)] }, t.htmlOptions?.container));
    return t.description && (i.addEventListener("mouseover", function(o) {
      z.call(this, o, t.description || null);
    }), i.addEventListener("mouseout", function(o) {
      P.call(this, o);
    })), I.currentElements.push([i, t]), i;
  }
  __name(Re, "Re");
  r(Re, "elementCreateInput");
  function Ae(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "label";
    let n = ElementCreate(f({ tag: "label", classList: ["deeplib-label", "deeplib-text"], attributes: { id: t.id }, children: [t.label] }, t.htmlOptions));
    return t.description && (n.addEventListener("mouseover", function(i) {
      z.call(this, i, t.description || null);
    }), n.addEventListener("mouseout", function(i) {
      P.call(this, i);
    })), I.currentElements.push([n, t]), n;
  }
  __name(Ae, "Ae");
  r(Ae, "elementCreateLabel");
  function We(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(`${t.id}-container`);
    if (e) return e;
    t.type = "dropdown";
    let n = ElementDropdown.CreateLabelled(t.id, t.optionsList, t.label ?? "", t.onChange ?? function() {
      return t.setSettingValue?.(this.value);
    }, t.options, f({ container: { classList: ["deeplib-dropdown-container", t?.options?.direction ?? void 0], attributes: { id: `${t.id}-container`, for: t.id }, eventListeners: { mouseover: r(function(i) {
      z.call(this, i, t.description || null);
    }, "mouseover"), mouseout: r(function(i) {
      P.call(this, i);
    }, "mouseout") } }, label: { classList: ["deeplib-text"], attributes: { id: `${t.id}-label` } } }, t.htmlOptions));
    return I.currentElements.push([n, t]), n;
  }
  __name(We, "We");
  r(We, "elementCreateDropdown");
  function De() {
    return ElementCreate({ tag: "div", classList: ["deeplib-tooltip", "anchor-bottom"], attributes: { id: "deeplib-tooltip" }, style: { display: "none" } });
  }
  __name(De, "De");
  r(De, "elementCreateTooltip");
  function he() {
    return document.getElementById("deeplib-tooltip") ?? void 0;
  }
  __name(he, "he");
  r(he, "elementGetTooltip");
  function z(t, e) {
    let n = this.getBoundingClientRect();
    ee(e, "bottom");
    let i = he();
    if (i) {
      i.offsetHeight;
      let o = i.getBoundingClientRect();
      (S.doRectsOverlap(n, o) ? "top" : "bottom") === "top" && fe("top");
    }
  }
  __name(z, "z");
  r(z, "tooltipMouseOver");
  function P(t) {
    ee(null);
  }
  __name(P, "P");
  r(P, "tooltipMouseOut");
  function ee(t, e = "bottom") {
    let n = document.getElementById("deeplib-tooltip");
    if (!n) return false;
    fe(e);
    let i = t == null ? null : CommonIsObject(t) && "tag" in t ? [ElementCreate(t)] : CommonIsArray(t) ? t.map((o) => CommonIsObject(o) && "tag" in o ? ElementCreate(o) : typeof o == "string" || CommonIsObject(t) && "tag" in t || o instanceof HTMLElement ? o : null).filter((o) => o !== null) : typeof t == "string" ? [t] : null;
    return i === null ? (n.childNodes.forEach((o) => o.remove()), n.style.display = "none", true) : (n.replaceChildren(...i), n.style.display = "", true);
  }
  __name(ee, "ee");
  r(ee, "elementSetTooltip");
  function fe(t) {
    let e = document.getElementById("deeplib-tooltip");
    if (!e) return false;
    e.classList.toggle("anchor-bottom", t === "bottom"), e.classList.toggle("anchor-top", t === "top");
  }
  __name(fe, "fe");
  r(fe, "elementSetTooltipPosition");
  function Xe(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    let n = r((l) => {
      let c = document.getElementById(`${t.id}-label`);
      if (!c) return false;
      c.textContent = l;
    }, "setLabel"), i = r((l) => {
      let c = document.getElementById(`deeplib-prev-next-${t.id}-prev-button-tooltip`);
      if (!c) return false;
      c.textContent = l;
    }, "setPrevTooltip"), o = r((l) => {
      let c = document.getElementById(`deeplib-prev-next-${t.id}-next-button-tooltip`);
      if (!c) return false;
      c.textContent = l;
    }, "setNextTooltip");
    return ElementCreate({ tag: "div", classList: ["deeplib-prev-next"], attributes: { id: t.id }, children: [u.createButton({ id: `deeplib-prev-next-${t.id}-prev-button`, onClick: r(() => {
      t.back({ setLabel: n, setBackTooltip: i, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/arrow_left.svg`, tooltip: t.initialPrevTooltip } }), u.createLabel({ id: `${t.id}-label`, label: t.initialLabel, htmlOptions: { classList: ["deeplib-prev-next-label"] } }), u.createButton({ id: `deeplib-prev-next-${t.id}-next-button`, onClick: r(() => {
      t.next({ setLabel: n, setBackTooltip: i, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/arrow_right.svg`, tooltip: t.initialNextTooltip } })] });
  }
  __name(Xe, "Xe");
  r(Xe, "elementPrevNext");
  var _a8;
  var R = (_a8 = class extends I {
    constructor(e) {
      super(e);
      __publicField(this, "subscreens", []);
      this.subscreens = e.subscreens;
    }
    load() {
      if (!k.instance || CurrentModule !== "DeepLibMod") {
        this.setSubscreen(this);
        return;
      }
      super.load();
      let e = u.createButton({ id: "exit", size: [90, 90], onClick: r(() => {
        this.exit();
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/exit.svg`, tooltip: g("settings.button.back_button_hint") } }), n = document.getElementById("deeplib-nav-menu");
      n && n.append(e);
      for (let o of this.subscreens) {
        if (o.options.name === "mainmenu") continue;
        let s = u.createButton({ id: `${o.options.name}-button`, onClick: r(() => {
          this.setSubscreen(o);
        }, "onClick"), size: [null, 90], options: { image: o.options.icon, label: g(`mainmenu.button.${o.options.name}`) } });
        b.appendToSettingsDiv(s);
      }
      let i = b.getMiscDiv();
      if (b.appendToSubscreen(i), _a8.options.wikiLink) {
        let o = u.createButton({ id: "deeplib-wiki-button", onClick: r(() => {
          window.open(_a8.options.wikiLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/notebook.svg`, label: g("mainmenu.button.wiki") } });
        b.appendToMiscDiv(o);
      }
      if (_a8.options.repoLink) {
        let o = u.createButton({ id: "deeplib-repo-button", onClick: r(() => {
          window.open(_a8.options.repoLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/git.svg`, label: g("mainmenu.button.repo") } });
        b.appendToMiscDiv(o);
      }
      if (_a8.options.resetSubscreen) {
        let o = u.createButton({ id: "deeplib-reset-button", onClick: r(() => {
          this.setSubscreen(_a8.options.resetSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/trash_bin.svg`, label: g("mainmenu.button.reset") } });
        b.appendToMiscDiv(o);
      }
      if (_a8.options.importExportSubscreen) {
        let o = u.createButton({ id: "deeplib-import-export-button", onClick: r(() => {
          this.setSubscreen(_a8.options.importExportSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/transfer.svg`, label: g("mainmenu.button.import_export") } });
        b.appendToMiscDiv(o);
      }
      if (_a8.options.storageFullnessIndicator) {
        let s = me(p.storageSize()), l = (s / 180 * 100).toFixed(1), c = u.createButton({ id: CommonGenerateUniqueID(), size: [null, 80], options: { tooltipPosition: "left", noStyling: true, tooltip: g("mainmenu.meter.storage_hint", { $percentage$: l }), label: g("mainmenu.meter.storage_label", { $currentCapacity$: s, $maxCapacity$: 180 }) }, htmlOptions: { button: { children: [{ tag: "div", attributes: { id: "deeplib-storage-meter" }, children: [{ tag: "div", attributes: { id: "deeplib-storage-bar" }, style: { width: `${l}%` } }] }] } } });
        b.appendToMiscDiv(c);
      }
      if (C("DebugModule")) {
        let o = u.createButton({ id: "deeplib-debug-button", onClick: r(() => {
          this.setSubscreen(new j(C("DebugModule")));
        }, "onClick"), size: [90, 90], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/bug.svg` } });
        n && n.prepend(o);
      }
    }
    run() {
      super.run();
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1, CharacterLoadCanvas(Player);
      let e = typeof this.options.returnScreen == "function" ? this.options.returnScreen() : this.options.returnScreen;
      e ? e instanceof I ? Z(e).then(() => {
      }) : Array.isArray(e) && CommonSetScreen(...e) : PreferenceOpenSubscreen("Extensions").then(() => {
        PreferenceSubscreenExtensionsClear();
      });
    }
    resize() {
      super.resize(), ElementSetPosition("deeplib-misc", 1905, 930, "bottom-right"), ElementSetSize("deeplib-misc", 405, null);
    }
    static setOptions(e) {
      _a8.options = e;
    }
  }, __name(_a8, "t"), r(_a8, "MainMenu"), __publicField(_a8, "options", {}), __publicField(_a8, "subscreenOptions", { name: "mainmenu", doShowExitButton: false, settingsWidth: 600 }), _a8);
  var _a9;
  var A = (_a9 = class {
    static async init(e) {
      if (_a9.initialized) return;
      _a9.initialized = true, _a9.PathToModTranslation = (() => {
        if (e?.pathToTranslationsFolder) return e.pathToTranslationsFolder.endsWith("/") ? e.pathToTranslationsFolder : `${e.pathToTranslationsFolder}/`;
      })(), _a9.DefaultLanguage = e?.defaultLanguage || _a9.DefaultLanguage, _a9.FetchFolder = e?.fetchFolder || _a9.FetchFolder;
      let n = e?.fixedLanguage ? _a9.DefaultLanguage : TranslationLanguage.toLowerCase(), i = await _a9.fetchTranslation(_a9.PathToLibTranslation, n);
      if (n === _a9.DefaultLanguage) _a9.LibTranslation = i;
      else {
        let s = await _a9.fetchTranslation(_a9.PathToLibTranslation, _a9.DefaultLanguage);
        _a9.LibTranslation = { ...s, ...i };
      }
      if (!_a9.PathToModTranslation) return;
      let o = await _a9.fetchTranslation(_a9.PathToModTranslation, n, _a9.FetchFolder);
      if (n === _a9.DefaultLanguage) _a9.ModTranslation = o;
      else {
        let s = await _a9.fetchTranslation(_a9.PathToModTranslation, _a9.DefaultLanguage, _a9.FetchFolder);
        _a9.ModTranslation = { ...s, ...o };
      }
    }
    static getTextMod(e) {
      return _a9.ModTranslation?.[e] || void 0;
    }
    static getTextLib(e) {
      return _a9.LibTranslation?.[e] || void 0;
    }
    static async fetchTranslation(e, n, i = false) {
      if (i) {
        let l = `${e}${n}/`, c = await this.fetchLanguageFolder(l);
        if (Object.keys(c).length > 0) return c;
      }
      let o = `${e}${n}.lang`, s = await _a9.fetchLanguageFile(o);
      if (n !== _a9.DefaultLanguage && !s) {
        let l = `${e}${_a9.DefaultLanguage}.lang`;
        return await this.fetchLanguageFile(l) || {};
      }
      return s || {};
    }
    static async fetchLanguageFile(e) {
      let n = await fetch(e).catch((o) => (m.error("Failed to fetch translation file:", o), new Response(null, { status: 500 })));
      if (!n.ok) return false;
      let i = await n.text();
      return this.parseTranslation(i);
    }
    static async fetchLanguageFolder(e) {
      let n = {}, i = "manifest.txt", o = null, s = await fetch(`${e}${i}`).catch((l) => (m.error("Failed to fetch language folder manifest:", l), new Response(null, { status: 500 })));
      if (s.ok && (o = (await s.text()).trim().split(`
`).map((c) => c.trim()).filter((c) => c && !c.startsWith("#"))), o && o.length > 0) {
        let l = o.map(async (d) => {
          try {
            let a = await _a9.fetchLanguageFile(`${e}${d}`);
            if (a) return a;
          } catch {
          }
          return {};
        }), c = await Promise.all(l);
        for (let d of c) Object.assign(n, d);
        if (Object.keys(n).length > 0) return n;
      }
      return n;
    }
    static parseTranslation(e) {
      let n = {}, i = e.split(`
`);
      for (let o of i) {
        let s = o.trim();
        if (!s || s.startsWith("#")) continue;
        let [l, ...c] = s.split("=");
        n[l.trim()] = c.join("=").trim();
      }
      return n;
    }
  }, __name(_a9, "t"), r(_a9, "Localization"), __publicField(_a9, "LibTranslation", {}), __publicField(_a9, "ModTranslation", {}), __publicField(_a9, "PathToModTranslation"), __publicField(_a9, "PathToLibTranslation", `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_translations/`), __publicField(_a9, "DefaultLanguage", "en"), __publicField(_a9, "FetchFolder", false), __publicField(_a9, "initialized", false), _a9);
  var g = r((t, e) => {
    let n = A.getTextMod(t) || A.getTextLib(t) || t;
    if (e) {
      let i = Object.fromEntries(Object.entries(e).map(([o, s]) => [o, s.toString()]));
      return CommonStringPartitionReplace(n, i).join("");
    }
    return n;
  }, "getText");
  var _a10;
  var D = (_a10 = class {
    constructor(e) {
      __publicField(this, "opts");
      __publicField(this, "dialog");
      __publicField(this, "blocker");
      __publicField(this, "inputEl");
      __publicField(this, "timeoutId");
      __publicField(this, "updateIntervalId");
      __publicField(this, "resolve", r(() => {
      }, "resolve"));
      this.opts = e;
      e ?? (e = {}), e.closeOnBackdrop ?? (e.closeOnBackdrop = true), e.modalClassList ?? (e.modalClassList = []);
      let n = `modal-prompt-${Date.now()}`, i = (CommonIsArray(e.prompt) ? e.prompt : [e.prompt]).filter((o) => o !== null) ?? [""];
      this.dialog = ElementCreate({ tag: "dialog", classList: ["deeplib-modal", ...e.modalClassList], attributes: { id: this.opts.modalId ?? `modal-${Date.now()}`, role: "dialog", "aria-modal": "true", "aria-labelledby": n }, children: [{ tag: "div", classList: ["deeplib-modal-prompt-container"], children: [...i] }, { tag: "div", classList: ["deeplib-modal-prompt"], attributes: { id: n }, children: [e.input ? this.renderInput(e.input) : void 0] }, this.renderButtons()] }), ElementSetFontSize(this.dialog, "auto"), this.blocker = this.createBlocker(), this.renderButtons(), document.body.append(this.createBlocker(), this.dialog), this.setupFocusTrap(), e.timeoutMs && (this.timeoutId = window.setTimeout(() => this.close("timeout"), e.timeoutMs)), e.onShow && e.onShow.call(this.dialog), this.updateIntervalId = window.setInterval(() => {
        ElementSetFontSize(this.dialog, "auto");
      }, 1e3);
    }
    show() {
      return _a10.enqueue(this);
    }
    static async alert(e, n = {}) {
      await new _a10({ prompt: e, buttons: [...n.buttons ?? [], { action: "close", text: g("modal.button.ok") }], timeoutMs: n.timeoutMs, escapeAction: "close", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
    }
    static async confirm(e, n = {}) {
      let [i] = await new _a10({ prompt: e, buttons: [...n.buttons ?? [], { text: g("modal.button.decline"), action: "decline" }, { text: g("modal.button.confirm"), action: "confirm" }], escapeAction: "decline", enterAction: "confirm", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
      return i === "confirm";
    }
    static async prompt(e, n = {}) {
      let [i, o] = await new _a10({ prompt: e, timeoutMs: 0, input: { type: "input", defaultValue: n.defaultValue }, buttons: [...n.buttons ?? [], { text: g("modal.button.cancel"), action: "cancel" }, { text: g("modal.button.submit"), action: "submit" }], escapeAction: "cancel", enterAction: "submit", modalId: n.modalId, modalClassList: n.modalClassList, onShow: n.onShow }).show();
      return i === "submit" ? o : null;
    }
    renderInput(e) {
      let n = document.createElement(e.type);
      return n.classList.add("deeplib-modal-input"), e.placeholder && (n.placeholder = e.placeholder), e.readOnly && (n.readOnly = true), e.defaultValue && (n.value = e.defaultValue), e.type === "textarea" && (n.rows = 5), n.addEventListener("input", () => {
        let i = e.validate?.(n.value);
        n.setCustomValidity(i || "");
      }), this.inputEl = n, n;
    }
    renderButtons() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-button-container"), (this.opts.buttons ? [...this.opts.buttons] : []).forEach((i) => {
        let o = u.createButton({ id: `deeplib-modal-${i.action}`, onClick: r(() => typeof i.action == "function" ? i.action() : this.close(i.action), "onClick"), options: { disabled: i.disabled, label: i.text } });
        e.append(o);
      }), e;
    }
    createBlocker() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-blocker"), e.title = "Click to close", this.opts.closeOnBackdrop !== false && e.addEventListener("click", () => this.close("close")), e;
    }
    setupFocusTrap() {
      let n = Array.from(this.dialog.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')), i = n[0], o = n[n.length - 1];
      this.dialog.addEventListener("keydown", (s) => {
        if (s.key === "Tab") {
          if (n.length === 0) {
            s.preventDefault();
            return;
          }
          s.shiftKey ? document.activeElement === i && (o.focus(), s.preventDefault()) : document.activeElement === o && (i.focus(), s.preventDefault());
        } else if (s.key === "Escape") s.stopPropagation(), this.close(this.opts.escapeAction ?? "close");
        else if (s.key === "Enter") {
          if (n.some((l) => l === document.activeElement) && document.activeElement !== this.inputEl) return;
          s.preventDefault(), s.stopPropagation(), this.close(this.opts.enterAction ?? "submit");
        }
      }), window.requestAnimationFrame(() => {
        (this.inputEl || i)?.focus();
      });
    }
    close(e) {
      this.timeoutId && clearTimeout(this.timeoutId), clearInterval(this.updateIntervalId), this.dialog.close(), this.dialog.remove(), this.blocker.remove(), document.body.querySelector(".deeplib-modal-blocker")?.remove();
      let n = this.inputEl?.value ?? "";
      this.resolve([e, n]), _a10.dequeue();
    }
    static enqueue(e) {
      return _a10.queue.push(e), _a10.processing || _a10.dequeue(), new Promise((n) => e.resolve = n);
    }
    static dequeue() {
      let e = _a10.queue.shift();
      e ? (_a10.processing = true, e.dialog.show()) : _a10.processing = false;
    }
  }, __name(_a10, "t"), r(_a10, "Modal"), __publicField(_a10, "queue", []), __publicField(_a10, "processing", false), _a10);
  var _a11;
  var ve = (_a11 = class extends I {
    constructor(e) {
      super();
      __publicField(this, "importExportOptions");
      this.importExportOptions = e;
    }
    load() {
      super.load();
      let e = u.createButton({ id: "deeplib-import-file-button", size: [600, 90], onClick: r(() => {
        this.dataImport("file");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/file_import.svg`, label: g("import-export.button.import_file") } });
      b.appendToSettingsDiv(e);
      let n = u.createButton({ id: "deeplib-export-file-button", size: [600, 90], onClick: r(() => {
        this.dataExport("file");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/file_export.svg`, label: g("import-export.button.export_file") } });
      b.appendToSettingsDiv(n);
      let i = u.createButton({ id: "deeplib-import-clipboard-button", size: [600, 90], onClick: r(() => {
        this.dataImport("clipboard");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/clipboard_import.svg`, label: g("import-export.button.import_clipboard") } });
      b.appendToSettingsDiv(i);
      let o = u.createButton({ id: "deeplib-export-clipboard-button", size: [600, 90], onClick: r(() => {
        this.dataExport("clipboard");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/clipboard_export.svg`, label: g("import-export.button.export_clipboard") } });
      b.appendToSettingsDiv(o);
    }
    resize() {
      super.resize();
    }
    async dataExport(e) {
      try {
        let n = await this.getSelectedModules(x(), "export");
        if (!n) return;
        if (n.length === 0) {
          ToastManager.error("No modules selected for export.");
          return;
        }
        let i = this.buildExportPayload(n);
        if (e === "clipboard") await this.exportToClipboard(i);
        else if (e === "file" && !await this.exportToFile(i, "settings")) return;
        this.importExportOptions.onExport?.(), ToastManager.success("Data exported successfully.");
      } catch (n) {
        ToastManager.error("Data export failed."), m.error("Data export failed.", n);
      }
    }
    async dataImport(e) {
      try {
        let n = e === "clipboard" ? await this.importFromClipboard() : await this.importFromFile();
        if (n === null) return;
        if (!n) throw new Error("No data");
        if (!await this.applyImportPayload(n)) return;
        this.importExportOptions.onImport?.(), ToastManager.success("Data imported successfully.");
      } catch (n) {
        ToastManager.error("Data import failed."), m.error("Data import failed.", n);
      }
    }
    async exportToFile(e, n) {
      let i = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      if ("showSaveFilePicker" in window) try {
        let s = await (await window.showSaveFilePicker({ suggestedName: n + i, types: [{ description: "Custom Data Files", accept: { "text/plain": [i] } }] })).createWritable();
        return await s.write(e), await s.close(), true;
      } catch (o) {
        let s = o instanceof Error ? o.message : String(o);
        throw new Error(`File save cancelled or failed: ${s}`, { cause: o });
      }
      else {
        let o = await D.prompt("Enter file name", { defaultValue: n });
        if (o === null) return false;
        if (o === "") throw new Error("File name cannot be empty.");
        let s = new Blob([e], { type: "text/plain" }), l = ElementCreate({ tag: "a", attributes: { href: URL.createObjectURL(s), download: o + i } });
        return l.click(), URL.revokeObjectURL(l.href), true;
      }
    }
    async importFromFile() {
      let e = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      async function n(i) {
        if (!i.name.endsWith(e)) throw new Error(`Invalid file type. Expected a ${e} file.`);
        return new Promise((o, s) => {
          let l = new FileReader();
          l.onload = () => o(l.result), l.onerror = () => s(new Error("Failed to read file.")), l.readAsText(i);
        });
      }
      __name(n, "n");
      if (r(n, "importFromFileInternal"), "showOpenFilePicker" in window) try {
        let [i] = await window.showOpenFilePicker({ types: [{ description: "Custom Data Files", accept: { "text/plain": [e] } }], multiple: false }), o = await i.getFile();
        return await n(o);
      } catch (i) {
        let o = i instanceof Error ? i.message : String(i);
        throw new Error(`File selection cancelled or failed: ${o}`, { cause: i });
      }
      else return new Promise((i, o) => {
        let s = document.createElement("input");
        s.type = "file", s.accept = e, s.onchange = async (l) => {
          let c = l.target.files?.[0];
          if (c) try {
            let d = await n(c);
            i(d);
          } catch (d) {
            o(d);
          }
          else o(new Error("No file selected."));
        }, s.click();
      });
    }
    async exportToClipboard(e) {
      return navigator.clipboard.writeText(e).catch((n) => {
        let i = n instanceof Error ? n.message : String(n);
        throw new Error(`Failed to copy data to clipboard: ${i}`, { cause: n });
      });
    }
    async importFromClipboard() {
      return D.prompt("Enter data to import").catch((e) => {
        let n = e instanceof Error ? e.message : String(e);
        throw new Error(`Failed to read data from clipboard: ${n}`, { cause: e });
      });
    }
    async getSelectedModules(e, n) {
      let i = e.filter((a) => q(a, "settings") && !!a.settings), o = Object.fromEntries(i.map((a) => [a.constructor.name, true]));
      if (i.length === 0) throw new Error("No modules to choose from.");
      let s = i.map((a) => u.createCheckbox({ id: a.constructor.name, label: g(a.constructor.name), setElementValue: r(() => o[a.constructor.name], "setElementValue"), setSettingValue: r((h) => o[a.constructor.name] = h, "setSettingValue") })), l = n === "import" ? "import_export.import.select_modules" : "import_export.export.select_modules";
      if (!await D.confirm([g(l), ElementCreate({ tag: "br" }), g("import_export.text.not_sure"), { tag: "div", classList: ["deeplib-modal-checkbox-container"], children: s }], { modalId: "deeplib-modal-import_export" })) return null;
      let d = Object.entries(o).filter(([a, h]) => h).map(([a]) => C(a)).filter((a) => !!a);
      if (d.length === 0) throw new Error("No modules selected.");
      return d;
    }
    buildExportPayload(e) {
      let n = {};
      for (let i of e) !q(i, "settings") || i.settings === null || (n[i.constructor.name] = i.settings);
      return LZString.compressToBase64(JSON.stringify(n));
    }
    async applyImportPayload(e) {
      let n = JSON.parse(LZString.decompressFromBase64(e) ?? "");
      if (!n) throw new Error("Invalid import format.");
      let i = Object.keys(n).map((s) => C(s)).filter((s) => !!s), o = await this.getSelectedModules(i, "import");
      if (!o) return false;
      if (o.length === 0) throw new Error("No modules selected.");
      for (let s of o) {
        let l = n[s.constructor.name];
        if (!l) continue;
        let c = f(s.defaultSettings, l);
        c && (s.settings = c);
      }
      return true;
    }
  }, __name(_a11, "ve"), r(_a11, "GuiImportExport"), __publicField(_a11, "subscreenOptions", { name: "import-export" }), _a11);
  var _a12;
  var Y = (_a12 = class {
    constructor(e) {
      __publicField(this, "modName");
      return _a12._instance || (_a12._instance = this, this.modName = e), this.modName ?? (this.modName = e), _a12._instance;
    }
    get playerStorage() {
      return Player[this.modName];
    }
    set playerStorage(e) {
      Player[this.modName] = e;
    }
    get extensionStorage() {
      return Player.ExtensionSettings[this.modName];
    }
    set extensionStorage(e) {
      Player.ExtensionSettings[this.modName] = e;
    }
    setLocalStorage(e, n) {
      localStorage.setItem(`${this.modName}_${e}`, _a12.dataCompress(n));
    }
    getLocalStorage(e) {
      let n = localStorage.getItem(`${this.modName}_${e}`);
      return n ? _a12.dataDecompress(n) : null;
    }
    load() {
      if (this.extensionStorage) {
        let e = _a12.dataDecompress(this.extensionStorage || "");
        e === null || !Object.hasOwn(e, "Version") ? this.playerStorage = { Version: "1.8.2" } : this.playerStorage = e;
      } else this.playerStorage = {};
    }
    save() {
      this.extensionStorage || (this.extensionStorage = ""), this.extensionStorage = _a12.dataCompress(this.playerStorage), ServerPlayerExtensionSettingsSync(this.modName);
    }
    storageSize() {
      return _a12.measureSize(this.extensionStorage);
    }
    static dataDecompress(e) {
      let n = LZString.decompressFromBase64(e), i = null;
      try {
        i = JSON.parse(n);
      } catch (o) {
        m.error(o);
      }
      return i;
    }
    static dataCompress(e) {
      return LZString.compressToBase64(JSON.stringify(e));
    }
    static measureSize(e) {
      try {
        if (typeof e != "string" && (e = JSON.stringify(e) || ""), typeof e == "string") return new TextEncoder().encode(e).byteLength;
        throw new Error();
      } catch {
        return NaN;
      }
    }
  }, __name(_a12, "t"), r(_a12, "ModStorage"), __publicField(_a12, "_instance", null), _a12);
  var S = { autoSetPosition: Ne, autoSetSize: Ue, hide: Qe, unhide: Ye, hasOverflow: He, doRectsOverlap: je };
  function Ne(t, e) {
    let n, i, o;
    if (Array.isArray(e)) n = e[0], i = e[1], o = e[2];
    else if (typeof e == "function") {
      let s = e();
      n = s[0], i = s[1], o = s[2];
    }
    n !== void 0 && i !== void 0 && ElementSetPosition(t, n, i, o);
  }
  __name(Ne, "Ne");
  r(Ne, "autoSetPosition");
  function Ue(t, e) {
    let n, i;
    if (Array.isArray(e)) n = e[0], i = e[1];
    else if (typeof e == "function") {
      let o = e();
      n = o[0], i = o[1];
    }
    n !== void 0 && i !== void 0 && ElementSetSize(t, n, i);
  }
  __name(Ue, "Ue");
  r(Ue, "autoSetSize");
  function Qe(t) {
    let e = ElementWrap(t);
    e && (e.style.display = "none");
  }
  __name(Qe, "Qe");
  r(Qe, "hide");
  function Ye(t) {
    let e = ElementWrap(t);
    e && (e.style.display = "");
  }
  __name(Ye, "Ye");
  r(Ye, "unhide");
  function He(t) {
    let e = ElementWrap(t);
    if (!e) return null;
    let n = e.scrollHeight > e.clientHeight, i = e.scrollWidth > e.clientWidth;
    return { any: n || i, vertical: n, horizontal: i };
  }
  __name(He, "He");
  r(He, "hasOverflow");
  function je(t, e) {
    return !(t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom);
  }
  __name(je, "je");
  r(je, "doRectsOverlap");
  var b = { getSubscreen: te, appendToSubscreen: Pe, removeSubscreen: ze, getSettingsDiv: ne, appendToSettingsDiv: Ke, removeSettingsDiv: Je, getMiscDiv: ie, appendToMiscDiv: $e, removeMiscDiv: _e };
  function te() {
    let t = ElementWrap("deeplib-subscreen");
    if (t) return t;
    let e = ElementCreate({ tag: "div", classList: ["deeplib-subscreen", "HideOnPopup"], attributes: { id: "deeplib-subscreen" } });
    return document.body.appendChild(e);
  }
  __name(te, "te");
  r(te, "elementGetSubscreenDiv");
  function ze() {
    return te()?.remove();
  }
  __name(ze, "ze");
  r(ze, "elementRemoveSubscreenDiv");
  function Pe(...t) {
    return te()?.append(...t);
  }
  __name(Pe, "Pe");
  r(Pe, "elementAppendToSubscreenDiv");
  function ne() {
    let t = ElementWrap("deeplib-settings");
    return t || ElementCreate({ tag: "div", classList: ["deeplib-settings", "scroll-box"], attributes: { id: "deeplib-settings" } });
  }
  __name(ne, "ne");
  r(ne, "elementGetSettingsDiv");
  function Ke(...t) {
    return ne()?.append(...t);
  }
  __name(Ke, "Ke");
  r(Ke, "elementAppendToSettingsDiv");
  function Je() {
    return ne()?.remove();
  }
  __name(Je, "Je");
  r(Je, "elementRemoveSettingsDiv");
  function ie() {
    let t = ElementWrap("deeplib-misc");
    return t || ElementCreate({ tag: "div", classList: ["deeplib-misc"], attributes: { id: "deeplib-misc" } });
  }
  __name(ie, "ie");
  r(ie, "elementGetMiscDiv");
  function $e(...t) {
    return ie()?.append(...t);
  }
  __name($e, "$e");
  r($e, "elementAppendToMiscDiv");
  function _e() {
    return ie()?.remove();
  }
  __name(_e, "_e");
  r(_e, "elementRemoveMiscDiv");
  var K = oe($(), 1);
  function qe(t) {
    let e = t.name;
    return { INFO: "color: #32CCCC", TRACE: "color: #CCCC32", WARN: "color: #eec355", ERROR: "color: #750b0b", DEBUG: "color: #9E4BCF", TIME: "color: #CCCC32" }[e];
  }
  __name(qe, "qe");
  r(qe, "colorizeLog");
  var G = K.default.get("DeepLib");
  K.default.useDefaults({ defaultLevel: K.default.DEBUG, formatter: r(function(t, e) {
    let n = e.name || "DeepLib", i = navigator.userAgent.toLowerCase();
    if (i.includes("chrome") || i.includes("firefox")) {
      let o = qe(e.level);
      t.unshift(`%c${n}:`, o);
    } else t.unshift(`${n}:`);
  }, "formatter") });
  function Zn(t, e, n) {
    let i = ElementCreate({ tag: "div", classList: ["ChatMessage", "deeplib-message", "ChatMessageNonDialogue"], attributes: { id: t ?? `DEEPLIB_LOCAL_MESSAGE_${Date.now()}`, "data-time": ChatRoomCurrentTime(), "data-sender": Player.MemberNumber?.toString() }, children: [{ tag: "span", classList: ["deeplib-text"], innerHTML: e.replaceAll(`
	`, "") }, { tag: "br" }, { tag: "a", classList: ["deeplib-text"], attributes: { href: "#" }, innerHTML: "<b>Close (Click)</b>", eventListeners: { click: r(() => {
      i.remove();
    }, "click") } }] });
    ChatRoomAppendChat(i), n && setTimeout(() => i.remove(), n * 1e3);
  }
  __name(Zn, "Zn");
  r(Zn, "sendLocalMessage");
  function kn(t, e = void 0, n = []) {
    t && ServerSend("ChatRoomChat", { Content: "DEEPLIB_CUSTOM_ACTION", Type: "Action", Target: e ?? void 0, Dictionary: [{ Tag: 'MISSING TEXT IN "Interface.csv": DEEPLIB_CUSTOM_ACTION', Text: t }, ...n] });
  }
  __name(kn, "kn");
  r(kn, "sendActionMessage");
  var E = { Observe: 0, AddBehavior: 1, ModifyBehavior: 5, OverrideBehavior: 10, Top: 100 };
  var _a13;
  var W = (_a13 = class {
    constructor(e, n) {
      __publicField(this, "SDK");
      __publicField(this, "patchedFunctions", /* @__PURE__ */ new Map());
      this.SDK = bcModSdk.registerMod(e, n);
    }
    initPatchableFunction(e) {
      let n = this.patchedFunctions.get(e);
      return n || (n = { name: e, hooks: [] }, this.patchedFunctions.set(e, n)), n;
    }
    hookFunction(e, n, i, o = null) {
      let s = this.initPatchableFunction(e);
      if (s.hooks.some((c) => c.hook === i)) return () => null;
      let l = this.SDK.hookFunction(e, n, i);
      return s.hooks.push({ hook: i, priority: n, module: o, removeCallback: l }), s.hooks.sort((c, d) => d.priority - c.priority), l;
    }
    patchFunction(e, n) {
      this.SDK.patchFunction(e, n);
    }
    unpatchFunction(e) {
      this.SDK.removePatches(e);
    }
    removeHookByModule(e, n) {
      let i = this.initPatchableFunction(e);
      for (let o = i.hooks.length - 1; o >= 0; o--) i.hooks[o].module === n && (i.hooks[o].removeCallback(), i.hooks.splice(o, 1));
      return true;
    }
    removeAllHooksByModule(e) {
      for (let n of this.patchedFunctions.values()) for (let i = n.hooks.length - 1; i >= 0; i--) n.hooks[i].module === e && (n.hooks[i].removeCallback(), n.hooks.splice(i, 1));
      return true;
    }
    unload() {
      this.SDK.unload();
    }
  }, __name(_a13, "W"), r(_a13, "ModSdkManager"), _a13);
  var H = { injectInline(t, e) {
    if (document.getElementById(t)) return;
    let i = document.createElement("style");
    i.id = t, i.appendChild(document.createTextNode(e)), document.head.appendChild(i);
  }, injectEmbed(t, e) {
    if (document.getElementById(t)) return;
    let i = document.createElement("link");
    i.id = t, i.rel = "stylesheet", i.href = e, document.head.appendChild(i);
  }, eject(t) {
    let e = document.getElementById(t);
    e && e.remove();
  }, reload(t, e) {
    H.eject(t), H.injectInline(t, e);
  }, async fetch(t) {
    return fetch(t).then((e) => e.text()).catch((e) => (m.error("Failed to fetch stylesheet:", e), ""));
  } };
  var _a14;
  var Ie = (_a14 = class {
    constructor(e) {
      __publicField(this, "channelName");
      __publicField(this, "listeners", {});
      this.channelName = e;
      w.hookFunction("ChatRoomMessageProcessHidden", 0, (n, i) => {
        if (!this.isChannelMessage(n[0])) return i(n);
        let [o, s] = n, { type: l, data: c } = o.Dictionary[0], d = this.listeners[l];
        return d && d.forEach((a) => a(c, s)), i(n);
      }, `EventChannel-${e}`);
    }
    unload() {
      Object.keys(this.listeners).forEach((e) => delete this.listeners[e]), W.prototype.removeHookByModule("ChatRoomMessageProcessHidden", `EventChannel-${this.channelName}`);
    }
    sendEvent(e, n, i = null) {
      let o = { Type: "Hidden", Content: this.channelName, Sender: Player.MemberNumber, ...i ? { Target: i } : {}, Dictionary: [{ type: e, data: n }] };
      ServerSend("ChatRoomChat", o);
    }
    registerListener(e, n) {
      let i = this.listeners[e] ?? [];
      return i.push(n), this.listeners[e] = i, () => this.unregisterListener(e, n);
    }
    unregisterListener(e, n) {
      let i = this.listeners[e];
      if (i) {
        let o = i.indexOf(n);
        o !== -1 && i.splice(o, 1);
      }
    }
    isChannelMessage(e) {
      return e && e.Type === "Hidden" && e.Content === this.channelName && e.Sender && e.Sender !== Player.MemberNumber && e.Dictionary && !!e.Dictionary[0]?.data && !!e.Dictionary[0]?.type || false;
    }
  }, __name(_a14, "Ie"), r(_a14, "EventChannel"), _a14);

  // src/utilities/data.ts
  function settingsReset() {
    p.playerStorage = {};
    p.save();
  }
  __name(settingsReset, "settingsReset");
  var defaultLocalSettings = {
    loginOptions: {
      hideDummy: false,
      hideCredits: false
    }
  };
  var localSettings = null;
  function loadLocalSettings() {
    localSettings = p.getLocalStorage("LocalData");
    if (!localSettings) {
      p.setLocalStorage("LocalData", defaultLocalSettings);
      localSettings = defaultLocalSettings;
    } else {
      localSettings = f(defaultLocalSettings, localSettings);
    }
    return localSettings;
  }
  __name(loadLocalSettings, "loadLocalSettings");
  function getLocalSettings() {
    return localSettings;
  }
  __name(getLocalSettings, "getLocalSettings");
  function saveLocalSettings() {
    p.setLocalStorage("LocalData", localSettings);
  }
  __name(saveLocalSettings, "saveLocalSettings");

  // src/hooks/login_options.ts
  var ids = {
    optionsOpen: "tmd-login-options-open",
    optionsClose: "tmd-login-options-dialog-close",
    optionsSheet: "tmd-login-options-dialog",
    optionsContent: "tmd-login-options-dialog-content",
    optionsStyle: "tmd-login-options-style"
  };
  var options = {
    hideCredits: "Hide Credits",
    hideDummy: "Hide Dummy"
  };
  function loadLoginOptions() {
    patchLoginPage();
    H.injectEmbed(ids.optionsStyle, `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/login-options.css`);
    createUI();
    const loginRunHook = w.hookFunction("LoginRun", E.Observe, (args, next) => {
      next(args);
      ElementSetPosition(ids.optionsOpen, 2e3, 1e3, "bottom-right");
      ElementSetSize(ids.optionsOpen, 90, 90);
      ElementSetSize(ids.optionsSheet, 1e3, 500);
    });
    const loginExitHook = w.hookFunction("LoginUnload", E.Observe, (args, next) => {
      loginExitHook();
      loginRunHook();
      removeUI();
      H.eject(ids.optionsStyle);
      unpatchLoginPage();
      return next(args);
    });
  }
  __name(loadLoginOptions, "loadLoginOptions");
  function createUI() {
    const loginOptions = getLocalSettings().loginOptions;
    const optionsButton = ElementButton.Create(ids.optionsOpen, () => optionsSheet.showModal(), {
      tooltip: "[Themed] Login Options",
      image: "./Icons/Preference.png"
    });
    document.body.appendChild(optionsButton);
    const optionsSheet = ElementCreate({
      tag: "dialog",
      attributes: {
        id: ids.optionsSheet
      },
      children: [
        {
          tag: "div",
          attributes: {
            id: ids.optionsContent
          },
          children: [
            ...Array.from(Object.entries(options)).map(([key, value]) => {
              const typedKey = key;
              return {
                tag: "label",
                classList: ["tmd-login-options-label"],
                children: [
                  ElementCheckbox.Create(
                    `tmd-login-options-${key}`,
                    () => {
                      loginOptions[typedKey] = !loginOptions[typedKey];
                      saveLocalSettings();
                      repatchLoginPage();
                    },
                    {
                      checked: loginOptions[typedKey]
                    }
                  ),
                  value
                ]
              };
            })
          ]
        },
        ElementButton.Create(
          ids.optionsClose,
          () => optionsSheet.close(),
          {
            label: "Close"
          }
        )
      ],
      parent: document.body
    });
  }
  __name(createUI, "createUI");
  function removeUI() {
    document.getElementById(ids.optionsOpen)?.remove();
    document.getElementById(ids.optionsSheet)?.remove();
  }
  __name(removeUI, "removeUI");
  function patchLoginPage() {
    const loginOptions = getLocalSettings().loginOptions;
    if (loginOptions.hideDummy) {
      w.patchFunction("LoginRun", {
        "DrawCharacter(/** @type {NPCCharacter} */ (LoginCharacter), 1400, 100, 0.9);": ""
      });
      w.patchFunction("LoginDoNextThankYou", {
        "CharacterRelease(char, false);": "",
        "CharacterAppearanceFullRandom(char);": "",
        'if (InventoryGet(char, "ItemNeck") != null) InventoryRemove(char, "ItemNeck", false);': "",
        "CharacterFullRandomRestrain(char)": ""
      });
    }
    if (loginOptions.hideCredits) {
      w.patchFunction("LoginRun", {
        "if (LoginCredits) LoginDrawCredits();": "if (false) LoginDrawCredits();",
        'DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);': "",
        'DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");': ""
      });
      w.patchFunction("LoginDoNextThankYou", {
        "LoginThankYou = CommonRandomItemFromList(LoginThankYou, LoginThankYouList);": ""
      });
    }
  }
  __name(patchLoginPage, "patchLoginPage");
  function unpatchLoginPage() {
    w.unpatchFunction("LoginRun");
    w.unpatchFunction("LoginDoNextThankYou");
  }
  __name(unpatchLoginPage, "unpatchLoginPage");
  function repatchLoginPage() {
    unpatchLoginPage();
    patchLoginPage();
  }
  __name(repatchLoginPage, "repatchLoginPage");

  // src/migrators/v140_migrator.ts
  var _V140Migrator = class _V140Migrator extends pe {
    get migrationVersion() {
      return "1.4.0";
    }
    migrate() {
      const colorsData = C("ColorsModule").settings;
      const integrationsData = C("IntegrationModule").settings;
      if (colorsData) {
        if (colorsData["primaryColor"]) {
          colorsData.base.main = colorsData["primaryColor"];
          delete colorsData["primaryColor"];
        }
        if (colorsData["accentColor"]) {
          colorsData.base.accent = colorsData["accentColor"];
          delete colorsData["accentColor"];
        }
      }
      if (integrationsData) {
        if (integrationsData["BC"]) {
          integrationsData.inputs = integrationsData["BC"];
          delete integrationsData["BC"];
        }
        if (integrationsData["BC_Chat"]) {
          integrationsData.chat = integrationsData["BC_Chat"];
          delete integrationsData["BC_Chat"];
        }
        if (integrationsData["BC_FriendList"]) {
          integrationsData.friendList = integrationsData["BC_FriendList"];
          delete integrationsData["BC_FriendList"];
        }
        if (integrationsData["BC_Other"]) {
          integrationsData.scrollbar = integrationsData["BC_Other"];
          integrationsData.selection = integrationsData["BC_Other"];
          delete integrationsData["BC_Other"];
        }
        if (integrationsData["FBC"]) {
          integrationsData.WCE = integrationsData["FBC"];
          delete integrationsData["FBC"];
        }
      }
      return true;
    }
  };
  __name(_V140Migrator, "V140Migrator");
  var V140Migrator = _V140Migrator;

  // node_modules/.pnpm/color-name@2.1.0/node_modules/color-name/index.js
  var colors = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  for (const key in colors) Object.freeze(colors[key]);
  var color_name_default = Object.freeze(colors);

  // node_modules/.pnpm/color-string@2.1.4/node_modules/color-string/index.js
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (const name in color_name_default) {
    if (Object.hasOwn(color_name_default, name)) {
      reverseNames[color_name_default[name]] = name;
    }
  }
  var cs = {
    to: {},
    get: {}
  };
  cs.get = function(string) {
    const prefix = string.slice(0, 3).toLowerCase();
    let value;
    let model;
    switch (prefix) {
      case "hsl": {
        value = cs.get.hsl(string);
        model = "hsl";
        break;
      }
      case "hwb": {
        value = cs.get.hwb(string);
        model = "hwb";
        break;
      }
      default: {
        value = cs.get.rgb(string);
        model = "rgb";
        break;
      }
    }
    if (!value) {
      return null;
    }
    return { model, value };
  };
  cs.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    const abbr = /^#([a-f\d]{3,4})$/i;
    const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
    const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
    const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
    const keyword = /^(\w+)$/;
    let rgb = [0, 0, 0, 1];
    let match;
    let i;
    let hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        const i2 = i * 2;
        rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = Number.parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Number.parseFloat(match[i + 1]);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.toLowerCase().match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!Object.hasOwn(color_name_default, match[1])) {
        return null;
      }
      rgb = color_name_default[match[1]].slice();
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string) {
    if (!string) {
      return null;
    }
    const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
    const match = string.match(hsl);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const s = clamp(Number.parseFloat(match[2]), 0, 100);
      const l = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i;
    const match = string.match(hwb);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const w2 = clamp(Number.parseFloat(match[2]), 0, 100);
      const b2 = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w2, b2, a];
    }
    return null;
  };
  cs.to.hex = function(...rgba) {
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function(...rgba) {
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function(...rgba) {
    const r2 = Math.round(rgba[0] / 255 * 100);
    const g2 = Math.round(rgba[1] / 255 * 100);
    const b2 = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r2 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function(...hsla) {
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function(...hwba) {
    let a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(...rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(number_, min, max) {
    return Math.min(Math.max(min, number_), max);
  }
  __name(clamp, "clamp");
  function hexDouble(number_) {
    const string_ = Math.round(number_).toString(16).toUpperCase();
    return string_.length < 2 ? "0" + string_ : string_;
  }
  __name(hexDouble, "hexDouble");
  var color_string_default = cs;

  // node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/conversions.js
  var reverseKeywords = {};
  for (const key of Object.keys(color_name_default)) {
    reverseKeywords[color_name_default[key]] = key;
  }
  var convert = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
    lch: { channels: 3, labels: "lch" },
    oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  var conversions_default = convert;
  var LAB_FT = (6 / 29) ** 3;
  function srgbNonlinearTransform(c) {
    const cc = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92;
    return Math.min(Math.max(0, cc), 1);
  }
  __name(srgbNonlinearTransform, "srgbNonlinearTransform");
  function srgbNonlinearTransformInv(c) {
    return c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;
  }
  __name(srgbNonlinearTransformInv, "srgbNonlinearTransformInv");
  for (const model of Object.keys(convert)) {
    if (!("channels" in convert[model])) {
      throw new Error("missing channels property: " + model);
    }
    if (!("labels" in convert[model])) {
      throw new Error("missing channel labels property: " + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error("channel and label counts mismatch: " + model);
    }
    const { channels, labels } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], "channels", { value: channels });
    Object.defineProperty(convert[model], "labels", { value: labels });
  }
  convert.rgb.hsl = function(rgb) {
    const r2 = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const min = Math.min(r2, g2, b2);
    const max = Math.max(r2, g2, b2);
    const delta = max - min;
    let h;
    let s;
    switch (max) {
      case min: {
        h = 0;
        break;
      }
      case r2: {
        h = (g2 - b2) / delta;
        break;
      }
      case g2: {
        h = 2 + (b2 - r2) / delta;
        break;
      }
      case b2: {
        h = 4 + (r2 - g2) / delta;
        break;
      }
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r2 = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const v = Math.max(r2, g2, b2);
    const diff = v - Math.min(r2, g2, b2);
    const diffc = /* @__PURE__ */ __name(function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    }, "diffc");
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r2);
      gdif = diffc(g2);
      bdif = diffc(b2);
      switch (v) {
        case r2: {
          h = bdif - gdif;
          break;
        }
        case g2: {
          h = 1 / 3 + rdif - bdif;
          break;
        }
        case b2: {
          h = 2 / 3 + gdif - rdif;
          break;
        }
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [
      h * 360,
      s * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r2 = rgb[0];
    const g2 = rgb[1];
    let b2 = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w2 = 1 / 255 * Math.min(r2, Math.min(g2, b2));
    b2 = 1 - 1 / 255 * Math.max(r2, Math.max(g2, b2));
    return [h, w2 * 100, b2 * 100];
  };
  convert.rgb.oklab = function(rgb) {
    const r2 = srgbNonlinearTransformInv(rgb[0] / 255);
    const g2 = srgbNonlinearTransformInv(rgb[1] / 255);
    const b2 = srgbNonlinearTransformInv(rgb[2] / 255);
    const lp = Math.cbrt(0.4122214708 * r2 + 0.5363325363 * g2 + 0.0514459929 * b2);
    const mp = Math.cbrt(0.2119034982 * r2 + 0.6806995451 * g2 + 0.1073969566 * b2);
    const sp = Math.cbrt(0.0883024619 * r2 + 0.2817188376 * g2 + 0.6299787005 * b2);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, aa * 100, bb * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r2 = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const k2 = Math.min(1 - r2, 1 - g2, 1 - b2);
    const c = (1 - r2 - k2) / (1 - k2) || 0;
    const m2 = (1 - g2 - k2) / (1 - k2) || 0;
    const y = (1 - b2 - k2) / (1 - k2) || 0;
    return [c * 100, m2 * 100, y * 100, k2 * 100];
  };
  function comparativeDistance(x2, y) {
    return (x2[0] - y[0]) ** 2 + (x2[1] - y[1]) ** 2 + (x2[2] - y[2]) ** 2;
  }
  __name(comparativeDistance, "comparativeDistance");
  convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Number.POSITIVE_INFINITY;
    let currentClosestKeyword;
    for (const keyword of Object.keys(color_name_default)) {
      const value = color_name_default[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return [...color_name_default[keyword]];
  };
  convert.rgb.xyz = function(rgb) {
    const r2 = srgbNonlinearTransformInv(rgb[0] / 255);
    const g2 = srgbNonlinearTransformInv(rgb[1] / 255);
    const b2 = srgbNonlinearTransformInv(rgb[2] / 255);
    const x2 = r2 * 0.4124564 + g2 * 0.3575761 + b2 * 0.1804375;
    const y = r2 * 0.2126729 + g2 * 0.7151522 + b2 * 0.072175;
    const z2 = r2 * 0.0193339 + g2 * 0.119192 + b2 * 0.9503041;
    return [x2 * 100, y * 100, z2 * 100];
  };
  convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x2 = xyz[0];
    let y = xyz[1];
    let z2 = xyz[2];
    x2 /= 95.047;
    y /= 100;
    z2 /= 108.883;
    x2 = x2 > LAB_FT ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z2 = z2 > LAB_FT ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x2 - y);
    const b2 = 200 * (y - z2);
    return [l, a, b2];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t3;
    let value;
    if (s === 0) {
      value = l * 255;
      return [value, value, value];
    }
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        value = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        value = t2;
      } else if (3 * t3 < 2) {
        value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        value = t1;
      }
      rgb[i] = value * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f2 = h - Math.floor(h);
    const p2 = 255 * v * (1 - s);
    const q2 = 255 * v * (1 - s * f2);
    const t = 255 * v * (1 - s * (1 - f2));
    v *= 255;
    switch (hi) {
      case 0: {
        return [v, t, p2];
      }
      case 1: {
        return [q2, v, p2];
      }
      case 2: {
        return [p2, v, t];
      }
      case 3: {
        return [p2, q2, v];
      }
      case 4: {
        return [t, p2, v];
      }
      case 5: {
        return [v, p2, q2];
      }
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f2;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f2 = 6 * h - i;
    if ((i & 1) !== 0) {
      f2 = 1 - f2;
    }
    const n = wh + f2 * (v - wh);
    let r2;
    let g2;
    let b2;
    switch (i) {
      default:
      case 6:
      case 0: {
        r2 = v;
        g2 = n;
        b2 = wh;
        break;
      }
      case 1: {
        r2 = n;
        g2 = v;
        b2 = wh;
        break;
      }
      case 2: {
        r2 = wh;
        g2 = v;
        b2 = n;
        break;
      }
      case 3: {
        r2 = wh;
        g2 = n;
        b2 = v;
        break;
      }
      case 4: {
        r2 = n;
        g2 = wh;
        b2 = v;
        break;
      }
      case 5: {
        r2 = v;
        g2 = wh;
        b2 = n;
        break;
      }
    }
    return [r2 * 255, g2 * 255, b2 * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m2 = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k2 = cmyk[3] / 100;
    const r2 = 1 - Math.min(1, c * (1 - k2) + k2);
    const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
    const b2 = 1 - Math.min(1, y * (1 - k2) + k2);
    return [r2 * 255, g2 * 255, b2 * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x2 = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z2 = xyz[2] / 100;
    let r2;
    let g2;
    let b2;
    r2 = x2 * 3.2404542 + y * -1.5371385 + z2 * -0.4985314;
    g2 = x2 * -0.969266 + y * 1.8760108 + z2 * 0.041556;
    b2 = x2 * 0.0556434 + y * -0.2040259 + z2 * 1.0572252;
    r2 = srgbNonlinearTransform(r2);
    g2 = srgbNonlinearTransform(g2);
    b2 = srgbNonlinearTransform(b2);
    return [r2 * 255, g2 * 255, b2 * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x2 = xyz[0];
    let y = xyz[1];
    let z2 = xyz[2];
    x2 /= 95.047;
    y /= 100;
    z2 /= 108.883;
    x2 = x2 > LAB_FT ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z2 = z2 > LAB_FT ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x2 - y);
    const b2 = 200 * (y - z2);
    return [l, a, b2];
  };
  convert.xyz.oklab = function(xyz) {
    const x2 = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z2 = xyz[2] / 100;
    const lp = Math.cbrt(0.8189330101 * x2 + 0.3618667424 * y - 0.1288597137 * z2);
    const mp = Math.cbrt(0.0329845436 * x2 + 0.9293118715 * y + 0.0361456387 * z2);
    const sp = Math.cbrt(0.0482003018 * x2 + 0.2643662691 * y + 0.633851707 * z2);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const b2 = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, a * 100, b2 * 100];
  };
  convert.oklab.oklch = function(oklab) {
    return convert.lab.lch(oklab);
  };
  convert.oklab.xyz = function(oklab) {
    const ll = oklab[0] / 100;
    const a = oklab[1] / 100;
    const b2 = oklab[2] / 100;
    const l = (0.999999998 * ll + 0.396337792 * a + 0.215803758 * b2) ** 3;
    const m2 = (1.000000008 * ll - 0.105561342 * a - 0.063854175 * b2) ** 3;
    const s = (1.000000055 * ll - 0.089484182 * a - 1.291485538 * b2) ** 3;
    const x2 = 1.227013851 * l - 0.55779998 * m2 + 0.281256149 * s;
    const y = -0.040580178 * l + 1.11225687 * m2 - 0.071676679 * s;
    const z2 = -0.076381285 * l - 0.421481978 * m2 + 1.58616322 * s;
    return [x2 * 100, y * 100, z2 * 100];
  };
  convert.oklab.rgb = function(oklab) {
    const ll = oklab[0] / 100;
    const aa = oklab[1] / 100;
    const bb = oklab[2] / 100;
    const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
    const m2 = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
    const s = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
    const r2 = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m2 + 0.2309699292 * s);
    const g2 = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m2 - 0.3413193965 * s);
    const b2 = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m2 + 1.707614701 * s);
    return [r2 * 255, g2 * 255, b2 * 255];
  };
  convert.oklch.oklab = function(oklch) {
    return convert.lch.lab(oklch);
  };
  convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b2 = lab[2];
    let x2;
    let y;
    let z2;
    y = (l + 16) / 116;
    x2 = a / 500 + y;
    z2 = y - b2 / 200;
    const y2 = y ** 3;
    const x22 = x2 ** 3;
    const z22 = z2 ** 3;
    y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
    x2 = x22 > LAB_FT ? x22 : (x2 - 16 / 116) / 7.787;
    z2 = z22 > LAB_FT ? z22 : (z2 - 16 / 116) / 7.787;
    x2 *= 95.047;
    y *= 100;
    z2 *= 108.883;
    return [x2, y, z2];
  };
  convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b2 = lab[2];
    let h;
    const hr = Math.atan2(b2, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b2 * b2);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b2 = c * Math.sin(hr);
    return [l, a, b2];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r2, g2, b2] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r2 / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r2 = args[0];
    const g2 = args[1];
    const b2 = args[2];
    if (r2 >> 4 === g2 >> 4 && g2 >> 4 === b2 >> 4) {
      if (r2 < 8) {
        return 16;
      }
      if (r2 > 248) {
        return 231;
      }
      return Math.round((r2 - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r2 / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    args = args[0];
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (Math.trunc(args > 50) + 1) * 0.5;
    const r2 = (color & 1) * mult * 255;
    const g2 = (color >> 1 & 1) * mult * 255;
    const b2 = (color >> 2 & 1) * mult * 255;
    return [r2, g2, b2];
  };
  convert.ansi256.rgb = function(args) {
    args = args[0];
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r2 = Math.floor(args / 36) / 5 * 255;
    const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b2 = rem % 6 / 5 * 255;
    return [r2, g2, b2];
  };
  convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    const string = integer.toString(16).toUpperCase();
    return "000000".slice(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = [...colorString].map((char) => char + char).join("");
    }
    const integer = Number.parseInt(colorString, 16);
    const r2 = integer >> 16 & 255;
    const g2 = integer >> 8 & 255;
    const b2 = integer & 255;
    return [r2, g2, b2];
  };
  convert.rgb.hcg = function(rgb) {
    const r2 = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const max = Math.max(Math.max(r2, g2), b2);
    const min = Math.min(Math.min(r2, g2), b2);
    const chroma = max - min;
    let hue;
    const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r2) {
      hue = (g2 - b2) / chroma % 6;
    } else if (max === g2) {
      hue = 2 + (b2 - r2) / chroma;
    } else {
      hue = 4 + (r2 - g2) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
    let f2 = 0;
    if (c < 1) {
      f2 = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f2 * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f2 = 0;
    if (c < 1) {
      f2 = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f2 * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    if (c === 0) {
      return [g2 * 255, g2 * 255, g2 * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w2 = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0: {
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      }
      case 1: {
        pure[0] = w2;
        pure[1] = 1;
        pure[2] = 0;
        break;
      }
      case 2: {
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      }
      case 3: {
        pure[0] = 0;
        pure[1] = w2;
        pure[2] = 1;
        break;
      }
      case 4: {
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      }
      default: {
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w2;
      }
    }
    mg = (1 - c) * g2;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const v = c + g2 * (1 - c);
    let f2 = 0;
    if (v > 0) {
      f2 = c / v;
    }
    return [hcg[0], f2 * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const l = g2 * (1 - c) + 0.5 * c;
    let s = 0;
    if (l > 0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const v = c + g2 * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w2 = hwb[1] / 100;
    const b2 = hwb[2] / 100;
    const v = 1 - b2;
    const c = v - w2;
    let g2 = 0;
    if (c < 1) {
      g2 = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g2 * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hsv = convert.gray.hsl;
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    const value = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (value << 16) + (value << 8) + value;
    const string = integer.toString(16).toUpperCase();
    return "000000".slice(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [value / 255 * 100];
  };

  // node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/route.js
  function buildGraph() {
    const graph = {};
    const models2 = Object.keys(conversions_default);
    for (let { length } = models2, i = 0; i < length; i++) {
      graph[models2[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  __name(buildGraph, "buildGraph");
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length > 0) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions_default[current]);
      for (let { length } = adjacents, i = 0; i < length; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  __name(deriveBFS, "deriveBFS");
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  __name(link, "link");
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions_default[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions_default[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  __name(wrapConversion, "wrapConversion");
  function route(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models2 = Object.keys(graph);
    for (let { length } = models2, i = 0; i < length; i++) {
      const toModel = models2[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  }
  __name(route, "route");
  var route_default = route;

  // node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/index.js
  var convert2 = {};
  var models = Object.keys(conversions_default);
  function wrapRaw(fn) {
    const wrappedFn = /* @__PURE__ */ __name(function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    }, "wrappedFn");
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  __name(wrapRaw, "wrapRaw");
  function wrapRounded(fn) {
    const wrappedFn = /* @__PURE__ */ __name(function(...args) {
      const arg0 = args[0];
      if (arg0 === void 0 || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === "object") {
        for (let { length } = result, i = 0; i < length; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    }, "wrappedFn");
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  __name(wrapRounded, "wrapRounded");
  for (const fromModel of models) {
    convert2[fromModel] = {};
    Object.defineProperty(convert2[fromModel], "channels", { value: conversions_default[fromModel].channels });
    Object.defineProperty(convert2[fromModel], "labels", { value: conversions_default[fromModel].labels });
    const routes = route_default(fromModel);
    const routeModels = Object.keys(routes);
    for (const toModel of routeModels) {
      const fn = routes[toModel];
      convert2[fromModel][toModel] = wrapRounded(fn);
      convert2[fromModel][toModel].raw = wrapRaw(fn);
    }
  }
  var color_convert_default = convert2;

  // node_modules/.pnpm/color@5.0.3/node_modules/color/index.js
  var skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // Gray conflicts with some method names, and has its own method defined.
    "gray",
    // Shouldn't really be in color-convert either...
    "hex"
  ];
  var hashedModelKeys = {};
  for (const model of Object.keys(color_convert_default)) {
    hashedModelKeys[[...color_convert_default[model].labels].sort().join("")] = model;
  }
  var limiters = {};
  function Color(object, model) {
    if (!(this instanceof Color)) {
      return new Color(object, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in color_convert_default)) {
      throw new Error("Unknown model: " + model);
    }
    let i;
    let channels;
    if (object == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object instanceof Color) {
      this.model = object.model;
      this.color = [...object.color];
      this.valpha = object.valpha;
    } else if (typeof object === "string") {
      const result = color_string_default.get(object);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + object);
      }
      this.model = result.model;
      channels = color_convert_default[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object.length > 0) {
      this.model = model || "rgb";
      channels = color_convert_default[this.model].channels;
      const newArray = Array.prototype.slice.call(object, 0, channels);
      this.color = zeroArray(newArray, channels);
      this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
    } else if (typeof object === "number") {
      this.model = "rgb";
      this.color = [
        object >> 16 & 255,
        object >> 8 & 255,
        object & 255
      ];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      const keys = Object.keys(object);
      if ("alpha" in object) {
        keys.splice(keys.indexOf("alpha"), 1);
        this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
      }
      const hashedKeys = keys.sort().join("");
      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error("Unable to parse color from object: " + JSON.stringify(object));
      }
      this.model = hashedModelKeys[hashedKeys];
      const { labels } = color_convert_default[this.model];
      const color = [];
      for (i = 0; i < labels.length; i++) {
        color.push(object[labels[i]]);
      }
      this.color = zeroArray(color);
    }
    if (limiters[this.model]) {
      channels = color_convert_default[this.model].channels;
      for (i = 0; i < channels; i++) {
        const limit = limiters[this.model][i];
        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  __name(Color, "Color");
  Color.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(places) {
      let self = this.model in color_string_default.to ? this : this.rgb();
      self = self.round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to[self.model](...arguments_);
    },
    percentString(places) {
      const self = this.rgb().round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to.rgb.percent(...arguments_);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const result = {};
      const { channels } = color_convert_default[this.model];
      const { labels } = color_convert_default[this.model];
      for (let i = 0; i < channels; i++) {
        result[labels[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }
      return result;
    },
    unitArray() {
      const rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;
      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }
      return rgb;
    },
    unitObject() {
      const rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;
      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }
      return rgb;
    },
    round(places) {
      places = Math.max(places || 0, 0);
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },
    alpha(value) {
      if (value !== void 0) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
      }
      return this.valpha;
    },
    // Rgb
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(95.047)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(108.833)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return color_convert_default[this.model].keyword(this.color);
    },
    hex(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return color_string_default.to.hex(...this.rgb().round().color);
    },
    hexa(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (alphaHex.length === 1) {
        alphaHex = "0" + alphaHex;
      }
      return color_string_default.to.hex(...rgbArray) + alphaHex;
    },
    rgbNumber() {
      const rgb = this.rgb().color;
      return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
    },
    luminosity() {
      const rgb = this.rgb().color;
      const lum = [];
      for (const [i, element] of rgb.entries()) {
        const chan = element / 255;
        lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast(color2) {
      const lum1 = this.luminosity();
      const lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level(color2) {
      const contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7) {
        return "AAA";
      }
      return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark() {
      const rgb = this.rgb().color;
      const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
      return yiq < 128;
    },
    isLight() {
      return !this.isDark();
    },
    negate() {
      const rgb = this.rgb();
      for (let i = 0; i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }
      return rgb;
    },
    lighten(ratio) {
      const hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },
    darken(ratio) {
      const hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },
    saturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },
    desaturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },
    whiten(ratio) {
      const hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },
    blacken(ratio) {
      const hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },
    grayscale() {
      const rgb = this.rgb().color;
      const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(value, value, value);
    },
    fade(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate(degrees) {
      const hsl = this.hsl();
      let hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },
    mix(mixinColor, weight) {
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }
      const color1 = mixinColor.rgb();
      const color2 = this.rgb();
      const p2 = weight === void 0 ? 0.5 : weight;
      const w2 = 2 * p2 - 1;
      const a = color1.alpha() - color2.alpha();
      const w1 = ((w2 * a === -1 ? w2 : (w2 + a) / (1 + w2 * a)) + 1) / 2;
      const w22 = 1 - w1;
      return Color.rgb(
        w1 * color1.red() + w22 * color2.red(),
        w1 * color1.green() + w22 * color2.green(),
        w1 * color1.blue() + w22 * color2.blue(),
        color1.alpha() * p2 + color2.alpha() * (1 - p2)
      );
    }
  };
  for (const model of Object.keys(color_convert_default)) {
    if (skippedModels.includes(model)) {
      continue;
    }
    const { channels } = color_convert_default[model];
    Color.prototype[model] = function(...arguments_) {
      if (this.model === model) {
        return new Color(this);
      }
      if (arguments_.length > 0) {
        return new Color(arguments_, model);
      }
      return new Color([...assertArray(color_convert_default[this.model][model].raw(this.color)), this.valpha], model);
    };
    Color[model] = function(...arguments_) {
      let color = arguments_[0];
      if (typeof color === "number") {
        color = zeroArray(arguments_, channels);
      }
      return new Color(color, model);
    };
  }
  function roundTo(number, places) {
    return Number(number.toFixed(places));
  }
  __name(roundTo, "roundTo");
  function roundToPlace(places) {
    return function(number) {
      return roundTo(number, places);
    };
  }
  __name(roundToPlace, "roundToPlace");
  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    for (const m2 of model) {
      (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
      let result;
      if (value !== void 0) {
        if (modifier) {
          value = modifier(value);
        }
        result = this[model]();
        result.color[channel] = value;
        return result;
      }
      result = this[model]().color[channel];
      if (modifier) {
        result = modifier(result);
      }
      return result;
    };
  }
  __name(getset, "getset");
  function maxfn(max) {
    return function(v) {
      return Math.max(0, Math.min(max, v));
    };
  }
  __name(maxfn, "maxfn");
  function assertArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  __name(assertArray, "assertArray");
  function zeroArray(array, length) {
    for (let i = 0; i < length; i++) {
      if (typeof array[i] !== "number") {
        array[i] = 0;
      }
    }
    return array;
  }
  __name(zeroArray, "zeroArray");
  var color_default = Color;

  // src/utilities/color.ts
  var plainColors = {
    main: "",
    element: "",
    elementHover: "",
    elementDisabled: "",
    elementHint: "",
    text: "",
    textDisabled: "",
    textShadow: "",
    accent: "",
    accentHover: "",
    accentDisabled: ""
  };
  var specialColors = {
    invalid: ["", ""],
    equipped: ["", ""],
    crafted: ["", ""],
    blocked: ["", ""],
    limited: ["", ""],
    allowed: ["", ""],
    roomFriend: ["", ""],
    roomBlocked: ["", ""],
    roomGame: ["", ""]
  };
  var _Color = {
    getComputed: CommonMemoize((color) => {
      const div = document.createElement("div");
      div.style.color = color;
      document.body.appendChild(div);
      const computedColor = getComputedStyle(div).color;
      div.remove();
      return computedColor;
    }),
    getHexComputed: CommonMemoize((color) => {
      return color_default(_Color.getComputed(color)).hex();
    }),
    isValidHex(color) {
      return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
    },
    composeRoot() {
      const colorSettings = C("ColorsModule").settings;
      const globalSettings = C("GlobalModule").settings;
      Object.keys(colorSettings.special).forEach((key) => {
        const typedKey = key;
        const clr = color_default(colorSettings.special[typedKey]);
        specialColors[typedKey] = [clr.hex(), clr.lighten(0.2).hex()];
      });
      if (globalSettings.doUseAdvancedColoring) {
        Object.keys(colorSettings.base).forEach((key) => {
          const typedKey = key;
          plainColors[typedKey] = colorSettings.base[typedKey];
        });
      } else {
        const primaryColor2 = _Color.getHexComputed(colorSettings.base.main);
        const elementColor2 = color_default(primaryColor2).lighten(0.2).hex();
        const accentColor2 = _Color.getHexComputed(colorSettings.base.accent);
        const textColor2 = _Color.getHexComputed(colorSettings.base.text);
        plainColors.main = primaryColor2;
        plainColors.element = elementColor2;
        plainColors.elementHover = color_default(elementColor2).lighten(0.2).hex();
        plainColors.elementDisabled = color_default(elementColor2).darken(0.2).hex();
        plainColors.elementHint = color_default(elementColor2).lighten(0.2).hex();
        plainColors.text = textColor2;
        plainColors.textDisabled = color_default(textColor2).darken(0.2).hex();
        plainColors.textShadow = color_default(textColor2).darken(0.2).hex();
        plainColors.accent = accentColor2;
        plainColors.accentHover = color_default(accentColor2).lighten(0.2).hex();
        plainColors.accentDisabled = color_default(accentColor2).darken(0.2).hex();
      }
    }
  };

  // src/screens/colors.ts
  var _GuiColors = class _GuiColors extends I {
    constructor() {
      super(C("ColorsModule"));
      __publicField(this, "settingsBackup", {});
      __publicField(this, "colorPickerInput", false);
      _GuiColors.instance = this;
    }
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const settings = this.settings;
      const defaultSettings = C("ColorsModule").defaultSettings;
      const isBaseMode = !p.playerStorage.GlobalModule.doUseAdvancedColoring;
      const baseModeKey = /* @__PURE__ */ __name((key) => ["main", "accent", "text"].includes(key), "baseModeKey");
      const ret = [[], []];
      const themeDropdownOptions = ["dark", "light"].map((e) => ({
        attributes: {
          value: e,
          label: g("colors.setting.theme-type-" + e),
          selected: e === this.settings.themeSettings.themeType
        }
      }));
      const themeType = {
        id: "tmd-theme-type",
        type: "dropdown",
        optionsList: themeDropdownOptions,
        label: g("colors.setting.theme-type.name"),
        description: g("colors.setting.theme-type.desc"),
        setSettingValue(val) {
          settings.themeSettings.themeType = val;
          ColorsModule.reloadTheme();
        }
      };
      ret[0].push(themeType);
      ret[0].push(...Object.entries(this.settings.base).map(([key, value]) => {
        const typedKey = key;
        return {
          id: key,
          type: "color",
          label: g(`colors.setting.${key}.name`),
          description: g(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setSettingValue"),
          disabled: isBaseMode && !baseModeKey(typedKey),
          htmlOptions: {
            input: {
              eventListeners: {
                click: /* @__PURE__ */ __name(function(ev) {
                  if (this.type !== "color") return;
                  ev.preventDefault();
                  _GuiColors.instance.colorPickerToggle(this, g(`colors.setting.${key}.name`));
                }, "click")
              }
            }
          }
        };
      }).sort((a, b2) => (a.disabled ? 1 : 0) - (b2.disabled ? 1 : 0)));
      ret[1].push(...Object.entries(this.settings.special).map(([key, value]) => {
        const typedKey = key;
        return {
          id: key,
          type: "color",
          label: g(`colors.setting.${key}.name`),
          description: g(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setSettingValue"),
          htmlOptions: {
            input: {
              eventListeners: {
                click: /* @__PURE__ */ __name(function(ev) {
                  if (this.type !== "color") return;
                  ev.preventDefault();
                  _GuiColors.instance.colorPickerToggle(this, g(`colors.setting.${key}.name`));
                }, "click")
              }
            }
          }
        };
      }));
      return ret;
    }
    load() {
      super.load();
      const typeToggleButton = u.createButton({
        id: "tmd-inputs-type-toggle",
        onClick: /* @__PURE__ */ __name(() => {
          this.pageStructure.forEach((page) => {
            page.forEach((elm) => {
              if (elm.type == "color" || elm.type == "text") {
                const e = ElementWrap(elm?.id ?? "");
                if (!e) return;
                const elementType = e.getAttribute("type");
                if (elementType == "color") {
                  e.setAttribute("type", "text");
                } else {
                  e.setAttribute("type", "color");
                }
              }
            });
          });
          this.resize();
        }, "onClick"),
        size: [90, 90],
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/refresh.svg`,
          tooltip: g("colors.button.change_input_type")
        }
      });
      const menu = document.getElementById("deeplib-nav-menu");
      if (menu) {
        menu.prepend(typeToggleButton);
      }
      this.settingsBackup = CommonCloneDeep(this.settings);
      const settings = C("ColorsModule").settings;
      Object.entries(this.settings.base).forEach(([key]) => {
        document.getElementById(key)?.addEventListener("input", function() {
          if (!_Color.isValidHex(this.value)) {
            this.setCustomValidity("Invalid hex color");
          } else {
            this.setCustomValidity("");
            const typedKey = key;
            settings.base[typedKey] = this.value;
          }
          ColorsModule.reloadTheme();
        });
      });
      Object.entries(this.settings.special).forEach(([key]) => {
        document.getElementById(key)?.addEventListener("input", function() {
          if (!_Color.isValidHex(this.value)) {
            this.setCustomValidity("Invalid hex color");
          } else {
            this.setCustomValidity("");
            const typedKey = key;
            settings.special[typedKey] = this.value;
          }
          ColorsModule.reloadTheme();
        });
      });
    }
    exit() {
      if (this.colorPickerInput) {
        ColorPickerExit(true);
        document.getElementById("tmd-colors-color-picker-backdrop")?.remove();
        this.colorPickerInput = false;
        return;
      }
      const settings = C("ColorsModule").settings;
      Object.entries(this.settings.base).forEach(([key]) => {
        const input = document.getElementById(key);
        if (!input) return;
        if (!_Color.isValidHex(input.value)) {
          const typedKey = key;
          settings.base[typedKey] = this.settingsBackup.base[typedKey];
        }
      });
      Object.entries(this.settings.special).forEach(([key]) => {
        const input = document.getElementById(key);
        if (!input) return;
        if (!_Color.isValidHex(input.value)) {
          const typedKey = key;
          settings.special[typedKey] = this.settingsBackup.special[typedKey];
        }
      });
      super.exit();
    }
    unload() {
      ColorPickerExit(true);
      super.unload();
    }
    resize() {
      super.resize();
      ColorPickerResize(false);
    }
    colorPickerToggle(input, title) {
      if (!this.colorPickerInput) {
        const paddingTop = 75;
        const paddingRight = 2e3 - (1815 + 90);
        const shape = [
          2e3 - ColorPicker.defaultShape[2] - paddingRight + 25,
          paddingTop,
          ColorPicker.defaultShape[2],
          1e3 - paddingTop * 2
        ];
        const color = CommonIsColor(input.value) ? input.value : "#ffffff";
        ColorPickerInit({
          colorState: {
            colors: [color],
            defaultColors: ["#ffffff"],
            opacity: [1],
            editOpacity: false
          },
          heading: title,
          shape,
          onInput: /* @__PURE__ */ __name(() => null, "onInput"),
          onExit: /* @__PURE__ */ __name(({ colors: colors2 }, save) => {
            if (save) {
              ElementValue(input.id, colors2[0]);
            }
            this.colorPickerInput = false;
            document.getElementById("tmd-colors-color-picker-backdrop")?.toggleAttribute("hidden", true);
          }, "onExit")
        }).then((colorPicker) => {
          let backdrop = document.getElementById("tmd-colors-color-picker-backdrop");
          if (!backdrop) {
            ElementCreate({
              tag: "div",
              attributes: { id: "tmd-colors-color-picker-backdrop" },
              children: [colorPicker],
              parent: document.body,
              style: { "background-color": "rgba(0, 0, 0, 0.3)", width: "100%", height: "100%", position: "absolute" }
            });
          } else {
            backdrop.toggleAttribute("hidden", false);
          }
        });
      } else {
        ColorPickerHide();
        document.getElementById("tmd-colors-color-picker-backdrop")?.toggleAttribute("hidden", true);
      }
      this.colorPickerInput = !this.colorPickerInput;
    }
  };
  __name(_GuiColors, "GuiColors");
  __publicField(_GuiColors, "instance");
  __publicField(_GuiColors, "subscreenOptions", {
    name: "colors",
    icon: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/palette.svg`
  });
  var GuiColors = _GuiColors;

  // src/utilities/mod_definition.ts
  var ModuleCategory = {
    Global: "Global",
    Colors: "Colors",
    Profiles: "Profiles",
    Integration: "Integration",
    GuiRedraw: "GuiRedraw"
  };

  // src/hooks/gui_redraw/appearance_get_preview_image_color.ts
  function hookAppearanceGetPreviewImageColor() {
    w.hookFunction("AppearanceGetPreviewImageColor", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [c, item, hover] = args;
      if (DialogMenuMode === "permissions" && c.IsPlayer()) {
        let permission = "allowed";
        if (InventoryIsPermissionBlocked(c, item.Asset.Name, item.Asset.Group.Name)) permission = "blocked";
        else if (InventoryIsPermissionLimited(c, item.Asset.Name, item.Asset.Group.Name)) permission = "limited";
        return item.Worn ? specialColors.equipped[hover ? 1 : 0] : specialColors[permission][hover ? 1 : 0];
      } else {
        const unusable = item.SortOrder.startsWith(DialogSortOrder.Unusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.TargetFavoriteUnusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.PlayerFavoriteUnusable.toString());
        const blocked = item.SortOrder.startsWith(DialogSortOrder.Blocked.toString());
        const limited = item.Icons.includes("AllowedLimited");
        if (blocked) return specialColors.blocked[hover ? 1 : 0];
        else if (item.Worn) return specialColors.equipped[hover ? 1 : 0];
        else if (item.Craft != null && item.Craft.Name != null) return specialColors.crafted[hover ? 1 : 0];
        else if (unusable) return plainColors.elementDisabled;
        else if (limited) return specialColors.limited[hover ? 1 : 0];
        else return hover ? plainColors.elementHover : plainColors.element;
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookAppearanceGetPreviewImageColor, "hookAppearanceGetPreviewImageColor");

  // src/hooks/gui_redraw/dialog_get_menu_button_color.ts
  function hookDialogGetMenuButtonColor() {
    w.hookFunction("DialogGetMenuButtonColor", 0, (args, next) => {
      if (!doRedraw()) return next(args);
      const [buttonName] = args;
      if (DialogIsMenuButtonDisabled(buttonName)) {
        return "%disabled";
      } else if (buttonName === "ColorDefault") {
        return DialogColorSelect || "%background";
      } else {
        return "%background";
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDialogGetMenuButtonColor, "hookDialogGetMenuButtonColor");

  // src/hooks/gui_redraw/draw_back_next_button.ts
  function hookDrawBackNextButton() {
    w.hookFunction("DrawBackNextButton", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [Left, Top, Width, Height, Label, Color2, Image, , , Disabled] = args;
      let [, , , , , , , BackText, NextText, , ArrowWidth] = args;
      if (ArrowWidth == null || ArrowWidth > Width / 2) ArrowWidth = Width / 2;
      const LeftSplit = Left + ArrowWidth;
      const RightSplit = Left + Width - ArrowWidth;
      ControllerAddActiveArea(Left, Top);
      ControllerAddActiveArea(Left + Width - ArrowWidth, Top);
      MainCanvas.save();
      MainCanvas.textAlign = "center";
      MainCanvas.beginPath();
      MainCanvas.rect(Left, Top, Width, Height);
      MainCanvas.fillStyle = plainColors.element;
      MainCanvas.fillRect(Left, Top, Width, Height);
      if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
        MainCanvas.fillStyle = plainColors.elementHover;
        if (MouseX > RightSplit) {
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        } else if (MouseX <= LeftSplit) {
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
        } else {
          MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
        }
      } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
        MainCanvas.fillStyle = plainColors.elementDisabled;
        MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
        MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
      }
      MainCanvas.lineWidth = 2;
      MainCanvas.strokeStyle = plainColors.accent;
      MainCanvas.stroke();
      MainCanvas.closePath();
      DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color2);
      DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, "Black");
      if (Image != null && Image != "") {
        DrawImage(Image, Left + 2, Top + 2);
      }
      ControllerAddActiveArea(Left + Width / 2, Top);
      MainCanvas.beginPath();
      MainCanvas.fillStyle = "Black";
      MainCanvas.moveTo(Left + 15, Top + Height / 5);
      MainCanvas.lineTo(Left + 5, Top + Height / 2);
      MainCanvas.lineTo(Left + 15, Top + Height - Height / 5);
      MainCanvas.stroke();
      MainCanvas.closePath();
      MainCanvas.beginPath();
      MainCanvas.fillStyle = "Black";
      MainCanvas.moveTo(Left + Width - 15, Top + Height / 5);
      MainCanvas.lineTo(Left + Width - 5, Top + Height / 2);
      MainCanvas.lineTo(Left + Width - 15, Top + Height - Height / 5);
      MainCanvas.stroke();
      MainCanvas.closePath();
      MainCanvas.restore();
      if (CommonIsMobile) return;
      if (BackText == null) BackText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: BACK TEXT", "BackText");
      if (NextText == null) NextText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: NEXT TEXT", "NextText");
      if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
        DrawHoverElements.push(() => {
          DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : "");
        });
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawBackNextButton, "hookDrawBackNextButton");

  // src/utilities/drawing.ts
  var _Image = {
    doNotColorizeImageIncludes: [
      "Assets/Female3DCG/",
      "Backgrounds/",
      "Icons/Struggle/",
      "Icons/LARP/",
      "Icons/MagicBattle/",
      "Screens/",
      "http"
    ],
    doColorizeImageIncludes: [
      "https://ddeeplb.github.io/Themed-BC/public"
    ],
    doNotColorizeImages: [
      "Icons/Accept.png",
      "Icons/Activity.png",
      "Icons/Arousal.png",
      "Icons/Audio.png",
      "Icons/BlindToggle2.png",
      "Icons/Cancel.png",
      "Icons/Cell.png",
      "Icons/Checked.png",
      "Icons/ClubCard.png",
      "Icons/Controller.png",
      "Icons/Crafting.png",
      "Icons/Exit.png",
      "Icons/Explore.png",
      "Icons/Gavel.png",
      "Icons/Gender.png",
      "Icons/Infiltration.png",
      "Icons/Lock.png",
      "Icons/LockMenu.png",
      "Icons/MagicSchool.png",
      "Icons/Online.png",
      "Icons/Platform.png",
      "Icons/Poker.png",
      "Icons/Search.png",
      "Icons/Security.png",
      "Icons/ServiceBell.png",
      "Icons/Title.png",
      "Icons/Use.png",
      "Icons/WinkNone.png",
      "Icons/Color.png",
      "Icons/ColorChange.png",
      "Icons/ColorChangeMulti.png",
      "Icons/Small/ColorBlocked.png",
      "Icons/Small/ColorChange.png",
      "Icons/Small/ColorChangeMulti.png",
      "Icons/Small/Naked.png",
      "Icons/Small/Use.png",
      "Icons/Small/YouTube.png"
    ],
    doColorizeImages: [
      ""
    ],
    doNotColorizeHTMLImageIncludes: [
      "Assets/Female3DCG/",
      "Backgrounds/",
      "Icons/Struggle/",
      "Icons/LARP/",
      "Icons/MagicBattle/",
      "Screens/",
      "http",
      "data:"
    ],
    doColorizeHTMLImageIncludes: [
      "https://ddeeplb.github.io/Themed-BC/public"
    ],
    doNotColorizeHTMLImages: [
      "Icons/Information.svg",
      "Icons/Search.png",
      "Icons/CaretUp.svg",
      "Icons/cross.svg",
      "Icons/RoomTypeNormal.svg",
      "Icons/RoomTypeHybrid.svg",
      "Icons/RoomTypeMap.svg",
      "Icons/Female.svg",
      "Icons/Gender.svg",
      "Icons/Male.svg",
      "Icons/Accept.png",
      "Icons/Activity.png",
      "Icons/Arousal.png",
      "Icons/Audio.png",
      "Icons/BlindToggle2.png",
      "Icons/Cancel.png",
      "Icons/Cell.png",
      "Icons/Checked.png",
      "Icons/ClubCard.png",
      "Icons/Controller.png",
      "Icons/Crafting.png",
      "Icons/Exit.png",
      "Icons/Explore.png",
      "Icons/Gavel.png",
      "Icons/Gender.png",
      "Icons/Infiltration.png",
      "Icons/Lock.png",
      "Icons/LockMenu.png",
      "Icons/MagicSchool.png",
      "Icons/Online.png",
      "Icons/Platform.png",
      "Icons/Poker.png",
      "Icons/Search.png",
      "Icons/Security.png",
      "Icons/ServiceBell.png",
      "Icons/Title.png",
      "Icons/Use.png",
      "Icons/WinkNone.png",
      "Icons/Color.png",
      "Icons/ColorChange.png",
      "Icons/ColorChangeMulti.png",
      "Icons/Small/ColorBlocked.png",
      "Icons/Small/ColorChange.png",
      "Icons/Small/ColorChangeMulti.png",
      "Icons/Small/Naked.png",
      "Icons/Small/Use.png",
      "Icons/Small/YouTube.png"
    ],
    doColorizeHTMLImages: [
      ""
    ],
    doColorizeImage(source) {
      if (!source) return false;
      if (typeof source !== "string") return false;
      let doDraw = true;
      if (doDraw) {
        const includesFolder = _Image.doNotColorizeImageIncludes.some((prefix) => source.startsWith(prefix));
        const includesFile = _Image.doNotColorizeImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = false;
        }
      }
      if (!doDraw) {
        const includesFolder = _Image.doColorizeImageIncludes.some((prefix) => source.startsWith(prefix));
        const includesFile = _Image.doColorizeImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = true;
        }
      }
      return doDraw;
    },
    doColorizeHTMLImage(source) {
      if (!source) return false;
      if (typeof source !== "string") return false;
      let doDraw = true;
      if (doDraw) {
        const includesFolder = _Image.doNotColorizeHTMLImageIncludes.some((prefix) => source.startsWith(prefix) || source.startsWith("./" + prefix));
        const includesFile = _Image.doNotColorizeHTMLImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = false;
        }
      }
      if (!doDraw) {
        const includesFolder = _Image.doColorizeHTMLImageIncludes.some((prefix) => source.startsWith(prefix) || source.startsWith("./" + prefix));
        const includesFile = _Image.doColorizeHTMLImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = true;
        }
      }
      return doDraw;
    }
  };
  function drawRect(x2, y, width, height, backgroundColor, borderColor) {
    DrawRect(x2, y, width, height, backgroundColor);
    DrawEmptyRect(x2, y, width, height, borderColor, 2);
  }
  __name(drawRect, "drawRect");
  function drawButtonRect(x2, y, width, height, backgroundColor, backgroundHoverColor, backgroundDisabledColor, borderColor, borderHoverColor, borderDisabledColor, isHovering, disabled) {
    if (!isHovering && !disabled) drawRect(x2, y, width, height, backgroundColor, borderColor);
    else if (isHovering && !disabled) drawRect(x2, y, width, height, backgroundHoverColor, borderHoverColor);
    else if (disabled) drawRect(x2, y, width, height, backgroundDisabledColor, borderDisabledColor);
  }
  __name(drawButtonRect, "drawButtonRect");

  // src/hooks/gui_redraw/draw_button.ts
  function hookDrawButton() {
    w.hookFunction("DrawButton", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [x2, y, width, height, label, , image, hoveringText, isDisabled] = args;
      let color = args[5];
      const isHovering = MouseHovering(x2, y, width, height);
      const buttonStateSymbol = (() => {
        if (isDisabled) return "=" /* Disabled */;
        if (isHovering) return "-" /* Hover */;
        return "~" /* Base */;
      })();
      color = "@" /* FromButton */ + buttonStateSymbol + color;
      ControllerAddActiveArea(x2, y);
      drawButtonRect(
        x2,
        y,
        width,
        height,
        color,
        color,
        color,
        "%border",
        "%hover",
        "%disabled",
        isHovering,
        isDisabled ?? false
      );
      DrawTextFit(label, x2 + width / 2, y + height / 2 + 1, width - 4, plainColors.text);
      if (image != null && image != "") {
        DrawImage(image, x2 + 2, y + 2);
      }
      if (hoveringText != null && isHovering) {
        DrawHoverElements.push(() => DrawButtonHover(x2, y, width, height, hoveringText));
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawButton, "hookDrawButton");

  // src/hooks/gui_redraw/draw_button_hover.ts
  function hookDrawButtonHover() {
    w.hookFunction("DrawButtonHover", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [, , Width, Height, HoveringText] = args;
      let [Left, Top] = args;
      if (HoveringText == null || HoveringText == "") return next(args);
      Left = MouseX > 1e3 ? Left - 475 : Left + Width + 25;
      Top = Top + (Height - 65) / 2;
      MainCanvas.save();
      MainCanvas.textAlign = "center";
      drawRect(Left, Top, 450, 65, plainColors.elementHint, plainColors.accent);
      DrawTextFit(HoveringText, Left + 225, Top + 33, 444, "Black");
      MainCanvas.restore();
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawButtonHover, "hookDrawButtonHover");

  // src/hooks/gui_redraw/draw_checkbox.ts
  function hookDrawCheckbox() {
    w.hookFunction("DrawCheckbox", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = "Black", CheckImage = "Icons/Checked.png"] = args;
      const backgroundColor = Disabled ? "%disabled" : "%background";
      DrawText(Text, Left + 100, Top + 33, TextColor, "");
      DrawButton(Left, Top, Width, Height, "", backgroundColor, IsChecked ? CheckImage : "", void 0, Disabled);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawCheckbox, "hookDrawCheckbox");

  // src/hooks/gui_redraw/draw_empty_rect.ts
  function hookDrawEmptyRect() {
    w.hookFunction("DrawEmptyRect", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [Left, Top, Width, Height, Color2, Thickness] = args;
      const drawEmptyRect = /* @__PURE__ */ __name((color) => {
        MainCanvas.beginPath();
        MainCanvas.rect(Left, Top, Width, Height);
        MainCanvas.lineWidth = Thickness ?? 2;
        MainCanvas.strokeStyle = color;
        MainCanvas.stroke();
      }, "drawEmptyRect");
      if (Color2?.startsWith("%" /* Custom */)) {
        switch (Color2.substring(1).toLowerCase()) {
          case "border":
            drawEmptyRect(plainColors.accent);
            break;
          case "hover":
            drawEmptyRect(plainColors.accentHover);
            break;
          case "disabled":
            drawEmptyRect(plainColors.accentDisabled);
            break;
          default:
            next(args);
            break;
        }
      } else {
        switch (_Color.getHexComputed(Color2).toLowerCase()) {
          case "#ffffff":
          case "#dddddd":
          case "#000000":
            drawEmptyRect(plainColors.accent);
            break;
          default:
            next(args);
            break;
        }
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawEmptyRect, "hookDrawEmptyRect");

  // src/hooks/gui_redraw/draw_image_ex.ts
  function hookDrawImageEx() {
    w.hookFunction("DrawImageEx", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (typeof args[0] !== "string") return next(args);
      if (!_Image.doColorizeImage(args[0])) return next(args);
      const [Source, Canvas, X2, Y2] = args;
      let Options = args[4];
      Options ?? (Options = {});
      Options.HexColor = plainColors.accent.startsWith("#") ? plainColors.accent : `#${plainColors.accent}`;
      Options.FullAlpha = true;
      return next([Source, Canvas, X2, Y2, Options]);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawImageEx, "hookDrawImageEx");

  // src/hooks/gui_redraw/draw_preview_box.ts
  function hookDrawPreviewBox() {
    w.hookFunction("DrawPreviewBox", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [X2, Y2, Path, Description, Options] = args;
      const { Vibrating, Icons, Disabled } = Options || {};
      let { Foreground, Background, Width, Height } = Options || {};
      Width = Width || DrawAssetPreviewDefaultWidth;
      Height = Height || DrawAssetPreviewDefaultHeight;
      const Padding = 2;
      const TextGutter = Description ? 44 : 0;
      Foreground = plainColors.text;
      Background = Background || plainColors.element;
      const hover = MouseHovering(X2, Y2, Width, Height);
      if (hover) Background = Background || plainColors.elementHover;
      if (Disabled) Background = Background || plainColors.elementDisabled;
      let ImageX = X2 + Padding;
      let ImageY = Y2 + Padding;
      let ImageWidth = Width;
      let ImageHeight = Height - TextGutter;
      if (ImageWidth > ImageHeight) {
        const Ratio = ImageHeight / ImageWidth;
        ImageWidth *= Ratio;
        ImageX += (Width - ImageWidth) / 2;
      } else if (ImageWidth < ImageHeight) {
        const Ratio = ImageWidth / ImageHeight;
        ImageHeight *= Ratio;
        ImageY += (Height - ImageHeight - TextGutter) / 2;
      }
      ImageWidth -= 2 * Padding;
      ImageHeight -= 2 * Padding;
      if (Vibrating) {
        ImageX += 1 + Math.floor(Math.random() * 3);
        ImageY += 1 + Math.floor(Math.random() * 3);
      }
      DrawRect(X2, Y2, Width, Height, Background);
      ControllerAddActiveArea(X2, Y2);
      DrawEmptyRect(X2, Y2, Width, Height, hover ? plainColors.accentHover : plainColors.accent);
      if (Path !== "") DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
      DrawPreviewIcons(Icons ?? [], X2, Y2);
      if (Description) DrawTextFit(Description, X2 + Width / 2, Y2 + Height - 25, Width - 2 * Padding, Foreground);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawPreviewBox, "hookDrawPreviewBox");

  // src/hooks/gui_redraw/draw_rect.ts
  function hookDrawRect() {
    w.hookFunction("DrawRect", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [Left, Top, Width, Height] = args;
      let color = args[4];
      const drawRect2 = /* @__PURE__ */ __name((color2) => {
        next([Left, Top, Width, Height, color2]);
      }, "drawRect");
      const hover = MouseIn(Left, Top, Width, Height) ? 1 : 0;
      if (color?.startsWith("!" /* NoDraw */)) {
        return next([Left, Top, Width, Height, color.substring(1)]);
      }
      const buttonStates = ["-" /* Hover */, "=" /* Disabled */, "~" /* Base */];
      let buttonStateSymbol = color[0];
      if (color?.startsWith("@" /* FromButton */)) {
        color = color.substring(1);
        buttonStateSymbol = color[0];
        if (buttonStates.includes(buttonStateSymbol)) {
          color = color.substring(1);
        }
      }
      if (color?.startsWith("%" /* Custom */)) {
        switch (color.substring(1)) {
          case "disabled":
            color = hover ? color_default(plainColors.elementDisabled).lighten(0.2).hex() : plainColors.elementDisabled;
            break;
          case "hover":
            color = plainColors.elementHover;
            break;
          case "background":
            color = hover ? plainColors.elementHover : plainColors.element;
            break;
          case "accent":
            color = hover ? plainColors.accentHover : plainColors.accent;
            break;
          case "allowed":
          case "equipped":
          case "crafted":
          case "limited":
          case "blocked": {
            const typedColor = color.substring(1);
            color = specialColors[typedColor][hover];
            break;
          }
          default:
            return next(args);
        }
      } else {
        let parsedColor = null;
        try {
          if (color[0] === "#" && color.length === 9 || color.startsWith("rgba"))
            parsedColor = color_default(color.toLowerCase()).hexa().toLowerCase();
          else
            parsedColor = color_default(color.toLowerCase()).hex().toLowerCase();
        } catch {
          parsedColor = null;
          return next(args);
        }
        switch (parsedColor) {
          case "#eeeeee":
          case "#dddddd":
          case "#cccccc":
          case "#ffffff":
          case "#ffff88":
          case "#ffffff88":
          case "#ffffffcc":
          case "#d7f6e9":
          // LSCG Version Tooltip
          case "#808080":
            color = plainColors.element;
            break;
          case "#00ffff":
            color = plainColors.elementHover;
            break;
          case "#ffc0cb":
          case "#ddffdd":
            color = plainColors.accent;
            break;
          case "#888888":
          case "#ebebe4":
            color = plainColors.elementDisabled;
            break;
          default:
        }
      }
      if (buttonStates.includes(buttonStateSymbol)) {
        let parsedColor = null;
        try {
          parsedColor = color_default(color.toLowerCase());
        } catch {
          parsedColor = null;
        }
        if (parsedColor !== null) {
          if (buttonStateSymbol === "-" /* Hover */) {
            color = parsedColor.lighten(0.2).hex();
          } else if (buttonStateSymbol === "=" /* Disabled */) {
            color = parsedColor.darken(0.2).hex();
          }
          return drawRect2(color);
        }
      }
      drawRect2(color);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawRect, "hookDrawRect");

  // src/hooks/gui_redraw/draw_room_background.ts
  function hookDrawRoomBackground() {
    w.hookFunction("DrawRoomBackground", E.Observe, ([URL2, ...args], next) => {
      if (!doRedraw()) return next([URL2, ...args]);
      if (URL2.includes("Sheet.jpg")) {
        if (p.playerStorage.GlobalModule.doUseFlatColor) {
          DrawRect(0, 0, 2e3, 1e3, plainColors.main);
        } else {
          next([URL2, ...args]);
          MainCanvas.save();
          MainCanvas.globalCompositeOperation = "multiply";
          DrawRect(0, 0, 2e3, 1e3, plainColors.main);
          MainCanvas.restore();
        }
      } else {
        next([URL2, ...args]);
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawRoomBackground, "hookDrawRoomBackground");

  // src/hooks/gui_redraw/draw_text.ts
  function hookDrawText() {
    w.hookFunction("DrawText", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[3]) return next(args);
      const color = args[3];
      let parsedColor = color;
      try {
        parsedColor = color_default(color.toLowerCase()).hex();
      } catch (e) {
        parsedColor = color;
      }
      if (parsedColor === "#000000") {
        args[3] = plainColors.text;
        args[4] = "";
      } else {
        args[4] = "";
      }
      next(args);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawText, "hookDrawText");

  // src/hooks/gui_redraw/draw_text_fit.ts
  function hookDrawTextFit() {
    w.hookFunction("DrawTextFit", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[4]) return next(args);
      let parsedColor = args[4];
      try {
        parsedColor = color_default(args[4].toLowerCase()).hex();
      } catch (e) {
        parsedColor = args[4];
      }
      if (parsedColor === "#000000") {
        args[4] = plainColors.text;
      }
      return next(args);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawTextFit, "hookDrawTextFit");

  // src/hooks/gui_redraw/draw_text_wrap.ts
  function hookDrawTextWrap() {
    w.hookFunction("DrawTextWrap", E.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[5]) return next(args);
      const [Text, X2, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
      let [, , Y2, , ,] = args;
      const isHovering = MouseHovering(X2, Y2, Width, Height);
      if (!Text) return;
      ControllerAddActiveArea(X2, Y2);
      if (BackColor != null) {
        if (!isHovering) {
          drawRect(X2, Y2, Width, Height, BackColor, plainColors.accent);
        } else {
          drawRect(X2, Y2, Width, Height, plainColors.elementHover, plainColors.accentHover);
        }
      }
      let TextSize;
      if (MaxLine != null) {
        TextSize = MainCanvas.font;
        GetWrapTextSize(Text, Width, MaxLine);
      }
      let parsedForeColor = ForeColor;
      try {
        parsedForeColor = color_default(ForeColor.toLowerCase()).hex();
      } catch (e) {
        parsedForeColor = ForeColor;
      }
      MainCanvas.fillStyle = parsedForeColor === "#000000" ? plainColors.text : ForeColor;
      if (MainCanvas.measureText(Text).width > Width) {
        const words = fragmentText(Text, Width);
        let line = "";
        let LineCount = 1;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          if (MainCanvas.measureText(testLine).width > Width && n > 0) {
            line = words[n] + " ";
            LineCount++;
          } else line = testLine;
        }
        line = "";
        Y2 = Y2 - (LineCount - 1) * LineSpacing + Height / 2;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          if (MainCanvas.measureText(testLine).width > Width && n > 0) {
            MainCanvas.fillText(line, X2 + Width / 2, Y2);
            line = words[n] + " ";
            Y2 += LineSpacing * 2;
          } else {
            line = testLine;
          }
        }
        MainCanvas.fillText(line, X2 + Width / 2, Y2);
      } else MainCanvas.fillText(Text, X2 + Width / 2, Y2 + Height / 2);
      if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawTextWrap, "hookDrawTextWrap");

  // src/hooks/gui_redraw/element_button_create.ts
  function hookElementButtonCreate() {
    w.hookFunction(
      "ElementButton.Create",
      E.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        let [, , options2] = args;
        options2 ?? (options2 = {});
        if (!options2.image || typeof options2.image !== "string") return next(args);
        if (!_Image.doColorizeHTMLImage(options2.image)) return next(args);
        options2.imageColor = plainColors.accent;
        return next(args);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookElementButtonCreate, "hookElementButtonCreate");

  // src/modules/gui_redraw.ts
  var doRedraw = /* @__PURE__ */ __name(() => {
    return p.playerStorage?.GlobalModule?.modEnabled && p.playerStorage.GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== "ClubCard";
  }, "doRedraw");
  var _GuiRedrawModule = class _GuiRedrawModule extends L {
    constructor() {
      super(...arguments);
      __publicField(this, "patched", false);
    }
    load() {
      hookDrawRoomBackground();
      hookDrawButton();
      hookDrawCheckbox();
      hookDrawBackNextButton();
      hookDrawImageEx();
      hookDrawRect();
      hookDrawEmptyRect();
      hookDrawButtonHover();
      hookDrawPreviewBox();
      hookAppearanceGetPreviewImageColor();
      hookDrawTextWrap();
      hookDrawTextFit();
      hookDrawText();
      hookDialogGetMenuButtonColor();
      hookElementButtonCreate();
      if (doRedraw()) this.patchGui();
    }
    patchGui() {
      if (this.patched) return false;
      w.patchFunction("DialogDraw", {
        "DrawRect(1087 + offset, 550, 225, 275, bgColor);": 'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");',
        'const bgColor = disabled ? "Gray" : (hover ? "aqua" : "white");': 'const bgColor = disabled ? "%disabled" : (hover ? "%hover" : "%background");'
      });
      w.patchFunction("DrawProcessScreenFlash", {
        'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));': 'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));',
        "DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);": 'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
      });
      w.patchFunction("ChatAdminRun", {
        'const ButtonBackground = canEdit ? "White" : "#ebebe4";': 'const ButtonBackground = canEdit ? "%background" : "%disabled";'
      });
      w.patchFunction("AppearanceRun", {
        'const ButtonColor = canAccess ? "White" : "#888";': 'const ButtonColor = canAccess ? "%background" : "%disabled";',
        'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "#fff" : "#aaa", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);': 'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "%background" : "%disabled", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);',
        'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", undefined, undefined, !CanCycleColors);': 'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "%disabled", undefined, undefined, !CanCycleColors);',
        'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);': 'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "%background" : "%disabled", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);'
      });
      w.patchFunction("ExtendedItemGetButtonColor", {
        'ButtonColor = "#888888";': 'ButtonColor = "%accent";',
        'ButtonColor = Hover ? "red" : "pink";': 'ButtonColor = "%blocked";',
        'ButtonColor = Hover ? "orange" : "#fed8b1";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "green" : "lime";': 'ButtonColor = "%allowed";',
        'ButtonColor = "Red";': 'ButtonColor = "%blocked";',
        'ButtonColor = "Pink";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "Cyan" : "LightGreen";': 'ButtonColor = "%allowed";',
        'ButtonColor = Hover ? "Cyan" : "White";': 'ButtonColor = Hover ? "%hover" : "%background";'
      });
      w.patchFunction("Shop2._AssetElementDraw", {
        'options.Background = "cyan";': 'options.Background = "%hover";',
        'options.Background = "white";': 'options.Background = "%background";',
        'options.Background = "gray";': 'options.Background = "%disabled";',
        'options.Background = "pink";': 'options.Background = "%equipped";'
      });
      this.patched = true;
    }
    unpatchGui() {
      if (!this.patched) return false;
      w.unpatchFunction("DialogDraw");
      w.unpatchFunction("DrawProcessScreenFlash");
      w.unpatchFunction("ChatAdminRun");
      w.unpatchFunction("AppearanceRun");
      w.unpatchFunction("ExtendedItemGetButtonColor");
      w.unpatchFunction("Shop2._AssetElementDraw");
      this.patched = false;
    }
    toggleGuiPatches() {
      if (!doRedraw()) {
        return this.unpatchGui();
      } else {
        return this.patchGui();
      }
    }
  };
  __name(_GuiRedrawModule, "GuiRedrawModule");
  var GuiRedrawModule = _GuiRedrawModule;

  // src/utilities/integration.ts
  function changeModColors() {
    if (doRedraw()) {
      changeBctColors();
      changeMbsColors();
    } else {
      resetBctColors();
      resetMbsColors();
    }
  }
  __name(changeModColors, "changeModColors");
  function changeBctColors() {
    if (typeof BCT_API === "undefined") return;
    BCT_API.HintBackColor = plainColors.element;
    BCT_API.HintBorderColor = plainColors.accent;
    BCT_API.HintForeColor = plainColors.text;
  }
  __name(changeBctColors, "changeBctColors");
  function resetBctColors() {
    if (typeof BCT_API === "undefined") return;
    BCT_API.HintBackColor = "yellow";
    BCT_API.HintBorderColor = "black";
    BCT_API.HintForeColor = "black";
  }
  __name(resetBctColors, "resetBctColors");
  function changeMbsColors() {
    if (typeof mbs !== "undefined" && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
      if (!p.playerStorage.IntegrationModule.MBS) return;
      return mbs.css.setStyle({
        backgroundColor: plainColors.main,
        buttonColor: plainColors.element,
        buttonHoverColor: plainColors.elementHover,
        borderColor: plainColors.accent,
        tooltipColor: plainColors.elementHint,
        textColor: plainColors.text
      });
    }
  }
  __name(changeMbsColors, "changeMbsColors");
  function resetMbsColors() {
    if (typeof mbs !== "undefined" && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
      if (!p.playerStorage.IntegrationModule.MBS)
        mbs.css.setStyle({
          backgroundColor: mbs.css.DEFAULT_STYLE.backgroundColor,
          buttonColor: mbs.css.DEFAULT_STYLE.buttonColor,
          buttonHoverColor: mbs.css.DEFAULT_STYLE.buttonHoverColor,
          borderColor: mbs.css.DEFAULT_STYLE.borderColor,
          tooltipColor: mbs.css.DEFAULT_STYLE.tooltipColor,
          textColor: mbs.css.DEFAULT_STYLE.textColor
        });
    }
  }
  __name(resetMbsColors, "resetMbsColors");

  // src/utilities/other.ts
  function camelToKebabCase(str) {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  __name(camelToKebabCase, "camelToKebabCase");

  // src/utilities/style.ts
  var styles = {
    inputs: "",
    chat: "",
    inventory: "",
    friendList: "",
    friendListBlur: "",
    scrollbar: "",
    selection: "",
    WCE: "",
    FUSAM: "",
    TTS: ""
  };
  var BcStyle = {
    injectAll() {
      const isEnabled = p.playerStorage.GlobalModule.modEnabled;
      H.injectEmbed("tmd-style", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/themed.css`);
      if (!isEnabled) return;
      H.injectInline("tmd-root", composeRoot());
      H.injectEmbed("tmd-chat-room-search", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/chatroom_search.css`);
      H.injectEmbed("tmd-preference", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/preference.css`);
      H.injectEmbed("tmd-misc", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/misc.css`);
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        if (!p.playerStorage.IntegrationModule[id]) return;
        H.injectEmbed(id, `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/${id}.css`);
      });
    },
    ejectAll() {
      H.eject("tmd-root");
      H.eject("tmd-style");
      H.eject("tmd-chat-room-search");
      H.eject("tmd-preference");
      H.eject("tmd-misc");
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        H.eject(id);
      });
    },
    reloadAll() {
      BcStyle.ejectAll();
      BcStyle.injectAll();
    }
  };
  function composeRoot() {
    let genedColors = "";
    Object.keys(plainColors).forEach((key) => {
      const typedKey = key;
      genedColors += `--tmd-${camelToKebabCase(key)}: ${plainColors[typedKey]};
	`;
    });
    Object.keys(specialColors).forEach((key) => {
      const typedKey = key;
      genedColors += `--tmd-${camelToKebabCase(key)}: ${specialColors[typedKey][0]};
	`;
      genedColors += `--tmd-${camelToKebabCase(key)}-hover: ${specialColors[typedKey][1]};
	`;
    });
    genedColors += `--tmd-search-full-blocked: ${color_default(specialColors.roomBlocked[0]).mix(color_default(plainColors.elementDisabled), 0.5).hex()};
	`;
    genedColors += `--tmd-search-full-blocked-hover: ${color_default(specialColors.roomBlocked[1]).mix(color_default(plainColors.elementDisabled), 0.5).hex()};
	`;
    genedColors += `--tmd-search-full-friend: ${color_default(specialColors.roomFriend[0]).mix(color_default(plainColors.elementDisabled), 0.5).hex()};
	`;
    genedColors += `--tmd-search-full-friend-hover: ${color_default(specialColors.roomFriend[1]).mix(color_default(plainColors.elementDisabled), 0.5).hex()};
	`;
    return (
      /*css*/
      `
    :root {
      ${genedColors}
    }
    `.replace(/\t+|\n\s*/g, "	")
    );
  }
  __name(composeRoot, "composeRoot");

  // src/modules/colors.ts
  var primaryColor = color_default("#202020");
  var elementColor = primaryColor.lighten(0.2);
  var accentColor = color_default("#440171");
  var textColor = color_default("#cccccc");
  var specialColors2 = {
    invalid: color_default("#870c0c"),
    equipped: color_default("#3575b5"),
    crafted: color_default("#aaa235"),
    blocked: color_default("#870c0c"),
    limited: color_default("#9d6600"),
    allowed: color_default("#008800"),
    roomFriend: color_default("#008800"),
    roomBlocked: color_default("#870c0c"),
    roomGame: color_default("#3575b5")
  };
  var _ColorsModule = class _ColorsModule extends L {
    get settingsScreen() {
      return GuiColors;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        themeSettings: {
          themeType: "dark"
        },
        base: {
          main: primaryColor.hex(),
          element: elementColor.hex(),
          elementHover: elementColor.lighten(0.3).hex(),
          elementDisabled: elementColor.darken(0.2).hex(),
          elementHint: elementColor.lighten(0.3).hex(),
          accent: accentColor.hex(),
          accentHover: accentColor.lighten(0.3).hex(),
          accentDisabled: accentColor.darken(0.2).hex(),
          text: textColor.hex(),
          textDisabled: textColor.darken(0.2).hex(),
          textShadow: textColor.darken(0.2).hex()
        },
        special: {
          invalid: specialColors2.invalid.hex(),
          equipped: specialColors2.equipped.hex(),
          crafted: specialColors2.crafted.hex(),
          blocked: specialColors2.blocked.hex(),
          limited: specialColors2.limited.hex(),
          allowed: specialColors2.allowed.hex(),
          roomFriend: specialColors2.roomFriend.hex(),
          roomBlocked: specialColors2.roomBlocked.hex(),
          roomGame: specialColors2.roomGame.hex()
        }
      };
    }
    load() {
    }
    static reloadTheme() {
      m.info("Reloading theme");
      const themeType = C("ColorsModule").settings.themeSettings.themeType;
      document.body.dataset.tmdThemeType = themeType;
      ChatRoomTopMenuBuiltSig = "";
      _Color.composeRoot();
      BcStyle.reloadAll();
      changeModColors();
      C("GuiRedrawModule").toggleGuiPatches();
    }
  };
  __name(_ColorsModule, "ColorsModule");
  var ColorsModule = _ColorsModule;

  // src/modules/commands.ts
  var _CommandsModule = class _CommandsModule extends L {
    load() {
      CommandCombine([
        {
          Tag: "share-theme",
          Description: "[member number]: Shares your theme with other people that have Themed installed!",
          Action(args) {
            if (!args) return C("ShareModule").share(void 0);
            const targetNumber = parseInt(args, 10);
            const target = ChatRoomCharacter.find((c) => c.MemberNumber == targetNumber);
            if (!target)
              Zn("theme-share-error", `No character with MemberNumber ${targetNumber} found!`);
            else
              C("ShareModule").share(target.MemberNumber);
          }
        }
      ]);
    }
    run() {
    }
  };
  __name(_CommandsModule, "CommandsModule");
  var CommandsModule = _CommandsModule;

  // src/screens/global.ts
  var _GuiGlobal = class _GuiGlobal extends I {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = C("GlobalModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-global-${key}`,
          type: "checkbox",
          label: g(`settings.setting.${typedKey}.name`),
          description: g(`settings.setting.${typedKey}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name((val) => {
            this.settings[typedKey] = val;
            ColorsModule.reloadTheme();
          }, "setSettingValue")
        };
      })];
    }
    load() {
      super.load();
    }
  };
  __name(_GuiGlobal, "GuiGlobal");
  __publicField(_GuiGlobal, "subscreenOptions", {
    name: "global",
    icon: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/cog.svg`
  });
  var GuiGlobal = _GuiGlobal;

  // src/modules/global.ts
  var _GlobalModule = class _GlobalModule extends L {
    get settingsScreen() {
      return GuiGlobal;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        modEnabled: true,
        doVanillaGuiOverhaul: true,
        doUseAdvancedColoring: false,
        doUseFlatColor: false,
        doShowLocaleTime: true,
        doIndicateCharacterAbsence: true,
        doShowNewVersionMessage: true
      };
    }
    load() {
      ColorsModule.reloadTheme();
      const reload = /* @__PURE__ */ __name(() => {
        changeModColors();
        BcStyle.reloadAll();
      }, "reload");
      setTimeout(reload, 6e4);
      setTimeout(reload, 3e5);
      w.hookFunction(
        "ChatRoomCurrentTime",
        E.Observe,
        (args, next) => {
          if (!this.settings.doShowLocaleTime) return next(args);
          const currentTime = new Date(Date.now());
          return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
        ModuleCategory.Global
      );
      w.hookFunction(
        "DialogDraw",
        E.Observe,
        (args, next) => {
          if (!this.settings.modEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "ChatRoom")) return next(args);
          if (!CurrentCharacter) return next(args);
          next(args);
          if (!CurrentCharacter || !CurrentCharacter?.MemberNumber) return;
          if (CurrentCharacter.IsPlayer()) return;
          if (!CurrentCharacter?.Canvas?.getContext("2d") || !CurrentCharacter?.CanvasBlink?.getContext("2d")) return;
          if (ChatRoomCharacter.includes(CurrentCharacter)) {
            if (_GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
              CurrentCharacter.Canvas.getContext("2d").globalAlpha = 1;
              CurrentCharacter.CanvasBlink.getContext("2d").globalAlpha = 1;
              CharacterAppearanceBuildCanvas(CurrentCharacter);
              _GlobalModule.transparentCharacters.filter((x2) => x2 !== CurrentCharacter.MemberNumber);
            }
          } else {
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            MainCanvas.beginPath();
            MainCanvas.fillStyle = "gray";
            MainCanvas.fillRect(500, 0, 500, 1e3);
            MainCanvas.fill();
            MainCanvas.restore();
            if (!_GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
              CurrentCharacter.Canvas.getContext("2d").globalAlpha = 0.2;
              CurrentCharacter.CanvasBlink.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceBuildCanvas(CurrentCharacter);
              _GlobalModule.transparentCharacters.push(CurrentCharacter.MemberNumber);
            }
            DrawImageEx("Icons/Warning.svg", MainCanvas, 500 + 125, 125, { Width: 250, Height: 250, HexColor: "#ff0000", FullAlpha: true });
          }
        },
        ModuleCategory.Global
      );
      w.hookFunction(
        "AppearanceRun",
        E.Observe,
        (args, next) => {
          if (!this.settings.modEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "Appearance")) return next(args);
          if (!CharacterAppearanceSelection || !CharacterAppearanceSelection.MemberNumber) return next(args);
          next(args);
          if (CharacterAppearanceSelection === null) return;
          if (CharacterAppearanceSelection.IsPlayer()) return;
          if (!CharacterAppearanceSelection?.Canvas?.getContext("2d") || !CharacterAppearanceSelection?.CanvasBlink?.getContext("2d")) return;
          if (ChatRoomCharacter.includes(CharacterAppearanceSelection)) {
            if (_GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
              CharacterAppearanceSelection.Canvas.getContext("2d").globalAlpha = 1;
              CharacterAppearanceSelection.CanvasBlink.getContext("2d").globalAlpha = 1;
              CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
              _GlobalModule.transparentCharacters.filter((x2) => x2 !== CharacterAppearanceSelection.MemberNumber);
            }
          } else {
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            MainCanvas.beginPath();
            MainCanvas.fillStyle = "gray";
            MainCanvas.fillRect(660, 0, 500, 1e3);
            MainCanvas.fill();
            MainCanvas.restore();
            if (!_GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
              CharacterAppearanceSelection.Canvas.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceSelection.CanvasBlink.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
              _GlobalModule.transparentCharacters.push(CharacterAppearanceSelection.MemberNumber);
            }
            DrawImageEx("Icons/Warning.svg", MainCanvas, 660 + 125, 125, { Width: 250, Height: 250, HexColor: "#ff0000" });
          }
        },
        ModuleCategory.Global
      );
      w.hookFunction(
        "ChatRoomSync",
        E.Observe,
        (args, next) => {
          Character.filter((character) => character.IsPlayer() || !_GlobalModule.transparentCharacters?.includes(character.MemberNumber));
          return next(args);
        },
        ModuleCategory.Global
      );
    }
    run() {
    }
  };
  __name(_GlobalModule, "GlobalModule");
  __publicField(_GlobalModule, "transparentCharacters", []);
  var GlobalModule = _GlobalModule;

  // src/screens/integration.ts
  var _GuiIntegration = class _GuiIntegration extends I {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = C("IntegrationModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-integration-${key}`,
          type: "checkbox",
          label: g(`integration.setting.${key}.name`),
          description: g(`integration.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name((val) => {
            this.settings[typedKey] = val;
            ColorsModule.reloadTheme();
          }, "setSettingValue")
        };
      })];
    }
    load() {
      super.load();
    }
  };
  __name(_GuiIntegration, "GuiIntegration");
  __publicField(_GuiIntegration, "subscreenOptions", {
    name: "integration",
    icon: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/stars.svg`
  });
  var GuiIntegration = _GuiIntegration;

  // src/modules/integration.ts
  var _IntegrationModule = class _IntegrationModule extends L {
    get settingsScreen() {
      return GuiIntegration;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        inputs: true,
        chat: true,
        inventory: true,
        friendList: true,
        friendListBlur: false,
        scrollbar: true,
        selection: true,
        WCE: true,
        FUSAM: true,
        TTS: true,
        MBS: true
      };
    }
    load() {
    }
  };
  __name(_IntegrationModule, "IntegrationModule");
  var IntegrationModule = _IntegrationModule;

  // src/screens/profiles.ts
  var _GuiProfiles = class _GuiProfiles extends I {
    get settings() {
      return super.settings;
    }
    load() {
      super.load();
      const profilesContainer = ElementCreate({
        tag: "div",
        classList: ["tmd-profiles-container"],
        attributes: {
          id: "tmd-profiles-container"
        },
        parent: b.getSubscreen()
      });
      for (let i = 0; i < 3; i++) {
        const profileId = i + 1;
        const profileName = this.settings[profileId].name || g("profiles.text.profile") + ` ${profileId}`;
        const profileElement = ElementCreate({
          tag: "div",
          attributes: {
            id: `tmd-profile-${profileId}`
          },
          classList: ["tmd-profile"],
          children: [
            u.createLabel({
              id: `tmd-profile-label-${profileId}`,
              label: profileName
            }),
            this.createColorShowcase(profileId),
            {
              tag: "div",
              classList: ["tmd-profile-buttons"],
              children: [
                u.createButton({
                  id: `tmd-profiles-profile-save-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesSaving(profileId), "onClick"),
                  options: {
                    label: g("profiles.button.save")
                  }
                }),
                u.createButton({
                  id: `tmd-profiles-profile-load-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesLoading(profileId), "onClick"),
                  options: {
                    label: g("profiles.button.load"),
                    disabled: !this.profileExists(profileId)
                  }
                }),
                u.createButton({
                  id: `tmd-profiles-profile-delete-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesDeleting(profileId), "onClick"),
                  options: {
                    label: g("profiles.button.delete"),
                    disabled: !this.profileExists(profileId)
                  }
                })
              ]
            }
          ]
        });
        profilesContainer.appendChild(profileElement);
      }
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    resize(onLoad) {
      super.resize(onLoad);
    }
    async handleProfilesSaving(profileId) {
      if (!this.profileCanBeSaved(profileId)) return;
      const name = await D.prompt(g("profiles.prompt"));
      if (name === null) return;
      const storage = p.playerStorage;
      const profile = this.settings[profileId];
      if (!profile || Object.keys(profile).length === 0) {
        this.settings[profileId] = {};
      }
      this.settings[profileId] = CommonCloneDeep({
        name,
        data: {
          GlobalModule: storage.GlobalModule,
          ColorsModule: storage.ColorsModule,
          IntegrationModule: storage.IntegrationModule
        }
      });
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${g("profiles.text.profile")} ${display} ${g("profiles.text.has_been_saved")}`);
      this.updateProfileLabel(profileId);
      this.updateProfileButtons(profileId);
      this.updateProfileColorShowcase(profileId);
    }
    handleProfilesLoading(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.error(`${g("profiles.text.profile")} ${profileId} ${g("profiles.text.doesnt_exist")}`);
        return;
      }
      const data = this.settings[profileId].data;
      p.playerStorage = CommonCloneDeep({
        ...p.playerStorage,
        GlobalModule: data.GlobalModule,
        ColorsModule: data.ColorsModule,
        IntegrationModule: data.IntegrationModule
      });
      const name = this.settings[profileId].name;
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${g("profiles.text.profile")} ${display} ${g("profiles.text.has_been_loaded")}`);
      ColorsModule.reloadTheme();
    }
    handleProfilesDeleting(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.info(`${g("profiles.text.profile")} ${profileId} ${g("profiles.text.doesnt_exist")}`);
        return;
      }
      const name = this.settings[profileId].name;
      this.settings[profileId] = {
        name: "",
        data: {}
      };
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${g("profiles.text.profile")} ${display} ${g("profiles.text.has_been_deleted")}`);
      this.updateProfileLabel(profileId);
      this.updateProfileButtons(profileId);
      this.updateProfileColorShowcase(profileId);
    }
    updateProfileButtons(profileId) {
      const profileSaveButton = ElementWrap(`tmd-profiles-profile-save-${profileId}`);
      const profileLoadButton = ElementWrap(`tmd-profiles-profile-load-${profileId}`);
      const profileDeleteButton = ElementWrap(`tmd-profiles-profile-delete-${profileId}`);
      if (!profileSaveButton || !profileLoadButton || !profileDeleteButton) return;
      profileSaveButton.disabled = !this.profileCanBeSaved(profileId);
      profileLoadButton.disabled = !this.profileExists(profileId);
      profileDeleteButton.disabled = !this.profileExists(profileId);
    }
    updateProfileLabel(profileId) {
      const name = this.settings[profileId].name;
      const display = name ? name : `${g("profiles.text.profile")} ${profileId}`;
      const profileLabel = ElementWrap(`tmd-profile-label-${profileId}`);
      if (!profileLabel) return;
      profileLabel.textContent = display;
    }
    updateProfileColorShowcase(profileId) {
      ElementWrap(`tmd-profile-color-showcase-${profileId}`)?.remove();
      const colorShowcase = this.createColorShowcase(profileId);
      if (colorShowcase) {
        ElementWrap(`tmd-profile-label-${profileId}`)?.after(colorShowcase);
      }
    }
    createColorShowcase(profileId) {
      const exists = this.profileExists(profileId);
      if (!exists) return null;
      const profile = this.settings[profileId];
      const colors2 = Object.entries(profile.data.ColorsModule.base);
      return ElementCreate({
        tag: "div",
        classList: ["tmd-profile-color-showcase"],
        attributes: {
          id: `tmd-profile-color-showcase-${profileId}`
        },
        children: colors2.map(([key, value]) => {
          const isBaseMode = !profile.data.GlobalModule.doUseAdvancedColoring;
          const baseModeKey = /* @__PURE__ */ __name((key2) => ["main", "accent", "text"].includes(key2), "baseModeKey");
          if (isBaseMode && !baseModeKey(key)) {
            return;
          }
          return u.createButton({
            id: `tmd-profile-color-showcase-${profileId}-${key}`,
            htmlOptions: {
              button: {
                style: {
                  "--background-color": value
                },
                classList: ["tmd-profile-color-showcase-button"]
              }
            },
            options: {
              noStyling: true,
              tooltip: g(`colors.setting.${key}.name`)
            }
          });
        })
      });
    }
    isValidProfileId(id) {
      if (id < 1 || id > 3) {
        m.warn(`Invalid profile id ${id}`);
        return false;
      }
      return true;
    }
    profileCanBeSaved(profileId) {
      if (!this.isValidProfileId(profileId)) return false;
      return true;
    }
    profileExists(profileId) {
      if (!this.isValidProfileId(profileId)) return false;
      const data = this.settings[profileId]?.data || {};
      if (!data || Object.keys(data).length === 0) return false;
      return true;
    }
  };
  __name(_GuiProfiles, "GuiProfiles");
  __publicField(_GuiProfiles, "subscreenOptions", {
    name: "profiles",
    icon: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/users_group.svg`,
    drawCharacter: false
  });
  var GuiProfiles = _GuiProfiles;

  // src/modules/profiles.ts
  var _ProfilesModule = class _ProfilesModule extends L {
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get settingsScreen() {
      return GuiProfiles;
    }
    get defaultSettings() {
      const profileDefaults = {
        GlobalModule: C("GlobalModule").defaultSettings,
        ColorsModule: C("ColorsModule").defaultSettings,
        IntegrationModule: C("IntegrationModule").defaultSettings
      };
      const data = p.playerStorage?.ProfilesModule || {};
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (!data[profileIndex] || Object.keys(data[profileIndex]).length === 0) {
          data[profileIndex] = {
            data: {},
            name: ""
          };
        }
        if (Object.keys(data[profileIndex].data).length > 0)
          data[profileIndex].data = f(profileDefaults, data[profileIndex].data);
      }
      return data;
    }
    load() {
    }
  };
  __name(_ProfilesModule, "ProfilesModule");
  var ProfilesModule = _ProfilesModule;

  // src/modules/share.ts
  var _ShareModule = class _ShareModule extends L {
    constructor() {
      super(...arguments);
      __publicField(this, "channel", null);
    }
    load() {
      this.channel = new Ie("share");
      this.channel.registerListener("ThemedTheme", (data, sender) => {
        const theme = data.Theme;
        const version = data.ThemeVersion;
        const settings = data.Settings;
        const senderName = CharacterNickname(sender);
        const prompt = g("modal.prompt.share").replace("$Sender", `${senderName} (${sender.MemberNumber})`).replace("$SenderPronoun", CharacterPronoun(sender, "Possessive", false)).split("<br>").map((str) => ({
          tag: "span",
          children: [str]
        }));
        const shareNotification = g("modal.prompt.chat_share_notification").replace("$Sender", `${senderName} (${sender.MemberNumber})`);
        const message = ElementCreate({
          tag: "div",
          classList: ["themed-chat-modal"],
          attributes: {
            "data-time": ChatRoomCurrentTime(),
            "data-sender": sender.MemberNumber?.toString(),
            id: sender.MemberNumber?.toString()
          },
          children: [
            {
              tag: "span",
              classList: ["modal-prompt"],
              children: [
                shareNotification
              ]
            },
            u.createButton({
              id: ElementGenerateID(),
              htmlOptions: {
                button: {
                  classList: ["modal-button"]
                }
              },
              options: {
                label: g("modal.button.show")
              },
              onClick: /* @__PURE__ */ __name(() => {
                if (!version || version !== p.playerStorage.Version) {
                  Zn("theme-not-up-to-date", `Theme sent by ${senderName} is not up-to-date!`);
                  return;
                }
                D.confirm(prompt).then((result) => {
                  if (result) {
                    this.acceptShare(theme, settings);
                  }
                });
              }, "onClick")
            })
          ]
        });
        ChatRoomAppendChat(message);
      });
    }
    acceptShare(data, settings) {
      C("ColorsModule").settings = data;
      C("GlobalModule").settings.doUseAdvancedColoring = settings.doUseAdvancedColoring;
      p.save();
      ColorsModule.reloadTheme();
    }
    share(target) {
      Zn("theme-share", "Shared theme with " + (target ? CharacterNickname(ChatRoomCharacter.find((c) => c.MemberNumber == target)) : "everyone"));
      kn(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, "Possessive", false)} Themed theme!`, target);
      this.channel?.sendEvent("ThemedTheme", {
        Theme: C("ColorsModule").settings,
        Settings: C("GlobalModule").settings,
        ThemeVersion: p.playerStorage.Version
      });
    }
  };
  __name(_ShareModule, "ShareModule");
  var ShareModule = _ShareModule;

  // src/migrators/deeplib_migrator.ts
  var _DeeplibMigrator = class _DeeplibMigrator extends pe {
    get migrationVersion() {
      return "1.6.0";
    }
    migrate() {
      const globalModule = C("GlobalModule");
      globalModule.settings.modEnabled = globalModule.settings["themedEnabled"];
      delete globalModule.settings["themedEnabled"];
      ColorsModule.reloadTheme();
    }
  };
  __name(_DeeplibMigrator, "DeeplibMigrator");
  var DeeplibMigrator = _DeeplibMigrator;

  // src/screens/reset.ts
  var _GuiReset = class _GuiReset extends I {
    load() {
      super.load();
      let timeToConfirm = 5;
      ElementCreate({
        tag: "div",
        classList: ["tmd-reset-container"],
        attributes: {
          id: "tmd-reset-container"
        },
        children: [
          u.createLabel({
            id: "themed-reset-label-perma_reset_of_mod_data",
            label: g("reset.label.perma_reset_of_mod_data")
          }),
          {
            tag: "br"
          },
          u.createLabel({
            id: "themed-reset-label-warning",
            label: g("reset.label.warning")
          }),
          u.createLabel({
            id: "themed-reset-label-if_u_confirm_perma_reset",
            label: g("reset.label.if_u_confirm_perma_reset")
          }),
          {
            tag: "br"
          },
          u.createLabel({
            id: "themed-reset-label-youll_able_to_use_mod",
            label: g("reset.label.youll_able_to_use_mod")
          }),
          {
            tag: "br"
          },
          u.createLabel({
            id: "themed-reset-label-action_cannot_be_undone",
            label: g("reset.label.action_cannot_be_undone")
          }),
          {
            tag: "br"
          },
          {
            tag: "div",
            attributes: {
              id: "tmd-reset-buttons-container"
            },
            children: [
              u.createButton({
                id: "tmd-reset-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.confirm();
                  timer?.();
                }, "onClick"),
                options: {
                  label: `${g("reset.button.confirm")} (${timeToConfirm})`
                },
                disabled: true
              }),
              u.createButton({
                id: "tmd-cancel-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.exit();
                  timer?.();
                }, "onClick"),
                options: {
                  label: g("reset.button.cancel")
                }
              })
            ]
          }
        ],
        parent: b.getSubscreen()
      });
      const timer = TimerCreate(() => {
        timeToConfirm--;
        const button = ElementWrap("tmd-reset-button");
        const buttonLabel = button?.querySelector(".button-label");
        if (buttonLabel) {
          buttonLabel.textContent = `${g("reset.button.confirm")} (${timeToConfirm})`;
        }
        if (timeToConfirm <= 0) {
          if (button && buttonLabel) {
            button.disabled = false;
            buttonLabel.textContent = g("reset.button.confirm");
          }
          timer();
        }
      }, 1e3, true, "universal");
    }
    resize(onLoad) {
      super.resize(onLoad);
      ElementSetPosition("tmd-reset-container", 500, 175, "top-left");
      ElementSetSize("tmd-reset-container", 1e3, null);
    }
    confirm() {
      settingsReset();
      for (const module of x()) {
        module.registerDefaultSettings(p.playerStorage);
      }
      ColorsModule.reloadTheme();
      PreferenceOpenSubscreen("Extensions").then(() => {
        PreferenceSubscreenExtensionsClear();
      });
    }
  };
  __name(_GuiReset, "GuiReset");
  __publicField(_GuiReset, "subscreenOptions", {
    drawCharacter: false,
    name: "reset",
    doShowExitButton: false,
    doShowTitle: false
  });
  var GuiReset = _GuiReset;

  // src/themed.ts
  (async () => {
    const changelog = await fetch(`${"https://ddeeplb.github.io/Themed-BC/public"}/text/changelog.txt`).then((res) => res.text()).then((text) => text.replace(/\r\n/g, "\n"));
    const migrators = [
      new V140Migrator(),
      new DeeplibMigrator()
    ];
    const modules = {
      GUI: new k({
        buttonText: "Themed",
        identifier: "Themed",
        image: `${"https://ddeeplb.github.io/Themed-BC/public"}/images/mod.png`
      }),
      GlobalModule: new GlobalModule(),
      ColorsModule: new ColorsModule(),
      GuiRedrawModule: new GuiRedrawModule(),
      IntegrationModule: new IntegrationModule(),
      ProfilesModule: new ProfilesModule(),
      CommandsModule: new CommandsModule(),
      ShareModule: new ShareModule(),
      VersionModule: new U({
        newVersionMessage: changelog,
        migrators
      })
    };
    return wt({
      beforeLogin: /* @__PURE__ */ __name(() => {
        loadLocalSettings();
        loadLoginOptions();
      }, "beforeLogin"),
      initFunction: /* @__PURE__ */ __name(() => {
        ColorsModule.reloadTheme();
      }, "initFunction"),
      mainMenuOptions: {
        importExportSubscreen: new ve({
          customFileExtension: ".tmd",
          onImport() {
            p.save();
            ColorsModule.reloadTheme();
          }
        }),
        wikiLink: "https://github.com/dDeepLb/Themed-BC/wiki",
        resetSubscreen: new GuiReset()
      },
      modules,
      translationOptions: {
        pathToTranslationsFolder: `${"https://ddeeplb.github.io/Themed-BC/public"}/translations/`
      }
    });
  })();
})();
/*! Bundled license information:

bc-deeplib/dist/deeplib.js:
  (*! Bundled license information:
  
  js-logger/src/logger.js:
    (*!
     * js-logger - http://github.com/jonnyreeves/js-logger
     * Jonny Reeves, http://jonnyreeves.co.uk/
     * js-logger may be freely distributed under the MIT license.
     *)
  *)
*/
//# sourceMappingURL=themed.js.map

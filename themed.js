"use strict";
var Themed = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/.pnpm/bc-deeplib@4.0.0_sass-embedded@1.90.0/node_modules/bc-deeplib/dist/deeplib.js
  var de = Object.defineProperty;
  var s = /* @__PURE__ */ __name((t, e) => de(t, "name", { value: e, configurable: true }), "s");
  var _a;
  var B = (_a = class {
    get settingsScreen() {
      return null;
    }
    get settingsStorage() {
      return this.constructor.name;
    }
    get settings() {
      return this.settingsStorage ? (u.playerStorage ? u.playerStorage[this.settingsStorage] || this.registerDefaultSettings(u.playerStorage) : this.registerDefaultSettings(u.playerStorage), u.playerStorage[this.settingsStorage]) : null;
    }
    set settings(e) {
      this.settingsStorage && (u.playerStorage ? u.playerStorage[this.settingsStorage] || this.registerDefaultSettings(u.playerStorage) : this.registerDefaultSettings(u.playerStorage), u.playerStorage[this.settingsStorage] = e);
    }
    init() {
    }
    registerDefaultSettings(e) {
      let i = this.settingsStorage, n = this.defaultSettings;
      !i || !n || Object.entries(this.defaultSettings).length !== 0 && (e[i] = b(this.defaultSettings, e[i], { concatArrays: false, matchingOnly: true }));
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
  }, __name(_a, "B"), s(_a, "BaseModule"), _a);
  async function T(t) {
    if (!L.instance) throw new Error("Attempt to set subscreen before init");
    let e = typeof t == "string" ? t : t?.options.name, i = `${m.id}_${e}`;
    await CommonSetScreen("DeepLibMod", `${i}`);
  }
  __name(T, "T");
  s(T, "setSubscreen");
  var _a2;
  var m = (_a2 = class {
    constructor(e) {
      __publicField(this, "options");
      __publicField(this, "module");
      e && (this.module = e);
      let i = this.constructor;
      this.options = { ..._a2.subscreenOptions, ...i.subscreenOptions };
      let n = this.options.name, o = `${_a2.id}_${n}`;
      C(`${o}Load`, this.load.bind(this)), C(`${o}Run`, this.run.bind(this)), C(`${o}Click`, this.click.bind(this)), C(`${o}Exit`, this.exit.bind(this)), C(`${o}Unload`, this.unload.bind(this)), C(`${o}Resize`, this.resize.bind(this)), C(`${o}Background`, this.options.background), CommonCSVCache[ScreenFileGetTranslation("DeepLibMod", o)] = [];
    }
    async setSubscreen(e) {
      return await T(e);
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
      return CommonStringPartitionReplace(d("settings.page.label"), { $currentPage$: `${_a2.currentPage}`, $totalPages$: `${this.pageStructure.length}` }).join("");
    }
    changePage(e, i) {
      let n = this.pageStructure.length;
      e > n && (e = 1), e < 1 && (e = n), _a2.currentPage = e, this.managePageElementsVisibility(), i(this.getPageLabel());
    }
    managePageElementsVisibility() {
      this.pageStructure.forEach((e, i) => {
        e.forEach((n) => {
          let o = ElementWrap(`${n.id}-container`) ?? ElementWrap(`${n.id}`);
          i !== _a2.currentPage - 1 ? o && G.hide(o) : o && G.unhide(o);
        });
      });
    }
    load() {
      var _a16, _b;
      for (let n of f()) n.settingsScreen && (!n.settings || !Object.keys(n.settings).length) && n.registerDefaultSettings(u.playerStorage);
      _a2.currentPage = 1, g.getSubscreen();
      let e = g.getSettingsDiv();
      if (g.appendToSubscreen(e), _a2.menu = ElementMenu.Create("deeplib-nav-menu", []), g.appendToSubscreen(_a2.menu), this.pageStructure.length > 1) {
        let n = c.createBackNext({ id: "deeplib-page-back-next", next: s(({ setLabel: o }) => this.changePage(_a2.currentPage + 1, o), "next"), initialNextTooltip: d("settings.button.next_button_hint"), back: s(({ setLabel: o }) => this.changePage(_a2.currentPage - 1, o), "back"), initialPrevTooltip: d("settings.button.prev_button_hint"), initialLabel: this.getPageLabel() });
        _a2.menu.prepend(n);
      }
      if (this.options.help) {
        let n = this.options.help.onClick, o = s(() => {
        }, "action");
        typeof n == "string" || n instanceof URL ? o = s(() => window.open(n, "_blank"), "action") : typeof n == "function" ? o = n : n instanceof _a2 && (o = s(async () => await this.setSubscreen(n), "action")), (_a16 = this.options.help).tooltip ?? (_a16.tooltip = d("settings.button.help_button_hint")), (_b = this.options.help).icon ?? (_b.icon = `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/bookmark.svg`);
        let r = c.createButton({ id: "deeplib-help", size: [90, 90], onClick: o, options: { image: this.options.help.icon, tooltip: this.options.help.tooltip } });
        _a2.menu.append(r);
      }
      if (this.options.doShowTitle) {
        let n = c.createLabel({ id: "deeplib-subscreen-title", label: d(`${this.options.name}.title`).replace("$ModVersion", "1.8.1") });
        g.appendToSubscreen(n);
      }
      if (this.options.doShowExitButton) {
        let n = c.createButton({ id: "deeplib-exit", size: [90, 90], onClick: s(() => {
          this.exit();
        }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/exit.svg`, tooltip: d("settings.button.back_button_hint") } });
        _a2.menu.append(n);
      }
      let i = c.createTooltip();
      g.appendToSubscreen(i), this.pageStructure.forEach((n) => n.forEach((o) => {
        let r;
        switch (o.type) {
          case "text":
          case "number":
          case "color":
            r = c.createInput(o);
            break;
          case "checkbox":
            r = c.createCheckbox(o);
            break;
          case "button":
            r = c.createButton(o);
            break;
          case "label":
            r = c.createLabel(o);
            break;
          case "custom":
            r = c.createCustom(o);
            break;
          case "dropdown":
            r = c.createDropdown(o);
            break;
        }
        g.appendToSettingsDiv(r);
      })), this.managePageElementsVisibility(), this.options.drawCharacter && this.options.forceUpCharacter ? CharacterAppearanceForceUpCharacter = Player.MemberNumber : CharacterAppearanceForceUpCharacter = -1;
    }
    run() {
      this.options.drawCharacter && DrawCharacter(Player, 50, 50, 0.9, false);
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1, CharacterLoadCanvas(Player);
      let e = typeof this.options.returnScreen == "function" ? this.options.returnScreen() : this.options.returnScreen;
      e instanceof _a2 || !e ? T(e ?? "mainmenu").then(() => {
        u.save();
      }) : Array.isArray(e) && CommonSetScreen(...e).then(() => {
        u.save();
      });
    }
    resize(e = false) {
      let i = this.options.drawCharacter ? 0 : 380, n = g.getSubscreen(), o = g.getSettingsDiv();
      ElementSetPosition(n, 0, 0), ElementSetSize(n, 2e3, 1e3), ElementSetFontSize(n, "auto"), ElementSetPosition(o, 530 - i, 170), ElementSetSize(o, this.options.settingsWidth ?? 1e3 + i, 660), this.options.doShowTitle && (ElementSetPosition("deeplib-subscreen-title", 530 - i, 75), ElementSetSize("deeplib-subscreen-title", 800, 90)), ElementSetPosition("deeplib-nav-menu", 1905, 75, "top-right"), ElementSetSize("deeplib-nav-menu", null, 90), ElementSetSize(c.getTooltip() || "", 1500), _a2.currentElements.forEach((r) => {
        let a = r[0], l = r[1];
        G.autoSetPosition(l.id ?? a.id, l.position), G.autoSetSize(l.id ?? a.id, l.size);
      }), o && (G.hasOverflow(o)?.vertical ? o.classList.add("deeplib-overflow-box") : o.classList.remove("deeplib-overflow-box"));
    }
    unload() {
      _a2.currentElements = [], g.removeSubscreen();
    }
  }, __name(_a2, "t"), s(_a2, "BaseSubscreen"), __publicField(_a2, "currentElements", []), __publicField(_a2, "currentPage", 1), __publicField(_a2, "id", CommonGenerateUniqueID()), __publicField(_a2, "subscreenOptions", { drawCharacter: true, name: "UNKNOWN", icon: "", background: "Sheet", doShowExitButton: true, doShowTitle: true, settingsWidth: 1e3, forceUpCharacter: false }), __publicField(_a2, "menu", null), _a2);
  var $ = `.deeplib-subscreen,
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
  font-size: min(3.6dvh, 1.8dvw);
  display: contents;
}
.deeplib-button .button-tooltip {
  border-radius: min(1dvh, 0.5dvw);
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
  flex: 1 0 auto;
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
  font-size: 0.6em;
  padding: min(1vh, 0.5vw);
  padding: min(1dvh, 0.5dvw);
  background-color: transparent;
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
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: max(50dvw, 25dvh);
  font-size: min(4dvh, 2dvw);
  padding: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  border-radius: min(1.2dvh, 0.6dvw);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
}
.deeplib-modal .deeplib-modal-input {
  width: 100%;
  font-size: min(2.6dvh, 1.8dvw);
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvZGVvL0NvZGUvYmMvQkMtRGVlcExpYi9zcmMvc3R5bGVzIiwic291cmNlcyI6WyJ2YXJzLnNjc3MiLCJidXR0b25zLnNjc3MiLCJlbGVtZW50cy5zY3NzIiwiaW5wdXRzLnNjc3MiLCJtZXNzYWdlcy5zY3NzIiwibW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQ2RGO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBRUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOzs7QUMzQ0o7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0U7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFJSjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFO0VBQ0E7O0FBSEo7RUFNRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7O0FBSUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUNqSUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOzs7QUFLTjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOzs7QUFPUjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7O0FDdkZKO0VBQ0U7RUFDQTs7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0FBQUE7RUFFRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7OztBQzdCRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7O0FBS047RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUE7RUFDRTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi5kZWVwbGliLXN1YnNjcmVlbixcbi5kZWVwbGliLW1vZGFsIHtcbiAgLS1kZWVwbGliLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXRtZC1tYWluLCB3aGl0ZSk7XG4gIC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yOiB2YXIoLS10bWQtZWxlbWVudCwgd2hpdGUpO1xuICAtLWRlZXBsaWItZWxlbWVudC1ob3Zlci1jb2xvcjogdmFyKC0tdG1kLWVsZW1lbnQtaG92ZXIsIGN5YW4pO1xuICAtLWRlZXBsaWItYWNjZW50LWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LCAjRkZGRjg4KTtcbiAgLS1kZWVwbGliLWJsb2NrZWQtY29sb3I6IHZhcigtLXRtZC1ibG9ja2VkLCByZWQpO1xuICAtLWRlZXBsaWItdGV4dC1jb2xvcjogdmFyKC0tdG1kLXRleHQsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWljb24tY29sb3I6IHZhcigtLXRtZC1hY2NlbnQsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWljb24taG92ZXItY29sb3I6IHZhcigtLXRtZC1hY2NlbnQtaG92ZXIsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWJvcmRlci1jb2xvcjogdmFyKC0tdG1kLWFjY2VudCwgYmxhY2spO1xuICAtLWRlZXBsaWItYm9yZGVyLXdpZHRoOiBtaW4oMC4ydmgsIDAuMXZ3KTtcbiAgLS1kZWVwbGliLWJvcmRlci13aWR0aDogbWluKDAuMmR2aCwgMC4xZHZ3KTtcbiAgLS1kZWVwbGliLWJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDAuNXZ3KTtcbiAgLS1kZWVwbGliLWJvcmRlci1yYWRpdXM6IG1pbigxZHZoLCAwLjVkdncpO1xufVxuIiwiLmRlZXBsaWItYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi5idXR0b24tc3R5bGluZyxcbiAgJi5idXR0b24tc3R5bGluZzo6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICB9XG5cbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWljb24tY29sb3IpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIG1hc2stcG9zaXRpb246IGxlZnQ7XG4gICAgbWFzay1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbWFnZSk7XG4gICAgbWFzay1pbWFnZTogdmFyKC0taW1hZ2UpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItaWNvbi1ob3Zlci1jb2xvcik7XG4gIH1cblxuICAuYnV0dG9uLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogbWluKDMuNmR2aCwgMS44ZHZ3KTtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIC5idXR0b24tdG9vbHRpcCB7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgfVxufSIsIiNkZWVwbGliLXBhZ2UtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNkZWVwbGliLXN1YnNjcmVlbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZWVwbGliLXRleHQge1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbn1cblxuLmRlZXBsaWItc3Vic2NyZWVuIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRlZXBsaWItc3Vic2NyZWVuICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uZGVlcGxpYi1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcbiAgcGFkZGluZzogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgZ2FwOiAwLjNlbTtcbn1cblxuLmRlZXBsaWItbWlzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgZ2FwOiBtaW4oMXZoLCAwLjV2dyk7XG59XG5cbi5kZWVwbGliLXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWVsZW1lbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIHBhZGRpbmc6IG1pbigxdmgsIDAuNXZ3KTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm9yZGVyOiBtaW4oMC4ydmgsIDAuMXZ3KSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcik7XG4gIHotaW5kZXg6IDE7XG5cbiAgJi5hbmNob3ItdG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gICYuYW5jaG9yLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogbWluKDF2aCwgMC41dncpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn1cblxuLmRlZXBsaWItb3ZlcmZsb3ctYm94IHtcbiAgYm9yZGVyOiB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcikgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpO1xufVxuXG4uZGVlcGxpYi1wcmV2LW5leHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogbWluKDJkdmgsIDFkdncpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWVsZW1lbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgYm9yZGVyOiBtaW4oMC4ydmgsIDAuMXZ3KSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcik7XG5cbiAgLmRlZXBsaWItcHJldi1uZXh0LWJ1dHRvbiB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWVsZW1lbnQtaG92ZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzKTtcbiAgICB9XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG5cbiAgLmRlZXBsaWItcHJldi1uZXh0LWxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59XG5cbiNkZWVwbGliLW5hdi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG4gIHotaW5kZXg6IDE7XG5cbiAgJj4uZGVlcGxpYi1idXR0b24ge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICB9XG59XG5cbiNkZWVwbGliLXN0b3JhZ2UtbWV0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzKTtcbiAgei1pbmRleDogLTE7XG5cbiAgI2RlZXBsaWItc3RvcmFnZS1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGVlcGxpYi1hY2NlbnQtY29sb3IpO1xuICB9XG59IiwiLmRlZXBsaWItY2hlY2tib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLmRlZXBsaWItaW5wdXQge1xuICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgaGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgd2lkdGg6IG1pbig1ZHZoLCAyLjVkdncpO1xuICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxuICB9XG59XG5cbi5kZWVwbGliLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICBzcGFuIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICY6aGFzKC5kZWVwbGliLXRleHQpIHtcbiAgICBtYXJnaW4tdG9wOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgbWFyZ2luLXRvcDogbWluKDFkdmgsIDAuNWR2dyk7XG4gIH1cblxuICAuZGVlcGxpYi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gICAgcGFkZGluZzogbWluKDFkdmgsIDAuNWR2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgbWluLWhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMHZoLCAwLjV2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcblxuICAgICZbdHlwZT1cImNvbG9yXCJdIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHdpZHRoOiBtaW4oNXZoLCAyLjV2dyk7XG4gICAgICBoZWlnaHQ6IG1pbig1dmgsIDIuNXZ3KTtcbiAgICAgIHdpZHRoOiBtaW4oNWR2aCwgMi41ZHZ3KTtcbiAgICAgIGhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBib3JkZXI6IHZhcigtLWRlZXBsaWItYmxvY2tlZC1jb2xvcikgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5kZWVwbGliLWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogbWluKDJ2aCwgMXZ3KTtcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAwIG1pbigxdmgsIDAuNXZ3KTtcbiAgICBwYWRkaW5nOiAwIG1pbigxZHZoLCAwLjVkdncpO1xuICAgIGJvcmRlci1yYWRpdXM6IG1pbigxdmgsIDAuNXZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG59IiwiLmRlZXBsaWItaGlnaGxpZ2h0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyMDMsIDE4NSwgMjMpO1xufVxuXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyayddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgYm9yZGVyOiBtaW4oMC4yZHZoLCAwLjFkdncpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG59XG5cbiNUZXh0QXJlYUNoYXRMb2cgZGl2LkNoYXRNZXNzYWdlLmRlZXBsaWItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCAjNDQwMTcxO1xuICBjb2xvcjogIzExMTtcbiAgcGFkZGluZy1sZWZ0OiBtaW4oMC42ZHZoLCAwLjNkdncpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuI1RleHRBcmVhQ2hhdExvZ1tkYXRhLWNvbG9ydGhlbWU9J2RhcmsnXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEsXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyazInXSBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbn1cblxuI1RleHRBcmVhQ2hhdExvZyBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzExMTtcbn1cbiIsIi5kZWVwbGliLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNWVtO1xuICB3aWR0aDogbWF4KDUwZHZ3LCAyNWR2aCk7XG4gIGZvbnQtc2l6ZTogbWluKDRkdmgsIDJkdncpO1xuICBwYWRkaW5nOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjJkdmgsIDAuNmR2dyk7XG4gIGJvcmRlcjogbWluKDAuMmR2aCwgMC4xZHZ3KSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuXG4gIC5kZWVwbGliLW1vZGFsLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IG1pbigyLjZkdmgsIDEuOGR2dyk7XG4gICAgYm9yZGVyLXJhZGl1czogbWluKDEuMGR2aCwgMC41ZHZ3KTtcbiAgICBwYWRkaW5nOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbiAgfVxuXG4gIGlucHV0LmRlZXBsaWItbW9kYWwtaW5wdXQge1xuICAgIG1heC13aWR0aDogbWF4KDUwZHZoLCAyNWR2dyk7XG4gIH1cblxuICAuZGVlcGxpYi1tb2RhbC1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDAuNWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmRlZXBsaWItYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBwYWRkaW5nOiBtaW4oMC40dmgsIDAuMnZ3KSBtaW4oMnZoLCAxdncpO1xuXG4gICAgICAuYnV0dG9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlZXBsaWItbW9kYWwtcHJvbXB0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLmRlZXBsaWItbW9kYWwtYmxvY2tlciB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwZHZ3O1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4jZGVlcGxpYi1tb2RhbC1pbXBvcnRfZXhwb3J0IHtcbiAgLmRlZXBsaWItbW9kYWwtY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1oYWxmLWdhcCk7XG4gIH1cbn0iXX0= */`;
  var _a3;
  var F = (_a3 = class extends B {
    constructor() {
      super(...arguments);
      __publicField(this, "debugSettings", { showRawTranslations: false, showFileNames: false, showIncomingServerTransactions: false, incomingMessageFilterMode: "exclude", incomingMessageTypes: "", showOutcomingServerTransactions: false, outcomingMessageFilterMode: "exclude", outcomingMessageTypes: "", showRawActivityNames: false, showRawAssetNames: false });
    }
    load() {
      let e = u.getLocalStorage("debugOptions");
      e && (this.debugSettings = Object.assign(this.debugSettings, e)), ue(), I.hookFunction("TextGet", S.ModifyBehavior, (i, n) => {
        if (!this.debugSettings.showRawTranslations) return n(i);
        let [o] = i, r = TextScreenCache?.fileName() ?? "[unknown]";
        return this.debugSettings.showFileNames ? `${r}::${o}` : o;
      }), I.hookFunction("TextGetInScope", S.ModifyBehavior, (i, n) => {
        if (!this.debugSettings.showRawTranslations) return n(i);
        let [o, r] = i, a = o.lastIndexOf("/");
        a === -1 ? a = 0 : a = a + 1;
        let l = o.substring(a);
        return this.debugSettings.showFileNames ? `${l}::${r}` : r;
      }), I.hookFunction("InterfaceTextGet", S.ModifyBehavior, (i, n) => {
        if (!this.debugSettings.showRawTranslations) return n(i);
        let [o] = i, r = InterfaceStringsPath.lastIndexOf("/");
        r === -1 ? r = 0 : r = r + 1;
        let a = InterfaceStringsPath.substring(r);
        return this.debugSettings.showFileNames ? `${a}::${o}` : o;
      }), I.hookFunction("ActivityDictionaryText", S.ModifyBehavior, (i, n) => {
        if (!this.debugSettings.showRawActivityNames) return n(i);
        let [o] = i;
        return o;
      }), I.hookFunction("ElementButton.CreateForAsset", S.ModifyBehavior, (i, n) => {
        if (!this.debugSettings.showRawAssetNames) return n(i);
        let [, o, , , r] = i;
        return o = ("Asset" in o ? o : { Asset: o }).Asset, r ?? (r = {}), r.label = o.Name, n(i);
      });
    }
    unload() {
      ge();
    }
    saveDebugSettings() {
      u.setLocalStorage("debugOptions", this.debugSettings);
    }
  }, __name(_a3, "F"), s(_a3, "DebugModule"), _a3);
  var Z;
  function _(...t) {
    let e = Array.isArray(t[0]) && typeof t[0][0] == "string" ? t[0][0] : "[unknown]", i = Array.isArray(t[0]) ? t[0].slice(1) : [], n = x("DebugModule");
    return n.debugSettings.showIncomingServerTransactions && ee(e, n.debugSettings.incomingMessageTypes, n.debugSettings.incomingMessageFilterMode) && p.debug("\u25BC Receive", e, ...i), Z?.apply(this, t);
  }
  __name(_, "_");
  s(_, "processIncomingTransaction");
  var O;
  function q(...t) {
    let e = typeof t[0] == "string" ? t[0] : "[unknown]", i = Array.isArray(t[1]) ? t[1] : [t[1]], n = x("DebugModule");
    return n.debugSettings.showOutcomingServerTransactions && ee(e, n.debugSettings.outcomingMessageTypes, n.debugSettings.outcomingMessageFilterMode) && p.debug("\u25B2 Send", e, ...i), O?.apply(this, t);
  }
  __name(q, "q");
  s(q, "processOutcomingTransaction");
  function ee(t, e, i) {
    if (!e.trim()) return true;
    let o = e.split(",").map((r) => r.trim()).filter((r) => r.length > 0).some((r) => t === r);
    return i === "include" ? o : !o;
  }
  __name(ee, "ee");
  s(ee, "shouldLogMessage");
  function ue() {
    Z === void 0 && typeof ServerSocket?.__proto__?.emitEvent == "function" && (Z = ServerSocket.__proto__.emitEvent, ServerSocket.__proto__.emitEvent = _), O === void 0 && typeof ServerSocket?.__proto__?.emit == "function" && (O = ServerSocket.__proto__.emit, ServerSocket.__proto__.emit = q);
  }
  __name(ue, "ue");
  s(ue, "loadServerTransactions");
  function ge() {
    Z && ServerSocket.__proto__.emitEvent === _ && (ServerSocket.__proto__.emitEvent = Z, Z = void 0), O && ServerSocket.__proto__.emit === q && (ServerSocket.__proto__.emit = O, O = void 0);
  }
  __name(ge, "ge");
  s(ge, "unloadServerTransactions");
  var u;
  var I;
  var p;
  var w;
  function st(t) {
    import("https://cdn.jsdelivr.net/npm/bondage-club-mod-sdk@1.2.0/+esm").then(() => {
      if (I = new E({ name: t.modName, fullName: t.modName, version: "1.8.1", repository: t.modRepository }), w = t.modName, u = new X(t.modName), p = new V(w), N.injectInline("deeplib-style", $), p.debug("Init wait"), !CurrentScreen || CurrentScreen === "Login") {
        t.beforeLogin?.();
        let i = I.hookFunction("LoginResponse", 0, (n, o) => {
          p.debug("Init! LoginResponse caught: ", n), o(n);
          let r = n[0];
          if (r === "InvalidNamePassword") return o(n);
          r && typeof r.Name == "string" && typeof r.AccountName == "string" && (te(t), i());
        });
      } else p.debug(`Already logged in, initing ${w}`), te(t);
    });
  }
  __name(st, "st");
  s(st, "initMod");
  async function te(t) {
    if (window[t.modName + "Loaded"]) return;
    u.load(), await M.init(t.translationOptions);
    let e = Object.entries(t.modules ?? {}), i = [];
    if (e.some((n) => n[1] instanceof R) || i.push(["VersionModule", new R()]), false, i.push(...e), !pe(i)) {
      be();
      return;
    }
    await t.initFunction?.(), t.mainMenuOptions && x("GUI") && k.setOptions({ ...t.mainMenuOptions, repoLink: t.modRepository }), window[t.modName + "Loaded"] = true, p.log(`Loaded! Version: ${"1.8.1"}`);
  }
  __name(te, "te");
  s(te, "init");
  function pe(t) {
    for (let [e, i] of t) ie(e, i);
    for (let e of f()) {
      let i = A(() => e.init(), (n) => n);
      i.ok || p.error(i.error);
    }
    for (let e of f()) {
      let i = A(() => e.load(), (n) => n);
      i.ok || p.error(i.error);
    }
    for (let e of f()) {
      let i = A(() => e.run(), (n) => n);
      i.ok || p.error(i.error);
    }
    for (let e of f()) e.registerDefaultSettings(u.playerStorage);
    return p.debug("Modules Loaded."), true;
  }
  __name(pe, "pe");
  s(pe, "initModules");
  function be() {
    return me(), I.unload(), delete window[w + "Loaded"], p.debug("Unloaded."), true;
  }
  __name(be, "be");
  s(be, "unloadMod");
  function me() {
    for (let t of f()) t.unload();
  }
  __name(me, "me");
  s(me, "unloadModules");
  var H = /* @__PURE__ */ new Map();
  function f() {
    return [...H.values()];
  }
  __name(f, "f");
  s(f, "modules");
  function ie(t, e) {
    return H.set(t, e), e;
  }
  __name(ie, "ie");
  s(ie, "registerModule");
  function x(t) {
    return H.get(t);
  }
  __name(x, "x");
  s(x, "getModule");
  var _a4;
  var ne = (_a4 = class {
  }, __name(_a4, "ne"), s(_a4, "BaseMigrator"), _a4);
  var _a5;
  var L = (_a5 = class extends B {
    constructor(e = null) {
      super();
      __publicField(this, "_subscreens");
      __publicField(this, "_mainMenu");
      __publicField(this, "_modButtonOptions");
      if (_a5.instance) throw new Error("Duplicate initialization");
      for (let i of f()) i.settingsScreen;
      this._mainMenu = e?.mainMenu ? new e.mainMenu(this) : new k(this), this._subscreens = [this._mainMenu], this._modButtonOptions = e, _a5.instance = this;
    }
    get subscreens() {
      return this._subscreens;
    }
    get mainMenu() {
      return this._mainMenu;
    }
    load() {
      if (this._modButtonOptions) {
        for (let e of f()) e.settingsScreen && this._subscreens.push(new e.settingsScreen(e));
        this._mainMenu.subscreens = this._subscreens, PreferenceRegisterExtensionSetting({ Identifier: this._modButtonOptions.identifier, ButtonText: this._modButtonOptions.buttonText, Image: this._modButtonOptions.image, load: s(async () => {
          await T(this._mainMenu);
        }, "load"), run: s(() => {
        }, "run"), click: s(() => {
        }, "click"), exit: s(() => {
        }, "exit") });
      }
    }
  }, __name(_a5, "t"), s(_a5, "GUI"), __publicField(_a5, "instance", null), _a5);
  var _a6;
  var R = (_a6 = class extends B {
    constructor(e) {
      super(), e ?? (e = {}), _a6.newVersionMessage = e.newVersionMessage, e.migrators && (_a6.migrators = e.migrators, _a6.migrators.sort((i, n) => i.migrationVersion.localeCompare(n.migrationVersion))), _a6.beforeEach = e.beforeEach, _a6.afterEach = e.afterEach, _a6.beforeAll = e.beforeAll, _a6.afterAll = e.afterAll;
    }
    load() {
      _a6.version = "1.8.1", _a6.checkVersionUpdate(), u.playerStorage.GlobalModule.doShowNewVersionMessage && _a6.isItNewVersion && _a6.sendNewVersionMessage();
    }
    static checkVersionUpdate() {
      let e = _a6.loadVersion(), i = _a6.version;
      _a6.isNewVersion(e, i) && (_a6.isItNewVersion = true, _a6.checkVersionMigration(), _a6.saveVersion()), u.save();
    }
    static checkVersionMigration() {
      let e = _a6.loadVersion(), i = _a6.migrators.filter((n) => _a6.isNewVersion(e, n.migrationVersion));
      if (i.length) {
        _a6.beforeAll?.();
        for (let n of i) _a6.beforeEach?.(), n.migrate(), p.info(`Migrating from ${e} to ${n.migrationVersion} with ${n.constructor.name}`), _a6.afterEach?.();
        _a6.afterAll?.();
      }
    }
    static sendNewVersionMessage() {
      if (!_a6.newVersionMessage) return;
      let i = FriendListBeepLog.push({ MemberNumber: Player.MemberNumber, MemberName: w, ChatRoomName: d("module.version.version_update"), ChatRoomSpace: "X", Private: false, Sent: false, Time: /* @__PURE__ */ new Date(), Message: _a6.newVersionMessage }) - 1, n = CommonStringPartitionReplace(d("module.version.new_version_toast_title"), { $modName$: w, $modVersion$: _a6.version }).join(""), o = FriendListBeepLog[i];
      ServerShowBeep(_a6.newVersionMessage, 1e4, { memberNumber: o.MemberNumber, memberName: o.MemberName, chatRoomName: o.ChatRoomName, ...o.Message && { onClick: s(() => {
        FriendListShowBeep(i);
      }, "onClick") } }, n);
    }
    static isNewVersion(e, i) {
      if (e !== void 0) {
        let n = e.split("."), o = i.split(".");
        for (let r = 0; r < 3; r++) if (n[r] !== o[r]) return o[r] > n[r];
      }
      return e === void 0 || e === "" || !e;
    }
    static saveVersion() {
      u.playerStorage && (u.playerStorage.Version = _a6.version);
    }
    static loadVersion() {
      return u.playerStorage?.Version;
    }
  }, __name(_a6, "t"), s(_a6, "VersionModule"), __publicField(_a6, "isItNewVersion", false), __publicField(_a6, "version"), __publicField(_a6, "newVersionMessage", ""), __publicField(_a6, "migrators", []), __publicField(_a6, "beforeEach"), __publicField(_a6, "afterEach"), __publicField(_a6, "beforeAll"), __publicField(_a6, "afterAll"), _a6);
  var _a7;
  var D = (_a7 = class extends m {
    get pageStructure() {
      return [[{ type: "checkbox", id: "debug-show-incoming-server-transactions", label: "Show Incoming Server Transactions", setElementValue: s(() => this.module.debugSettings.showIncomingServerTransactions, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showIncomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-incoming-filter-mode", label: "Filter Mode", description: ["Configure which incoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.incomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.incomingMessageFilterMode === "exclude" } }], setSettingValue: s((e) => {
        this.module.debugSettings.incomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-incoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomChat, ChatRoomSync")', setElementValue: s(() => this.module.debugSettings.incomingMessageTypes, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.incomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-outcoming-server-transactions", label: "Show Outcoming Server Transactions", setElementValue: s(() => this.module.debugSettings.showOutcomingServerTransactions, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showOutcomingServerTransactions = e;
      }, "setSettingValue") }, { type: "dropdown", id: "debug-outcoming-filter-mode", label: "Filter Mode", description: ["Configure which outcoming message types to show or hide.", ElementCreate({ tag: "br" }), "Include: only show these message types.", ElementCreate({ tag: "br" }), "Exclude: hide these message types."], optionsList: [{ attributes: { value: "include", label: "Include", selected: this.module.debugSettings.outcomingMessageFilterMode === "include" } }, { attributes: { value: "exclude", label: "Exclude", selected: this.module.debugSettings.outcomingMessageFilterMode === "exclude" } }], setSettingValue: s((e) => {
        this.module.debugSettings.outcomingMessageFilterMode = e;
      }, "setSettingValue") }, { type: "text", id: "debug-outcoming-message-types", label: "Message Types", description: 'Comma-separated list of message types (e.g., "ChatRoomMessage, AccountUpdate")', setElementValue: s(() => this.module.debugSettings.outcomingMessageTypes, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.outcomingMessageTypes = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-translations", label: "Show Raw Translations", setElementValue: s(() => this.module.debugSettings.showRawTranslations, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showRawTranslations = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-file-names", label: "Show File Names", description: "Show the file name of the translation in the translation string.", setElementValue: s(() => this.module.debugSettings.showFileNames, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showFileNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-asset-names", label: "Show Raw Asset Names", setElementValue: s(() => this.module.debugSettings.showRawAssetNames, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showRawAssetNames = e;
      }, "setSettingValue") }, { type: "checkbox", id: "debug-show-raw-activity-names", label: "Show Raw Activity Names", setElementValue: s(() => this.module.debugSettings.showRawActivityNames, "setElementValue"), setSettingValue: s((e) => {
        this.module.debugSettings.showRawActivityNames = e;
      }, "setSettingValue") }], [{ type: "button", id: "test-deeplib-big-button", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        v.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button", options: { tooltip: "This is a small button", image: "Icons/Exit.png" }, size: [90, 90], onClick() {
        v.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        v.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        v.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        v.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label", label: "Label", description: "This is a label" }], [{ type: "button", id: "test-deeplib-big-button2", options: { label: "Big Button", tooltip: "This is a big button", image: "Icons/Exit.png" }, size: [405, 80], onClick() {
        v.info("Big Button Clicked");
      } }, { type: "button", id: "test-deeplib-small-button2", options: { tooltip: "This is a small button", image: "Icons/Next.png" }, size: [90, 90], onClick() {
        v.info("Small Button Clicked");
      } }, { type: "checkbox", id: "test-deeplib-checkbox2", label: "Checkbox", description: "This is a checkbox", setElementValue() {
        return true;
      }, setSettingValue(e) {
        v.info("Checkbox value:", e);
      } }, { type: "text", id: "test-deeplib-text-input2", label: "Input", description: "This is a text input", setElementValue() {
        return "Input Value";
      }, setSettingValue(e) {
        v.info("Input value:", e);
      } }, { type: "number", id: "test-deeplib-number-input2", label: "Input", description: "This is a number input", setElementValue() {
        return "123";
      }, setSettingValue(e) {
        v.info("Input value:", e);
      } }, { type: "label", id: "test-deeplib-label2", label: "Label", description: "This is a label" }, { type: "dropdown", id: "test-deeplib-dropdown", label: "Dropdown", description: "This is a dropdown", optionsList: ["Option 1", "Option 2", "Option 3"], setElementValue() {
        return "Option 2";
      }, setSettingValue(e) {
        v.info("Dropdown value:", e);
      } }]];
    }
    exit() {
      this.module.saveDebugSettings(), super.exit();
    }
  }, __name(_a7, "D"), s(_a7, "GuiDebug"), __publicField(_a7, "subscreenOptions", { name: "debug" }), _a7);
  function oe(t) {
    return t !== null && typeof t == "object" && Object.getPrototypeOf(t) === Object.prototype && !Array.isArray(t);
  }
  __name(oe, "oe");
  s(oe, "isPlainObject");
  function b(t, e, i = { concatArrays: true, matchingOnly: false }) {
    if (t === void 0) return e;
    if (e === void 0) return t;
    if (Array.isArray(t) && Array.isArray(e) && i.concatArrays) return [...t, ...e];
    if (oe(t) && oe(e)) {
      let n = { ...t }, o = i.matchingOnly ? Object.keys(e).filter((r) => r in t) : Object.keys(e);
      for (let r of o) r === "__proto__" || r === "constructor" || r === "prototype" || (n[r] = r in t ? b(t[r], e[r], i) : e[r]);
      return n;
    }
    return e;
  }
  __name(b, "b");
  s(b, "deepMerge");
  function Gt(t) {
    let e = JSON.parse(JSON.stringify(t)), i = [];
    for (; e.length > 0; ) {
      let n = Math.floor(Math.random() * e.length);
      i.push(e[n]), e.splice(n, 1);
    }
    return i;
  }
  __name(Gt, "Gt");
  s(Gt, "shuffleArray");
  function C(t, e) {
    let i = t.split("."), n = globalThis;
    for (let o = 0; o < i.length - 1; o++) n[i[o]] || (n[i[o]] = {}), n = n[i[o]];
    n[i[i.length - 1]] = e;
  }
  __name(C, "C");
  s(C, "exportToGlobal");
  function z(t, e) {
    for (; t && t !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t, e)?.get) return true;
      t = Object.getPrototypeOf(t);
    }
    return false;
  }
  __name(z, "z");
  s(z, "hasGetter");
  function wt(t, e) {
    for (; t && t !== Object.prototype; ) {
      if (Object.getOwnPropertyDescriptor(t, e)?.set) return true;
      t = Object.getPrototypeOf(t);
    }
    return false;
  }
  __name(wt, "wt");
  s(wt, "hasSetter");
  var se = s((t) => Math.round(t / 100) / 10, "byteToKB");
  function A(t, e) {
    try {
      return { ok: true, value: t() };
    } catch (i) {
      return { ok: false, error: e ? e(i) : i };
    }
  }
  __name(A, "A");
  s(A, "tryCatch");
  async function Tt(t, e) {
    try {
      return { ok: true, value: await t() };
    } catch (i) {
      return { ok: false, error: e ? e(i) : i };
    }
  }
  __name(Tt, "Tt");
  s(Tt, "tryCatchAsync");
  var c = { createButton: he, createCheckbox: fe, createInput: ye, createLabel: Ie, createCustom: ve, createDropdown: xe, createTooltip: Be, getTooltip: re, setTooltip: j, createBackNext: Ce };
  function he(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "button";
    let i;
    t.options?.image && (i = t.options.image, t.options.image = void 0);
    let n = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, o = ElementButton.Create(t.id, t?.onClick ?? (() => {
    }), b({ labelPosition: "center" }, t.options), b({ button: { classList: ["deeplib-button"], attributes: { disabled: n }, children: [i ? b({ tag: "img", attributes: { id: `${t.id}-image`, alt: "", decoding: "async", loading: "lazy", src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }, style: { "--image": `url("${i}")` } }, t.htmlOptions?.img) : void 0] } }, t.htmlOptions ?? {}));
    return m.currentElements.push([o, t]), o;
  }
  __name(he, "he");
  s(he, "elementCreateButton");
  function fe(t) {
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "checkbox";
    let i = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, n = ElementCreate(b({ tag: "label", classList: ["deeplib-checkbox-container"], attributes: { id: `${t.id}-container`, for: t.id }, children: [b({ tag: "input", classList: ["checkbox", "deeplib-input"], attributes: { type: "checkbox", id: t.id, disabled: i, checked: t?.setElementValue?.() || void 0 }, eventListeners: { change: s(function() {
      t?.setSettingValue?.(this.checked);
    }, "change") } }, t.htmlOptions?.checkbox), b({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t.id}-label` }, children: [t.label] }, t.htmlOptions?.label)] }, t.htmlOptions?.container));
    return t.description && (n.addEventListener("mouseover", function(o) {
      U.call(this, o, t.description || null);
    }), n.addEventListener("mouseout", function(o) {
      Q.call(this, o);
    })), m.currentElements.push([n, t]), n;
  }
  __name(fe, "fe");
  s(fe, "elementCreateCheckbox");
  function ve(t) {
    var _a16, _b;
    t.id ?? (t.id = ElementGenerateID()), (_a16 = t.htmlOptions).attributes ?? (_a16.attributes = {}), (_b = t.htmlOptions.attributes).id ?? (_b.id = t.id);
    let e = document.getElementById(t.htmlOptions.attributes.id);
    if (e) return e;
    t.type = "custom";
    let i = ElementCreate(t.htmlOptions);
    return m.currentElements.push([i, t]), i;
  }
  __name(ve, "ve");
  s(ve, "elementCreateCustom");
  function ye(t) {
    let e = document.getElementById(t.id);
    if (e) return e;
    let i = typeof t?.disabled == "function" ? t?.disabled() : t?.disabled, n = ElementCreate(b({ tag: "label", classList: ["deeplib-input-container"], attributes: { id: `${t.id}-container`, for: t.id }, children: [b({ tag: "input", classList: ["deeplib-input"], attributes: { type: t.type, id: t.id, placeholder: " ", disabled: i, value: t?.setElementValue?.() || void 0 }, eventListeners: { input: s(function() {
      t?.setSettingValue?.(this.value);
    }, "input") } }, t.htmlOptions?.input), t.label ? b({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t.id}-label` }, children: [t.label] }, t.htmlOptions?.label) : void 0] }, t.htmlOptions?.container));
    return t.description && (n.addEventListener("mouseover", function(o) {
      U.call(this, o, t.description || null);
    }), n.addEventListener("mouseout", function(o) {
      Q.call(this, o);
    })), m.currentElements.push([n, t]), n;
  }
  __name(ye, "ye");
  s(ye, "elementCreateInput");
  function Ie(t) {
    let e = document.getElementById(t.id);
    if (e) return e;
    t.type = "label";
    let i = ElementCreate(b({ tag: "label", classList: ["deeplib-label", "deeplib-text"], attributes: { id: t.id }, children: [t.label] }, t.htmlOptions));
    return t.description && (i.addEventListener("mouseover", function(n) {
      U.call(this, n, t.description || null);
    }), i.addEventListener("mouseout", function(n) {
      Q.call(this, n);
    })), m.currentElements.push([i, t]), i;
  }
  __name(Ie, "Ie");
  s(Ie, "elementCreateLabel");
  function xe(t) {
    t.id ?? (t.id = ElementGenerateID());
    let e = document.getElementById(`${t.id}-container`);
    if (e) return e;
    t.type = "dropdown";
    let i = ElementCreate(b({ tag: "label", classList: ["deeplib-dropdown-container"], attributes: { id: `${t.id}-container`, for: t.id }, children: [t.label ? b({ tag: "span", classList: ["deeplib-text"], attributes: { id: `${t.id}-label` }, children: [t.label] }, t.htmlOptions?.label) : void 0, ElementCreateDropdown(t.id, t.optionsList, function() {
      return t.setSettingValue?.(this.value);
    }, t.options, t.htmlOptions?.select)], eventListeners: { mouseover: s(function(n) {
      U.call(this, n, t.description || null);
    }, "mouseover"), mouseout: s(function(n) {
      Q.call(this, n);
    }, "mouseout") } }, t.htmlOptions?.container));
    return m.currentElements.push([i, t]), i;
  }
  __name(xe, "xe");
  s(xe, "elementCreateDropdown");
  function Be() {
    return ElementCreate({ tag: "div", classList: ["deeplib-tooltip", "anchor-bottom"], attributes: { id: "deeplib-tooltip" }, style: { display: "none" } });
  }
  __name(Be, "Be");
  s(Be, "elementCreateTooltip");
  function re() {
    return document.getElementById("deeplib-tooltip") ?? void 0;
  }
  __name(re, "re");
  s(re, "elementGetTooltip");
  function U(t, e) {
    let i = this.getBoundingClientRect();
    j(e, "bottom");
    let n = re();
    if (n) {
      n.offsetHeight;
      let o = n.getBoundingClientRect();
      (G.doRectsOverlap(i, o) ? "top" : "bottom") === "top" && ae("top");
    }
  }
  __name(U, "U");
  s(U, "tooltipMouseOver");
  function Q(t) {
    j(null);
  }
  __name(Q, "Q");
  s(Q, "tooltipMouseOut");
  function j(t, e = "bottom") {
    let i = document.getElementById("deeplib-tooltip");
    if (!i) return false;
    ae(e);
    let n = t == null ? null : CommonIsObject(t) && "tag" in t ? [ElementCreate(t)] : CommonIsArray(t) ? t.map((o) => CommonIsObject(o) && "tag" in o ? ElementCreate(o) : typeof o == "string" || CommonIsObject(t) && "tag" in t || o instanceof HTMLElement ? o : null).filter((o) => o !== null) : typeof t == "string" ? [t] : null;
    return n === null ? (i.childNodes.forEach((o) => o.remove()), i.style.display = "none", true) : (i.replaceChildren(...n), i.style.display = "", true);
  }
  __name(j, "j");
  s(j, "elementSetTooltip");
  function ae(t) {
    let e = document.getElementById("deeplib-tooltip");
    if (!e) return false;
    e.classList.toggle("anchor-bottom", t === "bottom"), e.classList.toggle("anchor-top", t === "top");
  }
  __name(ae, "ae");
  s(ae, "elementSetTooltipPosition");
  function Ce(t) {
    let e = document.getElementById(t.id);
    if (e) return e;
    let i = s((a) => {
      let l = document.getElementById(`${t.id}-label`);
      if (!l) return false;
      l.textContent = a;
    }, "setLabel"), n = s((a) => {
      let l = document.getElementById(`deeplib-prev-next-${t.id}-prev-button-tooltip`);
      if (!l) return false;
      l.textContent = a;
    }, "setPrevTooltip"), o = s((a) => {
      let l = document.getElementById(`deeplib-prev-next-${t.id}-next-button-tooltip`);
      if (!l) return false;
      l.textContent = a;
    }, "setNextTooltip");
    return ElementCreate({ tag: "div", classList: ["deeplib-prev-next"], attributes: { id: t.id }, children: [c.createButton({ id: `deeplib-prev-next-${t.id}-prev-button`, onClick: s(() => {
      t.back({ setLabel: i, setBackTooltip: n, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/arrow_left.svg`, tooltip: t.initialPrevTooltip } }), c.createLabel({ id: `${t.id}-label`, label: t.initialLabel, htmlOptions: { classList: ["deeplib-prev-next-label"] } }), c.createButton({ id: `deeplib-prev-next-${t.id}-next-button`, onClick: s(() => {
      t.next({ setLabel: i, setBackTooltip: n, setNextTooltip: o });
    }, "onClick"), htmlOptions: { button: { classList: ["deeplib-prev-next-button"] } }, options: { noStyling: true, image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/arrow_right.svg`, tooltip: t.initialNextTooltip } })] });
  }
  __name(Ce, "Ce");
  s(Ce, "elementPrevNext");
  var _a8;
  var k = (_a8 = class extends m {
    constructor(e) {
      super(e);
      __publicField(this, "subscreens", []);
      this.subscreens = e.subscreens;
    }
    load() {
      if (!L.instance || CurrentModule !== "DeepLibMod") {
        this.setSubscreen(this);
        return;
      }
      super.load();
      let e = c.createButton({ id: "exit", size: [90, 90], onClick: s(() => {
        this.exit();
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/exit.svg`, tooltip: d("settings.button.back_button_hint") } }), i = document.getElementById("deeplib-nav-menu");
      i && i.append(e);
      for (let o of this.subscreens) {
        if (o.options.name === "mainmenu") continue;
        let r = c.createButton({ id: `${o.options.name}-button`, onClick: s(() => {
          this.setSubscreen(o);
        }, "onClick"), size: [null, 90], options: { image: o.options.icon, label: d(`mainmenu.button.${o.options.name}`) } });
        g.appendToSettingsDiv(r);
      }
      let n = g.getMiscDiv();
      if (g.appendToSubscreen(n), _a8.options.wikiLink) {
        let o = c.createButton({ id: "deeplib-wiki-button", onClick: s(() => {
          window.open(_a8.options.wikiLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/notebook.svg`, label: d("mainmenu.button.wiki") } });
        g.appendToMiscDiv(o);
      }
      if (_a8.options.repoLink) {
        let o = c.createButton({ id: "deeplib-repo-button", onClick: s(() => {
          window.open(_a8.options.repoLink, "_blank");
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/git.svg`, label: d("mainmenu.button.repo") } });
        g.appendToMiscDiv(o);
      }
      if (_a8.options.resetSubscreen) {
        let o = c.createButton({ id: "deeplib-reset-button", onClick: s(() => {
          this.setSubscreen(_a8.options.resetSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/trash_bin.svg`, label: d("mainmenu.button.reset") } });
        g.appendToMiscDiv(o);
      }
      if (_a8.options.importExportSubscreen) {
        let o = c.createButton({ id: "deeplib-import-export-button", onClick: s(() => {
          this.setSubscreen(_a8.options.importExportSubscreen);
        }, "onClick"), size: [null, 80], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/transfer.svg`, label: d("mainmenu.button.import_export") } });
        g.appendToMiscDiv(o);
      }
      if (_a8.options.storageFullnessIndicator) {
        let r = se(u.storageSize()), a = (r / 180 * 100).toFixed(1), l = c.createButton({ id: CommonGenerateUniqueID(), size: [null, 80], options: { tooltipPosition: "left", noStyling: true, tooltip: CommonStringPartitionReplace(d("mainmenu.meter.storage_hint"), { $percentage$: `${a}` }).join(""), label: CommonStringPartitionReplace(d("mainmenu.meter.storage_label"), { $currentCapacity$: `${r}`, $maxCapacity$: "180" }).join("") }, htmlOptions: { button: { children: [{ tag: "div", attributes: { id: "deeplib-storage-meter" }, children: [{ tag: "div", attributes: { id: "deeplib-storage-bar" }, style: { width: `${a}%` } }] }] } } });
        g.appendToMiscDiv(l);
      }
      if (x("DebugModule")) {
        let o = c.createButton({ id: "deeplib-debug-button", onClick: s(() => {
          this.setSubscreen(new D(x("DebugModule")));
        }, "onClick"), size: [90, 90], options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/bug.svg` } });
        i && i.prepend(o);
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
      e ? e instanceof m ? T(e).then(() => {
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
  }, __name(_a8, "t"), s(_a8, "MainMenu"), __publicField(_a8, "options", {}), __publicField(_a8, "subscreenOptions", { name: "mainmenu", doShowExitButton: false, settingsWidth: 600 }), _a8);
  var _a9;
  var M = (_a9 = class {
    static async init(e) {
      if (_a9.initialized) return;
      _a9.initialized = true, _a9.PathToModTranslation = (() => {
        if (e?.pathToTranslationsFolder) return e.pathToTranslationsFolder.endsWith("/") ? e.pathToTranslationsFolder : `${e.pathToTranslationsFolder}/`;
      })(), _a9.DefaultLanguage = e?.defaultLanguage || _a9.DefaultLanguage;
      let i = e?.fixedLanguage ? _a9.DefaultLanguage : TranslationLanguage.toLowerCase(), n = await _a9.fetchLanguageFile(_a9.PathToLibTranslation, i);
      if (i === _a9.DefaultLanguage) _a9.LibTranslation = n;
      else {
        let r = await _a9.fetchLanguageFile(_a9.PathToLibTranslation, _a9.DefaultLanguage);
        _a9.LibTranslation = { ...r, ...n };
      }
      if (!_a9.PathToModTranslation) return;
      let o = await _a9.fetchLanguageFile(_a9.PathToModTranslation, i);
      if (i === _a9.DefaultLanguage) _a9.ModTranslation = o;
      else {
        let r = await _a9.fetchLanguageFile(_a9.PathToModTranslation, _a9.DefaultLanguage);
        _a9.ModTranslation = { ...r, ...o };
      }
    }
    static getTextMod(e) {
      return _a9.ModTranslation?.[e] || void 0;
    }
    static getTextLib(e) {
      return _a9.LibTranslation?.[e] || void 0;
    }
    static async fetchLanguageFile(e, i) {
      let n = await fetch(`${e}${i}.lang`);
      if (i !== _a9.DefaultLanguage && !n.ok) return this.fetchLanguageFile(e, _a9.DefaultLanguage);
      if (!n.ok) return {};
      let o = await n.text();
      return this.parseLanguageFile(o);
    }
    static parseLanguageFile(e) {
      let i = {}, n = e.split(`
`);
      for (let o of n) {
        let r = o.trim();
        if (!r || r.startsWith("#")) continue;
        let [a, ...l] = r.split("=");
        i[a.trim()] = l.join("=").trim();
      }
      return i;
    }
  }, __name(_a9, "t"), s(_a9, "Localization"), __publicField(_a9, "LibTranslation", {}), __publicField(_a9, "ModTranslation", {}), __publicField(_a9, "PathToModTranslation"), __publicField(_a9, "PathToLibTranslation", `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_translations/`), __publicField(_a9, "DefaultLanguage", "en"), __publicField(_a9, "initialized", false), _a9);
  var d = s((t) => M.getTextMod(t) || M.getTextLib(t) || t, "getText");
  var _a10;
  var W = (_a10 = class {
    constructor(e) {
      __publicField(this, "dialog");
      __publicField(this, "blocker");
      __publicField(this, "inputEl");
      __publicField(this, "timeoutId");
      __publicField(this, "resolve", s(() => {
      }, "resolve"));
      this.opts = e;
      e ?? (e = {}), e.closeOnBackdrop ?? (e.closeOnBackdrop = true);
      let i = `modal-prompt-${Date.now()}`, n = (CommonIsArray(e.prompt) ? e.prompt : [e.prompt]).filter((o) => o !== null) ?? [""];
      this.dialog = ElementCreate({ tag: "dialog", classList: ["deeplib-modal"], attributes: { id: this.opts.modalId ?? `modal-${Date.now()}`, role: "dialog", "aria-modal": "true", "aria-labelledby": i }, style: { fontFamily: CommonGetFontName() }, children: [{ tag: "div", classList: ["deeplib-modal-prompt-container"], children: [...n] }, { tag: "div", classList: ["deeplib-modal-prompt"], attributes: { id: i }, children: [e.input ? this.renderInput(e.input) : void 0] }, this.renderButtons()] }), this.blocker = this.createBlocker(), this.renderButtons(), document.body.append(this.createBlocker(), this.dialog), this.setupFocusTrap(), e.timeoutMs && (this.timeoutId = window.setTimeout(() => this.close("timeout"), e.timeoutMs));
    }
    show() {
      return _a10.enqueue(this);
    }
    static async alert(e, i = {}) {
      await new _a10({ prompt: e, buttons: [{ action: "close", text: d("modal.button.ok") }], timeoutMs: i.timeoutMs, escapeAction: "close", modalId: i.modalId }).show();
    }
    static async confirm(e, i = {}) {
      let [n] = await new _a10({ prompt: e, buttons: [{ text: d("modal.button.decline"), action: "decline" }, { text: d("modal.button.confirm"), action: "confirm" }], escapeAction: "decline", enterAction: "confirm", modalId: i.modalId }).show();
      return n === "confirm";
    }
    static async prompt(e, i = {}) {
      let [n, o] = await new _a10({ prompt: e, timeoutMs: 0, input: { type: "input", defaultValue: i.defaultValue }, buttons: [{ text: d("modal.button.cancel"), action: "cancel" }, { text: d("modal.button.submit"), action: "submit" }], escapeAction: "cancel", enterAction: "submit", modalId: i.modalId }).show();
      return n === "submit" ? o : null;
    }
    renderInput(e) {
      let i = document.createElement(e.type);
      return i.classList.add("deeplib-modal-input"), e.placeholder && (i.placeholder = e.placeholder), e.readOnly && (i.readOnly = true), e.defaultValue && (i.value = e.defaultValue), e.type === "textarea" && (i.rows = 5), i.addEventListener("input", () => {
        let n = e.validate?.(i.value);
        i.setCustomValidity(n || "");
      }), this.inputEl = i, i;
    }
    renderButtons() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-button-container"), (this.opts.buttons ? [...this.opts.buttons] : []).forEach((n) => {
        let o = c.createButton({ id: `deeplib-modal-${n.action}`, onClick: s(() => this.close(n.action), "onClick"), options: { disabled: n.disabled, label: n.text } });
        e.append(o);
      }), e;
    }
    createBlocker() {
      let e = document.createElement("div");
      return e.classList.add("deeplib-modal-blocker"), e.title = "Click to close", this.opts.closeOnBackdrop !== false && e.addEventListener("click", () => this.close("close")), e;
    }
    setupFocusTrap() {
      let i = Array.from(this.dialog.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')), n = i[0], o = i[i.length - 1];
      this.dialog.addEventListener("keydown", (r) => {
        if (r.key === "Tab") {
          if (i.length === 0) {
            r.preventDefault();
            return;
          }
          r.shiftKey ? document.activeElement === n && (o.focus(), r.preventDefault()) : document.activeElement === o && (n.focus(), r.preventDefault());
        } else if (r.key === "Escape") r.stopPropagation(), this.close(this.opts.escapeAction ?? "close");
        else if (r.key === "Enter") {
          if (i.some((a) => a === document.activeElement) && document.activeElement !== this.inputEl) return;
          r.preventDefault(), r.stopPropagation(), this.close(this.opts.enterAction ?? "submit");
        }
      }), window.requestAnimationFrame(() => {
        (this.inputEl || n)?.focus();
      });
    }
    close(e) {
      this.timeoutId && clearTimeout(this.timeoutId), this.dialog.close(), this.dialog.remove(), this.blocker.remove(), document.body.querySelector(".deeplib-modal-blocker")?.remove();
      let i = this.inputEl?.value ?? "";
      this.resolve([e, i]), _a10.dequeue();
    }
    static enqueue(e) {
      return _a10.queue.push(e), _a10.processing || _a10.dequeue(), new Promise((i) => e.resolve = i);
    }
    static dequeue() {
      let e = _a10.queue.shift();
      e ? (_a10.processing = true, e.dialog.show()) : _a10.processing = false;
    }
  }, __name(_a10, "t"), s(_a10, "Modal"), __publicField(_a10, "queue", []), __publicField(_a10, "processing", false), _a10);
  var _a11;
  var le = (_a11 = class extends m {
    constructor(e) {
      super();
      __publicField(this, "importExportOptions");
      this.importExportOptions = e;
    }
    load() {
      super.load();
      let e = c.createButton({ id: "deeplib-import-file-button", size: [600, 90], onClick: s(() => {
        this.dataImport("file");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/file_import.svg`, label: d("import-export.button.import_file") } });
      g.appendToSettingsDiv(e);
      let i = c.createButton({ id: "deeplib-export-file-button", size: [600, 90], onClick: s(() => {
        this.dataExport("file");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/file_export.svg`, label: d("import-export.button.export_file") } });
      g.appendToSettingsDiv(i);
      let n = c.createButton({ id: "deeplib-import-clipboard-button", size: [600, 90], onClick: s(() => {
        this.dataImport("clipboard");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/clipboard_import.svg`, label: d("import-export.button.import_clipboard") } });
      g.appendToSettingsDiv(n);
      let o = c.createButton({ id: "deeplib-export-clipboard-button", size: [600, 90], onClick: s(() => {
        this.dataExport("clipboard");
      }, "onClick"), options: { image: `${"https://ddeeplb.github.io/Themed-BC/public"}/dl_images/clipboard_export.svg`, label: d("import-export.button.export_clipboard") } });
      g.appendToSettingsDiv(o);
    }
    resize() {
      super.resize();
    }
    async dataExport(e) {
      try {
        let i = await this.getSelectedModules(f(), "export");
        if (!i) return;
        if (i.length === 0) {
          ToastManager.error("No modules selected for export.");
          return;
        }
        let n = this.buildExportPayload(i);
        if (e === "clipboard") await this.exportToClipboard(n);
        else if (e === "file" && !await this.exportToFile(n, "settings")) return;
        this.importExportOptions.onExport?.(), ToastManager.success("Data exported successfully.");
      } catch (i) {
        ToastManager.error("Data export failed."), p.error("Data export failed.", i);
      }
    }
    async dataImport(e) {
      try {
        let i = e === "clipboard" ? await this.importFromClipboard() : await this.importFromFile();
        if (i === null) return;
        if (!i) throw new Error("No data");
        if (!await this.applyImportPayload(i)) return;
        this.importExportOptions.onImport?.(), ToastManager.success("Data imported successfully.");
      } catch (i) {
        ToastManager.error("Data import failed."), p.error("Data import failed.", i);
      }
    }
    async exportToFile(e, i) {
      let n = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension, o = i.endsWith(n) ? i : i + n;
      if ("showSaveFilePicker" in window) try {
        let a = await (await window.showSaveFilePicker({ suggestedName: o, types: [{ description: "Custom Data Files", accept: { "text/plain": [n] } }] })).createWritable();
        return await a.write(e), await a.close(), true;
      } catch (r) {
        throw new Error("File save cancelled or failed: " + r.message);
      }
      else {
        let r = await W.prompt("Enter file name", { defaultValue: o });
        if (r === null) return false;
        if (r === "") throw new Error("File name cannot be empty.");
        let a = new Blob([e], { type: "text/plain" }), l = ElementCreate({ tag: "a", attributes: { href: URL.createObjectURL(a), download: r.endsWith(n) ? r : r + n } });
        return l.click(), URL.revokeObjectURL(l.href), true;
      }
    }
    async importFromFile() {
      let e = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      async function i(n) {
        if (!n.name.endsWith(e)) throw new Error(`Invalid file type. Expected a ${e} file.`);
        return new Promise((o, r) => {
          let a = new FileReader();
          a.onload = () => o(a.result), a.onerror = () => r(new Error("Failed to read file.")), a.readAsText(n);
        });
      }
      __name(i, "i");
      if (s(i, "importFromFileInternal"), "showOpenFilePicker" in window) try {
        let [n] = await window.showOpenFilePicker({ types: [{ description: "Custom Data Files", accept: { "text/plain": [e] } }], multiple: false }), o = await n.getFile();
        return await i(o);
      } catch (n) {
        throw new Error("File selection cancelled or failed: " + n.message);
      }
      else return new Promise((n, o) => {
        let r = document.createElement("input");
        r.type = "file", r.accept = e, r.onchange = async (a) => {
          let l = a.target.files?.[0];
          if (l) try {
            let y = await i(l);
            n(y);
          } catch (y) {
            o(y);
          }
          else o(new Error("No file selected."));
        }, r.click();
      });
    }
    async exportToClipboard(e) {
      return navigator.clipboard.writeText(e).catch((i) => {
        throw new Error("Failed to copy data to clipboard." + i);
      });
    }
    async importFromClipboard() {
      return W.prompt("Enter data to import").catch((e) => {
        throw new Error("Failed to read data from clipboard." + e);
      });
    }
    async getSelectedModules(e, i) {
      let n = e.filter((h) => z(h, "settings") && !!h.settings), o = Object.fromEntries(n.map((h) => [h.constructor.name, true]));
      if (n.length === 0) throw new Error("No modules to choose from.");
      let r = n.map((h) => c.createCheckbox({ id: h.constructor.name, label: d(h.constructor.name), setElementValue: s(() => o[h.constructor.name], "setElementValue"), setSettingValue: s((Y) => o[h.constructor.name] = Y, "setSettingValue") })), a = i === "import" ? "import_export.import.select_modules" : "import_export.export.select_modules";
      if (!await W.confirm([d(a), ElementCreate({ tag: "br" }), d("import_export.text.not_sure"), { tag: "div", classList: ["deeplib-modal-checkbox-container"], children: r }], { modalId: "deeplib-modal-import_export" })) return null;
      let y = Object.entries(o).filter(([h, Y]) => Y).map(([h]) => x(h)).filter((h) => !!h);
      if (y.length === 0) throw new Error("No modules selected.");
      return y;
    }
    buildExportPayload(e) {
      let i = {};
      for (let n of e) !z(n, "settings") || n.settings === null || (i[n.constructor.name] = n.settings);
      return LZString.compressToBase64(JSON.stringify(i));
    }
    async applyImportPayload(e) {
      let i = JSON.parse(LZString.decompressFromBase64(e) ?? "");
      if (!i) throw new Error("Invalid import format.");
      let n = Object.keys(i).map((r) => x(r)).filter((r) => !!r), o = await this.getSelectedModules(n, "import");
      if (!o) return false;
      if (o.length === 0) throw new Error("No modules selected.");
      for (let r of o) {
        let a = i[r.constructor.name];
        if (!a) continue;
        let l = b(r.defaultSettings, a);
        l && (r.settings = l);
      }
      return true;
    }
  }, __name(_a11, "le"), s(_a11, "GuiImportExport"), __publicField(_a11, "subscreenOptions", { name: "import-export" }), _a11);
  var _a12;
  var X = (_a12 = class {
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
    setLocalStorage(e, i) {
      localStorage.setItem(`${this.modName}_${e}`, _a12.dataCompress(i));
    }
    getLocalStorage(e) {
      let i = localStorage.getItem(`${this.modName}_${e}`);
      return i ? _a12.dataDecompress(i) : null;
    }
    load() {
      if (this.extensionStorage) {
        let e = _a12.dataDecompress(this.extensionStorage || "");
        e === null || !Object.hasOwn(e, "Version") ? this.playerStorage = { Version: "1.8.1" } : this.playerStorage = e;
      } else this.playerStorage = {};
    }
    save() {
      this.extensionStorage || (this.extensionStorage = ""), this.extensionStorage = _a12.dataCompress(this.playerStorage), ServerPlayerExtensionSettingsSync(this.modName);
    }
    storageSize() {
      return _a12.measureSize(this.extensionStorage);
    }
    static dataDecompress(e) {
      let i = LZString.decompressFromBase64(e), n = null;
      try {
        n = JSON.parse(i);
      } catch (o) {
        p.error(o);
      }
      return n;
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
  }, __name(_a12, "t"), s(_a12, "ModStorage"), __publicField(_a12, "_instance", null), _a12);
  var G = { autoSetPosition: Ge, autoSetSize: we, hide: Te, unhide: Le, hasOverflow: Se, doRectsOverlap: Ze };
  function Ge(t, e) {
    let i, n, o;
    if (Array.isArray(e)) i = e[0], n = e[1], o = e[2];
    else if (typeof e == "function") {
      let r = e();
      i = r[0], n = r[1], o = r[2];
    }
    i !== void 0 && n !== void 0 && ElementSetPosition(t, i, n, o);
  }
  __name(Ge, "Ge");
  s(Ge, "autoSetPosition");
  function we(t, e) {
    let i, n;
    if (Array.isArray(e)) i = e[0], n = e[1];
    else if (typeof e == "function") {
      let o = e();
      i = o[0], n = o[1];
    }
    i !== void 0 && n !== void 0 && ElementSetSize(t, i, n);
  }
  __name(we, "we");
  s(we, "autoSetSize");
  function Te(t) {
    let e = ElementWrap(t);
    e && (e.style.display = "none");
  }
  __name(Te, "Te");
  s(Te, "hide");
  function Le(t) {
    let e = ElementWrap(t);
    e && (e.style.display = "");
  }
  __name(Le, "Le");
  s(Le, "unhide");
  function Se(t) {
    let e = ElementWrap(t);
    if (!e) return null;
    let i = e.scrollHeight > e.clientHeight, n = e.scrollWidth > e.clientWidth;
    return { any: i || n, vertical: i, horizontal: n };
  }
  __name(Se, "Se");
  s(Se, "hasOverflow");
  function Ze(t, e) {
    return !(t.right < e.left || t.left > e.right || t.bottom < e.top || t.top > e.bottom);
  }
  __name(Ze, "Ze");
  s(Ze, "doRectsOverlap");
  var g = { getSubscreen: P, appendToSubscreen: ke, removeSubscreen: Oe, getSettingsDiv: K, appendToSettingsDiv: Me, removeSettingsDiv: Ee, getMiscDiv: J, appendToMiscDiv: We, removeMiscDiv: Fe };
  function P() {
    let t = ElementWrap("deeplib-subscreen");
    if (t) return t;
    let e = ElementCreate({ tag: "div", classList: ["deeplib-subscreen", "HideOnPopup"], attributes: { id: "deeplib-subscreen" } });
    return document.body.appendChild(e);
  }
  __name(P, "P");
  s(P, "elementGetSubscreenDiv");
  function Oe() {
    return P()?.remove();
  }
  __name(Oe, "Oe");
  s(Oe, "elementRemoveSubscreenDiv");
  function ke(...t) {
    return P()?.append(...t);
  }
  __name(ke, "ke");
  s(ke, "elementAppendToSubscreenDiv");
  function K() {
    let t = ElementWrap("deeplib-settings");
    return t || ElementCreate({ tag: "div", classList: ["deeplib-settings", "scroll-box"], attributes: { id: "deeplib-settings" } });
  }
  __name(K, "K");
  s(K, "elementGetSettingsDiv");
  function Me(...t) {
    return K()?.append(...t);
  }
  __name(Me, "Me");
  s(Me, "elementAppendToSettingsDiv");
  function Ee() {
    return K()?.remove();
  }
  __name(Ee, "Ee");
  s(Ee, "elementRemoveSettingsDiv");
  function J() {
    let t = ElementWrap("deeplib-misc");
    return t || ElementCreate({ tag: "div", classList: ["deeplib-misc"], attributes: { id: "deeplib-misc" } });
  }
  __name(J, "J");
  s(J, "elementGetMiscDiv");
  function We(...t) {
    return J()?.append(...t);
  }
  __name(We, "We");
  s(We, "elementAppendToMiscDiv");
  function Fe() {
    return J()?.remove();
  }
  __name(Fe, "Fe");
  s(Fe, "elementRemoveMiscDiv");
  var _a13;
  var V = (_a13 = class extends Array {
    constructor(e) {
      super();
      __publicField(this, "ModName", "DeepLib");
      e && (this.ModName = e);
    }
    _Log(e, ...i) {
      let n = { logLevel: e, args: [...i], date: new Date(Date.now()) }, o = navigator.userAgent.toLowerCase();
      if (o.includes("chrome") || o.includes("firefox")) {
        let r = _a13.colorizeLog(e);
        i.forEach((a) => {
          typeof a == "string" && (a = `
%c${a}`);
        }), console.log(`%c${this.ModName}:`, r, ...i);
      } else console.log(`${this.ModName}:`, ...i);
      this.push(n);
    }
    info(...e) {
      this._Log("info", ...e);
    }
    log(...e) {
      this._Log("log", ...e);
    }
    warn(...e) {
      this._Log("warn", ...e);
    }
    error(...e) {
      this._Log("error", ...e);
    }
    debug(...e) {
      this._Log("debug", ...e);
    }
    static colorizeLog(e) {
      return { info: "color: #32CCCC", log: "color: #CCCC32", warn: "color: #eec355", error: "color: #750b0b", debug: "color: #9E4BCF" }[e];
    }
  }, __name(_a13, "t"), s(_a13, "Logger"), _a13);
  var v = new V();
  function ci(t, e, i) {
    let n = ElementCreate({ tag: "div", classList: ["ChatMessage", "deeplib-message", "ChatMessageNonDialogue"], attributes: { id: t ?? `DEEPLIB_LOCAL_MESSAGE_${Date.now()}`, "data-time": ChatRoomCurrentTime(), "data-sender": Player.MemberNumber?.toString() }, children: [{ tag: "span", classList: ["deeplib-text"], innerHTML: e.replaceAll(`
	`, "") }, { tag: "br" }, { tag: "a", classList: ["deeplib-text"], attributes: { href: "#" }, innerHTML: "<b>Close (Click)</b>", eventListeners: { click: s(() => {
      n.remove();
    }, "click") } }] });
    ChatRoomAppendChat(n), i && setTimeout(() => n.remove(), i * 1e3);
  }
  __name(ci, "ci");
  s(ci, "sendLocalMessage");
  function di(t, e = void 0, i = []) {
    t && ServerSend("ChatRoomChat", { Content: "DEEPLIB_CUSTOM_ACTION", Type: "Action", Target: e ?? void 0, Dictionary: [{ Tag: 'MISSING TEXT IN "Interface.csv": DEEPLIB_CUSTOM_ACTION', Text: t }, ...i] });
  }
  __name(di, "di");
  s(di, "sendActionMessage");
  var S = { Observe: 0, AddBehavior: 1, ModifyBehavior: 5, OverrideBehavior: 10, Top: 100 };
  var _a14;
  var E = (_a14 = class {
    constructor(e, i) {
      __publicField(this, "SDK");
      __publicField(this, "patchedFunctions", /* @__PURE__ */ new Map());
      this.SDK = bcModSdk.registerMod(e, i);
    }
    initPatchableFunction(e) {
      let i = this.patchedFunctions.get(e);
      return i || (i = { name: e, hooks: [] }, this.patchedFunctions.set(e, i)), i;
    }
    hookFunction(e, i, n, o = null) {
      let r = this.initPatchableFunction(e);
      if (r.hooks.some((l) => l.hook === n)) return () => null;
      let a = this.SDK.hookFunction(e, i, n);
      return r.hooks.push({ hook: n, priority: i, module: o, removeCallback: a }), r.hooks.sort((l, y) => y.priority - l.priority), a;
    }
    patchFunction(e, i) {
      this.SDK.patchFunction(e, i);
    }
    unpatchFunction(e) {
      this.SDK.removePatches(e);
    }
    removeHookByModule(e, i) {
      let n = this.initPatchableFunction(e);
      for (let o = n.hooks.length - 1; o >= 0; o--) n.hooks[o].module === i && (n.hooks[o].removeCallback(), n.hooks.splice(o, 1));
      return true;
    }
    removeAllHooksByModule(e) {
      for (let i of this.patchedFunctions.values()) for (let n = i.hooks.length - 1; n >= 0; n--) i.hooks[n].module === e && (i.hooks[n].removeCallback(), i.hooks.splice(n, 1));
      return true;
    }
    unload() {
      this.SDK.unload();
    }
  }, __name(_a14, "E"), s(_a14, "ModSdkManager"), _a14);
  var N = { injectInline(t, e) {
    if (document.getElementById(t)) return;
    let n = document.createElement("style");
    n.id = t, n.appendChild(document.createTextNode(e)), document.head.appendChild(n);
  }, injectEmbed(t, e) {
    if (document.getElementById(t)) return;
    let n = document.createElement("link");
    n.id = t, n.rel = "stylesheet", n.href = e, document.head.appendChild(n);
  }, eject(t) {
    let e = document.getElementById(t);
    e && e.remove();
  }, reload(t, e) {
    N.eject(t), N.injectInline(t, e);
  }, async fetch(t) {
    return fetch(t).then((e) => e.text());
  } };
  var _a15;
  var ce = (_a15 = class {
    constructor(e) {
      __publicField(this, "listeners", {});
      this.channelName = e;
      I.hookFunction("ChatRoomMessageProcessHidden", 0, (i, n) => {
        if (!this.isChannelMessage(i[0])) return n(i);
        let [o, r] = i, { type: a, data: l } = o.Dictionary[0], y = this.listeners[a];
        return y && y.forEach((h) => h(l, r)), n(i);
      }, `EventChannel-${e}`);
    }
    unload() {
      Object.keys(this.listeners).forEach((e) => delete this.listeners[e]), E.prototype.removeHookByModule("ChatRoomMessageProcessHidden", `EventChannel-${this.channelName}`);
    }
    sendEvent(e, i, n = null) {
      let o = { Type: "Hidden", Content: this.channelName, Sender: Player.MemberNumber, ...n ? { Target: n } : {}, Dictionary: [{ type: e, data: i }] };
      ServerSend("ChatRoomChat", o);
    }
    registerListener(e, i) {
      let n = this.listeners[e] ?? [];
      return n.push(i), this.listeners[e] = n, () => this.unregisterListener(e, i);
    }
    unregisterListener(e, i) {
      let n = this.listeners[e];
      if (n) {
        let o = n.indexOf(i);
        o !== -1 && n.splice(o, 1);
      }
    }
    isChannelMessage(e) {
      return e && e.Type === "Hidden" && e.Content === this.channelName && e.Sender && e.Sender !== Player.MemberNumber && e.Dictionary && !!e.Dictionary[0]?.data && !!e.Dictionary[0]?.type || false;
    }
  }, __name(_a15, "ce"), s(_a15, "EventChannel"), _a15);

  // src/utilities/data.ts
  function settingsReset() {
    u.playerStorage = {};
    u.save();
  }
  __name(settingsReset, "settingsReset");
  function localSettingsLoad() {
    const data = u.getLocalStorage("LocalData");
    if (!data) {
      window.ThemedLocalData = {
        loginOptions: {
          hideDummy: false,
          hideCredits: false
        }
      };
      localSettingsSave();
    } else {
      window.ThemedLocalData = data;
    }
  }
  __name(localSettingsLoad, "localSettingsLoad");
  function localSettingsSave() {
    u.setLocalStorage("LocalData", window.ThemedLocalData);
  }
  __name(localSettingsSave, "localSettingsSave");

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
    localSettingsLoad();
    patchLoginPage();
    N.injectEmbed(ids.optionsStyle, `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/login-options.css`);
    createUI();
    const loginRunHook = I.hookFunction("LoginRun", S.Observe, (args, next) => {
      next(args);
      ElementSetPosition(ids.optionsOpen, 2e3, 1e3, "bottom-right");
      ElementSetSize(ids.optionsOpen, 90, 90);
      ElementSetSize(ids.optionsSheet, 1e3, 500);
    });
    const loginExitHook = I.hookFunction("LoginUnload", S.Observe, (args, next) => {
      loginExitHook();
      loginRunHook();
      removeUI();
      N.eject(ids.optionsStyle);
      unpatchLoginPage();
      return next(args);
    });
  }
  __name(loadLoginOptions, "loadLoginOptions");
  function createUI() {
    const loginOptions = window.ThemedLocalData.loginOptions;
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
                      localSettingsSave();
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
    const loginOptions = window.ThemedLocalData.loginOptions;
    if (loginOptions.hideDummy) {
      I.patchFunction("LoginRun", {
        "DrawCharacter(/** @type {NPCCharacter} */ (LoginCharacter), 1400, 100, 0.9);": ""
      });
      I.patchFunction("LoginDoNextThankYou", {
        "CharacterRelease(char, false);": "",
        "CharacterAppearanceFullRandom(char);": "",
        'if (InventoryGet(char, "ItemNeck") != null) InventoryRemove(char, "ItemNeck", false);': "",
        "CharacterFullRandomRestrain(char)": ""
      });
    }
    if (loginOptions.hideCredits) {
      I.patchFunction("LoginRun", {
        "if (LoginCredits) LoginDrawCredits();": "if (false) LoginDrawCredits();",
        'DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);': "",
        'DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");': ""
      });
      I.patchFunction("LoginDoNextThankYou", {
        "LoginThankYou = CommonRandomItemFromList(LoginThankYou, LoginThankYouList);": ""
      });
    }
  }
  __name(patchLoginPage, "patchLoginPage");
  function unpatchLoginPage() {
    I.unpatchFunction("LoginRun");
    I.unpatchFunction("LoginDoNextThankYou");
  }
  __name(unpatchLoginPage, "unpatchLoginPage");
  function repatchLoginPage() {
    unpatchLoginPage();
    patchLoginPage();
  }
  __name(repatchLoginPage, "repatchLoginPage");

  // src/migrators/v140_migrator.ts
  var _V140Migrator = class _V140Migrator extends ne {
    get migrationVersion() {
      return "1.4.0";
    }
    migrate() {
      const colorsData = Player.Themed.ColorsModule;
      const integrationsData = Player.Themed.IntegrationModule;
      if (colorsData) {
        if (Player.Themed.ColorsModule["primaryColor"]) {
          Player.Themed.ColorsModule.base.main = Player.Themed.ColorsModule["primaryColor"];
          delete Player.Themed.ColorsModule["primaryColor"];
        }
        if (Player.Themed.ColorsModule["accentColor"]) {
          Player.Themed.ColorsModule.base.accent = Player.Themed.ColorsModule["accentColor"];
          delete Player.Themed.ColorsModule["accentColor"];
        }
        if (Player.Themed.ColorsModule["textColor"]) {
          Player.Themed.ColorsModule.base.text = Player.Themed.ColorsModule["textColor"];
          delete Player.Themed.ColorsModule["textColor"];
        }
      }
      if (integrationsData) {
        if (Player.Themed.IntegrationModule["BC"]) {
          Player.Themed.IntegrationModule.inputs = Player.Themed.IntegrationModule["BC"];
          delete Player.Themed.IntegrationModule["BC"];
        }
        if (Player.Themed.IntegrationModule["BC_Chat"]) {
          Player.Themed.IntegrationModule.chat = Player.Themed.IntegrationModule["BC_Chat"];
          delete Player.Themed.IntegrationModule["BC_Chat"];
        }
        if (Player.Themed.IntegrationModule["BC_FriendList"]) {
          Player.Themed.IntegrationModule.friendList = Player.Themed.IntegrationModule["BC_FriendList"];
          delete Player.Themed.IntegrationModule["BC_FriendList"];
        }
        if (Player.Themed.IntegrationModule["BC_Other"]) {
          Player.Themed.IntegrationModule.scrollbar = Player.Themed.IntegrationModule["BC_Other"];
          Player.Themed.IntegrationModule.selection = Player.Themed.IntegrationModule["BC_Other"];
          delete Player.Themed.IntegrationModule["BC_Other"];
        }
        if (Player.Themed.IntegrationModule["FBC"]) {
          Player.Themed.IntegrationModule.WCE = Player.Themed.IntegrationModule["FBC"];
          delete Player.Themed.IntegrationModule["FBC"];
        }
      }
      return true;
    }
  };
  __name(_V140Migrator, "V140Migrator");
  var V140Migrator = _V140Migrator;

  // node_modules/.pnpm/color-name@2.0.0/node_modules/color-name/index.js
  var color_name_default = {
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

  // node_modules/.pnpm/color-string@2.1.0/node_modules/color-string/index.js
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
    const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
    const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
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
        rgb[i] = Number.parseInt(match[i + 1], 10);
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
    } else if (match = string.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!Object.hasOwn(color_name_default, match[1])) {
        return null;
      }
      rgb = color_name_default[match[1]];
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
    const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    const match = string.match(hsl);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const s2 = clamp(Number.parseFloat(match[2]), 0, 100);
      const l = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s2, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
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
    const r = Math.round(rgba[0] / 255 * 100);
    const g2 = Math.round(rgba[1] / 255 * 100);
    const b2 = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
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

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/conversions.js
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
  function srgbNonlinearTransform(c2) {
    const cc = c2 > 31308e-7 ? 1.055 * c2 ** (1 / 2.4) - 0.055 : c2 * 12.92;
    return Math.min(Math.max(0, cc), 1);
  }
  __name(srgbNonlinearTransform, "srgbNonlinearTransform");
  function srgbNonlinearTransformInv(c2) {
    return c2 > 0.04045 ? ((c2 + 0.055) / 1.055) ** 2.4 : c2 / 12.92;
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
    const r = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const min = Math.min(r, g2, b2);
    const max = Math.max(r, g2, b2);
    const delta = max - min;
    let h;
    let s2;
    switch (max) {
      case min: {
        h = 0;
        break;
      }
      case r: {
        h = (g2 - b2) / delta;
        break;
      }
      case g2: {
        h = 2 + (b2 - r) / delta;
        break;
      }
      case b2: {
        h = 4 + (r - g2) / delta;
        break;
      }
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s2 = 0;
    } else if (l <= 0.5) {
      s2 = delta / (max + min);
    } else {
      s2 = delta / (2 - max - min);
    }
    return [h, s2 * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s2;
    const r = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const v2 = Math.max(r, g2, b2);
    const diff = v2 - Math.min(r, g2, b2);
    const diffc = /* @__PURE__ */ __name(function(c2) {
      return (v2 - c2) / 6 / diff + 1 / 2;
    }, "diffc");
    if (diff === 0) {
      h = 0;
      s2 = 0;
    } else {
      s2 = diff / v2;
      rdif = diffc(r);
      gdif = diffc(g2);
      bdif = diffc(b2);
      switch (v2) {
        case r: {
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
      s2 * 100,
      v2 * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g2 = rgb[1];
    let b2 = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w2 = 1 / 255 * Math.min(r, Math.min(g2, b2));
    b2 = 1 - 1 / 255 * Math.max(r, Math.max(g2, b2));
    return [h, w2 * 100, b2 * 100];
  };
  convert.rgb.oklab = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g2 = srgbNonlinearTransformInv(rgb[1] / 255);
    const b2 = srgbNonlinearTransformInv(rgb[2] / 255);
    const lp = Math.cbrt(0.4122214708 * r + 0.5363325363 * g2 + 0.0514459929 * b2);
    const mp = Math.cbrt(0.2119034982 * r + 0.6806995451 * g2 + 0.1073969566 * b2);
    const sp = Math.cbrt(0.0883024619 * r + 0.2817188376 * g2 + 0.6299787005 * b2);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, aa * 100, bb * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const k2 = Math.min(1 - r, 1 - g2, 1 - b2);
    const c2 = (1 - r - k2) / (1 - k2) || 0;
    const m2 = (1 - g2 - k2) / (1 - k2) || 0;
    const y = (1 - b2 - k2) / (1 - k2) || 0;
    return [c2 * 100, m2 * 100, y * 100, k2 * 100];
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
    return color_name_default[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g2 = srgbNonlinearTransformInv(rgb[1] / 255);
    const b2 = srgbNonlinearTransformInv(rgb[2] / 255);
    const x2 = r * 0.4124564 + g2 * 0.3575761 + b2 * 0.1804375;
    const y = r * 0.2126729 + g2 * 0.7151522 + b2 * 0.072175;
    const z2 = r * 0.0193339 + g2 * 0.119192 + b2 * 0.9503041;
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
    const s2 = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t3;
    let value;
    if (s2 === 0) {
      value = l * 255;
      return [value, value, value];
    }
    const t2 = l < 0.5 ? l * (1 + s2) : l + s2 - l * s2;
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
    let s2 = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s2;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s2 *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v2 = (l + s2) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l + s2);
    return [h, sv * 100, v2 * 100];
  };
  convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s2 = hsv[1] / 100;
    let v2 = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f2 = h - Math.floor(h);
    const p2 = 255 * v2 * (1 - s2);
    const q2 = 255 * v2 * (1 - s2 * f2);
    const t = 255 * v2 * (1 - s2 * (1 - f2));
    v2 *= 255;
    switch (hi) {
      case 0: {
        return [v2, t, p2];
      }
      case 1: {
        return [q2, v2, p2];
      }
      case 2: {
        return [p2, v2, t];
      }
      case 3: {
        return [p2, q2, v2];
      }
      case 4: {
        return [t, p2, v2];
      }
      case 5: {
        return [v2, p2, q2];
      }
    }
  };
  convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s2 = hsv[1] / 100;
    const v2 = hsv[2] / 100;
    const vmin = Math.max(v2, 0.01);
    let sl;
    let l;
    l = (2 - s2) * v2;
    const lmin = (2 - s2) * vmin;
    sl = s2 * vmin;
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
    const v2 = 1 - bl;
    f2 = 6 * h - i;
    if ((i & 1) !== 0) {
      f2 = 1 - f2;
    }
    const n = wh + f2 * (v2 - wh);
    let r;
    let g2;
    let b2;
    switch (i) {
      default:
      case 6:
      case 0: {
        r = v2;
        g2 = n;
        b2 = wh;
        break;
      }
      case 1: {
        r = n;
        g2 = v2;
        b2 = wh;
        break;
      }
      case 2: {
        r = wh;
        g2 = v2;
        b2 = n;
        break;
      }
      case 3: {
        r = wh;
        g2 = n;
        b2 = v2;
        break;
      }
      case 4: {
        r = n;
        g2 = wh;
        b2 = v2;
        break;
      }
      case 5: {
        r = v2;
        g2 = wh;
        b2 = n;
        break;
      }
    }
    return [r * 255, g2 * 255, b2 * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    const c2 = cmyk[0] / 100;
    const m2 = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k2 = cmyk[3] / 100;
    const r = 1 - Math.min(1, c2 * (1 - k2) + k2);
    const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
    const b2 = 1 - Math.min(1, y * (1 - k2) + k2);
    return [r * 255, g2 * 255, b2 * 255];
  };
  convert.xyz.rgb = function(xyz) {
    const x2 = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z2 = xyz[2] / 100;
    let r;
    let g2;
    let b2;
    r = x2 * 3.2404542 + y * -1.5371385 + z2 * -0.4985314;
    g2 = x2 * -0.969266 + y * 1.8760108 + z2 * 0.041556;
    b2 = x2 * 0.0556434 + y * -0.2040259 + z2 * 1.0572252;
    r = srgbNonlinearTransform(r);
    g2 = srgbNonlinearTransform(g2);
    b2 = srgbNonlinearTransform(b2);
    return [r * 255, g2 * 255, b2 * 255];
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
    const s2 = (1.000000055 * ll - 0.089484182 * a - 1.291485538 * b2) ** 3;
    const x2 = 1.227013851 * l - 0.55779998 * m2 + 0.281256149 * s2;
    const y = -0.040580178 * l + 1.11225687 * m2 - 0.071676679 * s2;
    const z2 = -0.076381285 * l - 0.421481978 * m2 + 1.58616322 * s2;
    return [x2 * 100, y * 100, z2 * 100];
  };
  convert.oklab.rgb = function(oklab) {
    const ll = oklab[0] / 100;
    const aa = oklab[1] / 100;
    const bb = oklab[2] / 100;
    const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
    const m2 = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
    const s2 = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
    const r = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m2 + 0.2309699292 * s2);
    const g2 = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m2 - 0.3413193965 * s2);
    const b2 = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m2 + 1.707614701 * s2);
    return [r * 255, g2 * 255, b2 * 255];
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
    const c2 = Math.sqrt(a * a + b2 * b2);
    return [l, c2, h];
  };
  convert.lch.lab = function(lch) {
    const l = lch[0];
    const c2 = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c2 * Math.cos(hr);
    const b2 = c2 * Math.sin(hr);
    return [l, a, b2];
  };
  convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g2, b2] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g2 = args[1];
    const b2 = args[2];
    if (r >> 4 === g2 >> 4 && g2 >> 4 === b2 >> 4) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
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
    const r = (color & 1) * mult * 255;
    const g2 = (color >> 1 & 1) * mult * 255;
    const b2 = (color >> 2 & 1) * mult * 255;
    return [r, g2, b2];
  };
  convert.ansi256.rgb = function(args) {
    args = args[0];
    if (args >= 232) {
      const c2 = (args - 232) * 10 + 8;
      return [c2, c2, c2];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b2 = rem % 6 / 5 * 255;
    return [r, g2, b2];
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
    const r = integer >> 16 & 255;
    const g2 = integer >> 8 & 255;
    const b2 = integer & 255;
    return [r, g2, b2];
  };
  convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g2 = rgb[1] / 255;
    const b2 = rgb[2] / 255;
    const max = Math.max(Math.max(r, g2), b2);
    const min = Math.min(Math.min(r, g2), b2);
    const chroma = max - min;
    let hue;
    const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g2 - b2) / chroma % 6;
    } else if (max === g2) {
      hue = 2 + (b2 - r) / chroma;
    } else {
      hue = 4 + (r - g2) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    const s2 = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c2 = l < 0.5 ? 2 * s2 * l : 2 * s2 * (1 - l);
    let f2 = 0;
    if (c2 < 1) {
      f2 = (l - 0.5 * c2) / (1 - c2);
    }
    return [hsl[0], c2 * 100, f2 * 100];
  };
  convert.hsv.hcg = function(hsv) {
    const s2 = hsv[1] / 100;
    const v2 = hsv[2] / 100;
    const c2 = s2 * v2;
    let f2 = 0;
    if (c2 < 1) {
      f2 = (v2 - c2) / (1 - c2);
    }
    return [hsv[0], c2 * 100, f2 * 100];
  };
  convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c2 = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    if (c2 === 0) {
      return [g2 * 255, g2 * 255, g2 * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v2 = hi % 1;
    const w2 = 1 - v2;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0: {
        pure[0] = 1;
        pure[1] = v2;
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
        pure[2] = v2;
        break;
      }
      case 3: {
        pure[0] = 0;
        pure[1] = w2;
        pure[2] = 1;
        break;
      }
      case 4: {
        pure[0] = v2;
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
    mg = (1 - c2) * g2;
    return [
      (c2 * pure[0] + mg) * 255,
      (c2 * pure[1] + mg) * 255,
      (c2 * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    const c2 = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const v2 = c2 + g2 * (1 - c2);
    let f2 = 0;
    if (v2 > 0) {
      f2 = c2 / v2;
    }
    return [hcg[0], f2 * 100, v2 * 100];
  };
  convert.hcg.hsl = function(hcg) {
    const c2 = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const l = g2 * (1 - c2) + 0.5 * c2;
    let s2 = 0;
    if (l > 0 && l < 0.5) {
      s2 = c2 / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s2 = c2 / (2 * (1 - l));
    }
    return [hcg[0], s2 * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    const c2 = hcg[1] / 100;
    const g2 = hcg[2] / 100;
    const v2 = c2 + g2 * (1 - c2);
    return [hcg[0], (v2 - c2) * 100, (1 - v2) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    const w2 = hwb[1] / 100;
    const b2 = hwb[2] / 100;
    const v2 = 1 - b2;
    const c2 = v2 - w2;
    let g2 = 0;
    if (c2 < 1) {
      g2 = (v2 - c2) / (1 - c2);
    }
    return [hwb[0], c2 * 100, g2 * 100];
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

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/route.js
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

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/index.js
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

  // node_modules/.pnpm/color@5.0.0/node_modules/color/index.js
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
    return function(v2) {
      return Math.max(0, Math.min(max, v2));
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
      const colorSettings = Player.Themed.ColorsModule;
      const globalSettings = Player.Themed.GlobalModule;
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
  var _GuiColors = class _GuiColors extends m {
    constructor() {
      super(x("ColorsModule"));
      __publicField(this, "settingsBackup", {});
      __publicField(this, "colorPickerInput", false);
      _GuiColors.instance = this;
    }
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const settings = this.settings;
      const defaultSettings = x("ColorsModule").defaultSettings;
      const isBaseMode = !u.playerStorage.GlobalModule.doUseAdvancedColoring;
      const baseModeKey = /* @__PURE__ */ __name((key) => ["main", "accent", "text"].includes(key), "baseModeKey");
      const ret = [[], []];
      const themeDropdownOptions = ["dark", "light"].map((e) => ({
        attributes: {
          value: e,
          label: d("colors.setting.theme-type-" + e),
          selected: e === this.settings.themeSettings.themeType
        }
      }));
      const themeType = {
        id: "tmd-theme-type",
        type: "dropdown",
        optionsList: themeDropdownOptions,
        label: d("colors.setting.theme-type.name"),
        description: d("colors.setting.theme-type.desc"),
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
          label: d(`colors.setting.${key}.name`),
          description: d(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setSettingValue"),
          disabled: isBaseMode && !baseModeKey(typedKey),
          htmlOptions: {
            input: {
              eventListeners: {
                click: /* @__PURE__ */ __name(function(ev) {
                  if (this.type !== "color") return;
                  ev.preventDefault();
                  _GuiColors.instance.colorPickerToggle(this, d(`colors.setting.${key}.name`));
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
          label: d(`colors.setting.${key}.name`),
          description: d(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setSettingValue"),
          htmlOptions: {
            input: {
              eventListeners: {
                click: /* @__PURE__ */ __name(function(ev) {
                  if (this.type !== "color") return;
                  ev.preventDefault();
                  _GuiColors.instance.colorPickerToggle(this, d(`colors.setting.${key}.name`));
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
      const typeToggleButton = c.createButton({
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
          tooltip: d("colors.button.change_input_type")
        }
      });
      const menu = document.getElementById("deeplib-nav-menu");
      if (menu) {
        menu.prepend(typeToggleButton);
      }
      this.settingsBackup = CommonCloneDeep(this.settings);
      const settings = x("ColorsModule").settings;
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
      const settings = x("ColorsModule").settings;
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
        ColorPickerInit({
          colorState: {
            colors: [input.value || "#ffffff"],
            defaultColors: ["#ffffff"],
            opacity: [1],
            editOpacity: false
          },
          heading: title,
          shape,
          onInput: /* @__PURE__ */ __name(() => null, "onInput"),
          onExit: /* @__PURE__ */ __name(({ colors }, save) => {
            if (save) {
              ElementValue(input.id, colors[0]);
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
    I.hookFunction("AppearanceGetPreviewImageColor", S.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [c2, item, hover] = args;
      if (DialogMenuMode === "permissions" && c2.IsPlayer()) {
        let permission = "allowed";
        if (InventoryIsPermissionBlocked(c2, item.Asset.Name, item.Asset.Group.Name)) permission = "blocked";
        else if (InventoryIsPermissionLimited(c2, item.Asset.Name, item.Asset.Group.Name)) permission = "limited";
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
    I.hookFunction("DialogGetMenuButtonColor", 0, (args, next) => {
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
    I.hookFunction("DrawBackNextButton", S.Observe, (args, next) => {
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
    I.hookFunction("DrawButton", S.Observe, (args, next) => {
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
    I.hookFunction("DrawButtonHover", S.Observe, (args, next) => {
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
    I.hookFunction("DrawCheckbox", S.Observe, (args, next) => {
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
    I.hookFunction("DrawEmptyRect", S.Observe, (args, next) => {
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
    I.hookFunction("DrawImageEx", S.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (typeof args[0] !== "string") return next(args);
      if (!_Image.doColorizeImage(args[0])) return next(args);
      const [Source, Canvas, X2, Y] = args;
      let Options = args[4];
      Options ?? (Options = {});
      Options.HexColor = plainColors.accent;
      Options.FullAlpha = true;
      return next([Source, Canvas, X2, Y, Options]);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawImageEx, "hookDrawImageEx");

  // src/hooks/gui_redraw/draw_preview_box.ts
  function hookDrawPreviewBox() {
    I.hookFunction("DrawPreviewBox", S.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      const [X2, Y, Path, Description, Options] = args;
      const { Vibrating, Icons, Disabled } = Options || {};
      let { Foreground, Background, Width, Height } = Options || {};
      Width = Width || DrawAssetPreviewDefaultWidth;
      Height = Height || DrawAssetPreviewDefaultHeight;
      const Padding = 2;
      const TextGutter = Description ? 44 : 0;
      Foreground = plainColors.text;
      Background = Background || plainColors.element;
      const hover = MouseHovering(X2, Y, Width, Height);
      if (hover) Background = Background || plainColors.elementHover;
      if (Disabled) Background = Background || plainColors.elementDisabled;
      let ImageX = X2 + Padding;
      let ImageY = Y + Padding;
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
      DrawRect(X2, Y, Width, Height, Background);
      ControllerAddActiveArea(X2, Y);
      DrawEmptyRect(X2, Y, Width, Height, hover ? plainColors.accentHover : plainColors.accent);
      if (Path !== "") DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
      DrawPreviewIcons(Icons ?? [], X2, Y);
      if (Description) DrawTextFit(Description, X2 + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawPreviewBox, "hookDrawPreviewBox");

  // src/hooks/gui_redraw/draw_rect.ts
  function hookDrawRect() {
    I.hookFunction("DrawRect", S.Observe, (args, next) => {
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
    I.hookFunction("DrawRoomBackground", S.Observe, ([URL2, ...args], next) => {
      if (!doRedraw()) return next([URL2, ...args]);
      if (URL2.includes("Sheet.jpg")) {
        if (u.playerStorage.GlobalModule.doUseFlatColor) {
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
    I.hookFunction("DrawText", S.Observe, (args, next) => {
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
    I.hookFunction("DrawTextFit", S.Observe, (args, next) => {
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
    I.hookFunction("DrawTextWrap", S.Observe, (args, next) => {
      if (!doRedraw()) return next(args);
      if (!args[0]) return next(args);
      if (!args[5]) return next(args);
      const [Text, X2, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
      let [, , Y, , ,] = args;
      const isHovering = MouseHovering(X2, Y, Width, Height);
      if (!Text) return;
      ControllerAddActiveArea(X2, Y);
      if (BackColor != null) {
        if (!isHovering) {
          drawRect(X2, Y, Width, Height, BackColor, plainColors.accent);
        } else {
          drawRect(X2, Y, Width, Height, plainColors.elementHover, plainColors.accentHover);
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
        Y = Y - (LineCount - 1) * LineSpacing + Height / 2;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          if (MainCanvas.measureText(testLine).width > Width && n > 0) {
            MainCanvas.fillText(line, X2 + Width / 2, Y);
            line = words[n] + " ";
            Y += LineSpacing * 2;
          } else {
            line = testLine;
          }
        }
        MainCanvas.fillText(line, X2 + Width / 2, Y);
      } else MainCanvas.fillText(Text, X2 + Width / 2, Y + Height / 2);
      if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDrawTextWrap, "hookDrawTextWrap");

  // src/hooks/gui_redraw/element_button_create.ts
  function hookElementButtonCreate() {
    I.hookFunction(
      "ElementButton.Create",
      S.Observe,
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
    return u.playerStorage?.GlobalModule?.modEnabled && u.playerStorage.GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== "ClubCard";
  }, "doRedraw");
  var _GuiRedrawModule = class _GuiRedrawModule extends B {
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
      I.patchFunction("DialogDraw", {
        "DrawRect(1087 + offset, 550, 225, 275, bgColor);": 'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");',
        'const bgColor = disabled ? "Gray" : (hover ? "aqua" : "white");': 'const bgColor = disabled ? "%disabled" : (hover ? "%hover" : "%background");'
      });
      I.patchFunction("DrawProcessScreenFlash", {
        'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));': 'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));',
        "DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);": 'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
      });
      I.patchFunction("ChatAdminRun", {
        'const ButtonBackground = canEdit ? "White" : "#ebebe4";': 'const ButtonBackground = canEdit ? "%background" : "%disabled";'
      });
      I.patchFunction("AppearanceRun", {
        'const ButtonColor = canAccess ? "White" : "#888";': 'const ButtonColor = canAccess ? "%background" : "%disabled";',
        'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "#fff" : "#aaa", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);': 'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "%background" : "%disabled", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);',
        'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", undefined, undefined, !CanCycleColors);': 'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "%disabled", undefined, undefined, !CanCycleColors);',
        'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);': 'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "%background" : "%disabled", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);'
      });
      I.patchFunction("ExtendedItemGetButtonColor", {
        'ButtonColor = "#888888";': 'ButtonColor = "%accent";',
        'ButtonColor = Hover ? "red" : "pink";': 'ButtonColor = "%blocked";',
        'ButtonColor = Hover ? "orange" : "#fed8b1";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "green" : "lime";': 'ButtonColor = "%allowed";',
        'ButtonColor = "Red";': 'ButtonColor = "%blocked";',
        'ButtonColor = "Pink";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "Cyan" : "LightGreen";': 'ButtonColor = "%allowed";',
        'ButtonColor = Hover ? "Cyan" : "White";': 'ButtonColor = Hover ? "%hover" : "%background";'
      });
      I.patchFunction("Shop2._AssetElementDraw", {
        'options.Background = "cyan";': 'options.Background = "%hover";',
        'options.Background = "white";': 'options.Background = "%background";',
        'options.Background = "gray";': 'options.Background = "%disabled";',
        'options.Background = "pink";': 'options.Background = "%equipped";'
      });
      this.patched = true;
    }
    unpatchGui() {
      if (!this.patched) return false;
      I.unpatchFunction("DialogDraw");
      I.unpatchFunction("DrawProcessScreenFlash");
      I.unpatchFunction("ChatAdminRun");
      I.unpatchFunction("AppearanceRun");
      I.unpatchFunction("ExtendedItemGetButtonColor");
      I.unpatchFunction("Shop2._AssetElementDraw");
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
    if (Player.BCT) {
      BCT_API.HintBackColor = plainColors.element;
      BCT_API.HintBorderColor = plainColors.accent;
      BCT_API.HintForeColor = plainColors.text;
    }
  }
  __name(changeBctColors, "changeBctColors");
  function resetBctColors() {
    if (Player.BCT) {
      BCT_API.HintBackColor = "yellow";
      BCT_API.HintBorderColor = "black";
      BCT_API.HintForeColor = "black";
    }
  }
  __name(resetBctColors, "resetBctColors");
  function changeMbsColors() {
    if (typeof mbs !== "undefined" && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
      if (!u.playerStorage.IntegrationModule.MBS) return;
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
      if (!u.playerStorage.IntegrationModule.MBS)
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
      const isEnabled = u.playerStorage.GlobalModule.modEnabled;
      N.injectEmbed("tmd-style", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/themed.css`);
      if (!isEnabled) return;
      N.injectInline("tmd-root", composeRoot());
      N.injectEmbed("tmd-chat-room-search", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/chatroom_search.css`);
      N.injectEmbed("tmd-preference", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/preference.css`);
      N.injectEmbed("tmd-misc", `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/misc.css`);
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        if (!u.playerStorage.IntegrationModule[id]) return;
        N.injectEmbed(id, `${"https://ddeeplb.github.io/Themed-BC/public"}/styles/${id}.css`);
      });
    },
    ejectAll() {
      N.eject("tmd-root");
      N.eject("tmd-style");
      N.eject("tmd-chat-room-search");
      N.eject("tmd-preference");
      N.eject("tmd-misc");
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        N.eject(id);
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
  var _ColorsModule = class _ColorsModule extends B {
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
      p.info("Reloading theme");
      const themeType = x("ColorsModule").settings.themeSettings.themeType;
      document.body.dataset.tmdThemeType = themeType;
      _Color.composeRoot();
      BcStyle.reloadAll();
      changeModColors();
      x("GuiRedrawModule").toggleGuiPatches();
    }
  };
  __name(_ColorsModule, "ColorsModule");
  var ColorsModule = _ColorsModule;

  // src/modules/commands.ts
  var _CommandsModule = class _CommandsModule extends B {
    load() {
      CommandCombine([
        {
          Tag: "share-theme",
          Description: "[member number]: Shares your theme with other people that have Themed installed!",
          Action(args) {
            if (!args) return x("ShareModule").share(void 0);
            const targetNumber = parseInt(args, 10);
            const target = ChatRoomCharacter.find((c2) => c2.MemberNumber == targetNumber);
            if (!target)
              ci("theme-share-error", `No character with MemberNumber ${targetNumber} found!`);
            else
              x("ShareModule").share(target.MemberNumber);
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
  var _GuiGlobal = class _GuiGlobal extends m {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = x("GlobalModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-global-${key}`,
          type: "checkbox",
          label: d(`settings.setting.${typedKey}.name`),
          description: d(`settings.setting.${typedKey}.desc`),
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
  var _GlobalModule = class _GlobalModule extends B {
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
      I.hookFunction(
        "ChatRoomCurrentTime",
        S.Observe,
        (args, next) => {
          if (!this.settings.doShowLocaleTime) return next(args);
          const currentTime = new Date(Date.now());
          return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
        ModuleCategory.Global
      );
      I.hookFunction(
        "DialogDraw",
        S.Observe,
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
      I.hookFunction(
        "AppearanceRun",
        S.Observe,
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
      I.hookFunction(
        "ChatRoomSync",
        S.Observe,
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
  var _GuiIntegration = class _GuiIntegration extends m {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = x("IntegrationModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-integration-${key}`,
          type: "checkbox",
          label: d(`integration.setting.${key}.name`),
          description: d(`integration.setting.${key}.desc`),
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
  var _IntegrationModule = class _IntegrationModule extends B {
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

  // src/utilities/console.ts
  var logger = new V("Themed");

  // src/screens/profiles.ts
  var _GuiProfiles = class _GuiProfiles extends m {
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
        parent: g.getSubscreen()
      });
      for (let i = 0; i < 3; i++) {
        const profileId = i + 1;
        const profileName = this.settings[profileId].name || d("profiles.text.profile") + ` ${profileId}`;
        const profileElement = ElementCreate({
          tag: "div",
          attributes: {
            id: `tmd-profile-${profileId}`
          },
          classList: ["tmd-profile"],
          children: [
            c.createLabel({
              id: `tmd-profile-label-${profileId}`,
              label: profileName
            }),
            this.createColorShowcase(profileId),
            {
              tag: "div",
              classList: ["tmd-profile-buttons"],
              children: [
                c.createButton({
                  id: `tmd-profiles-profile-save-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesSaving(profileId), "onClick"),
                  options: {
                    label: d("profiles.button.save")
                  }
                }),
                c.createButton({
                  id: `tmd-profiles-profile-load-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesLoading(profileId), "onClick"),
                  options: {
                    label: d("profiles.button.load"),
                    disabled: !this.profileExists(profileId)
                  }
                }),
                c.createButton({
                  id: `tmd-profiles-profile-delete-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesDeleting(profileId), "onClick"),
                  options: {
                    label: d("profiles.button.delete"),
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
      const name = await W.prompt(d("profiles.prompt"));
      if (name === null) return;
      const storage = u.playerStorage;
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
      ToastManager.success(`${d("profiles.text.profile")} ${display} ${d("profiles.text.has_been_saved")}`);
      this.updateProfileLabel(profileId);
      this.updateProfileButtons(profileId);
      this.updateProfileColorShowcase(profileId);
    }
    handleProfilesLoading(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.error(`${d("profiles.text.profile")} ${profileId} ${d("profiles.text.doesnt_exist")}`);
        return;
      }
      const data = this.settings[profileId].data;
      u.playerStorage = CommonCloneDeep({
        ...u.playerStorage,
        GlobalModule: data.GlobalModule,
        ColorsModule: data.ColorsModule,
        IntegrationModule: data.IntegrationModule
      });
      const name = this.settings[profileId].name;
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${d("profiles.text.profile")} ${display} ${d("profiles.text.has_been_loaded")}`);
      ColorsModule.reloadTheme();
    }
    handleProfilesDeleting(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.info(`${d("profiles.text.profile")} ${profileId} ${d("profiles.text.doesnt_exist")}`);
        return;
      }
      const name = this.settings[profileId].name;
      this.settings[profileId] = {
        name: "",
        data: {}
      };
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${d("profiles.text.profile")} ${display} ${d("profiles.text.has_been_deleted")}`);
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
      const display = name ? name : `${d("profiles.text.profile")} ${profileId}`;
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
      const colors = Object.entries(profile.data.ColorsModule.base);
      return ElementCreate({
        tag: "div",
        classList: ["tmd-profile-color-showcase"],
        attributes: {
          id: `tmd-profile-color-showcase-${profileId}`
        },
        children: colors.map(([key, value]) => {
          const isBaseMode = !profile.data.GlobalModule.doUseAdvancedColoring;
          const baseModeKey = /* @__PURE__ */ __name((key2) => ["main", "accent", "text"].includes(key2), "baseModeKey");
          if (isBaseMode && !baseModeKey(key)) {
            return;
          }
          return c.createButton({
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
              tooltip: d(`colors.setting.${key}.name`)
            }
          });
        })
      });
    }
    isValidProfileId(id) {
      if (id < 1 || id > 3) {
        logger.warn(`Invalid profile id ${id}`);
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
  var _ProfilesModule = class _ProfilesModule extends B {
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
        GlobalModule: x("GlobalModule").defaultSettings,
        ColorsModule: x("ColorsModule").defaultSettings,
        IntegrationModule: x("IntegrationModule").defaultSettings
      };
      const data = u.playerStorage?.ProfilesModule || {};
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (!data[profileIndex] || Object.keys(data[profileIndex]).length === 0) {
          data[profileIndex] = {
            data: {},
            name: ""
          };
        }
        if (Object.keys(data[profileIndex].data).length > 0)
          data[profileIndex].data = b(profileDefaults, data[profileIndex].data);
      }
      return data;
    }
    load() {
    }
  };
  __name(_ProfilesModule, "ProfilesModule");
  var ProfilesModule = _ProfilesModule;

  // src/modules/share.ts
  var _ShareModule = class _ShareModule extends B {
    constructor() {
      super(...arguments);
      __publicField(this, "channel", null);
    }
    load() {
      this.channel = new ce("share");
      this.channel.registerListener("ThemedTheme", (data, sender) => {
        const theme = data.Theme;
        const version = data.ThemeVersion;
        const settings = data.Settings;
        const senderName = CharacterNickname(sender);
        const prompt = d("modal.prompt.share").replace("$Sender", `${senderName} (${sender.MemberNumber})`).replace("$SenderPronoun", CharacterPronoun(sender, "Possessive", false)).split("<br>").map((str) => ({
          tag: "span",
          children: [str]
        }));
        const shareNotification = d("modal.prompt.chat_share_notification").replace("$Sender", `${senderName} (${sender.MemberNumber})`);
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
            c.createButton({
              id: ElementGenerateID(),
              htmlOptions: {
                button: {
                  classList: ["modal-button"]
                }
              },
              options: {
                label: d("modal.button.show")
              },
              onClick: /* @__PURE__ */ __name(() => {
                if (!version || version !== Player.Themed.Version) {
                  ci("theme-not-up-to-date", `Theme sent by ${senderName} is not up-to-date!`);
                  return;
                }
                W.confirm(prompt).then((result) => {
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
      Player.Themed.ColorsModule = data;
      Player.Themed.GlobalModule.doUseAdvancedColoring = settings.doUseAdvancedColoring;
      u.save();
      ColorsModule.reloadTheme();
    }
    share(target) {
      ci("theme-share", "Shared theme with " + (target ? CharacterNickname(ChatRoomCharacter.find((c2) => c2.MemberNumber == target)) : "everyone"));
      di(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, "Possessive", false)} Themed theme!`, target);
      this.channel?.sendEvent("ThemedTheme", {
        Theme: Player.Themed.ColorsModule,
        Settings: Player.Themed.GlobalModule,
        ThemeVersion: Player.Themed.Version
      });
    }
  };
  __name(_ShareModule, "ShareModule");
  var ShareModule = _ShareModule;

  // src/migrators/deeplib_migrator.ts
  var _DeeplibMigrator = class _DeeplibMigrator extends ne {
    get migrationVersion() {
      return "1.6.0";
    }
    migrate() {
      Player.Themed.GlobalModule.modEnabled = Player.Themed.GlobalModule.themedEnabled;
      delete Player.Themed.GlobalModule.themedEnabled;
      ColorsModule.reloadTheme();
    }
  };
  __name(_DeeplibMigrator, "DeeplibMigrator");
  var DeeplibMigrator = _DeeplibMigrator;

  // src/screens/reset.ts
  var _GuiReset = class _GuiReset extends m {
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
          c.createLabel({
            id: "themed-reset-label-perma_reset_of_mod_data",
            label: d("reset.label.perma_reset_of_mod_data")
          }),
          {
            tag: "br"
          },
          c.createLabel({
            id: "themed-reset-label-warning",
            label: d("reset.label.warning")
          }),
          c.createLabel({
            id: "themed-reset-label-if_u_confirm_perma_reset",
            label: d("reset.label.if_u_confirm_perma_reset")
          }),
          {
            tag: "br"
          },
          c.createLabel({
            id: "themed-reset-label-youll_able_to_use_mod",
            label: d("reset.label.youll_able_to_use_mod")
          }),
          {
            tag: "br"
          },
          c.createLabel({
            id: "themed-reset-label-action_cannot_be_undone",
            label: d("reset.label.action_cannot_be_undone")
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
              c.createButton({
                id: "tmd-reset-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.confirm();
                  timer?.();
                }, "onClick"),
                options: {
                  label: `${d("reset.button.confirm")} (${timeToConfirm})`
                },
                disabled: true
              }),
              c.createButton({
                id: "tmd-cancel-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.exit();
                  timer?.();
                }, "onClick"),
                options: {
                  label: d("reset.button.cancel")
                }
              })
            ]
          }
        ],
        parent: g.getSubscreen()
      });
      const timer = TimerCreate(() => {
        timeToConfirm--;
        const button = ElementWrap("tmd-reset-button");
        const buttonLabel = button?.querySelector(".button-label");
        if (buttonLabel) {
          buttonLabel.textContent = `${d("reset.button.confirm")} (${timeToConfirm})`;
        }
        if (timeToConfirm <= 0) {
          if (button && buttonLabel) {
            button.disabled = false;
            buttonLabel.textContent = d("reset.button.confirm");
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
      for (const module of f()) {
        module.registerDefaultSettings(u.playerStorage);
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
      GUI: new L({
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
      VersionModule: new R({
        newVersionMessage: changelog,
        migrators
      })
    };
    return st({
      beforeLogin: /* @__PURE__ */ __name(() => loadLoginOptions(), "beforeLogin"),
      initFunction: /* @__PURE__ */ __name(() => {
        ColorsModule.reloadTheme();
      }, "initFunction"),
      modName: "Themed",
      modRepository: "https://github.com/dDeepLb/Themed-BC",
      mainMenuOptions: {
        importExportSubscreen: new le({
          customFileExtension: ".tmd",
          onImport() {
            u.save();
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
//# sourceMappingURL=themed.js.map

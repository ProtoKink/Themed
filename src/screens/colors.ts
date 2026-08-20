import { BaseSubscreen, getModule, getText, modStorage, SubscreenOptions } from 'bc-deeplib/deeplib';
import { BaseColorsModel, ColorsSettingsModel } from '../models/colors';
import { ColorsModule } from '../modules/colors';
import { _Color } from '../utilities/color';
import { Dropdown, Input, SettingElement } from 'bc-deeplib/base/elements_typings';

type ColorGroup = 'base' | 'special';

export class GuiColors extends BaseSubscreen {
  static instance: GuiColors;
  settingsBackup: ColorsSettingsModel = {} as ColorsSettingsModel;
  colorPickerInput: boolean = false;

  constructor() {
    super(getModule('ColorsModule'));
    GuiColors.instance = this;
  }

  static override subscreenOptions: SubscreenOptions = {
    name: 'colors',
    icon: `${PUBLIC_URL}/images/palette.svg`
  };

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const settings = this.settings;
    const isBaseMode = !modStorage.playerStorage.GlobalModule.doUseAdvancedColoring;
    const baseModeKey = (key: keyof BaseColorsModel) => ['main', 'accent', 'text'].includes(key);

    const themeDropdownOptions: Omit<HTMLOptions<'option'>, 'tag'>[] = ['dark', 'light']
      .map(e => ({
        attributes: {
          value: e,
          label: getText('colors.setting.theme-type-' + e),
          selected: e === this.settings.themeSettings.themeType
        }
      }));
    const themeType: Dropdown = {
      id: 'tmd-theme-type',
      type: 'dropdown',
      optionsList: themeDropdownOptions,
      label: getText('colors.setting.theme-type.name'),
      description: getText('colors.setting.theme-type.desc'),
      setSettingValue(val) {
        settings.themeSettings.themeType = val as 'dark' | 'light';
        ColorsModule.reloadTheme();
      },
    };

    const baseInputs = this.createColorInputs('base', (key) =>
      isBaseMode && !baseModeKey(key as keyof BaseColorsModel)
    ).sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0));

    return [
      [themeType, ...baseInputs],
      this.createColorInputs('special'),
    ];
  }

  load(): void {
    super.load();

    this.settingsBackup = CommonCloneDeep(this.settings);

    this.bindColorInputListeners('base');
    this.bindColorInputListeners('special');
  }

  exit(): void {
    if (this.colorPickerInput) {
      ColorPickerExit(true);
      ElementWrap('tmd-colors-color-picker-backdrop')?.remove();
      this.colorPickerInput = false;
      return;
    }

    this.restoreInvalidColors('base');
    this.restoreInvalidColors('special');

    super.exit();
  }

  unload(): void {
    ColorPickerExit(true);
    super.unload();
  }

  resize(): void {
    super.resize();
    ColorPickerResize(false);
  }

  private createColorInputs(group: ColorGroup, isDisabled?: (key: string) => boolean): Input[] {
    const defaultSettings = getModule('ColorsModule').defaultSettings;

    return Object.entries(this.settings[group]).map(([key, value]) => {
      const defaults = defaultSettings[group] as Record<string, string>;

      return <Input>{
        id: key,
        type: 'color',
        label: getText(`colors.setting.${key}.name`),
        description: getText(`colors.setting.${key}.desc`),
        setElementValue: () => value ?? defaults[key],
        setSettingValue: () => value ?? defaults[key],
        disabled: isDisabled?.(key) ?? false,
        htmlOptions: {
          input: {
            eventListeners: {
              click: function (ev) {
                if (this.type !== 'color') return;
                ev.preventDefault();
                GuiColors.instance.colorPickerToggle(this, getText(`colors.setting.${key}.name`), group);
              }
            }
          } as Omit<HTMLOptions<'input'>, 'tag'>
        }
      };
    });
  }

  private bindColorInputListeners(group: ColorGroup): void {
    const settings = getModule('ColorsModule').settings;

    Object.keys(this.settings[group]).forEach((key) => {
      (ElementWrap(key) as HTMLInputElement | null)?.addEventListener('input', function () {
        if (!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
          return;
        }

        this.setCustomValidity('');
        (settings[group] as Record<string, string>)[key] = this.value;
        ColorsModule.reloadTheme();
      });
    });
  }

  private restoreInvalidColors(group: ColorGroup): void {
    const settings = getModule('ColorsModule').settings;

    Object.keys(this.settings[group]).forEach((key) => {
      const input = ElementWrap(key) as HTMLInputElement | null;
      if (!input || _Color.isValidHex(input.value)) return;

      (settings[group] as Record<string, string>)[key] =
        (this.settingsBackup[group] as Record<string, string>)[key];
    });
  }

  private applyPickedColor(input: HTMLInputElement, group: ColorGroup, color: string): void {
    ElementValue(input.id, color);

    if (!_Color.isValidHex(color)) {
      input.setCustomValidity('Invalid hex color');
      return;
    }

    input.setCustomValidity('');
    (getModule('ColorsModule').settings[group] as Record<string, string>)[input.id] = color;
    ColorsModule.reloadTheme();
  }

  private colorPickerToggle(input: HTMLInputElement, title: string, group: ColorGroup) {
    if (!this.colorPickerInput) {
      const paddingTop = 75;
      const paddingRight = 2000 - (1815 + 90);
      const shape: [number, number, number, number] = [
        2000 - ColorPicker.defaultShape[2] - paddingRight + 25,
        paddingTop,
        ColorPicker.defaultShape[2],
        1000 - paddingTop * 2,
      ];
      const color = CommonIsColor(input.value) ? input.value : '#ffffff';
      ColorPickerInit({
        colorState: {
          colors: [color],
          defaultColors: ['#ffffff'],
          opacity: [1],
          editOpacity: false,
        },
        heading: title,
        shape,
        onInput: () => null,
        onExit: ({ colors }, save) => {
          if (save) {
            this.applyPickedColor(input, group, colors[0]);
          }
          this.colorPickerInput = false;
          ElementWrap('tmd-colors-color-picker-backdrop')?.toggleAttribute('hidden', true);
        },
      }).then(colorPicker => {
        let backdrop = ElementWrap('tmd-colors-color-picker-backdrop');
        if (!backdrop) {
          ElementCreate({
            tag: 'div',
            attributes: { id: 'tmd-colors-color-picker-backdrop' },
            children: [colorPicker],
            parent: document.body,
            style: { 'background-color': 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', position: 'absolute' },
          });
        } else {
          backdrop.replaceChildren(colorPicker);
          backdrop.toggleAttribute('hidden', false);
        }
        ColorPickerResize(false);
      });
    } else {
      ColorPickerHide();
      ElementWrap('tmd-colors-color-picker-backdrop')?.toggleAttribute('hidden', true);
    }
    this.colorPickerInput = !this.colorPickerInput;
  }
}

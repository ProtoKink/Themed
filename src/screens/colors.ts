import { advElement, BaseSubscreen, getModule, getText, modStorage, SubscreenOptions } from 'bc-deeplib/deeplib';
import { BaseColorsModel, ColorsSettingsModel, SpecialColorsModel } from '../models/colors';
import { ColorsModule } from '../modules/colors';
import { _Color } from '../utilities/color';
import { Dropdown, Input, SettingElement } from 'bc-deeplib/base/elements_typings';

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
    const defaultSettings = getModule('ColorsModule').defaultSettings;
    const isBaseMode = !modStorage.playerStorage.GlobalModule.doUseAdvancedColoring;
    const baseModeKey = (key: keyof BaseColorsModel) => ['main', 'accent', 'text'].includes(key);

    const ret: SettingElement[][] = [[], []];

    const themeDropdownOptions: Omit<HTMLOptions<"option">, "tag">[] = ['dark', 'light']
      .map(e => ({
        attributes: {
          value: e,
          label: getText('colors.setting.theme-type-' + e),
          selected: e === this.settings.themeSettings.themeType
        }
      }))
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
    }
    ret[0].push(themeType)

    ret[0].push(...Object.entries(this.settings.base).map(([key, value]) => {
      const typedKey = key as keyof BaseColorsModel;

      return <Input>{
        id: key,
        type: 'color',
        label: getText(`colors.setting.${key}.name`),
        description: getText(`colors.setting.${key}.desc`),
        setElementValue: () => value ?? defaultSettings.base[typedKey],
        setSettingValue: () => value ?? defaultSettings.base[typedKey],
        disabled: isBaseMode && !baseModeKey(typedKey),
        htmlOptions: {
          input: {
            eventListeners: {
              click: function(ev) {
                if (this.type !== 'color') return;
                ev.preventDefault();
                GuiColors.instance.colorPickerToggle(this, getText(`colors.setting.${key}.name`));
              }
            }
          } as Omit<HTMLOptions<'input'>, 'tag'>
        }
      }
    })
      .sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0)) as Input[])

    ret[1].push(...Object.entries(this.settings.special).map(([key, value]) => {
      const typedKey = key as keyof SpecialColorsModel;

      return <Input>{
        id: key,
        type: 'color',
        label: getText(`colors.setting.${key}.name`),
        description: getText(`colors.setting.${key}.desc`),
        setElementValue: () => value ?? defaultSettings.special[typedKey],
        setSettingValue: () => value ?? defaultSettings.special[typedKey],
        htmlOptions: {
          input: {
            eventListeners: {
              click: function(ev) {
                if (this.type !== 'color') return;
                ev.preventDefault();
                GuiColors.instance.colorPickerToggle(this, getText(`colors.setting.${key}.name`));
              }
            }
          } as Omit<HTMLOptions<'input'>, 'tag'>
        }
      };
    }));

    return ret;
  }

  load(): void {
    super.load();

    this.settingsBackup = CommonCloneDeep(this.settings);

    const settings = getModule('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement)?.addEventListener('input', function () {
        if (!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          const typedKey = key as keyof BaseColorsModel;
          settings.base[typedKey] = this.value;
        }

        ColorsModule.reloadTheme();
      });
    });

    Object.entries(this.settings.special).forEach(([key]) => {
      (document.getElementById(key) as HTMLInputElement)?.addEventListener('input', function () {
        if (!_Color.isValidHex(this.value)) {
          this.setCustomValidity('Invalid hex color');
        } else {
          this.setCustomValidity('');
          const typedKey = key as keyof SpecialColorsModel;
          settings.special[typedKey] = this.value;
        }

        ColorsModule.reloadTheme();
      });
    });
  }

  exit(): void {
    if (this.colorPickerInput) {
      ColorPickerExit(true);
      document.getElementById("tmd-colors-color-picker-backdrop")?.remove();
      this.colorPickerInput = false;
      return;
    }

    
    const settings = getModule('ColorsModule').settings;

    Object.entries(this.settings.base).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if (!input) return;

      if (!_Color.isValidHex(input.value)) {
        const typedKey = key as keyof BaseColorsModel;
        settings.base[typedKey] = this.settingsBackup.base[typedKey];
      }
    });

    Object.entries(this.settings.special).forEach(([key]) => {
      const input = document.getElementById(key) as HTMLInputElement;

      if (!input) return;

      if (!_Color.isValidHex(input.value)) {
        const typedKey = key as keyof SpecialColorsModel;
        settings.special[typedKey] = this.settingsBackup.special[typedKey];
      }
    });

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

  private colorPickerToggle(input: HTMLInputElement, title: string) {
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
            ElementValue(input.id, colors[0]);
          }
          this.colorPickerInput = false;
          document.getElementById('tmd-colors-color-picker-backdrop')?.toggleAttribute('hidden', true);
        },
      }).then(colorPicker => {
        let backdrop = document.getElementById('tmd-colors-color-picker-backdrop');
        if (!backdrop) {
          ElementCreate({
            tag: 'div',
            attributes: { id: 'tmd-colors-color-picker-backdrop' },
            children: [colorPicker],
            parent: document.body,
            style: { 'background-color': 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', position: 'absolute' },
          });
        } else {
          backdrop.toggleAttribute('hidden', false);
        }
      });
    } else {
      ColorPickerHide();
      document.getElementById('tmd-colors-color-picker-backdrop')?.toggleAttribute('hidden', true);
    }
    this.colorPickerInput = !this.colorPickerInput;
  }
  
}

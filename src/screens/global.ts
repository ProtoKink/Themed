import { BaseSubscreen, getModule, getText, SubscreenOptions } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../models/global';
import { GlobalModule } from '../modules/global';
import { SettingElement } from 'bc-deeplib/base/elements_typings';
import { ColorsModule } from '../modules/colors';

export class GuiGlobal extends BaseSubscreen {

  protected static override subscreenOptions: SubscreenOptions = {
    name: 'global',
    icon: `${PUBLIC_URL}/images/cog.svg`
  };

  get settings(): GlobalSettingsModel {
    return super.settings as GlobalSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const defaultSettings = getModule('GlobalModule').defaultSettings;

    return [Object.entries(this.settings).map(([key, value]) => {
      const typedKey = key as keyof GlobalSettingsModel;
      return {
        id: `tmd-global-${key}`,
        type: 'checkbox',
        label: getText(`settings.setting.${typedKey}.name`),
        description: getText(`settings.setting.${typedKey}.desc`),
        setElementValue: () => (value ?? defaultSettings[typedKey]) as boolean,
        setSettingValue: (val) => {
          this.settings[typedKey] = val;
          ColorsModule.reloadTheme();
        }
      };
    })];
  }

  load(): void {
    super.load();
  }
}

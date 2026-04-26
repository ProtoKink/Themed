import { BaseSubscreen, getModule, getText, SubscreenOptions } from 'bc-deeplib/deeplib';
import { IntegrationSettingsModel } from '../models/integration';
import { IntegrationModule } from '../modules/integration';
import { SettingElement } from 'bc-deeplib/base/elements_typings';
import { ColorsModule } from '../modules/colors';

export class GuiIntegration extends BaseSubscreen {
  
  protected static override subscreenOptions: SubscreenOptions = {
    name: 'integration',
    icon: `${PUBLIC_URL}/images/stars.svg`
  };

  get settings(): IntegrationSettingsModel {
    return super.settings as IntegrationSettingsModel;
  }

  get pageStructure(): SettingElement[][] {
    const defaultSettings = getModule('IntegrationModule').defaultSettings;

    return [Object.entries(this.settings).map(([key, value]) => { 
      const typedKey = key as keyof IntegrationSettingsModel;

      return {
        id: `tmd-integration-${key}`,
        type: 'checkbox',
        label: getText(`integration.setting.${key}.name`),
        description: getText(`integration.setting.${key}.desc`),
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

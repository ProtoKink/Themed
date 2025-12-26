import { BaseModule, deepMerge, getModule, modStorage, registerModule, Subscreen } from 'bc-deeplib/deeplib';
import { ProfileSaveModel, ProfilesSettingsModel } from '../models/profiles';
import { GuiProfiles } from '../screens/profiles';

export class ProfilesModule extends BaseModule {
  get settings(): ProfilesSettingsModel {
    return super.settings as ProfilesSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get settingsScreen(): Subscreen | null {
    return GuiProfiles;
  }

  get defaultSettings() {
    const profileDefaults: ProfileSaveModel = {
      GlobalModule: getModule('GlobalModule').defaultSettings,
      ColorsModule: getModule('ColorsModule').defaultSettings,
      IntegrationModule: getModule('IntegrationModule').defaultSettings
    };

    const data = modStorage.playerStorage?.ProfilesModule || {};
    
    for (let i = 0; i < 3; i++) {
      const profileIndex = i + 1;
      if (!data[profileIndex] || Object.keys(data[profileIndex]).length === 0) {
        data[profileIndex] = {
          data: <ProfileSaveModel>{},
          name: ''
        };
      }
      
      if (Object.keys(data[profileIndex].data).length > 0) 
        data[profileIndex].data = deepMerge(profileDefaults, data[profileIndex].data);
    }

    return data;
  }

  load(): void {
  }
}

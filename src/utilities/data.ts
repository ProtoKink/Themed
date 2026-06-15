import { LocalSettingsModel } from '../models/local';
import { deepMerge, modStorage } from 'bc-deeplib/deeplib';
import { SettingsModel } from '../models/settings';

export function settingsReset() {
  modStorage.playerStorage = <SettingsModel>{};
  modStorage.save();
}

const defaultLocalSettings: LocalSettingsModel = {
  loginOptions: {
    hideDummy: false,
    hideCredits: false,
  },
};

let localSettings: LocalSettingsModel | null = null;

export function loadLocalSettings(): LocalSettingsModel {
  localSettings = modStorage.getLocalStorage('LocalData') as LocalSettingsModel | null;

  if (!localSettings) {
    modStorage.setLocalStorage('LocalData', defaultLocalSettings);
    localSettings = defaultLocalSettings;
  } else {
    localSettings = deepMerge(defaultLocalSettings, localSettings);
  }

  return localSettings;
}

export function getLocalSettings(): LocalSettingsModel {
  return localSettings as LocalSettingsModel;
}

export function saveLocalSettings() {
  modStorage.setLocalStorage('LocalData', localSettings as LocalSettingsModel);
}
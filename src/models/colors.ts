import { BaseSettingsModel as DL_BaseSettingsModel } from 'bc-deeplib/deeplib';

export type ColorsSettingsModel = DL_BaseSettingsModel &  {
  themeSettings: ThemeSettingsModel
  base: BaseColorsModel;
  special: SpecialColorsModel;
};

export type ThemeSettingsModel = {
  themeType: 'dark' | 'light';
}

export type BaseColorsModel = {
  main: string;
  accent: string;
  accentHover: string;
  accentDisabled: string;
  element: string;
  elementHover: string;
  elementDisabled: string;
  elementHint: string;
  text: string;
  textDisabled: string;
  textShadow: string;
};

export type SpecialColorsModel = {
  invalid: string;
  equipped: string;
  crafted: string;
  blocked: string;
  limited: string;
  allowed: string;
  roomFriend: string;
  roomBlocked: string;
  roomGame: string;
};

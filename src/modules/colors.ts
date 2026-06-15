import Color from 'color';
import { ColorsSettingsModel } from '../models/colors';
import { GuiColors } from '../screens/colors';
import { _Color } from '../utilities/color';
import { changeModColors } from '../utilities/integration';
import { BcStyle } from '../utilities/style';
import { BaseModule, getModule, modLogger, Subscreen } from 'bc-deeplib/deeplib';

const primaryColor = Color('#202020');
const elementColor = primaryColor.lighten(0.2);
const accentColor = Color('#440171');
const textColor = Color('#cccccc');
const specialColors = {
  invalid: Color('#870c0c'),
  equipped: Color('#3575b5'),
  crafted: Color('#aaa235'),
  blocked: Color('#870c0c'),
  limited: Color('#9d6600'),
  allowed: Color('#008800'),
  roomFriend: Color('#008800'),
  roomBlocked: Color('#870c0c'),
  roomGame: Color('#3575b5'),
};

export class ColorsModule extends BaseModule {
  get settingsScreen(): Subscreen | null {
    return GuiColors;
  }

  get settings(): ColorsSettingsModel {
    return super.settings as ColorsSettingsModel;
  }

  set settings(val) {
    super.settings = val;
  }

  get defaultSettings() {
    return <ColorsSettingsModel>{
      themeSettings: {
        themeType: 'dark'
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
        textShadow: textColor.darken(0.2).hex(),
      },
      special: {
        invalid: specialColors.invalid.hex(),
        equipped: specialColors.equipped.hex(),
        crafted: specialColors.crafted.hex(),
        blocked: specialColors.blocked.hex(),
        limited: specialColors.limited.hex(),
        allowed: specialColors.allowed.hex(),
        roomFriend: specialColors.roomFriend.hex(),
        roomBlocked: specialColors.roomBlocked.hex(),
        roomGame: specialColors.roomGame.hex(),
      },
    };
  }

  load(): void {
  }

  static reloadTheme(): void {
    modLogger.info('Reloading theme');
    const themeType = getModule('ColorsModule').settings.themeSettings.themeType;
    document.body.dataset.tmdThemeType = themeType
    ChatRoomTopMenuBuiltSig = '';
    _Color.composeRoot();
    BcStyle.reloadAll();
    changeModColors();
    getModule('GuiRedrawModule').toggleGuiPatches();
  }
}

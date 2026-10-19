import { modStorage, Style } from 'bc-deeplib/deeplib';
import { IntegrationSettingsModel } from '../models/integration';
import { plainColors, specialColors } from './color';
import { camelToKebabCase } from './other';
import Color from 'color';

type styles = {
  [key in keyof Omit<IntegrationSettingsModel, 'modEnabled' | 'doShowNewVersionMessage' | 'MBS'>]: string;
};
const styles: styles = {
  inputs: '',
  chat: '',
  inventory: '',
  friendList: '',
  friendListBlur: '',
  scrollbar: '',
  selection: '',
  WCE: '',
  FUSAM: '',
  TTS: '',
};

export const BcStyle = {
  injectAll() {
    const isEnabled = modStorage.playerStorage.GlobalModule.modEnabled;

    Style.injectEmbed('tmd-style', `${PUBLIC_URL}/styles/themed.css`);

    if (!isEnabled) return;

    Style.injectInline('tmd-root', composeRoot());
    Style.injectEmbed('tmd-chat-room-search', `${PUBLIC_URL}/styles/chatroom_search.css`);
    Style.injectEmbed('tmd-preference', `${PUBLIC_URL}/styles/preference.css`);
    Style.injectEmbed('tmd-misc', `${PUBLIC_URL}/styles/misc.css`);
		Style.injectEmbed('tmd-map-view', `${PUBLIC_URL}/styles/map_view.css`);

    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      if (!modStorage.playerStorage.IntegrationModule[id]) return;
      Style.injectEmbed(id, `${PUBLIC_URL}/styles/${id}.css`);
    });
  },

  ejectAll() {
    Style.eject('tmd-root');
    Style.eject('tmd-style');
    Style.eject('tmd-chat-room-search');
    Style.eject('tmd-preference');
    Style.eject('tmd-misc');
		Style.eject('tmd-map-view');

    const styleIDs = Object.keys(styles) as (keyof typeof styles)[];
    styleIDs.forEach((id) => {
      Style.eject(id);
    });
  },

  reloadAll() {
    BcStyle.ejectAll();
    BcStyle.injectAll();
  }
};

export function composeRoot() {
  let genedColors = '';

  Object.keys(plainColors).forEach((key: string) => {
    const typedKey = key as keyof typeof plainColors;
    genedColors += `--tmd-${camelToKebabCase(key)}: ${plainColors[typedKey]};\n\t`;
  });
  Object.keys(specialColors).forEach((key) => {
    const typedKey = key as keyof typeof specialColors;
    genedColors += `--tmd-${camelToKebabCase(key)}: ${specialColors[typedKey][0]};\n\t`;
    genedColors += `--tmd-${camelToKebabCase(key)}-hover: ${specialColors[typedKey][1]};\n\t`;
  });

  genedColors += `--tmd-search-full-blocked: ${Color(specialColors.roomBlocked[0]).mix(Color(plainColors.elementDisabled), 0.5).hex()};\n\t`;
  genedColors += `--tmd-search-full-blocked-hover: ${Color(specialColors.roomBlocked[1]).mix(Color(plainColors.elementDisabled), 0.5).hex()};\n\t`;
  genedColors += `--tmd-search-full-friend: ${Color(specialColors.roomFriend[0]).mix(Color(plainColors.elementDisabled), 0.5).hex()};\n\t`;
  genedColors += `--tmd-search-full-friend-hover: ${Color(specialColors.roomFriend[1]).mix(Color(plainColors.elementDisabled), 0.5).hex()};\n\t`;

  return /*css*/ `
    :root {
      ${genedColors}
    }
    `.replace(/\t+|\n\s*/g, '\t');
}

import { ColorsSettingsModel } from '../models/colors';
import { ColorsModule } from './colors';
import { GlobalSettingsModel } from '../models/global';
import { advElement, BaseModule, EventChannel, getModule, getText, sendActionMessage as messageSendAction, sendLocalMessage as messageSendLocal, Modal, modStorage } from 'bc-deeplib/deeplib';

interface ThemedMessageModel {
  Settings: GlobalSettingsModel,
  Theme: ColorsSettingsModel,
  ThemeVersion: string,
}

type Events = {
  ThemedTheme: ThemedMessageModel;
};

export class ShareModule extends BaseModule {
  channel: EventChannel<Events, 'share'> | null = null;

  load(): void {
    this.channel = new EventChannel('share');

    this.channel.registerListener('ThemedTheme', (data, sender) => {
      const theme = data.Theme;
      const version = data.ThemeVersion;
      const settings = data.Settings;

      const senderName = CharacterNickname(sender);
      const prompt = getText('modal.prompt.share')
        .replace('$Sender', `${senderName} (${sender.MemberNumber})`)
        .replace('$SenderPronoun', CharacterPronoun(sender, 'Possessive', false))
        .split('<br>')
        .map((str) => ({
          tag: 'span',
          children: [str]
        }) as HTMLOptions<'span'>);

      const shareNotification = getText('modal.prompt.chat_share_notification')
        .replace('$Sender', `${senderName} (${sender.MemberNumber})`);

      const message = ElementCreate({
        tag: 'div',
        classList: ['themed-chat-modal'],
        attributes: {
          'data-time': ChatRoomCurrentTime(),
          'data-sender': sender.MemberNumber?.toString(),
          id: sender.MemberNumber?.toString()
        },
        children: [
          {
            tag: 'span',
            classList: ['modal-prompt'],
            children: [
              shareNotification
            ]
          },
          advElement.createButton({
            id: ElementGenerateID(),
            htmlOptions: {
              button: {
                classList: ['modal-button']
              }
            },
            options: {
              label: getText('modal.button.show'),
            },
            onClick: () => {
              if (!version || version !== modStorage.playerStorage.Version) {
                messageSendLocal('theme-not-up-to-date', `Theme sent by ${senderName} is not up-to-date!`);
                return;
              }

              Modal.confirm(prompt).then((result) => {
                if (result) {
                  this.acceptShare(theme, settings);
                }
              });
            },
          })
        ]
      });

      ChatRoomAppendChat(message);
    });
  }

  acceptShare(data: ColorsSettingsModel, settings: GlobalSettingsModel): void {
    getModule('ColorsModule').settings = data;
    getModule('GlobalModule').settings.doUseAdvancedColoring = settings.doUseAdvancedColoring;
    modStorage.save();

    ColorsModule.reloadTheme();
  }

  share(target: number | undefined): void {
    messageSendLocal('theme-share', 'Shared theme with ' + (target ? CharacterNickname(ChatRoomCharacter.find((c) => c.MemberNumber == target) as Character) : 'everyone'));
    messageSendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, 'Possessive', false)} Themed theme!`, target);

    this.channel?.sendEvent('ThemedTheme', {
      Theme: getModule('ColorsModule').settings,
      Settings: getModule('GlobalModule').settings,
      ThemeVersion: modStorage.playerStorage.Version
    });
  }
}

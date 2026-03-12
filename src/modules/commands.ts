import { ShareModule } from './share';
import { BaseModule, getModule, sendLocalMessage as messageSendLocal } from 'bc-deeplib/deeplib';

export class CommandsModule extends BaseModule {
  load(): void {
    CommandCombine([
      {
        Tag: 'share-theme',
        Description: '[member number]: Shares your theme with other people that have Themed installed!',
        Action(args) {
          if (!args) return getModule('ShareModule').share(undefined);

          const targetNumber = parseInt(args, 10);
          const target = ChatRoomCharacter.find((c) => c.MemberNumber == targetNumber);
          if (!target)
            messageSendLocal('theme-share-error', `No character with MemberNumber ${targetNumber} found!`);
          else
            getModule('ShareModule').share(target.MemberNumber);
        }
      }
    ]);
  }

  run(): void { }
}

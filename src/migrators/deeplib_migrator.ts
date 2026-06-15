import { BaseMigrator, getModule } from 'bc-deeplib/deeplib';
import { ColorsModule } from '../modules/colors';

export class DeeplibMigrator extends BaseMigrator {
  get migrationVersion(): string {
    return '1.6.0';
  }

  migrate() {
    const globalModule = getModule('GlobalModule');
    // @ts-expect-error migration
    globalModule.settings.modEnabled = globalModule.settings['themedEnabled'];
    delete globalModule.settings['themedEnabled'];

    ColorsModule.reloadTheme();
  }
}
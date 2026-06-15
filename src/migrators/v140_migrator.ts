import { BaseMigrator, getModule } from 'bc-deeplib/deeplib';

export class V140Migrator extends BaseMigrator {
  get migrationVersion(): string {
    return '1.4.0';
  }

  migrate(): boolean {
    const colorsData = getModule('ColorsModule').settings;
    const integrationsData = getModule('IntegrationModule').settings;

    if (colorsData) {
      if (colorsData['primaryColor']) {
      // @ts-expect-error migration
        colorsData.base.main = colorsData['primaryColor'];
        delete colorsData['primaryColor'];
      }

      if (colorsData['accentColor']) {
      // @ts-expect-error migration
        colorsData.base.accent = colorsData['accentColor'];
        delete colorsData['accentColor'];
      }
    }

    if (integrationsData) {
      if (integrationsData['BC']) {
      // @ts-expect-error migration
        integrationsData.inputs = integrationsData['BC'];
        delete integrationsData['BC'];
      }
      
      if (integrationsData['BC_Chat']) {
      // @ts-expect-error migration
        integrationsData.chat = integrationsData['BC_Chat'];
        delete integrationsData['BC_Chat'];
      }
      
      if (integrationsData['BC_FriendList']) {
      // @ts-expect-error migration
        integrationsData.friendList = integrationsData['BC_FriendList'];
        delete integrationsData['BC_FriendList'];
      }
      
      if (integrationsData['BC_Other']) {
      // @ts-expect-error migration
        integrationsData.scrollbar = integrationsData['BC_Other'];
        // @ts-expect-error migration
        integrationsData.selection = integrationsData['BC_Other'];
        delete integrationsData['BC_Other'];
      }
      
      if (integrationsData['FBC']) {
      // @ts-expect-error migration
        integrationsData.WCE = integrationsData['FBC'];
        delete integrationsData['FBC'];
      }
    }

    return true;
  }
}

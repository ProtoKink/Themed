import { BaseMigrator, BaseModule, GUI, GuiImportExport, initMod, modStorage, ModulesList, VersionModule } from 'bc-deeplib/deeplib';
import { loadLoginOptions } from './hooks/login_options';
import { V140Migrator } from './migrators/v140_migrator';
import { ColorsModule } from './modules/colors';
import { CommandsModule } from './modules/commands';
import { GlobalModule } from './modules/global';
import { GuiRedrawModule } from './modules/gui_redraw';
import { IntegrationModule } from './modules/integration';
import { ProfilesModule } from './modules/profiles';
import { ShareModule } from './modules/share';
import { DeeplibMigrator } from './migrators/deeplib_migrator';
import { GuiReset } from './screens/reset';
import { loadLocalSettings } from './utilities/data';

(async () => {
  const changelog = await fetch(`${PUBLIC_URL}/text/changelog.txt`)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, '\n'));

  const migrators: Array<BaseMigrator> = [
    new V140Migrator(),
    new DeeplibMigrator(),
  ];

  const modules: Partial<ModulesList> = {
    GUI: new GUI({
      buttonText: 'Themed',
      identifier: 'Themed',
      image: `${PUBLIC_URL}/images/mod.png`,
    }),
    GlobalModule: new GlobalModule(),
    ColorsModule: new ColorsModule(),
    GuiRedrawModule: new GuiRedrawModule(),
    IntegrationModule: new IntegrationModule(),
    ProfilesModule: new ProfilesModule(),
    CommandsModule: new CommandsModule(),
    ShareModule: new ShareModule(),
    VersionModule: new VersionModule({
      newVersionMessage: changelog,
      migrators
    })
  };

  return initMod({
    beforeLogin: () => {
      loadLocalSettings();
      loadLoginOptions();
    },
    initFunction: () => {
      ColorsModule.reloadTheme();
    },
    mainMenuOptions: {
      importExportSubscreen: new GuiImportExport({
        customFileExtension: '.tmd',
        onImport() {
          modStorage.save();
          ColorsModule.reloadTheme();
        },
      }),
      wikiLink: 'https://github.com/dDeepLb/Themed-BC/wiki',
      resetSubscreen: new GuiReset()
    },
    modules: modules,
    translationOptions: {
      pathToTranslationsFolder: `${PUBLIC_URL}/translations/`,
    }
  });
})();

import { ColorsModule } from "../modules/colors";
import { CommandsModule } from "../modules/commands";
import { GlobalModule } from "../modules/global";
import { GuiRedrawModule } from "../modules/gui_redraw";
import { IntegrationModule } from "../modules/integration";
import { ProfilesModule } from "../modules/profiles";
import { ShareModule } from "../modules/share";

export const ModName = 'Themed';
export const FullModName = 'BC Themed';
export const ModRepository = 'https://github.com/dDeepLb/Themed-BC';

export const ModuleCategory = {
  Global: 'Global',
  Colors: 'Colors',
  Profiles: 'Profiles',
  Integration: 'Integration',
  GuiRedraw: 'GuiRedraw'
};

declare module 'bc-deeplib/deeplib' {
  interface ModulesList {
    GlobalModule: GlobalModule;
    ColorsModule: ColorsModule;
    ProfilesModule: ProfilesModule;
    IntegrationModule: IntegrationModule;
    GuiRedrawModule: GuiRedrawModule;
    CommandsModule: CommandsModule;
    ShareModule: ShareModule;
  }
}
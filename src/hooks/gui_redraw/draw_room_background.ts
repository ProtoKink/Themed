import { HookPriority, modStorage, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawRoomBackground() {
  sdk.hookFunction('DrawRoomBackground', HookPriority.Observe, ([URL, ...args], next) => {
    if (!doRedraw()) return next([URL, ...args]);

    if (URL.includes('Sheet.jpg')) {
      if (modStorage.playerStorage.GlobalModule.doUseFlatColor) {
        DrawRect(0, 0, 2000, 1000, plainColors.main);
      } else {
        next([URL, ...args]);
        MainCanvas.save();
        MainCanvas.globalCompositeOperation = 'multiply';
        DrawRect(0, 0, 2000, 1000, plainColors.main);
        MainCanvas.restore();
      }
    } else {
      next([URL, ...args]);
    }
  }, ModuleCategory.GuiRedraw);
}

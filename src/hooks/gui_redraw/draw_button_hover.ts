import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { drawRect } from '../../utilities/drawing';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawButtonHover() {
  sdk.hookFunction('DrawButtonHover', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [, , Width, Height, HoveringText] = args;
    let [Left, Top] = args;

    if (HoveringText == null || HoveringText == '') return next(args);

    Left = MouseX > 1000 ? Left - 475 : Left + Width + 25;
    Top = Top + (Height - 65) / 2;
    MainCanvas.save();
    MainCanvas.textAlign = 'center';
    drawRect(Left, Top, 450, 65, plainColors.elementHint, plainColors.accent);
    DrawTextFit(HoveringText, Left + 225, Top + 33, 444, 'Black');
    MainCanvas.restore();
  }, ModuleCategory.GuiRedraw);
}

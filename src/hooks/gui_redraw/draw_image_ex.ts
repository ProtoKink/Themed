import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { _Image } from '../../utilities/drawing';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawImageEx() {
  sdk.hookFunction('DrawImageEx', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);
    if (typeof args[0] !== 'string') return next(args);
    if (!_Image.doColorizeImage(args[0])) return next(args);

    const [Source, Canvas, X, Y] = args;
    let Options = args[4];
    Options ??= {};
    Options.HexColor = plainColors.accent;
    Options.FullAlpha = true;

    return next([Source, Canvas, X, Y, Options]);
  }, ModuleCategory.GuiRedraw);
}

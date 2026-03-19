import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';
import { _Image } from '../../utilities/drawing';

export function hookElementButtonCreate() {
  sdk.hookFunction(
    'ElementButton.Create',
    HookPriority.Observe,
    (args, next) => {
      if (!doRedraw()) return next(args);

      let [, , options] = args;
      options ??= {};

      if (!options.image || typeof options.image !== 'string') return next(args);
      if (!_Image.doColorizeHTMLImage(options.image)) return next(args);

      options.imageColor = plainColors.accent;

      return next(args);
    },
    ModuleCategory.GuiRedraw
  );
}

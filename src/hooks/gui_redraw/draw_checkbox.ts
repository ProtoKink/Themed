import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawCheckbox() {
  sdk.hookFunction('DrawCheckbox', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = 'Black', CheckImage = 'Icons/Checked.png'] = args;

    const backgroundColor = Disabled ? '%disabled' : '%background';

    DrawText(Text, Left + 100, Top + 33, TextColor, '');
    DrawButton(Left, Top, Width, Height, '', backgroundColor, IsChecked ? CheckImage : '', undefined, Disabled);
  }, ModuleCategory.GuiRedraw);
}

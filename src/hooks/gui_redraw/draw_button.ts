import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ColorType, plainColors } from '../../utilities/color';
import { drawButtonRect } from '../../utilities/drawing';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawButton() {
  sdk.hookFunction('DrawButton', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [x, y, width, height, label, , image, hoveringText, isDisabled] = args;
    let color = args[5];
    const isHovering = MouseHovering(x, y, width, height);

    const buttonStateSymbol = (() => {
      if (isDisabled) return ColorType.Disabled;
      if (isHovering) return ColorType.Hover;
      return ColorType.Base;
    })();
    color = ColorType.FromButton + buttonStateSymbol + color;

    ControllerAddActiveArea(x, y);

    drawButtonRect(
      x,
      y,
      width,
      height,
      color,
      color,
      color,
      '%border',
      '%hover',
      '%disabled',
      isHovering,
      isDisabled ?? false
    );

    DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, plainColors.text);

    if (image != null && image != '') {
      DrawImage(image, x + 2, y + 2);
    }

    if (hoveringText != null && isHovering) {
      DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
    }
  }, ModuleCategory.GuiRedraw);
}

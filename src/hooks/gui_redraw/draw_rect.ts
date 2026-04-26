import Color, { ColorInstance } from 'color';
import { ColorType, plainColors, specialColors } from '../../utilities/color';
import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawRect() {
  sdk.hookFunction('DrawRect', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [Left, Top, Width, Height] = args;
    let color = args[4];

    const drawRect = (color: string) => {
      next([Left, Top, Width, Height, color]);
    };

    const hover = MouseIn(Left, Top, Width, Height) ? 1 : 0;

    if (color?.startsWith(ColorType.NoDraw)) {
      return next([Left, Top, Width, Height, color.substring(1)]);
    }

    const buttonStates = [ColorType.Hover, ColorType.Disabled, ColorType.Base];
    let buttonStateSymbol = color[0] as ColorType;
    if (color?.startsWith(ColorType.FromButton)) {
      color = color.substring(1);
      buttonStateSymbol = color[0] as ColorType;

      if (buttonStates.includes(buttonStateSymbol)) {
        color = color.substring(1);
      }
    }

    if (color?.startsWith(ColorType.Custom)) {
      switch (color.substring(1)) {
        case 'disabled':
          color = hover ? Color(plainColors.elementDisabled).lighten(0.2).hex()
            : plainColors.elementDisabled;
          break;

        case 'hover':
          color = plainColors.elementHover;
          break;

        case 'background':
          color = hover ? plainColors.elementHover
            : plainColors.element;
          break;

        case 'accent':
          color = hover ? plainColors.accentHover
            : plainColors.accent;
          break;

        case 'allowed':
        case 'equipped':
        case 'crafted':
        case 'limited':
        case 'blocked': {
          const typedColor = color.substring(1) as keyof typeof specialColors;
          color = specialColors[typedColor][hover];
          break;
        }

        default:
          return next(args);
      }
    } else {
      let parsedColor: string | null = null;
      try {
        if ((color[0] === '#' && color.length === 9) || color.startsWith('rgba'))
          parsedColor = Color(color.toLowerCase()).hexa().toLowerCase();
        else
          parsedColor = Color(color.toLowerCase()).hex().toLowerCase();
      } catch {
        parsedColor = null;
        return next(args);
      }
      switch (parsedColor) {
        case '#eeeeee':
        case '#dddddd':
        case '#cccccc':
        case '#ffffff':
        case '#ffff88':
        case '#ffffff88':
        case '#ffffffcc':
        case '#d7f6e9': // LSCG Version Tooltip
        case '#808080':
          color = plainColors.element;
          break;

        case '#00ffff':
          color = plainColors.elementHover;
          break;

        case '#ffc0cb':
        case '#ddffdd':
          color = plainColors.accent;
          break;

        case '#888888':
        case '#ebebe4':
          color = plainColors.elementDisabled;
          break;

        default:
        // fallthrough
      }
    }

    if (buttonStates.includes(buttonStateSymbol)) {
      let parsedColor: ColorInstance | null = null;
      try {
        parsedColor = Color(color.toLowerCase());
      } catch {
        parsedColor = null;
      }

      if (parsedColor !== null) {
        if (buttonStateSymbol === ColorType.Hover) {
          color = parsedColor.lighten(0.2).hex();
        } else if (buttonStateSymbol === ColorType.Disabled) {
          color = parsedColor.darken(0.2).hex();
        }

        return drawRect(color);
      }
    }

    drawRect(color);
  }, ModuleCategory.GuiRedraw);
}

import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ColorType, plainColors, _Color } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawEmptyRect() {
  sdk.hookFunction('DrawEmptyRect', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [Left, Top, Width, Height, Color, Thickness] = args;

    const drawEmptyRect = (color: string) => {
      MainCanvas.beginPath();
      MainCanvas.rect(Left, Top, Width, Height);
      MainCanvas.lineWidth = Thickness ?? 2;
      MainCanvas.strokeStyle = color;
      MainCanvas.stroke();
    };

    if (Color?.startsWith(ColorType.Custom)) {
      switch (Color.substring(1).toLowerCase()) {
        case 'border':
          drawEmptyRect(plainColors.accent);
          break;

        case 'hover':
          drawEmptyRect(plainColors.accentHover);
          break;

        case 'disabled':
          drawEmptyRect(plainColors.accentDisabled);
          break;

        default:
          next(args);
          break;
      }
    } else {
      switch (_Color.getHexComputed(Color).toLowerCase()) {
        case '#ffffff':
        case '#dddddd':
        case '#000000':
          drawEmptyRect(plainColors.accent);
          break;

        default:
          next(args);
          break;
      }
    }
  }, ModuleCategory.GuiRedraw);
}

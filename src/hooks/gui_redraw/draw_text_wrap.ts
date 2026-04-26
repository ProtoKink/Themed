import Color from 'color';
import { plainColors } from '../../utilities/color';
import { drawRect } from '../../utilities/drawing';
import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawTextWrap() {
  sdk.hookFunction('DrawTextWrap', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);
    if (!args[0]) return next(args);
    if (!args[5]) return next(args);

    const [Text, X, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
    let [, , Y, , ,] = args;
    const isHovering = MouseHovering(X, Y, Width, Height);

    if (!Text) return;

    ControllerAddActiveArea(X, Y);

    if (BackColor != null) {
      if (!isHovering) {
        drawRect(X, Y, Width, Height, BackColor, plainColors.accent);
      } else {
        drawRect(X, Y, Width, Height, plainColors.elementHover, plainColors.accentHover);
      }
    }

    let TextSize;
    if (MaxLine != null) {
      TextSize = MainCanvas.font;
      GetWrapTextSize(Text, Width, MaxLine);
    }

    let parsedForeColor = ForeColor;
    try {
      parsedForeColor = Color(ForeColor.toLowerCase()).hex();
    } catch (e) {
      parsedForeColor = ForeColor;
    }

    MainCanvas.fillStyle = parsedForeColor === '#000000' ? plainColors.text : ForeColor;
    if (MainCanvas.measureText(Text).width > Width) {
      const words = fragmentText(Text, Width);
      let line = '';

      let LineCount = 1;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        if (MainCanvas.measureText(testLine).width > Width && n > 0) {
          line = words[n] + ' ';
          LineCount++;
        } else line = testLine;
      }

      line = '';
      Y = Y - (LineCount - 1) * LineSpacing + Height / 2;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        if (MainCanvas.measureText(testLine).width > Width && n > 0) {
          MainCanvas.fillText(line, X + Width / 2, Y);
          line = words[n] + ' ';
          Y += LineSpacing * 2;
        } else {
          line = testLine;
        }
      }
      MainCanvas.fillText(line, X + Width / 2, Y);
    } else MainCanvas.fillText(Text, X + Width / 2, Y + Height / 2);

    if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
  }, ModuleCategory.GuiRedraw);
}

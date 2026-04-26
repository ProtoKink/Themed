import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawBackNextButton() {
  sdk.hookFunction('DrawBackNextButton', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [Left, Top, Width, Height, Label, Color, Image, , , Disabled] = args;
    let [, , , , , , , BackText, NextText, , ArrowWidth] = args;

    if (ArrowWidth == null || ArrowWidth > Width / 2) ArrowWidth = Width / 2;
    const LeftSplit = Left + ArrowWidth;
    const RightSplit = Left + Width - ArrowWidth;

    ControllerAddActiveArea(Left, Top);
    ControllerAddActiveArea(Left + Width - ArrowWidth, Top);

    MainCanvas.save();
    MainCanvas.textAlign = 'center';

    MainCanvas.beginPath();
    MainCanvas.rect(Left, Top, Width, Height);
    MainCanvas.fillStyle = plainColors.element;
    MainCanvas.fillRect(Left, Top, Width, Height);
    if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
      MainCanvas.fillStyle = plainColors.elementHover;
      if (MouseX > RightSplit) {
        MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
      } else if (MouseX <= LeftSplit) {
        MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
      } else {
        MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
      }
    } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
      MainCanvas.fillStyle = plainColors.elementDisabled;
      MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
      MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
    }
    MainCanvas.lineWidth = 2;
    MainCanvas.strokeStyle = plainColors.accent;
    MainCanvas.stroke();
    MainCanvas.closePath();

    DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color);
    DrawTextFit(Label, Left + Width / 2, Top + (Height / 2) + 1, (CommonIsMobile) ? Width - 6 : Width - 36, 'Black');

    if (Image != null && Image != '') {
      DrawImage(Image, Left + 2, Top + 2);
    }

    ControllerAddActiveArea(Left + Width / 2, Top);

    MainCanvas.beginPath();
    MainCanvas.fillStyle = 'Black';
    MainCanvas.moveTo(Left + 15, Top + Height / 5);
    MainCanvas.lineTo(Left + 5, Top + Height / 2);
    MainCanvas.lineTo(Left + 15, Top + Height - Height / 5);
    MainCanvas.stroke();
    MainCanvas.closePath();

    MainCanvas.beginPath();
    MainCanvas.fillStyle = 'Black';
    MainCanvas.moveTo(Left + Width - 15, Top + Height / 5);
    MainCanvas.lineTo(Left + Width - 5, Top + Height / 2);
    MainCanvas.lineTo(Left + Width - 15, Top + Height - Height / 5);
    MainCanvas.stroke();
    MainCanvas.closePath();

    MainCanvas.restore();

    if (CommonIsMobile) return;
    if (BackText == null) BackText = () => 'MISSING VALUE FOR: BACK TEXT';
    if (NextText == null) NextText = () => 'MISSING VALUE FOR: NEXT TEXT';
    if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
      DrawHoverElements.push(() => {
        DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : '');
      });
  }, ModuleCategory.GuiRedraw);
}

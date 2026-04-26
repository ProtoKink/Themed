import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawPreviewBox() {
  sdk.hookFunction('DrawPreviewBox', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [X, Y, Path, Description, Options] = args;

    const { Vibrating, Icons, Disabled } = Options || {};
    let { Foreground, Background, Width, Height } = Options || {};
    Width = Width || DrawAssetPreviewDefaultWidth;
    Height = Height || DrawAssetPreviewDefaultHeight;

    const Padding = 2;
    const TextGutter = Description ? 44 : 0;

    Foreground = plainColors.text;
    Background = Background || plainColors.element;
    const hover = MouseHovering(X, Y, Width, Height);
    if (hover) Background = Background || plainColors.elementHover;
    if (Disabled) Background = Background || plainColors.elementDisabled;

    let ImageX = X + Padding;
    let ImageY = Y + Padding;
    let ImageWidth = Width;
    let ImageHeight = Height - TextGutter;

    if (ImageWidth > ImageHeight) {
      const Ratio = ImageHeight / ImageWidth;
      ImageWidth *= Ratio;
      ImageX += (Width - ImageWidth) / 2;
    } else if (ImageWidth < ImageHeight) {
      const Ratio = ImageWidth / ImageHeight;
      ImageHeight *= Ratio;
      ImageY += (Height - ImageHeight - TextGutter) / 2;
    }

    ImageWidth -= 2 * Padding;
    ImageHeight -= 2 * Padding;

    if (Vibrating) {
      ImageX += 1 + Math.floor(Math.random() * 3);
      ImageY += 1 + Math.floor(Math.random() * 3);
    }

    DrawRect(X, Y, Width, Height, Background);
    ControllerAddActiveArea(X, Y);
    DrawEmptyRect(X, Y, Width, Height, hover ? plainColors.accentHover : plainColors.accent);
    if (Path !== '') DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
    DrawPreviewIcons(Icons ?? [], X, Y);
    if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
  }, ModuleCategory.GuiRedraw);
}

import { BaseModule, modStorage, sdk } from 'bc-deeplib/deeplib'; import { hookAppearanceGetPreviewImageColor } from '../hooks/gui_redraw/appearance_get_preview_image_color';
import { hookDialogGetMenuButtonColor } from '../hooks/gui_redraw/dialog_get_menu_button_color';
import { hookDrawBackNextButton } from '../hooks/gui_redraw/draw_back_next_button';
import { hookDrawButton } from '../hooks/gui_redraw/draw_button';
import { hookDrawButtonHover } from '../hooks/gui_redraw/draw_button_hover';
import { hookDrawCheckbox } from '../hooks/gui_redraw/draw_checkbox';
import { hookDrawEmptyRect } from '../hooks/gui_redraw/draw_empty_rect';
import { hookDrawImageEx } from '../hooks/gui_redraw/draw_image_ex';
import { hookDrawPreviewBox } from '../hooks/gui_redraw/draw_preview_box';
import { hookDrawRect } from '../hooks/gui_redraw/draw_rect';
import { hookDrawRoomBackground } from '../hooks/gui_redraw/draw_room_background';
import { hookDrawText } from '../hooks/gui_redraw/draw_text';
import { hookDrawTextFit } from '../hooks/gui_redraw/draw_text_fit';
import { hookDrawTextWrap } from '../hooks/gui_redraw/draw_text_wrap';
import { hookElementButtonCreate } from '../hooks/gui_redraw/element_button_create';

export const doRedraw = () => {
  return modStorage.playerStorage?.GlobalModule?.modEnabled && modStorage.playerStorage.GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== 'ClubCard';
};

export class GuiRedrawModule extends BaseModule {
  patched: boolean = false;

  load(): void {
    hookDrawRoomBackground();
    hookDrawButton();
    hookDrawCheckbox();
    hookDrawBackNextButton();
    hookDrawImageEx();
    hookDrawRect();
    hookDrawEmptyRect();
    hookDrawButtonHover();
    hookDrawPreviewBox();
    hookAppearanceGetPreviewImageColor();
    hookDrawTextWrap();
    hookDrawTextFit();
    hookDrawText();
    hookDialogGetMenuButtonColor();
    hookElementButtonCreate();
    
    if (doRedraw()) this.patchGui();
  }

  patchGui() {
    if (this.patched) return false;

    sdk.patchFunction('DialogDraw', {
      'DrawRect(1087 + offset, 550, 225, 275, bgColor);':
        'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");',

      'const bgColor = disabled ? "Gray" : (hover ? "aqua" : "white");':
        'const bgColor = disabled ? "%disabled" : (hover ? "%hover" : "%background");',
    });

    sdk.patchFunction('DrawProcessScreenFlash', {
      'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));':
        'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));',

      'DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);':
        'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
    });

    sdk.patchFunction('ChatAdminRun', {
      'const ButtonBackground = canEdit ? "White" : "#ebebe4";':
        'const ButtonBackground = canEdit ? "%background" : "%disabled";'
    });

    sdk.patchFunction('AppearanceRun', {
      'const ButtonColor = canAccess ? "White" : "#888";':
        'const ButtonColor = canAccess ? "%background" : "%disabled";',
      'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "#fff" : "#aaa", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);':
        'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "%background" : "%disabled", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);',
      'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", undefined, undefined, !CanCycleColors);':
        'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "%disabled", undefined, undefined, !CanCycleColors);',
      'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);':
        'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "%background" : "%disabled", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", undefined, !CanPickColor);',
    });

    sdk.patchFunction('ExtendedItemGetButtonColor', {
      'ButtonColor = "#888888";':
        'ButtonColor = "%accent";',
      'ButtonColor = Hover ? "red" : "pink";':
        'ButtonColor = "%blocked";',
      'ButtonColor = Hover ? "orange" : "#fed8b1";':
        'ButtonColor = "%limited";',
      'ButtonColor = Hover ? "green" : "lime";':
        'ButtonColor = "%allowed";',

      'ButtonColor = "Red";':
        'ButtonColor = "%blocked";',
      'ButtonColor = "Pink";':
        'ButtonColor = "%limited";',
      'ButtonColor = Hover ? "Cyan" : "LightGreen";':
        'ButtonColor = "%allowed";',
      'ButtonColor = Hover ? "Cyan" : "White";':
        'ButtonColor = Hover ? "%hover" : "%background";',
    });

    sdk.patchFunction('PreferenceSubscreenDifficultyRun', {
      'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "#DDFFDD" : "White", "");':
        'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "%accent" : "%background", "");',
      'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "White" : "#ebebe4", "");':
        'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "%background" : "%disabled", "");'
    });

    sdk.patchFunction('ChatAdminRoomCustomizationRun', {
      'DrawButton(725, 840, 250, 65, TextGet("Clear"), canEditCustom ? "White" : "#ebebe4", null, null, !canEditCustom);':
        'DrawButton(725, 840, 250, 65, TextGet("Clear"), canEditCustom ? "%background" : "%disabled", null, null, !canEditCustom);',
      'DrawButton(1025, 840, 250, 65, TextGet("Save"), canEditCustom ? "White" : "#ebebe4", null, null, !canEditCustom);':
        'DrawButton(1025, 840, 250, 65, TextGet("Save"), canEditCustom ? "%background" : "%disabled", null, null, !canEditCustom);',
    });

    sdk.patchFunction('Shop2._AssetElementDraw', {
      'options.Background = "cyan";':
        'options.Background = "%hover";',
      'options.Background = "white";':
        'options.Background = "%background";',
      'options.Background = "gray";':
        'options.Background = "%disabled";',
      'options.Background = "pink";':
        'options.Background = "%equipped";',
    });

    sdk.patchFunction('ChatRoomMenuDraw', {
      'let color = "White";': 'let color = "%background";',
      'color = "White";': 'color = "%background";',
      'color = "Pink";': 'color = "%blocked";',
      'color = "Yellow";': 'color = "%limited";',
      'color = ChatRoomGetUpTimer === 0 ? "Yellow" : "Pink";': 'color = ChatRoomGetUpTimer === 0 ? "%limited" : "%blocked";',
      'color = Player.IsSlow() ? "Yellow" : "White";': 'color = Player.IsSlow() ? "%limited" : "%background";',
    });

    this.patched = true;
  }

  unpatchGui() {
    if (!this.patched) return false;

    sdk.unpatchFunction('DialogDraw');
    sdk.unpatchFunction('DrawProcessScreenFlash');
    sdk.unpatchFunction('ChatAdminRun');
    sdk.unpatchFunction('AppearanceRun');

    sdk.unpatchFunction('ExtendedItemGetButtonColor');
    sdk.unpatchFunction('PreferenceSubscreenDifficultyRun');
    sdk.unpatchFunction('ChatAdminRoomCustomizationRun');
    sdk.unpatchFunction('Shop2._AssetElementDraw');
    sdk.unpatchFunction('ChatRoomMenuDraw');

    this.patched = false;
  }

  toggleGuiPatches() {
    if (!doRedraw()) {
      return this.unpatchGui();
    } else {
      return this.patchGui();
    }
  }
}

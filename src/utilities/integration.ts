import { modStorage } from 'bc-deeplib/deeplib';
import { doRedraw } from '../modules/gui_redraw';
import { plainColors } from './color';

export function changeModColors() {
  if (doRedraw()) {
    changeBctColors();
    changeMbsColors();
  } else {
    resetBctColors();
    resetMbsColors();
  }
}

function changeBctColors() {
  if (typeof BCT_API === 'undefined') return;

  BCT_API.HintBackColor = plainColors.element;
  BCT_API.HintBorderColor = plainColors.accent;
  BCT_API.HintForeColor = plainColors.text;
}

function resetBctColors() {
  if (typeof BCT_API === 'undefined') return;

  BCT_API.HintBackColor = 'yellow';
  BCT_API.HintBorderColor = 'black';
  BCT_API.HintForeColor = 'black';
}

function changeMbsColors() {
  if (typeof mbs !== 'undefined' && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
    if (!modStorage.playerStorage.IntegrationModule.MBS) return;
    return mbs.css.setStyle({
      backgroundColor: plainColors.main,
      buttonColor: plainColors.element,
      buttonHoverColor: plainColors.elementHover,
      borderColor: plainColors.accent,
      tooltipColor: plainColors.elementHint,
      textColor: plainColors.text
    });
  }
}

function resetMbsColors() {
  if (typeof mbs !== 'undefined' && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
    if (!modStorage.playerStorage.IntegrationModule.MBS)
      mbs.css.setStyle({
        backgroundColor: mbs.css.DEFAULT_STYLE.backgroundColor,
        buttonColor: mbs.css.DEFAULT_STYLE.buttonColor,
        buttonHoverColor: mbs.css.DEFAULT_STYLE.buttonHoverColor,
        borderColor: mbs.css.DEFAULT_STYLE.borderColor,
        tooltipColor: mbs.css.DEFAULT_STYLE.tooltipColor,
        textColor: mbs.css.DEFAULT_STYLE.textColor
      });
  }
}

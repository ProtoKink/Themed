import { HookPriority, sdk, Style } from 'bc-deeplib/deeplib';
import { LocalSettingsModel } from '../models/local';
import { getLocalSettings, saveLocalSettings } from '../utilities/data';

const ids = {
  optionsOpen: 'tmd-login-options-open',
  optionsClose: 'tmd-login-options-dialog-close',
  optionsSheet: 'tmd-login-options-dialog',
  optionsContent: 'tmd-login-options-dialog-content',
  optionsStyle: 'tmd-login-options-style',
};

const options: Record<keyof LocalSettingsModel['loginOptions'], string> = {
  hideCredits: 'Hide Credits',
  hideDummy: 'Hide Dummy',
};

export function loadLoginOptions() {
  patchLoginPage();

  Style.injectEmbed(ids.optionsStyle, `${PUBLIC_URL}/styles/login-options.css`);
  createUI();

  const loginRunHook = sdk.hookFunction('LoginRun', HookPriority.Observe, (args, next) => {
    next(args);

    ElementSetPosition(ids.optionsOpen, 2000, 1000, 'bottom-right');
    ElementSetSize(ids.optionsOpen, 90, 90);

    ElementSetSize(ids.optionsSheet, 1000, 500);
  });

  const loginExitHook = sdk.hookFunction('LoginUnload', HookPriority.Observe, (args, next) => {
    loginExitHook();
    loginRunHook();

    removeUI();
    Style.eject(ids.optionsStyle);
    unpatchLoginPage();

    return next(args);
  });
}

function createUI() {
  const loginOptions = getLocalSettings().loginOptions;

  const optionsButton = ElementButton.Create(ids.optionsOpen, () => optionsSheet.showModal(), {
    tooltip: '[Themed] Login Options',
    image: './Icons/Preference.png',
  });
  document.body.appendChild(optionsButton);

  const optionsSheet = ElementCreate({
    tag: 'dialog',
    attributes: {
      id: ids.optionsSheet,
    },
    children: [
      {
        tag: 'div',
        attributes: {
          id: ids.optionsContent
        },
        children: [
          ...Array.from(Object.entries(options)).map(([key, value]) => {
            const typedKey = key as keyof LocalSettingsModel['loginOptions'];

            return {
              tag: 'label',
              classList: ['tmd-login-options-label'],
              children: [
                ElementCheckbox.Create(`tmd-login-options-${key}`, () => {
                  loginOptions[typedKey] = !loginOptions[typedKey];
                  saveLocalSettings();
                  repatchLoginPage();
                },
                  {
                    checked: loginOptions[typedKey],
                  }),
                value
              ]
            } as HTMLOptions<'label'>;
          })
        ]
      },
      ElementButton.Create(ids.optionsClose, () => optionsSheet.close(),
        {
          label: 'Close',
        },
      )
    ],
    parent: document.body
  });
}

function removeUI() {
  document.getElementById(ids.optionsOpen)?.remove();
  document.getElementById(ids.optionsSheet)?.remove();
}

function patchLoginPage() {
  const loginOptions = getLocalSettings().loginOptions;

  if (loginOptions.hideDummy) {
      sdk.patchFunction('LoginRun', {
        'DrawCharacter(/** @type {NPCCharacter} */ (LoginCharacter), 1400, 100, 0.9);': '',
      });

      sdk.patchFunction('LoginDoNextThankYou', {
        'CharacterRelease(char, false);': '',
        'CharacterAppearanceFullRandom(char);': '',
        'if (InventoryGet(char, "ItemNeck") != null) InventoryRemove(char, "ItemNeck", false);': '',
        'CharacterFullRandomRestrain(char)': '',
      });
  }

  if (loginOptions.hideCredits) {
    sdk.patchFunction('LoginRun', {
      'if (LoginCredits) LoginDrawCredits();': 'if (false) LoginDrawCredits();',
      'DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);': '',
      'DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");': '',
    });

    sdk.patchFunction('LoginDoNextThankYou', {
      'LoginThankYou = CommonRandomItemFromList(LoginThankYou, LoginThankYouList);': '',
    });
  }
}

function unpatchLoginPage() {
  sdk.unpatchFunction('LoginRun');
  sdk.unpatchFunction('LoginDoNextThankYou');
}

function repatchLoginPage() {
  unpatchLoginPage();
  patchLoginPage();
}
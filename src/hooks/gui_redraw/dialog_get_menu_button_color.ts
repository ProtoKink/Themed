import { sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDialogGetMenuButtonColor() {
	sdk.hookFunction('DialogGetMenuButtonColor', 0, (args, next) => {
		if (!doRedraw()) return next(args);

		const [buttonName] = args;

		if (DialogIsMenuButtonDisabled(buttonName)) {
			return '%disabled';
		} else if (buttonName === 'ColorDefault') {
			return DialogColorSelect || '%background';
		} else {
			return '%background';
		}
	}, ModuleCategory.GuiRedraw);
}

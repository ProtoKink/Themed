import Color from 'color';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors } from '../../utilities/color';
import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookDrawTextFit() {
	sdk.hookFunction('DrawTextFit', HookPriority.Observe, (args, next) => {
		if (!doRedraw()) return next(args);
		if (!args[0]) return next(args);
		if (!args[4]) return next(args);

		// eslint-disable-next-line no-useless-assignment
		let parsedColor = args[4];
		try {
			parsedColor = Color(args[4].toLowerCase()).hex();
		} catch {
			parsedColor = args[4];
		}

		if (parsedColor === '#000000') {
			args[4] = plainColors.text;
		}

		return next(args);
	}, ModuleCategory.GuiRedraw);
}

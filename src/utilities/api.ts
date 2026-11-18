import { getModule } from 'bc-deeplib/deeplib';
import { ThemedAPI } from '../../.types/themed';

export function getApi(): ThemedAPI {
	return Object.freeze({
		isEnabled: () => {
			const globalModule = getModule('GlobalModule');
			if (!globalModule) return false;
			return globalModule.settings.modEnabled;
		},
	});
}

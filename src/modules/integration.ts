import { BaseModule, Subscreen } from 'bc-deeplib/deeplib';
import { IntegrationSettingsModel } from '../models/integration';
import { GuiIntegration } from '../screens/integration';

export class IntegrationModule extends BaseModule {
	get settingsScreen(): Subscreen | null {
		return GuiIntegration;
	}

	get settings(): IntegrationSettingsModel {
		return super.settings as IntegrationSettingsModel;
	}

	set settings(val) {
		super.settings = val;
	}

	get defaultSettings() {
		return <IntegrationSettingsModel>{
			inputs: true,
			chat: true,
			inventory: true,
			friendList: true,
			friendListBlur: false,
			scrollbar: true,
			selection: true,
			WCE: true,
			FUSAM: true,
			TTS: true,
			MBS: true
		};
	}

	load(): void {
	}
}

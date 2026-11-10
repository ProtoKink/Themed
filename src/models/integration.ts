import { BaseSettingsModel as DL_BaseSettingsModel } from 'bc-deeplib/deeplib';

export type IntegrationSettingsModel = DL_BaseSettingsModel & {
	inputs: boolean;
	chat: boolean;
	inventory: boolean;
	friendList: boolean;
	friendListBlur: boolean;
	scrollbar: boolean;
	selection: boolean;
	WCE: boolean;
	FUSAM: boolean;
	TTS: boolean;
	MBS: boolean;
};

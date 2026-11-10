import { BaseSettingsModel as DL_BaseSettingsModel } from 'bc-deeplib/deeplib';
import { ColorsSettingsModel } from './colors';
import { IntegrationSettingsModel } from './integration';
import { GlobalSettingsModel } from './global';

export type ProfilesSettingsModel = DL_BaseSettingsModel & {
	[index: number]: ProfileEntryModel;
};

export type ProfileEntryModel = {
	[index: number]: ProfileEntryModel;
	name: string;
	data: ProfileSaveModel;
};

export type ProfileSaveModel = {
	GlobalModule: GlobalSettingsModel;
	ColorsModule: ColorsSettingsModel;
	IntegrationModule: IntegrationSettingsModel;
};

export type ProfileNames = {
	[index: number]: string | null;
};

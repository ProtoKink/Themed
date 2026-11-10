import { SettingsModel as DL_SettingsModel } from 'bc-deeplib/deeplib';
import { ColorsSettingsModel } from './colors';
import { GlobalSettingsModel } from './global';
import { IntegrationSettingsModel } from './integration';
import { ProfilesSettingsModel } from './profiles';

export interface SettingsModel extends DL_SettingsModel {
	GlobalModule: GlobalSettingsModel;
	ColorsModule: ColorsSettingsModel;
	IntegrationModule: IntegrationSettingsModel;
	ProfilesModule: ProfilesSettingsModel;
}

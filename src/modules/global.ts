import { BaseModule, HookPriority, sdk, Subscreen } from 'bc-deeplib/deeplib';
import { GlobalSettingsModel } from '../models/global';
import { GuiGlobal } from '../screens/global';
import { changeModColors } from '../utilities/integration';
import { ModuleCategory } from '../utilities/mod_definition';
import { BcStyle } from '../utilities/style';
import { ColorsModule } from './colors';

export class GlobalModule extends BaseModule {
	private static transparentCharacters: number[] = [];

	get settingsScreen(): Subscreen | null {
		return GuiGlobal;
	}

	get settings(): GlobalSettingsModel {
		return super.settings as GlobalSettingsModel;
	}

	set settings(val) {
		super.settings = val;
	}

	get defaultSettings() {
		return <GlobalSettingsModel>{
			modEnabled: true,
			doVanillaGuiOverhaul: true,
			doUseAdvancedColoring: false,
			doUseFlatColor: false,
			doShowLocaleTime: true,
			doIndicateCharacterAbsence: true,
			doShowNewVersionMessage: true
		};
	}

	load(): void {
		ColorsModule.reloadTheme();

		const reload = () => {
			changeModColors();
			BcStyle.reloadAll();
		};

		// try to be sure that the colors are updated 
		// even for mods that are loaded shortly after Themed
		setTimeout(reload, 60_000);
		setTimeout(reload, 300_000);

		sdk.hookFunction(
			'ChatRoomCurrentTime',
			HookPriority.Observe,
			(args, next) => {
				if (!this.settings.doShowLocaleTime) return next(args);

				const currentTime = new Date(Date.now());

				return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			},
			ModuleCategory.Global
		);

		sdk.hookFunction(
			'DialogDraw',
			HookPriority.Observe,
			(args: Parameters<typeof DialogDraw>, next: (args: Parameters<typeof DialogDraw>) => ReturnType<typeof DialogDraw>) => {
				if (!this.settings.modEnabled) return next(args);
				if (!this.settings.doIndicateCharacterAbsence) return next(args);
				if (!(CurrentScreen === 'ChatRoom')) return next(args);
				if (!CurrentCharacter) return next(args);

				next(args);

				if (!CurrentCharacter || !CurrentCharacter?.MemberNumber) return;
				if (CurrentCharacter.IsPlayer()) return;
				if (!CurrentCharacter?.Canvas?.getContext('2d') || !CurrentCharacter?.CanvasBlink?.getContext('2d')) return;
				if (ChatRoomCharacter.includes(CurrentCharacter as OnlineCharacter)) {
					if (GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
						CurrentCharacter.Canvas.getContext('2d')!.globalAlpha = 1.0;
						CurrentCharacter.CanvasBlink.getContext('2d')!.globalAlpha = 1.0;
						CharacterAppearanceBuildCanvas(CurrentCharacter);
						GlobalModule.transparentCharacters.filter((x) => x !== CurrentCharacter!.MemberNumber);
					}
				} else {
					MainCanvas.save();
					MainCanvas.globalCompositeOperation = 'multiply';
					MainCanvas.beginPath();
					MainCanvas.fillStyle = 'gray';
					MainCanvas.fillRect(500, 0, 500, 1000);
					MainCanvas.fill();
					MainCanvas.restore();

					if (!GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
						CurrentCharacter.Canvas.getContext('2d')!.globalAlpha = 0.2;
						CurrentCharacter.CanvasBlink.getContext('2d')!.globalAlpha = 0.2;
						CharacterAppearanceBuildCanvas(CurrentCharacter);
						GlobalModule.transparentCharacters.push(CurrentCharacter.MemberNumber);
					}

					DrawImageEx('Icons/Warning.svg', MainCanvas, 500 + 125, 125, { Width: 250, Height: 250, HexColor: '#ff0000', FullAlpha: true });
				}
			},
			ModuleCategory.Global
		);

		sdk.hookFunction(
			'AppearanceRun',
			HookPriority.Observe,
			(args: Parameters<typeof AppearanceRun>, next: (args: Parameters<typeof AppearanceRun>) => ReturnType<typeof AppearanceRun>) => {
				if (!this.settings.modEnabled) return next(args);
				if (!this.settings.doIndicateCharacterAbsence) return next(args);
				if (!(CurrentScreen === 'Appearance')) return next(args);
				if (!CharacterAppearanceSelection || !CharacterAppearanceSelection.MemberNumber) return next(args);

				next(args);

				if (CharacterAppearanceSelection === null) return;
				if (CharacterAppearanceSelection.IsPlayer()) return;
				if (!CharacterAppearanceSelection?.Canvas?.getContext('2d') || !CharacterAppearanceSelection?.CanvasBlink?.getContext('2d')) return;
				if (ChatRoomCharacter.includes(CharacterAppearanceSelection as OnlineCharacter)) {
					if (GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
						CharacterAppearanceSelection.Canvas.getContext('2d')!.globalAlpha = 1.0;
						CharacterAppearanceSelection.CanvasBlink.getContext('2d')!.globalAlpha = 1.0;
						CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
						GlobalModule.transparentCharacters.filter((x) => x !== CharacterAppearanceSelection!.MemberNumber);
					}
				} else {
					MainCanvas.save();
					MainCanvas.globalCompositeOperation = 'multiply';
					MainCanvas.beginPath();
					MainCanvas.fillStyle = 'gray';
					MainCanvas.fillRect(660, 0, 500, 1000);
					MainCanvas.fill();
					MainCanvas.restore();

					if (!GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
						CharacterAppearanceSelection.Canvas.getContext('2d')!.globalAlpha = 0.2;
						CharacterAppearanceSelection.CanvasBlink.getContext('2d')!.globalAlpha = 0.2;
						CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
						GlobalModule.transparentCharacters.push(CharacterAppearanceSelection.MemberNumber);
					}

					DrawImageEx('Icons/Warning.svg', MainCanvas, 660 + 125, 125, { Width: 250, Height: 250, HexColor: '#ff0000' });
				}
			},
			ModuleCategory.Global
		);

		sdk.hookFunction(
			'ChatRoomSync',
			HookPriority.Observe,
			(args: Parameters<typeof ChatRoomSync>, next: (args: Parameters<typeof ChatRoomSync>) => ReturnType<typeof ChatRoomSync>) => {
				Character.filter(character => character.IsPlayer() || !GlobalModule.transparentCharacters?.includes(character.MemberNumber!));

				return next(args);
			},
			ModuleCategory.Global
		);
	}

	run(): void { }
}

export interface ThemedAPI {
	/** True when this player has Themed turned on. False before login and when the mod is off. */
	isEnabled: () => boolean;
}

declare global {
	const Themed: ThemedAPI;
}

export {};

export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const openMenu = () => ({
	type: OPEN_MENU,
	menuOpen: true,
});
export const closeMenu = () => ({
	type: CLOSE_MENU,
	menuOpen: false,
});

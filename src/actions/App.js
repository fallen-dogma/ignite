import * as types from './actionTypes';

export function showAboutDialog() {
	return {
		type: types.APP.SHOW_ABOUT_DIALOG
	}
}

export function hideAboutDialog() {
	return {
		type: types.APP.HIDE_ABOUT_DIALOG
	}
}
import * as types from '../actions/actionTypes';

const initialState = {
	isAboutDialogShown: false
}

export default function App(state = initialState, action) {
	switch (action.type) {
		case types.APP.SHOW_ABOUT_DIALOG:
			return {
				isAboutDialogShown: true
			};
		case types.APP.HIDE_ABOUT_PANEL:
			return {
				isAboutDialogShown: false
			};
		default:
			return state;
	}
}
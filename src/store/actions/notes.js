import { NOTE_ACTIONS_TYPE } from "./types";

export const delNote = (noteIndex) => {
	return {
		type: NOTE_ACTIONS_TYPE.DELETE_NOTE,
		noteIndex,
	};
};

export const delNoteItem = (noteIndex, noteItemIndex) => {
			return {
				type: NOTE_ACTIONS_TYPE.DELETE_NOTE_ITEM,
				noteIndex,
				noteItemIndex
			};
		};

export const saveNote = (title, content, noteIndex) => {
	return {
		type: NOTE_ACTIONS_TYPE.SAVE_NOTE,
		title,
        content,
        noteIndex,
	};
};

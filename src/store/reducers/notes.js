import { NOTE_ACTIONS_TYPE } from "../actions/types";
const DEFAULT_NOTES = {
	notes: [
		{ title: "Title 1", content: ["Hello", "hi"] },
		{ title: "Title 2", content: ["How", "are"] },
		{ title: "Title 3", content: ["How", "are", "you"] },
    ],
    noteToEdit: []
};

// const findNote = (state, noteId) => {
// 	let noteIndex = state.notes.find((note, index) => {
// 		if (note.id === noteId) {
//             return index;
// 		}
// 	});
// 	return noteIndex;
// };

const notes = (state = DEFAULT_NOTES, action) => {
    let notes;
	switch (action.type) {
		case NOTE_ACTIONS_TYPE.DELETE_NOTE:
			//console.log("state before note deletion", state);
            //noteIndex = findNote(state, action.noteId);
            
			console.log("NoteIndex for deletion", action.noteIndex);
			notes = [...state.notes];
			//console.log("notes in state before deletion", state.notes);
			notes.splice(action.noteIndex, 1);
			// console.log(
			// 	"notes to be written in state after deletion",
			// 	notes
            // );
            console.log("state after note deletion", { ...state, notes });
			return { ...state, notes };

		case NOTE_ACTIONS_TYPE.DELETE_NOTE_ITEM:

            //console.log("state before item deletion", state);
            
			if (action.noteIndex !== undefined) {
				notes = [...state.notes];
				notes[action.noteIndex].content.splice(action.noteItemIndex, 1);
				console.log("state after deleteItem", { ...state, notes });
				return { ...state, notes };
			}
			break;

		case NOTE_ACTIONS_TYPE.SAVE_NOTE:
            console.log("state before saving", state);
            
			// if (action.noteId === undefined) {
			// 	action.noteId = noteIndex = state.notes.length;
			// } else {
			// 	noteIndex = state.notes.length;
            // }
            
            notes = [...state.notes];
            if(!action.noteIndex){
                console.log('next entry at',state.notes.length)
                notes[state.notes.length] = {
					title: action.title,
					content: action.content
				};
            }
            //console.log('notes inside state', notes)
			notes[action.noteIndex] = {
				title: action.title,
				content: action.content
			};
            console.log('state after saving',{...state, notes})
			return { ...state, notes };

		default:
			console.log("initial state", state);
			return state;
	}
};

export default notes;

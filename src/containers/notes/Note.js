import React, { Fragment } from "react";
import { connect } from "react-redux";
import { delNote } from "../../store/actions/notes";
import NoteItem from "./NoteItem";

class Note extends React.Component {
	delNote = () => {
		this.props.delNote(this.props.noteIndex);
	};

	editNote = () => {
		this.props.showModal(this.props.note, this.props.noteIndex);
	};

	render() {
		//console.log("SINGLE Note props", this.props);
		const { title, content } = this.props.note;
		//console.log("Content", this.props.note.content);
		return (
			<Fragment>
				<div className='note-title'>
					{title} <br />
				</div>
				{/* <div>
					ID: {this.props.noteIndex} <br />
				</div> */}

				<div className='note-content'>
					{content.length === 0
						? "Add a note to begin"
						: content.map((noteItem, index) => {
								return (
									<NoteItem
										noteItem={noteItem}
										noteItemIndex={index}
										noteIndex={this.props.noteIndex}
										key={index}
									/>
								);
						  })}
				</div>


				<div className='note-buttons'>
					<button className='delete-note-btn' onClick={this.delNote}>
						<i class='far fa-trash-alt'></i>
					</button>
					<button className='edit-note-btn' onClick={this.editNote}>
						<i class='fas fa-edit'></i>
					</button>
				</div>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	delNote: noteIndex => dispatch(delNote(noteIndex))
	//saveNote: (noteId, title, content) => dispatch(saveNote(noteId, title, content)),
});

export default connect(
	null,
	mapDispatchToProps
)(Note);

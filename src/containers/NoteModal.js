import React, { Component } from "react";
import { connect } from "react-redux";
import { saveNote } from "../store/actions/notes";

class NoteModal extends Component {
	state = {
		title: this.props.note.title,
		content: [...this.props.note.content]
	};

	contentExists = this.state.content.length > 0 ? true : false;

	getTitle = event => {
		//console.log('current inp val', event.target.value);
		//console.log(this.state.content.length);
		let tempState = { ...this.state };
		tempState.title = event.target.value;
		this.setState({ ...tempState });
		//console.log('state: ',this.state)
	};

	// getSingleNote = event => {
	// 	this.setState({ content: [event.target.value] });
	// };

	getAllNotes = index => event => {
		console.log(this.state.content);
		let tempState = { ...this.state };
		tempState.content[index] = event.target.value;
		this.setState({ ...tempState });
	};

	saveNote = () => {
		console.log('data sent for saving',this.state);
		this.props.saveNote(
			this.state.title,
            this.state.content,
            this.props.noteIndex,
		);
		this.props.hideModal();
	};

	addNewField = () => {
		let content = [...this.state.content];
		content.push("");
		this.setState({ content });
	};

	render() {
		const { hideModal } = this.props;
		return (
			<div className='modal'>
				<div className='modal-main'>
					<input
						type='text'
						placeholder='Note Title'
						value={this.state.title}
						onChange={this.getTitle}
					/>

					{this.state.content.map((item, index) => {
						return (
							
							<input
								type='text'
								placeholder='Add a note'
								key={index}
								value={this.state.content[index]}
								onChange={this.getAllNotes(index)}
							/>
						);
					})}

					<button className="add-field" onClick={this.addNewField}>Add Field</button>

					<div className='modal-btn'>

						<button className="save-btn"onClick={this.saveNote}>
							<i class='fas fa-check-square'></i>
						</button>

						<button className="cancel-btn"onClick={hideModal}>
							<i class='fas fa-window-close'></i>
						</button>

					</div>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	saveNote: (title, content, noteIndex) =>
		dispatch(saveNote(title, content, noteIndex))
});
export default connect(
	null,
	mapDispatchToProps
)(NoteModal);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { delNoteItem } from "../../store/actions/notes";

class NoteItem extends Component {
	render() {
		const { noteIndex, noteItemIndex } = this.props;
		return (
			<div className='list-container'>
				<Fragment>
					<input type="checkbox" className="strike"/>
                    <div>{this.props.noteItem}</div>
				</Fragment>

				

				<button
					onClick={() =>
						this.props.delNoteItem(noteIndex, noteItemIndex)
					}
				>
					<i className='far fa-times-circle'></i>
				</button>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	delNoteItem: (noteIndex, noteItemIndex) =>
		dispatch(delNoteItem(noteIndex, noteItemIndex))
});

export default connect(
	null,
	mapDispatchToProps
)(NoteItem);

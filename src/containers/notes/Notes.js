import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";

class Notes extends Component {
	render() {
		//console.log("NOTES", this.props);

		return (
			<div className='notes-container'>
				{this.props.notes.map((note, index) => {
					//console.log("SINGLE NOTE", note);
					return (
						<div key={index} className='note-container'>
							<Note
								contentLength={note.content.length}
								noteIndex={index}
								note={note}
								showModal={this.props.showModal}
								hideModal={this.props.hideModal}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => ({ notes: state.notes.notes });

export default connect(
	mapStateToProps,
	null
)(Notes);

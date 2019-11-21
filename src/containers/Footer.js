import React, { Component } from 'react';

const DEFAULT_NOTE = {
    title: "",
    content: [""],
}

export class Footer extends Component {

    addNote = () => {
        this.props.showModal(DEFAULT_NOTE);
    }
    
    render() {
        return (
			<div className='footer'>
				<button className='add-note' onClick={this.addNote}>
					<i class='fas fa-plus-circle'></i> Add Note
				</button>
			</div>
		);
    }
}

export default Footer;

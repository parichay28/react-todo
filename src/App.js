import React from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./containers/notes/Notes";
import Footer from "./containers/Footer";
import NoteModal from "./containers/NoteModal";

class App extends React.Component {
	state = {
		notes: [
		],
		isModalVisible: false,
		noteToModal: {},
		noteIndex: undefined
	};

	showModal = (noteToModal, noteIndex) => {
		this.setState({ isModalVisible: true, noteToModal, noteIndex });
	};

	hideModal = () => {
		this.setState({ isModalVisible: false });
	};

	render() {
		return (
			<div className='home'>
				<Header />
				<Notes showModal={this.showModal} hideModal={this.hideModal} />

				{this.state.isModalVisible && (
					<NoteModal
						note={this.state.noteToModal}
						noteIndex={this.state.noteIndex}
						hideModal={this.hideModal}
					/>
				)}

				<Footer
					className='footer'
					showModal={this.showModal}
					hideModal={this.hideModal}
				/>
			</div>
		);
	}
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

let store = configureStore();

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("app"));

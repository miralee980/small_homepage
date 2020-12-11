import React from "react";

import "./styles/reset.css";

import "./styles/font.css";
import "./styles/fullpage.css";
import "./styles/moneypot.css";
import "./styles/faq.css";
import "./styles/main.css";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Routes from "./components/Routes";

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Header />
			<Routes />
		</div>
	);
}

export default App;

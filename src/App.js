import React from "react";

import "./styles/reset.css";
import "./styles/moneypot.css";
import "./styles/faq.css";
import "./styles/font.css";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import FooterContainer from "./components/Footer/FooterContainer";
import Routes from "./components/Routes";

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Header />
			<Routes />
			<FooterContainer />
		</div>
	);
}

export default App;

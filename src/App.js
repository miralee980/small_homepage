import React from "react";
// import RootStore, { RootContext } from "./store/RootStore";
import "./styles/reset.css";
import "./styles/font.css";
import "./styles/fullpage.css";
import "./styles/moneypot.css";
import "./styles/faq.css";
import "./styles/main.css";
import "./styles/zendesk-wysiwyg-styles.css";

import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

function App() {
	return (
		// <RootContext.Provider value={new RootStore()}>
		<div className="App">
			<ScrollToTop />
			<Header />
			<Routes />
			<Footer />
		</div>
		// </RootContext.Provider>
	);
}

export default App;

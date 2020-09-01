import React from "react";
import ReactDOM from "react-dom";
import FAQ from "./screens/FAQ";
import Notice from "./screens/Notice";
import NoticeContent1 from "./screens/Notice/NoticeContent1";
import NoticeContent2 from "./screens/Notice/NoticeContent2";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<BrowserRouter basename="/">
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/home" component={App} />
			<Route exact path="/faq" component={FAQ} />
			<Route exact path="/notice" component={Notice} />
			<Route exact path="/notice_0" component={NoticeContent1} />
			<Route exact path="/notice_1" component={NoticeContent2} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

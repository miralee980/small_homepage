import React from "react";
import ReactDOM from "react-dom";
import FAQ from "./screens/FAQ";
import Notice from "./screens/Notice";
import NoticeContent from "./screens/Notice/NoticeContent";

import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<BrowserRouter basename="/">
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/home" component={App} />
			<Route exact path="/faq" component={FAQ} />
			<Route exact path="/notice" render={() => <Notice where="mobile" />} />
			<Route exact path="/noticeContent" component={NoticeContent} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

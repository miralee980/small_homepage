import React from "react";
import { Switch, Route } from "react-router-dom";
import MoneyPot from "../../screens/MoneyPot/index";
import Notice from "../../screens/Notice/index";
import NoticeContent1 from "../../screens/Notice/NoticeContent1";
import Editor from "../../screens/Notice/MyComponent";
import FAQ from "../../screens/FAQ/index";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={MoneyPot} />
			<Route exact path="/notice" component={Notice} />
			<Route exact path="/notice_content" component={NoticeContent1} />
			<Route path="/notice_write" component={Editor} />
			{/* <Route path="/faq" component={FAQ} /> */}
		</Switch>
	);
};
export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import MoneyPot from "../../screens/MoneyPot/index";
import Notice from "../../screens/Notice";
import HomeNoticeContent from "../../screens/Notice/HomeNoticeContent";
import HomeFAQ from "../../screens/HomeFAQ";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={MoneyPot} />
			<Route exact path="/home/faq" component={HomeFAQ} />
			<Route
				exact
				path="/home/notice"
				render={() => <Notice where={"home"} />}
			/>
			<Route exact path="/home/noticeContent" component={HomeNoticeContent} />
		</Switch>
	);
};
export default Routes;

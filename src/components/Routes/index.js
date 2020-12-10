import React from "react";
import { Switch, Route } from "react-router-dom";
import MoneyPot from "../../screens/MoneyPot/index";
import MainNotice from "../../screens/HomeNotice/index";
import NoticeContent1 from "../../screens/HomeNotice/NoticeContent1";
import NoticeContent2 from "../../screens/HomeNotice/NoticeContent2";
import NoticeContent3 from "../../screens/HomeNotice/NoticeContent3";
import NoticeContent4 from "../../screens/HomeNotice/NoticeContent4";
import NoticeContent5 from "../../screens/HomeNotice/NoticeContent5";
import NoticeContent6 from "../../screens/HomeNotice/NoticeContent6";
// import Editor from "../../screens/Notice/MyComponent";
import HomeFAQ from "../../screens/HomeFAQ";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={MoneyPot} />
			<Route exact path="/home/faq" component={HomeFAQ} />
			<Route exact path="/home/notice" component={MainNotice} />
			<Route exact path="/home/notice_0" component={NoticeContent1} />
			<Route exact path="/home/notice_1" component={NoticeContent2} />
			<Route exact path="/home/notice_2" component={NoticeContent3} />
			<Route exact path="/home/notice_3" component={NoticeContent4} />
			<Route exact path="/home/notice_4" component={NoticeContent5} />
			<Route exact path="/home/notice_5" component={NoticeContent6} />
			{/*<Route path="/notice_write" component={Editor} /> */}
		</Switch>
	);
};
export default Routes;

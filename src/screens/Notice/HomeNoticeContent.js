import React from "react";
import { Link } from "react-router-dom";
import NoticeContent from "./NoticeContent";

function HomeNoticeContent({ location }) {
	return (
		<div className="wrapper">
			<NoticeContent location={location} />

			<div className="view_btn_wrap">
				<Link to={"/home/notice"} className="btn_tit">
					목록
				</Link>
			</div>
		</div>
	);
}

export default HomeNoticeContent;

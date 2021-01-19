import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoticeContent from "./NoticeContent";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";

function HomeNoticeContent({ location }) {
	const { state } = location;
	const data = state.content;

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

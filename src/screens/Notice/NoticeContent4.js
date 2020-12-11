import React from "react";
const queryString = require("query-string");

function NoticeContent4({ location }) {
	const { search } = location;
	const queryObj = queryString.parse(search);
	const { num, date } = queryObj;
	return (
		<div className="wrapper">
			<div className="title_wrap">
				<p className="title_notice">공지사항</p>
			</div>

			<div className="notice_cont">
				<ul className="notice_list">
					<li className="notice_wrap">
						<div
							className="notice_tit_wrap"
							style={{
								borderTop: "1px solid #343c55",
								borderBottom: "1px solid #343c55"
							}}
						>
							<span className="notice_num">{num}</span>
							<p className="notice_tit">KB금융그룹 OpenAPI 서비스 중단</p>
							<span className="notice_date">{date}</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							KB금융그룹 OpenAPI 플랫폼 DB 업그레이드 작업으로 아래와 같이
							비대면계좌개설 서비스가 중단됩니다.
							<br />
							<br />
							- 중단 시간: 2020.10.09 (금) 03:00~04:00
							<br />
							- 중단 업무: OpenAPI 연계 서비스(비대면계좌개설, 잔고 조회)
							<br />
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NoticeContent4;
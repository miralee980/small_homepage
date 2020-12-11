import React from "react";
const queryString = require("query-string");

function NoticeContent5({ location }) {
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
							<p className="notice_tit">주민등록증 진위 확인 서비스 중단</p>
							<span className="notice_date">{date}</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							주민등록증 진위 확인 서비스 중단
							<br />
							<br />
							행정안전부 차세대 주민등록정보시스템 서비스 개통 일정
							변경(2020.10.05 -> 2020.10.12)으로 아래와 같이 주민등록시스템
							서비스가 일시 중단됩니다.
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								[주민등록증 진위 확인 서비스 중단 내용]
							</b>
							<br />
							- 중단 시간: 2020.10.08. (목) 18:00 ~ 2020.10.11. (일) 15:00
							<br />
							- 중단 업무: 주민등록시스템 업무 및 모든 연계 서비스 중단(계좌
							개설 시 주민등록증 진위 확인 서비스 불가)
							<br />
							<br />
							※ 운전면허증을 이용한 사용자 확인 서비스는 가능합니다.
							<br />
						</p>
					</li>
				</ul>
			</div>

			{/* <div className="view_btn_wrap">
				<Link to={"/notice"} className="btn_tit">
					목록
				</Link>
			</div> */}
		</div>
	);
}

export default NoticeContent5;

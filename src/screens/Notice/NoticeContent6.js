import React from "react";
const queryString = require("query-string");

function NoticeContent6({ location }) {
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
							<p className="notice_tit">운전면허증 진위 확인 서비스 중단</p>
							<span className="notice_date">{date}</span>
						</div>
					</li>
					<li class="view_content">
						<p class="view_content_tit">
							경찰청의 '교통경찰업무관리시스템(TCS)' 작업과 관련하여 금융기관
							신분증 진위확인 서비스가 아래와 같이 일시 중단됩니다.
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								[운정면허증 진위 확인 서비스 중단 내용]
							</b>
							<br />
							- 중단 일시: 2020.12.31(목) 23:00 ~ 2021.01.03(일) 14:00
							<br />
							- 중단 사유: 노후 서버장비 교체
							<br />
							- 중단 업무: 비대면 계좌 개설 시 운정면허증 진위 확인 서비스 불가
							<br />
							<br />
							※ 주민등록증을 이용한 사용자 확인 서비스는 가능합니다.
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

export default NoticeContent6;

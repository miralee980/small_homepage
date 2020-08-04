import React from "react";
import { Link } from "react-router-dom";

function NoticeContent() {
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
							<span className="notice_num">29</span>
							<p className="notice_tit">
								[공지] 서울사랑상품권 추가발행 일정 및 할인율 안내
							</p>
							<span className="notice_date">2020.07.17</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							제로페이 가맹점에서 사용할 수 있는 서울사랑상품권 할인 판매가
							시작됩니다. 사용할 지역에 맞게 핀트에서 구매하여 할인 혜택을
							받아보세요.
							<br />
							<br />
							발행 일정과 할인율은 아래와 같습니다. (발행시간은 오전 10시)
							<br />
							<br />
							7월 13일 (월) : 10% 할인 – 관악구. 7% 할인 – 중구, 용산구, 성동구,
							광진구 7월 14일 (화) : 10% 할인 – 강북구, 도봉구. 7% 할인 -
							동대문구, 성북구 7월 15일 (수) : 10% 할인 - 노원구, 은평구,
							서대문구. 7% 할인 - 양천구 7월 16일 (목) : 7% 할인 - 강서구,
							구로구, 금천구, 영등포구 7월 17일 (금) : 10% 할인 - 동작구(1차).
							7% 할인 - 서초구, 송파구, 강동구 7월 27일 (월) : 10% 할인 -
							강남구. 7% 할인 - 동작구(2차) 9월 01일 (화) : 7% 할인 - 중랑구 9월
							28일 (월) : 7% 할인 - 마포구
							<br />
							<br />
							<br />
							<br />
							한도 소진된 지역 상품권은 구매할 수 없습니다. 판매 완료된 지역구를
							확인하세요! (7/17 00시 기준)
							<br />
							<br />
							판매 완료 지역구 : 동대문구, 성북구, 도봉구, 은평구, 관악구,
							양천구, 금천구
						</p>
					</li>
				</ul>
			</div>

			<div className="view_btn_wrap">
				<Link to={"/notice"} className="btn_tit">
					목록
				</Link>
			</div>
		</div>
	);
}

export default NoticeContent;

import React from "react";
// import { Link } from "react-router-dom";

function NoticeContent2() {
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
							<span className="notice_num">02</span>
							<p className="notice_tit">
								[이벤트] 내 손안의 자산관리 비서, 머니포트 오픈 기념 이벤트!
							</p>
							<span className="notice_date">2020.08.31</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							이벤트 기간 중 머니포트에서 투자 상품을 구매하시면{" "}
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								수수료 할인 쿠폰
							</b>
							을 제공합니다.
							<br />
							자세한 내용은 아래를 참고하여 주세요.
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								[이벤트 내용]
							</b>
							<br />
							* 이벤트 기간 : 2020.08.25~2020.11.24
							<br />
							* 이벤트 대상 : 머니포트 가입자 중 투자 자문 상품 구매 고객
							<br />
							* 이벤트 참여 방법 : 머니포트 내 투자자문 상품 구매 시 쿠폰 자동
							적용
							<br />
							* 특이사항 : 중복 적용 가능(ex. 투자 상품 2개 구매 시 전부 적용)
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								[이벤트 유의사항]
							</b>
							<br />
							* 본 이벤트는 머니포트 내 투자자문 상품 구매 시 쿠폰이 자동으로
							적용되는 이벤트입니다.
							<br />
							* 테마 상품 구매에는 적용되지 않습니다.
							<br />
							* 이벤트 관련 문의는 cs@qunatecinvestment.co.kr로 전달
							부탁드리겠습니다.
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

export default NoticeContent2;

import React from "react";
import { Link } from "react-router-dom";
const queryString = require("query-string");

function NoticeContent2({ location }) {
	const { search } = location;
	const queryObj = queryString.parse(search);
	const { num, date } = queryObj;
	return (
		<div className="wrapper">
			<div className="notice_title_wrap">
				<p className="title_notice">공지사항</p>
			</div>

			<div className="notice_cont">
				<ul className="notice_list">
					<li className="notice_wrap">
						<div
							className="notice_tit_wrap"
							style={{
								borderTop: "1px solid #ccc",
								borderBottom: "1px solid #ccc"
							}}
						>
							<span className="notice_num">{num}</span>
							<p className="notice_tit">
								[이벤트] 내 손안의 자산관리 비서, 머니포트 오픈 기념 이벤트!
							</p>
							<span className="notice_date">{date}</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							내 손안의 자산관리 비서, 머니포트 오픈 기념 이벤트!
							<br />
							<br />
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
							* 이벤트 기간 : 2020.09.03~2020.12.02
							<br />
							* 이벤트 대상 : 머니포트 가입자 중 상품 구매 고객
							<br />
							* 이벤트 참여 방법 : 머니포트 내 상품 구매 시 쿠폰 자동 적용
							<br />
							* 특이사항 : <br />
							&nbsp;&nbsp;&nbsp;&nbsp;1. 이벤트 기간 중 사용 횟수 제한 없이 상품
							구매 시 모두 적용
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;2. 쿠폰은 머니포트 내 모든 상품에
							적용됩니다.
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
							* 본 이벤트는 머니포트 내 상품 구매 시 쿠폰이 자동으로 적용되는
							이벤트입니다.
							<br />
							* 쿠폰 지급 및 적용에 대한 별도 알림 서비스는 제공하지 않습니다.
							<br />
							* 이벤트 관련 문의는 cs@qunatecinvestment.co.kr로 전달
							부탁드리겠습니다.
							<br />
						</p>
					</li>
				</ul>
			</div>

			<div className="view_btn_wrap">
				<Link to={"/home/notice"} className="btn_tit">
					목록
				</Link>
			</div>
		</div>
	);
}

export default NoticeContent2;

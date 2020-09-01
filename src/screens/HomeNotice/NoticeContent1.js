import React from "react";
import { Link } from "react-router-dom";

function NoticeContent1() {
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
							<span className="notice_num">01</span>
							<p className="notice_tit">
								[공지] 내 손 안의 자산관리 비서, 머니포트 앱 오픈 안내
							</p>
							<span className="notice_date">2020.08.31</span>
						</div>
					</li>
					<li className="view_content">
						<p className="view_content_tit">
							이제 머니포트를 통해 언제 어디서나 전문 자산관리사의 투자 전략을
							경험해보세요! <br />
							보다 쉽고 간편하게 소중한 나의 자산을 운영할 수 있습니다.
							<br />
							<br />
							<br />
							머니포트는 다음과 같은 기능을 제공합니다.
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								1. 투자 자문 상품 서비스
							</b>
							<br />
							- 전문 자산 관리 인력들이 설계한 투자 상품 포트폴리오 제공
							<br />
							- 글로벌 시장의 다양한 자산을 바탕으로 투자자 성향에 맞는 투자
							상품 가입 가능
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								2. 간편 계좌 개설 및 투자
							</b>
							<br />
							- 비대면을 통한 계좌 개설 지원
							<br />
							- 버튼 클릭 한번으로 투자 완료
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								3. 해외 주식 테마 투자
							</b>
							<br />
							- 테마에 맞는 해외 묶음 주식 주문 가능
							<br />
							- 일정 비율 조합을 통해 나만의 테마 상품 구성 가능
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								4. 투자 수익률을 한눈에 비교
							</b>
							<br />
							- 원하는 대로 자유롭게 조합한 테마 투자의 수익률을 한눈에 확인
							가능
							<br />
							- 커스텀 리그를 통해 사용자간 상품 공유 및 수익률 공유가 가능
							<br />
							<br />
							<br />
							* 자산관리 플랫폼 머니포트는 콴텍 주식회사에서 개발하고 자회사인
							콴텍 투자자문에서 책임 및 서비스를 제공합니다.
							<br />
							<br />
							<b
								style={{
									fontWeight: "bold"
								}}
							>
								[머니포트 이용 문의]
							</b>
							<br />* 문의는 cs@qunatecinvestment.co.kr로 전달 부탁드리겠습니다.
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

export default NoticeContent1;

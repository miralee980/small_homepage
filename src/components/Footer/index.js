import React from "react";

const Footer = (/*{ companyInfo }*/) => {
	return (
		<footer className="footer fp-auto-height section">
			<div className="footer_inner">
				<div className="footer_info">
					<p className="footer_name">콴텍투자자문(주)</p>
					<div className="footer_detail">
						<span className="footer_detail_txt">
							사업자등록번호 146-81-01264
						</span>
						<span className="footer_detail_txt">대표 최용석</span> <br />
						<span className="footer_detail_txt">
							(07320) 서울특별시 영등포구 여의대로 14, 14층 콴텍투자자문(주)
						</span>{" "}
						<br />
						<span className="footer_detail_txt">
							14, Yeoui-daero, Yeongdeungpo-gu, Seoul, Republic of Korea
						</span>
						<br />
					</div>

					<div className="footer_tab">
						<a
							href="http://www.quantec.co.kr/SettingPage/03_terms_02.html"
							className="footer_tab_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							서비스 이용약관
						</a>
						<a
							href="http://www.quantec.co.kr/SettingPage/03_terms_03.html"
							className="footer_tab_item"
							target="_blank"
							rel="noopener noreferrer"
						>
							개인정보처리방침
						</a>
					</div>
				</div>

				<div className="footer_sns">
					<div className="footer_sns_item">
						<a
							href="https://www.facebook.com/moneypot.official/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={require("../../assets/images/ic-footer-facebook.svg")}
								alt="facebook"
								className="facebook"
							/>
						</a>
					</div>
					<div className="footer_sns_item">
						<a
							href="https://blog.naver.com/moneypot_official"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={require("../../assets/images/ic-footer-blog.svg")}
								alt="blog"
								className="blog"
							/>
						</a>
					</div>
				</div>
			
			</div>
			<div className="footer_guidance">
				<div className="btn_guidance">
					<a href="http://fine.fss.or.kr/main/fin_comp/fincomp_inqui/comsearch01list.jsp">
						제도권 금융회사 조회
					</a>
				</div>
				<div className="text_guidance">
						주식회사 콴텍투자자문은 ‘자본시장과 금융투자에 관한 법률 제 12조’에 따라 자본금, 전문인력, 이해상충방지 요건 등을 갖추고 금융감독위원회에 등록된 적격 투자자문사입니다. 따라서 금융투자상품의 가치 또는 투자판단에 대한 자문에 응하고 투자종목에 대한 종류, 종목, 취득, 처분, 수량과 시기 등을 고객에게 자문할 수 있는 법적인 자격을 가지며 제도권 금융기관으로서 금융감독원의 감독과 검사를 받고 있습니다.
				</div>
			</div>
		</footer>
	);
};
export default Footer;

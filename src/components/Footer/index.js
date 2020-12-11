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
							(07320) 서울특별시 영등포구 여의대로 14, 콴텍투자자문(주) 14층
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
		</footer>
	);
};
export default Footer;

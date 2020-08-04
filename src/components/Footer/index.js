import React from "react";

const Footer = ({ companyInfo }) => {
	return (
		<footer className="footer">
			<div className="footer_inner">
				<p className="footer_name">콴텍투자자문(주)</p>
				<div className="footer_detail">
					<span className="detail_txt">사업자등록번호 146-81-01264</span>
					<span className="detail_txt">대표 최용석</span> <br />
					<span className="detail_txt">{companyInfo.location}</span> <br />
					<span className="detail_txt">{companyInfo.location_en}</span>
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
		</footer>
	);
};
export default Footer;

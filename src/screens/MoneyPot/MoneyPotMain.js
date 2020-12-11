import React from "react";

const MoneyPotMain = () => {
	return (
		<div className="section1_inner">
			<div className="section1_logo">
				<img
					src={require("../../assets/images/logo-mp-bu@3x.png")}
					alt="logo_blue"
					className="logo_blue"
				/>
			</div>
			<div className="section1_ko">
				<img
					src={require("../../assets/images/img-logo-ko@3x.png")}
					alt="logo_ko"
					className="logo_ko"
				/>
			</div>
			<div className="section1_sub">
				<p>
					투자 전문가와 함께하는 <br />
					쉽고 편한 나만의 자산관리 앱
				</p>
			</div>
			<div className="section1_phone"></div>
		</div>
	);
};

export default MoneyPotMain;

import React from "react";

const MoneyPotMain = () => {
	return (
		<div className="section1_inner">
			<div className="section1_text">
				<p className="section1_sub">투자 전문가가 제안하는 똑똑한 자산관리</p>

				<img
					src={require("../../assets/images/img-mp-main@3x.png")}
					alt="section1_tit"
					className="section1_tit"
				/>
			</div>
			<div className="section1_image">
				<img
					src={require("../../assets/images/img-app@3x.png")}
					alt="img_app"
					className="img_app"
				/>
			</div>
		</div>
	);
};

export default MoneyPotMain;

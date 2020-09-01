import React from "react";

const MoneyService = () => {
	return (
		<div className="section2_inner">
			<div className="section2_text">
				<p className="section2_tit">쉽고 간편하게 시작해보세요.</p>
				<p className="section2_txt">
					머니포트에서는 전문 자산관리 인력들이 직접 운용하는
					<br />
					글로벌 투자 상품을 통해
					<br />
					간편하게 자산관리를 시작할 수 있습니다.
				</p>
			</div>
			<div className="section2_image">
				<img
					src={require("../../assets/images/img-character@3x.png")}
					alt="img_character"
					className="img_character"
				/>
			</div>
		</div>
	);
};

export default MoneyService;

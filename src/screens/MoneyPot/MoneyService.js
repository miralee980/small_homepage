import React from "react";

const MoneyService = () => {
	return (
		<div className="section2_inner">
			<div className="section2_inner">
				<div className="section2_tit">
					<p>
						자산관리,
						<br className="section2_br" />
						이제 쉽고 편하게 시작하세요!
					</p>
				</div>
				<div className="section2_sub">
					<p>
						머니포트는 자산관리 전문가들이 직접 설계한
						<br />
						ETF 자문 상품과 ETF 커스텀 상품 서비스를 제공합니다.
						<br />
						다양한 글로벌 시장 자산을 바탕으로
						<br className="section2_txt_br" />
						고객님에게 딱 맞는 맞춤 투자 상품을 선택할 수 있습니다.
						<br />
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
		</div>
	);
};

export default MoneyService;

import React from "react";

const Function = () => {
	return (
		<div className="section3_inner">
			<div className="slide">
				<div className="slide_wrap">
					<div className="section3_image">
						<img
							src={require("../../assets/images/img-feature-1@3x.png")}
							alt="img_feature"
							className="img_feature"
						/>
					</div>
					<div className="section3_text">
						<p className="section3_tit">
							전문가가 <br className="section3_br" />
							운용해 주는
							<br />
							맞춤 투자 <br className="section3_br" />
							자문 상품 서비스
						</p>
						<p className="section3_txt">
							머니포트에서는 고객님께
							<br />
							딱 맞는 맞춤 투자 상품을 <br />
							선택할 수 있습니다.
						</p>
					</div>
				</div>
			</div>

			<div className="slide">
				<div className="slide_wrap">
					<div className="section3_image">
						<img
							src={require("../../assets/images/img-feature-2@3x.png")}
							alt="img_feature"
							className="img_feature"
						/>
					</div>
					<div className="section3_text">
						<p className="section3_tit">
							눈감고도 <br className="section3_br" />
							할 수 있는
							<br />
							간편 투자 <br />
						</p>
						<p className="section3_txt">
							간편 투자 계좌개설은 물론,
							<br />
							버튼 하나로 손쉽게 <br />
							원하는 투자 상품의
							<br className="section3_br" />
							매매가 가능합니다.
						</p>
					</div>
				</div>
			</div>

			<div className="slide">
				<div className="slide_wrap">
					<div className="section3_image">
						<img
							src={require("../../assets/images/img-feature-3@3x.png")}
							alt="img_feature"
							className="img_feature"
						/>
					</div>
					<div className="section3_text">
						<p className="section3_tit">
							해외 ETF를 <br />
							내 마음대로
							<br className="section3_br" />
							커스텀 <br />
						</p>
						<p className="section3_txt">
							해외 유명 ETF를 고객이
							<br className="section3_br" />
							원하는대로 선택하고 <br />
							최적의 투자 비중을 추천받아
							<br />
							나만의 커스터마이징
							<br className="section3_br" />
							상품을 만들 수 있습니다.
						</p>
					</div>
				</div>
			</div>

			<div className="slide">
				<div className="slide_wrap">
					<div className="section3_image">
						<img
							src={require("../../assets/images/img-feature-4@3x.png")}
							alt="img_feature"
							className="img_feature"
						/>
					</div>
					<div className="section3_text">
						<p className="section3_tit">
							트렌드에 따른 <br />
							주식 테마별
							<br className="section3_br" />
							분류 <br />
						</p>
						<p className="section3_txt">
							최근 트렌드에 따라
							<br className="section3_br" />
							업데이트되는 <br />
							테마 주식을 통해
							<br className="section3_br" />
							선택 종목의 정보와
							<br />
							최적 투자 비중을
							<br className="section3_br" />
							추천받으세요.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Function;

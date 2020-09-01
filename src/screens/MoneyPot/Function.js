import React, { useState } from "react";

const FunctionLeft = ({ pageNum, setPageNum }) => {
	return (
		<div
			className="btn_left_wrap"
			onClick={() => setPageNum(pageNum === 1 ? 4 : pageNum - 1)}
		>
			<img
				src={require("../../assets/images/ic-arrow-left.svg")}
				alt="btn_left"
				className="btn_left"
			/>
		</div>
	);
};

const FunctionRight = ({ pageNum, setPageNum }) => {
	return (
		<div
			className="btn_right_wrap"
			onClick={() => setPageNum(pageNum === 4 ? 1 : pageNum + 1)}
		>
			<img
				src={require("../../assets/images/ic-arrow-right.svg")}
				alt="btn_right"
				className="btn_right"
			/>
		</div>
	);
};

const FunctionImage = ({ pageNum }) => {
	return (
		<div className="section3_image_area">
			<img
				src={require(`../../assets/images/img-feature-${pageNum}@3x.png`)}
				alt="feature"
				className="feature"
			/>
		</div>
	);
};

const FunctionContents = ({ pageNum, setPageNum }) => {
	return (
		<>
			<div className="section3_text_area">
				{pageNum === 1 ? (
					<div className="feature_wrap">
						<p className="feature_tit">
							전문가가 직접
							<br />
							운용하는 투자상품
						</p>
						<p className="feature_txt">
							머니포트에서는
							<br class="section3_br" />
							당신의 투자성향에 맞는
							<br />
							다양한 투자 상품을 구매하실 수 있습니다.
						</p>
					</div>
				) : pageNum === 2 ? (
					<div className="feature_wrap">
						<p className="feature_tit">
							간편한
							<br />
							투자 환경 구현
						</p>
						<p className="feature_txt">
							복잡했던 증권계좌 개설은 간편하게,
							<br class="section3_br" />
							버튼 하나면 내가 원하는 투자를
							<br />
							쉽게 시작할 수 있습니다.
						</p>
					</div>
				) : pageNum === 3 ? (
					<div className="feature_wrap">
						<p className="feature_tit">
							해외 주식 <br />
							테마 투자
						</p>
						<p className="feature_txt">
							애플, 구글 등 유명 해외주식을 원하는대로
							<br class="section3_br" />
							선택, 조절해 나만의 비율로 조합된
							<br />
							포트폴리오 ‘마이포트’를 만드세요.
						</p>
					</div>
				) : pageNum === 4 ? (
					<div className="feature_wrap">
						<p className="feature_tit">
							투자 수익률을
							<br />
							한눈에 비교
						</p>
						<p className="feature_txt">
							나만의 커스텀 상품을 만들어보세요.
							<br class="section3_br" />
							커스텀 리그를 통해 내 전략의 경쟁력을
							<br />
							확인, 비교하고 개선 및 향상시킬 수 있습니다.
						</p>
					</div>
				) : null}

				<div className="indicator_wrap">
					<ul className="indicator">
						<li
							className={pageNum === 1 ? "dot active" : "dot"}
							onClick={() => setPageNum(1)}
						>
							<span></span>
						</li>
						<li
							className={pageNum === 2 ? "dot active" : "dot"}
							onClick={() => setPageNum(2)}
						>
							<span></span>
						</li>
						<li
							className={pageNum === 3 ? "dot active" : "dot"}
							onClick={() => setPageNum(3)}
						>
							<span></span>
						</li>
						<li
							className={pageNum === 4 ? "dot active" : "dot"}
							onClick={() => setPageNum(4)}
						>
							<span></span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

const Function = () => {
	const [pageNum, setPageNum] = useState(1);
	return (
		<>
			<div className="section3_inner_lg">
				<FunctionLeft pageNum={pageNum} setPageNum={setPageNum} />
				<FunctionImage pageNum={pageNum} />
				<FunctionContents pageNum={pageNum} setPageNum={setPageNum} />
				<FunctionRight pageNum={pageNum} setPageNum={setPageNum} />
			</div>

			<div className="section3_inner_sm">
				<div className="section3_up">
					<FunctionLeft pageNum={pageNum} setPageNum={setPageNum} />
					<FunctionContents pageNum={pageNum} setPageNum={setPageNum} />
					<FunctionRight pageNum={pageNum} setPageNum={setPageNum} />
				</div>

				<div className="section3_down">
					<FunctionImage pageNum={pageNum} />
				</div>
			</div>
		</>
	);
};

export default Function;

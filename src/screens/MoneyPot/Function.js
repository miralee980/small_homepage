import React from "react";

const Function = () => {
	return (
		<>
			<div className="section3_inner_lg">
				<div className="btn_left_wrap">
					<a href="#">
						<img
							src={require("../../assets/images/ic-arrow-left.svg")}
							alt="btn_left"
							className="btn_left"
						/>
					</a>
				</div>

				<div className="section3_image_area">
					<img
						src={require("../../assets/images/img-phone-account@3x.png")}
						alt="device"
						className="device_wrap"
					/>
					<div className="screen_wrap">
						<img
							src={require("../../assets/images/img-account@3x.jpg")}
							alt="screen1"
							className="screen"
						/>
					</div>
				</div>

				<div className="section3_text_area">
					<div className="feature_wrap">
						<p className="feature_tit">간편한 계좌개설</p>
						<p className="feature_txt">
							복잡했던 증권 계좌개설,
							<br />
							언제 어디서든 신분증만 있으면
							<br />
							1분만에 계좌개설이 완료됩니다.
						</p>
					</div>

					<div className="indicator_wrap">
						<ul className="indicator">
							<li className="dot active">
								<span></span>
							</li>
							<li className="dot">
								<span></span>
							</li>
							<li className="dot">
								<span></span>
							</li>
							<li className="dot">
								<span></span>
							</li>
							<li className="dot">
								<span></span>
							</li>
						</ul>
					</div>
				</div>

				<div className="btn_right_wrap">
					<a href="#">
						<img
							src={require("../../assets/images/ic-arrow-right.svg")}
							alt="btn_right"
							className="btn_right"
						/>
					</a>
				</div>
			</div>

			<div className="section3_inner_sm">
				<div className="section3_up">
					<div className="btn_left_wrap">
						<a href="#">
							<img
								src={require("../../assets/images/ic-arrow-left.svg")}
								alt="btn_left"
								className="btn_left"
							/>
						</a>
					</div>

					<div className="section3_text_area">
						<div className="feature_wrap">
							<p className="feature_tit">간편한 계좌개설</p>
							<p className="feature_txt">
								복잡했던 증권 계좌개설,
								<br />
								언제 어디서든 신분증만 있으면
								<br />
								1분만에 계좌개설이 완료됩니다.
							</p>
						</div>

						<div className="indicator_wrap">
							<ul className="indicator">
								<li className="dot active">
									<span></span>
								</li>
								<li className="dot">
									<span></span>
								</li>
								<li className="dot">
									<span></span>
								</li>
								<li className="dot">
									<span></span>
								</li>
								<li className="dot">
									<span></span>
								</li>
							</ul>
						</div>
					</div>

					<div className="btn_right_wrap">
						<a href="#">
							<img
								src={require("../../assets/images/ic-arrow-right.svg")}
								alt="btn_right"
								className="btn_right"
							/>
						</a>
					</div>
				</div>

				<div className="section3_down">
					<div className="section3_image_area">
						<img
							src={require("../../assets/images/img-phone-account@3x.png")}
							alt="device"
							className="device_wrap"
						/>
						<div className="screen_wrap">
							<img
								src={require("../../assets/images/img-account@3x.jpg")}
								alt="screen1"
								className="screen"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Function;

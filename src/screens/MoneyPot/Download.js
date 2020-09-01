import React from "react";

const Download = () => {
	return (
		<div className="section4_inner">
			<div className="section4_text_area">
				<div className="app_logo">
					<img
						src={require("../../assets/images/logo-mp-lg@3x.png")}
						alt="app_logo"
						className="download_logo"
					/>
				</div>

				<div className="section4_title">
					<p className="section4_tit">앱 다운로드</p>
					<p className="section4_txt">
						구글 플레이 스토어를 통하여 다운받을 수 있습니다.
						<br />
						애플 앱 스토어에서도 곧 만나요!
					</p>
				</div>

				<div className="download_btn">
					<a href="#">
						<img
							src={require("../../assets/images/ic-googleplaystore@3x.png")}
							alt="img_google"
							className="img_google"
						/>
						<p className="download_txt">Google Play</p>
					</a>
				</div>
			</div>

			<div className="section4_image_area">
				<img
					src={require("../../assets/images/img-download@3x.png")}
					alt="download_img"
					className="download_img"
				/>
			</div>
		</div>
	);
};

export default Download;

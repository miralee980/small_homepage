import React from "react";

const Download = () => {
	return (
		<div className="section4_inner">
			<div className="section4_text_area">
				<div className="app_logo">
					<img
						src={require("../../assets/images/logo-mp-lg@3x.png")}
						alt="app_logo"
					/>
				</div>

				<div className="section4_title">
					<p className="section4_tit">앱 다운로드</p>
					<p className="section4_txt">
						머니포트는 <br className="section4_br" />
						구글플레이스토어를 통해 다운받을 수 있습니다.
					</p>
				</div>

				<div className="download_btn">
					<a href="#">
						<img
							src={require("../../assets/images/ic-googleplaystore@3x.png")}
							alt="googleplaystore"
							className="ic_playstore"
						/>
						<p className="download_txt">Google Play</p>
					</a>
				</div>
			</div>

			<div className="section4_image_area">
				<img
					src={require("../../assets/images/img-download-mockup@3x.png")}
					alt="mockup_image"
					className="download_img"
				/>
			</div>
		</div>
	);
};

export default Download;

import React from "react";

const Download = () => {
	return (
		<div className="section4_inner">
			<div className="section4_left">
				<div className="section4_1">
					<div className="section4_logo">
						<img
							src={require("../../assets/images/logo-mp-lg@3x.png")}
							alt="img_logo_download"
							className="img_logo_download"
						/>
					</div>
					<p className="section4_tit">앱 다운로드</p>
				</div>
				<div className="section4_2">
					<p className="section4_txt">
						전문가와 함께하는 인공지능 기술 기반 자산관리 서비스! <br />
						지금 바로 머니포트를 통해 쉽고 편한 자산관리를 경험해보세요!
					</p>
					<div className="btn_googleplay">
						<a href="https://play.google.com/store/apps/details?id=quantec.com.moneypot">
							<img
								src={require("../../assets/images/ic-googleplaystore@3x.png")}
								alt="ic_google"
								className="ic_google"
							/>
							<p className="txt_googleplay">Google Play</p>
						</a>
					</div>
				</div>
			</div>

			<div className="section4_right">
				<div className="section4_3">
					<img
						src={require("../../assets/images/img-download@3x.png")}
						alt="img_download"
						className="img_download"
					/>
				</div>
				<div className="section4_4">
					<p className="section4_txt">
						전문가와 함께하는 인공지능 기술 기반 자산관리 서비스! <br />
						지금 바로 머니포트를 통해 쉽고 편한 자산관리를 경험해보세요!
					</p>
					<div className="btn_googleplay">
						<a href="https://play.google.com/store/apps/details?id=quantec.com.moneypot">
							<img
								src={require("../../assets/images/ic-googleplaystore@3x.png")}
								alt="ic_google"
								className="ic_google"
							/>
							<p className="txt_googleplay">Google Play</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;

import React from "react";

const VideoScreen = () => {
	return (
		<div
			className="section1_inner"
			// data-vide-bg="mp4:{require(../../assets/videos/MP_main}, poster:{require(../../assets/images/MP_main}"
		>
			<div className="section1_text">
				<p className="section1_sub">언제 어디서나, 내 손 안의 자산관리 비서</p>

				<img
					src={require("../../assets/images/text-main-1920@3x.png")}
					alt="section1_tit_img"
					className="section1_tit_img"
				/>
				<p className="section1_tit">
					로보 자산관리 앱 <br className="section1_br" />
					머니포트
				</p>
			</div>
			<div className="video_wrap">
				<video loop muted data-autoplay className="video">
					<source
						src={require("../../assets/videos/MP_main.mp4")}
						type="video/mp4"
					/>
				</video>
			</div>
			{/* <div className="video_wrap">
						<video className="video">
							<source
								src={require("../../assets/videos/main.MP4")}
								type="video/mp4"
							/>
						</video>
					</div> */}
		</div>
	);
};

export default VideoScreen;

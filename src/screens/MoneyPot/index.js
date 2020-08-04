import React from "react";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import FooterContainer from "../../components/Footer/FooterContainer";
import VideoScreen from "./VideoScreen";
import MoneyService from "./MoneyService";
import TimeService from "./TimeService";
import Function from "./Function";
import Download from "./Download";
const FULLPAGE_LICENSE_KEY = "10279CE1-488E46AB-917B4BFB-13CAB35A";

class MoneyPot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selSection: 0,
			selSlide: 0
		};
	}
	onLeave(origin, destination, direction) {
		console.log("onLeave", { origin, destination, direction });

		this.setState({ selSection: destination.index });
	}

	onSlideLeave(section, origin, destination, direction) {
		console.log("onSlideLeave", { section, origin, destination, direction });
		this.setState({ selSlide: destination.index });
	}

	moveSectionMoenypot() {
		window.fullpage_api.moveTo(1);
	}

	moveSectionService() {
		window.fullpage_api.moveTo(2);
	}

	moveSectionFuction() {
		window.fullpage_api.moveTo(3);
	}

	moveSectionDownload() {
		window.fullpage_api.moveTo(4);
	}

	// moveSectionDown() {
	// 	window.fullpage_api.moveSectionDown();
	// }
	render() {
		const Menu = () => (
			<div className="vertical_nav">
				<ul className="vertical_nav_list actions">
					{/* 머니포트 */}
					<li className="nav_wrap">
						<p className="nav_item" onClick={() => this.moveSectionMoenypot()}>
							<span className="nav_small"></span>
							<span
								className={this.state.selSection === 0 ? "active_white" : ""}
							></span>
						</p>

						<span
							className={
								this.state.selSection === 0 ? "active_title" : "nav_title"
							}
						>
							머니포트
						</span>
					</li>
					{/* 서비스 소개 */}
					<li className="nav_wrap">
						<p className="nav_item" onClick={() => this.moveSectionService()}>
							<span className="nav_small"></span>
							<span
								className={
									this.state.selSection === 1 && this.state.selSlide === 0
										? "active_blue"
										: this.state.selSection === 1 && this.state.selSlide === 1
										? "active_white"
										: ""
								}
							></span>
						</p>

						<span
							className={
								this.state.selSection === 1 && this.state.selSlide === 0
									? "active_title blue"
									: this.state.selSection === 1 && this.state.selSlide === 1
									? "active_title"
									: "nav_title"
							}
						>
							서비스 소개
						</span>
					</li>

					{/* 기능 소개 */}
					<li className="nav_wrap">
						<p className="nav_item" onClick={() => this.moveSectionFuction()}>
							<span className="nav_small"></span>
							<span
								className={this.state.selSection === 2 ? "active_blue" : ""}
							></span>
						</p>

						<span
							className={
								this.state.selSection === 2 ? "active_title blue" : "nav_title"
							}
						>
							기능 소개
						</span>
					</li>

					{/* 다운로드 */}
					<li className="nav_wrap">
						<p className="nav_item" onClick={() => this.moveSectionDownload()}>
							<span className="nav_small"></span>
							<span
								className={this.state.selSection === 3 ? "active_white" : ""}
							></span>
						</p>

						<span
							className={
								this.state.selSection === 3 ? "active_title" : "nav_title"
							}
						>
							다운로드
						</span>
					</li>
				</ul>
			</div>
		);
		return (
			<div id="wrap">
				{/* CONTENT */}
				<Menu />
				<ReactFullpage
					// debug /* Debug logging */
					// fullpage options
					// anchors={anchors}
					licenseKey={FULLPAGE_LICENSE_KEY}
					slidesNavigation={true}
					onLeave={this.onLeave.bind(this)}
					onSlideLeave={this.onSlideLeave.bind(this)}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section section1">
									<VideoScreen />
								</div>
								<div className="section">
									<div className="slide  section2" id="slide1">
										<MoneyService />
									</div>
									<div className="slide section2_blue" id="slide2">
										<TimeService />
									</div>
								</div>
								<div className="section section3">
									<Function />
								</div>
								<div className="section section4">
									<Download />
								</div>
								<div className="section fp-auto-height">
									<FooterContainer />
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}

export default MoneyPot;

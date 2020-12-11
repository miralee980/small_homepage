import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../../components/Footer";
import MoneyPotMain from "./MoneyPotMain";
import MoneyService from "./MoneyService";
import Function from "./Function";
import Download from "./Download";
const FULLPAGE_LICENSE_KEY = "10279CE1-488E46AB-917B4BFB-13CAB35A";

class MoneyPot extends React.Component {
	render() {
		return (
			<div id="wrap">
				{/* CONTENT */}
				<ReactFullpage
					licenseKey={FULLPAGE_LICENSE_KEY}
					slidesNavigation={true}
					scrollHorizontally={true}
					navigation={true}
					navigationPosition={"left"}
					navigationTooltips={[
						"머니포트",
						"서비스 소개",
						"미리보기",
						"다운로드"
					]}
					slidesNavPosition={"bottom"}
					render={() => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section section1">
									<MoneyPotMain />
								</div>
								<div className="section  section2">
									<MoneyService />
								</div>
								<div className="section section3 " data-percentage="90">
									<Function />
								</div>
								<div className="section section4">
									<Download />
								</div>
								<div className="section fp-auto-height">
									<Footer />
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

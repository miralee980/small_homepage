import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="header_logo">
			<Link to="/">
				{/* Logo_Large */}
				<img
					src={require("../../assets/images/logo-mp-lg@3x.png")}
					alt="logo"
					className="logo_lg"
				/>

				{/* Logo_Small */}
				<img
					src={require("../../assets/images/logo-mp-sm@3x.png")}
					alt="logo"
					className="logo_sm"
				/>
			</Link>
		</div>
	);
};
export default Logo;

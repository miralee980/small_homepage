import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="header_logo">
			<Link to="/">
				{/* Logo_Large */}
				<img
					src={require("../../assets/images/logo-mp-wt@3x.png")}
					alt="logo"
					className="logo"
				/>
			</Link>
		</div>
	);
};
export default Logo;

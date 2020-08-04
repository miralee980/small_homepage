import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = (props) => {
	return (
		<header className="header">
			<Logo />

			<div className="header_nav">
				<ul className="header_nav_list">
					<li className="header_nav_item">
						<Link to="/faq" className="nav_txt">
							자주 묻는 질문
						</Link>
					</li>
					<li className="header_nav_item">
						<Link to="notice" className="nav_txt">
							공지사항
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
export default Header;

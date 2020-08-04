import React, { useState } from "react";
import Search from "./Search";
import Stocks from "./Stocks";
import Investment from "./Investment";

function FAQ() {
	const [selTab, setTab] = useState("해외주식투자");

	return (
		<div className="wrapper">
			<Search />

			<div className="faq_cont">
				<div className="faq_tab">
					<span onClick={() => setTab("해외주식투자")}>
						<p
							className={selTab === "해외주식투자" ? "stocks active" : "stocks"}
						>
							해외주식투자
						</p>
					</span>
					<span onClick={() => setTab("투자자문상품")}>
						<p
							className={
								selTab === "투자자문상품" ? "advisory active" : "advisory"
							}
						>
							투자자문상품
						</p>
					</span>
				</div>

				{selTab === "해외주식투자" ? <Stocks /> : <Investment />}
			</div>
		</div>
	);
}

export default FAQ;

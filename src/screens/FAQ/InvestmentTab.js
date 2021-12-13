import React from "react";

const InvestmentTab = ({ selFaqList, setFaqList, tabList }) => {
	return (
		<div className="faq_list" style={{ paddingTop: "60px" }}>
			<ul className="stocks_list">
				<li>
					<span
						onClick={() => setFaqList("all")}
						className={selFaqList === "all" ? "list_item active" : "list_item"}
					>
						전체
					</span>
				</li>
				{tabList.length
					? tabList.map((tab, index) => {
							return (
								<li key={index}>
									<span
										onClick={() => setFaqList(tab.name)}
										className={
											selFaqList === tab.name ? "list_item active" : "list_item"
										}
									>
										{tab.name}
									</span>
								</li>
							);
					  })
					: null}
			</ul>

			<select
				className="faq_select"
				value={selFaqList}
				onChange={(event) => setFaqList(event.target.value)}
			>
				<option value="all">전체</option>
				{tabList.length
					? tabList.map((tab, index) => {
							return (
								<option key={index} value={tab.name}>
									{tab.name}
								</option>
							);
					  })
					: null}
			</select>
		</div>
	);
};

export default InvestmentTab;

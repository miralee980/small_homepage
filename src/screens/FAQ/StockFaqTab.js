import React from "react";

const StockFaqTab = ({ selFaqList, setFaqList }) => {
	return (
		<div className="faq_list">
			<ul className="stocks_list">
				<li>
					<p
						onClick={() => setFaqList("all")}
						className={selFaqList === "all" ? "list_item active" : "list_item"}
					>
						전체
					</p>
				</li>
				<li>
					<p
						onClick={() => setFaqList("preparation")}
						className={
							selFaqList === "preparation" ? "list_item active" : "list_item"
						}
					>
						투자 전 준비사항
					</p>
				</li>
				<li>
					<p
						onClick={() => setFaqList("investment")}
						className={
							selFaqList === "investment" ? "list_item active" : "list_item"
						}
					>
						투자 방법
					</p>
				</li>
				<li>
					<p
						onClick={() => setFaqList("divident")}
						className={
							selFaqList === "divident" ? "list_item active" : "list_item"
						}
					>
						배당금 입금
					</p>
				</li>
				<li>
					<p
						onClick={() => setFaqList("sell")}
						className={selFaqList === "sell" ? "list_item active" : "list_item"}
					>
						매도 방법
					</p>
				</li>
				<li>
					<p
						onClick={() => setFaqList("tax")}
						className={selFaqList === "tax" ? "list_item active" : "list_item"}
					>
						세금 관련
					</p>
				</li>
			</ul>

			<select
				className="faq_select"
				value={selFaqList}
				onChange={(event) => setFaqList(event.target.value)}
			>
				<option value="all">전체</option>
				<option value="preparation">투자 전 준비사항</option>
				<option value="investment">투자 방법</option>
				<option value="divident">배당금 입금</option>
				<option value="sell">매도 방법</option>
				<option value="tax">세금 관련</option>
			</select>
		</div>
	);
};

export default StockFaqTab;

import React from "react";

const InvestmentTab = ({ selFaqList, setFaqList }) => {
	return (
		<div className="faq_list">
			<ul className="stocks_list">
				<li>
					<span
						onClick={() => setFaqList("all")}
						className={selFaqList === "all" ? "list_item active" : "list_item"}
					>
						전체
					</span>
				</li>
				<li>
					<span
						onClick={() => setFaqList("investment")}
						className={
							selFaqList === "investment" ? "list_item active" : "list_item"
						}
					>
						투자 자문 상품
					</span>
				</li>
				<li>
					<span
						onClick={() => setFaqList("account")}
						className={
							selFaqList === "account" ? "list_item active" : "list_item"
						}
					>
						계좌 개설
					</span>
				</li>
				<li>
					<span
						onClick={() => setFaqList("order")}
						className={
							selFaqList === "order" ? "list_item active" : "list_item"
						}
					>
						상품 주문
					</span>
				</li>
				<li>
					<span
						onClick={() => setFaqList("moneypot")}
						className={
							selFaqList === "moneypot" ? "list_item active" : "list_item"
						}
					>
						머니포트 앱 사용
					</span>
				</li>
			</ul>

			<select
				className="faq_select"
				value={selFaqList}
				onChange={(event) => setFaqList(event.target.value)}
			>
				<option value="all">자주 묻는 질문</option>
				<option value="investment">투자 자문 상품</option>
				<option value="account">계좌 개설</option>
				<option value="order">상품 주문</option>
				<option value="moneypot">머니포트 앱 사용</option>
			</select>
		</div>
	);
};

export default InvestmentTab;

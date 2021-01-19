import React, { useState, useEffect } from "react";

const QuestionItem = ({ question }) => {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, [question]);
	const createMarkup = () => {
		if (question) {
			return {
				__html: `${question.body}`
			};
		}
	};
	return (
		<li className="faq_wrap">
			<p className="question" onClick={() => setOpen(!isOpen)}>
				<p className="question_section">
					{question.section_id === 900000625006
						? "머니포트 앱 사용"
						: question.section_id === 900001620223
						? "상품 주문"
						: question.section_id === 900000624986
						? "계좌 개설"
						: question.section_id === 900000624966
						? "투자 자문 상품"
						: ""}
				</p>
				<p className="question_tit active">
					{question ? question.title : null}
				</p>
				{isOpen ? (
					<img
						src={require("../../assets/images/ic-arrow-up.svg")}
						alt="ic_arrow_up"
						className="ic_arrow_up"
					/>
				) : (
					<img
						src={require("../../assets/images/ic-arrow-down.svg")}
						alt="ic_arrow_down"
						className="ic_arrow_down"
					/>
				)}
			</p>
			{isOpen ? (
				<div className="answer">
					<div
						dangerouslySetInnerHTML={createMarkup()}
						className="answer_txt"
					></div>
					{/* {question ? question.answer:null} */}
				</div>
			) : null}
		</li>
	);
};

export default QuestionItem;

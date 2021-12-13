import React, { useState, useEffect } from "react";

const QuestionItem = ({ question, tabList }) => {
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
	const list = tabList.filter((tab) => question.section_id === tab.id);
	return (
		<li className="faq_wrap">
			<p className="question" onClick={() => setOpen(!isOpen)}>
				<p className="question_section">{list.length ? list[0].name : ""}</p>
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

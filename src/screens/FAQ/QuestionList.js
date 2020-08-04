import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questionList }) => {
	console.log(questionList[0]);
	return (
		<ul className="qlist">
			{questionList
				? questionList.map((question, i) => {
						return <QuestionItem key={i} question={questionList[i]} />;
				  })
				: null}
		</ul>
	);
};

export default QuestionList;

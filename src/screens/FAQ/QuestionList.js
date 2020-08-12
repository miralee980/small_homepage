import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questionList, selNum, DEFINE_LIST_NUM}) => {
	const totalNum = questionList? questionList.length:0;
	const endNum =
		selNum * DEFINE_LIST_NUM > totalNum
			? totalNum
			: selNum * DEFINE_LIST_NUM;
	const list = [];
		for(var i = (selNum-1) * DEFINE_LIST_NUM; i < endNum; i++){
			list.push(<QuestionItem key={i} question={questionList[i]} />)
		}
	return (
		<ul className="qlist">
			{list}
		</ul>
	);
};

export default QuestionList;

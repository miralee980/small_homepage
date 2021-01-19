import React, { useState, useEffect } from "react";
import InvestmentTab from "./InvestmentTab";
import QuestionList from "./QuestionList";
import PageNum from "../../components/PageNum";
const DEFINE_LIST_NUM = 10;

const FAQContents = ({ searchText }) => {
	const [questionList, setQuestionList] = useState();
	const [totalNum, setTotalNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	const [selFaqList, setFaqList] = useState("all");
	const [data, setData] = useState([]);

	useEffect(() => {
		var url =
			"https://quantec.zendesk.com/api/v2/help_center/ko/categories/900001257903/articles.json";
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Basic aW5mb0BxdWFudGVjLmNvLmtyOiFxdWFudDAzMzA="
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		if (selFaqList === "all") {
			url =
				"https://quantec.zendesk.com/api/v2/help_center/ko/categories/900001257903/articles.json";
		} else if (selFaqList === "investment") {
			url =
				"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900000624966/articles.json";
		} else if (selFaqList === "account") {
			url =
				"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900000624986/articles.json";
		} else if (selFaqList === "order") {
			url =
				"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900001620223/articles.json";
		} else if (selFaqList === "moneypot") {
			url =
				"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900000625006/articles.json";
		}
		fetch(url, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setSelNum(1);
				setData(result.articles);
				setQuestionList(result.articles);
				setTotalNum(result.count);
			})
			.catch((error) => console.log("error", error));
	}, [selFaqList]);

	useEffect(() => {
		setSelNum(1);
		if (searchText && searchText.length > 0) {
			const searchResult = data.filter((text) => {
				return text.title.indexOf(searchText) >= 0;
			});

			console.log(searchResult);
			setTotalNum(searchResult.length);
			setQuestionList(searchResult);
		} else {
			setTotalNum(data.length);
			setQuestionList(data);
		}
	}, [searchText]);

	return (
		<div className="faq_cont">
			<InvestmentTab selFaqList={selFaqList} setFaqList={setFaqList} />
			<div className="faq_box">
				<QuestionList
					questionList={questionList}
					selNum={selNum}
					DEFINE_LIST_NUM={DEFINE_LIST_NUM}
				/>
			</div>
			<PageNum
				totalNum={totalNum}
				selNum={selNum}
				listNum={DEFINE_LIST_NUM}
				setSelNum={setSelNum}
			/>
		</div>
	);
};
export default FAQContents;

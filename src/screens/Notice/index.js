import React, { useState, useEffect } from "react";
import NoticeList from "./NoticeList";

function Notice({ where }) {
	const [data, setData] = useState([]);
	const [totalNum, setTotalNum] = useState(0);
	console.log(where);
	useEffect(() => {
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

		fetch(
			"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900000427983/articles.json",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setData(result.articles);
				setTotalNum(result.count);
			})
			.catch((error) => console.log("error", error));
	}, []);

	return <NoticeList data={data} totalNum={totalNum} where={where} />;
}

export default Notice;

import React, { useState, useEffect /*, useContext */ } from "react";
// import { observer } from "mobx-react";
// import { RootContext } from "../../store/RootStore";
import NoticeList from "./NoticeList";

const Notice = ({ where }) => {
	const [data, setData] = useState([]);
	const [totalNum, setTotalNum] = useState(0);
	// const root = useContext(RootContext);
	// const { notice } = root;
	//console.log(where);
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
};

export default Notice;

import React, { useState } from "react";
import Search from "./Search";
import FAQContents from "../FAQ/FAQContents";

const HomeFAQ = () => {
	const [searchText, setSearchText] = useState("");
	return (
		<div className="wrapper">
			<Search setSearchText={setSearchText} />
			<FAQContents searchText={searchText} />
		</div>
	);
};
export default HomeFAQ;

import React from "react";

const Search = () => {
	return (
		<div className="title_wrap">
			<p className="title_faq">자주 묻는 질문</p>
			<form className="search_wrap">
				<img
					src={require("../../assets/images/ic-search-blue.svg")}
					alt="ic_search"
					className="ic_search"
				/>
				<input
					className="search_input"
					type="text"
					name="search_input"
					placeholder="궁금한 내용을 검색해보세요."
				/>
			</form>
		</div>
	);
};

export default Search;

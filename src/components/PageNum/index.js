import React, { useEffect } from "react";

const PageNum = (props) => {
	const { totalNum, selNum, listNum, setSelNum } = props;
	const pageNum =
		parseInt(totalNum / listNum) + (totalNum % listNum > 0 ? 1 : 0);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [selNum]);

	const onPageNumClickHandler = (index) => {
		setSelNum(Number(index));
	};

	const onPrevClickHandler = () => {
		if (selNum > 1) setSelNum(selNum - 1);
	};

	const onNextClickHandler = () => {
		if (selNum < pageNum) setSelNum(selNum + 1);
	};

	var list = [];
	for (var i = 1; i < pageNum + 1; i++) {
		list.push(
			<li
				className={selNum === i ? "press_num on" : "press_num"}
				key={i}
				data-index={i}
				onClick={(e) => {
					onPageNumClickHandler(e.currentTarget.dataset.index);
				}}
			>
				<div className={selNum === i ? "num on" : "num"}>{i}</div>
			</li>
		);
	}
	return (
		<div className="press_number_wrap">
			<ul className="press_number_list">
				<li
					className="press_prev"
					onClick={(e) => {
						onPrevClickHandler();
					}}
				>
					<img
						src={require("../../assets/images/ic-m-partners-arrowleft.svg")}
						alt="prev_btn"
					/>
				</li>
				{list}
				<li
					className="press_next"
					onClick={(e) => {
						onNextClickHandler(pageNum);
					}}
				>
					<img
						src={require("../../assets/images/ic-m-partners-arrowright.svg")}
						alt="next_btn"
					/>
				</li>
			</ul>
		</div>
	);
};
export default PageNum;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageNum from "../../components/PageNum";
const DEFINE_LIST_NUM = 10;

function Notice() {
	const [data, setData] = useState([]);
	const dataList = [];
	const [totalNum, setTotalNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	useEffect(() => {
		makeData();
	}, []);

	const makeData = () => {
		var list = [];
		var i = 0;
		while (i < 40) {
			let data = {
				num: i,
				title: "[공지] 서울사랑상품권 추가발행 일정 및 할인율 안내 - " + i,
				date: "2020.07.17"
			};
			list.push(data);
			i++;
		}
		setData(list);
		setTotalNum(list.length);
	};

	const makeList = () => {
		var endNum =
			selNum * DEFINE_LIST_NUM > totalNum ? totalNum : selNum * DEFINE_LIST_NUM;
		for (var i = (selNum - 1) * DEFINE_LIST_NUM; i < endNum; i++) {
			dataList.push(
				<li className="notice_wrap" key={i}>
					<Link to={"/notice_content"}>
						<div className="notice_tit_wrap on">
							<span className="notice_num">{data[i].num}</span>
							<p className="notice_tit">{data[i].title}</p>
							<span className="notice_date">{data[i].date}</span>
						</div>
					</Link>
				</li>
			);
		}
		return <>{dataList}</>;
	};

	return (
		<div className="wrapper">
			<div className="title_wrap">
				<p className="title_notice">공지사항</p>
			</div>

			<div className="notice_cont">
				<ul className="notice_list">
					<li className="notice_wrap">
						<div className="notice_tit_wrap_b">
							<span className="notice_num_b">번호</span>
							<p className="notice_tit_b">제목</p>
							<span className="notice_date_b">등록일</span>
						</div>
					</li>

					{data.length > 0 ? makeList() : null}
				</ul>
				<PageNum
					totalNum={totalNum}
					selNum={selNum}
					listNum={DEFINE_LIST_NUM}
					setSelNum={setSelNum}
				/>
			</div>
			<div className="view_btn_wrap">
				<Link to={"/notice_write"} className="btn_tit">
					글쓰기
				</Link>
			</div>
		</div>
	);
}

export default Notice;

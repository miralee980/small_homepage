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
		var list = [
			{
				num: "04",
				title: "[공지] KB금융그룹 OpenAPI 서비스 중단",
				date: "2020.10.06",
				url: "/home/notice_3"
			},
			{
				num: "03",
				title: "[공지] 주민등록증 진위 확인 서비스 중단",
				date: "2020.09.25",
				url: "/home/notice_2"
			},
			{
				num: "02",
				title: "[이벤트] 내 손안의 자산관리 비서, 머니포트 오픈 기념 이벤트!",
				date: "2020.08.31",
				url: "/home/notice_1"
			},
			{
				num: "01",
				title: "[공지] 내 손 안의 자산관리 비서, 머니포트 앱 오픈 안내",
				date: "2020.08.31",
				url: "/home/notice_0"
			}
		];

		setData(list);
		setTotalNum(list.length);
	};

	const makeList = () => {
		var endNum =
			selNum * DEFINE_LIST_NUM > totalNum ? totalNum : selNum * DEFINE_LIST_NUM;
		for (var i = (selNum - 1) * DEFINE_LIST_NUM; i < endNum; i++) {
			dataList.push(
				<li className="notice_wrap" key={i}>
					<Link to={`${data[i].url}`}>
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
			{/* <div className="view_btn_wrap">
				<Link to={"/notice_write"} className="btn_tit">
					글쓰기
				</Link>
			</div> */}
		</div>
	);
}

export default Notice;

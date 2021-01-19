import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageNum from "../../components/PageNum";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";
const DEFINE_LIST_NUM = 10;

function NoticeList({ data, totalNum, where }) {
	// const [data, setData] = useState([]);
	const dataList = [];
	// const [totalNum, setTotalNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	const makeList = () => {
		var endNum =
			selNum * DEFINE_LIST_NUM > totalNum ? totalNum : selNum * DEFINE_LIST_NUM;
		for (var i = (selNum - 1) * DEFINE_LIST_NUM; i < endNum; i++) {
			dataList.push(
				<li className="notice_wrap" key={i}>
					<Link
						to={{
							pathname:
								where === "home" ? "/home/noticeContent" : "/noticeContent",
							state: {
								content: data[i]
							}
						}}
					>
						<div className="notice_tit_wrap on">
							<p className="notice_tit">{data[i].title}</p>
							<span className="notice_date">
								{moment(data[i].created_at).format(dateFormat)}
							</span>
						</div>
					</Link>
				</li>
			);
		}
		return <>{dataList}</>;
	};

	return (
		<div className="wrapper">
			<div
				className="notice_title_wrap"
				style={{ borderBottom: "1px solid #eaeaea" }}
			>
				<p className="title_notice">공지사항</p>
			</div>

			<div className="notice_cont">
				<ul className="notice_list">
					<li className="notice_wrap">
						<div className="notice_tit_wrap_b">
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
		</div>
	);
}

export default NoticeList;

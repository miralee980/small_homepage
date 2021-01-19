import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";

function NoticeContent({ location }) {
	const { state } = location;
	const data = state.content;

	const createMarkup = () => {
		if (data) {
			return {
				__html: `${data.body}`
			};
		}
	};
	return (
		<div className="wrapper" style={{ marginTop: 0 }}>
			<div className="notice_title_wrap">
				<p className="title_notice" style={{ marginTop: 0 }}>
					공지사항
				</p>
			</div>

			<div className="notice_cont">
				<ul className="notice_list">
					<li className="notice_wrap">
						<div
							className="notice_tit_wrap"
							style={{
								borderTop: "1px solid #ccc",
								borderBottom: "1px solid #ccc"
							}}
						>
							<p className="notice_tit">{data ? data.title : ""}</p>
							<span className="notice_date">
								{data ? moment(data.created_at).format(dateFormat) : ""}
							</span>
						</div>
					</li>
					<li
						className="view_content"
						style={{ padding: "20", textAlign: "left" }}
					>
						<div dangerouslySetInnerHTML={createMarkup()}></div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NoticeContent;

import React from "react";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";

function NoticeContent({ location }) {
	const { state } = location;
	const { body, title, created_at } = state;

	const createMarkup = () => {
		if (body) {
			return {
				__html: `${body}`
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
							<p className="notice_tit">{title ? title : ""}</p>
							<span className="notice_date">
								{created_at ? moment(created_at).format(dateFormat) : ""}
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

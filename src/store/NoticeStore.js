import { makeAutoObservable } from "mobx";

export default class NoticeStore {
	noticeList = [];
	totalNum = 0;
	nextUrl = "";
	alertMessage = "";
	messageVisible = false;

	constructor(root) {
		makeAutoObservable(this);
		this.root = root;
		// this.loadNotice();
	}

	setNoticeData(data, totalCount, nextUrl) {
		console.log("=============> setNoticeData");
		this.noticeList = data;
		console.log(data);
		this.totalNum = totalCount;
		console.log(totalCount);

		if (nextUrl) {
			console.log(nextUrl);
			this.nextUrl = nextUrl;
		}
	}

	// // Fetches all Notice from the server.
	// loadNotice() {
	// 	var myHeaders = new Headers();
	// 	myHeaders.append(
	// 		"Authorization",
	// 		"Basic aW5mb0BxdWFudGVjLmNvLmtyOiFxdWFudDAzMzA="
	// 	);
	// 	// myHeaders.append("Referrer Policy", "strict-origin-when-cross-origin");

	// 	var requestOptions = {
	// 		method: "GET",
	// 		accept: "*/*",
	// 		headers: myHeaders,
	// 		redirect: "follow"
	// 	};

	// 	fetch(
	// 		"https://quantec.zendesk.com/api/v2/help_center/ko/sections/900000427983/articles.json",
	// 		requestOptions
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log(result);
	// 			this.setNoticeData(result.articles, result.count, result.next_page);
	// 		})
	// 		.catch((error) => console.log("error", error));
	// 	// this.transportLayer.fetchTodos().then((fetchedTodos) => {
	// 	// 	runInAction(() => {
	// 	// 		fetchedTodos.forEach((json) => this.updateTodoFromServer(json));
	// 	// 		this.isLoading = false;
	// 	// 	});
	// 	// });
	// }
}

import { makeAutoObservable } from "mobx";

export default class FaqStore {
	faqList = [];
	totalNum = 0;
	nextUrl = null;
	alertMessage = "";
	messageVisible = false;

	constructor(root) {
		makeAutoObservable(this);
		this.root = root;
	}

	setFaqData = (data, totalCount, nextUrl) => {
		console.log("=============> setFaqList");
		this.faqList = data;
		console.log(data);
		this.totalNum = totalCount;
		console.log(totalCount);

		if (nextUrl) {
			console.log(nextUrl);
			this.nextUrl = nextUrl;
		}
	};
}

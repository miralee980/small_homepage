import { createContext } from "react";
import Notice from "./NoticeStore";
import Faq from "./FaqStore";

export default class RootStore {
	constructor() {
		this.notice = new Notice(this);
		this.faq = new Faq(this);
	}
}

export const RootContext = createContext();

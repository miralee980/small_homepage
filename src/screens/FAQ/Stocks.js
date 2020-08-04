import React, { useState, useEffect } from "react";
import StockFaqTab from "./StockFaqTab";
import QuestionList from "./QuestionList";
import PageNum from "../../components/PageNum";
const DEFINE_LIST_NUM = 10;

const Stocks = () => {
	const [selFaqList, setFaqList] = useState("all");
	const [questionList, setQuestionList] = useState([]);
	const [totalNum, setTotalNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	const answer_txt = `font-size: 14px;font-weight: 400;font-stretch: normal;font-style: normal;line-height: 1.63;letter-spacing: -0.3px;color: #343c55;margin-bottom: 1.83%;`;
	const txt_md = "font-weight: 700;";
	const txt_blue = "color: #4e7cff;";
	useEffect(() => {
		setQuestionList([
			{
				questionTitle: "해외주식 투자 순서는 어떻게 되나요?",
				answer: `
				<p style="${answer_txt}">
					1. 머니포트에서 신한금융투자
					<span style=${txt_md}>CMA 계좌를 개설</span>합니다.
				</p>
				<p style="${answer_txt}">
					2. 투자할 금액을 <span style="${txt_md}">CMA 계좌로 입금</span>
					합니다. (은행 뱅킹, 간편 송금 등 이용)
				</p>
				<p style="${answer_txt}">
					3. 머니포트 메인에서 마음에 드는 상품을 선택하시고 투자 주문을
					진행합니다.
				</p>
				<p style="${answer_txt}">
					4. 미국 시장 개장 이후(다음 영업일) 체결 여부를 확인합니다. (우측 상단
					<b>
						<span style="${txt_blue}">‘내 자산 보기’ 아이콘</span>
					</b>
					이용)
				</p>
			`
			},
			{
				questionTitle: "CMA 계좌는 어떻게 개설하나요?",
				answer: `<p style="${answer_txt}">
				- 머니포트 메인 <span style="${txt_md}">'무료 계좌 개설'</span> 및 우측 상단
				<span style="${txt_md}">'내 자산 보기'</span>에서 신청 (약 3분 소요)
			</p>
			<p style="${answer_txt}">
				- 본인 확인을 위해 신분증(주민등록증, 운전면허증)을 꼭 준비해주세요.
			</p>`
			},
			{
				questionTitle: "투자할 금액은 어떻게 입금하나요?",
				answer: `<p style="${answer_txt}">
				- 본인의 주거래은행 앱의 모바일 뱅킹을 통해 CMA 계좌로 입금합니다.
			</p>
			<p style="${answer_txt}">
				- 인터넷 뱅킹, ATM, 타사 간편 송금 등 고객님이 익숙한 방식으로 입금하시면
				됩니다.
			</p>
			<p style="${answer_txt}">
				머니포트에서 만드신 CMA 계좌번호는
				<span style="${txt_md}">'내 사잔 보기'</span> 메뉴에서 복사 가능합니다. (뱅킹
				앱에 붙여넣기 가능)
			</p>
			`
			},
			{
				questionTitle: "투자를 할 수 있는 시간이 정해져 있나요?",
				answer: `<p style="${answer_txt}">
				- 머니포트의 해외투자는 실시간이 아니며, 영업일 8:00 ~ 21:00 이외 시간 및
				휴일에 주문된 내역은 해외거래소 개장 시점에 한번에 전송됩니다.
			</p>
			<p style="${answer_txt}">
				- 미국 증권시장이 쉬는 날은 평일에도 매매할 수 없으며, 국내 휴장일에도 해외
				개장 시에는 매매 가능합니다.
			</p>`
			},
			{
				questionTitle: "CMA 계좌에 잔액이 부족해도 투자 주문이 가능한가요?",
				answer: `<p style="${answer_txt}">- 금액이 부족해도 투자 주문은 가능합니다.</p>
				<p style="${answer_txt}">
					- 부족한 금액은 21:00 이전까지 CMA 계좌로 입금하면 정상적으로 거래가
					진행됩니다.
				</p>`
			},
			{
				questionTitle: "환전을 해야 해외주식을 살 수 있나요?",
				answer: `<p style="${answer_txt}">
				- 환전할 필요가 없습니다. 주식을 원화로 주문하면 체결된 금액만큼 자동
				환전됩니다.
			</p>
			<p style="${answer_txt}">
				- 미국 달러를 보유하고 계시다면, 미국 달러를 먼저 사야하고 추가로 필요한
				원화만큼을 자동 환전합니다.
			</p>
			`
			},
			{
				questionTitle: "매수 주문 시 주문 필요금액이 왜 높게 나오나요?",
				answer: `<p style="${answer_txt}">- 주가 및 환율 변동에 대비하여 약 10%의 예비금을 더하여 계산합니다.</p>
				<p style="${answer_txt}">- 체결 후 남은 금액은 자동으로 CMA 계좌로 입금됩니다.</p>
			`
			},
			{
				questionTitle: "거래 체결은 언제 완료되나요?",
				answer: `<p style="${answer_txt}">- 주문 이후 해외거래소 개장 시점에 체결됩니다. (체결 여부는 다음 날 오전 9시 이후 '내 자산 보기' 메뉴의 '투자내역'에서 확인 가능합니다.</p>`
			},
			{
				questionTitle: "주문이 실패되었어요.",
				answer: `<p style="${answer_txt}">- 해외거래소 전송 시점에 계좌 잔액이 부족하면 주문이 취소됩니다.</p>
				<p style="${answer_txt}">- 투자 종목 가격이 예비금을 포함한 주문가보다 급등할 경우에도 취소될 수 있습니다.</p>`
			},
			{
				questionTitle: "매수/매도 주문을 취소하고 싶어요.",
				answer: `<p style="${answer_txt}">
				- 주문한 당일 08:00 ~ 21:00 사이에 취소할 수 있습니다.
			</p>
			`
			}
		]);
		setTotalNum(setQuestionList.length);
	}, []);

	return (
		<div>
			<StockFaqTab selFaqList={selFaqList} setFaqList={setFaqList} />
			<div className="faq_box">
				<QuestionList questionList={questionList} />
			</div>
			<PageNum
				totalNum={totalNum}
				selNum={selNum}
				listNum={DEFINE_LIST_NUM}
				setSelNum={setSelNum}
			/>
		</div>
	);
};
export default Stocks;

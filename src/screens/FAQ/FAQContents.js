import React, { useState, useEffect } from "react";
import InvestmentTab from "./InvestmentTab";
import QuestionList from "./QuestionList";
import PageNum from "../../components/PageNum";
const DEFINE_LIST_NUM = 10;

const FAQContents = ({ searchText }) => {
	const [questionList, setQuestionList] = useState();
	const [totalNum, setTotalNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	const [selFaqList, setFaqList] = useState("all");

	const answer_txt = `font-size: 14px;font-weight: 400;font-stretch: normal;font-style: normal;line-height: 1.63;letter-spacing: -0.3px;color: #343c55;margin-bottom: 1.83%;`;
	// const txt_md = "font-weight: 700;";
	// const txt_blue = "color: #4e7cff;";

	const [investQuestion, setInvestQuestion] = useState([
		{
			questionTitle: "해외주식 자문상품 계약 순서는 어떻게 되나요?",
			answer: `<p style="${answer_txt}">1. 머니포트에서 KB증권 위탁계좌를 개설합니다.</p>
			<p style="${answer_txt}">2. 머니포트 메인 페이지 또는 상품리스트 페이지에서 마음에 드는 자문 상품을 선택하고 투자 예약 주문을 진행합니다.</p>
			<p style="${answer_txt}">3. 주문 과정 중 입력한 투자할 금액을 위탁 계좌로 입금 합니다. (은행 뱅킹, 간편 송금 등 이용)</p>
			<p style="${answer_txt}">4. 미국 시장 개장 이후(다음 영업일) 체결 여부를 확인합니다. (우측 상단 ‘내 자산 보기’ 아이콘 이용)</p>`
		},
		{
			questionTitle: "KB증권 위탁 계좌는 어떻게 개설하나요?",
			answer: `<p style="${answer_txt}">1. 머니포트 메인 페이지 중앙 상단의 '계좌 개설/MY 자산' 또는 우측 상단의 '내 자산 보기'를 선택 후 계좌 개설 진행 (약 3분 소요)</p>
			<p style="${answer_txt}">2. 본인 확인을 위해 본인 명의의 휴대폰, 신분증(주민등록증 또는 운전면허증), 가지고 계신 은행 또는 증권사 계좌번호를 꼭 준비해주세요.</p>`
		}
	]);
	const [accountQuestion, setAccountQuestion] = useState([
		{
			questionTitle: "계좌 개설 진행이 안돼요.",
			answer: `<p style="${answer_txt}">- 2010년 3월부터 시행된 금융감독원 시행 대포통장방지정책에 따라, 20영업일 이내에 은행 혹은 다른 금융지관(증권사 등)에서 1개 이상의 예금 계좌를 개설한 적이 있다면 추가 계좌 개설이 불가능합니다.</p>
			<p style="${answer_txt}">- 계좌 개설 20영업일 이후에 추가 계좌 개설이 가능합니다.</p>`
		}
	]);
	const [orderQuestion, setOrderQuestion] = useState([
		{
			questionTitle: "투자할 금액은 어떻게 입금하나요?",
			answer: `<p style="${answer_txt}">- 본인의 주거래은행 앱의 모바일 뱅킹을 통해 위탁 계좌로 입금합니다.</p>
			<p style="${answer_txt}">- 인터넷 뱅킹, ATM, 타사 간편 송금 등 고객님이 익숙한 방식으로 입금하시면 됩니다.</p>
			<p style="${answer_txt}">- 머니포트에서 만드신 위탁 계좌번호는 '내 자산 보기' 메뉴에서 복사 가능합니다. (뱅킹 앱에 붙여넣기 가능)</p>`
		},
		{
			questionTitle: "투자를 할 수 있는 시간이 정해져 있나요?",
			answer: `<p style="${answer_txt}">- 머니포트의 투자 주문은 실시간 주문이 아닌 예약 주문으로, 영업일 8:00 ~ 21:00에 주문된 내역은 해외거래소 개장 시점에 한번에 전송됩니다.</p>
			<p style="${answer_txt}">- 국내 기준 평일에도 미국 증권시장이 쉬는 날은 실제 주문이 나가지 않으며, 국내 휴장일에도 해외 개장 시에는 매매 가능합니다.</p>`
		},
		{
			questionTitle: "위탁 계좌에 잔액이 부족해도 투자 주문이 가능한가요?",
			answer: `<p style="${answer_txt}">- 금액이 부족해도 투자 주문은 가능합니다.</p>
			<p style="${answer_txt}">- 부족한 금액은 21:00 이전까지 위탁 계좌로 입금하면 정상적으로 거래가 진행됩니다.</p>`
		},
		{
			questionTitle: "환전을 해야 투자 주문이 가능한가요?",
			answer: `<p style="${answer_txt}">- 머니포트 앱을 통해서 개설되는 KB증권 위탁 계좌는 글로벌원마켓 서비스를 이용하기 때문에 해외 주식 거래 시 환전할 필요가 없습니다.(환전 수수료 없음)</p>
			<p style="${answer_txt}">- 주식을 원화로 주문하면 체결된 금액만큼 자동 환전됩니다.</p>`
		},
		{
			questionTitle: "선택한 상품에 투자하는 과정이 알고싶어요.",
			answer: `<p style="${answer_txt}">1. 메인화면에서 묶음 상품 선택 또는 상품 리스트의 묶음 상품 탭에서 상품 선택 또는 검색 결과에서 상품 선택</p>
			<p style="${answer_txt}">2. 상세보기 화면 하단의 '투자하기' 버튼 선택</p>
			<p style="${answer_txt}">3. 투자 자문 계약 화면으로 이동</p>
			<p style="${answer_txt}">4. 투자할 금액 입력</p>
			<p style="${answer_txt}">5. 동의서 확인 후 예약 매수 접수 확인</p>
			<p style="${answer_txt}">6. 예약매수 접수 완료</p>`
		},
		{
			questionTitle: "예약 주문이 무엇인가요?",
			answer: `<p style="${answer_txt}">머니포트에서 제공하는 투자 자문 상품은 해외 주식 종목으로 구성되어있습니다. <br />해외 주식 시장은 미국 시간을 기준으로 운영되기 때문에 우리나라 시간(23:30~06:00)과 맞지않아서 이용에 어려움이 있습니다.<br />
			이러한 문제를 해결하기 위해, 예약 주문은 08:00~21:00 사이에 고객이 원하는 종목을 주문하면 해외 주식 시작이 개장되는 시간에 실제 주문을 넣어 매매하는 방법입니다.
	</p>`
		},
		{
			questionTitle: "매수 주문 시 주문 필요금액이 왜 높게 나오나요?",
			answer: `<p style="${answer_txt}">- 주가 및 환율 변동에 대비하여 약 10%의 예비금을 더하여 계산합니다.</p>
			<p style="${answer_txt}">- 체결 후 남은 금액은 자동으로 KB증권 위탁 계좌로 입금됩니다.(*** 체결 후 남은 금액은 위탁계좌에 남아 있습니다.)</p>`
		},
		{
			questionTitle: "거래 체결은 언제 완료되나요?",
			answer: `<p style="${answer_txt}">예약 주문 이후 해외거래소 개장 시점에 체결됩니다. (체결 여부는 다음 날 오전 9시 이후 '내 자산 보기' 메뉴의 '투자내역'에서 확인 가능합니다.)</p>
		`
		},
		{
			questionTitle: "주문이 실패되었어요.",
			answer: `<p style="${answer_txt}">- 해외거래소 전송 시점에 계좌 잔액이 부족하면 주문이 취소됩니다.</p>
			<p style="${answer_txt}">- 투자 종목 가격이 예비금을 포함한 주문가보다 급등할 경우에도 취소될 수 있습니다.</p>
			<p style="${answer_txt}">- 주문 실패 시 모든 금액은 KB증권 위탁 계좌로 반환됩니다.</p>`
		},
		{
			questionTitle: "매수/매도 주문을 취소하고 싶어요.",
			answer: `<p style="${answer_txt}">- 주문한 당일 08:00 ~ 21:00 사이에 취소할 수 있습니다.</p>
			<p style="${answer_txt}">- 투자 내역에서 항목을 선택하고 취소가 가능합니다.</p>`
		}
	]);
	const [moneypotQuestion, setMoneypotQuestion] = useState([
		{
			questionTitle: "회원 가입은 어떻게 하나요?",
			answer: `<p style="${answer_txt}">- 머니포트 최초 설치 시 본인 명의의 휴대폰 번호를 통해 회원 가입 과정이 자동으로 진행됩니다.</p>`
		},
		{
			questionTitle: "회원 탈퇴는 어떻게 하나요?",
			answer: `<p style="${answer_txt}">- 화면 하단의 '설정' 메뉴에서 '내 정보' 탭의 '계정 정보'를 선택합니다.</p>
			<p style="${answer_txt}">- "계정 정보" 화면에서 좌측 하단의 '회원 탈퇴' 버튼을 선택합니다.</p>
			<p style="${answer_txt}">- 탈퇴 시 안내사항에 동의하고, 탈퇴 사유(10자 이상)를 기재합니다.</p>
			<p style="${answer_txt}">- '탈퇴하기' 버튼 선택 후 팝업 창의 '확인' 버튼을 눌러 탈퇴를 완료합니다.</p>`
		},
		{
			questionTitle: "로그인은 어떻게 하나요?",
			answer: `<p style="${answer_txt}">- 구글플레이스토어에서 머니포트 앱을 다운받아 실행합니다.</p>
			<p style="${answer_txt}">- 본인확인을 통해 본인 인증을 한 후, 휴대폰 인증을 통해 인증 과정을 거칩니다.</p>
			<p style="${answer_txt}">- 머니포트 비밀번호를 설정합니다.</p>
			<p style="${answer_txt}">- 간편 비밀번호를 설정합니다.</p>
			<p style="${answer_txt}">- 로그인을 완료합니다.</p>`
		},
		{
			questionTitle: "'지문 로그인' 기능을 사용하려면 어떻게 하나요?",
			answer: `<p style="${answer_txt}">화면 하단의 '설정' 메뉴에서 '내 정보' 탭의 '지문 로그인 사용' 옆의 버튼을 활성화 시킵니다.</p>`
		},
		{
			questionTitle: "로그아웃은 어떻게 하나요?",
			answer: `<p style="${answer_txt}">- 화면 하단의 '설정' 메뉴에서 '내 정보' 탭의 '계정 정보'를 선택합니다.</p>
			<p style="${answer_txt}">- 우측 상단의 '로그아웃' 버튼을 눌러 로그아웃을 완료합니다.</p>`
		},
		{
			questionTitle: "팔로우 등록은 어떻게 하나요?",
			answer: `<p style="${answer_txt}">- 상품 리스트 중 "테마 포트" 내의 항목 오른쪽 ☆ 선택 시 팔로우가 등록됩니다. </p>
			<p style="${answer_txt}">- 메인 화면 왼쪽 상단의 검색 버튼 선택 후 기업명 또는 키워드 검색 결과 항목 오른쪽 ☆ 선택 시 팔로우 등록 </p>`
		},
		{
			questionTitle: "등록된 팔로우는 어떻게 해제하나요?",
			answer: `<p style="${answer_txt}">팔로우된 항목의 ★ 버튼 선택 시 팔로우가 해제됩니다.</p>`
		},
		{
			questionTitle: "자산 커스텀 기능은 어떻게 이용하나요?",
			answer: `<p style="${answer_txt}">1. 화면 하단의 '커스텀리그' 메뉴에서 우측 하단의 전구 모양 아이콘을 선택하여 자산 커스텀 화면으로 이동합니다.</p>
			<p style="${answer_txt}">2. 하단의 팔로우 목록, 혹은 커스텀 목록에서 원하는 종목을 선택하여 + 버튼을 이용하여 추가합니다.</p>
			<p style="${answer_txt}">3. 원하는 자산이 목록에 없다면 자산 커스텀 화면 상단의 검색 창을 통해 종목을 검색하여 추가합니다.</p>
			<p style="${answer_txt}">4. 종목 추가(추가된 종목 두 개 이상)가 끝나면 '결과보기' 버튼 선택하여 결과를 확인합니다.</p>
			<p style="${answer_txt}">5. 수익률 시뮬레이션 결과가 표시됩니다.</p>
			<p style="${answer_txt}">6. 하단의 '저장' 버튼 선택을 통해 커스텀 포트폴리오 저장이 가능합니다.</p>
			<p style="${answer_txt}">7. '투자하기' 버튼을 통해 투자 자문 계약으로 이동 후 투자를 진행합니다. (추후 예정)</p>`
		},
		{
			questionTitle: "자산커스텀 메뉴에서 '결과보기' 실행이 안됩니다.",
			answer: `<p style="${answer_txt}">자산 커스텀 시뮬레이션을 위해서 최소한 두 개 이상의 종목이 추가되어야 합니다.</p>`
		},
		{
			questionTitle: "머니포트 서비스 관련 문의는 어떻게 해야 하나요?",
			answer: `<p style="${answer_txt}">머니포트에서 제공하는 고객 상담 및 문의 접수 창구는 아래와 같습니다. 서비스 이용에 참고하시기 바랍니다.</p>
			<p style="${answer_txt}">- FAQ 확인 : 머니포트 앱 하단 '설정'의 '고객센터' 항목 중 '자주묻는 질문' 기능을 통해 자주묻는 질문과 답변을 확인할 수 있습니다.</p>
			<p style="${answer_txt}">- 1:1 문의 : 머니포트 앱 하단 '설정'의 '고객센터' 항목 중 '1:1 문의' 기능을 통해 문의 내용을 전송할 수 있습니다.</p>
			<p style="${answer_txt}">- 고객센터 : 1566-6349(평일 오전 8시 - 오후 5시)를 통해 직원 연결이 가능합니다.</p>`
		}
	]);

	useEffect(() => {
		setSelNum(1);
		let test = [];
		if (selFaqList === "all") {
			test = investQuestion
				.concat(accountQuestion)
				.concat(orderQuestion)
				.concat(moneypotQuestion);
			setTotalNum(test.length);
			setQuestionList(test);
		} else if (selFaqList === "investment") {
			test = investQuestion;
			setTotalNum(investQuestion.length);
			setQuestionList(investQuestion);
		} else if (selFaqList === "account") {
			test = accountQuestion;
			setTotalNum(accountQuestion.length);
			setQuestionList(accountQuestion);
		} else if (selFaqList === "order") {
			test = orderQuestion;
			setTotalNum(orderQuestion.length);
			setQuestionList(orderQuestion);
		} else if (selFaqList === "moneypot") {
			test = moneypotQuestion;
			setTotalNum(moneypotQuestion.length);
			setQuestionList(moneypotQuestion);
		}
		if (searchText && searchText.length > 0) {
			const searchResult = test.filter((text) => {
				return text.questionTitle.indexOf(searchText) > 0;
			});

			console.log(searchResult);
			setTotalNum(searchResult.length);
			setQuestionList(searchResult);
		}
	}, [selFaqList, searchText]);

	return (
		<div className="faq_cont">
			<InvestmentTab selFaqList={selFaqList} setFaqList={setFaqList} />
			<div className="faq_box">
				<QuestionList
					questionList={questionList}
					selNum={selNum}
					DEFINE_LIST_NUM={DEFINE_LIST_NUM}
				/>
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
export default FAQContents;

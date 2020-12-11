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
			subject: "투자 자문 상품",
			questionTitle: "머니포트 앱에서 제공하는 상품은 어떤 종류가 있나요?",
			answer: `<p class="answer_txt">1. 미국 ETF 자문상품</p>
			<p class="answer_txt">- 전문가가 엄선한 미국 ETF 포트폴리오 자문 상품으로 쉽고 편리하게 자산관리 할 수 있습니다.</p>
			<p class="answer_txt">- 고객님의 자산은 머니포트의 독자적 위험관리 기술을 통해 꾸준히 관리됩니다. </p><br/>
			<p class="answer_txt">2. 미국 ETF 커스텀 상품</p>
			<p class="answer_txt">- 고객님이 직접 원하는 미국 ETF를 고르면, 머니포트의 알고리즘으로 적정 투자비중 및 수량을 추천받아 투자할 수 있는 상품입니다. </p>
			<p class="answer_txt">- 머니포트가 다양한 ETF를 선별하여 제공하며, 독자적 위험관리 기술을 통해 꾸준히 관리해 드립니다.</p><br />
			<p class="answer_txt">3. 이달의 테마 상품 (미국주식)</p>
			<p class="answer_txt">- 테마별로 인기 있는 미국 주식을 최근 트렌드에 따라 안내하는 상품입니다. </p>
			<p class="answe
			r_txt">- 각 테마에 해당하는 종목을 선택하면 적정 투자 비중 추천을 받으실 수 있습니다.</p>
			<p class="answer_txt">- 다만 현재 실 주문 기능은 아직 지원하지 않고 있으며, 추후 지원 예정입니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "나의 투자 성향에 적합한 상품은 무엇인가요?",
			answer: `<p class="answer_txt">머니포트에서는 투자 위험성향을 5단계로 구분하고 있으며, 고객님의 위험성향에 따라 적합한 상품을 추천하고 있습니다.</p><br />
			<p class="answer_txt">- 공격투자형 : 초고위험 ~ 초저위험 상품 투자 가능(미국 ETF 커스텀 상품, 미국 ETF 자문 상품)</p>
			<p class="answer_txt">- 적극투자형 : 고위험 ~ 초저위험 상품 투자 가능(미국 ETF 자문상품)</p>
			<p class="answer_txt">- 위험중립형 : 중위험 ~ 초저위험 상품 투자 가능(미국 ETF 자문상품)</p>
			<p class="answer_txt">- 안정추구형 : 저위험 ~ 초저위험 상품 투자 가능(머니포트 상품 투자 불가)</p>
			<p class="answer_txt">- 안정형 : 초저위험 상품 투자 가능(머니포트 상품 투자 불가)</p><br />
			<p class="answer_txt">* 투자 위험성향은 [설정] > [내정보] > [나의 투자성향]에서 확인 가능합니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "투자 원금은 보장되나요?",
			answer: `<p class="answer_txt">머니포트의 투자 상품은 원금이 보장되지 않는 '원금 비보장형'으로 예금자보호 대상이 아니며, 투자수익을 보장하지 않습니다.</p>
			<p class="answer_txt">원금 손실이 발생할 수도 있으니 상품에 대해 충분히 이해하시고 투자하시기 바랍니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "투자 자문 계약은 무엇인가요?",
			answer: `<p class="answer_txt">자본시장법상 투자자문 계약이란 금융투자상품의 가치 또는 투자 판단 등에 관한 자문에 응하는 것을 의미합니다. </p>                                                                                                                                                                                                                                                                                                             
			<p class="answer_txt">투자자문 계약을 체결하여 머니포트의 자문을 받을 수 있습니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "자문 계약을 해지하고 싶습니다. 어떻게 해야 하나요?",
			answer: `<p class="answer_txt">상품의 운용 계획에 따라 계약 기간 자문받는 것을 권고해드리지만 부득이하게 중도에 해지하는 경우, 자문계약 해지신청, 매도 주문 체결 과정을 완료해야 합니다.</p><br />                                                                                                                                                                                                                                                                                                        
                                <p class="answer_txt">1. 자문 계약 해지 신청</p>
                                <p class="answer_txt">&nbsp; - 앱 내에서 해지 신청 버튼을 누릅니다. </p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;[내 자산] > [자문 계약서 보기] > [자문계약 해지]</p> <br />
                                <p class="answer_txt">2. 매도 주문 체결 후 해지</p>
                                <p class="answer_txt">&nbsp; - 매도 주문(예약) 후, 주문이 체결되면 계약이 해지됩니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "머니포트 서비스를 이용하면 어떤 수수료가 발생하나요?",
			answer: `<p class="answer_txt">머니포트 서비스 이용 시 발생하는 수수료는 다음과 같습니다.</p><br />                                                                                                                                                                                                                                                                                                        
                                <p class="answer_txt">1. 자문사 수취</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;- 자문수수료는 기본형과 성과형(무료)으로 구분되며 자문상품별로 다릅니다.</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(수수료율은 각 상품의 [상품내역] 화면에서 확인 가능합니다)</p> <br />
                                <p class="answer_txt">2. 증권사 수취</p>
                                <p class="answer_txt">- 증권사 수수료는 다음과 같습니다.</p>
                                <p class="answer_txt">&nbsp;&nbsp;1) 위탁매매 수수료</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;매수 시 : 0.15%</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;매도 시 : 0.15%</p>
                                <p class="answer_txt">&nbsp;&nbsp;2) 환전 수수료 : 없음  (KB증권의 글로벌원마켓 사용)</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "머니포트 서비스를 이용하면 세금이 부과되나요?",
			answer: `<p class="answer_txt">미국 ETF에 투자하는 경우, ETF 매매차익에 대한 양도소득세와 분배금(배당)으로 인한 배당소득세가 발생할 수 있습니다.</p><br />                                                                                                                                                                                                                                                                                                        
			<p class="answer_txt">1. 양도소득세</p>
			<p class="answer_txt">- 연간 매매 차익 손익 합산액이 250만원까지는 비과세 혜택을 받을 수 있습니다. </p>
			<p class="answer_txt">&nbsp;&nbsp;250만원을 초과하는 경우, 초과분의 22%가 양도 소득세로 과세됩니다. </p> <br />
			<p class="answer_txt">예를 들어, 한 해 동안 ETF 투자를 진행한 성과가 다음과 같은 경우</p>
			<p class="answer_txt">&nbsp;- A ETF : +300만원</p>
			<p class="answer_txt">&nbsp;- B ETF : -100만원</p>
			<p class="answer_txt">연간 매매차익 합산액이 200만원이 되어 양도소득세가 과세되지 않습니다.</p><br />
			<p class="answer_txt">* 양도소득세 발생 시 KB증권의 양도소득세 신고대행 서비스를 이용하실 수 있습니다. </p>
			<p class="answer_txt">&nbsp;&nbsp;자세한 내용은 KB증권 홈페이지를 참고하거나 KB증권 고객센터(1588-6611)로 문의하시면 됩니다.</p><br />
			<p class="answer_txt">2. 배당소득세</p>
			<p class="answer_txt">- 한미 조세협약에 따라 배당금의 15.4% 가 배당소득세로 원천징수 됩니다. 일반적으로 별도의 신고가 필요하지 않으나 다른 금융소득과 합산해 연간 2,000만 원을 초과하는 경우 종합소득세 신고 대상이 됩니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "분배금(배당금)을 받으면 어떻게 처리되나요?",
			answer: `<p class="answer_txt">- 분배금(배당금)은 고객님의 머니포트 투자 계좌에 달러로 입금되며 이 금액은 다음번 리밸런싱 시기에 투자금에 포함하여 운용됩니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "내 자산의 누적 수익률은 어떤 기준으로 표기되나요?",
			answer: `<p class="answer_txt">- 내 자산의 누적 수익률은 "투자원금 대비 수익률"로 '투자 수익금 / 투자원금’입니다.  투자 원금액에는 추가 입금액도 포함됩니다.</p> `
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "리밸런싱은 무엇인가요?",
			answer: `<p class="answer_txt">리밸런싱은 자산(종목)별 투자비중 조정을 통해 포트폴리오의 위험도를 일정하게 유지하는 것입니다. 정기와 긴급 두 종류가 있습니다.</p> <br />
                                <p class="answer_txt">1. 정기 리밸런싱</p>
                                <p class="answer_txt">&nbsp;- 주기적으로 비중 조정을 수행합니다.</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;미국 ETF자문상품 : 3월,6월, 9월, 12월의 마지막 영업일에 진행합니다.</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;미국 ETF커스텀상품 : 매월 첫영업일에 진행합니다.</p> <br />
                                <p class="answer_txt">2. 긴급 리밸런싱</p>
                                <p class="answer_txt">&nbsp;- 경기 전망이나 시장 변동에 따라 긴급하게 자산 비중을 조정합니다.</p> <br />
                                <p class="answer_txt">&nbsp;&nbsp;* 푸시 알림으로 고객님께 알림을 보내드리면 리밸런싱을 진행하시면 됩니다.</p>`
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "리밸런싱 알람을 받았습니다. 어떻게 해야하나요?",
			answer: `<p class="answer_txt">리밸런싱 알림을 받은 경우, 다음과 같은 과정으로 리밸런싱을 진행합니다.</p> <br />    
			<p class="answer_txt">1. [리밸런싱 푸시 알림]을 클릭하거나 [머니포트 앱을 실행]합니다.</p>
			<p class="answer_txt">2. [메뉴]에서 [리밸런싱 안내 화면]을 클릭합니다.</p>
			<p class="answer_txt">3. [리밸런싱 주문 예약 내역]을 확인합니다.</p>
			<p class="answer_txt">4. [리밸런싱 주문 요청 버튼]을 클릭합니다.</p> <br />
			<p class="answer_txt">* 리밸런싱은 포트폴리오를 최적화하기 위해 꼭 필요한 과정입니다. 꼭 잊지말고 진행하세요.</p> `
		},
		{
			subject: "투자 자문 상품",
			questionTitle: "투자 중인 금액의 일부를 출금하고 싶어요.",
			answer: `<p class="answer_txt">부분 출금은 불가능 합니다. 부분 출금을 하시면 머니포트에서 자문하는 포트폴리오는 더 이상 유지 되지 않습니다. 투자상품을 해지 후 전체 금액 인출만 가능합니다.</p>`
		}
	]);
	const [accountQuestion, setAccountQuestion] = useState([
		{
			subject: "계좌 개설",
			questionTitle:
				"이미 증권계좌를 가지고 있는데도 새로운 계좌를 개설해야 하나요?",
			answer: `<p class="answer_txt">투자를 위해서는 머니포트 위탁 계좌가 필요합니다. 기존 증권계좌 이용은 불가능합니다.</p>
			<p class="answer_txt">머니포트에서 제공하는 계좌는  KB증권의 비대면 계좌 개설 서비스로 평일과 주말 모두 24시간(일중 23:40~00:10 제외) 계좌 개설이 가능합니다.</p>`
		},
		{
			subject: "계좌 개설",
			questionTitle: "머니포트 전용 계좌를 하나 더 만들고 싶어요.",
			answer: `<p class="answer_txt">1개 자문전용 계좌만을 개설하실 수 있습니다. </p>`
		},
		{
			subject: "계좌 개설",
			questionTitle:
				"계좌개설 과정 중 신분증 인식에서 계속 실패합니다. 어떻게 해야 하나요?",
			answer: `<p class="answer_txt">더 정확한 촬영 방법을 안내 드립니다.</p> <br />
                                <p class="answer_txt">1. 주민등록증이 운전면허증보다 잘 인식됩니다.</p>
                                <p class="answer_txt">2. 빛이 덜 반사되는 장소에서 촬영하시면 인식이 좀 더 잘됩니다.</p>
                                <p class="answer_txt">3. 검은 배경을 이용하여 신분증을 대비시키길 추천합니다.</p>
                                <p class="answer_txt">4. 오래되어서 바랬거나 훼손된 신분증을 사용하시면 인식이 어려울 수 있습니다. 그럴 경우 다른 신분증으로 시도해 보세요.</p> <br />
                                <p class="answer_txt">위 방법을 통해 신분증을 인식시킨 후  재시도해주시길 바랍니다. </p>
                                <p class="answer_txt">계속 시도해도 해결되지 않는 경우 [1:1문의]를 통해 문의해주세요.</p>`
		},
		{
			subject: "계좌 개설",
			questionTitle: "회원 탈퇴 시 머니포트에서 개설한 계좌는 폐쇄되나요?",
			answer: `<p class="answer_txt">회원탈퇴를 하면 해당계좌를 머니포트 자문용으로는 사용할 수 없습니다. 해당 계좌는 고객님이 다른 거래 용도로 사용하시거나 증권사를 통해 폐쇄하시면 됩니다. </p>`
		},
		{
			subject: "계좌 개설",
			questionTitle: "계좌 비밀번호를 5회 이상 잘못 입력했어요.",
			answer: `<p class="answer_txt">비밀번호를 누적 5회 이상 잘못 입력하였을 경우 사고 예방 차원에서 거래가 제한됩니다.</p>
                                <p class="answer_txt">거래 제한을 풀려면 KB증권 고객센터(1588-6611) 문의 또는 KB증권 앱을 이용해주시길 바랍니다.</p>`
		}
	]);
	const [orderQuestion, setOrderQuestion] = useState([
		{
			subject: "상품 주문",
			questionTitle:
				"미국 ETF 커스텀 상품을 통해 구성한 포트폴리오를 조정하고 싶어요.",
			answer: `<p class="answer_txt">현재 투자 중인 ETF 커스텀 포트폴리오에 종목 추가, 삭제는 지원하지 않습니다. 향후 지원 예정입니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle:
				"미국 ETF 커스텀 상품에 투자할 때, 하나의 자산군에만 투자해도 되나요?",
			answer: `
			<p class="answer_txt">가능합니다. 예를 들어 주식형 자산군으로만 포트폴리오를 구성하더라도 머니포트에서 적절한 투자 비중을 맞춰드립니다. </p>
                                <p class="answer_txt">다만 분산투자의 효과를 극대화하기 위해 다양한 자산군에 투자하는 것을 추천 드립니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "예약 주문을 하는 이유는 무엇인가요?",
			answer: `<p class="answer_txt">한국과 미국의 시차 때문입니다. </p>
                                <p class="answer_txt">머니포트에서는 한국 시간 기준으로 주문을 내면 예약주문 처리가 됩니다. </p>
                                <p class="answer_txt">이후 예약주문은 미국 개장 시간에  자동으로 주문 됩니다. 예약 주문 체결 결과는 [내 자산]  탭에서 확인해 주세요.</p> <br />
                                <p class="answer_txt">* 미국 시장 개장 시간</p>
                                <p class="answer_txt">- 한국시각 23:30분</p>
                                <p class="answer_txt">* 썸머타임 22:30분(3월 둘째 주 일요일부터 11월 첫 일요일까지)</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "투자금 입금은 어떻게 해야 하나요?",
			answer: `<p class="answer_txt">머니포트 위탁계좌에 원화로 당일 21일시 전까지 투자금을 모바일 뱅킹과 인터넷 뱅킹등을 통해 입금합니다. </p>
			<p class="answer_txt">투자금 입금 기한을 초과한 경우 자동으로 자문 계약이 취소 됩니다. 꼭 기한에 맞추어 입금하시길 권장합니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "투자하고 있는 상품에 추가로 입금하고 싶어요.",
			answer: `<p class="answer_txt">[내 자산] > [추가 입금]에서 추가 투자금액을 입력하시면 가능합니다.</p>
			<p class="answer_txt">추가 입금은 위탁 계좌의 잔고 안의 범위에서 진행이 가능합니다.</p>
			<p class="answer_txt">* 추가 투자금은 다음번 리밸런싱 시기에 반영되므로 추가투자 시 감안해주세요.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "매수 주문할 때, 주문 필요 금액이 왜 높게 표시되나요?",
			answer: `<p class="answer_txt">종목 가격 및 환율 변동에 대비, 안정적으로 주문을 체결하기 위해 예비금을 감안하기 때문입니다.</p>
			<p class="answer_txt">주문 체결 후 남은 금액은 자동으로 머니포트 위탁계좌에 입금됩니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "계좌에 잔액이 부족해도 예약 주문이 가능한가요?",
			answer: `<p class="answer_txt">1) 최초투자 시</p>
			<p class="answer_txt">&nbsp;- 계좌에 금액이 부족해도 예약 주문이 가능합니다.</p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;* 실제 주문 전인 21시 이전까지 주문 금액을 머니포트 위탁계좌로 입금하시면 주문이 정상처리됩니다.</p> <br />
			<p class="answer_txt">2) 추가입금 시</p>
			<p class="answer_txt">&nbsp;- 추가 투자를 원하는 금액이 계좌에 있어야 주문이 가능합니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "예약 주문한 상품을 취소하고 싶어요.",
			answer: `<p class="answer_txt">주문 당일 21시 이전이라면 [내 자산]에서 [예약취소]를 누르면 예약 주문한 상품이 취소됩니다.</p>`
		},
		{
			subject: "상품 주문",
			questionTitle: "주문이 미체결되었다고 알림이 왔어요.",
			answer: `<p class="answer_txt">ETF의 가격 변동으로 지정한 예약가격을 크게 벗어나면 예수금 부족 등의 이유로 미체결 건이 발생합니다.</p> 
			<p class="answer_txt">해결 과정은 다음과 같습니다.</p><br />
			<p class="answer_txt">1. [미체결 푸시 알림]을 선택하거나 또는 [머니포트 앱을 실행]합니다.</p>
			<p class="answer_txt">2. 앱에 접속하여 [내자산]을 통해 [미체결 안내] 화면으로 들어갑니다.</p>
			<p class="answer_txt">3. 미체결 된 종목에 대한 내역을 확인합니다.</p>
			<p class="answer_txt">4. [재주문] 처리를 진행합니다.</p>`
		}
	]);
	const [moneypotQuestion, setMoneypotQuestion] = useState([
		{
			subject: "머니포트 앱 사용",
			questionTitle: "머니포트 앱에 로그인하는 방법은 무엇인가요?",
			answer: `<p class="answer_txt">1) 간편 로그인</p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;- 회원가입 시 등록한 6자리의 간편 비밀번호를 통해 로그인하는 방법입니다.</p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;- 간편 비밀번호를 잊은 경우, ['비밀번호를 잊으셨나요?']를 누르면 본인인증 후 비밀번호를 변경할 수 있습니다.</p> <br />
			<p class="answer_txt">2) 지문 로그인</p>
			<p class="answer_txt">&nbsp;&nbsp;- 지문을 등록하여 로그인하는 방법입니다. </p>
			<p class="answer_txt">&nbsp;&nbsp;- 지문 로그인 설정 방법은 다음과 같습니다.</p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;1. 화면 하단의 [설정] > [앱설정]을 누릅니다.</p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;2. 지문 로그인을 켤 때: 지문 로그인 사용 버튼을 눌러주신 후 지문 등록을 합니다.   </p>
			<p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;3. 지문 로그인을 끌 때: 지문 로그인 사용 버튼을 눌러주시면 지문 로그인이 해제됩니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle: "머니포트를 처음 이용합니다. 어떻게 투자를 시작하나요?",
			answer: `<p class="answer_txt">1. 회원 가입을 해주세요.</p>
                                <p class="answer_txt">2. 메인 화면에서 상품을 둘러보시고 투자 하고 싶은 상품을 선택해주세요.</p>
                                <p class="answer_txt">3. KB증권 비대면 계좌 개설을 통해서 머니포트 위탁계좌를 개설합니다.</p>
                                <p class="answer_txt">4. 투자자 성향 조사를 하여 투자하고 싶은 상품이 투자 위험성향에 적합한지 확인합니다.</p>
                                <p class="answer_txt">5. 자문 계약을 확인하고 동의 합니다.</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;1. 해외 거래 신청 및 거래 위험성을 확인</p>
                                <p class="answer_txt">&nbsp;&nbsp;&nbsp;&nbsp;2. 투자계약 금액을 입력한 후 계약기간과 수수료 등 확인</p>
                                <p class="answer_txt">6. 머니포트에서 제안하는 추천 포트폴리오를 확인합니다.</p>
                                <p class="answer_txt">7. 주문내역에서 종목명, 비중, 가격 및 매수 수량을 확인 후 예약 주문합니다.</p>
                                <p class="answer_txt">8. 실 주문 전까지 머니포트 위탁계좌에 투자금을 입금해주세요. 모바일, 인터넷 뱅킹, 지점입금 등을 통해 가능합니다.</p>
                                <p class="answer_txt">9. 투자 중 리밸런싱 신호에 따라 포트폴리오 변동을 관리할 수 있습니다. 투자 현황을 지속적으로 관리해주세요.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle: "내 자산에 예수금이 있다고 표시됩니다. 이유는 무엇인가요?",
			answer: `<p class="answer_txt">주문체결 후 투자금 중 일정 금액이 남은 것을 예수금이라고 합니다.</p>
			<p class="answer_txt">종목 가격과 환율이 바뀌어도 안정적으로 주문을 체결하기 위해서 예비금으로 일정 금액의 여유를 두기 때문에 발생합니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle:
				"휴대전화기기 또는 전화번호가 변경되어도 계속 이용할 수 있나요?",
			answer: `<p class="answer_txt">네 가능합니다. 기기나 번호가 변경되시면 새로 휴대전화번호 본인 인증을 진행한 후 최초 등록한 비밀번호를 입력하면 재로그인 할 수 있습니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle: "회원탈퇴는 어떤 절차로 진행되나요?",
			answer: `<p class="answer_txt">1. 현재 투자 중일 경우</p>
			<p class="answer_txt">투자 중인 자문 계약을 해지한 뒤 [설정] > [내 정보] > [회원탈퇴]를 누르면 탈퇴가 가능합니다.</p> <br />
			<p class="answer_txt">2. 현재 투자 중이 아닌 경우</p>
			<p class="answer_txt">[설정] > [내 정보] > [회원탈퇴]를 누르면 탈퇴가 가능합니다.</p> <br />
			<p class="answer_txt">* 탈퇴 시 머니포트 앱에 저장되어있는 모든 정보가 사라지고 복구가 불가하니 신중하게 회원탈퇴 절차를 진행해주시길 바랍니다.</p>
			<p class="answer_txt">* 머니포트는 수집한 개인(신용)정보를 서비스 이용 계약일부터 해지일까지 보유하며 회원탈퇴 시 자본시장법 등 다른 법률에 따라 개인정보를 보존해야 하는 경우를 제외하고 모두 파기합니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle:
				"회원 탈퇴 후 다시 머니포트를 이용하고 싶어요. 기존에 머니포트에서 개설한 계좌를 다시 이용할 수 있나요?",
			answer: `<p class="answer_txt">회원 탈퇴 후 머니포트 서비스를 다시 사용하려면 재가입이 필요합니다. </p>
			<p class="answer_txt">재가입 시 기존에 개설된 KB증권 계좌를 사용할 수 없으며 새로운 머니포트 위탁계좌를 다시 개설해야 합니다. </p>
			<p class="answer_txt">(기존 계좌 개설 시기에 따라 최대 20영업일 동안 계좌개설이 불가능할 수 있습니다.)</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle:
				"머니포트 앱 서비스가 더 이상 제공되지 못하는 상황이 된다면 투자금은 어떻게 되나요?",
			answer: `<p class="answer_txt">투자금은 KB증권 계좌에 보관되므로 머니포트 서비스가 종료된다 하더라도 KB증권을 통해 안전하게 투자 금액 관리가 가능합니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle: "투자금 출금 방법이 궁금해요.",
			answer: `<p class="answer_txt">투자 중인 자산의 출금을 원하시면 자문 계약 해지가 필요합니다. 해지 후 전량 현금화되면 증권사의 온라인 채널(홈페이지, MTS, HTS 등) 또는 지점 방문을 통해 출금할 수 있습니다.</p>
                                <p class="answer_txt">* 증권계좌에서 원화 출금 시 수수료가 발생합니다. 수수료와 관련된 자세한 내용은 KB증권 고객센터(1588-6611)로 문의하시기 바랍니다.</p>`
		},
		{
			subject: "머니포트 앱 사용",
			questionTitle: "미성년자도 머니포트 앱을 이용할 수 있나요?",
			answer: `<p class="answer_txt"><p class="answer_txt">네, 가능합니다. 다만, 서비스 이용의 제한이 있습니다.</p>
                                <p class="answer_txt">KB증권에서 미성년자의 비대면 계좌개설이 불가하므로 미국 ETF 자문상품과 미국 ETF 커스텀 상품의 실제 투자는 어렵습니다.</p>
                                <p class="answer_txt">이를 제외한 머니포트 서비스를 이용해주시길 바랍니다.</p>`
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

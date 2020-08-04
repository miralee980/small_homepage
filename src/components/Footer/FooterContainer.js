import React, { useState, useEffect } from "react";
import Footer from "./index";
const FooterContainer = () => {
	const [companyInfo, setCompanyInfo] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				"https://dev.quantec.co.kr/api/quantec/companyInfo"
			);
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK")
					return setCompanyInfo(body.data);
			}
		}
		fetchData();
	}, []);
	return <Footer companyInfo={companyInfo} />;
};

export default FooterContainer;

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import express from "express";
import { StaticRouter } from "react-router-dom";
import path from "path";
import fs from "fs";
// import { ChunkExtractor } from "@loadable/server";

// 번들링에 포함되지않은 static 파일들의 이름과 위치를 담은 Dictionary를 생성
const manifest = JSON.parse(
	fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);
const manifest_files = manifest.files;
const chunks = Object.keys(manifest.files)
	.filter((key) => /chunk\.js$/.exec(key))
	.map((key) => `<script src="${manifest_files[key]}"></script>`)
	.join("");

// index.html을 생성하는 func
function createPage(root) {
	return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset = "utf-8"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>ReactApp</title>
        <link href="${manifest_files["main.css"]}" rel="stylesheet"/>
      </head>
      <body>
        <noscript> You need to enableJavaScript to run the this app</noscript>
        <div id="root">
        ${root}
        </div>
        <script src="${manifest_files["runtime-main.js"]}"></script>
        ${chunks}
        <script src="${manifest_files["main.js"]}></script
      </body>
      </html>
    `;
}

const app = express();
// 서버 사이드 렌더링 미들웨어(핵심)
const serverRender = (req, res, next) => {
	// const webExtractor = new ChunkExtractor({ statsFile: webStats });
	const context = {};
	const jsx = (
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);
	const root = ReactDOMServer.renderToString(jsx);
	res.send(createPage(root));
};

const serve = express.static(path.resolve("./build"), {
	index: false, // "/" 경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
	console.log("Running on http://localhost:5000");
});

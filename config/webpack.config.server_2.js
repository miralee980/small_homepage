const nodeExternals = require("webpack-node-externals"); // 결과물에서 라이브러리 제거
const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); // CSS Module의 고유 className을 만들 때 필요한 옵션
const webpack = require("webpack");
const getClientEnviroment = require("./env");

// Loader들이 감지할 파일 확장자 타입 정규식
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";

const env = getClientEnviroment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
	mode: "production", // 프로덕션 모드
	entry: "paths.ssrIndexJs", // 서버 사이드에서 엔트리 경로
	target: "node", // 노드환경에서 실행될 것이라는 점을 명시(서버)
	output: {
		path: paths.ssrBuild, // 빌드 경로
		filename: "server.js", // 파일 이름
		chunkFilename: "js/[name]/chunk.js", //청크 파일 이름
		publicPath: paths.publicUrlOrPath, // 정적파일이 제공될 경로
	},
	module: {
		mode: "production", // production mode
		entry: paths.ssrIndexJs, // entry path
		target: "node", // running env
		output: {
			path: paths.ssrBuild, // build path
			filename: "server.js",
			chunkFilename: "js/[name].chunk.js",
			publicPath: paths.publicUrlOrPath, // 정적 파일이 제공될 경로
		},
		module: {
			trictExportPresence: true,
			rules: [
				// Disable require.ensure as it's not a standard language feature.
				{ parser: { requireEnsure: false } },
				// First, run the linter.
				// It's important to do this before Babel processes the JS.
				{
					test: /\.(js|mjs|jsx|ts|tsx)$/,
					enforce: "pre",
					use: [
						{
							options: {
								cache: true,
								formatter: require.resolve("react-dev-utils/eslintFormatter"),
								eslintPath: require.resolve("eslint"),
								resolvePluginsRelativeTo: __dirname,
							},
							loader: require.resolve("eslint-loader"),
						},
					],
					include: paths.appSrc,
				},
				{
					oneOf: [
						// "url" loader works like "file" loader except that it embeds assets
						// smaller than specified limit in bytes as data URLs to avoid requests.
						// A missing `test` is equivalent to a match.
						// url-loader를 위한 설정.
						{
							test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
							loader: require.resolve("url-loader"),
							options: {
								emitFile: false, // 파일을 따로 저장하지 않는 옵션
								limit: 1000,
								name: "static/media/[name].[hash:8].[ext]",
							},
						},
						// 기존 웹펙 설정 파일을 참고하여 작성 다른 부분만 코멘트
						{
							test: /\.(js|mjs|jsx|ts|tsx)$/,
							include: paths.appSrc,
							loader: require.resolve("babel-loader"),
							options: {
								customize: require.resolve(
									"babel-preset-react-app/webpack-overrides"
								),
								plugins: [
									[
										require.resolve("babel-plugin-named-asset-import"),
										{
											loaderMap: {
												svg: {
													ReactComponent: "@svgr/webpack?-svgo![path]",
												},
											},
										},
									],
								],
								cacheDirectory: true,
								compact: false,
								cacheCompression: false,
							},
						},
						{
							test: /\.(js|mjs)$/,
							exclude: /@babel(?:\/|\\{1,2})runtime/,
							loader: require.resolve("babel-loader"),
							options: {
								babelrc: false,
								configFile: false,
								compact: false,
								presets: [
									[
										require.resolve("babel-preset-react-app/dependencies"),
										{ helpers: true },
									],
								],
								cacheDirectory: true,
								// See #6846 for context on why cacheCompression is disabled
								cacheCompression: false,

								// Babel sourcemaps are needed for debugging into node_modules
								// code.  Without the options below, debuggers like VSCode
								// show incorrect code and set breakpoints on the wrong lines.
								sourceMaps: shouldUseSourceMap,
								inputSourceMap: shouldUseSourceMap,
							},
						},
						{
							test: cssRegex,
							exclude: cssModuleRegex,
							loader: require.resolve("css-loader"),
							options: {
								onlyLocals: true, // css는 실제 결과물을 번들링할 때 생성하지 않습니다. 나중에 따로 static하게 접근할 예정.
							},
						},
						// CSS Module을 위한 처리
						{
							test: cssModuleRegex,
							loader: require.resolve("css-loader"),
							options: {
								modules: true,
								onlyLocals: true,
								getLocalIndent: getCSSModuleLocalIdent,
							},
						},
						// SASS를 위한 처리
						{
							test: sassRegex,
							exclude: sassModuleRegex,
							use: [
								{
									loader: require.resolve("css-loader"),
									options: {
										onlyLocals: true,
									},
								},
								require.resolve("sass-loader"),
							],
						},
						// for Sass + CSS module
						{
							test: sassRegex,
							exclude: sassModuleRegex,
							use: [
								{
									loader: require.resolve("css-loader"),
									options: {
										modules: true,
										onlyLocals: true,
										getLocalIndent: getCSSModuleLocalIdent,
									},
								},
								require.resolve("sass-loader"),
							],
						},

						{
							loader: require.resolve("file-loader"),
							exclude: [/\.(js|mjs|jsx|ts|tsx)$/],
							options: {
								emitFile: false, // 파일을 따로 저장하지 않는 옵션
								name: "static/media/[name].[hash:8].[ext]",
							},
						},
					],
				},
			],
		},
		// 이제 코드에서 node_modules 내부의 라이브러리를 불러올 수 있게 설정합니다.
		resolve: {
			modules: ["node_modules"],
		},
		// node library를 번들링에 포함시키지않음.
		externals: [nodeExternals()],
		plugins: [
			new webpack.DefinePlugin(env.stringfied), // 환경 변수 주입.
		],
	},
};

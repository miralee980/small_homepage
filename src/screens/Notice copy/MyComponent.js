import React from "react";
import ReactQuill, { Mixin, Toolbar, Quill } from "react-quill";
import "./node_modules/react-quill/dist/quill.snow.css";
var EMPTY_DELTA = { ops: [] };

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: "snow",
			enabled: true,
			readOnly: false,
			value: EMPTY_DELTA,
			events: []
		};
	}

	formatRange(range) {
		return range ? [range.index, range.index + range.length].join(",") : "none";
	}

	onEditorChange = (value, delta, source, editor) => {
		this.setState({
			value: editor.getContents(),
			events: [`[${source}] text-change`, ...this.state.events]
		});
	};

	onEditorChangeSelection = (range, source) => {
		this.setState({
			selection: range,
			events: [
				`[${source}] selection-change(${this.formatRange(
					this.state.selection
				)} -> ${this.formatRange(range)})`,
				...this.state.events
			]
		});
	};

	onEditorFocus = (range, source) => {
		this.setState({
			events: [`[${source}] focus(${this.formatRange(range)})`].concat(
				this.state.events
			)
		});
	};

	onEditorBlur = (previousRange, source) => {
		this.setState({
			events: [`[${source}] blur(${this.formatRange(previousRange)})`].concat(
				this.state.events
			)
		});
	};

	onToggle = () => {
		this.setState({ enabled: !this.state.enabled });
	};

	onToggleReadOnly = () => {
		this.setState({ readOnly: !this.state.readOnly });
	};

	onSetContents = () => {
		this.setState({ value: "This is some <b>fine</b> example content" });
	};

	render() {
		return (
			<div className="wrapper">
				{this.renderToolbar()}
				<hr />
				{this.renderSidebar()}
				{this.state.enabled && (
					<ReactQuill
						theme={this.state.theme}
						value={this.state.value}
						// readOnly={this.state.readOnly}
						modules={Editor.modules}
						formats={Editor.formats}
						onChange={this.onEditorChange}
						onChangeSelection={this.onEditorChangeSelection}
						onFocus={this.onEditorFocus}
						onBlur={this.onEditorBlur}
					/>
				)}
			</div>
		);
	}

	renderToolbar() {
		var state = this.state;
		var enabled = state.enabled;
		var readOnly = state.readOnly;
		var selection = this.formatRange(state.selection);
		return (
			<div className="notice_cont">
				<button onClick={this.onToggle}>
					{enabled ? "Disable" : "Enable"}
				</button>
				<button onClick={this.onToggleReadOnly}>
					Set {readOnly ? "read/Write" : "read-only"}
				</button>
				<button onClick={this.onSetContents}>
					Fill contents programmatically
				</button>
				<button disabled={true}>Selection: ({selection})</button>
			</div>
		);
	}

	renderSidebar() {
		return (
			<div style={{ overflow: "hidden", float: "right" }}>
				<textarea
					style={{ display: "block", width: 300, height: 300 }}
					value={JSON.stringify(this.state.value, null, 2)}
					readOnly={true}
				/>
				<textarea
					style={{ display: "block", width: 300, height: 300 }}
					value={this.state.events.join("\n")}
					readOnly={true}
				/>
			</div>
		);
	}
}

/*
 * Simple editor component that takes placeholder text as a prop
 */
// class Editor extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { editorHtml: "", theme: "snow" };
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(html) {
// 		this.setState({ editorHtml: html });
// 	}

// 	// 	onEditorChange = (value, delta, source, editor) => {
// 	// 		this.setState({
// 	// 			value: editor.getContents(),
// 	// 			events: [`[${source}] text-change`, ...this.state.events]
// 	// 		});
// 	// 	};

// 	handleThemeChange(newTheme) {
// 		if (newTheme === "core") newTheme = null;
// 		this.setState({ theme: newTheme });
// 	}

// 	render() {
// 		return (
// 			<div className="app">
// 				<ReactQuill
// 					theme={this.state.theme}
// 					onChange={this.handleChange}
// 					value={this.state.editorHtml}
// 					modules={Editor.modules}
// 					formats={Editor.formats}
// 					bounds={".app"}
// 					placeholder={this.props.placeholder}
// 				/>
// 				<div className="themeSwitcher">
// 					<label>Theme </label>
// 					<select onChange={(e) => this.handleThemeChange(e.target.value)}>
// 						<option value="snow">Snow</option>
// 						<option value="bubble">Bubble</option>
// 						<option value="core">Core</option>
// 					</select>
// 				</div>
// 			</div>
// 		);
// 	}
// }

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" }
		],
		["link", "image", "video"],
		["clean"]
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false
	}
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"video"
];

/*
 * PropType validation
 */
// Editor.propTypes = {
// 	placeholder: PropTypes.string
// };

export default Editor;

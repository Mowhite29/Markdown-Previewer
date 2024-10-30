import './App.css';
import React from 'react';
import { marked } from 'marked';

marked.use({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const defaultText = [
  "# Welcome to my React Markdown Previewer!",
  "",
  "## This is a sub-heading...",
  "### And here's some other cool stuff:",
  "",
  "Heres some code, `<div></div>`, between 2 backticks.",
  "",
  "```",
  "// this is multi-line code:",
  "",
  "function anotherExample(firstLine, lastLine) {",
  "  if (firstLine == '```' && lastLine == '```') {",
  "    return multiLineCode;",
  "  }",
  "}",
  "```",
  "",
  "You can also make text **bold**... whoa!",
  "Or _italic_.",
  "Or... wait for it... **_both!_**",
  "And feel free to go crazy ~~crossing stuff out~~.",
  "",
  "There's also [links](https://www.freecodecamp.org), and",
  "> Block Quotes!",
  "",
  "And if you want to get really crazy, even tables:",
  "",
  "Wild Header | Crazy Header | Another Header?",
  "------------ | ------------- | -------------",
  "Your content can | be here, and it | can be here....",
  "And here. | Okay. | I think we get it.",

  "- And of course there are lists.",
  "  - Some are bulleted.",
  "    - With different indentation levels.",
  "        - That look like this.",
  "",
  "",
  "1. And there are numbered lists too.",
  "1. Use just 1s if you want!",
  "1. And last but not least, let's not forget embedded images:",
  "",
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
]

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      editorText : defaultText.join("\n")
    })
    this.inputHandler = this.inputHandler.bind(this)
  }
  inputHandler (event){
    this.setState ({
      editorText: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <textarea id="editor" value={this.state.editorText} onChange={this.inputHandler}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.editorText)}}>
        </div>
      </div>
    );
  }
}


export default App;

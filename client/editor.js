import { basicSetup, EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import lessons from "./lessons";
import { tailwindCompletion } from "./tailwind";

const renderFrame = document.getElementById("renderFrame");
let timer;

const updatePreview = (code) => {
  clearInterval(timer);
  timer = setTimeout(() => {
    renderFrame.srcdoc = code;
  }, 300);
};

const extensions = [
  basicSetup,
  keymap.of([indentWithTab]),
  indentUnit.of("  "),
  html(),
  tailwindCompletion,
  oneDark,
  EditorView.updateListener.of((update) => {
    if (update.docChanged) updatePreview(update.state.doc.toString());
  }),
];

const makeState = (code) => {
  return EditorState.create({ doc: code, extensions });
};

const view = new EditorView({
  state: makeState(lessons.test.code),
  parent: document.getElementById("editor"),
});

window.loadLesson = (id) => {
  const lesson = lessons[id];
  if (!lesson) return;
  view.setState(makeState(lesson.code));
  renderFrame.srcdoc = lesson.code;
};

renderFrame.srcdoc = lessons.test.code;

import {ProseMirror} from "prosemirror/dist/edit"
import {Schema, Doc, Paragraph, Heading, Text, defaultSchema} from "prosemirror/dist/model"
import {fromHTML} from "prosemirror/dist/format"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm1 = window.pm1 = new ProseMirror({
  place: document.querySelector("#editor-1"),
  doc: fromHTML( defaultSchema, "<p>This is a document based on the default schema.</p>" ),
  menuBar: true,
  tooltipMenu: true
})

const schema = new Schema({
  nodes: {
    doc: {type: Doc, content: "block+"},

    paragraph: {type: Paragraph, content: "inline[_]*"},
    heading: {type: Heading, content: "inline[_]*"},

    text: {type: Text},
  },

  groups: {
    block: ["paragraph", "heading"],
    inline: ["text"]
  },

  marks: {}
})

let pm2 = window.pm2 = new ProseMirror({
  place: document.querySelector("#editor-2"),
  doc: fromHTML( schema, "<p>Hi</p>" ),
  schema: schema,
  menuBar: true,
  tooltipMenu: true
})

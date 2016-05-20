import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {Schema, Doc, Paragraph, Heading, Text} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import BlockOfColor from "./block-of-color"

const schema = new Schema({
  nodes: {
    doc: {type: Doc, content: "block+"},

    paragraph: {type: Paragraph, content: "inline<_>*", group: "block"},
    heading: {type: Heading, content: "inline<_>*", group: "block"},
    block_of_color: {type: BlockOfColor, group: "block"},

    text: {type: Text, group: "inline"}
  },

  marks: {}
})

const pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( schema, "<p>Here's an editor with default content.</p>" ),
  schema: schema,
  menuBar: true,
  tooltipMenu: true
})

// To insert the block...
// pm.tr.replaceSelection(pm.schema.nodes.block_of_color.create()).apply()

document.querySelector('.insert-block-button').addEventListener('click', () => {
  let blockOfColorNode = pm.schema.nodes.block_of_color.create()
  pm.tr.replaceSelection(blockOfColorNode, true).apply()
})

import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {Schema, defaultSchema} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import BlockOfColor from "./block-of-color"

const customSchema = new Schema(defaultSchema.spec.update({block_of_color: BlockOfColor}))

const pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( customSchema, "<p>Here's an <em>editor</em> with <b>default content</b>.</p>" ),
  schema: customSchema,
  menuBar: true,
  tooltipMenu: true
})

// To insert the block...
// pm.tr.replaceSelection(pm.schema.nodes.block_of_color.create()).apply()

document.querySelector('.insert-block-button').addEventListener('click', () => {
  let blockOfColorNode = pm.schema.nodes.block_of_color.create()
  pm.tr.replaceSelection(blockOfColorNode, true).apply()
})

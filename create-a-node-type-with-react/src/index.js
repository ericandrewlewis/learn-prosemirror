import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import {Schema, defaultSchema} from "prosemirror/dist/model"
import BlockOfColor from "./block-of-color"
const place = document.querySelector("#editor")
const content = document.querySelector("#content")

const customSchema = new Schema(defaultSchema.spec.update({block_of_color: BlockOfColor}))

const pm = window.pm = new ProseMirror({
  place: place,
  doc: content,
  docFormat: "dom",
  schema: customSchema
})

content.style.display = "none"

// To insert the block...
// pm.tr.replaceSelection(pm.schema.nodes.block_of_color.create()).apply()

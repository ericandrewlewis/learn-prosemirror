import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import {Schema, defaultSchema} from "prosemirror/dist/model"
import {SuperscriptMark} from "./superscript-mark"

const place = document.querySelector("#editor")
const initialContent = document.querySelector("#initial-content")

const customSchema = new Schema(defaultSchema.spec.update({}, {superscript: SuperscriptMark}))

const pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom",
  schema: customSchema,
  menuBar: true
})

initialContent.style.display = "none"

// To insert the block...
// pm.tr.replaceSelection(pm.schema.nodes.block_of_color.create()).apply()

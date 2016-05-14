import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( defaultSchema, "<p>Hi</p>" ),
  menuBar: true,
  tooltipMenu: true
})

document.querySelector(".insert-eyes-button").addEventListener('click', function() {
  pm.tr.typeText("👀").apply()
})

document.querySelector(".delete-selection-button").addEventListener('click', function() {
  pm.tr.deleteSelection().apply()
})

document.querySelector(".insert-paragraph-button").addEventListener('click', function() {
  let textNode = pm.schema.text("hi")
  let paragraphNode = pm.schema.nodes.paragraph.create({}, textNode)
  pm.tr.replaceSelection(paragraphNode, true).apply()
})

import {ProseMirror, TextSelection, NodeSelection} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"

import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let debugEl = document.querySelector("#debug")
let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( defaultSchema, "<ul><li>It was the best of times. it was the worst of times.</li></ul>" ),
  menuBar: true,
  tooltipMenu: true,
  autoInput: true
})

let displaySelectionInfo = () => {
  if ( pm.selection instanceof TextSelection ) {
    let from = (pm.selection.anchor >= pm.selection.head) ? pm.selection.head : pm.selection.anchor
    let to = (pm.selection.anchor >= pm.selection.head) ? pm.selection.anchor : pm.selection.head
    debugEl.innerHTML = `Selected from position ${from} to ${to}`
  } else {
    debugEl.innerHTML = `Node selection from position ${pm.selection.from} to ${pm.selection.to}`
  }
}

pm.on("selectionChange", displaySelectionInfo)

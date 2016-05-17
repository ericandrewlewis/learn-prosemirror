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
let allSteps = []
let displayTransformation = (transform) => {
  transform.steps.forEach((step) => {
    allSteps.push(step)
  })

  debugEl.innerHTML = JSON.stringify( allSteps, null, 2 )
  debugEl.scrollTop = debugEl.scrollHeight;
}

pm.on("transform", displayTransformation)

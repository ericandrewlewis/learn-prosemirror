import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor-1")
let content = document.querySelector("#content-1")
content.style.display = 'none'

let pm = window.pm = new ProseMirror({
  place: place,
  doc: content,
  docFormat: "dom"
})


place = document.querySelector("#editor-2")
content = document.querySelector("#content-2")
content.style.display = 'none'

let pm2 = window.pm2 = new ProseMirror({
  place: place,
  doc: content,
  docFormat: "dom",
  menuBar: true,
  tooltipMenu: true
})

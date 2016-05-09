import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor")
let content = document.querySelector("#content")

let pm = window.pm = new ProseMirror({
  place: place,
  doc: content,
  docFormat: "dom"
})

content.style.display = "none"

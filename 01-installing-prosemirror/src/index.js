import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor")
})

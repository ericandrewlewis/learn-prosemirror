/**
 * We "import" a few modules from the ProseMirror package, which is the
 * ES6 method for using other code.
 */
import {ProseMirror} from "prosemirror/dist/edit"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")
initialContent.style.display = "none"

let pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom"
})

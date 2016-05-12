import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")
initialContent.style.display = "none"

let pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom",
  menuBar: true,
  tooltipMenu: true
})

document.querySelector(".show-content-button").addEventListener('click', function() {
  alert( JSON.stringify( pm.getContent() ) );
})

document.querySelector(".show-content-in-html-button").addEventListener('click', function() {
  alert( pm.getContent('html') );
})

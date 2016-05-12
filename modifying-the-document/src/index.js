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

document.querySelector(".insert-eyes-button").addEventListener('click', function() {
  pm.tr.typeText("👀").apply();
})

document.querySelector(".delete-selection-button").addEventListener('click', function() {
  pm.tr.deleteSelection().apply();
})

document.querySelector(".insert-paragraph-button").addEventListener('click', function() {
  let textNode = pm.schema.text("hi")
  let paragraphNode = pm.schema.nodes.paragraph.create({}, textNode)
  pm.tr.replaceSelection(paragraphNode, true).apply()
})

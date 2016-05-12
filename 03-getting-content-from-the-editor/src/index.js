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



// Commands can be executed using the pm.execCommand() method.
document.querySelector(".get-content-button").addEventListener('click', function() {
  alert(JSON.stringify( pm.getContent() ));
})

// Commands can be executed using the pm.execCommand() method.
document.querySelector(".get-html-button").addEventListener('click', function() {
  alert( pm.getContent('html') );
})

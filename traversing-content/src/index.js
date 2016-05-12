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

document.querySelector(".check-for-runons-button").addEventListener('click', function() {
  function iterator( node ) {
    // isTextBlock is for nodes like paragraph that only contain inline nodes.
    if ( node.isTextblock ) {
      // Check if the textblock has a run-on sentence.
      if ( /[^\.]{50,}/.test(node.textContent) ) {
        alert( "There's a run-on sentence!" );
      }
    } else if ( node.childCount ) {
      node.forEach(iterator)
    }
  }
  pm.getContent().forEach(iterator)
})

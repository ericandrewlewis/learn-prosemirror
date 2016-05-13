import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML, toHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"
import {Node} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
window.x = Node
let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( defaultSchema, "<p>Hi</p>" ),
  menuBar: true,
  tooltipMenu: true
})

function displayDocInJSON() {
  let docInJSON = JSON.stringify( pm.doc.toJSON(), null, 2 )
  document.querySelector('.document-in-json').innerHTML = docInJSON
}

pm.on( 'transform', displayDocInJSON )
displayDocInJSON()

document.querySelector(".show-content-in-html-button").addEventListener('click', function() {
  alert( toHTML( pm.doc ) );
})

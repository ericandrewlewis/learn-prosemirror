import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML, toHTML, toText} from "prosemirror/dist/format"
import {defaultSchema, Node} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

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

document.querySelector(".set-content-with-json-button").addEventListener('click', function() {
  pm.setDoc( Node.fromJSON(defaultSchema, {"type": "doc","content": [{"type": "paragraph","content": [{"type": "text","text": "Hello"}]}]}) )
  displayDocInJSON()
})


document.querySelector(".show-content-in-html-button").addEventListener('click', function() {
  alert( toHTML( pm.doc ) );
})


document.querySelector(".show-content-in-plain-text-button").addEventListener('click', function() {
  alert( toText( pm.doc ) );
})

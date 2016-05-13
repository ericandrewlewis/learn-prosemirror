import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( defaultSchema, "<ul><li>The boy crossed the road and came upon a turtle and the turtle had glasses on because it was on its way to the library.</li></ul>" ),
  menuBar: true,
  tooltipMenu: true,
  autoInput: true
})

let badCapitalization = /\. [a-z]/g

document.querySelector(".check-for-capitalization-button").addEventListener('click', function() {
  function scanFragment( fragment, position ) {
    fragment.forEach((child, offset) => scan(child, position + offset))
  }
  function scan(node, position) {
    if ( node.isText ) {
      let match
      while (match = badCapitalization.exec(node.text)) {
        pm.markRange(position + match.index, position + match.index + match[0].length, {className: "needs-caps"})
      }
    }
    scanFragment(node.content, position + 1)
  }
  scanFragment(pm.doc.content, 0)
})

import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( defaultSchema, "<ul><li>It was the best of times. it was the worst of times.</li></ul>" ),
  menuBar: true,
  tooltipMenu: true,
  autoInput: true
})

let badCapitalization = /\. [a-z]/g

let checkDocumentForBadCaps = () => {
  while ( pm.ranges.ranges.length > 0 ) {
    pm.removeRange( pm.ranges.ranges[0] )
  }
  function scanFragment( fragment, position ) {
    fragment.forEach((child, offset) => scan(child, position + offset))
  }
  function scan(node, position) {
    if ( node.isText ) {
      let match
      while (match = badCapitalization.exec(node.text)) {
        pm.markRange(position + match.index + 2, position + match.index + 3, {className: "needs-caps"})
      }
    }
    scanFragment(node.content, position + 1)
  }
  scanFragment(pm.doc.content, 0)
}
checkDocumentForBadCaps()

pm.on( 'transform', checkDocumentForBadCaps )

import {ProseMirror} from "prosemirror/dist/edit"
import {fromHTML} from "prosemirror/dist/format"
import {defaultSchema} from "prosemirror/dist/model"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor-1")
})

let pm2 = window.pm2 = new ProseMirror({
  place: document.querySelector("#editor-2"),
  doc: fromHTML( defaultSchema, "<p>Here's an <em>editor</em> with <b>default content</b>.</p>" )
})

let pm3 = window.pm3 = new ProseMirror({
  place: document.querySelector("#editor-3"),
  doc: fromHTML( defaultSchema, "<p>Here's an <em>editor</em> with <b>default content</b>. <em>Highlighting text brings up the contextual menu</em>.</p><p>Try entering <code>*+Space</code> at the beginning of a line to see autoinput rules in action.</p>" ),
  menuBar: true,
  tooltipMenu: true,
  autoInput: true
})

/**
 * We "import" a few modules from the ProseMirror package, which is the
 * ES6 method for using other code.
 */
import {ProseMirror, CommandSet} from "prosemirror/dist/edit"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")
initialContent.style.display = "none"

let insertEyesCommandSpec = {
  menu: {
    group: "block", rank: 45,
    display: {type: "icon", text: "👀", style: "font-weight: bold"},
  },
  label: "Insert Judgy Eyes",
  run(pm) { return pm.tr.typeText("👀").apply(pm.apply.scroll) },
}

let customCommandSet = CommandSet.default.update({insertEyes: insertEyesCommandSpec})

let pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom",
  commands: customCommandSet,
  menuBar: true
})

/**
 * We "import" a few modules from the ProseMirror package, which is the
 * ES6 method for using other code.
 */
import {ProseMirror, CommandSet} from "prosemirror/dist/edit"
import "prosemirror/dist/menu/menubar"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")
initialContent.style.display = "none"

/**
 * A command is registered with a spec. The spec defines various ways
 * the command should interact with different parts of the system.
 * @type {Object}
 */
let insertEyesCommandSpec = {
  // The `menu` property defines if and how the command should display
  // in the menu.
  menu: {
    group: "block", rank: 45,
    display: {type: "icon", text: "👀", style: "font-weight: bold"},
  },
  label: "Insert Judgy Eyes",
  // The `run` command is required, and defines what should happen
  // when the command is run.
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

// Commands can be executed using the pm.execCommand() method.
document.querySelector(".insert-eyes-button").addEventListener('click', function() {
  pm.execCommand('insertEyes')
})

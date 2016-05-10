import {MarkType} from "prosemirror/dist/model"
import {elt} from "prosemirror/dist/dom"

export class SuperscriptMark extends MarkType {}

/**
 * Serialize DOM is what ProseMirror uses to render the node in
 * the editor.
 */
SuperscriptMark.prototype.serializeDOM = (mark, serializer) => serializer.elt("sup")

// Register a command of "set" on the mark type's registry, which is available
// to the schema via schema.registry("something", forEachFunction);
SuperscriptMark.register("command", "set", {
  // Commands must be configured appropriately, this tells the internal stuff
  // to register appropriately.
  derive: true,
  label: "Set superscript"
})
SuperscriptMark.register("command", "unset", {derive: true, label: "Unset superscript"})

SuperscriptMark.register("command", "toggle", {
  //
  derive: true,
  label: "Toggle superscript",
  menu: {
    group: "inline",
    rank: 22,
    select: "disable",
    display: {
      type: "icon",
      width: 8, height: 8,
      path: "M1 0v4c0 1.1 1.12 2 2.5 2h.5c1.1 0 2-.9 2-2v-4h-1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4h-2zm-1 7v1h7v-1h-7z"
    }
  }
  // keys: ["Mod-U"]
})

SuperscriptMark.register("parseDOM",  "sup", {parse: "mark"})

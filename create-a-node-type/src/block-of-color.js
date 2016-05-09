import { Block, Attribute } from "prosemirror/dist/model"
import { elt } from "prosemirror/dist/dom"

export default class BlockOfColor extends Block {
  get attrs() {
    return {
      position: new Attribute({default: "red"})
    }
  }

  get draggable() { return true }

  get locked() { return false }

  get contains() { return null }

  serializeDOM(node, serializer) {
    let ele = elt("div", {
      style: "height: 100px; background-color: red;"
    })
    return ele
  }

}

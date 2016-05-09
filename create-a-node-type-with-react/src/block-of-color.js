import { Block, Attribute } from "prosemirror/dist/model"
import { elt } from "prosemirror/dist/dom"
import BlockOfColorComponent from "./block-of-color-component.jsx"
import React from 'react';
import ReactDOM from 'react-dom';

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
    let ele = elt("div")
    var x = React.createElement( BlockOfColorComponent );
    ReactDOM.render(x, ele)
    return ele
  }
}

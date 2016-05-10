import { Block, Attribute } from "prosemirror/dist/model"
import { elt } from "prosemirror/dist/dom"
import ImageBlockComponent from "./component.jsx"
import React from 'react';
import ReactDOM from 'react-dom';

export default class ImageBlock extends Block {
  get attrs() {
    return {
      position: new Attribute({default: "red"})
    }
  }

  get contains() { return null }

  serializeDOM(node, serializer) {
    let element = elt("div")
    var reactElement = React.createElement( ImageBlockComponent );
    ReactDOM.render(reactElement, element)
    return element
  }
}

import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import {Schema, SchemaSpec, Doc, BlockQuote, OrderedList, BulletList, ListItem, HorizontalRule, Paragraph, Heading, Text} from "prosemirror/dist/model"
import {fromHTML} from "prosemirror/dist/format"

// :: SchemaSpec
// The specification for the default schema.
const schemaSpec = new SchemaSpec({
  doc: Doc,

  paragraph: Paragraph,
  heading: Heading,

  text: Text
})

const schema = new Schema(schemaSpec)

let pm = window.pm = new ProseMirror({
  place: document.querySelector("#editor"),
  doc: fromHTML( schema, "<p>Hi</p>" ),
  schema: schema,
  menuBar: true,
  tooltipMenu: true
})

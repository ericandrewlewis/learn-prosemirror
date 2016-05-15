import {ProseMirror} from "prosemirror/dist/edit"
import {Schema, SchemaSpec, Doc, Paragraph, Heading, Text, defaultSchema} from "prosemirror/dist/model"
import {fromHTML} from "prosemirror/dist/format"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"

let pm1 = window.pm1 = new ProseMirror({
  place: document.querySelector("#editor-1"),
  doc: fromHTML( defaultSchema, "<p>This is a document based on the default schema.</p>" ),
  menuBar: true,
  tooltipMenu: true
})

// :: SchemaSpec
// The specification for the default schema.
const schemaSpec = new SchemaSpec({
  doc: Doc,

  paragraph: Paragraph,
  heading: Heading,

  text: Text
})

const schema = new Schema(schemaSpec)

let pm2 = window.pm2 = new ProseMirror({
  place: document.querySelector("#editor-2"),
  doc: fromHTML( schema, "<p>Hi</p>" ),
  schema: schema,
  menuBar: true,
  tooltipMenu: true
})

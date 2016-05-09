import {ProseMirror} from "prosemirror/dist/edit"
import "prosemirror/dist/inputrules/autoinput"
import "prosemirror/dist/menu/tooltipmenu"
import "prosemirror/dist/menu/menubar"
import {Schema, SchemaSpec, Doc, BlockQuote, OrderedList, BulletList, ListItem, HorizontalRule, Paragraph, Heading, Text} from "prosemirror/dist/model"

let place = document.querySelector("#editor")
let initialContent = document.querySelector("#initial-content")
initialContent.style.display = "none"

// :: SchemaSpec
// The specification for the default schema.
const schemaSpec = new SchemaSpec({
  doc: Doc,
  blockquote: BlockQuote,
  ordered_list: OrderedList,
  bullet_list: BulletList,
  list_item: ListItem,
  horizontal_rule: HorizontalRule,

  paragraph: Paragraph,
  heading: Heading,

  text: Text
})

const schema = new Schema(schemaSpec)

let pm = window.pm = new ProseMirror({
  place: place,
  doc: initialContent,
  docFormat: "dom",
  schema: schema,
  menuBar: true,
  tooltipMenu: true
})

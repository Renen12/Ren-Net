/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2y0k3l7wsq6z7v")

  // remove
  collection.schema.removeField("m5mizzaq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwzxresk",
    "name": "username",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o2y0k3l7wsq6z7v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5mizzaq",
    "name": "userid",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("kwzxresk")

  return dao.saveCollection(collection)
})

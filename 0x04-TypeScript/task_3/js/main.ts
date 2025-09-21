// Triple-slash directive to include the ambient declarations
/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from "./interface";

// Import all functions from crud.js as a single object named CRUD
import * as CRUD from "./crud";

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Create a const variable named newRowID with the type RowID and assign the insertRow command
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Create a const variable named updatedRow with the type RowElement and update row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

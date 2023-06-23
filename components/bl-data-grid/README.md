# Data Grid

Data Grid is a component of Backendless UI-Builder designer. The main purpose of the component is to display data, and this data can be sorted and filtered.
If you want to know more about this component, you can [follow the link.](https://www.ag-grid.com/example/)

<p align="center">
  <img src="./thumbnail.png" alt="thumbnail" width="780"/>
</p>

## Properties

| Property                                            | Type                                                                                                                             | Default Value                                                                                                                                                             | Logic                         | Data Binding | UI Setting | Description                                                                                                                                                                                   |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disabled<br/>`disabled`                             | Checkbox                                                                                                                         | `false`                                                                                                                                                                   | Disabled Logic                | YES          | YES        | This handler allows you to disable a component.                                                                                                                                               |
| Sortable<br/>`sortable`                             | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Sortable Logic                | YES          | YES        | This handler allows you to specify the sorting option for all grid columns.                                                                                                                   |
| Filter<br/>`filter`                                 | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Filter Logic                  | YES          | YES        | This handler allows you to add filtering capability to all grid columns.                                                                                                                      |
| Floating Filter<br/>`floatingFilter`                | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Floating Filter Logic         | YES          | YES        | This handler allows you to specify whether or not the floating filter is displayed.                                                                                                           |
| Editable<br/>`editable`                             | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Editable Logic                | NO           | YES        | This handler allows you to control the ability to edit data in the cell.                                                                                                                      |
| Resizable<br/>`resizable`                           | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Resizable Logic               | NO           | YES        | This handler allows you to add the ability to change column widths.                                                                                                                           |
| Suppress Cell Focus<br/>`suppressCellFocus`         | Checkbox                                                                                                                         | `false`                                                                                                                                                                   | Suppress Cell Focus Logic     | NO           | YES        | This handler allows you to disable cell focus and keyboard navigation.                                                                                                                        |
| Multiple Rows Selection<br/>`multipleRowsSelection` | Checkbox                                                                                                                         | `true`                                                                                                                                                                    | Multiple Rows Selection Logic | YES          | YES        | This handler adds the ability to select multiple rows. Watch [Adding Row Selections Guide](#adding-row-selections-guide).                                                                     |
| Column Definition<br/>`columnDefs`                  | JSON                                                                                                                             | `[`<br/>`{"field": "name", "flex": 1},`<br/>`{"field": "age", "sortable": true, "flex": 1},`<br/>`{"field": "city", "flex": 1}`<br/>`]`                                   | Column Definition Logic       | YES          | YES        | This handler allows you to define columns for the component. Watch [Codeless Examples](#examples). Signature of column: List of object `{field: String, sortable: Boolean, filter: Boolean}`. |
| Rows Data<br/>`rowsData`                            | JSON                                                                                                                             | `[`<br/>`{"name": "Jack", "age": 26, "city": "London"},`<br/>`{"name": "Kate", "age": 22, "city": "New York"},`<br/>`{"name": "Nick", "age": 28, "city": "Kyiv"}`<br/>`]` | Rows Data Logic               | YES          | YES        | This handler allows you to set data to the component. Watch [Codeless Examples](#examples). Signature of data: List of object `{field: String \| Number}`                                     |
| Height<br/>`height`                                 | Text                                                                                                                             | "500px"                                                                                                                                                                   | Height Logic                  | YES          | YES        | This handler allows you to specify the height of the component.                                                                                                                               |
| Width<br/>`width`                                   | Text                                                                                                                             | "750px"                                                                                                                                                                   | Width Logic                   | YES          | YES        | This handler allows you to specify the width of the component.                                                                                                                                |
| Theme<br/>`theme`                                   | Select [Alpine:`alpine`<br/>Alpine Dark:`alpine-dark`<br/>Balham:`balham`<br/>Balham Dark:`balham-dark`<br/>Material:`material`] | Alpine:`alpine`                                                                                                                                                           | Theme Logic                   | YES          | YES        | This handler allows you to specify the theme of the component.                                                                                                                                |

## Events

| Name                  | Triggers                                                                  | Context Blocks                 |
|-----------------------|---------------------------------------------------------------------------|--------------------------------|
| On Cell Click Event   | This event is fired when the user clicks the mouse or taps the grid cell. | Cell Params: `{key: value}`    |
| On Column Moved Event | This event is fired when any column is moved.                             | Columns: list of moved columns |

## Actions

| Action                         | Inputs     | Returns                                 |
|--------------------------------|------------|-----------------------------------------|
| Get Selected Rows of Data Grid |            | `JSON`: list of selected rows           |
| Get Columns of Data Grid       |            | `JSON`: list of moved columns           |
| Get Rows Data of Data Grid     |            | `JSON`: list of rows                    |

## <a id="examples"></a> Codeless Examples

Adding row data to the component:

![markers example](./example-images/rows.png)

Adding columns to the component:

![markers example](./example-images/columns.png)

## <a id="adding-row-selections-guide"></a>Adding Row Selections Guide

Add `"checkboxSelection": true` property to the desired column:

![guide example](./example-images/add-checkboxSelection.png)

Add `"headerCheckboxSelection": true` to the desired column if you want to add the checkbox to the header to all rows select:

![guide example](./example-images/add-headerCheckboxSelection.png)

There is also a `Multiple Rows Selection` property for selecting multiple rows. Uncheck the box if you want to make the ability to select only one row:

![guide example](./example-images/control-selection-type.png)

Use `Get Selected Rows of Data Grid` action to get all selected rows:

![guide example](./example-images/get-selected-rows-action.png)
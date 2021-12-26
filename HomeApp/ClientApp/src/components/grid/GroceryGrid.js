import { Button } from "reactstrap";
import * as GridHelper from "./GridHelper.js";
import Grid from "./Grid.js"; 
import GroceryItemAddEdit from "../forms/GroceryItemAddEdit.js";

const GroceryGrid = ({ parentId, data }) => {
    // Detail form
    const form = <GroceryItemAddEdit />;

    // Test data
    let groceries = data ?? [];

    const columns = [
        {
            Name: "Id",
            Accessor: "Id",
            Hidden: true
        },
        {
            Name: "Name",
            Accessor: "Name"
        },
        {
            Name: "Description",
            Accessor: "Description"
        },
        {
            Name: "Quantity",
            Accessor: "Quantity"
        },
        {
            Name: "Comment",
            Accessor: "Comment"
        },
        {
            Name: "",
            // The arguments for this function come from the grid rendering system.
            // The grid context is passed into this function.
            Template: ({ gridData, setGridData, setWindowSettings }) => {
                return (
                    <div className="row-button-group">
                        <Button color="primary" onClick={(e) => GridHelper.EditRow(e, gridData, setWindowSettings)}>Edit</Button>
                        <Button color="danger" onClick={(e) => GridHelper.DeleteRow(e, gridData, setGridData)}>Delete</Button>
                    </div>
                )
            }
        }
    ];

    return (
        <>
            <h2>Grocery List</h2>
            <Grid addNewButtonText="Add New Item"
                autobind={false}
                columnOptions={columns}
                data={groceries}
                formName="GroceryItemAddEdit"
                windowTitle="Grocery Item"
                form={form}
            />
        </>
    );
}

export default GroceryGrid;
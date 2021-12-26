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
            Actions: ["Edit", "Delete"]
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
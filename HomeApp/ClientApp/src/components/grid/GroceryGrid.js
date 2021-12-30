import Grid from "./Grid.js"; 
import GroceryItemAddEdit from "../forms/GroceryItemAddEdit.js";
import Form from "../forms/Form.js";
import { useState } from "react";

const GroceryGrid = () => {
    // Detail form
    const form = <Form><GroceryItemAddEdit /></Form>;

    // Insert db call here
    const [groceries, setGroceries] = useState([]);
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
            <Grid addNewButtonText="Add New Item"
                columns={columns}
                gridData={groceries}
                setGridData={setGroceries}
                form={form}
            />
        </>
    );
}

export default GroceryGrid;
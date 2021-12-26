import Grid from "./Grid.js";
import RecipeAddEdit from "../forms/RecipeAddEdit.js";
import { Button } from "reactstrap";
import * as GridHelper from "./GridHelper.js";

const RecipeGrid = () => {
    const form = <RecipeAddEdit />
    const columns = [
        {
            Name: "Name",
            Accessor: "Name"
        },
        {
            Name: "Created By",
            Accessor: "CreatedBy"
        },
        {
            Name: "Created",
            Accessor: "Created"
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

    const data = [
        {
            Id: 1,
            Name: "Chicken Soup",
            CreatedBy: "Ian",
            Created: "2/12/2020"
        },
        {
            Id: 2,
            Name: "Burgers",
            CreatedBy: "Lauren",
            Created: "2/10/2020"
        },
        {
            Id: 3,
            Name: "Tacos",
            CreatedBy: "Lauren",
            Created: "3/25/2020"
        }
    ];

    return (
        <Grid
            addNewButtonText="Add New Recipe"
            autobind={false}
            columnOptions={columns}
            data={data}
            windowTitle="Recipe"
            form={form}
        />
    );
}

export default RecipeGrid;
import { useContext } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { WindowContext } from "../window/Window.js";
import GroceryGrid from "../grid/GroceryGrid.js";

const RecipeAddEdit = () => {
    debugger;
    const windowContext = useContext(WindowContext);
    const { formData } = windowContext;
    let title = "";

    if (formData) {
        title = "Edit Recipe";
        var { Id, Name, Created, CreatedBy, GroceryItems } = formData;
    }
    else {
        title = "Add Recipe";
    }

    return (
        <Form>
            <h2>{title}</h2>
            <Input type="hidden" name="Id" value={Id} />
            <Input type="hidden" name="Created" value={Created} />
            <Input type="hidden" name="CreatedBy" value={CreatedBy} />

            <FormGroup>
                <Label for="Name">Name</Label>
                <Input name="Name" Id="Name" defaultValue={Name} />
            </FormGroup>
            <FormGroup>
                <Label for="Name">Grocery Items</Label>
                <GroceryGrid data={GroceryItems} />
            </FormGroup>
        </Form>
    );
}

export default RecipeAddEdit;
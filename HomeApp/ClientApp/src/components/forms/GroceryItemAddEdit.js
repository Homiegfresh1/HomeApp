import { useContext } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { WindowContext } from "../window/Window.js";

const GroceryItemAddEdit = () => {
    var windowContext = useContext(WindowContext);
    var title = "";
    if (windowContext.formData) {
        title = "Edit Grocery Item";
        var { Id, Name, Quantity, Description, Comment } = windowContext.formData;
    }
    else {
        title = "New Grocery Item";
    }

    return (
        <Form>
            <h2>{title}</h2>
            <FormGroup>
                <Label for="Name">Name</Label>
                <Input name="Name" id="name" defaultValue={Name}/>
            </FormGroup>
            <FormGroup>
                <Label for="Description">Description</Label>
                <Input type="textarea" name="Description" id="description" defaultValue={Description} />
            </FormGroup>
            <FormGroup>
                <Label for="Quantity">Quantity</Label>
                <Input type="number" name="Quantity" id="quantity" defaultValue={Quantity}/>
            </FormGroup>
            <FormGroup>
                <Label for="Comment">Comment</Label>
                <Input type="textarea" name="Comment" id="comment" defaultValue={Comment} />
            </FormGroup>
            <Input type="hidden" name="Id" id="id" defaultValue={Id} />
        </Form>
    );
}

export default GroceryItemAddEdit;
import { useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FormContext } from "../forms/Form.js";
import { TextboxOnChange } from "../forms/FormHelper.js";

const GroceryItemAddEdit = () => {
    const formContext = useContext(FormContext);
    let { formData, setFormData, addNewItem } = formContext;
    var title = "";
    if (!addNewItem) {
        title = "Edit Grocery Item";
        var { Id, Name, Quantity, Description, Comment } = formData;
    }
    else {
        title = "New Grocery Item";
    }

    return (
        <>
            <h2>{title}</h2>
            <Input type="hidden" name="Id" id="id" defaultValue={Id} />
            <FormGroup>
                <Label for="Name">Name</Label>
                <Input name="Name" id="name" defaultValue={Name} onBlur={(e) => TextboxOnChange(e, formData, setFormData)}/>
            </FormGroup>
            <FormGroup>
                <Label for="Description">Description</Label>
                <Input type="textarea" name="Description" id="description" defaultValue={Description} onBlur={(e) => TextboxOnChange(e, formData, setFormData)}/>
            </FormGroup>
            <FormGroup>
                <Label for="Quantity">Quantity</Label>
                <Input type="number" name="Quantity" id="quantity" defaultValue={Quantity} onBlur={(e) => TextboxOnChange(e, formData, setFormData)}/>
            </FormGroup>
            <FormGroup>
                <Label for="Comment">Comment</Label>
                <Input type="textarea" name="Comment" id="comment" defaultValue={Comment} onBlur={(e) => TextboxOnChange(e, formData, setFormData)}/>
            </FormGroup>
        </>
    );
}

export default GroceryItemAddEdit;
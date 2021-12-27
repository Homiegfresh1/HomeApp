import $ from "jquery";

export function TextboxOnChange(e, formData, setFormData) {
    formData = formData ?? {};
    let textbox = e.target;
    let value = textbox.value;
    let propName = $(textbox).prop("name");
    formData[propName] = value;
    
    setFormData(formData);
}
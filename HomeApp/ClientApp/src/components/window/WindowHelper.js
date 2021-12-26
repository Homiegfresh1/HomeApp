import { Button } from "reactstrap";
import $ from "jquery";

function SerializeFormData(e) {
    debugger;
    var formData = {};
    var form = GetParentForm(e);
    var formInputs = $(form).find("input, textarea").toArray();

    formInputs.forEach((field) => {
        let propName = $(field).prop("name");
        let value = $(field).val();

        if (propName && value) {
            formData[propName] = value;
        }
    });

    return formData;
}

function GetParentForm(e) {
    return e.target.parentElement.previousElementSibling;
}

export function MapFormDataToModel(formData, model) {
    for (let prop in formData) {
        model[prop] = formData[prop];
    }

    return model;
}

export function AddNewItem(e, data, setDataFunc, setWindowSettingFunc) {
    var formData = SerializeFormData(e);
    formData.Id = data.length;

    // Insert db call here
    $.ajax({
        success: (resp) => {
            setDataFunc([...data, formData]);
            setWindowSettingFunc({ currentItem: null, visible: false });
        }
    });
}

export function SaveExistingItem(e, Id, gridData, setGridData, toggleWindowSettingFunc) {
    // Get form data
    var formData = SerializeFormData(e);

    // Get data item being edited
    var dataItem = gridData.filter(item => item.Id === Id)[0];
    var dataItemIndex = gridData.indexOf(dataItem);

    // Update data item with new data.
    dataItem = MapFormDataToModel(formData, dataItem);
    gridData[dataItemIndex] = dataItem;

    // Insert db call
    $.ajax({
        success: (resp) => {
            setGridData(gridData);
            toggleWindowSettingFunc({ currentItem: null, visible: false });
        }
    });
}

export function BuildWindowButtons(windowContext) {
    var { formData, gridData, setGridData, setWindowSettingFunc } = windowContext;
    var buttons = [];

    if (formData) {
        buttons.push(<Button onClick={(e) => SaveExistingItem(e, formData.Id, gridData, setGridData, setWindowSettingFunc)}> Save </Button>)
    }
    else {
        buttons.push(<Button onClick={(e) => AddNewItem(e, gridData, setGridData, setWindowSettingFunc)}> Save </Button>);
    }

    buttons.push(<Button onClick={() => setWindowSettingFunc({ currentItem: null, visible: false })}> Cancel </Button>);

    return (<div className="window-buttons"> {buttons} </div>);
}
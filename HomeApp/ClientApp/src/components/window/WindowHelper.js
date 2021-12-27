import { Button } from "reactstrap";

export function MapFormDataToModel(formData, model) {
    for (let prop in formData) {
        model[prop] = formData[prop];
    }

    return model;
}

export function AddNewItem(e, formData, gridData, setGridData, setWindowSettings) {
    // Later id will really come from ajax response.
    formData.Id = gridData.length;

    // Insert db call here
    setGridData([...gridData, formData]);
    setWindowSettings({ currentItem: null, visible: false });
}

export function SaveExistingItem(e, formData, gridData, setGridData, toggleWindowSettingFunc) {
    // Get data item being edited
    var dataItem = gridData.filter(item => item.Id === formData.Id)[0];
    var dataItemIndex = gridData.indexOf(dataItem);

    // Update data item with new data.
    dataItem = MapFormDataToModel(formData, dataItem);
    gridData[dataItemIndex] = dataItem;

    // Insert db call
    setGridData(gridData);
    toggleWindowSettingFunc({ currentItem: null, visible: false });
}

export function BuildWindowButtons(windowContext, formContext) {
    var { gridData, setGridData, setWindowSettingFunc } = windowContext;
    var { formData, addNewItem } = formContext
    var buttons = [];

    if (!addNewItem) {
        buttons.push(<Button onClick={(e) => SaveExistingItem(e, formData, gridData, setGridData, setWindowSettingFunc)}> Save </Button>);
    }
    else {
        buttons.push(<Button onClick={(e) => AddNewItem(e, formData, gridData, setGridData, setWindowSettingFunc)}> Save </Button>);
    }

    buttons.push(<Button onClick={() => setWindowSettingFunc({ currentItem: null, visible: false })}> Cancel </Button>);

    return (<div className="window-buttons"> {buttons} </div>);
}
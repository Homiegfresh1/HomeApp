import $ from "jquery";
import { Button } from "reactstrap";

export function BuildGridHeader({ columns }) {
    var headerCells = [];

    // Render table cell if the column is not set to be hidden
    columns.forEach((col) => {
        if (!col.Hidden) {
            headerCells.push(<th style={{ textAlign: "center" }}>{col.Name}</th>);
        }
    });

    return (
        <thead>
            <tr>
                {headerCells}
            </tr>
        </thead>
    );
}

function BuildTemplate(template, dataItem) {
    let jsx;
    if (typeof template === "function") {
        jsx = template(dataItem);
    }
    else {
        jsx = template;
    }

    return jsx;
}

export function BuildGridRows(gridContext) {
    var rows = [];
    var { gridData, setGridData, columns, setWindowSettings } = gridContext;

    // Build table row for each data item
    if (gridData) {
        for (let i = 0; i < gridData.length; i++) {
            let dataItem = gridData[i];
            let cells = [];

            // Build table cells for each prop in the data item
            // Only if the data has a prop in the column settings that are not hidden
            columns.forEach((col) => {
                if (!col.Hidden && !col.Actions) {
                    let prop = dataItem[col.Accessor];

                    if (col.Template) {
                        cells.push(<td>{BuildTemplate(col.Template, dataItem)}</td>);
                    }
                    else if (prop !== null && prop !== undefined) {
                        cells.push(<td style={{textAlign: "center"}}>{prop}</td>);
                    }
                    else {
                        cells.push(<td></td>);
                    }
                }
            });

            // Render grid actions at end of grid.
            // TODO: Move this outside of for loop so this isn't recalculated each time.
            let actionSettings = columns.filter(x => x.Actions);
            if (actionSettings.length) {
                let actions = actionSettings[0].Actions;
                let buttonLocation = actionSettings[0].Position;
                let actionButtons = [];

                actions.forEach((action) => {
                    switch (action.toLowerCase()) {
                        case "edit":
                            actionButtons.push(<Button color="primary" onClick={(e) => EditRow(e, gridData, setWindowSettings)}>Edit</Button>);
                            break;
                        case "delete":
                            actionButtons.push(<Button color="danger" onClick={(e) => DeleteRow(e, gridData, setGridData)}>Delete</Button>);
                            break;
                    }
                });

                switch (buttonLocation?.toLowerCase()) {
                    case "front":
                    case "beginning":
                        cells = [<td><div className="row-button-group">{actionButtons}</div></td>, ...cells];
                        break;
                    case "end":
                        cells.push(<td><div className="row-button-group">{actionButtons}</div></td>);
                        break;
                    default:
                        cells.push(<td><div className="row-button-group">{actionButtons}</div></td>);
                }
            }

            rows.push(<tr id={`row_${i}`}>{cells}</tr>);
        }
    }

    return (
        <tbody>
            {rows}
        </tbody>
    );
}

export function DeleteRow(e, gridData, setGridData) {
    var dataItem = GetDataItemFromRowEvent(e, gridData);
    gridData = gridData.filter(x => x !== dataItem);

    // Make call to db to delete grocery item
    setGridData(gridData);
}

function GetDataItemFromRowEvent(e, data) {
    var index = parseInt($(e.target).closest("tr").prop("id").split("_")[1]);
    return data[index];
}

// Event triggered when clicking edit button. Passes row data into form.
export function EditRow(e, gridData, setWindowSettings) {
    var dataItem = GetDataItemFromRowEvent(e, gridData);
    setWindowSettings({ currentItem: dataItem, visible: true });
}
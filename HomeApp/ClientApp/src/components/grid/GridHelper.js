import $ from "jquery";

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

export function BuildGridRows(gridContext) {
    var rows = [];
    var { gridData, columns } = gridContext;

    // Build table row for each data item
    if (gridData) {
        for (let i = 0; i < gridData.length; i++) {
            let dataItem = gridData[i];
            let cells = [];

            // Build table cells for each prop in the data item
            // Only if the data has a prop in the column settings that are not hidden
            columns.forEach((col) => {
                let prop = dataItem[col.Accessor];
                if (prop !== null && prop !== undefined && !col.Hidden) {
                    cells.push(<td style={{ textAlign: "center" }}>{prop}</td>);
                }
                else if ((prop === null || prop === undefined) && !col.Template) {
                    cells.push(<td></td>);
                }
            });

            // Render in grid row actions
            // TODO: Make it so that these templates show up in the correct order
            // It's currently only rendered on the last column
            let rowActions = columns.filter(col => col.Template);
            if (rowActions.length) {
                rowActions.forEach((action) => {
                    let template;
                    if (typeof action.Template === "function") {
                        template = action.Template(gridContext);
                    }
                    else {
                        template = action.Template;
                    }

                    cells.push(template);
                });
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
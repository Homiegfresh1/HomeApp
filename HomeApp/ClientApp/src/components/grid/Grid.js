import * as GridHelper from "./GridHelper.js";
import { Button, Table } from "reactstrap";
import { useState, useMemo } from "react";
import Window from "../window/Window.js";
import React from "react";
import "./Grid.css";

const GridContext = React.createContext();

const Grid = ({ autobind, addNewButtonText, dataSourceOptions, columnOptions, data, form, windowTitle }) => {
    let initStateValue = [];
    // Use data passed into grid as init data.
    if (data && data.length) {
        initStateValue = data;
    }
    else if (autobind) {
        //let readUrl = dataSourceOptions.read.url;
        // Execute read and use the returned data as init value for state.
        initStateValue = [];
    }

    const [windowSettings, setWindowSettings] = useState({ currentItem: null, visible: false });
    const [gridData, setGridData] = useState(initStateValue);
    const columns = useMemo(() => columnOptions, [gridData]);
    const gridContextValue = {
        gridData,
        setGridData,
        windowSettings,
        setWindowSettings,
        columns
    }

    return (
        <>
            <GridContext.Provider value={gridContextValue}>
                {
                    windowSettings.visible ?
                        <Window formData={windowSettings.currentItem} setWindowSettingFunc={setWindowSettings} gridData={gridData} setGridData={setGridData} title={windowTitle}>
                            {form}
                        </Window> : null
                }
                <Button onClick={(e) => { setWindowSettings({ currentItem: null, visible: true }) }}>{addNewButtonText}</Button>
                <Table>
                    {GridHelper.BuildGridHeader(gridContextValue)}
                    {GridHelper.BuildGridRows(gridContextValue)}
                </Table>
            </GridContext.Provider>
        </>
    );
}

export default Grid;
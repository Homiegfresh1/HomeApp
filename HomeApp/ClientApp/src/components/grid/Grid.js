import * as GridHelper from "./GridHelper.js";
import { Button, Table } from "reactstrap";
import { useState, useMemo } from "react";
import Window from "../window/Window.js";
import React from "react";
import "./Grid.css";

export const GridContext = React.createContext();

const Grid = ({ addNewButtonText, columns, gridData, setGridData, form }) => {
    const [windowSettings, setWindowSettings] = useState({ currentItem: null, visible: false });
    
    const gridContextValue = {
        gridData,
        setGridData,
        columns,
        windowSettings,
        setWindowSettings
    }

    return (
        <>
            <GridContext.Provider value={gridContextValue}>
                {
                    windowSettings.visible ?
                        <Window >
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
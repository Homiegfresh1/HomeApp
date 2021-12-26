import { Container } from "reactstrap";
import "./Window.css";
import Draggable from "react-draggable";
import * as WindowHelper from "./WindowHelper.js";
import * as React from "react";

export const WindowContext = React.createContext();

const Window = ({ children, setWindowSettingFunc, gridData, setGridData, formData, title }) => {
    var windowContextValue = {
        formData,
        setWindowSettingFunc,
        gridData,
        setGridData
    };

    return (
        <Draggable>
            <div className="window">
                <Container>
                    {/*<h2>{title}</h2>*/}
                    <WindowContext.Provider value={windowContextValue}>
                        {children}
                        {WindowHelper.BuildWindowButtons(windowContextValue)}
                    </WindowContext.Provider>
                </Container>
            </div>
        </Draggable>
    );
}

export default Window;
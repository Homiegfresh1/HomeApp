import { Container } from "reactstrap";
import "./Window.css";
import Draggable from "react-draggable";
import * as WindowHelper from "./WindowHelper.js";
import * as React from "react";

export const WindowContext = React.createContext();

const Window = ({ children }) => {
    return (
        <Draggable>
            <div className="window">
                <Container>
                    {children}
                </Container>
            </div>
        </Draggable>
    );
}

export default Window;
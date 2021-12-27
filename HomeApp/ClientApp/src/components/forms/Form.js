import { Form as BoostrapForm } from "reactstrap";
import React, { useContext, useMemo, useState } from "react";
import { WindowContext } from "../window/Window.js";
import { BuildWindowButtons } from "../window/WindowHelper.js";

export const FormContext = React.createContext();

const Form = ({ children: formComponent }) => {
    const windowContext = useContext(WindowContext);
    const { formData: initFormData } = windowContext;
    const [formData, setFormData] = useState(initFormData);
    const addNewItem = initFormData ? false : true;
    const formContextValue = {
        formData,
        setFormData,
        addNewItem
    }
    const windowButtons = useMemo(() => BuildWindowButtons(windowContext, formContextValue), [formData]);

    return (
        <BoostrapForm>
            <FormContext.Provider value={formContextValue}>
                {formComponent}
                {windowButtons}
            </FormContext.Provider>
        </BoostrapForm>
    );
}

export default Form;
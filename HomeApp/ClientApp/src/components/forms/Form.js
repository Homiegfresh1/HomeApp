import { Form as BoostrapForm } from "reactstrap";
import React, { useContext, useMemo, useState } from "react";
import { BuildWindowButtons } from "../window/WindowHelper.js";
import { GridContext } from "../grid/Grid";

export const FormContext = React.createContext();

const Form = ({ children: formComponent }) => {
    const gridContext = useContext(GridContext);
    const initFormData = gridContext?.windowSettings.currentItem;
    const [formData, setFormData] = useState(initFormData ?? {});
    const addNewItem = initFormData ? false : true;
    const formContextValue = {
        formData,
        setFormData,
        addNewItem
    }
    const windowButtons = useMemo(() => BuildWindowButtons(gridContext, formContextValue), [formData]);

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
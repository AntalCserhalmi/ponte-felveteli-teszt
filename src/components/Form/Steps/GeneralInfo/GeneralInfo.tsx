import { ChangeEvent, useState } from "react";
import type { FormData, SetFormData } from "../../Form";
import classes from "./GeneralInfo.module.css";

const GeneralInfo = (props: {formData: FormData, setFormData: SetFormData}) => {

    const [ name, setName ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const [ errorMessageName, setErrorMessageName ] = useState<string>("");
    const [ errorMessageDescription, setErrorMessageDescription ] = useState<string>("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setName(name);
        
        if (name.length > 255){
            setErrorMessageName("A projekt neve nem lehet hosszabb mint 255 karakter!");
            props.setFormData({...props.formData, buttonState: true});
        }else if (name.length < 3){
            setErrorMessageName("A projekt neve legalább 3 karakter hosszú legyen!");
            props.setFormData({...props.formData, buttonState: true});
        }else{
            setErrorMessageName("");
            props.setFormData({...props.formData, name: name, buttonState: false});
        }
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const description = event.target.value;
        setDescription(description);

        if (description.length > 500){
            setErrorMessageDescription("A projekt leírás nem lehet hosszabb mint 500 karakter!");
            props.setFormData({...props.formData, buttonState: true});
        }else if (description.length !== 0 && description.length < 50){
            setErrorMessageDescription("A projekt leírásnak vagy üresnek, vagy minimum 50 karakter hosszúnak kell lennie!");
            props.setFormData({...props.formData, buttonState: true});
        }else{
            setErrorMessageDescription("");
            props.setFormData({...props.formData, description: description, buttonState: false});
        }
    };

    return(
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor="projectName">Projekt Neve<span style={{color: "red"}}>*</span></label>
            <input 
                id="projectName" 
                className={classes.input} 
                type="text" 
                placeholder="Projekt Neve..." 
                onChange={(e) => handleNameChange(e)}
                value={errorMessageName === ""? props.formData.name: name}
            />
            <span hidden={errorMessageName == ""} className={classes.errorMessage}>{errorMessageName}</span>

            
            <label className={classes.label} htmlFor="projectDescription">Projekt Leírása</label>
            <input 
                id="projectDescription" 
                className={classes.input} 
                type="text" 
                placeholder="Projekt Leírása..." 
                onChange={(e) => handleDescriptionChange(e)}
                value={errorMessageDescription === ""? props.formData.description: description}
            />
            <span hidden={errorMessageDescription == ""} className={classes.errorMessage}>{errorMessageDescription}</span>
            
        </div>
    );
};


export default GeneralInfo;
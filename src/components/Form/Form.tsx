import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemoryProjects } from "../../hooks/useMemoryProjects";
import classes from "./Form.module.css";
import GeneralInfo from "./Steps/GeneralInfo/GeneralInfo";
import Employees from "./Steps/Employees/Employees";
import Links from "./Steps/Links/Links";

export type Employee = {
    name: string;
    position: string;
}

export type FormData = {
    name: string;
    description: string;
    employees: Array<Employee>;
    links: Array<string>;
    error: boolean;
}

export type SetFormData = (formData: FormData) => void;

const Form = ():JSX.Element => {

    const navigate = useNavigate();
    const { uploadProject } = useMemoryProjects();
    const [ nextButtonState, setNextButtonState ] = useState<boolean>(false);
    const [ page, setPage ] = useState<number>(0);
    const [ formData, setFormData ] = useState<FormData>({
        name: "",
        description: "",
        employees: new Array<Employee>(),
        links: new Array<string>(),
        error: false
    });
    const FormTitles = ["Általános információk", "Dolgozó kollégák", "Fontos linkek"];
    
    const PageDisplay = (): JSX.Element => {
        switch(page){
            case 0: {
                return <GeneralInfo formData={formData} setFormData={setFormData}/>;
            }

            case 1: {
                return <Employees formData={formData} setFormData={setFormData}/>;
            }

            case 2: {
                return <Links formData={formData} setFormData={setFormData}/>;
            }

            default: {
                return <GeneralInfo formData={formData} setFormData={setFormData}/>;
            }
        }
    };

    const sumbitForm = async () => {
        try{
            await uploadProject({
                title: formData.name,
                description: formData.description,
                employees: formData.employees,
                links: formData.links
            });

            navigate("/");
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        if (formData.error){
            setNextButtonState(true);
        }else if (page === FormTitles.length - 1){
            setNextButtonState(true);
        }else if(formData.name === ""){
            setNextButtonState(true);
        }else{
            setNextButtonState(false);
        }
    }, [formData.error]);

    return (
        <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.progressbar}>
                    <div
                        style={{width: page === 0? "33.3%": page === 1? "66.6%": "100%"}}
                    ></div>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <h1 className={classes.title}>{FormTitles[page]}</h1>
                    </div>
                    <div className={classes.body}>{PageDisplay()}</div>
                    <div className={classes.footer}>
                        <button
                            className={classes.formBtn}
                            disabled={page === 0}
                            onClick={() => {
                                formData.error = false;
                                setPage(last => last - 1);
                            }}
                        >Vissza</button>
                        <button 
                            className={classes.formBtn}
                            disabled={nextButtonState}
                            onClick={() => {
                                if (page === FormTitles.length - 1){
                                    sumbitForm();
                                }else{
                                    setPage(last => last + 1);
                                }
                            }}
                        >{page === FormTitles.length - 1? "Mentés": "Tovább"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;